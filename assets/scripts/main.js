let scene = new Phaser.Scene("Game");

scene.preload = function() {
    // 1. load background
    this.load.image('bg', 'assets/sprites/background.jpg');
};

scene.create = function() {
    // 2. show background  
    // let width = this.sys.game.config.width / 2,
    //     height = this.sys.game.config.height / 2;
    this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
};

let config = {
    type: Phaser.AUTO, // WEBGL or canvas
    width: 1280, 
    height: 720,
    scene: scene
};

let game = new Phaser.Game(config);