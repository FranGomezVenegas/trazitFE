define(["exports","./config-process.js"],function(_exports,_configProcess){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.productionLot=void 0;const productionLot={//sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
//samplesWhereFieldsName:'current_stage|sample_config_code not in*',
//samplesWhereFieldsValue:'Sampling|'+personal_smp_template,
//sampleFieldToSort:'sample_id desc',
sampleFieldToDisplay:[{name:"lot_name",label_en:"Name",label_es:"Nombre",width:"80%",sort:!1,filter:!0},{name:"created_on",label_en:"Created On",label_es:"F. Creaci\xF3n",width:"20%",sort:!0,filter:!1//, {name: 'created_by', label_en:'Created By', label_es: 'Creador', width:'5%', sort:false, filter:true}
//, {name: 'closed_on', label_en:'Closed On', label_es: 'F. Cierre', width:'10%', sort:true, filter:false}
//, {name: 'closed_by', label_en:'Closed By', label_es: 'Cerrado Por', width:'20px', sort:false, filter:true}
}],displayRefreshButton:!0,autorefreshWindow:!1,tableTitle:{display:!0,label:{label_en:"Samples Pending Sampling Date",label_es:"Muestras pendientes de la fecha de muestreo"}},displayButtons:!0,buttons:[{name:"EM_NEW_PRODUCTION_LOT",label_en:"New",label_es:"Nuevo",type:"icon-button",icon_name:"icons:create-new-folder",requires_selected_object:!1,read_only:!1},{name:"EM_ACTIVATE_PRODUCTION_LOT",label_en:"Activate",label_es:"Activar",type:"icon-button",icon_name:"icons:alarm-add",requires_selected_object:!1,read_only:!1},{name:"EM_DEACTIVATE_PRODUCTION_LOT",label_en:"Deactivate",label_es:"Desactivar",type:"icon-button",icon_name:"alarm-off",requires_selected_object:!0,read_only:!1}]};_exports.productionLot=productionLot;const documentContainerEmDemoAProductionLotStyle=document.createElement("em-demo-a-production-lot-style");documentContainerEmDemoAProductionLotStyle.setAttribute("style","display: none;");documentContainerEmDemoAProductionLotStyle.innerHTML=`
  <dom-module id="em-demo-a-production-lot-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
      }
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:3vw;
      }         
      div.main{
        width:95%;
      }     
      div.buttonGroup {
        display: flex
      }      
    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerEmDemoAProductionLotStyle)});