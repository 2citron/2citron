var ctext;
var cbg;
var rtext;
var a;

ctext = prompt("Couleur du texte; Rouge, Bleu, Jaune");
cbg = prompt("Couleur du Background; Rouge, Bleu, Jaune");

if (ctext === "Rouge"){
    rtext = "F00";
    if (cbg === "Rouge"){
        a = "#F00"
    }
    else if (cbg === "Bleu"){
        a = "#00F"
    }
    else if (cbg === "Jaune"){
        a = "#FF0"
    }
}
else if (ctext === "Bleu"){
    rtext = "00F";
    if (cbg === "Rouge"){
        a = "#F00"
    }
    else if (cbg === "Bleu"){
        a = "#00F"
    }
    else if (cbg === "Jaune"){
        a = "#FF0"
    }
}
else if (ctext === "Jaune"){
    rtext = "FF0";
    if (cbg === "Rouge"){
        a = "#F00"
    }
    else if (cbg === "Bleu"){
        a = "#00F"
    }
    else if (cbg === "Jaune"){
        a = "#FF0"
    }
}


console.log('%c Yeet!','background: '+ a +'; color: #'+ rtext);
