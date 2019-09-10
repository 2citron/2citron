//Variables
var a;
var b;
var reponse;
reponse = "Division par zéro interdite";
//Input
a = prompt("A");
b = prompt("B");
//Calculs
if (b !== 0){
    reponse = a/b;
}
alert(reponse);