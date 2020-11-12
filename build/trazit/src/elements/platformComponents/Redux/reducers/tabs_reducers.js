// For ADD_SYSTEM_TAB, two things required, example below:
// In app_config:
// export const pendingSOPTab={
//   lp_frontend_page_name: 'sop/my-pending-sops.js',
//   tabName: 'sop-myPendingSops',
//   tabLabel_en: 'My Pending SOPs',
//   tabLabel_es: 'Mis PNT Pendientes',
//   procedure:'sop',
//   tabEsignRequired: false, tabConfirmUserRequired: false
// }
// in app-center-tabs
// <my-pending-sops tab-index="{{tabIndex}}" name="sop-myPendingSops"> </my-pending-sops>
import {
  ADD_TAB,
  ADD_SYSTEM_TAB,
  CLOSE_TAB,
  SET_CURRENT_TAB,
  SET_CURRENT_TAB_SEL_OBJECT,
  DO_LOGOUT_TAB,
  addSystemTab,
} from "../actions/tabs_actions.js";
import {
  systemTabContentUrl,
  tabContentUrl,
} from "../../../../config/platform/logic/api-config.js";
const InitialTabState = {
    tabs: [],
    tabIndex: 0,
    currentTabName: "",
    currentTab: [],
    currentTabSelObject: [],
    currentTabProcedure: [],
    currentTabSops: [],
  },
  eventExists = (tabs, tab) => {
    return tabs.find((e) => e.tabName === tab.tabName);
  },
  tabsReducer = (state = InitialTabState, action) => {
    let foundTabInfo = [];
    switch (action.type) {
      case ADD_SYSTEM_TAB:
        var tabUrl = systemTabContentUrl;
        tabUrl = tabUrl + action.tab.lp_frontend_page_name;
        import(tabUrl);
        var found = state.tabs.find(function (tab) {
          return tab.tabName == action.tab.tabName;
        });
        if (found == void 0) {
          return {
            ...state,
            tabIndex: state.tabIndex + 1,
            tabs: [...state.tabs, action.tab],
            currentTab: action.tab,
            currentTabName: action.tab.tabName,
            currentTabSops: action.tab.currentTabSops,
            currentTabProcedure: action.tab.currentTabProcedure,
          };
        } else {
          return {
            ...state,
            currentTab: action.tab,
            currentTabName: action.tab.tabName,
            currentTabSops: action.tab.currentTabSops,
            currentTabProcedure: action.tab.currentTabProcedure,
          };
        }
      case ADD_TAB:
        var tabUrl = tabContentUrl;
        tabUrl = tabUrl.replace("#ModuleName", action.tab.procedure.name);
        tabUrl = tabUrl.replace("#PageName", action.tab.tabName);
        import(tabUrl);
        var found = state.tabs.find(function (tab) {
          return tab.tabName == action.tab.tabName;
        });
        if (found == void 0) {
          return {
            ...state,
            tabIndex: state.tabIndex + 1,
            tabs: [...state.tabs, action.tab],
            tabIndex: tabPosic,
            currentTab: action.tab,
            currentTabName: action.tab.tabName,
            currentTabSops: action.tab.currentTabSops,
            currentTabProcedure: action.tab.currentTabProcedure,
          };
        } else {
          return {
            ...state,
            currentTab: found,
            currentTabName: found.tabName,
            currentTabSops: found.currentTabSops,
            currentTabProcedure: found.currentTabProcedure,
          };
        }
      case CLOSE_TAB:
        let tabI;
        if (1 >= state.tabs.length) {
          foundTabInfo = "";
          action.tabName = "";
          return {
            tabIndex: 0,
            currentTab: "",
            currentTabName: "",
            currentTabSops: "",
            currentTabProcedure: "",
            tabs: [],
          };
        } else {
          foundTabInfo = state.tabs.find(function (tab) {
            if (tab.tabName == action.tabName) {
              return tab;
            }
          });
          if (foundTabInfo == void 0) {
            return { ...state };
          } else {
            var tabPosic = state.tabs.indexOf(foundTabInfo);
            if (0 == tabPosic && 1 == state.tabs.length) {
              return {
                tabIndex: 0,
                currentTab: "",
                currentTabName: "",
                currentTabSops: "",
                currentTabProcedure: "",
                tabs: [],
              };
            }
            var previousTabPosic = 0;
            if (0 < tabPosic) {
              previousTabPosic = tabPosic - 1;
            }
            return {
              ...state,
              tabIndex: tabPosic,
              currentTab: state.tabs[previousTabPosic],
              currentTabName: state.tabs[previousTabPosic].tabName,
              currentTabSops: state.tabs[previousTabPosic].currentTabSops,
              currentTabProcedure:
                state.tabs[previousTabPosic].currentTabProcedure,
              tabs: state.tabs.filter((tab) => {
                return tab.tabName != foundTabInfo.tabName;
              }),
            };
          }
        }
      case SET_CURRENT_TAB:
        foundTabInfo = state.tabs.find(function (tab) {
          if (tab.tabName == action.tabName) {
            return tab;
          }
        });
        if (foundTabInfo == void 0) {
          return { ...state };
        } else {
          var tabPosic = state.tabs.indexOf(foundTabInfo);
          return {
            ...state,
            tabIndex: tabPosic,
            currentTab: foundTabInfo,
            currentTabName: foundTabInfo.tabName,
            currentTabSops: foundTabInfo.currentTabSops,
            currentTabProcedure: foundTabInfo.currentTabProcedure,
          };
        }
      case SET_CURRENT_TAB_SEL_OBJECT:
        return { ...state, currentTabSelObject: action.selObject };
      case DO_LOGOUT_TAB:
        return {
          tabs: [],
          tabIndex: 0,
          currentTab: [],
          currentTabName: "",
          currentTabProcedure: [],
          currentTabSops: [],
        };
      default:
        return state;
    }
  };
export default tabsReducer;
