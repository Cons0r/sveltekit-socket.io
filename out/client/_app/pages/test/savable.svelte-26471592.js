var he=Object.defineProperty,ge=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var G=(n,s,t)=>s in n?he(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,X=(n,s)=>{for(var t in s||(s={}))Se.call(s,t)&&G(n,t,s[t]);if(F)for(var t of F(s))ke.call(s,t)&&G(n,t,s[t]);return n},Y=(n,s)=>ge(n,we(s));import{S as _e,i as be,s as me,e as S,c as k,a as T,d as _,b as R,g as v,N as Z,O as z,M as x,v as ce,P as U,D as Ee,t as d,h,j as D,Q as ee,k as V,w as te,m as W,x as ne,y as se,L as w,R as le,T as ue,q as ie,o as ae,U as Ne,B as oe,V as je,W as Be}from"../../chunks/vendor-641c7987.js";function Oe(n){let s,t,i,u;return{c(){s=S("span"),t=S("input"),this.h()},l(l){s=k(l,"SPAN",{id:!0,class:!0}),T(s).forEach(_),t=k(l,"INPUT",{id:!0,type:!0,class:!0}),this.h()},h(){R(s,"id","hide"),R(s,"class","svelte-vsjx5m"),R(t,"id","txt"),R(t,"type","text"),R(t,"class","svelte-vsjx5m")},m(l,f){v(l,s,f),n[3](s),v(l,t,f),Z(t,n[0]),n[5](t),i||(u=z(t,"input",n[4]),i=!0)},p(l,[f]){f&1&&t.value!==l[0]&&Z(t,l[0])},i:x,o:x,d(l){l&&_(s),n[3](null),l&&_(t),n[5](null),i=!1,u()}}}function Ce(n,s,t){let{value:i}=s,u,l;ce(()=>{p(),u.addEventListener("input",p);function p(){t(2,l.textContent=u.value,l),t(1,u.style.width=l.offsetWidth+"px",u)}});function f(p){U[p?"unshift":"push"](()=>{l=p,t(2,l)})}function a(){i=this.value,t(0,i)}function b(p){U[p?"unshift":"push"](()=>{u=p,t(1,u)})}return n.$$set=p=>{"value"in p&&t(0,i=p.value)},[i,u,l,f,a,b]}class re extends _e{constructor(s){super();be(this,s,Ce,Oe,me,{value:0})}}function Ie(n,s,t){const i=Ee(s,t);return Y(X({},i),{mount(u){if(this.mounted)throw new Error("Already mounted");this.mounted=!0;const l=u.getItem(n);l&&i.set(JSON.parse(l)),this.unsub=i.subscribe(f=>{localStorage.setItem(n,JSON.stringify(f))}),console.log(this)},dismount(u){if(!this.mounted)throw new Error("Not mounted");const l=JSON.parse(u.getItem(n));return this.unsub(),u.removeItem(n),l},unsub(){throw new Error("Cannot unsubscribe when not subscribed")}})}function fe(n,s,t){const i=n.slice();return i[1]=s[t][0],i[2]=s[t][1],i}function pe(n){let s=n[1]+"",t,i,u=n[2]+"",l,f;return{c(){t=d(s),i=d(": "),l=d(u),f=S("br")},l(a){t=h(a,s),i=h(a,": "),l=h(a,u),f=k(a,"BR",{})},m(a,b){v(a,t,b),v(a,i,b),v(a,l,b),v(a,f,b)},p(a,b){b&1&&s!==(s=a[1]+"")&&D(t,s),b&1&&u!==(u=a[2]+"")&&D(l,u)},d(a){a&&_(t),a&&_(i),a&&_(l),a&&_(f)}}}function $e(n){let s,t,i,u,l,f,a,b,p,N,r,j,C,J,q,I,M,A,$,P,E,L,H,B=Object.entries(n[0]),m=[];for(let e=0;e<B.length;e+=1)m[e]=pe(fe(n,B,e));function ve(e){n[6](e)}let K={};n[1]!==void 0&&(K.value=n[1]),t=new re({props:K}),U.push(()=>ee(t,"value",ve));function de(e){n[7](e)}let Q={};return n[2]!==void 0&&(Q.value=n[2]),l=new re({props:Q}),U.push(()=>ee(l,"value",de)),{c(){for(let e=0;e<m.length;e+=1)m[e].c();s=V(),te(t.$$.fragment),u=d(":"),te(l.$$.fragment),a=V(),b=S("br"),p=S("hr"),N=V(),r=S("button"),j=d("Click to add "),C=S("b"),J=d(n[1]),q=d(":"),I=S("b"),M=d(n[2]),A=d(", Double click to delete "),$=S("b"),P=d(n[1])},l(e){for(let O=0;O<m.length;O+=1)m[O].l(e);s=W(e),ne(t.$$.fragment,e),u=h(e,":"),ne(l.$$.fragment,e),a=W(e),b=k(e,"BR",{}),p=k(e,"HR",{}),N=W(e),r=k(e,"BUTTON",{});var o=T(r);j=h(o,"Click to add "),C=k(o,"B",{});var g=T(C);J=h(g,n[1]),g.forEach(_),q=h(o,":"),I=k(o,"B",{});var y=T(I);M=h(y,n[2]),y.forEach(_),A=h(o,", Double click to delete "),$=k(o,"B",{});var c=T($);P=h(c,n[1]),c.forEach(_),o.forEach(_)},m(e,o){for(let g=0;g<m.length;g+=1)m[g].m(e,o);v(e,s,o),se(t,e,o),v(e,u,o),se(l,e,o),v(e,a,o),v(e,b,o),v(e,p,o),v(e,N,o),v(e,r,o),w(r,j),w(r,C),w(C,J),w(r,q),w(r,I),w(I,M),w(r,A),w(r,$),w($,P),E=!0,L||(H=[z(r,"click",le(n[5])),z(r,"dblclick",le(n[4]))],L=!0)},p(e,[o]){if(o&1){B=Object.entries(e[0]);let c;for(c=0;c<B.length;c+=1){const O=fe(e,B,c);m[c]?m[c].p(O,o):(m[c]=pe(O),m[c].c(),m[c].m(s.parentNode,s))}for(;c<m.length;c+=1)m[c].d(1);m.length=B.length}const g={};!i&&o&2&&(i=!0,g.value=e[1],ue(()=>i=!1)),t.$set(g);const y={};!f&&o&4&&(f=!0,y.value=e[2],ue(()=>f=!1)),l.$set(y),(!E||o&2)&&D(J,e[1]),(!E||o&4)&&D(M,e[2]),(!E||o&2)&&D(P,e[1])},i(e){E||(ie(t.$$.fragment,e),ie(l.$$.fragment,e),E=!0)},o(e){ae(t.$$.fragment,e),ae(l.$$.fragment,e),E=!1},d(e){Ne(m,e),e&&_(s),oe(t,e),e&&_(u),oe(l,e),e&&_(a),e&&_(b),e&&_(p),e&&_(N),e&&_(r),L=!1,je(H)}}}function ye(n,s,t){let i;const u=Ie("Mystore",{});Be(n,u,r=>t(0,i=r)),ce(()=>{u.mount(localStorage)});let l="Key",f="Value";function a(){u.update(r=>{let j=r;return delete j[l],j})}function b(){u.update(r=>(r[l]=f,r))}function p(r){l=r,t(1,l)}function N(r){f=r,t(2,f)}return[i,l,f,u,a,b,p,N]}class De extends _e{constructor(s){super();be(this,s,ye,$e,me,{})}}export{De as default};
