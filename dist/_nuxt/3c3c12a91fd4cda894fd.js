(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(t,n,e){var content=e(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("6759f5ab",content,!0,{sourceMap:!1})},189:function(t,n){},190:function(t,n){},191:function(t,n){},192:function(t,n,e){"use strict";var c=e(183);e.n(c).a},193:function(t,n,e){(t.exports=e(47)(!1)).push([t.i,".container{background-color:var(--gray)}.title{font-size:1.5rem}.canvasCol,.inputCol{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.input{width:800px}",""])},194:function(t,n,e){"use strict";e.r(n);var c=e(184),o={methods:{drawText:function(){var text=new c.fabric.Text(this.inputText,{left:50,top:50});this.canvas.add(text)},penToggle:function(){this.canvas.isDrawingMode=!this.canvas.isDrawingMode},download:function(){var link=document.createElement("a");link.href=canvas.toDataURL("image/png"),link.download=(new Date).getTime()+".png",link.click()}},data:function(){return{canvas:null,target:null,inputText:"",isDown:!1,x1:0,y1:0,x2:0,y2:0}},mounted:function(){this.canvas=new c.fabric.Canvas("canvas"),this.canvas.isDrawingMode=!1,this.canvas.freeDrawingBrush.color="#333333",this.canvas.freeDrawingBrush.width=3,this.canvas.backgroundColor="#fcfcfc",this.canvas.setHeight("600"),this.canvas.setWidth("800")}},r=(e(192),e(43)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",[e("b-row",[e("b-col"),t._v(" "),e("b-col",{staticClass:"text-center text-light title"},[t._v("Gakicho")]),t._v(" "),e("b-col",[e("b-button",{attrs:{variant:"info"},on:{click:t.penToggle}},[t._v("Pen")]),t._v(" "),e("b-button",{attrs:{variant:"primary"},on:{click:t.download}},[t._v("DL")])],1)],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"canvasCol p-2"},[e("canvas",{attrs:{id:"canvas"}})])],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"inputCol p-2"},[e("b-input",{staticClass:"input",on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.drawText(n)}},model:{value:t.inputText,callback:function(n){t.inputText=n},expression:"inputText"}})],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);