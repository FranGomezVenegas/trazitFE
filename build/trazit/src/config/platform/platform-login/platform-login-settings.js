export const appLogin_logoOnTop = {
  display: !0,
  url: "./images/header/trazit-removebg.png",
};
export const appLogin_authenticationMessage = {
  connectedSuccess_singleRole: {
    message_en: "Valid user, Starting session ... please wait",
    message_es: "Usuario v\xE1lido, iniciando sesi\xF3n ... por favor espere",
  },
  connectedSuccess: {
    message_en: "Valid user, please proceed selecting the role",
    message_es: "Usuario v\xE1lido, por favor escoja rol",
  },
  connectedFails: {
    message_en: "I guess there is no user with those credentials",
    message_es: "Me temo que el usuario o la contrase\xF1a no son correctos.",
  },
};
export const appLogin_ribbon = {
  displayRibbon: !1,
  field: [{ label_en: "Draft", label_es: "Provisional" }],
};
export const appLogin_formFields = [
  {
    name: "title",
    label_en: "Trace it !!!",
    label_es: "\xA1\xA1 TR\xC1ZALO !!",
    type: "title",
    size: "h3",
    /* "style": "color: var(--paper-light-blue-50);", */ color: "#1676f3",
    read_only: !0,
  },
  {
    name: "User",
    label_en: "User",
    label_es: "Usuario",
    type: "text",
    password: "false",
    value: "",
    read_only: !0,
  },
  {
    name: "password",
    label_en: "Password",
    label_es: "Contrase\xF1a",
    type: "password",
    password: "true",
    value: "",
    read_only: !1,
    showDisplayPasswordType: "Button",
  },
  {
    name: "buttonAccess",
    label_en: "Access",
    label_es: "Entrar",
    type: "button",
    value: "",
    read_only: !1,
  },
  {
    name: "userRole",
    label_en: "Role",
    label_es: "Rol",
    type: "list",
    value: "Admin",
    read_only: !0,
    items: [
      { keyName: "Analyst", keyValue_en: "Analyst", keyValue_es: "valor1" },
    ],
  },
  {
    name: "video",
    label_en: "Access",
    label_es: "Entrar",
    type: "icon-button",
    icon_name: "icons:camera-enhance", //"icons:settings-input-svideo", //"notification:ondemand-video",
    value: "",
    read_only: !1,
  },
];
export const appLogOut_logOutMessage = {
  closedSession: {
    message_en: "Session closed",
    message_es: "Sesi\xF3n cerrada",
  },
};
