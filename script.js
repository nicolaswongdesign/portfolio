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


// FOOTER HTML EXTENSION

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
                                <li><a href="graphicDesign.html">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div class="pages-links-2">
                            <ul>
                                <li><a href="uiuxDesign.html">UI/UX Design</a></li>
                                <li><a href="visualBranding.html">Visual Branding</a></li>
                                <li style="display: none;"><a href="#">Portfolio</a></li>
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
