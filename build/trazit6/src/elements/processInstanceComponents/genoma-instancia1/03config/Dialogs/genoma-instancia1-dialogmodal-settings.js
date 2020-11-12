define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.closeDialogButton = _exports.confirmDialogButton = _exports.cancelDialogButton = _exports.dialog_buttons = _exports.dialogStudySamplesSetUpdate = _exports.dialogStudySamplesSetNew = _exports.dialogStudyFamilyUpdate = _exports.dialogStudyFamilyNew = _exports.dialogStudyIndividualUpdate = _exports.dialogStudyIndividualNew = _exports.dialogStudyUpdate = _exports.dialogStudyNew = _exports.dialogEnterVariableValueInteger = _exports.dialogEnterVariableValueText = _exports.dialogAddComment = void 0;
  const dialogAddComment = [
    {
      name: "Comment",
      label_en: "Add Comment",
      label_es: "A\xF1ade comentario",
      type: "text",
      password: "false",
      read_only: !1,
      value: "",
    },
  ];
  _exports.dialogAddComment = dialogAddComment;
  const dialogEnterVariableValueText = [
    {
      name: "VariableValueText",
      label_en: "Add Comment",
      label_es: "A\xF1ade comentario",
      type: "text",
      password: "false",
      read_only: !1,
      value: "",
    },
  ];
  _exports.dialogEnterVariableValueText = dialogEnterVariableValueText;
  const dialogEnterVariableValueInteger = [
    {
      name: "VariableValueInteger",
      label_en: "How Many Samples To Log?",
      label_es: "\xBFCu\xE1ntas?",
      type: "integer",
      value: 1,
      minValue: 0,
      maxValue: 1e4,
      read_only: !1,
      password: "false",
    },
  ];
  _exports.dialogEnterVariableValueInteger = dialogEnterVariableValueInteger;
  const dialogStudyNew = [
    {
      name: "stydy_field_new",
      label_en: "New Study Name",
      label_es: "Nombre para nuevo Estudio",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "active",
      label_en: "Active",
      label_es: "Activo",
      type: "boolean",
      password: "false",
      value: !0,
      read_only: !1,
    },
  ];
  _exports.dialogStudyNew = dialogStudyNew;
  const dialogStudyUpdate = [
    {
      name: "stydy_field_new",
      label_en: "New Study Name",
      label_es: "Nombre para nuevo Estudio",
      type: "text",
      password: "false",
      value: "",
      read_only: !0,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
  ];
  _exports.dialogStudyUpdate = dialogStudyUpdate;
  const dialogStudyIndividualNew = [
    {
      name: "stydy_field_new",
      label_en: "New Study Individual Name",
      label_es: "Nombre para nuevo Individuo",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "active",
      label_en: "Active",
      label_es: "Activo",
      type: "boolean",
      password: "false",
      value: !0,
      read_only: !1,
    },
  ];
  _exports.dialogStudyIndividualNew = dialogStudyIndividualNew;
  const dialogStudyIndividualUpdate = [
    {
      name: "stydy_field_new",
      label_en: "Study Individual Name",
      label_es: "Nombro Individuo",
      type: "text",
      password: "false",
      value: "",
      read_only: !0,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
  ];
  _exports.dialogStudyIndividualUpdate = dialogStudyIndividualUpdate;
  const dialogStudyFamilyNew = [
    {
      name: "stydy_field_new",
      label_en: "New Study Family Name",
      label_es: "Nombre para nueva Familia",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "active",
      label_en: "Active",
      label_es: "Activo",
      type: "boolean",
      password: "false",
      value: !0,
      read_only: !1,
    },
  ];
  _exports.dialogStudyFamilyNew = dialogStudyFamilyNew;
  const dialogStudyFamilyUpdate = [
    {
      name: "stydy_field_new",
      label_en: "Study Family Name",
      label_es: "Nombre Familia",
      type: "text",
      password: "false",
      value: "",
      read_only: !0,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
  ];
  _exports.dialogStudyFamilyUpdate = dialogStudyFamilyUpdate;
  const dialogStudySamplesSetNew = [
    {
      name: "stydy_field_new",
      label_en: "New Study Samples Set Name",
      label_es: "Nombre para nueva Agrupaci\xF3n Muestras",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "active",
      label_en: "Active",
      label_es: "Activo",
      type: "boolean",
      password: "false",
      value: !0,
      read_only: !1,
    },
  ];
  _exports.dialogStudySamplesSetNew = dialogStudySamplesSetNew;
  const dialogStudySamplesSetUpdate = [
    {
      name: "stydy_field_new",
      label_en: "Study Samples Set Name",
      label_es: "Nombre Agrupaci\xF3n Muestras",
      type: "text",
      password: "false",
      value: "",
      read_only: !0,
    },
    {
      name: "description",
      label_en: "Description",
      label_es: "Descripci\xF3n",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
  ];
  _exports.dialogStudySamplesSetUpdate = dialogStudySamplesSetUpdate;
  const dialog_buttons = [
    {
      name: "closeDialog",
      label_en: "Close Dialog",
      label_es: "Cerrar Ventana",
      type: "icon-button",
      icon_name: "icons:restore-page",
      icon_color: "aqua",
      esign_required: !1,
      read_only: !1,
    },
  ];
  _exports.dialog_buttons = dialog_buttons;
  const cancelDialogButton = {
    name: "CANCEL_DIALOG_BUTTON",
    label_en: "Cancel",
    label_es: "Cancelar",
    type: "button",
    icon_name: "icons:next-week",
    read_only: !1,
  };
  _exports.cancelDialogButton = cancelDialogButton;
  const confirmDialogButton = {
    name: "ACCEPT_DIALOG_BUTTON",
    label_en: "Accept",
    label_es: "Aceptar",
    type: "button",
    icon_name: "icons:next-week",
    read_only: !1,
  };
  _exports.confirmDialogButton = confirmDialogButton;
  const closeDialogButton = {
    name: "CLOSE_DIALOG_BUTTON",
    label_en: "Close",
    label_es: "Cerrar",
    type: "button",
    icon_name: "icons:next-week",
    read_only: !1,
  };
  _exports.closeDialogButton = closeDialogButton;
  const documentContainerGenomaInstancia1DialogModalStyle = document.createElement(
    "genoma-instancia1-dialogmodal-style"
  );
  documentContainerGenomaInstancia1DialogModalStyle.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerGenomaInstancia1DialogModalStyle.innerHTML = `
  <dom-module id="genoma-instancia1-dialogmodal-style">
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
  </dom-module>`;
  document.head.appendChild(documentContainerGenomaInstancia1DialogModalStyle);
});
