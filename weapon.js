export default class Weapon {
  constructor(ctx) {
    this.ctx = ctx;
    this.speed = 2;
    this.shots = [];
  }

  shot(pos) {
    const shot = new Bullet(this.ctx, pos, 2);
    this.shots.push(shot);
  }

  update() {
    if (!this.shots.length) {
      return;
    }
    this.shots.forEach(bullet => {
      bullet.update();
    });
  }
}

class Bullet {
  constructor(ctx, startPos, speed) {
    this.ctx = ctx;
    this.pos = startPos;
    this.speed = speed;
    this.size = {
      w: 5,
      h: 5
    };
  }

  update() {
    this.clear();
    this.pos.x += this.speed;
    this.draw();
  }

  draw() {
    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }

  clear() {
    this.ctx.clearRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }

  getPos() {
    return this.pos;
  }
}
