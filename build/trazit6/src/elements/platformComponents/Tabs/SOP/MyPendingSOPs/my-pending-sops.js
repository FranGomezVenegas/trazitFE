define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../../platform-mixins/apis/api-and-frontend-sopuser.js","../../../../../config/platform/tablefield_labels.js","../../../../../platform-mixins/functions/fields-methods.js","../../../../../config/platform/logic/sop-config.js","../pdf-link.js","./my-pending-sops-style.js"],function(_polymerElement,_connectMixin,_store,_apiAndFrontendSopuser,_tablefield_labels,_fieldsMethods,_sopConfig,_pdfLink,_myPendingSopsStyle){"use strict";class MyPendingSops extends(0,_tablefield_labels.tableFieldLabel)((0,_fieldsMethods.FieldsMethods)((0,_apiAndFrontendSopuser.ApiAndFrontendSopUser)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))){static get properties(){return{allMyPendingSops:Object,dialogButtons:{type:Array,value:_sopConfig.sopMyPendingSops_buttons},sopStatusLabel:{type:Object,value:_sopConfig.sopStatusLabel},sopMyPendingSops_cardContent:{type:Object,value:_sopConfig.sopMyPendingSops_cardContent}}}stateChanged(state){this.allMyPendingSops=state.SOPS.userPendingSop}onFinalTokenFilled(){var paramsUrl="sopFieldsToRetrieve="+_sopConfig.sopUserPendingSop_fieldToRetrieve,datas=[];datas.paramsUrl=paramsUrl;this.frontEndSopUserAPI(datas)}static get template(){return _polymerElement.html`
            <style include="my-pending-sops-style"></style>
            <template is="dom-repeat" items="[[allMyPendingSops]]" as="procedures">  
                <div class="cardPendingSops"> 
                    <h2><p><b>{{procedures.procedure_name}}   </b></p></h2>
                    <template is="dom-repeat" items="[[procedures.pending_sops]]">  
                        <template is="dom-if" if="{{sopMyPendingSops_cardContent.display_pdf_link}}">
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
                        <template is="dom-if" if="{{sopMyPendingSops_cardContent.display_certification_status_icon}}">
                            <p><b>My Certification Status:</b> 
                                    <paper-icon-button style="{{certificationStatusStyleDefinition(item)}}" icon="{{certificationStatus(item)}}" 
                                    title="{{statusLegend(item, selectedLanguage)}}"
                                    disabled="{{field.read_only}}" value="{{field.name}}" ></paper-icon-button>
                            </p>
                        </template>
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
        `}}customElements.define("my-pending-sops",MyPendingSops)});