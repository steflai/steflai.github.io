function setup() {
  var canv = createCanvas(600, 600);
  canv.parent ('sketchDiv')
  frameRate (1);
}

function draw() {
  noStroke ()
  fill (255, random (200), random (200));
  rect (0,0,200, 600);
  fill (random (200), 255, random (200));
  rect (200, 0, 200, 600);
  fill (random (200), random (200), 255);
  rect (400, 0, 200, 600);
}