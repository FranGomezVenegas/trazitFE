define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.isTabOpn = isTabOpn;
  _exports.schema_name = void 0;
  function isTabOpn(tabsList, tabName) {
    var isOpen = tabsList.find(function (curTab) {
      return tabName == curTab.tabName;
    });
    if (!isOpen) return !1;
    return !0;
  }
  const schema_name = "genoma-1";
  _exports.schema_name = schema_name;
});
