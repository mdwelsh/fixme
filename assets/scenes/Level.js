
console.log("MDW: Loading Level.js");

var player;
var cursors;
var walls;


/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

  constructor() {
    super("Level");
  }

  create() {
    console.log("MDW: create called boogers");

    this.anims.create({
      key: 'platform',
      frames: this.anims.generateFrameNumbers('platform', {
        frames: [ 0, 1, 2, 3 ]
      }),
      frameRate: 8, repeat: -1 });

    walls = this.physics.add.group();
    walls.enableBody = true;

    var wall;
    wall = walls.create(0, 300-32, "floor");
    //wall.scaleX = 5;
    //wall.scaleY = 5;
    wall.body.immovable = true;
    wall.body.allowGravity = false;

    wall = walls.create(16, 300-32, "floor");
    //wall.scaleX = 5;
    //wall.scaleY = 5;
    wall.body.immovable = true;
    wall.body.allowGravity = false;

    wall = walls.create(32, 300-32, "floor");
    //wall.scaleX = 5;
    //wall.scaleY = 5;
    wall.body.immovable = true;
    wall.body.allowGravity = false;

    var platform;
    platform = walls.create(56, 300-32);
    platform.body.immovable = true;
    platform.body.allowGravity = false;
    platform.play('platform');

    platform = walls.create(56+32, 300-32);
    platform.body.immovable = true;
    platform.body.allowGravity = false;
    platform.play('platform');

    platform = walls.create(56+64, 300-32);
    platform.body.immovable = true;
    platform.body.allowGravity = false;
    platform.play('platform');

    platform = walls.create(56+96, 300-32);
    platform.body.immovable = true;
    platform.body.allowGravity = false;
    platform.play('platform');

    cursors = this.input.keyboard.createCursorKeys();

    // Add player
    player = this.physics.add.sprite(69, 100, 'character');
    //player.scaleX = 5;
    //player.scaleY = 5;
    player.setBounce(0.2); // our player will bounce from items
    player.setCollideWorldBounds(true); // don't go out of the map
  }

  update() {
    this.physics.collide(player, walls);

    if (cursors.left.isDown) {
      player.setVelocityX(-300);
    } else if (cursors.right.isDown) {
      player.setVelocityX(300);
    } else if (cursors.up.isDown && player.body.onFloor()) {
      player.setVelocityY(-500);
    } else {
      player.setVelocityX(0);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

