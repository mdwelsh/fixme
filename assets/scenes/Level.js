
console.log("MDW: Loading Level.js");

var player;
var cursors;
var walls;
var keyA;
var keyS;
var keyD;
var keyW;

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

  constructor() {
    super("Level");
  }

  create() {
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
    wall.body.immovable = true;
    wall.body.allowGravity = false;

    wall = walls.create(16, 300-32, "floor");
    wall.body.immovable = true;
    wall.body.allowGravity = false;

    wall = walls.create(32, 300-32, "floor");
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

    //cursors = this.input.keyboard.createCursorKeys();
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    // Add player
    player = this.physics.add.sprite(69, 100, 'character');
    player.setBounce(0.2); // our player will bounce from items
    player.setCollideWorldBounds(true); // don't go out of the map

    this.cameras.main.setBounds(0, 0, 400, 300);
    this.cameras.main.startFollow(player);
    this.cameras.main.setBackgroundColor('#ccccff');
  }

  update() {
    this.physics.collide(player, walls);

    if (keyA.isDown) {
      player.setVelocityX(-30);
      player.tint = Math.random() * 0xffffff;
    } else if (keyD.isDown) {
      player.setVelocityX(30);
    } else if (keyW.isDown && player.body.onFloor()) {
      player.setVelocityY(-50);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

