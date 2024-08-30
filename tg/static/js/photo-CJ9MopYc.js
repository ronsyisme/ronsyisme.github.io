import"https://ronsyisme.github.io/ton-wallet/connect-wallet.js";import{h as B}from"./index-bkA_YOq8.js";import{i as b,a as U,b as L,c as A,d as D,e as R,f as E,g as T,h as z,j as S,k as F,l as N,m as j}from"./13-BNWF6Dll.js";import{_ as M}from"./plugin-vue_export-helper-DlAUqK2U.js";import{d as O,r as m,k as P,o as l,f as r,b as a,u as d,F as V,z as G,i as H,x as Q,p as W,e as J}from"./index-B3qiMlEE.js";import"./main-B6sbK3hR.js";const K="/tg/static/png/0-BattQQoJ.png",i=g=>(W("data-v-25b0ecbc"),g=g(),J(),g),$={class:"fixed top-0 left-0 px-6 py-4 w-full h-full overscroll-contain overflow-scroll-touch bg-white"},q=i(()=>a("p",{class:"mb-2"},"Origin",-1)),X={class:"h-[180px]"},Y=["src"],Z={key:1,class:"animate-spin -ml-1 mr-3 h-5 w-5 text-[rgb(200,200,200)]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},tt=i(()=>a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),et=i(()=>a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),st=[tt,et],ot={key:2,class:"text-[gray]"},at=i(()=>a("div",{class:"mb-2"},"Select",-1)),nt={class:"w-full mt-6 flex flex-wrap gap-4"},ct=["onClick"],it=["src"],lt=i(()=>a("p",{class:"mt-6 mb-2"},"Generate",-1)),rt={class:"relative w-[200px] h-[200px]"},dt=i(()=>a("canvas",{id:"myCanvas",width:"200",height:"200"},null,-1)),mt={key:0,class:"absolute left-0 top-0 animate-spin -ml-1 mr-3 h-5 w-5 text-[rgb(200,200,200)]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},gt=i(()=>a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ht=i(()=>a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),ut=[gt,ht],pt=i(()=>a("div",{class:"mt-5 mb-2",id:"connectButton"},null,-1)),_t=O({__name:"photo",setup(g){const y=m([b,U,L,A,D,R,E,T,z,S,F,N,j]),u=m(""),_=m(0),w=m(!0),p=m(!1);let f=K,s=null;const v=o=>{s=document.getElementById("myCanvas");const t=s.getContext("2d");s.width=200,s.height=200,t.clearRect(0,0,s.width,s.height);const e=2;s.style.width=s.width+"px",s.style.height=s.height+"px",s.width*=e,s.height*=e,t.scale(e,e),p.value=!0;const n=new Image;n.src=f,n.onload=function(){p.value=!1,t.save(),t.beginPath(),t.arc(100,100,100,0,2*Math.PI),t.closePath(),t.clip(),t.drawImage(n,0,0,s.width/2,s.height/2),t.restore();const c=new Image;c.src=o,c.onload=function(){t.fillStyle="rgba(233,233,233,1)",t.beginPath(),t.arc(s.width/2-24,24,24,0,Math.PI*2),t.fill(),t.drawImage(c,s.width/2-48,0,48,48)}}},x=()=>{const o=document.createElement("a");o.href=s.toDataURL("image/png"),o.download=parseInt(new Date().getTime()/1e3+"")+".png",document.body.appendChild(o),o.click(),document.body.removeChild(o)},I=async o=>{const{status:t,data:e}=await B.post("https://laikadog.games/api/tg/getOriginAvatar",{data:{userId:o}});return t===200&&e&&e.imgBase64?e.imgBase64:""},C=o=>{const t=atob(o),e=t.length,n=new Uint8Array(e);for(let h=0;h<e;h++)n[h]=t.charCodeAt(h);const c=new Blob([n],{type:"image/png"});f=URL.createObjectURL(c)};P(async()=>{const o=decodeURIComponent(decodeURIComponent(document.URL));console.log("decodeUrl",o);const t=/user=\{"id":(\d+),/,e=o.match(t);if(e&&e[1]){const n=e[1];console.log("User ID:",n);const c=await I(n);w.value=!1,c&&(u.value="data:image/png;base64,"+c,C(c)),v(b)}else console.log("User ID not found.");setTimeout(()=>{window.TON_WALLET.init()},2e3)});const k=()=>{window.TON_WALLET.sendTransaction("UQCLjgB5D8IRlHN1zpgdKJA0FSnN_vkuRGo2-sFAGERpWBjh","20000000")};return(o,t)=>(l(),r("div",$,[q,a("div",X,[d(u)?(l(),r("img",{key:0,class:"max-w-full max-h-[200px]",src:d(u),alt:"avatar"},null,8,Y)):d(w)?(l(),r("svg",Z,st)):(l(),r("div",ot,"图片获取失败"))]),at,a("div",nt,[(l(!0),r(V,null,G(d(y),(e,n)=>(l(),r("div",{class:Q({"bg-gray-200":d(_)===n}),onClick:c=>(_.value=n,v(e))},[(l(),r("img",{class:"w-14 h-14",src:e,alt:"",key:n},null,8,it))],10,ct))),256))]),lt,a("div",rt,[dt,d(p)?(l(),r("svg",mt,ut)):H("",!0)]),a("div",{class:"mt-10 w-20 h-8 bg-gray-500 flex justify-center items-center text-white hover:cursor-pointer",onClick:x},"下载"),pt,a("button",{onClick:k},"发起交易")]))}}),It=M(_t,[["__scopeId","data-v-25b0ecbc"]]);export{It as default};
