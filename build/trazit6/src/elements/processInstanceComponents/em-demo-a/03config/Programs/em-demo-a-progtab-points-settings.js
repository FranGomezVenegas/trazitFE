define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.progTabPoints=_exports.shifts=void 0;//import {personal_smp_template} from './config-process';
const shifts=[{keyName:"M1",keyValue_en:"M1",keyValue_es:"M1"},{keyName:"M2",keyValue_en:"M2",keyValue_es:"M2"}];_exports.shifts=shifts;const progTabPoints={//sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
//samplesWhereFieldsName:'current_stage|sample_config_code not in*',
//samplesWhereFieldsValue:'Sampling|'+personal_smp_template,
//sampleFieldToSort:'sample_id desc',
fieldToDisplay:[{name:"area",label_en:"Area",label_es:"Area",sort:!1,filter:!0,is_icon:!0,width:"20%"},{name:"location_name",label_en:"Location",label_es:"Ubicaci\xF3n",sort:!1,filter:!0,width:"20%"},{name:"spec_code",label_en:"Spec",label_es:"Especificaci\xF3n",sort:!1,filter:!0,width:"20%"},{name:"spec_variation_name",label_en:"Variation",label_es:"Variaci\xF3n",sort:!1,filter:!0,width:"20%"},{name:"spec_analysis_variation",label_en:"Analysis Variation",label_es:"An\xE1lisis de Variaci\xF3n",sort:!1,filter:!0,width:"20%"},{name:"person_ana_definition",label_en:"Person Sampling Areas",label_es:"Areas a analizar de Personal",sort:!1,filter:!0,width:"40%"}],displayRefreshButton:!0,autorefreshWindow:!1,tableTitle:{display:!0,label:{label_en:"Program Active Corrective Actions",label_es:"Acciones correctivas a\xFAn activas del programa"}},displayButtons:!0,dialogButtons:[{name:"logSample",label_en:"Log Sample",label_es:"Registrar Muestra",type:"button",read_only:!1},{name:"shift",label_en:"Shift",label_es:"Turno",type:"list",dbType:"String",value:"",read_only:!1,items:""//this.systemShifts
},{name:"production_lot",label_en:"Lot",label_es:"Lote",type:"list",dbType:"String",value:"",read_only:!1,items:""//this.productionLotsList
}]};_exports.progTabPoints=progTabPoints;const documentContainerEmDemoAProgtabCorrectiveActionsStyle=document.createElement("em-demo-a-progtab-points-style");documentContainerEmDemoAProgtabCorrectiveActionsStyle.setAttribute("style","display: none;");documentContainerEmDemoAProgtabCorrectiveActionsStyle.innerHTML=`
  <dom-module id="em-demo-a-progtab-points-style">
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