!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e){e.addEventListener("input",(function(){var e="+_ (___) ___ ____".replace(/\D/g,""),t=0,n=this.value.replace(/\D/g,"");e.length>=n.length&&(n=e),this.value="+_ (___) ___ ____".replace(/./g,(function(e){return/[_\d]/.test(e)&&t<n.length?n.charAt(t++):t>=n.length?"":e})),function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}}(this.value.length,this)}),!1)};function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=function(){n(document.getElementById("banner-form")),n(document.getElementById("card_order")),n(document.getElementById("footer_form")),n(document.getElementById("form1")),n(document.getElementById("form2"));var e=document.createElement("div"),t=document.createElement("div");function n(n){var a=r(n.elements).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type}));a.forEach((function(e){e.addEventListener("input",(function(){"phone"===e.name?(o(e),e.value=e.value.replace(/[^0-9+]/,"")):"name"===e.name?e.value=e.value.replace(/[^а-яё ]/gi,""):"promo"===e.name&&(e.value=e.value.replace(/[^а-яё0-9 ]/gi,""))}))}));n.addEventListener("submit",(function(o){o.preventDefault();var r,l=n.querySelectorAll("input");if(r={},l.forEach((function(e,t){var n;e.placeholder?("Ваш номер телефона..."===e.placeholder&&function n(){e.removeEventListener("input",n),/^(([0-9]|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{9}$/.test(e.value)?(e.classList.remove("invalid"),r[t]=!0):(e.classList.add("invalid"),e.addEventListener("input",n),r[t]=!1)}(),"Ваше имя..."===e.placeholder&&function n(){e.removeEventListener("input",n),""!==e.value?(e.classList.remove("invalid"),r[t]=!0):(e.classList.add("invalid"),e.addEventListener("input",n),r[t]=!0)}()):e.type&&("checkbox"===e.type&&(e.checked?r[t]=!0:(r[t]=!1,n=0,function t(){n>-8?(n--,document.querySelector("label[for=".concat(e.id,"]")).style.top=n+"px",requestAnimationFrame(t)):-8===n&&(document.querySelector("label[for=".concat(e.id,"]")).style.top="0px")}())),"radio"===e.type&&!0!==r.radio&&(e.checked?r.radio=!0:(r.radio=!1,function(){var t=0;!function n(){t>-8?(t--,document.querySelector("label[for=".concat(e.id,"]")).style.top=t+"px",requestAnimationFrame(n)):-8===t&&(document.querySelector("label[for=".concat(e.id,"]")).style.top="0px")}()}())))})),!Object.values(r).includes(!1)){var c=o.target;n.childNodes.forEach((function(e){"H4"!==e.tagName&&void 0!==e.tagName&&"DIV"!==e.tagName&&(e.style.display="none")})),o.preventDefault(),n.append(e),n.append(t),e.style.color="white",t.classList.add("spinner-grow","text-light"),e.textContent="Загрузка...";var i=new FormData(n),u={};i.forEach((function(e,t){u[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(u).then((function(e){if(200!==e.status)throw new Error("status network not 200");document.getElementById("thanks").style.display=" block",t.classList.remove("spinner-grow")})).catch((function(n){t.classList.remove("spinner-grow"),e.textContent="Что-то пошло не так...",console.error(n)})),a.forEach((function(e){e.value=""})),setTimeout((function(){e.textContent="",function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););e.style.display="none"}(n,"popup"),n.childNodes.forEach((function(e){"H4"!==e.tagName&&void 0!==e.tagName&&"DIV"!==e.tagName&&(e.style.display="block")})),c.reset(),document.getElementById("thanks").style.display=" none"}),3e3)}}))}},c=function(){var e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0;setInterval((function(){e[t].style.display="none",++t>=e.length&&(t=0),function(e,t){e[t].style.display="block",e[t].style.display="-webkit-box"}(e,t)}),2e3)};(function(){var e=document.querySelector(".clubs-list"),t=document.getElementById("clubs-list"),n=document.querySelector(".open-popup"),o=document.getElementById("free_visit_form"),r=document.querySelectorAll(".popup"),a=document.querySelectorAll(".callback-btn"),l=document.getElementById("callback_form"),c=document.querySelector(".fixed-gift"),i=document.getElementById("gift");e.addEventListener("click",(function(){"none"===t.style.display||""===t.style.display?t.style.display="block":t.style.display="none"})),n.addEventListener("click",(function(){o.style.display="block"})),c&&c.addEventListener("click",(function(){c.style.display="none",i.style.display="block"})),a.forEach((function(e){e.addEventListener("click",(function(){l.style.display="block"}))})),r.forEach((function(e){e.addEventListener("click",(function(t){var n=t.target;n.classList.contains("close_icon")||n.classList.contains("close-btn")?e.style.display="none":(n=n.closest(".form-content"))||(e.style.display="none")}))}))})(),l(),c()}]);