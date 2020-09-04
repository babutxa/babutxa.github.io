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

function flipSkin(imgId) {
    var fullImg = document.getElementById(imgId);
 
    // create full source image canvas
    var fullImgCanvas = document.createElement('canvas');
    fullImgCanvas.id = "srcCanvasId";
    fullImgCanvas.width = fullImg.width;
    fullImgCanvas.height = fullImg.height;
    fullImgCanvas.style.border = "1px solid #d30000";

    // put full image into canvas
    var fullImgCtx = fullImgCanvas.getContext("2d");
    fullImgCtx.drawImage(fullImg, 0, 0);

    // get a crop of full image
    var img = fullImgCtx.getImageData(0, 0, 8, 8); //x, y, with, height

    // create dest canvas if necessary
    var destCanvas = document.getElementById('destCanvasId');
    if (destCanvas == null || typeof(destCanvas) == 'undefined') {
        // Create one
        destCanvas = document.createElement('canvas');
        destCanvas.id = "destCanvasId";
        destCanvas.width = img.width;
        destCanvas.height = img.height;
        destCanvas.style.border = "1px solid #00d300";
    }
    var destCtx = destCanvas.getContext("2d");

    // flip horizontal
    mirrorImage(destCtx, img, 0, 0, true, false);

    // add destCanvas to body
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(destCanvas);
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