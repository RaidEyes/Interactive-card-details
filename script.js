const errorMessage = document.querySelectorAll(".error");

// Turn the user input name into the name on the card
const userNameInput = document.getElementById("card-name");
const userName = document.querySelector(".name-display");

userNameInput.addEventListener("input", () => {
  if (userNameInput.value === "") {
    userName.innerHTML = "JANE APPLESEED";
  } else {
    userName.style.textTransform = "uppercase";
    userName.innerHTML = userNameInput.value;
  }
});

// Get user input to the expiry date ===============================
const expiryDate = document.querySelector(".expiry-display");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcCode = document.getElementById("cvc");
const backCardTextEle = document.querySelector(".card-back-text");

// 1). Make sure user don't type more than 3 numbers

monthInput.addEventListener("keypress", (event) => {
  if (monthInput.value.length > 1) {
    event.preventDefault();
  }
});
yearInput.addEventListener("keypress", (event) => {
  if (yearInput.value.length > 1) {
    event.preventDefault();
  }
});

cvcCode.addEventListener("keypress", (event) => {
  if (cvcCode.value.length > 2) {
    event.preventDefault();
  }
});

cvcCode.addEventListener("input", (event) => {
  backCardTextEle.innerHTML = event.target.value;

  if (!event.target.value) {
    backCardTextEle.innerHTML = "000";
  }
});

// 2). Change the user input to the card detail

// 2a). Make an object and store data
const expiryObject = {
  month: "00",
  year: "00",
};

monthInput.addEventListener("input", () => {
  if (monthInput.value === "") {
    expiryObject.month = "00";
    expiryDate.innerHTML = `${expiryObject.month}/${expiryObject.year}`;
  } else {
    expiryObject.month = monthInput.value;
    expiryDate.innerHTML = `${expiryObject.month}/${expiryObject.year}`; // 2b). Change data here
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value === "") {
    expiryObject.year = "00";
    expiryDate.innerHTML = `${expiryObject.month}/${expiryObject.year}`;
  } else {
    expiryObject.year = yearInput.value;
    expiryDate.innerHTML = `${expiryObject.month}/${expiryObject.year}`; // 2b). Change data here
  }
});

// 3) Change credit card number, using object method
const creditDisplay = document.querySelector(".number-display");
const creditNumber = document.getElementById("card-number");
const creditArray = creditDisplay.innerHTML.split(" ");

creditNumber.addEventListener("input", () => {
  for (let i = 0; i < 4; i++) {
    if (creditNumber.value.length % 4 === 0) {
      creditArray[i] = creditNumber.value;
      console.log(creditArray);
    }
  }
});
