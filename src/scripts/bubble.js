export default class Bubble {
    constructor({position, velocity, radius, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.gravity = 0.5;
        this.radius = radius;
        this.children = [];
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'yellow'
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.arc(
            this.position.x, 
            this.position.y,
            this.radius, 0, 2*Math.PI
        )
        this.ctx.fill();
    }

    update() {
        if (this.position.x + this.radius >= window.innerWidth - 142 ||
            this.position.x - this.radius <= 140) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + this.radius >= window.innerHeight - 170) {
            this.velocity.y = -this.velocity.y;
        } else {
            this.velocity.y += this.gravity;
        }
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }

    collided(player) {
        return player.collided(this);
    }

    split() {
        if (this.radius >= 10) {
            let b1 = new Bubble({
                position: {
                    x: this.position.x - 25,
                    y: this.position.y + 25
                },
                velocity: {
                    x: this.velocity.x - 0.25,
                    y: this.velocity.y - 0.25
                },
                radius: this.radius / 2,
                ctx: this.ctx
            })
            let b2 = new Bubble({
                position: {
                    x: this.position.x + 25,
                    y: this.position.y + 25
                },
                velocity: {
                    x: -(this.velocity.x + 0.25),
                    y: this.velocity.y - 0.25
                },
                radius: this.radius / 2,
                ctx: this.ctx
            })
            this.children.push(...[b1, b2]);
        }
    }
}
