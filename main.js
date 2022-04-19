nosex=""
nosey=""
leftwristx=""
rightwristx=""
difference=""
function setup() {
    canvas = createCanvas(680, 500)
    canvas.position(1100, 200)
    video = createCapture(VIDEO)
    video.position(50, 220)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}

function modelloaded() {
    console.log("poseNet is loaded")
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        difference=floor(leftwristx-rightwristx)
    }
}
function draw() {
    background("gray")
    fill("red")
    textSize(difference)
    text("Aviraj",nosex,nosey)
    document.getElementById("differ").innerHTML=difference
}