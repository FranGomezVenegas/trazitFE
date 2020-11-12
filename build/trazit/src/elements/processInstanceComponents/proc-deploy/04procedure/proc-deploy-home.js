import {
  PolymerElement,
  html,
} from "../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../store.js";
import "../../../internalComponents/Charts/chart-controller.js";
import { windowDefinition } from "../03config/proc-deploy-home-settings.js";
import "../03config/proc-deploy-home-settings.js";
import { FieldsMethods } from "../../../../platform-mixins/functions/fields-methods.js";
import { FrontendEndpointsEnvMonitSamples } from "../01moduleFunctionality/endpoints-frontend-env-monit-samples.js"; //import './proc-deploy-kpi';
class procDeployHome extends FieldsMethods(
  FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement))
) {
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    if (null != state.procDeploy) {
      var kpis = [];
      if (state.procDeploy.kpis) {
        kpis = state.procDeploy.kpis;
      }
      kpis.sampleStatCounterByStage =
        state.procDeploy.sampleStatsCounterByStage;
      kpis.sampleStatsLastNresults = state.procDeploy.sampleStatsLastNresults;
      console.log("kpis", kpis);
      this.kpiData = kpis;
    }
  }
  static get properties() {
    return {
      windowDefinition: { type: Object, value: windowDefinition },
      selectedLanguage: { type: String },
      kpiData: { type: Object },
    };
  }
  static get template() {
    return html`
      <style include="proc-deploy-home-style"></style>
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
        <template
          is="dom-repeat"
          items="[[windowDefinition.kpiCharts]]"
          as="curkpichart"
        >
          <chart-controller
            class="chart"
            chart-definition="{{curkpichart}}"
            data-object="{{kpiData}}"
          ></chart-controller>
        </template>
      </div>
      <!-- <proc-deploy-kpi id="kpis"></proc-deploy-kpi> -->
    `;
  }
  refreshWindow() {
    this.loadHomePage();
  }
  loadHomePage() {
    var data = [];
    data.stagesToInclude =
      "Sampling|Incubation|PlateReading|MicroorganismIdentification|END"; //END not included???
    data.stagesToExclude = "Samplingzz|PlateReading";
    data.grouped = !0;
    this.getSampleStatsCounterByStage(data);
    this.getSampleStatsLastNresults(data);
    var elem = this.shadowRoot.getElementById("kpis");
    if (elem) {
      elem.loadKPIPage();
    }
  }
  ready() {
    super.ready();
    this.loadHomePage();
  }
}
customElements.define("proc-deploy-home", procDeployHome);
