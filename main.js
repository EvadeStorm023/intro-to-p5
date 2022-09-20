function preload(){

}
function setup(){
canvas = createCanvas(400,400)
canvas.center()
web_cam = createCapture('VIDEO')
web_cam.hide()
fc =''
}
function draw(){
image(web_cam,0,0,400,400)
tint(fc)
}

function change_color(){
fc = document.getElementById('filter_color').value;
}

function take_snapshot(){
save('pic.png')
}
