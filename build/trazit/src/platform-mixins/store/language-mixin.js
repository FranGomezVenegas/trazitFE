import { store } from "../../store.js";
export const languageMixin = (superClass) =>
  class extends superClass {
    getLanguage() {
      var state = store.getState(),
        appLanguage = state.app.user.appLanguage;
      return appLanguage;
    }
  };
