const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const stopRectangleInterval = document.getElementById("newRectangle");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.witdth / scale;

// ctx.fillStyle = 'rgb(45,140,32)'
// ctx.fillRect(0,0,scale*2,scale*3);

// window.setTimeout(() => ctx.clearRect(0,0,scale*2,scale*3), 2000);

// newRectangleBtn.addEventListener('click',()=>{
//     ctx.clearRect(0,0,800,800);

//     const randomX = Math.floor(Math.random()*40);
//     const randomY = Math.floor(Math.random()*40);
//     console.log(scale*randomX,scale*randomY);

//     const randomHeight = Math.floor(Math.random()*5+1);
//     const randomWidth = Math.floor(Math.random()*5+1);
//     console.log(scale*randomWidth,randomHeight);

//     ctx.fillStyle = 'rgb(45,140,32)'
//     ctx.fillRect(scale*randomX,scale*randomY,scale*randomWidth,scale*randomHeight);
// });

// function createRectangle(){
//     ctx.clearRect(0,0,800,800);

//     const randomX = Math.floor((Math.random()*40+1)-1);
//     const randomY = Math.floor((Math.random()*40+1)-1);

//     const randomHeight = Math.floor(Math.random()*5+1);
//     const randomWidth = Math.floor(Math.random()*5+1);
    
//     ctx.fillStyle = 'rgb(45,140,32)'
//     ctx.fillRect(scale*randomX,scale*randomY,scale*randomWidth,scale*randomHeight);
// }

// const rectangleInterval = window.setInterval(createRectangle, 1000);

// function stopInterval(){
//     clearInterval(rectangleInterval);
// }

// stopRectangleInterval.addEventListener('click',stopInterval);