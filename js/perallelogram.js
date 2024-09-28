function calculatePerallelogramArea(){;
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
   
    setInnerText('parallelogram-area', area);
}

function getInputValue(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}