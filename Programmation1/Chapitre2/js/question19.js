var cash;
var rep;

cash = prompt("Montant de vente");

if (cash >= 500){
    rep = .12 * cash + " $ d'escompte"
}
else{
    rep = "Non éligible"
}
alert(rep);