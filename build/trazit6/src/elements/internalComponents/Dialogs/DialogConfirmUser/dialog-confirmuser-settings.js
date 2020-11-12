define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.platformConfirmUser_formFields = _exports.platformConfirmUser_notCorrectMessage = _exports.platformConfirmUser_windowTitle = void 0;
  const platformConfirmUser_windowTitle = {
    label_en: "Please confirm your credentials (user & password)",
    label_es: "Por favor confirma tu identidad (usuario y contrase\xF1a)",
  };
  _exports.platformConfirmUser_windowTitle = platformConfirmUser_windowTitle;
  const platformConfirmUser_notCorrectMessage = {
    now: {
      message_en: "Validation not completed, action aborted",
      message_es: "Validaci\xF3n no completada, acci\xF3n abortada",
    },
    dialog_cancelled: {
      message_en: "dialog canceled, action aborted",
      message_es: "Di\xE1logo cancelado, acci\xF3n abortada",
    },
    attempts_consumed: {
      message_en: "All attempts consumed, action aborted",
      message_es: "Todos los intentos consumidos, acci\xF3n abortada",
    },
  };
  _exports.platformConfirmUser_notCorrectMessage = platformConfirmUser_notCorrectMessage;
  const platformConfirmUser_formFields = [
    {
      name: "userToCheck",
      label_en: "User",
      label_es: "Usuario",
      type: "textconfirmuser",
      password: "false",
      value: "labplanet",
      read_only: !1,
    },
    {
      name: "pwToCheck",
      label_en: "Current Password",
      label_es: "Contrase\xF1a Actual",
      type: "password",
      password: "true",
      value: "",
      read_only: !1,
      showDisplayPasswordType: "Button",
    },
    {
      name: "confirmUserNote",
      label_en: "Note",
      label_es: "Nota",
      type: "text",
      password: "false",
      value: "",
      read_only: !1,
    },
  ];
  _exports.platformConfirmUser_formFields = platformConfirmUser_formFields;
});
