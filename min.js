/*! (c) Andrea Giammarchi - ISC */
!function(e,t){"use strict";if(t.get("li-li"))return;try{class l extends HTMLLIElement{}if(t.define("li-li",l,{extends:"li"}),!/is="li-li"/.test((new l).outerHTML))throw{}}catch(l){const n="attributeChangedCallback",s="connectedCallback",i="disconnectedCallback",{assign:r,create:a,defineProperties:o,setPrototypeOf:u}=Object,{define:c,get:d,upgrade:f,whenDefined:b}=t,g=a(null),h=e=>{for(let t=0,l=e.length;t<l;t++){const{attributeName:l,oldValue:s,target:i}=e[t],r=i.getAttribute(l);n in i&&(s!=r||null!=r)&&i[n](l,s,i.getAttribute(l),null)}},p=e=>{let t=e.getAttribute("is");return t&&(t=t.toLowerCase())in g?g[t]:null},v=(e,t)=>{const{Class:l}=t,n=l.observedAttributes||[];if(u(e,l.prototype),n.length){new MutationObserver(h).observe(e,{attributes:!0,attributeFilter:n,attributeOldValue:!0});const t=[];for(let l=0,s=n.length;l<s;l++)t.push({attributeName:n[l],oldValue:null,target:e});h(t)}},C=e=>{if(1!==e.nodeType)return;const t=p(e);t&&(e instanceof t.Class||v(e,t),s in e&&e[s]())};new MutationObserver(e=>{for(let t=0,l=e.length;t<l;t++){const{addedNodes:l,removedNodes:n}=e[t];for(let e=0,t=l.length;e<t;e++)C(l[e]);for(let e=0,t=n.length;e<t;e++){const t=n[e];if(1===t.nodeType){const e=p(t);e&&t instanceof e.Class&&i in t&&t[i]()}}}}).observe(e,{childList:!0,subtree:!0}),o(t,{define:{value(l,n,s){if(l=l.toLowerCase(),s&&"extends"in s){g[l]=r({},s,{Class:n});const t=s.extends+'[is="'+l+'"]',i=e.querySelectorAll(t);for(let e=0,t=i.length;e<t;e++)C(i[e])}else c.apply(t,arguments)}},get:{value:e=>e in g?g[e].Class:d.call(t,e)},upgrade:{value(e){const l=p(e);!l||e instanceof l.Class?f.call(t,e):v(e,l)}},whenDefined:{value:e=>e in g?Promise.resolve():b.call(t,e)}});const{createElement:m}=e;o(e,{createElement:{value(l,n){const s=m.call(e,l);return n&&"is"in n&&(s.setAttribute("is",n.is),t.upgrade(s)),s}}})}}(document,customElements);