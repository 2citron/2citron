var compt;
var a;
var compta;
var comptb;

compt = 0;
compta = 0;
comptb = 0;

while(compt<100){
    compt++;
    a = Math.round((Math.random()));
    console.log(a + " ");
    if(a === 1){
        compta++
    }
    else if (a === 0){
        comptb++
    }
}
console.log("Nombre de 1: " + compta);
console.log("Nombre de 0: " + comptb);