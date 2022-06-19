// switch-case tasks
//1
function printMessageByInput() {
  let userNumber = +document.getElementById("number_input").value;
  switch (userNumber) {
    case 3:
      console.log("Hello");
      break;
    case 5:
      console.log("Goodbye");
      break;
    case 7:
      console.log("Thank You");
      break;
    default:
      console.log("There is no corresponding message ");
      break;
  }
}
//2
function printNameByInput() {
  let userName = document.getElementById("name_input").value;
  switch (userName) {
    case "Jacob":
      document.getElementById("print_h1").innerText = userName;
      break;
    case "nathan":
      document.getElementById("print_h1").innerText = userName.toUpperCase();
      break;
    case "DALYA":
      document.getElementById("print_h1").innerText = userName.toLowerCase();
      break;
    default:
      document.getElementById("print_h1").innerText =
        "There is no corresponding message ";
      break;
  }
}
//3
function getAdd(num1, num2) {
  return num1 + num2;
}
function getSub(num1, num2) {
  return num1 - num2;
}
function getMul(num1, num2) {
  return num1 + num2;
}
function getDiv(num1, num2) {
  return num1 / num2;
}
function printCalculation() {
  let calNum1 = +document.getElementById("calnum1_input").value;
  let calNum2 = +document.getElementById("calnum2_input").value;
  let userOperator = document.getElementById("operator_input").value;
  switch (userOperator) {
    case "+":
      document.getElementById("result_h1").innerText = getAdd(calNum1, calNum2);
      break;
    case "-":
      document.getElementById("result_h1").innerText = getSub(calNum1, calNum2);
      break;
    case "*":
      document.getElementById("result_h1").innerText = getMul(calNum1, calNum2);
      break;
    case "/":
      document.getElementById("result_h1").innerText = getDiv(calNum1, calNum2);
      break;
    default:
      alert("Invalid Operator");
      document.getElementById("operator_input").value = "";
  }
}
//4
function printTextByUserDetail() {
  let userText = document.createElement("h" + select_size.value);
  userText.style.setProperty("color", text_color.value);
  userText.innerText = text_input.value;
  document.body.appendChild(userText);
}
//5
function createUserElement() {
  document.getElementById("element_create").style.backgroundColor =
    document.getElementById("color_input").value;
  document.getElementById("element_create").style.display = "block";
  let position = document.getElementById("positon_select").value;
  switch (position) {
    case "Top-Left":
      setElementPositionAbsolute("top", "left");
      break;
    case "Top-Right":
      setElementPositionAbsolute("top", "right");
      break;
    case "Bottom-Left":
      setElementPositionAbsolute("bottom", "left");
      break;
    case "Buttom-Right":
      setElementPositionAbsolute("bottom", "right");
      break;
    default:
      break;
  }
}
function setElementPositionAbsolute(posX, posY) {
  document.getElementById("element_create").style.removeProperty("top");
  document.getElementById("element_create").style.removeProperty("left");
  document.getElementById("element_create").style.removeProperty("bottom");
  document.getElementById("element_create").style.removeProperty("right");
  document.getElementById("element_create").style.setProperty(posX, "0");
  document.getElementById("element_create").style.setProperty(posY, "0");
}
