define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.isTabOpenableWhenNotSopCertified = isTabOpenableWhenNotSopCertified;
  _exports.isTabOpenableWhenNotSopCertifiedConst = _exports.default_language = void 0;
  const default_language = "es";
  _exports.default_language = default_language;
  const isTabOpenableWhenNotSopCertifiedConst = !1;
  _exports.isTabOpenableWhenNotSopCertifiedConst = isTabOpenableWhenNotSopCertifiedConst;
  function isTabOpenableWhenNotSopCertified(procedureData) {
    //console.log('isTabOpenableWhenNotSopCertified');
    if (procedureData == void 0) {
      return !1;
    }
    var windowOpenableWhenNotSopCertified =
      procedureData.windowOpenableWhenNotSopCertifiedUserSopCertification;
    if (windowOpenableWhenNotSopCertified == void 0) {
      return !1;
    }
    if (
      "ENABLE" == windowOpenableWhenNotSopCertified.toUpperCase() ||
      "YES" == windowOpenableWhenNotSopCertified.toUpperCase()
    ) {
      return !0;
    }
    return !1;
  }
});
