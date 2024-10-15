let string = "";
let buttons = document.querySelectorAll(".button");
const inputField = document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = string.replace("x", "*"); 
        let result = eval(string);
        if (result === Infinity || isNaN(result)) {
          throw new Error("Unsupported Operation");
        }
        string = result.toString(); 
        inputField.value = string;
      } else if (e.target.innerHTML == "C") {
        string = "";
        inputField.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        inputField.value = string;
      } else if (e.target.innerHTML == "%") {
        if (string) {
          string = (eval(string) / 100).toString();
          inputField.value = string;
        }
      } else {
        if (string.length < 22) {
          string = string + e.target.innerHTML;
          inputField.value = string;
        }
      }
      inputField.scrollLeft = inputField.scrollWidth; 

    } catch (error) {
      string = "Error";
      inputField.value = error.message;
    }
  });
});
