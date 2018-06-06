var arrow = {
  left: function (x,y){
    //arrowhead
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(270*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
  leftUp: function(x,y){
    // x += 20;
    // y -= 25;
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(-45*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
  up: function (x,y){
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(0*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
  rightUp: function(x,y){
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(45*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
  right: function(x,y){
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(90*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
  rightDown: function(x,y){
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(135*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
  down: function (x,y){
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(180*Math.PI/180);
    drawArrow(-4/2,-65/2);
    context.restore();
  },
  leftDown: function(x,y){
    context.save();
    context.beginPath();
    context.translate(x+4/2,y);
    context.rotate(225*Math.PI/180);
    drawArrow(4/2,-65/2);
    context.restore();
  },
}

var quiver = {
  left: function(x,y){
    //arrows
    drawShapeRotate(x+3,y-5,2,20,20,'black')
    drawShapeRotate(x+7,y-7,2,20,20,'black')
    drawShapeRotate(x+9,y-5,2,20,20,'black')
    //fletching
    drawShapeRotate(x+6,y-8,2,3,20,'white')
    drawShapeRotate(x+8,y-9,2,3,20,'white')
    drawShapeRotate(x+10,y-7,2,3,20,'white')
    drawShapeRotate(x+13,y-7,2,3,20,'white')
    //quiver
    drawShapeRotate(x,y,8,25,20,'white')
  },
  right: function(x,y){
    //arrows
    drawShapeRotate(x-3,y-5,2,20,-20,'black')
    drawShapeRotate(x,y-7,2,20,-20,'black')
    drawShapeRotate(x+3,y-5,2,20,-20,'black')
    //fletching
    drawShapeRotate(x-8,y-7,2,3,-20,'white')
    drawShapeRotate(x-5,y-7,2,3,-20,'white')
    drawShapeRotate(x-2,y-9,2,3,-20,'white')
    drawShapeRotate(x,y-9,2,3,-20,'white')
    //quiver
    drawShapeRotate(x,y,8,25,-20,'white')
  }
}

var bow = {
  left: function(x,y){
    context.beginPath();
    context.ellipse(x,y,15,25,0,95 * Math.PI/180,265 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  leftUp: function(x,y){
    context.beginPath();
    context.ellipse(x,y,15,28,0,110 * Math.PI/180,250 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  up: function(x,y){
    context.beginPath();
    context.ellipse(x,y,5,28,0,110 * Math.PI/180,250 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  rightUp: function(x,y){
    context.beginPath();
    context.ellipse(x,y,15,28,0,-70 * Math.PI/180,70 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  right: function(x,y){
    context.beginPath();
    context.ellipse(x,y,15,25,0,-85 * Math.PI/180,85 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  rightDown: function(x,y){
    context.beginPath();
    context.ellipse(x,y,15,28,0,-70 * Math.PI/180,70 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  down: function(x,y){
    context.beginPath();
    context.ellipse(x,y,5,28,0,-70 * Math.PI/180,70 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
  leftDown: function(x,y){
    context.beginPath();
    context.ellipse(x,y,15,28,0,110 * Math.PI/180,250 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 1;
  },
}

var helmet = {
  left: function (x,y){
    //side
    drawShapeStroke(x-8,y+2,5,10,'white');
    //face
    customShape(x-1.5,y,6,10,0,90,180,
                x-1.5,y,9,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,180*Math.PI/180,270*Math.PI/180);
    context.lineWidth = 1;
    context.stroke();
    //side
    drawShapeStroke(x+4,y+3,5,10,'white');
  },
  //=============================
  //=============================
  leftUp: function (x,y){
    //side
    drawShapeStroke(x-5,y+2,5,10,'white');
    //face
    customShape(x-1.5,y,6,10,0,90,180,
                x-1.5,y,9,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    // context.beginPath();
    // context.ellipse(x,y+2,4,25,0,180*Math.PI/180,270*Math.PI/180);
    // context.lineWidth = 1;
    // context.stroke();
    //side
    drawShapeStroke(x,y+3,8,12,'white');
  },
  //=============================
  //=============================
  up: function (x,y){
    //face
    customShape(x+.5,y,7,8,0,90,180,
                x+.5,y,7,8,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    //side
    drawShapeStroke(x+4,y+2,4,10,'white');
    //side
    drawShapeStroke(x-8,y+2,4,10,'white');
  },
  //=============================
  //=============================
  rightUp: function (x,y){
    //side
    drawShapeStroke(x,y+2,5,10,'white');
    //face
    customShape(x-1.5,y,6,10,0,90,180,
                x-1.5,y,9,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    // context.beginPath();
    // context.ellipse(x,y+2,4,25,0,180*Math.PI/180,270*Math.PI/180);
    // context.lineWidth = 1;
    // context.stroke();
    //side
    drawShapeStroke(x-8,y+3,8,12,'white');
  },
  //=============================
  //=============================
  right: function (x,y){
    //side
    drawShapeStroke(x+3,y+2,5,10,'white');

    //face
    customShape(x+2,y,9,10,0,90,180,
                x+2,y,6,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,270*Math.PI/180,360*Math.PI/180);
    context.lineWidth = 1;
    context.stroke();
    //side
    drawShapeStroke(x-9,y+2,5,10,'white');
  },
  //==============================
  //==============================
  down: function (x,y){
    //side
    drawShapeStroke(x+5.5,y+2,3,10,'white');
    //side
    drawShapeStroke(x-9,y+2,3,10,'white');
    //face
    customShape(x,y,7,10,0,90,180,
                x,y,7,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    // //line
    context.beginPath();
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.ellipse(x,y+2,0,25,0,180*Math.PI/180,270*Math.PI/180);
    context.stroke();
    context.fill();
  }
}

var SoldierTorso = function(color,crossColor){
  this.thin = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,color);
    context.ellipse(x,y,8,8,0,0,360 * Math.PI/180);
    context.fillStyle=color;
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();
  }

  this.left = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,color);
    context.ellipse(x,y,12,8,0,0,360 * Math.PI/180);
    context.fillStyle=color;
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();

    //cross
    drawShape(x -4,y,2,6,crossColor);
    drawShape(x -6,y+2,6,2,crossColor);
  }

  this.leftUp = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'black');
    context.ellipse(x,y,8,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();
    //cross
    drawShape(x-7,y,2,6,'white');
    drawShape(x-7,y+2,4,2,'white');
  }

  this.up = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'red');
    context.ellipse(x,y,12,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();
  }

  this.rightUp = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'black');
    context.ellipse(x,y,8,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();
    //cross
    drawShape(x+5,y,2,6,'white');
    drawShape(x+3,y+2,4,2,'white');
  }

  this.right = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'red');
    context.ellipse(x,y,12,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();

    //cross
    drawShape(x+2,y,2,6,'white');
    drawShape(x,y+2,6,2,'white');
  }

  this.rightDown = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'red');
    context.ellipse(x,y,12,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();

    //cross
    drawShape(x+1,y,2,6,'white');
    drawShape(x-1,y+2,6,2,'white');
  }
  this.down = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'red');
    context.ellipse(x,y,12,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();

    //cross
    drawShape(x-1,y,2,6,'white');
    drawShape(x-3,y+2,6,2,'white');
  }
  this.leftDown = function(x,y){
    context.beginPath();
    drawShape(x-7,y,15,15,'red');
    context.ellipse(x,y,12,8,0,0,360 * Math.PI/180);
    context.fillStyle='black';
    context.fill();
    context.beginPath();
    context.ellipse(x,y+15,7,3,0,Math.PI/180,180 * Math.PI/180);
    context.fill();

    //cross
    drawShape(x-3,y,2,6,'white');
    drawShape(x-5,y+2,6,2,'white');
  }
}

var soldierTorsoBlue = new SoldierTorso('white','black')
var soldierTorso = new SoldierTorso('black','white')

var shield = {
  right: function (x,y){
    drawCircle(x,y,14,14,0,0,360,'rgb(100,100,100)');
  },
  leftThin: function (x,y){
    drawCircle(x,y,13,16,0,0,360,'white')
  },
  left: function (x,y){
    drawCircle(x,y,16,16,0,0,360,'white')
  }
}

function drawSword(x,y,w,h){
  //point
  context.beginPath();
  context.ellipse(x+2.5,y,2.5,10,0,180 * Math.PI/180, 270*Math.PI/180);
  context.ellipse(x+2.5,y,2.5,10,0,270 * Math.PI/180, 360*Math.PI/180);
  context.fillStyle = 'white';
  context.fill();
  //blade
  drawShape(x,y,5,40,'white')
  //guard
  drawShape(x-3,y+40,11,3,'black')
  //handle
  drawShape(x+1,y+43,3,8,'black')
  //pommel
  context.beginPath();
  context.ellipse(x+2.5,y+51,2.5,2.5,0,0,360*Math.PI/180);
  context.fillStyle = 'black';
  context.fill();
  //fuller
  drawShape(x+2,y,.5,40,'rgb(100,100,100)')
}

function drawArrow(x,y){
  context.beginPath();
  //arrowhead
  context.ellipse(x,y,4,15,0,180 * Math.PI/180,270 * Math.PI/180,0);
  context.ellipse(x-2,y,4,15,0,270 * Math.PI/180,360 * Math.PI/180,0);
  context.fillStyle = 'white';
  context.fill();
  //shaft
  drawShape(x-2,y-1,2,40,'black');
  //fleching
  drawShape(x-4,y+35,2,5,'white');
  drawShape(x,y+35,2,5,'white');
}
