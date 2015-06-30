// workaround for browserify failure
Phaser = Phaser || {};

game = new Phaser.Game(800, 600, Phaser.AUTO, 
  'astrochickens', 
  {
    preload: preload,
    create: create,
    update: update 
  }
);

/**
STATE KEEPERS
*/

function preload () {
  for (var i = 1; i <= 16; i++) {
    game.load.image('planet-' + i, 'assets/planet-' + i + '.png');
  }
}

function create () {
  for (var i = 1; i <= 16; i++) {
    var scale = i * 8;
    planet.add(scale, 0, 'planet-' + i, scale)
  }
}

function update () {

}

/**
UTILITY FUNCTIONS
*/

var planet = {
  add: function (x, y, key, scale) {
    var planet_sprite = game.add.image(x, y, key);
    planet_sprite.width = scale;
    planet_sprite.height = scale;
  }
}

module.exports = game;
