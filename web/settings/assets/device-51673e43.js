import{D as m}from"./HardwareInstallation-79ea1bc6.js";import{_ as l,u as i,k as b,l as f,G as t,E as r,y as a}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceSiemens",mixins:[m]},v={class:"device-siemens"};function c(o,e,g,w,C,x){const p=i("openwb-base-heading"),d=i("openwb-base-alert"),u=i("openwb-base-text-input"),s=i("openwb-base-number-input");return b(),f("div",v,[t(p,null,{default:r(()=>e[3]||(e[3]=[a(" Einstellungen für Siemens ")])),_:1}),t(d,{subtype:"info"},{default:r(()=>e[4]||(e[4]=[a(" Im Siemens-Speicher muss die Schnittstelle openWB gewählt werden. ")])),_:1}),t(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(s,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(s,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const I=l(_,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/siemens/siemens/device.vue"]]);export{I as default};
