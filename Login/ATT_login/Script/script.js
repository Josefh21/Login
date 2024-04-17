var usuario = {
    nome: "a",
    senha: "a"
}

function salvarDados(){

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    console.log(nome)
    if(usuario.nome == nome && usuario.senha == senha){
        console.log("oi")
        if(cadastrando.nome == usuario.nome){
            if(cadastrando.senha == usuario.senha){
            location.replace("entrado.html");
            }
            else{
                alert("Senha incorreta.");
            }
        }
        else{
            alert("Usúario incorreto.");
        }
    }else if (usuario.nome == "" && usuario.senha == ""){
        alert("Preencha os campos.")
    }
}