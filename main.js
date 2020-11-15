noseX=0;
noseY=0;
function preload(){
    clown_mustache=loadImage("https://i.postimg.cc/CKLYx7b6/clown-mustache.png");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
   video.hide();
    
 posenet=ml5.poseNet(video,modalloaded);
 posenet.on('pose',goPoses);
}
function modalloaded(){
    console.log("Posenet initialized");
}
function goPoses(results){
  if(results.length > 0){
      console.log(results);
      noseX=results[0].pose.nose.x-170;
      noseY=results[0].pose.nose.y+5;
      console.log("Down_nose-x"+noseX);
      console.log("Down_nose-y"+noseY);
  }
}

function draw(){
    image(video,0,0,500,500);
    image(clown_mustache,noseX,noseY,150,50);
}

function take_snapshot(){
    save("Myfilterimage.png");
}