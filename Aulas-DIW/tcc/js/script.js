$(function(){
    /*
    *********************
    *       Menu        *    
    *********************
    */
    $('#hamburguer').on('click',function(){
        //$(this).toggleClass('.change');
        $('.menu').toggleClass('quad');
        $('.black-box').toggleClass('display-toggle');
        //$(this).css('display','none');
    });
    $('.black-box').on('click',function(){
        $(this).toggleClass('display-toggle');
        $('.menu').toggleClass('quad');
        //$('#hamburguer').css('display','block');
    });
    $('.menu a').on('click',function(){
        $('.menu').toggleClass('quad');
        $('.black-box').toggleClass('display-toggle');
    });
    
/*
    *********************
    *  Efeito nas label *    
    *********************
*/
    $('#promo-nav label').hover(function(){
        $(this).animate({
            "font-size":36,
            "margin-top":15,
        },200);
        } ,function(){
            $(this).animate({
                "font-size":36,
                "margin-top":20,
            },100);
        }
    ); 
    $('#promo-nav label').on('mousedown',function(){
        $(this).css('box-shadow','3px 3px 0px -2px #cbc6b9, 3px 3px 0 0px #f2edb5');
    })
    $('#promo-nav label').on('mouseup',function(){
        $(this).css('box-shadow','5px 5px 0px -2px #cbc6b9, 5px 5px 0 0px #f2edb5');
    })
    
 
    

    function slide(){
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
    slide();
    

});
    $('.pedido button').on('click',function(){
        $(this).closest('.pedido-container').css('display','none');
    })
    $('.card').hover(function(){
        $(this).find('.ingredientes').slideDown('slow');
    },function(){
        $(this).find('.ingredientes').slideUp('slow');
    })



   
 


