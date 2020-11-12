define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","../../../internalComponents/Charts/chart-controller.js","../03config/proc-deploy-home-settings.js","../../../../platform-mixins/functions/fields-methods.js","../01moduleFunctionality/endpoints-frontend-env-monit-samples.js"],function(_polymerElement,_connectMixin,_store,_chartController,_procDeployHomeSettings,_fieldsMethods,_endpointsFrontendEnvMonitSamples){"use strict";//import './proc-deploy-kpi';
class procDeployHome extends(0,_fieldsMethods.FieldsMethods)((0,_endpointsFrontendEnvMonitSamples.FrontendEndpointsEnvMonitSamples)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.procDeploy){var kpis=[];if(state.procDeploy.kpis){kpis=state.procDeploy.kpis}kpis.sampleStatCounterByStage=state.procDeploy.sampleStatsCounterByStage;kpis.sampleStatsLastNresults=state.procDeploy.sampleStatsLastNresults;console.log("kpis",kpis);this.kpiData=kpis}}static get properties(){return{windowDefinition:{type:Object,value:_procDeployHomeSettings.windowDefinition},selectedLanguage:{type:String},kpiData:{type:Object}}}static get template(){return _polymerElement.html`
        <style include="proc-deploy-home-style"></style>    
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}</p>
            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
            <template is="dom-repeat" items="[[windowDefinition.kpiCharts]]" as="curkpichart">                                    
                <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
            
        </div>
        <!-- <proc-deploy-kpi id="kpis"></proc-deploy-kpi> -->
        `}refreshWindow(){this.loadHomePage()}loadHomePage(){var data=[];data.stagesToInclude="Sampling|Incubation|PlateReading|MicroorganismIdentification|END";//END not included???
data.stagesToExclude="Samplingzz|PlateReading";data.grouped=!0;this.getSampleStatsCounterByStage(data);this.getSampleStatsLastNresults(data);var elem=this.shadowRoot.getElementById("kpis");if(elem){elem.loadKPIPage()}}ready(){super.ready();this.loadHomePage()}}customElements.define("proc-deploy-home",procDeployHome)});