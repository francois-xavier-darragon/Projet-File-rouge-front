const inputMail = document.getElementById("emailInput");
const inputPassWord = document.getElementById("passWordInput");
const btnSignin = document.getElementById("btn-signin");
const formSignin = document.getElementById("formSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {

  let dataForm = new FormData(formSignin);
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "username": dataForm.get("email"),
    "password": dataForm.get("passWord")
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(apiUrl+"login", requestOptions)
    .then((response) => {
      if(response.ok){
        return response.json();
      } else {
        inputMail.classList.add("is-invalid");
        inputPassWord.classList.remove("is-invalid");
      }
    })
    .then((result) => { 
      const token = result.apiToken;
      setToken(token);
      setCookie(roleCookieName, result.roles, 7);
      window.location.replace("/");
    })
    .catch((error) => console.error(error));
}
