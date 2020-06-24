var inp;
let button; 
var someText;
var word;
var morseDict;
var textLength;
var curIndex=0;
var word = ''

function setup() {
  noLoop()
  createCanvas(400, 400);
  frameRate(5);
  background(220);
  
  var inp = createInput('');
  inp.input(myInputEvent);
  //morseCode();
  
  button=createButton("Start");
  
  morseDict = createStringDict('a','. -  ');
  morseDict.create('b','- . . .  ');
  morseDict.create('c', '- . - .  ');
  morseDict.create('d', '- . .  ');
  morseDict.create('e','.  ');
  morseDict.create('f','. . - .  ');
  morseDict.create('g','- - .  ');
  morseDict.create('h','. . . .  ');
  morseDict.create('i','. .  ');
  morseDict.create('j','. - - -  ');
  morseDict.create('k','- . -  ');
  morseDict.create('l','. - . .  ');
  morseDict.create('m','- -  ');
  morseDict.create('n','- .  ');
  morseDict.create('o','- - -  ');
  morseDict.create('p','. - -  ');
  morseDict.create('q','- - . -  ');
  morseDict.create('r','. - .  ');
  morseDict.create('s','. . .  ');
  morseDict.create('t','-  ');
  morseDict.create('u','. . -  ');
  morseDict.create('v','. . . -  ');
  morseDict.create('w','. - -  ');
  morseDict.create('x','- . . -  ');
  morseDict.create('y','- . - -  ');
  morseDict.create('z','- - . .  ');
  morseDict.create('1','. - - - -  ');
  morseDict.create('2','. . - - -  ');
  morseDict.create('3','. . . - -  ');
  morseDict.create('4','. . . . -  ');
  morseDict.create('5','. . . . .  ');
  morseDict.create('6','- . . . .  ');
  morseDict.create('7','- - . . .  ');
  morseDict.create('8','- - - . .  ');
  morseDict.create('9','- - - - .  ');
  morseDict.create('0','- - - - -  ');
  morseDict.create(' ', '  ');
  
  
  //text(morseDict.get('a'), 200, 200);  
  
}


function myInputEvent(){
  console.log('you are typing: ', this.value());
  someText = this.value();
  console.log(someText.length);
  
  word = '';
  letter = '';
  textLength = someText.length;
  for (let i=0; i < textLength; i++) {
     letter = morseDict.get(someText[i]);
     word = word + letter + ' ';
  console.log(word);
}
}


function morseCode(){
  word = '';
  letter = '';
  textLength = someText.length;
  for (let i=0; i < textLength; i++) {
     letter = morseDict.get(someText[i]);
     word = word + letter + ' ';
  }
}

  
function display(){
  background (50);
  fill (255);
  textSize(144);
  textAlign(CENTER, CENTER);
  //text(word, 200,200);
  text(
    word.substring(curIndex, curIndex+1),
    width/2, height/2);
  curIndex++;
  if (curIndex > word.length) {
    curIndex = 0;

  }}

function begin(){
  loop()}


function draw() {
  button.mousePressed(begin);
  display()
  }
  