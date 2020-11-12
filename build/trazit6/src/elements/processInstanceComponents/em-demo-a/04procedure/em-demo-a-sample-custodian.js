define(["../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../store.js","../../../internalComponents/grid-components/vaadingrid-singleselect.js","../01moduleFunctionality/env-monit-elements-sample.js","./shared-styles.js","../01moduleFunctionality/frontend-env-monit-sample.js","../03config/config-process.js"],function(_polymerElement,_connectMixin,_store,_vaadingridSingleselect,_envMonitElementsSample,_sharedStyles,_frontendEnvMonitSample,_configProcess){"use strict";class emDemoASampleCustodian extends(0,_frontendEnvMonitSample.FrontendEnvMonitSample)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)){static get properties(){return{finalToken:String,schemaPrefix:{type:String,observer:"onFinalTokenFilled"},currTabEsignRequired:Boolean,currTabConfirmUserRequired:Boolean,selectedSample:{type:Number},cocSampleHistoryFieldToDisplay:{type:Array,value:_configProcess.sampleCustodian_cocSampleHistoryFieldToDisplay},cocSampleHistoryWhereFieldsName:{type:String,value:_configProcess.sampleCustodian_cocSampleHistoryWhereFieldsName},cocSampleHistoryWhereFieldsValue:{type:String,value:_configProcess.sampleCustodian_cocSampleHistoryWhereFieldsValue},buttonsCustodian:{type:Array,value:_configProcess.sampleCustodian_cocSampleHistoryButtons},sampleFieldToDisplayCustodian:{type:Array,value:_configProcess.sampleCustodian_sampleFieldToDisplayCustodian},samplesWhereFieldsNameCustodian:{type:String,value:_configProcess.sampleCustodian_samplesWhereFieldsNameCustodian},samplesWhereFieldsValueCustodian:{type:String,value:_configProcess.sampleCustodian_samplesWhereFieldsValueCustodian},buttonsCustodian:{type:Array,value:_configProcess.sampleCustodian_buttonsCustodian},sampleFieldToDisplayCandidate:{type:Array,value:_configProcess.sampleCustodian_sampleFieldToDisplayCandidate},samplesWhereFieldsNameCandidate:{type:String,value:_configProcess.sampleCustodian_samplesWhereFieldsNameCandidate},samplesWhereFieldsValueCandidate:{type:String,value:_configProcess.sampleCustodian_samplesWhereFieldsValueCandidate},buttonsCandidate:{type:Array,value:_configProcess.sampleCustodian_buttonsCandidate},callBackRefreshWindow:Object}}refreshWindow(){this.onFinalTokenFilled();//console.log('refreshWindow');
//this.$.mygridid.clearCache();
}onFinalTokenFilled(){this.callBackRefreshWindow=this.refreshWindow.bind(this);//console.log('calling getSamplesForResultsCustodian');
//if ( (!this.finalToken) || (!this.schemaPrefix) ) {return;}
this.getSamplesForResultsCustodian({finalToken:this.finalToken,schemaPrefix:this.schemaPrefix,actionName:"SAMPLES_INPROGRESS_LIST",sampleFieldToRetrieve:_configProcess.sampleCustodian_sampleFieldToRetrieveCustodian//this.sampleFieldToRetrieve
,samplesTabSortFields:_configProcess.sampleCustodian_sampleFieldToSortCustodian//this.samplesTabSortFields,
,samplesWhereFieldsName:this.samplesWhereFieldsNameCustodian,samplesWhereFieldsValue:this.samplesWhereFieldsValueCustodian});console.log("calling getSamplesForResultsCandidate");wait(2);this.getSamplesForResultsCandidate({finalToken:this.finalToken,schemaPrefix:this.schemaPrefix,actionName:"SAMPLES_INPROGRESS_LIST",sampleFieldToRetrieve:_configProcess.sampleCustodian_sampleFieldToRetrieveCandidate//this.sampleFieldToRetrieve
,samplesTabSortFields:_configProcess.sampleCustodian_sampleFieldToSortCandidate//this.samplesTabSortFields,
,samplesWhereFieldsName:this.samplesWhereFieldsNameCandidate,samplesWhereFieldsValue:this.samplesWhereFieldsValueCandidate})}stateChanged(state){this.finalToken=state.app.user.finalToken;if(null!=state.emDemoA){this.forResultsSamplesCustodian=state.emDemoA.forResultsSamplesCustodian;this.forResultsSamplesCandidate=state.emDemoA.forResultsSamplesCandidate}if(0!=this.tabIndex){//this.schemaPrefix = state.tabs.tabs[this.tabIndex-1].procedure.schemaPrefix;
this.currTabEsignRequired=state.tabs.currTabEsignRequired;this.currTabConfirmUserRequired=state.tabs.currTabConfirmUserRequired}this.schemaPrefix=_configProcess.schema_name}static get template(){return _polymerElement.html`
            <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }
            .buttonGroup {
                /* display: flex */
            }
            vaadin-grid {
                width:95%;
            }
            </style>      
            <env-monit-elements-sample id="myElementsSample" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements-sample>  	
            <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
            <div style="display: flex">
                <div name="ButtonsCandidate" class="buttonGroup">
                    <template is="dom-repeat" items="{{buttonsCandidate}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </div>           
                <vaadingrid-singleselect id="custodiancandidate" style="width: 43%;" headerfields="{{sampleFieldToDisplayCandidate}}" rowcontainer="{{forResultsSamplesCandidate}}"            
                selected-object="{{selectedObject}}"></vaadingrid-singleselect>

                <div name="ButtonsCustodian" class="buttonGroup">
                    <template is="dom-repeat" items="{{buttonsCustodian}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </div>            
                <vaadingrid-singleselect id="custodian" style="width: 43%;" headerfields="{{sampleFieldToDisplayCustodian}}" rowcontainer="{{forResultsSamplesCustodian}}"            
                    selected-object="{{selectedObject}}"></vaadingrid-singleselect>
            </div>  
            `}}customElements.define("em-demo-a-sample-custodian",emDemoASampleCustodian)});