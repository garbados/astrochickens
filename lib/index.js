// workaround for browserify failure
Phaser = Phaser || {};

var objects = {};
game = new Phaser.Game(800, 600, Phaser.AUTO,
  'astrochickens',
  {
    preload: preload.bind(objects),
    create: create.bind(objects),
    update: update.bind(objects)
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
  game.physics.startSystem(Phaser.Physics.ARCADE);

  var solarSystem = game.add.group();
  solarSystem.enableBody = true;

  var sol = game.add.sprite(400, 300, 'planet-2', 0, solarSystem);
  sol.scale.setTo(0.2, 0.2);
  console.log(sol.anchor);
  sol.anchor.set(0.5);

  var planetOrbits = game.add.group(solarSystem);
  var planet1 = game.add.sprite(sol.body.x - 200, sol.body.y - 150, 'planet-1', 0, planetOrbits);
  planet1.scale.setTo(0.05, 0.05);
  planet1.anchor.set(0.5);

  this.planet1 = planet1;
  this.planetOrbits = planetOrbits;
}

function update () {
  // execute orbits
  this.planetOrbits.angle += 1;
  this.planet1.angle += 1;
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
