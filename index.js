var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector("#check-btn");
var errorMessage = document.querySelector("#error-message");

function validateBillAndCashAmount() {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven >= billAmount.value) {
      var amountToBeReturned = cashGiven.value - billAmount.value;
    } else {
      showMessage(
        "The cash provided should atleast be equal to the bill amount"
      );
    }
  } else {
    errorMessage.style.display = "block";
    showMessage("Invalid Bill Amount");
  }
}

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage;
}

checkBtn.addEventListener("click", validateBillAndCashAmount());
