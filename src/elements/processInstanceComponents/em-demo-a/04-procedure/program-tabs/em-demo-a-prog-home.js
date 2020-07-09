import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Charts/chart-controller';
import {windowDefinition} from '../../03config/Programs/em-demo-a-progtab-home-settings';
 import '../../03config/Programs/em-demo-a-progtab-home-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
class EmDemoAProgHome extends FieldsMethods((connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=null){
            this.selectedProgram=state.emDemoA.selectedProgram;
        }
    }        
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            selectedProgram:{type: Object},
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-progtab-home-style"></style>   
        home 
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}  {{selectedProgram.name}}</p>
            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selectedProgram}}"></chart-controller>
            </template>
        </div>
        `;
    }
}
customElements.define('em-demo-a-prog-home', EmDemoAProgHome);