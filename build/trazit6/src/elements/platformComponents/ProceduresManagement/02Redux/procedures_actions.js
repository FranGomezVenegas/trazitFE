define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.getProceduresList = getProceduresList;
  _exports.setSelectedProcedure = setSelectedProcedure;
  _exports.SET_SELECTED_PROCEDURE = _exports.GET_PROCEDURES_LIST = void 0;
  const GET_PROCEDURES_LIST = "GET_PROCEDURES_LIST";
  _exports.GET_PROCEDURES_LIST = GET_PROCEDURES_LIST;
  const SET_SELECTED_PROCEDURE = "SET_SELECTED_PROCEDURE";
  _exports.SET_SELECTED_PROCEDURE = SET_SELECTED_PROCEDURE;
  function getProceduresList(data) {
    //console.log('em-demo-a_actions.getPrograms', data);
    return { type: GET_PROCEDURES_LIST, DATA: data };
  }
  function setSelectedProcedure(data) {
    //console.log('em-demo-a_actions.getPrograms', data);
    return { type: SET_SELECTED_PROCEDURE, DATA: data };
  }
});
