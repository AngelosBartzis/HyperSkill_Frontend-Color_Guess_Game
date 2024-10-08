const colorBlocks = document.querySelectorAll('.color-block');
const colorDisplay = document.querySelector('#rgb-color');
const gameStatus = document.querySelector('#status');
const restartButton = document.querySelector('#restart');

let colors = [];

generateRandomColor();
assignRandomColor();
getRandomPickedColor();
checkColor();

function generateRandomColor() {
    for (let i = 0; i < colorBlocks.length; i++) {
        colors.push(`RGB(${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`);
    }
}

function assignRandomColor() {
    colors.forEach((color, index) => {
        colorBlocks[index].style.background = color;
        colorBlocks[index].setAttribute('data-color', color);
    });
}

function getRandomPickedColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = randomColor;
    return randomColor;
}

let pickedColor = getRandomPickedColor();

function checkColor() {
    colorBlocks.forEach((block) => {
        block.addEventListener('click', (e) => {
            if (e.target.dataset.color === pickedColor) {
                gameStatus.textContent = "Correct!";
                colorBlocks.forEach((block) => {
                    block.style.backgroundColor = e.target.dataset.color;
                })
            } else {
                gameStatus.textContent = "Try Again!";
                e.target.style.display = 'none';
            }
        })
    })
}

function reset() {
    colors = [];
    generateRandomColor();
    assignRandomColor();
    getRandomPickedColor();
    gameStatus.textContent = "Start Guessing!";
    colorBlocks.forEach((block) => {
        block.style.display = 'inline-block';
    })
    checkColor();
    pickedColor = getRandomPickedColor();
}

restartButton.addEventListener('click', reset);