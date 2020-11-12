import {
  PolymerElement,
  html,
} from "../../../../../node_modules/@polymer/polymer/polymer-element.js";
import { connect } from "../../../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../../../store.js";
import("../../../../../node_modules/@polymer/paper-dialog/paper-dialog.js");
import "../SOP/MySOPs/my-sops-style.js";
import { FieldsMethods } from "../../../../platform-mixins/functions/fields-methods.js";
import { filterArea } from "./videotutorial-tab-style.js"; // import '@polymer/iron-collapse/iron-collapse.js';
// import 'vaadin-button/vaadin-button';
// import '@alenaksu/json-viewer';
// import '@polymer/paper-input/paper-input';
// import 'webcomponent-qr-code';
// import '@thuoe/mp4-video-player';
//import '@granite-elements/granite-qrcode-scanner/granite-qrcode-scanner.js';
import { FrontendVideoTutorials } from "../../../../platform-mixins/platform-functions/frontend-videotutorials.js";
class VideotutorialTab extends FieldsMethods(
  FrontendVideoTutorials(connect(store)(PolymerElement))
) {
  stateChanged(state) {
    this.allVideoTutorials = state.videoTutorials.allActiveVideoTutorials;
    if (this.allVideoTutorials != void 0) {
      this.entityNames = [
        ...new Set(this.allVideoTutorials.map((x) => x.entity_name)),
      ];
      if (0 < this.entityNames.length) {
        this.fillEntityNamesListElem();
      }
      this.entityTypes = [
        ...new Set(this.allVideoTutorials.map((x) => x.entity_type)),
      ];
      if (0 < this.entityTypes.length) {
        this.fillEntityTypesListElem();
      }
      if (
        this.filteredVideoTutorials == void 0 ||
        0 == this.filteredVideoTutorials.length
      ) {
        this.filteredVideoTutorials = this.allVideoTutorials;
      }
    }
    this.selectedLanguage = state.app.user.appLanguage;
  }
  static get properties() {
    return {
      filteredVideoTutorials: { type: Array },
      allVideoTutorials: { type: Array },
      selectedLanguage: { type: String, notify: !0 },
      videoUrl: {
        type: String,
        value: "http://51.75.202.142:8888/myvideos/LP.mp4",
      },
      entityNames: { type: Array },
      entityNamesListElement: {
        type: Array,
        value: [{ keyName: "", keyValue_en: "", keyValue_es: "" }],
      },
      entityTypes: { type: Array },
      entityTypesListElement: {
        type: Array,
        value: [{ keyName: "", keyValue_en: "", keyValue_es: "" }],
      },
      filterArea: { type: Array, value: filterArea },
    };
  }
  filterForVideos() {
    const itemsByFilter = [];
    for (const item of this.allVideoTutorials) {
      for (var match = !0, i = 0; i < this.filterArea.length; i++) {
        //     alert(this.filterArea[i].name+this.filterArea[i].value+this.filterArea[i].value_no_index);
        var fieldName = this.filterArea[i].name,
          fieldValue = this.filterArea[i].value;
        if (fieldValue && 0 < fieldValue.length) {
          fieldValue = fieldValue.substring(0, fieldValue.length - 2);
          console.log("filterForVideos", fieldValue);
          if (
            fieldValue != void 0 &&
            0 < fieldValue.length &&
            item[fieldName] != fieldValue
          ) {
            match = !1;
          }
        }
      }
      if (match) {
        itemsByFilter.push(item);
      }
    }
    this.filteredVideoTutorials = [];
    this.filteredVideoTutorials = itemsByFilter;
  }
  fillEntityTypesListElem() {
    var i;
    for (i = 0; i < this.entityTypes.length; i++) {
      //if (this.entityTypes[i].length>0){
      var newElement = [{ keyName: "", keyValue_en: "", keyValue_es: "" }];
      newElement.keyName = this.entityTypes[i];
      newElement.keyValue_en = this.entityTypes[i];
      newElement.keyValue_es = this.entityTypes[i];
      this.entityTypesListElement[i + 1] = newElement; //}
    }
    this.set("filterArea.0.items", this.entityTypesListElement);
  }
  fillEntityNamesListElem() {
    var i;
    for (i = 0; i < this.entityNames.length; i++) {
      //if (this.entityNames[i].length>0){
      var newElement = [{ keyName: "", keyValue_en: "", keyValue_es: "" }];
      newElement.keyName = this.entityNames[i];
      newElement.keyValue_en = this.entityNames[i];
      newElement.keyValue_es = this.entityNames[i];
      this.entityNamesListElement[i + 1] = newElement; //}
    }
    this.set("filterArea.1.items", this.entityNamesListElement);
  }
  toggleSOP() {
    this.elementOpen = !this.elementOpen;
    return;
  }
  static get template() {
    return html`
    <style include="my-sops-style"></style>
    <div class="wrapperMySops">
    <div>
        <template is="dom-repeat" items="{{filterArea}}" as="currentfield">       
            <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" value="{{item}}"
                on-field-button-clicked="fieldButtonClickedForSops" on-field-list-value-changed="filterForVideos"
                selected-Object="[[item]]"> 
            </field-controller>
        </template>  

    </div>        

    <template is="dom-repeat" items="{{filteredVideoTutorials}}">      
        <div class="cardMySops"> 

        <paper-dialog always-on-top no-cancel-on-outside-click  id="videowindowdialog" >    
            <mp4-video-player src="{{videoUrl}}" ></mp4-video-player>      <!-- auto-play -->  
        </paper-dialog>     
<!--
            <template is="dom-repeat" items="[[item.sopFieldsToDisplay]]" as="cardFld" >  
                <p><b>{{getTableFieldLabel(tableFieldLabelSchemaName, tableFieldLabelTableName, cardFld.field_name, selectedLanguage)}}:</b> {{cardFld.field_value}}<p></p>
            </template>
-->             
<input type="button" item="{{item}}" on-click="openVideoWindow">video</input>       
            <p><pdf-link align="center" file-link="[[item.src]]"></pdf-link></p>
            <p>{{videoTitle(item)}} <p></p>
            <p><b>SOP Name:</b> {{item.entity_type}}</p>
            <p>{{labelValue(selectedLanguage, item)}}</p>
            <p>{{fieldValue(selectedLanguage, item, 'summary')}}</p>
            <p><b>Summary:</b> {{item.brief_summary}}</p> 
<!--            <template is="dom-if" if="{{sopMySops_cardContent.display_certification_status_icon}}">
                <p><b>My Certification Status:</b> 
                        <paper-icon-button style="{{certificationStatusStyleDefinition(item)}}" icon="{{certificationStatus(item)}}" 
                        title="{{statusLegend(item, selectedLanguage)}}"
                        disabled="{{field.read_only}}" value="{{field.name}}" ></paper-icon-button>
                </p>
            </template>
            <template is="dom-if" if="{{displayCompleteButton(item)}}">
                <div name="Buttons1" class="buttonGroup">
                    <template is="dom-repeat" items="{{dialogButtons}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" value="{{item}}"
                        on-field-button-clicked="fieldButtonClickedForSops" on-field-list-value-changed="filterForVideos"
                        selected-Object="[[item]]"> 
                        </field-controller>
                    </template>  
                </div>            
            </template> 
-->            
        </div>
    </template>
    </div>
    `;
  }
  openVideoWindow(e) {
    console.log("openVideoWindow", e); //alert('ooooopening');
    //      this.$.videowindowdialog.open();
    this.videoUrl = e.currentTarget.item.source;
    var elem = this.shadowRoot.getElementById("videowindowdialog");
    if (elem) {
      elem.open();
    } //      this.$.videoPlayerDiv.style.visibility=visible;
  }
  videoTitle(item) {
    if (item.entity_type == void 0 || 0 == item.entity_type.length) {
      return item.entity_name;
    }
    return item.entity_type + " (" + item.entity_name + ") ";
  }
  ready() {
    super.ready();
    this.getActiveVideoTutorials({});
  }
}
customElements.define("videotutorial-tab", VideotutorialTab);
