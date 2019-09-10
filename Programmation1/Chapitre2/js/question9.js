//Variables
var util;
var mdp;
//Input
util = prompt("Nom d'utilisateur");
mdp = prompt("Mot de passe");
//Calculs
if (util === "admin" && mdp === "12345"){
    alert("Bonjour " + util)
}
else {
    alert("Votre nom d'utilisateur ou votre mot de passe est invalide")
}