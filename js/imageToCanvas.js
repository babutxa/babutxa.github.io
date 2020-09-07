function picSkinTextureOnChange(evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('myImage').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
        flipSkin('myImage');
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
};


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

    var headR = 8;
    var bodyH = 12;
    var armlegR = 4;
    var slimArmR = 3;
 
    // head
    processBlock(fullImg, 0, 8, headR, headR, 0, 8, resCanvas, true, true);
    processBlock(fullImg, 0, 16, headR, headR, 0, 16, resCanvas, true, true);
    processBlock(fullImg, 8, 0, headR, headR, 8, 16, resCanvas);
    processBlock(fullImg, 8, 8, headR, headR, 8, 24, resCanvas);
    processBlock(fullImg, 8, 16, headR, headR, 8, 0, resCanvas);
    processBlock(fullImg, 8, 24, headR, headR, 8, 8, resCanvas);

    // head2
    processBlock(fullImg, 0, 40, headR, headR, 0, 40, resCanvas, true, true);
    processBlock(fullImg, 0, 48, headR, headR, 0, 48, resCanvas, true, true);
    processBlock(fullImg, 8, 32, headR, headR, 8, 48, resCanvas);
    processBlock(fullImg, 8, 40, headR, headR, 8, 56, resCanvas);
    processBlock(fullImg, 8, 48, headR, headR, 8, 32, resCanvas);
    processBlock(fullImg, 8, 56, headR, headR, 8, 40, resCanvas);

    // left leg (LL) -> right leg (RL)
    processBlock(fullImg, 48, 20, armlegR, armlegR, 16, 4, resCanvas, true, true);
    processBlock(fullImg, 48, 24, armlegR, armlegR, 16, 8, resCanvas, true, true);
    processBlock(fullImg, 52, 28, armlegR, bodyH, 20, 4, resCanvas);
    processBlock(fullImg, 52, 20, armlegR, bodyH, 20, 12, resCanvas);
    processBlock(fullImg, 52, 24, armlegR, bodyH, 20, 0, resCanvas);
    processBlock(fullImg, 52, 16, armlegR, bodyH, 20, 8, resCanvas);

    // right leg (RL) -> left leg (LL)
    processBlock(fullImg, 16, 4, armlegR, armlegR, 48, 20, resCanvas, true, true);
    processBlock(fullImg, 16, 8, armlegR, armlegR, 48, 24, resCanvas, true, true);
    processBlock(fullImg, 20, 4, armlegR, bodyH, 52, 28, resCanvas);
    processBlock(fullImg, 20, 12, armlegR, bodyH, 52, 20, resCanvas);
    processBlock(fullImg, 20, 0, armlegR, bodyH, 52, 24, resCanvas);
    processBlock(fullImg, 20, 8, armlegR, bodyH, 52, 16, resCanvas);

    // left leg 2 (LL2) -> right leg 2 (RL2)
    processBlock(fullImg, 48, 4, armlegR, armlegR, 32, 4, resCanvas, true, true);
    processBlock(fullImg, 48, 8, armlegR, armlegR, 32, 8, resCanvas, true, true);
    processBlock(fullImg, 52, 12, armlegR, bodyH, 36, 4, resCanvas);
    processBlock(fullImg, 52, 4, armlegR, bodyH, 36, 12, resCanvas);
    processBlock(fullImg, 52, 8, armlegR, bodyH, 36, 0, resCanvas);
    processBlock(fullImg, 52, 0, armlegR, bodyH, 36, 8, resCanvas);

    // right leg 2 (RL2) -> left leg 2 (LL2)
    processBlock(fullImg, 32, 4, armlegR, armlegR, 48, 4, resCanvas, true, true);
    processBlock(fullImg, 32, 8, armlegR, armlegR, 48, 8, resCanvas, true, true);
    processBlock(fullImg, 36, 4, armlegR, bodyH, 52, 12, resCanvas);
    processBlock(fullImg, 36, 12, armlegR, bodyH, 52, 4, resCanvas);
    processBlock(fullImg, 36, 0, armlegR, bodyH, 52, 8,  resCanvas);
    processBlock(fullImg, 36, 8, armlegR, bodyH, 52, 0, resCanvas);

    // body
    processBlock(fullImg, 16, 20, headR, armlegR, 16, 20, resCanvas, true, true);
    processBlock(fullImg, 16, 28, headR, armlegR, 16, 28, resCanvas, true, true);
    processBlock(fullImg, 20, 28, armlegR, bodyH, 20, 16, resCanvas);
    processBlock(fullImg, 20, 32, headR, bodyH, 20, 20, resCanvas);
    processBlock(fullImg, 20, 20, headR, bodyH, 20, 32, resCanvas);
    processBlock(fullImg, 20, 16, armlegR, bodyH, 20, 28, resCanvas);

    // body 2
    processBlock(fullImg, 32, 20, headR, armlegR, 32, 20, resCanvas, true, true);
    processBlock(fullImg, 32, 28, headR, armlegR, 32, 28, resCanvas, true, true);
    processBlock(fullImg, 36, 28, armlegR, bodyH, 36, 16, resCanvas);
    processBlock(fullImg, 36, 32, headR, bodyH, 36, 20, resCanvas);
    processBlock(fullImg, 36, 20, headR, bodyH, 36, 32, resCanvas);
    processBlock(fullImg, 36, 16, armlegR, bodyH, 36, 28, resCanvas);

    // slim left arm -> slim right arm
    processBlock(fullImg, 48, 36, slimArmR, armlegR, 16, 44, resCanvas, true, true);
    processBlock(fullImg, 48, 39, slimArmR, armlegR, 16, 47, resCanvas, true, true);
    processBlock(fullImg, 52, 39, armlegR, bodyH, 20, 40, resCanvas);
    processBlock(fullImg, 52, 43, slimArmR, bodyH, 20, 44, resCanvas);
    processBlock(fullImg, 52, 32, armlegR, bodyH, 20, 47, resCanvas);
    processBlock(fullImg, 52, 36, slimArmR, bodyH, 20, 51, resCanvas);

    // slim right arm -> slim left arm
    processBlock(fullImg, 16, 44, slimArmR, armlegR, 48, 36, resCanvas, true, true);
    processBlock(fullImg, 16, 47, slimArmR, armlegR, 48, 39, resCanvas, true, true);
    processBlock(fullImg, 20, 40, armlegR, bodyH, 52, 39, resCanvas);
    processBlock(fullImg, 20, 44, slimArmR, bodyH, 52, 43, resCanvas);
    processBlock(fullImg, 20, 47, armlegR, bodyH, 52, 32, resCanvas);
    processBlock(fullImg, 20, 51, slimArmR, bodyH, 52, 36, resCanvas);

    // slim left arm 2 -> slim right arm 2
    processBlock(fullImg, 48, 52, slimArmR, armlegR, 32, 44, resCanvas, true, true);
    processBlock(fullImg, 48, 55, slimArmR, armlegR, 32, 47, resCanvas, true, true);
    processBlock(fullImg, 52, 55, armlegR, bodyH, 36, 40, resCanvas);
    processBlock(fullImg, 52, 59, slimArmR, bodyH, 36, 44, resCanvas);
    processBlock(fullImg, 52, 48, armlegR, bodyH, 36, 47, resCanvas);
    processBlock(fullImg, 52, 52, slimArmR, bodyH, 36, 51, resCanvas);

    // slim right arm 2 -> slim left arm 2
    processBlock(fullImg, 32, 44, slimArmR, armlegR, 48, 52, resCanvas, true, true);
    processBlock(fullImg, 32, 47, slimArmR, armlegR, 48, 55, resCanvas, true, true);
    processBlock(fullImg, 36, 40, armlegR, bodyH, 52, 55, resCanvas);
    processBlock(fullImg, 36, 44, slimArmR, bodyH, 52, 59, resCanvas);
    processBlock(fullImg, 36, 47, armlegR, bodyH, 52, 48, resCanvas);
    processBlock(fullImg, 36, 51, slimArmR, bodyH, 52, 52, resCanvas);

    // add resCanvas to body
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(resCanvas);
}
