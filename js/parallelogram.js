function parallelogramCalculating(){
    const base = textInputById('parallelogram-base');
    console.log(base);
    const height = textInputById('parallelogram-height');
    console.log(height);

    const area = base * height;
    inputArea('parallelogram-area', area);
}

function textInputById(inputById){
    const inputId = document.getElementById(inputById);
    const inputValue = inputId.value;
    const input = parseFloat(inputValue);
    return input;
}
function inputArea(elementById, area){
    const element = document.getElementById(elementById);
    element.innerText = area;
}