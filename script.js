"use strict";

// .checkSquare will trigger when user hits the "Check Square!" button on the page.
document.querySelector(".checkSquare").addEventListener("click", function() {
    let squareNum = Number(document.querySelector(".squareNumber").value);
    let result = squareNum * squareNum;

    if (squareNum > 0) {
        document.querySelector(".printResult").textContent = `The square of ${squareNum} is = ${result}.`;
    } else {
        document.querySelector(".printResult").textContent = `Please enter a valid number.`;
    }
});

// .clearResult will clear the input field and result when the "Clear" button is activated.
document.querySelector(".clearResult").addEventListener("click", function() {
    let squareNumInput = document.querySelector(".squareNumber");
    let resultContainer = document.querySelector(".printResult");

    // Clear the input field and result container
    squareNumInput.value = "";
    resultContainer.textContent = "";

    // Disable the "Clear" button after clearing
    this.disabled = true;
});

// Enable the "Clear" button when the user starts typing in the input field
document.querySelector(".squareNumber").addEventListener("input", function() {
    const clearButton = document.querySelector(".clearResult");

    // Enable the "Clear" button if there is any value in the input field
    if (document.querySelector(".squareNumber").value) {
        clearButton.disabled = false;
    } else {
        clearButton.disabled = true;
    }
});

// Initial check: Disable the "Clear" button if the input field is empty
document.querySelector(".clearResult").disabled = true;