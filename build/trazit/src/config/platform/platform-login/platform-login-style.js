const documentContainerAppLoginStyle=document.createElement("platform-login-style");documentContainerAppLoginStyle.setAttribute("style","display: none;");documentContainerAppLoginStyle.innerHTML=`
  <dom-module id="platform-login-style">
    <template>
      <style>
        div.login {
          //padding: 15px;
          //left: 40px;
          @apply --shadow-elevation-2dp;
          //width: 320px;
          //text-align: center;
          position:fixed;
          width:100vw;
          height:100vh;
          //display:flex;
          align-items: center;
          justify-content: center;
          z-index: 9999999999;
          color: #5c9bd2;
        }           
          div.appLoginForm{
            overflow: hidden; 
            text-align:center; 
            align-items: center;
            width: 100vw;
            background-image: url('./images/hexagon-white-blue-light.jpg');
            background-size: cover;
          }
          div.appLoginMainDiv {
            margin-top: 25px;
            font-size: 21px;
            text-align: center;
            animation: fadein 2s;
            -moz-animation: fadein 2s; /* Firefox */
            -webkit-animation: fadein 2s; /* Safari and Chrome */
            -o-animation: fadein 2s; /* Opera */
          }  
        
        img.appLoginLogoOnTop{
          height:80px;
          width:100px;
        }

        @keyframes fadein {
          from {
              opacity:0;
          }
          to {
              opacity:1;
          }
      }
      @-moz-keyframes fadein { /* Firefox */
          from {
              opacity:0;
          }
          to {
              opacity:1;
          }
      }
      @-webkit-keyframes fadein { /* Safari and Chrome */
          from {
              opacity:0;
          }
          to {
              opacity:1;
          }
      }
      @-o-keyframes fadein { /* Opera */
          from {
              opacity:0;
          }
          to {
              opacity: 1;
          }
      }         

      </style>
    </template>
  </dom-module>`;document.head.appendChild(documentContainerAppLoginStyle);