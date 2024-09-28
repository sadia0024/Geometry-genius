function calculateTriangleArea(){
    const baseInput = document.getElementById('triangle-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);

    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);

    const area = 0.5 * base * height;

    const final = document.getElementById('triangle-area');
    final.innerText = area;

}

function calculateRectangleArea(){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    const area = width * length;

    const final = document.getElementById('rectangle-area');
     final.innerText = area;
}


function calculateRectangleArea(){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    const area = width * length;

    const final = document.getElementById('rectangle-area');
     final.innerText = area;
}