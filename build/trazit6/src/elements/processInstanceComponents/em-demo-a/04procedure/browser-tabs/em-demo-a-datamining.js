define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../../../../platform-mixins/functions/fields-methods.js","../../../../../platform-mixins/functions/utility-methods.js","../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js","../../../../internalComponents/Charts/chart-controller.js","../../01moduleFunctionality/endpoints-frontend-env-monit-browser.js","../../03config/em-demo-a-datamining-settings.js","../../01moduleFunctionality/functions-env-monit.js","../../01moduleFunctionality/endpoints-frontend-env-monit-saved-queries.js","../../01moduleFunctionality/em-demo-a-webcomponent-env-monit.js"],function(_polymerElement,_connectMixin,_store,_fieldsMethods,_utilityMethods,_vaadingridLitSingleselect,_chartController,_endpointsFrontendEnvMonitBrowser,_emDemoADataminingSettings,_functionsEnvMonit,_endpointsFrontendEnvMonitSavedQueries,_emDemoAWebcomponentEnvMonit){"use strict";//import {setSelectedBatch} from '../../02Redux/em-demo-a_actions';
//'../03config/config-process.js';
class emDemoADatamining extends(0,_endpointsFrontendEnvMonitSavedQueries.FrontendEndpointsEnvMonitSavedQueries)((0,_utilityMethods.UtilityMethods)((0,_fieldsMethods.FieldsMethods)((0,_functionsEnvMonit.FunctionsEnvMonit)((0,_endpointsFrontendEnvMonitBrowser.FrontendEndpointsEnvMonitBrowser)((0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)))))){static get properties(){return{queryOutputDefinition:{type:Object,value:_emDemoADataminingSettings.queryOutputDefinition},queries:{type:Object,value:_emDemoADataminingSettings.queries},myQueries:{type:Object},defaultChartType:{type:String,value:_emDemoADataminingSettings.defaultChartType},queriesList:{type:Array,notify:!0,bubble:!0,value:_emDemoADataminingSettings.datamining_querySelectionForm},buttonForm:{type:Array,notify:!0,bubble:!0,value:_emDemoADataminingSettings.datamining_queryButtonForm},selectedQuery:{type:Object,notify:!0},dataminingQueryOutput:{type:Array,notify:!0},selectedObject:Object,callBackRefreshWindow:Object,selectedLanguage:{type:String},kpiCharts:{type:Array,notify:!0,value:[{display_chart:!0,chart_type:"pie",chart_name:"counter_range_eval",chart_title:{label_en:"Evaluation Counter",label_es:"Por tipo de evaluaci\xF3n"},counter_field_name:"count",counterLimits:{//min_allowed: 3,
//min_allowed_included:3,
//max_allowed:100,
//max_allowed_included:100,
//value:0,
},grouper_field_name:"spec_eval",grouper_exclude_items:["Samplingzz","Incubationzz","PlateReadingzz","MicroorganismIdentificationzz","zz","END"],label_item:{label_en:"Statussss",label_es:"Estado"},label_value:{label_en:"#",label_es:"#"}}]},otherCharts:{type:Array,notify:!0,value:[{display_chart:!1,chart_type:"line",chart_name:"datatable",chart_title:{label_en:"Trending",label_es:"Tendencia"},counter_field_name:"raw_value_num",counterLimits:{//min_allowed: 3,
//min_allowed_included:3,
//max_allowed:100,
//max_allowed_included:100,
//value:0,
},grouper_field_name:"sampling_date",grouper_exclude_items:["Samplingzz","Incubationzz","PlateReadingzz","MicroorganismIdentificationzz","zz","END"],label_item:{label_en:"Statussss",label_es:"Estado"},label_value:{label_en:"#",label_es:"#"}}]}}}stateChanged(state){if(null!=state.emDemoA){this.dataminingQueryOutput=state.emDemoA.dataminingQueryOutput;this.getChartDefinition();//this.getCurChartData();
this.myQueries=state.emDemoA.allSavedQueries}this.selectedLanguage=state.app.user.appLanguage}static get template(){return _polymerElement.html`            
            <style include="em-demo-a-datamining-style"></style> 
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>  
            <div class="main">

                <div id="queryform" class="querieslist"> 
                    <template is="dom-repeat" index="{{index}}" items="{{queriesList}}" as="currentfield">
                        <field-controller name="{{currentfield.name}}" style="width:100px;"
                            field="{{currentfield}}" value="{{selectedQuery}}" on-field-list-value-changed="querySelected">
                        </field-controller>
                    </template>          
                    <template is="dom-repeat" index="{{index}}" items="{{selectedQuery.arguments}}" as="currentarg">
                        <field-controller name="{{currentarg.name}}" field="{{currentarg}}" style="width:100px;">
                        </field-controller>
                    </template>
                    <div id="buttonGroup" class="buttonGroup">
                        <template is="dom-repeat" index="{{index}}" items="{{buttonForm}}" as="currentfield">
                            <field-controller name="{{currentfield.name}}" field="{{currentfield}}" on-click="buttonFormClicked" style="width:100px;">
                            </field-controller>
                        </template>                                                    
                    </div>
                </div>
                <div id="queryoutput" class="queriesoutput"> 
                    <div id="tableview" class="queryoutputtable">
                        <template is="dom-if" if="[[queryOutputDefinition.tableTitle.display]]"> 
                            <p class="tableTitle">{{labelValue(selectedLanguage, queryOutputDefinition.tableTitle.label)}}</p>
                        </template>  
                        <div name="tableDefinitionButtons" class="buttonGroup">
                            <template is="dom-if" if="[[queryOutputDefinition.displayRefreshButton]]"> 
                                <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                            </template>  
                            <template is="dom-if" if="[[queryOutputDefinition.displayButtons]]"> 
                                <template is="dom-repeat" items="{{queryOutputDefinition.buttons}}" as="currentfield">       
                                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                                    on-field-button-clicked="fieldButtonClickedForIncubBatch" on-field-list-value-changed="onListChange"> 
                                    </field-controller>
                                </template>  
                            </template>  
                        </div>            
                        <vaadingrid-lit-singleselect id="emdemoa-samplesampling" headerfields="{{queryOutputDefinition.fieldToDisplay}}" 
                            rowcontainer="{{dataminingQueryOutput.datatable}}" selected-object="{{selectedBatch}}" on-selected-object-changed="batchSelected">
                        </vaadingrid-lit-singleselect>
                    </div>            
                    <template is="dom-repeat" items="[[kpiCharts]]" as="curkpichart">                                    
                        <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{dataminingQueryOutput}}"></chart-controller>
                    </template>
                    <template is="dom-repeat" items="[[otherCharts]]" as="curkpichart">                                    
                        <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{dataminingQueryOutput}}"></chart-controller>
                    </template>
                </div>
            </div>
        `}buttonFormClicked(e){console.log("buttonFormClicked",e);if("RUNQUERY"==e.currentTarget.name.toUpperCase()){this.runQuery();return}if("LOADQUERY"==e.currentTarget.name.toUpperCase()){this.loadQuery();return}if("CREATE_SAVED_QUERY"==e.currentTarget.name.toUpperCase()){//e.detail.buttonDefinition field
var buttonDefinition={buttonDefinition:e.currentTarget.field},mye={detail:buttonDefinition};//.buttonDefinition:e.currentTarget.field};
this.fieldButtonClickedForSavedQueries(mye);return}alert("Action "+e.currentTarget.name.toUpperCase()+" not recognized");return}createQuery(){}runQuery(){var data=[];data.actionName=this.selectedQuery.name;if(this.selectedQuery.definition_json!=void 0){this.selectedQuery=this.selectedQuery.definition_json}for(var urlparams="",i=0;i<this.selectedQuery.arguments.length;i++){if(this.selectedQuery.arguments[i].value!=void 0&&0<this.selectedQuery.arguments[i].value.length){if(0<urlparams.length){urlparams=urlparams+"&"}urlparams=urlparams+this.selectedQuery.arguments[i].name+"="+this.selectedQuery.arguments[i].value}}if(0==urlparams.length){alert("At least one argument is mandatory");return}//urlparams="samplingDayEnd=today"+"&"+"includeSamplerSamples=true";
//urlparams=urlparams+"&"+"sampleGroups=area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest"
this.selectedObject=this.selectedQuery;this.getDataMiningQueryOutput(data,urlparams)}loadQuery(){this.selectedQuery=this.myQueries[0];console.log();this.selectedQuery.definition=this.selectedQuery.definition_json;this.selectedObject=this.selectedQuery;this.selectedObject.definition=JSON.stringify(this.selectedQuery);this.otherCharts=[];this.otherCharts=this.selectedQuery.otherCharts;this.runQuery();return}querySelected(e){if(!e.detail){return}this.selectedQuery=this.queries[e.detail.index];this.selectedObject=this.selectedQuery;this.selectedObject.definition=JSON.stringify(this.selectedQuery);return}refreshWindow(){this.fillQueriesList()}ready(){super.ready();this.fillQueriesList();this.getAllSavedQueries("","")}fillQueriesList(){//console.log('fillQueriesList', 'this.queries', this.queries);
if(null==this.queries){return}var i;this.set("queriesList.0.items",[]);for(i=0;i<this.queries.length;i++){this.push("queriesList.0.items",{keyName:this.queries[i].name,keyValue_en:this.queries[i].label_en,keyValue_es:this.queries[i].label_es})}}getChartDefinition(){// console.log('getChartDefinition');
var posic=!1;this.kpiCharts=[];var groupsArgData="",groupsArgDataArr=[];if(this.selectedQuery==void 0||this.selectedQuery.arguments==void 0){return}posic=this.valuePosicInArray(this.selectedQuery.arguments,"sampleGroups");if(-1<posic){groupsArgData=this.selectedQuery.arguments[posic].value}else{posic=this.valuePosicInArray(this.selectedQuery.arguments,"investigationGroups");if(-1<posic){groupsArgData=this.selectedQuery.arguments[posic].value}}if(-1==posic){this.kpiCharts=[];return}groupsArgDataArr=this.stringToArray(groupsArgData,"|","*");for(var i=0;i<groupsArgDataArr.length;i++){var curChartName=groupsArgDataArr[i][1],chartType=this.defaultChartType;if(2<groupsArgDataArr[i].length){if(0<groupsArgDataArr[i][2].length){chartType=groupsArgDataArr[i][2]}}var chartTitleEn=curChartName;if(3<groupsArgDataArr[i].length){if(0<groupsArgDataArr[i][3].length){chartTitleEn=groupsArgDataArr[i][3]}}var chartTitleEs=curChartName;if(4<groupsArgDataArr[i].length){if(0<groupsArgDataArr[i][4].length){chartTitleEs=groupsArgDataArr[i][4]}}//alert(curChartName);
var chartOutputData=this.dataminingQueryOutput[curChartName],chartKPIItem={display_chart:!0,chart_type:chartType,// 'line',
chart_name:curChartName,chart_title:{label_en:chartTitleEn,label_es:chartTitleEs},counter_field_name:"count",counterLimits:{//     min_allowed: 0,
// //   min_allowed_included:3,
//     max_allowed:200,
// //   max_allowed_included:100,
// //   value:0,
},grouper_field_name:groupsArgDataArr[i][0],grouper_exclude_items:[],label_item:{label_en:groupsArgDataArr[i][0],label_es:groupsArgDataArr[i][0]},label_value:{label_en:"#",label_es:"#"}};//alert(chartOutputData.length);
this.kpiCharts[i]=chartKPIItem}return;// this.kpiCharts;
var elem=this.shadowRoot.getElementById(this.field.name);if(elem){elem.resetValue()}if(-1<this.valuePosicInArray(this.selectedQuery.arguments,"")){found=!0;alert("wooooeeee");return}//if (this.selectedQuery.sampleGroup==undefined || this.selectedQuery.investigationGroup==undefined)
}}customElements.define("em-demo-a-datamining",emDemoADatamining)});