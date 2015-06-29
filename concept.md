# Galactic Katamari

A space exploration sim of significant scale.

You play a single space-faring entity. Initially, you are an [astro-chicken](https://en.wikipedia.org/wiki/Astrochicken), a simple self-replicating spacecraft. You do not age, no matter how many millenia you spend in transit.

Travelling through space consumes resources. If you run out of resources, you can go no further. You can estimate the time and resources it will take to reach a star or planet or other cosmic body, but unexpected phenomena in transit may cost you more resources than you budgeted, turning your ship into intergalactic flotsam.

When orbiting a sun, you can restore some of your resources by absorbing the energy cast by the starlight.

When orbitting a planet, you can bombard the surface, slowly reducing any inhabitants (or their remnants) to dust.

When on a planet, you can mine as many resources as you like, and use them as follows:
* build another astrochicken
* improve mining rate
* improve travel rate
* improve durability (land on / mine more inhospitable planets, ex: gas giants)
* improve armaments (bombard harder, win fights against weaker weapons)
* improve telescopes (see further in space. useful in charting)

Each astrochicken you build is controlled independently, with its own technology levels. Astrochickens on the same planet share resources. As astrochickens become more advanced, they will become physically larger.

The game does not tell you where your first ship originated. You take control of your ship mid-transit.

Different planets and solar systems have different characteristics. Planets have their own resource stats: total resources, and rate of extraction. Planets with high rates of extraction are easy to mine, while low rates make mining take longer.

Planets may be inhabited. Life-bearing planets go through stages of civilization, or a catastrophe might wipe them out. Or you might wipe them out. Species are like immobile astrochickens: they have mining rates, durability, armaments, and telescopes. At some point, they will spawn their own astrochickens, and spawn stronger ships faster as their civilization goes on.

Combat occurs as follows: you can target a ship or planet, and begin to bombard them, slowly reducing their resources. Durability limits how quickly you reduce their resources; sufficient durability makes you invulnerable to sufficiently weaker armaments. Thus, you can lay waste to a planet, or its people may lay waste to you. Your weapons may shear holes in your foes, or they may do nothing.

As suns age, they will also change. Like pokemon, they will evolve into different stages, forming, expanding, collapsing, etc. Suns have a size, brightness, current age, and a lifespan duration. When the age of a sun reaches its lifespan duration, it will violently morph into the next stage, radiating energy and frying nearby ships and planets.

So, we have a bunch of object types so far:

## Astrochickens

Attributes:

* resources
* mining rate
* travel rate
* durability
* armaments
* telescopes

## Lifeforms

Attributes:

* resources
* mining rate
* durability
* armaments
* telescopeso
* age

## Planets

Attributes:

* size
* gravity
* resources
* extraction rate

## Suns

Attributes:

* size
* brightness
* age
* lifespan

The universe progresses in realtime, though you can speed and slow how much time passes in an instant. It may bore you to witness every instant a ship spends in transit, but you may want to observe a species develop or manage combat tactics at a slower pace.
