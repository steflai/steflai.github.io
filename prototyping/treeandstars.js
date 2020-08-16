var tree = [];
var count = 0;
var leaves = [];
var flutters = [];

let starsX =0;
let starsY =0;
let starsNum = 0;

let inp;
let myArray = [];


function setup() {
  var canv = createCanvas(windowWidth, windowHeight*0.8);
  canv.parent ("sketchDiv");
  //background(0,0,26);
  var a = createVector (width/2, height);
  var b = createVector (width/2, height-100);
  var root = new branch(a, b);
  tree[0] = root;

  inp = createInput('Tell me something').size(600);
  inp.parent("sketchDiv");
  button = createButton('Thank you ^^');
  button.parent("sketchDiv");
  button.mousePressed(countAndDraw);

  starsX = windowWidth/2;
  starsY = windowHeight/2;

}

function countAndDraw() {
  if (inp.value() === ''){
    inp.value('Tell me something! ')
  }
  else {
    count +=1;
    myArray.push(inp.value());
    console.log(myArray);
    inp.value('');

        if (count <=8) {
          makeBranch();
          }
        else if (count % 2 === 0 && count < 18){
          makeBranch();}
        else if (count %2 ===1 && count < 18){
          makeLeaf();}
}
}


function makeBranch() {
  for (var i = tree.length-1; i>=0; i--){
    if (!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished=true;
  }
}


function makeLeaf(){
 for (var i=0;i<tree.length; i++){
     if (!tree[i].finished){
       var leaf = tree[i].end.copy();
       leaves.push(leaf);
       }
  }
}



function draw() {
  for (var i=0; i<tree.length;i++){
    tree[i].show();
  }

  for (var i=0; i<leaves.length;i++){
    fill (10,random (150,255),40,200);
    noStroke();
    ellipse (leaves[i].x, leaves[i].y, random(8,10), random(12,15));
  }

// draw stars

  if (count>16){

      noStroke();
      fill(random (204, 255),random (204,255),random (204,255));
      ellipse (starsX, starsY, random (8), random (8));


      starsX += random (-100,100);
      starsY += random (-100,100);

      if (starsX > windowWidth || starsX < 0) {
        starsX = random (10, windowWidth-10);}
      if (starsY > windowHeight || starsY < 0) {
        starsY = random (10,windowHeight-10);}

      starsNum += 1;
      if (starsNum > 1000) {
        noLoop();}
    }


}



function branch(begin,end){
  this.begin =begin;
  this.end = end;
  this.finished = false;

  this.show = function (){
    stroke (86,46,0);
    strokeWeight(2);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);}


  this.branchA = function(){
    var dir = p5.Vector.sub(this.end,this.begin);
    if (count <=5){
      dir.rotate(PI/(random (8,10)));}
    else {
      dir.rotate(PI/(random(4,7)));
    }
    dir.mult(0.8);
    var newEnd = p5.Vector.add(this.end,dir);
    var right = new branch(this.end,newEnd);
    return right;
  }

  this.branchB = function(){
    var dir = p5.Vector.sub(this.end,this.begin);
    if (count <=5){
      dir.rotate(-PI/(random (8,10)));}
    else {
      dir.rotate(-PI/(random(4,7)));
    }
    dir.mult(0.85);
    var newEnd = p5.Vector.add(this.end,dir);


    var left = new branch(this.end,newEnd);
    return left;
  }
}
