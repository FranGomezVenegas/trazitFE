define(["exports", "../config-process.js"], function (
  _exports,
  _configProcess
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.windowDefinition = void 0;
  const windowDefinition = {
    sampleFieldToRetrieve:
      "sample_id|current_stage|status|status_previous|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name",
    samplesWhereFieldsName: "current_stage|sample_config_code not in*",
    samplesWhereFieldsValue:
      "MicroorganismIdentification|" + _configProcess.personal_smp_template,
    addSampleAnalysis: !0,
    addSampleAnalysisFieldToRetrieve: "",
    addSampleAnalysisResult: !0,
    addSampleAnalysisResultFieldToRetrieve: "",
    sampleFieldToSort: "sample_id desc",
    tableTitle: {
      display: !0,
      label: {
        label_en: "Active Investigations",
        label_es: "Investigaciones abiertas",
      },
    },
    fieldsToDisplay: [
      ,
      {
        name: "id",
        label_en: "ID",
        label_es: "ID",
        width: "12px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "description",
        label_en: "description",
        label_es: "description",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "15%",
      },
      {
        name: "created_on",
        label_en: "Creation",
        label_es: "Creaci\xF3n",
        width: "30px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "external_system_name",
        label_en: "External System Name",
        label_es: "Nombre Sistema Externo",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "external_system_id",
        label_en: "External System Id",
        label_es: "Id Sistema Externo",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "capa_required",
        label_en: "capa_required",
        label_es: "CAPA Necesario",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "capa_external_system_name",
        label_en: "CAPA System",
        label_es: "Sistema para CAPAs",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "capa_external_system_id",
        label_en: "CAPA System Id",
        label_es: "Id en Sistema CAPAs",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
    ],
    fieldsToDisplayTable2: [
      ,
      {
        name: "id",
        label_en: "ID",
        label_es: "ID",
        width: "12px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "added_on",
        label_en: "Addition",
        label_es: "A\xF1adido",
        width: "30px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "object_type",
        label_en: "Type",
        label_es: "Tipo",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "object_id",
        label_en: "Id",
        label_es: "Id",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "notes",
        label_en: "Notes",
        label_es: "Notas",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
    ],
    tableTitle2: {
      display: !0,
      label: {
        label_en: "Investigation Objects",
        label_es: "Objetos de la Investigaci\xF3n",
      },
    },
    displayRefreshButton: !0,
    autorefreshWindow: !1,
    displayButtons: !0,
    buttons: [
      {
        name: "UPDATE_INVESTIGATION",
        label_en: "Decision",
        label_es: "Decisi\xF3n",
        type: "button",
        icon_name: "icons:next-week",
        read_only: !1,
      },
      {
        name: "CLOSE_INVESTIGATION",
        label_en: "Close",
        label_es: "Cerrar",
        type: "button",
        icon_name: "icons:next-week",
        read_only: !1,
      },
    ],
  };
  _exports.windowDefinition = windowDefinition;
  const documentContainerEmDemoASampleMicroorganism = document.createElement(
    "em-demo-a-investigation-style"
  );
  documentContainerEmDemoASampleMicroorganism.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerEmDemoASampleMicroorganism.innerHTML = `
  <dom-module id="em-demo-a-investigation-style">
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
  document.head.appendChild(documentContainerEmDemoASampleMicroorganism);
});
