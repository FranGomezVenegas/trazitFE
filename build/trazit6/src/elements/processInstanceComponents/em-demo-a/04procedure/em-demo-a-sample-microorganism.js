define([
  "../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../store.js",
  "../../../../platform-mixins/functions/fields-methods.js",
  "../../../internalComponents/Grids/vaadingrid-lit-singleselect.js",
  "../01moduleFunctionality/endpoints-frontend-env-monit-samples.js",
  "../01moduleFunctionality/functions-env-monit-samples.js",
  "../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js",
  "../03config/em-demo-a-sample-microorganism-settings.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _fieldsMethods,
  _vaadingridLitSingleselect,
  _endpointsFrontendEnvMonitSamples,
  _functionsEnvMonitSamples,
  _emDemoAWebcomponentEnvMonitSamples,
  _emDemoASampleMicroorganismSettings
) {
  "use strict"; // import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
  //'../03config/config-process.js';
  class emDemoASampleMicroorganism extends (0, _fieldsMethods.FieldsMethods)(
    (0, _functionsEnvMonitSamples.FunctionsEnvMonitSamples)(
      (0, _endpointsFrontendEnvMonitSamples.FrontendEndpointsEnvMonitSamples)(
        (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
      )
    )
  ) {
    static get properties() {
      return {
        tableDefinition: {
          type: Object,
          value: _emDemoASampleMicroorganismSettings.sampleMicroorganism,
        },
        samplesStagesReduxVariables: {
          type: String,
          value: _endpointsFrontendEnvMonitSamples.samplesStagesReduxVariables,
        },
        allSamplesStageMicroorganism: { type: Array, notify: !0 },
        selectedObject: Object,
        callBackRefreshWindow: Object,
        selectedLanguage: { type: String },
      };
    }
    static get template() {
      return _polymerElement.html`            
            <style include="em-demo-a-sample-microorganism-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>
            <div class="main">
                <template is="dom-if" if="[[tableDefinition.tableTitle.display]]"> 
                    <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
                </template>  
                <div name="tableDefinitionButtons" class="buttonGroup">
                    <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
                        <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                    </template>  
                    <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
                        <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
                            <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                            on-field-button-clicked="fieldButtonClickedForSamples" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect id="emdemoa-samplemicroorganism" headerfields="{{tableDefinition.sampleFieldToDisplay}}" 
                    rowcontainer="{{allSamplesStageMicroorganism}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>
            </div>       
        `;
    }
    refreshWindow() {
      this.loadSamplingTable();
    }
    loadSamplingTable() {
      this.callBackRefreshWindow = this.refreshWindow.bind(this);
      this.getAllSamplesStageSampling(
        this.tableDefinition,
        this.samplesStagesReduxVariables.SAMPLES_MICROORG_IDENTIF
      );
      this.getMicroorganismList(); //this.getAllSamplesStageMicroorganism(this.tableDefinition);
      //     {
      //     actionName:'GET_SAMPLE_MICROORGANISM_VIEW',
      //     sampleFieldToRetrieve:this.tableDefinition.sampleFieldToRetrieve,
      //     samplesWhereFieldsName: this.tableDefinition.samplesWhereFieldsName,
      //     samplesWhereFieldsValue: this.tableDefinition.samplesWhereFieldsValue,
      //     samplesSortFieldsName:this.tableDefinition.sampleFieldToSort,
      //     addSampleAnalysis: this.tableDefinition.addSampleAnalysis,
      //     addSampleAnalysisFieldToRetrieve: this.tableDefinition.addSampleAnalysisFieldToRetrieve,
      //     addSampleAnalysisResult: this.tableDefinition.addSampleAnalysisResult,
      //     addSampleAnalysisResultFieldToRetrieve: this.tableDefinition.addSampleAnalysisResultFieldToRetrieve,
      //   });
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      if (null != state.emDemoA) {
        this.allSamplesStageMicroorganism =
          state.emDemoA.allSamplesStageMicroorganism;
      }
    }
    ready() {
      super.ready();
      this.loadSamplingTable();
    }
  }
  customElements.define(
    "em-demo-a-sample-microorganism",
    emDemoASampleMicroorganism
  );
});
