import{D as d}from"./HardwareInstallation-79ea1bc6.js";import{_ as u,u as i,k as p,l,G as t,E as m,y as v}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceVarta",mixins:[d]},b={class:"device-varta"};function _(o,e,c,g,w,V){const r=i("openwb-base-heading"),s=i("openwb-base-text-input"),a=i("openwb-base-number-input");return p(),l("div",b,[t(r,null,{default:m(()=>e[3]||(e[3]=[v(" Einstellungen für Varta ")])),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(a,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(a,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const y=u(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/varta/varta/device.vue"]]);export{y as default};
