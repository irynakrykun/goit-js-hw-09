!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=null;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,n=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));document.querySelector("body").style.backgroundColor=e}),1e3)})),t.addEventListener("click",(function(){clearInterval(n),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.7bfca5db.js.map
