const { Bodies, World, Engine } = Matter;
var engine, world;
var rain1, rainArray;
var rain2, rain3, rain4;
var i = 1;

function setup() {
    engine = Engine.create();
    world = engine.world;
    rain1 = new Raindrop(random(0, 400), 5, 40);
    rain2 = new Raindrop(random(0, 400), 1, 80);
    rain3 = new Raindrop(random(0, 400), 2, 20);
    rain4 = new Raindrop(random(0, 400), 1, 10);
    rainArray = [];
    createCanvas(800, 400);
}

function draw() {
    background(255, 255, 255);
    //rain1 = eval(`var rain${i} = new Raindrop(random(0, 400), 5, 20);`);
    //console.log(rain1);
    if (rain1.body.position.y > 400) {
        rain1 = new Raindrop(random(0, 400), 5, 40);
    }
    if (rain3.body.position.y > 475) {
        rain3 = new Raindrop(random(0, 400), 2, 20);
    }
    if (rain2.body.position.y > 425) {
        rain2 = new Raindrop(random(0, 400), 1, 80);
    }
    if (rain4.body.position.y > 450) {
        rain4 = new Raindrop(random(0, 400), 1, 10);
    }
    //rainArray.push(rain1);
    Engine.update(engine);
    rain1.display();
    rain2.display();
    rain3.display();
    rain4.display();
    //i++;
}
