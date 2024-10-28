from dataclasses import dataclass
from modules.io_actions.groups import ActionGroup


@dataclass
class DimmingDirectControlConfig:
    io_device: int = 0
    digital_input: int = 0
    cp_id: int = None


class DimmingDirectControlSetup:
    def __init__(self,
                 name: str = "Dimmen per Direktsteuerung",
                 type: str = "dimming_direct_control",
                 id: int = 0,
                 config: DimmingDirectControlConfig = None):
        self.name = name
        self.type = type
        self.id = id
        self.config = config or DimmingDirectControlConfig()
        self.group = ActionGroup.CONTROLLABLE_CONSUMERS_ACTIONS.value
