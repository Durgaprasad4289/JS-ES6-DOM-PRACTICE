let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let result = document.getElementById("result");

document.getElementById("calculateBtn").addEventListener("click", () => {
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        result.innerText = "Please enter valid values";
        return;
    }

    let bmi = weight / (height * height);
    result.innerText = bmi.toFixed(2);
});

document.getElementById("reset").addEventListener("click", () => {
    weightInput.value = "";
    heightInput.value = "";
    result.innerText = "RESULT";
});
