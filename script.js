const container = document.querySelector('.container');
let squareField = 16 * 16;

for (let i = 1; i <= squareField; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.border = 'solid, 1px, black'
    div.style.width = '30px';
    div.style.height = '30px';

    div.addEventListener('mouseover' , () => {
        div.classList.add('on-hover');
    })

};