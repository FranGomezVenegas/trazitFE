define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../../platform-mixins/functions/fields-methods.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../01moduleFunctionality/endpoints-frontend-env-monit.js","../../01moduleFunctionality/functions-env-monit.js","../../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples.js","../../03config/ResultDeviation/em-demo-a-pending-decision-settings.js"],function(_polymerElement,_connectMixin,_store,_fieldsMethods,_vaadingridLitSingleselect,_endpointsFrontendEnvMonit,_functionsEnvMonit,_emDemoAWebcomponentEnvMonitSamples,_emDemoAPendingDecisionSettings){"use strict";// import '../../../internalComponents/grid-components/vaadingrid-singleselectrunaction.js'; borrado por refactoring
//'../03config/config-process.js';
class emDemoAPendingDecision extends(0,_fieldsMethods.FieldsMethods)((0,_functionsEnvMonit.FunctionsEnvMonit)((0,_endpointsFrontendEnvMonit.FrontendEndpointsEnvMonitForInvestigation)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(state.emDemoA!=void 0){this.investigationResultsPendingDecision=state.emDemoA.investigationResultsPendingDecision}}static get properties(){return{tableDefinition:{type:Object,value:_emDemoAPendingDecisionSettings.pendingDecisionWindowDefinition},selectedObject:{type:Object,notify:!0},investigationResultsPendingDecision:{type:Object}}}static get template(){return _polymerElement.html`
            <style include="em-demo-a-pending-decision-style"></style>
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
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
                            on-field-button-clicked="fieldButtonClickedForInvestigations" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>  
                </div>            
                <vaadingrid-lit-singleselect class="grid" id="emdemoa-pendingdecision" headerfields="{{tableDefinition.fieldToDisplay}}" 
                    rowcontainer="{{investigationResultsPendingDecision}}" selected-object="{{selectedObject}}">
                </vaadingrid-lit-singleselect>
            </div>  
        `}refreshWindow(){this.investigationResultsPendingDecision()}investigationResultsPendingDecision(){this.callBackRefreshWindow=this.refreshWindow.bind(this);this.getInvestigationResultsPendingDecision({})}ready(){super.ready();this.investigationResultsPendingDecision()}}customElements.define("em-demo-a-pending-decision",emDemoAPendingDecision)});