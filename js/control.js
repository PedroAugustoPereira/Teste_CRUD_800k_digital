
//controle de clique no botão de gotoregistrar
//controle de exibição de tela de cadastrar e login
$("#btn_gotoRegistrar").on("click", () => {
    $(".logar").fadeOut(200 ,function(){
        $(".cadastrar").fadeIn(200, function(){
            document.getElementById("nome_logar").value = "";
            document.getElementById("email_logar").value = "";
            document.getElementById("senha_logar").value = "";
        });
    });
    
})

//controle de clique no botão de gotologin
//controle de exibição de tela de cadastrar e login
$("#btn_gotoLogar").on("click", () => {
    $(".cadastrar").fadeOut(200,function(){
        $(".logar").fadeIn(200, function(){
            document.getElementById("nome_registro").value = "";
            document.getElementById("email_registro").value = "";
            document.getElementById("endereco_registro").value = "";
            document.getElementById("senha_registro").value = "";
        });
    })
    
})

//VERIFICAÇÕES DE ALERTA DE INFORMAÇÃOS INVALIDAS NOS CAMPOS
$('#nome_registro').on('click', function(){
    if(document.getElementById("nome_registro").style.color == 'red'){
        document.getElementById("nome_registro").value = "";
        document.getElementById("nome_registro").style.color = '#07020D';
    }
})
$('#email_registro').on('click', function(){
    if(document.getElementById("email_registro").style.color == 'red'){
        document.getElementById("email_registro").value = "";
        document.getElementById("email_registro").style.color = '#07020D';
    }
})
$('#endereco_registro').on('click', function(){
    if(document.getElementById("endereco_registro").style.color == 'red'){
        document.getElementById("endereco_registro").value = "";
        document.getElementById("endereco_registro").style.color = '#07020D';
    }
})
$('#senha_registro').on('click', function(){
    if(document.getElementById("senha_registro").style.color == 'red'){
        document.getElementById("senha_registro").value = "";
        document.getElementById("senha_registro").style.color = '#07020D';
    }
})
//VERIFICAÇÕES DE ALERTA DE INFORMAÇÃOS INVALIDAS NOS CAMPOS



//função de esconder mostrar ou senha no resgistro
function senha_trocar_registro(){
    if(document.getElementById("senha_registro").type =="password"){
        document.getElementById("senha_registro").type= 'text'
    }
    else{
        document.getElementById("senha_registro").type ='password';
    }
        
}

//função de esconder ou mostrar senha no registro
function senha_trocar_login(){
    if(document.getElementById("senha_logar").type =="password"){
        document.getElementById("senha_logar").type= 'text'
    }
    else{
        document.getElementById("senha_logar").type ='password';
    }
        
}