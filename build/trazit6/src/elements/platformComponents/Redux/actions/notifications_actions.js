define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.addNotification = addNotification;
  _exports.doLogoutNotification = doLogoutNotification;
  _exports.DO_LOGOUT_NOTIFICATION = _exports.ADD_NOTIFICATION = void 0;
  const ADD_NOTIFICATION = "ADD_NOTIFICATION";
  _exports.ADD_NOTIFICATION = ADD_NOTIFICATION;
  const DO_LOGOUT_NOTIFICATION = "DO_LOGOUT_NOTIFICATION";
  _exports.DO_LOGOUT_NOTIFICATION = DO_LOGOUT_NOTIFICATION;
  function addNotification(notifObj) {
    //console.log('tab_actions.addTab', 'procedure', procedure);
    return { type: ADD_NOTIFICATION, notifObj: notifObj };
  }
  function doLogoutNotification() {
    //console.log('DoLogout');
    return { type: DO_LOGOUT_NOTIFICATION };
  }
});
