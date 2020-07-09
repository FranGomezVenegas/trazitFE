define(["exports","../../Tabs/tabs-settings.js"],function(_exports,_tabsSettings){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.platformHeaderFields=_exports.platformHeader_personFieldsName=void 0;const platformHeader_personFieldsName="";//'first_name|last_name|photo';
_exports.platformHeader_personFieldsName=platformHeader_personFieldsName;const platformHeaderFields={ribbonDisplay:!1,ribbonField:{label_en:"Draft",label_es:"Provisional",color:"aqua"},fieldsLeftDisplay:!0,fieldsLeft:[{name:"labplanet_logo",source:"./images/header/labplanet.png",aligned:"center",label_en:"User",label_es:"Usuario",type:"logo-circle",password:"False",value:"labplanet",float:"left",read_only:!0},{name:"customer_logo",source:"./images/header/homeLab.png",aligned:"center",label_en:"User",label_es:"Usuario",type:"logo-circle",password:"False",value:"labplanet",read_only:!0}],fieldsCenterDisplay:!0,fieldsCenter:[// {
//   "name": "labplanet_title",
//   "source": "./images/platform-login/labplanet.png",
//   "aligned": "center",
//   "label_en": "LabPLANET, New Lab Solutions era", "label_es": "LabPLANET, Nueva era para tu Lab",
//   "type": "zzzgoogle-fonts",
//   "font_family": "Annie Use Your Telescope",
//   "font_size": '42px',
//   "margin-top": '0px',
//   "margin-bottom": '0px',
//   "color": '#4285f4',
//   "password": "False",
//   "value": "labplanet",
//   "float": "left",
//   "read_only": true
//   }, 
{name:"user_info",aligned:"center",label_en:", Welcome",label_es:", Bienvenido",type:"google-fonts",font_family:"Annie Use Your Telescope",font_size:"10px",password:"false",value:"labplanet",float:"left",read_only:!0},{name:"session_data",aligned:"center",label_en:"session data",label_es:"datos de sesi\xF3n",type:"google-fonts",font_family:"Annie Use Your Telescope",font_size:"10px",password:"False",value:"labplanet",float:"left",read_only:!0}],fieldsRightDisplay:!0,fieldsRight:[{name:"procedure-management",source:"./images/header/procedure-management.png",aligned:"center",label_en:"Procedure",label_es:"Proceso",type:"avatar",password:"False",value:"",read_only:!1,tab:_tabsSettings.Procedures_ProcedureManagement},{name:"incidents",source:"./images/header/technical-support-computer-icons-service-support.jpg",aligned:"center",label_en:"Incidents",label_es:"Incidencias",type:"avatar",password:"False",value:"",read_only:!0,tab:_tabsSettings.Incidents_ManagementTab},{name:"user_avatar",source:"./images/header/personNoFace.jpg",aligned:"center",label_en:"User",label_es:"Usuario",type:"avatar",password:"False",value:"",read_only:!0,tab:_tabsSettings.User_UserProfileTab},{name:"doLogout",label_en:"Close Session",label_es:"Cerrar Sesi\xF3n",type:"icon-button",icon_name:"icons:exit-to-app",icon_color:"#032bbc",esign_required:!1,read_only:!1}]};_exports.platformHeaderFields=platformHeaderFields});