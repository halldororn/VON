function Star(x,y,r,b) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.brightness = b;

    this.show = function() {
        noStroke();
        fill(255,255,255,this.brightness);
        ellipse(this.x,this.y,this.radius*2,this.radius*2);
    }
}