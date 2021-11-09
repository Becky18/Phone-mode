var mouseEvent = "";
var src_x, src_y,last_x,last_y;
width_of_line = 1;

var width=screen.width
var height=screen.height

var new_width=width-70
var new_height=height-300

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {

    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    dest_x = e.clientX - canvas.offsetLeft;
    dest_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(src_x, src_y);
        ctx.lineTo(dest_x, dest_y);
        ctx.stroke();
    }

    src_x = dest_x;
    src_y = dest_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
if(width<922){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
    console.log("touchstart function started")
     last_x=e.touches[0].clientX - canvas.offsetLeft;
     last_y=e.touches[0].clientY - canvas.offsetTop;
     console.log(last_x+last_y)
}
canvas.addEventListener("touchmove",my_touchMove)
function my_touchMove(e){
    console.log("touchmove function started")
    var current_x=e.touches[0].clientX - canvas.offsetLeft;
    var current_y=e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    last_x=current_x;
    last_y=current_y;
    console.log(current_x+current_y)
}

