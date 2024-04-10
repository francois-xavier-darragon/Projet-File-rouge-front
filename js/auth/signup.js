const btnValidate = document.getElementById('btn-validate'); 
const inputs = document.getElementsByTagName("input");
const inputMail = document.getElementById('emailInput');
const inputPassWord = document.getElementById('passWordInput');
const validatePassWordInput = document.getElementById('validatePassWordInput');

Array.from(inputs).forEach(input => {
    input.addEventListener("keyup", validateForm);
});

function validateForm() {

const checkInput = validateRequired(inputs); 

  Array.from(checkInput).forEach(input => {
    if(input) {
      btnValidate.disabled = false;
    } else {
      btnValidate.disabled = true;
    }
  });
}

function validate(input, results){
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const mailUser = input.value
    const passWordUser = input.value
    const validatePassWordInput = input.value 

    if(mailUser.match(emailRegex)) {
        addIsvalid(input)
        results.push(true)
    } else if(passWordUser.match(passwordRegex)) {
        addIsvalid(input)
        results.push(true)
    } else if(passWordUser === validatePassWordInput && validatePassWordInput.match(passwordRegex)) {
        addIsvalid(input)
        results.push(true)
    } else {
        addIsInvalid(input)
        results.push(false);
    }
}

function validateRequired(inputs) {

  const results = [];

  Array.from(inputs).forEach(input => {
      if (input.value != "" ) {
          if (input != inputMail && input != inputPassWord && input != validatePassWordInput) {
            addIsvalid(input)
            results.push(true);
          } else {
            validate(input, results)
          }
      } else {
        addIsInvalid(input)
        results.push(false);
      }
  });
  return results;
}

function addIsvalid(input){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
}

function addIsInvalid(input){
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
}