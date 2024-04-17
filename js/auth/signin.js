const inputMail = document.getElementById("emailInput");
const inputPassWord = document.getElementById("passWordInput");
const btnSignin = document.getElementById("btn-signin");
const formSignin = document.getElementById("formSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {

  let dataForm = new FormData(formSignin);
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "sf_redirect=%7B%22token%22%3A%22633fd7%22%2C%22route%22%3A%22app_api_register%22%2C%22method%22%3A%22POST%22%2C%22controller%22%3A%7B%22class%22%3A%22App%5C%5CController%5C%5CSecurityController%22%2C%22method%22%3A%22register%22%2C%22file%22%3A%22%5C%2Fvar%5C%2Fwww%5C%2Fhtml%5C%2FStudi%5C%2FProjet-file-rouge%5C%2FProjet-File-rouge-back%5C%2Fsrc%5C%2FController%5C%2FSecurityController.php%22%2C%22line%22%3A54%7D%2C%22status_code%22%3A201%2C%22status_text%22%3A%22Created%22%7D");

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
      const token = result.token;
      setToken(token);
      
      setCookie(roleCookieName, result.roles, 7);
      window.location.replace("/");
    })
    .catch((error) => console.error(error));
}
