
function setImageIntoCanvas(d, imgId, canvasId) {
    var img = d.getElementById(imgId);
    var c = d.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, 64, 64);
}

function flipSkin(d, srcCanvasId) {
    var srcCanvas = d.getElementById(srcCanvasId);
}