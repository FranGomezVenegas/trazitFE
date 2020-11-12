import {
  PolymerElement,
  html,
} from "../../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../../store.js";
import "../../../../../../node_modules/@polymer/iron-collapse/iron-collapse.js";
import "../../../../../../node_modules/@polymer/iron-selector/iron-selector.js";
import { FieldsMethods } from "../../../../../platform-mixins/functions/fields-methods.js";
import { notificationsPaneTitle } from "./notifications-pane-settings.js";
import "./notifications-pane-style.js";
class NotificationsPane extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      language: { type: String }, //, observer:"getTextSOP"},
      horizontal: { type: Boolean },
      opened: { type: Boolean, value: !1, reflectToAttribute: !0 },
      noAnimation: { type: Boolean, value: !1 },
      notifications: Number,
      paneTitle: { type: Object, value: notificationsPaneTitle },
      titleValue: String,
      titleIcon: String,
      notificationPaneIsEmpty: { type: Boolean, value: !0 },
    };
  }
  stateChanged(state) {
    this.language = state.app.user.appLanguage;
    if (null != state.notifications) {
      this.numNotifications = state.notifications.totalNotifications;
      this.notifications = state.notifications.notifications;
      if (0 < this.numNotifications) {
        this.notificationPaneIsEmpty = !1;
      }
    }
    this.getTextSOP();
  }
  _sortNotifications(a, b) {
    //console.log(a[0], b[0]);
    if (a[0] === b[0]) return 0;
    return a[0] < b[0] ? 1 : -1;
  }
  toggle() {
    this.$.NOTIFPANE.toggle();
    this.getTextSOP();
  }
  getTextSOP() {
    if (this.opened) {
      this.titleValue =
        this.labelValue(this.language, this.paneTitle.open) +
        " " +
        this.numNotifications;
      this.titleIcon = this.paneTitle.open.icon_name;
      return;
    }
    this.titleValue =
      this.labelValue(this.language, this.paneTitle.closed) +
      " " +
      this.numNotifications;
    this.titleIcon = this.paneTitle.closed.icon_name;
  }
  textColor(diagnoses) {
    switch (diagnoses) {
      case "CORRECT":
        return "textBlue";
      case "ERROR":
        return "textRed";
      case "LABPLANET_TRUE":
        return "textBlue";
      case "LABPLANET_FALSE":
        return "textRed";
      default:
        return "textNormal";
    }
  }
  static get template() {
    return html`
      <style include="notifications-pane-style"></style>
      <div id="title" class="title">
        <iron-icon icon="[[titleIcon]]" on-click="toggle"></iron-icon>
        <vaadin-button
          id="trigger"
          on-click="toggle"
          aria-expanded$="[[opened]]"
          aria-controls="collapse"
          >[[titleValue]]</vaadin-button
        >
      </div>
      <iron-collapse
        id="NOTIFPANE"
        opened="{{opened}}"
        horizontal="[[horizontal]]"
        no-animation="[[noAnimation]]"
        tabindex="1"
      >
        <template is="dom-if" if="{{notificationPaneIsEmpty}}">
          <p class$="{{textColor('LABPLANET_TRUE')}}">
            {{labelValue(language, paneTitle.empty)}}
          </p>
        </template>
        <template is="dom-if" if="{{!notificationPaneIsEmpty}}">
          <template
            is="dom-repeat"
            items="{{notifications}}"
            sort="_sortNotifications"
            as="currNotif"
          >
            <p class$="{{textColor(currNotif.1.diagnostic)}}">
              {{currNotif.1.category}} : {{labelValue(language, currNotif.1)}}
            </p>
          </template>
        </template>
      </iron-collapse>
    `;
  }
}
customElements.define("notifications-pane", NotificationsPane);
