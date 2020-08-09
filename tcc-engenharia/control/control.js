$(function(){
    $('#login').on('submit',function(e){
        e.preventDefault();
        var txt = $(this).serialize();
        //console.log(txt);

        $.ajax({
            type:'POST',
            url:'model/model.php',
            data:txt,
            dataType:'json',
            success:function(json){
                console.log(json);
                if(json == "ok"){
                    //Permitem voltar para a page anterior:
                    //window.location.assign("http://pt.stackoverflow.com");
                    //window.location.href = "http://pt.stackoverflow.com";
                    //não permite voltar para a página anterior:
                    $('.erroContent').each(function(){
                        $(this).css('display','none');
                    })
                    window.location.assign("index.html");

                }else if(json == "senha incorreta!"){
                    $('#erroSenha').css('display','block');
                }else if(json == "Usuário não encontrado"){
                    $('#erroUsuario').css('display','block');
                }
            }
        })

    })
    $('input[name="nome"]').on('keyup',function(){
        var vl = $(this).val();
        var arr = vl.split(" ");
        var lastIndex = arr.length - 1;

        var c = arr[0]+"."+arr[lastIndex];
        $('input[name="usuario"]').attr('value',c);
        console.log($(this).val());
    })
    
    $('#cadastrar').on('submit',function(e){
        e.preventDefault();
        var txt = $(this).serialize();
        $.ajax({
            type:'POST',
            url:'model/class.create.php',
            data:txt,
            dataType:'json',
            success:function(json){
                console.log(json);
                if(json.status == "Usuário já existente!"){
                    //Permitem voltar para a page anterior:
                    //window.location.assign("http://pt.stackoverflow.com");
                    //window.location.href = "http://pt.stackoverflow.com";
                    //não permite voltar para a página anterior:
                    alert("Usuário já existente!");

                }else if(json.status == "Preencha todos os campos!"){
                    alert("Preencha todos os campos!");
                }else if(json.status == "Cadastrado"){
                    alert("Cadastrado!");
                }else{
                    alert("verifique os dados!");
                }
            }
        })    
    })
}) 
