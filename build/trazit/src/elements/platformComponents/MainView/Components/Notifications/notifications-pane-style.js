const documentContainerNotificationsPaneStyle=document.createElement("notifications-pane-style");documentContainerNotificationsPaneStyle.setAttribute("style","display: none;");documentContainerNotificationsPaneStyle.innerHTML=`
  <dom-module id="notifications-pane-style">
    <template>
      <style>
        p.textRed {
            color:red;
        }
        p.textNormal{
            color:red;
        }
        p.textBlue {
            color:blue;
        }                
        p.textGrey {
            color:grey;
        } 
        iron-icon{
            color:cornflowerblue;
            height:2vw;
        }               
        div.title{
            display:flex;
        }
      </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerNotificationsPaneStyle);