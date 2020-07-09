import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';

import '../../../../internalComponents/Charts/chart-controller';
import {windowDefinition} from '../../03config/Project/genoma-instancia1-projtab-study-samples-settings';
 import '../../03config/Project/genoma-instancia1-projtab-study-samples-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';
import '../../01moduleFunctionality/genoma-instancia1-webcomponent-project';
import '../../../../internalComponents/Elements/table-with-buttons';
class GenomaInstancia1ProjStudySamples extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))) {
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
            selectedProject2:{type: Object},
            selectedSample:{type: Object}
        }
    }
    static get template() {
        return html`
        <style include="genoma-instancia1-projtab-study-samples-style"></style>            
        <div class="main">
            <table-with-buttons id="samples" element-definition="{{windowDefinition.elementTable1}}"
                modulearea="STUDY_INDIVIDUAL_SAMPLES" table-data="{{selectedStudy.study_individual_sample}}" selected-object="{{selectedSample}}"
            ></table-with-buttons>
            <table-with-buttons modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" element-definition="{{windowDefinition.elementTable2}}"
                 table-data="{{selectedSample.study_variable_values}}" selected-object="{{selectedObject}}"
            ></table-with-buttons>
        </div>


        `;
    }
}
customElements.define('genoma-instancia1-proj-study-samples', GenomaInstancia1ProjStudySamples);