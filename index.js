import{S as m,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d="46054867-15d582c16d4d1b2cce4772636",y="https://pixabay.com/api/",p=o=>fetch(`${y}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(`Error fetching images: ${e.status} ${e.statusText}`);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found for this query.");return e.hits}),h=o=>{const e=document.querySelector(".gallery");if(e.innerHTML="",o.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=o.map(({webformatURL:a,largeImageURL:t,tags:r,likes:n,views:l,comments:c,downloads:u})=>`
              <li class="gallery-item">
                  <a href="${t}" class="gallery-link">
                      <img src="${a}" alt="${r}" class="gallery-image" />
                  </a>
                  <div class="info">
                      <p class="info-item"><span class="info-item-total">Likes</span> ${n}</p>
                      <p class="info-item"><span class="info-item-total">Views</span> ${l}</p>
                      <p class="info-item"><span class="info-item-total">Comments</span> ${c}</p>
                      <p class="info-item"><span class="info-item-total">Downloads</span> ${u}</p>
                  </div>
              </li>
          `).join("");e.innerHTML=s},g=()=>{const o=document.querySelector(".loader");o.style.display="block"},L=()=>{const o=document.querySelector(".loader");o.style.display="none"},i=document.querySelector(".form"),$=document.querySelector(".gallery"),q=new m(".gallery a",{captionsData:"alt",captionDelay:250});i.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.query.value.trim();e&&($.innerHTML="",g(),p(e).then(s=>{h(s),q.refresh()}).catch(s=>{console.error(s),f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{L()}),i.reset())});
//# sourceMappingURL=index.js.map
