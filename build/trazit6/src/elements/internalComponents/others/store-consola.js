define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../store.js",
  "../../../../node_modules/@vaadin/vaadin-button/vaadin-button.js",
], function (_polymerElement, _connectMixin, _store, _vaadinButton) {
  "use strict";
  class storeConsola extends (0, _connectMixin.connect)(_store.store)(
    _polymerElement.PolymerElement
  ) {
    static get properties() {
      return { userName: String };
    }
    static get template() {
      return _polymerElement.html`
            <!-- <template is="dom-if" if="{{showMostrarStoreButton()}}"> -->
            <vaadin-button on-click="mostrarStore">store</vaadin-button>
            <!-- </template>  -->
        `;
    }
    showMostrarStoreButton() {
      //        if (this.userName=='labplanet'){return true;}
      //if (this.userName=='fgomez'){return true;}
      return !1;
    }
    mostrarStore() {
      console.log(_store.store.getState());
    } // stateChanged(state) {
    //     this.loggedIn = state.app.user.loggedIn;
    //     this.userName = state.app.user.userDB;
    // }
  }
  customElements.define("store-consola", storeConsola);
});
