// arguments
// ctx : the context on which to draw the mirrored image
// image : the image to mirror
// x,y : the top left of the rendered image
// horizontal : boolean if true mirror along X
// vertical : boolean if true mirror along y
function mirrorImage(ctx, image, x = 0, y = 0, horizontal = false, vertical = false){
    ctx.save();  // save the current canvas state
    ctx.setTransform(
        horizontal ? -1 : 1, 0, // set the direction of x axis
        0, vertical ? -1 : 1,   // set the direction of y axis
        x + horizontal ? image.width : 0, // set the x origin
        y + vertical ? image.height : 0   // set the y origin
    );
    ctx.drawImage(image, 0, 0);
    ctx.restore(); // restore the state as it was when this function was called
}

function processBlock(fullImg, sx, sy, w, h, dx, dy, dCanvas) {
    // crop 
    var cropCanvas = document.createElement('canvas');
    cropCanvas.id = "cropCanvasId";
    cropCanvas.width = w;
    cropCanvas.height = h;
    cropContext = cropCanvas.getContext("2d");
    cropContext.drawImage(fullImg, sx, sy, w, h, 0, 0, w, h);

    // debug purposes
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(cropCanvas);

    // create auxiliary canvas to put the flip result in
    auxCanvas = document.createElement('canvas');
    auxCanvas.id = "destCanvasId";
    auxCanvas.width = cropCanvas.width;
    auxCanvas.height = cropCanvas.height;
    var auxCtx = auxCanvas.getContext("2d");

    // flip horizontal
    mirrorImage(auxCtx, cropCanvas, 0, 0, true, false);

    // put the result into resCanvas
    dContext = dCanvas.getContext("2d");
    dContext.drawImage(auxCanvas, dx, dy);
}

function flipSkin(imgId) {
    var fullImg = document.getElementById(imgId);

    // create res canvas if necessary
    var resCanvas = document.getElementById('resCanvasId');
    if (resCanvas == null || typeof(resCanvas) == 'undefined') {
        // Create one
        resCanvas = document.createElement('canvas');
        resCanvas.id = "resCanvasId";
        resCanvas.width = fullImg.width;
        resCanvas.height = fullImg.height;
        resCanvas.style.border = "1px solid #00d300";
    }

    processBlock(fullImg, resCanvas, 0, 0, 32, 32, 0, 0);

    // add resCanvas to body
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(resCanvas);
}

function flipSkin_old(imgId) {
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
    if (destCanvas == null || typeof(destCanvas) == 'undefined') {
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
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(destCanvas);
};