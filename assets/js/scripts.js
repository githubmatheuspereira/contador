var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumberWrapper = 0;

function increment() {
    if(currentNumberWrapper >= 10) {
        currentNumberWrapper = currentNumberWrapper;
    } else {
        currentNumberWrapper = currentNumberWrapper + 1;
        currentNumber.innerHTML = currentNumberWrapper;
    }
}

function decrement() {
    if(currentNumberWrapper <= 0) {
        currentNumberWrapper = currentNumberWrapper;
    } else {
        currentNumberWrapper = currentNumberWrapper - 1;
        currentNumber.innerHTML = currentNumberWrapper;
    }
}