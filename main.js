var song = " ";
var song = " ";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var scoreLeftWrist = 0;
var scoreRightWrist = 0;
var song_status = "false";
var song1_status = "";
function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3")
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0, 0, 600, 500);
   
    

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2) {
        
        circle(leftWristX, leftWristY, 20);
        
        song.play();
        document.getElementById(song_name).innerHTML = "song playing is Harry Potter theme song remix";
        song_status = "true";
    }    
    fill("#FF0000");
    stroke("#FF0000");

    if( scoreRightWrist > 0.2 ) {
        circle(rightWristX, rightWristY, 20);
        
        song1.play();
        document.getElementById(song_name).innerHTML = "song playing is Peter Pan song ";
        song1_status = "true";
          
                 
       
    }
} 

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log("scoreLeftWrist =" + scoreLeftWrist + "scoreRightWrist =" + scoreRightWrist);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX ="+leftWristX+"leftWristY = "+leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX ="+rightWristX+"rightWristY = "+rightWristY);
}
}
