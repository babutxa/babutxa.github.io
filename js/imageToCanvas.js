
var myImage = document.getElementById("minecraftSkinTextureToFlip");
var myCanvas = doucment.getElementById("mySrcCanvas");

function imageToCanvas(myImage, myCanvas) {
    var myCanvasContext = myCanvas.getContext("2d");
    myCanvasContext.drawImage(myImage, 10, 10);
}