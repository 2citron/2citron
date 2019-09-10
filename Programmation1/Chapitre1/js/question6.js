/* Faire un programme qui lit le nom d'un article et son prix de détail.
Doit afficher le prix en gros 66% du prix de détail et le profit attendu.*/

//Variables
var article;
var prixDetail;
var prixGros;
var profit;
//Input
article = prompt("Nom de l'article");
prixDetail = prompt("Prix en détail");
//Calcul
prixGros = prixDetail * .66;
profit = prixDetail - prixGros;
//Output
alert("Pour l'article " + article +", on attend un profit de " + profit + "$" );