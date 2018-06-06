function Soldier(posX,posY,type){
  this.dir = [false,false,false,false,true,false,false,false];
  this.collision = [false,false,false,false,false,false,false,false];
  this.move = [false,false,false,false];
  this.collisionCount = 0;
  this.moving = false;
  this.posX = posX;
  this.posY = posY;
  this.movementSpeed = 2;

  if(type === 'soldier'){
    this.body = {
        //============================
        //============================
        left: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x - 30,y, 3, 3,0,0,360,'red')
          drawCircle(x - 55,y, 3, 3,0,0,360,'red')
          drawCircle(x - 80,y, 3, 3,0,0,360,'red')
          if(weapon[1]){
            quiver.left(x+2,y-35);
          }
          if(weapon[0]){
            if(this.dir[0] === true){
              //sheath
              drawShapeRotate(x,y-23,5,25,-50,'black');
              this.sword.draw(x-15,y-65);
            }
          }
          //torso
          soldierTorso.left(x,y-28);

          //head
          helmet.left(x,y-43);
          if(weapon[1]){
            bow.left(x-15,y-28)
          }
          //feet
          if(this.dir[0] && !this.move[3] && !this.move[1] || (this.move[0] && this.move[1]) || (this.move[0] && this.move[3]) || !this.sword.ready) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x,y-15);
          }

          //shield
          if(weapon[0] === true){
            shield.left(x + 14 + this.shield.x, y - 20 + this.shield.y);
          }
        }.bind(this),
        //============================
        //============================
        leftUp: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x - 25 ,y - 25, 3, 3,0,0,360,'red')
          drawCircle(x - 45,y - 45, 3, 3,0,0,360,'red')
          drawCircle(x - 65,y - 65, 3, 3,0,0,360,'red')

          //quiver
          if(weapon[1]){
            quiver.left(x+5,y-35);
          }

          if(weapon[0] === true){
            if(this.dir[1] === true){
              //sheath
              drawShapeRotate(x,y-23,5,25,-50,'black');
              this.sword.draw(x-11,y-67);
            }
          }
          //torso
          soldierTorso.leftUp(x,y-28);

          //head
          helmet.leftUp(x,y-43);
          if(weapon[1] === true){
            bow.leftUp(x-10,y-40);
          }

          //feet
          if(this.dir[1] && this.move[2] || this.move[0] || (this.move[2] && this.move[3]) && (this.move[1] && this.move[0]) || (this.move[1] && this.move[2])|| !this.sword.ready) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }

          // shield
          if(weapon[0] === true){
            if(this.shield.count <= 2){
              shield.left(x + 10 + this.shield.x, y - 21 + this.shield.y);
            }
            if(this.shield.count >= 3){
              shield.leftThin(x + 10 + this.shield.x, y - 21 + this.shield.y)
            }
          }
        }.bind(this),
        //============================
        //============================
        up: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x ,y - 50, 3, 3,0,0,360,'red')
          drawCircle(x ,y - 65, 3, 3,0,0,360,'red')
          drawCircle(x ,y - 90, 3, 3,0,0,360,'red')

          if(weapon[1]){
            bow.up(x,y-60)
          }

          if(weapon[0]){
            //sheath
            drawShapeRotate(x-8,y-23,5,20,-5,'black');
            if(this.dir[2] === true){
              shield.right(x-18+this.shield.x,y-20+this.shield.y)
              this.sword.draw(x+18,y-60);
            }
          }
          //head
          helmet.up(x,y-43);

          //torso
          soldierTorso.up(x,y-28);

            //feet
            if(this.dir[2] && !this.move[2] && !this.move[0]|| !this.sword.ready) {
              this.feet.down.draw(x-4,y-15);
            } else {
              this.feet.right.draw(x,y-15);
            }

          if(weapon[1]){
            quiver.left(x,y-35);
          }

        }.bind(this),
        //============================
        //============================
        rightUp: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x + 25 ,y - 25, 3, 3,0,0,360,'red')
          drawCircle(x + 45,y - 45, 3, 3,0,0,360,'red')
          drawCircle(x + 65,y - 65, 3, 3,0,0,360,'red')

          if(weapon[1]){
            quiver.right(x-12,y-35);
          }
          if(weapon[0] === true){
            //sheath
            drawShapeRotate(x-5,y-23,5,25,50,'black');
            shield.right(x+5+this.shield.x,y-23+this.shield.y)
          }
          //torso
          soldierTorso.rightUp(x,y-28);

          //head
          helmet.rightUp(x,y-43);
          if(weapon[1] === true){
            bow.rightUp(x+10,y-40);
          }
          if(weapon[0] === true){
            if(this.dir[3] === true){
              // this.sword.rightUp.draw(x + 20,y - 30);
              this.sword.draw(x-10,y-60);
            }
          }
          //feet
          if(this.dir[3] && this.move[2] || this.move[0] || (this.move[2] && this.move[3]) && (this.move[1] && this.move[0]) || (this.move[1] && this.move[2])|| !this.sword.ready) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }
        }.bind(this),
        //============================
        //============================
        right: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x + 30,y, 3, 3,0,0,360,'red')
          drawCircle(x + 55,y, 3, 3,0,0,360,'red')
          drawCircle(x + 80,y, 3, 3,0,0,360,'red')

          //shield
          if(weapon[0] === true){
            if(this.shield.count < 3){
              shield.right(x+10+this.shield.x,y-23+this.shield.y)
            }
          }

          if(weapon[1]){
            quiver.right(x-10,y-35);
          }
          //torso
          soldierTorso.right(x,y-28);

          //head
          helmet.right(x,y-43);
          if(weapon[1]){
            bow.right(x+15,y-28)
          }

          //feet
          if(this.dir[4] && !this.move[3] && !this.move[1] || (this.move[2] && this.move[1]) || (this.move[2] && this.move[3])|| !this.sword.ready) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x,y-15);
          }

          if(weapon[0]){
            //sheath
            drawShapeRotate(x-5,y-23,5,25,50,'black');
            if(this.dir[4] === true){
              // this.sword.left.draw(x,y-40);
              this.sword.draw(x-13,y-60);
              if(this.shield.count >= 3){
                shield.leftThin(x+10+this.shield.x,y-23+this.shield.y)
              }
            }
          }
        }.bind(this),
        //============================
        //============================
        rightDown: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x + 20 ,y + 20, 3, 3,0,0,360,'red')
          drawCircle(x + 40,y + 40, 3, 3,0,0,360,'red')
          drawCircle(x + 60,y + 60, 3, 3,0,0,360,'red')

          if(weapon[1] === true){
            quiver.right(x-7,y-35);
          }
          //torso
          soldierTorso.rightDown(x,y-28);

          //head
          helmet.right(x,y-43);
          if(weapon[1] === true){
            bow.rightDown(x+7,y-10);
          }
          //feet
          if(this.dir[5] && this.move[2] || this.move[0] || (this.move[2] && this.move[3]) && (this.move[1] && this.move[0]) || (this.move[1] && this.move[2])|| !this.sword.ready) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }
          //weapon
          if(weapon[0] === true){
            shield.left(x+19+this.shield.x,y-22+this.shield.y)
            this.sword.draw(x-18,y-58);
          }
        }.bind(this),
        //============================
        //============================
        down: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x ,y + 20, 3, 3,0,0,360,'red')
          drawCircle(x ,y + 45, 3, 3,0,0,360,'red')
          drawCircle(x ,y + 70, 3, 3,0,0,360,'red')
          if(weapon[1]){
            quiver.right(x-5,y-35);
          }

          //torso
          soldierTorso.down(x,y-28);


          //head
          helmet.down(x,y-43);
          if(weapon[1]){
            bow.down(x,y)
          }
            //feet
            if(this.dir[6] && !this.move[2] && !this.move[0]|| !this.sword.ready) {
              this.feet.down.draw(x-4,y-15);
            } else {
              this.feet.right.draw(x,y-15);
            }


          if(weapon[0]){
            //sheath
            drawShapeRotate(x+5,y-23,5,20,5,'black');
            shield.left(x+22+this.shield.x,y-18+this.shield.y)
            this.sword.draw(x-20,y-60);
          }
        }.bind(this),
        //============================
        //============================
        leftDown: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x - 20 ,y + 20, 3, 3,0,0,360,'red')
          drawCircle(x - 40,y + 40, 3, 3,0,0,360,'red')
          drawCircle(x - 60,y + 60, 3, 3,0,0,360,'red')

          if(weapon[1] === true){
            quiver.left(x,y-35);
          }
          //torso
          soldierTorso.leftDown(x,y-28);

          //head
          helmet.left(x,y-43);
          if(weapon[1] === true){
            bow.leftDown(x-7,y-10);
            // bow.leftUp(x+5,y-10);
          }

          //feet
          if(this.dir[7] && (this.move[2] && this.move[1]) || (this.move[2] && this.move[3]) || (this.move[1] && this.move[0] || this.move[3] && this.move[0]) || this.move[0] || this.move[2]|| !this.sword.ready) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }

          //weapon
          if(weapon[0] === true){
            this.sword.draw(x-18,y-62);
            shield.left(x+18+this.shield.x,y-18+this.shield.y)
          }
        }.bind(this)
        //============================
        //============================
      }
  }
  if(type === 'demon'){
    this.body = {
      //============================
      //============================
      left: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x - 30,y, 3, 3,0,0,360,'red')
        drawCircle(x - 55,y, 3, 3,0,0,360,'red')
        drawCircle(x - 80,y, 3, 3,0,0,360,'red')


        this.spear.draw(x,y-70,-65)

        demonTorso.wide(x,y-35)

        demonHelmet.left(x,y-53);
        //feet
        if(this.dir[0]) {
          this.feet.right.draw(x,y-15);
        } else {
          this.feet.down.draw(x,y-15);
        }
      }.bind(this),
      //============================
      //============================
      leftUp: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x - 25 ,y - 25, 3, 3,0,0,360,'red')
        drawCircle(x - 45,y - 45, 3, 3,0,0,360,'red')
        drawCircle(x - 65,y - 65, 3, 3,0,0,360,'red')

        this.spear.draw(x-5,y-75,-30)

        demonTorso.thin(x,y-35)

        demonHelmet.leftUp(x,y-53);
        //feet
        if(this.dir[1]) {
          this.feet.right.draw(x,y-15);
        } else {
          this.feet.down.draw(x-4,y-15);
        }
      }.bind(this),
      //============================
      //============================
      up: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x ,y - 50, 3, 3,0,0,360,'red')
        drawCircle(x ,y - 65, 3, 3,0,0,360,'red')
        drawCircle(x ,y - 90, 3, 3,0,0,360,'red')

        this.spear.draw(x+10,y-70)
        //head
        demonHelmet.up(x,y-53);
        //torso
        demonTorso.wide(x,y-35);


        //feet
        if(this.dir[2]) {
          this.feet.right.draw(x-4,y-15);
        } else {
          this.feet.down.draw(x,y-15);
        }
      }.bind(this),
      //============================
      //============================
      rightUp: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x + 25 ,y - 25, 3, 3,0,0,360,'red')
        drawCircle(x + 45,y - 45, 3, 3,0,0,360,'red')
        drawCircle(x + 65,y - 65, 3, 3,0,0,360,'red')

        demonTorso.thin(x,y-35);

        this.spear.draw(x+5,y-75,30)

        demonHelmet.right(x,y-53);
        //feet
        if(this.dir[3]) {
          this.feet.right.draw(x,y-15);
        } else {
          this.feet.down.draw(x-4,y-15);
        }
      }.bind(this),
      //============================
      //============================
      right: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x + 30,y, 3, 3,0,0,360,'red')
        drawCircle(x + 55,y, 3, 3,0,0,360,'red')
        drawCircle(x + 80,y, 3, 3,0,0,360,'red')


        demonTorso.wide(x,y-35);

        this.spear.draw(x-5,y-70,65)

        demonHelmet.right(x,y-53);
        //feet
        if(this.dir[4]) {
          this.feet.right.draw(x,y-15);
        } else {
          this.feet.down.draw(x,y-15);
        }
      }.bind(this),
      //============================
      //============================
      rightDown: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x + 20 ,y + 20, 3, 3,0,0,360,'red')
        drawCircle(x + 40,y + 40, 3, 3,0,0,360,'red')
        drawCircle(x + 60,y + 60, 3, 3,0,0,360,'red')

        demonTorso.wide(x,y-35);

        this.spear.draw(x-10,y-75,100)

        demonHelmet.right(x,y-53);
        //feet
        if(this.dir[5]) {
          this.feet.right.draw(x,y-15);
        } else {
          this.feet.down.draw(x-4,y-15);
        }
      }.bind(this),
      //============================
      //============================
      down: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x ,y + 20, 3, 3,0,0,360,'red')
        drawCircle(x ,y + 45, 3, 3,0,0,360,'red')
        drawCircle(x ,y + 70, 3, 3,0,0,360,'red')

        this.spear.draw(x-10,y-70,180)

        demonTorso.wide(x,y-35);

        demonHelmet.down(x,y-53);
        //feet
        if(this.dir[6]) {
          this.feet.right.draw(x-4,y-15);
        } else {
          this.feet.down.draw(x,y-15);
        }
      }.bind(this),
      //============================
      //============================
      leftDown: function(x,y){
        drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

        drawCircle(x - 20 ,y + 20, 3, 3,0,0,360,'red')
        drawCircle(x - 40,y + 40, 3, 3,0,0,360,'red')
        drawCircle(x - 60,y + 60, 3, 3,0,0,360,'red')

        this.spear.draw(x+5,y-75,-100)

        demonTorso.wide(x,y-35)

        demonHelmet.leftUp(x,y-53);
        //feet
        if(this.dir[0]) {
          this.feet.right.draw(x,y-15);
        } else {
          this.feet.down.draw(x-4,y-15);
        }
      }.bind(this),
      //============================
      //============================
    }
  }

  this.sword = {
    ready: true,
    angle: 0,
    count: 0,
    interval: null,
    x:0,
    y:0,
    draw: function (x,y){
      context.save();
      context.beginPath();
      context.translate(x + this.x + 5,y + this.y + 45);
      context.rotate(this.angle *Math.PI/180);
      drawSword(-5,-45,10,65);
      context.restore();
    },
    reset: function(){
      this.ready = true;
      this.count = 0;
      this.y = 0;
      this.x = 0;
      this.angle = 0;
      clearInterval(this.interval)
    }
  }

  this.spear = {
    ready: true,
    angle: 0,
    count: 0,
    interval: null,
    x:0,
    y:0,
    draw: function (x,y,startAngle){
      context.save();
      context.beginPath();
      context.translate(x + this.x + 1,y + this.y + 45);
      context.rotate((this.angle + startAngle)*Math.PI/180);
      drawSpear(-1,-45);
      context.restore();
    },
    reset: function(){
      this.ready = true;
      this.count = 0;
      this.y = 0;
      this.x = 0;
      this.angle = 0;
      clearInterval(this.interval)
    }
  }

  this.spearAttack = {
    left: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x += 1;
        this.spear.angle -= 2.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x -= 9;
      }
      // //recover
      if(25 <= this.spear.count){
        this.spear.angle += .7;
        this.spear.x += 1.5;
      }
      //complete
      this.spear.count++;
      if(!this.dir[0] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    leftUp: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x += 1;
        this.spear.y += 1;
        this.spear.angle -= 1.5;
      }
      // //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x -= 7;
        this.spear.y -= 7;
      }
      // // //recover
      if(25 <= this.spear.count){
        this.spear.angle += .4;
        this.spear.x += 1.1;
        this.spear.y += 1.1;
      }
      //complete
      this.spear.count++;
      if(!this.dir[1] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    up: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.y += 1;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.y -= 9;
      }
      // //recover
      if(25 <= this.spear.count){
        this.spear.y += 1.5;
      }
      //complete
      this.spear.count++;
      if(!this.dir[2] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    rightUp: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x -= 1;
        this.spear.y += 1;
        this.spear.angle += 1.5;
      }
      // //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x += 7;
        this.spear.y -= 7;
      }
      // // //recover
      if(25 <= this.spear.count){
        this.spear.angle -= .4;
        this.spear.x -= 1.1;
        this.spear.y += 1.1;
      }
      //complete
      this.spear.count++;
      if(!this.dir[3] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    right: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x -= 1;
        this.spear.angle += 2.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x += 9;
      }
      // //recover
      if(25 <= this.spear.count){
        this.spear.angle -= .7;
        this.spear.x -= 1.5;
      }
      //complete
      this.spear.count++;
      if(!this.dir[4] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    rightDown: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x -= 1;
        this.spear.y -= 1.5;
        this.spear.angle += 3.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x += 9;
        this.spear.y += 9;
      }
      //recover
      if(25 <= this.spear.count){
        this.spear.angle -= 1;
        this.spear.x -= 1.5;
        this.spear.y -= 1.35;
      }
      //complete
      this.spear.count++;
      if(!this.dir[5] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    down: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.y -= 1;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.y += 10;
      }
      // //recover
      if(25 <= this.spear.count){
        this.spear.y -= 1.7;
      }
      //complete
      this.spear.count++;
      if(!this.dir[6] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    leftDown: function(){
      this.spear.ready = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x += 1;
        this.spear.y -= 1.5;
        this.spear.angle -= 3.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x -= 9;
        this.spear.y += 9;
      }
      //recover
      if(25 <= this.spear.count){
        this.spear.angle += 1;
        this.spear.x += 1.5;
        this.spear.y -= 1.35;
      }
      //complete
      this.spear.count++;
      if(!this.dir[7] || this.spear.count > 60){
        this.spear.reset();
      }
    }
  }

  this.swordAttack = {
    left: function(){
      this.sword.ready = false;
      //prepare
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.angle += 4;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 19;
        this.sword.x -= 3;
        this.sword.y += 3.7;
      }
      //recover
      if(25 <= this.sword.count){
        this.sword.angle += 2.7;
        this.sword.x += .6;
        this.sword.y += .1;
      }
      //complete
      this.sword.count++;
      if(!this.dir[0] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    leftUp: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y -= 4;
        this.sword.x += 1;
        this.sword.angle += 5;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 15;
        this.sword.x -= 4;
        this.sword.y += 3;
      }
      if(25 <= this.sword.count){
        this.sword.angle += 1.6;
        this.sword.x += .5;
        this.sword.y += .5;
      }
      this.sword.count++;
      if(!this.dir[1] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    up: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y += 1;
        this.sword.x += 1;
        this.sword.angle += 5;
      }
      //from 5 to 10---swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 8;
        this.sword.x -= 4;
        this.sword.y -= 7;
      }
      //after 20--recover
      if(25 <= this.sword.count){
        this.sword.angle += .2;
        this.sword.x += .5;
        this.sword.y += 1.1;
      }
      this.sword.count++;
      if(!this.dir[2] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    rightUp: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.x -= 1;
        this.sword.angle -= 5;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle += 14;
        this.sword.x += 6;
        this.sword.y += 2;
      }
      if(25 <= this.sword.count){
        this.sword.angle -= 1.4;
        this.sword.x -= .9;
        this.sword.y += .4;
      }
      this.sword.count++;
      if(!this.dir[3] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    right: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.angle -= 4;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle += 19;
        this.sword.x += 6;
        this.sword.y += 4;
      }
      if(25 <= this.sword.count){
        this.sword.angle -= 2.5;
        this.sword.x -= 1.2;
      }
      this.sword.count++;
      if(!this.dir[4] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    rightDown: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y -= 2;
        this.sword.angle -= 2;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle += 23.5;
        this.sword.x += 5.5;
        this.sword.y += 5.5;
      }
      if(25 <= this.sword.count){
        this.sword.angle -= 4.2;
        this.sword.x -= 1.1;
        this.sword.y -= .55;
      }
      this.sword.count++;
      if(!this.dir[5] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    down: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.angle += 3;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 30;
        this.sword.x += 1.5;
        this.sword.y += 8;
      }
      if(25 <= this.sword.count){
        this.sword.angle += 5.2;
        this.sword.x -= .3;
        this.sword.y -= .7;
      }
      this.sword.count++;
      if(!this.dir[6] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    leftDown: function(){
      this.sword.ready = false;
      if(this.sword.count <= 9){
        this.sword.y -= 2;
        this.sword.angle += 2;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 23.5;
        this.sword.x -= 2.8;
        this.sword.y += 5.5;
      }
      if(25 <= this.sword.count){
        this.sword.angle += 4;
        this.sword.x += .5;
        this.sword.y -= .45;
      }
      this.sword.count++;
      if(!this.dir[7] || this.sword.count > 60){
        this.sword.reset();
      }
    }
  }

  this.shield = {
    ready: true,
    angle: 0,
    count: 0,
    x:0,
    y:0,
    drawLeft: function (x,y){

    },
    drawRight: function (x,y){
      shield.right(x + this.x, y + this.y);
    },
    clearUp: function(){
      this.count = 0;
      clearInterval(this.intervalUp);
      console.log('Clear up was run')
    },
    reset: function(){
      clearInterval(this.intervalDown);
      this.count = 0;
      this.y = 0;
      this.x = 0;
      this.ready = true;
    }
  }

  this.defend = {
    left: function(){
      if(this.dir[0]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){
            this.sword.x += 1;
            this.shield.x -= 6;
            this.shield.y -= 1;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.x = 4;
            this.shield.x = -24;
            this.shield.y = -4;
          }
        }
        if(!defend) {
          if(this.shield.count > 0){
            this.sword.x -= 1;
            this.shield.x += 6;
            this.shield.y += 1;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    leftUp: function(){
      if(this.dir[1]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){
            this.sword.x += 1;
            this.shield.x -= 6;
            this.shield.y -= 1;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.x = 4;
            this.shield.x = -24;
            this.shield.y = -4;
          }
        }
        if(!defend) {
          if(this.shield.count > 0){
            this.sword.x -= 1;
            this.shield.y += 1;
            this.shield.x += 6;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    up: function(){
      if(this.dir[2]){
        if(defend){
          if(this.shield.count <= 3){
            this.sword.y += 1;
            this.sword.x -= .5;
            this.shield.y -= 3;
            this.shield.x += 3;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.y = 4;
            this.sword.x = -2;
            this.shield.y = -12;
            this.shield.x = 12;
          }
        }
        if(!defend) {
          if(this.shield.count > 0){
            this.sword.y -= 1;
            this.sword.x += .5;
            this.shield.y += 3;
            this.shield.x -= 3;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    rightUp: function(){
      if(this.dir[3]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){
            this.sword.x -= 1;
            this.shield.y -= 2;
            this.shield.x += 3;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.x = -4;
            this.shield.y = -8;
            this.shield.x = 12;
          }
        }
        if(!defend){
          if(this.shield.count > 0){
            this.sword.x += 1;
            this.shield.y += 2;
            this.shield.x -= 3;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    right: function(){
      if(this.dir[4]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){
            this.sword.x -= 1;
            this.shield.y -= 1;
            this.shield.x += 2;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.x = -4;
            this.shield.y = -4;
            this.shield.x = 8;
          }
        }
        if(!defend){
          if(this.shield.count > 0){
            this.sword.x += 1;
            this.shield.y += 1;
            this.shield.x -= 2;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    rightDown: function(){
      if(this.dir[5]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){
            this.sword.x -= 1;
            this.sword.y -= 2;
            this.shield.x -= 3;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.x = -4;
            this.sword.y = -8;
            this.shield.x = -12;
          }
        }
        if(!defend){
          if(this.shield.count > 0){
            this.sword.x += 1;
            this.sword.y += 2;
            this.shield.x += 3;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    down: function(){
      if(this.dir[6]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){

            this.sword.y -= 3;
            this.shield.x -= 5;
            this.shield.y -= 1;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.y = -12;
            this.shield.x = -20;
            this.shield.y = -4;
          }
        }
        if(!defend){
          if(this.shield.count > 0){
            this.sword.y += 3;
            this.shield.x += 5;
            this.shield.y += 1;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    leftDown: function(){
      if(this.dir[7]){
        if(defend && this.sword.ready){
          if(this.shield.count <= 3){

            this.sword.y -= 2;
            this.shield.x -= 6;
            this.shield.y -= 1;
            this.shield.count++;
          }
          if(this.shield.count >= 3){
            this.sword.y = -8;
            this.sword.x = 0
            this.shield.x = -24;
            this.shield.y = -4;
          }
        }
        if(!defend){
          if(this.shield.count > 0){
            this.sword.y += 2;
            this.shield.x += 6;
            this.shield.y += 1;
            this.shield.count--;
          }
        }
      }
    }.bind(this),
    all: function(){
      this.left();
      this.leftUp();
      this.up();
      this.rightUp();
      this.right();
      this.rightDown();
      this.down();
      this.leftDown();
    }
  }

  this.bowAttack = {
    quiverLeft: [],
    quiverLeftUp: [],
    quiverUp: [],
    quiverRightUp: [],
    quiverRight: [],
    quiverRightDown: [],
    quiverDown: [],
    quiverLeftDown: [],
    arrowReady: true,
    arrowDelay: 1000,
    Arrow: function(x,y){
      this.x = x;
      this.y = y;
      this.complete = false;

      this.createLeft = function(){
        arrow.left(this.x-20, this.y-25)
      }
      this.createLeftUp = function(){
        arrow.leftUp(this.x-20, this.y-35)
      }
      this.createUp = function(){
        arrow.up(this.x-3,this.y-55)
      }
      this.createRightUp = function(){
        arrow.rightUp(this.x+15, this.y-35)
      }
      this.createRight = function(){
        arrow.right(this.x+20, this.y-25)
      }
      this.createRightDown = function(){
        arrow.rightDown(this.x+15, this.y-5)
      }
      this.createDown = function(){
        arrow.down(this.x-3,this.y);
      }
      this.createLeftDown = function(){
        arrow.leftDown(this.x-15,this.y-7);
      }
      this.moveLeft = function(){
        this.x -= 5;
      }
      this.moveLeftUp = function(){
        this.x -= 5;
        this.y -= 5;
      }
      this.moveUp = function(){
        this.y -= 5;
      }
      this.moveRightUp = function(){
        this.x += 5;
        this.y -=5;
      }
      this.moveRight = function(){
        this.x += 5;
      }
      this.moveRightDown = function(){
        this.x += 5;
        this.y += 5;
      }
      this.moveDown = function(){
        this.y += 5;
      }
      this.moveLeftDown = function(){
        this.x -= 5;
        this.y += 5;
      }
      this.delete = function(){
        if(this.x < - 100 || this.x > 740 || this.y < - 100 || this.y > 580){
          this.complete = true;
        }
      }
    },
    createArrow: function(){
      //arrow ready is the delay between arrows
      if(this.bowAttack.arrowReady){
        var arrow = new this.bowAttack.Arrow(this.posX,this.posY);
        if(this.dir[0]){this.bowAttack.quiverLeft.push(arrow)};
        if(this.dir[1]){this.bowAttack.quiverLeftUp.push(arrow)};
        if(this.dir[2]){this.bowAttack.quiverUp.push(arrow)};
        if(this.dir[3]){this.bowAttack.quiverRightUp.push(arrow)};
        if(this.dir[4]){this.bowAttack.quiverRight.push(arrow)};
        if(this.dir[5]){this.bowAttack.quiverRightDown.push(arrow)};
        if(this.dir[6]){this.bowAttack.quiverDown.push(arrow)};
        if(this.dir[7]){this.bowAttack.quiverLeftDown.push(arrow)};
        this.bowAttack.arrowReady = false;
        setTimeout(function(){
          this.bowAttack.arrowReady = true;
        }.bind(this),this.bowAttack.arrowDelay)
      }
    }.bind(this),
    shoot: function(){
      for(var i = 0; i < this.quiverLeft.length; i++){
        this.quiverLeft[i].createLeft();
        this.quiverLeft[i].moveLeft();
        this.quiverLeft[i].delete();
        if(this.quiverLeft[i].complete){
          this.quiverLeft.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverLeftUp.length; i++){
        this.quiverLeftUp[i].createLeftUp();
        this.quiverLeftUp[i].moveLeftUp();
        this.quiverLeftUp[i].delete();
        if(this.quiverLeftUp[i].complete){
          this.quiverLeftUp.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverUp.length; i++){
        this.quiverUp[i].createUp();
        this.quiverUp[i].moveUp();
        this.quiverUp[i].delete();
        if(this.quiverUp[i].complete){
          this.quiverUp.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverRightUp.length; i++){
        this.quiverRightUp[i].createRightUp();
        this.quiverRightUp[i].moveRightUp();
        this.quiverRightUp[i].delete();
        if(this.quiverRightUp[i].complete){
          this.quiverRightUp.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverRight.length; i++){
        this.quiverRight[i].createRight();
        this.quiverRight[i].moveRight();
        this.quiverRight[i].delete();
        if(this.quiverRight[i].complete){
          this.quiverRight.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverRightDown.length; i++){
        this.quiverRightDown[i].createRightDown();
        this.quiverRightDown[i].moveRightDown();
        this.quiverRightDown[i].delete();
        if(this.quiverRightDown[i].complete){
          this.quiverRightDown.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverDown.length; i++){
        this.quiverDown[i].createDown();
        this.quiverDown[i].moveDown();
        this.quiverDown[i].delete();
        if(this.quiverDown[i].complete){
          this.quiverDown.splice(i,1);
        }
      }
      for(var i = 0; i < this.quiverLeftDown.length; i++){
        this.quiverLeftDown[i].createLeftDown();
        this.quiverLeftDown[i].moveLeftDown();
        this.quiverLeftDown[i].delete();
        if(this.quiverLeftDown[i].complete){
          this.quiverLeftDown.splice(i,1);
        }
      }
    }
  }

  this.feet = {
    right: {
      angle1:0,
      angle2:0,
      count:0,
      draw: function(x,y){
        //back leg
        context.save();
        context.translate(x - 4,y);
        context.rotate(this.angle1 * Math.PI/180);
        drawShape(-2.5,10, 7, 5,'black');
        context.restore();

        context.save();
        context.translate(x + 3,y);
        context.rotate(this.angle2 * Math.PI/180);
        drawShape(-2.5,10, 7, 5,'black');
        context.restore();
      },
      move: function(){
        if(this.count <= 55){
          this.angle1 -= 12;
          this.angle2 += 12;
        }
        else if(this.count >= 55 && this.count <= 55 * 3){
          this.angle1 += 12;
          this.angle2 -= 12;
        }
        else if(this.count >= 55 * 3 && this.count <= 55 * 4){
          this.angle1 -= 12;
          this.angle2 += 12;
        }
        else if(this.count >= 55 * 4){
          this.count = 0;
        }
        this.count+=10;
      },
      stop: function(){
        this.count = 0;
        this.angle1 = 0;
        this.angle2 = 0;
      }
    },
    down: {
      angle1:0,
      angle2:0,
      y1:0,
      y2:0,
      count:0,
      draw: function(x,y){
        //back leg
        context.save();
        context.translate(x,y + this.y2);
        context.rotate(Math.PI/180);
        drawShape(-2.5,10, 6, 5,'black');
        context.restore();

        context.save();
        context.translate(x + 8,y + this.y1);
        context.rotate(Math.PI/180);
        drawShape(-2.5,10, 6, 5,'black');
        context.restore();
      },
      move: function(){
          if(this.count <= 4){
            this.y1 -= 2;
            this.y2 += 2;
          }
          else if(this.count >= 4 && this.count <= 4 * 3){
            this.y1 += 2;
            this.y2 -= 2;
          }
          else if(this.count >= 4 * 3 && this.count <= 4 * 4){
            this.y1 -= 2;
            this.y2 += 2;
          }
          else if(this.count >= 4 * 4){
            this.count = 0;
          }
          this.count++;
      },
      stop: function(){
        this.count = 0;
        this.y1 = 0;
        this.y2 = 0;
      }
    },
    animate: function(){
      if((this.move[2] && !collide[2]) || (this.move[0] && !collide[0])){
        this.feet.right.move();
      }
      if(this.move[0] && player.move[2] || !this.sword.ready){
        this.feet.right.stop();
      }

      if((this.move[3] && !collide[3]) || (this.move[1] && !collide[1])){
        this.feet.down.move();
      } else {
        this.feet.down.stop();
      }
      if(this.move[1] && this.move[3] || !this.sword.ready){
        this.feet.down.stop();
      }

      //if up against the wall but still moving up or down: left
      if((this.move[0] && collide[0] && this.move[1] && !collide[1]) || (this.move[0] && collide[0] && this.move[3] && !collide[3])){
        this.feet.right.move();
      }
      else if((this.move[0] && collide[0] && !this.move[1] && !collide[1]) || (this.move[0] && collide[0] && !this.move[3] && !collide[3])){
        this.feet.right.stop();
      }
      //if up against the wall but still moving up or down: right
      if((this.move[2] && collide[2] && this.move[1] && !collide[1]) || (this.move[2] && collide[2] && this.move[3] && !collide[3])){
        this.feet.right.move();
      } else if
      ((this.move[2] && collide[2] && !this.move[1] && !collide[1]) || (this.move[2] && collide[2] && !this.move[3] && !collide[3])){
        this.feet.right.stop();
      }
      //turn of both runs when the move arr is false
      else if(!this.move[0] && !this.move[1] && !this.move[2] && !this.move[3]){
        this.feet.right.stop();
        this.feet.down.stop();
      }
    }
  }

  this.freezeMovement = function(){
    this.move[0]=false;
    this.move[1]=false;
    this.move[2]=false;
    this.move[3]=false;
  }

  this.collisionDetection = function(){
    //left
    if(this.collision[0]){
      if(this.collisionCount < 5){
        this.posX -= 10;
        this.freezeMovement();
        this.collisionCount++;
        if(collide[0]){
          this.collision[0] = false;
          this.collisionCount = 0;
        }
      }
      else {
        this.collision[0] = false;
        this.collisionCount = 0;
      }
    }
    //left up
    if(this.collision[1]){
      if(this.collisionCount < 5){
        this.posX -= 10;
        this.posY -= 10;
        this.freezeMovement();
        this.collisionCount++;
      } else {
        this.collision[1] = false;
        this.collisionCount = 0;
      }
    }
    //up
    if(this.collision[2]){
      if(this.collisionCount < 5){
        this.posY -= 10;
        this.freezeMovement();
        this.collisionCount++;
      } else {
        this.collision[2] = false;
        this.collisionCount = 0;
      }
    }
    //right up
    if(this.collision[3]){
      if(this.collisionCount < 5){
        this.posY -= 10;
        this.posX += 10;
        this.freezeMovement();
        this.collisionCount++;
      } else {
        this.collision[3] = false;
        this.collisionCount = 0;
      }
    }
    //right
    if(this.collision[4]){
      if(this.collisionCount < 5){
        this.posX += 10;
        this.freezeMovement();
        this.collisionCount++;
        if(collide[2]){
          this.collision[4] = false;
          this.collisionCount = 0;
        }
      } else {
        this.collision[4] = false;
        this.collisionCount = 0;
      }
    }
    //right down
    if(this.collision[5]){
      if(this.collisionCount < 5){
        this.posX += 10;
        this.posY += 10;
        this.freezeMovement();
        this.collisionCount++;
      } else {
        this.collision[5] = false;
        this.collisionCount = 0;
      }
    }
    //down
    if(this.collision[6]){
      if(this.collisionCount < 5){
        this.posY += 10;
        posY += 10;
        this.freezeMovement();
        this.collisionCount++;
      } else {
        this.collision[6] = false;
        this.collisionCount = 0;
      }
    }
    //left down
    if(this.collision[7]){
      if(this.collisionCount < 5){
        this.posY += 10;
        this.posX -= 10;
        posY += 10;
        posX -= 10;
        this.freezeMovement();
        this.collisionCount++;
      } else {
        this.collision[7] = false;
        this.collisionCount = 0;
      }
    }
  }.bind(this)

  this.controlDirection = function(){
    if(this.dir[0]){this.body.left(this.posX,this.posY)}
    if(this.dir[1]){this.body.leftUp(this.posX,this.posY)}
    if(this.dir[2]){this.body.up(this.posX,this.posY)}
    if(this.dir[3]){this.body.rightUp(this.posX,this.posY)}
    if(this.dir[4]){this.body.right(this.posX,this.posY)}
    if(this.dir[5]){this.body.rightDown(this.posX,this.posY)}
    if(this.dir[6]){this.body.down(this.posX,this.posY)}
    if(this.dir[7]){this.body.leftDown(this.posX,this.posY)}
  };

  this.controlMovementPlayer = function(){
    if(!this.sword.ready){
      this.move[0] = false;
      this.move[1] = false;
      this.move[2] = false;
      this.move[3] = false;
    }
    //moving left
    if(this.move[0]){
      if(collide[0]){
        this.posX -= 0;
      }
      else {
        this.posX -= this.movementSpeed;
        if(!directionOverride){
          for(var i = 0; i < this.dir.length; i++){
            this.dir[i] = false;
          }
          this.dir[0] = true;
        }
      }
    }
    //moving up
    if(this.move[1]){
      if(collide[1]){
        this.posY -= 0;
      } else {
        this.posY -= this.movementSpeed;
        if(!directionOverride){
          for(var i = 0; i < this.dir.length; i++){
            this.dir[i] = false;
          }
          this.dir[2] = true;
        }
      }
    }
    //moving right
    if(this.move[2]){
      if(collide[2] || !this.sword.ready){
        this.posX += 0;
      } else {
        this.posX += this.movementSpeed;
        if(!directionOverride){
          for(var i = 0; i < this.dir.length; i++){
            this.dir[i] = false;
          }
          this.dir[4] = true;
        }
      }
    }
    //moving down
    if(this.move[3]){
      if(collide[3] || !this.sword.ready){
        this.posY += 0;
      } else {
        this.posY += this.movementSpeed;
        if(!directionOverride){
          for(var i = 0; i < this.dir.length; i++){
            this.dir[i] = false;
          }
          this.dir[6] = true;
        }
      }
    }
    //left and up
    if(this.move[0] && this.move[1]){
      if(!directionOverride){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[1] = true;
      }
    }
    //right and up
    if(this.move[2] && this.move[1]){
      if(!directionOverride){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[3] = true;
      }
    }
    //if right and down
    if(this.move[2] && this.move[3]){
      if(!directionOverride){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[5] = true;
      }
    }
    //if left and down
    if(this.move[0] && this.move[3]){
      if(!directionOverride){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[7] = true;
      }
    }
  };

  this.override = function(){
    if(this.sword.ready){
      //left
      if(override[0] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[0] = true;
      }
      //up
      if(override[1] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[2] = true;
      }
      //right
      if(override[2] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[4] = true;
      }
      //down
      if(override[3] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[6] = true;
      }
      //left up
      if(override[0] === true && override[1] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[1] = true;
      }
      //right up
      if(override[1] === true && override[2] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[3] = true;
      }
      //right and down
      if(override[2] === true && override[3] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[5] = true;
      }
      //left and down
      if(override[0] === true && override[3] === true){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false;
        }
        this.dir[7] = true;
      }
    }
  };

  this.chase = function(){

    var distance = Math.floor(Math.sqrt(Math.pow(Math.abs(this.posX - posX), 2) + Math.pow(Math.abs(this.posY - posY), 2)))
    var distanceToSoldier1 = Math.floor(Math.sqrt(Math.pow(Math.abs(this.posX - soldierEnemy1.posX), 2) + Math.pow(Math.abs(this.posY - soldierEnemy1.posY), 2)))
    var distanceToSoldier2 = Math.floor(Math.sqrt(Math.pow(Math.abs(this.posX - soldierEnemy2.posX), 2) + Math.pow(Math.abs(this.posY - soldierEnemy2.posY), 2)))
    var attack = false;

    var angleZone = [false,false,false,false,false,false,false,false];
    var angle;
    //left
    if(this.posX >= posX && this.posY === posY){
      var angle = 270;
    }
    //left up
    if(this.posX >= posX && this.posY > posY){
      var angle = 360 - Math.asin(Math.abs(this.posX - posX) / distance)*(180/Math.PI);
    }
    //up
    if(this.posX === posX && this.posY >= posY){
      var angle = 0;
    }
    //right up
    if(this.posX <= posX && this.posY > posY){
      var angle = Math.asin(Math.abs(this.posX - posX) / distance)*(180/Math.PI);
    }
    //right
    if(this.posX <= posX && this.posY === posY){
      var angle = 90;
    }
    //right down
    if(this.posX <= posX && this.posY < posY){
      var angle = 180 - Math.asin(Math.abs(this.posX - posX) / distance)*(180/Math.PI);
    }
    //down
    if(this.posX === posX && this.posY <= posY){
      var angle = 180
    }
    //left down
    if(this.posX >= posX && this.posY < posY){
      var angle = 180 + Math.asin(Math.abs(this.posX - posX) / distance)*(180/Math.PI);
    }

    //Toggles the angleZone
    //left
    if(angle > 247.5 && angle < 292.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[0] = true;
    }
    //left up
    if(angle > 292.5 && angle < 337.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[1] = true;
    }
    //up
    if(angle > 337.5 && angle < 360 || angle > 0 && angle < 22.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[2] = true;
    }
    //right up
    if(angle > 22.5 && angle < 67.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[3] = true;
    }
    //right
    if(angle > 67.5 && angle < 112.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[4] = true;
    }
    //right down
    if(angle > 112.5 && angle < 157.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[5] = true;
    }
    //down
    if(angle > 157.5 && angle < 202.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[6] = true;
    }
    //left down
    if(angle > 202.5 && angle < 247.5){
      for(var i = 0; i < angleZone.length; i++){
        angleZone[i] = false;
      }
      angleZone[7] = true;
    }




    //uses the angle to determine which direction to face
    //============================================
    //============================================
    //left
    if(angle > 247.5 && angle < 292.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[0] = true;
    }
    //left up
    if(angle > 292.5 && angle < 337.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[1] = true;
    }
    //up
    if(angle > 337.5 && angle < 360 || angle > 0 && angle < 22.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[2] = true;
    }
    //right up
    if(angle > 22.5 && angle < 67.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[3] = true;
    }
    //right
    if(angle > 67.5 && angle < 112.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[4] = true;
    }
    //right down
    if(angle > 112.5 && angle < 157.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[5] = true;
    }
    //down
    if(angle > 157.5 && angle < 202.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[6] = true;
    }
    //left down
    if(angle > 202.5 && angle < 247.5){
      for(var i = 0; i < this.dir.length; i++){
        this.dir[i] = false;
      }
      this.dir[7] = true;
    }

    //If close enough, start to chase
    //===========================================
    //===========================================
    if(distance < 300 && distance >= 90 && !attack){
      this.moving = true;
      //left
      if(this.posX > posX){
        this.posX -= movementSpeed2;
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[0] = true;
      }

      //up
      if(this.posY > posY){
        this.posY -= movementSpeed2;
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[2] = true;
        // this.moving = true;
      }

      //right
      if(this.posX < posX){
        this.posX += movementSpeed2
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[4] = true;
        // this.moving = true;
      }

      //down
      if(this.posY < posY){
        this.posY += movementSpeed2
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[6] = true;
        // this.moving = true;
      }

      //left up
      if((this.posX > posX) && (this.posY > posY)){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[1] = true;
        // this.moving = true;
      }

      //right up
      if((this.posX < posX) && (this.posY > posY)){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[3] = true;
        // this.moving = true;
      }

      //right down
      if((this.posX < posX) && (this.posY < posY)){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[5] = true;
        // this.moving = true;
      }

      //left down
      if((this.posX > posX) && (this.posY < posY)){
        for(var i = 0; i < this.dir.length; i++){
          this.dir[i] = false
        }
        this.dir[7] = true;
        // this.moving = true;
      }
    }

    //sword attack
    //======================================
    //======================================
    if(distance <= 90){
      attack = true;
      this.moving = false;
      //left
      if((angle > 247.5 && angle < 292.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.left.bind(this),25);
      }
      //leftUp
      if((angle > 292.5 && angle < 337.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.leftUp.bind(this),25);
      }
      //up
      if((angle > 337.5 && angle < 360 || angle > 0 && angle < 22.5 || angle === 0) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.up.bind(this),25);
      }
      //right up
      if((angle > 22.5 && angle < 67.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.rightUp.bind(this),25);
      }

      //right
      if((angle > 67.5 && angle < 112.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.right.bind(this),25);
      }
      //right down
      if((angle > 112.5 && angle < 157.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.rightDown.bind(this),25);
      }
      //down
      if((angle > 157.5 && angle < 202.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.down.bind(this),25);
      }
      //left down
      if((angle > 202.5 && angle < 247.5) && this.sword.ready){
        this.sword.ready = false;
        this.sword.interval = setInterval(this.swordAttack.leftDown.bind(this),25);
      }
    }

  }; //end of chase();

  this.create = function(){
    this.feet.animate.call(this);
    this.bowAttack.shoot();
    this.override();
    this.controlDirection();
    this.controlMovementPlayer();
    this.collisionDetection();
    this.defend.all();
  }

}
