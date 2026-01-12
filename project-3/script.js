let time = document.getElementsByClassName("time")[0]

setInterval(() => {
    let t = new Date();
    return time.innerText = t.toLocaleTimeString();
}, 100);