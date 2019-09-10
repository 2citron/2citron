//Variables
var temp;
var reponse;
reponse = "Enfin une belle journée!";
//Input
temp = prompt("Température en Celcius");
//Calcul
if ((-40) <= temp <= (-10)){
    reponse = "HAAAAAAAAAA! Il fait froid!"
}
else if (temp < -40){
    reponse = "Bruh, ya dead"
}
alert(reponse);