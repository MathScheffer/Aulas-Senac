<?php?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login</title>
        <link href="https://fonts.googleapis.com/css2?family=Kurale&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <section id="login">
            <h1>Faça seu Login</h1>
            <form id="form-log" name="cadastro" method="post">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" name="nome">
                <br><br>
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="exemplo@email.com">
                    <br><br>
                    <label for="senha">Senha</label>
                    <input id="senha" type="password" name="senha">
                    <br><br>
                <input type="submit" id="log" value="Enviar">
            </form>
        </section>
        <script  src="js/jquery.js"></script>
        <script  src="js/script-log.js"></script>
    </body>
</html>