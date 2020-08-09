<?php

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Sergio baurú</title>
	<link href="https://fonts.googleapis.com/css2?family=Kurale&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div class="black-box"></div>
    <nav class="menu">
        <div id="h-top"><p>O melhor Lanche da região!</p></div>
        <div id="login-cad">
            <div><a href="login.php">Login</a></div>
            <div id="divisor"></div>
            <div><a href="cadastro.php">Cadastro</a></div>
        </div>
        <div id="promo"><a href="#promocoes">Promoções!</a></div>
        <div id="tomatos">
            <div><a href="#produtos">Lanches</a></div>
            <div><a></a></div>
            <div><a href="#info-geral">Informações</a></div>
        </div>
        <div id="lettuce"><a href="#comanda">Sua Comanda</a></div>
        <div id="h-bot"><p>Peça já o seu!</p></div>
    </nav>
	<section id="home">
        <div id="hamburguer" class="">
            <div class="barra b1"></div>
            <div class="barra b2"></div>
            <div class="barra b3"></div>
        </div>
        <div id="home-container" class="grid-8">

            <header class="row">
                <p>Sacie sua fome agora:</p>
                <h1 class="">Sérgio Baurú!</h1>
                <p>Peça Já!</p>
                <h2>Fones</h2>
                <ul>
                    <li>(51)99788-2654<span class="iconify" data-icon="uil:whatsapp" data-inline="false"></span></li>
                    <li>(51)99788-2654<span class="iconify" data-icon="uil:whatsapp" data-inline="false"></span></li>
                    <li>(51)3112-6089</li>
                </ul>
            </header>
        </div>
	</section>
    <section id="promocoes">
        <h2>Promoções</h2>
        <article>
            <div class="slide-mask">
                <div id="rol" style="margin-left:0"></div>
                <div id="slide-segunda" class="lamina">
                    <h3>Segunda</h3> 
                    <div class="promo-box" id="promo-segunda">
                        <ul class="promo-infos">
                            <li><a>Baurú <br class="separador">Simples</a></li>
                            <li>R$ 13,00</li>
                        </ul>
                    </div>

                </div>
                <div id="slide-terca" class="lamina" style="">
                    <h3>Terça-Feira</h3>
                    <div class="promo-box" id="promo-terca">
                        <ul class="promo-infos">
                            <li><a>Xis<br class="separador"> Carne</a></li>
                            <li>R$ 11,00</li>
                        </ul>
                    </div>

                </div>
                <div id="slide-sexta" class="lamina">
                    <h3>Sexta-Feira</h3>
                    <div class="promo-box" id="promo-sexta">  
                        <ul class="promo-infos">
                            <li><a>Baurú <br class="separador"></a></li>
                            <li>R$ 11,00</li>
                        </ul>
                    </div>

                </div>
            </div>
            <nav id="promo-nav">
                <input type="radio" name="promo" id="r-s">
                <label for="r-s">Segunda</label>
                <input type="radio" name="promo" id="r-q">
                <label for="r-q">Quarta</label>
                <input type="radio" name="promo" id="r-sx">
                <label for="r-sx">Sexta</label>
            </nav>
        </article>
    </section>
    <section id="produtos">
        <h2>Lanches</h2>
        <div class="container-cards">
            <div class="card">
                <div class="produto-img">
                    <img alt="xis-carne" src="img/x-carne.jpg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Xis Carne</li>
                        <li> R$12,00 <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span></li>
                    </ul>
                    <ul class="ingredientes">
                        <li>Bife de Carne</li>
                        <li>Milho</li>
                        <li>Ervilha</li>
                        <li>alface</li>
                        <li>Ovo</li>
                        <li>Tomate</li>
                    </ul>
                </div> 
            </div>
            <div class="card">
                <div class="produto-img">
                    <img alt="Xis Bacon" src="img/x-bacon.jpeg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Xis Bacon</li>
                        <li> R$17,00 
                            <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                        </li>
                    </ul>
                    <ul class="ingredientes">
                        <li>Bife de Carne Moída</li>
                        <li>Milho</li>
                        <li>Ervilha</li>
                        <li>alface</li>
                        <li>Ovo</li>
                        <li>Bacon</li>
                    </ul>
                </div> 
            </div>
            <div class="card">
                <div class="produto-img">
                    <img alt="Xis Acebolado" src="img/x-acebolado.jpg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Xis Acebolado</li>
                        <li> R$14,00 
                            <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                        </li>
                    </ul>
                    <ul class="ingredientes">
                        <li>Bife de Carne</li>
                        <li>Cebola</li>
                        <li>Milho</li>
                        <li>Ervilha</li>
                        <li>alface</li>
                        <li>Ovo</li>
                    </ul>
                </div> 
            </div> 
            <div class="card">
                <div class="produto-img">
                    <img alt="Hambúrguer Simples" src="img/h-s.jpg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Hamburguer Simples</li>
                        <li> R$12,00 
                            <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                        </li>
                    </ul>
                    <ul class="ingredientes">
                        <li></li>
                        <li>Bife de Carne</li>
                        <li>Queijo</li>
                        <li>Alface</li>
                        <li>Tomate</li>
                        <li>Maionese</li>
                        <li>Fritas</li>
                    </ul>
                </div> 
            </div>
            <div class="card">
                <div class="produto-img">
                    <img alt="Hamburguer Completo" src="img/h-c.jpg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Hamburguer Completo</li>
                        <li> R$15,00 
                            <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                        </li>
                    </ul>
                    <ul class="ingredientes">
                        <li>Bife de Carne</li>
                        <li>Queijo</li>
                        <li>Alface</li>
                        <li>Tomate</li>
                        <li>Cebola Roxa</li>
                        <li>Picles</li>
                        <li>Maionese</li>
                        <li>Molho especial</li>
                        <li>Fritas</li>
                    </ul>
                </div> 
            </div>
            <div class="card">
                <div class="produto-img">
                    <img  alt="Baurú Simples" src="img/b-s.jpg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Baurú Simples</li>
                        <li> R$15,00 
                            <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                        </li>
                    </ul>
                    <ul class="ingredientes">
                        <li>Pão D'água</li>
                        <li>Bife de Contrafilé</li>
                        <li>Cebola</li>
                        <li>Alface</li>
                        <li>Ovo</li>
                        <li>Queijo</li>
                    </ul>
                </div> 
            </div>
            <div class="card">
                <div class="produto-img">
                    <img alt="Baurú da Casa" src="img/b-s.jpg">
                </div>
                <div class="card-infos">
                    <ul class="card-infos-p">
                        <li>Baurú da Casa</li>
                        <li> R$23,00 
                            <span class="iconify" data-icon="carbon:add-alt" data-inline="false"></span>
                        </li>
                    </ul>
                    <ul class="ingredientes">
                        <li>Pão D'água</li>
                        <li>Bife de Contrafilé</li>
                        <li>Cebola</li>
                        <li>Alface</li>
                        <li>Ovo</li>
                        <li>Queijo</li>
                        <li>Bacon</li>
                        <li>Champignon</li>
                        <li>Picles</li>
                        <li>Iscas de Frango</li>
                        <li>Calabresa</li>
                    </ul>
                </div> 
            </div>
        </div>
    </section>
    <section id="comanda">
    <h2>Sua comanda</h2>
    <aside id="pedidos">
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido b-casa" >
                </div>
                <div class="pedido-info-container">
                    <p>Baurú da Casa</p>
                    <p>R$ 23,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido b-s" >
                </div>
                <div class="pedido-info-container">
                    <p>Baurú Simples</p>
                    <p>R$ 15,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido h-c">
                </div>
                <div class="pedido-info-container">
                    <p>Hamburguer Completo</p>
                    <p>R$ 15,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido x-a" >
                </div>
                <div class="pedido-info-container">
                    <p>Xis Acebolado</p>
                    <p>R$ 14,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido x-b" >
                </div>
                <div class="pedido-info-container">
                    <p>Xis Bacon</p>
                    <p>R$ 17,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido h-s" >
                </div>
                <div class="pedido-info-container">
                    <p>Hamburguer Simples</p>
                    <p>R$ 12,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido x-c">
                </div>
                <div class="pedido-info-container">
                    <p>Xis Carne</p>
                    <p>R$ 12,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido x-a" >
                </div>
                <div class="pedido-info-container">
                    <p>Xis Acebolado</p>
                    <p>R$ 14,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>        
        <div class="pedido-container">
            <div class="pedido">
                <div class="img-pedido h-s">
                </div>
                <div class="pedido-info-container">
                    <p>Hamburguer Simples</p>
                    <p>R$ 12,00</p>
                </div>
                <button class="excluir">
                    <span class="iconify" data-icon="feather:delete" data-inline="false"></span>
                </button>
            </div>
        </div>
    </aside>
    <aside id="decisoes">
        <div id="devolta-produtos"><span class="iconify" data-icon="maki:fast-food-15" data-inline="false"></span><a href="#produtos">Continuar Comprando</a></div>
        <div id="enviar">
            <a href="#">Enviar Pedido</a>
            <span class="iconify" data-icon="cib:whatsapp" data-inline="false"></span>
        </div>
    </aside>
    </section>
    <footer id="info-geral">
        <article id="redes">
            <h2>Dúvidas? Entre em contato!</h2>
            <a><span class="iconify" data-icon="uil:whatsapp" data-inline="false"></span></a>
            <a><span class="iconify" data-icon="brandico:facebook-rect" data-inline="false"></span></a>
            <a><span class="iconify" data-icon="ant-design:instagram-outlined" data-inline="false"></span></a>
        </article>
        <article id="bairros">
            <h2>Bairros Atendidos</h2>
            <ul>
                <li>Parque da Matriz</li>
                <li>Vale do Sol</li>
                <li>Princesa Isabel</li>
            </ul>
        </article>
        <article id="horario">
            <h2>Horário de Atendimento</h2>
            <div>
                <p> De segunda à sexta das 19:30 às 23:00</p>
                <p> Sábado das 19:30 às 23:00</p>
            </div>
        </article>
        <article id="phone">
            <h2>Fones</h2>
            <ul>
                <li>(51)99788-2654</li>
                <li>(51)99788-2654</li>
                <li>(51)99788-2654</li>
            </ul>
        </article>
    </footer>
	<script  src="js/jquery.js"></script>
	<script  src="js/script.js"></script>3
   <script  src="js/slide-autoral.js"></script> 
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
</body>
</html>




















