class Tool {
	constructor(x, y, name) {
		this.x = x;
		this.y = y;
		this.name = name;
    this.selected = this.name == 'brush' ? true : false;
  }
  show() {
    if (this.selected)
    	strokeWeight(3);
    else
      strokeWeight(1);
		fill(255);
    circle(this.x, this.y, 45);
    push();
    textSize(24);
    let icon = this.name == 'brush' ? '🖌️' : '👆';
    text(icon, this.x-16, this.y+8);
    pop();
  }
}