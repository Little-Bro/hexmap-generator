function drawUI() {
  // rectangle surronding the map
  rect(650, 20, 280, 200);
  rect(5, 5, mapWidth, mapHeight);
  push();
  fill(255);
  noStroke();
  rect(680, 15, 75, 10);
  fill(0);
 	textSize(24);
 	stroke(1);
  text('Tools', 540, 26)
  text('Terrain', 680, 26);
  fill(255);
  stroke(1);
  // brush rectangle
  rect(650, 260, 280, 200);
  fill(255);
  noStroke();
  rect(678, 255, 124, 10);
  stroke(1);
  fill(0);
  textSize(24);
  text('Description', 680, 266);
  pop();
  push();
  fill(0);
  text('hills', 710, 64);
  text('forest (pines)', 710, 124);
  text('forest', 710, 184);
  text('water', 860, 64);
  text('mountains', 860, 124);
  text('swamp', 860, 184);
  pop();
}