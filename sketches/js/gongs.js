 function preload(){
  synth = loadSound('gong_synth.wav');
  classic = loadSound('gong_classic.wav');
  alto = loadSound('gong_alto.wav');
}

function setup() {
  createCanvas(600, 600);
  //canv.parent ('sketchDiv')
  fft = new p5.FFT();
  
  button1 = createButton ('Classic gong');
  button2 = createButton ('Synth gong');
  button3 = createButton ('Alto gong');
  button4 = createButton ('Stop');
  
  button1.mousePressed(playClassic);
  button2.mousePressed(playSynth);
  button3.mousePressed(playAlto);
  button4.mousePressed(stopSounds);
}

function draw() {
  background(220);
  console.log(fft.waveform());
  let waveForm = fft.waveform();
  for (let i=0; i<waveForm.length;i++){
    let width = (waveForm[i]*500);
    noStroke();
    fill(3,252,11);
    ellipse (300, 300, width, width);
  }
}


function playClassic(){
  classic.loop();
}

function playSynth(){
  synth.loop();
}

function playAlto(){
  alto.loop();}

function stopSounds(){
  synth.stop();
  classic.stop();
  alto.stop();
}