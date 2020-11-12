define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.diagnosticToNotification = diagnosticToNotification;
  _exports.NotificationObj = void 0;
  /**
   * @mixinFunction
   * @polymer
   */ const NotificationObj = (superClass) => class extends superClass {};
  _exports.NotificationObj = NotificationObj;
  function diagnosticToNotification(respData, data) {
    var notifObj = [];
    if (data) {
      notifObj.category =
        data.schemaPrefix + "." + respData.category + "." + data.actionName;
    } else {
      notifObj.category = respData.category;
    }
    notifObj.label_en = respData.message_en;
    notifObj.label_es = respData.message_es;
    notifObj.diagnostic = respData.diagnostic;
    notifObj.is_error = respData.is_error;
    notifObj.relatedObjects = respData.relatedObjects; //console.log('diagnosticToNotification', 'notifObj', notifObj);
    return notifObj;
  }
});
