let canvas;
let context;
let canvas_width, canvas_height;
let imgApple, imgHead, imgTail, imgBody;
let timestampLastRefresh = 0;
let snake;
let appleX, appleY;
let dX = 1;
let dY = 0;
let gameOver = false;

function init() {
    snake = [[8, 9], [9, 9], [10, 9]];
    appleX = Math.floor(Math.random() * 20);
    appleY = Math.floor(Math.random() * 20);
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas_width = canvas.width = 500;
    canvas_height = canvas.height = 500;
    imgApple = document.getElementById("apple");
    imgHead = document.getElementById("headRight");
    imgTail = document.getElementById("tailRight");
    drawSnake();
    drawApple();
    window.requestAnimationFrame(refresh);
    addEventListener("keypress", changeDirection);
}

function changeDirection(evt) {
    switch (evt.key) {
        case 'w':
        case 'W':
            if (dX === 0 && dY === 1) {
                break
            } else {
                dX = 0;
                dY = -1;
                imgHead = document.getElementById("headUp");
                window.requestAnimationFrame(refresh);
                break;
            }
        case 'a':
        case 'A':
            if (dX === 1 && dY === 0) {
                break
            } else {
                dX = -1;
                dY = 0;
                imgHead = document.getElementById("headLeft");
                window.requestAnimationFrame(refresh);
                break;
            }
        case 's':
        case 'S':
            if (dX === 0 && dY === -1) {
                break
            } else {
                dX = 0;
                dY = 1;
                imgHead = document.getElementById("headDown");
                window.requestAnimationFrame(refresh);
                break;
            }
        case 'd':
        case 'D':
            if (dX === -1 && dY === 0) {
                break
            } else {
                dX = 1;
                dY = 0;
                imgHead = document.getElementById("headRight");
                window.requestAnimationFrame(refresh);
                break;
            }
    }
}

function refresh(timestamp) {
    const goneTime = timestamp - timestampLastRefresh;
    if (goneTime > 500) {
        update();
        drawApple();
        drawSnake();
        timestampLastRefresh = timestamp;
    }
    if (!gameOver) {
        window.requestAnimationFrame(refresh);
    }
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let randomXY;
    let felder = [];
    let freeField = [];
    if (appleX === snake[snake.length - 1][0] && appleY === snake[snake.length - 1][1]) {
        headX = snake[snake.length - 1][0] + dX;
        headY = snake[snake.length - 1][1] + dY;
        snake.push([headX, headY]);
        for (let y = 0; y < 20; y++) {
            felder[y] = Array(20);
        }
        for (let i = 0; i < snake.length - 1; i++) {
            felder[snake[i][1]][snake[i][0]] = 1;
        }
        for (let n = 0; n < felder.length; n++) {
            for (let m = 0; m < felder.length; m++) {
                if (felder[n][m] !== 1) {
                    freeField.push([m, n]);
                }
            }
        }
        randomXY = Math.floor(Math.random() * freeField.length);
        appleX = freeField[randomXY][0];
        appleY = freeField[randomXY][1];
    } else {
        for (let i = 0; i < snake.length - 1; i++) {
            if (snake[snake.length - 1][0] === snake[i][0] && snake[snake.length - 1][1] === snake[i][1]) {
                alert("GAME OVER");
                gameOver = true;
            } else {
                snake[i][0] = snake[i + 1][0];
                snake[i][1] = snake[i + 1][1];
            }
        }
        if (snake.length === 400) {
            alert("YOU WON!");
            gameOver = true;
        } else if (!gameOver) {
            snake[snake.length - 1][0] = snake[snake.length - 1][0] + dX;
            snake[snake.length - 1][1] = snake[snake.length - 1][1] + dY;
        }
    }
    if (snake[snake.length - 1][0] < 0 || snake[snake.length - 1][0] > 19 || snake[snake.length - 1][1] < 0 || snake[snake.length - 1][1] > 19) {
        alert("GAME OVER");
        gameOver = true;
    }
}

function drawSnake() {
    for (let i = 1; i < snake.length - 1; i++) {
        const coordinateX = snake[i][0];
        const coordinateY = snake[i][1];
        if (coordinateY - 1 === snake[i - 1][1] && coordinateY + 1 === snake[i + 1][1] || coordinateY + 1 === snake[i - 1][1] && coordinateY - 1 === snake[i + 1][1]) {
            imgBody = document.getElementById("bodyVertikal");
        } else if (coordinateX - 1 === snake[i - 1][0] && coordinateX + 1 === snake[i + 1][0] || coordinateX + 1 === snake[i - 1][0] && coordinateX - 1 === snake[i + 1][0]) {
            imgBody = document.getElementById("bodyHorizontal");
        }
        // Snake moves from left to up or Snake moves from up to left
        else if (coordinateX - 1 === snake[i - 1][0] && coordinateY - 1 === snake[i + 1][1] || coordinateX - 1 === snake[i + 1][0] && coordinateY - 1 === snake[i - 1][1]) {
            imgBody = document.getElementById("upLeft");
        }
        // Snake moves from left to down or Snake moves from down to left
        else if (coordinateX - 1 === snake[i - 1][0] && coordinateY + 1 === snake[i + 1][1] || coordinateX - 1 === snake[i + 1][0] && coordinateY + 1 === snake[i - 1][1]) {
            imgBody = document.getElementById("downLeft");
        }
        // Snake moves from right to down or Snake moves from down to right
        else if (coordinateX + 1 === snake[i - 1][0] && coordinateY + 1 === snake[i + 1][1] || coordinateX + 1 === snake[i + 1][0] && coordinateY + 1 === snake[i - 1][1]) {
            imgBody = document.getElementById("downRight");
        }
        // Snake moves from right to up or Snake moves from up to right
        else if (coordinateX + 1 === snake[i - 1][0] && coordinateY - 1 === snake[i + 1][1] || coordinateX + 1 === snake[i + 1][0] && coordinateY - 1 === snake[i - 1][1]) {
            imgBody = document.getElementById("upRight");
        }
        context.drawImage(imgBody, 0, 0, 108, 108, coordinateX * 25, coordinateY * 25, 25, 25);
    }
    // Snake moves down
    if (snake[0][1] + 1 === snake[1][1]) {
        imgTail = document.getElementById("tailDown");
    }
    // Snake moves up
    else if (snake[0][1] - 1 === snake[1][1]) {
        imgTail = document.getElementById("tailUp");
    }
    // Snake moves left
    else if (snake[0][0] - 1 === snake[1][0]) {
        imgTail = document.getElementById("tailLeft");
    }
    // Snake moves right
    else if (snake[0][0] + 1 === snake[1][0]) {
        imgTail = document.getElementById("tailRight");
    }
    context.drawImage(imgTail, 0, 0, 110, 110, snake[0][0] * 25, snake[0][1] * 25, 25, 25);
    coordinateX = snake[snake.length - 1][0];
    coordinateY = snake[snake.length - 1][1];
    context.drawImage(imgHead, 0, 0, 110, 110, coordinateX * 25, coordinateY * 25, 25, 25);
}

function drawApple() {
    context.drawImage(imgApple, 0, 0, 430, 430, appleX * 25, appleY * 25, 15, 15);
}
