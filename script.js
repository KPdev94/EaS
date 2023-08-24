const mainBoard = document.getElementById('main-board');
const boardH = document.querySelectorAll('.board-height');
const boardW = document.querySelector('.board-width');
let size;

const createBoard = (size) => {
    mainBoard.innerHTML = '';
    for(let j = 0; j < size; j++) {
        const gameSpace = document.createElement('div');
        mainBoard.appendChild(gameSpace);
        gameSpace.classList.add('board-height');
        gameSpace.classList.add('gameSpace');   
    }
    
    const boardH = document.querySelectorAll('.board-height');
    boardH.forEach((col) => {
        for(let j = 0; j < size; j++) {
            const gameSpace = document.createElement('div');
            col.appendChild(gameSpace);
            gameSpace.classList.add('board-width');
            gameSpace.classList.add('gameSpace');   
        }
    })
    colorSelector();
}

const colorSelector = (fillColor) => {
    const gameSpace = document.querySelectorAll('.gameSpace');
    if(fillColor == null) {
        fillColor = 'black';
    }
    gameSpace.forEach(space => {
        space.addEventListener('mouseover', () => {
            space.style.backgroundColor = fillColor;
        })
    })
}

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => colorSelector("black"));

const redBtn = document.querySelector('#red')
redBtn.addEventListener('click', () => colorSelector("red"));

const rainbowBtn = document.querySelector('#rainbow')
rainbowBtn.addEventListener('click', () => colorSelector("rainbow"));

const smallBtn = document.querySelector('#smallBoard');
smallBtn.addEventListener('click', () => createBoard(16));

const mediumBtn = document.querySelector('#mediumBoard');
mediumBtn.addEventListener('click', () => createBoard(96));

const btn = document.querySelector('#custom-size');
btn.addEventListener('click', () => {
    size = prompt('How big to make the grid?');
    if(size > 100) {
        alert("Maxium size is 100 x 100!");
        size = 100;
    }
    createBoard(size);
})

