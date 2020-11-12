define(["exports", "../../store.js"], function (_exports, _store) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.userSessionMixin = void 0;
  const userSessionMixin = (superClass) =>
    class extends superClass {
      getStoreTabs() {
        var state = _store.store.getState();
        return state.app.user.tabsOpenOnLogin;
      }
      getPersonId() {
        var state = _store.store.getState();
        return state.app.user.personId;
      }
      getUserName() {
        var state = _store.store.getState();
        return state.app.user.userName;
      }
      getTabsOpenOnLogin() {
        var state = _store.store.getState();
        return state.app.user.tabsOpenOnLogin;
      }
    };
  _exports.userSessionMixin = userSessionMixin;
});
