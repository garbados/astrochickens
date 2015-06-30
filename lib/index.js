// workaround for browserify failure
Phaser = Phaser || {};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 
  'astrochickens', 
  {
    preload: preload,
    create: create,
    update: update 
  }
);

function preload () {

}

function create () {

}

function update () {

}

module.exports = game;
