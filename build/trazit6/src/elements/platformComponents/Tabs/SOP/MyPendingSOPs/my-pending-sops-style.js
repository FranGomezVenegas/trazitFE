const documentContainerMyPendingSops=document.createElement("my-pending-sops-style");documentContainerMyPendingSops.setAttribute("style","display: none;");documentContainerMyPendingSops.innerHTML=`
  <dom-module id="my-pending-sops-style">
    <template>
        <style>
            :root {
                --header-right-width: 120px;
            }
            div.wrapperMySops{
                display: flex;
            }        
            .cardPendingSops {
                margin: 24px;
                padding: 16px;
                color: ##2ec3ec; //#757575;
                border-radius: 5px;
                //background-image: url('./images/hexagon-white-blue-light.jpg');
                //background-image: url('./images/fondo-blanco-hexagono-tecnologia-azul.jpg');
                background-repeat: no-repeat;
                background-size: cover;                  
                background-color: #c2f2ff; // #1676f31a; //#fff; // #49cce633;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }
            p{color: #36859a;} 
        </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerMyPendingSops);