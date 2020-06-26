let x = 0;
let y = 0;



function setup() {
  noLoop();
  var canv = createCanvas(windowHeight*0.8, windowHeight*0.8);
  canv.parent ('sketchDiv')
  background (0,0,26);
  button1=createButton('Start');
  button2=createButton('Done!');
  button3=createButton('Reset');
  button1.parent('sketchDiv');
  button2.parent('sketchDiv');
  button3.parent('sketchDiv');
  
}

function makeStars(){
  noStroke();
  fill(random (204, 255),random (204,255),random (204,255));
  ellipse (random(width), random(height), random (10), random (10));
}

function begin(){
  loop();
}

function reset(){
  noStroke();
  fill(0,0,26);
  rect(0,0,width,height);
}

function stopLoop(){
  noLoop();
}

function draw() {
  button1.mousePressed(begin);
  makeStars();
  button2.mousePressed(stopLoop);
  button3.mousePressed(reset);
}

