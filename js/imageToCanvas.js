
function setImageIntoCanvas(d, imgId, canvasId) {
    var img = d.getElementById(imgId);
    var c = d.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
};

function flipSkin(d, imgId) {
    var img = document.getElementById(imgId);
 
    // create source canvas
    var srcCanvas = document.createElement('canvas');
    srcCanvas.id = "srcCanvasId";
    srcCanvas.width = img.width;
    srcCanvas.height = img.height;
    srcCanvas.style.border = "1px solid #d30000";

    // put image into source canvas
    var srcCtx = srcCanvas.getContext("2d");
    srcCtx.drawImage(img, 0, 0);

    // create dest canvas if necessary
    var destCanvas =  document.getElementById('destCanvasId');
    if (typeof(destCanvas) == 'undefined' | element == null) {
        // Create one
        destCanvas = document.createElement('canvas');
        destCanvas.id = "destCanvasId";
        destCanvas.width = srcCanvas.width;
        destCanvas.height = srcCanvas.height;
        destCanvas.style.border = "1px solid #00d300";
    }

    var destCtx = destCanvas.getContext("2d");
    var destImgData = destCtx.getImageData(0, 0, destCanvas.width, destCanvas.height);

    // invert colors of srcCanvas and put the result int destCanvas
    var srcImgData = srcCtx.getImageData(0, 0, srcCanvas.width, srcCanvas.height);

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
    //body.appendChild(srcCanvas);
    body.appendChild(destCanvas);
};