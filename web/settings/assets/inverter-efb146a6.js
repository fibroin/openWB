import{C as m}from"./HardwareInstallation-79ea1bc6.js";import{_ as d,u as o,k as u,l,G as t,E as i,y as r}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceEnphaseInverter",mixins:[m]},_={class:"device-enphase-inverter"};function f(n,e,v,b,g,E){const s=o("openwb-base-heading"),p=o("openwb-base-number-input");return u(),l("div",_,[t(s,null,{default:i(()=>e[1]||(e[1]=[r(" Einstellungen für Enphase Envoy / IQ Gateway Wechselrichter ")])),_:1}),t(p,{title:"EID",required:"","model-value":n.component.configuration.eid,"onUpdate:modelValue":e[0]||(e[0]=a=>n.updateConfiguration(a,"configuration.eid"))},{help:i(()=>e[2]||(e[2]=[r(' EID für "production" ')])),_:1},8,["model-value"])])}const D=d(c,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/enphase/inverter.vue"]]);export{D as default};
