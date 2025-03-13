const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');

let sizeOfGrid = 6;

// button.addEventListener('click', () => {
//     sizeOfGrid = input.value;
// });

//LOOP TO CREATE DIV SQUARES EQUAL TO sizeOfGrid VARIABLE COUNT
for (let i = 1; i <= sizeOfGrid * sizeOfGrid; i++) {
    const div = document.createElement('div');
    container.appendChild(div);

//DIV STYLING PART
    // div.style.flex = 'auto';
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