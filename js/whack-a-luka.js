const gridItems = document.querySelectorAll('.grid-item');
const mole = document.querySelectorAll('.mole');
let score = document.querySelector("#score");

let result = 0;
let hitPosition = 0;
var hit = false;
var randomPosition = gridItems[Math.floor(Math.random() * 9)];
setInterval(function(){
    randomSquare()
}, 1000);

function randomSquare(){
    gridItems.forEach(className => {
        className.classList.remove("mole");
        className.classList.remove("moleHIT");
    });

    randomPosition = gridItems[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
    hit = false;
}

gridItems.forEach(item => {
    item.addEventListener('mouseup', () => {
        if(item.id === hitPosition && !hit){
            result += 1;
            score.textContent = result;
            randomPosition.classList.remove("mole");
            randomPosition.classList.add("moleHIT");
            hit = true;
        }
    })
});
