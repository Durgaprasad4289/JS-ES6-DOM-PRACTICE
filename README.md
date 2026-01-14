# PROJECTS ON JS -ES6 (according to my learning)

## 🔗 Project Links

🔗 [Project 1 – Color Box](https://username.github.io/repo-name/project-1/)

----

🔗 [Project 2 – BMI Calculator](https://username.github.io/repo-name/project-2/)

----

🔗 [Project 3 – Digital Clock](https://username.github.io/repo-name/project-3/)

----

🔗 [Project 4 – Guess the Number](https://username.github.io/repo-name/project-4/)

----

🔗 [Project 5 - Message Board](https://username.github.io/repo-name/project-5/)

----

🔗[Project 6 - Fetching Data from Local File](https://username.github.io/repo-name/project-6/)

----

🔗[Project 7 - Fetching Data from pokeAPI](https://username.github.io/repo-name/project-7/)

----
## 📌 DOM in JavaScript (Document Object Model)

-The DOM (Document Object Model) is a programming interface that -represents an HTML document as a tree structure.
-Using JavaScript, we can access, modify, add, or remove HTML elements dynamically.

-In simple words:
👉 DOM allows JavaScript to interact with HTML and CSS.

----

## 🫵🏻 ASYNC/AWAIT/PROMISES  and FETCH()

- Promise() = An object that manages asynchronous operations.
          - Wrap a Promise Object around {asynchronous code).
          - "I promise to return a value".
          - PENDING -> RESOLVED or REJECTED.
          - new Promise((resolve, reject) => {asynchronous code}).

- Async/Await() = Async = makes a function return a promise.
          -Await = makes an async function wait for a promise.
          -Allows you write asynchronous code in a synchronous manner.
          -Async doesn't have resolve or reject parameters.
          -Everything after Await is placed in an event queue.

-fetch()=funcion  used for making HTTP request to fetch resources.
          -(JSON style data,imgages,files).
          -Simplifies asynchronous data fetching in JavaScript and used for interacting with API's to retrive and send data aynchronously over the web.
          -fetching(url,{method:"GET (or) POST (or) PUT (or) DELETE"}) 
    
----

## 👉🏻 Js-Program Using " then " (little bit confusing over "awit")

```js

function walk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWalking=true;
            if(isWalking){
                resolve("Walking... 🚶🏻");
                return;
            }
            reject("Can't walk right now.");
        }, 1500);
    })
}

function eat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isEating=true;
            if(isEating){
                resolve("Eating... 🍽️");
                return;
            }
            reject("Can't eat right now.");
        }, 2000);
    })
}

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSleeping=true;
            if(isSleeping){
                resolve("Sleeping... 😴");
            }
            reject("Can't sleep right now.");
        }, 1000);
    })
}

walk().then((message)=>{
    console.log(message);
    return eat();
}).then((message)=>{
    console.log(message);
    return sleep();
}).then((message)=>{
    console.log(message);
}).catch((erroor)=>{
    console.log(erroor);
}) 

```

## 👉🏻 JS-Program Using " await " (more readble compared to "then")
```js
function walk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWalking = true;
            if (isWalking) {
                resolve("Walking... 🚶🏻");
                return;
            }
            reject("Can't walk right now.");
        }, 1500);
    })
}

function eat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isEating = true;
            if (isEating) {
                resolve("Eating... 🍽️");
                return;
            }
            reject("Can't eat right now.");
        }, 2000);
    })
}

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSleeping = true;
            if (isSleeping) {
                resolve("Sleeping... 😴");
            }
            reject("Can't sleep right now.");
        }, 1000);
    })
}

async function works() {
    try {
        const iswakled = await walk();
        console.log(iswakled);
        const iseaten = await eat();
        console.log(iseaten);
        const isslept = await sleep();
        console.log(isslept);
    }
    catch (error) {
        console.log(error);
    }
    console.log("All activities completed! ✅");
}

works();

```

## 📈 Fetching json file (relative)

```js
fetch("./people.json").then(res=>res.json())
.then(data=>data.forEach(element => {
    console.log(element.name);
}));


```
----

## 💁🏻 Fetching Pokemon Data From PokeAPI

```js

const image = document.getElementById('pokemonImage');
const button = document.getElementById('fetchButton');

button.addEventListener('click', async () => {
    const input = document.getElementById('textInput').value.toLowerCase().trim();

    if (!input) {
        alert("Please enter a Pokémon name");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        image.src = data.sprites.front_default;
        image.style.display = "block";

    } catch (err) {
        alert(err.message);
    }
});


```
----

## 🍪 Cookies Demo

```js
    document.cookie = "sessionToken=durgaprasad; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/";
    console.log("Cookies set:", document.cookie);   
```

----

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
----

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
## 📌 Project 5 – Message Board
```js
function firstBtn(){
    setTimeout(()=>{
        alert("Button-1 Clicked and showing after 1 seconds")
    }, 1000)
}

function secBtn(){
    setTimeout(()=>{
        alert("Button-2 Clicked and showing after 2 seconds")
    }, 2000)
}

function thirdBtn(){
    setTimeout(()=>{
        alert("Button-3 Clicked and showing after 3 seconds")
    }, 3000)
}

```
## 📌 Project-6 Fetchind Data From Local File
```js
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  fetch("./person.json")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Age:</b> ${data.age}</p>
        <p><b>Hobbies:</b> ${data.hobbies.join(", ")}</p>
      `;
    })
    .catch(error => {
      output.innerHTML = "Error loading data";
      console.log(error);
    });
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
Js Es6
  ├──project-(number)/
    ├── index.html
    ├── style.css
    └── script.js
  ├── README.md
