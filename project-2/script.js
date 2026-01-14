let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");

document.getElementById("calculateBtn").addEventListener("click", () => {

    if (weight.value === "" || height.value === "") {
        result.innerText = "Please enter values";
        return;
    }

    let bmi = weight.value / Math.pow(height.value / 100, 2);
    result.innerText = bmi.toFixed(2);
});

document.getElementById("reset").addEventListener("click", () => {
    weight.value = "";
    height.value = "";
    result.innerText = "RESULT";
});
