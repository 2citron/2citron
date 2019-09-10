//Variables
var a;
var b;
var p;
var G;
//Input
a = prompt("Premier chiffre");
b = prompt("Deuxième chiffre");
//Calculs
if (a>b){
    p = b;
    G = a;
    alert(G + " est plus grand que " + p);
}
else if (b>a){
    G = b;
    p = a;
    alert(G + " est plus grand que " + p);
}
else {
    alert("Aille, tu te prends pour qui?!")
}
