$('#Affichage2').hide();
$('#Affichage3').hide();
$('#Affichage4').hide();
$('#Affichage5').hide();
$('#Affichage0').hide();
$('#BlackMagic').hide();
let mot=["A","A","A","A","A","A","A","A","A","A","A","H"];
let aff=1;
for(let i=0;i<mot.length;i++){
    $('#Affichage'+aff).append("<div class='col-"+aff+"'> <img class='img-fluid px-2 "+mot[i]+"' src='Letters/"+mot[i]+"/"+mot[i]+"1.jpg'  alt='"+mot[i]+"'> </div>")
}
$('#GO').click(function () {
    mot=[];
   let tmpMot = $('#Mot').val();
   tmpMot = tmpMot.toUpperCase();
   for(let i=0;i<tmpMot.length;i++){
       mot.push(tmpMot[i])
   }
   if(mot.length < 7 && mot.length > 4){
       $('#Affichage1').hide();
       $('#Affichage3').hide();
       $('#Affichage4').hide();
       $('#Affichage5').hide();
       $('#Affichage0').hide();
       aff=2;
       moteur()
   }
    else if(mot.length >= 7 && mot.length<=12){
        $('#Affichage2').hide();
        $('#Affichage3').hide();
        $('#Affichage4').hide();
        $('#Affichage5').hide();
        $('#Affichage0').hide();
        aff=1;
       moteur()
    }
    else if(mot.length === 4){
       $('#Affichage1').hide();
       $('#Affichage2').hide();
       $('#Affichage4').hide();
       $('#Affichage5').hide();
       $('#Affichage0').hide();
       aff=3;
       moteur()
   }
    else if(mot.length === 3){
       $('#Affichage1').hide();
       $('#Affichage2').hide();
       $('#Affichage3').hide();
       $('#Affichage5').hide();
       $('#Affichage0').hide();
       aff=4;
       moteur()
   }
    else if(mot.length<3||mot.length>12){
       $('#Affichage1').hide();
       $('#Affichage2').hide();
       $('#Affichage3').hide();
       $('#Affichage4').hide();
       if(mot.length<3){
           aff=0
       }
       else{
           aff=5
       }
       $('#Affichage'+aff).css("color","red");
       $('#Affichage'+aff).css("font-size", "1rem");
       moteur()
   }
});
//thanks icktoofay from stack overflow
$(function() {
    $("form").submit(function() { return false; });
});
//thanks Blackbam also from stack overflow
$(document).on('keypress',function(e) {
    if(e.which === 13) {
        $('#GO').click()
    }
});
function moteur() {
    if(aff>=1&&aff<=4){
        $('#Affichage'+aff).html("");
        for(let i=0;i<mot.length;i++){
            if(mot[i]==="*"){
                mot[i]="CS"
            }
            $('#Affichage'+aff).append("<div class='col-"+aff+"'> <img class='img-fluid px-2 "+mot[i]+"' src='Letters/"+mot[i]+"/"+mot[i]+"1.jpg'  alt='"+mot[i]+"'> </div>")
        }
    }
    else {
        if(aff===0){
            $('#Affichage0').show();
            $('#Affichage5').hide();
        }
        else{
            $('#Affichage5').show();
            $('#Affichage0').hide();
        }
    }
    $('#Affichage'+aff).show();
}
let bool=0;
let ch;
$(document).on('click', 'img', function(){
    if(bool===0){
        $(this).parent().attr("id","changing");
        ch=$(this).attr("class");
        $(this).addClass("changing");
        $('#BlackMagic').click();
        bool=1;
        $('#Carousel').html("");
        for(let i=1;i<6;i++){
            if(i===1){
                if(ch[15]==="C"){
                    if(ch[16]==="S"){
                        $('#Carousel').append("<div class=\"carousel-item active align-items-center\"><img class=\"img-fluid autocenter\" src=\"Letters/CS/CS"+i+".jpg\" alt=\"CS\"></div>");
                    }
                    else{
                        $('#Carousel').append("<div class=\"carousel-item active align-items-center\"><img class=\"img-fluid autocenter\" src=\"Letters/C/C"+i+".jpg\" alt=\"C\"></div>");
                    }
                }
                else {
                    $('#Carousel').append("<div class=\"carousel-item active align-items-center\"><img class=\"img-fluid autocenter\" src=\"Letters/"+ch[15]+"/"+ch[15]+i+".jpg\" alt=\""+ch[15]+"\"></div>");
                }
            }
            else{
                if(ch[15]==="C"){
                    if(ch[16]==="S"){
                        $('#Carousel').append("<div class=\"carousel-item align-items-center\"><img class=\"img-fluid autocenter\" src=\"Letters/CS/CS"+i+".jpg\" alt=\"CS\"></div>");
                    }
                    else{
                        $('#Carousel').append("<div class=\"carousel-item align-items-center\"><img class=\"img-fluid autocenter\" src=\"Letters/C/C"+i+".jpg\" alt=\"C\"></div>");
                    }
                }
                else{
                    $('#Carousel').append("<div class=\"carousel-item align-items-center\"><img class=\"img-fluid autocenter\" src=\"Letters/"+ch[15]+"/"+ch[15]+i+".jpg\" alt=\""+ch[15]+"\"></div>");
                }
            }
        }
    }
    else if(bool===1){
        $(this).addClass("selected");
        swapper();
        $('#Close').click()
    }
});
$('#Close').click(function () {
   bool=0;
    $('.selected').removeClass();
    $('#changing').attr("id","");
    $('.changing').attr("class",ch);
});
function swapper() {
    let alt=$('.changing').attr("alt");
    let selected= $('.selected').attr("src");
    $('#changing').append("<img class='"+ch+"' src='"+selected+"'  alt='"+alt+"'>");
    $('.changing').remove();
}
$('#blanc').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
$('#bleu').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
$('#bleuFonce').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
$('#gris').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
$('#noir').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
$('#rose').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
$('#rouge').click(function(){
    let bgId=$(this).attr("id");
    $('#Affichage').css("background-image", "url('background/"+bgId+".jpg')");
    $('.bg').css("background-image", "url('background/"+bgId+".jpg')")
});
