<?php
   /*$nome = $_POST['nome'];
   $array = array('status'=>'');
    if ($nome == '123'){
        $array['status'] ='ok';
    }
    echo json_encode($array);*/

class model{
    private $pdo;
    private $resposta = array('status' => '');
    function __construct(){
        try{
            $this->pdo = new PDO("mysql:dbname=projeto;host=localhost","root","");
                //echo "conectado";
        }catch(PDOException $e){
            echo "Erro".$e->getMessage();
        }
    }
    public function ehCliente($usuario,$senha){
        $sql = $this->pdo->prepare("SELECT * FROM dadosusuario WHERE NOME = ?");
        $sql->execute(array($usuario));
        if($sql->rowCount() >0){
            $conteudo = $sql->fetch();
            $sql = $this->pdo->prepare("SELECT * FROM dadosusuario WHERE SENHA = ?");
            $sql->execute(array($senha));
            if($sql->rowCount()>0){
                return $resposta['status'] = "ok";
                
            }else{
                return $resposta['status'] =  "senha incorreta!";
            }
            
        }else{
            return $resposta['status'] = false;
        }
    }

    public function realizarCadastro($usuario,$senha,$senhaconf,$nome,$email,$telefone){
        if($this->ehCliente($usuario,$senha) == false){
            if($senha == $senhaconf){
                $ins1 = $this->pdo->prepare("INSERT INTO dadosusuario(NOME, SENHA) VALUES(:usuario,:senha) ");
                $ins1->bindValue(':usuario',$usuario);
                $ins1->bindValue(':senha',$senha);
                $ins1->execute();
                /*
                $sql = $this->pdo->prepare("SELECT IDUSUARIO FROM dadosusuario WHERE NOME = ? AND SENHA = ?");
                $sql->execute(array($usuario,$senha));
                if($sql)*/
                $id = $this->pdo->lastInsertId();
                //echo ($id);

                $ins2 = $this->pdo->prepare("INSERT INTO dadospessoal(NOME, TELEFONE, EMAIL,IDUSUARIO) VALUES(:nome,:telefone, :email, :idusuario) ");
                $ins2->bindValue(':nome',$nome);
                $ins2->bindValue(':telefone',$telefone);
                $ins2->bindValue(':email',$email);
                $ins2->bindValue(':idusuario',$id);
                $ins2->execute();
                return $resposta['status'] = "Cadastrado!";

            }
        }else{
            return $resposta['status'] = "Usuário já existente!";
        }
    }   
} 


?>
















