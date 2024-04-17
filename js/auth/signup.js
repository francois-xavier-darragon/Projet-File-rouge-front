const btnValidate = document.getElementById("btn-validate");
const inputs = document.getElementsByTagName("input");
const inputMail = document.getElementById("emailInput");
const inputPassWord = document.getElementById("passWordInput");
const validatePassWordInput = document.getElementById("validatePassWordInput");
const formRegister = document.getElementById("formRegister");

Array.from(inputs).forEach((input) => {
  input.addEventListener("keyup", validateForm);
});

btnValidate.addEventListener("click", userRegister);

function validateForm() {
  const checkInput = validateRequired(inputs);

  Array.from(checkInput).forEach((input) => {
    if (input) {
      btnValidate.disabled = false;
    } else {
      btnValidate.disabled = true;
    }
  });
}

function validate(input, results) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const mailUser = input.value;
  const passWordUser = input.value;
  const validatePassWordInput = input.value;

  if (mailUser.match(emailRegex)) {
    addIsvalid(input);
    results.push(true);
  } else if (passWordUser.match(passwordRegex)) {
    addIsvalid(input);
    results.push(true);
  } else if (
    passWordUser === validatePassWordInput &&
    validatePassWordInput.match(passwordRegex)
  ) {
    addIsvalid(input);
    results.push(true);
  } else {
    addIsInvalid(input);
    results.push(false);
  }
}

function validateRequired(inputs) {
  const results = [];

  Array.from(inputs).forEach((input) => {
    if (input.value != "") {
      if (
        input != inputMail &&
        input != inputPassWord &&
        input != validatePassWordInput
      ) {
        addIsvalid(input);
        results.push(true);
      } else {
        validate(input, results);
      }
    } else {
      addIsInvalid(input);
      results.push(false);
    }
  });
  return results;
}

function addIsvalid(input) {
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
  return true;
}

function addIsInvalid(input) {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
  return false;
}

function userRegister() {
  let dataForm = new FormData(formRegister);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "sf_redirect=%7B%22token%22%3A%22633fd7%22%2C%22route%22%3A%22app_api_register%22%2C%22method%22%3A%22POST%22%2C%22controller%22%3A%7B%22class%22%3A%22App%5C%5CController%5C%5CSecurityController%22%2C%22method%22%3A%22register%22%2C%22file%22%3A%22%5C%2Fvar%5C%2Fwww%5C%2Fhtml%5C%2FStudi%5C%2FProjet-file-rouge%5C%2FProjet-File-rouge-back%5C%2Fsrc%5C%2FController%5C%2FSecurityController.php%22%2C%22line%22%3A54%7D%2C%22status_code%22%3A201%2C%22status_text%22%3A%22Created%22%7D");

  const raw = JSON.stringify({
    "firstname": dataForm.get("firstName"),
    "lastName": dataForm.get("lastName"),
    "email": dataForm.get("email"),
    "password": dataForm.get("passWord")
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(apiUrl+"register", requestOptions)
    .then((response) => {
      if(response.ok){
        return response.json();
      } else {
        alert("Erreur lors de l'inscription")
      }
      
    })
    .then((result) => {
      
      document.location.href="signin";
      console.log(result)
    })
    .catch((error) => console.error(error));
}
