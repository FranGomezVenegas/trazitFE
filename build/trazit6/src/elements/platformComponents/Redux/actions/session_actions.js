define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.addSession = addSession;
  _exports.ADD_SESSION = void 0;
  const ADD_SESSION = "ADD_SESSION";
  _exports.ADD_SESSION = ADD_SESSION;
  function addSession(data) {
    //    console.log('session_actions.addSession', 'data', data);
    return {
      type: ADD_SESSION,
      sessionId: data.sessionId,
      userRole: data.userRole,
      startDate: data.startDate, //tabsOpenOnLogin: data.tabsOpenOnLogin
    };
  }
});
