import { store } from "../../store.js";
import { tokenMixin } from "../store/token-mixin.js";
import { userSessionMixin } from "../store/user-session-mixin.js";
export const loginMixin = (superClass) =>
  class extends userSessionMixin(tokenMixin(superClass)) {
    DoLogin(userName) {
      console.log("DoLogin", "userName", userName);
      var personId = this.getPersonId(),
        datas = [];
      datas.paramsUrl = "personFieldsName=" + personId; //this.getPlatformHeader(datas);
      store.dispatch(userName);
    }
  };
