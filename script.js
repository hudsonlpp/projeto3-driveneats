let compras = {};

// função que adiciona a borda ao clicar e que também o nome e o preço dos pedidos//

function borda1(click){
    const clique = document.querySelector(".prato .selecionado");
    if(clique !== null){
        clique.classList.remove("selecionado");

    } 

    click.classList.add("selecionado");
    compras.nomeP = document.querySelector(".prato .selecionado .child1").innerHTML;
    compras.valorP = document.querySelector(".prato .selecionado .child2").innerHTML;
    finalizar();
}

function borda2(click){
    const clique = document.querySelector(".bebida .selecionado");
    if(clique !== null){
        clique.classList.remove("selecionado");
    }
    
    click.classList.add("selecionado");

    compras.nomeB = document.querySelector(".bebida .selecionado .child1").innerHTML;
    compras.valorB = document.querySelector(".bebida .selecionado .child2").innerHTML;
    finalizar();
}

function borda3(click){
    const clique = document.querySelector(".sobremesa .selecionado");
    if(clique !== null){
        clique.classList.remove("selecionado");
    }

    click.classList.add("selecionado");

    compras.nomeS = document.querySelector(".sobremesa .selecionado .child1").innerHTML;
    compras.valorS = document.querySelector(".sobremesa .selecionado .child2").innerHTML;

    finalizar();
}

//função que habilita o botão de fechar pedido//

function finalizar(){
    const pratofinalizado = document.querySelector(".prato .selecionado");
    const bebidafinalizado = document.querySelector(".bebida .selecionado");
    const sobremesafinalizado = document.querySelector(".sobremesa .selecionado");
    const botaoverde = document.querySelector(".botao");
    if(pratofinalizado !== null && bebidafinalizado !== null && sobremesafinalizado !== null){
        botaoverde.classList.add("habilitado");
        botaoverde.classList.remove("desabilitado");
        botaoverde.innerHTML = "Fechar pedido"
    } 
}

// função que envia a mesagem pelo whatsapp//

function enviarMensagem(zap){

    const numeroP = Number(compras.valorP.replace("R$ ","").replace (",","."));
    const numeroB = Number(compras.valorB.replace("R$ ","").replace (",","."));
    const numeroS = Number(compras.valorS.replace("R$ ","").replace (",","."));
    alert(numeroP)
    const total = (numeroP+numeroB+numeroS).toFixed(2).replace (".",",");

    const cliente = prompt("informe por favor o seu nome")
    const endereco = prompt("informe por favor o seu endereço")

    const mensagem =  `Olá, gostaria de fazer o pedido:
    - Prato: ${compras.nomeP}
    - Bebida: ${compras.nomeB}
    - Sobremesa: ${compras.nomeS}
    Total: R$ ${total}
    
    Nome: ${cliente}
    Endereço: ${endereco}`;
    const encoded = encodeURIComponent(mensagem);
    window.open("https://wa.me/+5524992977985?text=" + encoded, '_blank');
}






