import{E as s}from"./GeneralChargeConfig-ed38b9ef.js";import{_ as l,u as r,k as c,l as p,G as n,E as u,y as f}from"./vendor-06e11d0e.js";import"./index-e2dbf7bf.js";import"./vendor-fortawesome-3d19d475.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const d={name:"ElectricityTariffRabot",mixins:[s]},m={class:"electricity-tariff-rabot"};function _(t,e,b,y,g,v){const a=r("openwb-base-alert"),o=r("openwb-base-text-input");return c(),p("div",m,[n(a,{subtype:"info"},{default:u(()=>e[2]||(e[2]=[f(" Ihre persönlichen Zugangsdaten (Client-ID und Client-Secret) erhalten Sie direkt von Rabot. Behandeln Sie diese Daten wie ein Passwort, da sich darüber auch persönliche Daten aus Ihrem Rabot-Account abfragen lassen! ")])),_:1}),n(o,{title:"Client-ID",subtype:"user",required:"","model-value":t.electricityTariff.configuration.client_id,"onUpdate:modelValue":e[0]||(e[0]=i=>t.updateConfiguration(i,"configuration.client_id"))},null,8,["model-value"]),n(o,{title:"Client-Secret",subtype:"password",required:"","model-value":t.electricityTariff.configuration.client_secret,"onUpdate:modelValue":e[1]||(e[1]=i=>t.updateConfiguration(i,"configuration.client_secret"))},null,8,["model-value"])])}const I=l(d,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/rabot/electricity_tariff.vue"]]);export{I as default};
