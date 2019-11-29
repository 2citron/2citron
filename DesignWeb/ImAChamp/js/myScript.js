var nomChamp;
var titre;
var stats=[];
let code;
class Champion{
    constructor(Nom,Titre,Vie,RegenVie,Dommage,Armure,ResistanceMagique,RapiditeMouvement,RapiditeAttaque,Image){
        this.Nom=Nom;
        this.Titre=Titre;
        this.Vie=Vie;
        this.RegenVie=RegenVie;
        this.Dommage=Dommage;
        this.Armure=Armure;
        this.ResistanceMagique=ResistanceMagique;
        this.RapiditeMouvement=RapiditeMouvement;
        this.RapiditeAttaque=RapiditeAttaque;
        this.Image=Image;
    }
    GetDonne(){
        return("Nom: "+this.Nom+" Titre: "+this.Titre+" Point de vie: "+this.Vie+" Régénération de vie: "+this.RegenVie+" Point d'attaque: "+this.Dommage+" Armure: "+this.Armure+ " Résistance magique: "+this.ResistanceMagique+" Rapidité: "+this.RapiditeMouvement+" Vitesse d'attaque: "+this.RapiditeAttaque+" Image URL: "+this.Image)
    }
    GetCode(){
        return("("+this.Nom+")("+this.Titre+")("+this.Vie+")("+this.RegenVie+")("+this.Dommage+")("+this.Armure+")("+this.ResistanceMagique+")("+this.RapiditeMouvement+")("+this.RapiditeAttaque+")("+this.Image+")")
    }
}
$('#NomChamp').keyup(function () {
    nomChamp = $('#NomChamp').val();
    $('.NomChamp').html(nomChamp)
});
$('#Title').keyup(function () {
    titre = $('#Title').val();
    $('.Title').html(titre)
});
$('#Health').keyup(function () {
    stats[0] = $('#Health').val();
    $('.Health').html(stats[0])
});
$('#HealthRegen').keyup(function () {
    stats[1] = $('#HealthRegen').val();
    $('.HealthRegen').html(stats[1])
});
$('#AttackDamage').keyup(function () {
    stats[2] = $('#AttackDamage').val();
    $('.AttackDamage').html(stats[2])
});
$('#AttackSpeed').keyup(function () {
    stats[3] = $('#AttackSpeed').val();
    $('.AttackSpeed').html(stats[3])
});
$('#Armor').keyup(function () {
    stats[4] = $('#Armor').val();
    $('.Armor').html(stats[4])
});
$('#MagicResist').keyup(function () {
    stats[5] = $('#MagicResist').val();
    $('.MagicResist').html(stats[5])
});
$('#MovementSpeed').keyup(function () {
    stats[6] = $('#MovementSpeed').val();
    $('.Movement').html(stats[6])
});
$('#Image').keyup(function () {
    stats[7] = $('#Image').val();
    $('.ghost').attr("src",stats[7])
});
$('#create').click(function () {
    let donne;
    let tmp;
    tmp =  $('#SaveCode').val();
    let state="unstarted";
    let output=[];
    let Var=0;
    let tabCount=-1;
    for(let i=0;i<=tmp.length;i++){
        if(state==="on"){
            output.push(tmp[i]);
            tabCount++
        }
        else if(state==="off"){
            Var++;
            if(Var===1){
                nomChamp=output.join("")
            }
            else if(Var===2){
                titre=output.join("")
            }
            else if(Var===3){
                stats[0]=output.join("")
            }
            else if(Var===4){
                stats[1]=output.join("")
            }
            else if(Var===5){
                stats[2]=output.join("")
            }
            else if(Var===6){
                stats[4]=output.join("")
            }
            else if(Var===7){
                stats[5]=output.join("")
            }
            else if(Var===8){
                stats[6]=output.join("")
            }
            else if(Var===9){
                stats[3]=output.join("");
            }
            else if(Var===10){
                stats[7]=output.join("")
            }
        }
        if(tmp[i]==="("){
            state="on";
            output=[];
            tabCount=-1
        }
        else if(tmp[i]===")"){
            state="off";
            output[tabCount]="";
        }
    }
    $('.NomChamp').html(nomChamp);
    $('.Title').html(titre);
    $('.Health').html(stats[0]);
    $('.HealthRegen').html(stats[1]);
    $('.AttackDamage').html(stats[2]);
    $('.AttackSpeed').html(stats[3]);
    $('.Armor').html(stats[4]);
    $('.MagicResist').html(stats[5]);
    $('.Movement').html(stats[6]);
    $('.ghost').attr("src",stats[7]);
    donne = new Champion(nomChamp,titre,stats[0],stats[1],stats[2],stats[4],stats[5],stats[6],stats[3],stats[7]);
    $('.Code').html(donne.GetCode());
});