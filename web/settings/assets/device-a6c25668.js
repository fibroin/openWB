import{D as a}from"./HardwareInstallation-79ea1bc6.js";import{_ as p,u as s,k as d,l as u,G as n,E as l,y as m}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceDiscovergy",mixins:[a]},v={class:"device-discovergy"};function f(o,e,g,_,b,w){const r=s("openwb-base-heading"),i=s("openwb-base-text-input");return d(),u("div",v,[n(r,null,{default:l(()=>e[2]||(e[2]=[m(" Einstellungen für Discovergy ")])),_:1}),n(i,{title:"Benutzername",subtype:"user",required:"","model-value":o.device.configuration.user,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),n(i,{title:"Passwort",subtype:"password",required:"","model-value":o.device.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const q=p(c,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/discovergy/device.vue"]]);export{q as default};
