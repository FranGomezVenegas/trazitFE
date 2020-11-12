define(["exports", "../../store.js"], function (_exports, _store) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.userConfirmationMixin = void 0;
  const userConfirmationMixin = (superClass) =>
    class extends superClass {
      getEsignPhrase() {
        var state = _store.store.getState(),
          usSgn = state.esignDialog.sgn;
        return usSgn;
      }
      getUserPhrase() {
        var state = _store.store.getState(),
          usr = state.confirmUserDialog.user;
        return usr;
      }
      getUserPwPhrase() {
        var state = _store.store.getState(),
          usrPw = state.confirmUserDialog.userPw;
        return usrPw;
      }
    };
  _exports.userConfirmationMixin = userConfirmationMixin;
});
