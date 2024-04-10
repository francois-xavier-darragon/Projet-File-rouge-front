const inputMail = document.getElementById("emailInput");
const inputPassWord = document.getElementById("passWordInput");
const btnSignin = document.getElementById("btn-signin");


btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  //Todo à impléenter l'API pour vérifier les info de l'utilisateur en BDD
  
  if (inputMail.value == "test@gmail.com" && inputPassWord.value == "123") {
     //Todo il audra récupérer le vrai token
    const token = "fffbfdbdfbdfmgflgglfmlùfmfmlfùwmflmfmfùmfdfmù";
    setToken(token)
    //place ce token en cookie

    window.location.replace('/');
  } else {
    inputMail.classList.add("is-invalid");
    inputPassWord.classList.remove("is-invalid");
  }
}
