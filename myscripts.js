console.log("Hello World!");

const nav = document.querySelector(".navbar");
var scrollValue = document.getElementById('scrollValue');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll <= 500) {
        console.log("stay");
        nav.classList.remove("nav--hidden");
    }
    else if (lastScrollY < window.scrollY) {
        console.log("down");
        nav.classList.add("nav--hidden");    
    }
    else {
        console.log("up");
        nav.classList.remove("nav--hidden"); 
    }
lastScrollY = window.scrollY;
});
