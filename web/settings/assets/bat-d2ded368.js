import{C as r}from"./HardwareInstallation-79ea1bc6.js";import{_ as p,u as n,k as m,l,G as t,E as u,y as d}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolisBat",mixins:[r]},_={class:"device-solis-bat"};function b(o,e,f,v,g,w){const i=n("openwb-base-heading"),s=n("openwb-base-number-input");return m(),l("div",_,[t(i,null,{default:u(()=>e[1]||(e[1]=[d(" Einstellungen für Solis Batteriespeicher ")])),_:1}),t(s,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=a=>o.updateConfiguration(a,"configuration.modbus_id"))},null,8,["model-value"])])}const M=p(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solis/solis/bat.vue"]]);export{M as default};
