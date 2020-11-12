import {
  PolymerElement,
  html,
} from "../../../../node_modules/@polymer/polymer/polymer-element.js";
class FieldBadge extends PolymerElement {
  static get properties() {
    return { value: { type: Number, notify: !0 } };
  }
  static get template() {
    return html` <paper-badge label="{{value}}"></paper-badge> `;
  }
}
customElements.define("field-badge", FieldBadge);
