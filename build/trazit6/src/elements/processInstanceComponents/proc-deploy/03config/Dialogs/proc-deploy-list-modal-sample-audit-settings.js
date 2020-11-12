define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.sampleAudit = void 0;
  const sampleAudit = {
    fieldToRetrieve: "", //samplesWhereFieldsName:'current_stage|sample_config_code in*',
    //samplesWhereFieldsValue:'MicroorganismIdentification|'+personal_smp_template,
    //addSampleAnalysis: true,
    //addSampleAnalysisFieldToRetrieve:'',
    //addSampleAnalysisResult: true,
    //addSampleAnalysisResultFieldToRetrieve:'',
    fieldToSort: "test_id desc",
    fieldToDisplay: [
      { name: "audit_id", label_en: "ID", label_es: "ID" },
      { name: "action_name", label_en: "Action", label_es: "Acci\xF3n" },
      {
        name: "fields_updated",
        label_en: "Fields Updated",
        label_es: "Campos Modificados",
      },
      { name: "reviewed", label_en: "Reviewed", label_es: "Revisado" },
      {
        name: "reviewed_on",
        label_en: "Revision Date",
        label_es: "Fecha Revisi\xF3n",
      },
    ],
    displayRefreshButton: !1,
    autorefreshWindow: !1,
    tableTitle: {
      display: !0,
      label: {
        label_en: "Personnel Samples Pending Microorganism Identification",
        label_es:
          "Muestras de personal pendientes de la identificaci\xF3n de microorganismos",
      },
    },
    dialogButtons: {
      displayCancelButton: !1,
      displayConfirmButton: !1,
      displayCloseButton: !0,
    },
    displayButtons: !0,
    buttons: [
      {
        name: "SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED", //"SIGNSAMPLEAUDIT",
        label_en: "Sign",
        label_es: "Firmar",
        type: "button",
        read_only: !1,
        confirmuser_required: !1,
        esign_required: !0,
      },
    ],
  };
  _exports.sampleAudit = sampleAudit;
  const documentContainerprocDeployDialogSampleAuditSettings = document.createElement(
    "proc-deploy-dialog-sample-audit-settings"
  );
  documentContainerprocDeployDialogSampleAuditSettings.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerprocDeployDialogSampleAuditSettings.innerHTML = `
  <dom-module id="proc-deploy-dialog-sample-audit-settings">
    <template>
    <style>
    div.modal-content {
        position: fixed;
        z-index: 1001;
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        -moz-box-shadow: 3px 3px 5px #535353;
        -webkit-box-shadow: 3px 3px 5px #535353;       
        box-shadow: 3px 3px 5px #535353;
        -moz-border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 6px;  
        border-radius: 6px 6px 6px 6px;                
    }        
    /* The Close Button */

    div.modal-content.bgimg {
        background-image: url('./images/hexagon-white-blue-light.jpg');  
        background-size: cover; 
        width: 750px;       
    }          
    </style>
    </template>
  </dom-module>`;
  document.head.appendChild(
    documentContainerprocDeployDialogSampleAuditSettings
  );
});
