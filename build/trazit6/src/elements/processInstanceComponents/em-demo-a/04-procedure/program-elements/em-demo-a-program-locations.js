define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js","../../01moduleFunctionality/env-monit-elements.js"],function(_polymerElement,_connectMixin,_store,_envMonitElements){"use strict";/**
 * `em-demo-a-program-locations` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class EmDemoAProgramLocations extends(0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement){static get properties(){return{selectedProgram:{type:Object},tableTitle:{type:String}}}static get template(){return _polymerElement.html`
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>
            <template is="dom-if" if="{{tableTitle.length>0}}">
                <div>
                    <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}} {{selectedProgram.name}}</p>
                </div>
            </template>
            

        `}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super()}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */ready(){super.ready()}}customElements.define("em-demo-a-program-locations",EmDemoAProgramLocations)});