<?php
    require 'model.php';
    if(isset($_POST['nome']) and !empty($_POST['nome'])){
    
        $nome = $_POST['nome'];
        $senha=$_POST['senha'];
    $obj = new model();
    $json = json_encode($obj->ehCliente($nome,$senha));
    echo $json;
}else{
     echo("vazio");
 }
?>