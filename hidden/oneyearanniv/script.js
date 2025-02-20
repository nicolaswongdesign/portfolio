
var text = document.getElementById("changingText");
var fonts = ["Mea Culpa", "Great Vibes", "Ms Madi", "Ephesis", "Mea Culpa", "Caveat", "Great Vibes"];
var i = 0;
function changeFont(){
  if(i!=fonts.length){
    changingText.style.fontFamily=fonts[i];
    i++;
  }else{
    i=0;
  }
  setTimeout(changeFont, 300);
}
changeFont();




const flashPage = document.getElementById('flashpage');

const polaroids = [
    { src: 'images/0225.jpg', text: 'When it all started|02/25' },
    { src: 'images/0311.JPG', text: 'Our first housewarming|03/11' },
    { src: 'images/0314.JPG', text: 'Chubby bunny face|03/14' },
    { src: 'images/0314_2.JPG', text: 'HUGGIIEEESS|03/14' },
    { src: 'images/0616.jpg', text: 'First wedding event|06/16' },
    { src: 'images/0616_2.jpg', text: 'Look at the sky|0616' },
    { src: 'images/0623.JPG', text: 'First goofy photo togetha|06/23' },
    { src: 'images/0624.JPG', text: 'Fancy clothes|06/24' },
    { src: 'images/0624_2.jpg', text: 'ESCAPED WITH THE GROUP|06/24' },
    { src: 'images/0715.JPG', text: 'First scawy car crash &#128560;|07/15' },
    { src: 'images/0716.JPG', text: 'Mirror piccss|07/16' },
    { src: 'images/0815.JPG', text: 'DOUBLE LOOPY??|08/15' },
    { src: 'images/0823.jpg', text: 'TUWTLE TIME|08/23' },
    { src: 'images/0830.JPG', text: 'Eye did not see that coming|08/30' },
    { src: 'images/0901.JPG', text: 'NORTHCOAST WEEKEND|09/01' },
    { src: 'images/0925.jpg', text: 'My cousin show|09/25' },
    { src: 'images/0926.JPG', text: 'YOU NEED TO EAT MORE|09/26' },
    { src: 'images/1126.JPG', text: 'Watcha got there?|11/26' },
    { src: 'images/1128.JPG', text: 'Chill guy|11/28' },
    { src: 'images/1207.JPG', text: 'Nonchalant traveller|12/07' },
    { src: 'images/1215.JPG', text: 'POrtEr BoObinSon|12/15' },
    { src: 'images/1219.jpg', text: 'Nice view of indo garden|12/19' },
    { src: 'images/1219_2.jpg', text: 'BWOMPPP|12/19' },
    { src: 'images/1224.jpg', text: 'Swagger couple|12/24' },
    { src: 'images/0118.JPG', text: 'GROUP RAVEEEEE|01/18' },
    { src: 'images/0130.jpg', text: 'Twinsies with the cuzzo bf|01/30' },
    { src: 'images/bubududuspin.gif', text: 'I cannot wait to make more<br>memories with you<br>forever and ever<br>and ever and ever|with our cars...' }
  ];

let currentIndex = 0;

let activePolaroids = []; 

flashPage.addEventListener('click', () => {

  flashPage.classList.add('flash');

  setTimeout(() => {
    flashPage.classList.remove('flash');

    if (activePolaroids.length >= 6) {
      const oldestPolaroid = activePolaroids.shift();
      oldestPolaroid.remove();
    }


    if (currentIndex < polaroids.length) {
      const polaroid = polaroids[currentIndex];
      const newPolaroid = createPolaroid(polaroid);
      activePolaroids.push(newPolaroid);
      currentIndex++;
    }
  }, 150); 
});


function createPolaroid(polaroid) {
    const polaroidBox = document.createElement('div');
    polaroidBox.classList.add('polaroidbox');
  
    const randomRotation = (Math.random() * 50 - 30) + (Math.random() * 20 - 10);
    const randomXOffset = (Math.random() * 20 - 10);
    const randomYOffset = (Math.random() * 12 - 10);
  
    polaroidBox.style.transform = `translateY(100vh) translateX(0) rotate(${randomRotation}deg)`;
  
    polaroidBox.innerHTML = `
      <div class="polaroid">
        <img src="${polaroid.src}" alt="Polaroid Image">
        <h4 class="polaroidText poppins-bold-italic">
        <span class="polaroidText-title">${polaroid.text.split('|')[0]}</span><br>
        <span class="polaroidText-date">${polaroid.text.split('|')[1]}</span>
      </h4>
      </div>
    `;
  
    flashPage.appendChild(polaroidBox);
  
    setTimeout(() => {
      polaroidBox.style.transition = 'all 0.5s ease';
      polaroidBox.style.transform = `translateY(${randomYOffset}vh) translateX(${randomXOffset}vw) rotate(${randomRotation}deg)`;
      polaroidBox.style.opacity = '1';
    }, 50);
  
    return polaroidBox;
  }
  
