let body = document.querySelector('body');
let button = document.getElementById("button");
let arr = ["#1F3A3D","#F5D033","#6C6960","#C93C20"
,"#308446","#027343","#A0359B","#ECB070","#023101",
"#01484A","#01484A","#4C4C33","#5F0B0B","#6F117E",
"#EE2F1C","#1CEE82","#420A17","#84A305","#001C61","#3B453E"];

button.addEventListener("click",changeColor);
let rand;
let currentColor;
function changeColor() {
    rand = Math.floor(Math.random() * arr.length);
    while(arr[rand] == currentColor) rand = Math.floor(Math.random() * arr.length);;

    currentColor = arr[rand]; 
    button.style.background = currentColor;
    body.style.background = currentColor;

}