history.scrollRestoration="manual",document.addEventListener("DOMContentLoaded",(function(){let e;document.scrollingElement.scrollHeight,window.innerHeight;var t,l;window.onscroll=()=>{e=document.scrollingElement.scrollTop},(t=".faq__question",l?l.querySelectorAll(t):document.querySelectorAll(t)).forEach(e=>{e.onclick=t=>{let l=e.nextElementSibling;e.classList.contains("active")?(e.classList.remove("active"),l.style.height="0px"):(e.classList.add("active"),l.style.height=l.scrollHeight+"px")}})}));