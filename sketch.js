let cell01 = 0;
let cell02 = 0;
let cell03 = 0;
let cell04 = 0;
let cell05 = 0;
let cell06 = 0;
let cell07 = 0;
let cell08 = 0;
let cell09 = 0;

let turn = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('grey');
  strokeWeight(5);
  stroke('black');
  
  // Inner: vertical lines
  line(200, 0, 200, 600);
  line(400, 0, 400, 600);

  // Inner: horizontal lines
  line(0, 200, 600, 200);
  line(0, 400, 600, 400);

  // Shows who's turn it is
  if (turn == false) {
    fill('blue');
    textSize(25);
    text("Its 🔴 turn",10,30);
  }
  else if (turn == true) {
    fill('blue');
    textSize(25);
    text("Its 🟥 turn",10,30);
  }

  // Fill in the boxes
  fill('white');
  if (cell01 == 1) {
    circle(100,100,100);
  }
  else if (cell01 == 2) {
    square(50,50,100);
  }
  if (cell02 == 1) {
    circle(300,100,100);
  }
  else if (cell02 == 2) {
    square(250,50,100);
  }
  if (cell03 == 1) {
    circle(500,100,100);
  }
  else if (cell03 == 2) {
    square(450,50,100);
  }
  if (cell04 == 1) {
    circle(100,300,100);
  }
  else if (cell04 == 2) {
    square(50,250,100);
  }
  if (cell05 == 1) {
    circle(300,300,100);
  }
  else if (cell05 == 2) {
    square(250,250,100);
  }
  if (cell06 == 1) {
    circle(500,300,100);
  }
  else if (cell06 == 2) {
    square(450,250,100);
  }
  if (cell07 == 1) {
    circle(100,500,100);
  }
  else if (cell07 == 2) {
    square(50,450,100);
  }
  if (cell08 == 1) {
    circle(300,500,100);
  }
  else if (cell08 == 2) {
    square(250,450,100);
  }
  if (cell09 == 1) {
    circle(500,500,100);
  }
  else if (cell09 == 2) {
    square(450,450,100);
  }
  winCheck();
}

// Switch turns
function changeTurn() {
  if (turn == false) {
    turn = true;
  }
  else if (turn == true) {
    turn = false;
  }
}

// If mouse pressed
function mousePressed() {
  if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 200 && cell01 == 0) {
    if (turn == false) {
      cell01 = 1;
    }
    else if (turn == true) {
      cell01 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY < 200 && cell02 == 0) {
    if (turn == false) {
      cell02 = 1;
    }
    else if (turn == true) {
      cell02 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 400 && mouseX < 600 && mouseY > 0 && mouseY < 200 && cell03 == 0) {
    if (turn == false) {
      cell03 = 1;
    }
    else if (turn == true) {
      cell03 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 0 && mouseX < 200 && mouseY > 200 && mouseY < 400 && cell04 == 0) {
    if (turn == false) {
      cell04 = 1;
    }
    else if (turn == true) {
      cell04 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400 && cell05 == 0) {
    if (turn == false) {
      cell05 = 1;
    }
    else if (turn == true) {
      cell05 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400 && cell06 == 0) {
    if (turn == false) {
      cell06 = 1;
    }
    else if (turn == true) {
      cell06 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 0 && mouseX < 200 && mouseY > 400 && mouseY < 600 && cell07 == 0) {
    if (turn == false) {
      cell07 = 1;
    }
    else if (turn == true) {
      cell07 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 200 && mouseX < 400 && mouseY > 400 && mouseY < 600 && cell08 == 0) {
    if (turn == false) {
      cell08 = 1;
    }
    else if (turn == true) {
      cell08 = 2;
    }
    changeTurn();
  }
  else if (mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 600 && cell09 == 0) {
    if (turn == false) {
      cell09 = 1;
    }
    else if (turn == true) {
      cell09 = 2;
    }
    changeTurn();
  }
}

// Check for win
function winCheck() {
  if (cell01 == 1 && cell02 == 1 && cell03 == 1 || cell04 == 1 && cell05 == 1 && cell06 == 1 || cell07 == 1 && cell08 == 1 && cell09 == 1 || cell01 == 1 && cell04 == 1 && cell07 == 1 || cell02 == 1 && cell05 == 1 && cell08 == 1 || cell03 == 1 && cell06 == 1 && cell09 == 1 || cell01 == 1 && cell05 == 1 && cell09 == 1 || cell03 == 1 && cell05 == 1 && cell07 == 1) {
    fill('red');
    textSize(100);
    text("Circle Wins",50,300);
  }
  else if (cell01 == 2 && cell02 == 2 && cell03 == 2 || cell04 == 2 && cell05 == 2 && cell06 == 2 || cell07 == 2 && cell08 == 2 && cell09 == 2 || cell01 == 2 && cell04 == 2 && cell07 == 2 || cell02 == 2 && cell05 == 2 && cell08 == 2 || cell03 == 2 && cell06 == 2 && cell09 == 2 || cell01 == 2 && cell05 == 2 && cell09 == 2 || cell03 == 2 && cell05 == 2 && cell07 == 2) {
    fill('red');
    textSize(100);
    text("Square Wins",15,300);
  }
  else if (cell01 > 0 && cell02 > 0 && cell03 > 0 && cell04 > 0 && cell05 > 0 && cell06 > 0 && cell07 > 0 && cell08 > 0 && cell09 > 0) {
    fill('red');
    textSize(100);
    text("Draw",180,300);
  }
}

// Reset the game
