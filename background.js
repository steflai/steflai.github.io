let x =0;
let y =0;

let x_spacing = 20;
let y_spacing = 40;


function setup() {
  var canv = createCanvas(windowWidth, 120);
  canv.parent ("sketchDiv");
}

function draw() {
  let num = random (10);
  if (num > 3) {
    stroke (255,247,204,150);
    strokeWeight(10);
    line(x, y, x + x_spacing, y + y_spacing);
  }

  let another_num = random(10);
  if (another_num < 5) {
    noStroke();
    fill (204,221,255,150);
    circle (x,y,random(100), random (100),random(PI/4), random(PI*2));
  }

    x=x+x_spacing;
    if (x>width){
      x=0;
      y=y+y_spacing;}
  }
