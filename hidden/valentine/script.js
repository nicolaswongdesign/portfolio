const buttonHeight = 50;
const buttonWidth = 200;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;


const button = document.getElementById('buttonNo');

if (button != null) {
    button.addEventListener('mouseover', myFunction);

    function myFunction() {
        button.style.position = 'absolute';
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    };
}

if (button != null) {
    button.addEventListener('click', myFunction);

    function myFunction() {
        button.style.position = 'absolute';
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    };
}

const buttonAgreed = document.getElementById('buttonTerms');
const terms = document.getElementById('Terms');

buttonAgreed.addEventListener('click', agree);

function agree() {
    terms.style.display = 'block';
};


const buttonClose = document.getElementById('close');

buttonClose.addEventListener('click', closeTerms);

function closeTerms() {
    terms.style.display = 'none';
};


function celebrate() {

    const takeFlower = document.getElementById('flower');
    const confetti = document.getElementById('confetti');

    takeFlower.classList.add('appear');
    confetti.classList.add('appear');


}
