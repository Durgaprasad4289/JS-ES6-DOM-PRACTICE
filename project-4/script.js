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
