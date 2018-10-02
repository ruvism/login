const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener('click', function(event){
    event.preventDefault();
    const valor = input.value;
    if ((valor == "") || (valor.search("@") == -1)){
    alert("Insira um e-mail válido")
    } else{
    const espacoMensagem = document.createElement("span");
    const mensagem = document.createTextNode("E-mail cadastrado com sucesso!");
    espacoMensagem.appendChild(mensagem);
    
    
    const elementoVo = document.querySelector(".news__form");
    elementoVo.insertBefore(mensagem, input.parentNode);
    //mensagem.style.color = "red";
    

    }
});