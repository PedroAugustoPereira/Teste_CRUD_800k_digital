<?php
    require_once('conexao.php'); //CONEXÃO COM O BANCO

    //RECUPERANDO DADOS DOS INPUTS VIA AJAX
    
    $user_nome = mysqli_real_escape_string($connect, $_POST['nome_registro']);
    $user_email = mysqli_real_escape_string($connect, $_POST['email_registro']);
    $user_endereco = mysqli_real_escape_string($connect, $_POST['endereco_registro']);
    $user_senha = mysqli_real_escape_string($connect ,$_POST['senha_registro']);
    
    
    //CONSULTA PARA SALVAR OS DADOS
    $user_save = mysqli_query($connect, "INSERT INTO cadastros(nome, email, senha, endereco) VALUES('$user_nome','$user_email','$user_senha','$user_endereco')");

    if($user_save == true){
        echo "";
    }
    else{
    }
?>