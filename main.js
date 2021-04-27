var mouseEvent = "Empty";
var lastPosX, lastPosY;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    color = "black";
    width = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("colorCanvas").value;
    width = document.getElementById("lineWidth").value;

    mouseEvent = "MouseDown";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove",my_MouseMove);
function my_MouseMove(e){
    CurrentPosX = e.clientX-canvas.offsetLeft;
    CurrentPosY = e.clientY-canvas.offsetTop;

    if(mouseEvent == "MouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last Position of X and Y = ")
        console.log("X = "+lastPosX + "Y = "+lastPosY);
        ctx.moveTo(lastPosX,lastPosY);
        console.log("Current Position of X and Y = ")
        console.log("X = " + CurrentPosX + "Y = " + CurrentPosY);
        ctx.lineTo(CurrentPosX, CurrentPosY);
        ctx.stroke();
    }
    lastPosX = CurrentPosX;
    lastPosY = CurrentPosY;
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseEvent = "MouseUp";
}
canvas.addEventListener("mouseleave",my_mouseLeft);
function my_mouseLeft(e){
    mouseEvent = "MouseLeft";
    //Canvas rn:Why did mouse leave me :(
}

function clearAll(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
