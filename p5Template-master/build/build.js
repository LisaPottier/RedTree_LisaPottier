var gui = new dat.GUI();
var params = {
    taille: 10,
    Random_Seed: 0,
    deformation: 4,
    Download_Image: function () { return save(); },
};
gui.add(params, "taille", 0, 40, 1);
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "Download_Image");
gui.add(params, 'deformation', 1, 10, 1);
function draw() {
    randomSeed(params.Random_Seed);
    rectMode(CORNER);
    noStroke();
    background(215, 210, 210);
    var largeur = width;
    var hauteur = height;
    var colorArray = ['black', '#3459ba', '#db3425', '#ffdd47'];
    for (var i = 0; i < largeur / params.taille; i++) {
        for (var j = 0; j < hauteur / params.taille; j++) {
            var colour = random(colorArray);
            fill(color(colour));
            var h = params.taille * random(1, params.deformation);
            var l = params.taille * random(1, params.deformation);
            push();
            translate(i * l, j * h);
            rect(0, 0, l, h);
            pop();
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 0.75;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map