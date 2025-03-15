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
        // div.style.backgroundColor = '';
        div.style.backgroundColor = `rgb(${returnRandomRGB()}, ${returnRandomRGB()}, ${returnRandomRGB()})`});
        
}
}

//FUNCTION THAT RETURNS RANDOM NUM FOR RGB COLOR 
function returnRandomRGB() {
    return Math.floor((Math.random() * 255) + 1)
};


//FUNCTION TO ASK FOR USER INPUT TO CHOSE SQUARE AMOUNT
function askForSize() {
    if(!input.value) {
        input.value = 16;
    } else if(input.value > 100 ) {
        input.value = 100;
    } else if(input.value <= 0) {
        input.value = 1;
    }
    return input.value;
}

//CALL FOR INITIAL SKETCH GRID PANEL
resizeGrid(16);


//BUTTON EVENT LISTENER TO TRIGGER PROMPT TO ASK FOR USER INPUT
button.addEventListener('click', () => {
    resizeGrid(askForSize());
});