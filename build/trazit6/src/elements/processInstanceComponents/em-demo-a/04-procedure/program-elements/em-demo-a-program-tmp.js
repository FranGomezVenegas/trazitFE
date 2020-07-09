define(["../../../../../../node_modules/@polymer/polymer/polymer-element.js","../../../../../../node_modules/pwa-helpers/connect-mixin.js","../../../../../store.js"],function(_polymerElement,_connectMixin,_store){"use strict";/**
 * `em-demo-a-program-tmp` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */class EmDemoAProgramTmp extends(0,_connectMixin.connect)(_store.store)(_polymerElement.PolymerElement){static get properties(){return{selectedProgram:{type:Object},tableTitle:{type:String}}}static get template(){return _polymerElement.html`            
        `}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */constructor(){super()}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */ready(){super.ready()}}customElements.define("em-demo-a-program-tmp",EmDemoAProgramTmp)});