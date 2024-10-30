"use strict";

// .checkSquare will trigger when user hit "Check Square!" button on the page.

document.querySelector(".checkSquare").addEventListener("click", function(){
let squareNum = Number(document.querySelector(".squareNumber").value);
let result = squareNum * squareNum;
if (squareNum > 0) {
    document.querySelector(".printResult").textContent = `The square of ${squareNum} is = ${result}.`;
}
else{
    document.querySelector(".printResult").textContent = `Please enter a valid number.`;
}
});