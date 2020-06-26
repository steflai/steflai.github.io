function setup() {
  var canv = createCanvas(windowHeight*0.8, windowHeight*0.8);
  canv.parent ('sketchDiv')
  background(51,51,51);
  fill(0,255,0);
  textAlign (LEFT, CENTER);
  textSize(24);
  textFont('monospace');
  text("Objects in my home fall in love... click to read!~", 20,20, width -80, height -80);
}

function draw() {
}
  function mousePressed(){
    var grammar = tracery.createGrammar(textSource);
    grammar.addModifiers(tracery.baseEngModifiers);
    var output = grammar.flatten("#origin#");
    background(51,51,51);
    fill(0,255,0);
    textFont('monospace');
    text(output, 20, 20, width-80, height-80);

}
  
var textSource = {
  "origin":"The #firstObject# fell in love with the #secondObject# and they proceeded to #dateAction# together!", 
  "firstObject":["kettle", "rice cooker", "bowl" , "chopsticks", "frying pan", "metal straw", "oven", "water jug", "cocktail shaker"],
  "secondObject": ["yoga mat", "computer", "mouse", "pen pot", "step ladder", "coffee table", "monitor", "moisturizer", "spider plant"], 
  "dateAction":["elope", "make a cocktail", "water the plants", "steam some brocolli", "tidy the apartment", "watch some TV", "snuggle on the couch", "have some beers", "browse the internet", "make dessert", "eat ice cream", "play music", "tease the cat", "put on make up"] 

};