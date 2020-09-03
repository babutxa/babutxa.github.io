
function setImageIntoCanvas(c, img) {
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 10, 10, 150, 180);
}