import{PolymerElement,html}from"../../../../node_modules/@polymer/polymer/polymer-element.js";import"../../../config/platform/main-layout/two-headers-form-fields-style.js";class FieldLogoCircle extends PolymerElement{static get template(){return html`
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style include="form-fields-style"></style>
            <img class="formFieldLogoCircle" src="{{field.source}}" float="{{field.float}}" aligned="center" alt="LabPLANET" height="40" width="50"> 
        `}}customElements.define("field-logo-circle",FieldLogoCircle);