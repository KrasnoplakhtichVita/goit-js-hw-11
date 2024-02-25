import{S as h,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="/goit-js-hw-11/assets/icon-28003f32.svg";function f(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${r}" alt="${i}" />
          <div class="gallery-thumb">
            <div class="thumb">
              <h2 class="thumb-title">Likes</h2>
              <p class="thumb-description">${e}</p>
            </div>
            <div class="thumb">
              <h2 class="thumb-title">Views</h2>
              <p class="thumb-description">${t}</p>
            </div>
            <div class="thumb">
              <h2 class="thumb-title">Comments</h2>
              <p class="thumb-description">${n}</p>
            </div>
            <div class="thumb">
              <h2 class="thumb-title">Downloads</h2>
              <p class="thumb-description">${u}</p>
            </div>
          </div>
        </a>
      </li>`).join("")}function p(o,r){const s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const l=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader"),g="42531953-f4fd7fd73c35883c60e461dd3",y=new h(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",b);function b(o){o.preventDefault(),a.classList.remove("hidden"),c.innerHTML="";const r=o.target.input.value;p(g,r).then(s=>{a.classList.add("hidden"),s.hits.length||d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",iconUrl:m,timeout:5e5}),c.innerHTML=f(s.hits),y.refresh(),l.reset()}).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers.js.map
