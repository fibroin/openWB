import{C as a}from"./index-e2dbf7bf.js";import o from"./InstallAssistantStepTemplate-c95c4891.js";import{_ as r,u as l,k as m,z as p,E as d,x as n}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";const u={name:"InstallAssistantStep10",components:{InstallAssistantStepTemplate:o},mixins:[a],emits:["switchPage","endAssistant","sendCommand"],data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){},previousPage(){this.$emit("switchPage",9)},sendCommand(t){this.$emit("sendCommand",t)},endAssistant(){this.$emit("endAssistant")}}};function g(t,s,c,f,A,e){const i=l("InstallAssistantStepTemplate");return m(),p(i,{title:"Abgeschlossen","hide-next":!0,onNextPage:e.nextPage,onPreviousPage:e.previousPage,onEndAssistant:e.endAssistant},{content:d(()=>s[0]||(s[0]=[n("h2",null,"Die Grundkonfiguration ist abgeschlossen.",-1),n("p",null," Die grundlegende Konfiguration der openWB ist abgeschlossen. Du wirst mit Beendigung dieses Assistenten auf die Statusseite weitergeleitet. Bitte überprüfe die dargestellten Informationen und passe bei Unstimmigkeiten die Einstellungen in den jeweiligen Konfigurationsseiten an (openWB -> Einstellungen -> Konfiguration). ",-1)])),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const w=r(u,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep10.vue"]]);export{w as default};
