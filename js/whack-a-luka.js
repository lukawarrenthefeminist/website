const gridItems = document.querySelectorAll('.grid-item');
const mole = document.querySelectorAll('.mole');
let score = document.querySelector("#score");

let result = 0;
let hitPosition = 0;

function randomSquare(){
    gridItems.forEach(className => {
        className.classList.remove("mole");
    });

    let randomPosition = gridItems[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
}

gridItems.forEach(item => {
    item.addEventListener('mouseup', () => {
        if(item.id === hitPosition){
            result += 1;
            score.textContent = result;
        }
    })
});

setInterval(function(){
    randomSquare()
}, 1000);

