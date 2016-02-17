(function(a){"function"===typeof define&&define.amd?define(["jquery","./jqdnr","./jqmodal"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var n=a.jgrid,B=n.getMethod("getGridRes"),z=function(a,b){return n.mergeCssClasses(n.getRes(n.guiStyles[this.p.guiStyle||n.defaults.guiStyle||"jQueryUI"],a),b||"")};n.jqModal=n.jqModal||{};a.extend(!0,n.jqModal,{toTop:!0});a.extend(n,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true");a.o&&
a.o.remove()},hideModal:function(e,b){b=a.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},b||{});var c=b.gb&&"string"===typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?a("#"+b.gb.substr(6))[0]:!1,f=a(e);if(b.onClose){var l=c?b.onClose.call(c,e):b.onClose(e);if("boolean"===typeof l&&!l)return}if(b.formprop&&c&&b.form&&0<f.length){l=f[0].style.height;-1<l.indexOf("px")&&(l=parseFloat(l));var g,d;"edit"===b.form?(g="#"+n.jqID("FrmGrid_"+b.gb.substr(6)),d="formProp"):"view"===b.form&&(g="#"+n.jqID("ViewGrid_"+
b.gb.substr(6)),d="viewProp");a(c).data(d,{top:parseFloat(f.css("top")),left:parseFloat(f.css("left")),width:f.width(),height:l,dataheight:a(g).height(),datawidth:a(g).width()})}if(a.fn.jqm&&!0===b.jqm)f.attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{a(">.jqgrid-overlay",b.gb).first().hide()}catch(h){}f.hide().attr("aria-hidden","true")}b.removemodal&&f.remove()},findPos:function(a){var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;while(a)}return[b,c]},
createModal:function(e,b,c,f,l,g,d){var h=n.jqID,k=this.p;c=a.extend(!0,{resizingRightBottomIcon:"ui-icon ui-icon-gripsmall-diagonal-se"},n.jqModal||{},null!=k?k.jqModal||{}:{},c);var m=document.createElement("div"),r="#"+h(e.themodal),q="rtl"===a(c.gbox).attr("dir")?!0:!1,x=e.resizeAlso?"#"+h(e.resizeAlso):!1;d=a.extend({},d||{});m.className=z.call(this,"dialog.window","ui-jqdialog");m.id=e.themodal;m.dir=q?"rtl":"ltr";var p=document.createElement("div");p.className=z.call(this,"dialog.header","ui-jqdialog-titlebar "+
(q?"ui-jqdialog-titlebar-rtl":"ui-jqdialog-titlebar-ltr"));p.id=e.modalhead;a(p).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var y=z.call(this,"states.hover"),u=a("<a class='ui-jqdialog-titlebar-close ui-corner-all'></a>").hover(function(){u.addClass(y)},function(){u.removeClass(y)}).append("<span class='"+n.getIconRes(k.iconSet,"form.close")+"'></span>");a(p).append(u);k=document.createElement("div");a(k).addClass(z.call(this,"dialog.content","ui-jqdialog-content")).attr("id",
e.modalcontent);a(k).append(b);m.appendChild(k);a(m).prepend(p);!0===g?a("body").append(m):"string"===typeof g?a(g).append(m):a(m).insertBefore(f);a(m).css(d);void 0===c.jqModal&&(c.jqModal=!0);b={};if(a.fn.jqm&&!0===c.jqModal)0===c.left&&0===c.top&&c.overlay&&(g=[],g=n.findPos(l),c.left=g[0]+4,c.top=g[1]+4),b.top=c.top+"px",b.left=c.left;else if(0!==c.left||0!==c.top)b.left=c.left,b.top=c.top+"px";a("a.ui-jqdialog-titlebar-close",p).click(function(){var b=a(r).data("onClose")||c.onClose,e=a(r).data("gbox")||
c.gbox;n.hideModal(r,{gb:e,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""});return!1});0!==c.width&&c.width||(c.width=300);0!==c.height&&c.height||(c.height=200);c.zIndex||((f=a(f).parents("*[role=dialog]").first().css("z-index"))?(c.zIndex=parseInt(f,10)+2,c.toTop=!0):c.zIndex=950);b.left&&(b.left+="px");a(m).css(a.extend({width:isNaN(c.width)?"auto":c.width+"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex,overflow:"hidden"},b)).attr({tabIndex:"-1",
role:"dialog","aria-labelledby":e.modalhead,"aria-hidden":"true"});void 0===c.drag&&(c.drag=!0);void 0===c.resize&&(c.resize=!0);if(c.drag)if(a.fn.jqDrag)a(p).css("cursor","move"),a(m).jqDrag(p);else try{a(m).draggable({handle:a("#"+h(p.id))})}catch(t){}if(c.resize)if(a.fn.jqResize)a(m).append("<div class='jqResize ui-resizable-handle ui-resizable-se "+c.resizingRightBottomIcon+"'></div>"),a(r).jqResize(".jqResize",x);else try{a(m).resizable({handles:"se, sw",alsoResize:x})}catch(t){}!0===c.closeOnEscape&&
a(m).keydown(function(b){27===b.which&&(b=a(r).data("onClose")||c.onClose,n.hideModal(r,{gb:c.gbox,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""}))})},viewModal:function(e,b){b=a.extend(!0,{overlay:30,modal:!1,overlayClass:"ui-widget-overlay",onShow:n.showModal,onHide:n.closeModal,gbox:"",jqm:!0,jqM:!0},n.jqModal||{},b||{});if(a.fn.jqm&&!0===b.jqm)b.jqM?a(e).attr("aria-hidden","false").jqm(b).jqmShow():a(e).attr("aria-hidden","false").jqmShow();
else{""!==b.gbox&&(a(">.jqgrid-overlay",b.gbox).first().show(),a(e).data("gbox",b.gbox));a(e).show().attr("aria-hidden","false");try{a(":input:visible",e)[0].focus()}catch(c){}}},info_dialog:function(e,b,c,f){var l=this,g=l.p,d=a.extend(!0,{width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1E3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]},n.jqModal||{},null!=g?g.jqModal||{}:{},{caption:"<b>"+e+"</b>"},f||{}),h=d.jqModal;a.fn.jqm&&
!h&&(h=!1);e="";var k=z.call(l,"states.hover");if(0<d.buttons.length)for(f=0;f<d.buttons.length;f++)void 0===d.buttons[f].id&&(d.buttons[f].id="info_button_"+f),e+=n.builderFmButon.call(l,d.buttons[f].id,d.buttons[f].text);f=isNaN(d.dataheight)?d.dataheight:d.dataheight+"px";b="<div id='info_id'>"+("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+f+";"+("text-align:"+d.align+";")+"'>"+b+"</div>");if(c||""!==e)b+="<hr class='"+z.call(l,"dialog.hr")+
"' style='margin:1px'/><div style='text-align:"+d.buttonalign+";padding:.8em 0 .5em 0;background-image:none;border-width: 1px 0 0 0;'>"+(c?n.builderFmButon.call(l,"closedialog",c):"")+e+"</div>";b+="</div>";try{"false"===a("#info_dialog").attr("aria-hidden")&&n.hideModal("#info_dialog",{jqm:h}),a("#info_dialog").remove()}catch(m){}n.createModal.call(l,{themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",resizeAlso:"infocnt"},b,d,"","",!0);e&&a.each(d.buttons,function(b){a("#"+
n.jqID(l.id),"#info_id").bind("click",function(){d.buttons[b].onClick.call(a("#info_dialog"));return!1})});a("#closedialog","#info_id").click(function(){n.hideModal("#info_dialog",{jqm:h,onClose:a("#info_dialog").data("onClose")||d.onClose,gb:a("#info_dialog").data("gbox")||d.gbox});return!1});a(".fm-button","#info_dialog").hover(function(){a(this).addClass(k)},function(){a(this).removeClass(k)});a.isFunction(d.beforeOpen)&&d.beforeOpen();n.viewModal("#info_dialog",{onHide:function(a){a.w.hide().remove();
a.o&&a.o.remove()},modal:d.modal,jqm:h});a.isFunction(d.afterOpen)&&d.afterOpen();try{a("#info_dialog").focus()}catch(m){}},bindEv:function(e,b){a.isFunction(b.dataInit)&&b.dataInit.call(this,e,b);b.dataEvents&&a.each(b.dataEvents,function(){void 0!==this.data?a(e).bind(this.type,this.data,this.fn):a(e).bind(this.type,this.fn)})},createEl:function(e,b,c,f,l){function g(b,c,e){var d="dataInit dataEvents dataUrl buildSelect sopt searchhidden defaultValue attr custom_element custom_value selectFilled rowId mode".split(" ");
void 0!==e&&a.isArray(e)&&a.merge(d,e);a.each(c,function(c,e){-1===a.inArray(c,d)&&a(b).attr(c,e)});c.hasOwnProperty("id")||a(b).attr("id",n.randId())}var d="",h=this,k=h.p,m=n.info_dialog,r=B.call(a(h),"errors.errcap"),q=B.call(a(h),"edit"),x=q.msg,q=q.bClose;switch(e){case "textarea":d=document.createElement("textarea");f?b.cols||a(d).css({width:"100%","box-sizing":"border-box"}):b.cols||(b.cols=20);b.rows||(b.rows=2);if("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))c="";d.value=
c;g(d,b);a(d).attr({role:"textbox"});break;case "checkbox":d=document.createElement("input");d.type="checkbox";if(b.value){var p=b.value.split(":");c===p[0]&&(d.checked=!0,d.defaultChecked=!0);d.value=p[0];a(d).data("offval",p[1])}else p=String(c).toLowerCase(),0>p.search(/(false|f|0|no|n|off|undefined)/i)&&""!==p?(d.checked=!0,d.defaultChecked=!0,d.value=c):d.value="on",a(d).data("offval","off");g(d,b,["value"]);a(d).attr({role:"checkbox","aria-checked":d.checked?"true":"false"});break;case "select":d=
document.createElement("select");e=[];f=k.iColByName[b.name];m=k.colModel[f];!0===b.multiple?(r=!0,d.multiple="multiple",a(d).attr("aria-multiselectable","true"),e=c.split(","),e=a.map(e,function(b){return a.trim(b)})):(r=!1,e[0]=a.trim(c));void 0===b.size&&(b.size=r?3:1);if(void 0!==b.dataUrl){var p=null,y=b.postData||l.postData,u={elem:d,options:b,cm:m,iCol:f,ovm:e};try{p=b.rowId}catch(A){}k&&k.idPrefix&&(p=n.stripPref(k.idPrefix,p));a.ajax(a.extend({url:a.isFunction(b.dataUrl)?b.dataUrl.call(h,
p,c,String(b.name),u):b.dataUrl,type:"GET",dataType:"html",data:a.isFunction(y)?y.call(h,p,c,String(b.name)):y,context:u,success:function(b,c,e){var d=this.ovm,f=this.elem,k=this.cm,l=this.iCol,m=a.extend({},this.options);b=a.isFunction(m.buildSelect)?m.buildSelect.call(h,b,e,k,l):b;"string"===typeof b&&(b=a(a.trim(b)).html());b&&(a(f).append(b),g(f,m,y?["postData"]:void 0),setTimeout(function(){var b;a("option",f).each(function(c){0===c&&f.multiple&&(this.selected=!1);-1<a.inArray(a.trim(a(this).val()),
d)&&(this.selected="selected",b=!0)});b||a("option",f).each(function(){-1<a.inArray(a.trim(a(this).text()),d)&&(this.selected="selected")});n.fullBoolFeedback.call(h,m.selectFilled,"jqGridSelectFilled",{elem:f,options:m,cm:k,cmName:k.name,iCol:l})},0))}},l||{}))}else if(b.value){"function"===typeof b.value&&(b.value=b.value());var t,v;l=[];var w,k=void 0===b.separator?":":b.separator;v=void 0===b.delimiter?";":b.delimiter;x=function(b,a){if(0<a)return b};if("string"===typeof b.value)for(v=b.value.split(v),
t=0;t<v.length;t++)q=v[t].split(k),2<q.length&&(q[1]=a.map(q,x).join(k)),l.push({value:q[0],innerHtml:q[1],selectValue:a.trim(q[0]),selectText:a.trim(q[1])});else if("object"===typeof b.value)for(t in k=b.value,k)k.hasOwnProperty(t)&&l.push({value:t,innerHtml:k[t],selectValue:a.trim(t),selectText:a.trim(k[t])});for(t=0;t<l.length;t++)w=l[t],u=document.createElement("option"),u.value=w.value,u.innerHTML=w.innerHtml,d.appendChild(u),r||w.selectValue!==a.trim(c)||(u.selected="selected",p=!0),r&&-1<a.inArray(w.selectValue,
e)&&(u.selected="selected",p=!0);if(!p)for(t=0;t<w.length;t++)r||w.selectText!==a.trim(c)||(u.selected="selected"),r&&-1<a.inArray(w.selectText,e)&&(u.selected="selected");g(d,b,["value"]);n.fullBoolFeedback.call(h,b.selectFilled,"jqGridSelectFilled",{elem:d,options:b,cm:m,cmName:m.name,iCol:f})}break;case "text":case "password":case "button":p="button"===e?"button":"textbox";d=document.createElement("input");d.type=e;g(d,b);d.value=c;"button"!==e&&(f?b.size||a(d).css({width:"100%","box-sizing":"border-box"}):
b.size||(b.size=20));a(d).attr("role",p);break;case "image":case "file":d=document.createElement("input");d.type=e;g(d,b);break;case "custom":d=document.createElement("span");try{if(a.isFunction(b.custom_element))if(v=b.custom_element.call(h,c,b),v instanceof jQuery||n.isHTMLElement(v)||"string"===typeof v)v=a(v).addClass("customelement").attr({id:b.id,name:b.name}),a(d).empty().append(v);else throw"editoptions.custom_element returns value of a wrong type";else throw"editoptions.custom_element is not a function";
}catch(A){"e1"===A&&m.call(h,r,"function 'custom_element' "+x.nodefined,q),"e2"===A?m.call(h,r,"function 'custom_element' "+x.novalue,q):m.call(h,r,"string"===typeof A?A:A.message,q)}}return d},checkDate:function(a,b){var c={},f;a=a.toLowerCase();f=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/";a=a.split(f);b=b.split(f);if(3!==b.length)return!1;var l=-1,g,d=f=-1,h;for(h=0;h<a.length;h++)g=isNaN(b[h])?0:parseInt(b[h],10),c[a[h]]=g,g=a[h],-1!==g.indexOf("y")&&(l=h),-1!==
g.indexOf("m")&&(d=h),-1!==g.indexOf("d")&&(f=h);g="y"===a[l]||"yyyy"===a[l]?4:"yy"===a[l]?2:-1;var k;h=[0,31,29,31,30,31,30,31,31,30,31,30,31];if(-1===l)return!1;k=c[a[l]].toString();2===g&&1===k.length&&(g=1);if(k.length!==g||0===c[a[l]]&&"00"!==b[l]||-1===d)return!1;k=c[a[d]].toString();if(1>k.length||1>c[a[d]]||12<c[a[d]]||-1===f)return!1;k=c[a[f]].toString();!(g=1>k.length||1>c[a[f]]||31<c[a[f]])&&(g=2===c[a[d]])&&(l=c[a[l]],g=c[a[f]]>(0!==l%4||0===l%100&&0!==l%400?28:29));return g||c[a[f]]>
h[c[a[d]]]?!1:!0},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(a){var b=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!n.isEmpty(a))if(a=a.match(b)){if(a[3]){if(1>a[1]||12<a[1])return!1}else if(23<a[1])return!1;if(59<a[2])return!1}else return!1;return!0},checkValues:function(e,b,c,f,l){var g,d,h=this.p;d=h.colModel;var k=n.isEmpty,m=B.call(a(this),"edit.msg"),r=B.call(a(this),"formatter.date.masks");if(void 0===c){"string"===typeof b&&(b=h.iColByName[b]);if(void 0===b||0>
b)return[!0,"",""];f=d[b];c=f.editrules;null!=f.formoptions&&(g=f.formoptions.label)}else g=void 0===f?"_":f,f=d[b];if(c){g||(g=null!=h.colNames?h.colNames[b]:f.label);if(!0===c.required&&k(e))return[!1,g+": "+m.required,""];h=!1===c.required?!1:!0;if(!0===c.number&&(!1!==h||!k(e))&&isNaN(e))return[!1,g+": "+m.number,""];if(void 0!==c.minValue&&!isNaN(c.minValue)&&parseFloat(e)<parseFloat(c.minValue))return[!1,g+": "+m.minValue+" "+c.minValue,""];if(void 0!==c.maxValue&&!isNaN(c.maxValue)&&parseFloat(e)>
parseFloat(c.maxValue))return[!1,g+": "+m.maxValue+" "+c.maxValue,""];var q;if(!(!0!==c.email||!1===h&&k(e)||(q=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
q.test(e))))return[!1,g+": "+m.email,""];if(!(!0!==c.integer||!1===h&&k(e)||!isNaN(e)&&0===e%1&&-1===e.indexOf(".")))return[!1,g+": "+m.integer,""];if(!(!0!==c.date||!1===h&&k(e)||(f.formatoptions&&f.formatoptions.newformat?(d=f.formatoptions.newformat,r.hasOwnProperty(d)&&(d=r[d])):d=d[b].datefmt||"Y-m-d",n.checkDate(d,e))))return[!1,g+": "+m.date+" - "+d,""];if(!0===c.time&&!(!1===h&&k(e)||n.checkTime(e)))return[!1,g+": "+m.date+" - hh:mm (am/pm)",""];if(!(!0!==c.url||!1===h&&k(e)||(q=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,
q.test(e))))return[!1,g+": "+m.url,""];if(!0===c.custom){if(!1!==h||!k(e))return a.isFunction(c.custom_func)?(e=c.custom_func.call(this,e,g,b),a.isArray(e)?e:[!1,m.customarray,""]):[!1,m.customfcheck,""]}else if(a.isFunction(c.custom)&&(!1!==h||!k(e)))return e=c.custom.call(this,l),a.isArray(e)?e:[!1,m.customarray,""]}return[!0,"",""]}})});
//# sourceMappingURL=grid.common.map