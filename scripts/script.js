const scrollToTop = document.querySelector(".scroll-to-top")

window.addEventListener("scroll", () => {
    window.pageYOffset < 100
      ? (scrollToTop.classList = "scroll-to-top scroll-hidden")
      : (scrollToTop.classList = "scroll-to-top scroll-visible");
});
  
window.setTimeout(() =>{
    const navbar = document.querySelector("nav");
    navbar.style.transform = "none";
    const home = document.querySelector(".home-container");
    home.style.transform = "none";
}, 1000)

const html = document.querySelector("html");
const responsiveToggle = document.querySelector("#toggle");
const responsiveNavbar = document.querySelector(".links-container-ul")

responsiveToggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    responsiveNavbar.classList.toggle("show");
});

html.addEventListener("click", ()=>{
    responsiveNavbar.classList.remove("show");
});

responsiveNavbar.addEventListener("click", (e)=>e.stopPropagation())