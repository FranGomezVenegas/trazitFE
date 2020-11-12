import {
  PolymerElement,
  html,
} from "../../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../../store.js";
import "../../01moduleFunctionality/env-monit-elements.js";
/**
 * `em-demo-a-program-locations` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */ class EmDemoAProgramLocations extends connect(store)(PolymerElement) {
  static get properties() {
    return { selectedProgram: { type: Object }, tableTitle: { type: String } };
  }
  static get template() {
    return html`
      <env-monit-elements
        id="myElements"
        refresh-window-method="{{callBackRefreshWindow}}"
      ></env-monit-elements>
      <template is="dom-if" if="{{tableTitle.length>0}}">
        <div>
          <p class="tableTitle">
            {{labelValue(selectedLanguage, tableTitle)}}
            {{selectedProgram.name}}
          </p>
        </div>
      </template>
    `;
  }
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */ constructor() {
    super();
  }
  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */ ready() {
    super.ready();
  }
}
customElements.define("em-demo-a-program-locations", EmDemoAProgramLocations);
