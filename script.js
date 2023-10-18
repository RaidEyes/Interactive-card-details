const errorMessage = document.querySelectorAll(".error");
const userInput = document.querySelectorAll(".card-input");

userInput.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      console.log(input.validity.valid);
      errorMessage.forEach((message) => {
        message.innerHTML = "Wrong type";
      });
    } else {
      errorMessage.forEach((message) => {
        message.innerHTML = "";
      });
      console.log(input.validity.valid);
    }
  });
});
