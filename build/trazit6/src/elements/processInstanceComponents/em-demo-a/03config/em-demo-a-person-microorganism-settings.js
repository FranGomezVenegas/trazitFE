define(["exports", "./config-process.js"], function (_exports, _configProcess) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.personMicroorganism = void 0;
  const personMicroorganism = {
    sampleFieldToRetrieve:
      "sample_id|current_stage|status|status_previous|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name",
    samplesWhereFieldsName: "current_stage|sample_config_code in*",
    samplesWhereFieldsValue:
      "MicroorganismIdentification|" + _configProcess.personal_smp_template,
    addSampleAnalysis: !0,
    addSampleAnalysisFieldToRetrieve: "",
    addSampleAnalysisResult: !0,
    addSampleAnalysisResultFieldToRetrieve: "",
    sampleFieldToSort: "sample_id desc",
    sampleFieldToDisplay: [
      ,
      {
        name: "sample_id",
        label_en: "Sample ID",
        label_es: "ID Muestra",
        width: "12px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "program_name",
        label_en: "Project",
        label_es: "Programa",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "15%",
      },
      {
        name: "location_name",
        label_en: "Location",
        label_es: "Ubicaci\xF3n",
        width: "30px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "sampling_date",
        label_en: "sampling Date",
        label_es: "ID Fecha de Muestreo",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "10%",
      },
      {
        name: "raw_value",
        label_en: "Reading Result",
        label_es: "Recuento",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "microorganism_count",
        label_en: "# Organism Ident.",
        label_es: "Num. MicroOrg. Detectados",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "5%",
      },
      {
        name: "microorganism_list",
        label_en: "Microorganisms",
        label_es: "Microorganismos",
        width: "20px",
        sort: !1,
        filter: !0,
        width: "50%",
      },
    ],
    displayRefreshButton: !0,
    autorefreshWindow: !1,
    tableTitle: {
      display: !0,
      label: {
        label_en: "Personnel Samples Pending Microorganism Identification",
        label_es:
          "Muestras de personal pendientes de la identificaci\xF3n de microorganismos",
      },
    },
    displayButtons: !0,
    buttons: [
      {
        name: "SAMPLESTAGE_MOVETOPREVIOUS",
        label_en: "Previous",
        label_es: "Anterior",
        type: "icon-button",
        icon_name: "icons:assignment-return",
        read_only: !1,
      },
      {
        name: "SAMPLESTAGE_MOVETONEXT",
        label_en: "Next",
        label_es: "Siguiente",
        type: "icon-button",
        icon_name: "icons:next-week",
        read_only: !1,
      },
      {
        name: "SAMPLE_AUDIT",
        label_en: "Sample Audit",
        label_es: "Auditor\xEDa",
        type: "button",
        icon_name: "icons:next-week",
        read_only: !1,
      },
      {
        name: "ADD_SAMPLE_MICROORGANISM",
        label_en: "Add Microorganism",
        label_es: "A\xF1adir Microorganismo",
        type: "icon-button",
        icon_name: "icons:add-box",
        icon_color: "aqua",
        confirmuser_required: !1,
        esign_required: !1,
        read_only: !1,
      },
      {
        name: "givenSampleAnalysisList",
        label_en: "Sample Analysis",
        label_es: "An\xE1lisis de la Muestra",
        type: "zicon-button",
        icon_name: "icons:description",
        esign_required: !1,
        read_only: !1,
      },
      {
        name: "givenSampleEnterResult",
        label_en: "Enter Result",
        label_es: "Entrar Resultado",
        type: "zicon-button",
        icon_name: "icons:receipt",
        read_only: !1,
      },
    ],
  };
  _exports.personMicroorganism = personMicroorganism;
  const documentContainerEmDemoAPersonMicroorganism = document.createElement(
    "em-demo-a-person-microorganism-style"
  );
  documentContainerEmDemoAPersonMicroorganism.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerEmDemoAPersonMicroorganism.innerHTML = `
  <dom-module id="em-demo-a-person-microorganism-style">
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
  </dom-module>`;
  document.head.appendChild(documentContainerEmDemoAPersonMicroorganism);
});
