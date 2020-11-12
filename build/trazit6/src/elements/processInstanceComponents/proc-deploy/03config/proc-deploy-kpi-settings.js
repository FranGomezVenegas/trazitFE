define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.windowDefinition = _exports.moduleKPIs = _exports.programHome_sampleSummaryPieOptions = _exports.programHome_sampleSummaryGaugeOptions = void 0;
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
  const moduleKPIs = {
    kpis: [
      {
        objGroupName: "kpi_samples",
        tableCategory: "data",
        tableName: "sample",
        whereFieldsName: "sample_config_code",
        whereFieldsValue: "program_smp_template",
        fieldsToRetrieveOrGrouping: "production_lot",
        dataGrouped: !0,
      },
      {
        objGroupName: "group_by_area",
        tableCategory: "data",
        tableName: "sample_analysis_result_with_spec_limits",
        whereFieldsName:
          "sample_config_code|area is not null|raw_value is not null|sampling_date is not null",
        whereFieldsValue: "program_smp_template|-|-|-",
        fieldsToRetrieveOrGrouping:
          "raw_value as original_value|TO_NUMBER(raw_value, '9999') as numeric_value|area|sample_id|sampling_date|program_name|spec_code|analysis",
        dataGrouped: !1,
      },
      {
        objGroupName: "programs",
        tableCategory: "data",
        tableName: "program",
        whereFieldsName: "name not in|active",
        whereFieldsValue: "f<<*STRING|true*BOOLEAN",
        fieldsToRetrieveOrGrouping: "name|active|description",
        dataGrouped: !1,
      },
    ],
  };
  _exports.moduleKPIs = moduleKPIs;
  const windowDefinition = {
    windowTitle: {
      label_en: "Home page for Water Monitoring ",
      label_es:
        "P\xE1gina de inicio para el proceso de Monitoreo Medioambiental de Aguas",
    },
    charts: [
      {
        display_chart: !0,
        chart_type: "pie",
        chart_name: "sampleStatCounterByStage",
        chart_title: {
          label_en: "In-Progress Sample Percentage ",
          label_es: "Porcentaje en Muestras En-Progreso",
        },
        counter_field_name: "COUNTER",
        counterLimits: {
          min_allowed: 3,
          min_allowed_included: 3,
          max_allowed: 100,
          max_allowed_included: 100,
          value: 0,
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
      {
        display_chart: !0,
        chart_type: "line",
        chart_name: "sampleStatsLastNresults",
        chart_title: {
          label_en: "Last n-results",
          label_es: "\xDAltimos n-resultados",
        },
        counter_field_name: "raw_value",
        counterLimits: {
          min_allowed: 3,
          min_allowed_included: 3,
          max_allowed: 100,
          max_allowed_included: 100,
          value: 0,
        },
        grouper_field_name: "sample_id",
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
  };
  _exports.windowDefinition = windowDefinition;
  const documentContainerprocDeployHomeStyle = document.createElement(
    "proc-deploy-home-style"
  );
  documentContainerprocDeployHomeStyle.setAttribute("style", "display: none;");
  documentContainerprocDeployHomeStyle.innerHTML = `
  <dom-module id="proc-deploy-home-style">
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
  </dom-module>`;
  document.head.appendChild(documentContainerprocDeployHomeStyle);
});
