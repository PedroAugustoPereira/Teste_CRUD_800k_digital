<?php
    session_start(); //incio de sessão
    require_once('conexao.php'); //conexão com o banco
    $id = intval($_POST['id']) ; //recuperar id do usuario selecionado via ajax

    $user_delete = mysqli_query($connect, "DELETE FROM cadastros WHERE id='$id' "); //requisição deelete do usuario com o determinado id

    if($user_delete == true){
        //verificação se usuario logado é usuario que será apagdo
        if(intval($id) == intval($_SESSION['id'])){
            echo $_SESSION['id']; //retorno do id
        }          
    }
    else{
        echo "erro na requsição";
    }
?>