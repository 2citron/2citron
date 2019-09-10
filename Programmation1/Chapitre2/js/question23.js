var indice;
var rep;

indice = prompt("Indice de pollution");

if (indice >= 0.04 && indice <= .31){
    rep = "Normale"
}
else if (indice > .31 && indice <= .4){
    rep = "Liste A"
}
else if (indice > .4 && indice <= .5){
    rep = "Liste A et B"
}
else if (indice > .5 && indice <= 1){
    rep = "Liste A, B et C"
}
else{
    rep = "Impossible"
}
alert(rep);