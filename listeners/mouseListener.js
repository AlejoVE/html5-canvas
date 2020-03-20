canvas.addEventListener("mousedown", mouseDownHandler);
canvas.addEventListener("mousemove", drawHandler);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
