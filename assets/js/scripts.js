
var minus = document.getElementById("minus")
var plus = document.getElementById("plus")
var reset = document.getElementById("reset")
currentNumberWrapper = document.getElementById("currentNumber");
currentNumber = 0;
minus.addEventListener("click", function() {
    if (currentNumber > -10) {
        currentNumber--;
        if (currentNumber < 0) {
            currentNumberWrapper.style.color = "tomato"
        }else if (currentNumber == 0 ) {
            currentNumberWrapper.style.color = "black"
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
});
plus.addEventListener("click", function() {
    if (currentNumber < 10) {
        currentNumber++;
        if (currentNumber > 0) {
            currentNumberWrapper.style.color = "rgb(95, 93, 223)"
        }else if (currentNumber == 0 ) {
            currentNumberWrapper.style.color = "black"
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
});
reset.addEventListener("click", function() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    currentNumberWrapper.style.color = "black"
});
