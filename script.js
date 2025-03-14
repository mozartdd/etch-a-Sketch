const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');


let sizeOfGrid = returnSizeOfGrid();

button.addEventListener('click', () => {
    return sizeOfGrid = prompt('Enter number between 1 and 100, it will set the size of grid squares', '5');
});

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
    div.addEventListener('mouseenter' , () => {
        div.style.backgroundColor = ''
        div.classList.add('on-hover');
    })
};

function returnSizeOfGrid() {
    return prompt('Enter number between 1 and 100, it will set the size of grid squares', '5');
};
