const documentContainerIncidentManagement=document.createElement("incident-management-style");documentContainerIncidentManagement.setAttribute("style","display: none;");documentContainerIncidentManagement.innerHTML=`
  <dom-module id="incident-management-style">
    <template>
        <style>
            div.mainDiv{
              display: flex;
            }
            div.myIncidentsTable{
              width: 622px; 
              display: block;
            }
            div.buttonGroup{
              width: 222px; 
              display: inline-flex;
            }
        </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerIncidentManagement);