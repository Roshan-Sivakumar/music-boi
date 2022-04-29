bruh = "";
songftw = "";
leftwristy = "";
rightwristy = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotResults)
}

function preload() {
    bruh = loadSound("bruh.mp3");
    songftw = loadSound("songforthewin.mp3");
}

function draw() {
    image(video, 0, 0, 600, 530);
}

function modelLoaded(){
    console.log("w");
}

function gotResults(results){
    if(results.length > 0){
        leftwristy = results[0].pose.leftWrist.y
        rightwristy = results[0].pose.rightWrist.y
        console.log(results)
    } else {
        console.log("DATA not found: array, results")
    }
}
