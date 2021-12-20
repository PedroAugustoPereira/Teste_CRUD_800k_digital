<?php
    //destrói sessões
    session_start();
    session_destroy();
    header('location:index.html'); 
    die();   
?>