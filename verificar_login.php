<?php
session_start();
//verifica se sessão existe, se sim o usuario está logado
if(!$_SESSION['nome']){
    header('location:index.html');
    exit();
}
?>