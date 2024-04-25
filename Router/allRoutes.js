import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "La Galerie", "/pages/galerie.html", [], "js/galerie.js"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
  new Route("/account", "Mon compte", "/pages/auth/account.html",["client", "admin"]),
  new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
  new Route("/allReservation", "Vos réservations", "/pages/reservations/allReservation.html", ["client"]),
  new Route("/reservation", "Réserver", "/pages/reservations/reservation.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
