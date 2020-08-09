(function($){ 
    $.fn.slide = function(){ 
        var rol = $("#rol");
        var ani = setInterval(startAnimation,1000);
        function startAnimation(){
//Verifica o valor de cada input (se está selecionada, o .val() retornará "on")
            var rq = $('input[id="r-q"]:checked').val();
            var rs = $('input[id="r-s"]:checked').val();
            var rsx = $('input[id="r-sx"]:checked').val();
            
//Para evitar bugs na passagem das laminas, só funcionará quando as radio inputs não estiverem selecionadas, já que, ao trocar uma lamina no meio da animação, o usário terá muito pouco tempo para ver seu conteúdo!
            if(rq!= "on" && rs != "on" && rsx != "on"){
                var rInfo = rol.attr("style").replace("margin-left:","");

                if(rInfo != " -140vw;"){
                    rol.animate({marginLeft: "-=70vw"},400);
                    console.log(rInfo);
                }else{
                    rol.animate({marginLeft: "0"},400);
                }
            }
        }
//Fará o clearInterval responsável por interromper o loop de animações.
        function stopSlide(){
            if(rq== "on" || rs == "on" || rsx == "on"){
                clearInterval(ani);
            }    
        }
        
        //function nav(){
        var rol = $("#rol");
        $("#r-s").on('change',function(){
            rol.animate({marginLeft: "0"},400);
        })
        $("#r-q").on('change',function(){
            rol.animate({marginLeft: "-70vw"},400);
        })
        $("#r-sx").on('change',function(){
            rol.animate({marginLeft: "-140vw"},400);
        })
        //}
           
    } 
}(jQuery))
        