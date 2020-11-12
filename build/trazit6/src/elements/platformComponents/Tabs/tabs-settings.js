define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.Procedures_ProcedureManagement = _exports.User_VideoTutorialTab = _exports.User_UserProfileTab = _exports.Incidents_ManagementTab = _exports.SOP_userMySOPTab = _exports.SOP_pendingSOPTab = void 0;
  const SOP_pendingSOPTab = {
    lp_frontend_page_name: "../Tabs/SOP/MyPendingSOPs/my-pending-sops.js",
    tabName: "sop-myPendingSops",
    tabLabel_en: "My Pending SOPs",
    tabLabel_es: "Mis PNT Pendientes",
    procedure: "sop",
    tabEsignRequired: !1,
    tabConfirmUserRequired: !1,
    systemTab: !0,
  };
  _exports.SOP_pendingSOPTab = SOP_pendingSOPTab;
  const SOP_userMySOPTab = {
    lp_frontend_page_name: "../Tabs/SOP/MySOPs/my-sops.js",
    tabName: "sop-allMySops",
    tabLabel_en: "All My SOPs",
    tabLabel_es: "Mis PNTs",
    procedure: "sop",
    tabEsignRequired: !1,
    tabConfirmUserRequired: !1,
    systemTab: !0,
  };
  _exports.SOP_userMySOPTab = SOP_userMySOPTab;
  const Incidents_ManagementTab = {
    lp_frontend_page_name: "../Tabs/Incidents/incident-management.js",
    tabName: "incident-management",
    tabLabel_en: "Incidents",
    tabLabel_es: "Incidencias",
    procedure: "incident",
    systemTab: !0,
    tabEsignRequired: !1,
    tabConfirmUserRequired: !1,
  };
  _exports.Incidents_ManagementTab = Incidents_ManagementTab;
  const User_UserProfileTab = {
    lp_frontend_page_name: "../Tabs/User/user-profile/user-profile.js",
    tabName: "user-profile",
    tabLabel_en: "User Profile",
    tabLabel_es: "Perfil de usuario",
    procedure: "user",
    tabEsignRequired: !1,
    tabConfirmUserRequired: !0,
    systemTab: !0,
  };
  _exports.User_UserProfileTab = User_UserProfileTab;
  const User_VideoTutorialTab = {
    lp_frontend_page_name: "../Tabs/VideoTutorial/videotutorial-tab.js",
    tabName: "videotutorial-tab",
    tabLabel_en: "Video Tutorial",
    tabLabel_es: "Tutorial en Video",
    procedure: "videotutorial",
    tabEsignRequired: !1,
    tabConfirmUserRequired: !0,
    systemTab: !0,
  };
  _exports.User_VideoTutorialTab = User_VideoTutorialTab;
  const Procedures_ProcedureManagement = {
    lp_frontend_page_name:
      "../../platformComponents/ProceduresManagement/04procedure/procedure-management.js",
    tabName: "procedure-management",
    tabLabel_en: "Procedure Management",
    tabLabel_es: "Gesti\xF3n de Proceso",
    procedure: "procedure",
    tabEsignRequired: !1,
    tabConfirmUserRequired: !0,
    systemTab: !0,
  };
  _exports.Procedures_ProcedureManagement = Procedures_ProcedureManagement;
});
