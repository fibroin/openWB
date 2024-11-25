import{D as v}from"./HardwareInstallation-79ea1bc6.js";import{_ as g,u as o,k as m,l as _,G as s,E as u,y as i,x as n,F as l}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const A={name:"DeviceSonnenbatterie",mixins:[v],computed:{linkRestApi1(){return"http://"+this.device.configuration.ip_address+":7979/rest/devices/battery"},linkRestApi2(){return"http://"+this.device.configuration.ip_address+":7979/rest/devices/battery/M05"},linkJsonApi1(){return"http://"+this.device.configuration.ip_address+"/api/v1/status"},linkJsonApi2(){return"http://"+this.device.configuration.ip_address+"/api/v2/status"}}},k={class:"device-sonnenbatterie"},w={style:{display:"block"}},B=["href"],J=["href"],R=["href"],I=["href"];function P(r,e,x,h,C,t){const d=o("openwb-base-heading"),p=o("openwb-base-alert"),f=o("openwb-base-text-input"),b=o("openwb-base-select-input");return m(),_("div",k,[s(d,null,{default:u(()=>e[2]||(e[2]=[i(" Einstellungen für SonnenBatterie ")])),_:1}),s(p,{subtype:"info"},{default:u(()=>e[3]||(e[3]=[i(' Die Leistung steht nur in den Varianten "Rest-API 2" und "JSON-API" zur Verfügung. ')])),_:1}),s(f,{title:"IP oder Hostname",subtype:"host",required:"","model-value":r.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=a=>r.updateConfiguration(a,"configuration.ip_address"))},null,8,["model-value"]),s(b,{title:"Datenverbindung",required:"","not-selected":"Bitte auswählen",options:[{value:0,text:"Rest-API 1 (z.B. ECO 4)"},{value:2,text:"Rest-API 2 (z.B. ECO 6)"},{value:1,text:"JSON-API v1(z.B. ECO 8 oder 10)"},{value:3,text:"JSON-API v2(z.B. ECO 8 oder 10)"}],"model-value":r.device.configuration.variant,"onUpdate:modelValue":e[1]||(e[1]=a=>r.updateConfiguration(a,"configuration.variant"))},{help:u(()=>[n("span",w,[e[4]||(e[4]=i(" Je nach SonnenBatterie muss die richtige Datenverbindung ausgewählt werden. Folgende URLs werden zum Abruf der Daten genutzt und können auch manuell über einen Browser abgefragt werden, um die richtige Einstellung zu finden:")),e[5]||(e[5]=n("br",null,null,-1)),e[6]||(e[6]=i(" Rest-API 1: ")),n("a",{href:t.linkRestApi1,target:"_blank",rel:"noopener noreferrer"},l(t.linkRestApi1),9,B),e[7]||(e[7]=n("br",null,null,-1)),e[8]||(e[8]=i(" Rest-API 2: ")),n("a",{href:t.linkRestApi2,target:"_blank",rel:"noopener noreferrer"},l(t.linkRestApi2),9,J),e[9]||(e[9]=n("br",null,null,-1)),e[10]||(e[10]=i(" JSON-API v1: ")),n("a",{href:t.linkJsonApi1,target:"_blank",rel:"noopener noreferrer"},l(t.linkJsonApi1),9,R),e[11]||(e[11]=n("br",null,null,-1)),e[12]||(e[12]=i(" JSON-API v2: ")),n("a",{href:t.linkJsonApi2,target:"_blank",rel:"noopener noreferrer"},l(t.linkJsonApi2),9,I)])]),_:1},8,["model-value"])])}const U=g(A,[["render",P],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sonnen/sonnenbatterie/device.vue"]]);export{U as default};
