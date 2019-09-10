//Lire le nom et l'âge de quelqu'un pour lui donner un nombre approximatif de jours vécus

var nom
var age
var jours

nom=prompt("Entrez votre nom")
age=prompt("Entrez votre âge")

jours = age * 365

alert(nom + ", vous avez vécus approximativement " + jours+" jours.");