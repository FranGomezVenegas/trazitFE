import {LitElement, html} from 'lit-element';
import {render} from 'lit-html';

// import custom theme for the grid
//import './grid-custom-theme.js';

//import {SampleIcons} from '../../../elements/processInstanceComponents/em-demo-a/03config/config-icons';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';

//SampleIcons
class vaadingridLitSingleSelect extends (LitElement) {

  static get properties() {
    return {
      rowcontainer: { type: Array },
//      {        //hasChanged: () => true // see https://github.com/Polymer/lit-element/issues/107#issuecomment-416376381           }, 
      headerfields: { type: Array },
      id:{ type: String},
      refreshFunction: { type: Object},
      selectedObject: {type: Object, notify: true},
      selectedItems: {type: Array, notify: true},
      allowMultiSelect:{type: Boolean},
      _focusedItemIndex:{type: Number}
    }
  }
  
  constructor() {
    super();
    //this._boundToggleDetailsRenderer = this.toggleDetailsRenderer.bind(this); // need this to invoke class methods in renderers
  }
  
  // firstUpdated() {
  //   super.firstUpdated();
    
  //   // fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
  //   //   .then(r => r.json())
  //   //   .then(data => {
  //   //     this.rowcontainer = data.result;
  //   //   });
  // }

  render() {
    return html`
      <style>
        .address {
          white-space: normal;
        }
        vaadin-grid{
          background-color: #49cce633; //#9eaeef30; //#ffffff5c;
          height:50vh;
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
      ${this.headerfields ? html` 

      <vaadin-grid id="gridLevel1" column-reordering-allowed .items="${this.rowcontainer}" .rowDetailsRenderer="${this.rowDetailsRenderer}" 
        @active-item-changed=${this.itemSelected}         
      >
      ${this.rowcontainer==undefined || this.rowcontainer.length==0 ? html`
      <vaadin-grid-column path="NO DATA" header="NO DATA"></vaadin-grid-column>
      `:html`  
        ${this.rowcontainer[0].is_error ? html`
        <vaadin-grid-column path="NO DATA" header="NO DATA"></vaadin-grid-column>
        `:html`            
          <vaadin-grid-selection-column custom-allow-multi-select=${this.allowMultiSelect} @selected-items-changed=${this.itemSelected}  frozen auto-select></vaadin-grid-selection-column>       
          ${this.headerfields.map(item => html` 
              ${item.is_icon ? html`    
               <!-- <vaadin-grid-column width="${item.width}" resizable path="${item.name}" header="${item.label_es}"></vaadin-grid-column> -->
                <vaadin-grid-column width="50px" flex-grow="0" .renderer="${this.indexRenderer}"> 
                  <template class="header">${item.status}</template>
                  <template>
                  <img item="{{item}}" rowindex="{{index}}" style="height:24px; width: 24px;" src="${this.getIconPath(this.indexRenderer)}">  <!-- {{getSampleStatusIcon(item.status)}} -->
                  </template>  
                </vaadin-grid-column>    
              `: html`
                ${item.sort ? html`          
                  <vaadin-grid-sort-column width="${item.width}" resizable path="${item.name}" header="${item.label_es}"></vaadin-grid-sort-column>`:html``}  
                ${item.filter ? html`
                  <vaadin-grid-filter-column width="${item.width}" resizable path="${item.name}" header="${item.label_es}"></vaadin-grid-filter-column> 
                  <!-- <vaadin-grid-column width="${item.width}" resizable path="${item.name}" header="${item.label_es}"></vaadin-grid-column> -->
                  `:html``}  
                ${!item.sort && !item.filter ? html`
                  <vaadin-grid-column width="${item.width}" resizable path="${item.name}" header="${item.label_es}"></vaadin-grid-column>`:html``}  
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
      `:html``}
      
    `;
  }


  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
      super.ready();
      const grid = document.querySelector('vaadin-grid');
      const columns = document.querySelectorAll('vaadin-grid-column');
      console.log('super')
  }

  getIconPath(ee){
    var rowIndex=this.grid._focusedItemIndex;
    if (this.grid.items==undefined || this.grid.items.length==0){return;}
    console.log('getIconPath', 'hdrFld', 'hdrFld', 'rowIndex', rowIndex, this.grid.items[rowIndex].current_stage);
  }
  refreshTable(){
    if (this.refreshFunction){this.refreshFunction();}
  }
  resetTableSelection(){
    //e.clearCache();
    var gridName="gridLevel1"; //this.id;
    const grid=this.shadowRoot.getElementById(gridName);
    grid.selectedItems=[];
    this.selectedItems=[];
  }
  itemSelected(e){
    //console.log('itemSelected', this.allowMultiSelect);
    if ( (this.allowMultiSelect==undefined) || (this.allowMultiSelect!=undefined && this.allowMultiSelect==false) ){
      //console.log('itemSelected NOT allowMultiSelect');
      this.selectedObject=e.detail.value; 
      if (this.selectedObject==null){return;}
      e.target.selectedObject=this.selectedObject;
      let myEvent = new CustomEvent('selected-object-changed', { 
        detail: this.selectedObject ,
        bubbles: true, 
        composed: true });
      this.dispatchEvent(myEvent);    
      e.target.selectedItems=[];
    }else{
      //console.log('itemSelected allowed MultiSelect');      
      this.selectedItems=e.target.selectedItems;
      if (this.selectedItems.length==1){
        this.selectedObject=e.detail.value; 
      }else{
        this.selectedObject=''; 
      }
    }
  }  
  get grid() {
    return this.shadowRoot.querySelector('vaadin-grid');
  }


  
  // _toggleDetails(value, item) {
  //   if (value) {
  //     this.grid.openItemDetails(item);
  //   } else {
  //     this.grid.closeItemDetails(item);
  //   }
  // }
  
  // toggleDetailsRenderer(root, column, rowData) {
  //   // only render the checkbox once, to avoid re-creating during subsequent calls
  //   if (!root.firstElementChild) {
  //     render(
  //       html`
  //         <vaadin-checkbox 
  //           @checked-changed="${e => this._toggleDetails(e.detail.value, root.item)}"
  //         >
  //           Show Details
  //         </vaadin-checkbox>
  //       `, 
  //       root
  //     );
  //   }
  //   // store the item to avoid grid virtual scrolling reusing DOM nodes to mess it up
  //   root.item = rowData.item;
  //   root.firstElementChild.checked = this.grid.detailsOpenedItems.indexOf(root.item) > -1;
  // }
  
  rowDetailsRenderer(root, column, rowData) {
    render(
      html`
        Hi! My name is ${rowData.item.firstName}!
      `, 
      root
    );    
  }
};

customElements.define('vaadingrid-lit-singleselect', vaadingridLitSingleSelect);