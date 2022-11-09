const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.querySelector("body").style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.0eb8f311.js.map
