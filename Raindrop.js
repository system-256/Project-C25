class Raindrop {
    constructor(x, w, h) {
        var options = {
            'density': random(0, 1),
        }
        this.body = Bodies.rectangle(x, 25, w, h);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        push();
        pop();
    }
}