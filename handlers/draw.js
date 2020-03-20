function drawHandler(e){
    if(!isDrawing) return; // Stops function when mouse is not down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    //star from 
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360){
        hue = 0
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if (direction){
        ctx.lineWidth++;
    } else{
        ctx.lineWidth--;
    }
    
}
