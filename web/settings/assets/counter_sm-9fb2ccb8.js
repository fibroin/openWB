import{C as p}from"./HardwareInstallation-79ea1bc6.js";import{_ as f,u as i,k as g,l as c,G as o,E as a,y as t,x as l,F as b}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-e2dbf7bf.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceFroniusCounterSM",mixins:[p],computed:{meterRealtimeUrl:{get(){return`http://${this.device.configuration.ip_address}/solar_api/v1/GetMeterRealtimeData.cgi?Scope=System`}}}},v={class:"device-fronius-counter-sm"},w=["href"];function D(n,e,M,k,S,s){const d=i("openwb-base-heading"),m=i("openwb-base-select-input"),u=i("openwb-base-number-input");return g(),c("div",v,[o(d,null,{default:a(()=>e[2]||(e[2]=[t(" Einstellungen für Fronius SmartMeter ")])),_:1}),o(m,{title:"Kompatibilitätsmodus","not-selected":"Bitte auswählen",required:"",options:[{value:0,text:"Aus"},{value:1,text:"Variante 1"},{value:2,text:"Variante 2"}],"model-value":n.component.configuration.variant,"onUpdate:modelValue":e[0]||(e[0]=r=>n.updateConfiguration(r,"configuration.variant"))},{help:a(()=>e[3]||(e[3]=[t(" Gegebenenfalls auch für alte Modelle nach einem Softwareupdate erforderlich. Fronius hat derzeit keine Konsistente Schnittstelle. Speziell beim Gen24 kann Variante 1 oder 2 erforderlich sein. Nach speichern sollten nach etwa 10-20 Sekunden Daten angezeigt werden. Ist dies nicht der Fall die andere Variante ausprobieren. ")])),_:1},8,["model-value"]),o(u,{title:"Meter ID",required:"",min:"0",max:"65535","model-value":n.component.configuration.meter_id,"onUpdate:modelValue":e[1]||(e[1]=r=>n.updateConfiguration(r,"configuration.meter_id"))},{help:a(()=>[e[4]||(e[4]=t(" Die Meter ID des SmartMeters. Diese ist normalerweise 1. Bei mehreren SmartMetern im System kann es notwendig sein, die Meter ID zu ändern. Zur Ermittlung kann der folgende Link verwendet werden. Die Meter ID kann den zurückgegebenen JSON Daten entnommen werden. ")),l("a",{href:s.meterRealtimeUrl,target:"_blank",rel:"noopener noreferrer"},b(s.meterRealtimeUrl),9,w),e[5]||(e[5]=l("br",null,null,-1)),e[6]||(e[6]=t(' Im Abschnitt "Body" -> "Data" werden die installierten SmartMeter mit aktuellen Messwerten angezeigt. Die Meter ID ist die Zahl vor dem Doppelpunkt und den zugehörigen Messwerten. '))]),_:1},8,["model-value"])])}const N=f(_,[["render",D],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fronius/fronius/counter_sm.vue"]]);export{N as default};
