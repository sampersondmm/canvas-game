var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var currentMap = world.map2;

// var ranX = Math.floor(Math.random() * 640);
// var ranY = Math.floor(Math.random() * 640);

var enemy1 = new Enemy(400,200,'demon');
var enemy2 = new Enemy(450,200,'demon');
var enemy3 = new Enemy(400,300,'demon');
var enemy4 = new Enemy(450,300,'demon');
var enemy5 = new Enemy(500,300,'soldier');
var enemy6 = new Enemy(250,350,'soldier');
var enemy7 = new Enemy(300,350,'soldier');
var enemy8 = new Enemy(350,350,'soldier');
var enemy9 = new Enemy(400,350,'soldier');
var enemy10 = new Enemy(450,350,'soldier');

// var allCharacters = [enemy1.create(),enemy2.create(),enemy3.create(),enemy4.create(),enemy5.create(),enemy6.create(),enemy7.create(),enemy8.create(),enemy9.create(),enemy10.create(),player.create()]


var player = new Soldier(200,200,'soldier');

var img = new Image()
img.onload = function () {
     context.drawImage(img,200,170,400,400,100,100,100,100)
}
img.src="images/soldier_official/soldierOR.png"


setInterval(function(){
  collide = [false,false,false,false];


  world.drawMap();

  // if(player.posY > enemy1.posY){
  //   enemy1.create();
  //   player.create();
  // } else {
  //   player.create();
  //   enemy1.create();
  // }
  player.create();
  console.log(enemy1.blocked)

  enemy1.create();
  // enemy2.create();
  // enemy3.create();
  // enemy4.create();
  // enemy5.create();
  // enemy6.create();
  // enemy7.create();
  // enemy8.create();
  // enemy9.create();
  // enemy10.create();

  // drawShape(player.posX-12.5,player.posY-12.5,25,25,'white');
  // drawShape(enemy1.posX-2.5,enemy1.posY-2.5,5,5,'white');


},25)//END OF GAME LOOP
