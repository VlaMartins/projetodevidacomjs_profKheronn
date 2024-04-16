const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//iterando (percorrer elementos de uma lista) sobre a lista de botoes 
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
//document.querySelector("#minhaDiv p").textContent = "Olá Chuva!";
const contadores = document.querySelectorAll(".contador");
const tempoAtual = new Date(); //retorna data atual do computador
const tempoObjetivo1 = new Date("2024-04-19T00:00:00"); // formato de data padrao com hifem e um T para tempo
const tempoObjetivo2 = new Date("2024-07-08T00:00:00");
const tempoObjetivo3 = new Date("2024-04-18T00:00:00");
const tempoObjetivo4 = new Date("2024-04-17T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempofinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempofinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60; // sinal de porcentagem traz o resto da divisao
    minutos %= 60;
    horas %= 24;
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";

}

contadores[0].textContent = calculaTempo (tempoObjetivo1);

