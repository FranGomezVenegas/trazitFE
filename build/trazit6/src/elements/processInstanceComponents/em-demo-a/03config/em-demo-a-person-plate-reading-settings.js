define(["exports","./config-process.js"],function(_exports,_configProcess){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.personPlateReading=void 0;const personPlateReading={sampleFieldToRetrieve:"sample_id|program_name|location_name|current_stage|status|sampling_date|sampling_comment|incubation_batch|incubation_incubator|incubation_start|incubation_end|incubation2_batch|incubation2_incubator|incubation2_start|incubation2_end|sample_config_code",samplesWhereFieldsName:"current_stage|sample_config_code in*",samplesWhereFieldsValue:"PlateReading|"+_configProcess.personal_smp_template,addSampleAnalysis:!0,addSampleAnalysisFieldToRetrieve:"",addSampleAnalysisResult:!0,addSampleAnalysisResultFieldToRetrieve:"",sampleFieldToSort:"sample_id desc",sampleFieldToDisplay:[{name:"sample_id",label_en:"Sample ID",label_es:"ID Muestra",sort:!1,filter:!0,width:"5%"},,{name:"status",label_en:"Status",label_es:"Estado",sort:!1,filter:!0,width:"5%",is_icon:!0},,{name:"program_name",label_en:"Project",label_es:"Programa",width:"20px",sort:!1,filter:!0,width:"6%"},{name:"location_name",label_en:"Location",label_es:"Ubicaci\xF3n",width:"30px",sort:!1,filter:!0,width:"6%"},{name:"sampling_date",label_en:"sampling Date",label_es:"ID Fecha de Muestreo",sort:!1,filter:!0,width:"6%"},{name:"incubation_batch",label_en:"Batch incub 1",label_es:"Tanda 1a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation_incubator",label_en:"Incubator incub 1",label_es:"Incubadora 1a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation_start",label_en:"incubation 1 start",label_es:"Inicio 1a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation_end",label_en:"incubation 1 end",label_es:"Fin 1a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation2_batch",label_en:"Batch incub 2",label_es:"Tanda 2a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation2_incubator",label_en:"Incubator incub 2",label_es:"Incubadora 2a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation2_start",label_en:"incubation 2 start",label_es:"Inicio 2a Incubacion",sort:!1,filter:!0,width:"6%"},{name:"incubation2_end",label_en:"incubation 2 end",label_es:"Fin 2a Incubacion",sort:!1,filter:!0,width:"6%"}],displayRefreshButton:!0,autorefreshWindow:!1,tableTitle:{display:!0,label:{label_en:"Personnel  Samples Pending Plate Reading",label_es:"Muestras de personal pendientes de la lectura de placa"}},displayButtons:!0,buttons:[{name:"SAMPLESTAGE_MOVETOPREVIOUS",label_en:"Previous",label_es:"Anterior",type:"icon-button",icon_name:"icons:assignment-return",read_only:!1},{name:"SAMPLESTAGE_MOVETONEXT",label_en:"Next",label_es:"Siguiente",type:"icon-button",icon_name:"icons:next-week",read_only:!1},{name:"SAMPLE_AUDIT",label_en:"Sample Audit",label_es:"Auditor\xEDa",type:"button",icon_name:"icons:next-week",read_only:!1},// {
//   "name": "givenSampleAnalysisList",
//   "label_en": "Sample Analysis", "label_es": "Análisis de la Muestra",
//   "type": "icon-button",
//   "icon_name": "icons:description",
//   "esign_required": false,
//   "read_only": false,
// },  
{name:"addSampleAnalysis",label_en:"Add Analysis",label_es:"A\xF1adir An\xE1lisis",type:"zicon-button",icon_name:"icons:add-box",icon_color:"aqua",confirmuser_required:!1,esign_required:!1,read_only:!1},{name:"givenSampleEnterResult",label_en:"Enter Result",label_es:"Entrar Resultado",type:"icon-button",icon_name:"icons:receipt",read_only:!1}]};_exports.personPlateReading=personPlateReading;const documentContainerEmDemoAPersonPlateReadingStyle=document.createElement("em-demo-a-person-plate-reading-style");documentContainerEmDemoAPersonPlateReadingStyle.setAttribute("style","display: none;");documentContainerEmDemoAPersonPlateReadingStyle.innerHTML=`
  <dom-module id="em-demo-a-person-plate-reading-style">
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
    </tempPerson  </dom-module>`;document.head.appendChild(documentContainerEmDemoAPersonPlateReadingStyle)});