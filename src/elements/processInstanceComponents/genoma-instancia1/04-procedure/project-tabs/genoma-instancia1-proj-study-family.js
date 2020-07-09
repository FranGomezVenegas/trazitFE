import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';

import '../../../../internalComponents/Charts/chart-controller';
import {windowDefinition} from '../../03config/Project/genoma-instancia1-projtab-study-family-settings';
 import '../../03config/Project/genoma-instancia1-projtab-study-family-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';
import '../../../../internalComponents/Elements/table-with-buttons';

class GenomaInstancia1ProjStudyFamily extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.genomaInstancia1!=null){
            this.selectedStudy=state.genomaInstancia1.selectedStudy;
        }
    }        
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            selectedProject:{type: Object},
        }
    }
    objectSelected(e){
        console.log('objectSelected');
        var elemName=e.moveFocusOnSelect;
        console.log('objectSelected', elemName);
    }
    static get template() {
        return html`
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
        `;
    }
}
customElements.define('genoma-instancia1-proj-study-family', GenomaInstancia1ProjStudyFamily);