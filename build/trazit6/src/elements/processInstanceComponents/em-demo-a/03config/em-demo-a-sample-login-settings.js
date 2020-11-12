define(["exports"], function (_exports) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.tabsDefinition = void 0;
  const tabsDefinition = {
    configCalendar: { displayCalendar: !0, displayTable: !0 },
  };
  _exports.tabsDefinition = tabsDefinition;
  const documentContainerEmDemoASampleLoginStyle = document.createElement(
    "em-demo-a-sample-login-style"
  );
  documentContainerEmDemoASampleLoginStyle.setAttribute(
    "style",
    "display: none;"
  );
  documentContainerEmDemoASampleLoginStyle.innerHTML = `
  <dom-module id="em-demo-a-sample-login-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
        background-color: #ffffff5c;
      }
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:3vw;
      }         
      div.main{
        width:95%;
      }     
      div.buttonGroup {
        display: flex
      }      
    </style>
    </template>
  </dom-module>`;
  document.head.appendChild(documentContainerEmDemoASampleLoginStyle);
});
