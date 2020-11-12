import { LitElement, html, css } from "lit-element";
class FontawesomeElement extends LitElement {
  render() {
    return html`
          <link rel="stylesheet" href="./app-styles.css" />            
      <div>        <i class="icon hat-wizard"></i>Hat Wizard       </div>
          
    `;
  }
}
customElements.define("fontawesome-element", FontawesomeElement);
