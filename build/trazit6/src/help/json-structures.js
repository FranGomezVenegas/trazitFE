define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.buttonProperties = void 0;
  const buttonProperties = {
    name: "action name, should match the endpoint name",
    label_en: "Sample Audit",
    label_es: "Auditor\xEDa",
    type: "button or button-icon",
    icon_name:
      "icons:next-week , the icon name (optional, for button-icon only)",
    read_only: "Enable/Disable the button action",
    confirmuser_required:
      "Requires user confirmation, by default false even in its absence",
    esign_required:
      "Requires esign validation, by default false even in its absence",
    esign_required:
      "Requires esign validation, by default false even in its absence",
    requires_selected_object:
      "Whether the action requires one object selected or not, by default TRUE even in its absence, we consider that most of the actions should provoke effect in a given object.", //
    //
  };
  _exports.buttonProperties = buttonProperties;
});
