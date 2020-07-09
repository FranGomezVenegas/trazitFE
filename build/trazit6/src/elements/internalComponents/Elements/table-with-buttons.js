define(["../../../../node_modules/@polymer/polymer/polymer-element.js","../../../platform-mixins/functions/fields-methods.js","../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/0module-functions-genoma.js","../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/genoma-instancia1-webcomponent-project.js","../../processInstanceComponents/genoma-instancia1/03config/Project/genoma-instancia1-projtab-study-samples-settings.js","../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/endpoints-frontend-genoma.js"],function(_polymerElement,_fieldsMethods,_moduleFunctionsGenoma,_genomaInstancia1WebcomponentProject,_genomaInstancia1ProjtabStudySamplesSettings,_endpointsFrontendGenoma){"use strict";/**
 * `table-with-buttons` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class TableWithButtons extends(0,_endpointsFrontendGenoma.FrontendEndpointsModuleGenoma)((0,_fieldsMethods.FieldsMethods)((0,_moduleFunctionsGenoma.ModuleFunctionsGenoma)(_polymerElement.PolymerElement))){static get properties(){return{elementDefinition:{type:Object},modulearea:{type:String},tableData:{type:Array},selectedProject:{type:Object,notify:!0},selectedStudy:{type:Object,notify:!0}}}static get template(){return _polymerElement.html`
            <style include="genoma-instancia1-projtab-study-samples-style"></style>  
            <genoma-instancia1-webcomponent-project id="myElementsProject" selected-study="{{selectedStudy}}"></genoma-instancia1-webcomponent-project>
            <template is="dom-if" if="[[elementDefinition.tableTitle.display]]"> 
                <p class="tableTitle">{{labelValue(selectedLanguage, elementDefinition.tableTitle.label)}}</p>
            </template>  
            <div name="elementDefinitionButtons" class="buttonGroup">
                <template is="dom-if" if="[[elementDefinition.displayRefreshButton]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[elementDefinition.displayButtons]]"> 
                    <template is="dom-repeat" items="{{elementDefinition.buttons}}" as="currentfield">       
                        <field-controller modulearea="{{modulearea}}" id="{{currentfield.name}}"  field="{{currentfield}}"  selected-object="{{selectedObject}}"
                            on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </template>  
            </div>            
            <vaadingrid-lit-singleselect id="genoma-instancia1-proj-samplessetgrid" headerfields="{{elementDefinition.tableHdrFlds}}" 
                rowcontainer="{{tableData}}" selected-object="{{selectedObject}}">
            </vaadingrid-lit-singleselect>

        `}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super()}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */ready(){super.ready()}refreshWindow(){this.getProjects()}}customElements.define("table-with-buttons",TableWithButtons)});