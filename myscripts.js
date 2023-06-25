console.log("Hello World!");

const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        console.log("down");
        nav.classList.add("nav--hidden");    
    }
    else {
        console.log("up");
        nav.classList.remove("nav--hidden"); 
    }
lastScrollY = window.scrollY;
});
