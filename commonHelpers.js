(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=document.getElementById("mobile-nav-modal"),d=document.getElementById("mobile-nav-close"),m=document.getElementById("mobile-nav-open"),u=document.querySelectorAll(".nav-mobile .nav-item"),c="is-open",l=()=>n.classList.remove(c);m.onclick=()=>n.classList.add(c);d.onclick=l;u.forEach(o=>{o.onclick=l});document.addEventListener("input",function(o){(o.target.tagName==="INPUT"||o.target.tagName==="TEXTAREA")&&(o.target.checkValidity()?(o.target.classList.add("valid"),o.target.classList.remove("invalid")):(o.target.classList.add("invalid"),o.target.classList.remove("valid")))});
//# sourceMappingURL=commonHelpers.js.map
