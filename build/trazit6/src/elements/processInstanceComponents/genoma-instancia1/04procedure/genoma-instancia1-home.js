define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../store.js",
  "../../../internalComponents/Charts/chart-controller.js",
  "../03config/genoma-instancia1-home-settings.js",
  "../../../../platform-mixins/functions/fields-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _chartController,
  _genomaInstancia1HomeSettings,
  _fieldsMethods
) {
  "use strict"; //import {FrontendEndpointsEnvMonitSamples} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
  //import './em-demo-a-kpi';
  //FrontendEndpointsEnvMonitSamples
  class GenomaInstancia1Home extends (0, _fieldsMethods.FieldsMethods)(
    (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
  ) {
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.emDemoA) {
        var kpis = [];
        if (state.emDemoA.kpis) {
          kpis = state.emDemoA.kpis;
        }
        kpis.sampleStatCounterByStage = state.emDemoA.sampleStatsCounterByStage;
        kpis.sampleStatsLastNresults = state.emDemoA.sampleStatsLastNresults;
        console.log("kpis", kpis);
        this.kpiData = kpis;
      }
    }
    static get properties() {
      return {
        windowDefinition: {
          type: Object,
          value: _genomaInstancia1HomeSettings.windowDefinition,
        },
        selectedLanguage: { type: String },
        kpiData: { type: Object },
      };
    }
    static get template() {
      return _polymerElement.html`
        <style include="genoma-instancia1-home-style"></style>    
        <div class="main">        
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}</p>
<!--            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
            <template is="dom-repeat" items="[[windowDefinition.kpiCharts]]" as="curkpichart">                                    
                <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
-->            
        </div>
        <em-demo-a-kpi id="kpis"></em-demo-a-kpi>
        `;
    }
    refreshWindow() {
      //this.loadHomePage();
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
      super.ready(); //this.loadHomePage();
    }
  }
  customElements.define("genoma-instancia1-home", GenomaInstancia1Home);
});
