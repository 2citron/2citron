//Variables
var tauxH;
var nbH;
var a;
var b;
var reponse;
//Input
tauxH = prompt("Taux horaire");
nbH = prompt("Nombre d'heures travaillées");
if (nbH > 40) {
    a = 40 * tauxH;
    b = (nbH - 40) * tauxH * 2;
    reponse = a + b;
}
else {
    reponse = tauxH * nbH
}
alert("Vous avez fait " + reponse + " $ en " + nbH + " heures.");