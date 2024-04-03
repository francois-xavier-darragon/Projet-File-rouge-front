const btnValidate = document.getElementById('btn-validate'); 
const inputs = document.getElementsByTagName("input");
const inputMail = document.getElementById('emailInput');
const inputPassWord = document.getElementById('passWordInput');

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

function validate(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const mailUser = input.value
    const passWordUser = input.value
  
    if(mailUser.match(emailRegex) && passWordUser.match(passwordRegex)) {
        addIsvalid(input)
    } else {
        addIsInvalid(input)
    }
}

function validateRequired(inputs) {
console.log(inputPassWord)
  const results = [];

  Array.from(inputs).forEach(input => {
  
      if (input.value != "") {
        addIsvalid(input)
        //Todo revoir le inputPassWord
          if(input == inputMail && input == inputPassWord) {
            validate(input)
          }
        results.push(true);
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