import{PolymerElement,html}from"../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../store.js";import{FieldsMethods}from"../../../../platform-mixins/functions/fields-methods.js";// import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
import"../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import{FrontendEndpointsEnvMonitSamples,samplesStagesReduxVariables}from"../01moduleFunctionality/endpoints-frontend-env-monit-samples.js";import{FunctionsEnvMonitSamples}from"../01moduleFunctionality/functions-env-monit-samples.js";import"../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js";import"../03config/em-demo-a-person-microorganism-settings.js";import{personMicroorganism}from"../03config/em-demo-a-person-microorganism-settings.js";//'../03config/config-process.js';
class emDemoAPersonMicroorganism extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))){static get properties(){return{tableDefinition:{type:Object,value:personMicroorganism},samplesStagesReduxVariables:{type:String,value:samplesStagesReduxVariables},allPersonSamplesStageMicroorganism:{type:Array,notify:!0},selectedObject:Object,callBackRefreshWindow:Object,selectedLanguage:{type:String}}}static get template(){return html`            
            <style include="em-demo-a-person-microorganism-style"></style> 
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
                    rowcontainer="{{allPersonSamplesStageMicroorganism}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>
            </div>       
        `}refreshWindow(){this.loadSamplingTable()}loadSamplingTable(){this.callBackRefreshWindow=this.refreshWindow.bind(this);this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.PERSON_MICROORG_IDENTIF);this.getMicroorganismList();//this.getAllPersonSamplesStageMicroorganism(this.tableDefinition);
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
}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.allPersonSamplesStageMicroorganism=state.emDemoA.allPersonSamplesStageMicroorganism}}ready(){super.ready();this.loadSamplingTable()}}customElements.define("em-demo-a-person-microorganism",emDemoAPersonMicroorganism);