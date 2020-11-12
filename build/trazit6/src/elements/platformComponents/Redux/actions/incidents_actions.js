define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.userOpenIncidents = userOpenIncidents;
  _exports.selectedUserIncidentDetail = selectedUserIncidentDetail;
  _exports.SELECTED_USER_INCIDENT_DETAIL = _exports.USER_OPEN_INCIDENTS = void 0;
  const USER_OPEN_INCIDENTS = "USER_OPEN_INCIDENTS";
  _exports.USER_OPEN_INCIDENTS = USER_OPEN_INCIDENTS;
  const SELECTED_USER_INCIDENT_DETAIL = "SELECTED_USER_INCIDENT_DETAIL";
  _exports.SELECTED_USER_INCIDENT_DETAIL = SELECTED_USER_INCIDENT_DETAIL;
  function userOpenIncidents(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: USER_OPEN_INCIDENTS, DATA: data };
  }
  function selectedUserIncidentDetail(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: SELECTED_USER_INCIDENT_DETAIL, DATA: data };
  }
});
