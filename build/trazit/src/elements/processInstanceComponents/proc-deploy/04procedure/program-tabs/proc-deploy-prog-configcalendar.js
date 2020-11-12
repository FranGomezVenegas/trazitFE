import{PolymerElement,html}from"../../../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../../../store.js";import{FieldsMethods}from"../../../../../platform-mixins/functions/fields-methods.js";import"../../../../../../node_modules/@mpachnis/mp-calendar/mp-calendar.js";import"../../../../internalComponents/Grids/vaadingrid-lit-singleselect.js";import"../../03config/Programs/proc-deploy-progtab-calendar-settings.js";import{programProgConfigCalendar_progConfigCalendarTableHeaderFields}from"../../03config/Programs/proc-deploy-progtab-calendar-settings.js";class procDeployProgConfigcalendar extends FieldsMethods(connect(store)(PolymerElement)){stateChanged(state){this.selectedLanguage=state.app.user.appLanguage;if(null!=state.procDeploy.selectedProgram){//this.selectedProgram=state.procDeploy.selectedProgram;
//console.log('state.procDeploy.selectedProgram.config_scheduled_calendar',state.procDeploy.selectedProgram.config_scheduled_calendar);
//this.events=state.procDeploy.selectedProgram.config_scheduled_calendar;
}}static get properties(){return{selectedLanguage:{type:String,observer:"labelsLang"},monthsLabels:{type:Array},daysLabels:{type:Array},startDayNumber:{type:String},// events: {type: Object, value:
//     [{"title":"E01","content":"Muestreo ...","date":"2020-02-20","category":"blue", "color": "#000"},]},
progConfigCalendarTableHeaderFields:{type:Object,value:programProgConfigCalendar_progConfigCalendarTableHeaderFields},weekDaysDisabled:{type:Object,value:["Sunday","Saturday"]},tableTitle:{type:Object,value:{label_en:"Scheduled program locations",label_es:"Tabla de ubicaciones programadas para el programa"}},selectedProgram:{type:Object,observer:"setConfigScheduledCalendar"},displayCalendar:{type:Boolean,value:!1},displayTable:{type:Boolean,value:!1}}}static get template(){return html`
        <style include="proc-deploy-progtab-calendar-style"></style>  
        <style>
        
            span.mp-cld-day.today{
                background-color: aliceblue;
}           }

            mp-calendar{
                --today-boxshadow-color: #4caf5066;
            }
        </style>     
        <template is="dom-if" if="[[displayCalendar]]">     
            <mp-calendar id="Jan" show-days-in-month="42" first-day-of-week="[[startDayNumber]]" day-labels="[[daysLabels]]" month-labels="[[monthsLabels]]" 
                disable-prev-days="true" disable-next-days="true" theme="light-blue" disabled-days="[[weekDaysDisabled]]" events-object="[[selectedProgram.config_scheduled_calendar]]"></mp-calendar> 
        </template>
        
        <template is="dom-if" if="[[displayTable]]">     
            <div>
                <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}} {{selectedProgram.name}}</p>
            </div>            
            <div>
            <vaadingrid-lit-singleselect class="grid" id="programCalendarGrid" headerfields="{{progConfigCalendarTableHeaderFields}}" 
            rowcontainer="{{selectedProgram.config_scheduled_calendar}}" selected-object="{{selectedObject}}"
            on-selected-object-changed="pointClicked">
            </vaadingrid-lit-singleselect>



<!--                <vaadingrid-singleselect style="width:750px;" id="programCalendarGrid" headerfields="{{progConfigCalendarTableHeaderFields}}" 
                    rowcontainer="{{selectedProgramConfigScheduledCalendar}}" selected-object="{{selectedObject}}"
                   ></vaadingrid-singleselect> -->
            </div>
        </template>
            `}pointClicked(){//This does nothing, remove if so
}labelsLang(){if("es"==this.selectedLanguage){this.monthsLabels=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];this.daysLabels=["Domingo","Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado"];this.startDayNumber="1";return}else{this.monthsLabels=["January","February","March","April","May","June","July","August","September","October","November","December"];this.daysLabels=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];this.startDayNumber="0";return}}}customElements.define("proc-deploy-prog-configcalendar",procDeployProgConfigcalendar);