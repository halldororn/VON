var stars = [];
var NoStars = 200;
var playone;

function setup() {
    createCanvas(innerWidth-20,innerHeight-20);
    init();
}

function init() {
    for(var i = 0; i < NoStars; i++) {
        stars.push(new Star(random(innerWidth-20),random(innerHeight-20),1,random(255)))
    }
    playone = new Player();
    playone.x = 100;
    playone.y = 100;
}

function draw() { //loop
    background(20);
    for(var i = 0; i < stars.length; i++) {
        stars[i].show();
    }
    playone.show();
}

function mousePressed() {
    playone.move(mouseX,mouseY);
}