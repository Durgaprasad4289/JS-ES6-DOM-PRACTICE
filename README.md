# Projects related to DOM

## 🔗 Project Links

🔗 [Project 1 – Color Box](https://durgaprasad4289.github.io/JS-ES6-DOM-PRACTICE/project-1/)
🔗 [Project 2 – BMI Calculator](https://durgaprasad4289.github.io/JS-ES6-DOM-PRACTICE/project-2/)
🔗 [Project 3 – Digital Clock](https://durgaprasad4289.github.io/JS-ES6-DOM-PRACTICE/project-3/)
🔗 [Project 4 – Guess the Number](https://durgaprasad4289.github.io/JS-ES6-DOM-PRACTICE/project-4/)


---

##  📌 Project 1 – Background Color Changer

```js
const box=document.querySelectorAll(".box");
box.forEach((ele)=>{
    ele.addEventListener("click",e=>{
        if(e.target.id=="yellow"){
            document.body.style.background="yellow";
        }
        else if(e.target.id=="blue"){
            document.body.style.background="blue";
        }
        else if(e.target.id=="red"){
            document.body.style.background="red";
        }
        else if(e.target.id=="violet"){
            document.body.style.background="#ad45f8";
        }
        else{
            document.body.style.background="#000";
            alert("Please Choose the Correct Color");
        }
    })
})
```
---
## 📌 Project 2 – BMI Calculator

```js
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
```
---
## 📌 Project 3 – Live Digital Clock
```js
let time = document.getElementsByClassName("time")[0]

setInterval(() => {
    let t = new Date();
    return time.innerText = t.toLocaleTimeString();
}, 100);
```
---
## 📌 Project 4 – Guess the Number Game

```js
let input=document.getElementById("guessInput");
let feedback=document.getElementById("feedback");
let restart=document.getElementById("restartGame");
let attempts_left=document.getElementById("attempts_left");
attempts_left.innerText=3;
document.getElementById("submitGuess").addEventListener('click',e=>{
    let guess=Math.floor(Math.random()*10);
    console.log(guess);
    if(attempts_left.innerText==1){
        feedback.style.display="flex"
        feedback.innerText="You Loose";
        restart.style.display='block'
    }
    if(guess==input.value && attempts_left.innerText>=1){
        feedback.style.display="flex";
        feedback.innerText="You Win";
        restart.style.display='block'
    }
    if(input.value>10){
        alert("Number Out of Range (10)");
        attempts_left.innerText-=1;
    }
    else if(input.value<0){
        alert("Negitive Numbers are not Allowed");
        attempts_left.innerText-=1;
    }
    else if(input.value<10 ){
        attempts_left.innerText-=1;
    }
})

restart.addEventListener('click', () => {
    feedback.style.display = "none";
    restart.style.display = "none";
    attempts_left.innerText = 3;
    input.value = "";
});
```
---
## ✨ Features
- Responsive and modern UI
- Clean and readable code
- Beginner-friendly folder structure
- Easy to customize and extend

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

---

## 📁 Project Structure
js-es6-dom-practise/
│
├── project-1/
├── project-2/
├── project-3/
├── project-4/
└── README.md
