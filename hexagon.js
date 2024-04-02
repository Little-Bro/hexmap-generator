class Hexagon {
	constructor(x, y, radius, filled, brushHex) {
		this.x = x;
    this.y = y;
    if (filled)
    	this.filled = filled;
    this.radius = radius;
    this.picked = false;
    this.descriptionText = '';
    if (brushHex)
    	this.brushHex = brushHex;
    this.brushPicked = false;
    this.vertices = [];
    for (let theta = 0; theta < TWO_PI; theta += PI/3) {
      let x = this.radius * cos(theta);
      let y = this.radius * sin(theta);
      let v = createVector(x, y);
      this.vertices.push(v);
    }
   this.pos = createVector(this.x, this.y);
   let diff = this.pos.sub(this.vertices[0]);
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].add(diff);
    }
  }
  
  drawShape() {
	  beginShape();
    for (let i = 0; i < this.vertices.length; i++) {
			vertex(this.vertices[i].x, this.vertices[i].y);
    }
		endShape(CLOSE);
  }
  
  show() {
    fill(255);
    if (this.picked) {
	    strokeWeight(4);
    }
    else
      strokeWeight(1);
   	switch (this.filled) {
      case 'forest_pine':
        fill(46, 140, 57);
        this.drawShape();
        strokeWeight(2);
        // first tree
        triangle(this.x-20, this.y+5, this.x-30, this.y+5, this.x-25, this.y-7);
        line(this.x-25, this.y+5, this.x-25, this.y + 10);
        // second tree
        triangle(this.x-20, this.y-5, this.x-10, this.y-5, this.x-15, this.y-14);
        line(this.x-15, this.y-5, this.x-15, this.y);
        strokeWeight(1);
       	break;
      case 'forest':
        fill(116, 181, 66);
        this.drawShape();
        strokeWeight(2);
        // first tree
        ellipse(this.x-25, this.y-4, 15, 12);
        line(this.x-25, this.y+3, this.x-25, this.y+6);
        // second tree
        ellipse(this.x-10, this.y+2, 10, 8);
        line(this.x-10, this.y+6, this.x-10, this.y+10);
        strokeWeight(1);
      	break;
      case 'hills':
        fill(255, 246, 173);
        this.drawShape();
        strokeWeight(2);
        stroke(211, 200, 118);
        arc(this.x-15, this.y, 12, 10, PI, 0);
        arc(this.x-24, this.y+4, 12, 10, PI, 0);
        stroke(0);
        strokeWeight(1);
      	break;
      case 'water':
        fill(65, 126, 181);
        this.drawShape();
      	break;
			case 'mountain':
        fill(203, 209, 205);
        this.drawShape();
        strokeWeight(2);
        // first mountain
        line(this.x-25, this.y-10, this.x-32, this.y+7);
        line(this.x-25, this.y-10, this.x-18, this.y+7);
        // second mountain
        line(this.x-20, this.y, this.x-15, this.y-10);
        line(this.x-10, this.y, this.x-15, this.y-10);
        strokeWeight(1);
      	break;
      case 'swamp':
        fill(219, 210, 174);
        this.drawShape();
        strokeWeight(2);
        // grass
        stroke(150, 141, 105);
        line(this.x-10, this.y-2, this.x-10, this.y+2);
        line(this.x-15, this.y-4, this.x-15, this.y+2);
        line(this.x-20, this.y-8, this.x-20, this.y+2);
        line(this.x-25, this.y-4, this.x-25, this.y+2);
        line(this.x-30, this.y-2, this.x-30, this.y+2);
        stroke(0);
        strokeWeight(1);
      	break;
      default:
    		stroke(0);
        fill(255);
        this.drawShape();
        break;
    }
  }
}