export default class InfoPicture {
  constructor(ctx) {
    this.ctx = ctx;
    this.defaultLabel = "pos:";
    this.anchorPos = {
      x: 800,
      y: 25
    };
    this.text = "";
  }

  update(pos) {
    const width = this.ctx.measureText(this.text).width;
    this.clearText(width);
    this.text = this.containFullLabel(pos);
    this.draw();
  }

  draw() {
    this.ctx.fillText(this.text, this.anchorPos.x, this.anchorPos.y);
  }

  clearText(w) {
    this.ctx.clearRect(this.anchorPos.x, this.anchorPos.y - 20, w, 40);
  }

  containFullLabel(pos) {
    return `${this.defaultLabel} x:${pos.x}  y:${pos.y}`;
  }
}
