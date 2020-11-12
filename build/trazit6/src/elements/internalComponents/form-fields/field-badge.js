define([
  "../../../../node_modules/@polymer/polymer/polymer-element.js",
], function (_polymerElement) {
  "use strict";
  class FieldBadge extends _polymerElement.PolymerElement {
    static get properties() {
      return { value: { type: Number, notify: !0 } };
    }
    static get template() {
      return _polymerElement.html`
            <paper-badge label="{{value}}"></paper-badge>        `;
    }
  }
  customElements.define("field-badge", FieldBadge);
});
