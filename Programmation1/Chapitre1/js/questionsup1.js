//Variables
var pi;
var m;
var arpents;
var hectares;
//Input
pi = prompt("Dimension en pieds carré");
//Calculs
m = pi / 10.764;
arpents = pi / 36799.021;
hectares = pi / 107639.104;
//Output
alert(pi +" pieds carré = \n" + m + " mètres carré, \n" + arpents +" arpents carré et \n" + hectares + " hectares");
