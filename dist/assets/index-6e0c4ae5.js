(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();let d=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var p=m;function l(){return new DOMException("The request is not allowed","NotAllowedError")}async function f(e){if(!navigator.clipboard)throw l();return navigator.clipboard.writeText(e)}async function y(e){const r=document.createElement("span");r.textContent=e,r.style.whiteSpace="pre",r.style.webkitUserSelect="auto",r.style.userSelect="all",document.body.appendChild(r);const o=window.getSelection(),c=window.document.createRange();o.removeAllRanges(),c.selectNode(r),o.addRange(c);let t=!1;try{t=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(r)}if(!t)throw l()}async function m(e){try{await f(e)}catch(r){try{await y(e)}catch(o){throw o||r||l()}}}const w=u(p);const g=document.querySelector("button"),i=document.querySelector("h2"),a=document.querySelector("h4");g.addEventListener("click",()=>{a.innerHTML="Clique na senha para copiá-la",a.style.color="white";const e=d();i.innerHTML=e});i.addEventListener("click",e=>{i.innerText==="..."?(a.style.color="rgb(142, 47, 47)",a.innerHTML="Clique no botão para gerar uma senha segura"):(w(e.target.innerHTML),a.innerText="Senha copiada para área de transferência!",a.style.color="rgb(95, 225, 86)")});window.onload=()=>{a.innerHTML="Clique no botão para gerar uma senha segura"};
