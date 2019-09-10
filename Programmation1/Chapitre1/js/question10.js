//Faire une facture
// Variables
var date;
var article1;
var article2;
var article3;
var tvq;
var sousTotal;
var tps;
var grandTotal;
//Input
date = prompt("Date");
article1 = Number(prompt("Article 1"));
article2 = Number(prompt("Article 2"));
article3 = Number(prompt("Article 3"));
//Calcul
sousTotal = article1 + article2 + article3;
tvq = sousTotal * .09975;
tps = sousTotal * .05;
grandTotal = sousTotal + tps + tvq;
//Output
alert(date);
alert("Article 1: " + article1 + "$ + Article 2: " + article2 + "$ + Article 3: " + article3 + "$ = Sous total:" + sousTotal);
alert("Sous total: " + sousTotal+"$ + TPS: "+tps + "$ + TVQ: " + tvq + "$ = Grand total: " + grandTotal + "$");
