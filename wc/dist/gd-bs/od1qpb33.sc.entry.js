/*! Built with http://stenciljs.com */
const{h:t}=window.GdBs;import{a as e}from"./chunk-57fe3db2.js";class i{render(){if(this.el.hasAttribute("data-init"))return;let t=e(this.el,{className:this.className,colSize:this.colSize,hideLabel:this.hideLabel,label:this.label,multi:this.multi,el:this.el,type:this.type});GD.Components.CheckboxGroup(t),this.el.setAttribute("data-init","true")}static get is(){return"bs-checkbox-group"}static get properties(){return{className:{type:String,attr:"class-name"},colSize:{type:Number,attr:"col-size"},el:{elementRef:!0},hideLabel:{type:Boolean,attr:"hide-label"},label:{type:String,attr:"label"},multi:{type:Boolean,attr:"multi"},type:{type:Number,attr:"type"}}}}export{i as BsCheckboxGroup};