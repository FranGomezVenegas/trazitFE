import { store } from "../../store.js";
export const ToastMethods = (superClass) =>
  class extends superClass {
    toastSuccessMessage(msgObj) {
      var state = store.getState(),
        lang = state.app.user.appLanguage,
        message = ""; //console.log('call to toastErrorMessage', 'lang', lang);
      switch (lang) {
        case "es":
          message = msgObj.message_es;
          break; //message=response.data.message_es; break;
        default:
          message = msgObj.message_en;
          break; //message=response.data.message_en; break;
      }
      this.dispatchEvent(
        new CustomEvent("toast-message", {
          bubbles: !0,
          composed: !0,
          detail: message,
        })
      );
    }
    toastSuccessMessageForSpecificLanguage(msgObj, lang) {
      var message = "";
      switch (lang) {
        case "es":
          message = msgObj.message_es;
          break; //message=response.data.message_es; break;
        default:
          message = msgObj.message_en;
          break; //message=response.data.message_en; break;
      }
      this.dispatchEvent(
        new CustomEvent("toast-message", {
          bubbles: !0,
          composed: !0,
          detail: message,
        })
      );
    }
    toastErrorMessage(msgObj) {
      //console.log('call to toastErrorMessage');
      var state = store.getState(),
        lang = state.app.user.appLanguage,
        message = "";
      switch (lang) {
        case "es":
          message = msgObj.message_es;
          break; //message=response.data.message_es; break;
        default:
          message = msgObj.message_en;
          break; //message=response.data.message_en; break;
      }
      this.dispatchEvent(
        new CustomEvent("toast-error", {
          bubbles: !0,
          composed: !0,
          detail: message,
        })
      );
    }
    toastErrorMessageWithApiResponse(msgObj, apiResponse) {
      console.log("call to toastErrorMessageWithApiResponse");
      var state = store.getState(),
        lang = state.app.user.appLanguage,
        message = "";
      switch (lang) {
        case "es":
          message = msgObj.message_es + " " + apiResponse.message_es;
          break; //message=response.data.message_es; break;
        default:
          message = msgObj.message_en + " " + apiResponse.message_es;
          break; //message=response.data.message_en; break;
      }
      this.dispatchEvent(
        new CustomEvent("toast-error", {
          bubbles: !0,
          composed: !0,
          detail: message,
        })
      );
    }
  };
