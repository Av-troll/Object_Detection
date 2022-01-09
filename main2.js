
var img = "";
var status = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML =  "Object Is Being Detected";
}

function modelLoaded(){
    console.log("Model Is Initialized");
    status = true;
   objectDetector.detect(img, gotResults);
}
function preload(){
    img = loadImage("SChoolItems.jpg");
}
function draw(){
    image(img,0,0,640,420);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}