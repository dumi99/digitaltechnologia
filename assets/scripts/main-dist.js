"use strict";var clickInput=function(e){document.querySelector("#"+e).parentNode.lastElementChild.classList.remove("hidden")},clearInput=function(e){document.querySelector("#"+e).classList.add("hidden"),document.querySelector("#"+e).parentNode.firstElementChild.value=""},validateNumber=function(e){((e.key<"0"||e.key>"9")&&"+"!=e.key&&"Backspace"!=e.key||"+"==e.key&&e.target.value.length>0)&&e.preventDefault()},validateEmail=function(e){return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},validatePhone=function(e){return console.log(e.match(/\d/g).length),10===e.match(/\d/g).length||11===e.match(/\d/g).length},completePersonalInfo=function(){var e=document.querySelector("#input-number").value,t=document.querySelector("#input-email").value,n=!1;validateEmail(t)&&validatePhone(e)&&(n=!0),n?(document.querySelector("#personal-info").classList.add("hidden"),document.querySelectorAll("#progress .progress-check")[1].classList.add("completed"),document.querySelector(".error-message").classList.add("hidden")):document.querySelector(".error-message").classList.remove("hidden")};
//# sourceMappingURL=main-dist.js.map