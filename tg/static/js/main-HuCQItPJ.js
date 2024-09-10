import{E as V,r as A,G as H,H as U,I as X,J as Y,K as R,L as J,M as Z,N as T,O as tt,P as et,Q as nt,R as st,S as ot}from"./index-CBhOtJdy.js";var ct=!1;let K;const E=t=>K=t,B=Symbol();function M(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function rt(){const t=V(!0),c=t.run(()=>A({}));let n=[],e=[];const r=H({install(a){E(r),r._a=a,a.provide(B,r),a.config.globalProperties.$pinia=r,e.forEach(u=>n.push(u)),e=[]},use(a){return!this._a&&!ct?e.push(a):n.push(a),this},_p:n,_a:null,_e:t,_s:new Map,state:c});return r}const ut=()=>{};function W(t,c,n,e=ut){t.push(c);const r=()=>{const a=t.indexOf(c);a>-1&&(t.splice(a,1),e())};return!n&&tt()&&et(r),r}function d(t,...c){t.slice().forEach(n=>{n(...c)})}const at=t=>t(),F=Symbol(),O=Symbol();function D(t,c){t instanceof Map&&c instanceof Map?c.forEach((n,e)=>t.set(e,n)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const n in c){if(!c.hasOwnProperty(n))continue;const e=c[n],r=t[n];M(r)&&M(e)&&t.hasOwnProperty(n)&&!R(e)&&!J(e)?t[n]=D(r,e):t[n]=e}return t}const{assign:h}=Object;function it(t){return!!(R(t)&&t.effect)}function ft(t,c,n,e){const{state:r,actions:a,getters:u}=c,j=n.state.value[t];let b;function S(){j||(n.state.value[t]=r?r():{});const v=st(n.state.value[t]);return h(v,a,Object.keys(u||{}).reduce((y,m)=>(y[m]=H(ot(()=>{E(n);const _=n._s.get(t);return u[m].call(_,_)})),y),{}))}return b=lt(t,S,c,n,e,!0),b}function lt(t,c,n={},e,r,a){let u;const j=h({actions:{}},n),b={deep:!0};let S,v,y=[],m=[],_;const w=e.state.value[t];A({});let k;function L(s){let o;S=v=!1,typeof s=="function"?(s(e.state.value[t]),o={type:I.patchFunction,storeId:t,events:_}):(D(e.state.value[t],s),o={type:I.patchObject,payload:s,storeId:t,events:_});const i=k=Symbol();nt().then(()=>{k===i&&(S=!0)}),v=!0,d(y,o,e.state.value[t])}const Q=function(){const{state:o}=n,i=o?o():{};this.$patch(g=>{h(g,i)})};function $(){u.stop(),y=[],m=[],e._s.delete(t)}const N=(s,o="")=>{if(F in s)return s[O]=o,s;const i=function(){E(e);const g=Array.from(arguments),P=[],x=[];function z(f){P.push(f)}function G(f){x.push(f)}d(m,{args:g,name:i[O],store:l,after:z,onError:G});let C;try{C=s.apply(this&&this.$id===t?this:l,g)}catch(f){throw d(x,f),f}return C instanceof Promise?C.then(f=>(d(P,f),f)).catch(f=>(d(x,f),Promise.reject(f))):(d(P,C),C)};return i[F]=!0,i[O]=o,i},q={_p:e,$id:t,$onAction:W.bind(null,m),$patch:L,$reset:Q,$subscribe(s,o={}){const i=W(y,s,o.detached,()=>g()),g=u.run(()=>X(()=>e.state.value[t],P=>{(o.flush==="sync"?v:S)&&s({storeId:t,type:I.direct,events:_},P)},h({},b,o)));return i},$dispose:$},l=Y(q);e._s.set(t,l);const p=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(u=V()).run(()=>c({action:N}))));for(const s in p){const o=p[s];if(!(R(o)&&!it(o)||J(o))){if(typeof o=="function"){const i=N(o,s);p[s]=i,j.actions[s]=o}}}return h(l,p),h(Z(l),p),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:s=>{L(o=>{h(o,s)})}}),e._p.forEach(s=>{h(l,u.run(()=>s({store:l,app:e._a,pinia:e,options:j})))}),w&&a&&n.hydrate&&n.hydrate(l.$state,w),S=!0,v=!0,l}function ht(t,c,n){let e,r;typeof t=="string"?(e=t,r=c):(r=t,e=t.id);function a(u,j){const b=T();return u=u||(b?U(B,null):null),u&&E(u),u=K,u._s.has(e)||ft(e,r,u),u._s.get(e)}return a.$id=e,a}const St=rt(),bt=ht({id:"main",state:()=>({nonce:localStorage.getItem("nonce")?Number(localStorage.getItem("nonce")):1e15}),actions:{getNonce(){return this.nonce++,localStorage.setItem("nonce",this.nonce.toString()),this.nonce}}});function mt(){return bt(St)}export{mt as u};
