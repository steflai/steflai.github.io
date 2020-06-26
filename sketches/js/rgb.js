function setup() {
  var canv = createCanvas(windowHeight*0.8, windowHeight*0.8);
  canv.parent ('sketchDiv')
  frameRate (1);
}

function draw() {
  noStroke ()
  fill (255, random (200), random (200));
  rect (0,0,width /3, height);
  fill (random (200), 255, random (200));
  rect (width/3, 0, width/3, height);
  fill (random (200), random (200), 255);
  rect ((width/3)*2, 0, width/3, 600);
}