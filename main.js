
class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/asset-pack.json");
  }

  create() {
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
      gravity: { y: 300 },
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
