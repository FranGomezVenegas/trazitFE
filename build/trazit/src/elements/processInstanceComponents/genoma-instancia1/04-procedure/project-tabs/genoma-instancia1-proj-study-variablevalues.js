import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import"../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import"../../../../internalComponents/Charts/chart-controller.js";import{windowDefinition}from"../../03config/Project/genoma-instancia1-projtab-study-variablevalues-settings.js";import"../../03config/Project/genoma-instancia1-projtab-study-variablevalues-settings.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";import{ModuleFunctionsGenoma}from"../../01moduleFunctionality/0module-functions-genoma.js";class GenomaInstancia1ProjStudyVariablevalues extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.genomaInstancia1){this.selectedStudy=state.genomaInstancia1.selectedStudy}}static get properties(){return{windowDefinition:{type:Object,value:windowDefinition},selectedLanguage:{type:String},selectedProject:{type:Object}}}static get template(){return html`
        <style include="genoma-instancia1-projtab-study-variablevalues-style"></style>            
        <div class="main">
        <!-- <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>            <div class="main">
        -->
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
        <vaadingrid-lit-singleselect id="genoma-instancia1-proj-samplessetgrid" headerfields="{{windowDefinition.tableHdrFlds}}" 
            rowcontainer="{{selectedStudy.study_variable_values}}" selected-object="{{selectedObject}}">
        </vaadingrid-lit-singleselect>
        <div>
            <template is="dom-repeat" items="{{selectedObject.samples}}" as="currentsmp">       
                {{currentsmp.sample_id}}
            </template>
        </div>
        </div>        
            
            {{selectedStudy.study_samples_set.length}}

            <!-- <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selectedProject}}"></chart-controller>
            </template> -->
<!--            <template is="dom-repeat" items="[[selectedProject.study]]" as="curStudy">
                <li>{{curStudy.name}}</li>
                <template is="dom-repeat" items="[[curStudy.study_family]]" as="curStudyFamily">
                    <li>{{curStudyFamily.name}}</li>
                </template>
                <template is="dom-repeat" items="[[curStudy.study_individual]]" as="curStudyIndividual">
                    <li>{{curStudyIndividual.individual_name}}</li>
                    <template is="dom-repeat" items="[[curStudyIndividual.study_individual_sample]]" as="curStudyIndividualSample">
                        <li>{{curStudyIndividualSample.sample_id}}</li>
                    </template>
                </template>
            </template>
        </div> -->
        `}}customElements.define("genoma-instancia1-proj-study-variablevalues",GenomaInstancia1ProjStudyVariablevalues);