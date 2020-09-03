function imageToCanvas(myImage, myCanvas) {
    var myCanvasContext = myCanvas.getContext("2d");
    myCanvasContext.drawImage(myImage, 10, 10);
}