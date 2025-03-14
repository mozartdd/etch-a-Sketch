const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');

//FUNCTION WHICH CHANGES THE AMOUNT OF DIV SQUARES
function resizeGrid(sizeOfGrid){
//CLEARS CONTAINER OF PREVIOUS DIV IF NEW DIV AMOUNT IS ENTERED
    container.innerHTML = '';
//LOOP TO CREATE DIV SQUARES EQUAL TO sizeOfGrid VARIABLE COUNT
    for (let i = 1; i <= sizeOfGrid * sizeOfGrid; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    
    //DIV STYLING PART
        div.style.border = 'solid, 1px, black';
        div.style.backgroundColor = 'white';
        div.style.width = `${100 / sizeOfGrid}%`;
        div.style.height = `${100 / sizeOfGrid}%`;
    
    //EVENT LISTENER TO CHANGE COLOR IF MOUSE IS OVER DIV
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = '';
            div.classList.add('on-hover');
        });
    
    };  
}

//FUNCTION TO ASK FOR USER INPUT TO CHOSE SQUARE AMOUNT
function askForSize() {
    return +prompt('Enter the size of grid', '16'); 
}

//CALL FOR INITIAL SKETCH GRID PANEL
resizeGrid(16);


//BUTTON EVENT LISTENER TO TRIGGER PROMPT TO ASK FOR USER INPUT
button.addEventListener('click', () => {
    resizeGrid(askForSize());
})


//COLOR CHANGERS MAY BE WILL NOT USE 

// const red = document.querySelector('.red');
// const blue = document.querySelector('.blue');
// const green = document.querySelector('.green');
// const pink = document.querySelector('.pink');
// const yellow = document.querySelector('.yellow');
// const purple = document.querySelector('.purple');
// const black = document.querySelector('.black');
// const white = document.querySelector('.white');

// red.addEventListener('click', () => {
    //     div.classList.remove('on-hover-blue');
    //     div.classList.remove('on-hover-green');
    //     div.classList.remove('on-hover-pink');
    //     div.classList.remove('on-hover-yellow');
    //     div.classList.remove('on-hover-purple');
    //     div.classList.remove('on-hover-black');
    //     div.classList.add('on-hover-red')
    // });

    // white.addEventListener('click', () => {
    //     // div.classList.remove();
    //     div.classList.add('on-hover-white')
    // });

    // blue.addEventListener('click', () => {
    //     // div.classList.remove();
    //     div.classList.add('on-hover-blue')
    // });

    // green.addEventListener('click', () => {
    //     // div.classList.remove('on-hover');
    //     div.classList.add('on-hover-green')
    // });

    // pink.addEventListener('click', () => {
    //     // div.classList.remove('on-hover');
    //     div.classList.add('on-hover-pink')
    // });

    // yellow.addEventListener('click', () => {
    //     // div.classList.remove('on-hover');
    //     div.classList.add('on-hover-yellow')
    // });

    // purple.addEventListener('click', () => {
    //     div.classList.remove('on-hover');
    //     div.classList.add('on-hover-purple')
    // });

    // black.addEventListener('click', () => {
    //     // div.classList.remove('on-hover');
    //     div.classList.add('on-hover-black')
    // });
