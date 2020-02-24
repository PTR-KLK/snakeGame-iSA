const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const stopRectangleInterval = document.getElementById("newRectangle");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.witdth / scale;

class Snake {
    constructor(startX,startY){
        this.witdth = scale;
        this.height = scale;
        this.speed = scale/2;
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

    // move(){
    //     this.positionX += this.speed;
    // }

    moveLeft(){
        this.speedX -= this.speed;
        this.speedY = 0;
    }

    moveRight(){
        this.speedX += this.speed;
        this.speedY = 0;
    }
    moveDown(){
        this.speedY += this.speed;
        this.speedX = 0;
    }
    moveUp(){
        this.speedY -= this.speed;
        this.speedX = 0;
    }
}

const posX = 0
const posY = 0

const snake = new Snake(posX,posY);

function animationFrame(){
    ctx.clearRect(0,0,800,800);
    
    snake.init();
    snake.update();
    // snake.move();
}

const refreshFrame = setInterval(animationFrame,100);

document.addEventListener('keydown',e => {
    if(e.code === 'ArrowLeft'){
        console.log('strzałka w lewo');
        snake.moveLeft();
    }

    if(e.code === 'ArrowRight'){
        console.log('strzałka w prawo');
        snake.moveRight();
    }
    if(e.code === 'ArrowUp'){
        console.log('strzałka w góre');
        snake.moveUp();
    }
    if(e.code === 'ArrowDown'){
        console.log('strzałka w dół');
        snake.moveDown();
    }
});