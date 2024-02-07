let noButton = document.getElementById('nobtn');
let yesButton = document.getElementById('yesbtn');
let question = document.getElementById('question');
const btntexts = ["Not yet", "Nooo", "I need more sunflowers!", "GIVE ME SUNFLOWER",
                    "Hindi pa eh :(", "Still sad", "Do better in making me smile"];
const texts = ["What about now?", "Still not happy?", "Please be happy now",
                "Smile ka na please", "Did I make you smile now?", "Give me a smile!"];

const happytxt = ["Yehey! You're a lot pretty when you smile", "I'm glad I made you happy",
                "Tingin nga ng ngiti yieee", "Apply ako happy pill mo"]

function animateFalling(to_fall, endPosition) {
    let startTime;
    const duration = 1000;
    const startPosition = -50;


    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const displacement = (progress / duration) * (endPosition - startPosition);
        to_fall.style.top = startPosition + displacement + 'vh';

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

yesButton.addEventListener('click', () => {

    const falling_flowers = document.querySelectorAll('.falling-element');

    falling_flowers.forEach (box => {
        box.style.zIndex = 5;
    })

    question.innerHTML = happytxt[Math.floor(Math.random() * happytxt.length)];

    const numOfFlowers = 10;
    const growGarden = () => {
      function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
      }
  
      let positions = [];
  
      function getNum(){
        let pos = getRandomArbitrary(0, 100);
        for(let x = 0; x < positions.length; x++){
          if(pos > positions[x] - 3 && pos < positions[x] + 3){
            return false;
          }
        }
        positions.push(pos);
      }
  
      while(positions.length < numOfFlowers){
        getNum();
      }
  
      let more = setInterval(function() {
        let flwr = document.createElement('div');
        let dim = getRandomArbitrary(30, 80);
        let leftPos = positions[0];
        positions.shift();
  
        flwr.classList.add('sunflwr');
        flwr.innerHTML = `<div class="sunflwr__leaf--left"></div>
                          <div class="sunflwr__leaf--right"></div>
                          <div class="sunflwr__stem"></div>
                          <div class="sunflwr__center"></div>
                          <div class="sunflwr__pedal--1"></div>
                          <div class="sunflwr__pedal--2"></div>
                          <div class="sunflwr__pedal--3"></div>
                          <div class="sunflwr__pedal--4"></div>
                          <div class="sunflwr__pedal--5"></div>
                          <div class="sunflwr__pedal--6"></div>
                          <div class="sunflwr__pedal--7"></div>
                          <div class="sunflwr__pedal--8"></div>
                          <div class="sunflwr__pedal--9"></div>
                          <div class="sunflwr__pedal--10"></div>
                          <div class="sunflwr__pedal--11"></div>
                          <div class="sunflwr__pedal--12"></div>`;
        flwr.style.left = `${leftPos}vw`;
        flwr.style.height = `${dim}vmin`;
        flwr.style.width = `${dim}vmin`;
        flwr.style.zIndex = 100 - dim;
        flwr.style.filter = `saturate(${getRandomArbitrary(70, 100)}%) brightness(${getRandomArbitrary(80, 150)}%)`;
        document.querySelector('body').appendChild(flwr);
      }, 150);
  
      setTimeout(function() {
        window.clearInterval(more);
      }, numOfFlowers * 150);
    }
    
    document.body.addEventListener('click', () => {
      growGarden();
    });
})

// button.style.color = 'red';
noButton.addEventListener('click', () => {
    var new_x = Math.floor(Math.random() * 80);
    var new_y = Math.floor(Math.random() * 90);

    var current_x = noButton.style.left;
    var current_y = noButton.style.top;
    if (!current_y) current_y = '100px';

    noButton.style.position = "absolute"

    noButton.style.top = new_y+"vh";
    noButton.style.left = new_x+"vw";
    noButton.innerHTML = btntexts[Math.floor(Math.random() * btntexts.length)];
    question.innerHTML = texts[Math.floor(Math.random() * texts.length)];

    var img = document.createElement("img");
    img.className = 'falling-element'
    img.src = "sunflower.gif";
    img.style.left = current_x;
    img.style.transform = "translateX(-50%)";

    if (!Number.isInteger(current_y)) current_y = parseInt(current_y);
    // console.log(current_y);
    let y_fall = Math.floor(Math.random() * 50);

    animateFalling(img, current_y);


    // add to canvas
    var src = document.getElementById("canvas");
    src.appendChild(img);

});