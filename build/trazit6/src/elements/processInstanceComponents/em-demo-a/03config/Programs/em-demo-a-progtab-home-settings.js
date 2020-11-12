define(["exports", "../config-process.js"], function (
  _exports,
  _configProcess
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.windowDefinition = _exports.hometab_area = _exports.em_home_tab_subTabs = _exports.programHome_defaultTab = _exports.programHome_lastResults_infoGrouped = _exports.programHome_sampleSummaryPieOptions = _exports.programHome_sampleSummaryGaugeOptions = void 0;
  const programHome_sampleSummaryGaugeOptions = {
    width: 400,
    height: 120,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
  };
  _exports.programHome_sampleSummaryGaugeOptions = programHome_sampleSummaryGaugeOptions;
  const programHome_sampleSummaryPieOptions = { title: "Samples Progress" };
  _exports.programHome_sampleSummaryPieOptions = programHome_sampleSummaryPieOptions;
  const programHome_lastResults_infoGrouped = { grouped: !0 };
  _exports.programHome_lastResults_infoGrouped = programHome_lastResults_infoGrouped;
  const programHome_defaultTab = "hometab_" + "area";
  _exports.programHome_defaultTab = programHome_defaultTab;
  const em_home_tab_subTabs = [
    {
      procedure: _configProcess.schema_name,
      tabConfirmUserRequired: !1,
      tabEsignRequired: !1,
      tabLabel_en: "Home",
      tabLabel_es: "Inicio",
      tabName: "hometab_" + "home",
      tabIndex: 1,
    },
    {
      procedure: _configProcess.schema_name,
      tabConfirmUserRequired: !1,
      tabEsignRequired: !1,
      tabLabel_en: "Area",
      tabLabel_es: "\xC1rea",
      tabName: "hometab_" + "area",
      tabIndex: 1,
    },
  ];
  _exports.em_home_tab_subTabs = em_home_tab_subTabs;
  const hometab_area = {
    windowTitle: { label_en: "Area KPIs ", label_es: "KPI sobre \xE1reas" },
    charts: [
      {
        display_chart: !0,
        chart_type: "pie",
        chart_name: "samples_summary_by_area",
        chart_title: {
          label_en: "Samples Percentage ",
          label_es: "Porcentaje de",
        },
        counter_field_name: "COUNTER",
        counterLimits: {
          // min_allowed: 3,
          // min_allowed_included:3,
          // max_allowed:100,
          // max_allowed_included:100,
          // value:0,
        },
        grouper_field_name: "current_area",
        grouper_exclude_items: [],
        label_item: { label_en: "Area", label_es: "Area" },
        label_value: { label_en: "#", label_es: "#" },
      },
    ],
  };
  _exports.hometab_area = hometab_area;
  const windowDefinition = {
    windowTitle: {
      label_en: "Home page for the program ",
      label_es: "P\xE1gina de inicio para el programa",
    },
    charts: [
      {
        display_chart: !0,
        chart_type: "pie",
        chart_name: "samples_summary_by_stage",
        chart_title: {
          label_en: "In-Progress Sample Percentage ",
          label_es: "Porcentaje en Muestras En-Progreso",
        },
        counter_field_name: "COUNTER",
        counterLimits: {
          // min_allowed: 3,
          // min_allowed_included:3,
          // max_allowed:100,
          // max_allowed_included:100,
          // value:0,
        },
        grouper_field_name: "current_stage",
        grouper_exclude_items: [
          "Samplingzz",
          "Incubationzz",
          "PlateReadingzz",
          "MicroorganismIdentificationzz",
          "zz",
          "END",
        ],
        label_item: { label_en: "Statussss", label_es: "Estado" },
        label_value: { label_en: "#", label_es: "#" },
      },
    ],
  }; //import {personal_smp_template} from './config-process';
  // export const shifts=[
  //   {keyName:"M1", keyValue_en:"M1", keyValue_es:"M1"},
  //   {keyName:"M2", keyValue_en:"M2", keyValue_es:"M2"}
  // ];
  // export const progTabPoints={
  //     //sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
  //     //samplesWhereFieldsName:'current_stage|sample_config_code not in*',
  //     //samplesWhereFieldsValue:'Sampling|'+personal_smp_template,
  //     //sampleFieldToSort:'sample_id desc',
  //     fieldToDisplay:[
  //       {name: 'area', label_en:'Area', label_es: 'Area', sort:false, filter:true, is_icon:true, width:"20%"}
  //       , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:"20%"}
  //       , {name: 'spec_code', label_en:'Spec', label_es: 'Especificación', sort:false, filter:true, width:"20%"}
  //       , {name: 'spec_variation_name', label_en:'Variation', label_es: 'Variación', sort:false, filter:true, width:"20%"}
  //       , {name: 'spec_analysis_variation', label_en:'Analysis Variation', label_es: 'Análisis de Variación', sort:false, filter:true, width:"20%"}
  //       , {name: 'person_ana_definition', label_en:'Person Sampling Areas', label_es: 'Areas a analizar de Personal', sort:false, filter:true, width:"40%"}
  //     ],
  //     displayRefreshButton: true,
  //     autorefreshWindow: false,
  //     tableTitle:{
  //       display: true,
  //       label:{label_en:'Program Active Corrective Actions', label_es:'Acciones correctivas aún activas del programa'}
  //     },
  //     displayButtons: true,
  //     dialogButtons:[
  //       {
  //         "name": "logSample",
  //         "label_en": "Log Sample", "label_es": "Registrar Muestra",
  //         "type": "button",
  //         "read_only": false,
  //       },
  //       {
  //         "name": "shift",
  //         "label_en": "Shift", "label_es": "Turno",
  //         "type": "list",
  //         "dbType": "String",
  //         "value": '',
  //         "read_only": false,
  //         "items" : ""//this.systemShifts
  //       },
  //       {
  //         "name": "production_lot",
  //         "label_en": "Lot", "label_es": "Lote",
  //         "type": "list",
  //         "dbType": "String",
  //         "value": "",
  //         "read_only": false,
  //         "items" : ""//this.productionLotsList
  //       }
  //     ]
  //   };
  _exports.windowDefinition = windowDefinition;
  const documentContainerEmDemoAProgtabHomeStyle = document.createElement(
    "em-demo-a-progtab-home-style"
  );
  documentContainerEmDemoAProgtabHomeStyle.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerEmDemoAProgtabHomeStyle.innerHTML = `
  <dom-module id="em-demo-a-progtab-home-style">
    <template>
    <style>
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:30px;
      }  
      p.chartTitle{       
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:20px;
      }  
      div.main{
        width:95%;
      }
    </style>
    </template>
  </dom-module>`;
  document.head.appendChild(documentContainerEmDemoAProgtabHomeStyle);
});
