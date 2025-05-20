 
    function Login() {
    
  
    console.log("entrou na função");

    var campousuario = document.getElementById('usuario').value;
    var camposenha = document.getElementById('senha').value;
    var campocodigoInstalacao = document.getElementById('codigo').value;
     
    console.log(campousuario)
    console.log(camposenha)
    console.log(campocodigoInstalacao)


  if (campousuario == "admin" && camposenha == "1234" && campocodigoInstalacao == "tplink2025") {
        alert("Login realizado com sucesso!");

     window.location.replace("dashboard.html");

       
   
    } else {
        alert("Usuário, senha ou código de instalação inválidos!");
    }

}
  
 var  botaoEntrar = document.getElementById("botaoEntrar")

  botaoEntrar.addEventListener("click", Login)
    

