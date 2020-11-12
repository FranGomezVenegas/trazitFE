define(["../../../../../../node_modules/lit-element/lit-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../../../internalComponents/Charts/chart-controller.js","../../03config/Project/genoma-instancia1-projtab-study-samples-settings.js","../../../../../platform-mixins/functions/fields-methods.js","../../01moduleFunctionality/0module-functions-genoma.js","../../01moduleFunctionality/genoma-instancia1-webcomponent-project.js","../../../../internalComponents/Elements/table-with-buttons.js","../../01moduleFunctionality/endpoints-frontend-genoma.js","../../01moduleFunctionality/0module-endpoints-actions-genoma.js"],function(_litElement,_connectMixin,_store,_vaadingridLitSingleselect,_chartController,_genomaInstancia1ProjtabStudySamplesSettings,_fieldsMethods,_moduleFunctionsGenoma,_genomaInstancia1WebcomponentProject,_tableWithButtons,_endpointsFrontendGenoma,_moduleEndpointsActionsGenoma){"use strict";/**
 * `genoma-instancia1-proj-study-samples` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class GenomaInstancia1ProjStudySamples extends(0,_moduleEndpointsActionsGenoma.EndpointsActionsGenomaModule)((0,_endpointsFrontendGenoma.FrontendEndpointsModuleGenoma)((0,_fieldsMethods.FieldsMethods)((0,_moduleFunctionsGenoma.ModuleFunctionsGenoma)((0,_connectMixin.connect)(_store.store)(_litElement.LitElement))))){static get properties(){return{windowDefinition:{type:Object,value:_genomaInstancia1ProjtabStudySamplesSettings.windowDefinition},selectedLanguage:{type:String,notify:!0},selectedProject:{type:Object},selectedProject2:{type:Object},selected_sample:{type:Object},selected_object:{type:Object},selected_study:{type:Object},selectedVariableObj:{type:Object},selected_variable:{type:Object}}}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;console.log("GenomaInstancia1ProjStudySamples","stateChanged",this.selectedLanguage);if(null!=state.genomaInstancia1){this.selected_study=state.genomaInstancia1.selectedStudy}}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super();this.selected_sample=[];this.selected_sample.study_variable_values=[];this.windowDefinition=_genomaInstancia1ProjtabStudySamplesSettings.windowDefinition}/**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */render(){return _litElement.html`
        <style include="genoma-instancia1-projtab-study-samples-style"></style>   
        <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>         
        <div class="main">
            <table-with-buttons id="samples" modulearea="STUDY_INDIVIDUAL_SAMPLES" selected_language="${this.selectedLanguage}"  
                .element_definition=${this.windowDefinition.elementTable1} 
                .table_data=${this.selected_study.study_individual_sample} @selected-object-changed=${this.sampleWasSelected} .selectedObject="${this.selected_sample}"  
                @field-button-clicked="${this.fieldButtonClickedForProjects}"
            ></table-with-buttons>
            <table-with-buttons id="samples" modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" selected_language="${this.selectedLanguage}"  
                .element_definition=${this.windowDefinition.elementTable2} 
                .table_data=${this.selected_sample.study_variable_values} 
                @selected-object-changed=${this.variableObjWasSelected} .selectedObject="${this.selected_variable}"  
                @field-button-clicked="${this.fieldButtonClickedForProjects}"
            ></table-with-buttons>
             
        </div>
        `}sampleWasSelected(e){console.log("proj-study-samples >> sampleWasSelected",e);this.selected_sample=e.detail}variableObjWasSelected(e){console.log("proj-study-samples >> variableObjWasSelected",e);this.selected_variable=e.detail}}customElements.define("genoma-instancia1-proj-study-samples",GenomaInstancia1ProjStudySamples)});