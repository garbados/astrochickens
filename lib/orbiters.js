/**
 * helper functions for locking objects in consistent orbits
 */

function OrbiterFactory (game) {
  this.game = game;
  this.orbitGroup = game.add.group();
  this.orbiters = {};
}

OrbiterFactory.prototype.add = function (obj_to_orbit, radius, key, sprite_key, opts) {
  if (!sprite_key) sprite_key = key;
  var orbiter = this.orbitGroup.create(obj_to_orbit.x - radius, obj_to_orbit.y - radius, sprite_key);
  orbiter.moveData = opts || {
    // object-specific data, such as orbit rate
    radius: radius,
    parent: obj_to_orbit
  };
  orbiter.anchor.setTo(0.5, 0.5);
  this.orbiters[key] = orbiter;
};

OrbiterFactory.prototype.onUpdate = function () {
  // run during update() game loop
};
