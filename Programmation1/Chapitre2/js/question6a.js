//Variable
var note;
var reponse;
//Input
note = prompt("Ta note");
//Calculs
if (note >= 90){
    reponse = "A"
}
else if (note < 90 && note > 80){
    reponse = "B"
}
else if (note < 80 && note > 70){
    reponse = "C"
}
else if (note < 70 && note > 60){
    reponse = "D"
}
else if (note < 60){
    reponse = "E"
}
alert(reponse);