import{d as h,u as m,a as x,c as v,o as c,b as l,e as t,F as b,r as g,f as s,t as _,w,v as k,g as C}from"./index-D8hugNrX.js";import{I as R}from"./index-DmVHD5LJ.js";import{_ as B}from"./plugin-vue_export-helper-DlAUqK2U.js";const D={class:"fixed left-[6%] w-[88%] h-[13.3333vw] bottom-10 safe-area-bottom bg-[rgb(36,44,62)] rounded-2xl"},I={class:"w-full h-full flex"},S=["onClick"],T={class:"text-white text-[18px]"},$={class:"absolute w-full h-[120%] left-0 -top-[10%] text-black bg-[rgb(18,255,149)] flex-c flex-col text-sm rounded-xl"},y={class:"text-black text-[22px]"},F=h({__name:"Tabbar",setup(d){const r=m(),n=x(),a=[{path:"/games",label:"Games",icon:"fire-o"},{path:"/rooms",label:"Rooms",icon:"friends-o"},{path:"/rankings",label:"Rankings",icon:"medal-o"},{path:"/me",label:"Me",icon:"contact-o"}],u=v(()=>r.path),p=o=>{n.replace(o)},f=o=>u.value.indexOf(o)>-1;return(o,G)=>{const i=R;return c(),l("div",D,[t("div",I,[(c(),l(b,null,g(a,e=>t("div",{class:"flex-1 flex-shrink-0 flex-c flex-col text-sm text-white relative pt-1",onClick:L=>p(e.path),key:e.path},[t("div",T,[s(i,{name:e.icon},null,8,["name"])]),t("div",null,_(e.label),1),w(t("div",$,[t("div",y,[s(i,{name:e.icon},null,8,["name"])]),t("div",null,_(e.label),1)],512),[[k,f(e.path)]])],8,S)),64))])])}}}),N={},V={class:"page-view"};function E(d,r){const n=C("router-view"),a=F;return c(),l("div",V,[s(n),s(a)])}const q=B(N,[["render",E]]);export{q as default};
