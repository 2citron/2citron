var rev;
var reponse;
var tmp;

rev = prompt("Votre revenu imposable");

if (rev > 0 && rev <= 7000){
    reponse = rev * .16
}
else if (rev > 7000 && rev <= 14000){
    tmp = rev - 1120;
    reponse = 1120 + tmp * .195
}
else if (rev > 14000 && rev <= 23000){
    tmp = rev - 2485;
    reponse = 2485 + tmp * .215
}
else if (rev > 23000 && rev <= 50000){
    tmp = rev - 4420;
    reponse = 4420 + tmp * .245
}
else if (rev > 50000 ){
    tmp = rev - 11035;
    reponse = 11035 + tmp * .26
}
alert(reponse + " $");
