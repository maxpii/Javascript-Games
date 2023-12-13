let body = document.querySelector('body');
let button = document.getElementById("button");
let arr = ["#1F3A3D","#F5D033","##6C6960","#C93C20","#308446"];

button.addEventListener("click",changeColor);

function changeColor() {
    let rand = Math.floor(Math.random() * arr.length);
    button.style.background = arr[rand];
    body.style.background = arr[rand];
}