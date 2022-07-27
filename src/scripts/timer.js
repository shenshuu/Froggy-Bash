export default class Timer {
    constructor(ctx) {
        this.seconds = 45;
        this.height = 10;
        this.width = 1152;
        this.ctx = ctx;
    }

    draw() {
        // debugger;
        this.ctx.fillStyle = '#b2d5df';
        this.ctx.fillRect(144, 0, this.width, this.height);
    }

    update() {
        // debugger;
        this.draw();
        if (this.width > 0) {
            this.width -= 0.5;
        }
    }

    timeUp() {
        return this.width === 0;
    }
}