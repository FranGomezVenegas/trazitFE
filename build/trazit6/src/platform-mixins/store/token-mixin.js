define(["exports", "../../store.js"], function (_exports, _store) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.tokenMixin = void 0;
  const tokenMixin = (superClass) =>
    class extends superClass {
      getPartialToken() {
        var state = _store.store.getState(),
          partialToken = state.app.user.partialToken;
        return partialToken;
      }
      getFinalToken() {
        var state = _store.store.getState(),
          finalToken = state.app.user.finalToken;
        return finalToken;
      }
    };
  _exports.tokenMixin = tokenMixin;
});
