define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","./incident-management-settings.js","./incident-management-style.js","../../../internalComponents/form-fields/field-controller.js","../../../../platform-mixins/platform-functions/frontend-incidents.js","../../../../platform-mixins/platform-functions/frontend-incidents-elements.js","../../../../platform-mixins/apis/api-incidents.js","../../../../platform-mixins/platform-functions/tabs-functions.js","../../../internalComponents/Grids/vaadingrid-lit-singleselect.js"],function(_polymerElement,_connectMixin,_store,_incidentManagementSettings,_incidentManagementStyle,_fieldController,_frontendIncidents,_frontendIncidentsElements,_apiIncidents,_tabsFunctions,_vaadingridLitSingleselect){"use strict";// import '../../../internalComponents/grid-components/vaadingrid-singleselect.js'; // Necesario pero no cargado aún
/**
 * `incident-management` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class IncidentManagement extends(0,_tabsFunctions.TabsMethods)((0,_apiIncidents.ApiIncidents)((0,_frontendIncidents.FrontendIncidents)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))){static get properties(){return{formFields:{type:Array,notify:!0,bubble:!0,value:_incidentManagementSettings.appNewIncident_formFields},appOpenTabs:{type:String,observer:"onFinalTokenFilled"},userOpenIncidents:{type:String},selectedUserIncidentDetail:{type:Array},thisTabName:{type:String,value:"incident-management"},userOpenIncidentsieldToDisplay:{type:Array,value:_incidentManagementSettings.incidents_userOpenIncidentsFieldToDisplay},userOpenIncidentsuttons:{type:Array,value:_incidentManagementSettings.incidents_userOpenIncidentsButtons},selectedObject:{type:Object}}}stateChanged(state){this.userOpenIncidents=state.incidents.userOpenIncidents;this.selectedUserIncidentDetail=state.incidents.selectedUserIncidentDetail;if(null!=state.tabs.tabs){this.appOpenTabs=state.tabs.tabs}}static get template(){return _polymerElement.html`
        <style include="incident-management-style"></style>
        <div class="mainDiv"">        
            <div id="newIncidentForm">
                <template is="dom-repeat" items="{{formFields}}" as="currentfield">    
                <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClickedForIncidents" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>       
            </div>
            <div class="myIncidentsTable">
                <frontend-incidents-elements id="myElements" call-back-function-incident-elem="{{onFinalTokenFilled}}" selected-incident="{{selectedObject}}"></frontend-incidents-elements>
                <vaadin-button on-click="callBackRefreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
                <div name="buttonGroup" class="buttonGroup">
                    <template is="dom-repeat" items="{{userOpenIncidentsuttons}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="fieldButtonClickedForIncidents" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </div>    
<!-- Necesario pero aun no hay tablas!
                <vaadingrid-singleselect class="vaadin-grid" id="mygridid" on-selected-item-changed="incidentSelected" selected-object="{{selectedObject}}"
                    headerfields="{{userOpenIncidentsieldToDisplay}}" rowcontainer="{{userOpenIncidents}}">
                </vaadingrid-singleselect>
-->
<vaadingrid-lit-singleselect headerfields="{{userOpenIncidentsieldToDisplay}}" rowcontainer="{{userOpenIncidents}}" on-selected-object-changed="incidentSelected"
></vaadingrid-lit-singleselect>

<!-- Borrado por refactoring            <div name="selectedBatchButtonGroup" style="width: 622px; display: inline-flex;"></div> -->
            </div>
            <div id="selectedIncident">
                <p><b>{{selectedUserIncidentDetail.0.incident_id}}</p>                
                <template is="dom-repeat" items="{{selectedUserIncidentDetail}}" as="currentfield"> 
                    <div class="cardMySops"> 
                        {{currentfield.date}} - {{currentfield.note}} 
                    </div>
                </template>
            </div> 
        </div>
        `}keyPressed(){}incidentSelected(e){this.selectedObject=e.detail;console.log("incidentSelected","this.selectedObject",this.selectedObject);this.getSelectedUserIncidentDetail({incidentId:this.selectedObject.id});return}callBackRefreshWindow(){this.onFinalTokenFilled()}onFinalTokenFilled(){console.log("onFinalTokenFilled",this.thisTabName);if(!this.thisTabName){return}//if (this.isThisTabOpen(this.appOpenTabs, this.thisTabName)){
if(this.isThisTabOpen(this.thisTabName)){this.getUserOpenIncidents()}// var curTab={
//     lp_frontend_page_name: 'incidents/incident-management.js',        
//     tabName: 'incident-management',
//     tabLabel_en: 'New Issue',
//     tabLabel_es: 'Nueva Incidencia',
//     procedure:'incident',
//     tabEsignRequired: false, tabConfirmUserRequired: false
//   }
//store.dispatch(setCurrentTab(curTab)); 
if(this.selectedObject){//     //console.log('onFinalTokenFilled', 'item', this.selectedObject, 'object'this.selectedObject);
//     //this.selectedObject=this.selectedObject;
//     //this.$.mygridid.selectedObjects=[];
//     //this.$.mygridid.itemSelected=this.selectedObject;
//     var mye={detail:{value:this.selectedObject}};            
//     this.$.mygridid.changeItemSelected(this.selectedObject.value.id);
//     //this.$.mygridid.changeItemSelected(this.selectedObject);
//     //this.$.mygridid.selectedObject=this.selectedObject;
//     //this.$.mygridid.selectedObjects = [this.selectedObject];
//    this.getSelectedUserIncidentDetail({finalToken: this.finalToken, incidentId: this.selectedObject.id});
this.incidentSelected()}}}customElements.define("incident-management",IncidentManagement)});