var directionOverride = false;
var override = [false,false,false,false];
var directionOverride = false;
var weapon = [true,false];
var collide = [false,false,false,false];
var defend = false;

// $(document).keydown(function(e){
//   e.preventDefault();
// })

$(document).keydown(function(e){
  var key = e.keyCode;

  if(key == 65){player.move[0] = true;}
  if(key == 87){player.move[1] = true;}
  if(key == 68){player.move[2] = true;}
  if(key == 83){player.move[3] = true;}

//Direction override keys
  //left
  if(key == 74){override[0] = true;directionOverride = true}
  //up
  if(key == 73){override[1] = true;directionOverride = true}
  //right
  if(key == 76){override[2] = true;directionOverride = true}
  //down
  if(key == 75){override[3] = true;directionOverride = true}

//=================Attack====
  if(key == 32){
    //if sword is out, swing sword
    //right
    if(weapon[0]){
      //left
      if(player.dir[0] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.left.bind(player),25);
      }
      //left up
      if(player.dir[1] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.leftUp.bind(player),25);
      }
      //up
      if(player.dir[2] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.up.bind(player),25);
      }
      //right up
      if(player.dir[3] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.rightUp.bind(player),25);
      }
      //right
      if(player.dir[4] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.right.bind(player),25);
      }
      //right down
      if(player.dir[5] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.rightDown.bind(player),25);
      }
      //down
      if(player.dir[6] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.down.bind(player),25);
      }
      //left down
      if(player.dir[7] && player.sword.ready && !defend){
        player.sword.ready = false;
        player.sword.interval = setInterval(player.swordAttack.leftDown.bind(player),25);
      }
    }
    //if bow is out, shoot arrow
    if(weapon[1]){player.bowAttack.createArrow()}
  }
//============================



//==================Defend====
  if(key === 70){
    if(weapon[0] && player.sword.ready){
      defend = true;
    }
  }

  //switch between sword/bow
  if(key == 49){weapon[0]=true;weapon[1]=false}
  if(key == 50){weapon[1]=true;weapon[0]=false}
});

$(document).keyup(function(e){
  var key = e.keyCode;
  if(key == 65){player.move[0] = false}
  if(key == 87){player.move[1] = false}
  if(key == 68){player.move[2] = false}
  if(key == 83){player.move[3] = false}

  //Direction override keys
  if(key == 74){override[0] = false}
  if(key == 73){override[1] = false}
  if(key == 76){override[2] = false}
  if(key == 75){override[3] = false}

  //Turn off direction ovverride only when none of the keys are pressed
  if(!override[0] && !override[1] && !override[2] && !override[3]){
    directionOverride = false;
  }


  if(key === 70){
    if(weapon[0]){
      defend = false;
    }
  }
})
