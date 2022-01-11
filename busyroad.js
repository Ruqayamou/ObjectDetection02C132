img3 = "";

function preload(){
    img3 = loadImage("busyRoad.PNG")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
image(img3, 0, 0, 640, 420);
}