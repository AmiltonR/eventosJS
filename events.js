const button = document.getElementById('changeColorButton');
const colorText = document.getElementById('colorText');

button.addEventListener('click', () =>{
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    colorText.innerHTML = color;
    return color;
}