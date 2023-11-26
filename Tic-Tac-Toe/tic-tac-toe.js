let buttons = document.querySelectorAll("button");
let turn = document.getElementById("turn");
let current_move = "x";
turn.innerHTML = `Current Turn: ${current_move.toUpperCase()}`;


let arr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

function changeCurrent() {
    if (current_move === "x") {
        current_move = "o";
    }
    else {
        current_move = "x";
    }
}

for(let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener("click",function() {
        buttons[i].innerHTML = current_move;
        changeCurrent();
    });
}
