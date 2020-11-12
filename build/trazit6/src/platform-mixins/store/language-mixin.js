define(["exports", "../../store.js"], function (_exports, _store) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.languageMixin = void 0;
  const languageMixin = (superClass) =>
    class extends superClass {
      getLanguage() {
        var state = _store.store.getState(),
          appLanguage = state.app.user.appLanguage;
        return appLanguage;
      }
    };
  _exports.languageMixin = languageMixin;
});
