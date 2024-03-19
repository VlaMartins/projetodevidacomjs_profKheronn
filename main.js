const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//iterando (percorrer elementos de uma lista) sobre a lista de botoes 
for (let i=0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j=0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

    }
}

//document.querySelector("#minhaDiv p").textContent = "Olá Chuva!";
const contadores = document.querySelectorAll (".contador");

const tempoAtual = new Date(); //retorna data atual do computador
const tempoObjetivo1 = new Date("2024-10-13T00:00:00");