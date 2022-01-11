img2 = "";

function preload(){
    img2 = loadImage("livingroom.PNG")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
 image(img2, 0, 0, 640, 420);
}