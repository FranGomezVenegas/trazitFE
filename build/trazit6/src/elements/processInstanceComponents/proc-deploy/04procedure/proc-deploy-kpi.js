define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../store.js",
  "../../../internalComponents/Charts/chart-controller.js",
  "../03config/proc-deploy-kpi-settings.js",
  "../../../../platform-mixins/functions/fields-methods.js",
  "../01moduleFunctionality/endpoints-frontend-env-monit-kpis.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _chartController,
  _procDeployKpiSettings,
  _fieldsMethods,
  _endpointsFrontendEnvMonitKpis
) {
  "use strict";
  class procDeployKpi extends (0, _fieldsMethods.FieldsMethods)(
    (0, _endpointsFrontendEnvMonitKpis.FrontendEndpointsEnvMonitKpis)(
      (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
    )
  ) {
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.procDeploy) {
        var kpis = [];
        kpis.sampleStatCounterByStage =
          state.procDeploy.sampleStatsCounterByStage;
        kpis.sampleStatsLastNresults = state.procDeploy.sampleStatsLastNresults;
        this.kpiData = kpis;
      }
    }
    static get properties() {
      return {
        windowDefinition: {
          type: Object,
          value: _procDeployKpiSettings.windowDefinition,
        },
        selectedLanguage: { type: String },
        kpiData: { type: Object },
        moduleKPIs: { type: Object, value: _procDeployKpiSettings.moduleKPIs },
      };
    }
    static get template() {
      return _polymerElement.html`
        <style include="proc-deploy-kpi-style"></style>    
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}</p>
            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{kpiData}}"></chart-controller>
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
  customElements.define("proc-deploy-kpi", procDeployKpi);
});
