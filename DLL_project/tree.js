var tree = [];
var count = 0;
var leaves = [];

function setup() {
  var canv = createCanvas(400, 400);
  canv.parent = ('theSketch');
  var a = createVector (width/2, height);
  var b = createVector (width/2, height-100);
  var root = new branch(a, b);

  tree[0] = root;

}

function mousePressed() {
  for (var i = tree.length-1; i>=0; i--){
    if (!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished=true;
  }
  //count ++;
}

function keyPressed(){
 for (var i=0;i<tree.length; i++){
     if (!tree[i].finished){
       var leaf = tree[i].end.copy();
       leaves.push(leaf);
       }
  }
}

function draw() {
  background(2,79,76);
  for (var i=0; i<tree.length;i++){
    tree[i].show();
    //tree[i].jitter();
  }

  for (var i=0; i<leaves.length;i++){
    fill (10,247,40,150);
    noStroke();
    ellipse (leaves[i].x, leaves[i].y, random (8,10), random (12,15));
  }

}



function branch(begin,end){
  this.begin =begin;
  this.end = end;
  this.finished = false;

  this.show = function (){
    stroke (86,46,0);
    strokeWeight(5);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);}

  this.jitter=function(){
    this.end.x += random(1,-1);
    this.end.y += random(1,-1);
  }

  this.branchA = function(){
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(PI/6);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);


    var right = new branch(this.end,newEnd);
    return right;
  }

  this.branchB = function(){
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(-PI/4);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);


    var left = new branch(this.end,newEnd);
    return left;
  }
}
