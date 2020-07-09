import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import{windowDefinition}from"../../03config/Project/genoma-instancia1-projtab-home-settings.js";import"../../../../../../node_modules/@alenaksu/json-viewer/build/index.js";import"../../03config/Project/genoma-instancia1-projtab-home-settings.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";//import '../../../../internalComponents/Elements/table-with-buttons';
import{ModuleFunctionsGenoma}from"../../01moduleFunctionality/0module-functions-genoma.js";class GenomaInstancia1ProjHome extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;/*        if (state.emDemoA!=null){
            this.selectedProject=state.emDemoA.selectedProject;
        }*/}static get properties(){return{windowDefinition:{type:Object,value:windowDefinition},selectedLanguage:{type:String},selectedProject:{type:Object},selectedObject:{type:Object}}}static get template(){return html`
        <style include="genoma-instancia1-projtab-home-style"></style>    
        <div class="main">
            <div name="elementDefinitionButtons" class="buttonGroup">
                <template is="dom-if" if="[[windowDefinition.displayRefreshButton]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[windowDefinition.displayButtons]]"> 
                    <template is="dom-repeat" items="{{windowDefinition.buttons}}" as="currentfield">       
                        <field-controller modulearea="STUDIES" id="{{currentfield.name}}"  field="{{currentfield}}"  selected-object="{{selectedObject}}"
                            on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange">
                        </field-controller>
                    </template>
                </template>
            </div>
        </div>
        <json-viewer data="{{selectedProject}}"></json-viewer> 
        `}}customElements.define("genoma-instancia1-proj-home",GenomaInstancia1ProjHome);