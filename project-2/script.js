// ------------------------ PROJECT - 2 --------------------------------

let weight=document.getElementById("weight");
let height=document.getElementById("height");
let result=document.getElementById("result");
document.getElementById("calculateBtn").addEventListener("click",e=>{
    let bmi=weight.value/Math.pow(height.value,2);
    result.innerText=bmi.toFixed(2);
    
});

document.getElementById("reset").addEventListener('click',e=>{
    weight.value='';
    height.value='';
    result.innerText='RESULT';
})