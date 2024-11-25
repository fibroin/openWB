import{D as g}from"./OptionalComponents-62f1e823.js";import{_ as m,u as i,k as d,l as f,G as a,E as l,y as u,z as r,B as b}from"./vendor-06e11d0e.js";import"./index-e2dbf7bf.js";import"./vendor-fortawesome-3d19d475.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DisplayThemeCards",mixins:[g]},c={class:"display-theme-cards"};function v(n,e,V,h,y,w){const s=i("openwb-base-heading"),o=i("openwb-base-button-group-input"),p=i("openwb-base-text-input");return d(),f("div",c,[a(s,null,{default:l(()=>e[13]||(e[13]=[u("Bediensperre")])),_:1}),a(o,{title:"Bedienung sperren","model-value":n.displayTheme.configuration.lock_changes,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[0]||(e[0]=t=>n.updateConfiguration(t,"configuration.lock_changes"))},{help:l(()=>e[14]||(e[14]=[u(' Die Bedienung wird automatisch nach der eingestellten Ausschaltzeit (siehe "Display Standby") wieder gesperrt. ')])),_:1},8,["model-value"]),n.displayTheme.configuration.lock_changes?(d(),r(p,{key:0,title:"PIN zur Freigabe",subtype:"password",required:"",pattern:"[0-9]{4,10}","model-value":n.displayTheme.configuration.lock_changes_code,"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateConfiguration(t,"configuration.lock_changes_code"))},{help:l(()=>e[15]||(e[15]=[u(" Der PIN muss aus 4 bis 10 Zahlen bestehen. ")])),_:1},8,["model-value"])):b("",!0),a(s,null,{default:l(()=>e[16]||(e[16]=[u("Ansichten")])),_:1}),a(o,{title:"Übersicht anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_view,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[2]||(e[2]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_view"))},null,8,["model-value"]),a(o,{title:"Energiefluss anzeigen","model-value":n.displayTheme.configuration.enable_energy_flow_view,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[3]||(e[3]=t=>n.updateConfiguration(t,"configuration.enable_energy_flow_view"))},null,8,["model-value"]),a(o,{title:"Ladepunkte anzeigen","model-value":n.displayTheme.configuration.enable_charge_points_view,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[4]||(e[4]=t=>n.updateConfiguration(t,"configuration.enable_charge_points_view"))},null,8,["model-value"]),n.displayTheme.configuration.enable_charge_points_view==!0?(d(),r(o,{key:1,title:"Einfache Ansicht der Ladepunkte","model-value":n.displayTheme.configuration.simple_charge_point_view,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[5]||(e[5]=t=>n.updateConfiguration(t,"configuration.simple_charge_point_view"))},null,8,["model-value"])):b("",!0),a(o,{title:"Status anzeigen","model-value":n.displayTheme.configuration.enable_status_view,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[6]||(e[6]=t=>n.updateConfiguration(t,"configuration.enable_status_view"))},null,8,["model-value"]),a(s,null,{help:l(()=>e[17]||(e[17]=[u(' Hier kann festgelegt werden, welche Daten in den Ansichten "Übersicht" und "Energiefluss" angezeigt werden. ')])),default:l(()=>[e[18]||(e[18]=u(" Datenauswahl "))]),_:1}),a(o,{title:"EVU anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_card_grid,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[7]||(e[7]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_card_grid"))},null,8,["model-value"]),a(o,{title:"Hausverbrauch anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_card_home_consumption,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[8]||(e[8]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_card_home_consumption"))},null,8,["model-value"]),a(o,{title:"PV anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_card_inverter_sum,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[9]||(e[9]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_card_inverter_sum"))},null,8,["model-value"]),a(o,{title:"Batteriespeicher anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_card_battery_sum,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[10]||(e[10]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_card_battery_sum"))},null,8,["model-value"]),a(o,{title:"Ladepunkte anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_card_charge_point_sum,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[11]||(e[11]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_card_charge_point_sum"))},null,8,["model-value"]),a(o,{title:"Fahrzeuge anzeigen","model-value":n.displayTheme.configuration.enable_dashboard_card_vehicles,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[12]||(e[12]=t=>n.updateConfiguration(t,"configuration.enable_dashboard_card_vehicles"))},null,8,["model-value"])])}const x=m(_,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/cards/displayTheme.vue"]]);export{x as default};
