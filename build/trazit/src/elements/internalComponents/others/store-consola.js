import{html,PolymerElement}from"../../../../node_modules/@polymer/polymer/polymer-element.js";import{connect}from"../../../../node_modules/pwa-helpers/connect-mixin.js";import{store}from"../../../store.js";import"../../../../node_modules/@vaadin/vaadin-button/vaadin-button.js";class storeConsola extends connect(store)(PolymerElement){static get properties(){return{userName:String}}static get template(){return html`
            <!-- <template is="dom-if" if="{{showMostrarStoreButton()}}"> -->
            <vaadin-button on-click="mostrarStore">store</vaadin-button>
            <!-- </template>  -->
        `}showMostrarStoreButton(){//        if (this.userName=='labplanet'){return true;}
//if (this.userName=='fgomez'){return true;}
return!1}mostrarStore(){console.log(store.getState())}// stateChanged(state) {
//     this.loggedIn = state.app.user.loggedIn;
//     this.userName = state.app.user.userDB;
// }      
}customElements.define("store-consola",storeConsola);