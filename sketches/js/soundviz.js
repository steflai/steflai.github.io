let mic; 
let amp; 

let x = 0; 
let y = 50; 


function setup() {
  createCanvas(800, 800);
  mic = new p5.AudioIn();
  mic.start();
  
  amp = new p5.Amplitude();
  amp.setInput(mic);
  
  background (0);
}

function draw() {
  let level = amp.getLevel();
  print(level); // level is a decimal smaller than 1
  
  
  if (level <= 0.1) {
    noStroke();
    fill(102,255,204, 30);
    ellipse(x,y,level*200,200);
  }
  
  if (level > 0.1) {
    noStroke();
    fill(255, 0, 102,30)
    ellipse (x, y, level*400, 400);
  }
  x +=2; 
  if(x > width){
    x = 0;
    y += 50;
  }

  if(y > height){
    y = 0;
}
}