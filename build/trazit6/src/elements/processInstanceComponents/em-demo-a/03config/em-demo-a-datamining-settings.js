define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.datamining_queryButtonForm = _exports.datamining_querySelectionForm = _exports.queryOutputDefinition = _exports.queries = _exports.myQueries = _exports.defaultChartType = void 0;
  const defaultChartType = "pie";
  _exports.defaultChartType = defaultChartType;
  const myQueries = [
    {
      query_name: "Mi consulta",
      owner: "12",
      scope: "GLOBAL",
      name: "QUERY_SAMPLING_HISTORY",
      label_en: "All Sampling History",
      label_es: "Hist\xF3rico Todas Muestras",
      arguments: [
        {
          name: "sampleGroups",
          type: "text",
          label_en: "Groups",
          label_es: "Grupos",
          password: "false",
          value:
            "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest*pie*Deviation & Investigation*Desviaciones e Investigaciones",
          read_only: !1,
        },
        {
          name: "lotName",
          type: "text",
          label_en: "Production Lot",
          label_es: "Lote Producci\xF3n",
        },
      ],
      otherCharts: [
        {
          display_chart: !0,
          chart_type: "line",
          chart_name: "datatable",
          chart_title: { label_en: "Trending", label_es: "Tendencia" },
          counter_field_name: "raw_value_num",
          counterLimits: {
            //min_allowed: 3,
            //min_allowed_included:3,
            //max_allowed:100,
            //max_allowed_included:100,
            //value:0,
          },
          grouper_field_name: "sampling_date",
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
    },
    {
      query_name: "Mi Segunda consulta",
      owner: "1",
      scope: "PRIVATE",
      name: "QUERY_SAMPLING_HISTORY",
      label_en: "All Sampling History",
      label_es: "Hist\xF3rico Todas Muestras",
      arguments: [
        {
          name: "sampleGroups",
          type: "text",
          label_en: "Groups",
          label_es: "Grupos",
          password: "false",
          value:
            "has_pre_invest, has_invest*counter_pre_and_invest*pie*Deviation & Investigation*Desviaciones e Investigaciones",
          read_only: !1,
        },
        {
          name: "samplingDayEnd",
          type: "date",
          label_en: "Sampling Day End",
          label_es: "F. Muestreo, Hasta",
        },
      ],
      otherCharts: [
        {
          display_chart: !0,
          chart_type: "line",
          chart_name: "datatable",
          chart_title: { label_en: "Trending", label_es: "Tendencia" },
          counter_field_name: "raw_value_num",
          counterLimits: {
            //min_allowed: 3,
            //min_allowed_included:3,
            //max_allowed:100,
            //max_allowed_included:100,
            //value:0,
          },
          grouper_field_name: "sampling_date",
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
    },
  ];
  _exports.myQueries = myQueries;
  const queries = [
    {
      name: "QUERY_SAMPLING_HISTORY",
      label_en: "All Sampling History",
      label_es: "Hist\xF3rico Todas Muestras",
      arguments: [
        {
          name: "samplingDayStart",
          type: "date",
          label_en: "Sampling Day Start",
          label_es: "F. Muestreo, Desde",
        },
        {
          name: "samplingDayEnd",
          type: "date",
          label_en: "Sampling Day End",
          label_es: "F. Muestreo, Hasta",
        },
        {
          name: "loginDayStart",
          type: "date",
          label_en: "Login Day Start",
          label_es: "F. Registro, Desde",
        },
        {
          name: "loginDayEnd",
          type: "date",
          label_en: "Login Day End",
          label_es: "F. Registro, Hasta",
        },
        {
          name: "includeSamples",
          type: "boolean",
          label_en: "Include Samples",
          value: !0,
          label_es: "Incluir muestras",
        },
        {
          name: "includeSamplerSamples",
          type: "boolean",
          label_en: "Include Sampler Samples",
          label_es: "Incluir muestras personal",
        },
        {
          name: "excludeReadingNotEntered",
          type: "boolean",
          label_en: "Exclude Not Closed",
          label_es: "Excluir no cerrados",
        },
        {
          name: "readingEqual",
          type: "integer",
          label_en: "Reading Equal",
          label_es: "Lectura igual a",
        },
        {
          name: "readingMin",
          type: "integer",
          label_en: "Reading Min",
          label_es: "Lectura Min",
        },
        {
          name: "readingMax",
          type: "integer",
          label_en: "Reading Max",
          label_es: "Lectura M\xE1x",
        },
        {
          name: "includeMicroorganisms",
          text: "boolean",
          label_en: "Include MicroOrganism",
          label_es: "Incluir MicroOrganismo",
        },
        {
          name: "MicroorganismsToFind",
          text: "boolean",
          label_en: "MicroOrg To Find",
          label_es: "MicroOrg a encontrar",
        },
        {
          name: "sampleGroups",
          type: "text",
          label_en: "Groups",
          label_es: "Grupos",
          password: "false",
          value:
            "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest",
          read_only: !1,
        },
      ],
    },
    {
      name: "QUERY_SAMPLER_SAMPLING_HISTORY",
      label_en: "Sampler Sampling History",
      label_es: "Hist\xF3rico Muestras Personal",
      arguments: [
        {
          name: "samplingDayStart",
          type: "date",
          label_en: "Sampling Day Start",
          label_es: "F. Muestreo, Desde",
        },
        {
          name: "samplingDayEnd",
          type: "date",
          label_en: "Sampling Day End",
          label_es: "F. Muestreo, Hasta",
        },
        {
          name: "loginDayStart",
          type: "date",
          label_en: "Login Day Start",
          label_es: "F. Registro, Desde",
        },
        {
          name: "loginDayEnd",
          type: "date",
          label_en: "Login Day End",
          label_es: "F. Registro, Hasta",
        },
        {
          name: "includeSamples",
          type: "boolean",
          label_en: "Include Samples",
          value: !0,
          label_es: "Incluir muestras",
        },
        {
          name: "includeSamplerSamples",
          type: "boolean",
          label_en: "Include Sampler Samples",
          label_es: "Incluir muestras personal",
        },
        {
          name: "excludeReadingNotEntered",
          type: "boolean",
          label_en: "Exclude Not Closed",
          label_es: "Excluir no cerrados",
        },
        {
          name: "readingEqual",
          type: "integer",
          label_en: "Reading Equal",
          label_es: "Lectura igual a",
        },
        {
          name: "readingMin",
          type: "integer",
          label_en: "Reading Min",
          label_es: "Lectura Min",
        },
        {
          name: "readingMax",
          type: "integer",
          label_en: "Reading Max",
          label_es: "Lectura M\xE1x",
        },
        {
          name: "includeMicroorganisms",
          text: "boolean",
          label_en: "Include MicroOrganism",
          label_es: "Incluir MicroOrganismo",
        },
        {
          name: "MicroorganismsToFind",
          text: "boolean",
          label_en: "MicroOrg To Find",
          label_es: "MicroOrg a encontrar",
        },
        {
          name: "sampleGroups",
          type: "text",
          label_en: "Groups",
          label_es: "Grupos",
          password: "false",
          value:
            "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest",
          read_only: !1,
        },
      ],
    },
    {
      name: "KPI_PRODUCTION_LOT_SAMPLES",
      label_en: "Production Lot Samples",
      label_es: "Muestras Lote Producci\xF3n",
      arguments: [
        {
          name: "samplingDayStart",
          type: "date",
          label_en: "Sampling Day Start",
          label_es: "F. Muestreo, Desde",
        },
        {
          name: "samplingDayEnd",
          type: "date",
          label_en: "Sampling Day End",
          label_es: "F. Muestreo, Hasta",
        },
        {
          name: "loginDayStart",
          type: "date",
          label_en: "Login Day Start",
          label_es: "F. Registro, Desde",
        },
        {
          name: "loginDayEnd",
          type: "date",
          label_en: "Login Day End",
          label_es: "F. Registro, Hasta",
        },
        {
          name: "includeSamples",
          type: "boolean",
          label_en: "Include Samples",
          value: !0,
          label_es: "Incluir muestras",
        },
        {
          name: "includeSamplerSamples",
          type: "boolean",
          label_en: "Include Sampler Samples",
          label_es: "Incluir muestras personal",
        },
        {
          name: "excludeReadingNotEntered",
          type: "boolean",
          label_en: "Exclude Not Closed",
          label_es: "Excluir no cerrados",
        },
        {
          name: "readingEqual",
          type: "integer",
          label_en: "Reading Equal",
          label_es: "Lectura igual a",
        },
        {
          name: "readingMin",
          type: "integer",
          label_en: "Reading Min",
          label_es: "Lectura Min",
        },
        {
          name: "readingMax",
          type: "integer",
          label_en: "Reading Max",
          label_es: "Lectura M\xE1x",
        },
        {
          name: "includeMicroorganisms",
          text: "boolean",
          label_en: "Include MicroOrganism",
          label_es: "Incluir MicroOrganismo",
        },
        {
          name: "MicroorganismsToFind",
          text: "boolean",
          label_en: "MicroOrg To Find",
          label_es: "MicroOrg a encontrar",
        },
        {
          name: "sampleGroups",
          type: "text",
          label_en: "Groups",
          label_es: "Grupos",
          password: "false",
          value:
            "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest",
          read_only: !1,
        },
      ],
    },
    {
      name: "QUERY_READING_OUT_OF_RANGE",
      label_en: "Out of Range Readings",
      label_es: "Lecturas fuera Rango",
      arguments: [
        {
          name: "samplingDayStart",
          type: "date",
          label_en: "Sampling Day Start",
          label_es: "F. Muestreo, Desde",
        },
        {
          name: "samplingDayEnd",
          type: "date",
          label_en: "Sampling Day End",
          label_es: "F. Muestreo, Hasta",
        },
        {
          name: "loginDayStart",
          type: "date",
          label_en: "Login Day Start",
          label_es: "F. Registro, Desde",
        },
        {
          name: "loginDayEnd",
          type: "date",
          label_en: "Login Day End",
          label_es: "F. Registro, Hasta",
        },
        {
          name: "includeSamples",
          type: "boolean",
          label_en: "Include Samples",
          value: !0,
          label_es: "Incluir muestras",
        },
        {
          name: "includeSamplerSamples",
          type: "boolean",
          label_en: "Include Sampler Samples",
          label_es: "Incluir muestras personal",
        },
        {
          name: "excludeReadingNotEntered",
          type: "boolean",
          label_en: "Exclude Not Closed",
          label_es: "Excluir no cerrados",
        },
        {
          name: "readingEqual",
          type: "integer",
          label_en: "Reading Equal",
          label_es: "Lectura igual a",
        },
        {
          name: "readingMin",
          type: "integer",
          label_en: "Reading Min",
          label_es: "Lectura Min",
        },
        {
          name: "readingMax",
          type: "integer",
          label_en: "Reading Max",
          label_es: "Lectura M\xE1x",
        },
        {
          name: "includeMicroorganisms",
          text: "boolean",
          label_en: "Include MicroOrganism",
          label_es: "Incluir MicroOrganismo",
        },
        {
          name: "MicroorganismsToFind",
          text: "boolean",
          label_en: "MicroOrg To Find",
          label_es: "MicroOrg a encontrar",
        },
        {
          name: "sampleGroups",
          type: "text",
          label_en: "Groups",
          label_es: "Grupos",
          password: "false",
          value:
            "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest",
          read_only: !1,
        },
      ],
    },
    {
      name: "QUERY_INVESTIGATION",
      label_en: "Investigations",
      label_es: "Investigaciones",
      arguments: [
        {
          name: "excludeNotClosedYet",
          type: "boolean",
          label_en: "Exclude Not Closed",
          label_es: "Excluir no cerrados",
        },
        {
          name: "creationDayStart",
          type: "date",
          label_en: "Creation Day Start",
          label_es: "F. Creaci\xF3n, Desde",
        },
        {
          name: "creationDayEnd",
          type: "date",
          label_en: "Creation Day End",
          label_es: "F. Creaci\xF3n, Hasta",
        },
        {
          name: "closureDayStart",
          type: "date",
          label_en: "Closure Day Start",
          label_es: "F. Cierre, Desde",
        },
        {
          name: "closureDayEnd",
          type: "date",
          label_en: "Closure Day End",
          label_es: "F. Cierre, Hasta",
        },
        {
          name: "investigationGroups",
          type: "text",
          password: "false",
          value: "",
          read_only: !1,
          label_en: "Groups",
          label_es: "Grupos",
        },
      ],
    },
  ];
  _exports.queries = queries;
  const queryOutputDefinition = {
    windowTitle: {
      label_en: "Home page for Environmental Monitoring prcocess Demo A ",
      label_es:
        "P\xE1gina de inicio para el proceso de Monitoreo Medioambiental Demo A",
    },
    fieldToDisplay: [
      ,
      {
        name: "result_id",
        label_en: "Result",
        label_es: "Resultado",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "created_on",
        label_en: "Creation",
        label_es: "Creada",
        sort: !0,
        filter: !1,
        width: "15%",
      },
      {
        name: "location_name",
        label_en: "Location",
        label_es: "Ubicaci\xF3n",
        sort: !1,
        filter: !0,
        width: "15%",
      },
      {
        name: "method_name",
        label_en: "Method",
        label_es: "M\xE9todo",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "spec_eval_detail",
        label_en: "Problem Detail",
        label_es: "Detalle del Problema",
        sort: !1,
        filter: !0,
        width: "30%",
      },
      {
        name: "spec_rule_with_detail",
        label_en: "Spec Rule",
        label_es: "Especificaci\xF3n",
        sort: !1,
        filter: !0,
        width: "10%",
      },
    ],
    displayRefreshButton: !1,
    autorefreshWindow: !1,
    tableTitle: {
      display: !0,
      label: { label_en: "Query result", label_es: "Resultado de la consulta" },
    },
    kpiCharts: [
      {
        display_chart: !0,
        chart_type: "pie",
        chart_name: "counter_out",
        chart_title: { label_en: "Range", label_es: "Rango" },
        counter_field_name: "count",
        counterLimits: {
          min_allowed: 0, //   min_allowed_included:3,
          max_allowed: 200, //   max_allowed_included:100,
          //   value:0,
        },
        grouper_field_name: "has_pre_invest",
        grouper_exclude_items: [
          "Samplingzz",
          "Incubationzz",
          "PlateReadingzz",
          "MicroorganismIdentificationzz",
          "zz",
          "END",
        ],
        label_item: { label_en: "Area", label_es: "Area" },
        label_value: { label_en: "#", label_es: "#" },
      },
      {
        display_chart: !0,
        chart_type: "pie",
        chart_name: "counter_range_eval",
        chart_title: {
          label_en: "Evaluation Counter",
          label_es: "Por tipo de evaluaci\xF3n",
        },
        counter_field_name: "count",
        counterLimits: {
          //min_allowed: 3,
          //min_allowed_included:3,
          //max_allowed:100,
          //max_allowed_included:100,
          //value:0,
        },
        grouper_field_name: "spec_eval",
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
    charts: [
      {
        display_chart: !0,
        chart_type: "pie",
        chart_name: "counter_range_eval",
        chart_title: {
          label_en: "Evaluation Counter",
          label_es: "Por tipo de evaluaci\xF3n",
        },
        counter_field_name: "count",
        counterLimits: {
          //min_allowed: 3,
          //min_allowed_included:3,
          //max_allowed:100,
          //max_allowed_included:100,
          //value:0,
        },
        grouper_field_name: "spec_eval",
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
  _exports.queryOutputDefinition = queryOutputDefinition;
  const datamining_querySelectionForm = [
    {
      name: "programsList",
      label_en: "Queries",
      label_es: "Consultas",
      type: "list",
      value: "",
      read_only: !1,
      items: [{ keyName: "", keyValue_en: "", keyValue_es: "" }],
    },
  ];
  _exports.datamining_querySelectionForm = datamining_querySelectionForm;
  const datamining_queryButtonForm = [
    {
      name: "LOADQUERY",
      label_en: "Load",
      label_es: "Cargar",
      type: "button",
      value: "",
      read_only: !1,
    },
    {
      name: "CREATE_SAVED_QUERY",
      label_en: "Save",
      label_es: "Guardar",
      type: "button",
      value: "",
      read_only: !1,
    },
    {
      name: "RUNQUERY",
      label_en: "Run",
      label_es: "Ejecutar",
      type: "button",
      value: "",
      read_only: !1,
    },
  ];
  _exports.datamining_queryButtonForm = datamining_queryButtonForm;
  const documentContainerEmDemoABatchesStyle = document.createElement(
    "em-demo-a-datamining-style"
  );
  documentContainerEmDemoABatchesStyle.setAttribute("style", "display: none;");
  documentContainerEmDemoABatchesStyle.innerHTML = `
  <dom-module id="em-demo-a-datamining-style">
    <template>
    <style>
    vaadingrid-lit-singleselect {
      width:55%;
    }
    p.tableTitle{
      margin-top: 0px;
      margin-bottom: 3px;
      color: #44cbe6;
      font-size:30px;
    }         
    div.main{
      display:flex;
      width:95%;
    }         
    div.querieslist{
      height:100%;
      width:35%;
    }
    div.queriesoutput{
      height:100%;
      width:75%;
      left-margin:0.1vw;      
    }
    div.buttonGroup {
      display: flex
    } 

    div.batchContent{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } 
    div.cardMySops{      
      flex-basis: 10%;
      height: 5vh;
      width: auto;
      font-size:3vh;
    }    
    @media (min-width:900px){
      div.batchContent{
        flex-wrap: wrap;
        display:flex;
        justify-content: space-between;
      }
    }
    </style>
    </template>
  </dom-module>`;
  document.head.appendChild(documentContainerEmDemoABatchesStyle);
});
