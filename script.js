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
        let cursorPos = inputField.selectionStart; 
        if (cursorPos > 0) {
          string = string.slice(0, cursorPos - 1) + string.slice(cursorPos);
          inputField.value = string;
          inputField.setSelectionRange(cursorPos - 1, cursorPos - 1); 
        }
      } else if (e.target.innerHTML == "%") {
        if (string) {
          string = (eval(string) / 100).toString();
          inputField.value = string;
        }
      } else {
        if (string.length < 22) {
          let cursorPos = inputField.selectionStart;
          string = string.slice(0, cursorPos) + e.target.innerHTML + string.slice(cursorPos); 
          inputField.value = string; 
          inputField.setSelectionRange(cursorPos + 1, cursorPos + 1); 
        }
      }
      inputField.scrollLeft = inputField.scrollWidth; 

    } catch (error) {
      string = "Error";
      inputField.value = error.message;
    }
  });
});
