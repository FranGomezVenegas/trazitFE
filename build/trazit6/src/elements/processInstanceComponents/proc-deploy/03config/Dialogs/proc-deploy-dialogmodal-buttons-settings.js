define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.closeDialogButton = _exports.confirmDialogButton = _exports.cancelDialogButton = _exports.dialog_buttons = void 0;
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
      color: "#070b82",
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
    color: "#070b82",
  };
  _exports.cancelDialogButton = cancelDialogButton;
  const confirmDialogButton = {
    name: "ACCEPT_DIALOG_BUTTON",
    label_en: "Accept",
    label_es: "Aceptar",
    type: "button",
    icon_name: "icons:next-week",
    read_only: !1,
    color: "#070b82",
  };
  _exports.confirmDialogButton = confirmDialogButton;
  const closeDialogButton = {
    name: "CLOSE_DIALOG_BUTTON",
    label_en: "Close",
    label_es: "Cerrar",
    type: "button",
    icon_name: "icons:next-week",
    color: "#070b82",
    read_only: !1,
  };
  _exports.closeDialogButton = closeDialogButton;
  const documentContainerprocDeployDialogModalButtonsSettings = document.createElement(
    "proc-deploy-dialog-buttons-settings"
  );
  documentContainerprocDeployDialogModalButtonsSettings.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerprocDeployDialogModalButtonsSettings.innerHTML = `
  <dom-module id="proc-deploy-dialog-buttons-settings">
    <template>
    <style>
    </style>
    </template>
  </dom-module>`;
  document.head.appendChild(
    documentContainerprocDeployDialogModalButtonsSettings
  );
});
