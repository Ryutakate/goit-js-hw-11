import{a as c,S as p,i as n}from"./assets/vendor-D9tHNiur.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com";async function u(s){const r="https://pixabay.com/api/",a="49114756-3e4a97c2ae725133efe287d92";try{return await c.get(r,{params:{key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}catch(i){throw console.error("Error fetching images:",i),i}}function f({webformatURL:s,largeImageURL:r,tags:a,likes:i,views:e,comments:t,downloads:l}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${s}" alt="${a}" />
      </a>
      <ul class="image-info">
        <li class="info-item"><p class="text">Likes</p><p class="text-value">${i}</p></li>
        <li class="info-item"><p class="text">Views</p><p class="text-value">${e}</p></li>
        <li class="info-item"><p class="text">Comments</p><p class="text-value">${t}</p></li>
        <li class="info-item"><p class="text">Downloads</p><p class="text-value">${l}</p></li>
      </ul>
    </li>
  `}const m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){return s.map(f).join("")}const o={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),gallery:document.querySelector(".gallery")};o.form.addEventListener("submit",s=>{s.preventDefault();const r=o.input.value.trim();r&&(o.gallery.innerHTML='<span class="loader"></span>',o.form.reset(),u(r).then(({data:a})=>{o.gallery.innerHTML="",a.hits.length?(o.gallery.innerHTML=g(a.hits),m.refresh()):n.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",maxWidth:"432px"})}).catch(()=>{o.gallery.innerHTML="",n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
