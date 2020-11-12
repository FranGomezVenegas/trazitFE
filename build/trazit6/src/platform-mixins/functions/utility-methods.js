define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.UtilityMethods = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const UtilityMethods = (superClass) =>
    class extends superClass {
      valuePosicInArray(array, value) {
        return array.findIndex(function (field) {
          return value == field.name;
        });
      }
      stringToArray(value, rowSeparator, fieldSeparator) {
        var res = [],
          resofres = [],
          rowArr = [];
        if ((rowSeparator = "|")) {
          res = value.split("|");
        } else {
          res = value.split(rowSeparator);
        }
        if (fieldSeparator == void 0) {
          return res;
        }
        var i = 0;
        for (i = 0; i < res.length; i++) {
          rowArr = res[i].split("*");
          resofres[i] = rowArr;
        }
        return resofres;
      }
    };
  _exports.UtilityMethods = UtilityMethods;
});
