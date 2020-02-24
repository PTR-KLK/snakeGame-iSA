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
        this.speed = scale;
        this.startX = startX;
        this.startY = startY;
    }

    init(){
        ctx.fillStyle = 'rgb(45,140,32)'
        ctx.fillRect(this.startX,this.startY,this.witdth,this.height);
    }
    move(){
        // this.startX += this.speed;

        document.addEventListener('keydown',e => {
            if(e.code === 'ArrowLeft'){
                console.log('strzałka w lewo');
                this.startX -= this.speed;
            }

            if(e.code === 'ArrowRight'){
                console.log('strzałka w prawo');
                this.startX += this.speed;
            }
        });
    }
}

const posX = 0
const posY = 0

const snake = new Snake(posX,posY);

function animationFrame(){
    ctx.clearRect(0,0,800,800);
    
    snake.init();
    snake.move();
}

const refreshFrame = setInterval(animationFrame,250);

// document.addEventListener('keydown',e => {
//     console.log(e.code);
// });