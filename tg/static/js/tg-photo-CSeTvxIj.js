import{h as x}from"./index-B3M_iho9.js";import{_ as z}from"./plugin-vue_export-helper-DlAUqK2U.js";import{d as P,r as d,k as B,o as a,f as i,b as o,u as g,F as A,z as F,i as E,x as H,p as L,e as M}from"./index-C6wpD0vq.js";import"./main-Dck9sSOr.js";const y="/tg/static/png/1-BcTfF4eE.png",R="/tg/static/png/2-B1nvX-Zb.png",S="/tg/static/png/3-vjM5Fdob.png",T="/tg/static/png/4-Dt1rvgdm.png",K="/tg/static/png/5-DThXQQtJ.png",N="/tg/static/png/6-DMVNDDe1.png",V="/tg/static/png/7-k4J8BWCx.png",G="/tg/static/png/8-C4XyiJeW.png",J="/tg/static/png/9-C2TBblwQ.png",W="/tg/static/png/10-DgwZU5IX.png",X="/tg/static/png/11-D2nFwAVK.png",Q="/tg/static/png/12-D_maW5Ja.png",Y="/tg/static/png/13-zK9PPJH0.png",l=h=>(L("data-v-51563027"),h=h(),M(),h),Z={class:"fixed top-0 left-0 px-6 py-4 w-full h-full overscroll-contain overflow-scroll-touch bg-white"},j=l(()=>o("p",{class:"mb-2"},"Origin",-1)),O={class:"h-[180px]"},$=["src"],q={key:1,class:"animate-spin -ml-1 mr-3 h-5 w-5 text-[rgb(200,200,200)]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},tt=l(()=>o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),st=l(()=>o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),et=[tt,st],ot={key:2,class:"text-[gray]"},nt=l(()=>o("div",{class:"mb-2"},"Select",-1)),ct={class:"w-full mt-6 flex flex-wrap gap-4"},at=["onClick"],it=["src"],lt=l(()=>o("p",{class:"mt-6 mb-2"},"Generate",-1)),rt={class:"relative w-[200px] h-[200px]"},gt=l(()=>o("canvas",{id:"myCanvas",width:"200",height:"200"},null,-1)),dt={key:0,class:"absolute left-0 top-0 animate-spin -ml-1 mr-3 h-5 w-5 text-[rgb(200,200,200)]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ht=l(()=>o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),pt=l(()=>o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),mt=[ht,pt],I="https://api.telegram.org/bot7517531779:AAGb7zTfzsKU3is2KRNSF5YIgfg9zWHd-sE",b="https://api.telegram.org/file/bot7517531779:AAGb7zTfzsKU3is2KRNSF5YIgfg9zWHd-sE/",_t=P({__name:"tg-photo",setup(h){const C=d([y,R,S,T,K,N,V,G,J,W,X,Q,Y]),k=document.URL,p=d(""),f=d(0),m=d(!0),_=d(!1);let w="",e=null;const v=n=>{e=document.getElementById("myCanvas");const t=e.getContext("2d");e.width=200,e.height=200,t.clearRect(0,0,e.width,e.height);const s=2;e.style.width=e.width+"px",e.style.height=e.height+"px",e.width*=s,e.height*=s,t.scale(s,s),_.value=!0;const c=new Image;c.src=w,c.onload=function(){_.value=!1,t.save(),t.beginPath(),t.arc(100,100,100,0,2*Math.PI),t.closePath(),t.clip(),t.drawImage(c,0,0,e.width/2,e.height/2),t.restore();const r=new Image;r.src=n,r.onload=function(){t.fillStyle="rgba(233,233,233,1)",t.beginPath(),t.arc(e.width/2-24,24,24,0,Math.PI*2),t.fill(),t.drawImage(r,e.width/2-48,0,48,48)}}},D=async n=>{const{ok:t,result:s}=await x.get(I+"/getUserProfilePhotos?user_id="+n);return t&&s&&s.total_count?s.photos[0][0].file_id:""},U=async n=>{if(!n)return null;const{ok:t,result:s}=await x.get(I+"/getFile?file_id="+n);return t&&s&&s.file_path?s.file_path:""};return B(async()=>{const n=decodeURIComponent(decodeURIComponent(k));console.log("decodeUrl",n);const t=/user=\{"id":(\d+),/,s=n.match(t);if(s&&s[1]){const c=s[1];console.log("User ID:",c);const r=await D(Number(c)),u=await U(r);u?(p.value=b+u,w=b+u,v(y)):m.value=!1}else m.value=!1,console.log("User ID not found.")}),(n,t)=>(a(),i("div",Z,[j,o("div",O,[g(p)?(a(),i("img",{key:0,class:"max-w-full max-h-[200px]",src:g(p),alt:"avatar"},null,8,$)):g(m)?(a(),i("svg",q,et)):(a(),i("div",ot,"图片获取失败"))]),nt,o("div",ct,[(a(!0),i(A,null,F(g(C),(s,c)=>(a(),i("div",{class:H({"bg-gray-200":g(f)===c}),onClick:r=>(f.value=c,v(s))},[(a(),i("img",{class:"w-14 h-14",src:s,alt:"",key:c},null,8,it))],10,at))),256))]),lt,o("div",rt,[gt,g(_)?(a(),i("svg",dt,mt)):E("",!0)])]))}}),xt=z(_t,[["__scopeId","data-v-51563027"]]);export{xt as default};
