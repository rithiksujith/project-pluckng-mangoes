class mango {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }
}