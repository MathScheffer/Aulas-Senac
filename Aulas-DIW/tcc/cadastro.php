<?php?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Cadastre-se</title>
        	<link href="https://fonts.googleapis.com/css2?family=Kurale&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <section>
            <h1>Faça seu Cadastro para automatizar seus pedidos !</h1>
            <form id="form-cad" name="cadastro" method="post">
                <article id="dados-pessoais">
                    <h2>Dados para Login</h2>
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" name="nome">
                    <br><br>
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="exemplo@email.com">
                    <br><br>
                    <label for="senha">Senha</label>
                    <input id="senha" type="password" name="senha">
                    <br><br>
                    <label for="senhaconf">Confirme sua senha</label>
                    <input id="senhaconf" type="password" name="senhaconf">
                    <h2>Localização</h2>
                    <label for="bairro">Bairro</label>
                    <input type="text" id="bairro" name="bairro">
                    <br><br>
                    <label for="rua">Rua</label>
                    <input type="text" id="rua" name="rua">
                    <br><br>
                    <label for="numero">Número</label>
                    <input type="number" id="numero" name="numero">
                </article>
                <input type="submit" id="botao" value="Enviar">
            </form>
        </section>
        <script src="js/jquery.js"></script>
        <script src="js/script-cad.js"></script>
    </body>
</html>