define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../../../internalComponents/Charts/chart-controller.js","../../03config/Project/genoma-instancia1-projtab-study-family-settings.js","../../../../../platform-mixins/functions/fields-methods.js","../../01moduleFunctionality/0module-functions-genoma.js","../../../../internalComponents/Elements/table-with-buttons.js"],function(_polymerElement,_connectMixin,_store,_vaadingridLitSingleselect,_chartController,_genomaInstancia1ProjtabStudyFamilySettings,_fieldsMethods,_moduleFunctionsGenoma,_tableWithButtons){"use strict";class GenomaInstancia1ProjStudyFamily extends(0,_fieldsMethods.FieldsMethods)((0,_moduleFunctionsGenoma.ModuleFunctionsGenoma)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.genomaInstancia1){this.selectedStudy=state.genomaInstancia1.selectedStudy}}static get properties(){return{windowDefinition:{type:Object,value:_genomaInstancia1ProjtabStudyFamilySettings.windowDefinition},selectedLanguage:{type:String},selectedProject:{type:Object}}}objectSelected(e){console.log("objectSelected");var elemName=e.moveFocusOnSelect;console.log("objectSelected",elemName)}static get template(){return _polymerElement.html`
        <style include="genoma-instancia1-projtab-study-family-style"></style>     
        <div class="main">
            <table-with-buttons id="samples" element-definition="{{windowDefinition.elementTable1}}"
                move-focus-on-select="samplevariables" modulearea="STUDY_FAMILIES" table-data="{{selectedStudy.study_family}}" selected-object="{{selectedFamily}}" on-selected-object="{{objectSelected}}"
            ></table-with-buttons>
            <table-with-buttons modulearea="STUDY_INDIVIDUALS" id="samplevariables" element-definition="{{windowDefinition.elementTable2}}"
                 table-data="{{selectedFamily.study_individual}}" selected-object="{{selectedIndividual}}"
            ></table-with-buttons>
            <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLES" id="samplevariables" element-definition="{{windowDefinition.elementTable3}}"
                 table-data="{{selectedIndividual.study_individual_sample}}" selected-object="{{selectedSample}}"
            ></table-with-buttons>
            <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" element-definition="{{windowDefinition.elementTable4}}"
                 table-data="{{selectedSample.study_variable_values}}" selected-object="{{selectedObject}}"
            ></table-with-buttons>
        </div>
<!--                       
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
            rowcontainer="{{selectedStudy.study_samples_set}}" selected-object="{{selectedObject}}">
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
        `}}customElements.define("genoma-instancia1-proj-study-family",GenomaInstancia1ProjStudyFamily)});