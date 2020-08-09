<?php
    @require 'model.php';

 
if(isset($_POST['nome']) && !empty($_POST['nome']) && isset($_POST['senha']) && !empty($_POST['senha']) && isset($_POST['senhaconf']) && !empty($_POST['senhaconf']) && isset($_POST['usuario']) && !empty($_POST['usuario']) && isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['telefone']) && !empty($_POST['telefone'])){
    
    $nome = addslashes($_POST['nome']);
    $senha = addslashes($_POST['senha']);
    $senhaconf = addslashes($_POST['senhaconf']);
    $telefone = addslashes($_POST['telefone']);
    $email = addslashes($_POST['email']);
    $usuario = addslashes($_POST['usuario']);
    $obj = new model();
    $json = json_encode($obj->realizarCadastro($usuario,$senha,$senhaconf,$nome,$email,$telefone));
 }
?>