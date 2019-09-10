var input = Number(prompt("Un nombre. \nFinir par 0"));
var comptN;
var comptP;

comptP = 0;
comptN = 0;
while(input !== 0){
    if(input > 0){
        comptP++
    }
    else{
        comptN++
    }
    input = Number(prompt("Un nombre. \nFinir par 0"));
}
document.write("Tu as tappé; " + comptP + " nombres positifs.");
document.write("Tu as tappé; " + comptN + " nombres négatis.");