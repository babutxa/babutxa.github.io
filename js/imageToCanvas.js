
function setImageIntoCanvas(d, imgId, canvasId) {
    var img = d.getElementById(imgId);
    var c = d.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 10, 10, 150, 180);
}