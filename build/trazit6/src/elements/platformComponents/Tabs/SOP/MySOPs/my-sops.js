define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../../platform-mixins/apis/api-and-frontend-sopuser.js","../../../../../config/platform/logic/sop-config.js","../../../../../platform-mixins/functions/fields-methods.js","../../../../../config/platform/tablefield_labels.js","../../../../internalComponents/form-fields/field-controller.js","../pdf-link.js","./my-sops-style.js"],function(_polymerElement,_connectMixin,_store,_apiAndFrontendSopuser,_sopConfig,_fieldsMethods,_tablefield_labels,_fieldController,_pdfLink,_mySopsStyle){"use strict";class MySops extends(0,_tablefield_labels.tableFieldLabel)((0,_fieldsMethods.FieldsMethods)((0,_apiAndFrontendSopuser.ApiAndFrontendSopUser)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))){static get properties(){return{//            finalToken: {type: String, observer:'onFinalTokenFilled'},
allMySops:Array,dialogButtons:{type:Array,value:_sopConfig.sopMySops_buttons},sopStatusLabel:{type:Object,value:_sopConfig.sopStatusLabel},selectedLanguage:String,tableFieldLabelSchemaName:{type:String,value:"config"},tableFieldLabelTableName:{type:String,value:"usersop"},sopMySops_cardContent:{type:Object,value:_sopConfig.sopMySops_cardContent}}}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;this.allMySops=state.SOPS.userAllSop}static get template(){return _polymerElement.html`
            <style include="my-sops-style"></style>
            <!-- allMySops.length: {{allMySops.0.length}} allMySops.my_sops.length: {{allMySops.0.my_sops.length}} -->
            <div class="wrapperMySops">
            <template is="dom-repeat" items="[[allMySops.0.my_sops]]">              
                <div class="cardMySops"> 
                    <template is="dom-if" if="{{sopMySops_cardContent.display_pdf_link}}">
                        <p><pdf-link align="center" file-link="[[item.file_link]]"></pdf-link></p>
                    </template>
<!--
                    <template is="dom-repeat" items="[[item.sopFieldsToDisplay]]" as="cardFld" >  
                        <p><b>{{getTableFieldLabel(tableFieldLabelSchemaName, tableFieldLabelTableName, cardFld.field_name, selectedLanguage)}}:</b> {{cardFld.field_value}}<p></p>
                    </template>
-->                    
                    <p><b>Procedure:</b> {{item.procedure}}<p></p>
                    <p><b>SOP Name:</b> {{item.sop_name}}</p>
                    <p><b>Summary:</b> {{item.brief_summary}}</p> 
                    <template is="dom-if" if="{{sopMySops_cardContent.display_certification_status_icon}}">
                        <p><b>My Certification Status:</b> 
                                <paper-icon-button style="{{certificationStatusStyleDefinition(item)}}" icon="{{certificationStatus(item)}}" 
                                title="{{statusLegend(item, selectedLanguage)}}"
                                disabled="{{field.read_only}}" value="{{field.name}}" ></paper-icon-button>
                        </p>
                    </template>
                    <template is="dom-if" if="{{displayCompleteButton(item)}}">
                        <div name="Buttons1" class="buttonGroup">
                            <template is="dom-repeat" items="{{dialogButtons}}" as="currentfield">       
                                <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" value="{{item}}"
                                on-field-button-clicked="fieldButtonClickedForSops" on-field-list-value-changed="onListChange"
                                selected-Object="[[item]]"> 
                                </field-controller>
                            </template>  
                        </div>            
                    </template> 
                </div>
            </template>
            </div>
        `}}customElements.define("my-sops",MySops)});