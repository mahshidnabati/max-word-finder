import{a as S,t as z}from"../chunks/disclose-version.BwfkGCPw.js";import"../chunks/legacy.BwJCRV89.js";import{h as k,s as P,G as ie,F as oe,a as fe,b as ve,K as ue,L as ee,H as de,r as U,c as X,f as H,M as ce,N as O,d as re,e as ae,p as _e,I as Z,O as he,P as ge,Q as pe,R as be,S as me,V as xe,W as ye,X as q,Y as we,Z as Ee,_ as Ae,$ as Ie,a0 as Re,a1 as Me,a2 as Te,j as ke,a3 as Ne,v as Ce,x as L,y as Se,m as x,a4 as R,B as V,z as N,A as T,a5 as W,w as ze}from"../chunks/runtime.CqXdhc0l.js";import{l as He,e as Ve,r as We,s as $}from"../chunks/render.CgvkFAgK.js";import{i as F}from"../chunks/if.DJo0VrPG.js";import{i as De}from"../chunks/lifecycle.B4PnXd76.js";function Le(e,r){return r}function Oe(e,r,a,i){for(var l=[],t=r.length,o=0;o<t;o++)ge(r[o].e,l,!0);var b=t>0&&l.length===0&&a!==null;if(b){var y=a.parentNode;pe(y),y.append(a),i.clear(),C(e,r[0].prev,r[t-1].next)}be(l,()=>{for(var h=0;h<t;h++){var m=r[h];b||(i.delete(m.k),C(e,m.prev,m.next)),me(m.e,!b)}})}function Be(e,r,a,i,l,t=null){var o=e,b={flags:r,items:new Map,first:null};{var y=e;o=k?P(ie(y)):y.appendChild(oe())}k&&fe();var h=null,m=!1;ve(()=>{var s=a(),c=ue(s)?s:s==null?[]:ee(s),n=c.length;if(m&&n===0)return;m=n===0;let f=!1;if(k){var E=o.data===de;E!==(n===0)&&(o=U(),P(o),X(!1),f=!0)}if(k){for(var M=null,A,v=0;v<n;v++){if(H.nodeType===8&&H.data===ce){o=H,f=!0,X(!1);break}var u=c[v],g=i(u,v);A=te(H,b,M,null,u,g,v,l,r),b.items.set(g,A),M=A}n>0&&P(U())}if(!k){var _=xe;Ye(c,b,o,l,r,(_.f&O)!==0,i)}t!==null&&(n===0?h?re(h):h=ae(()=>t(o)):h!==null&&_e(h,()=>{h=null})),f&&X(!0),a()}),k&&(o=H)}function Ye(e,r,a,i,l,t,o,b){var y=e.length,h=r.items,m=r.first,s=m,c,n=null,f=[],E=[],M,A,v,u;for(u=0;u<y;u+=1){if(M=e[u],A=o(M,u),v=h.get(A),v===void 0){var g=s?s.e.nodes_start:a;n=te(g,r,n,n===null?r.first:n.next,M,A,u,i,l),h.set(A,n),f=[],E=[],s=n.next;continue}if(Pe(v,M,u),v.e.f&O&&re(v.e),v!==s){if(c!==void 0&&c.has(v)){if(f.length<E.length){var _=E[0],d;n=_.prev;var I=f[0],p=f[f.length-1];for(d=0;d<f.length;d+=1)J(f[d],_,a);for(d=0;d<E.length;d+=1)c.delete(E[d]);C(r,I.prev,p.next),C(r,n,I),C(r,p,_),s=_,n=p,u-=1,f=[],E=[]}else c.delete(v),J(v,s,a),C(r,v.prev,v.next),C(r,v,n===null?r.first:n.next),C(r,n,v),n=v;continue}for(f=[],E=[];s!==null&&s.k!==A;)(t||!(s.e.f&O))&&(c??(c=new Set)).add(s),E.push(s),s=s.next;if(s===null)continue;v=s}f.push(v),n=v,s=v.next}if(s!==null||c!==void 0){for(var w=c===void 0?[]:ee(c);s!==null;)(t||!(s.e.f&O))&&w.push(s),s=s.next;var D=w.length;if(D>0){var B=y===0?a:null;Oe(r,w,B,h)}}Z.first=r.first&&r.first.e,Z.last=n&&n.e}function Pe(e,r,a,i){he(e.v,r),e.i=a}function te(e,r,a,i,l,t,o,b,y,h){var m=(y&Ee)!==0,s=(y&Ae)===0,c=m?s?ye(l):q(l):l,n=y&we?q(o):o,f={i:n,v:c,k:t,a:null,e:null,prev:a,next:i};try{return f.e=ae(()=>b(e,c,n),k),f.e.prev=a&&a.e,f.e.next=i&&i.e,a===null?r.first=f:(a.next=f,a.e.next=f.e),i!==null&&(i.prev=f,i.e.prev=f.e),f}finally{}}function J(e,r,a){for(var i=e.next?e.next.e.nodes_start:a,l=r?r.e.nodes_start:a,t=e.e.nodes_start;t!==i;){var o=Ie(t);l.before(t),t=o}}function C(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function Xe(e,r,a,i){var l=e.__attributes??(e.__attributes={});k&&(l[r]=e.getAttribute(r)),l[r]!==(l[r]=a)&&("__styles"in e&&(e.__styles={}),a==null?e.removeAttribute(r):typeof a!="string"&&$e(e).includes(r)?e[r]=a:e.setAttribute(r,a))}var j=new Map;function $e(e){var r=j.get(e.nodeName);if(r)return r;j.set(e.nodeName,r=[]);for(var a,i=e,l=Element.prototype;l!==i;){a=Me(i);for(var t in a)a[t].set&&r.push(t);i=Re(i)}return r}function Fe(e,r,a=r){var i=Te();He(e,"input",l=>{var t=l?e.defaultValue:e.value;if(t=G(e)?K(t):t,a(t),i&&t!==(t=r())){var o=e.selectionStart,b=e.selectionEnd;e.value=t??"",b!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(b,e.value.length))}}),(k&&e.defaultValue!==e.value||ke(r)==null&&e.value)&&a(G(e)?K(e.value):e.value),Ne(()=>{var l=r();G(e)&&l===K(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function G(e){var r=e.type;return r==="number"||r==="range"}function K(e){return e===""?null:+e}var Ge=z('<div class="progress-circle svelte-h8p1gi"><div class="progress-bar svelte-h8p1gi"><div class="progress-text svelte-h8p1gi"> </div></div></div>'),Ke=z("<li> </li>"),Qe=z("<p><strong>Most Repeated Word(s):</strong></p> <ul></ul>",1),Ue=z("<p>No words found!</p>"),Ze=z('<div class="mt-4 text-lg font-semibold text-green-600"><!></div>'),qe=z('<div class="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-center"><h1 class="text-2xl font-bold mb-4">📝 Word Repeat Analyzer</h1> <div class="mb-4"><textarea placeholder="Enter a sentence..." rows="4" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></div> <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"> </button> <!> <!></div>');function sr(e,r){Ce(r,!1);let a=W(""),i=W([]),l=W(!1),t=W(!1),o=W(0);function b(u){const g=u.toLowerCase().replace(/[^\w\s]/g,"").split(" "),_={};g.forEach(p=>{p&&(_[p]=(_[p]||0)+1)});let d=0;const I=[];for(const[p,w]of Object.entries(_))w>d?(d=w,I.length=0,I.push({word:p,count:w})):w===d&&I.push({word:p,count:w});return I}function y(){R(i,[]),R(l,!1),R(t,!0),R(o,0);const u=1e3,g=10,_=g/u*100,d=setInterval(()=>{R(o,x(o)+_),x(o)>=100&&(clearInterval(d),R(o,100),h(),R(t,!1))},g)}function h(){R(i,b(x(a))),R(l,!0)}De();var m=qe(),s=V(N(m),2),c=N(s);We(c),T(s);var n=V(s,2),f=N(n,!0);T(n);var E=V(n,2);{var M=u=>{var g=Ge(),_=N(g),d=N(_),I=N(d);L(()=>$(I,`${Math.round(x(o))??""}%`)),T(d),T(_),T(g),L(()=>Xe(_,"style",`background: conic-gradient(#3b82f6 ${x(o)??""}% , #e5e7eb ${x(o)??""}%);`)),S(u,g)};F(E,u=>{x(t)&&u(M)})}var A=V(E,2);{var v=u=>{var g=Ze(),_=N(g);{var d=p=>{var w=Qe(),D=V(ze(w),2);Be(D,5,()=>x(i),Le,(B,Q)=>{let se=()=>x(Q).word,ne=()=>x(Q).count;var Y=Ke(),le=N(Y);T(Y),L(()=>$(le,`${se()??""} - ${ne()??""} times`)),S(B,Y)}),T(D),S(p,w)},I=p=>{var w=Ue();S(p,w)};F(_,p=>{x(i).length>0?p(d):p(I,!1)})}T(g),S(u,g)};F(A,u=>{x(l)&&u(v)})}T(m),L(()=>{n.disabled=x(t),$(f,x(t)?"Analyzing...":"Analyze Sentence")}),Fe(c,()=>x(a),u=>R(a,u)),Ve("click",n,y),S(e,m),Se()}export{sr as component};
