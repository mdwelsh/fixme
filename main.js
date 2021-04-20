
class Boot extends Phaser.Scene {
  preload() {
    console.log("MDW: Boot.preload called");
    this.load.pack("pack", "assets/asset-pack.json");
  }

  create() {
    console.log("MDW: Boot.create called");
    this.scene.start("Level");
  }
}

var phaserConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  backgroundColor: "#242424",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

var game = new Phaser.Game(phaserConfig);

game.scene.add("Boot", Boot, true);
