const mainBoard = document.getElementById('main-board');
const boardH = document.querySelectorAll('.board-height');
const boardW = document.querySelector('.board-width');
let size;

const createBoard = (size) => {
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
    
    const gameSpace = document.querySelectorAll('gameSapce');
    gameSpace.forEach((space) => {
        space.addEventListener('hover', space.style.background = 'blue')
    })
}



const btn = document.querySelector('#custom-size');
btn.addEventListener('click', () => {
    size = prompt('How big to make the grid?');
    createBoard(size);
})

