import{j as u,F as m,a as p,b as f,c as g,d as h,e as b,f as x,g as y,h as w,r as k,i as N,k as C,R as v,l as F}from"./vendor.e218590b.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};L();const c="Ticiano Morvan",j="Ti7oyan",E="https://avatars.githubusercontent.com/u/74388638?v=4",e=u.exports.jsx,l=u.exports.jsxs,d={instagram:{backgroundColor:"bg-gradient-to-tr from-amber-500 to-fuchsia-700",icon:e(m,{})},twitch:{backgroundColor:"bg-purple-500",icon:e(p,{})},twitter:{backgroundColor:"bg-blue-500",icon:e(f,{})},youtube:{backgroundColor:"bg-red-600",icon:e(g,{})},linkedin:{backgroundColor:"bg-blue-300",icon:e(h,{})},facebook:{backgroundColor:"bg-blue-600",icon:e(b,{})},spotify:{backgroundColor:"bg-green-500",icon:e(x,{})},patreon:{backgroundColor:"bg-red-600",icon:e(y,{})},github:{backgroundColor:"bg-gray-500",icon:e(w,{})}},I=[{platform:"twitch",description:"Seguime en Twitch",url:"https://twitch.tv/Ti7oyan"},{platform:"youtube",description:"Suscribite en Youtube",url:"https://www.youtube.com/channel/UCtXLKqB6Cd9eL0MAErcAPSw"},{platform:"instagram",description:"Seguime en Instagram",url:"https://instagram.com/ticianomorvan"},{platform:"portfolio",description:"Visit\xE1 mi portfolio",url:"https://ticianomorvan.me",customColor:"bg-blue-300"},{platform:"linkedin",description:"Cont\xE1ctame en LinkedIn",url:"https://www.linkedin.com/in/ticianomorvan/"},{platform:"github",description:"Revis\xE1 mis proyectos",url:"https://github.com/Ti7oyan"}],T=({platform:r,description:n,url:a,customColor:i})=>{let t="bg-white",o=e(C,{});return r in d&&(t=d[r].backgroundColor,o=d[r].icon),i&&(t=i),e("a",{href:a,className:"m-auto w-max",id:`${c}-${r}`,rel:"noreferrer",target:"_blank",children:e("li",{className:`${t} w-64 min-w-max p-2
          rounded-xl transition duration-150
          hover:scale-105 sm:w-72`,children:l("div",{className:"p-0.5 rounded-xl w-full flex justify-between",children:[e("span",{className:"self-center text-2xl",children:o}),e("p",{children:n})]})})})},S=()=>(k.exports.useEffect(()=>{N.timeline({easing:"easeOutQuad",duration:700,delay:300}).add({targets:document.getElementById("profile"),opacity:["0%","100%"],translateY:["-0.5em","0"],scale:["0.95","1"]}).add({targets:document.getElementById("external-links"),opacity:["0%","100%"],translateY:["-1em","0"]})},[]),l("main",{className:"w-full min-h-screen max-h-max bg-neutral-900 font-sans",children:[e("section",{id:"profile",className:"p-8 pb-0",children:l("article",{id:"profile-details",className:"text-center text-white",children:[e("img",{src:E,alt:`${c}'s profile picture`,className:"w-32 m-auto my-4 rounded-full"}),e("h1",{className:"text-xl",children:c}),e("h2",{className:"text-md text-gray-400",children:`< ${j} >`})]})}),e("section",{id:"external-links",className:"p-8",children:e("ul",{className:"grid grid-cols-1 gap-y-2.5",children:I.map(r=>e(T,{platform:r.platform,description:r.description,url:r.url,customColor:r.customColor}))})}),e("footer",{className:"flex justify-center",children:e("p",{className:"text-gray-700",children:"Dise\xF1ado por Ticiano Morvan"})})]}));v.render(e(F.StrictMode,{children:e(S,{})}),document.getElementById("root"));