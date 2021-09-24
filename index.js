var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector("#check-btn");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var denominations = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      var amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided should atleast be equal to the bill amount"
      );
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amount) {
  for (let i = 0; i < denominations.length; i++) {
    var numberOfNotes = Math.trunc(amount / denominations[i]);
    amount = amount % denominations[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
