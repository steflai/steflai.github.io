let x = 10;
let y = 10;
function setup() {
  frameRate (1);
  var canv = createCanvas(700, 500);
  canv.parent ('sketchDiv')
}

function draw() {
  background(255,255,255);

  //saveFrames('calendar','png', 10,1);
  fill(26,0,26);
  noStroke();

  while (x < 700){ 
    x = x + 100;
    square (x, y, 80);
    }
  y = y + 100;
  x = 10; 
  square(x, y, 80);
  
  if (y>400){
    y=10;
} }   

