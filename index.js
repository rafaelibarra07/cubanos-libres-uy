
const navUl = document.querySelector(".nav__ul")
const navButton = document.querySelector(".nav__button")

navButton.addEventListener("click",() =>{
	navUl.classList.toggle("nav__ul-visible");
});

const contarticulo=document.querySelector(".div__articulo")
const btnli=document.querySelector(".btn__articulo")

btnli.addEventListener("click",() =>{
	contarticulo.classList.toggle("div__articulo-visible");
});