let scoreEl = document.getElementById("score");
let scoreGel = document.getElementById("scoreg");
let count = 0
let countg = 0
function masuno(){
    count += 1
    scoreEl.innerText = count;
}
function masdos(){
    count += 2
    scoreEl.innerText = count;
}
function mastres(){
    count += 3
    scoreEl.innerText = count;
}
function masunog(){
    countg += 1
    scoreGel.innerText = countg;
}
function masdosg(){
    countg += 2
    scoreGel.innerText = countg;
}
function mastresg(){
    countg += 3
    scoreGel.innerText = countg;
}  
function reset(){
    count = 0
    countg = 0
    scoreEl.textContent = "0"
    scoreGel.textContent = "0"
}
