const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const btnSignout = document.getElementById("btn-signout");
const apiUrl = "http://127.0.0.1:8000/api/";

btnSignout.addEventListener("click", signout);
// getUserInfo();

function getRole() {
  return getCookie(roleCookieName);
}

function signout() {
  eraseCookie(tokenCookieName);
  eraseCookie(roleCookieName);
  window.location.reload();
}

function setToken(token) {
  setCookie(tokenCookieName, token, 7);
}

function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
  return !(getToken() == null || getToken == undefined);
}

function showAndHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connected":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "admin":
        if (!userConnected || role != "admin") {
          element.classList.add("d-none");
        }
        break;
      case "client":
        if (!userConnected || role != "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}

/**
 * Sanitize a string to make it safe for HTML rendering.
 *
 * @param {string} string - The input string to sanitize.
 * @returns {string} - The sanitized HTML string.
 */
function sanitizeHtml(string) {
  const tempHtml = document.createElement("div");
  tempHtml.textContent = string;
  return tempHtml.innerHTML;
}

function getUserInfo() {
  let myHeaders = new Headers();
  myHeaders.append("X-AUTH-TOKEN", getToken());

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(apiUrl + "account/me", requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json();
      } else {
        console.log("Impossible de récupérer les information utilisateur");
      }
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(
        "erreur lors de la récupération des information utilisateur"
      );
    });

  // const myHeaders = new Headers();
  // myHeaders.append("X-AUTH-TOKEN", "5f58813316e4abceb5b4910d4dabe02234eac6fa");

  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow"
  // };

  // fetch("http://127.0.0.1:8000/api/account/me", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));
}
