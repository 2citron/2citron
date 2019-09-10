//Calculer la surface d'un rectangle dont la longueur et la largeur sont lues à l'écran

var surface;
var longueur;
var largeur;

//Lecture

largeur = prompt("Entrez la largeur du rectangle");
longueur = prompt("Entrez la longueur");
//Calcul

surface= largeur* longueur;
//Affiche le résultat

alert("La surface est de : "+ surface+" m2");