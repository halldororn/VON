function Player() {
    this.x;
    this.y;
    this.dimension = 10;

    this.show = function() {
        noStroke();
        fill(255,255,255,this.brightness);
        rect(this.x,this.y,this.dimension,this.dimension);
    }

    this.move = function(x,y) {
        this.x = x;
        this.y = y;
    }
}