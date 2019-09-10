var a;
var b;
var c;
var reponse;
//Input
a = prompt("Premier chiffre");
b = prompt("Deuxième chiffre");
c = prompt("Troisième chiffre");
//Calculs
if (a === b || b ===c || c === a){
    reponse = "DES CHIFFRES DIFFÉRENTS SVP!!!"
}
else if (c<b && b<a){
    reponse = (a + " est plus grand que " + b + " qui est plus grand que " + c)
}
else if (a<b && b<c){
    reponse = (c + " est plus grand que " + b + " qui est plus grand que " + a)
}
else if (b<c && c<a){
    reponse = (a + " est plus grand que " + c + " qui est plus grand que " + b)
}
else if (b>c && c>a){
    reponse = (b + " est plus grand que " + c + " qui est plus grand que " + a)
}
else if (b>a && a>c){
    reponse = (b + " est plus grand que " + a + " qui est plus grand que " + c)
}
else if (c>a && a>b){
    reponse = (c + " est plus grand que " + a + " qui est plus grand que " + b)
}
alert(reponse);