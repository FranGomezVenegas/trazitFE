define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.filterArea = void 0;
  const filterArea = [
    // {
    // "name": "logSample",
    // "label_en": "Log Sample", "label_es": "Registrar Muestra",
    // "type": "button",
    // "read_only": false,
    // },
    {
      name: "entity_type",
      label_en: "Type",
      label_es: "Tipo",
      type: "list",
      dbType: "String",
      value: "",
      value_no_index: "",
      value_index: -1,
      read_only: !1,
      items: "", //this.systemShifts
    },
    {
      name: "entity_name",
      label_en: "Entity",
      label_es: "Entidad",
      type: "list",
      dbType: "String",
      value: "",
      value_no_index: "",
      value_index: -1,
      read_only: !1,
      items: "", //this.systemShifts
    },
  ];
  _exports.filterArea = filterArea;
});
