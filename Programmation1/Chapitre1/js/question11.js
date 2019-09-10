//La vente d'un char
//Variables
var frais;
var prixBase;
var commission;
var tps;
var tvq;
var prixVente;
var sousTotal;
//Input
prixBase = prompt("Prix de base");
//Calculs
frais = 0.02 * prixBase;
commission = 0.12 * prixBase;
sousTotal = Number(frais) + Number(commission) + Number(prixBase);
tps = sousTotal * .05;
tvq = sousTotal * .09975;
prixVente = sousTotal + tvq + tps;
//Output
alert("Les frais sont de " + frais + "$, \nla" +
    " commission est de " + commission + "$,\nla" +
    " TPS est de " + tps + "$, \nla" +
    " TVQ est de " + tvq + "$, \nle" +
    " prix de vente est de " + prixVente + "$.");