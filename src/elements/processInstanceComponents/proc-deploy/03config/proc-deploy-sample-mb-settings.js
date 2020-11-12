import {personal_smp_template} from './config-process';
export const windowSettings={
    sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
    samplesWhereFieldsName:'status in-|sample_config_code not in*',
    samplesWhereFieldsValue:'RECEIVED-INCOMPLETE-COMPLETE*String|'+personal_smp_template,
    sampleFieldToSort:'sample_id desc',
    addSampleAnalysis:'true',
    addSampleAnalysisFieldToRetrieve:'method_name|testing_group',
    sampleAnalysisWhereFieldsName:'testing_group',
    sampleAnalysisWhereFieldsValue:'MB*String',
    addSampleAnalysisResult:'true',
    //addSampleAnalysisResultFieldToRetrieve:'method_name|testing_group',
    //sampleAnalysisResultWhereFieldsName:'testing_group',
    //sampleAnalysisResultWhereFieldsValue:'FQ*String',
    //sampleLastLevel:'TEST',

    sampleFieldToDisplay:[ ''
      , {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, width:'20%'}
      , {name: 'program_name', label_en:'Project', label_es: 'Programa', sort:false, filter:true, width:'30%'}
      , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:'30%'}
      , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true, width:'30%'}
      , {name: 'sampling_comment', label_en:'sampling Comment', label_es: 'Comentario Muestreo', sort:false, filter:true, width:'40%'}
      , {name: 'spec_code', label_en:'Spec', label_es: 'Especificación', sort:false, filter:true, width:'30%'}
      , {name: 'spec_variation_name', label_en:'Variation', label_es: 'Variación', sort:false, filter:true, width:'40%'}],  
    displayRefreshButton: true,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'Samples Pending Micro Testing', label_es:'Muestras pendientes de testeo Microbiológico'}
    },
    displayButtons: true,
    buttons:[
        {
          "name": "SAMPLE_AUDIT",
          "label_en": "Sample Audit", "label_es": "Auditoría",
          "type": "button",
          "icon_name": "icons:next-week",
          "read_only": false,
          "confirmuser_required": false,
          "esign_required": false,    
        },   
        {
          "name": "SAMPLESTAGE_MOVETOPREVIOUS",
          "label_en": "Previous", "label_es": "Anterior",
          "type": "icon-button",
          "icon_name": "icons:assignment-return",
          "read_only": false,
        },             
        {
          "name": "SAMPLESTAGE_MOVETONEXT",
          "label_en": "Next", "label_es": "Siguiente",
          "type": "icon-button",
          "icon_name": "icons:next-week",
          "read_only": false,
        }, 
        {
          "name": "givenSampleEnterResult",
          "label_en": "Enter Result", "label_es": "Entrar Resultado",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	                    
        {
          "name": "setSamplingDate",
          "label_en": "Set Sampling Date", "label_es": "Asignar Fecha de Muestreo",
          "type": "icon-button",
          "icon_name": "icons:date-range",
          "read_only": false,
          "confirmuser_required": true,    
        }, 
        {
          "name": "SAMPLINGCOMMENTADD",
          "label_en": "Add Sampling Comment", "label_es": "Anexar observacion durante el Muestreo",
          "type": "icon-button",
          "icon_name": "icons:note-add",
          "read_only": false,
        },
        {
          "name": "SAMPLINGCOMMENTREMOVE",
          "label_en": "Remove Sampling Comment", "label_es": "Borrar observación durante el Muestreo",
          "type": "icon-button",
          "icon_name": "icons:speaker-notes-off",    
          "read_only": false,
        },     
      ]    
  };
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-mb-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-mb-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
        background-color: #ffffff5c;
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
  </dom-module>`;
document.head.appendChild(documentContainerProcDeploySampleSamplingStyle);