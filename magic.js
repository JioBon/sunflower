let noButton = document.getElementById('nobtn');
let yesButton = document.getElementbyId('yesbtn');
let question = document.getElementById('question');
const btntexts = ["Not yet", "Nooo", "I need more sunflowers!", "GIVE ME SUNFLOWER",
                    "Hindi pa eh :(", "Still sad", "Do better in making me smile"];
const texts = ["What about now?", "Still not happy?", "Please be happy now",
                "Smile ka na please", ];

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