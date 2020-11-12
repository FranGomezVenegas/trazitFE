import {
  PolymerElement,
  html,
} from "../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../store.js";
import {
  platformHeaderFields,
  platformHeader_personFieldsName,
} from "./platform-header-settings.js";
import { appLogOut_logOutMessage } from "../../../../config/platform/main-layout/plaftorm-config.js";
import { doLogout, setAppLanguage } from "../../Redux/actions/app_actions.js";
import { doLogoutNotification } from "../../Redux/actions/notifications_actions.js";
import {
  addSystemTab,
  setCurrentTab,
  doLogoutTab,
} from "../../Redux/actions/tabs_actions.js";
import "./platform-header-style.js";
class PlatformHeader extends connect(store)(PolymerElement) {
  static get properties() {
    return {
      //selectedLanguage: String,
      platformHeaderFields: { type: Object, value: platformHeaderFields },
      platformHeader_personFieldsName: {
        type: Object,
        value: platformHeader_personFieldsName,
      },
      appLogOut_logOutMessage: { type: Object, value: appLogOut_logOutMessage },
    };
  }
  static get template() {
    return html`
      <style include="platform-header-style"></style>
      <div class="wapper">
        <template is="dom-if" if="[[platformHeaderFields.ribbonDisplay]]">
          <ribbon-element
            field="[[platformHeaderFields.ribbonField]]"
          ></ribbon-element>
        </template>

        <template is="dom-if" if="[[platformHeaderFields.fieldsLeftDisplay]]">
          <div class="platformHeaderLeftArea">
            <template
              is="dom-repeat"
              items="{{platformHeaderFields.fieldsLeft}}"
              as="currentfield"
            >
              <field-controller field="{{currentfield}}"></field-controller>
            </template>
          </div>
        </template>

        <template is="dom-if" if="[[platformHeaderFields.fieldsCenterDisplay]]">
          <div class="platformHeaderCenterArea" id="sessionInfo">
            <template
              is="dom-repeat"
              id="fcenter"
              items="{{platformHeaderFields.fieldsCenter}}"
              as="currentfield"
            >
              <field-controller
                style="color: #4285f4;"
                field="{{currentfield}}"
              ></field-controller>
            </template>
          </div>
        </template>
        <template is="dom-if" if="[[platformHeaderFields.fieldsRightDisplay]]">
          <div class="platformHeaderRightArea">
            <template
              is="dom-repeat"
              items="{{platformHeaderFields.fieldsRight}}"
              as="currentfield"
            >
              <field-controller
                field="{{currentfield}}"
                on-field-button-clicked="doLogout"
                on-avatar-item-clicked="platformHeaderRightClicked"
              ></field-controller>
            </template>
          </div>
        </template>
      </div>
    `;
  }
  platformHeaderRightClicked(e) {
    if (e.detail.avatarDefinition.tab) {
      store.dispatch(addSystemTab(e.detail.avatarDefinition.tab));
      store.dispatch(setCurrentTab(e.detail.avatarDefinition.tab));
    } else {
      this.doLogout();
    }
    return;
  }
  doLogout() {
    var message = "";
    switch (this.selectedLanguage) {
      case "es":
        message = this.appLogOut_logOutMessage.closedSession.message_es;
        break; //message=response.data.message_es; break;
      default:
        message = this.appLogOut_logOutMessage.closedSession.message_en;
        break; //message=response.data.message_en; break;
    }
    this.authenticated = !0;
    this.dispatchEvent(
      new CustomEvent("toast-message", {
        bubbles: !0,
        composed: !0,
        detail: message, //'User valid, please select your role to proceed'
      })
    );
    store.dispatch(doLogout(this.selectedLanguage));
    store.dispatch(doLogoutTab());
    store.dispatch(doLogoutNotification());
  }
  getHeaderInfo(user, session) {
    if (user.userInfo && user.userInfo.data && user.userInfo.data.first_name) {
      this.platformHeaderFields.fieldsCenter[0].label_es =
        "Hola " +
        user.userInfo.data.first_name +
        " " +
        user.userInfo.data.last_name +
        " (" +
        session.userRole +
        ") ";
      this.platformHeaderFields.fieldsCenter[0].label_en =
        "Hello " +
        user.userInfo.data.first_name +
        " " +
        user.userInfo.data.last_name +
        " (" +
        session.userRole +
        ") ";
    }
    if (session) {
      this.platformHeaderFields.fieldsCenter[1].label_es =
        "SESI\xD3N Id: " + session.sessionId + " Fecha: " + session.startDate;
      this.platformHeaderFields.fieldsCenter[1].label_en =
        "SESSION Id: " + session.sessionId + " Date: " + session.startDate;
    } //var elem=this.shadowRoot.getElementById("fcenter");
    //if (elem){elem.refresh();}
    //console.log(store.getState());
    //console.log('getHeaderInfo', 'user', user, 'session', session, this.platformHeaderFields);
  }
  stateChanged(state) {
    if (state.app.user) {
      var user = state.app.user;
    }
    if (state.app.session) {
      var session = state.app.session;
    }
    if (user && session) {
      this.getHeaderInfo(user, session);
    }
    this.selectedLanguage = state.app.user.appLanguage;
  }
}
customElements.define("platform-header", PlatformHeader);
