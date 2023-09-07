const mainBoard = document.getElementById('main-board');
const boardH = document.querySelectorAll('.board-height');
const boardW = document.querySelector('.board-width');
const selectedSize = document.querySelectorAll('.selectedSize');
const selectedColor = document.querySelectorAll('.selectedColor');

let size;
let colorMode;
let outlined = false;

const outlineBoard = () => {
    const gameSpace = document.querySelectorAll('.gameSpace');
    if (outlined == true) {
        gameSpace.forEach(space => {
            space.classList.add("outlined");
        })
    }
    else {
        gameSpace.forEach(space => {
            space.classList.remove("outlined");
        })
    }
}

const sizeModeSelection = (sizeMode) => {
    const sizeBtns = document.querySelectorAll('.sizeBtn');
    sizeBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            sizeBtns.forEach((btn) => {
                btn.classList.remove('selectedSize');
            });
            e.target.classList.add('selectedSize');
        });
    });
    if(sizeMode == 'default') {
        document.getElementById('smallBoard').classList.add('selectedSize');
    }
}

const colorModeSelection = (color) => {
    const colorBtns = document.querySelectorAll('.colorBtn');
    colorBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            colorBtns.forEach((btn) => {
                btn.classList.remove('selectedColor');
            });
            e.target.classList.add('selectedColor');
            colorMode = e.target.id;
        });
    });
    if(colorMode == null) {
        document.getElementById('black').classList.add('selectedColor');
    }
    console.log(colorMode);
}


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
        for (let j = 0; j < size; j++) {
            const gameSpace = document.createElement('div');
            col.appendChild(gameSpace);
            gameSpace.classList.add('board-width');
            gameSpace.classList.add('gameSpace');   
        }
    })
    colorSelector(colorMode);
    colorModeSelection(colorMode);
    outlineBoard(outlined);
}

const colorSelector = (fillColor) => {
    const gameSpace = document.querySelectorAll('.gameSpace');
    if (fillColor == null) {
        fillColor = 'black';
    }

    gameSpace.forEach(space => {
        if (fillColor == 'rainbow') {
            space.addEventListener('mouseover', () => {
            let rValue = Math.floor(Math.random() * 256);
            let gValue = Math.floor(Math.random() * 256);
            let bValue = Math.floor(Math.random() * 256);
            space.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
            })
        }
        else {
            space.addEventListener('mouseover', () => {
            space.style.backgroundColor = fillColor;
            })
        }
    })
}
createBoard(16);
size = 16;

sizeModeSelection('default');
colorModeSelection('default');



const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => colorSelector("black"));

const redBtn = document.querySelector('#red')
redBtn.addEventListener('click', () => colorSelector("red"));

const rainbowBtn = document.querySelector('#rainbow')
rainbowBtn.addEventListener('click', () => colorSelector("rainbow"));

const smallBtn = document.querySelector('#smallBoard');
smallBtn.addEventListener('click', () => { 
    createBoard(16);
    size = 16;
    colorSelector(colorMode);
    colorModeSelection(colorMode);
});

const mediumBtn = document.querySelector('#mediumBoard');
mediumBtn.addEventListener('click', () => { 
    createBoard(40);
    size = 40;
    colorSelector(colorMode);
    colorModeSelection(colorMode);
});

const btn = document.querySelector('#custom-size');
btn.addEventListener('click', () => {
    size = prompt('How big to make the grid?', 69);

    while(size === null || isNaN(size) || size === '' || size > 100 || size < 1) {
        if(size > 100) {
            alert("Maxium size is 100 x 100!");
            size = prompt('How big to make the grid?');
        }
        else if(size < 1) {
            alert("Minimum size is 1 x 1!")
            size = prompt('How big to make the grid?');
        }
        else if(size === null || size === ''){
            alert('That is not a valid entry!')
            size = prompt('How big to make the grid?');
        }
        else if(isNaN(size)) {
            alert('That is not a number!');
            size = prompt('How big to make the grid?');
        }
    }
    createBoard(size);
});

const outlineBtn = document.querySelector('#outlineBtn');
outlineBtn.addEventListener('click', () => {
    if(outlined == false) {
        outlined = true;
    }
    else {
        outlined = false;
    }
    console.log("should be outlined");
    outlineBoard(outlined);
});


const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => createBoard(size));


