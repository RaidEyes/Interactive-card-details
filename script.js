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

//* Get user input to the expiry date ===============================
const expiryDate = document.querySelector(".expiry-display");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcCode = document.getElementById("cvc");
const backCardTextEle = document.querySelector(".card-back-text");

//* 1). Make sure user don't type more than numbers allowed
// !Keypress is depricated, do not use, instead I use inputmode ="numeric" and maxlength="2"
// !inputmode ="numeric" will open a user's number typing on their phone screen
// monthInput.addEventListener("keypress", (event) => {
//   if (monthInput.value.length > 1) {
//     event.preventDefault();
//   }
// });
// yearInput.addEventListener("keypress", (event) => {
//   if (yearInput.value.length > 1) {
//     event.preventDefault();
//   }
// });

// cvcCode.addEventListener("keypress", (event) => {
//   if (cvcCode.value.length > 2) {
//     event.preventDefault();
//   }
// });

cvcCode.addEventListener("input", (event) => {
  backCardTextEle.innerHTML = event.target.value;
  if (!event.target.value) {
    backCardTextEle.innerHTML = "000";
  }
});

//* 2). Change the user input to the card detail ===========================

// 2a). Make an object and store data
const expiryObject = {
  month: "00",
  year: "00",
};

monthInput.addEventListener("input", (event) => {
  expiryObject.month = event.target.value;
  if (!event.target.value) expiryObject.month = "00";
  expiryDate.innerHTML = `${expiryObject.month}/${expiryObject.year}`;
});

yearInput.addEventListener("input", (event) => {
  expiryObject.year = event.target.value;
  if (!event.target.value) expiryObject.year = "00";
  expiryDate.innerHTML = `${expiryObject.month}/${expiryObject.year}`;
});

//* 3) Change credit card number, using array method ===========================
const creditDisplay = document.querySelector(".number-display");
const creditNumber = document.getElementById("card-number");

//* 3a) Prevent further typing
//! No need because inputmode + maxlength resolve this problem

//* 3b) Change the number display
// Make an array for 16 digits on the display card
let creditArray = Array(16).fill(0);

creditNumber.addEventListener("input", (event) => {
  const inputValue = event.target.value.slice(-1);
  const inputLength = event.target.value.length;

  creditArray.splice(inputLength - 1, 1, inputValue); // Replace user input into the Array
  if (!event.data) creditArray.splice(inputLength, 1, 0); // If the user delete, 0 is the default value
  if (inputLength === 0) creditArray = Array(16).fill(0); // When deleting all digits, array bacinputValue to original

  // Take out each 4 numbers and add a space for them for final display
  const first4Num = creditArray.slice(0, 4).join(``);
  const second4Num = creditArray.slice(4, 8).join(``);
  const third4Num = creditArray.slice(8, 12).join(``);
  const fourth4Num = creditArray.slice(12, 16).join(``);

  creditDisplay.innerHTML = `${first4Num} ${second4Num} ${third4Num} ${fourth4Num}`;
});

//* Show Error Message for all input
const allInputField = document.querySelectorAll("input");
//  Make a loop for all input field
allInputField.forEach((input) => {
  const newErrorMessage = document.createElement("span"); // Create a span
  newErrorMessage.classList.add("error"); // Style the span
  input.after(newErrorMessage); // put the span under input box

  // Each input will have an event listener
  input.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    let regEx = /^[0-9]+$/;
    if (input.id === "card-name") regEx = /^[a-zA-Z]+$/;
    newErrorMessage.innerHTML = regEx.test(inputValue) ? "" : "Invalid format";
  });
});
//todo2 Store user input data to make sure they have already input their information

//todo1 Make complete message appear after inputing all the information
const btnSubmitForm = document.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardFormEle = document.querySelector(".card-form");
  cardFormEle.style.display = "none";

  const submitSucessEle = document.querySelector(".wrap__submitsucess");
  submitSucessEle.classList.remove("d-none");
  submitSucessEle.classList.add("wrap__submitsucess");
});

//todo4 Create user input space after 4 inputs
