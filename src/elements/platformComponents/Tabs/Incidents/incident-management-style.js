const documentContainerIncidentManagement = document.createElement('incident-management-style');
documentContainerIncidentManagement.setAttribute('style', 'display: none;');

documentContainerIncidentManagement.innerHTML = `
  <dom-module id="incident-management-style">
    <template>
        <style>
            div.mainDiv{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
            div.myIncidentsTable{
              width: 622px; 
              display: block;
            }
            div.buttonGroup{
              width: 222px; 
              display: inline-flex;
            }
            div.selectedIncident{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;              
            }
            div.incidentEventCard{
              background-color: #bbdef2;
              width:200px;
              height:100px;
              padding: 2px;
              font-size: 40 px;
              flex: 1 1 auto;
            }
        </style>
    </template>
  </dom-module>`;
  document.head.appendChild(documentContainerIncidentManagement);      