define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.addSystemTab = addSystemTab;
  _exports.addTab = addTab;
  _exports.closeTab = closeTab;
  _exports.setCurrentTab = setCurrentTab;
  _exports.setCurrentTabSelObject = setCurrentTabSelObject;
  _exports.doLogoutTab = doLogoutTab;
  _exports.DO_LOGOUT_TAB = _exports.SET_CURRENT_TAB_SEL_OBJECT = _exports.SET_CURRENT_TAB = _exports.CLOSE_TAB = _exports.ADD_SYSTEM_TAB = _exports.ADD_TAB = void 0;
  const ADD_TAB = "ADD_TAB";
  _exports.ADD_TAB = ADD_TAB;
  const ADD_SYSTEM_TAB = "ADD_SYSTEM_TAB";
  _exports.ADD_SYSTEM_TAB = ADD_SYSTEM_TAB;
  const CLOSE_TAB = "CLOSE_TAB";
  _exports.CLOSE_TAB = CLOSE_TAB;
  const SET_CURRENT_TAB = "SET_CURRENT_TAB";
  _exports.SET_CURRENT_TAB = SET_CURRENT_TAB;
  const SET_CURRENT_TAB_SEL_OBJECT = "SET_CURRENT_TAB_SEL_OBJECT";
  _exports.SET_CURRENT_TAB_SEL_OBJECT = SET_CURRENT_TAB_SEL_OBJECT;
  const DO_LOGOUT_TAB = "DO_LOGOUT_TAB";
  _exports.DO_LOGOUT_TAB = DO_LOGOUT_TAB;
  function addSystemTab(tab) {
    //console.log('tab_actions.addTab', 'procedure', procedure);
    return {
      type: ADD_SYSTEM_TAB,
      tab: tab,
      tabName: tab.tabName,
      tabLabel_en: tab.tabLabel_en,
      tabLabel_es: tab.tabLabel_es,
      tabEsignRequired: tab.tabEsignRequired,
      tabConfirmUserRequired: tab.tabConfirmUserRequired,
      procedure: tab.procedure,
    };
  }
  function addTab(tab) {
    //  console.log('tab_actions.addTab', tab);
    return {
      type: ADD_TAB,
      tab,
      tabName: tab.tabName,
      tabLabel_en: tab.tabLabel_en,
      tabLabel_es: tab.tabLabel_es,
      tabEsignRequired: tab.tabEsignRequired,
      tabConfirmUserRequired: tab.tabConfirmUserRequired,
      procedure: tab.procedure,
    };
  }
  function closeTab(tabName) {
    return { type: CLOSE_TAB, tabName: tabName };
  }
  function setCurrentTab(tabName) {
    return { type: SET_CURRENT_TAB, tabName };
  }
  function setCurrentTabSelObject(selObject) {
    return { type: SET_CURRENT_TAB_SEL_OBJECT, selObject };
  }
  function doLogoutTab() {
    //console.log('DoLogout');
    return { type: DO_LOGOUT_TAB };
  }
});
