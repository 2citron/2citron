var age;
var rep;

age = prompt("Votre âge");

if (age >= 18){
    rep = "Adulte"
}
else if (age >= 12 && age < 18){
    rep = "Adolescent"
}
else if (age < 12 && age > 0){
    rep = "Enfant"
}
else{
    rep = "Non existant"
}
alert(rep);