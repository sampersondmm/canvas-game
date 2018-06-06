function Enemy(x,y,type){
  this.dir = [false,true,false,false,false,false,false,false];
  this.movementSpeed = 1;
  this.movementSpeedFast = 5;
  this.move = [false,false,false,false];
  this.moveFast = [false,false,false,false];
  this.weapon = [true,false];
  this.chase = false;
  this.moving = false;
  this.attack = false;
  this.blocked = false;
  this.attackCollide = false;
  this.posX = x;
  this.posY = y;
  if(type === 'soldier'){
    this.body = {
        //============================
        //============================
        left: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x - 30,y, 3, 3,0,0,360,'red')
          drawCircle(x - 55,y, 3, 3,0,0,360,'red')
          drawCircle(x - 80,y, 3, 3,0,0,360,'red')
          // if(weapon[1]){
          //   quiver.left();
          // }
          // if(weapon[0]){
              //sheath
              drawShapeRotate(x,y-23,5,25,-50,'black');
              this.sword.draw(x-15,y-65);
          // }
          //torso
          soldierTorso.left(x,y-28);

          //head
          helmet.left(x,y-43);
          // if(weapon[1]){
          //   bow.left(x,y)
          // }
          //feet
          if(this.dir[0]) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x,y-15);
          }

          //shield
          // if(weapon[0] === true){
            shield.left(x + 14, y - 20);
          // }
        }.bind(this),
        //============================
        //============================
        leftUp: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x - 25 ,y - 25, 3, 3,0,0,360,'red')
          drawCircle(x - 45,y - 45, 3, 3,0,0,360,'red')
          drawCircle(x - 65,y - 65, 3, 3,0,0,360,'red')

          //quiver
          // if(weapon[1]){
          //   quiver.left();
          // }

          // if(weapon[0] === true){
            //sheath
            drawShapeRotate(x,y-23,5,25,-50,'black');
            this.sword.draw(x-11,y-67);
          // }

          //torso
          soldierTorso.leftUp(x,y-28);

          //head
          helmet.leftUp(x,y-43);
          // if(weapon[1] === true){
          //   bow.leftUp(x+5,y-10);
          // }

          //feet
          if(this.dir[1]) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }

          // shield
          // if(weapon[0] === true){
            // if(this.shield.count <= 2){
              shield.left(x + 10, y - 21);
            // }
            // if(this.shield.count >= 3){
              // shield.leftThin(x + 10, y - 21)
            // }
          // }
        }.bind(this),
        //============================
        //============================
        up: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x ,y - 50, 3, 3,0,0,360,'red')
          drawCircle(x ,y - 65, 3, 3,0,0,360,'red')
          drawCircle(x ,y - 90, 3, 3,0,0,360,'red')
          //shield
          // if(weapon[0] === true){
            shield.right(x-18,y-20)
          // }

          // if(weapon[0]){
            //sheath
            drawShapeRotate(x-8,y-23,5,20,-5,'black');
            // this.sword.left.draw(x,y-40);
            this.sword.draw(x+18,y-60);
          // }
          //head
          helmet.up(x,y-43);

          //torso
          soldierTorso.up(x,y-28);

          // if(weapon[1]){
          //   bow.left(x,y)
          // }
            //feet
            if(this.dir[2]) {
              this.feet.down.draw(x-4,y-15);
            } else {
              this.feet.right.draw(x,y-15);
            }

          // if(weapon[1]){
          //   quiver.left();
          // }

        }.bind(this),
        //============================
        //============================
        rightUp: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x + 25 ,y - 25, 3, 3,0,0,360,'red')
          drawCircle(x + 45,y - 45, 3, 3,0,0,360,'red')
          drawCircle(x + 65,y - 65, 3, 3,0,0,360,'red')

          // if(weapon[1] === true){
          //   quiver.right();
          // }
          // if(weapon[0] === true){
            //sheath
            drawShapeRotate(x-5,y-23,5,25,50,'black');
            shield.right(x+5,y-23)
          // }
          //torso
          soldierTorso.rightUp(x,y-28);

          //head
          helmet.rightUp(x,y-43);
          // if(weapon[1] === true){
          //   bow.rightUp(x+25,y-10);
          // }
          // if(weapon[0] === true){
            // this.sword.rightUp.draw(x + 20,y - 30);
            this.sword.draw(x-10,y-60);
          // }
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

          //shield
          // if(weapon[0] === true){
            // if(this.shield.count < 3){
              shield.right(x+10,y-23)
            // }
          // }

          // if(weapon[1]){
          //   quiver.left();
          // }
          //torso
          soldierTorso.right(x,y-28);

          //head
          helmet.right(x,y-43);
          // if(weapon[1]){
          //   bow.left(x,y)
          // }

          //feet
          if(this.dir[4]) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x,y-15);
          }

          // if(weapon[0]){
            //sheath
            drawShapeRotate(x-5,y-23,5,25,50,'black');
            // this.sword.left.draw(x,y-40);
            this.sword.draw(x-13,y-60);
            // if(this.shield.count >= 3){
            // shield.leftThin(x+10,y-23)
            // }
          // }
        }.bind(this),
        //============================
        //============================
        rightDown: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x + 20 ,y + 20, 3, 3,0,0,360,'red')
          drawCircle(x + 40,y + 40, 3, 3,0,0,360,'red')
          drawCircle(x + 60,y + 60, 3, 3,0,0,360,'red')

          // if(weapon[1] === true){
          //   quiver.down();
          // }
          //torso
          soldierTorso.rightDown(x,y-28);

          //head
          helmet.right(x,y-43);
          // if(weapon[1] === true){
          //   bow.rightDown(x+20,y+15);
          // }
          //feet
          if(this.dir[5]) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }
          //weapon
          // if(weapon[0] === true){
            shield.left(x+19,y-22)
            this.sword.draw(x-18,y-58);
          // }
        }.bind(this),
        //============================
        //============================
        down: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x ,y + 20, 3, 3,0,0,360,'red')
          drawCircle(x ,y + 45, 3, 3,0,0,360,'red')
          drawCircle(x ,y + 70, 3, 3,0,0,360,'red')
          // if(weapon[1]){
          //   quiver.left();
          // }

          //torso
          soldierTorso.down(x,y-28);

          //sheath
          drawShapeRotate(x+5,y-23,5,20,5,'black');

          //head
          helmet.down(x,y-43);
          // if(weapon[1]){
          //   bow.left(x,y)
          // }
            //feet
            if(this.dir[6]) {
              this.feet.down.draw(x-4,y-15);
            } else {
              this.feet.right.draw(x,y-15);
            }


          // if(weapon[0]){
            shield.left(x+22,y-18)
            this.sword.draw(x-20,y-60);
          // }
        }.bind(this),
        //============================
        //============================
        leftDown: function(x,y){
          drawCircle(x,y,15,10,0,0,360,'rgba(50,50,50,.5)',false);

          drawCircle(x - 20 ,y + 20, 3, 3,0,0,360,'red')
          drawCircle(x - 40,y + 40, 3, 3,0,0,360,'red')
          drawCircle(x - 60,y + 60, 3, 3,0,0,360,'red')

          // if(weapon[1] === true){
          //   quiver.down();
          // }
          //torso
          soldierTorso.leftDown(x,y-28);

          //head
          helmet.left(x,y-43);
          // if(weapon[1] === true){
          //   bow.leftDown(x+5,y+15);
          // }

          //feet
          if(this.dir[7]) {
            this.feet.right.draw(x,y-15);
          } else {
            this.feet.down.draw(x-4,y-15);
          }

          //weapon
          // if(weapon[0] === true){
            this.sword.draw(x-18,y-62);
            shield.left(x+18,y-18)
          // }
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
    count: 0,
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
      this.blocked = false;
      this.sword.ready = true;
      this.moving = true;
      this.sword.count = 0;
      this.sword.y = 0;
      this.sword.x = 0;
      this.sword.angle = 0;
      clearInterval(this.sword.interval)
    }.bind(this)
  }

  this.swordAttack = {
    left: function(){
      this.sword.ready = false;
      this.moving = false;
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
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[4])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[4]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }
      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle += 15;
        this.sword.x += 3;
        this.sword.y -= 1;
      }

      //recover
      if(this.sword.count > 25 && !this.blocked){
        this.sword.angle += 2.7;
        this.sword.x += .6;
        this.sword.y += .1;
      }

      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle += 2;
        this.sword.x += .6;
        this.sword.y += .5;
      }

      this.sword.count++;
      if(!this.dir[0] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    leftUp: function(){
      this.sword.ready = false;
      this.moving = false;
      //prepare
      if(this.sword.count <= 9){
        this.sword.y -= 4;
        this.sword.x += 1;
        this.sword.angle += 5;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 15;
        this.sword.x -= 4;
        this.sword.y += 3;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[5])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[5]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }
      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle += 15;
        this.sword.x += 3;
        this.sword.y -= 1;
      }
      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle += 1.6;
        this.sword.x += .5;
        this.sword.y += .5;
      }
      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle -= .7;
        this.sword.x += .6;
        this.sword.y += 1.8;
      }
      this.sword.count++;
      if(!this.dir[1] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    up: function(){
      this.sword.ready = false;
      this.moving = false;
      //prepare
      if(this.sword.count <= 9){
        this.sword.y += 1;
        this.sword.x += 1;
        this.sword.angle += 5;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 8;
        this.sword.x -= 4;
        this.sword.y -= 7;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[6])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[6]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }
      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle += 3;
        this.sword.x += 4;
        this.sword.y += 6;
      }

      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle += .2;
        this.sword.x += .5;
        this.sword.y += 1.1;
      }
      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle -= .6;
        this.sword.x += .2;
        this.sword.y += 1;
      }

      this.sword.count++;
      if(!this.dir[2] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    rightUp: function(){
      this.sword.ready = false;
      this.moving = false;
      //prepare
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.x -= 1;
        this.sword.angle -= 5;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle += 14;
        this.sword.x += 6;
        this.sword.y += 2;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[7])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[7]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }

      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle -= 15;
        this.sword.x -= 3;
        this.sword.y -= 1;
      }

      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle -= 1.4;
        this.sword.x -= .9;
        this.sword.y += .4;
      }

      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle += .7;
        this.sword.x -= 1.3;
        this.sword.y += 1.5;
      }

      this.sword.count++;
      if(!this.dir[3] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    right: function(){
      this.sword.ready = false;
      this.moving = false;
      //prepare
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.angle -= 4;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle += 19;
        this.sword.x += 6;
        this.sword.y += 4;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[0])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[0]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }

      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle -= 15;
        this.sword.x -= 3;
        this.sword.y -= 1;
      }

      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle -= 2.5;
        this.sword.x -= 1.2;
      }
      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle -= 2.3;
        this.sword.x -= 2;
        this.sword.y += .5;
      }

      this.sword.count++;
      if(!this.dir[4] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    rightDown: function(){
      this.sword.ready = false;
      this.moving = false;
      if(this.sword.count <= 9){
        this.sword.y -= 2;
        this.sword.angle -= 2;
      }
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle += 23.5;
        this.sword.x += 5.5;
        this.sword.y += 5.5;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[1])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[1]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }
      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle -= 22;
        this.sword.x -= 5;
        this.sword.y -= 2;
      }

      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle -= 4.2;
        this.sword.x -= 1.1;
        this.sword.y -= .55;
      }
      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle -= 3.7;
        this.sword.x -= 1.3;
        this.sword.y -= .5;
      }

      this.sword.count++;
      if(!this.dir[5] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    down: function(){
      this.sword.ready = false;
      this.moving = false;

      //prepare
      if(this.sword.count <= 9){
        this.sword.y -= 3;
        this.sword.angle += 3;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 30;
        this.sword.x += 1.5;
        this.sword.y += 8;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[2])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[2]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }

      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle += 15;
        this.sword.x -= 3;
        this.sword.y -= 3;
      }

      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle += 5.2;
        this.sword.x -= .3;
        this.sword.y -= .7;
      }
      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle += 8.5;
        this.sword.x -= 0;
        this.sword.y -= .8;
      }

      this.sword.count++;
      if(!this.dir[6] || this.sword.count > 60){
        this.sword.reset();
      }
    },
    leftDown: function(){
      this.sword.ready = false;
      this.moving = false;

      //prepare
      if(this.sword.count <= 9){
        this.sword.y -= 2;
        this.sword.angle += 2;
      }
      //swing
      if(this.sword.count >= 9 && this.sword.count <= 15){
        this.sword.angle -= 23.5;
        this.sword.x -= 2.8;
        this.sword.y += 5.5;
        //attack collision detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && !(defend && player.dir[3])){
          this.attackCollide = true;
        }
        //block detection
        if(this.sword.count >= 14 && this.sword.count <= 15 && defend && player.dir[3]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.sword.count > 16){
        this.attackCollide = false;
      }
      //bounce off shield when blocked
      if(this.sword.count > 16 && this.sword.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.sword.angle += 22;
        this.sword.x += 3;
        this.sword.y -= 2;
      }

      //recover
      if(25 <= this.sword.count && !this.blocked){
        this.sword.angle += 4;
        this.sword.x += .5;
        this.sword.y -= .45;
      }
      //recover with block
      if(this.sword.count > 45 && this.blocked){
        this.sword.angle += 4;
        this.sword.x += .6;
        this.sword.y -= .7;
      }

      this.sword.count++;
      if(!this.dir[7] || this.sword.count > 60){
        this.sword.reset();
      }
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
      this.spear.ready = true;
      this.moving = false;
      this.blocked = false;
      this.spear.count = 0;
      this.spear.y = 0;
      this.spear.x = 0;
      this.spear.angle = 0;
      clearInterval(this.spear.interval)
    }.bind(this)
  }

  this.spearAttack = {
    left: function(){
      this.spear.ready = false;
      this.moving = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x += 1;
        this.spear.angle -= 2.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x -= 9;
        //attack collision detection
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[4])){
          this.attackCollide = true;
        }
        //block detection
        if(this.spear.count >= 14 && this.spear.count <= 15 && defend && player.dir[4]){
          this.blocked = true;
        }
      }
      //end attack collision
      if(this.spear.count > 16){
        this.attackCollide = false;
      }

      //bounce off shield when blocked
      if(this.spear.count > 16 && this.spear.count <= 20 && this.blocked){
        this.attackCollide = false;
        this.spear.angle += 10;
        this.spear.x += 6;
      }

      //recover
      if(25 <= this.spear.count && !this.blocked){
        this.spear.angle += .7;
        this.spear.x += 1.5;
      }

      //recover with block
      if(this.spear.count > 45 && this.blocked){
        this.spear.angle -= 1;
        this.spear.x += 2;
      }

      //complete
      this.spear.count++;
      if(!this.dir[0] || this.spear.count > 60){
        this.spear.reset();
      }
    },
    leftUp: function(){
      this.spear.ready = false;
      this.moving = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x += 1;
        this.spear.y += 1;
        this.spear.angle -= 1.5;
      }

      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x -= 7;
        this.spear.y -= 7;
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[5])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
      }

      //recover
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
      this.moving = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.y += 1;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.y -= 9;
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[6])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
      }

      //recover
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
      this.moving = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x -= 1;
        this.spear.y += 1;
        this.spear.angle += 1.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x += 7;
        this.spear.y -= 7;
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[7])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
      }

      //recover
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
      this.moving = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.x -= 1;
        this.spear.angle += 2.5;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.x += 9;
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[0])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
      }

      //recover
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
      this.moving = false;
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
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[1])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
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
      this.moving = false;
      //prepare
      if(this.spear.count <= 9){
        this.spear.y -= 1;
      }
      //stab
      if(this.spear.count >= 9 && this.spear.count <= 15){
        this.spear.y += 10;
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[2])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
      }

      //recover
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
      this.moving = false;
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
        if(this.spear.count >= 14 && this.spear.count <= 15 && !(defend && player.dir[3])){
          this.attackCollide = true;
        }
      }
      if(this.spear.count > 16){
        this.attackCollide = false;
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
        arrow.left(this.x-10, this.y)
      }
      this.createLeftUp = function(){
        arrow.leftUp(this.x-7, this.y-12)
      }
      this.createUp = function(){
        arrow.up(this.x+15,this.y-25)
      }
      this.createRightUp = function(){
        arrow.rightUp(this.x + 32, this.y - 7)
      }
      this.createRight = function(){
        arrow.right(this.x + 42, this.y)
      }
      this.createRightDown = function(){
        arrow.rightDown(this.x + 38, this.y+19)
      }
      this.createDown = function(){
        arrow.down(this.x+8,this.y+30);
      }
      this.createLeftDown = function(){
        arrow.leftDown(this.x-5,this.y+19);
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
    animateDemon: function(){
      if(this.moving && this.sword.ready && this.spear.ready){
        //horizontal run animation
        if(
          //for slow movement
          (
            (this.move[0] || this.move[2]) ||
            (this.move[0] && this.move[1]) ||
            (this.move[0] && this.move[3]) ||
            (this.move[2] && this.move[1]) ||
            (this.move[2] && this.move[3]) ||
            (this.dir[0] && this.move[1]) ||
            (this.dir[0] && this.move[3]) ||
            (this.dir[4] && this.move[1]) ||
            (this.dir[4] && this.move[3])
          ) ||
          //for fast movement
          (
            (this.moveFast[0] || this.moveFast[2]) ||
            (this.moveFast[0] && this.moveFast[1]) ||
            (this.moveFast[0] && this.moveFast[3]) ||
            (this.moveFast[2] && this.moveFast[1]) ||
            (this.moveFast[2] && this.moveFast[3]) ||
            (this.dir[0] && this.moveFast[1]) ||
            (this.dir[0] && this.moveFast[3]) ||
            (this.dir[4] && this.moveFast[1]) ||
            (this.dir[4] && this.moveFast[3])
          )

        ){
          this.feet.right.move();
        } else {
          this.feet.right.stop();
        }

        //for vertical animation
        if(
          //for slow movement
          (
            (this.move[1] && !this.move[0] && !this.move[2]) ||
            (this.move[3] && !this.move[0] && !this.move[2]) ||
            (this.dir[6] && this.move[2]) ||
            (this.dir[6] && this.move[0]) ||
            (this.dir[2] && this.move[0]) ||
            (this.dir[2] && this.move[2])
          ) ||
          //for fast movement
          (
            (this.moveFast[1] && !this.moveFast[0] && !this.moveFast[2]) ||
            (this.moveFast[3] && !this.moveFast[0] && !this.moveFast[2]) ||
            (this.dir[6] && this.moveFast[2]) ||
            (this.dir[6] && this.moveFast[0]) ||
            (this.dir[2] && this.moveFast[0]) ||
            (this.dir[2] && this.moveFast[2])
          )
        ){
          this.feet.down.move()
        } else {
          this.feet.down.stop();
        }

      }
      else {
        this.feet.right.stop();
        this.feet.down.stop()
      }
    }
  }

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

  this.chaseAndAttack = function(){
    var distance = Math.floor(Math.sqrt(Math.pow(Math.abs(this.posX - player.posX), 2) + Math.pow(Math.abs(this.posY - player.posY), 2)))

    var angleZone = [false,false,false,false,false,false,false,false];
    var angle;

    var angleToPlayer = function(){

        //left
        if(this.posX >= player.posX && this.posY === player.posY){
          angle = 270;
        }
        //left up
        if(this.posX >= player.posX && this.posY > player.posY){
          angle = 360 - Math.asin(Math.abs(this.posX - player.posX) / distance)*(180/Math.PI);
          // angleM = 360 - Math.asin(Math.abs((this.posX-15) - posX) / distance)*(180/Math.PI);
          // angleP = 360 - Math.asin(Math.abs((this.posX+15) - posX) / distance)*(180/Math.PI);
        }
        //up
        if(this.posX === player.posX && this.posY >= player.posY){
          angle = 0;
        }
        //right up
        if(this.posX <= player.posX && this.posY > player.posY){
          angle = Math.asin(Math.abs(this.posX - player.posX) / distance)*(180/Math.PI);
        }
        //right
        if(this.posX <= player.posX && this.posY === player.posY){
          angle = 90;
        }
        //right down
        if(this.posX <= player.posX && this.posY < player.posY){
          angle = 180 - Math.asin(Math.abs(this.posX - player.posX) / distance)*(180/Math.PI);
        }
        //down
        if(this.posX === player.posX && this.posY <= player.posY){
          angle = 180
        }
        //left down
        if(this.posX >= player.posX && this.posY < player.posY){
          angle = 180 + Math.asin(Math.abs(this.posX - player.posX) / distance)*(180/Math.PI);
        }
    }

    var setAngleZone = function(){
        //detemines the angleZone, needs angle
        //=========================================
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
        if(angle > 337.5 && angle < 360 || angle > 0 && angle < 22.5 || angle === 0){
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
    }

    var chase = function(){
      if(type === 'soldier'){
        var soldierBack = 65;
        if(distance < 200 && distance >= 85){
          this.chase = true;
        }
        if(distance < 85) {
          this.chase = false;
        }
        if(this.chase){
          this.moving = true;
          //left
          if(this.posX > player.posX && this.posY === player.posY){
            this.move[0] = true;
            this.move[1] = false;
            this.move[2] = false;
            this.move[3] = false;
          }
          //left up
          if(this.posX > player.posX && this.posY > player.posY){
            this.move[0] = true;
            this.move[1] = true;
            this.move[2] = false;
            this.move[3] = false;
          }
          //up
          if(this.posY > player.posY && this.posX === player.posX){
            this.move[0] = false;
            this.move[1] = true;
            this.move[2] = false;
            this.move[3] = false;
          }
          // right up
          if(this.posX < player.posX && this.posY > player.posY){
            this.move[0] = false;
            this.move[1] = true;
            this.move[2] = true;
            this.move[3] = false;
          }
          //right
          if(this.posX < player.posX && this.posY === player.posY){
            this.move[0] = false;
            this.move[1] = false;
            this.move[2] = true;
            this.move[3] = false;
          }
          //right down
          if(this.posX < player.posX && this.posY < player.posY){
            this.move[0] = false;
            this.move[1] = false;
            this.move[2] = true;
            this.move[3] = true;
          }
          //down
          if(this.posY < player.posY && this.posX === player.posX){
            this.move[0] = false;
            this.move[1] = false;
            this.move[2] = false;
            this.move[3] = true;
          }
          //down left
          if(this.posX > player.posX && this.posY < player.posY){
            this.move[0] = true;
            this.move[1] = false;
            this.move[2] = false;
            this.move[3] = true;
          }
        }
        //back up when too close
        //===================================
        //left
        else if(distance < soldierBack && this.dir[0]){
          this.moveFast[2] = true;
        }
        //left up
        else if(distance < soldierBack && this.dir[1]){
          this.moveFast[2] = true;
          this.moveFast[3] = true;
        }
        //up
        else if(distance < soldierBack && this.dir[2]){
          this.moveFast[3] = true;
        }
        //right up
        else if(distance < soldierBack && this.dir[3]){
          this.moveFast[0] = true;
          this.moveFast[3] = true;
        }
        //right
        else if(distance < soldierBack && this.dir[4]){
          this.moveFast[0] = true;
        }
        //right down
        else if(distance < soldierBack && this.dir[5]){
          this.moveFast[0] = true;
          this.moveFast[1] = true;
        }
        //down
        else if(distance < soldierBack && this.dir[6]){
          this.moveFast[1] = true;
        }
        //left down
        else if(distance < soldierBack && this.dir[7]){
          this.moveFast[2] = true;
          this.moveFast[1] = true;
        }
        else {
          this.moving = false;
          this.move[0] = false;
          this.move[1] = false;
          this.move[2] = false;
          this.move[3] = false;

          this.moveFast[0] = false;
          this.moveFast[1] = false;
          this.moveFast[2] = false;
          this.moveFast[3] = false;
        }
      }

      if(type === 'demon'){
        // console.log(this.strikeZone)
        //strike zone left
        // if(this.posX > player.posX && this.posY < player.posY + 15 && this.posY > this.posY - 15 && distance <= 116){
        //   this.strikeZone = true;
        // } else if(this.posY < player.posY + 15){
        //   this.strikeZone = false;
        //   this.move[0] = false;
        //   this.move[1] = true;
        //   this.move[2] = false;
        //   this.move[3] = false;
        // }
        //=============================
        //=============================
        if(distance < 200 && distance >= 115){
          this.chase = true;
        }
        if(this.chase){
          this.moving = true;
          //left
          if(this.posX > player.posX && this.posY === player.posY){
            this.move[0] = true;
            this.move[1] = false;
            this.move[2] = false;
            this.move[3] = false;
          }
          //left up
          if(this.posX > player.posX && this.posY > player.posY){
            this.move[0] = true;
            this.move[1] = true;
            this.move[2] = false;
            this.move[3] = false;
          }
          //up
          if(this.posY > player.posY && this.posX === player.posX){
            this.move[0] = false;
            this.move[1] = true;
            this.move[2] = false;
            this.move[3] = false;
          }
          // right up
          if(this.posX < player.posX && this.posY > player.posY){
            this.move[0] = false;
            this.move[1] = true;
            this.move[2] = true;
            this.move[3] = false;
          }
          //right
          if(this.posX < player.posX && this.posY === player.posY){
            this.move[0] = false;
            this.move[1] = false;
            this.move[2] = true;
            this.move[3] = false;
          }
          //right down
          if(this.posX < player.posX && this.posY < player.posY){
            this.move[0] = false;
            this.move[1] = false;
            this.move[2] = true;
            this.move[3] = true;
          }
          //down
          if(this.posY < player.posY && this.posX === player.posX){
            this.move[0] = false;
            this.move[1] = false;
            this.move[2] = false;
            this.move[3] = true;
          }
          //down left
          if(this.posX > player.posX && this.posY < player.posY){
            this.move[0] = true;
            this.move[1] = false;
            this.move[2] = false;
            this.move[3] = true;
          }
        }
        //back up when too close
        //===================================
        //left
        else if(distance < 65 && this.dir[0]){
          this.move[0] = false;
          this.move[1] = false;
          this.move[2] = true;
          this.move[3] = false;
        }
        //left up
        else if(distance < 65 && this.dir[1]){
          this.move[0] = false;
          this.move[1] = false;
          this.move[2] = true;
          this.move[3] = true;
        }
        //up
        else if(distance < 65 && this.dir[2]){
          this.move[0] = false;
          this.move[1] = false;
          this.move[2] = false;
          this.move[3] = true;
        }
        //right up
        else if(distance < 65 && this.dir[3]){
          this.move[0] = true;
          this.move[1] = false;
          this.move[2] = false;
          this.move[3] = true;
        }
        //right
        else if(distance < 65 && this.dir[4]){
          this.move[0] = true;
          this.move[1] = false;
          this.move[2] = false;
          this.move[3] = false;
        }
        //right down
        else if(distance < 65 && this.dir[5]){
          this.move[0] = true;
          this.move[1] = true;
          this.move[2] = false;
          this.move[3] = false;
        }
        //down
        else if(distance < 65 && this.dir[6]){
          this.move[0] = false;
          this.move[1] = true;
          this.move[2] = false;
          this.move[3] = false;
        }
        //left down
        else if(distance < 65 && this.dir[7]){
          this.move[0] = false;
          this.move[1] = true;
          this.move[2] = true;
          this.move[3] = false;
        }
        else {
          this.moving = false;
          this.move[0] = false;
          this.move[1] = false;
          this.move[2] = false;
          this.move[3] = false;
        }
      }
    }

    var changeDirByAngle = function(){
      //Changes direction display by angle, needs angle
      //=========================================
      if(type === 'soldier'){
        for(var i = 0; i < angleZone.length; i++){
          if(angleZone[i] && this.sword.ready){
            for(var j = 0; j < this.dir.length; j++){
              this.dir[j] = false;
            }
            this.dir[i] = true;
          }
        }
      }
      if(type === 'demon'){
        for(var i = 0; i < angleZone.length; i++){
          if(angleZone[i] && this.spear.ready){
            for(var j = 0; j < this.dir.length; j++){
              this.dir[j] = false;
            }
            this.dir[i] = true;
          }
        }
      }
    }

    var collisionZone = function(){
      if(type === 'soldier'){
        var strikeDistanceLength = 86
        var strikeDistanceWidth = 30
        var strikeAngleWidth = 22
      }
      if(type === 'demon'){
        var strikeDistanceLength = 116;
        var strikeDistanceWidth = 15
        var strikeAngleWidth = 15
      }
      //left
      if(this.dir[0]){
        if(player.posX > this.posX - strikeDistanceLength && player.posX < this.posX - 40 && player.posY > this.posY - strikeDistanceWidth && player.posY < this.posY + strikeDistanceWidth && this.attackCollide){
          player.collision[0] = true;
        }
      }
      //left up
      if(this.dir[1]){
        if(angle > 315 - strikeAngleWidth && angle < 315 + strikeAngleWidth && distance > 40 && distance < strikeDistanceLength && this.attackCollide){
          player.collision[1] = true;
        }
      }
      //up
      if(this.dir[2]){
        if(player.posX > this.posX - strikeDistanceWidth && player.posX < this.posX + strikeDistanceWidth && player.posY > this.posY - strikeDistanceLength && player.posY < this.posY - 40 && this.attackCollide){
          player.collision[2] = true;
        }
      }
      //right up
      if(this.dir[3]){
        if(angle > 45 - strikeAngleWidth && angle < 67 + strikeAngleWidth && distance > 40 && distance < strikeDistanceLength && this.attackCollide){
          player.collision[3] = true;
        }
      }
      //right
      if(this.dir[4]){
        if(player.posX > this.posX + 40 && player.posX < this.posX + strikeDistanceLength && player.posY > this.posY - strikeDistanceWidth && player.posY < this.posY + strikeDistanceWidth && this.attackCollide){
          player.collision[4] = true;
        }
      }
      //right down
      if(this.dir[5]){
        if(angle > 135 - strikeAngleWidth && angle < 135 + strikeAngleWidth && distance > 40 && distance < strikeDistanceLength && this.attackCollide){
          player.collision[5] = true;
        }
      }
      //down
      if(this.dir[6]){
        if(player.posX > this.posX - strikeDistanceWidth && player.posX < this.posX + strikeDistanceWidth && player.posY > this.posY + 40 && player.posY < this.posY + strikeDistanceLength && this.attackCollide){
          player.collision[6] = true;
        }
      }
      //left down
      if(this.dir[7]){
        if(angle > 225 - strikeAngleWidth && angle < 225 + strikeAngleWidth && distance > 40 && distance < strikeDistanceLength && this.attackCollide){
          player.collision[7] = true;
        }
      }
    }

    var swordAttack = function(){
      if(distance <= 85  && distance >= 64 && type === 'soldier'){
        this.moving = false;
        //left
        if(angleZone[0] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.left.bind(this),25);
        }
        //leftUp
        if(angleZone[1] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.leftUp.bind(this),25);
        }
        //up
        if(angleZone[2] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.up.bind(this),25);
        }
        //right up
        if(angleZone[3] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.rightUp.bind(this),25);
        }

        //right
        if(angleZone[4] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.right.bind(this),25);
        }
        //right down
        if(angleZone[5] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.rightDown.bind(this),25);
        }
        //down
        if(angleZone[6] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.down.bind(this),25);
        }
        //left down
        if(angleZone[7] && this.sword.ready){
          this.sword.ready = false;
          this.sword.interval = setInterval(this.swordAttack.leftDown.bind(this),25);
        }
      }
    }

    var spearAttack = function(){
      if(distance <= 115 && type === 'demon'){
        this.attack = true;
        this.moving = false;
        //left
        if(this.dir[0] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.left.bind(this),25);
        }
        //leftUp
        if(angleZone[1] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.leftUp.bind(this),25);
        }
        //up
        if(angleZone[2] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.up.bind(this),25);
        }
        //right up
        if(angleZone[3] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.rightUp.bind(this),25);
        }

        //right
        if(angleZone[4] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.right.bind(this),25);
        }
        //right down
        if(angleZone[5] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.rightDown.bind(this),25);
        }
        //down
        if(angleZone[6] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.down.bind(this),25);
        }
        //left down
        if(angleZone[7] && this.spear.ready){
          this.spear.ready = false;
          this.spear.interval = setInterval(this.spearAttack.leftDown.bind(this),25);
        }
      }
    }

    angleToPlayer.call(this);
    setAngleZone.call(this);
    changeDirByAngle.call(this);
    chase.call(this);
    swordAttack.call(this);
    spearAttack.call(this);
    collisionZone.call(this);
  }; //end of chase();

  this.avoidCollision = function(){
    //checks to see if this instance is
    //block enemy2 from the top
      function createPerim(enemy, otherEnemy){
        if(enemy === this){
          //prevent left
          for(var i = 0; i < otherEnemy.length; i++){
            if( (otherEnemy[i].posX < this.posX + 50) && (otherEnemy[i].posX > this.posX) &&
                (otherEnemy[i].posY > this.posY - 25) && (otherEnemy[i].posY < this.posY + 25) ){
              otherEnemy[i].move[0] = false;
            }
          }
          //prevent up
          for(var i = 0; i < otherEnemy.length; i++){
            if( (otherEnemy[i].posY < this.posY + 50) && (otherEnemy[i].posY > this.posY) && (otherEnemy[i].posX > this.posX - 25) && (otherEnemy[i].posX < this.posX + 25) ){
              otherEnemy[i].move[1] = false;
            }
          }
          //prevent right
          for(var i = 0; i < otherEnemy.length; i++){
            if( (otherEnemy[i].posX > this.posX - 50) && (otherEnemy[i].posX < this.posX) &&
                (otherEnemy[i].posY > this.posY - 25) && (otherEnemy[i].posY < this.posY + 25)){
              otherEnemy[i].move[2] = false;
            }
          }
          //prevent down
          for(var i = 0; i < otherEnemy.length; i++){
            if( (otherEnemy[i].posY > this.posY - 50) && (otherEnemy[i].posY < this.posY) &&
                (otherEnemy[i].posX > this.posX - 25) && (otherEnemy[i].posX < this.posX + 25) ){
              otherEnemy[i].move[3] = false;
            }
          }
        }
      }
      createPerim.call(this, enemy1, [player,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy2, [player,enemy1,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy3, [player,enemy1,enemy2,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy4, [player,enemy1,enemy2,enemy3,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy5, [player,enemy1,enemy2,enemy3,enemy4,enemy6,enemy7,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy6, [player,enemy1,enemy2,enemy3,enemy4,enemy5,enemy7,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy7, [player,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy8,enemy9,enemy10]);
      createPerim.call(this, enemy8, [player,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy9,enemy10]);
      createPerim.call(this, enemy9, [player,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy10]);
      createPerim.call(this, enemy10, [player,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9]);

  }

  this.controlMovement = function(){
    if(!this.moving){
      this.move[0] = false;
      this.move[1] = false;
      this.move[2] = false;
      this.move[3] = false;

      this.moveFast[0] = false;
      this.moveFast[1] = false;
      this.moveFast[2] = false;
      this.moveFast[3] = false;
    }
    //left
    if(this.move[0]){this.posX -= this.movementSpeed}
    //up
    if(this.move[1]){this.posY -= this.movementSpeed}
    //right
    if(this.move[2]){this.posX += this.movementSpeed}
    //down
    if(this.move[3]){this.posY += this.movementSpeed}

    //left
    if(this.moveFast[0]){this.posX -= this.movementSpeedFast}
    //up
    if(this.moveFast[1]){this.posY -= this.movementSpeedFast}
    //right
    if(this.moveFast[2]){this.posX += this.movementSpeedFast}
    //down
    if(this.moveFast[3]){this.posY += this.movementSpeedFast}
  }

  this.create = function(){
    this.feet.animateDemon.call(this);
    this.avoidCollision();
    this.avoidCollision();
    this.controlMovement();
    this.chaseAndAttack();
    this.controlDirection();
  }


}
