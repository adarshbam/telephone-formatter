const phoneNumber = document.querySelector("#phone-number");
let formatted = false;

phoneNumber.addEventListener("keydown", (e) => {
  if (!/[0-9]/.test(e.key) && !(e.key == "Backspace")) {
    e.preventDefault(); // block non-numeric keys
  }
});

phoneNumber.addEventListener("input", () => {
  let number = phoneNumber.value;

  number.includes("+") ? (formatted = true) : (formatted = false);
  console.log(number, formatted);
  if (number.length >= 3 && formatted == false) {
    number =
      "+(" + number.slice(0, 3) + ") - " + number.slice(3, number.length);
  } else if (formatted == true && number.length <= 9) {
    number = number.slice(2, 5);
  }
  console.log(number);
  phoneNumber.value = number;
});
