define([
  "exports",
  "../../store.js",
  "../store/token-mixin.js",
  "../store/user-session-mixin.js",
], function (_exports, _store, _tokenMixin, _userSessionMixin) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.loginMixin = void 0;
  const loginMixin = (superClass) =>
    class extends (0, _userSessionMixin.userSessionMixin)(
      (0, _tokenMixin.tokenMixin)(superClass)
    ) {
      DoLogin(userName) {
        console.log("DoLogin", "userName", userName);
        var personId = this.getPersonId(),
          datas = [];
        datas.paramsUrl = "personFieldsName=" + personId; //this.getPlatformHeader(datas);
        _store.store.dispatch(userName);
      }
    };
  _exports.loginMixin = loginMixin;
});
