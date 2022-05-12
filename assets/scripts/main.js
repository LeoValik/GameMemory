let scene = new Phaser.Scene("Game");

scene.preload = function() {
    // 1. load background
    console.log("preload");
};

scene.create = function() {
    // 2. show background
    console.log("create");
};

let config = {
    type: Phaser.AUTO, // WEBGL or canvas
    width: 1280, 
    height: 720,
    scene: scene
};

let game = new Phaser.Game(config);