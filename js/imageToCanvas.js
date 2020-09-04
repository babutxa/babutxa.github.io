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

function processBlock(fullImg, srow, scol, w, h, drow, dcol, dCanvas,
    fliph = false, flipv = false) {
    // crop 
    var cropCanvas = document.createElement('canvas');
    cropCanvas.id = "cropCanvasId";
    cropCanvas.width = w;
    cropCanvas.height = h;
    cropContext = cropCanvas.getContext("2d");
    cropContext.drawImage(fullImg, scol, srow, w, h, 0, 0, w, h);

    // create auxiliary canvas to put the flip result in
    auxCanvas = document.createElement('canvas');
    auxCanvas.id = "destCanvasId";
    auxCanvas.width = cropCanvas.width;
    auxCanvas.height = cropCanvas.height;
    var auxCtx = auxCanvas.getContext("2d");

    // flip horizontal
    mirrorImage(auxCtx, cropCanvas, 0, 0, fliph, flipv);

    // put the result into resCanvas
    dContext = dCanvas.getContext("2d");
    dContext.drawImage(auxCanvas, 0, 0, w, h, dcol, drow, w, h);
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

    var blockW = 8;
    var blockH = 8;

    // head1
    processBlock(fullImg, 0, 8, blockW, blockH, 0, 8, resCanvas, true, true);
    processBlock(fullImg, 0, 16, blockW, blockH, 0, 16, resCanvas, true, true);
    processBlock(fullImg, 8, 0, blockW, blockH, 8, 16, resCanvas);
    processBlock(fullImg, 8, 8, blockW, blockH, 8, 24, resCanvas);
    processBlock(fullImg, 8, 16, blockW, blockH, 8, 0, resCanvas);
    processBlock(fullImg, 8, 24, blockW, blockH, 8, 8, resCanvas);

    // head2
    processBlock(fullImg, 0, 40, blockW, blockH, 0, 40, resCanvas, true, true);
    processBlock(fullImg, 0, 48, blockW, blockH, 0, 48, resCanvas, true, true);
    processBlock(fullImg, 8, 32, blockW, blockH, 8, 48, resCanvas);
    processBlock(fullImg, 8, 40, blockW, blockH, 8, 56, resCanvas);
    processBlock(fullImg, 8, 48, blockW, blockH, 8, 32, resCanvas);
    processBlock(fullImg, 8, 56, blockW, blockH, 8, 40, resCanvas);

  


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