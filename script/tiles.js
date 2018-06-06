//===============MAP TEXTURES==========
function tile(x,y,color,wall = false){
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = color;
  context.rect(x,y,32,32);
  context.lineWidth = 1;
  context.stroke();
  context.fill();
  if(wall){
    //prevent left
    if(player.posX - 14 <= x + 32 && player.posX + 13 >= x && player.posY + 12 >= y && player.posY - 12 <= y + 32){
      collide[0] = true;
      player.collisionCount = 5;
    }
    //prevent up
    if(player.posX + 12 >= x && player.posX - 12 <= x + 32 && player.posY - 14 <= y + 32 && player.posY + 13 >= y){
      collide[1] = true;
    }
    //prevent right
    if(player.posX + 14 >= x && player.posX - 14 <= x && player.posY + 12 >= y && player.posY - 12 <= y + 32){
      collide[2] = true;
    }
    //prevent down
    if(player.posX + 12 >= x && player.posX - 12 <= x + 32 && player.posY + 14 >= y && player.posY - 13 <= y + 32){
      collide[3] = true;
    }


    function enemy(enemy){
      //prevent left
      if(enemy.posX - 14 <= x + 32 && enemy.posX + 13 >= x && enemy.posY + 12 >= y && enemy.posY - 12 <= y + 32){
        enemy.move[0] = false;
      }
      //prevent up
      if(enemy.posX + 12 >= x && enemy.posX - 12 <= x + 32 && enemy.posY - 14 <= y + 32 && enemy.posY + 13 >= y){
        enemy.move[1] = false;
      }
      //prevent right
      if(enemy.posX + 14 >= x && enemy.posX - 14 <= x && enemy.posY + 12 >= y && enemy.posY - 12 <= y + 32){
        enemy.move[2] = false;
      }
      //prevent down
      if(enemy.posX + 12 >= x && enemy.posX - 12 <= x + 32 && enemy.posY + 14 >= y && enemy.posY - 13 <= y + 32){
        enemy.move[3] = false;
      }
    }
    enemy(enemy1)
    enemy(enemy2)
    enemy(enemy3)
    enemy(enemy4)
    enemy(enemy5)
    enemy(enemy6)
    enemy(enemy7)
    enemy(enemy8)
    enemy(enemy9)
    enemy(enemy10)
  }
}
function texture(x,y,filename,wall = false){
  var img = new Image();
  img.src = './images/'+filename+'.png';
  context.drawImage(img,x,y);
  if(wall === true){
    //prevent right
    if(player.posX + 30 >= x && player.posX <= x && player.posY + 25 >= y && player.posY <= y + 25){
      collide[2] = true;
    }
    //prevent left
    if(player.posX <= x + 33 && player.posX >= x && player.posY + 25 >= y && player.posY <= y + 25){
      collide[0] = true;
    }
    //prevent up
    if(player.posX + 25 >= x && player.posX <= x + 23 && player.posY <= y + 33 && player.posY + 25 >= y){
      collide[1] = true;
    }
    //prevent down
    if(player.posX + 25 >= x && player.posX <= x + 23 && player.posY <= y && player.posY + 30 >= y){
      collide[3] = true;
    }
  }
}


//==============RANDOM=========
function drawShape(x,y,w,h,color){
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = color;
  context.rect(x,y,w,h);
  context.fill();
}
function drawShapeStroke(x,y,w,h,color){
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = color;
  context.rect(x,y,w,h);
  context.fill();
  context.lineWidth = 1;
  context.stroke()
}

function drawCircle(x,y,w,h,r,angleA,angleB,color,border = true){
  context.beginPath();
  context.ellipse(x,y,w,h,r,angleA*Math.PI/180,angleB*Math.PI/180)
  context.fillStyle = color;
  context.fill();
  if(border){
    context.lineWidth = 1;
    context.stroke();
  }
}

function drawShapeRotate(x,y,w,h,angle,color){
  context.save();
  context.beginPath();
  context.translate(x+w/2,y+h/2);
  context.rotate(angle*Math.PI/180);
  context.fillStyle = color;
  context.stroke();
  context.rect(-w/2,-h/2,w,h);
  context.fill();
  context.restore();
}

function customShape(x1,y1,w1,h1,r1,angleA1,angleB1,
                     x2,y2,w2,h2,r2,angleA2,angleB2, color){
  context.beginPath();
  context.lineWidth = 1;
  context.ellipse(x1,y1,w1,h1,r1,angleA1*Math.PI/180,angleB1*Math.PI/180)
  context.ellipse(x2,y2,w2,h2,r2,angleA2*Math.PI/180,angleB2*Math.PI/180);
  context.fillStyle = color;
  context.fill();
  context.stroke();
}
