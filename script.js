/**
 * The function allows users to input numbers and basic arithmetic operators using their keyboard and
 * displays them on the screen.
 * @param val - The value to be displayed on the screen. It is passed as an argument to the `dis`
 * function and added to the text content of the `text` element.
 */
const text = document.querySelector(".screen-text");
let screen = "";
let screenActual = "";

function dis(val) {
  if (val == "=") {
    solve();
  } else {
    screen += val;
    text.textContent = screen;
  }

  if (val == "x") {
    screenActual += "*";
  } else if (val == "÷") {
    screenActual += "/";
  } else {
    screenActual += val;
  }
}

document.addEventListener("keydown", function (event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "." ||
    event.key == "÷" ||
    event.key == "x"
  ) {
    text.textContent += event.key;

    if (event.key == "x") {
      screenActual += "*";
    } else if (event.key == "÷") {
      screenActual += "/";
    } else {
      screenActual += event.key;
    }
  } else if (event.key == "/") {
    text.textContent += "÷";
    screenActual += "/";
  } else if (event.key == "*") {
    text.textContent += "x";
    screenActual += "*";
  } else if (event.key == "c" || event.key == "Escape") {
    clr();
  }
});

function solve() {
  text.textContent = eval(screenActual);
}

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    solve();
  }
});

function clr() {
  screen = "";
  screenActual = "";
  text.textContent = "";
}
