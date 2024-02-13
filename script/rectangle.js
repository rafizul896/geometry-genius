function rectangleBtn(){
    // get rectangle width value:
    const rectangleWidth = document.getElementById('rectangleWidth');
    const rectangleWidthNumber = rectangleWidth.value;
    const width = parseFloat(rectangleWidthNumber);
    console.log(width)
    // get rectangle height value:
    const rectangleHeight = document.getElementById('rectangleHeight');
    const rectangleHeightNumber = rectangleHeight.value;
    const height = parseFloat(rectangleHeightNumber);
    console.log(height);
    // calculation rectingle area value:
    const rectangleArea = width * height;
    console.log(rectangleArea);
    const rectangleAreaAppend = document.getElementById('rectangleArea');
    rectangleAreaAppend.innerText = rectangleArea;
}