function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
 
img="";

function preload(){
img=loadImage('background-2.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("GALLERY 76%",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,50,330,150);
    fill("#FF0000");
    text("Lamp 43%",388,120);
    noFill();
    stroke("FF0000");
    rect(380,100,130,135);
}


function modelLoaded(){
    console.log("model loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}