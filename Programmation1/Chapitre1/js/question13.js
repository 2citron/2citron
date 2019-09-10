//Note d'un étudiant
//Variables
var nom;
var examMi;
var examFinal;
var lab;
var noteFinale;
var tmp;
//Input
nom = prompt("Votre nom")
lab = prompt("Note de laboratoire");
examMi = prompt("Note d'examen de mi-session");
examFinal = prompt("Note d'examen de fin de session");
//Calculs
tmp = lab;
lab = tmp * 20 / 100;
tmp = examMi;
examMi = tmp * 30 / 100;
tmp = examFinal;
examFinal = tmp * 50 / 100;
noteFinale = examFinal + examMi + lab;
//Output
alert(nom + ", votre note de laboratoire est de " + lab + " sur 20,\n votre " +
    "note d'examen de mi-session est de " + examMi + " sur 30,\n votre " +
    "note de fin de session est de " + examFinal + " sur 50, \n votre " +
    "note finale est de " + noteFinale + " sur 100.");
