define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../../../node_modules/@polymer/paper-dialog/paper-dialog.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../../../internalComponents/cards/card-form.js","../../01moduleFunctionality/api-env-monit.js","../../01moduleFunctionality/env-monit-elements.js","../../01moduleFunctionality/frontend-env-monit.js","../../01moduleFunctionality/frontend-env-monit-sample.js","../../03config/config-process.js","../../02Redux/em-demo-a_actions.js","../../../../../platform-mixins/functions/fields-methods.js"],function(_polymerElement,_connectMixin,_store,_paperDialog,_vaadingridLitSingleselect,_cardForm,_apiEnvMonit,_envMonitElements,_frontendEnvMonit,_frontendEnvMonitSample,_configProcess,_emDemoA_actions,_fieldsMethods){"use strict";//import '../../../../internalComponents/grid-components/vaadingrid-singleselect.js';
class EmDemoAProgPoints extends(0,_fieldsMethods.FieldsMethods)((0,_frontendEnvMonitSample.FrontendEnvMonitSample)((0,_apiEnvMonit.EmDemoAapiEnvMonit)((0,_frontendEnvMonit.FrontendEnvMonit)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement))))){static get properties(){return{selectedLanguage:{type:String},selectedPointCardForm:{type:Object},//, value:appLogin_formFields},
selectedProgram:{type:Object,value:[]},selectedSamplingPoint:{type:Array},cardFormButtons:{type:Object,value:_configProcess.progProintsCardFormButtons},formButtons:{type:Object,value:_configProcess.progProintsFormButtons},systemShifts:{type:Object,value:_configProcess.shifts},productionLotsList:{type:Array,value:[{keyName:"rutina",keyValue_en:"routine",keyValue_es:"rutina"}]},selectedObject:{type:Object,notify:!0},activeProductionLots:{type:Array,value:[]},samplePointsTableHeaderFields:{type:Array,value:_configProcess.programProgPoints_samplePointsTableHeaderFields},callBackRefreshWindow:Object,tableTitle:{type:Object,value:{label_en:"Defined program locations",label_es:"Tabla de ubicaciones definidas para el programa"}}}}static get template(){return _polymerElement.html`
            <style>
            vaadin-button {
                top: 0;
                left: 0;
                transition: all .15s linear 0s;
                position: relative;
                display: inline-block;
                padding: 15px 25px;
                background-color: $yellow;
                
                text-transform: uppercase;
                color: $brown;
                font-family: arial;
                letter-spacing: 1px;
                
                box-shadow: -6px 6px 0 $brown;
                text-decoration: none;
                
                &:hover {
                  top: 3px;
                  left: -3px;
                  box-shadow: -3px 3px 0 $brown;
                  
                  &::after {
                    top: 1px;
                    left: -2px;
                    width: $angle-o;
                    height: $angle-o;
                  }
                  
                  &::before {
                    bottom: -2px;
                    right: 1px;
                    width: $angle-o;
                    height: $angle-o;
                  }
                } }           
                div.parentMap{
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    background-color: blue;
                }
                .programsList {
                    display: none;
                    width: 200px;
                    height: 100px;
                    margin: 1em;
                }  
                .programDefinition {
                    display: inline-block;
                    width: 1200px;
                    height: 300px;
                    margin: 1em;
                }    
                .card {
                    margin: 24px;
                    padding: 16px;
                    color: #757575;
                    border-radius: 5px;
                    background-color: #fff;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                }        
                p.tableTitle{
                    margin-top: 0px;
                    margin-bottom: 3px;
                    color: #4285f4;
                    font-size:30px;
                }            
            </style>
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>
            <div>
                <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}} {{selectedProgram.name}}</p>
            </div>
            <div name="Buttons1" class="buttonGroup">
                <template is="dom-repeat" items="{{formButtons}}" as="currentfield">       
                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                    on-field-button-clicked="pointClicked" on-field-list-value-changed="onListChange"> 
                    </field-controller>
                </template>  
            </div>            
            <div style="display:flex">

            <vaadingrid-lit-singleselect style="width:750px;" id="mygridid" headerfields="{{samplePointsTableHeaderFields}}" 
                rowcontainer="{{selectedProgram.sample_points}}" selected-object="{{selectedObject}}"
                on-selected-object-changed="pointClicked"></vaadingrid-lit-singleselect>
            </div>
            <paper-dialog id="pointCard">                   
                <card-form form-fields="{{selectedSamplingPoint}}" buttons="{{cardFormButtons}}" 
                on-field-button-clicked="sampleLogButtonClicked"
                on-dialog-button-clicked="dialogClosedpointCard"> </card-form>
            </paper-dialog>

        `}dialogClosedpointCard(e){}mapClick(e){console.log("mapClick","click",this.source);var posicXInit=e.offsetX,posicYInit=e.offsetY;console.log("posicXInit",posicXInit,"posicYInit",posicYInit);//this.shadowRoot.getElementById(e.currentTarget.posicIndex+'content').style.zIndex=1000;                       
}itemSelected(){console.log("itemSelected xssss")}onListChange(){this.pointClicked()}pointClicked(e){if(!e.detail.value){return}//console.log(this.selectedSamplingPoint, 'init');
//console.log('em-demo-a-prog-points >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedSamplingPoint', this.selectedSamplingPoint );        
_store.store.dispatch((0,_emDemoA_actions.setSelectedSamplingPoint)(e.detail.value.card_info));//console.log(this.selectedSamplingPoint, 'before');        
var selectedSamplingPointLen=this.selectedSamplingPoint.length;selectedSamplingPointLen=selectedSamplingPointLen++;var newElement=[{name:"shift",label_en:"Shift",label_es:"Turno",type:"list",dbType:"String",value:"",read_only:!1,items:this.systemShifts},{name:"production_lot",label_en:"Lot",label_es:"Lote",type:"list",dbType:"String",value:"",read_only:!1,items:this.productionLotsList}],i;for(i=0;i<this.selectedSamplingPoint.length;i++){newElement[i+2]=this.selectedSamplingPoint[i]}this.selectedSamplingPoint=newElement;this.$.pointCard.open()}stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.emDemoA){this.selectedSamplingPoint=state.emDemoA.selectedSamplingPoint;this.selectedProgram=state.emDemoA.selectedProgram;this.activeProductionLots=state.emDemoA.activeProductionLots;if(null==this.selectedProgram)return;//console.log('this.activeProductionLots', this.activeProductionLots);
if(null!=this.activeProductionLots){this.createProductionLotsList()}//this.unReceivedSamples= state.processUs.unReceivedSamples;
}}createProductionLotsList(){var i;for(i=0;i<this.activeProductionLots.length;i++){//console.log('createProductionLotsList', 'this.productionLotsList', this.productionLotsList);
var newElement=[{keyName:"",keyValue_en:"",keyValue_es:""}];newElement.keyName=this.activeProductionLots[i].lot_name;newElement.keyValue_en=this.activeProductionLots[i].lot_name;newElement.keyValue_es=this.activeProductionLots[i].lot_name;this.productionLotsList[i+1]=newElement;//{keyName:"M1", :"M1", keyValue_es:"M1"},
}//console.log(this.productionLotsList);     
}}customElements.define("em-demo-a-prog-points",EmDemoAProgPoints)});