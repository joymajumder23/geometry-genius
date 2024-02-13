function rectangleCalculating(){
    // console.log("connected");
    const rectangleTextWidthInput = document.getElementById('rectangle-width');
    const rectangleTextWidth = rectangleTextWidthInput.value;
    const width = parseFloat(rectangleTextWidth);
    console.log(width);

    const rectangleTextLengthInput = document.getElementById('rectangle-length');
    const rectangleTextLength = rectangleTextLengthInput.value;
    const length = parseFloat(rectangleTextLength);
    console.log(length);

    const rectangleArea = width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}