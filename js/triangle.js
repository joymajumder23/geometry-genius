function triangleCalculating (){
    // for triangle base
    const triangleTextBaseInput = document.getElementById('triangle-base');
    const triangleTextBase = triangleTextBaseInput.value;
    const base = parseFloat(triangleTextBase);
    console.log(base);

    // for triangle height
    const triangleTextHeightInput = document.getElementById('triangle-height');
    const triangleTextHeight = triangleTextHeightInput.value;
    const height = parseFloat(triangleTextHeight);
    console.log(height);

    // calculating area 
    const triangleArea = 0.5 * base * height;
    console.log('triangle value:', triangleArea);

    // displaying on calculating area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}