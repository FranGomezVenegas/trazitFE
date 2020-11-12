import {
  PolymerElement,
  html,
} from "../../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../../store.js";
import { sopPaneIconAndBadge_icons } from "./sop-icon-and-badge-settings.js";
import {
  SOP_pendingSOPTab,
  SOP_userMySOPTab,
} from "../../../Tabs/tabs-settings.js";
import "./sop-icon-and-badge-style.js";
import "../../../../../../node_modules/@polymer/paper-badge/paper-badge.js";
import {
  addSystemTab,
  setCurrentTab,
} from "../../../Redux/actions/tabs_actions.js";
/**
 * `sop-icon-and-badge` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */ class SopIconAndBadge extends connect(store)(PolymerElement) {
  static get properties() {
    return {
      iconName: { type: String, value: sopPaneIconAndBadge_icons.iconGreen },
      showPendingSOP: Boolean,
      sopPaneIconAndBadge_icons: {
        type: Object,
        value: sopPaneIconAndBadge_icons,
      },
    };
  }
  static get template() {
    return html`
      <style include="sop-icon-and-badge-style"></style>
      <div class="mainDiv">
        <img class="imageSOP" src="{{iconName}}" />
        <template is="dom-if" if="{{showPendingSOP}}">
          <paper-badge
            for="btn"
            id="pendingSop"
            class="pendingSop"
            on-click="pendingSOPClicked"
            label="{{contPendingUserSOPs}}"
          ></paper-badge>
        </template>
        <paper-badge
          for="btn2"
          id="allUserSop"
          class="allUserSop"
          on-click="AllUserSOPClicked"
          label="{{contAllUserSOPs}}"
        ></paper-badge>
      </div>
    `;
  }
  stateChanged(state) {
    if (!state.SOPS.userAllSop) {
      this.contAllUserSOPs = 0;
    } else {
      if (0 == state.SOPS.userAllSop.length) {
        this.contAllUserSOPs = 0;
      } else {
        if (!state.SOPS.userAllSop[0].my_sops) {
          this.contAllUserSOPs = 0;
        } else {
          this.contAllUserSOPs = state.SOPS.userAllSop[0].my_sops.length;
        }
      }
    }
    if (state.SOPS.userPendingSop == void 0) {
      this.contPendingUserSOPs = 0;
      this.showPendingSOP = !1;
      this.iconName = this.sopPaneIconAndBadge_icons.iconGreen;
      return;
    }
    if (0 == state.SOPS.userPendingSop.length) {
      this.contPendingUserSOPs = 0;
      this.showPendingSOP = !1;
      this.iconName = this.sopPaneIconAndBadge_icons.iconGreen;
    } else {
      var pendingUserSOPs = 0,
        i;
      for (i = 0; i < state.SOPS.userPendingSop.length; i++) {
        var pendingProcedureSOPs =
          pendingUserSOPs + state.SOPS.userPendingSop[i].pending_sops.length;
        pendingUserSOPs = pendingUserSOPs + pendingProcedureSOPs;
      }
      this.contPendingUserSOPs = pendingUserSOPs; //state.SOPS.userPendingSop[0].pending_sops.length;
      this.showPendingSOP = !0;
      this.iconName = this.sopPaneIconAndBadge_icons.iconRed;
    }
  }
  pendingSOPClicked() {
    store.dispatch(addSystemTab(SOP_pendingSOPTab));
    store.dispatch(setCurrentTab(SOP_pendingSOPTab));
  }
  AllUserSOPClicked() {
    store.dispatch(addSystemTab(SOP_userMySOPTab));
    store.dispatch(setCurrentTab(SOP_userMySOPTab));
  }
}
customElements.define("sop-icon-and-badge", SopIconAndBadge);
