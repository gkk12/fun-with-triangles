const inputs = document.querySelectorAll(".user-input");
const areaButton = document.querySelector("#area-btn");
const outputText = document.querySelector("#output");

areaButton.addEventListener('click', calculateArea);

function calculateArea(){
    
    const area = (Number(inputs[0].value) * Number(inputs[1].value))/2;
    outputText.innerText = `The area of the triangle is : ${Number.parseFloat(area).toFixed(2)} cm²`;
}
