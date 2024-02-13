function calculateArea(){
    const dOne = getInputValueByID('rhombusDOne');
    const dTwo = getInputValueByID('rhombusTwo');
    const Area = .5 * dOne * dTwo;
    const result = document.getElementById('rhombusArea');
    result.innerText = Area;
};

function getInputValueByID(any){
    const inputField = document.getElementById(any);
    const inputFieldNumber = inputField.value;
    const inputOneNumber = parseInt(inputFieldNumber);
    return inputOneNumber;
};