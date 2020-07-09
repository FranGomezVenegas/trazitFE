import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import"../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import"../../../../internalComponents/Charts/chart-controller.js";import{windowDefinition}from"../../03config/Project/genoma-instancia1-projtab-study-individuals-settings.js";import"../../03config/Project/genoma-instancia1-projtab-study-individuals-settings.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";import{ModuleFunctionsGenoma}from"../../01moduleFunctionality/0module-functions-genoma.js";import"../../01moduleFunctionality/genoma-instancia1-webcomponent-project.js";import"../../../../internalComponents/Elements/table-with-buttons.js";class GenomaInstancia1ProjStudySamples extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.genomaInstancia1){this.selectedStudy=state.genomaInstancia1.selectedStudy}}static get properties(){return{windowDefinition:{type:Object,value:windowDefinition},selectedLanguage:{type:String},selectedProject:{type:Object},selectedStudy:{type:Object}}}static get template(){return html`
        <style include="genoma-instancia1-projtab-study-individuals-style"></style>            
        <div class="main">        
        <table-with-buttons modulearea="STUDY_INDIVIDUALS" id="samplevariables" element-definition="{{windowDefinition.elementTable1}}"
            table-data="{{selectedStudy.study_individual}}" selected-object="{{selectedIndividual}}" selected-study="{{selectedStudy}}"
        ></table-with-buttons>
        <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLES" id="samplevariables" element-definition="{{windowDefinition.elementTable2}}"
            table-data="{{selectedIndividual.study_individual_sample}}" selected-object="{{selectedSample}}"
        ></table-with-buttons>
        <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" element-definition="{{windowDefinition.elementTable3}}"
            table-data="{{selectedSample.study_variable_values}}" selected-object="{{selectedObject}}"
        ></table-with-buttons>
<!--
        <table-with-buttons id="samples" element-definition="{{windowDefinition.elementTable1}}"
                modulearea="STUDY_INDIVIDUAL_SAMPLES" table-data="{{selectedStudy.study_individual}}" selected-object="{{selectedSample}}"
            ></table-with-buttons>
            <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" element-definition="{{windowDefinition.elementTable2}}"
                 table-data="{{selectedSample.study_variable_values}}" selected-object="{{selectedObject}}"
            ></table-with-buttons>
-->            
        </div>

        <!--        <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>  
        <template is="dom-if" if="[[windowDefinition.tableTitle.display]]"> 
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.tableTitle.label)}}</p>
        </template>  
        <div name="windowDefinitionButtons" class="buttonGroup">
            <template is="dom-if" if="[[windowDefinition.displayRefreshButton]]"> 
                <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
            </template>  
            <template is="dom-if" if="[[windowDefinition.displayButtons]]"> 
                <template is="dom-repeat" items="{{windowDefinition.buttons}}" as="currentfield">       
                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDY_SAMPLES_SET" selected-object="{{selectedObject}}"
                        on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                    </field-controller>
                </template>  
            </template>  
        </div>            
        <vaadingrid-lit-singleselect class="" id="genoma-instancia1-proj-samplessetgrid" headerfields="{{windowDefinition.tableHdrFlds}}" 
            rowcontainer="{{selectedStudy.study_individual_sample}}" selected-object="{{selectedObject}}">
        </vaadingrid-lit-singleselect>
        <div>
            <template is="dom-if" if="[[windowDefinition.tableTitle.display2ndTable]]"> 
                <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.tableTitle2ndTable.label)}}</p>
            </template>  
            <div name="windowDefinitionButtons2ndTable" class="buttonGroup">
                <template is="dom-if" if="[[windowDefinition.displayRefreshButton2ndTable]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[windowDefinition.displayButtons2ndTable]]"> 
                    <template is="dom-repeat" items="{{windowDefinition.buttons2ndTable}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" selected-object="{{selectedObject2}}"
                            on-field-button-clicked="fieldButtonClickedForProjectsObject2" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </template>  
            </div>            
            <vaadingrid-lit-singleselect id="genoma-instancia1-proj-samplesvarvaluessetgrid" headerfields="{{windowDefinition.tableHdrFlds2ndTable}}" 
                rowcontainer="{{selectedObject.study_variable_values}}" selected-object2="{{selectedObject}}">
            </vaadingrid-lit-singleselect>
        </div>
-->
        `}}customElements.define("genoma-instancia1-proj-study-individuals",GenomaInstancia1ProjStudySamples);