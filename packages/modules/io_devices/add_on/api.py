#!/usr/bin/env python3
import logging
from typing import Dict, Tuple

from control import data
from dataclass_utils._dataclass_asdict import asdict
from helpermodules import pub
from helpermodules.broker import BrokerClient
from helpermodules.utils.topic_parser import decode_payload
from modules.common.abstract_device import DeviceDescriptor
from modules.common.component_state import IoState
from modules.common.configurable_io import ConfigurableIo
from modules.io_devices.add_on.config import AddOn

log = logging.getLogger(__name__)
has_gpio = True

try:
    import RPi.GPIO as GPIO
except ImportError:
    has_gpio = False
    log.info("failed to import RPi.GPIO! maybe we are not running on a pi")
    log.warning("RSE disabled!")


def create_io(config: AddOn):
    def read() -> Tuple[bool, bool]:
        return IoStateManager().get(data.data.cp_data[f"cp{config.configuration.cp_num}"].chargepoint_module.config.configuration.ip_address)

    def write(digital_output: Dict[int, int]):
        pub.pub_single(f"openWB/set/io/states/local/set/digital_output", digital_output, hostname=data.data.cp_data[f"cp{config.configuration.cp_num}"].chargepoint_module.config.configuration.ip_address)
        pub.pub_single(f"openWB/set/io/states/{config.id}/set/digital_output", digital_output)

    # if has_gpio:
    #     GPIO.setmode(GPIO.BOARD)
    #     GPIO.setup(7, GPIO.OUT, pull_up_down=GPIO.PUD_UP if config.output["digital"]["7"] else GPIO.PUD_DOWN)    # LED 3
    #     GPIO.setup(16, GPIO.OUT, pull_up_down=GPIO.PUD_UP if config.output["digital"]["16"] else GPIO.PUD_DOWN)  # LED 2
    #     GPIO.setup(18, GPIO.OUT, pull_up_down=GPIO.PUD_UP if config.output["digital"]["18"] else GPIO.PUD_DOWN)  # LED 1
    pub.pub_single(f"openWB/set/system/io/local/config", asdict(config), hostname=data.data.cp_data[f"cp{config.configuration.cp_num}"].chargepoint_module.config.configuration.ip_address)
    return ConfigurableIo(config=config, component_reader=read, component_writer=write)


device_descriptor = DeviceDescriptor(configuration_factory=AddOn)


class IoStateManager:
    def __init__(self) -> None:
        self.io_state = IoState()

    def get(self, host: str) -> IoState:
        BrokerClient("processBrokerBranch", self.on_connect, self.on_message, host,
                     1886 if host == "localhost" else 1883).start_finite_loop()
        return self.io_state

    def on_connect(self, client, userdata, flags, rc):
        """ connect to broker and subscribe to set topics
        """
        client.subscribe('openWB/io/states/local/#', 2)

    def on_message(self, client, userdata, msg):
        setattr(self.io_state, msg.topic.split("/")[-1], decode_payload(msg.payload))
