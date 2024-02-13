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
// function rectangleCalculating(){
//     // console.log("connected");
//     const rectangleTextWidthInput = document.getElementById('rectangle-width');
//     const rectangleTextWidth = rectangleTextWidthInput.value;
//     const width = rectangleTextWidth;
//     console.log(width);

//     const rectangleTextLengthInput = document.getElementById('rectangle-length');
//     const rectangleTextLength = rectangleTextLengthInput.value;
//     const length = rectangleTextLength;
//     console.log(length);

//     const rectangleArea = width * length;
//     const rectangleAreaSpan = document.getElementById('rectangle-area');
//     rectangleAreaSpan.innerText = rectangleArea;
// }