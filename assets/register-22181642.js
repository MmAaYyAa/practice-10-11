import{T as m}from"./refs-46824d00.js";import{r as i}from"./api-796b699d.js";const r=document.querySelector(".register-form");r.addEventListener("submit",l);function l(e){e.preventDefault();const{name:t,email:s,password:a}=e.currentTarget.elements,o={name:t.value,email:s.value,password:a.value};i(o).then(n=>{localStorage.setItem(m,n.token)}),r.reset()}
