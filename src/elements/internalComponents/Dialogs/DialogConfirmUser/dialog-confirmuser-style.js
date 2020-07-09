const documentContainerDialogConfirmUser = document.createElement('dialog-confirmuser-style');
documentContainerDialogConfirmUser.setAttribute('style', 'display: none;');

documentContainerDialogConfirmUser.innerHTML = `
    <dom-module id="dialog-confirmuser-style">
        <template>
            <style>
                .closed {
                    display: none;
                }
                div.confirmUserDialogModalMain {
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
                div.confirmUserDialogModalDialog {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    padding: 25px;
                    transform: translate(-50%, -50%);
                    width: var(--modal-width, 500px);
                    max-width: var(--modal-max-width, 80%);
                    height: var(--modal-height, 300px);
                    max-height: 100%;
                    z-index: 1001;
                    background-color: #fff;
                    transition: opacity 0.3s ease-in;
                    -webkit-transition: opacity 0.3s ease-in;
                    box-shadow: 6px 6px 16px #000;
                    border-radius: var(--modal-border-radius, 10px);
                    background-image: url('./images/platform-login/login-hexagon-background.png');
                    width: 400px; 
                }                
            </style>
        </template>
    </dom-module>`;
document.head.appendChild(documentContainerDialogConfirmUser);