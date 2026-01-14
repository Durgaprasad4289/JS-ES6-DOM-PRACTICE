let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let result = document.getElementById("result");

document.getElementById("calculateBtn").addEventListener("click", () => {

    if (weight.value === "" || height.value === "") {
        result.innerText = "Please enter values";
        return;
    }

    let bmi = weight/height*height ;
    result.innerText = bmi.toFixed(2);
});

document.getElementById("reset").addEventListener("click", () => {
    weight.value = "";
    height.value = "";
    result.innerText = "RESULT";
});
