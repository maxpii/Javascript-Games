let buttons = document.querySelectorAll("button");
let turn = document.getElementById("turn-text");
let current_move = "x";
turn.innerHTML = `Current Turn: ${current_move.toUpperCase()}`;
let gameEnded = false;
let gameWinner;

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
    buttons[i].addEventListener("click",() => {
        if (!gameEnded) {
        
        var signal = changeArray(buttons[i]);
        check();
        if (signal) {
            buttons[i].innerHTML = current_move;
            changeCurrent();
        }
        turn.innerHTML = `Current Turn: ${current_move.toUpperCase()}`;
        }
        if (gameEnded) {
            if (isFull()) {
                turn.innerHTML = "Tie";
            }
            else {
                turn.innerHTML = `Winner: ${gameWinner.toUpperCase()}`;
            }
        }

       
    });
}

function changeArray(button) {
    var index = button.id - 1;
    if (arr[Math.floor(index/3)][index%3] === 0) {
    arr[Math.floor(index/3)][index%3] = current_move;
    return true;
    }
    else {
        return false;
    }
}
function isFull() {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr[i].length; j ++) {
            if (arr[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

// function check() {
//     if (arr[0][0] === "x" && arr[0][1] === "x" && arr[0][2] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[1][0] === "x" && arr[1][1] === "x" && arr[1][2] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[2][0] === "x" && arr[2][1] === "x" && arr[2][2] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[0][0] === "x" && arr[1][0] === "x" && arr[2][0] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[0][1] === "x" && arr[1][1] === "x" && arr[2][1] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[0][2] === "x" && arr[1][2] === "x" && arr[2][2] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[0][0] === "x" && arr[1][1] === "x" && arr[2][2] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
//     else if (arr[0][2] === "x" && arr[1][1] === "x" && arr[2][0] === "x") {
//         gameEnded = true;
//         gameWinner = "x";
//     }
   
// }

function check() {
    if (arr[0][0] === current_move && arr[0][1] === current_move && arr[0][2] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[1][0] === current_move && arr[1][1] === current_move && arr[1][2] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[2][0] === current_move && arr[2][1] === current_move && arr[2][2] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[0][0] === current_move && arr[1][0] === current_move && arr[2][0] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[0][1] === current_move && arr[1][1] === current_move && arr[2][1] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[0][2] === current_move && arr[1][2] === current_move && arr[2][2] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[0][0] === current_move && arr[1][1] === current_move && arr[2][2] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (arr[0][2] === current_move && arr[1][1] === current_move && arr[2][0] === current_move) {
        gameEnded = true;
        gameWinner = current_move;
    }
    else if (isFull()) {
        gameEnded = true;
    }
    

   
}




