var u=Object.defineProperty;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(n,t,e)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,s=(n,t)=>{for(var e in t||(t={}))p.call(t,e)&&c(n,e,t[e]);if(l)for(var e of l(t))_.call(t,e)&&c(n,e,t[e]);return n};import{d as f,x as d,o as v,c as h,e as a,v as i,f as o,t as r,j as m}from"./app.62eeec4f.js";const k=["title","href"],x={"flex-auto":""},y={"text-normal":""},b={"text-sm":"","opacity-50":"","font-normal":""},g=f({__name:"[name]",props:{name:null,link:null,desc:null,icon:null},setup(n){const t=n,e=d("project-current",s({},t));return t.name!==e.value.name&&(e.value=s({},t)),(j,B)=>(v(),h("a",{class:i(["item flex relative items-center",o(e).link?"":"opacity-0 pointer-events-none h-0 -mt-8 -mb-4"]),title:o(e).name,href:o(e).link,target:"_blank"},[a("div",{class:i(o(e).icon)},null,2),a("div",x,[a("div",y,r(o(e).name),1),a("div",b,r(o(e).desc),1)])],10,k))}});typeof m=="function"&&m(g);export{g as default};
