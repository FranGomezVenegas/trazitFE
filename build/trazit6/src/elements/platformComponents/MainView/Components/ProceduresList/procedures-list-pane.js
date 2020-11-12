define([
  "../../../../../../node_modules/@polymer/polymer/polymer-element.js",
  "../../../../../../node_modules/pwa-helpers/connect-mixin.js",
  "../../../../../store.js",
  "../../../../../../node_modules/@polymer/iron-selector/iron-selector.js",
  "../../../../../../node_modules/@polymer/iron-collapse/iron-collapse.js",
  "./procedures-list-pane-settings.js",
  "./procedures-list-pane-style.js",
  "../../../../../config/platform/logic/platform-config.js",
  "../../../Redux/actions/tabs_actions.js",
  "../../../../../platform-mixins/functions/fields-methods.js",
  "../../../../../platform-mixins/functions/toast-methods.js",
], function (
  _polymerElement,
  _connectMixin,
  _store,
  _ironSelector,
  _ironCollapse,
  _proceduresListPaneSettings,
  _proceduresListPaneStyle,
  _platformConfig,
  _tabs_actions,
  _fieldsMethods,
  _toastMethods
) {
  "use strict";
  class ProceduresListPane extends (0, _toastMethods.ToastMethods)(
    (0, _fieldsMethods.FieldsMethods)(
      (0, _connectMixin.connect)(_store.store)(_polymerElement.PolymerElement)
    )
  ) {
    static get properties() {
      return {
        procedureList: { type: Object, notify: !0 },
        horizontal: { type: Boolean },
        opened: { type: Boolean, value: !0, reflectToAttribute: !0 },
        noAnimation: { type: Boolean },
        selectedLanguage: { type: String },
        paneTitle: {
          type: Object,
          value: _proceduresListPaneSettings.proceduresListPaneTitle,
        },
        tabNotOpenableByCertification: {
          type: Object,
          value: _proceduresListPaneSettings.tabNotOpenableByCertification,
        },
        titleValue: String,
        titleIcon: String,
        fieldTitlePendingSOP: {
          type: Object,
          value: {
            label_en: "You have pending SOPs",
            label_es: "Tienes PNTs pendientes",
          },
        },
      };
    }
    stateChanged(state) {
      this.selectedLanguage = state.app.user.appLanguage;
      this.getText();
      if (this.selectedLanguage != state.app.user.appLanguage) {
        this.selectedLanguage = state.app.user.appLanguage;
      }
      if (this.procedureList != state.app.user.appProcedureList) {
        this.procedureList = state.app.user.appProcedureList;
      }
    }
    toggle() {
      this.$.collapse.toggle();
      this.getText();
    }
    getText() {
      if (this.opened) {
        this.titleValue = this.labelValue(
          this.selectedLanguage,
          this.paneTitle.open
        );
        this.titleIcon = this.paneTitle.open.icon_name;
        return;
      }
      this.titleValue = this.labelValue(
        this.selectedLanguage,
        this.paneTitle.closed
      );
      this.titleIcon = this.paneTitle.closed.icon_name;
    }
    static get template() {
      return _polymerElement.html`      
        <style include="procedures-list-pane-style"></style>
        <div id="title" class="title">
            <iron-icon icon="[[titleIcon]]" on-click="toggle"></iron-icon>
            <vaadin-button id="triggerProcedures" on-click="toggle" aria-expanded\$="[[opened]]" aria-controls="collapse">[[titleValue]]</vaadin-button>
        </div>   
        <iron-collapse id="collapse" hidden="{{!opened}}" opened="{{opened}}" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0">            
            <template is="dom-repeat" items="{{procedureList.procedures}}" as="currprocedure">   
                <div class="title">
                    <template is="dom-repeat"  items="{{currprocedure.icons_up}}" as="currentfield">                    
                        <field-controller style="padding-top: 0px; padding-bottom: 0px;" id="{{currentfield.name}}" on-field-button-clicked="crearTab" tab-index="{{index}}" field="{{currentfield}}" procedure="{{currprocedure}}"></field-controller>            
                    </template>            
                </div>         
                <template is="dom-repeat"  items="{{currprocedure.definition}}" as="currentfield">                    
                    <field-controller title="{{fieldTitlePendingSOP}}" style="padding-top: 0px; padding-bottom: 0px;" id="{{currentfield.name}}" on-field-tree-list-clicked="crearTab" tab-index="{{index}}" field="{{currentfield}}" procedure="{{currprocedure}}"></field-controller>            
                </template>            
                <div class="title">
                    <template is="dom-repeat"  items="{{currprocedure.icons_down}}" as="currentfield">                    
                        <field-controller style="padding-top: 0px; padding-bottom: 0px;" id="{{currentfield.name}}" on-field-button-clicked="crearTab" tab-index="{{index}}" field="{{currentfield}}" procedure="{{currprocedure}}"></field-controller>            
                    </template>            
                </div>         
            </template> 
        </iron-collapse>   
        `;
    }
    crearTab(e) {
      if (
        !(0, _platformConfig.isTabOpenableWhenNotSopCertified)(
          e.detail.procedure
        )
      ) {
        console.log(
          "isTabOpenableWhenNotSopCertified",
          (0, _platformConfig.isTabOpenableWhenNotSopCertified)()
        );
        if (
          null == e.detail.procEvent.sops_passed ||
          !1 == e.detail.procEvent.sops_passed
        ) {
          this.toastSuccessMessage(this.tabNotOpenableByCertification);
          return;
        }
      }
      var esignRequired = !1;
      if (!e.detail.procEvent.esign_required) {
        esignRequired = !1;
      } else {
        esignRequired = e.detail.procEvent.esign_required;
      }
      var confirmUserRequired = !1;
      if (!e.detail.procEvent.confirm_required) {
        confirmUserRequired = !1;
      } else {
        confirmUserRequired = e.detail.procEvent.confirm_required;
      }
      e.stopPropagation();
      _store.store.dispatch(
        (0, _tabs_actions.addTab)({
          lp_frontend_page_name: e.detail.procEvent.lp_frontend_page_name,
          tabName:
            e.detail.procedure.name +
            "-" +
            e.detail.procEvent.lp_frontend_page_name,
          tabLabel_en:
            e.detail.procedure.label_en + "-" + e.detail.procEvent.label_en,
          tabLabel_es:
            e.detail.procedure.label_es + "-" + e.detail.procEvent.label_es,
          sop_list: e.detail.procEvent.sops.sop_list,
          sops: e.detail.procEvent.sops,
          sops_passed: e.detail.procEvent.sops_passed,
          procedure: e.detail.procedure,
          tabEsignRequired: esignRequired,
          tabConfirmUserRequired: confirmUserRequired,
        })
      );
      var curTab = [];
      curTab.tabName =
        e.detail.procedure.name +
        "-" +
        e.detail.procEvent.lp_frontend_page_name;
      (curTab.sops = e.detail.procEvent.sops),
        (curTab.currTabEsignRequired = esignRequired);
      curTab.currTabConfirmUserRequired = confirmUserRequired;
      _store.store.dispatch((0, _tabs_actions.setCurrentTab)(curTab));
    }
  }
  customElements.define("procedures-list-pane", ProceduresListPane);
});
