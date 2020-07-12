const gridItems = document.querySelectorAll('.grid-item');
const mole = document.querySelectorAll('.mole');
let score = document.querySelector("#score");

let result = 0;
let hitPosition = 0;
var hit = false;

function randomSquare(){
    gridItems.forEach(className => {
        className.classList.remove("mole");
    });

    let randomPosition = gridItems[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
    hit = false;
}

gridItems.forEach(item => {
    item.addEventListener('mouseup', () => {
        if(item.id === hitPosition && !hit){
            result += 1;
            score.textContent = result;
            hit = true;
        }
    })
});

setInterval(function(){
    randomSquare()
}, 1000);
