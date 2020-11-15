//criando o background
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let num = 0;
let maiorPlacar = 0;
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 32 * box, 32 * box); // 4 parâmetros sendo 1: posicao horizontal, 2: posicao vertical, 3:altura, 4:largura
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "up") direction = "down";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "down") direction = "up";
}

function incrementaPlacar() {
    document.getElementById("placar").innerText = "Placar : " + num;
}

function VerificaSeBateuRecorde() {
    document.getElementById("recorde").innerText = "Recorde : " + maiorPlacar;
}

function iniciarJogo() {

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :(\r\nPressione Ok para tentar denovo');
            num = 0;
            for (i = snake.length; i > 0; i--) {
                snake.pop();
            }
            snake[0] = {
                x: 8 * box,
                y: 8 * box
            }
            jogo = setInterval(iniciarJogo, 100);

        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
    incrementaPlacar();
    if (num > maiorPlacar) {
        maiorPlacar = num;
        VerificaSeBateuRecorde();
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY += box;
    if (direction == "down") snakeY -= box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        num++;
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);