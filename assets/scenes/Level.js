
console.log("MDW: Loading Level.js");

var player;
var cursors;
var ground_1;
var ground_1_1;
var ground_1_2;
var ground_1_1_1;

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate() {

    // ground_1
    ground_1 = this.physics.add.sprite(25, 538, "Ground-1");
    ground_1.scaleX = 5;
    ground_1.scaleY = 5;
    ground_1.body.immovable = true;
    ground_1.body.allowGravity = false;

    // ground_1_1
    ground_1_1 = this.physics.add.sprite(62, 538, "Ground-1");
    ground_1_1.scaleX = 5;
    ground_1_1.scaleY = 5;
    ground_1_1.body.immovable = true;
    ground_1_1.body.allowGravity = false;

    // ground_1_2
    ground_1_2 = this.physics.add.sprite(101, 538, "Ground-1");
    ground_1_2.scaleX = 5;
    ground_1_2.scaleY = 5;
    ground_1_2.body.immovable = true;
    ground_1_2.body.allowGravity = false;

    // ground_1_1_1
    ground_1_1_1 = this.physics.add.sprite(138, 538, "Ground-1");
    ground_1_1_1.scaleX = 5;
    ground_1_1_1.scaleY = 5;
    ground_1_1_1.body.immovable = true;
    ground_1_1_1.body.allowGravity = false;
  }

  /* START-USER-CODE */

  // Write more your code here

  create() {
    console.log("MDW: create called boogers");

    // The following is created by the Phaser editor.
    this.editorCreate();

    cursors = this.input.keyboard.createCursorKeys();

    // Add player
    player = this.physics.add.sprite(69, 100, 'character-1');
    player.scaleX = 5;
    player.scaleY = 5;
    player.setBounce(0.2); // our player will bounce from items
    player.setCollideWorldBounds(true); // don't go out of the map



  }

  update() {
    //player.setVelocityX(100);
    this.physics.collide(player, ground_1);
    this.physics.collide(player, ground_1_1);
    this.physics.collide(player, ground_1_2);
    this.physics.collide(player, ground_1_1_1);

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

