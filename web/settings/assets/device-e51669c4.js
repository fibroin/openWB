import{D as p}from"./HardwareInstallation-79ea1bc6.js";import{_ as m,u as i,k as v,l as b,G as n,E as s,y as u}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceGrowatt",mixins:[p]},g={class:"device-growatt"};function _(o,e,c,w,V,C){const a=i("openwb-base-heading"),d=i("openwb-base-text-input"),r=i("openwb-base-number-input"),l=i("openwb-base-select-input");return v(),b("div",g,[n(a,null,{default:s(()=>e[4]||(e[4]=[u("Einstellungen für Growatt")])),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.ip_address"))},null,8,["model-value"]),n(r,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.port"))},null,8,["model-value"]),n(r,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.modbus_id"))},null,8,["model-value"]),n(l,{title:"Version","not-selected":"Bitte auswählen",options:[{value:"MAX",text:"MAX Series"},{value:"TL-X",text:"TL-X Inverter"}],"model-value":o.device.configuration.version,required:"","onUpdate:modelValue":e[3]||(e[3]=t=>o.updateConfiguration(t,"configuration.version"))},{help:s(()=>e[5]||(e[5]=[u(" Die Wahl der API-Version beeinflusst die Auslesung der Speicherleistung und der Import/ Export Werte des Zählers. ")])),_:1},8,["model-value"])])}const X=m(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/growatt/growatt/device.vue"]]);export{X as default};
