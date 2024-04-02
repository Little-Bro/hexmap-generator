let hexes = [];
let brushHexes = [];
let biomes = [];
let riverPoints = [];
let brush, tool;
let selectedHex;
const mapWidth = 490;
const mapHeight = 580;
let description;
let loadButton, saveButton;
let saveDescriptionButton;
let icons = [];
let brushIcon, handIcon;
let towerImg;

function preload() {
	towerImg = loadImage('./tour.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  // generating hexagons
  let numberOfHexes = 15;
  for (let i = 0; i < numberOfHexes; i++) {
		for (let j = 0; j < numberOfHexes; j++) {
      if (i % 2 == 0)
				hexes.push(new Hexagon(i * 30 + 60, j * 35 + 60, 20));
      else
				hexes.push(new Hexagon((i * 30 + 60) , (j * 35 + 60) - 18, 20	));
    }
  }
  // setting default parameters
  brushIcon = new Tool(567, 115, 'brush');
  handIcon = new Tool(567, 340, 'selector');
  icons.push(brushIcon);
  icons.push(handIcon);
  tool = 'brush'
  brush = 'hills';
  let initialText = 'Hex description';
  description = createInput(initialText);
  description.position(660, 270);
  description.size(255, 120);
  
  // generating brush hexagons
  hillsHex = new Hexagon(700, 60, 20, 'hills', true);
  brushHexes.push(hillsHex);
  forestPineHex = new Hexagon(700, 120, 20, 'forest_pine', true);
  brushHexes.push(forestPineHex);
  forestHex = new Hexagon(700, 180, 20, 'forest', true);
  brushHexes.push(forestHex);
  waterHex = new Hexagon(850, 60, 20, 'water', true);
  brushHexes.push(waterHex);
  mountainHex = new Hexagon(850, 120, 20, 'mountain', true);
  brushHexes.push(mountainHex);
  swampHex = new Hexagon(850, 180, 20, 'swamp', true);
  brushHexes.push(swampHex);
  
  //load button
  loadButton = createButton('Load map');
  loadButton.position(150, 600);
  loadButton.mousePressed(() => {
		loadStrings('mapData.txt', readDataFile);
  })
  // map save buttons
  saveButton = createButton('Save map');
  saveButton.position(250, 600);
  saveButton.mousePressed(() => {
    // serialising the map data
    let saveData = '';
    for (let hex of hexes) {
      saveData += hex.filled + ',' + hex.descriptionText + '\n';
    }
    // writing the data into a file
    let writer = createWriter('mapData.txt');
    writer.write(saveData)
		writer.close();    
  });
  // description save button
  saveDescriptionButton = createButton('Save description');
  saveDescriptionButton.position(725, 400);
  saveDescriptionButton.mousePressed(() => {
		if (selectedHex) {
			selectedHex.descriptionText = description.value();
    }
  });
}

function draw() {
  background(255);
  drawUI();
  // icons
  handIcon.show();
  brushIcon.show();
  // hexes
  for (let hex of hexes) {
	  hex.show();  
  }
  for (let hex of brushHexes) {
		hex.show();
  }
  fill(255);
  //for (let p of riverPoints) {
		//noStroke();
  	//fill(65, 126, 181);
  	//circle(p.x, p.y, 5);
  //}
  //image(towerImg, 400, 500);
}