
function setImageIntoCanvas(d, imgId, canvasId) {
    var img = d.getElementById(imgId);
    var c = d.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
};

function flipSkin(d, srcCanvasId) {
    var c = d.getElementById(srcCanvasId);
    var ctx = c.getContext("2d");

    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    // invert colors
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 255 - imgData.data[i];
      imgData.data[i+1] = 255 - imgData.data[i+1];
      imgData.data[i+2] = 255 - imgData.data[i+2];
      imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0); 
};