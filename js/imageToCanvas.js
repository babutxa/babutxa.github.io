
function setImageIntoCanvas(d, imgId, canvasId) {
    var img = d.getElementById(imgId);
    var c = d.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
};

function flipSkin(d, srcCanvasId) {
    var srcCanvas = d.getElementById(srcCanvasId);
    var srcCtx = srcCanvas.getContext("2d");
    var srcImgData = srcCtx.getImageData(0, 0, srcCanvas.width, srcCanvas.height);

    // create dest canvas
    var destCanvas = document.createElement('canvas');
    destCanvas.id = "destCanvasId";
    destCanvas.width = srcCanvas.width;
    destCanvas.height = srcCanvas.height;
    destCanvas.style.border = "1px solid #00d300";

    var destCtx = destCanvas.getContext("2d");
    var destImgData = destCtx.getImageData(0, 0, destCanvas.width, destCanvas.height);

    // invert colors
    var i;
    for (i = 0; i < srcImgData.data.length; i += 4) {
        destImgData.data[i] = 255 - srcImgData.data[i];
        destImgData.data[i+1] = 255 - srcImgData.data[i+1];
        destImgData.data[i+2] = 255 - srcImgData.data[i+2];
        destImgData.data[i+3] = 255;
    }
    destCtx.putImageData(destImgData, 0, 0); 

    // add destCanvas to body
    var body = d.getElementsByTagName("body")[0];
    body.appendChild(destCanvas);
};