import {
  backendUrl,
  appHeaderListApiUrl,
} from "../../config/platform/logic/api-config.js";
import { store } from "../../store.js";
import { userInfo } from "../../elements/platformComponents/Redux/actions/app_actions.js";
import { ToastMethods } from "../functions/toast-methods.js";
import { ApiSettings } from "./api-settings.js"; //import { addNotification  } from '../elements/platformComponents/Redux/actions/notifications_actions';
//import {platformHeader_personFieldsName} from '../../elements/platformComponents/mainView/Headers/platform-header-settings';
/**
 * @mixinFunction
 * @polymer
 */ export const UserSession = (superClass) =>
  class extends ToastMethods(ApiSettings(superClass)) {
    getAPIPlatformHeader(data) {
      if (!data.finalToken) {
        return;
      }
      var platformHeader_personFieldsName = "",
        actionName = "getAppHeader",
        apiUrl = backendUrl + appHeaderListApiUrl + "?";
      apiUrl =
        apiUrl + "actionName=" + actionName + "&finalToken=" + data.finalToken;
      if (0 < platformHeader_personFieldsName.length) {
        apiUrl =
          apiUrl + "&personFieldsName=" + platformHeader_personFieldsName;
      }
      axios
        .get(apiUrl)
        .then((response) => {
          if (200 == response.status) {
            store.dispatch(userInfo(response.data));
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
