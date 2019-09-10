var compt = 0;
var a = 0;
var b = 0;
var rep;
var lose = 0;
var win = 0;

while (compt < 10){
    compt++;
    a = Math.round((Math.random()));
    b = Number(prompt("1 ou 0"));
    if (a === b){
        rep = "You win.";
        win++
    }
    else{
        rep = "You lose.";
        lose++
    }
    alert(rep);
    document.write("User; " + b + " / AI; " + a + " " + rep + " ");
}
document.write("Nombre de win: " + win + " ");
document.write("Nombre de lose: " + lose + " ");