define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","../../../../platform-mixins/functions/fields-methods.js","../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../01moduleFunctionality/endpoints-frontend-env-monit-samples.js","../01moduleFunctionality/functions-env-monit-samples.js","../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js","../03config/em-demo-a-sample-plate-reading-settings.js"],function(_polymerElement,_connectMixin,_store,_fieldsMethods,_vaadingridLitSingleselect,_endpointsFrontendEnvMonitSamples,_functionsEnvMonitSamples,_emDemoAWebcomponentEnvMonitSamples,_emDemoASamplePlateReadingSettings){"use strict";// import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
//'../03config/config-process.js';
class emDemoASamplePlateReading extends(0,_fieldsMethods.FieldsMethods)((0,_functionsEnvMonitSamples.FunctionsEnvMonitSamples)((0,_endpointsFrontendEnvMonitSamples.FrontendEndpointsEnvMonitSamples)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))){static get properties(){return{tableDefinition:{type:Object,value:_emDemoASamplePlateReadingSettings.samplePlateReading},samplesStagesReduxVariables:{type:String,value:_endpointsFrontendEnvMonitSamples.samplesStagesReduxVariables},allSamplesStagePlateReading:{type:Array,notify:!0},selectedObject:Object,callBackRefreshWindow:Object,iconFunction2:Object,selectedLanguage:{type:String}}}static get template(){return _polymerElement.html`            
            <style include="em-demo-a-sample-plate-reading-style"></style> 
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
                <vaadingrid-lit-singleselect class="grid" id="emdemoa-sampleplatereading" headerfields="{{tableDefinition.sampleFieldToDisplay}}" 
                    rowcontainer="{{allSamplesStagePlateReading}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>
            </div>            
        `}refreshWindow(){this.loadSamplingTable()}loadSamplingTable(){this.callBackRefreshWindow=this.refreshWindow.bind(this);this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.SAMPLES_PLATE_READING);//     {
//     actionName:'SAMPLES_BY_STAGE',
//     sampleFieldToRetrieve:this.tableDefinition.sampleFieldToRetrieve,
//     samplesTabSortFields:this.tableDefinition.sampleFieldToSort,
//     samplesWhereFieldsName: this.tableDefinition.samplesWhereFieldsName, 
//     samplesWhereFieldsValue: this.tableDefinition.samplesWhereFieldsValue,
//     addSampleAnalysis: this.tableDefinition.addSampleAnalysis, 
//     addSampleAnalysisFieldToRetrieve: this.tableDefinition.addSampleAnalysisFieldToRetrieve,
//     addSampleAnalysisResult: this.tableDefinition.addSampleAnalysisResult, 
//     addSampleAnalysisResultFieldToRetrieve: this.tableDefinition.addSampleAnalysisResultFieldToRetrieve,
//   });         
}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.allSamplesStagePlateReading=state.emDemoA.allSamplesStagePlateReading}}ready(){super.ready();this.loadSamplingTable()}}customElements.define("em-demo-a-sample-plate-reading",emDemoASamplePlateReading)});