parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t=document.querySelector(".js-gallery"),o=c(e),n=document.querySelector(".js-lightbox"),i=document.querySelector(".lightbox__image"),a=document.querySelector('button[data-action="close-lightbox"]'),r=document.querySelector("div.lightbox__overlay");function c(e){return e.map(({preview:e,original:t,description:o})=>`\n   <li  class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${t}"\n  >\n    <img      \n      class="gallery__image"\n      src="${e}"\n      data-source="${t}"\n      alt="${o}"\n    />\n  </a>\n</li>\n    `).join("")}function p(e){e.preventDefault(),e.target!==e.currentTarget&&(i.src=e.target.dataset.source,i.alt=e.target.getAttribute("alt"),n.classList.add("is-open"),a.addEventListener("click",s),r.addEventListener("click",s),window.addEventListener("keydown",l),window.addEventListener("keydown",d),window.addEventListener("keydown",g))}function s(){i.src="",i.alt="",n.classList.remove("is-open"),a.removeEventListener("click",s),r.removeEventListener("click",s),window.removeEventListener("keydown",l),window.removeEventListener("keydown",d),window.removeEventListener("keydown",g)}function l(e){"Escape"===e.code&&s()}function d(e){if(e.preventDefault(),"ArrowRight"!==e.code)return;const t=document.querySelector(`[data-source="${i.src}"]`).closest("li").nextElementSibling;if(null===t)return;const o=t.querySelector("img");i.src=o.dataset.source,i.alt=o.getAttribute("alt")}function g(e){if(e.preventDefault(),"ArrowLeft"!==e.code)return;const t=document.querySelector(`[data-source="${i.src}"]`).closest("li").previousElementSibling;if(null===t)return;const o=t.querySelector("img");i.src=o.dataset.source,i.alt=o.getAttribute("alt")}t.insertAdjacentHTML("beforeend",o),t.addEventListener("click",p);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/app.c517ab03.js.map