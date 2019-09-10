var direction;

direction = prompt("wasd");

if (direction === "d"){
    reponse = "Droite"
}
else if (direction === "a"){
    reponse = "Gauche"
}
else if (direction === "w"){
    reponse = "Avancer"
}
else if (direction === "s"){
    reponse = "Reculer"
}
else {
    reponse = "Erreur"
}
alert(reponse);