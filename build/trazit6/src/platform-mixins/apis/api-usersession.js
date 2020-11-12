define([
  "exports",
  "../../config/platform/logic/api-config.js",
  "../../store.js",
  "../../elements/platformComponents/Redux/actions/app_actions.js",
  "../functions/toast-methods.js",
  "./api-settings.js",
], function (
  _exports,
  _apiConfig,
  _store,
  _app_actions,
  _toastMethods,
  _apiSettings
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.UserSession = void 0; //import { addNotification  } from '../elements/platformComponents/Redux/actions/notifications_actions';
  //import {platformHeader_personFieldsName} from '../../elements/platformComponents/mainView/Headers/platform-header-settings';
  /**
   * @mixinFunction
   * @polymer
   */ const UserSession = (superClass) =>
    class extends (0, _toastMethods.ToastMethods)(
      (0, _apiSettings.ApiSettings)(superClass)
    ) {
      getAPIPlatformHeader(data) {
        if (!data.finalToken) {
          return;
        }
        var platformHeader_personFieldsName = "",
          actionName = "getAppHeader",
          apiUrl = _apiConfig.backendUrl + _apiConfig.appHeaderListApiUrl + "?";
        apiUrl =
          apiUrl +
          "actionName=" +
          actionName +
          "&finalToken=" +
          data.finalToken;
        if (0 < platformHeader_personFieldsName.length) {
          apiUrl =
            apiUrl + "&personFieldsName=" + platformHeader_personFieldsName;
        }
        axios
          .get(apiUrl)
          .then((response) => {
            if (200 == response.status) {
              _store.store.dispatch((0, _app_actions.userInfo)(response.data));
              return;
            } else {
              this.toastErrorMessageWithApiResponse(
                endpoints_returningError.response_not_status_200,
                response
              );
              return;
            }
          })
          .catch(function (error) {
            this.toastErrorMessageWithApiResponse(
              endpoints_returningError.response_error,
              error
            );
            return;
          })
          .then(function () {});
      }
    };
  _exports.UserSession = UserSession;
});
