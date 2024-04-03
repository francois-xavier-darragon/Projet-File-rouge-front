const firstNameInput = document.getElementById("firstNameInput");
const btnValidate = document.getElementById('btn-validate'); 
const inputs = document.getElementsByTagName("input");
const inputMail = document.getElementById('emailInput');

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

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value
  
    if(mailUser.match(emailRegex)) {
        addIsvalid(input)
    } else {
        addIsInvalid(input)
    }
}

function validateRequired(inputs) {

  const results = [];

  Array.from(inputs).forEach(input => {
  
      if (input.value != "") {
        addIsvalid(input)
          if(input == inputMail) {
            validateMail(input)
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