import{C as r}from"./HardwareInstallation-79ea1bc6.js";import{_ as a,u as t,k as l,l as u,G as n,E as m,y as c}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceOpenwbEvukitCounter",mixins:[r]},v={class:"device-openwb-evukit-counter"};function _(o,e,f,b,w,x){const i=t("openwb-base-heading"),s=t("openwb-base-select-input");return l(),u("div",v,[n(i,null,{default:m(()=>e[1]||(e[1]=[c(" Einstellungen für openWB EVU-Kit Zähler ")])),_:1}),n(s,{title:"Zählermodell","not-selected":"Bitte auswählen",options:[{value:3,text:"B23"},{value:1,text:"Lovato"},{value:0,text:"MPM3PM"},{value:2,text:"SDM630/SDM72D-M"}],"model-value":o.component.configuration.version,required:"","onUpdate:modelValue":e[0]||(e[0]=p=>o.updateConfiguration(p,"configuration.version"))},null,8,["model-value"])])}const $=a(d,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_evu_kit/counter.vue"]]);export{$ as default};
