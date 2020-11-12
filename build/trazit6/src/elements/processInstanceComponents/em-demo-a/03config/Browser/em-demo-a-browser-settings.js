define(["exports","../config-process.js"],function(_exports,_configProcess){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.browserHome_defaultTab=_exports.em_browser_tabs=void 0;const em_browser_tabs=[{procedure:_configProcess.schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Data Mining",tabLabel_es:"Miner\xEDa Datos",name:"datamining",tabName:_configProcess.schema_name+"-datamining",tabIndex:1},{procedure:_configProcess.schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Sample",tabLabel_es:"Muestra",name:"sample",tabName:_configProcess.schema_name+"-br-sample",tabIndex:1},{procedure:_configProcess.schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Incubator",tabLabel_es:"Incubadora",name:"incubator",tabName:_configProcess.schema_name+"-br-incubator",tabIndex:1},{procedure:_configProcess.schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Batch",tabLabel_es:"Tanda",name:"batch",tabName:_configProcess.schema_name+"-br-batch",tabIndex:1},{procedure:_configProcess.schema_name,tabConfirmUserRequired:!1,tabEsignRequired:!1,tabLabel_en:"Production Lot",tabLabel_es:"Lote Producci\xF3n",name:"prodlot",tabName:_configProcess.schema_name+"-br-prodlot",tabIndex:1}];_exports.em_browser_tabs=em_browser_tabs;const browserHome_defaultTab="datamining";_exports.browserHome_defaultTab=browserHome_defaultTab;const documentContainerEmDemoABrowserStyle=document.createElement("em-demo-a-browser-style");documentContainerEmDemoABrowserStyle.setAttribute("style","display: none;");documentContainerEmDemoABrowserStyle.innerHTML=`
  <dom-module id="em-demo-a-browser-style">
    <template>
    <style>
      div {            
        width: 80%;
        height: 80%;
      }
      .wrapper{
          display: flex;
      }
      paper-tab.tabItem {
          color: var(--paper-light-blue-50);
          background-color: var(--paper-light-blue-500);
      }                                              
    </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerEmDemoABrowserStyle)});