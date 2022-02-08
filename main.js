vdo = "";
status = "";
function preload(){
    Video = createVideo("video.mp4");
   
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center(); 
    Video.hide();
    
}
function draw(){
    image(Video,0,0,400,400);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML = "Detcting Objects 😊";
}
function modelLoded(){
    console.log("Model is Initalized");
    status = true;
    Video.loop();
    Video.setVolume(0);
}