define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.saveOpenTabsForm=_exports.changeUserEsignForm=_exports.changeUserPasswordForm=void 0;const changeUserPasswordForm=[{name:"Password",label_en:"New Password",label_es:"Nueva Contrase\xF1a",type:"password",password:"true",value:"",read_only:!1,showDisplayPasswordType:"Button"},{name:"USER_CHANGE_PSWD",label_en:"Confirm",label_es:"Confirmar",type:"icon-button",icon_name:"icons:restore-page",icon_color:"aqua",confirmuser_required:!0,read_only:!1}];_exports.changeUserPasswordForm=changeUserPasswordForm;const changeUserEsignForm=[{name:"Esign",label_en:"New Esign",label_es:"Nueva Firma Electr\xF3nica",type:"password",password:"true",value:"",read_only:!1,showDisplayPasswordType:"Button"},{name:"USER_CHANGE_ESIGN",label_en:"Confirm",label_es:"Confirmar",type:"icon-button",icon_name:"icons:restore-page",icon_color:"aqua",esign_required:!0,read_only:!1}];_exports.changeUserEsignForm=changeUserEsignForm;const saveOpenTabsForm=[{name:"SET_DEFAULT_TABS_ON_LOGIN",label_en:"Save Open Tabs",label_es:"Guardar Pesta\xF1as Actuales",type:"button",icon_name:"icons:restore-page",icon_color:"aqua",esign_required:!1,read_only:!1}];_exports.saveOpenTabsForm=saveOpenTabsForm});