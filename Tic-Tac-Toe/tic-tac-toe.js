let buttons = document.querySelectorAll("button");
console.log(buttons);
let current_move = "x";
buttons[0].onclick(randomFunction);

function randomFunction() {
    for(let i = 0; i < buttons.length; i ++) {
        buttons[i].innerHTML = "Hello";
    }
}
