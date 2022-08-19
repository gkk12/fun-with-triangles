const inputs = document.querySelectorAll(".user-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputText = document.querySelector("#output");

hypotenuseButton.addEventListener('click', calculateHypotenuse);

function calculateSumOfSquares(a,b){
    const sumOfSquares = a * a + b * b;
    return sumOfSquares
}

function calculateHypotenuse(){
    
    const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    //console.log(squaredValue);
    outputText.innerText = "The length of the hypotenuse is : " +  lengthOfHypotenuse;
}
