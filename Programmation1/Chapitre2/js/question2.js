//Variable
var achatTotal;
var reduction;
reduction = "Vous êtes non admissible à la réduction";
//Input
achatTotal = prompt("Total des achats");
//Calculs
if (achatTotal > 200){
    reduction = achatTotal * .15;
    alert("Vous avez droit à une réduction de " + reduction + " $");
}
else {
    alert(reduction);
}
