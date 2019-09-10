//Variables
var lon;
var lar;
var reponse;
//Input
lar = prompt("Largeur");
lon = prompt("Longueur");
//Calculs
if (lar * 2 + lon * 2 < 100 ){
    reponse = "Nope, trop petit"
}
else {
    reponse = lar * lon
}
alert(reponse + " m2, ça c'est un vrai rectangle");