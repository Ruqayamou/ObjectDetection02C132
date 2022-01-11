img4 = "";

function preload(){
    img4 = loadImage("mall.PNG")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
 image(img4, 0, 0, 640, 420);
}