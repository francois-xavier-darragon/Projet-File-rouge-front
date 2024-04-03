import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La Galerie", "/pages/galerie.html"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html"),
  new Route("/allReservation", "Vos réservations", "/pages/reservations/allReservation.html"),
  new Route("/reservation", "Réserver", "/pages/reservations/reservation.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
