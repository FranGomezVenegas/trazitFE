define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.progTabCorrectiveActions=void 0;//import {personal_smp_template} from './config-process';
const progTabCorrectiveActions={//sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
//samplesWhereFieldsName:'current_stage|sample_config_code not in*',
//samplesWhereFieldsValue:'Sampling|'+personal_smp_template,
//sampleFieldToSort:'sample_id desc',
fieldToDisplay:[,{name:"result_id",label_en:"Result",label_es:"Resultado",sort:!1,filter:!0,width:"10%"},{name:"created_on",label_en:"Creation",label_es:"Creada",sort:!0,filter:!1,width:"15%"},{name:"location_name",label_en:"Location",label_es:"Ubicaci\xF3n",sort:!1,filter:!0,width:"15%"},{name:"method_name",label_en:"Method",label_es:"M\xE9todo",sort:!1,filter:!0,width:"10%"},{name:"spec_eval_detail",label_en:"Problem Detail",label_es:"Detalle del Problema",sort:!1,filter:!0,width:"30%"},{name:"spec_rule_with_detail",label_en:"Spec Rule",label_es:"Especificaci\xF3n",sort:!1,filter:!0,width:"10%"}],displayRefreshButton:!0,autorefreshWindow:!1,tableTitle:{display:!0,label:{label_en:"Program Active Corrective Actions",label_es:"Acciones correctivas a\xFAn activas del programa"}},displayButtons:!0,buttons:[{name:"NEW_INVESTIGATION",label_en:"Create Investigation",label_es:"Crear Investigaci\xF3n",type:"button",read_only:!1,esign_required:!1},{name:"ADD_INVEST_OBJECTS",label_en:"Add to Investigation",label_es:"A\xF1adir a Investigaci\xF3n",type:"button",read_only:!1,esign_required:!1},{name:"CORRECTIVE_ACTION_COMPLETE",label_en:"Complete",label_es:"Concluir",type:"button",read_only:!1,esign_required:!0}]};_exports.progTabCorrectiveActions=progTabCorrectiveActions;const documentContainerEmDemoAProgtabCorrectiveActionsStyle=document.createElement("em-demo-a-progtab-correctiveactions-style");documentContainerEmDemoAProgtabCorrectiveActionsStyle.setAttribute("style","display: none;");documentContainerEmDemoAProgtabCorrectiveActionsStyle.innerHTML=`
  <dom-module id="em-demo-a-progtab-correctiveactions-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
      }
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:30px;
      }         
      div.main{
        width:95%;
      }     
      div.buttonGroup {
        display: flex
      }      
    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerEmDemoAProgtabCorrectiveActionsStyle)});