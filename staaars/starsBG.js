let x =5;
let y =10;
let num = 0;

function windowResized(){
  console.log('resized!');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canv = createCanvas(windowWidth, windowHeight);
  canv.position (0,0);
  canv.style('z-index', '-1');
  background (0,0,26);
}


function draw() {
  noStroke();
    fill(random (204, 255),random (204,255),random (204,255));
    ellipse (x, y, random (8), random (8));

  x = x + random (windowHeight/2);
  y = y + random (windowHeight/2);
  num = num +1;

  if (x > windowWidth) {
    x = random (800);}
  if (y > windowHeight) {
    y = random (800);}

  if (num > 1000){
    background(0,0,26);
    num = 0;}
}
