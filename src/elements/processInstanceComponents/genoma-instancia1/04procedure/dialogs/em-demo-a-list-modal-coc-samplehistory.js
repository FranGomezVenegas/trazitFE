import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store.js';
import '@polymer/paper-button/paper-button';
import '../../03config/css/Theme01/modal-dialogs.js';
import '../../../../internalComponents/grid-components/vaadingrid-singleselect.js';
//import '../../../../internalComponents/grid-components/vaadingrid-multiselect';
//import '../../../../app/module-functionality/sample/sample-elements.js';
import '../../../../internalComponents/form-fields/field-icon-button.js';
import {dialog_buttons} from '../../../../../config/app-config.js';
import {schema_name, sampleCustodian_cocSampleHistoryButtons} from '../../../process-us/03config/config-process.js';
import {SampleIcons} from '../../03config/config-icons';
import '../../../../internalComponents/Dialogs/dialogmodal-buttons.js';

/**
 * `em-demo-a-list-modal-coc-samplehistory` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class emDemoAListModalCocSamplehistory extends SampleIcons(connect(store)(PolymerElement)) {
    static get properties() {
        return {
            dialogButtons: { type: Array, value: dialog_buttons},
            listRows: {type:Array,value: [
                {code: 'LOD', method_name: 'LOD Method', method_version: 1}]
            },
            listHeader: Array,
            schemaPrefix: {type:String, value: schema_name},
            buttons: {type: Array, value: sampleCustodian_cocSampleHistoryButtons},
            selectedObject: Array,
            selectedLanguage:{ type: String},
        }
    }
    stateChanged(state) {        
        this.selectedLanguage = state.app.user.appLanguage;  
    }
    static get template() {
        return html`
        <style include="modal-dialogs">
            .modal-content {
                width: 450px;
            } 
        </style>        
        <div class="modal-content bgimg">       
        <dialogmodal-buttons 
            display-cancel-button 							display-confirm-button 								
            on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmedbutton-clicked="dialogConfirmed"> </dialogmodal-buttons>       
                       
            <div name="Buttons1" class="buttonGroup">
                <template is="dom-repeat" items="{{buttons}}" as="currentfield">       
                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                    on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                    </field-controller>
                </template>  
            </div>    
             <div>                
                <template is="dom-if" if="{{tableListRowsEmpty(listRows)}}">
                <p>No hay cambios de custodia para esta muestra.</p>
                </template>
                <template is="dom-if" if="{{!tableListRowsEmpty(listRows)}}">
                        <vaadingrid-singleselect id="mygridid" headerfields="{{listHeader}}" rowcontainer="{{listRows}}"            
                            selected-object="{{selectedObject}}"></vaadingrid-singleselect>
                </template>
            </div>     
            
        </div>        
        `;
    } 

    fieldButtonClicked(e) {        
        console.log('optionPressed', e.detail.buttonName, 'selectedSampleAnalysis', this.selectedObject);                
        //console.log('optionPressed', e.detail.buttonName, 'selectedSample', this.selectedObject);                
        if (this.selectedObject==null){
            var message=''; 
            switch(this.selectedLanguage){
                case 'es': message='Por favor selecciona un objeto primero'; break; //message=response.data.message_es; break;            
                default: message='Please select one object first.'; break; //message=response.data.message_en; break;
            }                    
            this.dispatchEvent(new CustomEvent('toast-error', {
                bubbles: true,
                composed: true,
                detail: message
                }));        
            return;
        }           
        var datas = [];
        datas.schemaPrefix=this.schemaPrefix; datas.actionName=e.detail.buttonName;
        datas.selectedObject=this.selectedObject;
        var tabInfo={
            currTabEsignRequired: this.currTabEsignRequired,
            currTabConfirmUserRequired: this.currTabConfirmUserRequired};
        datas.tabInfo=tabInfo;            
//        datas.sampleResults_analysisListFieldsToRetrieve=sampleResults_analysisListFieldsToRetrieve;
        switch (e.detail.buttonName) {        
        case 'testAssignment':
            var actionName='TESTASSIGNMENT';
            this.$.myElementsSample.moduleActionTrigger(actionName, datas);
            break;
/*            var paramsUrl="actionName="+actionName+"&finalToken="+this.finalToken+"&schemaPrefix="+this.schemaPrefix
            +"&testId="+"141"+"&newAnalyst="+"2";
            var datas = [];
            datas.schemaPrefix=this.schemaPrefix; datas.actionName=actionName; datas.paramsUrl=paramsUrl;   
            this.sampleAPI(datas);
            break;  */
        default:
            break;
        }
        return;
    }    
    dialogConfirmed(){
        //console.log('clicked', this.$.mygrid.getSelectedRows());        
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'confirmed',
            'selectedItems': this.$.mygridid.selectedItems   
            }
        })); 
        this.$.mygridid.selectedItems=[];  
    }        
    dialogCanceled(){
        //console.log('clicked', this.value);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'canceled'
            }
        }));    
    }
    tableListRowsEmpty(content){       
    console.log('tableListRowsEmpty', content.length, content.length==0);

        if (content.length==0){return true;}        
        return false;
    }
}

customElements.define('em-demo-a-list-modal-coc-samplehistory', emDemoAListModalCocSamplehistory);