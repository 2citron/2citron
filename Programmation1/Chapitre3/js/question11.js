var sexe;
var comptM = 0;
var comptF = 0;

sexe = prompt("M ou F");

while (sexe === "m" || sexe === "f"){
    if(sexe === "m"){
        alert("Masculin");
        comptM++
    }
    else {
        alert("Féminin");
        comptF++
    }
    sexe = prompt("M ou F");
}
document.write("Nombre de M; " + comptM + "<br>");
document.write("Nombre de F; " + comptF);