var x = 200
var y = 100

var deez =["devin","is","te'jon","father"]

function setup(){
    createCanvas (600,400);
}

function draw (){
    background (78,66,244);
    
    
    noStroke();
    fill(255,66,255);
    ellipse (50,50,100,100);
    
    noStroke()
    rect(x,y,100,200);
    
    fill(255);
    textSize(100);
    text(deez[0],200,150);
    
    if(mouseIsPressed){
        background(255,0,0);
    }
      
    
        
    
    
}