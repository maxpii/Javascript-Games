const counter = document.getElementById("count");
const increaseButton = document.getElementById("inc");
const decreaseButton = document.getElementById("dec");
const resetButton = document.getElementById("reset");

let currentCount = parseInt(counter.innerHTML);

increaseButton.addEventListener("click", increment);
decreaseButton.addEventListener("click",decrement);
resetButton.addEventListener("click", reset);

function increment() {
    currentCount++;
    counter.innerHTML = currentCount.toString();
}
function decrement() {
    currentCount--;
    counter.innerHTML = currentCount.toString();
}
function reset() {
    currentCount = 0;
    counter.innerHTML = currentCount.toString();
}
