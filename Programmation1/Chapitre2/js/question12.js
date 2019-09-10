//Variables
var age;
var sexe;
var reponse;
var prime;
var valeur;
//Input
age = prompt("Votre âge");
sexe = prompt("Votre sexe");
valeur = prompt("Valeur du véhicule");
//Calculs
if (age >= 16 && age <= 25){
    if (sexe === "Gars"){
        prime = valeur * .05
    }
    else if (sexe === "Fille"){
        prime = valeur * .03
    }
    else{
        alert("Error 2")
    }
}
else if (age > 25){
    if (sexe === "Gars"){
        prime = valeur * .03
    }
    else if (sexe === "Fille"){
        prime = valeur * .02
    }
    else{
        alert("Error 2")
    }
}
else{
    alert("Error 1")
}
var str = String("Votre prime est de "  + prime + " $");

if (sexe === "Gars"){
    document.write(str.fontcolor("green"))
}
else if (sexe === "Fille"){
    document.write(str.fontcolor("magenta"))
}
