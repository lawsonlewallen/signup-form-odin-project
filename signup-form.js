
//displays or hides password requirements as pw input field is focused on 
const passwordInputField = document.getElementById('pw');

passwordInputField.onfocus = function() {
    document.getElementById("pw-message").style.display = "block";
}
passwordInputField.onblur = function() {
    document.getElementById("pw-message").style.display = "none";
}

/*each var matches a line of text in our pw message, we change the class of it to
pw-valid once the requirements are met by the user*/
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

passwordInputField.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInputField.value.match(lowerCaseLetters)) {
      letter.classList.remove("pw-invalid");
      letter.classList.add("pw-valid");
    } else {
      letter.classList.remove("pw-valid");
      letter.classList.add("pw-invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInputField.value.match(upperCaseLetters)) {
      capital.classList.remove("pw-invalid");
      capital.classList.add("pw-valid");
    } else {
      capital.classList.remove("pw-valid");
      capital.classList.add("pw-invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(passwordInputField.value.match(numbers)) {
      number.classList.remove("pw-invalid");
      number.classList.add("pw-valid");
    } else {
      number.classList.remove("pw-valid");
      number.classList.add("pw-invalid");
    }
  
    // Validate length
    if(passwordInputField.value.length >= 8) {
      length.classList.remove("pw-invalid");
      length.classList.add("pw-valid");
    } else {
      length.classList.remove("pw-valid");
      length.classList.add("pw-invalid");
    }
  }

  //check if confirm password matches password field
  const confirmPasswordField = document.getElementById("confirmpw");

  confirmPasswordField.onkeyup = function() {
    if (passwordInputField.value === confirmPasswordField.value){
        confirmPasswordField.classList.remove('confirm-invalid');
        confirmPasswordField.classList.add('confirm-valid');
    } else {
        confirmPasswordField.classList.remove('confirm-valid');
        confirmPasswordField.classList.add('confirm-invalid');
    }
    console.log(passwordInputField.value);
    console.log(confirmPasswordField.value);
  }