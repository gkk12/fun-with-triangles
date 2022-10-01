const inputs = document.querySelectorAll(".user-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputText = document.querySelector("#output");

hypotenuseButton.addEventListener('click', calculateHypotenuse);

function calculateSumOfSquares(a,b){
    const sumOfSquares = a * a + b * b;
    return sumOfSquares
}

function calculateHypotenuse(){
    const firstSide = Number(inputs[0].value);
    const secondSide = Number(inputs[1].value);
    if(!firstSide || !secondSide){
        outputText.innerText = "Please fill in all the fields"
    }
    else if(firstSide < 0 || secondSide <0)
    {
        outputText.innerText = "Please enter positive values"
    }
    else{
        const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        //console.log(squaredValue);
        outputText.innerText = `The length of your hypotenuse is ${Number.parseFloat(lengthOfHypotenuse).toFixed(2)}`;
    }
   
}
