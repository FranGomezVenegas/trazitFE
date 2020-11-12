define([
  "exports",
  "require",
  "../actions/tabs_actions.js",
  "../../../../config/platform/logic/api-config.js",
], function (_exports, _require, _tabs_actions, _apiConfig) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.default = void 0;
  _require = babelHelpers.interopRequireWildcard(_require);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      keys.push.apply(keys, Object.getOwnPropertySymbols(object));
    }
    if (enumerableOnly)
      keys = keys.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1, source; i < arguments.length; i++) {
      source = null != arguments[i] ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, !0).forEach(function (key) {
          babelHelpers.defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
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
        case _tabs_actions.ADD_SYSTEM_TAB:
          var tabUrl = _apiConfig.systemTabContentUrl;
          tabUrl = tabUrl + action.tab.lp_frontend_page_name;
          new Promise((res, rej) => _require.default([tabUrl], res, rej));
          var found = state.tabs.find(function (tab) {
            return tab.tabName == action.tab.tabName;
          });
          if (found == void 0) {
            return _objectSpread({}, state, {
              tabIndex: state.tabIndex + 1,
              tabs: [...state.tabs, action.tab],
              currentTab: action.tab,
              currentTabName: action.tab.tabName,
              currentTabSops: action.tab.currentTabSops,
              currentTabProcedure: action.tab.currentTabProcedure,
            });
          } else {
            return _objectSpread({}, state, {
              currentTab: action.tab,
              currentTabName: action.tab.tabName,
              currentTabSops: action.tab.currentTabSops,
              currentTabProcedure: action.tab.currentTabProcedure,
            });
          }
        case _tabs_actions.ADD_TAB:
          var tabUrl = _apiConfig.tabContentUrl;
          tabUrl = tabUrl.replace("#ModuleName", action.tab.procedure.name);
          tabUrl = tabUrl.replace("#PageName", action.tab.tabName);
          new Promise((res, rej) => _require.default([tabUrl], res, rej));
          var found = state.tabs.find(function (tab) {
            return tab.tabName == action.tab.tabName;
          });
          if (found == void 0) {
            return _objectSpread({}, state, {
              tabIndex: state.tabIndex + 1,
              tabs: [...state.tabs, action.tab],
              tabIndex: tabPosic,
              currentTab: action.tab,
              currentTabName: action.tab.tabName,
              currentTabSops: action.tab.currentTabSops,
              currentTabProcedure: action.tab.currentTabProcedure,
            });
          } else {
            return _objectSpread({}, state, {
              currentTab: found,
              currentTabName: found.tabName,
              currentTabSops: found.currentTabSops,
              currentTabProcedure: found.currentTabProcedure,
            });
          }
        case _tabs_actions.CLOSE_TAB:
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
              return _objectSpread({}, state);
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
              return _objectSpread({}, state, {
                tabIndex: tabPosic,
                currentTab: state.tabs[previousTabPosic],
                currentTabName: state.tabs[previousTabPosic].tabName,
                currentTabSops: state.tabs[previousTabPosic].currentTabSops,
                currentTabProcedure:
                  state.tabs[previousTabPosic].currentTabProcedure,
                tabs: state.tabs.filter((tab) => {
                  return tab.tabName != foundTabInfo.tabName;
                }),
              });
            }
          }
        case _tabs_actions.SET_CURRENT_TAB:
          foundTabInfo = state.tabs.find(function (tab) {
            if (tab.tabName == action.tabName) {
              return tab;
            }
          });
          if (foundTabInfo == void 0) {
            return _objectSpread({}, state);
          } else {
            var tabPosic = state.tabs.indexOf(foundTabInfo);
            return _objectSpread({}, state, {
              tabIndex: tabPosic,
              currentTab: foundTabInfo,
              currentTabName: foundTabInfo.tabName,
              currentTabSops: foundTabInfo.currentTabSops,
              currentTabProcedure: foundTabInfo.currentTabProcedure,
            });
          }
        case _tabs_actions.SET_CURRENT_TAB_SEL_OBJECT:
          return _objectSpread({}, state, {
            currentTabSelObject: action.selObject,
          });
        case _tabs_actions.DO_LOGOUT_TAB:
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
  var _default = tabsReducer;
  _exports.default = _default;
});
