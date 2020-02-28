"use strict"

//number será el número aleatorio a adivnivar, el cual se define con la función randomNumber()
var number="";

//Sacando el valor aletorio 
randomNumber();

//Jugando..
$("input").on("keydown",function(e){
    if(e.which==13){

        var fijas=0;
        var picas=0;
        var answer=$(this).val();

        //validación de caracteres repetidos y longitud adecuada en la entrada
        if(answer.length!=4 || charRepeats(answer)==false){
            //manifestación de error
            $("input").css("background","red");
            $("h4").css("color","red");
        }
        else{
            //funcion lógica que evalua el ingreso del usurio
            $("input").css("background","transparent");
            $("h4").css("color","black");
            for (var i = 0; i < number.length; i++) {
                if(answer.indexOf(number[i])!=-1){
                    picas++;
                    if(number.indexOf(number[i])==answer.indexOf(number[i])){
                        picas--;
                        fijas++;
                    }
                }   
            }
            $("tbody").prepend("<tr><td>"+answer+"</td><td>"+picas+"</td><td>"+fijas+"</td></tr>")
            $("input").val(null);

            //mensaje de felicitaciones y reinicio del juego
            if(fijas==4){
                $(".dark").show();
                $(".alert").show();
            }
        }
    }
});


//Jugar nuevamente
$("button").on("click", function(){
    $(".dark").hide();
    $(".alert").hide();
    $("tbody tr").remove();
    number="";
    randomNumber();
});






//////////////////////////////////////////////////Funciones///////////////////////////////////////////////////////

// funcion para generar el número aleatorio number
function randomNumber(){
    for (var i = 0; i < 4; i++) {
        var noRepeat=false;
        while(noRepeat==false){
            var digito=Math.floor(Math.random()*10).toString();
            if(number.indexOf(digito)==-1){
                number+=digito;
                noRepeat=true;
            }
        }
    }
}

//funcion que valida que no hayan caracteres repetidos
var charRepeats = function(str) {
    for (var i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return false; // hay caracteres repetidos
      }
    }
  return true;
}






