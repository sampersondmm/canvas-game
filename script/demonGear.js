var demonHelmet = {
  left: function (x,y){
    context.beginPath();
    //face
    customShape(x-1,y,6,10,0,90,180,
                x-1,y,9,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,180*Math.PI/180,305*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side large
    context.save();
    context.beginPath();
    context.translate(x+4,y-2);
    context.rotate(45*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,5,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,5,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side small
    context.save();
    context.beginPath();
    context.translate(x-6,y-2.5);
    context.rotate(-25*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4,20,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4,20,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  },
  //=============================
  //=============================
  leftUp: function (x,y){
    //face
    customShape(x-1,y,6,10,0,90,180,
                x-1,y,9,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,180*Math.PI/180,305*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side large
    context.save();
    context.beginPath();
    context.translate(x+4,y-2);
    context.rotate(45*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,5,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,5,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side small
    context.save();
    context.beginPath();
    context.translate(x-6,y-2.5);
    context.rotate(-25*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4,20,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4,20,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  },
  //=============================
  //=============================
  up: function (x,y){
    //face
    customShape(x,y,7.5,10,0,90,180,
                x,y,7.5,10,0,0,90,'rgb(200,200,200)');
    //side large
    context.save();
    context.beginPath();
    context.translate(x-5,y-4);
    context.rotate(-35*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4.5,22,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,4.5,22,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side small
    context.save();
    context.beginPath();
    context.translate(x+6,y-2.5);
    context.rotate(35*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4.5,22,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4.5,22,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x-.5,y+2,2,25,0,240*Math.PI/180,360*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
  },
  //=============================
  //=============================
  rightUp: function (x,y){

    //face
    customShape(x+2,y,9,10,0,90,180,
                x+2,y,6,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,240*Math.PI/180,360*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side
    context.save();
    context.beginPath();
    context.translate(x-4/2,y-2);
    context.rotate(-45*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,5,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,5,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side
    context.save();
    context.beginPath();
    context.translate(x+8,y-2.5);
    context.rotate(25*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4,20,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4,20,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  },
  //=============================
  //=============================
  right: function (x,y){


    //face
    customShape(x+2,y,9,10,0,90,180,
                x+2,y,6,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,240*Math.PI/180,360*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side
    context.save();
    context.beginPath();
    context.translate(x-4/2,y-2);
    context.rotate(-45*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,5,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,5,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side
    context.save();
    context.beginPath();
    context.translate(x+8,y-2.5);
    context.rotate(25*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4,20,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4,20,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  },
  //=============================
  //=============================
  rightDown: function (x,y){


    //face
    customShape(x+2,y,9,10,0,90,180,
                x+2,y,6,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,240*Math.PI/180,360*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side
    context.save();
    context.beginPath();
    context.translate(x-4/2,y-2);
    context.rotate(-45*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,5,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,5,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side
    context.save();
    context.beginPath();
    context.translate(x+8,y-2.5);
    context.rotate(25*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4,20,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4,20,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  },
  //==============================
  //==============================
  down: function (x,y){
    //face
    customShape(x,y,7.5,10,0,90,180,
                x,y,7.5,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x-.5,y+2,2,25,0,240*Math.PI/180,360*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side large
    context.save();
    context.beginPath();
    context.translate(x-5,y-4);
    context.rotate(-35*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4.5,22,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,4.5,22,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side small
    context.save();
    context.beginPath();
    context.translate(x+6,y-2.5);
    context.rotate(35*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4.5,22,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4.5,22,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  },
  leftDown: function (x,y){
    //face
    customShape(x-1,y,6,10,0,90,180,
                x-1,y,9,10,0,0,90,'rgb(200,200,200)');

    context.beginPath();
    context.ellipse(x+4,y,12,20,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(x-4,y,12,20,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(x,y,8,2,0,0 * Math.PI/180,180 * Math.PI/180,0 * Math.PI/180);
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 1;
    //line
    context.beginPath();
    context.ellipse(x,y+2,4,25,0,180*Math.PI/180,305*Math.PI/180);
    context.lineWidth = 1;
    context.fillStyle = 'red'
    context.fill();
    context.stroke();
    //side large
    context.save();
    context.beginPath();
    context.translate(x+4,y-2);
    context.rotate(45*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,5,25,0,180 * Math.PI/180,250 * Math.PI/180,0);
    context.ellipse(-2,0,5,25,0,290 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2.5,5,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
    //side small
    context.save();
    context.beginPath();
    context.translate(x-6,y-2.5);
    context.rotate(-25*Math.PI/180);
    context.fillStyle = 'black';
    context.ellipse(2,0,4,20,0,180 * Math.PI/180,240 * Math.PI/180,0);
    context.ellipse(-2,0,4,20,0,280 * Math.PI/180,360 * Math.PI/180,0);
    context.ellipse(0,0,2,3,0,0 * Math.PI/180,180 * Math.PI/180,0);
    context.fill();
    context.restore();
  }
}

var demonTorso = {
  thin: function(x,y){
    context.beginPath();
    //abs
    drawShape(x-6,y,13,15,'black');
    //shoulder
    context.ellipse(x+.5,y-2,8,7,0,0,360 * Math.PI/180);
    context.fillStyle='rgb(200,20,20)';
    context.lineWidth = 2;
    context.stroke();
    context.fill();
    context.beginPath();
    //bottom curve
    context.ellipse(x+.25,y+15,6.5,3,0,0*Math.PI/180,180 * Math.PI/180);
    context.fill();
    context.stroke();
    context.closePath();
  },
  wide: function(x,y){
    context.beginPath();
    //abs
    drawShape(x-6,y,13,15,'black');
    //shoulder
    context.ellipse(x,y-2,11,7,0,0,360 * Math.PI/180);
    context.fillStyle='rgb(200,20,20)';
    context.lineWidth = 2;
    context.stroke();
    context.fill();
    context.beginPath();
    //bottom curve
    context.ellipse(x+.25,y+15,6.5,3,0,0*Math.PI/180,180 * Math.PI/180);
    context.fill();
    context.stroke();
    context.closePath();
  },
}


function drawSpear(x,y,w,h){
  //butt
  drawShape(x-1.2,y+80,5,5,'black')
  //shaft
  drawShape(x,y,3,80,'black')
  //point
  context.beginPath();
  context.ellipse(x+1.7,y,3,15,0,160*Math.PI/180, 270*Math.PI/180);
  context.ellipse(x+1.3,y,3,15,0,270*Math.PI/180, 20*Math.PI/180);
  context.fillStyle = 'white';
  context.fill();
  //spearhead support
  drawShape(x-1.5,y+5,6,2,'black');
}
