const angles = document.querySelectorAll(".user-input");
const checkIfTriangle = document.querySelector("#is-triangle-check");
const outputText = document.querySelector("#output");

function isTriangle() {

    const firstAngle = Number(angles[0].value);
    const secondAngle = Number(angles[1].value);
    const thirdAngle = Number(angles[2].value);
    if(!firstAngle || !secondAngle || !thirdAngle){
        outputText.innerText = "Please fill in all the fields"
    }
    else if(firstAngle < 0 || secondAngle <0 || thirdAngle < 0)
    {
        outputText.innerText = "Please enter positive values"
    }
    else {
        const sumOfAngles = calculateSumOfAngles(firstAngle, secondAngle, thirdAngle);
        if (sumOfAngles == 180) {
            outputText.innerText = "The given angles form a triangle 🚀"
        } else {
            outputText.innerText = "The given angles do not form a triangle 😪"
        }
    }
    
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


checkIfTriangle.addEventListener('click', isTriangle)