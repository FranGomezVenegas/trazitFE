define(["require","../../../../node_modules/lit-element/lit-element.js","../../../../node_modules/lit-html/directives/repeat.js","../../../../node_modules/lit-html/lit-html.js","../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid.js","../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-selection-column.js","../../processInstanceComponents/em-demo-a/03config/config-icons.js"],function(_require,_litElement,_repeat,_litHtml,_vaadinGrid,_vaadinGridSelectionColumn,_configIcons){"use strict";_require=babelHelpers.interopRequireWildcard(_require);// import('@vaadin/vaadin-grid');
// import('@vaadin/vaadin-grid/vaadin-grid-column');
new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-sort-column.js"],res,rej));new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-filter.js"],res,rej));new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-filter-column.js"],res,rej));new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-column-group.js"],res,rej));new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-tree-toggle.js"],res,rej));new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-sorter.js"],res,rej));new Promise((res,rej)=>_require.default(["../../../../node_modules/@vaadin/vaadin-grid/vaadin-grid-selection-column.js"],res,rej));// import custom theme for the grid
//import './grid-custom-theme.js';
class vaadingridLitSingleSelect extends(0,_configIcons.SampleIcons)(_litElement.LitElement){static get properties(){return{rowcontainer:{type:Array},//      {        //hasChanged: () => true // see https://github.com/Polymer/lit-element/issues/107#issuecomment-416376381           }, 
headerfields:{type:Array},id:{type:String},refreshFunction:{type:Object},selectedObject:{type:Object,notify:!0},selectedItems:{type:Array,notify:!0},allowMultiSelect:{type:Boolean}}}constructor(){super();this._boundToggleDetailsRenderer=this.toggleDetailsRenderer.bind(this);// need this to invoke class methods in renderers
}firstUpdated(){super.firstUpdated();// fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
//   .then(r => r.json())
//   .then(data => {
//     this.rowcontainer = data.result;
//   });
}render(){return _litElement.html`
      <style>
        .address {
          white-space: normal;
        }
        vaadin-grid{
          background-color: #c2f2ff; //#49cce633; //#9eaeef30; //#ffffff5c;
        }
        vaadin-grid-filter {
          display: flex;
        }

        vaadin-text-field {
          max-width: 100%;
        }
        header{
          color: #3168aff0;
        }
      </style>
      ${this.headerfields?_litElement.html` 
      <vaadin-grid id="gridLevel1" .items="${this.rowcontainer}" .rowDetailsRenderer="${this.rowDetailsRenderer}" 
        @active-item-changed=${this.itemSelected}         
      >
      ${this.rowcontainer==void 0||0==this.rowcontainer.length?_litElement.html`
      <vaadin-grid-column path="NO DATA" header="NO DATA"></vaadin-grid-column>
      `:_litElement.html`  
        ${this.rowcontainer[0].is_error?_litElement.html`
        <vaadin-grid-column path="NO DATA" header="NO DATA"></vaadin-grid-column>
        `:_litElement.html`            
          <vaadin-grid-selection-column disable auto-select></vaadin-grid-selection-column>       
          ${this.headerfields.map(item=>_litElement.html` 
<!--              $repeat(this.headerfields, (currhdrfld)  -->
              ${item.is_icon?_litElement.html`    
                <vaadin-grid-column width="50px" flex-grow="0"> 
                  <template class="header">${item.status}</template>
                  <template>
                  <img style="height:24px; width: 24px;" src="${this.getIconPath()}">  <!-- {{getSampleStatusIcon(item.status)}} -->
                  </template>  
                </vaadin-grid-column>    
              `:_litElement.html`
                ${item.sort?_litElement.html`          
                  <vaadin-grid-sort-column path="${item.name}" header="${item.label_es}"></vaadin-grid-sort-column>`:_litElement.html``}  
                ${item.filter?_litElement.html`
                  <vaadin-grid-filter-column path="${item.name}" header="${item.label_es}"></vaadin-grid-filter-column> 
                  <!-- <vaadin-grid-column path="${item.name}" header="${item.label_es}"></vaadin-grid-column> -->
                  `:_litElement.html``}  
                ${!item.sort&&!item.filter?_litElement.html`
                  <vaadin-grid-column path="${item.name}" header="${item.label_es}"></vaadin-grid-column>`:_litElement.html``}  
              `}
                      <!--        <vaadin-grid-column width="50px" flex-grow="0" header="#" .renderer="${this.indexRenderer}"></vaadin-grid-column>
                      <vaadin-grid-filter-column path="firstName" header="First name"></vaadin-grid-filter-column>
                      <vaadin-grid-sort-column path="date_last_update" header="Last name"></vaadin-grid-sort-column>
                      <vaadin-grid-column width="150px" header="Address" .renderer="${this.addressRenderer}"></vaadin-grid-column>
                      <vaadin-grid-column width="150px" path="email" .headerRenderer="${this.emailHeaderRenderer}"></vaadin-grid-column>
                      <vaadin-grid-column .renderer="${this._boundToggleDetailsRenderer}"></vaadin-grid-column>-->
            `)}  
          `}  
      `}
      </vaadin-grid>
      `:_litElement.html``}
    `}selectItem(itm){//alert('Anem a pams ... '+itm);
console.log("vaadingrid-lit > selectItem","itm",itm);var elem=this.shadowRoot.getElementById("gridLevel1");if(elem){var found=this.rowcontainer.find(e=>e.sample_id===+itm);if(found!=void 0){alert(found);elem.selectItem(found);//this.selectedObject=found;
//this.selectedObject=found;
var mye={target:{selectedObject:found},detail:{value:found}};//this.itemSelected(mye);
}}}getIconPath(){var rowIndex=this.grid._focusedItemIndex;console.log("getIconPath","hdrFld","hdrFld","rowIndex",rowIndex)}refreshTable(){if(this.refreshFunction){this.refreshFunction()}}itemSelected(e){return;if(this.allowMultiSelect==void 0||this.allowMultiSelect!=void 0&&!1==this.allowMultiSelect){//console.log('itemSelected NOT allowMultiSelect');
this.selectedObject=e.detail.value;if(null==this.selectedObject){return}e.target.selectedObject=this.selectedObject;let myEvent=new CustomEvent("selected-object-changed",{detail:this.selectedObject,bubbles:!0,composed:!0});this.dispatchEvent(myEvent);e.target.selectedItems=[]}else{//console.log('itemSelected allowed MultiSelect');      
this.selectedItems=e.target.selectedItems;if(1==this.selectedItems.length){this.selectedObject=e.detail.value}else{this.selectedObject=""}}}get grid(){return this.shadowRoot.querySelector("vaadin-grid")}_toggleDetails(value,item){if(value){this.grid.openItemDetails(item)}else{this.grid.closeItemDetails(item)}}toggleDetailsRenderer(root,column,rowData){// only render the checkbox once, to avoid re-creating during subsequent calls
if(!root.firstElementChild){(0,_litHtml.render)(_litElement.html`
          <vaadin-checkbox 
            @checked-changed="${e=>this._toggleDetails(e.detail.value,root.item)}"
          >
            Show Details
          </vaadin-checkbox>
        `,root)}// store the item to avoid grid virtual scrolling reusing DOM nodes to mess it up
root.item=rowData.item;root.firstElementChild.checked=-1<this.grid.detailsOpenedItems.indexOf(root.item)}rowDetailsRenderer(root,column,rowData){(0,_litHtml.render)(_litElement.html`
        Hi! My name is ${rowData.item.firstName}!
      `,root)}};customElements.define("vaadingrid-lit-singleselect",vaadingridLitSingleSelect)});