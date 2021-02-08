define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.closeDialogButton=_exports.confirmDialogButton=_exports.cancelDialogButton=_exports.dialog_buttons=_exports.dialogMicroorgListAdhocMicroorg=_exports.dialogMicroorgListTableHeader=_exports.dialogInvestigationsListTableHeader=_exports.dialogIncubatorsListTableHeader=_exports.dialogInvestDecision=_exports.dialogincubAddTmpReading=_exports.dialogincubBatchNew=_exports.dialogProductionLotActivate=_exports.dialogProductionLotNew=_exports.dialogAddComment=void 0;const dialogAddComment=[{name:"Comment",label_en:"Add Comment",label_es:"A\xF1ade comentario",type:"text",password:"false",read_only:!1,value:""}];_exports.dialogAddComment=dialogAddComment;const dialogProductionLotNew=[{name:"migroorganism_freetext",label_en:"New Production Lot Name",label_es:"Nombre para nuevo lote de producci\xF3n",type:"text",password:"false",value:"",read_only:!1}];_exports.dialogProductionLotNew=dialogProductionLotNew;const dialogProductionLotActivate=[{name:"migroorganism_freetext",label_en:"Production Lot Name to reactivate",label_es:"Nombre para el lote de producci\xF3n a reactivar",type:"text",password:"false",value:"",read_only:!1}];_exports.dialogProductionLotActivate=dialogProductionLotActivate;const dialogincubBatchNew=[{name:"migroorganism_freetext",label_en:"New Batch Name",label_es:"Nombre para la nueva tanda",type:"text",password:"false",value:"",read_only:!1}];_exports.dialogincubBatchNew=dialogincubBatchNew;const dialogincubAddTmpReading=[{name:"newtemperature_freetext",label_en:"New Temperature Reading",label_es:"Nueva Lectura de Temperatura",type:"text",password:"false",value:"",read_only:!1}];_exports.dialogincubAddTmpReading=dialogincubAddTmpReading;const dialogInvestDecision=[{name:"external_system_name",label_en:"System Name",label_es:"Nombre Sistema",type:"text",password:"false",value:"Trackwise",read_only:!1},{name:"external_system_id",label_en:"System Id",label_es:"Id Sistema",type:"text",password:"false",value:"",read_only:!1},{name:"capa_required",label_en:"CAPA Required",label_es:"\xBFRequiere CAPA?",type:"boolean",password:"false",value:"",read_only:!1},{name:"capa_external_system_name",label_en:"CAPA System Name",label_es:"Nombre Sistema CAPA",type:"text",password:"false",value:"Trackwise",read_only:!1},{name:"capa_external_system_id",label_en:"CAPA Id",label_es:"Id CAPA",type:"text",password:"false",value:"",read_only:!1}];_exports.dialogInvestDecision=dialogInvestDecision;const dialogIncubatorsListTableHeader=[{name:"name",label_en:"Name",label_es:"Nombre",sort:!0,filter:!1},{name:"description",label_en:"description",label_es:"descripci\xF3n",sort:!1,filter:!0}];_exports.dialogIncubatorsListTableHeader=dialogIncubatorsListTableHeader;const dialogInvestigationsListTableHeader=[{name:"id",label_en:"Id",label_es:"Id",sort:!0,filter:!1},{name:"created_on",label_en:"Creation",label_es:"Creaci\xF3n",sort:!1,filter:!0}];_exports.dialogInvestigationsListTableHeader=dialogInvestigationsListTableHeader;const dialogMicroorgListTableHeader=[{name:"name",label_en:"Name",label_es:"Nombre",sort:!0,filter:!1}];_exports.dialogMicroorgListTableHeader=dialogMicroorgListTableHeader;const dialogMicroorgListAdhocMicroorg=[{name:"adhoc_name",label_en:"Ad-hoc microorganism name",label_es:"Nombre Ad-hoc",type:"text",password:"false",read_only:!1,value:""},{name:"ADD_ADHOC_MICROORGANISM",label_en:"Add Adhoc",label_es:"A\xF1adir Nuevo",type:"button",value:"",read_only:!1},{name:"ADD_MICROORGANISM",label_en:"Add",label_es:"A\xF1adir",type:"button",value:"",read_only:!1}];_exports.dialogMicroorgListAdhocMicroorg=dialogMicroorgListAdhocMicroorg;const dialog_buttons=[{name:"closeDialog",label_en:"Close Dialog",label_es:"Cerrar Ventana",type:"icon-button",icon_name:"icons:restore-page",icon_color:"aqua",esign_required:!1,read_only:!1}];_exports.dialog_buttons=dialog_buttons;const cancelDialogButton={name:"CANCEL_DIALOG_BUTTON",label_en:"Cancel",label_es:"Cancelar",type:"button",icon_name:"icons:next-week",read_only:!1};_exports.cancelDialogButton=cancelDialogButton;const confirmDialogButton={name:"ACCEPT_DIALOG_BUTTON",label_en:"Accept",label_es:"Aceptar",type:"button",icon_name:"icons:next-week",read_only:!1};_exports.confirmDialogButton=confirmDialogButton;const closeDialogButton={name:"CLOSE_DIALOG_BUTTON",label_en:"Close",label_es:"Cerrar",type:"button",icon_name:"icons:next-week",read_only:!1};_exports.closeDialogButton=closeDialogButton;const documentContainerEmDemoADialogModalStyle=document.createElement("em-demo-a-dialogmodal-style");documentContainerEmDemoADialogModalStyle.setAttribute("style","display: none;");documentContainerEmDemoADialogModalStyle.innerHTML=`
  <dom-module id="em-demo-a-dialogmodal-style">
    <template>
    <style>
    /* Modal Content */
    div.modal-content {
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
        width: 420px;       
    }          

    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerEmDemoADialogModalStyle)});