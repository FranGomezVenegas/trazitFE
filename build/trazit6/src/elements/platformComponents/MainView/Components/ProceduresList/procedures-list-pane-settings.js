define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.tabNotOpenableByCertification = _exports.proceduresListPaneTitle = void 0;
  const proceduresListPaneTitle = {
    open: {
      label_en: "Procedures",
      label_es: "Procesos",
      icon_name: "vaadin:chevron-circle-up",
    },
    closed: {
      label_en: "Procedures",
      label_es: "Procesos",
      icon_name: "vaadin:chevron-circle-down",
    },
  };
  _exports.proceduresListPaneTitle = proceduresListPaneTitle;
  const tabNotOpenableByCertification = {
    message_en:
      "You are not certified and this window cannot be open by this reason.",
    message_es:
      "No est\xE1 certificado y por este motivo no puede abrir esta pantalla.",
  };
  _exports.tabNotOpenableByCertification = tabNotOpenableByCertification;
});
