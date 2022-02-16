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

function draw() {
    background("gray")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
    }
}