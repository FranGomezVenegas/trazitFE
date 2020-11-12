import { personal_smp_template } from "./config-process.js";
export const sampleIncubBatchScreenSettings = {
  displaySamplesPendingIncub1Tbl: !0,
  displaySamplesPendingIncub2Tbl: !0,
  displayIncubBatchesTbl: !0,
};
export const sampleIncubBatchPendingIncub1 = {
  sampleFieldToRetrieve:
    "sample_id|current_stage|status|sampling_date|sampling_comment|sample_config_code|incubation_batch",
  samplesWhereFieldsName: "current_stage|incubation_passed",
  samplesWhereFieldsValue: "Incubation|false",
  addSampleAnalysis: !0,
  addSampleAnalysisFieldToRetrieve: "",
  addSampleAnalysisResult: !0,
  addSampleAnalysisResultFieldToRetrieve: "",
  sampleFieldToSort: "sample_id desc",
  sampleFieldToDisplay: [
    {
      name: "add_batch",
      label_en: "",
      label_es: "",
      is_button: !0,
      button: [
        {
          name: "SAMPLE_AUDIT",
          label_en: "Sample Audit",
          label_es: "Auditor\xEDa",
          type: "button",
          icon_name: "icons:next-week",
          read_only: !1,
        },
      ],
      sort: !1,
      filter: !0,
      min_width: "20%",
      width: "20%",
    },
    {
      name: "iconCol",
      label_en: "",
      label_es: "",
      is_icon: !0,
      sort: !1,
      filter: !0,
      min_width: "20%",
      width: "20%",
    },
    {
      name: "sample_id",
      label_en: "Sample ID",
      label_es: "ID Muestra",
      sort: !1,
      filter: !0,
      min_width: "20%",
      width: "20%",
    },
    {
      name: "incubation_batch",
      label_en: "Batch",
      label_es: "Tanda",
      sort: !0,
      filter: !1,
      min_width: "20%",
      width: "30%",
    },
    {
      name: "sampling_date",
      label_en: "sampling Date",
      label_es: "ID Fecha de Muestreo",
      sort: !1,
      filter: !0,
      min_width: "20%",
      width: "30%",
    },
    {
      name: "sampling_comment",
      label_en: "sampling Comment",
      label_es: "Comentario Muestreo",
      sort: !1,
      filter: !0,
      min_width: "20%",
      width: "40%",
    },
  ],
  displayRefreshButton: !0,
  autorefreshWindow: !1,
  tableTitle: {
    display: !0,
    label: {
      label_en: "Samples Pending 1st Incubation",
      label_es: "Pendientes de 1\xAA incubaci\xF3n",
    },
  },
  displayButtons: !0,
  buttons: [
    {
      name: "SAMPLE_AUDIT",
      label_en: "Sample Audit",
      label_es: "Auditor\xEDa",
      type: "button",
      icon_name: "icons:next-week",
      read_only: !1,
    },
    {
      name: "EM_BATCH_INCUB_ADD_SMP",
      label_en: "Add To Batch",
      label_es: "A\xF1adir a Tanda",
      type: "button",
      read_only: !1,
    },
    {
      name: "EM_BATCH_INCUB_REMOVE_SMP",
      label_en: "Remove from Batch",
      label_es: "Quitar de Tanda",
      type: "button",
      read_only: !1,
    },
  ],
};
export const sampleIncubBatchPendingIncub2 = {
  sampleFieldToRetrieve:
    "sample_id|current_stage|status|incubation2_batch|incubation2_start|incubation_start|incubation_end|sampling_date|sampling_comment|sample_config_code",
  samplesWhereFieldsName: "current_stage|incubation_passed",
  samplesWhereFieldsValue: "Incubation|true",
  addSampleAnalysis: !0,
  addSampleAnalysisFieldToRetrieve: "",
  addSampleAnalysisResult: !0,
  addSampleAnalysisResultFieldToRetrieve: "",
  sampleFieldToSort: "sample_id desc",
  sampleFieldToDisplay: [
    {
      name: "sample_id",
      label_en: "Sample ID",
      label_es: "ID Muestra",
      sort: !1,
      filter: !0,
      width: "20%",
    },
    {
      name: "incubation2_batch",
      label_en: "Batch",
      label_es: "Tanda",
      sort: !1,
      filter: !1,
      width: "30%",
    },
    {
      name: "incubation2_start",
      label_en: "incubation 2 start",
      label_es: "Inicio 2a Incubacion",
      sort: !1,
      filter: !0,
      width: "20%",
    },
    {
      name: "sampling_date",
      label_en: "sampling Date",
      label_es: "ID Fecha de Muestreo",
      sort: !1,
      filter: !0,
      width: "30%",
    },
    {
      name: "incubation_incubator",
      label_en: "Incubator incub 1",
      label_es: "Incubadora 1a Incubacion",
      sort: !1,
      filter: !0,
      width: "30%",
    },
    {
      name: "incubation_start",
      label_en: "incubation 1 start",
      label_es: "Inicio 1a Incubacion",
      sort: !1,
      filter: !0,
      width: "30%",
    },
    {
      name: "incubation_end",
      label_en: "incubation 1 end",
      label_es: "Fin 1a Incubacion",
      sort: !1,
      filter: !0,
      width: "30%",
    },
  ],
  displayRefreshButton: !0,
  autorefreshWindow: !1,
  tableTitle: {
    display: !0,
    label: {
      label_en: "Samples Pending 2nd Incubation",
      label_es: "Pendientes de 2\xAA incubaci\xF3n",
    },
  },
  displayButtons: !0,
  buttons: [
    {
      name: "SAMPLE_AUDIT",
      label_en: "Sample Audit",
      label_es: "Auditor\xEDa",
      type: "button",
      icon_name: "icons:next-week",
      read_only: !1,
    },
    {
      name: "EM_BATCH_INCUB_ADD_SMP",
      label_en: "Add To Batch",
      label_es: "A\xF1adir a Tanda",
      type: "button",
      read_only: !1,
    },
    {
      name: "EM_BATCH_INCUB_REMOVE_SMP",
      label_en: "Remove from Batch",
      label_es: "Quitar de Tanda",
      type: "button",
      read_only: !1,
    },
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
  ],
};
const documentContainerEmDemoASampleIncubBatch = document.createElement(
  "em-demo-a-sample-incub-batch-style"
);
documentContainerEmDemoASampleIncubBatch.setAttribute(
  "style",
  "display: none;"
);
documentContainerEmDemoASampleIncubBatch.innerHTML = `
  <dom-module id="em-demo-a-sample-incub-batch-style">
    <template>
    <style>
      div.mainIncubBatchDiv{
        display: flex;
      }
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
document.head.appendChild(documentContainerEmDemoASampleIncubBatch);
