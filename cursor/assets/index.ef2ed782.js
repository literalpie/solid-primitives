(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();const p={};function ee(e){p.context=e}const te=(e,s)=>e===s,I={equals:te};let q=J;const w=1,_=2,G={owned:null,cleanups:null,context:null,owner:null};var a=null;let m=null,c=null,h=null,b=null,R=0;function se(e,s){const t=c,n=a,o=e.length===0,l=o?G:{owned:null,cleanups:null,context:null,owner:s||n},r=o?e:()=>e(()=>O(()=>j(l)));a=l,c=null;try{return v(r,!0)}finally{c=t,a=n}}function S(e,s){s=s?Object.assign({},I,s):I;const t={value:e,observers:null,observerSlots:null,comparator:s.equals||void 0},n=o=>(typeof o=="function"&&(o=o(t.value)),W(t,o));return[ne.bind(t),n]}function T(e,s,t){const n=X(e,s,!1,w);P(n)}function K(e,s,t){q=ie;const n=X(e,s,!1,w);n.user=!0,b?b.push(n):P(n)}function O(e){const s=c;c=null;try{return e()}finally{c=s}}function Q(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function ne(){const e=m;if(this.sources&&(this.state||e))if(this.state===w||e)P(this);else{const s=h;h=null,v(()=>B(this),!1),h=s}if(c){const s=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(s)):(c.sources=[this],c.sourceSlots=[s]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function W(e,s,t){let n=e.value;return(!e.comparator||!e.comparator(n,s))&&(e.value=s,e.observers&&e.observers.length&&v(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],r=m&&m.running;r&&m.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?h.push(l):b.push(l),l.observers&&Y(l)),r||(l.state=w)}if(h.length>1e6)throw h=[],new Error},!1)),s}function P(e){if(!e.fn)return;j(e);const s=a,t=c,n=R;c=a=e,oe(e,e.value,n),c=t,a=s}function oe(e,s,t){let n;try{n=e.fn(s)}catch(o){e.pure&&(e.state=w),Z(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?W(e,n):e.value=n,e.updatedAt=t)}function X(e,s,t,n=w,o){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:a,context:null,pure:t};return a===null||a!==G&&(a.owned?a.owned.push(l):a.owned=[l]),l}function N(e){const s=m;if(e.state===0||s)return;if(e.state===_||s)return B(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)(e.state||s)&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w||s)P(e);else if(e.state===_||s){const o=h;h=null,v(()=>B(e,t[0]),!1),h=o}}function v(e,s){if(h)return e();let t=!1;s||(h=[]),b?t=!0:b=[],R++;try{const n=e();return le(t),n}catch(n){h||(b=null),Z(n)}}function le(e){if(h&&(J(h),h=null),e)return;const s=b;b=null,s.length&&v(()=>q(s),!1)}function J(e){for(let s=0;s<e.length;s++)N(e[s])}function ie(e){let s,t=0;for(s=0;s<e.length;s++){const n=e[s];n.user?e[t++]=n:N(n)}for(p.context&&ee(),s=0;s<t;s++)N(e[s])}function B(e,s){const t=m;e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];o.sources&&(o.state===w||t?o!==s&&N(o):(o.state===_||t)&&B(o,s))}}function Y(e){const s=m;for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];(!n.state||s)&&(n.state=_,n.pure?h.push(n):b.push(n),n.observers&&Y(n))}}function j(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const l=o.pop(),r=t.observerSlots.pop();n<o.length&&(l.sourceSlots[r]=n,o[n]=l,t.observerSlots[n]=r)}}if(e.owned){for(s=0;s<e.owned.length;s++)j(e.owned[s]);e.owned=null}if(e.cleanups){for(s=0;s<e.cleanups.length;s++)e.cleanups[s]();e.cleanups=null}e.state=0,e.context=null}function re(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Z(e){throw e=re(e),e}function U(e,s){return O(()=>e(s||{}))}function fe(e,s,t){let n=t.length,o=s.length,l=n,r=0,i=0,f=s[o-1].nextSibling,u=null;for(;r<o||i<l;){if(s[r]===t[i]){r++,i++;continue}for(;s[o-1]===t[l-1];)o--,l--;if(o===r){const d=l<n?i?t[i-1].nextSibling:t[l-i]:f;for(;i<l;)e.insertBefore(t[i++],d)}else if(l===i)for(;r<o;)(!u||!u.has(s[r]))&&s[r].remove(),r++;else if(s[r]===t[l-1]&&t[i]===s[o-1]){const d=s[--o].nextSibling;e.insertBefore(t[i++],s[r++].nextSibling),e.insertBefore(t[--l],d),s[o]=t[l]}else{if(!u){u=new Map;let g=i;for(;g<l;)u.set(t[g],g++)}const d=u.get(s[r]);if(d!=null)if(i<d&&d<l){let g=r,x=1,A;for(;++g<o&&g<l&&!((A=u.get(s[g]))==null||A!==d+x);)x++;if(x>d-i){const C=s[r];for(;i<d;)e.insertBefore(t[i++],C)}else e.replaceChild(t[i++],s[r++])}else r++;else s[r++].remove()}}}const V="_$DX_DELEGATE";function ue(e,s,t,n={}){let o;return se(l=>{o=l,s===document?e():y(s,e(),s.firstChild?null:void 0,t)},n.owner),()=>{o(),s.textContent=""}}function D(e,s,t){const n=document.createElement("template");n.innerHTML=e;let o=n.content.firstChild;return t&&(o=o.firstChild),o}function ce(e,s=window.document){const t=s[V]||(s[V]=new Set);for(let n=0,o=e.length;n<o;n++){const l=e[n];t.has(l)||(t.add(l),s.addEventListener(l,he))}}function ae(e,s,t){return O(()=>e(s,t))}function y(e,s,t,n){if(t!==void 0&&!n&&(n=[]),typeof s!="function")return L(e,s,n,t);T(o=>L(e,s(),o,t),n)}function he(e){const s=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t;){const n=t[s];if(n&&!t.disabled){const o=t[`${s}Data`];if(o!==void 0?n.call(t,o,e):n.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function L(e,s,t,n,o){for(p.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(s===t)return t;const l=typeof s,r=n!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(p.context)return t;if(l==="number"&&(s=s.toString()),r){let i=t[0];i&&i.nodeType===3?i.data=s:i=document.createTextNode(s),t=E(e,t,n,i)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s}else if(s==null||l==="boolean"){if(p.context)return t;t=E(e,t,n)}else{if(l==="function")return T(()=>{let i=s();for(;typeof i=="function";)i=i();t=L(e,i,t,n)}),()=>t;if(Array.isArray(s)){const i=[],f=t&&Array.isArray(t);if(M(i,s,t,o))return T(()=>t=L(e,i,t,n,!0)),()=>t;if(p.context){if(!i.length)return t;for(let u=0;u<i.length;u++)if(i[u].parentNode)return t=i}if(i.length===0){if(t=E(e,t,n),r)return t}else f?t.length===0?k(e,i,n):fe(e,t,i):(t&&E(e),k(e,i));t=i}else if(s instanceof Node){if(p.context&&s.parentNode)return t=r?[s]:s;if(Array.isArray(t)){if(r)return t=E(e,t,n,s);E(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}function M(e,s,t,n){let o=!1;for(let l=0,r=s.length;l<r;l++){let i=s[l],f=t&&t[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=M(e,i,f)||o;else if(typeof i=="function")if(n){for(;typeof i=="function";)i=i();o=M(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const u=String(i);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return o}function k(e,s,t=null){for(let n=0,o=s.length;n<o;n++)e.insertBefore(s[n],t)}function E(e,s,t,n){if(t===void 0)return e.textContent="";const o=n||document.createTextNode("");if(s.length){let l=!1;for(let r=s.length-1;r>=0;r--){const i=s[r];if(o!==i){const f=i.parentNode===e;!l&&!r?f?e.replaceChild(o,i):e.insertBefore(o,t):f&&i.remove()}else l=!0}}else e.insertBefore(o,t);return[o]}var H=e=>typeof e=="function"&&!e.length?e():e;function de(e,s){K(()=>{const t=H(e),n=H(s);if(!t)return;const o=t.style.cursor;t.style.setProperty("cursor",n,"important"),Q(()=>t.style.cursor=o)})}function pe(e){K(()=>{const s=e();if(!s)return;const t=document.body.style.cursor;document.body.style.setProperty("cursor",s,"important"),Q(()=>document.body.style.cursor=t)})}const ge=D('<div class="wrapper-v"><h4>Toggle Body cursor</h4><div class="flex"><button class="btn"></button><button class="btn"></button></div></div>'),ye=D('<div class="wrapper-v"><h4>Toggle Element cursor</h4><div class="flex"><button class="btn"></button><button class="btn"></button></div><div class="flex sapce-x-2"></div></div>'),be=D('<div class="node"></div>'),we=D('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"></div>'),z=["alias","all-scroll","cell","col-resize","context-menu","copy","crosshair","default","e-resize","ew-resize","grab","grabbing","help","move","n-resize","ne-resize","nesw-resize","no-drop","none","not-allowed","ns-resize","nw-resize","nwse-resize","pointer","progress","row-resize","s-resize","se-resize","sw-resize","text","vertical-text","w-resize","wait","zoom-in","zoom-out"],me=()=>{const[e,s]=S("pointer"),[t,n]=S(!0);return pe(()=>t()&&e()),(()=>{const o=ge.cloneNode(!0),l=o.firstChild,r=l.nextSibling,i=r.firstChild,f=i.nextSibling;return i.$$click=()=>s(()=>z[Math.random()*z.length|0]),y(i,e),f.$$click=()=>n(u=>!u),y(f,()=>t()?"Disable":"Enable"),o})()},xe=()=>{const[e,s]=S("pointer"),[t,n]=S(!0),[o,l]=S(null);return de(()=>t()&&o(),e),(()=>{const r=ye.cloneNode(!0),i=r.firstChild,f=i.nextSibling,u=f.firstChild,d=u.nextSibling,g=f.nextSibling;return u.$$click=()=>s(()=>z[Math.random()*z.length|0]),y(u,e),d.$$click=()=>n(x=>!x),y(d,()=>t()?"Disable":"Enable"),y(g,()=>Array.from({length:4}).map((x,A)=>{let C;return(()=>{const $=be.cloneNode(!0);$.$$click=()=>l(C);const F=C;return typeof F=="function"?ae(F,$):C=$,y($,A+1),T(()=>$.classList.toggle("bg-red-700",C===o())),$})()})),r})()},Ce=()=>(()=>{const e=we.cloneNode(!0);return y(e,U(me,{}),null),y(e,U(xe,{}),null),e})();ce(["click"]);ue(()=>U(Ce,{}),document.getElementById("root"));
