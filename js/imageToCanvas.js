
function setImageIntoCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("minecraftSkinTextureToFlip");
    ctx.drawImage(img, 10, 10, 150, 180);
  }