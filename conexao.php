<?php

    //conexão com o banco de dados
    $connect = mysqli_connect('localhost', 'root', '', 'db_users');
    $database = mysqli_select_db($connect,'db_users');
    mysqli_set_charset($connect, 'utf-8');
?>