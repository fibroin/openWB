import{C as p}from"./HardwareInstallation-79ea1bc6.js";import{_ as u,u as t,k as l,l as d,G as r,E as i,y as n,x as c}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceSmahmCounter",mixins:[p]},f={class:"device-smahm-counter"};function b(o,e,g,v,M,h){const s=t("openwb-base-heading"),a=t("openwb-base-number-input");return l(),d("div",f,[r(s,null,{default:i(()=>e[1]||(e[1]=[n(" Einstellungen für SMA-HM/EM Zähler ")])),_:1}),r(a,{title:"Seriennummer","model-value":o.component.configuration.serials,"onUpdate:modelValue":e[0]||(e[0]=m=>o.updateConfiguration(m,"configuration.serials"))},{help:i(()=>e[2]||(e[2]=[n(" Eine Seriennummer ist nur erforderlich, wenn mehrere SMA HomeManager in Betrieb sind."),c("br",null,null,-1),n(" Funktioniert auch mit Energy Meter anstatt Home Manager. ")])),_:1},8,["model-value"])])}const H=u(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma/sma_shm/counter.vue"]]);export{H as default};
