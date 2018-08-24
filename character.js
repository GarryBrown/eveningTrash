export default class Character {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.pos = {
      x: 0,
      y: 0
    };
    this.speed = 2;
    this.update();
    this.informator = null;
  }

  shot() {
    if (this.weapon) {
      const pos = {
        y: this.pos.y + this.height/2,
        x: this.pos.x + this.width
      };
      this.weapon.shot(pos);
    }
  }

  update() {
    if (this.informator) {
      this.informator.update(this.pos);
    }
    this.draw();
  }

  draw() {
    this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  clear() {
    this.ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  move(direction) {
    this.clear();
    this.setNewPos(direction);
    this.update();
  }

  setNewPos(direction) {
    if (direction === "ArrowUp") {
      this.pos.y -= this.speed;
    }
    if (direction === "ArrowRight") {
      this.pos.x += this.speed;
    }
    if (direction === "ArrowLeft") {
      this.pos.x -= this.speed;
    }
    if (direction === "ArrowDown") {
      this.pos.y += this.speed;
    }
  }
}
