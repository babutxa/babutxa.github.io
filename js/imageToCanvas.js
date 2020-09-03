
function setImageIntoCanvas(d) {
    var c = d.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = d.getElementById("minecraftSkinTextureToFlip");
    ctx.drawImage(img, 10, 10, 150, 180);
}