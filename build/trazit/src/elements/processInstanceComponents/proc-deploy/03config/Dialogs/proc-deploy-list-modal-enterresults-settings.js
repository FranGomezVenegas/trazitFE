export const enterResult = {
  fieldToRetrieve:
    "result_id|analysis|method_name|method_version|param_name|param_type|raw_value|uom|spec_eval|spec_eval_detail|status|min_val_allowed|min_allowed_strict|max_val_allowed|max_allowed_strict", //samplesWhereFieldsName:'current_stage|sample_config_code in*',
  //samplesWhereFieldsValue:'MicroorganismIdentification|'+personal_smp_template,
  //addSampleAnalysis: true,
  //addSampleAnalysisFieldToRetrieve:'',
  //addSampleAnalysisResult: true,
  //addSampleAnalysisResultFieldToRetrieve:'',
  fieldToSort: "test_id|result_id",
  fieldToDisplay: [
    {
      name: "spec_eval",
      label_en: "spec_eval",
      label_es: "Eval Espec",
      is_icon: !0,
      editable: !1,
      hidden: !1,
    },
    {
      name: "result_id",
      label_en: "Result Id",
      label_es: "Id Resultado",
      editable: !1,
      hidden: !1,
    },
    {
      name: "analysis",
      label_en: "Analysis",
      label_es: "An\xE1l\xEDsis",
      editable: !1,
      hidden: !1,
    },
    {
      name: "param_name",
      label_en: "Parameter",
      label_es: "Par\xE1metro",
      editable: !1,
      hidden: !1,
    },
    {
      name: "raw_value",
      label_en: "Value",
      label_es: "Valor",
      editable: !0,
      hidden: !1, //,{name:'uom', label_en:'Measurement', label_es:'Medida', editable: false, hidden:false}
    },
    {
      name: "param_type",
      label_en: "param_type",
      label_es: "param_type",
      editable: !1,
      hidden: !0,
    },
  ],
  detailsFieldToDisplay: [
    {
      name: "spec_eval",
      label_en: "Range Evaluation",
      label_es: "Evaluaci\xF3n Rango",
      has_icon: !1,
    },
    {
      name: "spec_rule",
      label_en: "Range Rule",
      label_es: "Regla del Rango",
      has_icon: !1,
    },
    {
      name: "locking_reason",
      label_en: "Lock Reason",
      label_es: "Raz\xF3n del bloqueo",
      has_icon: !1,
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
  displayButtons: !1,
  buttons: [
    {
      name: "",
      label_en: "",
      label_es: "",
      type: "",
      read_only: !1,
      confirmuser_required: !1,
      esign_required: !1,
    },
  ],
};
export const resultCheckerMessages = {
  valueLessThanMinAllowed: {
    message_en: "The result <*1*> is less than the minimum allowed <*2*>",
    message_es: "El valor <*1*> es menor que el menor permitido <*2*>",
  },
  valueGreaterThanMaxAllowed: {
    message_en: "The result <*1*> is greater than the maximum allowed <*2*>",
    message_es: "El valor <*1*> es mayor que el mayor permitido <*2*>",
  },
};
const documentContainerprocDeployDialogEnterResultsSettings = document.createElement(
  "proc-deploy-dialog-enterresults-settings"
);
documentContainerprocDeployDialogEnterResultsSettings.setAttribute(
  "style",
  "display: none;"
);
documentContainerprocDeployDialogEnterResultsSettings.innerHTML = `
  <dom-module id="proc-deploy-dialog-enterresults-settings">
    <template>
    <style>
    vaadin-grid.grid{
      background-color: #ffffff5c;
    }
    
    div.modal-content {
        background-color: #a4c7e4db; /* #68abe4db;// #fefefe; */
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
        //background-image: url('./images/hexagon-white-blue-light.jpg');  
        background-size: cover; 
        width: 750px;       
    }
    p.tableTitle{
      margin-top: 0px;
      margin-bottom: 3px;
      color: #4e43fd;
      font-size:15px;
    }   
    paper-input.resultLocked{
      background-color: #80808080;
      color: lightgrey;
    }
    paper-input.resultIn{
      background-color: #0f9d58;
      color: lightgrey;
    }
    paper-input.resultInAlarm{
      background-color: #949d0f;
      color: lightgrey;
    }
    paper-input.resultOutRange{
      background-color: #a51b0d;
      color: lightgrey;
    }          
    paper-input.resultNotLocked{
    }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(
  documentContainerprocDeployDialogEnterResultsSettings
);
