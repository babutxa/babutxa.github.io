function picSkinTextureOnChange(evt, imgId1, imgId2) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.onload = function() {
            var fullImg1 = document.getElementById(imgId1);
            fullImg1.src = fr.result;

            var fullImg2 = document.getElementById(imgId2);
            fullImg2.src = fr.result;
        };
        fr.onerror = function() {
            console.log(fr.error);
        };    
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
    var dContext = dCanvas.getContext("2d");
    dContext.drawImage(auxCanvas, 0, 0, w, h, dcol, drow, w, h);
}

function flipSkin(imgId) {
    var fullImg = document.getElementById(imgId);

    if (fullImg.width != 64 && fullImg.height != 64) {
        alert("The skin texture size should be 64x64.");
        setResultVisible(false);
        return;
    }

    // delete old canvas
    var resCanvas = document.getElementById('myCanvasId');
    resCanvas.width = 64;
    resCanvas.height = 64;
    const resContext = resCanvas.getContext('2d');
    resContext.clearRect(0, 0, resCanvas.width, resCanvas.height);

    var headSize = 8;
    var bodyHeight = 12;
    var defaultLimbWidth = 4;
    var armWidth = document.getElementById("slimArmsToggle").checked ? 3 : defaultLimbWidth;

    // head
    processBlock(fullImg, 0, 8, headSize, headSize, 0, 8, resCanvas, true, true);
    processBlock(fullImg, 0, 16, headSize, headSize, 0, 16, resCanvas, true, true);
    processBlock(fullImg, 8, 0, headSize, headSize, 8, 16, resCanvas);
    processBlock(fullImg, 8, 8, headSize, headSize, 8, 24, resCanvas);
    processBlock(fullImg, 8, 16, headSize, headSize, 8, 0, resCanvas);
    processBlock(fullImg, 8, 24, headSize, headSize, 8, 8, resCanvas);

    // head2
    processBlock(fullImg, 0, 40, headSize, headSize, 0, 40, resCanvas, true, true);
    processBlock(fullImg, 0, 48, headSize, headSize, 0, 48, resCanvas, true, true);
    processBlock(fullImg, 8, 32, headSize, headSize, 8, 48, resCanvas);
    processBlock(fullImg, 8, 40, headSize, headSize, 8, 56, resCanvas);
    processBlock(fullImg, 8, 48, headSize, headSize, 8, 32, resCanvas);
    processBlock(fullImg, 8, 56, headSize, headSize, 8, 40, resCanvas);

    // left leg (LL) -> right leg (RL)
    processBlock(fullImg, 48, 20, defaultLimbWidth, defaultLimbWidth, 16, 4, resCanvas, true, true);
    processBlock(fullImg, 48, 24, defaultLimbWidth, defaultLimbWidth, 16, 8, resCanvas, true, true);
    processBlock(fullImg, 52, 28, defaultLimbWidth, bodyHeight, 20, 4, resCanvas);
    processBlock(fullImg, 52, 20, defaultLimbWidth, bodyHeight, 20, 12, resCanvas);
    processBlock(fullImg, 52, 24, defaultLimbWidth, bodyHeight, 20, 0, resCanvas);
    processBlock(fullImg, 52, 16, defaultLimbWidth, bodyHeight, 20, 8, resCanvas);

    // right leg (RL) -> left leg (LL)
    processBlock(fullImg, 16, 4, defaultLimbWidth, defaultLimbWidth, 48, 20, resCanvas, true, true);
    processBlock(fullImg, 16, 8, defaultLimbWidth, defaultLimbWidth, 48, 24, resCanvas, true, true);
    processBlock(fullImg, 20, 4, defaultLimbWidth, bodyHeight, 52, 28, resCanvas);
    processBlock(fullImg, 20, 12, defaultLimbWidth, bodyHeight, 52, 20, resCanvas);
    processBlock(fullImg, 20, 0, defaultLimbWidth, bodyHeight, 52, 24, resCanvas);
    processBlock(fullImg, 20, 8, defaultLimbWidth, bodyHeight, 52, 16, resCanvas);

    // left leg 2 (LL2) -> right leg 2 (RL2)
    processBlock(fullImg, 48, 4, defaultLimbWidth, defaultLimbWidth, 32, 4, resCanvas, true, true);
    processBlock(fullImg, 48, 8, defaultLimbWidth, defaultLimbWidth, 32, 8, resCanvas, true, true);
    processBlock(fullImg, 52, 12, defaultLimbWidth, bodyHeight, 36, 4, resCanvas);
    processBlock(fullImg, 52, 4, defaultLimbWidth, bodyHeight, 36, 12, resCanvas);
    processBlock(fullImg, 52, 8, defaultLimbWidth, bodyHeight, 36, 0, resCanvas);
    processBlock(fullImg, 52, 0, defaultLimbWidth, bodyHeight, 36, 8, resCanvas);

    // right leg 2 (RL2) -> left leg 2 (LL2)
    processBlock(fullImg, 32, 4, defaultLimbWidth, defaultLimbWidth, 48, 4, resCanvas, true, true);
    processBlock(fullImg, 32, 8, defaultLimbWidth, defaultLimbWidth, 48, 8, resCanvas, true, true);
    processBlock(fullImg, 36, 4, defaultLimbWidth, bodyHeight, 52, 12, resCanvas);
    processBlock(fullImg, 36, 12, defaultLimbWidth, bodyHeight, 52, 4, resCanvas);
    processBlock(fullImg, 36, 0, defaultLimbWidth, bodyHeight, 52, 8,  resCanvas);
    processBlock(fullImg, 36, 8, defaultLimbWidth, bodyHeight, 52, 0, resCanvas);

    // body
    processBlock(fullImg, 16, 20, headSize, defaultLimbWidth, 16, 20, resCanvas, true, true);
    processBlock(fullImg, 16, 28, headSize, defaultLimbWidth, 16, 28, resCanvas, true, true);
    processBlock(fullImg, 20, 28, defaultLimbWidth, bodyHeight, 20, 16, resCanvas);
    processBlock(fullImg, 20, 32, headSize, bodyHeight, 20, 20, resCanvas);
    processBlock(fullImg, 20, 20, headSize, bodyHeight, 20, 32, resCanvas);
    processBlock(fullImg, 20, 16, defaultLimbWidth, bodyHeight, 20, 28, resCanvas);

    // body 2
    processBlock(fullImg, 32, 20, headSize, defaultLimbWidth, 32, 20, resCanvas, true, true);
    processBlock(fullImg, 32, 28, headSize, defaultLimbWidth, 32, 28, resCanvas, true, true);
    processBlock(fullImg, 36, 28, defaultLimbWidth, bodyHeight, 36, 16, resCanvas);
    processBlock(fullImg, 36, 32, headSize, bodyHeight, 36, 20, resCanvas);
    processBlock(fullImg, 36, 20, headSize, bodyHeight, 36, 32, resCanvas);
    processBlock(fullImg, 36, 16, defaultLimbWidth, bodyHeight, 36, 28, resCanvas);

    // slim left arm -> slim right arm
    processBlock(fullImg, 48, 36, armWidth, defaultLimbWidth, 16, 44, resCanvas, true, true);
    processBlock(fullImg, 48, 36 + armWidth, armWidth, defaultLimbWidth, 16, 44 + armWidth, resCanvas, true, true);
    processBlock(fullImg, 52, 36 + armWidth, defaultLimbWidth, bodyHeight, 20, 40, resCanvas);
    processBlock(fullImg, 52, 40 + armWidth, armWidth, bodyHeight, 20, 44, resCanvas);
    processBlock(fullImg, 52, 32, defaultLimbWidth, bodyHeight, 20, 44 + armWidth, resCanvas);
    processBlock(fullImg, 52, 36, armWidth, bodyHeight, 20, 48 + armWidth, resCanvas);

    // slim right arm -> slim left arm
    processBlock(fullImg, 16, 44, armWidth, defaultLimbWidth, 48, 36, resCanvas, true, true);
    processBlock(fullImg, 16, 44 + armWidth, armWidth, defaultLimbWidth, 48, 36 + armWidth, resCanvas, true, true);
    processBlock(fullImg, 20, 40, defaultLimbWidth, bodyHeight, 52, 36 + armWidth, resCanvas);
    processBlock(fullImg, 20, 44, armWidth, bodyHeight, 52, 40 + armWidth, resCanvas);
    processBlock(fullImg, 20, 44 + armWidth, defaultLimbWidth, bodyHeight, 52, 32, resCanvas);
    processBlock(fullImg, 20, 48 + armWidth, armWidth, bodyHeight, 52, 36, resCanvas);

    // slim left arm 2 -> slim right arm 2
    processBlock(fullImg, 48, 52, armWidth, defaultLimbWidth, 32, 44, resCanvas, true, true);
    processBlock(fullImg, 48, 52 + armWidth, armWidth, defaultLimbWidth, 32, 44 + armWidth, resCanvas, true, true);
    processBlock(fullImg, 52, 52 + armWidth, defaultLimbWidth, bodyHeight, 36, 40, resCanvas);
    processBlock(fullImg, 52, 56 + armWidth, armWidth, bodyHeight, 36, 44, resCanvas);
    processBlock(fullImg, 52, 48, defaultLimbWidth, bodyHeight, 36, 44 + armWidth, resCanvas);
    processBlock(fullImg, 52, 52, armWidth, bodyHeight, 36, 48 + armWidth, resCanvas);

    // slim right arm 2 -> slim left arm 2
    processBlock(fullImg, 32, 44, armWidth, defaultLimbWidth, 48, 52, resCanvas, true, true);
    processBlock(fullImg, 32, 44 + armWidth, armWidth, defaultLimbWidth, 48, 52 + armWidth, resCanvas, true, true);
    processBlock(fullImg, 36, 40, defaultLimbWidth, bodyHeight, 52, 52 + armWidth, resCanvas);
    processBlock(fullImg, 36, 44, armWidth, bodyHeight, 52, 56 + armWidth, resCanvas);
    processBlock(fullImg, 36, 44 + armWidth, defaultLimbWidth, bodyHeight, 52, 48, resCanvas);
    processBlock(fullImg, 36, 48 + armWidth, armWidth, bodyHeight, 52, 52, resCanvas);

    // show result
    setResultVisible(true);

    //
    dataUrl = resCanvas.toDataURL(),
    imageFoo = document.getElementById('resultImageId');
    imageFoo.src = dataUrl;
}

function setResultVisible(value) {
    if (value == true) {
        [].forEach.call(document.querySelectorAll('.resultBlock'), function (el) {
            el.style.visibility = 'visible';
        });    
    } else {
        [].forEach.call(document.querySelectorAll('.resultBlock'), function (el) {
            el.style.visibility = 'hidden';
        });            
    }
}
