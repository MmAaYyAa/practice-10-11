import"./refs-46824d00.js";import{g as q,a as M,u as _,d as D}from"./api-796b699d.js";function h(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={},A={get exports(){return L},set exports(e){L=e}};(function(e,u){(function(c){e.exports=c()})(function(){return function c(l,a,m){function f(n,r){if(!a[n]){if(!l[n]){var p=typeof h=="function"&&h;if(!r&&p)return p(n,!0);if(b)return b(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var t=a[n]={exports:{}};l[n][0].call(t.exports,function(i){return f(l[n][1][i]||i)},t,t.exports,c,l,a,m)}return a[n].exports}for(var b=typeof h=="function"&&h,o=0;o<m.length;o++)f(m[o]);return f}({1:[function(c,l,a){Object.defineProperty(a,"__esModule",{value:!0}),a.create=a.visible=void 0;var m=function(o){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=document.createElement("div");return r.innerHTML=o.trim(),n===!0?r.children:r.firstChild},f=function(o,n){var r=o.children;return r.length===1&&r[0].tagName===n},b=function(o){return(o=o||document.querySelector(".basicLightbox"))!=null&&o.ownerDocument.body.contains(o)===!0};a.visible=b,a.create=function(o,n){var r=function(t,i){var s=m(`
		<div class="basicLightbox `.concat(i.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),g=s.querySelector(".basicLightbox__placeholder");t.forEach(function(N){return g.appendChild(N)});var C=f(g,"IMG"),S=f(g,"VIDEO"),T=f(g,"IFRAME");return C===!0&&s.classList.add("basicLightbox--img"),S===!0&&s.classList.add("basicLightbox--video"),T===!0&&s.classList.add("basicLightbox--iframe"),s}(o=function(t){var i=typeof t=="string",s=t instanceof HTMLElement==1;if(i===!1&&s===!1)throw new Error("Content must be a DOM element/node or string");return i===!0?Array.from(m(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(o),n=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(n)),p=function(t){return n.onClose(d)!==!1&&function(i,s){return i.classList.remove("basicLightbox--visible"),setTimeout(function(){return b(i)===!1||i.parentElement.removeChild(i),s()},410),!0}(r,function(){if(typeof t=="function")return t(d)})};n.closable===!0&&r.addEventListener("click",function(t){t.target===r&&p()});var d={element:function(){return r},visible:function(){return b(r)},show:function(t){return n.onShow(d)!==!1&&function(i,s){return document.body.appendChild(i),setTimeout(function(){requestAnimationFrame(function(){return i.classList.add("basicLightbox--visible"),s()})},10),!0}(r,function(){if(typeof t=="function")return t(d)})},close:p};return d}},{}]},{},[1])(1)})})(A);const x=document.querySelector(".contacts-form"),y=document.querySelector(".contacts-list");let v=null;x.addEventListener("submit",O);y.addEventListener("click",F);y.addEventListener("click",P);w();function w(){q().then(e=>{y.innerHTML=e.map(E).join("")})}function O(e){e.preventDefault();const{name:u,number:c}=e.currentTarget.elements,l={name:u.value,number:c.value};M(l).then(a=>{console.log(a),y.insertAdjacentHTML("afterbegin",E(a))}),x.reset()}function P(e){if(!e.target.classList.contains("update"))return;const u=e.target.id;v=L.create(`
    <form class="update-form form" id=${u}>
      <input type="text" name="name" />
      <input type="number" name="number" />

      <button type="submit">Update contact</button>
    </form>
  `),v.show(),v.visible()&&document.querySelector(".update-form").addEventListener("submit",j)}async function j(e){e.preventDefault();const{name:u,number:c}=e.currentTarget.elements,l={name:u.value,number:c.value};await _(e.currentTarget.id,l),v.close(),w()}function E({name:e,number:u,id:c}){return`
    <li>
      <p>Name: ${e}</p>
      <p>Number: ${u}</p>
      <button class="update" id="${c}">Update</button>
      <button class="delete" id="${c}">Delete</button>
    </li>
  `}async function F(e){if(!e.target.classList.contains("delete"))return;const u=e.target.id;await D(u),w()}
