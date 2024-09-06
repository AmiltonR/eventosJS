const button = document.getElementById('changeColorButton');
const colorText = document.getElementById('colorText');
buttonReset = document.getElementById('resetColor');
whiteText = document.getElementById('whiteText');
text = document.getElementById('title');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

buttonReset.addEventListener('click', () => {
    document.body.style.backgroundColor = '#FFFFFF';
    text.style.color = '#000000';
    colorText.innerHTML = '#FFFFFF';
});

whiteText.addEventListener('click', () => {
    text.style.color = '#FFFFFF';
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