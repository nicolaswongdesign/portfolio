// HTML EXTENSION

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer">
                <div class="footer-content">
                    <div class="pages">
                        <h4>NICOLAS WONG</h4>
                        <div class="pages-links-1">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="aboutMe.html">About Me</a></li>
                                <li><a href="contactMe.html">Contact Me</a></li>
                            </ul>
                        </div>
                        <div class="pages-links-2">
                            <ul>
                                <li"><a href="portfolio.html">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="socials">
                        <h4>SOCIALS</h4>
                        <div class="socials-links-1">
                            <ul>
                                <li><a href="https://www.instagram.com/niccolazzy/" target="none">Instagram</a></li>
                                <li><a href="https://www.tiktok.com/@niccolazzy?lang=en" target="none">TikTok</a></li>
                                <li><a href="https://www.twitch.tv/niccolazzy" target="none">Twitch</a></li>
                            </ul>
                        </div>
                        <div class="socials-links-2">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/nicolas-wong-aa768823b/" target="none">LinkedIn</a></li>
                                <li><a href="https://twitter.com/niccolazzy" target="none">Twitter</a></li>
                                <li><a href="https://www.youtube.com/channel/UCGycKtfTFOtDdCs2LpW8Jgw" target="none">Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contacts">
                        <h4>CONTACT</h4>
                        <div class="contacts-links">
                            <ul>
                                <li><a href="mailto:nicolaswong99@gmail.com" target="none">Email</a></li>
                                <li><a href="https://www.discordapp.com/users/294463633805672450" target="none">Discord</a></li>
                                <li><a href="https://linktr.ee/Niccolazzy" target="none">LinkTree</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright © 2023 Nicolas Wong. All Rights Reserved.</p>                    
                    <a href="https://www.instagram.com/niccolazzy/" target="none"><img src="images/footer/instagram.png" alt="instagram"/></a>
                    <a href="https://www.linkedin.com/in/nicolas-wong-aa768823b/" target="none"><img src="images/footer/linkedin.png" alt="linkedin"/></a>
                    <a href="https://www.tiktok.com/@niccolazzy?lang=en" target="none"><img src="images/footer/tiktok.png" alt="tiktok"/></a>
                    <a href="https://twitter.com/niccolazzy" target="none"><img src="images/footer/twitter.png" alt="twitter"/></a>
                    <a href="https://www.twitch.tv/niccolazzy" target="none"><img src="images/footer/twitch.png" alt="twitch"/></a>
                    <a href="https://www.youtube.com/channel/UCGycKtfTFOtDdCs2LpW8Jgw" target="none"><img src="images/footer/youtube.png" alt="youtube"/></a>
                </div>
            </footer>
        `;
    }
}

customElements.define('my-footer', myFooter);

class myMobileNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-menulist" id="mobile-menulist">
                <li><a href="aboutMe.html">About Me</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contactMe.html">Contact Me</a></li>
            </ul>
        </div>
        `;
    }
}

customElements.define('my-mobilenav', myMobileNav);

class myNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="header" id="header">
            <div class="logo" id="logo"><a href="index.html"><img src="images/whiteLogo.png" alt="logo of N and W"></a></div>
            <ul class="menulist" id="menulist">
                <li><a href="aboutMe.html">About Me</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contactMe.html">Contact Me</a></li>
            </ul>
            <div class="menubutton" id="menubutton"><label class="menu" for="menu">
                <input type="checkbox" id="menu">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
        </nav>
        `;
    }
}

customElements.define('my-nav', myNav);

// AUTOPLAY VIDEO

window.onload = function() {
  var videos = document.querySelectorAll('.autoplayVideo');
  videos.forEach(function(video) {
    video.play();
  });
};

// PORTFOLIO LIST

const urls = [
    "charlie-jobson-park.html",
    "olympics-infographics.html",
    "isu-admissions.html",
    "volufixion.html",
    "chicken-addiction.html",
    "dcode.html",
    "maggie-miley.html",
    "boost.html"
  ];
const totalPages = urls.length;

function nextPage() {
  currentPage = (currentPage - 1 + totalPages) % totalPages;
  window.location.href = urls[currentPage];
}

function prevPage() {
  currentPage = (currentPage + 1) % totalPages;
  window.location.href = urls[currentPage];
}


// ACTIVE PAGE

const activeNav = window.location.pathname;
const navLinks = document.querySelectorAll('.mobile-menu a').forEach(link=> {
    if(link.href === window.location.href){
        link.classList.add('menuActive')
    }
})

const navLinksMobile = document.querySelectorAll('.menulist a').forEach(link=> {
    if(link.href === window.location.href){
        link.classList.add('menuActive')
    }
})

// MOBILE NAVIGATION

const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileBar = document.getElementById("header");



menu.addEventListener ('click', () => {
    mobileMenu.classList.toggle('show');
    mobileBar.classList.toggle('show');
})

// SCROLL BEHAVIOR - REVEAL

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// SCROLL BEHAVIOR - NAVIGATION BAR
const nav = document.querySelector(".header");
var scrollValue = document.getElementById('scrollValue');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if (scroll <= 550) {
        console.log("stay");
        nav.classList.remove("header--hidden");
    }
    else if (lastScrollY < window.scrollY) {
        console.log("down");
        nav.classList.add("header--hidden");    
    }
    else {
        console.log("up");
        nav.classList.remove("header--hidden"); 
    }
lastScrollY = window.scrollY;
});




