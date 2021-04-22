
class Boot extends Phaser.Scene {
  preload() {
    console.log("MDW: Boot.preload called");
    this.load.pack("pack", "assets/asset-pack.json");
    this.load.spritesheet('platform', 'assets/platform_ss.png', {
      frameWidth: 32, frameHeight: 16 });
  }

  create() {
    console.log("MDW: Boot.create called");
    this.scene.start("Level");
  }
}

var phaserConfig = {
  type: Phaser.WEBGL,
  width: 400,
  height: 300,
  pixelArt: true,
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
    mode: Phaser.Scale.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

var game = new Phaser.Game(phaserConfig);

game.scene.add("Boot", Boot, true);
