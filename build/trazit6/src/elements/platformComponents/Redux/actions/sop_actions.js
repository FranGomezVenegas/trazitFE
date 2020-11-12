define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.userAllSop = userAllSop;
  _exports.userPendingSop = userPendingSop;
  _exports.procedureSops = procedureSops;
  _exports.PROCEDURE_SOPS = _exports.USER_PENDING_SOP = _exports.USER_ALL_SOP = void 0;
  const USER_ALL_SOP = "USER_ALL_SOP";
  _exports.USER_ALL_SOP = USER_ALL_SOP;
  const USER_PENDING_SOP = "USER_PENDING_SOP";
  _exports.USER_PENDING_SOP = USER_PENDING_SOP;
  const PROCEDURE_SOPS = "PROCEDURE_SOPS";
  _exports.PROCEDURE_SOPS = PROCEDURE_SOPS;
  function userAllSop(data) {
    //  console.log('userAllSop', data);
    return { type: USER_ALL_SOP, DATA: data };
  }
  function userPendingSop(data) {
    //    console.log('userPendingSop', data);
    return { type: USER_PENDING_SOP, DATA: data };
  }
  function procedureSops(data) {
    //  console.log('process-us_actions.sampleTemplates', data);
    return { type: PROCEDURE_SOPS, DATA: data };
  }
});
