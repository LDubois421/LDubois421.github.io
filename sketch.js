// this is for your game/web toy
var croissantSprite;
var bricks;
function setup() {
    new Canvas(900,600);
    croissantSprite=new Sprite();
    croissantSprite.img = 'assets/croissantSprite.png';
    croissantSprite.scale=0.05;
    bricks = new Group();
	bricks.w = 70;
	bricks.h = 50;
	bricks.tile = '=';
    bricks.color = 'grey';
    bricks.collider='s';
	new Tiles(
		[
			'==============',
			'..............',
			'==============',
			'==============',
			'==============',
			'==============',
			'==============',
			'......========',
			'......========',
			'=============='
            
           
          
         
		],
		100,
		40,
		bricks.w + 4,
		bricks.h + 4
	);
}


function draw() {
  player_movement();
    background(0);
world.gravity.y= 5;
}


function player_movement(){


if (kb.pressing('left')) croissantSprite.vel.x = -5;
else if (kb.pressing('right')) croissantSprite.vel.x = 5;
else croissantSprite.vel.x = 0;

}



