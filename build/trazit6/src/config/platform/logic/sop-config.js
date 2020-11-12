define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.sopMyPendingSops_buttons = _exports.sopMyPendingSops_cardContent = _exports.sopMySops_cardContent = _exports.sopMySops_buttons = _exports.sopStatusLabel = _exports.sopUserPendingSop_fieldToRetrieve = _exports.sopUserAllSop_fieldToRetrieve = _exports.sopUserPendingSop = _exports.sopUserAllSop = void 0;
  const sopUserAllSop = {
    fieldToRetrieve: "procedure|sop_id|brief_summary|sop_name|status|file_link",
  };
  _exports.sopUserAllSop = sopUserAllSop;
  const sopUserPendingSop = {
    fieldToRetrieve: "procedure|sop_id|brief_summary|sop_name|status|file_link",
  };
  _exports.sopUserPendingSop = sopUserPendingSop;
  const sopUserAllSop_fieldToRetrieve =
    "procedure|sop_id|brief_summary|sop_name|status|file_link";
  _exports.sopUserAllSop_fieldToRetrieve = sopUserAllSop_fieldToRetrieve;
  const sopUserPendingSop_fieldToRetrieve =
    "procedure|sop_id|brief_summary|sop_name|status|file_link"; // export const sopUserProcedureSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|sop_version|sop_revision|current_status|file_link';
  _exports.sopUserPendingSop_fieldToRetrieve = sopUserPendingSop_fieldToRetrieve;
  const sopStatusLabel = {
    pass: { label_en: "Certified", label_es: "Certificado" },
    not_pass: { label_en: "Not Certified", label_es: "No Certificado" },
  };
  _exports.sopStatusLabel = sopStatusLabel;
  const sopMySops_buttons = [
    {
      name: "SOP_MARK_AS_COMPLETED",
      label_en: "Mark Completed",
      label_es: "Marcar Completado",
      type: "icon-button",
      icon_name: "icons:restore-page",
      icon_color: "aqua",
      esign_required: !1,
      read_only: !1,
    },
  ];
  _exports.sopMySops_buttons = sopMySops_buttons;
  const sopMySops_cardContent = {
    display_pdf_link: !0,
    display_certification_status_icon: !0,
    sopFieldsToDisplay: ["procedure", "sop_name", "brief_summary"],
  };
  _exports.sopMySops_cardContent = sopMySops_cardContent;
  const sopMyPendingSops_cardContent = {
    display_pdf_link: !0,
    display_certification_status_icon: !0,
    sopFieldsToDisplay: ["procedure", "sop_name", "brief_summary"],
  };
  _exports.sopMyPendingSops_cardContent = sopMyPendingSops_cardContent;
  const sopMyPendingSops_buttons = [
    {
      name: "SOP_MARK_AS_COMPLETED",
      label_en: "Mark Completed",
      label_es: "Marcar Completado",
      type: "icon-button",
      icon_name: "icons:restore-page",
      icon_color: "aqua",
      esign_required: !1,
      read_only: !1,
    },
  ];
  _exports.sopMyPendingSops_buttons = sopMyPendingSops_buttons;
});
