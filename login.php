<?php
    session_start();//inicio de sessão
    require_once('conexao.php');//conexão com o banco
    
    //recuperação de dados de input
    $user_nome = mysqli_real_escape_string($connect, $_POST['nome_logar']);
    $user_email = mysqli_real_escape_string($connect, $_POST['email_logar']);
    $user_senha = mysqli_real_escape_string($connect, $_POST['senha_logar']);

    //login no banco
    $user_login = mysqli_query($connect, "SELECT *FROM cadastros WHERE nome='$user_nome' and email='$user_email' and senha='$user_senha'");


    $row = mysqli_num_rows($user_login);

    $first_name = explode(" ", $user_nome);
    $user_first_name = $first_name[0];


    //salvar nome e id em sessões para verificação de login
    if($row != 0){
        $user_id = mysqli_query($connect, "SELECT id FROM cadastros WHERE email='$user_email'");
        $number_id=mysqli_fetch_array($user_id);
        $_SESSION['nome'] = $user_first_name;
        $_SESSION['id'] = $number_id[0];
        header('location:painel.php');
        die();
    }
    else{
        echo "<script>
            alert('Usuario não encontrado');
            window.location.href = 'index.html'; 
        </script>";
    }
?>