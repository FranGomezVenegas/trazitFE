import {
  PolymerElement,
  html,
} from "../../../../node_modules/@polymer/polymer/polymer-element.js";
import "./field-boolean.js";
import "./field-list.js";
import "./field-date.js";
import "./field-text.js";
import "./field-text-area.js";
import "./field-textconfirmuser.js";
import "./field-logo-circle.js";
import "./field-avatar.js";
import "./field-google-fonts.js";
import "./field-tree-list.js";
import "./field-button.js";
import "./field-title.js";
import "./field-button-group.js";
import "./field-integer.js";
import "./field-icon-button.js";
class FieldController extends PolymerElement {
  static get properties() {
    return {
      id: { type: String },
      field: { type: Object, observer: "fieldChange", notify: !0 },
      title: { type: Object },
      selectedLanguage: { type: String, notify: !0 },
      iAm: {
        type: Object,
        value: function () {
          return {
            boolean: !1,
            date: !1,
            list: !1,
            text: !1,
            textArea: !1,
            logoCircle: !1,
            avatar: !1,
            googleFonts: !1,
            treeList: !1,
            iconButton: !1,
            button: !1,
            buttonGroup: !1,
            integer: !1,
            badge: !1,
          };
        },
      },
    };
  }
  resetValue() {
    var elem = this.shadowRoot.getElementById(this.field.name);
    if (elem) {
      elem.resetValue();
    } else {
      console.log(
        "field-controller.resetValue",
        "no field with name ",
        this.field.name
      );
    }
  }
  focus() {
    var elem = this.shadowRoot.getElementById(this.field.name);
    if (elem) {
      elem.focus();
    } else {
      console.log(
        "field-controller.focus",
        "no field with name ",
        this.field.name
      );
    }
  }
  enable() {
    var elem = this.shadowRoot.getElementById(this.field.name);
    if (elem) {
      elem.enable();
    } else {
      console.log(
        "field-controller.enable",
        "no field with name ",
        this.field.name
      );
    }
  }
  disable() {
    var elem = this.shadowRoot.getElementById(this.field.name);
    if (elem) {
      elem.disable();
    } else {
      console.log(
        "field-controller.disable",
        "no field with name ",
        this.field.name
      );
    }
  }
  resetIAms() {
    this.set("iAm.boolean", !1);
    this.set("iAm.date", !1);
    this.set("iAm.list", !1);
    this.set("iAm.text", !1);
    this.set("iAm.textArea", !1);
    this.set("iAm.logoCircle", !1);
    this.set("iAm.avatar", !1);
    this.set("iAm.googleFonts", !1);
    this.set("iAm.treeList", !1);
    this.set("iAm.iconButton", !1);
    this.set("iAm.button", !1);
    this.set("iAm.buttonGroup", !1);
    this.set("iAm.integer", !1);
    this.set("iAm.badge", !1);
  }
  static get template() {
    return html`
<!--      {{field.name}} -->
      <div class="card">      
      <template is="dom-if" if="{{iAm.boolean}}" >
        <field-boolean id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-boolean>
      </template>
      <template is="dom-if" if="{{iAm.date}}">
      <field-date id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-date>
      </template>
      <template is="dom-if" if="{{iAm.list}}">   
        <field-list id="{{field.name}}"  field="[[field]]" value="{{field.value}}" value_no_index="{{field.value_no_index}}" ></field-list>
      </template>
      <template is="dom-if" if="{{iAm.text}}">
        <field-text id="{{field.name}}" "type="{{field.type}}" field="{{field}}" value="{{field.value}}" ></field-text>
      </template>
      <template is="dom-if" if="{{iAm.textArea}}">
        <field-text-area id="{{field.name}}" type="{{field.type}}" field="{{field}}" value="{{field.value}}" ></field-text-area>
      </template>
      <template is="dom-if" if="{{iAm.logoCircle}}">
        <field-logo-circle id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-logo-circle>
      </template>  
      <template is="dom-if" if="{{iAm.avatar}}">
        <field-avatar id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-avatar>
      </template>      
      <template is="dom-if" if="{{iAm.googleFonts}}">
        <field-google-fonts id="{{field.name}}" field="[[field]]" value="{{field.value}}"></field-google-fonts>
      </template>      
      <template is="dom-if" if="{{iAm.treeList}}">
        <field-tree-list title="[[title]]" procedure="[[procedure]]" id="{{field.name}}" field="[[field]]" value="{{field.value}}"></field-tree-list>
      </template>         
      <template is="dom-if" if="{{iAm.button}}">
        <field-button id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-button>
      </template>        
      <template is="dom-if" if="{{iAm.title}}">
        <field-title id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-title>
      </template>        
      <template is="dom-if" if="{{iAm.buttonGroup}}">
        <field-button-group id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-button-group>
      </template>  
      <template is="dom-if" if="{{iAm.integer}}">      
        <field-integer id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-integer>
      </template>                    
      <template is="dom-if" if="{{iAm.badge}}">      
        <field-badge id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-badge>
      </template>    
      <template is="dom-if" if="{{iAm.textconfirmuser}}">
        <field-textconfirmuser type="{{field.type}}" id="{{field.name}}" field="{{field}}" value="{{field.value}}" ></field-textconfirmuser>
      </template>
      <template is="dom-if" if="{{iAm.iconButton}}">
        <field-icon-button procedure="[[procedure]]" type="{{field.type}}" id="{{field.name}}" field="{{field}}" value="{{field.value}}" ></field-icon-button>
      </template>
      </div>
    `;
  } // listChange(newList) {
  //   this.field-list
  // }
  fieldChange(newField) {
    this.resetIAms(); //if (this.id=='proceduresList'){
    //  console.log('field-controller', newField.name, this.id);
    //}
    switch (newField.type) {
      case "boolean":
        this.set("iAm.boolean", !0);
        break;
      case "list":
        this.set("iAm.list", !0); //this.set('iAm.text', false);
        break;
      case "date":
        this.set("iAm.date", !0);
        break;
      case "text":
        this.set("iAm.text", !0);
        break;
      case "text-area":
        this.set("iAm.textArea", !0);
        break;
      case "password":
        this.set("iAm.text", !0);
        break;
      case "logo-circle":
        this.set("iAm.logoCircle", !0);
        break;
      case "avatar":
        this.set("iAm.avatar", !0);
        break;
      case "google-fonts":
        this.set("iAm.googleFonts", !0);
        break;
      case "tree-list":
        this.set("iAm.treeList", !0);
        break;
      case "button":
        this.set("iAm.button", !0);
        break;
      case "title":
        this.set("iAm.title", !0);
        break;
      case "button-group":
        this.set("iAm.buttonGroup", !0);
        break;
      case "integer":
        this.set("iAm.integer", !0);
        break;
      case "badge":
        this.set("iAm.badge", !0);
        break;
      case "textconfirmuser":
        this.set("iAm.textconfirmuser", !0);
        break;
      case "icon-button":
        this.set("iAm.iconButton", !0);
        break;
    }
  }
}
customElements.define("field-controller", FieldController);
