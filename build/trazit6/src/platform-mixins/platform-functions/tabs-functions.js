define([
  "exports",
  "../../store.js",
  "../store/user-session-mixin.js",
  "../apis/api-platform.js",
  "../store/token-mixin.js",
  "../../elements/platformComponents/Redux/actions/tabs_actions.js",
], function (
  _exports,
  _store,
  _userSessionMixin,
  _apiPlatform,
  _tokenMixin,
  _tabs_actions
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.TabsMethods = void 0;
  const TabsMethods = (superClass) =>
    class extends (0, _tokenMixin.tokenMixin)(
      (0, _apiPlatform.ApiPlatform)(
        (0, _userSessionMixin.userSessionMixin)(superClass)
      )
    ) {
      isThisTabOpen(tabName) {
        var state = _store.store.getState(),
          tabsList = state.tabs.tabs,
          isOpen = tabsList.find(function (curTab) {
            return tabName == curTab.tabName;
          });
        if (!isOpen) return !1;
        return !0;
      }
      saveDefaultTabsOnLogin() {
        var state = _store.store.getState(),
          tabsInfo = state.tabs.tabs,
          tabsString = "",
          i;
        for (i = 0; i < tabsInfo.length; i++) {
          tabsString =
            tabsString +
            "lp_frontend_page_name:" +
            tabsInfo[i].lp_frontend_page_name +
            "*";
          tabsString = tabsString + "tabName:" + tabsInfo[i].tabName + "*";
          tabsString =
            tabsString + "tabLabel_en:" + tabsInfo[i].tabLabel_en + "*";
          tabsString =
            tabsString + "tabLabel_es:" + tabsInfo[i].tabLabel_es + "*";
          if (tabsInfo[i].systemTab != void 0 && tabsInfo[i].systemTab) {
            tabsString = tabsString + "tabType:" + "systab" + "*";
          } else {
            if (tabsInfo[i].procedure) {
              tabsString =
                tabsString + "procedure:" + tabsInfo[i].procedure.name + "*";
            }
            tabsString = tabsString + "tabType:" + "tab" + "*";
          }
          tabsString =
            tabsString +
            "tabEsignRequired:" +
            tabsInfo[i].tabEsignRequired +
            "*";
          tabsString =
            tabsString +
            "tabConfirmUserRequired:" +
            tabsInfo[i].tabConfirmUserRequired;
          if (i + 1 < tabsInfo.length) {
            tabsString = tabsString + "|";
          }
        }
        var data = {},
          paramsUrl =
            "finalToken=" +
            this.getFinalToken() +
            "&actionName=SET_DEFAULT_TABS_ON_LOGIN";
        paramsUrl = paramsUrl + "&tabsString=" + tabsString;
        data.actionName = "SET_DEFAULT_TABS_ON_LOGIN";
        data.paramsUrl = paramsUrl;
        this.appBackEndCallAPI(data);
      }
      openTabsOnLogin() {
        var tabsInfo = this.getStoreTabs(); //    console.log('tabsInfo', tabsInfo);
        if (!tabsInfo) {
          return;
        }
        var i;
        for (i = 0; i < tabsInfo.length; i++) {
          if (!tabsInfo[0].tabName) {
            return;
          }
          var curTab = {
            lp_frontend_page_name: tabsInfo[i].lp_frontend_page_name,
            tabName: tabsInfo[i].tabName,
            tabLabel_en: tabsInfo[i].tabLabel_en,
            tabLabel_es: tabsInfo[i].tabLabel_es,
            procedure: tabsInfo[i].procedure,
            tabEsignRequired: tabsInfo[i].tabEsignRequired,
            tabConfirmUserRequired: tabsInfo[i].tabConfirmUserRequired,
          };
          if ("systab" == tabsInfo[i].tabType) {
            curTab.procedure = tabsInfo[i].procedure;
            _store.store.dispatch((0, _tabs_actions.addSystemTab)(curTab));
          } else {
            var procObj = { name: tabsInfo[i].procedure };
            curTab.procedure = procObj;
            _store.store.dispatch((0, _tabs_actions.addTab)(curTab));
          }
        }
        _store.store.dispatch((0, _tabs_actions.setCurrentTab)(curTab));
      }
    };
  _exports.TabsMethods = TabsMethods;
});
