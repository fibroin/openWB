import{l as x,d as C,a0 as A,F as q}from"./vendor-fortawesome-3d19d475.js";import{C as z}from"./index-e2dbf7bf.js";import{_ as D,u,k as m,l as b,G as o,E as a,x as f,N as k,y as s,F as E,z as M,B as T,M as W}from"./vendor-06e11d0e.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";x.add(C,A);const y={name:"OpenwbMqttBridgeConfigurationView",components:{FontAwesomeIcon:q},mixins:[z],emits:["sendCommand","save","reset"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/mqtt/bridge/+"],showMqttBridgeModal:!1,modalMqttBridgeIndex:void 0}},computed:{configuredMqttBridges:{get(){let t=this.getWildcardTopics("openWB/system/mqtt/bridge/+");for(const[e,v]of Object.entries(t))v.remote.is_openwb_cloud&&delete t[e];return t}}},methods:{addMqttBridge(t){t.stopPropagation(),this.$emit("sendCommand",{command:"addMqttBridge",data:{}})},getMqttBridgeIndex(t){return parseInt(t.match(/(?:\/)(\d+)$/)[1])},removeMqttBridgeModal(t,e){e.stopPropagation(),this.modalMqttBridgeIndex=this.getMqttBridgeIndex(t),this.showMqttBridgeModal=!0},removeMqttBridge(t,e){this.showMqttBridgeModal=!1,e=="confirm"&&(console.info("request removal of mqtt bridge '"+t+"'"),this.$emit("sendCommand",{command:"removeMqttBridge",data:{bridge:t}}))},getMqttBridgeName(t){return this.$store.state.mqtt["openWB/system/mqtt/bridge/"+t]?this.$store.state.mqtt["openWB/system/mqtt/bridge/"+t].name:t}}},P={class:"mqttBridgeConfiguration"},Q={key:0},Z={key:1},I=["name"];function N(t,e,v,F,g,i){const U=u("openwb-base-modal-dialog"),c=u("openwb-base-alert"),h=u("font-awesome-icon"),w=u("openwb-base-avatar"),p=u("openwb-base-text-input"),d=u("openwb-base-button-group-input"),V=u("openwb-base-heading"),B=u("openwb-base-number-input"),S=u("openwb-base-submit-buttons"),_=u("openwb-base-card");return m(),b(k,null,[o(U,{show:g.showMqttBridgeModal,title:"MQTT-Brücke löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:e[0]||(e[0]=r=>i.removeMqttBridge(g.modalMqttBridgeIndex,r))},{default:a(()=>[s(' Wollen Sie die MQTT-Brücke "'+E(i.getMqttBridgeName(g.modalMqttBridgeIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),f("div",P,[o(c,{subtype:"danger"},{default:a(()=>e[1]||(e[1]=[s(" ACHTUNG: Die Konfiguration einer MQTT-Brücke erlaubt allen Nutzern mit Zugang zum entfernten MQTT-Server alle weitergeleiteten Daten dieser openWB einzusehen!"),f("br",null,null,-1),s(' Es wird dringend empfohlen, dies nur für nicht-öffentliche MQTT-Server unter Verwendung starker Transport-Verschlüsselung (TLS) mit persönlichem Login und strenger Zugriffskontrolle (zumindest für die MQTT-Themen unterhalb von "Entfernter Präfix") zu aktivieren! ')])),_:1}),o(_,{title:"Konfigurierte MQTT-Brücken"},{actions:a(()=>[t.$store.state.mqtt["openWB/general/extern"]===!1?(m(),M(w,{key:0,class:"bg-success clickable",onClick:i.addMqttBridge},{default:a(()=>[o(h,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):T("",!0)]),default:a(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(m(),b("div",Q,[o(c,{subtype:"info"},{default:a(()=>e[2]||(e[2]=[s(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(m(),b("div",Z,[Object.keys(i.configuredMqttBridges).length===0?(m(),M(c,{key:0,subtype:"info"},{default:a(()=>e[3]||(e[3]=[s(" Es wurde noch keine MQTT-Brücke konfiguriert. ")])),_:1})):T("",!0),(m(!0),b(k,null,W(i.configuredMqttBridges,(r,l)=>(m(),b("form",{key:l,name:"mqttBridgeConfigurationForm"+i.getMqttBridgeIndex(l)},[o(_,{title:r.name,collapsible:!0,collapsed:!0,subtype:"primary"},{actions:a(()=>[o(w,{class:"bg-danger clickable",onClick:n=>i.removeMqttBridgeModal(l,n)},{default:a(()=>[o(h,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])]),footer:a(()=>[o(S,{"form-name":"mqttBridgeConfigurationForm"+i.getMqttBridgeIndex(l),"hide-defaults":!0,onSave:n=>t.$emit("save",[l]),onReset:n=>t.$emit("reset",[l])},null,8,["form-name","onSave","onReset"])]),default:a(()=>[o(p,{title:"Bezeichnung",subtype:"text",required:"",pattern:"[A-Za-z0-9]+","model-value":r.name,"onUpdate:modelValue":n=>t.updateState(l,n,"name")},{help:a(()=>[...e[4]||(e[4]=[s(" Die Bezeichnung darf nur aus Buchstaben ohne Umlaute und Zahlen bestehen. ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),o(d,{title:"Brücke aktivieren",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":r.active,"onUpdate:modelValue":n=>t.updateState(l,n,"active")},null,8,["model-value","onUpdate:modelValue"]),e[14]||(e[14]=f("hr",null,null,-1)),o(V,null,{default:a(()=>[...e[5]||(e[5]=[s(" Einstellungen zur Verbindung ")])]),_:1}),o(p,{title:"Entfernter Server",subtype:"host",required:"","model-value":r.remote.host,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.host")},null,8,["model-value","onUpdate:modelValue"]),o(B,{title:"Entfernter Port",required:"",min:1,max:65535,"model-value":r.remote.port,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.port")},null,8,["model-value","onUpdate:modelValue"]),o(p,{title:"Benutzername",subtype:"user",required:"",pattern:"[a-zA-Z0-9_\\-+.]+","model-value":r.remote.username,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.username")},null,8,["model-value","onUpdate:modelValue"]),o(p,{title:"Passwort",subtype:"password",required:"","model-value":r.remote.password,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.password")},null,8,["model-value","onUpdate:modelValue"]),o(p,{title:"Präfix",subtype:"text",pattern:"[A-Za-z0-9_\\-]+(\\/[A-Za-z0-9_\\-]+)?\\/","model-value":r.remote.prefix,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.prefix")},{help:a(()=>[...e[6]||(e[6]=[s(' Das Präfix darf nur aus Buchstaben ohne Umlaute, Zahlen, Binde- und Unterstrichen bestehen. Optional kann mit einem Schrägstrich "/" eine Topic-Struktur abgebildet werden. Am Ende des Präfixes muss ein Schrägstrich "/" stehen. ')])]),_:2},1032,["model-value","onUpdate:modelValue"]),o(p,{title:"Client ID",subtype:"text",required:"",pattern:"[A-Za-z0-9_\\-]+","model-value":r.remote.client_id,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.client_id")},{help:a(()=>[...e[7]||(e[7]=[s(" Die Client ID darf nur aus Buchstaben ohne Umlaute, Zahlen, Binde- und Unterstrichen bestehen. ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),o(d,{title:"MQTT Protokoll",required:"required",buttons:[{buttonValue:"mqttv31",text:"v3.1"},{buttonValue:"mqttv311",text:"v3.1.1"}],"model-value":r.remote.protocol,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.protocol")},null,8,["model-value","onUpdate:modelValue"]),o(d,{title:"TLS Version",buttons:[{buttonValue:"auto",text:"Automatisch",class:"btn-outline-success"},{buttonValue:"tlsv1.0",text:"v1.0",class:"btn-outline-warning"},{buttonValue:"tlsv1.1",text:"v1.1",class:"btn-outline-warning"},{buttonValue:"tlsv1.2",text:"v1.2"}],"model-value":r.remote.tls_version,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.tls_version")},{help:a(()=>[...e[8]||(e[8]=[s(' In der Einstellung "Automatisch" wird die Version zwischen Client und Server ausgehandelt. Wenn erforderlich, kann eine spezielle Version erzwungen werden. Versionen kleiner 1.2 gelten als veraltet und sollten nicht mehr verwendet werden. ')])]),_:2},1032,["model-value","onUpdate:modelValue"]),o(d,{title:"Brücke signalisieren",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":r.remote.try_private,"onUpdate:modelValue":n=>t.updateState(l,n,"remote.try_private")},{help:a(()=>[...e[9]||(e[9]=[s(" Aktiviert eine proprietäre Protokoll-Erweiterung des Mosquitto Brokers, welche dem entfernten Broker signalisiert, dass es sich um eine MQTT Brücke handelt. Ergibt bessere Leistung mit Mosquitto-Brokern, ist jedoch inkompatibel mit vielen anderen MQTT-Brokern. Daher bitte nur aktivieren, wenn der Ziel-Broker sicher ein Mosquitto-Broker ist. ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),e[15]||(e[15]=f("hr",null,null,-1)),o(V,null,{default:a(()=>[...e[10]||(e[10]=[s(" Datenübertragung ")])]),_:1}),o(d,{title:"Alle Statusdaten",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":r.data_transfer.status,"onUpdate:modelValue":n=>t.updateState(l,n,"data_transfer.status")},{help:a(()=>[...e[11]||(e[11]=[s(" ToDo... ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),o(d,{title:"Datenserien für Diagramme",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":r.data_transfer.graph,"onUpdate:modelValue":n=>t.updateState(l,n,"data_transfer.graph")},{help:a(()=>[...e[12]||(e[12]=[s(" ToDo... ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),o(d,{title:"Fernkonfiguration ermöglichen",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":r.data_transfer.configuration,"onUpdate:modelValue":n=>t.updateState(l,n,"data_transfer.configuration")},{help:a(()=>[...e[13]||(e[13]=[s(" ToDo... ")])]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1032,["title"])],8,I))),128))]))]),_:1})])],64)}const J=D(y,[["render",N],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/MqttBridgeConfig.vue"]]);export{J as default};
