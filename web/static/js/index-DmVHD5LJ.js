import{n as _,l as j,d as P,c as x,f as m,L as N,m as k}from"./index-D8hugNrX.js";function re(){}const se=Object.assign,z=typeof window<"u",h=e=>e!==null&&typeof e=="object",l=e=>e!=null,B=e=>typeof e=="function",ae=e=>h(e)&&B(e.then)&&B(e.catch),w=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),oe=()=>z?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function F(e,t){const u=t.split(".");let n=e;return u.forEach(a=>{var c;n=h(n)&&(c=n[a])!=null?c:""}),n}function ce(e,t,u){return t.reduce((n,a)=>(n[a]=e[a],n),{})}const ie=null,p=[Number,String],L={type:Boolean,default:!0},de=()=>({type:Array,default:()=>[]}),fe=e=>({type:Number,default:e}),y=e=>({type:String,default:e});function i(e){if(l(e))return w(e)?`${e}px`:String(e)}function le(e){if(l(e)){if(Array.isArray(e))return{width:i(e[0]),height:i(e[1])};const t=i(e);return{width:t,height:t}}}function ge(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const R=/-(\w)/g,O=e=>e.replace(R,(t,u)=>u.toUpperCase()),{hasOwnProperty:T}=Object.prototype;function U(e,t,u){const n=t[u];l(n)&&(!T.call(e,u)||!h(n)?e[u]=n:e[u]=S(Object(e[u]),n))}function S(e,t){return Object.keys(t).forEach(u=>{U(e,t,u)}),e}var Z={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const $=_("zh-CN"),A=j({"zh-CN":Z}),K={messages(){return A[$.value]},use(e,t){$.value=e,this.add({[e]:t})},add(e={}){S(A,e)}};var M=K;function V(e){const t=O(e)+".";return(u,...n)=>{const a=M.messages(),c=F(a,t+u)||F(a,u);return B(c)?c(...n):c}}function b(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((u,n)=>u+b(e,n),""):Object.keys(t).reduce((u,n)=>u+(t[n]?b(e,n):""),""):""}function W(e){return(t,u)=>(t&&typeof t!="string"&&(u=t,t=""),t=t?`${e}__${t}`:e,`${t}${b(t,u)}`)}function v(e){const t=`van-${e}`;return[t,W(t),V(t)]}function I(e){return e.install=t=>{const{name:u}=e;u&&(t.component(u,e),t.component(O(`-${u}`),e))},e}const[Y,D]=v("badge"),G={dot:Boolean,max:p,tag:y("div"),color:String,offset:Array,content:p,showZero:L,position:y("top-right")};var X=P({name:Y,props:G,setup(e,{slots:t}){const u=()=>{if(t.content)return!0;const{content:r,showZero:s}=e;return l(r)&&r!==""&&(s||r!==0&&r!=="0")},n=()=>{const{dot:r,max:s,content:o}=e;if(!r&&u())return t.content?t.content():l(s)&&w(o)&&+o>+s?`${s}+`:o},a=r=>r.startsWith("-")?r.replace("-",""):`-${r}`,c=x(()=>{const r={background:e.color};if(e.offset){const[s,o]=e.offset,{position:g}=e,[d,E]=g.split("-");t.default?(typeof o=="number"?r[d]=i(d==="top"?o:-o):r[d]=d==="top"?i(o):a(o),typeof s=="number"?r[E]=i(E==="left"?s:-s):r[E]=E==="left"?i(s):a(s)):(r.marginTop=i(o),r.marginLeft=i(s))}return r}),f=()=>{if(u()||e.dot)return m("div",{class:D([e.position,{dot:e.dot,fixed:!!t.default}]),style:c.value},[n()])};return()=>{if(t.default){const{tag:r}=e;return m(r,{class:D("wrapper")},{default:()=>[t.default(),f()]})}return f()}}});const q=I(X),[H,Ee]=v("config-provider"),J=Symbol(H),[Q,C]=v("icon"),ee=e=>e?.includes("/"),te={dot:Boolean,tag:y("i"),name:String,size:p,badge:p,color:String,badgeProps:Object,classPrefix:String};var ue=P({name:Q,props:te,setup(e,{slots:t}){const u=N(J,null),n=x(()=>e.classPrefix||u?.iconPrefix||C());return()=>{const{tag:a,dot:c,name:f,size:r,badge:s,color:o}=e,g=ee(f);return m(q,k({dot:c,tag:a,class:[n.value,g?"":`${n.value}-${f}`],style:{color:o,fontSize:i(r)},content:s},e.badgeProps),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t),g&&m("img",{class:C("image"),src:f},null)]}})}}});const me=I(ue);export{me as I,fe as a,z as b,v as c,h as d,se as e,de as f,ae as g,re as h,l as i,ge as j,oe as k,le as l,y as m,p as n,i as o,ce as p,L as t,ie as u,I as w};
