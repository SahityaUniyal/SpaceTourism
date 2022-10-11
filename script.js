// variable used in navigation toggle
const nav=document.querySelector(".nav-menu");
const navToggle =document.querySelector(".mobile-nav-toggle");


// navbar toggle on click
navToggle.addEventListener("click",()=>{
    const visibility= nav.getAttribute("data-visible");
    if(visibility==="false")
    {
        nav.setAttribute("data-visible",true);
        navToggle.setAttribute("aria-expanded",true);
    }else{   
        nav.setAttribute("data-visible",false);
        navToggle.setAttribute("aria-expanded",false);
    }
});