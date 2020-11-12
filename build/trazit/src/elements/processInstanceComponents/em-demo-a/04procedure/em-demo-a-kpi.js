import {
  PolymerElement,
  html,
} from "../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../store.js";
import "../../../internalComponents/Charts/chart-controller.js";
import {
  windowDefinition,
  moduleKPIs,
} from "../03config/em-demo-a-kpi-settings.js";
import "../03config/em-demo-a-kpi-settings.js";
import { FieldsMethods } from "../../../../platform-mixins/functions/fields-methods.js";
import { FrontendEndpointsEnvMonitKpis } from "../01moduleFunctionality/endpoints-frontend-env-monit-kpis.js";
class EmDemoAKpi extends FieldsMethods(
  FrontendEndpointsEnvMonitKpis(connect(store)(PolymerElement))
) {
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    if (null != state.emDemoA) {
      var kpis = [];
      kpis.sampleStatCounterByStage = state.emDemoA.sampleStatsCounterByStage;
      kpis.sampleStatsLastNresults = state.emDemoA.sampleStatsLastNresults;
      this.kpiData = kpis;
    }
  }
  static get properties() {
    return {
      windowDefinition: { type: Object, value: windowDefinition },
      selectedLanguage: { type: String },
      kpiData: { type: Object },
      moduleKPIs: { type: Object, value: moduleKPIs },
    };
  }
  static get template() {
    return html`
      <style include="em-demo-a-kpi-style"></style>
      <div class="main">
        <p class="tableTitle">
          {{labelValue(selectedLanguage, windowDefinition.windowTitle)}}
        </p>
        <template
          is="dom-repeat"
          items="[[windowDefinition.charts]]"
          as="curchart"
        >
          <chart-controller
            class="chart"
            chart-definition="{{curchart}}"
            data-object="{{kpiData}}"
          ></chart-controller>
        </template>
      </div>
    `;
  }
  refreshWindow() {
    this.loadKPIPage();
  }
  loadKPIPage() {
    this.setKPIs(this.moduleKPIs.kpis);
  }
  ready() {
    super.ready();
    this.loadKPIPage();
  }
}
customElements.define("em-demo-a-kpi", EmDemoAKpi);
