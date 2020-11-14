//criando o background
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // 4 parâmetros sendo 1: posicao horizontal, 2: posicao vertical, 3:altura, 4:largura
}


//criando a cobrinha

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();