class Ball {
    constructor (effect) {
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
        this.radius = Math.random() * 70 + 30;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;
    }
    update() {
        if (this.x < this.radius || this.x > this.effect.width - this.radius) this.speedX *=-1;
        if (this.y < this.radius || this.y > this.effect.height - this.radius) this.speedY *=-1;
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    reset() {
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
    }
}

export default Ball;