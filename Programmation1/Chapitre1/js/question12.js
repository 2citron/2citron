//Note d'un étudiant
//Variables
var examMi;
var examFinal;
var lab;
var noteFinale;
//Input
examMi = prompt("Note d'examen de mi-session");
examFinal = prompt("Note d'examen de fin de session");
lab = prompt("Note des laboratoires");
//Calculs
noteFinale = examFinal * .5 + examMi * .3 + lab * .2;
//Output
alert("La note finale est de " + noteFinale + " %");