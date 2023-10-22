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

// 2). Change the user input to the card detail ===========================

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

// 3) Change credit card number, using array method ===========================
const creditDisplay = document.querySelector(".number-display");
const creditNumber = document.getElementById("card-number");

// 3a) Prevent further typing
creditNumber.addEventListener("keypress", (event) => {
  const k = creditNumber.value.length;
  if (k > 15) event.preventDefault();
});

// 3b) Change the number display

// Make an array for 16 digits on the display card
let creditArray = [
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
];

creditNumber.addEventListener("input", (event) => {
  const k = event.target.value.slice(-1).toString();
  const m = event.target.value.length;
  creditArray.splice(m - 1, 1, k); // Replace user input into the Array
  if (!event.data) creditArray.splice(m, 1, "0"); // If the user delete, 0 is the default value

  // Take out each 4 numbers and add a space for them for final display
  const first4Num = creditArray.slice(0, 4).join(``);
  const second4Num = creditArray.slice(4, 8).join(``);
  const third4Num = creditArray.slice(8, 12).join(``);
  const fourth4Num = creditArray.slice(12, 16).join(``);

  creditDisplay.innerHTML = `${first4Num} ${second4Num} ${third4Num} ${fourth4Num}`;
  console.log(creditArray.toString());

  //todo Create user input space after 4 inputs
});

//todo1 Make complete message appear after inputing all the information
//todo2 Store user input data to make sure they have already input their information

const btnSubmitForm = document.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardFormEle = document.querySelector(".card-form");
  cardFormEle.style.display = "none";

  const submitSucessEle = document.querySelector(".wrap__submitsucess");
  submitSucessEle.classList.remove("d-none");
  submitSucessEle.classList.add("wrap__submitsucess");
});
