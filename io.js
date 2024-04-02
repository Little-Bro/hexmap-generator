function colorHex() {
  for (let i = 0; i < hexes.length; i++) {
		let dir = dist(mouseX, mouseY, hexes[i].x - 20, hexes[i].y);
    if (dir < 18) {
			hexes[i].filled = brush;
    }
  }
}

function pickBrush() {
  for (let i = 0; i < brushHexes.length; i++) {
	  let dir = dist(mouseX, mouseY, brushHexes[i].x - 20, brushHexes[i].y);
    if (dir < 18) {
			brush = brushHexes[i].filled;
      brushHexes.forEach((hex) => hex.picked = false)
      brushHexes[i].picked = true;
    }
  }
}

function pickHex() {
  for (let i = 0; i < hexes.length; i++) {
	  let dir = dist(mouseX, mouseY, hexes[i].x - 20, hexes[i].y);
    if (dir < 18) {
      hexes.forEach((hex) => hex.picked = false)
      hexes[i].picked = true;
      selectedHex = hexes[i];
      description.value(selectedHex.descriptionText);
    }
  }
}

function pickTool() {
	if (mouseX > mapWidth) {
    for (let i = 0; i < icons.length; i++) {
      let dir = dist(mouseX, mouseY, icons[i].x, icons[i].y);
      if (dir < 45) {
        tool = icons[i].name;
        for (let i of icons)
        	i.selected = false;
        icons[i].selected = true;
      }
    }
  }
}

function changeToTool(selectedIcon, toolName) {
  tool = toolName;
  for (let i of icons) {
  	i.selected = false;
  }
  selectedIcon.selected = true;
}

function mouseClicked() {
  if (tool == 'brush') {
    if (mouseX < mapWidth && mouseY < mapHeight)
      colorHex();
    else
      pickBrush(); 
  } else if (tool == 'selector') {
    if (mouseX < mapWidth && mouseY < mapHeight)
			pickHex();
  }
  if (mouseX > mapWidth)
    pickTool();
}

// TODO : make this way better
function drawRiver() {
  let mousePos = createVector(mouseX, mouseY);
  riverPoints.push(mousePos);
}

function mouseDragged() {
  if (tool == 'brush')
		colorHex();
  else if (tool == 'river')
    drawRiver();
}

function readDataFile(result) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].split(',')[0]) {
    	hexes[i].filled = result[i].split(',')[0];
    	hexes[i].descriptionText = result[i].split(',')[1];
    }
  }
}