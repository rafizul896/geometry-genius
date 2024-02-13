function parallelogramBtn(){
    // get parallelogram width value:
    const parallelogramWidth = document.getElementById('parallelogramWidth');
    const parallelogramWidthNumber = parallelogramWidth.value;
    const width = parseFloat(parallelogramWidthNumber);
    // get paralelogram height value:
    const parallelogramHeight = document.getElementById('parallelogramHeight');
    const parallelogramHeightNumber = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightNumber);
    // get paralelogram Area:
    const paralelogramArea = width * height;
    const paralelogramAreaAdd = document.getElementById('parallelogramArea');
    paralelogramAreaAdd.innerText = paralelogramArea;
}