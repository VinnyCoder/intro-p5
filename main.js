function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250)
    video = createCapture(VIDEO);
    video.hide();


}
function draw(){
    image(video, 0, 0, 640, 480);
    rect(130, -130, 700, 500);
describe('A white rectangle with a black outline on a gray canvas.');
}

function take_snapshot(){
    save('student_name.png');
}
