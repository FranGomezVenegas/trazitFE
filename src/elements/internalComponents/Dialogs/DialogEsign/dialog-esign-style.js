const documentContainerDialogEsign = document.createElement('dialog-esign-style');
documentContainerDialogEsign.setAttribute('style', 'display: none;');

documentContainerDialogEsign.innerHTML = `
    <dom-module id="dialog-esign-style">
        <template>
            <style>
                .closed {
                    display: none;
                }      
                div.esignDialogModalMain {
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100vh;
                    width: 100vw;
                    z-index: 100;     
                    background-color: rgba(30,30,30, 0.8);
                    display: flex;
                    transition: opacity 0.3s ease-in;
                    -webkit-transition: opacity 0.3s ease-in;
                }
                div.esignDialogModalDialog {
                    color: #464dbb;
                    font-weight: bold;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    padding: 1.627vw;
                    transform: translate(-50%, -50%);
                    // width: var(--modal-width, 26.04vw);
                    max-width: var(--modal-max-width, 80%);
                    // height: var(--modal-height, 9.765vw);
                    max-height: 100%;
                    z-index: 1001;
                    background-color: #fff;
                    transition: opacity 0.3s ease-in;
                    -webkit-transition: opacity 0.3s ease-in;
                    box-shadow: 6px 6px 16px #000;
                    border-radius: var(--modal-border-radius, 10px);
                    background-image: url('./images/platform-login/abstract.jpg');
                    background-size: cover;
                    // width: 26.04vw; 
                }                         
          
            </style>
        </template>
    </dom-module>`;
document.head.appendChild(documentContainerDialogEsign);