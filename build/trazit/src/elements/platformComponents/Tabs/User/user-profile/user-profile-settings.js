export const changeUserPasswordForm = [
  {
    name: "Password",
    label_en: "New Password",
    label_es: "Nueva Contrase\xF1a",
    type: "password",
    password: "true",
    value: "",
    read_only: !1,
    showDisplayPasswordType: "Button",
  },
  {
    name: "USER_CHANGE_PSWD",
    label_en: "Confirm",
    label_es: "Confirmar",
    type: "icon-button",
    icon_name: "icons:restore-page",
    icon_color: "aqua",
    confirmuser_required: !0,
    read_only: !1,
  },
];
export const changeUserEsignForm = [
  {
    name: "Esign",
    label_en: "New Esign",
    label_es: "Nueva Firma Electr\xF3nica",
    type: "password",
    password: "true",
    value: "",
    read_only: !1,
    showDisplayPasswordType: "Button",
  },
  {
    name: "USER_CHANGE_ESIGN",
    label_en: "Confirm",
    label_es: "Confirmar",
    type: "icon-button",
    icon_name: "icons:restore-page",
    icon_color: "aqua",
    esign_required: !0,
    read_only: !1,
  },
];
export const saveOpenTabsForm = [
  {
    name: "SET_DEFAULT_TABS_ON_LOGIN",
    label_en: "Save Open Tabs",
    label_es: "Guardar Pesta\xF1as Actuales",
    type: "button",
    icon_name: "icons:restore-page",
    icon_color: "aqua",
    esign_required: !1,
    read_only: !1,
  },
];
