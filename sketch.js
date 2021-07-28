function setup() {
  createCanvas(5000, 5000, SVG);
  // Lite Gold
  // background(233, 203, 130);
  // White
  background(255);
}

function draw() {
  let step = width / 10;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      push();
      translate(x, y);
      noFill();
      // Gold
      // stroke(158, 122, 70)
      // Deap Blue
      stroke(29,21,107)
      strokeWeight(step/20)
      arc(step / 2, 0, step, step, HALF_PI, PI);
      arc(step / 2, step, step, step, PI + HALF_PI, TWO_PI);
      arc(0, step / 2, step, step, 0, HALF_PI);
      arc(step, step / 2, step, step, PI, PI + HALF_PI);
      pop();
    }
  }
  save("bundou_01.svg")
  print("saved svg")
  noLoop()
}