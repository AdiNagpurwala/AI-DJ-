song="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristy="";
scoreleftwrist="";
function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(500,465);
    canvas.center();
    

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw (){
    image(video,0,0,500,465);

 fill('#FF0000');
  stroke('#FF0000');  
if(scoreleftwrist> 0.2) {

  circle(leftWristX,leftWristY,20);
  InNumberleftwrist=Number(leftwristY);
  remove_decimal=floor(InNumberleftwrist);
leftwristY_divide_1000=remove_decimal/1000;
volume=leftwristY_divide_1000*2;
document.getElementById("volume").innerHTML="Volume ="+volume;
song.setVolume(volume);
}
}
function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
   if (results. length >0)
    {
       scoreleftwrist=results[0].pose.keypoints[9].score;
       console.log("scoreleftwrist"+scoreleftwrist);

        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y
        console.log("leftwristX"+leftwristX+"leftwristY"+leftwristY+"rightwristX"+rightwristX+"rightwristY"+rightwristY);
    }
}