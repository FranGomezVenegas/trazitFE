define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.incidents_userOpenIncidentsButtons = _exports.incidents_userOpenIncidentsFieldToDisplay = _exports.appNewIncident_formFields = void 0;
  const appNewIncident_formFields = [
    {
      name: "Title",
      label_en: "Title",
      label_es: "Titulo",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
    {
      name: "Detail",
      label_en: "Detail",
      label_es: "Detalle",
      type: "text-area",
      password: "false",
      numRows: "10",
      numCols: "100",
      value:
        "Hola Soporte, Estoy teniendo un problema y me gustar\xEDa que me ayud\xE1rais",
      placeholder: "",
      read_only: !1,
    },
    {
      name: "NEW_INCIDENT",
      label_en: "Access",
      label_es: "Entrar",
      type: "button",
      value: "",
      read_only: !1,
    },
  ];
  _exports.appNewIncident_formFields = appNewIncident_formFields;
  const incidents_userOpenIncidentsFieldToDisplay = [
    {
      name: "id",
      label_en: "Id",
      label_es: "Id",
      sort: !0,
      filter: !1,
      width: "10%", //, {name: 'status', label_en:'Status', label_es: 'Estado', sort:false, filter:true, width:'22%'}
    },
    {
      name: "date_last_update",
      label_en: "Last Update",
      label_es: "\xDAltimo cambio",
      sort: !1,
      filter: !0,
      width: "22%",
    },
    {
      name: "date_creation",
      label_en: "Creation",
      label_es: "Creaci\xF3n",
      sort: !1,
      filter: !0,
      width: "22%",
    },
    {
      name: "item_title",
      label_en: "Title",
      label_es: "T\xEDtulo",
      sort: !1,
      filter: !0,
      width: "20%",
    },
    {
      name: "item_detail",
      label_en: "Detail",
      label_es: "Detalle",
      sort: !1,
      filter: !0,
      width: "30%",
    },
  ];
  _exports.incidents_userOpenIncidentsFieldToDisplay = incidents_userOpenIncidentsFieldToDisplay;
  const incidents_userOpenIncidentsButtons = [
    {
      name: "OPEN_NEW_INCIDENT_DIALOG",
      label_en: "New",
      label_es: "Crear",
      type: "button",
      icon_name: "icons:assignment-return",
      read_only: !1,
    },
    {
      name: "CONFIRM_INCIDENT",
      label_en: "Confirm",
      label_es: "Confirmar",
      type: "button",
      icon_name: "icons:assignment-return",
      read_only: !1,
    },
    {
      name: "ADD_NOTE_INCIDENT",
      label_en: "Add Note",
      label_es: "A\xF1adir Nota",
      type: "button",
      icon_name: "icons:assignment-return",
      read_only: !1,
    },
    {
      name: "CLOSE_INCIDENT",
      label_en: "Close it!",
      label_es: "\xA1Zanjarla!",
      type: "button",
      icon_name: "icons:assignment-return",
      read_only: !1,
    },
    {
      name: "REOPEN_INCIDENT",
      label_en: "ReOpen it!",
      label_es: "\xA1Reabrirla!",
      type: "button",
      icon_name: "icons:assignment-return",
      read_only: !1,
    },
  ];
  _exports.incidents_userOpenIncidentsButtons = incidents_userOpenIncidentsButtons;
});
