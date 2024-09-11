function checkPerfectNumber() {
    const num = parseInt(document.getElementById('numberInput').value);
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num && num !== 0) {
        document.getElementById('result').innerText = `${num} er et perfekt nummer!`;
    } else {
        document.getElementById('result').innerText = `${num} er ikke et perfekt nummer.`;
    }
}

function updateColor() {
    const red = document.getElementById('redRange').value;
    const green = document.getElementById('greenRange').value;
    const blue = document.getElementById('blueRange').value;

    const color = `rgb(${red}, ${green}, ${blue})`;
    
    document.body.style.backgroundColor = color;
}

function generateRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    
    // Endrer bakgrunnsfarge på body
    document.body.style.backgroundColor = randomColor;
}

function pickColor() {
    const color = document.getElementById('colorPicker').value;

    document.body.style.backgroundColor = color;
}
