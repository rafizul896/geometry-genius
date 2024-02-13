function triangleBtn(){
    // get tringle base value
    const triangleBase = document.getElementById('triangleBase');
    const triangleBaseNumber = triangleBase.value;
    const base = parseFloat(triangleBaseNumber);
    console.log(base)

    // get tringle height value
    const triangleHeight = document.getElementById('triangleHeight');
    const triangleHeightNumber = triangleHeight.value;
    const height = parseFloat(triangleHeightNumber);
    console.log(height)

    // calculate tringle area
    const Area = .5 * base * height;
    console.log(`Area of the tringle is:`,Area);
    const output = document.getElementById('triangleArea');
    output.innerText = Area;
}