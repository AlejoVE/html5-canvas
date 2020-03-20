function drawHandler(e){
    if(!isDrawing) return; // Stops function when mouse is not down
    ctx.beginPath();
    //star from 
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
