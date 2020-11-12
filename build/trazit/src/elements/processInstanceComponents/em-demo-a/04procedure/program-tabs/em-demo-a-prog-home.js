import {
  PolymerElement,
  html,
} from "../../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../../store.js"; // import '@polymer/paper-tabs/paper-tabs';
// import '@polymer/paper-tabs/paper-tab';
// import '@polymer/iron-pages/iron-pages';
import "../../../../internalComponents/Charts/chart-controller.js";
import {
  windowDefinition,
  em_home_tab_subTabs,
  programHome_defaultTab,
  hometab_area,
} from "../../03config/Programs/em-demo-a-progtab-home-settings.js";
import "../../03config/Programs/em-demo-a-progtab-home-settings.js";
import { FieldsMethods } from "../../../../../platform-mixins/functions/fields-methods.js";
class EmDemoAProgHome extends FieldsMethods(connect(store)(PolymerElement)) {
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    if (null != state.emDemoA) {
      this.selectedProgram = state.emDemoA.selectedProgram;
    }
  }
  static get properties() {
    return {
      windowDefinition: { type: Object, value: windowDefinition },
      selectedLanguage: { type: String },
      selectedProgram: { type: Object },
      homeTabSubTabs: { type: Object, value: em_home_tab_subTabs },
      currentSubTab: { type: String, value: programHome_defaultTab },
      hometab_area: { type: Object, value: hometab_area },
    };
  }
  static get template() {
    return html`
      <style include="em-demo-a-progtab-home-style"></style>
      <div id="program_definition" class="programTabs">
        <paper-tabs
          selected="{{currentSubTab}}"
          attr-for-selected="name"
          noink
          scrollable
        >
          <template is="dom-repeat" items="[[homeTabSubTabs]]" as="tab">
            <paper-tab
              class="tabItem"
              esign-required="[[tab.esign_required]]"
              confirmuser-required="[[tab.confirmUser_required]]"
              on-click="tabSelected"
              name="[[tab.tabName]]"
              tab-name="[[tab.tabName]]"
              tab-index="{{index}}"
              >{{tabLabelValue(selectedLanguage, tab)}}
            </paper-tab>
          </template>
        </paper-tabs>
        <iron-pages selected="[[currentSubTab]]" attr-for-selected="id">
          {{id}}
          <div class="main" id="hometab_home">
            <p class="tableTitle">
              {{labelValue(selectedLanguage, windowDefinition.windowTitle)}}
              {{selectedProgram.name}}
            </p>
            <template
              is="dom-repeat"
              items="[[windowDefinition.charts]]"
              as="curchart"
            >
              <chart-controller
                class="chart"
                chart-definition="{{curchart}}"
                data-object="{{selectedProgram}}"
              ></chart-controller>
            </template>
          </div>
          <div class="main" id="hometab_area">
            <p class="tableTitle">
              {{labelValue(selectedLanguage, hometab_area.windowTitle)}}
              {{selectedProgram.name}}
            </p>
            <template
              is="dom-repeat"
              items="[[hometab_area.charts]]"
              as="curchart"
            >
              <chart-controller
                class="chart"
                chart-definition="{{curchart}}"
                data-object="{{selectedProgram}}"
              ></chart-controller>
            </template>
          </div>
        </iron-pages>
      </div>
    `;
  }
}
customElements.define("em-demo-a-prog-home", EmDemoAProgHome);
