//Variables
var lettre;
var reponse;
//Input
lettre = prompt("Mets une lettre");
//Calculs
    if (lettre.toUpperCase() === "A" || lettre.toUpperCase() === "E" || lettre.toUpperCase() === "I" || lettre.toUpperCase() === "O" || lettre.toUpperCase() === "U" || lettre.toUpperCase() === "Y"){
    reponse = "Voyelle";
    document.write(lettre);
}
    else {
    reponse = "Consonne";
    document.write(lettre);
}
//Output
alert(reponse);