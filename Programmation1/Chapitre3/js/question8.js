var input = Number(prompt("Un nombre à additioner. \nFinir par 0"));
var sommePositif = 0;
var sommeNegatif = 0;

while(input !== 0){
    if(input > 0){
        sommePositif += input
    }
    else{
        sommeNegatif += input
    }
    input = Number(prompt("Un nombre à additioner. \nFinir par 0"));
}
document.write("Somme des nombres positifs; " + sommePositif + " ");
document.write("Somme des nombres négatifs; " + sommeNegatif + " ");
