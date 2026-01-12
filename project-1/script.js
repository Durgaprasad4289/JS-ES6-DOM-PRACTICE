
//--------------------- PROJECT - 1 --------------------------------
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
