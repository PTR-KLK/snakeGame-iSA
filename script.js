const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const stopRectangleInterval = document.getElementById("newRectangle");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

class Snake {
    constructor(startX,startY){
        this.witdth = scale;
        this.height = scale;
        this.speed = scale;
        this.speedX = 0;
        this.speedY = 0;
        this.positionX = startX;
        this.positionY = startY;
    }

    init(){
        ctx.fillStyle = 'rgb(45,140,32)'
        ctx.fillRect(this.positionX,this.positionY,this.witdth,this.height);
    }
    update(){
        this.positionX += this.speedX;
        this.positionY += this.speedY;
    }

    moveLeft(){
        switch(this.speedX){
            case 0:
                this.speedX -= this.speed;
                this.speedY = 0;
                break;
            case scale:
                this.speedX *= -1;
                this.speedY = 0;
                break;
        }
    }

    moveRight(){
        switch(this.speedX){
            case 0:
                this.speedX += this.speed;
                this.speedY = 0;
                break;
            case -scale:
                this.speedX *= -1;
                this.speedY = 0;
                break;
        }
    }
    moveDown(){
        switch(this.speedY){
            case 0:
                this.speedY += this.speed;
                this.speedX = 0;
                break;
            case -scale:
                this.speedY *= -1;
                this.speedX = 0;
                break;
        }
    }
    moveUp(){
        switch(this.speedY){
            case 0:
                this.speedY -= this.speed;
                this.speedX = 0;
                break;
            case scale:
                this.speedY *= -1;
                this.speedX = 0;
                break;
        }
    }
}

class Apple {
    color = '#ff0000'
    constructor(){
        this.x = (Math.floor(Math.random() * columns -1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows -1) + 1) * scale;
        console.log(this.x,this.y);
        console.log(columns);
    }

    draw = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y, scale, scale);
    }
}

const posX = 0
const posY = 0

const snake = new Snake(posX,posY);
const apple = new Apple();

function animationFrame(){
    ctx.clearRect(0,0,800,800);
    
    snake.init();
    snake.update();
    apple.draw();
}

const refreshFrame = setInterval(animationFrame,250);

document.addEventListener('keydown',e => {
    
    switch(e.code){
        case 'ArrowLeft':
            snake.moveLeft();
            break;
        case 'ArrowRight':
            snake.moveRight();
            break;
        case 'ArrowUp':
            snake.moveUp();
            break;
        case 'ArrowDown':
            snake.moveDown();
            break;     
    }

});