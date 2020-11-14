let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // 4 parâmetros sendo 1: posicao horizontal, 2: posicao vertical, 3:altura, 4:largura
}

criarBG();