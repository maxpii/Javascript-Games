let master_string = "";
let signs = "+-*/%=";
let current_index = 0;
let cache = "";
let current_sign = "";
let first_num = 0;

// heading 
let heading = document.querySelector('#heading');

// big div
let calculator = document.querySelector('#calculator');

// screen, paragraph
let screen = document.querySelector('#screen');

// all buttons
let clear = document.querySelector("#c");
clear.addEventListener("click", () => {
    master_string += clear.innerHTML;
    doStuff();
    //console.log(master_string);
});

let modulo = document.querySelector("#modulo");
modulo.addEventListener("click", () => {
    master_string += modulo.innerHTML;
    doStuff();
    //console.log(master_string);
});

let division = document.querySelector("#division");
division.addEventListener("click", () => {
    master_string += division.innerHTML;
    doStuff();
    //console.log(master_string);
});



let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    master_string += seven.innerHTML;
    doStuff();
    //console.log(master_string);
});

let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    master_string += eight.innerHTML;
    doStuff();
    //console.log(master_string);
});

let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    master_string += nine.innerHTML;
    doStuff();
    //console.log(master_string);
});

let multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
    master_string += multiply.innerHTML;
    doStuff();
    //console.log(master_string);
});

let four = document.querySelector("#four");
four.addEventListener("click", () => {
    master_string += four.innerHTML;
    doStuff();
    //console.log(master_string);
});

let five = document.querySelector("#five");
five.addEventListener("click", () => {
    master_string += five.innerHTML;
    doStuff();
    //console.log(master_string);
});

let six = document.querySelector("#six");
six.addEventListener("click", () => {
    master_string += six.innerHTML;
    doStuff();
    //console.log(master_string);
});

let minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    master_string += minus.innerHTML;
    doStuff();
   //console.log(master_string);
});

let one = document.querySelector("#one");
one.addEventListener("click", () => {
    master_string += one.innerHTML;
    doStuff();
    //console.log(master_string);
});

let two = document.querySelector("#two");
two.addEventListener("click", () => {
    master_string += two.innerHTML;
    doStuff();
    //console.log(master_string);
});

let three = document.querySelector("#three");
three.addEventListener("click", () => {
    master_string += three.innerHTML;
    doStuff();
    //console.log(master_string);
});

let plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    master_string += plus.innerHTML;
    doStuff();
    //console.log(master_string);
});

let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    master_string += zero.innerHTML;
    doStuff();
    //console.log(master_string);
});

let decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    master_string += decimal.innerHTML;
    doStuff();
    //console.log(master_string);
});

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    master_string += equals.innerHTML;
    doStuff();
    //console.log(master_string);
});

// that was exhaustive

function doStuff () {
    while (current_index < master_string.length) {
        var current  = master_string.charAt(current_index);

        if (current === "C") {  
            cache = "";
            screen.innerHTML = "0";
        }
        else if (signs.includes(current) === false) {
            cache = cache + current
            screen.innerHTML = cache;
        }
        else if (signs.includes(current)) {
            current_sign = current;
            first_num = parseInt(cache);
            cache = "";
            screen.innerHTML = "0";
        }
        current_index ++; 
        
    }
}
