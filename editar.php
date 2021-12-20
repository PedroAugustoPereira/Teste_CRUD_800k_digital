<?php
    require_once("conexao.php"); //conexão com o banco

    //recuperar dados dos inputs via ajax
    $new_user_nome = mysqli_real_escape_string($connect, $_POST['nome_editar']);
    $new_user_email = mysqli_real_escape_string($connect, $_POST['email_editar']);
    $new_user_endereco = mysqli_real_escape_string($connect, $_POST['endereco_editar']);
    $new_user_senha = mysqli_real_escape_string($connect ,$_POST['senha_editar']);
    $id = intval($_POST['id']) ;

    //update de edição na tabela
    $user_update = mysqli_query($connect, "UPDATE cadastros SET nome='$new_user_nome', email='$new_user_email', senha='$new_user_senha', endereco='$new_user_endereco' WHERE id='$id'");

    if($user_update == true){
        echo "funcionou";
    }
    else{
        echo "falha";
    }
        
    
?>