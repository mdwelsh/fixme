
var player;

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
    const ground_1 = this.add.image(25, 538, "Ground-1");
    ground_1.scaleX = 5;
    ground_1.scaleY = 5;

    // ground_1_1
    const ground_1_1 = this.add.image(62, 538, "Ground-1");
    ground_1_1.scaleX = 5;
    ground_1_1.scaleY = 5;

    // ground_1_2
    const ground_1_2 = this.add.image(101, 538, "Ground-1");
    ground_1_2.scaleX = 5;
    ground_1_2.scaleY = 5;

    // ground_1_1_1
    const ground_1_1_1 = this.add.image(138, 538, "Ground-1");
    ground_1_1_1.scaleX = 5;
    ground_1_1_1.scaleY = 5;

    // ground_1_3
    const ground_1_3 = this.add.image(177, 538, "Ground-1");
    ground_1_3.scaleX = 5;
    ground_1_3.scaleY = 5;

    // ground_1_1_2
    const ground_1_1_2 = this.add.image(214, 538, "Ground-1");
    ground_1_1_2.scaleX = 5;
    ground_1_1_2.scaleY = 5;

    // ground_1_2_1
    const ground_1_2_1 = this.add.image(253, 538, "Ground-1");
    ground_1_2_1.scaleX = 5;
    ground_1_2_1.scaleY = 5;

    // ground_1_1_1_1
    const ground_1_1_1_1 = this.add.image(290, 538, "Ground-1");
    ground_1_1_1_1.scaleX = 5;
    ground_1_1_1_1.scaleY = 5;

    // ground_1_4
    const ground_1_4 = this.add.image(326, 538, "Ground-1");
    ground_1_4.scaleX = 5;
    ground_1_4.scaleY = 5;

    // ground_1_1_3
    const ground_1_1_3 = this.add.image(363, 538, "Ground-1");
    ground_1_1_3.scaleX = 5;
    ground_1_1_3.scaleY = 5;

    // ground_1_2_2
    const ground_1_2_2 = this.add.image(402, 538, "Ground-1");
    ground_1_2_2.scaleX = 5;
    ground_1_2_2.scaleY = 5;

    // ground_1_1_1_2
    const ground_1_1_1_2 = this.add.image(439, 538, "Ground-1");
    ground_1_1_1_2.scaleX = 5;
    ground_1_1_1_2.scaleY = 5;

    // ground_1_3_1
    const ground_1_3_1 = this.add.image(478, 538, "Ground-1");
    ground_1_3_1.scaleX = 5;
    ground_1_3_1.scaleY = 5;

    // ground_1_1_2_1
    const ground_1_1_2_1 = this.add.image(515, 538, "Ground-1");
    ground_1_1_2_1.scaleX = 5;
    ground_1_1_2_1.scaleY = 5;

    // ground_1_2_1_1
    const ground_1_2_1_1 = this.add.image(554, 538, "Ground-1");
    ground_1_2_1_1.scaleX = 5;
    ground_1_2_1_1.scaleY = 5;

    // ground_1_1_1_1_1
    const ground_1_1_1_1_1 = this.add.image(591, 538, "Ground-1");
    ground_1_1_1_1_1.scaleX = 5;
    ground_1_1_1_1_1.scaleY = 5;
  }

  /* START-USER-CODE */

  // Write more your code here

  create() {
    console.log("MDW: create called");

    // The following is created by the Phaser editor.
    this.editorCreate();

    // Add player
    player = this.physics.add.sprite(69, 316, 'character-1');
    player.scaleX = 5;
    player.scaleY = 5;
  }

  update() {
    player.setVelocityX(100);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

