import{D as u}from"./HardwareInstallation-79ea1bc6.js";import{_ as m,u as n,k as c,l as f,G as o,E as l,y as s}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceShelly",mixins:[u]},v={class:"device-shelly"};function b(t,e,g,h,w,y){const r=n("openwb-base-heading"),a=n("openwb-base-alert"),p=n("openwb-base-text-input"),d=n("openwb-base-select-input");return c(),f("div",v,[o(r,null,{default:l(()=>e[2]||(e[2]=[s(" Einstellungen für Shelly ")])),_:1}),o(a,{subtype:"info"},{default:l(()=>e[3]||(e[3]=[s(" Unterstützt werden theoretisch alle ein- und dreiphasigen Shellys der Generation 1-3. Getestete Modelle sind Shelly 1pm, 1pm plus, Pro Pro 3EM, Plug S. ")])),_:1}),o(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":t.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=i=>t.updateConfiguration(i,"configuration.ip_address"))},null,8,["model-value"]),o(d,{title:"Vorzeichen invertieren","not-selected":"Bitte auswählen",options:[{value:-1,text:"ja"},{value:1,text:"nein"}],"model-value":t.device.configuration.factor,required:"","onUpdate:modelValue":e[1]||(e[1]=i=>t.updateConfiguration(i,"configuration.factor"))},{help:l(()=>e[4]||(e[4]=[s(" Einige Shelly Modelle liefern die Leistung mit umgedrehtem Vorzeichen. Falls dies der Fall sein sollte, das Vorzeichen invertieren. ")])),_:1},8,["model-value"])])}const $=m(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/shelly/shelly/device.vue"]]);export{$ as default};
