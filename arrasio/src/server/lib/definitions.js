// GUN DEFINITIONS ~ patch by antelope ;)

const combineStats = function(arr) {
    try {
        // Build a blank array of the appropiate length
        let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        arr.forEach(function(component) {
            for (let i = 0; i < data.length; i++) {
                data[i] = data[i] * component[i];
            }
        });
        return {
            reload: data[0],
            recoil: data[1],
            shudder: data[2],
            size: data[3],
            health: data[4],
            damage: data[5],
            pen: data[6],
            speed: data[7],
            maxSpeed: data[8],
            range: data[9],
            density: data[10],
            spray: data[11],
            resist: data[12],
        };
    } catch (err) {
        console.log(err);
        console.log(JSON.stringify(arr));
    }
};
const skillSet = (() => {
    let config = require('../../../config.json');
    let skcnv = {
        rld: 0,
        pen: 1,
        str: 2,
        dam: 3,
        spd: 4,
        shi: 5,
        atk: 6,
        hlt: 7,
        rgn: 8,
        mob: 9,
    };
    return args => {
        let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let s in args) {
            if (!args.hasOwnProperty(s)) continue;
            skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
        }
        return skills;
    };
})();
const g = { // Gun info here 
    trap: [36.1, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
    swarm: [18, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
    drone: [50, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
    factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
    basic: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
    huge: [2, 0, 0.25, 3, 1, 0.75, 1, 7, 1, 1, 1, 15, 3],
    osht: [0.1, 0.7, 0.25, 1, 1, 0.75, 1, 2.5, 1, 1, 1, 15, 3],
    candl: [0.1, 9.7, 0.25, 1, 1, 0.75, 1, 0.05, 1, 1, 1, 360, 3],
    highrecoil2: [4, 5.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
    nerfgun: [999999, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      lowlife: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 0.01, 1, 15, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
  bigger: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 10],
      blank2: [1, 1, 1, 1, 1, 1, 1, 0.03, 100, 14, 1, 1, 1],
    spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
    minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
    single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
    sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
    rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
    assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
    hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
    hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
    preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
    snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
    sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
    snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
    mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
    blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
    chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
    mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
    stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
    shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
    flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
    tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
    trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
    thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    auto: /*pure*/ [1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
    five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
    autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    rng: [5, 1, 1, 1, 1, 1, 1, 1, 0.01, 2, 1, 360, 0],
    norng: [1, 1, 0.1, 1, 1, 1, 1, 8, 5, 1, 1, 0.01, 0],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  pound2: [2, -1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
    destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
    anni: [0.85, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
    arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
    mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
    spreadmain: [0.78125, 0.25, 0.5, 1, 0.5, 1, 1, 1.5 / 0.78, 0.9 / 0.78, 1, 1, 1, 1],
    spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
    skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
    twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
    bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
    triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
    double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
    hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
    puregunner: [1, 0.25, 1.5, 1.2, 1.35, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
    machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
    gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
    power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
    nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
    fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
      gunner2: [1.25, 0, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
    power2: [1, 0, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
    nail2: [0.85, 0, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
    fast2: [1, 0, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
    turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
    bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
    carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
    hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
    block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
    construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
    boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
    over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
    meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
    weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
    master: [3, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
    sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
    babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
    lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
    bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
    slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
    halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
    notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
    halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
    fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
    protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
};
const dfltskl = 9;
// NAMES
const statnames = {
    smasher: 1,
    drone: 2,
    necro: 3,
    swarm: 4,
    trap: 5,
    generic: 6,
};
const gunCalcNames = {
    default: 0,
    bullet: 1,
    drone: 2,
    swarm: 3,
    fixedReload: 4,
    thruster: 5,
    sustained: 6,
    necro: 7,
    trap: 8,
};

// ENTITY DEFINITIONS
exports.genericEntity = {
    NAME: '',
    LABEL: 'Unknown Entity',
    TYPE: 'unknown',
    DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: 16,
    INDEPENDENT: false,
    CONTROLLERS: ['doNothing'],
    INVISIBLE: [0, 0],
    HAS_NO_MASTER: false,
    MOTION_TYPE: 'glide', // motor, swarm, chase
    FACING_TYPE: 'toTarget', // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: 'normal', // hard, repel, never, hardWithBuffer
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    AUTO_UPGRADE: 'none',
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};
// FOOD
exports.food = {
    TYPE: 'food',
    DAMAGE_CLASS: 1,
    CONTROLLERS: ['moveInCircles'],
    HITS_OWN_TYPE: 'repel',
    MOTION_TYPE: 'drift',
    FACING_TYPE: 'turnWithSpeed',
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    GUNS: [],
    TURRETS: [],
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 1.5;

exports.hugePentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
    },
    LABEL: 'Alpha Pentagon',
    VALUE: 15000,
    SHAPE: -5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
    },
    LABEL: 'Beta Pentagon',
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.pentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Pentagon',
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.triangle = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 2,
    },
    LABEL: 'Triangle',
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.square = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'Square',
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.box = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'Box',
    VALUE: 50,
    SHAPE: -4,
    SIZE: 10,
    COLOR: 22,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.egg = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 0,
    },
    LABEL: 'Egg',
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
};
exports.greenpentagon = {
    PARENT: [exports.food],
    LABEL: 'Pentagon',
    VALUE: 30000,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.greentriangle = {
    PARENT: [exports.food],
    LABEL: 'Triangle',
    VALUE: 7000,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.greensquare = {
    PARENT: [exports.food],
    LABEL: 'Square',
    VALUE: 2000,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: 0.5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.gem = {
    PARENT: [exports.food],
    LABEL: 'Gem',
    VALUE: 2000,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.obstacle = {
    TYPE: 'wall',
    DAMAGE_CLASS: 1,
    LABEL: 'Rock',
    FACING_TYPE: 'turnWithSpeed',
    SHAPE: 0,
    BODY: {
        PUSHABILITY: 5,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    GUNS: [],
    TURRETS: [],
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    GIVE_KILL_MESSAGE: true,
    ACCEPTS_SCORE: true,
};
exports.babyObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 25,
    SHAPE: 0,
    LABEL: "Gravel",
};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;

exports.bullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletgrow = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    MOTION_TYPE: 'grow',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.blade = {
    LABEL: 'Blade',
    TYPE: 'bullet',
    SHAPE: 2,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet1 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    COLOR: 13,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet2 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    COLOR: 2,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet3 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    COLOR: 1,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.hibullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    BODY: {
        PENETRATION: 0.7,
        SPEED: 0.01,
        RANGE: 50,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    MOTION_TYPE: 'accel',
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.cbullet = {
    LABEL: 'lol',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    FACING_TYPE: 'turnWithSpeed',
    SHAPE: 2,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.casing = {
    PARENT: [exports.bullet],
    LABEL: 'Shell',
    TYPE: 'swarm',
};

exports.swarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.bee = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: 'Drone',
    HITS_OWN_TYPE: 'hardWithBuffer',
};
exports.autoswarm = {
    PARENT: [exports.swarm],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};

exports.trap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trapdefend = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    COLOR: 13,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trap2 = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.pentatrap = {
    LABEL: 'Pentabionic Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: 5,
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.block = {
    LABEL: 'Set Trap',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget'],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.boomerang = {
    LABEL: 'Boomerang',
    PARENT: [exports.trap],
    CONTROLLERS: ['boomerang'],
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'never',
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};
exports.testboomerang = {
    LABEL: 'Boomerang',
    PARENT: [exports.trap],
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'never',
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
    FACING_TYPE: 'turnWithSpeed',
};

exports.drone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.dronehex = {
    LABEL: 'Hex Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 6,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.sunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: false,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.autosunchip = {
    PARENT: [exports.sunchip],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.gunchip = {
    PARENT: [exports.drone],
    SHAPE: -2,
    NECRO: true,
    HITS_OWN_TYPE: 'hard',
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};

exports.missile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.rocket = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Rocket',
    INDEPENDENT: true,
    VARIES_IN_SIZE: false,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.muchmorerecoil]),
            AUTOFIRE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.pathmissile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Trapper',
    INDEPENDENT: true,
    VARIES_IN_SIZE: false,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.muchmorerecoil]),
            TYPE: exports.block,
        },
    }, ],
};
exports.missilefuj = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missile, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missile, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilefuj2 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missilefuj, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.missilefuj, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilex = {
    PARENT: [exports.bullet],
    SHAPE: -8,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 135, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.highrecoil2]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, -135, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.highrecoil2]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilea = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['goToMasterTarget', 'spin'],
    BODY: {
        RANGE: 280,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.osht
            ]),
            TYPE: [exports.hibullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.sunmissile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    SIZE: 40,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilespin1 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.missilespin2 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.essencemissile = {
    PARENT: [exports.bullet],
    SHAPE: 3,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [3, 10, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.doublereload, g.lowpower, g.muchmorerecoil, g.rng]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.testmissile2 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -5, 190, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 5, -190, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -5, 230, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 5, -230, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -5, 270, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 5, -270, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};

exports.testmissile3 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 0.5, 0, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};

exports.hypermissile = {
    PARENT: [exports.missile],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 150, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 210, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, -2, 90, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 270, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.testmissile = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 9, 1, 0, 0, -200, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 200, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 205, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, -205, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 3, 1, 0, 0, 210, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 3, 1, 0, 0, -210, 0.2, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.doublereload, g.lowpower,

                g.muchmorerecoil, g.morespeed, g.morespeed
            ]),
            TYPE: [exports.trap, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.boosterspawn = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 135, 0.6, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 225, 0.6, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.lowpower, g.muchmorerecoil, g.morespeed,

                g.morespeed
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.snake = {
    PARENT: [exports.bullet],
    LABEL: 'Snake',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.4, 8, 0, 180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, {
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5, ],
        PROPERTIES: {
            AUTOFIRE: true,
            NEGATIVE_RECOIL: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([
                g.basic, g.sniper, g.hunter, g.hunter2, g.snake,
            ]),
            TYPE: [exports.bullet, {
                PERSISTS_AFTER_DEATH: true,
            }],
        },
    }, ],
};
exports.hive = {
    PARENT: [exports.bullet],
    LABEL: 'Hive',
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: 'turnWithSpeed',
    INDEPENDENT: true,
    CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf', ],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.op]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
}

exports.hivet = {
    PARENT: [exports.bullet],
    LABEL: 'Hive',
    BODY: {
        RANGE: 90,
        FOV: 0.1,
    },
    CONTROLLERS: ['nearestDifferentMaster', 'targetSelf'],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.hive, g.bees, g.op]),
            TYPE: exports.bee,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
}

// TANK CLASSES
const base = {
    ACCEL: 1.6,
    SPEED: 5.25,
    HEALTH: 20,
    DAMAGE: 3,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 8,
    REGEN: 0.025,
    FOV: 1,
    DENSITY: 0.5,
};
exports.genericTank = {
    LABEL: 'Unknown Class',
    TYPE: 'tank',
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'toTarget',
    SIZE: 12,
    INVISIBLE: [0, 0],
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    BODY: { // def
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 0.9,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true
};
let gun = {};

exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.autoTwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machineAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 11, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.autoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 6, 1, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach,

                g.pound, g.morereload, g.morereload
            ]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, {
        POSITION: [20, 6, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach,

                g.pound, g.morereload, g.morereload
            ]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, ],
};
exports.oldAutoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 7, 1, 0, -5.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, {
        POSITION: [20, 7, 1, 0, 5.75, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
            TYPE: exports.bullet,
            STAT_CALCULATOR: gunCalcNames.fixedReload,
        },
    }, ],
};

exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.anni3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.op, g.pound]),
            TYPE: exports.bullet,
        },
    }],
};
exports.tgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    SHAPE: 3,
    COLOR: 13,
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 3, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.op]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 3, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.op]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};

exports.bearing = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    FACING_TYPE: 'autospin',
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.gungun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [13, 11, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.airgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Getrenonozater',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 13, -2, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.wipegun = {
    PARENT: [exports.genericTank],
    LABEL: 'k',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                   POSITION: [12, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 45, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 135, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 225, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 8, 1, 0, 0, 315, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.predaxgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
               POSITION: [30, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
               POSITION: [27, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
     
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.nailturr = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Nailgun',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, 5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 6, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 5.5, 5.5, 0, 0, ],
    }, ],
};
exports.newautosmasherTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret',
        COLOR: 16,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
  POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                ],
            };

exports.x300turret = {
    PARENT: [exports.genericTank],
    LABEL: 'X Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  25,    11,      -3,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: exports.bullet,
            }, }, {
        POSITION: [  27,    13,      2,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.cc6auto = {
    PARENT: [exports.genericTank],
    LABEL: 'CC6 Auto Seeker',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      3,      0,      0,      0,      0.6,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: exports.bullet,
            }, }, {
        POSITION: [  18,    12,      4,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.auto5gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
            TYPE: exports.bullet,
        },
    }],
};
exports.heavy3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
            TYPE: exports.bullet,
        },
    }],
};
exports.masterGun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    MAX_CHILDREN: 6,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 14, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.master]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.sniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0, ],
    }, ],
};
exports.bansheegun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [26, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
            TYPE: exports.bullet,
        },
    }],
};
exports.auto4gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }],
};
exports.auto4invisgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
      INVISIBLE: [0.08, 0.03],
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 4, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
            TYPE: exports.bullet,
        },
    }],
};
exports.bigauto4gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 5, 1, 0, -4.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 5, 1, 0, 4.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
            TYPE: exports.bullet,
        },
    }],
};

exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 16, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 16, 1.1, 20, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
            TYPE: exports.block,
        },
    }, ],
};
exports.smasherBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.jumpBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 7,
    INDEPENDENT: true,
};
exports.landmineBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 8,
    INDEPENDENT: true,
};
exports.shurikenBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.spikeBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -4,
    INDEPENDENT: true,
};
exports.spikeBody1 = {
    LABEL: '',
    CONTROLLERS: ['fastspin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.spikeBody2 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.megasmashBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: true,
};
exports.dominationBody = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 9,
    SHAPE: 8,
    INDEPENDENT: true,
};
exports.dominationBody2 = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 9,
    SHAPE: 10,
    INDEPENDENT: true,
};
exports.baseSwarmTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Protector',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: {
        NO_LEAD: true,
        LIKES_SHAPES: true,
    },
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
            TYPE: [exports.swarm, {
                INDEPENDENT: true,
                AI: {
                    LIKES_SHAPES: true,
                },
            }, ],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};
exports.baseGunTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Protector',
    BODY: {
        FOV: 5,
    },
    ACCEPTS_SCORE: false,
    CONTROLLERS: ['nearestDifferentMaster'],
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 12, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [11, 13, 1, 6, 0, 0, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [7, 13, -1.3, 6, 0, 0, 0, ],
    }],
};
exports.baseProtector = {
    PARENT: [exports.genericTank],
    LABEL: 'Base',
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody,
    }, {
        POSITION: [12, 7, 0, 45, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 135, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 225, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 315, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0, ],
    }, ],
};
exports.dom = {
    PARENT: [exports.genericTank],
    LABEL: 'Dominator',
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    TYPE: 'fixed',
    FACING_TYPE: 'autospin',
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 1000,
        DAMAGE: 15,
        PENETRATION: 0.25,
        SHIELD: 20,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],

    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody,

    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [16, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner2, g.power2, g.twin, g.nail2]),
            TYPE: exports.bullet,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [16, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner2, g.power2, g.twin, g.nail2]),
            TYPE: exports.bullet,
          AUTOFIRE: true,
        },
    }, {
        POSITION: [17, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner2, g.power2, g.twin, g.nail2]),
            TYPE: exports.bullet,
          AUTOFIRE: true,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.minionyz = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion HSAC',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    SHAPE: 5,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 6, 0, 0, 80, 1],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [8, 6, 0, 120, 80, 1],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [8, 6, 0, 240, 80, 1],
        TYPE: exports.sniper3gun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 3, 1, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lessrecoil]),
            TYPE: exports.bullet,
         
        },
    }, {
        POSITION: [7, 3, 1, 8, 6, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lessrecoil]),
            TYPE: exports.bullet,
        
        },
    }, {
        POSITION: [7, 3, 1, 8, -6, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lessrecoil]),
            TYPE: exports.bullet,
        
        },
    }, ]
};
exports.minionx = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion x',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    SHAPE: 4,
    DANGER: 7,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 4, -1.5, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
          POSITION: [17, 4, -1.5, 0, -5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 4, -1.5, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [20, 4, -1.5, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
          POSITION: [17, 4, -1.5, 0, -5, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 4, -1.5, 0, 5, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, 
    }, {
             POSITION: [20, 4, -1.5, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
          POSITION: [17, 4, -1.5, 0, -5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 4, -1.5, 0, 5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
             POSITION: [20, 4, -1.5, 0, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
          POSITION: [17, 4, -1.5, 0, -5, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 4, -1.5, 0, 5, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.minionxx = makeAuto(exports.minionx, 'Gigawater', { type: exports.wipegun, size: 13, });


exports.minionair = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    SIZE: 30,
    DANGER: 7,
    SHAPE: 4,
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 4,
        ACCELERATION: 0.7,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.5,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 9, -1.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
            },
         }, {
            POSITION: [17, 4, 1, 0, 4, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
         }, {
                 POSITION: [17, 4, 1, 0, -4, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
         }, {
            POSITION: [17, 10, 1, 0, 0, 150, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
         }, {
       
            POSITION: [17, 10, 1, 0, 0, 210, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
         }, {
              POSITION: [17, 4, 1, 0, 4, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
         }, {
               POSITION: [17, 4, 1, 0, -4, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.minionair2 = makeAuto(exports.minionair, 'Memer', { type: exports.predaxgun, size: 12, });

exports.minianni = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.anni]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hewnminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
        LEVEL: 45,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 5.5, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.selfspawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Self Spawner',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.factory]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.selfspawner,
        },
    }, ],
};
exports.minion2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, -45, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, 45, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, 22.5, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, -22.5, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    }, ],
};
exports.miniontest = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
    ],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap,
        },
    }, ],
};
exports.miniontest = makeAuto(exports.miniontest, 'TESTBED minion', {
    type: exports.oldAutoSmasherTurret,
    size: 10,
});
exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.triboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Pistol 3',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                       POSITION: [  18,    10,      1,      0,      5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,    10,      1,      0,     -5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  21,    10,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, 
    ],
};
exports.tribox = {
    LABEL: 'Tribox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',    
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true, 
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.triboxTurret,
        }
    ]
};
exports.pillboxTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.hypermissile,
        },
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.pillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -3,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        RANGE: 75,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC  LAYER*/
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret,
    }]
};
exports.pillbox2 = {
    LABEL: 'Pilltestbox',
    PARENT: [exports.trap],
    SHAPE: 5,
    MOTION_TYPE: 'motor',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 4,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret2,
    }, ]
};
exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 2,
    },
    COLOR: 2,
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.hypermissile,
        },
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.skimboss = {
    PARENT: [exports.genericTank],
    BODY: {
        HEALTH: 300,
        DAMAGE: 2,
        SHIELD: 200,
    },
    SHAPE: 3,
    COLOR: 2,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 5, 0, 60, 170, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [15, 5, 0, 180, 170, 0],
        TYPE: exports.skimturret,
    }, {
        POSITION: [15, 5, 0, 300, 170, 0],
        TYPE: exports.skimturret,
    }, ],
};

function makeAuto(type, name = -1, options = {}) {
    let turret = {
        type: exports.autoTurret,
        size: 10,
        independent: true,
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }

    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [turret.size, 0, 0, 180, 360, 1, ],
        TYPE: [turret.type, {
            CONTROLLERS: ['nearestDifferentMaster'],
            INDEPENDENT: turret.independent,
        }],
    };
    if (type.GUNS != null) {
        output.GUNS = type.GUNS;
    }
    if (type.TURRETS == null) {
        output.TURRETS = [autogun];
    } else {
        output.TURRETS = [...type.TURRETS, autogun];
    }
    if (name == -1) {
        output.LABEL = 'Auto-' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    output.DANGER = type.DANGER + 1;
    return output;
}

function makeHybrid(type, name = -1) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner = {
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, {
                INDEPENDENT: true,
            }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 3,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner];
    } else {
        output.GUNS = [...type.GUNS, spawner];
    }
    if (name == -1) {
        output.LABEL = 'Hybrid ' + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}

exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.multiboxer = {
    PARENT: [exports.genericTank],
    LABEL: 'Multibox Module',
    COLOR: 13,
    //CONTROLLERS: ['nearestDifferentMaster'],
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [22, 10, 0, 0, 80, 1],
        TYPE: exports.basic,
    }, {
              POSITION: [22, -20, 0, 0, 80, 1],
        TYPE: exports.basic,
    }, {
                    POSITION: [22, 10, 0, 0, 80, 1],
        TYPE: exports.basic,
    }, {
                    POSITION: [22, 10, -5, 0, 80, 1],
        TYPE: exports.basic,
    
    

    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.basicbig = {
    PARENT: [exports.genericTank],
    LABEL: 'Big Basic',
    SIZE: 25,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: true, // def
        },
    }, ],
};
exports.basic22 = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.basic,
        }, 
    }, ],
};
exports.accelerator = {
    PARENT: [exports.genericTank],
    LABEL: 'accel',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 11, 1.3, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload]),
            TYPE: exports.hibullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.sine = {
    PARENT: [exports.genericTank],
    LABEL: 'Destruction',
    //CONTROLLERS: ['nearestDifferentMaster'],
    BODY: {
        SPEED: base.SPEED * 7,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 20, 1, 0, 0, -60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 20, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 20, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.missile,
        },
    }, ],
};
exports.builder3 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Rock Climber',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15
    },
    GUNS: [{
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.morespeed]),
            TYPE: exports.obstacle
        }
    }]
};
exports.testbedParent = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    DANGER: 0,
    BODY: {
        SHIELD: 1000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.small = {
    PARENT: [exports.genericTank],
    LABEL: 'Tiny!',
    SIZE: 2,
    BODY: {
        SHIELD: 1000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
        
        
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.testbedboss = {
    PARENT: [exports.genericTank],
    LABEL: 'Bosses Page 2',
    BODY: {
        SHIELD: 1000,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.spec = {
    PARENT: [exports.genericTank],
    LABEL: 'Spectator',
    BODY: {
        SHIELD: 100000000000000000000000000000000000000000000000000000000,
        HEALTH: 1000000000000000000000000000000000000000000000,
        DAMAGE: 1000,
        DENSITY: 20,
        FOV: 18,
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [16, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }]
};
exports.devtank = {
    PARENT: [exports.testbedParent],
    LABEL: 'Tester',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: -1
};
exports.devtank2 = {
    PARENT: [exports.testbedParent],
    LABEL: 'TESTBED',
    RESET_UPGRADES: true,
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: -1
};

exports.testbed = {
    PARENT: [exports.testbedParent],
    LABEL: 'dev tanks'
};
exports.testbed2 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Bosses'
};
exports.testbed3 = {
    PARENT: [exports.testbedParent],
    LABEL: '???'
};
exports.testbed4 = {
    PARENT: [exports.testbedParent],
    LABEL: 'Unused entities'
};
exports.testbed5 = {
    PARENT: [exports.testbedParent],
    LABEL: 'MISCELLANEOUS'
};
exports.testbed6 = {
    PARENT: [exports.testbedParent],
    LABEL: 'More'
};
exports.testbed7 = {
    PARENT: [exports.testbedParent],
    LABEL: 'More'
};
exports.testbedm = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    TYPE: 'minion',
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2
    },
    TURRETS: [],
    GUNS: [{
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: [exports.bullet, {
                SHAPE: 5
            }]
        }
    }],
};
exports.single = {
    PARENT: [exports.genericTank],
    LABEL: 'Single',
    GUNS: [{
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
};
exports.bosssquare = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 13,
    SHAPE: 4,
    
};
exports.bosstri = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 13,
    SHAPE: 3,
    
};
exports.eye = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 8,
    SHAPE: 0,
    
};
exports.eyeball = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 9,
    SHAPE: 0
    
};

let smshskl = 12;
exports.smash = {
    PARENT: [exports.genericTank],
    LABEL: 'Smasher',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.jumpsmash = {
    PARENT: [exports.genericTank],
    LABEL: 'Jump Smasher',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.jumpBody
    }],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 8, 1.2, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.highrecoil2, g.lessreload, g.lessreload, g.lessreload, g.lessreload, g.lessreload, g.highrecoil2]),
            TYPE: exports.bullet,

        },
    }], 
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.landmine = {
    PARENT: [exports.genericTank],
    LABEL: 'Landmine',
    INVISIBLE: [0.08, 0.04],
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.landmineBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};

exports.smashgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Smashhound',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
      }, {
         POSITION: [9, 8, 0, 120, 60, 0],
        TYPE: exports.machineAutoTurret
         }, {
         POSITION: [9, 8, 0, 0, 60, 0],
        TYPE: exports.machineAutoTurret 
             }, {
         POSITION: [9, 8, 0, 240, 60, 0],
        TYPE: exports.machineAutoTurret
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.shuriken = {
    PARENT: [exports.genericTank],
    LABEL: 'Shuriken',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.shurikenBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.decoy = {
    PARENT: [exports.genericTank],
    LABEL: 'Decoy',
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 4.05,
        DENSITY: base.DENSITY * 2
        
    },
    TURRETS: [{
        POSITION: [75, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.bonk = {
    PARENT: [exports.genericTank],
    LABEL: 'Bonker',
    DANGER: 6,
    SIZE: 7,
    SHAPE: 0,
    BODY: {
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
        SPEED: base.SPEED * 3
    },
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
    }],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher
};
exports.megasmash = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega-Smasher',
    DANGER: 7,
    BODY: {
        SPEED: base.speed * 1.05,
        FOV: base.FOV * 1.1,
        DENSITY: base.DENSITY * 4,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [24, 0, 0, 0, 360, 0, ],
        TYPE: exports.megasmashBody,
    }],
};
exports.spike = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike',
    DANGER: 7,
    BODY: {
        SPEED: base.speed * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0, ],
        TYPE: exports.spikeBody,
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0, ],
        TYPE: exports.spikeBody,
    }],
};
exports.weirdspike = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike',
    DANGER: 7,
    BODY: {
        DAMAGE: base.DAMAGE * 1.15,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 1.5,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl, ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [20.5, 0, 0, 0, 360, 0, ],
        TYPE: exports.spikeBody1,
    }, {
        POSITION: [20.5, 0, 0, 180, 360, 0, ],
        TYPE: exports.spikeBody2,
    }],
};
exports.autosmash = makeAuto(exports.smash, 'Auto-Smasher', {
    type: exports.auto5gun,
    size: 11,

});
exports.autosmash.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl,

    smshskl, smshskl,
];

exports.twin = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin',
    
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.twinp2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Page 2',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.twinsnipe = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Sniper',
   BODY: {
                    FOV: 1.2,
                },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [24, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.hybridtwin = makeHybrid(exports.twin, "Twister");
exports.hybridtwinsnipe = makeHybrid(exports.twinsnipe, "Torquer");
exports.grape = makeAuto(exports.hybridtwin, 'Grapeshot', { type: exports.autoTwin, size: 11, });
exports.twinpound = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Pounder',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 11, 1, 0, 7.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound]),
            TYPE: exports.bullet,
        },
    }, { 
            POSITION: [5, 21, 1.3, -6, 0, 0, 0, ],
  
    }, { 
        POSITION: [20, 11, 1, 0, -7.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.awp2part1 = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 13,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 5, -1.5, 0, 5.8, -180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [19, 5, -1.5, 0, -5.8, -180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.jrekpart = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 13,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 18.6, -1.5, 6, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [5, 18.6, -1.5, 6, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.boatpart = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 13,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 5, -1.5, 6, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, { 
        POSITION: [5, 5, -1.5, 6, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.bwptri = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 13,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [0, 0, 0, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [0, 0, 0, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.airpart = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 4,
    COLOR: 2,
    
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 5, -1.5, 6, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: exports.bullet,
        },
    }, { 
          POSITION: [5, 5, -1.5, 6, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [10, 17, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            MAX_CHILDREN: 2,
            TYPE: exports.minionair2,
        },
    }, {
      POSITION: [10, 17, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            MAX_CHILDREN: 2,
            TYPE: exports.minionxx,
        },
    }, ],
};
exports.airport = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 4,
    COLOR: 4,
    
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 5, -1.5, 6, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: exports.bullet,
        },
    }, { 
          POSITION: [5, 5, -1.5, 6, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [10, 17, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            MAX_CHILDREN: 2,
            TYPE: exports.minionair2,
        },
    }, {
      POSITION: [10, 17, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            MAX_CHILDREN: 2,
            TYPE: exports.minionxx,
        },
    }, ],
};
exports.boatparta = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 2,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 5, -1.5, 6, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, { 
        POSITION: [5, 5, -1.5, 6, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.elitepart = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 5,
  
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7, 1.7, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.mach, g.gunner, g.lessreload, g.basic]),
            TYPE: exports.bullet,
        },
    }, { 
        POSITION: [7, 7, 1.7, 8, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.mach, g.gunner, g.lessreload, g.basic]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.boatpart2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 4,
    COLOR: 13,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 5, -1.5, 6, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, { 
        POSITION: [5, 5, -1.5, 6, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.tail = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 3,
    COLOR: 13,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 5, -1.5, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, { 
        POSITION: [10, 5, -1.5, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
        },
    }, ],
};
exports.tail2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Generic Entity',
    SHAPE: 4,
    COLOR: 13,
    MAX_CHILDREN: 3,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 11, -1.5, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.minion,
        },
    }, { 
        POSITION: [9, 11, -1.5, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.minion,
        },
    }, ],
};
exports.autojrek = makeAuto(exports.jrekpart, 'entity', { type: exports.machineAutoTurret, size: 11, });

exports.autoboat = makeAuto(exports.boatpart, 'entity', { type: exports.sniper3gun, size: 11, });

exports.autoboat2 = makeAuto(exports.boatpart2, 'entity', { type: exports.sniper3gun, size: 11, });

exports.autoboata = makeAuto(exports.boatparta, 'entity', { type: exports.sniper3gun, size: 11, });

exports.airpart2 = makeAuto(exports.airpart, 'entity', { type: exports.wipegun, size: 11, });


exports.ladder = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 15, 0, 0, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 25, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 35, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 45, 0, 0, 0.7, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 30, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                          POSITION: [2, 11, 1, 40, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [47.5, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
        },
    }, { 
        POSITION: [47.5, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
        },
    }, ],
};
exports.skimmerspinner = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, -6, -10, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.missilespin1,
        },
    }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 6, 10, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.missilespin2,
        },
    }, ],
};
exports.gunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hybridgun = makeHybrid(exports.gunner, "Chaser");

exports.battery = {
    PARENT: [exports.genericTank],
    LABEL: 'Battery',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
                  },
    }, {
        POSITION: [20, 3.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
 exports.cruisegun = {
            PARENT: [exports.genericTank],
            LABEL: 'Gunner Cruiser',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  12,    3.5,     1,      0,     7.25,    0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  12,    3.5,     1,      0,    -7.25,    0,     0.75, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    4.5,     0.6,      0,     3.75,    0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.swarm,
                    }, }, { 
                POSITION: [  16,    4.5,     0.6,      0,    -3.75,    0,     0.25, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([ g.swarm]),
                        TYPE: exports.swarm,
                    }, }, 
            ],
        };
exports.vulcan2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Vulcan',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 2, 1, 0, 7.25, 0, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic,   g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, -7.25, 0, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic,  g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 2, 1, 0, 3.75, 0, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic,  g.fast]),
            TYPE: exports.bullet,
        },
    }, {

                  POSITION: [5, 21, 1, 19, 0, 0, 4 / 6, ],
        
      
    }, {
        POSITION: [17, 2, 1, 0, -3.75, 0, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic,  g.fast]),
            TYPE: exports.bullet,
                  },
    }, {
      
        POSITION: [17, 2, 1, 0, 0, 0, 6 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic,  g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.vulcan = {
    PARENT: [exports.genericTank],
    LABEL: 'Vulcan',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 1, 1, 0, 6.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 6.1, 0, 1 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 5, 0, 2 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 4, 0, 3 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 3, 0, 4 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 2, 0, 5 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 1, 0, 6 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, 0, 0, 7 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -1, 0, 8 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -2, 0, 9 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -3, 0, 10 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -4, 0, 11 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -5, 0, 12 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -6.1, 0, 13 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 1, 1, 0, -6.5, 0, 14 / 14, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.gunnerskim2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.halfspeed]),
            TYPE: exports.essencemissile,
        },
    }, {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.halfspeed]),
            TYPE: exports.essencemissile,
        },
    }, ],
};
exports.gunnerskim = {
    PARENT: [exports.genericTank],
    LABEL: 'Blaster',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 9, 1, 0, 8.75, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.morespeed]),
            TYPE: exports.testmissile3,
        },
    }, {
        POSITION: [16, 9, 1, 0, -8.75, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.morespeed]),
            TYPE: exports.testmissile3,
        },
    }, ],
};
exports.machinegunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gunner',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 3, 4.0, -3, 5, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, -3, -5, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [14, 3, 4.0, 3, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
            TYPE: exports.bullet,
        },
    }, ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Nailgun',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.focus = {
    PARENT: [exports.genericTank],
    LABEL: 'Focuser',
    DANGER: 7,
    SHAPE: 3,
    COLOR: 13,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 3, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 3, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.bonkshot = {
    PARENT: [exports.genericTank],
    LABEL: 'Bonkshot',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
              POSITION: [20, 10, 1, 0, 0, 0, 0, ],
   
    }, {
        POSITION: [5.5, 10, -1.8, 5, 0, 0, 0, ],
    }, ],
};
exports.mgshot = {
    PARENT: [exports.genericTank],
    LABEL: 'Machinebonk',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shotgun, g.mach]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shotgun, g.gunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shotgun, g.spam]),
            TYPE: exports.casing,
        },
    }, {
              POSITION: [20, 8, 1.7, 0, 0, 0, 0, ],
   
    }, {
        POSITION: [5.5, 10, -1.8, 5, 0, 0, 0, ],
    }, ],
};
exports.bwpgun = {
    PARENT: [exports.genericTank],
    LABEL: 'bwp gun',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
            TYPE: exports.bullet,
        },
    }, {
 
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }, ],
};
exports.double = {
    PARENT: [exports.genericTank],
    LABEL: 'Double Twin',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.omegapart = {
    PARENT: [exports.genericTank],
    LABEL: 'Memer',
    COLOR: 12,
    DANGER: 6,
    SHAPE: 3,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, -60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};



exports.tripletwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Twin',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 120, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 240, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.triplemin = {
    PARENT: [exports.genericTank],
    LABEL: 'base for the clone',
    SHAPE: 6,
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, -2.5, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, -2.5, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, -2.5, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hugetripletwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Twin',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 0.9, -1, 0, -5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.skim, g.double]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 8, 0.9, -1, 0, 5, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.skim, g.double]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [20, 8, 0.9, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.skim, g.double]),
            TYPE: exports.missile,
        },
    }, ],
};
exports.autodouble = makeAuto(exports.double, 'Auto-Double');
exports.split = {
    PARENT: [exports.genericTank],
    LABEL: 'Hewn Double',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 5.5, 25, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.bent = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bentpound = {
    PARENT: [exports.genericTank],
    LABEL: 'Slutgun',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.benttrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Shot',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.a,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.a,
        },
    }, {
        POSITION: [5, 8, 1.5, 16, 2, 20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [5, 8, 1.5, 16, -2, -20, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.a,
        },
    }, {
        POSITION: [5, 8, 1.5, 17, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.trap,
        },
    }, ],
};
exports.bentdouble = {
    PARENT: [exports.genericTank],
    LABEL: 'Bent Double',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, -1, -40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -1, 140, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 1, -140, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.penta = {
    PARENT: [exports.genericTank],
    LABEL: 'Penta Shot',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 8, 1, 0, -3, -30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, 3, 30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -2, -15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hepta = {
    PARENT: [exports.genericTank],
    LABEL: 'Hepta Shot',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [13, 8, 1, 0, -3, -45, 0.999, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [13, 8, 1, 0, 3, 45, 0.999, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8, 1, 0, -3, -30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {

        POSITION: [16, 8, 1, 0, 3, 30, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, -2, -15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 15, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.benthybrid = makeHybrid(exports.bent, 'Bent Hybrid');

exports.triple = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05,
    },
    LABEL: 'Triplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1, 0, 5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.rbt = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    COLOR: 12,
    SIZE: 40,
    BODY: {
        FOV: base.FOV * 2.05,
    },
    LABEL: 'RED Battle Tank',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1, 0, 5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.op]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 10, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.op]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.op]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.quint = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Quintuplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 10, 1, 0, -5, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 10, 1, 0, 5, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 10, 1, 0, -3, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 10, 1, 0, 3, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [22, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.dual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: base.ACCEL * 0.8,
        FOV: base.FOV * 1.1,
    },
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 7, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.trual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        ACCEL: base.ACCEL * 0.8,
        FOV: base.FOV * 1.1,
    },
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

        POSITION: [18, 7, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
        },
    }, {
                    POSITION: [18, 7, 1, 0, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
            TYPE: exports.bullet,
            LABEL: 'Small',
        },
    }, {
        POSITION: [16, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
            TYPE: exports.bullet,
 
        },
    }, ],
};
 exports.railgun = {
            PARENT: [exports.genericTank],
            LABEL: 'Railgun',
           BODY: {
                    FOV: 1.2,
                },
            GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  1,     8,      1,      10,     0,      0,      0, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.bitlessspeed, g.bitlessspeed, g.bitlessspeed, g.bitlessspeed, g.bitlessspeed, g.halfrange]),
                    TYPE: exports.bullet,
                }, }, { 
                POSITION: [  1,     8,      1,      15,     0,      0,      0, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.halfrange]),
                    TYPE: exports.bullet,
                }, }, { 
                POSITION: [  1,     8,      1,      20,     0,      0,      0, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morespeed, g.halfrange]),
                    TYPE: exports.bullet,
                }, }, { 
                POSITION: [  1,     8,      1,      25,     0,      0,      0, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morespeed, g.morespeed, g.halfrange]),
                    TYPE: exports.bullet,
                }, }, { 
                POSITION: [  27,    2,      1,      0,      4,      0,      0, ],
                }, { 
                POSITION: [  27,    2,      1,      0,      -4,     0,      0, ],
                },
              ],
        };

exports.sniper = {
    PARENT: [exports.genericTank],
    LABEL: 'Sniper',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.turkhead = {
    PARENT: [exports.genericTank],
    LABEL: 'Turkey Head',
    
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, -1.5, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.FTBToArras = {
PARENT: [exports.genericTank],
LABEL: "PLACEHOLDER",
SIZE: 20,
SHAPE: 0,
GUNS: [
{
POSITION: [18,8,1,0,-1.385,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,2.769,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,-2.769,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,315,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,45,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [5,12,1.2,8,0,255,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,105,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [5,12,1.2,8,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [8.076923076923077,11.04,1.2,8,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.drone, g.over]),
TYPE: exports.drone
}, }, 
{
POSITION: [29.077,7.36,1,0,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [2.769,8.64,1,27.692,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [2.769,8.64,1,30.462,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [2.769,8.64,1,33.231,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
], };
exports.FTBToArras2 = {
PARENT: [exports.genericTank],
LABEL: "PLACEHOLDER",
SIZE: 20,
SHAPE: 0,
GUNS: [
{
POSITION: [18,8,1,0,0,180,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,345,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,15,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,270,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [18,8,1,0,0,90,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [8.308,9.28,1,19.385,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [8.308,9.28,1,19.385,0,345,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [8.308,9.28,1,19.385,0,15,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [8.308,9.28,1,19.385,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [16.615,9.28,1,0,0,135,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [16.615,9.28,1,0,0,225,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [24.923,9.28,1,0,0,210,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [24.923,9.28,1,0,0,150,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [5.538,12.16,1,22.154,0,315,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [5.538,12.16,1,22.154,0,45,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [5.538,12.16,1,22.154,0,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [22.154,12.16,1,0,0,315,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [22.154,12.16,1,0,0,45,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [19.385,12.16,1,0,0,315,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [19.385,12.16,1,0,0,45,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [19.385,6.4,1,0,-4.154,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
{
POSITION: [19.385,6.4,1,0,4.154,0,0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([g.basic]),
TYPE: exports.bullet
}, }, 
], };
exports.techno = {
    PARENT: [exports.genericTank],
    LABEL: "Techno",
    SIZE: 12,
    SHAPE: 0,
    MAX_CHILDREN: 8,
    GUNS: [{
            POSITION: [22.154, 3.2, 1, 0, 8.308, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, 8.308, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [22.154, 3.2, 1, 0, -8.308, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, -8.308, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, -8.308, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, 8.308, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, 8.308, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, -8.308, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, -8.308, 0, 1.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 21.6, 8.308, 0, 1.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 16.615, 0, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 15.231, 2.769, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 15.231, -2.769, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 13.846, -5.538, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, 1, 13.846, 5.538, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [4.154, 4.8, -1, 13.846, 0, 0, 1.75],
        },
        {
            POSITION: [0.6923333333333332, 4.8, 1.3, 4.5316363636363635, 0, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.machgun]),
                TYPE: exports.trap
            },
        },
        {
            POSITION: [13.846, 8, 1, 0, 0, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [2.307692307692308, 7.199999999999999, 1.2, 8, -8.308, 285, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone
            },
        },
        {
            POSITION: [2.307692307692308, 7.199999999999999, 1.2, 8, 8.308, 75, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone
            },
        },
        {
            POSITION: [9.138, 1.6, 1, 11.077, -8.308, 345, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [9.138, 1.6, 1, 11.077, 8.308, 15, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
        {
            POSITION: [9.138, 1.6, 1, 2.769, 0, 0, 1.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet
            },
        },
    ],
};
exports.sword = {
    PARENT: [exports.genericTank],
    LABEL: 'Swordsman',
    BODY: {
        ACCELERATION: base.ACCEL * 1.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 4, -4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.assass]),
            TYPE: exports.blade,
        },
    }, ],
};
exports.sabre = {
    PARENT: [exports.genericTank],
    LABEL: 'Sabre',
    BODY: {
        ACCELERATION: base.ACCEL * 1.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 4, -4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.fast, g.halfrange, g.halfrange, g.morereload, g.morereload, g.fast, g.morereload, g.morereload, g.fast, g.halfrange]),
            TYPE: exports.blade,
        },
    }, {
              POSITION: [3, 17, 1, 12, 0, 180, 0, ],

    }, ],
};
exports.joust = {
    PARENT: [exports.genericTank],
    LABEL: 'Jouster',
    BODY: {
        ACCELERATION: base.ACCEL * 2.1,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 3, -4, 0, 0, 28, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.assass]),
            TYPE: exports.bullet,
        }, 
    }, {
        POSITION: [24, 3, -4, 0, 0, 332, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.assass]),
            TYPE: exports.blade,
        },
    }, ],
};
exports.dag = {
    PARENT: [exports.genericTank],
    LABEL: 'Daggershot',
    BODY: {
        ACCELERATION: base.ACCEL * 1.8,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 4, -4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.assass, g.fast, g.halfrange]),
            TYPE: exports.blade,
        },
    }, ],
};
exports.hevy = {
    PARENT: [exports.genericTank],
    LABEL: 'Heavy Sniper',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.rifle = {
    PARENT: [exports.genericTank],
    LABEL: 'Rifle',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.rifle2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Rifle',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.op]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.bow = {
    PARENT: [exports.genericTank],
    LABEL: 'Crossbow',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10.5, 2.3, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.assass]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.blowback = {
    PARENT: [exports.genericTank],
    LABEL: 'Blowback',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.325,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
         POSITION: [16, 13.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.morereload]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.blowback2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Blowback',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.325,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
               POSITION: [12, 17, 1, 0, 0, 0, 0, ],
    }, {
         POSITION: [16, 13.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.morereload, g.op]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.blowback3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Blowback',
    SHAPE: 4,
    COLOR: 13,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.325,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
               POSITION: [12, 17, 1, 0, 0, 0, 0, ],
    }, {
         POSITION: [16, 13.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [20, 10.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.morereload, g.op]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.mischief = {
    PARENT: [exports.genericTank],
    LABEL: 'Mischiefer',
    BODY: {
        ACCELERATION: base.ACCEL * 1.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 13.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.riflemach = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Rifle',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10.5, 1.7, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 7, 1.7, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.mach, g.gunner]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.infantry = {
    PARENT: [exports.genericTank],
    LABEL: 'Infantry',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.225,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 5, -4, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 3, -4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.fast, g.power]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.assassin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Assassin',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.heavy = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Crusher',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 10, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.carbine = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Carbine',
    BODY: {
        ACCELERATION: base.ACCEL * 0.9,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [4, 10.5, 1, 17, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.power]),
            TYPE: exports.bullet,
        },
    }, {
                    POSITION: [4, 10.5, 1, 11, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.power]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.sentinel = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Sentinel',
    SHAPE: 4,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [5, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 8,
            SHOOT_SETTINGS: combineStats([ g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.assassin2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Generic Entity',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 4.5, 1, 0, 4.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
      POSITION: [27, 4.5, 1, 0, -4.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 4.5, -1.6, 8, 4.5, 0, 0, ],
      }, {
        POSITION: [5, 4.5, -1.6, 8, -4.5, 0, 0, ],
    }, ],
};
exports.ranger = {
    PARENT: [exports.genericTank],
    LABEL: 'Ranger',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.5,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
};
exports.autoass = makeAuto(exports.assassin, "Auto-Assassin");

exports.hunter = {
    PARENT: [exports.genericTank],
    LABEL: 'Hunter',
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.preda = {
    PARENT: [exports.genericTank],
    LABEL: 'Predator',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.predax = {
    PARENT: [exports.genericTank],
    LABEL: 'Predator',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
               POSITION: [30, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
               POSITION: [27, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
     
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.blowback4 = {
    PARENT: [exports.genericTank],
    LABEL: 'Predator',
    SHAPE: 4,
    COLOR: 13,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
               POSITION: [30, 2, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
               POSITION: [27, 4, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
     
        POSITION: [21, 12, 1, 0, 0, 0, 0.15, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 16, 1, 0, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.poach = makeHybrid(exports.hunter, 'Poacher');
exports.sidewind = {
    PARENT: [exports.genericTank],
    LABEL: 'Sidewinder',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 11, -0.5, 14, 0, 0, 0, ],
    }, {
        POSITION: [21, 12, -1.1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: exports.snake,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.rocketeer = {
    PARENT: [exports.genericTank],
    LABEL: 'Rocketeer',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 18.7, -0.5, 14, 0, 0, 0, ],
    }, {
        POSITION: [19, 15, -1.3, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, g.mach]),
            TYPE: exports.rocket,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.director = {
    PARENT: [exports.genericTank],
    LABEL: 'Droner',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.manage = {
    PARENT: [exports.genericTank],
    LABEL: 'Manager',
    INVISIBLE: [0.08, 0.05],
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.fake = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory',
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    SHAPE: 4,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.minianni,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.master = {
    PARENT: [exports.genericTank],
    LABEL: '',
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.15,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [16, 1, 0, 0, 0, 0],
        TYPE: exports.masterGun,
    }, {
        POSITION: [16, 1, 0, 120, 0, 0],
        TYPE: [exports.masterGun, {
            INDEPENDENT: true,
        }],
    }, {
        POSITION: [16, 1, 0, 240, 0, 0],
        TYPE: [exports.masterGun, {
            INDEPENDENT: true,
        }],
    }, ],
};

exports.overseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Overseer',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.hexaseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Hexaseer',
    SHAPE: 6,
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.dronehex,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.dronehex,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overlord = {
    PARENT: [exports.genericTank],
    LABEL: 'Overlord',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overfall = {
    PARENT: [exports.genericTank],
    LABEL: 'Fallen Overlord',
    DANGER: 7,
    SIZE: 20,
    COLOR: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 3.75,
        SPEED: base.SPEED * 2.8,
        FOV: base.FOV * 3.1,
    },
    MAX_CHILDREN: 12,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.spaceship = {
    PARENT: [exports.genericTank],
    LABEL: 'Spaceship',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    SHAPE: 8,
    SIZE: 28,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        HEALTH: base.HEALTH * 4,
    },
    MAX_CHILDREN: 32,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 7, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.spaceshiplite = {
    PARENT: [exports.genericTank],
    LABEL: 'Spaceship Lite',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    SHAPE: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        HEALTH: base.HEALTH * 4,
        RELOAD: base.RELOAD * 9,
    },
    MAX_CHILDREN: 24,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 7, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, -120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 7, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overlordm = {
    PARENT: [exports.genericTank],
    LABEL: 'Overlord',
    TYPE: 'minion',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        RANGE: 720,
    },
    DIE_AT_RANGE: true,
    MAX_CHILDREN: 8,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ],
};
exports.overtrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Overtrapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.overhunt = {
    PARENT: [exports.genericTank],
    LABEL: 'Overhunter',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
            TYPE: exports.bullet,
        },
    }, ],
  };
exports.oversnipe = {
    PARENT: [exports.genericTank],
    LABEL: 'Oversniper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, ],
  };
exports.banshee = {
    PARENT: [exports.genericTank],
    LABEL: '',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 120, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 240, 80, 0],
        TYPE: exports.bansheegun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 300, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    }, ]
};
exports.wob = {
    PARENT: [exports.genericTank],
    LABEL: 'Wobbler',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 60, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, -60, 80, 0],
        TYPE: exports.bansheegun,
    }, {
        POSITION: [10, 8, 0, 180, 80, 0],
        TYPE: exports.bansheegun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     8,      1,      0,      0,      0,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    },
                    }, {
                       POSITION: [  13,     8,      1,      0,      0,      120,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                                        },
                    }, {
                       POSITION: [  13,     8,      1,      0,      0,      240,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                      
                    }, },
            ],
        };
exports.rifleboss2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Riflefort',
    SHAPE: 4,
    SIZE: 50,
    COLOR: 13,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 3.8,
        FOV: base.FOV * 1.8,
    },
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 4, 6, 0, 180, 1],
        TYPE: exports.blowback2,
    }, {
        POSITION: [10, 4, -6, 0, 180, 1],
        TYPE: exports.blowback2,
    }, {
        POSITION: [10, -4, -13.5, 0, 0, 0],
        TYPE: exports.blowback3,
         }, {
                   POSITION: [10, -4, -22, 0, 0, 0],
        TYPE: exports.blowback3,
         }, {
        POSITION: [10, -4, 13.5, 0, 0, 0],
        TYPE: exports.blowback4,
                    }, {
        POSITION: [10, -4, 22, 0, 0, 0],
        TYPE: exports.blowback4,
                             }, {
        POSITION: [10, 9, 0, 180, 0, 0],
        TYPE: exports.trual,                         
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
         POSITION: [16, 12.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [20, 9.5, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [24, 6, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.morereload, g.op, g.pound2]),
            TYPE: exports.bullet,

        },
    }, ],
};
//hi
exports.defend1 = {
    PARENT: [exports.genericTank],
    LABEL: 'Defender-1',
    DANGER: 8,
    SHAPE: 3,
    COLOR: 2,
    SIZE: 25,
    BODY: {
        ACCELERATION: base.ACCEL * 2.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.5,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 6, 0, 0, 360, 1],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [7, 6, 0, 120, 360, 1],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [7, 6, 0, 240, 360, 1],
        TYPE: exports.auto3gun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1, 8, 0, 60, 0, ],

    }, {
              POSITION: [4, 11, 1.7, 13, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.block ]),
            TYPE: exports.trap,
          
        },
    }, {
      
        POSITION: [6, 11, 1, 8, 0, -60, 0, ],
        
   
    }, {
                  POSITION: [4, 11, 1.7, 13, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.block ]),
            TYPE: exports.trap,
          
        },
    }, {
        POSITION: [6, 11, 1, 8, 0, 180, 0, ],
        
    }, {
                  POSITION: [4, 11, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.block ]),
            TYPE: exports.trap,
          
        },
    
    }, ]
};

exports.testfortheyxminion = {
    PARENT: [exports.genericTank],
    LABEL: 'k',
    DANGER: 7,
    SIZE: 20,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 6, 0, 0, 80, 1],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [8, 6, 0, 120, 80, 1],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [8, 6, 0, 240, 80, 1],
        TYPE: exports.sniper3gun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 3, 1, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.nail]),
            TYPE: exports.bullet,
         
        },
    }, {
        POSITION: [7, 3, 1, 8, 6, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.nail]),
            TYPE: exports.bullet,
        
        },
    }, {
        POSITION: [7, 3, 1, 8, -6, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.nail]),
            TYPE: exports.bullet,
        
        },
    }, ]
};
exports.bansheehammer = {
    PARENT: [exports.genericTank],
    LABEL: 'Candle',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 8,
        SPEED: base.SPEED * 8,
        FOV: base.FOV * 1.1,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.candl]),
            TYPE: exports.bullet,
            AUTOFIRE: false,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.candl]),
            TYPE: exports.bullet,
            AUTOFIRE: false,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ]
};
exports.autoover = makeAuto(exports.overseer, "");
exports.overgunner = {
    PARENT: [exports.genericTank],
    LABEL: 'Overgunner',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, ],
};
exports.overcruise = {
    PARENT: [exports.genericTank],
    LABEL: 'Overcruiser',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 125, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};

function makeSwarmSpawner(guntype) {
    return {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['nearestDifferentMaster'],
        COLOR: 16,
        AI: {
            NO_LEAD: true,
            SKYNET: true,
            FULL_VIEW: true,
        },
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 15, 0.6, 14, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: guntype,
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }],
    };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
    PARENT: [exports.genericTank],
    LABEL: 'Cruiser',
    DANGER: 6,
    FACING_TYPE: 'locksFacing',
    STAT_NAMES: statnames.swarm,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.battleship = {//smock weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    PARENT: [exports.genericTank],
    LABEL: 'Battleship',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCEL,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, ],
};
exports.solidago = {
    PARENT: [exports.genericTank],
    LABEL: 'Solidago',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCEL,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 4, 100, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 100, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
              POSITION: [7, 7.5, 0.6, 7, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 4, -100, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -4, -100, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Guided'
        },
    }, ],
};
exports.carrier = {
    PARENT: [exports.genericTank],
    LABEL: 'Carrier',
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }],
};

exports.ci6 = {
                PARENT: [exports.genericTank],
                LABEL: 'Hexadonaterauzer',
                
                SHAPE: 4,
                SIZE: 20,
                STAT_NAMES: statnames.swarm,
                FACING_TYPE: 'locksFacing',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.3,
                },
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  10,     8,      0,      0,      0, 0], 
                        TYPE: exports.ranger,
                            }, {
                    POSITION: [  10,     8,      0,     0,     0, 0], 
                        TYPE: exports.ranger,
                            }, {
                    POSITION: [  10,     8,      0,     0,     0, 0], 
                        TYPE: exports.ranger,
                            },
                ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   8,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   8,    7.5,    0.6,     7,      2,      40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [   8,    7.5,    0.6,     7,     -2,     -40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }
                ],
            };
exports.it8 = { 
            PARENT: [exports.genericTank],
            LABEL: 'IT-8',
            SHAPE: 3,
            DANGER: 6,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  24,     15,      0,      60,     0, 0], 
                    TYPE: exports.ci6,
                        }, {
                POSITION: [  24,     15,      0,     -60,    0, 0], 
                    TYPE: exports.ci6,
                        }, {
                POSITION: [  24,     15,      0,     -180,    0, 0], 
                    TYPE: exports.ci6,
                        },
            ],
        };
exports.omegaturret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  18,    18,      1,      0,      0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    18,     1.2,     18,     0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                            TYPE: exports.block,
                        }, }, 
                ],
            };

exports.autocruiser = makeAuto(exports.cruiser, "");
exports.fortress = {
    PARENT: [exports.genericTank],
    LABEL: 'Fortress', //'Palisade',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.swarm, {
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 60, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [14, 9, 1, 0, 0, 300, 0, ],
    }, {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.underseer = {
    PARENT: [exports.genericTank],
    LABEL: 'Underseer',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, ],
};
exports.necromancer = {
    PARENT: [exports.genericTank],
    LABEL: 'Necromancer',
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    SHAPE: 4,
    FACING_TYPE: 'autospin',
    MAX_CHILDREN: 14,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.sunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.autosunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
            TYPE: exports.autosunchip,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.necro,
            LABEL: 'Guard',
        },
    }, ],
};

exports.lilfact = {
    PARENT: [exports.genericTank],
    LABEL: '',
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCEL * 0.5,
        FOV: 1.1,
    },
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [1, 12, 1, 15, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0, ],
    }],
};
exports.factory = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.deviser = {
    PARENT: [exports.genericTank],
    LABEL: 'Deviser',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 1,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.fact2 = {
    PARENT: [exports.genericTank],
    LABEL: 'TESTBED',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 9,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.overlordm,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.testbedm,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};

exports.machine = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Gun',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.machinetwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Twin Machine',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 7, 1.4, 7, 5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
            POSITION: [12, 7, 1.4, 7, -5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.autotwinchine = makeAuto(exports.machinetwin);

exports.machinetrip = {
    PARENT: [exports.genericTank],
    LABEL: 'Triple Machine',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 7, 1.4, 7, 6, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
            POSITION: [12, 7, 1.4, 7, -6, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, {
            POSITION: [14, 7, 1.4, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.spray = {
    PARENT: [exports.genericTank],
    LABEL: 'Sprayer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [23, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
            TYPE: exports.bullet,
        },
    }, ],
};

exports.mini = {
    PARENT: [exports.genericTank],
    LABEL: 'Minigun',
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hot = {
    PARENT: [exports.genericTank],
    LABEL: 'Hot Shot',
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 11, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 11, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 11, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.stream = {
    PARENT: [exports.genericTank],
    LABEL: 'Streamliner',
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 8, 1, 0, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.ak47 = {
    PARENT: [exports.genericTank],
    LABEL: 'AK-47',
    SHAPE: 4,
    DANGER: 9,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 2, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 2, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 2, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 8, 1, 0, 2, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
                  },
    }, {
              POSITION: [30, 5, 1, 0, 3, 0, 0, ],

    }, {
                    POSITION: [30, 6, 1.8, 0, 0, 180, 0, ],

    }, {
                          POSITION: [30, 6, 1, 0, -2, 180, 0, ],

    }, {
                                POSITION: [15, 6, 1, 8, 0, 310, 0, ],

    }, {
                                      POSITION: [15, 6, 1, 8, 0, 240, 0, ],

    }, {
        POSITION: [25, 10, 1, 0, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.stream2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Streamliner',
    SHAPE: 4,
    COLOR: 13,
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [23, 8, 1, 0, 0, 0, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 8, 1, 0, 0, 0, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 8, 1, 0, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [17, 8, 1, 0, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hybridmini = makeHybrid(exports.mini, "");

exports.hybridrifle = makeHybrid(exports.rifle, "Marksman");

exports.minitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.3, 22, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 8, 1.3, 18, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 8, 1.3, 14, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};

exports.pound = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    LABEL: 'Pounder',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.pound2 = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    LABEL: 'negative recoil test',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound2]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.pistol = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    LABEL: 'Pistol',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.power]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [5, 18, 1, 15, 0, 0, 0, ],
       
        
    }, ],
};
exports.hybridpistol = makeHybrid(exports.pistol, "Fastshot");
exports.steam = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    LABEL: 'Steamroller',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.power, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [5, 20, 1, 16, 0, 0, 0, ],
       
        
    }, ],
};
exports.destroy = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
    },
    LABEL: 'Destroyer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexbrid = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    SHAPE: 6,
    COLOR: 21,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
    },
    LABEL: 'Memer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [21, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexbrid2 = makeAuto(exports.hexbrid, 'Memer');
exports.ambush = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    INVISIBLE: [0.08, 0.05],
    BODY: {
        ACCELERATION: base.ACCEL * 0.73,
    },
    LABEL: 'Ambusher',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, -1.3, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.lessreload]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.anni = {
    PARENT: [exports.genericTank],
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
    },
    LABEL: 'Annihilator',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hiveshooter = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.speed * 0.8,
    },
    LABEL: '',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 14, -1.2, 5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
            TYPE: exports.hive,
        },
    }, {
        POSITION: [15, 12, 1, 5, 0, 0, 0, ],
    }],
};
exports.hybrid = makeHybrid(exports.destroy, 'Hybrid');
exports.hybrid5 = makeHybrid(exports.anni, 'annibrid');
exports.shotgun2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Shotgun',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.bust = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Buster',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [2, 14, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};
exports.m2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Meister',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
    },
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [10, 10, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload,

                g.morespeed
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, -3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [1, 2, 1, 13, -2, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [15, 14, 1, 6, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.doublereload, g.doublereload,

                g.fake
            ]),
            TYPE: exports.casing,
        },
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0, ],
    }],
};

exports.builder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Builder',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
  exports.trapper = {
            PARENT: [exports.genericTank],
            LABEL: 'Trapper',
            STAT_NAMES: statnames.generic,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     8,      1,      0,      0,      0,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        };
  exports.trapper3 = {
            PARENT: [exports.genericTank],
            LABEL: 'Tri-Trapper',
            STAT_NAMES: statnames.generic,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     8,      1,      0,      0,      0,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    },
                    }, {
                       POSITION: [  13,     8,      1,      0,      0,      120,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                                        },
                    }, {
                       POSITION: [  13,     8,      1,      0,      0,      240,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,      240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                      
                    }, },
            ],
        };
  exports.megatrap = {
            PARENT: [exports.genericTank],
            LABEL: 'Mega Trapper',
            STAT_NAMES: statnames.generic,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     10,      1,      0,      0,      0,     0,   ],
                    }, {
                POSITION: [   4,     10,     1.7,    13,      0,      0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.pound, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        };
  exports.megatrap3 = {
            PARENT: [exports.genericTank],
            LABEL: 'Tri-Mega',
            STAT_NAMES: statnames.generic,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     10,      1,      0,      0,      0,     0,   ],
                    }, {
                POSITION: [   4,     10,     1.7,    13,      0,      0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.pound, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    },
                    }, {
                                      POSITION: [  13,     10,      1,      0,      0,      120,     0,   ],
                    }, {
                POSITION: [   4,     10,     1.7,    13,      0,      120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.pound, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    },
                    }, {
                                      POSITION: [  13,     10,      1,      0,      0,      240,     0,   ],
                    }, {
                POSITION: [   4,     10,     1.7,    13,      0,      240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.pound, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        };
  exports.gigatrap = {
            PARENT: [exports.genericTank],
            LABEL: 'Giga Trapper',
            STAT_NAMES: statnames.generic,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     12,      1,      0,      0,      0,     0,   ],
                    }, {
                POSITION: [   4,     12,     1.7,    13,      0,      0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.destroy, g.spam]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        };
exports.buildermach = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Machine Builder',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 10, 1.7, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 17.999, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mach, g.gunner]),
            TYPE: exports.block,
        },
    }, ],
};
exports.snipebuild = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Snipebuild',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.20,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.1, 22, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.assass]),
            TYPE: exports.block,
        },
    }, ],
};
exports.twintrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Twin Builder',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8.5, 1, 0, 5.5, 0, 0, ],
    }, {
        POSITION: [2, 8.5, 1.1, 18, 5.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.spam, g.twin]),
            TYPE: exports.block,
        },
    }, {
              POSITION: [18, 8.5, 1, 0, -5.5, 0, 0, ],
    }, {
        POSITION: [2, 8.5, 1.1, 18, -5.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.spam, g.twin]),
            TYPE: exports.block,
        },
    }, ],
};
exports.builder2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Rock Climber',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 20, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.doublereload]),
            TYPE: exports.obstacle,
        },
    }, ],
};
exports.pent2 = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'pentrap spawner',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 13, -1, -4, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pentatrap,
        },
    }, ],
};
exports.engineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Engineer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 9, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 12, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 12, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pillbox,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.twingeneer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Twingeneer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 4, 1, 10.5, 5.5, 0, 0, ],
    }, {
        POSITION: [3, 7, 1, 15.5, 5.5, 0, 0, ],
    }, {
        POSITION: [2, 7, 1.3, 18, 5.5, 0, 0, ],
        PROPERTIES: {
            
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 12, 1, 8, -5.5, 0, 0, ]
    }, {
              POSITION: [5, 4, 1, 10.5, -5.5, 0, 0, ],
    }, {
        POSITION: [3, 7, 1, 15.5, -5.5, 0, 0, ],
    }, {
        POSITION: [2, 7, 1.3, 18, -5.5, 0, 0, ],
        PROPERTIES: {
            
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pillbox,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 12, 1, 8, -5.5, 0, 0, ]
    }],
};
exports.engineer2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Engineer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [3, 14, 1, 15.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            MAX_CHILDREN: 9,
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.pillbox2,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ]
    }],
};
exports.construct = {
    PARENT: [exports.genericTank],
    LABEL: 'Constructor',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: exports.block,
        },
    }, ],
};
exports.minelayer = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Trapper',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            TYPE: [exports.block, {INVISIBLE:[0.8, 0.3],}],
        },
    }, ],
};
exports.construct2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Anomaly Trapper',
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.7,
        FOV: base.FOV * 3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.huge]),
            TYPE: exports.block,
        },
    }, ],
};
exports.autobuilder = makeAuto(exports.builder);
exports.autoex = makeAuto(exports.baseProtector);
exports.conq = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 14, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1.1, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.block,
        },
    }, ],
};
exports.bentboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Boomer',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 10, 1, 8, -2, -35, 0, ],
    }, {
        POSITION: [8, 10, 1, 8, 2, 35, 0, ],
    }, {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
        POSITION: [2, 10, 1.3, 16, 2, 35, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, ],
};
exports.ritoparn = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Ritoparn',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 10, 1, 8, -2, -35, 0, ],
    }, {
        POSITION: [8, 10, 1, 8, 2, 35, 0, ],
    }, {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
        POSITION: [2, 10, 1.3, 16, 2, 35, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
            TYPE: exports.boomerang,
        },
    }, {
              POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang,
        },    }, {
        POSITION: [7, 15.5, 1.1, 7, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: [exports.bentboomer, {
                CONTROLLERS: [
                    'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
                ],
                SPEED: 3,
                SIZE: 28,
                LEVEL: 60,
                CAN_BE_ON_LEADERBOARD: false,
            }],
        MAX_CHILDREN: 4,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.boomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: 'Boomer',
    STAT_NAMES: statnames.trap,
    FACING_TYPE: 'locksFacing',
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 10, 1, 14, 0, 0, 0, ],
    }, {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0, ],
    }, {
        //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
        //    }, {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
            TYPE: exports.boomerang,
        },
    }, ],
};

exports.quadtrapper = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, 0, 45, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 45, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.op]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 135, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 135, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.op]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 225, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 225, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.op]),
            TYPE: exports.block,
        },
    }, {
        POSITION: [14, 6, 1, 0, 0, 315, 0, ],
    }, {
        POSITION: [2, 6, 1.1, 14, 0, 315, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.op]),
            TYPE: exports.block,
        },
    }, ],
};

exports.artillery = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Artillery',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.cannon = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'Cannoneer',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 1, 0, -6, 0, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 0, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.stalin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: 'idk',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17, 3, 0.7, 0, -6, -7, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.missile,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
            TYPE: exports.missile,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morespeed, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.mortar = {
    PARENT: [exports.genericTank],
    LABEL: 'Mortar',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 3, 1, 0, -8, -7, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [13, 3, 1, 0, 8, 7, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, -6, -7, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [17, 3, 1, 0, 6, 7, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
            TYPE: exports.bullet,
            LABEL: 'Secondary',
        },
    }, {
        POSITION: [19, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
            TYPE: exports.bullet,
            LABEL: 'Heavy',
        },
    }, ],
};
exports.skimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.missile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.miner = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Minelayer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, -0.5, 9, 0, 0, 0, ],
    }, {
            POSITION: [6, 12, 1.2, 15, 0, 0, 0, ],
    }, {
        POSITION: [17, 14, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.pathmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.manip = {
    PARENT: [exports.genericTank],
    CONTROLLERS: ['nearestDifferentMaster'],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.morespeed, g.doublereload, g.doublereload]),
            TYPE: [exports.missile, {
                TYPE: 'minion',
                CONTROLLERS: ['nearestDifferentMaster'],
            }],
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.sunskimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    LABEL: 'Skimmer',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 5, -0.5, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 45, -0.4, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.sunmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};

exports.skimmer2 = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    SHAPE: -4,
    LABEL: 'TESTBED',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.2, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: exports.testmissile,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.spar = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    SHAPE: 0,
    LABEL: 'Sparker',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.2, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.norng]),
            TYPE: exports.testmissile2,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
exports.spread = {
    PARENT: [exports.genericTank],
    LABEL: 'Spreadshot',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 10, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
        },
    }, ],
};
exports.spreadt = {
    PARENT: [exports.genericTank],
    TYPE: 'minion',
    LABEL: 'Spreadshot minion',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
        RANGE: 720,
    },
    DIE_AT_RANGE: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Spread',
        },
    }, {
        POSITION: [13, 10, 1.3, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
            TYPE: exports.bullet,
            LABEL: 'Pounder',
        },
    }, ],
};


exports.flank = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Guard',
    
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.quad = {
    PARENT: [exports.genericTank],
    LABEL: 'Quad Tank',
    
    BODY: {
        SPEED: base.SPEED * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
                  },
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flank1 = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Guard',
    COLOR: 1,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flank21 = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Guard',
    COLOR: 2,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.flank3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Flank Guard',
    COLOR: 13,
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.hexa = {
    PARENT: [exports.genericTank],
    LABEL: 'Hexa Tank',
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.octo = {
    PARENT: [exports.genericTank],
    LABEL: 'Octo Tank',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 45, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 135, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 225, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 315, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.octoc = {
    PARENT: [exports.genericTank],
    LABEL: 'Octo Tank',
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 90, 0.2, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 180, 0.4, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 12, 1, 0, 0, 270, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.missile,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 45, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 135, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 225, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 315, 0.7, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.heptatrap = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Hepta-Trapper',
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, a, 4 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, a, 4 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, ],
    };
})();
exports.enneatrap = (() => {
    let a = 360 / 9,
        d = 1 / 9;
    return {
        PARENT: [exports.genericTank],
        LABEL: 'Ennea-Trapper',
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 7, 1, 0, 0, 0, 0, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, a, 4 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, a, 4 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 6 * a, 7 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 6 * a, 7 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 7 * a, 8 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 7 * a, 8 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [15, 7, 1, 0, 0, 8 * a, 9 * d, ],
        }, {
            POSITION: [3, 7, 1.7, 15, 0, 8 * a, 9 * d, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, ],
    };
})();
exports.hexatrap = makeAuto({
    PARENT: [exports.genericTank],
    LABEL: 'Hexa-Trapper',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
}, 'Hexa-Trapper');
exports.shexatrap = makeAuto({
    PARENT: [exports.genericTank],
    LABEL: 'Hexa-Trapper',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5, ],
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, 30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, 90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, 150, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, -30, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, -90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 8, 0, -150, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
            LABEL: 'Autonomous',
        },
    }, ],
}, 'Hexa-Swarm-Trapper');

exports.tri = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Angle',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.slam = {
    PARENT: [exports.genericTank],
    LABEL: 'Slammer',
    BODY: {
        HEALTH: base.HEALTH * 0.9,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 12, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil, g.pound]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 12, 1, 0, 0, 144, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 12, 1, 0, 0, 216, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.pound]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.glide = {
    PARENT: [exports.genericTank],
    LABEL: 'Glider',
    BODY: {
        HEALTH: base.HEALTH * 1.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [22, 10, 1.8, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.mach]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,

        },
    }, ],
};
exports.ski = {
    PARENT: [exports.genericTank],
    LABEL: 'Skirmisher',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 3, 1, 0, 3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
      POSITION: [18, 3, 1, 0, -3.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.ski2 = makeAuto(exports.ski, 'Skirmisher', { type: exports.autoSmasherTurret, size: 11, });

exports.thisisforenig = {
    PARENT: [exports.genericTank],
    LABEL: 'Surfer',
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 6, 0.6, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.swarm,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 6, 0.6, 0, 0, 180.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
            TYPE: exports.autoswarm,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.booster = {
    PARENT: [exports.genericTank],
    LABEL: 'Booster',
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.fallenboost = {
    PARENT: [exports.genericTank],
    LABEL: 'Fallen Booster',
    SIZE: 20,
    COLOR: 6,
    BODY: {
        HEALTH: base.HEALTH * 5.6,
        SHIELD: base.SHIELD * 5.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9.5,
        ACCEL: base.ACCEL * 10
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.marine = {
    PARENT: [exports.genericTank],
    LABEL: 'Marine',
    INVISIBLE: [0.08, 0.03],
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 105, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, -105, 0.25, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.fighter = {
    PARENT: [exports.genericTank],
    LABEL: 'Fighter',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [16, 8, 1, 0, -1, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Side',
        },
    }, {
        POSITION: [16, 8, 1, 0, 1, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Side',
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.brutalizer = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, -1, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [7, 7.5, 0.6, 7, 1, -90, 9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: [exports.autoswarm],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.bomber = {
    PARENT: [exports.genericTank],
    LABEL: 'Bomber',
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 130, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: 'Wing',
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 230, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
            TYPE: exports.bullet,
            LABEL: 'Wing',
        },
    }, {
        POSITION: [14, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.5, 14, 0, 180, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
    SPEED: base.SPEED,
};
exports.falcon = {
    PARENT: [exports.genericTank],
    LABEL: 'Falcon',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: 'Assassin',
            ALT_FIRE: true,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.nerfgun]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.falcon2 = {
    PARENT: [exports.genericTank],
    LABEL: 'gud Falcon',
    DANGER: 7,
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
            TYPE: exports.bullet,
            LABEL: 'Assassin',
            ALT_FIRE: true,
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0, ],
    }, {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, -0, -150, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};

exports.auto3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-3',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun,
    }, ],
};
exports.warboat = {
    PARENT: [exports.genericTank],
    LABEL: 'Warboat',
    DANGER: 69,
    COLOR: 13,
    SHAPE: 4,
    SIZE: 50,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 15, 0, 0, 0, 0],
        TYPE: exports.bosstri,
    }, {
        POSITION: [8, 8, 0, 270, 360, 1],
        TYPE: exports.booster,
    }, {
        POSITION: [8, 8, 0, 90, 360, 1],
        TYPE: exports.booster,
          }, {
        POSITION: [20, 16, 0, 180, 0, 0],
        TYPE: exports.bosssquare,
                      }, {
        POSITION: [5, 16, 5, 180, 360, 1],
        TYPE: exports.battery,
                                              }, {
        POSITION: [5, 16, -5, 180, 360, 1],
        TYPE: exports.battery,
    }, ],
};
exports.eliminator = {
    PARENT: [exports.genericTank],
    LABEL: 'Eliminator',
    DANGER: 10,
    COLOR: 13,
    SIZE: 50,
    SHAPE: 4,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 16, 0, 0, 0, 0],
        TYPE: exports.bosssquare,
    }, {
              POSITION: [10, 30, 0, 0, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                    POSITION: [10, 39, 0, 0, 0, 0],
        TYPE: exports.bosstri,
    }, {
                          POSITION: [8, 35, 10, 0, 0, 0],
        TYPE: exports.anni,
    }, {
                    POSITION: [8, 35, -10, 0, 0, 0],
        TYPE: exports.anni,
    }, {
      
                    POSITION: [10, 30, 10, 0, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                    POSITION: [10, 30, -10, 0, 0, 0],
        TYPE: exports.bosssquare,
    }, {
        POSITION: [20, 16, 0, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
              POSITION: [10, 30, 0, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                    POSITION: [10, 30, 10, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                    POSITION: [10, 44, -10, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                          POSITION: [10, 44, 20, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                    POSITION: [10, 30, -20, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                          POSITION: [10, 30, 20, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {
                    POSITION: [10, 30, -20, 90, 0, 0],
        TYPE: exports.bosssquare,
    }, {

        POSITION: [20, 16, 0, 180, 0, 0],
        TYPE: exports.bosssquare,
          }, {
                    POSITION: [10, 30, 0, 180, 0, 0],
        TYPE: exports.bosssquare,
          }, {
                            POSITION: [10, 30, 10, 180, 0, 0],
        TYPE: exports.bosssquare,
          }, {
                            POSITION: [10, 30, -10, 180, 0, 0],
        TYPE: exports.bosssquare,
          }, {
        POSITION: [20, 16, 0, 270, 0, 0],
        TYPE: exports.bosssquare,
                      }, {
        POSITION: [10, 30, 0, 270, 0, 0],
        TYPE: exports.bosssquare,
                                              }, {
        POSITION: [10, 30, 10, 270, 0, 0],
        TYPE: exports.bosssquare,
                                                                      }, {
        POSITION: [10, 30, -10, 270, 0, 0],
        TYPE: exports.bosssquare,
                                                                                     }, {
        POSITION: [10, 30, 20, 270, 0, 0],
        TYPE: exports.bosssquare,
                                                                      }, {
        POSITION: [10, 30, -20, 270, 0, 0],
        TYPE: exports.bosssquare,
                                                                      
    }, ],
};
exports.hex3 = {
    PARENT: [exports.genericTank],
    LABEL: 'GP-1',
    SIZE: 30,
    SHAPE: 6,
    COLOR: 21,
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 16, 0, 0, 190, 0],
        TYPE: exports.hexbrid2,
    }, {
        POSITION: [14, 16, 0, 120, 190, 0],
        TYPE: exports.hexbrid2,
    }, {
        POSITION: [14, 16, 0, 240, 190, 0],
        TYPE: exports.hexbrid2,
          }, {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.hybrid,
    }, ],
};
exports.hex4 = {
  SIZE: 45,
    PARENT: [exports.genericTank],
    LABEL: 'GP-2',
   SHAPE: 6,
    COLOR: 21,
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 16, 0, 0, 190, 0],
        TYPE: exports.hexbrid2,
    }, {
        POSITION: [14, 16, 0, 300, 190, 0],
        TYPE: exports.hexbrid2,
    }, {
        POSITION: [14, 16, 0, 60, 190, 0],
        TYPE: exports.hexbrid2,
          }, {
            POSITION: [14, 16, 0, 120, 190, 0],
        TYPE: exports.hexbrid2,
    }, {
        POSITION: [14, 16, 0, 180, 190, 0],
        TYPE: exports.hexbrid2,
    }, {
        POSITION: [14, 16, 0, 240, 190, 0],
        TYPE: exports.hexbrid2,
          }, {
        POSITION: [12, 0, 0, 0, 190, 1],
        TYPE: exports.hybrid5,
    }, ],
};
exports.omegatwin = {
    PARENT: [exports.genericTank],
    LABEL: 'Omega Twin',
    DANGER: 69,
    SHAPE: 3,
    COLOR: 19,
    SIZE: 40,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 60, 0, 0],
        TYPE: exports.omegapart,
    }, {
        POSITION: [12, 8, 0, -60, 0, 0],
        TYPE: exports.omegapart,
    }, {
        POSITION: [12, 8, 0, 180, 0, 0],
        TYPE: exports.omegapart,
          }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.tripletwin,
    }, ],
};
exports.elite3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Elite Machine',
    SHAPE: 4,
    DANGER: 6,
    COLOR: 5,
    SIZE: 20,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 0, 0],
        TYPE: exports.elitepart,
    }, {
        POSITION: [11, 8, 0, 90, 0, 0],
        TYPE: exports.elitepart,
    }, {
        POSITION: [11, 8, 0, 180, 0, 0],
        TYPE: exports.elitepart,
          }, {
        POSITION: [11, 8, 0, 270, 0, 0],
        TYPE: exports.elitepart,
                      }, {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.anni3gun,
    }, ],
};
exports.anni3 = {
    PARENT: [exports.genericTank],
    LABEL: 'A-3',
    DANGER: 6,
    SHAPE: 4,
    COLOR: 13,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 180, 1],
        TYPE: exports.anni3gun,
  
    }, ],
};
exports.rifleboss = {
    PARENT: [exports.genericTank],
    LABEL: 'Riflefort',
    DANGER: 10,
    SHAPE: 4,
    SIZE: 40,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 4, 6, 0, 180, 1],
        TYPE: exports.blowback2,
    }, {
        POSITION: [10, 4, -6, 0, 180, 1],
        TYPE: exports.blowback2,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.blowback2,
    }, ],
};

exports.terrepart = {
    PARENT: [exports.genericTank],
    LABEL: 'Terrereium Turret',
    
    SHAPE: 3,
    COLOR: 13,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 0, 0, 0, 180, 1],
        TYPE: exports.focus,

    }, ],
};
exports.terrepart2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Terrereium Turret',
    
    SHAPE: 3,
    COLOR: 13,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 0, 0, 0, 180, 1],
        TYPE: exports.focus,
    }, {
            POSITION: [18, 17, 0, 60, 0, 1],
        TYPE: exports.terrepart,
    }, {
            POSITION: [18, 17, 0, -60, 0, 1],
        TYPE: exports.terrepart,
    }, ],
};
exports.kpart = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-3',
    SHAPE: 4,
    COLOR: 0,
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 8, 0, 13, 0, 0],
        TYPE: exports.mortar,
    }, {
         POSITION: [5, 8, 0, -13, 0, 0],
        TYPE: exports.mortar,
    }, ],
};
exports.kboss = {
    PARENT: [exports.genericTank],
    LABEL: 'Terrorrizer',
    SHAPE: 6,
    DANGER: 6,
    SIZE: 36,
    COLOR: 0,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 0, 0],
        TYPE: exports.kpart,
    }, {
            POSITION: [11, 8, 0, 60, 0, 0],
        TYPE: exports.kpart,
    }, {
        POSITION: [11, 8, 0, 120, 0, 0],
        TYPE: exports.kpart,
    }, {
              POSITION: [11, 8, 0, 180, 0, 0],
        TYPE: exports.kpart,
    }, {
        POSITION: [11, 8, 0, 240, 0, 0],
        TYPE: exports.kpart,
          }, {
        POSITION: [11, 8, 0, 300, 0, 0],
        TYPE: exports.kpart,
    }, ],
};

exports.fidget = {
    PARENT: [exports.genericTank],
    LABEL: 'Fidget Spinner',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 16, 0, 0, 190, 0],
        TYPE: exports.genericTank,
    }, {
        POSITION: [15, 16, 0, 120, 190, 0],
        TYPE: exports.genericTank,
    }, {
           POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.spike,
    }, {
        POSITION: [15, 16, 0, 240, 190, 0],
        TYPE: exports.genericTank,
    }, ],
};
exports.smash3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Smasher-3',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody,
    }, {
        POSITION: [11, 9, 0, 0, 190, 0],
        TYPE: exports.smash,
    }, {
    
        POSITION: [11, 9, 0, 120, 190, 0],
        TYPE: exports.smash,
    }, {
        POSITION: [11, 9, 0, 240, 190, 0],
        TYPE: exports.smash,
    }, ],
};
exports.bwppart1 = {
    PARENT: [exports.genericTank],
    SHAPE: 4,
    COLOR: 13,
    LABEL: 'part 1',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.bwpgun,
 
    }, ],
};
exports.bwppart10 = {
    PARENT: [exports.genericTank],
    SHAPE: 4,
    COLOR: 13,
    LABEL: 'part 1',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.nailgun,
 
    }, ],
};
exports.bwppart2 = {
    PARENT: [exports.genericTank],
    SHAPE: 3,
    COLOR: 13,
    LABEL: 'BWP-1',
    DANGER: 6,
    SIZE: 20,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.auto3gun,
 
    }, {
      
          POSITION: [30, 21.8, 0, 180, 0, 0],
        TYPE: exports.bwppart1,
    }, ],
};
exports.bwp2 = {
    PARENT: [exports.genericTank],
    SHAPE: 3,
    COLOR: 13,
    LABEL: 'BWP-2',
    DANGER: 6,
    SIZE: 25,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.auto3gun,
 
    }, {
          POSITION: [30, 21.8, 0, 180, 0, 0],
        TYPE: exports.bwppart10,
    }, ],
};
exports.bwp3 = {
    PARENT: [exports.genericTank],
    SHAPE: 4,
    COLOR: 13,
    LABEL: 'BWP-3',
    DANGER: 6,
    SIZE: 30,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.bwpgun
 
    }, {
       POSITION: [13.7, 15, 0, 0, 0, 0],
        TYPE: exports.bwptri,
 
    }, {
            POSITION: [13.7, 33, 0, 180, 0, 0],
        TYPE: exports.bwptri,
 
    }, {
          POSITION: [20, 18, 0, 180, 0, 0],
        TYPE: exports.bwppart1,
    }, ],
};
exports.yz = {
    PARENT: [exports.genericTank],
    LABEL: 'YZ-1',
    DANGER: 6,
    COLOR: 4,
    SIZE: 25,
    SHAPE: 5,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 190, 0],
        TYPE: exports.autoSmasherTurret,
    }, {
      POSITION: [10, 8, 0, 72, 190, 0],
        TYPE: exports.autoSmasherTurret,
    }, {
      POSITION: [10, 8, 0, 144, 190, 0],
        TYPE: exports.autoSmasherTurret,
    }, {
        POSITION: [10, 8, 0, 216, 190, 0],
        TYPE: exports.autoSmasherTurret,
    }, {
        POSITION: [10, 8, 0, 288, 190, 0],
        TYPE: exports.autoSmasherTurret,
    }, ],
};
exports.yz1 = makeAuto(exports.yz, 'YZ-1', { type: exports.gungun, size: 11, });

exports.yz2 = {
    PARENT: [exports.genericTank],
    LABEL: 'YZ-2',
    DANGER: 6,
    COLOR: 4,
    SIZE: 40,
    SHAPE: 5,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
   
      POSITION: [10, 8, 0, 72, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
      POSITION: [10, 8, 0, 144, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [10, 8, 0, 216, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
 
        POSITION: [10, 8, 0, 288, 190, 0],
        TYPE: exports.bigauto4gun,
    }, ],
};
exports.yz3 = {
    PARENT: [exports.genericTank],
    LABEL: 'YZ-3',
    DANGER: 6,
    COLOR: 4,
    SIZE: 50,
    SHAPE: 5,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 0, 190, 0],
        TYPE: exports.mini,
    }, {
      POSITION: [6, 8, -4, 0, 190, 0],
        TYPE: exports.mini,
    }, {
          POSITION: [10, 8, 0, 72, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 72, 190, 0],
        TYPE: exports.mini,
    }, {
      POSITION: [6, 8, -4, 72, 190, 0],
        TYPE: exports.mini,
    }, {
          POSITION: [10, 8, 0, 144, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 144, 190, 0],
        TYPE: exports.mini,
    }, {
      POSITION: [6, 8, -4, 144, 190, 0],
        TYPE: exports.mini,
    }, {
          POSITION: [10, 8, 0, 216, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 216, 190, 0],
        TYPE: exports.mini,
    }, {
      POSITION: [6, 8, -4, 216, 190, 0],
        TYPE: exports.mini,
    }, {
          POSITION: [10, 8, 0, 288, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 288, 190, 0],
        TYPE: exports.mini,
    }, {
      POSITION: [6, 8, -4, 288, 190, 0],
        TYPE: exports.mini,
    }, ],
};
exports.yz4 = {
    PARENT: [exports.genericTank],
    LABEL: 'YZ-4',
    DANGER: 6,
    COLOR: 4,
    SIZE: 60,
    SHAPE: 5,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 0, 190, 0],
        TYPE: exports.twin,
    }, {
      POSITION: [6, 8, -4, 0, 190, 0],
        TYPE: exports.twin,
    }, {
          POSITION: [10, 8, 0, 72, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 72, 190, 0],
        TYPE: exports.twin,
    }, {
      POSITION: [6, 8, -4, 72, 190, 0],
        TYPE: exports.twin,
    }, {
          POSITION: [10, 8, 0, 144, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 144, 190, 0],
        TYPE: exports.twin,
    }, {
      POSITION: [6, 8, -4, 144, 190, 0],
        TYPE: exports.twin,
    }, {
          POSITION: [10, 8, 0, 216, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [6, 8, 4, 216, 190, 0],
        TYPE: exports.twin,
    }, {
      POSITION: [6, 8, -4, 216, 190, 0],
        TYPE: exports.twin,
    }, {
          POSITION: [10, 8, 0, 288, 190, 0],
        TYPE: exports.stream,
    }, {
   
      POSITION: [4, 8, 4, 288, 190, 0],
        TYPE: exports.twin,
    }, {
         POSITION: [4, 5, 0, 288, 190, 1],
        TYPE: exports.gungun,
    }, {
           POSITION: [4, 5, 0, 144, 190, 1],
        TYPE: exports.gungun,
    }, { 
           POSITION: [4, 5, 0, 216, 190, 1],
        TYPE: exports.gungun,
    }, {
           POSITION: [4, 5, 0, 72, 190, 1],
        TYPE: exports.gungun,
    }, {
           POSITION: [4, 5, 0, 0, 190, 1],
        TYPE: exports.gungun,
    }, {
      POSITION: [4, 8, -4, 288, 190, 0],
        TYPE: exports.twin,
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2, 13, 1, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.minionyz,
           
            MAX_CHILDREN: 2,
        },
    }, {
       POSITION: [2, 13, 1, 8, 0, 144, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.minionyz,
           
            MAX_CHILDREN: 2,
        },
    }, {
       POSITION: [2, 13, 1, 8, 0, 216, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.minionyz,
           
            MAX_CHILDREN: 2,
        },
    }, {
       POSITION: [2, 13, 1, 8, 0, 288, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.minionyz,
           
            MAX_CHILDREN: 2,
        },
    }, {
        POSITION: [2, 13, 1, 6, 0, 72, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
            TYPE: exports.minionyz,
            
            MAX_CHILDREN: 2,
 
        },
    }, ]
};
exports.yz22 = makeAuto(exports.yz2, 'YZ-2', { type: exports.gungun, size: 12, });

exports.yz33 = makeAuto(exports.yz3, 'YZ-3', { type: exports.gungun, size: 12, });

exports.yz44 = makeAuto(exports.yz4, 'YZ-4', { type: exports.gungun, size: 10, });

exports.airy = {
    PARENT: [exports.genericTank],
    LABEL: 'AE-1',
    DANGER: 6,
    SIZE: 30,
    SHAPE: 4,
    COLOR: 2,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 11.5, 4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [8, 11.5, -4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.minitrap,
    }, ],
};
exports.airy2 = {
    PARENT: [exports.genericTank],
    LABEL: 'AE-3',
    DANGER: 6,
    SIZE: 35,
    SHAPE: 4,
    COLOR: 2,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 11.5, 4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [8, 11.5, -4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.minitrap,
       }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: exports.bigauto4gun,
          }, {
        POSITION: [7, 8, 4.4, 180, 190, 0],
        TYPE: exports.assassin,
          }, {
            POSITION: [7, 8, -4.4, 180, 190, 0],
        TYPE: exports.assassin,
              }, {
            POSITION: [11, 8, 0, 90, 190, 0],
        TYPE: exports.assassin2,
              }, {
                 POSITION: [11, 8, 0, 270, 190, 0],
        TYPE: exports.assassin2,
    }, ],
};
exports.airy3 = {
    PARENT: [exports.genericTank],
    LABEL: 'AE-6',
    DANGER: 6,
    SIZE: 40,
    SHAPE: 4,
    COLOR: 2,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 11.5, 4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [8, 11.5, -4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [7, 8, 3, 0, 190, 0],
        TYPE: exports.minitrap,
       }, {
          POSITION: [7, 8, -3, 0, 190, 0],
        TYPE: exports.minitrap,
       }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: exports.bigauto4gun,
          }, {
        POSITION: [7, 8, 4.4, 180, 190, 0],
        TYPE: exports.assassin,
          }, {
            POSITION: [7, 8, -4.4, 180, 190, 0],
        TYPE: exports.assassin,
              }, {
            POSITION: [7, 8, 0, 90, 0, 0],
        TYPE: exports.mini,
              }, {
                  POSITION: [7, 8, 3, 90, 0, 0],
        TYPE: exports.mini,
              }, {  POSITION: [7, 8, 6, 90, 0, 0],
        TYPE: exports.mini,
              }, {
                  POSITION: [7, 8, 0, 270, 0, 0],
        TYPE: exports.mini,
              }, {
                 POSITION: [7, 8, -3, 270, 0, 0],
        TYPE: exports.mini,
                       }, {
                 POSITION: [7, 8, -6, 270, 0, 0],
        TYPE: exports.mini,
    }, ],
};
exports.airy4 = {
    PARENT: [exports.genericTank],
    LABEL: 'AE-9',
    DANGER: 6,
    SIZE: 45,
    SHAPE: 4,
    COLOR: 2,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 11.5, 4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [8, 11.5, -4, 0, 0, 0],
        TYPE: exports.autoboata,
    }, {
        POSITION: [7, 8, 3, 0, 190, 0],
        TYPE: exports.minitrap,
       }, {
          POSITION: [7, 8, -3, 0, 190, 0],
        TYPE: exports.minitrap,
       }, { 
       
            POSITION: [7, 8, 0, 90, 0, 0],
        TYPE: exports.mini,
              }, {
                  POSITION: [7, 8, 3, 90, 0, 0],
        TYPE: exports.mini,
              }, {  POSITION: [7, 8, 6, 90, 0, 0],
        TYPE: exports.mini,
              }, {
                  POSITION: [7, 8, 0, 270, 0, 0],
        TYPE: exports.mini,
                     }, {
                  POSITION: [20, 18, 0, 180, 0, 0],
        TYPE: exports.airpart,
              }, {
                 POSITION: [7, 8, -3, 270, 0, 0],
        TYPE: exports.mini,
                       }, {
                 POSITION: [7, 8, -6, 270, 0, 0],
        TYPE: exports.mini,
    }, ],
};


exports.airy5 = {
    PARENT: [exports.genericTank],
    LABEL: 'AE-12',
    DANGER: 6,
    SIZE: 50,
    SHAPE: 4,
    COLOR: 2,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 11.5, 4, 0, 0, 0],
        TYPE: exports.stream,
    }, {
        POSITION: [8, 11.5, -4, 0, 0, 0],
        TYPE: exports.stream,
    }, {
        POSITION: [7, 8, 3, 0, 190, 0],
        TYPE: exports.minitrap,
       }, {
          POSITION: [7, 8, -3, 0, 190, 0],
        TYPE: exports.minitrap,
       }, {
            POSITION: [10, 8, 0, 180, 0, 0],
        TYPE: exports.airgun,
       }, {
               POSITION: [7, 8, 5, 180, 10, 0],
        TYPE: exports.auto3gun,
       }, {
                POSITION: [7, 8, -5, 180, 10, 0],
        TYPE: exports.auto3gun,
       }, {
                   POSITION: [7, 8, -9, 180, 10, 0],
        TYPE: exports.bigauto4gun,
       }, {
                      POSITION: [7, 8, 9, 180, 10, 0],
        TYPE: exports.bigauto4gun,
       }, {
       
     
                  POSITION: [20, 18, 0, 90, 0, 0],
        TYPE: exports.airpart2,
              }, {
                        POSITION: [20, 18, 0, 270, 0, 0],
        TYPE: exports.airpart2,
      
    }, ],
};
exports.elitesnipe = {
    PARENT: [exports.genericTank],
    LABEL: 'Elite Sniper',
    SKILL: [2, 7, 5, 8, 9, 2, 4, 6, 5, 0],
    DANGER: 6,
    SIZE: 20,
    COLOR: 5,
    SHAPE: 3,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 60, 190, 0],
        TYPE: exports.assassin2,
    }, {
        POSITION: [12, 8, 0, -60, 190, 0],
        TYPE: exports.assassin2,
    }, {
        POSITION: [12, 8, 0, 180, 190, 0],
        TYPE: exports.assassin2,
    }, ],
};
exports.drag = {
    PARENT: [exports.genericTank],
    LABEL: 'Constellation',
    DANGER: 6,
    SHAPE: 6,
    COLOR: 13,
    SIZE: 20,
    MAX_CHILDREN: 3,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11.5, 10, 0, 0, 0, 0],
        TYPE: exports.tail2,
    }, {
       POSITION: [11.5, 12, 0, 60, 0, 0],
        TYPE: exports.tail2,
    }, {
        POSITION: [11.5, 10, 0, 120, 0, 0],
        TYPE: exports.tail2,
    }, {
      POSITION: [11.5, 12, 0, 180, 0, 0],
        TYPE: exports.tail2,
    }, {
        POSITION: [11.5, 10, 0, 240, 0, 0],
        TYPE: exports.tail2,
      }, {
        POSITION: [11.5, 12, 0, 300, 0, 0],
        TYPE: exports.tail2,
    }, ],
};
exports.bort = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-1',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 20,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13.4, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
    
        POSITION: [13.4, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat,
    }, ],
};
exports.bort2 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-5',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 20,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13.4, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
    }, {
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
        POSITION: [13.4, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat,
    }, ],
};
exports.bort3 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-10',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 20,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13.4, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
    }, {
              POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
        POSITION: [13.4, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat,
    }, ],
};
exports.bort4 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-15',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 25,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13.4, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
   
    }, {
              POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
      
             
    
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
    
        POSITION: [13.4, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat,
       }, {
        POSITION: [10, 8, 0, 260, 0, 0],
        TYPE: exports.triple,
         }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, ],
};
exports.bort5 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-20',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 27,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13.4, 28, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
         POSITION: [16, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
   
    }, {
              POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
   
               POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
      
             
    
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
    
        POSITION: [13.4, 28, 0, 180, 0, 0],
        TYPE: exports.autoboat,
       }, {
            POSITION: [16, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
        POSITION: [10, 8, 0, 260, 0, 0],
        TYPE: exports.triple,
         }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, ],
};
exports.bort6 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-25',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 30,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13.4, 28, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
         POSITION: [16.5, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
   
    }, {
              POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
                 POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
                 POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
      
      
             
    
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
       POSITION: [13.4, 8, -9, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
          POSITION: [13.4, 8, 9, 90, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
    
        POSITION: [13.4, 28, 0, 180, 0, 0],
        TYPE: exports.autoboat,
       }, {
            POSITION: [16.5, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
        POSITION: [10, 8, 0, 260, 0, 0],
        TYPE: exports.triple,
         }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, ],
};
exports.bort7 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-30',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 35,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
     
         POSITION: [13.4, 41, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
         POSITION: [16.5, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
          POSITION: [16.5, 28, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
   
    }, {
              POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
                 POSITION: [10, 8, 0, 60, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
                 POSITION: [10, 8, 0, 300, 0, 0],
        TYPE: exports.railgun,
    }, {
      
      
             
    
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
       POSITION: [13.4, 8, -9, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
          POSITION: [13.4, 8, 9, 90, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
    
       
           POSITION: [13.4, 41, 0, 180, 0, 0],
        TYPE: exports.autoboat,
       }, {
            POSITION: [16.5, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
             POSITION: [16.5, 28, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
        POSITION: [10, 8, 0, 260, 0, 0],
        TYPE: exports.triple,
         }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, ],
};
exports.bort8 = {
    PARENT: [exports.genericTank],
    LABEL: 'CY-35',
    COLOR: 13,
    DANGER: 6,
    SHAPE: 4,
    SIZE: 45,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
     
         POSITION: [13.4, 54, 0, 0, 0, 0],
        TYPE: exports.autoboat,
    }, {
         POSITION: [16.5, 28, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
          POSITION: [16.5, 41, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
            POSITION: [16.5, 15, 0, 0, 0, 0],
        TYPE: exports.autoboat2,
    }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, {
           POSITION: [13.4, 8, 0, 90, 0, 0],
        TYPE: exports.shotgun2,
   
    }, {
              POSITION: [10, 8, 0, 170, 0, 0],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 190, 0, 0],
        TYPE: exports.railgun,
    }, {
                 POSITION: [10, 8, 0, 170, 0, 0],
        TYPE: exports.railgun,
    }, {
                   POSITION: [10, 4, -6, 0, 360, 1],
        TYPE: exports.railgun,
    }, {
                         POSITION: [10, 4, 6, 0, 360, 1],
        TYPE: exports.railgun,
    }, {
               POSITION: [10, 8, 0, 170, 0, 0],
        TYPE: exports.railgun,
    }, {
                 POSITION: [10, 8, 0, 190, 0, 0],
        TYPE: exports.railgun,
    }, {
      
      
             
    
       POSITION: [13.4, 8, 0, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
       POSITION: [13.4, 8, -9, 270, 0, 0],
        TYPE: exports.shotgun2,
    }, {
          POSITION: [13.4, 8, 9, 90, 0, 0],
        TYPE: exports.shotgun2,
    }, {
    
    
       
           POSITION: [13.4, 54, 0, 180, 0, 0],
        TYPE: exports.autoboat,
       }, {
            POSITION: [16.5, 28, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
             POSITION: [16.5, 41, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
              POSITION: [16.5, 15, 0, 180, 0, 0],
        TYPE: exports.autoboat2,
       }, {
        POSITION: [10, 8, 0, 260, 0, 0],
        TYPE: exports.triple,
         }, {
      
                   POSITION: [10, 8, 0, 100, 0, 0],
        TYPE: exports.triple,
    }, ],
};
exports.jerk = {
    PARENT: [exports.genericTank],
    LABEL: 'J5-EK',
    DANGER: 6,
    COLOR: 13,
    SIZE: 20,
    FACING_TYPE: 'autospin',
    SHAPE: 3,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 10, 0, 60, 0, 0],
        TYPE: exports.autojrek,
    }, {
        POSITION: [15, 10, 0, -60, 0, 0],
        TYPE: exports.autojrek,
    }, {
        POSITION: [15, 10, 0, 180, 0, 0],
        TYPE: exports.autojrek,
    }, ],
};
exports.jerk2 = {
    PARENT: [exports.genericTank],
    LABEL: 'J7-EK',
    DANGER: 6,
    COLOR: 13,
    SIZE: 20,
    FACING_TYPE: 'autospin',
    SHAPE: 6,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [15, 10, 0, 0, 0, 0],
        TYPE: exports.autojrek,
    }, {
      POSITION: [10, 10, 0, 60, 0, 0],
        TYPE: exports.autoboat,
    }, {
        POSITION: [15, 10, 0, 120, 0, 0],
        TYPE: exports.autojrek,
    }, {
      POSITION: [10, 10, 0, 180, 0, 0],
        TYPE: exports.autoboat,
    }, {
        POSITION: [15, 10, 0, 240, 0, 0],
        TYPE: exports.autojrek,
         }, {
        POSITION: [10, 10, 0, 300, 0, 0],
        TYPE: exports.autoboat,
    }, ],
};
exports.jerk3 = {
    PARENT: [exports.genericTank],
    LABEL: 'J10-EK',
    DANGER: 6,
    COLOR: 13,
    SIZE: 25,
    FACING_TYPE: 'autospin',
    SHAPE: 8,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 10, 0, 0, 0, 0],
        TYPE: exports.railgun,
    }, {
      POSITION: [8, 10, 0, 45, 0, 0],
        TYPE: exports.autojrek,
    }, {
        POSITION: [8, 10, 0, 90, 0, 0],
        TYPE: exports.railgun,
    }, {
      POSITION: [8, 10, 0, 135, 0, 0],
        TYPE: exports.autojrek,
    }, {
        POSITION: [8, 10, 0, 180, 0, 0],
        TYPE: exports.railgun,
         }, {
        POSITION: [8, 10, 0, 225, 0, 0],
        TYPE: exports.autojrek,
           
        
      }, {
        POSITION: [8, 10, 0, 270, 0, 0],
        TYPE: exports.railgun,
      }, {
        POSITION: [8, 10, 0, 315, 0, 0],
        TYPE: exports.autojrek,
    }, ],
};
exports.jerk4 = {
    PARENT: [exports.genericTank],
    LABEL: 'J12-EK',
    DANGER: 6,
    COLOR: 13,
    SIZE: 35,
    FACING_TYPE: 'autospin',
    SHAPE: 10,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 10, 0, 0, 0, 0],
        TYPE: exports.railgun,
    }, {
      POSITION: [8, 10, 0, 36, 0, 0],
        TYPE: exports.autojrek,
    }, {
        POSITION: [8, 10, 0, 72, 0, 0],
        TYPE: exports.railgun,
    }, {
      POSITION: [8, 10, 0, 108, 0, 0],
        TYPE: exports.autojrek,
    }, {
        POSITION: [8, 10, 0, 144, 0, 0],
        TYPE: exports.railgun,
         }, {
        POSITION: [8, 10, 0, 180, 0, 0],
        TYPE: exports.autojrek,
           
        
      }, {
        POSITION: [8, 10, 0, 216, 0, 0],
        TYPE: exports.railgun,
      }, {
        POSITION: [8, 10, 0, 252, 0, 0],
        TYPE: exports.autojrek,
           }, {
        POSITION: [8, 10, 0, 288, 0, 0],
        TYPE: exports.railgun,
                }, {
        POSITION: [8, 10, 0, 324, 0, 0],
        TYPE: exports.autojrek,
    }, ],
};




 exports.jerk44 = makeAuto(exports.jerk4, 'J12-EK', { type: exports.predaxgun, size: 12, });           
        

exports.jerk33 = makeAuto(exports.jerk3, 'J10-EK', { type: exports.bigauto4gun, size: 10, });



exports.candy3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Skittles',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.flank21,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.flank,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.flank3,
    }, ],
};

exports.m8mini = {
    PARENT: [exports.genericTank],
    LABEL: 'Automaton',
    DANGER: 6,
    SHAPE: 0,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 0, 0],
        TYPE: exports.mini,
  
    }, ],
};
exports.mix = {
    PARENT: [exports.genericTank],
    LABEL: 'Hersheys Bar',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.quadtrapper,
    }, {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.quadtrapper,
    }, {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.quadtrapper,
    }, ],
};
exports.x300 = { 
            PARENT: [exports.genericTank],
            LABEL: 'X-300-KCM-25',
            DANGER: 6,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  13,     8,      0,      0,     190, 0], 
                    TYPE: exports.x300turret,
                        }, {
                POSITION: [  13,     8,      0,     120,    190, 0], 
                    TYPE: exports.x300turret,
                        }, {
                POSITION: [  13,     8,      0,     240,    190, 0], 
                    TYPE: exports.x300turret,
                        },
            ],
        };
exports.cc6 = { 
            PARENT: [exports.genericTank],
            LABEL: 'CC6',
            DANGER: 6,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     8,      0,      0,     190, 0], 
                    TYPE: exports.cc6auto,
                        }, {
                POSITION: [  11,     8,      0,     120,    190, 0], 
                    TYPE: exports.cc6auto,
                        }, {
                POSITION: [  11,     8,      0,     240,    190, 0], 
                    TYPE: exports.cc6auto,
                        },
            ],
        };
exports.hitler = {
    PARENT: [exports.genericTank],
    LABEL: 'Geargrinder',
    DANGER: 6,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 60, 190, 0],
        TYPE: exports.hivet,
    }, {
        POSITION: [11, 8, 0, -60, 190, 0],
        TYPE: exports.hivet,
    }, {
        POSITION: [10, 0, 0, 120, 0, 0],
        TYPE: exports.cruiserGun,
    }, {
        POSITION: [10, 0, 0, -120, 0, 0],
        TYPE: exports.cruiserGun,
    }, ],
};

exports.auto5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5gun,
    }, ],
};
exports.auto25 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5,
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5,
    }, ],
};
exports.sierpinski5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-5',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto25,
    }, {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto25,
    }, ],
};
exports.autocirno = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-Baka',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 0, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 40, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 80, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 120, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 160, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 200, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 140, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 280, 280, 0],
        TYPE: exports.auto5gun,
    }, {
        POSITION: [11, 8, 0, 216, 320, 0],
        TYPE: exports.auto5gun,
    }, ],
};
exports.auto8 = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-8',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 8, 0, 0, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 45, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 90, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 135, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, 180, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, -135, 190, 1],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, -90, 190, 0],
        TYPE: exports.bigauto4gun,
    }, {
        POSITION: [7, 8, 0, -45, 190, 1],
        TYPE: exports.bigauto4gun,
    }, ],
};
exports.test5 = {
    PARENT: [exports.genericTank],
    LABEL: 'Swiss Toolset',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    SHAPE: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 231.428571429, 220, 0],
        TYPE: exports.spread,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 2 * 51.4285714286, 220, 0],
        TYPE: exports.rifle,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 3 * 51.4285714286, 220, 0],
        TYPE: exports.ranger,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 4 * 51.4285714286, 220, 0],
        TYPE: exports.engineer,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 5 * 51.4285714286, 220, 0],
        TYPE: exports.skimmer,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 6 * 51.4285714286, 220, 0],
        TYPE: exports.lilfact,
    }, {
        POSITION: [10, 8, 0, -51.4285714286 + (-25.7142857143), 220, 0],
        TYPE: exports.cruiser,
    }, ],
};
exports.heavy3 = {
    BODY: {
        SPEED: base.SPEED * 0.95,
    },
    PARENT: [exports.genericTank],
    LABEL: 'Mega-3',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 8, 0, 0, 190, 0],
        TYPE: exports.heavy3gun,
    }, {
        POSITION: [14, 8, 0, 120, 190, 0],
        TYPE: exports.heavy3gun,
    }, {
        POSITION: [14, 8, 0, 240, 190, 0],
        TYPE: exports.heavy3gun,
    }, ],
};
exports.tritrap = {
    LABEL: '',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.tritrapgun,
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.tritrapgun,
    }, ],
};
exports.trix = {
    LABEL: 'Twix Bar',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.tritrap,
    }, {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.tritrap,
    }, {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.tritrap,
    }, ],
};
exports.sniper3 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: '',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 170, 0],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [13, 8, 0, 120, 170, 0],
        TYPE: exports.sniper3gun,
    }, {
        POSITION: [13, 8, 0, 240, 170, 0],
        TYPE: exports.sniper3gun,
    }, ],
};
exports.auto4 = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    LABEL: 'Auto-4',
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4gun,
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4gun,
    }, ],
};
exports.strike = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    LABEL: 'Stronghold',
    SIZE: 20,
    SHAPE: 4,
    COLOR: 13,
    
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 10, 0, 45, 160, 0],
        TYPE: exports.awp2part1,
    }, {
       POSITION: [13, 28, 0, 45, 160, 0],
        TYPE: exports.awp2part1,
    }, {
      POSITION: [13, 38, 0, 45, 160, 0],
        TYPE: exports.awp2part1,
    }, {
        POSITION: [13, 10, 0, 135, 160, 0],
        TYPE: exports.awp2part1,
    }, {
      POSITION: [13, 28, 0, 135, 160, 0],
        TYPE: exports.awp2part1,
    }, {
      POSITION: [13, 38, 0, 135, 160, 0],
        TYPE: exports.awp2part1,
    }, {
        POSITION: [13, 10, 0, 225, 160, 0],
        TYPE: exports.awp2part1,
    }, {
      POSITION: [13, 28, 0, 225, 160, 0],
        TYPE: exports.awp2part1,
    }, {
       POSITION: [13, 38, 0, 225, 160, 0],
        TYPE: exports.awp2part1,
    }, {
        POSITION: [13, 10, 0, 315, 160, 0],
        TYPE: exports.awp2part1,
      }, {
      POSITION: [13, 28, 0, 315, 160, 0],
        TYPE: exports.awp2part1,
        }, {
      POSITION: [13, 38, 0, 315, 160, 0],
        TYPE: exports.awp2part1,
    }, ],
};
exports.auto4s = {
    PARENT: [exports.genericTank],
    DANGER: 5,
      INVISIBLE: [0.1, 0.5],
    LABEL: 'skirmish-4',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4invisgun,
    }, {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4invisgun,
    }, {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4invisgun,
    }, {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4invisgun,
    }, ],
};

exports.flanktrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Trap Guard',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.flankmini = {
    PARENT: [exports.genericTank],
    LABEL: 'Shaker',
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [22, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.flankmega = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Guard',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 10, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 10, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lessreload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.flankmach = {
    PARENT: [exports.genericTank],
    LABEL: 'Machine Guard',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1.7, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.mach, g.gunner]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.warky = {
    PARENT: [exports.genericTank],
    LABEL: 'Bulwarky',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [20, 8, 1, 0, -5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.musket = {
    PARENT: [exports.genericTank],
    LABEL: 'Musket',
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [3, 7, 1, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
          
        },
    }, {
              POSITION: [15, 7, -1.2, 0, 0, 0, 0, ],
     PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            ALT_FIRE: true,
     },
    }, {
              POSITION: [4, 4, 1, 0, 2, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [13, 8, 1.2, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.contag = {
    PARENT: [exports.genericTank],
    LABEL: 'Contagion',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.contag3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Tri-Contagion',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
              POSITION: [20, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 120, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
              POSITION: [20, 8, 1, 0, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8, 1, 0, 0, 240, 0, ],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 240, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.megacontag = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Contagion',
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [20, 10, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 10, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 10, 1.7, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lessreload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.guntrap = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner Trapper',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [13, 11, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.guntag = {
    PARENT: [exports.genericTank],
    LABEL: 'Gunner Contagion',
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: base.FOV * 1.25,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 2, 1, 0, -2.5, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil,

                g.lotsmorrecoil
            ]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [13, 11, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
           exports.hurricane = {
                PARENT: [exports.genericTank],
                LABEL: 'Hurricane',
                DANGER: 6,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     3,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      22.5,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      45,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      67.5,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      90,         0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      112.5,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      135,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      157.5,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      180,         0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      202.5,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      225,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      247.5,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      270,         0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      292.5,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      315,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  15,     3,      1,      0,      0,      337.5,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet
                        }, },
                  
                          ],
            };
exports.pentagun = {
    PARENT: [exports.genericTank],
    LABEL: 'Pentabionic Single Turret',
    //CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 14,
    SHAPE: 5,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0, ],
    }],
};
exports.bushwhack = {
    PARENT: [exports.genericTank],
    LABEL: 'Snipe Guard',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 8.5, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.hi = {
    PARENT: [exports.genericTank],
    LABEL: 'Admiral',
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        FOV: base.FOV * 1.2,
    },
    DANGER: 7,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 1.9, 1, 0, 3, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil, g.morespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [21, 1.9, 1, 0, -3, 0, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil, g.morespeed]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, -140, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, -140, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [13, 8.5, 1, 0, 0, 140, 0, ],
    }, {
        POSITION: [4, 8.5, 1.7, 13, 0, 140, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [20, 6, 0.9, 0, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.halfreload]),
            TYPE: exports.swarm,
        },
    }],
};

// NPCS:
exports.crasher = {
    TYPE: 'crasher',
    LABEL: 'Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 5,
        ACCEL: 0.01,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Sentry',
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCEL: 0.006,
        DAMAGE: base.DAMAGE * 2,
        SPEED: base.SPEED * 0.5,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Sentry',
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 20,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    BODY: {
        FOV: 2.5,
        ACCEL: 1,
        DAMAGE: base.DAMAGE * 2,
        SPEED: base.SPEED * 2.5,
    },
    MOTION_TYPE: 'motor',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 14, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [7, 14, 0.6, 7, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.sentrySwarm2 = {
    PARENT: [exports.sentry2],
    DANGER: 3,
    GUNS: [{
        POSITION: [7, 14, 0.6, 7, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, ],
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', {
    type: exports.heavy3gun,
    size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', {
    type: exports.trapTurret,
    size: 12,
});

exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    DISPLAY_NAME: true,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: {
        NO_LEAD: true,
    },
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A Visitor has Left!.',
};
exports.crasherSpawner = {
    PARENT: [exports.genericTank],
    LABEL: 'Spawned',
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 5,
    INDEPENDENT: true,
    AI: {
        chase: true,
    },
    MAX_CHILDREN: 4,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
            TYPE: [exports.drone, {
                LABEL: 'Crasher',
                VARIES_IN_SIZE: true,
                DRAW_HEALTH: true
            }],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.drone,
        },
    }, ],
};
exports.elite = {
    PARENT: [exports.miniboss],
    LABEL: 'Elite Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 20,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
};
exports.rhobody = {
    PARENT: [exports.miniboss],
    LABEL: 'Rho',
    SHAPE: 5,
    SIZE: 25,
    COLOR: 14,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
};
exports.elite2 = {
    PARENT: [exports.miniboss],
    LABEL: 'Chocolatebar',
    COLOR: 1,
    SHAPE: 4,
    SIZE: 20,
    VARIES_IN_SIZE: true,
    VALUE: 150000,
    BODY: {
        FOV: 1.4,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
        RELOAD: base.RELOAD * 5,
    },
};
exports.eternalshrinemaiden = {
    PARENT: [exports.miniboss],
    LABEL: 'Chocolatebar',
    SHAPE: 0,
    VARIES_IN_SIZE: false,
    VALUE: 150000,
    BODY: {
        FOV: 1.4,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 1.5,
        SHIELD: base.SHIELD * 1.25,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
        RELOAD: base.RELOAD * 1.3,
    },
};
exports.elite_destroyer = {
    PARENT: [exports.elite],
    FACING_TYPE: 'autospin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 16, 1, 6, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1, 6, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1, 6, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
            TYPE: exports.bullet,
            LABEL: 'Devastator',
        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 0, 0, 180, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 60, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, -60, 360, 0, ],
        TYPE: [exports.crasherSpawner]
    }, {
        POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bigauto4gun, {
            INDEPENDENT: true,
            COLOR: 5,
        }]
    }, ],
};
exports.elitetank = {
    PARENT: [exports.genericTank],
    COLOR: 8,
    SHAPE: 3,
    LABEL: 'atrium',
    FACING_TYPE: 'autospin',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 16, 1.3, 6, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1.3, 6, 0, 60, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            LABEL: 'Devastator',
        },
    }, {
        POSITION: [5, 16, 1.3, 6, 0, -60, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: exports.swarm,
            LABEL: 'Devastator',
        },
    }, ],
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
              POSITION: [11, 0, 0, 0, 360, 1, ],
        TYPE: [exports.construct, {
            COLOR: 16, 
        }]
    }, ],
};
exports.elite_gunner = {
    PARENT: [exports.elite],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 16, 1, 0, 0, 180, 0, ],
    }, {
        POSITION: [4, 16, 1.5, 14, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: true,
            }],
        },
    }, {
        POSITION: [6, 14, -2, 2, 0, 60, 0, ],
    }, {
        POSITION: [6, 14, -2, 2, 0, 300, 0, ],
    }],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 8, 0, 60, 180, 0, ],
        TYPE: [exports.auto4gun],
    }, {
        POSITION: [14, 8, 0, 300, 180, 0, ],
        TYPE: [exports.auto4gun],
    }],
};
exports.elite_yuyuko = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 10,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 16, 1.5, -3, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.autosmash, {
                CONTROLLERS: [
                    'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'
                ],
                SPEED: 3,
                LEVEL: 120,
                SIZE: 28,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 60, 180, 1, ],
        TYPE: [exports.shotgun2],
    }, {
        POSITION: [6, 8, 10, 60, 180, 0, ],
        TYPE: [exports.shotgun2],
    }, {
        POSITION: [6, 8, -10, 300, 180, 0, ],
        TYPE: [exports.shotgun2],
    }, {
        POSITION: [12, 8, 0, 300, 180, 1, ],
        TYPE: [exports.shotgun2],
    }],
};
exports.elite_nurber = {
    PARENT: [exports.elite],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1, 0, 3, 230, 0, ],
    }, {
        POSITION: [4, 10, 1.5, 14, 3, 230, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: false,
            }],
        },
    }, {
        POSITION: [14, 10, 1, 0, -3, -230, 0, ],
    }, {
        POSITION: [4, 10, 1.5, 14, -3, -230, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: [exports.pillbox, {
                INDEPENDENT: false,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        /*********  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 60, 180, 1, ],
        TYPE: [exports.machine],
    }, {
        POSITION: [10, 8, 0, 300, 180, 1, ],
        TYPE: [exports.machine],
    }],
};
exports.elite_hewn = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 3,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1.5, 0, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, {
        POSITION: [14, 10, 1.5, 0, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, {
        POSITION: [14, 10, 1.5, 0, 0, -180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 360, 1, ],
        TYPE: [exports.bentboomer],
    }, {
        POSITION: [3, 9, 0, 0, 360, 1, ],
        TYPE: [exports.builder],
    }, {
        POSITION: [3, 9, 0, 120, 360, 1, ],
        TYPE: [exports.builder],
    }, {
        POSITION: [3, 9, 0, -120, 360, 1, ],
        TYPE: [exports.builder],
    }],
};
exports.elite_hewn2 = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 3,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 10, 1.5, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: [exports.hewnminion, {
                INDEPENDENT: false,
            }],
        },
    }, ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [10, 0, 0, 0, 360, 1, ],
        TYPE: [exports.octo],
    }, ],
};
exports.elite_sprayer = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, 60, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, {
        POSITION: [14, 6, 0, -60, 190, 0],
        TYPE: [exports.spray, {
            COLOR: 5,
        }],
    }, ],
};
exports.elite_sprayer2 = {
    PARENT: [exports.elite2],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 180, 190, 0],
        TYPE: [exports.skimmer, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 6, 0, 90, 190, 0],
        TYPE: [exports.skimmer, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 6, 0, -90, 190, 0],
        TYPE: [exports.skimturret, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 6, 0, 0, 190, 0],
        TYPE: [exports.skimturret, {
            COLOR: 1,
        }],
    }, ],
};
exports.rho = {
    PARENT: [exports.rhobody],
    COLOR: 14,
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [14, 6, 0, 36, 190, 0],
        TYPE: [exports.pentagun, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 6, 0, -36, 190, 0],
        TYPE: [exports.pentagun, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 2, 0, 108, 0, 0],
        TYPE: [exports.crasherSpawner, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 2, 0, -108, 0, 0],
        TYPE: [exports.crasherSpawner, {
            COLOR: 14,
        }],
    }, {
        POSITION: [14, 2, 0, -180, 0, 0],
        TYPE: [exports.crasherSpawner, {
            COLOR: 14,
        }],
    }, ],
};
exports.theta = {
    PARENT: [exports.rhobody],
    COLOR: 14,
    LABEL: 'Theta',
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [{
        POSITION: [14, 0, 0, 36, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, -36, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, 108, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, -108, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, {
        POSITION: [14, 0, 0, -180, 0, 0],
        TYPE: [exports.pent2, {
            COLOR: 1,
        }],
    }, ],
};
exports.palisade = (() => {
    let props = {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
    };
    return {
        PARENT: [exports.miniboss],
        LABEL: 'Rogue Palisade',
        COLOR: 17,
        SHAPE: 6,
        SIZE: 28,
        VALUE: 500000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4, 6, -1.6, 8, 0, 0, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 60, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 120, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 1,
                SYNCS_SKILLS: true,
                WAIT_TO_CYCLE: true
            }
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 240, 0],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 300, 0],
            PROPERTIES: props,
        }],
        TURRETS: [{
            POSITION: [5, 10, 0, 30, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 90, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 150, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 210, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 270, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 330, 110, 0],
            TYPE: exports.trapTurret
        }],
    };
})();
exports.heptisade = (() => {
    let props = {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true,
    };
    return {
        PARENT: [exports.miniboss],
        LABEL: 'Hepti',
        COLOR: 17,
        SHAPE: 7,
        SIZE: 28,
        VALUE: 500000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 2 * 51.4285714286, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 3 * 51.4285714286, 0, ],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 4 * 51.4285714286, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 1,
                SYNCS_SKILLS: true,
                WAIT_TO_CYCLE: true
            }
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 5 * 51.4285714286, 0],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, 231.428571429 + 6 * 51.4285714286, 0],
            PROPERTIES: props,
        }, {
            POSITION: [4, 6, -1.6, 8, 0, -51.4285714286 + (-25.7142857143), 0],
            PROPERTIES: props,
        }],
        TURRETS: [{
            POSITION: [5, 10, 0, 360 / 7, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 2, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 3, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 4, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 5, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 6, 110, 0],
            TYPE: exports.trapTurret
        }, {
            POSITION: [5, 10, 0, 360 / 7 * 7, 110, 0],
            TYPE: exports.trapTurret
        }],
    };
})();
exports.bot = {
    AUTO_UPGRADE: 'random',
    FACING_TYPE: 'looseToTarget',
    COLOR: 6,
    BODY: {
        SIZE: 10
    },
    NAME: "",
    CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'],
    AI: {
        STRAFE: true
    }
};
exports.part = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    SHAPE: 3,
    COLOR: 14,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.accelerator,
    }, ],
};
exports.part2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    SHAPE: 3,
    COLOR: 14,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.mini,
    }, ],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.partswarm = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
      BODY: {
        RELOAD: base.RELOAD * 0.1,
    },
    SHAPE: 4,
    COLOR: 2,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 0, 0, 0, 230, 1],
        TYPE: exports.cruiser,
            }, {
        POSITION: [12, 7, 0, 90, 230, 0],
        TYPE: exports.cruiser,
            }, {
        POSITION: [12, 7, 0, -90, 230, 0],
        TYPE: exports.cruiser,
    }, ],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 5, 0.8, 0, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [19, 5, 0.8, 0, -4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.swarm]),
            TYPE: exports.swarm,
        },
    }, ],
};


        

exports.partswarm2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
      BODY: {
        RELOAD: base.RELOAD * 0.1,
    },
    SHAPE: 4,
    COLOR: 2,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 7, 0, 90, 230, 0],
        TYPE: exports.basic,
            }, {
        POSITION: [12, 7, 0, -90, 230, 0],
        TYPE: exports.basic,
    }, ],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 5, 0.8, 0, 6, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
        },
    }, {
              POSITION: [12, 5, 0.8, 0, 6, -90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
        },
    }, {
              POSITION: [12, 5, 0.8, 0, -6, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
        },
    }, {
        POSITION: [12, 5, 0.8, 0, -6, 90, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
            TYPE: exports.swarm,
        },
    }, ],
};

exports.part23 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    SHAPE: 3,
    COLOR: 14,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.basic,
    }, ],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 8, 1, 0, 0, 60, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {  
            POSITION: [18, 13, 1, 0, 0, 60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
              POSITION: [21, 8, 1, 0, 0, -60, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 13, 1, 0, 0, -60, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
            TYPE: exports.bullet,
        },
    }, ],
};
//k
exports.part3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    SHAPE: 6,
    COLOR: 90,
      TURRETS: [],
      GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, -120, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    }, ],
};
exports.wat = makeHybrid(exports.pound, 'Harvester');
exports.hexoo = {
    PARENT: [exports.genericTank],
    COLOR: 14,
    SHAPE: 5,
    LABEL: 'oriental battle pentagon',
    TURRETS: [{
        POSITION: [8.5, 13, 0, -144+36, 0, 0],
        TYPE: [exports.part, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [8.5, 13, 0, 144-36, 0, 0],
        TYPE: [exports.part, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, ],
        GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 4, 1, 0, 0, 36, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.doublereload]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, {
          POSITION: [12, 4, 1, 0, 0, -36, 0.5, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morespeed, g.doublereload]),
            TYPE: exports.bullet,
            LABEL: 'Front',
        },
    }, ],
};

exports.obt = {
    PARENT: [exports.genericTank],
    COLOR: 2,
    SHAPE: 3,
    LABEL: 'OBT1',
  FACING_TYPE: 'autospin',
    TURRETS: [{
        POSITION: [27.5, 21, 0, 60, 0, 0],
        TYPE: [exports.partswarm, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [27.5, 21, 0, -60, 0, 0],
        TYPE: [exports.partswarm, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
       }, {
        POSITION: [27.5, 21, 0, -180, 0, 0],
        TYPE: [exports.partswarm, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, ],
        GUNS: [],
};
exports.obt2 = {
    PARENT: [exports.genericTank],
    COLOR: 2,
    SHAPE: 3,
    LABEL: 'OBT2',
  FACING_TYPE: 'autospin',
    TURRETS: [{
        POSITION: [27.5, 21, 0, 60, 0, 0],
        TYPE: [exports.partswarm2, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [22.5, 21*2.1, 0, 60, 0, 0],
        TYPE: [exports.partswarm, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [27.5, 21, 0, -60, 0, 0],
        TYPE: [exports.partswarm2, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [22.5, 21*2.1, 0, -60, 0, 0],
        TYPE: [exports.partswarm, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [27.5, 21, 0, -180, 0, 0],
        TYPE: [exports.partswarm2, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
       }, {
                 POSITION: [13, 0, 0, 0, 360, 1],
        TYPE: [exports.builder, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
       }, {
        POSITION: [22.5, 21*2.1, 0, -180, 0, 0],
        TYPE: [exports.partswarm, {
            COLOR: 2,
            AUTOFIRE: true,
        }],
    }, ],
        GUNS: [],
};

exports.hexoo2 = {
    PARENT: [exports.genericTank],
    COLOR: 14,
    SHAPE: 5,
  SIZE: 20,
    LABEL: 'OBP2',
    TURRETS: [{
        POSITION: [8.5, 13, 0, -144+36, 0, 0],
        TYPE: [exports.part2, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [6.5, 13, 0, -180, 0, 0],
        TYPE: [exports.part, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
                    POSITION: [12.5, 0, 0, 0, 360, 1],
        TYPE: [exports.oldAutoSmasherTurret, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [8.5, 13, 0, 144-36, 0, 0],
        TYPE: [exports.part2, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, ],
};
exports.hexoo23 = {
    PARENT: [exports.genericTank],
    COLOR: 14,
    SHAPE: 5,
  SIZE: 30,
  FACING_TYPE: 'autospin',
    LABEL: 'OBP3',
    TURRETS: [{
        POSITION: [8.5, 13, 0, -144+36, 0, 0],
        TYPE: [exports.part23, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [8.5, 13, 0, 36, 0, 0],
        TYPE: [exports.part23, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [8.5, 13, 0, -36, 0, 0],
        TYPE: [exports.part23, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
              POSITION: [8.5, 13, 0, 180, 0, 0],
        TYPE: [exports.part23, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
                    POSITION: [12.5, 0, 0, 0, 360, 1],
        TYPE: [exports.oldAutoSmasherTurret, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [8.5, 13, 0, 144-36, 0, 0],
        TYPE: [exports.part23, {
            COLOR: 14,
            AUTOFIRE: true,
        }],
    }, ],
};


exports.hexoo3 = {
    PARENT: [exports.genericTank],
    COLOR: 28,
    SHAPE: 6,
  SIZE: 20,
  FACING_TYPE: 'autospin',
    LABEL: 'Blood Moon',
    TURRETS: [{
        POSITION: [8.5, 10, 0, -120, 0, 0],
        TYPE: [exports.part2, {
            COLOR: 90,
            AUTOFIRE: true,
                      CONTROLLERS:['reversespin'],
        }],
    }, {
              POSITION: [8.5, 10, 0, 0, 0, 0],
        TYPE: [exports.part2, {
            COLOR: 90,
            AUTOFIRE: true,
                                CONTROLLERS:['reversespin'],
        }],
    }, {
              POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.part3, {
            COLOR: 2,
            AUTOFIRE: true,
            CONTROLLERS:['spin'],
        }],
    }, {
                    POSITION: [6.25, 9, 0, -60, 210, 1],
        TYPE: [exports.accelerator, {
            COLOR: 9,
            AUTOFIRE: true,
        }],
    }, {
                          POSITION: [6.25, 9, 0, 60, 210, 1],
        TYPE: [exports.accelerator, {
            COLOR: 9,
            AUTOFIRE: true,
        }],
    }, {
                          POSITION: [6.25, 9, 0, 180, 210, 1],
        TYPE: [exports.accelerator, {
            COLOR: 9,
            AUTOFIRE: true,
        }],
    }, {
        POSITION: [8.5, 10, 0, 120, 0, 0],
        TYPE: [exports.part2, {
            COLOR: 90,
            AUTOFIRE: true,
                                CONTROLLERS:['reversespin'],
        }],
    }, ],
};

exports.billgun = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.billgates,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.billgates = makeAuto(exports.trap2, 'Automater', {
    type: exports.basic,
    size: 10,
    independent: false,
});
exports.missile123 = {
    PARENT: [exports.bullet],
    SHAPE: 0,
    LABEL: 'Logical assimilation',
    INDEPENDENT: true,
    VARIES_IN_SIZE: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 6, 1, 0, -2, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.billgates, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, {
        POSITION: [14, 6, 1, 0, 2, 230, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil,

                g.morespeed, g.morespeed
            ]),
            TYPE: [exports.billgates, {
                PERSISTS_AFTER_DEATH: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
        },
    }, ],
};
exports.sbasic = {
    PARENT: [exports.genericTank],
    LABEL: 'Supertank™',
    SIZE: 120,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
        HEALTH: 9000,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.norng]),
            TYPE: exports.bullet,
            LABEL: '', // def
            STAT_CALCULATOR: 0, // def
            WAIT_TO_CYCLE: false, // def
            AUTOFIRE: false, // def
            SYNCS_SKILLS: false, // def         
            MAX_CHILDREN: 0, // def  
            ALT_FIRE: false, // def 
            NEGATIVE_RECOIL: false, // def
        },
    }, ],
};
exports.skimmer3 = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 1.15,
    },
    SHAPE: 0,
    LABEL: 'TESTBED',
    DANGER: 0,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.2, 9, 0, 0, 0, ],
    }, {
        POSITION: [17, 15, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.morespeed]),
            TYPE: exports.missile123,
            STAT_CALCULATOR: gunCalcNames.sustained,
        },
    }, ],
};
            exports.stalk = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Stalker',
                INVISIBLE: [0.08, 0.03],
                BODY: {
                    ACCELERATION: base.ACCELERATION * 0.55,
                    SPEED: base.SPEED * 0.85,
                    FOV: base.FOV * 1.35,
                },
                
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  27,    10.5,     -2,      0,      0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.banshee2 = {
    PARENT: [exports.genericTank],
    LABEL: '63500 wat',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.1,
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 90, 360, 0],
        TYPE: [exports.gunner, {
            INDEPENDENT: false,
        }],
    }, {
        POSITION: [10, 8, 0, -90, 360, 0],
        TYPE: [exports.gunner, {
            INDEPENDENT: false,
        }],
    }, ],
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload]),
            TYPE: exports.billgates,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, ]
};
exports.bugcarrier = {
    PARENT: [exports.genericTank],
    LABEL: 'Airship',
    DANGER: 7,
    SHAPE: 0,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: 'locksFacing',
    MAX_CHILDREN: 10,
    BODY: {
        ACCELERATION: base.ACCEL * 0.75,
        FOV: base.FOV * 2.3,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 11, -0.9, 9, 0, 0, 0, ],
    }, {
        POSITION: [7, 15.5, 0.8, 7, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
            TYPE: [exports.booster, {
                CONTROLLERS: [
                    'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel'
                ],
                SPEED: 3,
                SIZE: 28,
                LEVEL: 60,
                CAN_BE_ON_LEADERBOARD: false,
                INVISIBLE: [0.8, 0.5],
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        },


    }],
};
exports.autokys = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-waitwhat',
    DANGER: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 90, 360, 0],
        TYPE: exports.quadtrapper,
    }, {
        POSITION: [11, 8, 0, -90, 360, 0],
        TYPE: exports.quadtrapper,
    }, ],
};
exports.baseProtector2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Base',
    SIZE: 74,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: { // def
        SPEED: 0,
        HEALTH: 10000,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1000,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody2,
    }, {
        POSITION: [12, 7, 0, 72, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 144, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, -72, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, -144, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, {
        POSITION: [12, 7, 0, 0, 100, 0],
        TYPE: exports.baseSwarmTurret,
    }, ],
    GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 72, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 144, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, -72, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, -144, 0, ],
    }, {
        POSITION: [4.5, 11.5, -1.3, 6, 0, 0, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 72, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 144, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, -72, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, -144, 0, ],
    }, {
        POSITION: [4.5, 8.5, -1.5, 7, 0, 0, 0, ],
    }, ],
}
exports.megaminitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: '',
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [24, 18, 1, 0, 0, 0, 0, ],
    }, {
        POSITION: [4, 18, 1.3, 22, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 18, 1.3, 18, 0, 0, 0.333, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, {
        POSITION: [4, 18, 1.3, 14, 0, 0, 0.667, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }, ],
};
exports.test3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Spinning dial',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 7, 0, -90, 360, 0, ],
        TYPE: [exports.accelerator, {
            COLOR: 16,     CONTROLLERS: ['reversespin'],
        }]
    }, {
              POSITION: [13, 0, 0, 0, 360, 1, ],
        TYPE: [exports.genericTank, {
            COLOR: 16,
        }]
    }, {
              POSITION: [11, 7, 0, 90, 360, 0, ],
        TYPE: [exports.accelerator, {
            COLOR: 16,     CONTROLLERS: ['reversespin'],
        }]
    }, ],
};
exports.luna = {
    PARENT: [exports.genericTank],
    LABEL: '?',
    DANGER: 7,
    COLOR: 16,
      SIZE: 40,
    FACING_TYPE: 'autospin',
    SHAPE: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 231.428571429, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 2 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 3 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 4 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 5 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, 231.428571429 + 6 * 51.4285714286, 220, 0],
        TYPE: exports.builder3,
    }, {
        POSITION: [10, 8, 0, -51.4285714286 + (-25.7142857143), 220, 0],
        TYPE: exports.builder3,
    }, ],
};
exports.luna2 = {
    PARENT: [exports.genericTank],
    LABEL: '???',
    DANGER: 7,
    COLOR: 16,
      SIZE: 40,
    FACING_TYPE: 'autospin',
    SHAPE: 7,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 10, 0, 231.428571429, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 2 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 3 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 4 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 5 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, 231.428571429 + 6 * 51.4285714286, 220, 0],
        TYPE: exports.luna,
    }, {
        POSITION: [8, 10, 0, -51.4285714286 + (-25.7142857143), 220, 0],
        TYPE: exports.luna,
    }, ],
};
exports.juhac = {
    PARENT: [exports.genericTank],
    LABEL: 'Serbian Tram',
    DANGER: 7,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 190, 0],
        TYPE: exports.quadtrapper,
    }, {
        POSITION: [13, 8, 0, 120, 190, 0],
        TYPE: exports.minelayer,
    }, {
        POSITION: [13, 8, 0, -120, 190, 0],
        TYPE: exports.guntrap,
    }, ],
};
exports.ladder2 = {
    PARENT: [exports.genericTank],
    LABEL: 'beromsick',
      BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.2,
        SPEED: base.SPEED * 9,
        ACCEL: base.ACCEL * 5
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: exports.bullet,
            LABEL: gunCalcNames.thruster,
        },
    }, ],
};
exports.chair = {
    PARENT: [exports.genericTank],
    LABEL: 'chair',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [2, 11, 1, 10, 0, 0, 0.8, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 11, 1, 20, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -7, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.nothing,
        },
    }, ],
};
exports.chair2 = {
    PARENT: [exports.genericTank],
    LABEL: 'AAA',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [2, 8, 1, 12, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.hibullet,
        },
    }, { 
              POSITION: [2, 8, 1, 17, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.hibullet,
        },
    }, { 
                    POSITION: [2, 8, 1, 22, 0, 0, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.hibullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.hibulle,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.hibulle,
        },
    }, ],
};
exports.chair23 = {
    PARENT: [exports.genericTank],
    LABEL: 'sofa',
  SHAPE: 0,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [2, 8, 1, 12, 0, 0, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [2, 8, 1, 17, 0, 0, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 8, 1, 22, 0, 0, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                          POSITION: [2, 8, 1, 12, 0, 30, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [2, 8, 1, 17, 0, 30, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 8, 1, 22, 0, 30, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                                POSITION: [2, 8, 1, 12, 0, -30, 0.3, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [2, 8, 1, 17, 0, -30, 0.6, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
                    POSITION: [2, 8, 1, 22, 0, -30, 0.9, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bullet,
        },
    }, { 
              POSITION: [25, 2, 1, 0, 4, 30, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -4, 30, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
                  },
    }, { 
              POSITION: [25, 2, 1, 0, 4, -30, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -4, -30, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
                  },
    }, { 
              POSITION: [25, 2, 1, 0, 4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
        },
    }, { 
        POSITION: [25, 2, 1, 0, -4, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload]),
            TYPE: exports.bulle,
        },
    }, ],
};
exports.testoof = {
    PARENT: [exports.genericTank],
    LABEL: 'Luna dial',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 8, 0, 0, 360, 0, ],
        TYPE: [exports.flank, {
          
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [10, 8, 0, 90, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [10, 8, 0, 180, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [10, 8, 0, -90, 360, 0, ],
        TYPE: [exports.flank, {
            COLOR: 16,     CONTROLLERS: ['testspin'],
        }]
    }, {
              POSITION: [13, 0, 0, 0, 360, 1, ],
        TYPE: [exports.hexa, {
            COLOR: 16, CONTROLLERS: ['reversespin'],
        }]
    }, ],
};
exports.autosmashi = makeAuto(exports.smash, 'Auto-Smasher', {
    type: exports.accelerator,
  independent: false,
    size: 11,

});

exports.spikeMinion = {
    PARENT: [exports.genericTank],
    LABEL: 'Spike Minion',
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hard',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3.5,
        ACCELERATION: 0.5,
        HEALTH: 8,
        SHIELD: 1,
        DAMAGE: 1.25,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.5,
        RANGE: 200
    },
    AI: {
        BLIND: true
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'mapTargetToGoal', 'hangOutNearMaster'],
    TURRETS: [{
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 120, 360, 0],
        TYPE: exports.spikeBody
    }, {
        POSITION: [20.5, 0, 0, 240, 360, 0],
        TYPE: exports.spikeBody
    }]
};
exports.gunnerAutoGun = {
    LABEL: 'Gunner',
    BODY: {
        FOV: 1.5
    },
    COLOR: 16,
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [{
        POSITION: [14, 3.5, 1, 0, 7.25, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [14, 3.5, 1, 0, -7.25, 0, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }, {
        POSITION: [18, 3.5, 1, 0, -3.75, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed, g.halfreload, g.lessreload]),
            TYPE: exports.bullet
        }
    }],
    HAS_NO_RECOIL: true
};

// HC made this tank.
exports.PK4_Minion_2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Mega Minion',
    SHAPE: 5,
    COLOR: 14,
    SIZE: 32,
    BODY: {
        FOV: 0.6,
        SPEED: 1.15,
        ACCELERATION: 0.2,
        HEALTH: 15,
        SHIELD: 1,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.5,
        RANGE: 150
    },
    FACING_TYPE: 'autospin',
    GUNS: [{
        POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    }, {
        POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    }, {
        POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }],
    TURRETS: [{
        POSITION: [9.5, 0, 0, 0, 360, 1],
        TYPE: exports.gunnerAutoGun
    }]
};
exports.bullet2 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 20,
        SPEED: 8.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 90 * wepDamageFactor,
        PUSHABILITY: 0,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC  LAYER*/
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: [exports.trapTurret,{INDEPENDENT: false, PERSISTS_AFTER_DEATH: true,}]
    }]
};
exports.factoryx = {
    PARENT: [exports.genericTank],
    LABEL: 'Factory',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0, ],
    }, {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: exports.spikeMinion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [4, 14, 1, 8, 0, 0, 0, ],
    }],
};
exports.flank2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Pagoda Shooter',
    BODY: {
        SPEED: base.SPEED * 1.1,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [18, 8, 1, 0, 0, -40, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
            TYPE: exports.bullet2,
        },
    }, {
        POSITION: [18, 8, 1, 0, 0, 40, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
            TYPE: exports.bullet2,
        },
    }, ],
};


exports.quadcruiser = {
            PARENT: [exports.genericTank],
            LABEL: 'Sandstorm',
            DANGER: 6,
            FACING_TYPE: 'autospin',
            STAT_NAMES: statnames.swarm,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
                FOV: base.FOV * 1.25,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.autoswarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, {
                POSITION: [   7,    7.5,    0.6,     7,      0,     90,   0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.autoswarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, {
                POSITION: [   7,    7.5,    0.6,     7,      0,    180,    0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.autoswarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, {
                POSITION: [   7,    7.5,    0.6,     7,      0,    270,     0.75, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.autoswarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,         
                    }, },
            ],
        };
exports.autospec = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto-3',
    DANGER: 6,
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 28, 0, 0, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*1, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*2, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*3, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*4, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*5, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*6, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*7, 360, 2],
        TYPE: exports.accelerator,
    }, {
              POSITION: [11, 28, 0, 360/10*8, 360, 2],
        TYPE: exports.accelerator,
    }, {
        POSITION: [11, 28, 0, 360/10*9, 360, 2],
        TYPE: exports.accelerator,
    }, ],
};
      exports.part = { 
            PARENT: [exports.genericTank],
            LABEL: 'Part',
            DANGER: 6,
            
            SHAPE: 4,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  18,     8,      0,      90,     190, 0], 
                    TYPE: exports.auto3gun,
                        }, {
               
                POSITION: [  18,     8,      0,     270,    190, 0], 
                    TYPE: exports.auto3gun,
                        },
            ],
        };

exports.viad = { 
            PARENT: [exports.genericTank],
            LABEL: 'Viadel',
            DANGER: 6,
            SHAPE: 4,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     -10,      5,      0,     0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      10,      0,     0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      5,     90,    0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      10,     90,    0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      5,     180,    0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      10,     180,    0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      5,     270,    0, 0], 
                    TYPE: exports.part,
                        }, {
                POSITION: [  11,     -10,      10,     270,    0, 0], 
                    TYPE: exports.part,
                        },
            ],
        };
exports.newsmash = makeAuto(exports.smash, 'Auto-Smasher', { type: exports.newautosmasherTurret, size: 11, });

exports.laser = {
        PARENT: [exports.genericTank],
        LABEL: 'Plasma Beam',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  21.5,     4,      1,      0,     2.5,     0,      1.4,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload, g.nail, g.morespeed, g.assass]),
                TYPE: exports.bullet,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  21.5,     4,      1,      0,    -2.5,     0,     1.4,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doublereload, g.nail, g.morespeed, g.assass]),
                TYPE: exports.bullet,
            }, }, 
        ],
    };
exports.awp = {
                PARENT: [exports.genericTank],
                LABEL: 'AWP-14',
                DANGER: 7,
                SHAPE: 4,
                BODY: {
                    FOV: 1.3,
                },
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  10,     8,      0,      90,      80, 0], 
                        TYPE: exports.nailgun,
                            }, {
                    POSITION: [  10,     8,      0,     270,     80, 0], 
                        TYPE: exports.nailgun,
                  
                            },
                ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  25,     8,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  23,     8,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,     8,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,     8,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  17,     8,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.mother = {
                PARENT: [exports.genericTank],
                LABEL: 'Mothership',
                SIZE: 30,
                DANGER: 7,
                FACING_TYPE: 'locksFacing',
                STAT_NAMES: statnames.swarm,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     8,      0.6,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,      30,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,     60,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,     90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,      120,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,     150,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {
                    POSITION: [  14,     8,      0.6,      0,      0,     180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, { 
                   POSITION: [  14,     8,      0.6,      0,      0,     210,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, { 
                     POSITION: [  14,     8,      0.6,      0,      0,     240,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {
                    POSITION: [  14,     8,      0.6,      0,      0,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,     300,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {   
                    POSITION: [  14,     8,      0.6,      0,      0,     330,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.battle, g.swarm, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, },
                ],
            };
exports.ac = {
            PARENT: [exports.genericTank],
            LABEL: 'Arena Closer',
            COLOR: 13,
            RESET_UPGRADES: true,
            SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
            LEVEL: -9991,
            SIZE: 15,
            BODY: { // def
                SHIELD: 1000000,
                SPEED: 15000,
                REGEN: 1000000,
                HEALTH: 10000000000,
                DAMAGE: 1000000000,
                DENSITY: 2,
                FOV: 4,
            },
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  14,    10,    1,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
 exports.guardian = {
            PARENT: [exports.genericTank],
            LABEL: 'Guardian',
            SHAPE: 3,
            COLOR: 5,
            SIZE: 25,
            SKILL: [9, 0, 9, 0, 8, 9, 0, 9, 9, 0,],
            LEVEL: -1,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 2,
            },
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  17,    13,    0,     0,      0,      180,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.swarm, g.battle, g.morereload]),
                    TYPE: exports.swarm,
                }, }, 
            ],
        };
exports.accel8 = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                ACCELERATION: base.ACCEL * 20.75,
            },
            LABEL: 'Accelerator',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    15,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                    TYPE: exports.bullet,
                }, },
            ],
        };




// UPGRADE PATHS
exports.devtank.UPGRADES_TIER_1 = [exports.it8, exports.spec, exports.viad, exports.cc6, exports.x300, exports.newsmash, exports.laser, exports.awp, exports.testbed6, exports.multiboxer];
exports.testbed6.UPGRADES_TIER_2 = [exports.quint, exports.terrepart2, exports.overfall, exports.trix, exports.mix, exports.accel8, exports.fallenboost, exports.testbed7];
exports.testbed5.UPGRADES_TIER_1 = [exports.sine, exports.small, exports.decoy, exports.construct2, exports.baseProtector, exports.autoex, exports.flank2, exports.hepta, exports.hexbrid2, exports.techno, exports.FTBToArras2];
exports.testbed7.UPGRADES_TIER_1 = [exports.candy3, exports.contag, exports.assassin2, exports.railgun, exports.fake, exports.smash3, exports.fidget, exports.basicbig];
exports.testbed.UPGRADES_TIER_1 = [];
exports.testbed4.UPGRADES_TIER_1 = [exports.tritrap, exports.conq, exports.brutalizer, exports.pentagun, exports.hybridmini, exports.lilfact, exports.pound];
exports.testbed3.UPGRADES_TIER_1 = [exports.shexatrap, exports.skimmer2, exports.benttrap, exports.test3, exports.bonk,
    exports.thisisforenig, exports.deviser, exports.testbed4
];
exports.testbed2.UPGRADES_TIER_1 = [exports.mother, exports.ac, exports.guardian, exports.elite_gunner, exports.elite_destroyer, exports.strike, exports.palisade, exports.testbedboss, exports.dom, exports.omegatwin, exports.warboat, 
                                   ]
exports.jerk.UPGRADES_TIER_3= [exports.jerk2]
exports.jerk2.UPGRADES_TIER_3= [exports.jerk33]
exports.jerk33.UPGRADES_TIER_3= [exports.jerk44]
exports.bort.UPGRADES_TIER_3= [exports.bort2]
exports.bort2.UPGRADES_TIER_3= [exports.bort3]
exports.bort3.UPGRADES_TIER_3= [exports.bort4]
exports.bort4.UPGRADES_TIER_3= [exports.bort5]
exports.bort5.UPGRADES_TIER_3= [exports.bort6]
exports.bort6.UPGRADES_TIER_3= [exports.bort7]
exports.bort7.UPGRADES_TIER_3= [exports.bort8]
exports.airy.UPGRADES_TIER_3= [exports.airy2]
exports.airy2.UPGRADES_TIER_3= [exports.airy3]
exports.airy3.UPGRADES_TIER_3= [exports.airy4]
exports.airy4.UPGRADES_TIER_3= [exports.airy5]
exports.yz1.UPGRADES_TIER_3= [exports.yz22]
exports.yz22.UPGRADES_TIER_3= [exports.yz33]
exports.yz33.UPGRADES_TIER_3= [exports.yz44]
exports.bwppart2.UPGRADES_TIER_3= [exports.bwp2]
exports.bwp2.UPGRADES_TIER_3= [exports.bwp3]


    
exports.testbedboss.UPGRADES_TIER_3 = [exports.jerk,   exports.bort, exports.drag, exports.elitesnipe, exports.airy, exports.yz1, exports.hex4, exports.rbt, exports.hex3, exports.eliminator]
exports.testbed.UPGRADES_TIER_1 = [exports.marine, exports.quadtrapper, exports.genericTank, exports.elite3, exports.devtank,
    exports.elite3, exports.testbed2, exports.ak47
];
exports.devtank2.UPGRADES_TIER_1 = [exports.testbed, exports.testbed5
];
exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.flank, exports.director, exports.pound, exports.trapper];
exports.pound.UPGRADES_TIER_2 = [exports.wat, exports.destroy, exports.bonkshot, exports.builder, exports.hevy, exports.pistol, exports.builder]

exports.pound.UPGRADES_TIER_3 = [exports.bentpound, exports.twinpound, exports.heavy, exports.pound2]
exports.pistol.UPGRADES_TIER_3 = [exports.steam, exports.carbine, exports.hybridpistol];
exports.bonkshot.UPGRADES_TIER_3 = [exports.shotgun2, exports.bust, exports.mgshot];
exports.wat.UPGRADES_TIER_3 = [exports.hybridmini, exports.hybrid, exports.hybridpistol];
exports.basic.UPGRADES_TIER_3 = [exports.single];
exports.basic.UPGRADES_TIER_2 = [exports.smash];
exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash, exports.shuriken, exports.smashgun, exports.landmine, exports.jumpsmash];
exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.gunner, exports.hexa, exports.machinetwin, exports.hybridtwin, exports.twinsnipe];

exports.machinetwin.UPGRADES_TIER_3 = [exports.machinetrip, exports.autotwinchine]
exports.trapper.UPGRADES_TIER_2 = [exports.flanktrap, exports.contag, exports.megatrap, exports.trapper3, exports.engineer];
exports.megatrap.UPGRADES_TIER_3 = [exports.gigatrap, exports.megacontag, exports.flankmega, exports.megatrap3];
exports.contag.UPGRADES_TIER_3 = [exports.guntag, exports.megacontag, exports.contag3];
exports.trapper3.UPGRADES_TIER_3 = [exports.hexatrap, exports.wob, exports.contag3, exports.megatrap3];
exports.twin.UPGRADES_TIER_3 = [exports.triple, exports.twintrap];
exports.hybridtwin.UPGRADES_TIER_3 = [exports.hybridgun, exports.hybridtwinsnipe, exports.grape, exports.benthybrid];
exports.twinsnipe.UPGRADES_TIER_3 = [exports.hybridtwinsnipe]
exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.split, exports.autodouble, exports.bentdouble];
exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.spread, exports.benthybrid, exports.bentdouble, exports.triple, exports.bentpound];
exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.nailgun, exports.auto4, exports.machinegunner, exports.vulcan2,  exports.battery, exports.cruisegun, exports.hurricane ];
exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini, exports.sword];
exports.sword.UPGRADES_TIER_3 = [exports.dag, exports.infantry, exports.joust, exports.sabre]
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack, exports.rifle, exports.snipebuild];
exports.rifle.UPGRADES_TIER_3 = [exports.infantry, exports.riflemach, exports.hybridrifle, exports.mischief, exports.blowback, exports.bow];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon, exports.carbine];
exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach, exports.sidewind, exports.dual, exports.overhunt];
exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder,  exports.boomer, exports.twintrap, exports.snipebuild, exports.miner, exports.buildermach];
exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.artillery, exports.mini, exports.gunner];
exports.machine.UPGRADES_TIER_3 = [exports.spray];
exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid, exports.construct, exports.shotgun2, exports.hiveshooter, exports.rocketeer, exports.ambush];
exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer, exports.cannon];
exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.nailgun, exports.hybridmini, exports.hot, exports.m8mini, exports.flankmini];
exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap, exports.quad];
exports.flank.UPGRADES_TIER_3 = [exports.conq];
exports.quad.UPGRADES_TIER_3 = [exports.auto5, exports.octo];
exports.tri.UPGRADES_TIER_3 = [exports.fighter, exports.booster, exports.falcon, exports.bomber, exports.autotri, exports.brutalizer, exports.ski2, exports.slam];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.tritrap, exports.sniper3, exports.smashgun];
exports.flanktrap.UPGRADES_TIER_3 = [exports.bushwhack, exports.guntrap, exports.fortress, exports.bomber, exports.musket, exports.warky, exports.flankmach, exports.flankmega];
exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.underseer];
exports.director.UPGRADES_TIER_3 = [exports.factory];
exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.overtrap, exports.overgunner, exports.autoover, exports.hexaseer, exports.overhunt, exports.manage, exports.overcruise, exports.oversnipe];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.sentinel];
exports.cruiser.UPGRADES_TIER_3 = [exports.necromancer, exports.battleship, exports.fortress, exports.autocruiser, exports.quadcruiser];//IM STILL CODING IT LOOL  //kk