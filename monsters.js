/* ============================================================
   DATA — one object per creature. Add more by copying an entry.

   The first 33 entries below are the tracker's original
   hand-authored bestiary (unchanged from index.html). Entries after the
   "EXTRACTED FROM MONSTER MANUAL" marker were extracted from an OCR'd copy
   of the 5e Monster Manual. That source has real scan/column-layout noise,
   so before trusting one of those entries in play, check it against the
   book if its id appears in MONSTER_MANUAL_REVIEW.md in this repo -- that
   file lists every extracted monster whose data could not be fully verified
   (garbled ability scores, incomplete actions lists, etc).
   ============================================================ */
const MONSTERS = [

  {
    id:"goblin", name:"Goblin", size:"Small", type:"humanoid (goblinoid)", alignment:"neutral evil",
    tag:"humanoid",
    ac:15, acNote:"leather armor, shield", hp:7, hpFormula:"2d6", speed:"30 ft.",
    abilities:{str:[8,-1], dex:[14,2], con:[10,0], int:[10,0], wis:[8,-1], cha:[8,-1]},
    skills:"Stealth +6",
    senses:"darkvision 60 ft., passive Perception 9",
    languages:"Common, Goblin",
    cr:"1/4", crNum:0.25, xp:50,
    traits:[
      {name:"Nimble Escape", text:"The goblin can take the Disengage or Hide action as a bonus action on each of its turns."}
    ],
    actions:[
      {name:"Scimitar", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."},
      {name:"Shortbow", text:"Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}
    ]
  },
  {
    id:"goblin-boss", name:"Goblin Boss", size:"Small", type:"humanoid (goblinoid)", alignment:"neutral evil",
    tag:"humanoid",
    ac:17, acNote:"chain shirt, shield", hp:21, hpFormula:"6d6", speed:"30 ft.",
    abilities:{str:[10,0], dex:[14,2], con:[10,0], int:[10,0], wis:[8,-1], cha:[10,0]},
    skills:"Stealth +6",
    senses:"darkvision 60 ft., passive Perception 9",
    languages:"Common, Goblin",
    cr:"1", crNum:1, xp:200,
    traits:[
      {name:"Nimble Escape", text:"The goblin can take the Disengage or Hide action as a bonus action on each of its turns."}
    ],
    actions:[
      {name:"Multiattack", text:"The goblin makes two scimitar attacks. The second attack has disadvantage."},
      {name:"Scimitar", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."},
      {name:"Javelin", text:"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}
    ],
    reactions:[
      {name:"Redirect Attack", text:"When a creature the goblin can see targets it with an attack, the goblin chooses another goblin within 5 feet of it. The two goblins swap places, and the chosen goblin becomes the target instead."}
    ]
  },
  {
    id:"owlbear", name:"Owlbear", size:"Large", type:"monstrosity", alignment:"unaligned",
    tag:"monstrosity",
    ac:13, acNote:"natural armor", hp:59, hpFormula:"7d10 + 21", speed:"40 ft.",
    abilities:{str:[20,5], dex:[12,1], con:[17,3], int:[3,-4], wis:[12,1], cha:[7,-2]},
    skills:"Perception +3",
    senses:"darkvision 60 ft., passive Perception 13",
    languages:"—",
    cr:"3", crNum:3, xp:700,
    traits:[
      {name:"Keen Sight and Smell", text:"The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."}
    ],
    actions:[
      {name:"Multiattack", text:"The owlbear makes two attacks: one with its beak and one with its claws."},
      {name:"Beak", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage."},
      {name:"Claws", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."}
    ]
  },
  {
    id:"ancient-white-dragon", name:"Ancient White Dragon", size:"Gargantuan", type:"dragon", alignment:"chaotic evil",
    tag:"dragon",
    ac:20, acNote:"natural armor", hp:333, hpFormula:"18d20 + 144", speed:"40 ft., burrow 40 ft., fly 80 ft., swim 40 ft.",
    abilities:{str:[26,8], dex:[10,0], con:[26,8], int:[10,0], wis:[13,1], cha:[14,2]},
    savingThrows:"Dex +6, Con +14, Wis +7, Cha +8",
    skills:"Perception +13, Stealth +6",
    damageImmunities:"cold",
    senses:"blindsight 60 ft., darkvision 120 ft., passive Perception 23",
    languages:"Common, Draconic",
    cr:"20", crNum:20, xp:24500,
    traits:[
      {name:"Ice Walk", text:"The dragon can move across and climb icy surfaces without needing to make an ability check. Difficult terrain composed of ice or snow doesn't cost it extra movement."},
      {name:"Legendary Resistance (3/Day)", text:"If the dragon fails a saving throw, it can choose to succeed instead."}
    ],
    actions:[
      {name:"Multiattack", text:"The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."},
      {name:"Bite", text:"Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage."},
      {name:"Claw", text:"Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."},
      {name:"Tail", text:"Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."},
      {name:"Frightful Presence", text:"Each creature of the dragon's choice within 120 feet and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A frightened creature can repeat the save at the end of each of its turns."},
      {name:"Cold Breath (Recharge 5–6)", text:"The dragon exhales an icy blast in a 90-foot cone. Each creature in the area must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much on a success."}
    ],
    legendary:{
      intro:"The dragon can take 3 legendary actions, choosing from the options below. Only one option can be used at a time and only at the end of another creature's turn. Spent actions are regained at the start of its turn.",
      actions:[
        {name:"Detect", text:"The dragon makes a Wisdom (Perception) check."},
        {name:"Tail Attack", text:"The dragon makes a tail attack."},
        {name:"Wing Attack (Costs 2 Actions)", text:"Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."}
      ]
    }
  },

  /* ---- humanoid NPCs ---- */
  {
    id:"bandit", name:"Bandit", size:"Medium", type:"humanoid (any race)", alignment:"any non-lawful alignment",
    tag:"humanoid",
    ac:12, acNote:"leather armor", hp:11, hpFormula:"2d8 + 2", speed:"30 ft.",
    abilities:{str:[11,0], dex:[12,1], con:[12,1], int:[10,0], wis:[10,0], cha:[10,0]},
    senses:"passive Perception 10",
    languages:"any one language (usually Common)",
    cr:"1/8", crNum:0.125, xp:25,
    actions:[
      {name:"Scimitar", text:"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."},
      {name:"Light Crossbow", text:"Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d8 + 1) piercing damage."}
    ]
  },
  {
    id:"bandit-captain", name:"Bandit Captain", size:"Medium", type:"humanoid (any race)", alignment:"any non-lawful alignment",
    tag:"humanoid",
    ac:15, acNote:"studded leather", hp:65, hpFormula:"10d8 + 20", speed:"30 ft.",
    abilities:{str:[15,2], dex:[16,3], con:[14,2], int:[14,2], wis:[11,0], cha:[14,2]},
    savingThrows:"Str +4, Dex +5, Wis +2",
    skills:"Athletics +4, Deception +4",
    senses:"passive Perception 10",
    languages:"any two languages",
    cr:"2", crNum:2, xp:450,
    actions:[
      {name:"Multiattack", text:"The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."},
      {name:"Scimitar", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."},
      {name:"Dagger", text:"Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage."}
    ],
    reactions:[
      {name:"Parry", text:"The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."}
    ]
  },
  {
    id:"veteran", name:"Veteran", size:"Medium", type:"humanoid (any race)", alignment:"any alignment",
    tag:"humanoid",
    ac:17, acNote:"splint", hp:58, hpFormula:"9d8 + 18", speed:"30 ft.",
    abilities:{str:[16,3], dex:[13,1], con:[14,2], int:[10,0], wis:[11,0], cha:[10,0]},
    skills:"Athletics +5, Perception +2",
    senses:"passive Perception 12",
    languages:"any one language (usually Common)",
    cr:"3", crNum:3, xp:700,
    actions:[
      {name:"Multiattack", text:"The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."},
      {name:"Longsword", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."},
      {name:"Shortsword", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."},
      {name:"Heavy Crossbow", text:"Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage."}
    ]
  },
  {
    id:"assassin", name:"Assassin", size:"Medium", type:"humanoid (any race)", alignment:"any non-good alignment",
    tag:"humanoid",
    ac:15, acNote:"studded leather", hp:78, hpFormula:"12d8 + 24", speed:"30 ft.",
    abilities:{str:[11,0], dex:[16,3], con:[14,2], int:[13,1], wis:[11,0], cha:[10,0]},
    savingThrows:"Dex +7, Int +5",
    skills:"Acrobatics +7, Deception +4, Perception +4, Stealth +11",
    damageResistances:"poison",
    senses:"passive Perception 14",
    languages:"Thieves' Cant plus any two languages",
    cr:"8", crNum:8, xp:3900,
    traits:[
      {name:"Assassinate", text:"During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."},
      {name:"Evasion", text:"If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage on a success, and only half damage if it fails."},
      {name:"Sneak Attack (1/Turn)", text:"The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."}
    ],
    actions:[
      {name:"Multiattack", text:"The assassin makes two shortsword attacks."},
      {name:"Shortsword", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much on a success."},
      {name:"Light Crossbow", text:"Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much on a success."}
    ]
  },
  {
    id:"gladiator", name:"Gladiator", size:"Medium", type:"humanoid (any race)", alignment:"any alignment",
    tag:"humanoid",
    ac:16, acNote:"studded leather, shield", hp:112, hpFormula:"15d8 + 45", speed:"30 ft.",
    abilities:{str:[18,4], dex:[15,2], con:[16,3], int:[10,0], wis:[12,1], cha:[15,2]},
    savingThrows:"Str +7, Dex +5, Con +6",
    skills:"Athletics +10, Intimidation +5",
    senses:"passive Perception 11",
    languages:"any one language (usually Common)",
    cr:"5", crNum:5, xp:1800,
    traits:[
      {name:"Brave", text:"The gladiator has advantage on saving throws against being frightened."},
      {name:"Brute", text:"A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."}
    ],
    actions:[
      {name:"Multiattack", text:"The gladiator makes three melee attacks or two ranged attacks."},
      {name:"Spear", text:"Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) if used with two hands to make a melee attack."},
      {name:"Shield Bash", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."}
    ],
    reactions:[
      {name:"Parry", text:"The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."}
    ]
  },
  {
    id:"berserker", name:"Berserker", size:"Medium", type:"humanoid (any race)", alignment:"any chaotic alignment",
    tag:"humanoid",
    ac:13, acNote:"hide armor", hp:67, hpFormula:"9d8 + 27", speed:"30 ft.",
    abilities:{str:[16,3], dex:[12,1], con:[17,3], int:[9,-1], wis:[11,0], cha:[9,-1]},
    senses:"passive Perception 10",
    languages:"any one language (usually Common)",
    cr:"2", crNum:2, xp:450,
    traits:[
      {name:"Reckless", text:"At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."}
    ],
    actions:[
      {name:"Greataxe", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."}
    ]
  },
  {
    id:"cultist", name:"Cultist", size:"Medium", type:"humanoid (any race)", alignment:"any non-good alignment",
    tag:"humanoid",
    ac:12, acNote:"leather armor", hp:9, hpFormula:"2d8", speed:"30 ft.",
    abilities:{str:[11,0], dex:[12,1], con:[10,0], int:[10,0], wis:[11,0], cha:[10,0]},
    skills:"Deception +2, Religion +2",
    senses:"passive Perception 10",
    languages:"any one language (usually Common)",
    cr:"1/8", crNum:0.125, xp:25,
    traits:[
      {name:"Dark Devotion", text:"The cultist has advantage on saving throws against being charmed or frightened."}
    ],
    actions:[
      {name:"Scimitar", text:"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage."}
    ]
  },
  {
    id:"cult-fanatic", name:"Cult Fanatic", size:"Medium", type:"humanoid (any race)", alignment:"any non-good alignment",
    tag:"humanoid",
    ac:13, acNote:"leather armor", hp:33, hpFormula:"6d8 + 6", speed:"30 ft.",
    abilities:{str:[11,0], dex:[14,2], con:[12,1], int:[10,0], wis:[13,1], cha:[14,2]},
    skills:"Deception +4, Persuasion +4, Religion +2",
    senses:"passive Perception 10",
    languages:"any one language (usually Common)",
    cr:"2", crNum:2, xp:450,
    traits:[
      {name:"Dark Devotion", text:"The fanatic has advantage on saving throws against being charmed or frightened."},
      {name:"Spellcasting", text:"The fanatic is a 4th-level spellcaster (spell save DC 11, +3 to hit with spell attacks). Prepared cleric spells — cantrips (at will): light, sacred flame, thaumaturgy; 1st level (4 slots): command, inflict wounds, shield of faith; 2nd level (3 slots): hold person, spiritual weapon."}
    ],
    actions:[
      {name:"Multiattack", text:"The fanatic makes two melee attacks."},
      {name:"Dagger", text:"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."}
    ]
  },

  /* ---- beasts ---- */
  {
    id:"aurochs", name:"Aurochs", size:"Large", type:"beast (cattle)", alignment:"unaligned",
    tag:"beast",
    ac:11, acNote:"natural armor", hp:38, hpFormula:"4d10 + 16", speed:"50 ft.",
    abilities:{str:[20,5], dex:[10,0], con:[19,4], int:[2,-4], wis:[12,1], cha:[5,-3]},
    senses:"passive Perception 11",
    languages:"—",
    cr:"2", crNum:2, xp:450,
    traits:[
      {name:"Charge", text:"If the aurochs moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."}
    ],
    actions:[
      {name:"Gore", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage."}
    ]
  },
  {
    id:"giant-scorpion", name:"Giant Scorpion", size:"Large", type:"beast", alignment:"unaligned",
    tag:"beast",
    ac:15, acNote:"natural armor", hp:52, hpFormula:"7d10 + 14", speed:"40 ft.",
    abilities:{str:[15,2], dex:[13,1], con:[15,2], int:[1,-5], wis:[9,-1], cha:[3,-4]},
    senses:"blindsight 60 ft., passive Perception 9",
    languages:"—",
    cr:"3", crNum:3, xp:700,
    actions:[
      {name:"Multiattack", text:"The scorpion makes three attacks: two with its claws and one with its sting."},
      {name:"Claw", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target."},
      {name:"Sting", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much on a success."}
    ]
  },
  {
    id:"giant-poisonous-snake", name:"Giant Poisonous Snake", size:"Medium", type:"beast", alignment:"unaligned",
    tag:"beast",
    ac:14, hp:11, hpFormula:"2d8 + 2", speed:"30 ft., swim 30 ft.",
    abilities:{str:[10,0], dex:[18,4], con:[13,1], int:[2,-4], wis:[10,0], cha:[3,-4]},
    skills:"Perception +2",
    senses:"blindsight 10 ft., passive Perception 12",
    languages:"—",
    cr:"1/4", crNum:0.25, xp:50,
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much on a success."}
    ]
  },
  {
    id:"giant-centipede", name:"Giant Centipede", size:"Small", type:"beast", alignment:"unaligned",
    tag:"beast",
    ac:13, acNote:"natural armor", hp:4, hpFormula:"1d6 + 1", speed:"30 ft., climb 30 ft.",
    abilities:{str:[5,-3], dex:[14,2], con:[12,1], int:[1,-5], wis:[7,-2], cha:[3,-4]},
    senses:"blindsight 30 ft., passive Perception 8",
    languages:"—",
    cr:"1/4", crNum:0.25, xp:50,
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If reduced to 0 hit points by this poison, the target is stable but poisoned for 1 hour and paralyzed while poisoned this way."}
    ]
  },
  {
    id:"jackal", name:"Jackal", size:"Small", type:"beast", alignment:"unaligned",
    tag:"beast",
    ac:12, hp:3, hpFormula:"1d6", speed:"40 ft.",
    abilities:{str:[8,-1], dex:[15,2], con:[11,0], int:[3,-4], wis:[12,1], cha:[6,-2]},
    skills:"Perception +3",
    senses:"passive Perception 13",
    languages:"—",
    cr:"0", crNum:0, xp:10,
    traits:[
      {name:"Keen Hearing and Smell", text:"The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."},
      {name:"Pack Tactics", text:"The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated."}
    ],
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage."}
    ]
  },
  {
    id:"wolf", name:"Wolf", size:"Medium", type:"beast", alignment:"unaligned",
    tag:"beast",
    ac:13, acNote:"natural armor", hp:11, hpFormula:"2d8 + 2", speed:"40 ft.",
    abilities:{str:[12,1], dex:[15,2], con:[12,1], int:[3,-4], wis:[12,1], cha:[6,-2]},
    skills:"Perception +3, Stealth +4",
    senses:"passive Perception 13",
    languages:"—",
    cr:"1/4", crNum:0.25, xp:50,
    traits:[
      {name:"Keen Hearing and Smell", text:"The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."},
      {name:"Pack Tactics", text:"The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."}
    ],
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."}
    ]
  },
  {
    id:"dire-wolf", name:"Dire Wolf", size:"Large", type:"beast", alignment:"unaligned",
    tag:"beast",
    ac:14, acNote:"natural armor", hp:37, hpFormula:"5d10 + 10", speed:"50 ft.",
    abilities:{str:[17,3], dex:[15,2], con:[15,2], int:[3,-4], wis:[12,1], cha:[7,-2]},
    skills:"Perception +3, Stealth +4",
    senses:"passive Perception 13",
    languages:"—",
    cr:"1", crNum:1, xp:200,
    traits:[
      {name:"Keen Hearing and Smell", text:"The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."},
      {name:"Pack Tactics", text:"The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."}
    ],
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."}
    ]
  },

  /* ---- undead ---- */
  {
    id:"skeleton", name:"Skeleton", size:"Medium", type:"undead", alignment:"lawful evil",
    tag:"undead",
    ac:13, acNote:"armor scraps", hp:13, hpFormula:"2d8 + 4", speed:"30 ft.",
    abilities:{str:[10,0], dex:[14,2], con:[15,2], int:[6,-2], wis:[8,-1], cha:[5,-3]},
    damageVulnerabilities:"bludgeoning",
    damageImmunities:"poison",
    conditionImmunities:"exhaustion, poisoned",
    senses:"darkvision 60 ft., passive Perception 9",
    languages:"understands all languages it knew in life but can't speak",
    cr:"1/4", crNum:0.25, xp:50,
    actions:[
      {name:"Shortsword", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."},
      {name:"Shortbow", text:"Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}
    ]
  },
  {
    id:"zombie", name:"Zombie", size:"Medium", type:"undead", alignment:"neutral evil",
    tag:"undead",
    ac:8, hp:22, hpFormula:"3d8 + 9", speed:"20 ft.",
    abilities:{str:[13,1], dex:[6,-2], con:[16,3], int:[3,-4], wis:[6,-2], cha:[5,-3]},
    savingThrows:"Wis +0",
    damageImmunities:"poison",
    conditionImmunities:"poisoned",
    senses:"darkvision 60 ft., passive Perception 8",
    languages:"understands the languages it knew in life but can't speak",
    cr:"1/4", crNum:0.25, xp:50,
    traits:[
      {name:"Undead Fortitude", text:"If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."}
    ],
    actions:[
      {name:"Slam", text:"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."}
    ]
  },
  {
    id:"ghoul", name:"Ghoul", size:"Medium", type:"undead", alignment:"chaotic evil",
    tag:"undead",
    ac:12, hp:22, hpFormula:"5d8", speed:"30 ft.",
    abilities:{str:[13,1], dex:[15,2], con:[10,0], int:[7,-2], wis:[10,0], cha:[6,-2]},
    damageImmunities:"poison",
    conditionImmunities:"charmed, exhaustion, poisoned",
    senses:"darkvision 60 ft., passive Perception 10",
    languages:"Common",
    cr:"1", crNum:1, xp:200,
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."},
      {name:"Claws", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. It can repeat the save at the end of each of its turns."}
    ]
  },
  {
    id:"ghast", name:"Ghast", size:"Medium", type:"undead", alignment:"chaotic evil",
    tag:"undead",
    ac:13, hp:36, hpFormula:"8d8", speed:"30 ft.",
    abilities:{str:[16,3], dex:[17,3], con:[10,0], int:[11,0], wis:[10,0], cha:[8,-1]},
    damageResistances:"necrotic",
    damageImmunities:"poison",
    conditionImmunities:"charmed, exhaustion, poisoned",
    senses:"darkvision 60 ft., passive Perception 10",
    languages:"Common",
    cr:"2", crNum:2, xp:450,
    traits:[
      {name:"Stench", text:"Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a success, the creature is immune to the ghast's Stench for 24 hours."},
      {name:"Turning Defiance", text:"The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead."}
    ],
    actions:[
      {name:"Bite", text:"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage."},
      {name:"Claws", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. It can repeat the save at the end of each of its turns."}
    ]
  },
  {
    id:"wight", name:"Wight", size:"Medium", type:"undead", alignment:"neutral evil",
    tag:"undead",
    ac:14, acNote:"studded leather", hp:45, hpFormula:"6d8 + 18", speed:"30 ft.",
    abilities:{str:[15,2], dex:[14,2], con:[16,3], int:[10,0], wis:[13,1], cha:[15,2]},
    skills:"Perception +3, Stealth +4",
    damageResistances:"necrotic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
    damageImmunities:"poison",
    conditionImmunities:"exhaustion, poisoned",
    senses:"darkvision 60 ft., passive Perception 13",
    languages:"the languages it knew in life",
    cr:"3", crNum:3, xp:700,
    traits:[
      {name:"Sunlight Sensitivity", text:"While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."}
    ],
    actions:[
      {name:"Multiattack", text:"The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."},
      {name:"Life Drain", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken, until it finishes a long rest. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control."},
      {name:"Longsword", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) if used with two hands."},
      {name:"Longbow", text:"Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."}
    ]
  },
  {
    id:"ghost", name:"Ghost", size:"Medium", type:"undead", alignment:"any alignment",
    tag:"undead",
    ac:11, hp:45, hpFormula:"10d8", speed:"0 ft., fly 40 ft.",
    abilities:{str:[7,-2], dex:[13,1], con:[10,0], int:[10,0], wis:[12,1], cha:[17,3]},
    damageResistances:"acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
    damageImmunities:"cold, necrotic, poison",
    conditionImmunities:"charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    senses:"darkvision 60 ft., passive Perception 11",
    languages:"any languages it knew in life",
    cr:"4", crNum:4, xp:1100,
    traits:[
      {name:"Ethereal Sight", text:"The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."},
      {name:"Incorporeal Movement", text:"The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."}
    ],
    actions:[
      {name:"Withering Touch", text:"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage."},
      {name:"Etherealness", text:"The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet can't affect or be affected by anything on the other plane."},
      {name:"Horrifying Visage", text:"Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. On a failure by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the save at the end of each of its turns."},
      {name:"Possession (Recharge 6)", text:"One humanoid the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed, becoming incapacitated and losing control of its body. The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out."}
    ]
  },
  {
    id:"wraith", name:"Wraith", size:"Medium", type:"undead", alignment:"neutral evil",
    tag:"undead",
    ac:13, hp:67, hpFormula:"9d8 + 27", speed:"0 ft., fly 60 ft. (hover)",
    abilities:{str:[6,-2], dex:[16,3], con:[16,3], int:[12,1], wis:[14,2], cha:[15,2]},
    damageResistances:"acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
    damageImmunities:"necrotic, poison",
    conditionImmunities:"charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
    senses:"darkvision 60 ft., passive Perception 12",
    languages:"the languages it knew in life",
    cr:"5", crNum:5, xp:1800,
    traits:[
      {name:"Incorporeal Movement", text:"The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."},
      {name:"Sunlight Sensitivity", text:"While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."}
    ],
    actions:[
      {name:"Life Drain", text:"Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken, until it finishes a long rest. The target dies if this reduces its hit point maximum to 0."},
      {name:"Create Specter", text:"The wraith targets a humanoid within 10 feet of it that has been dead no longer than 1 minute and died violently. The target's spirit rises as a specter under the wraith's control. The wraith can have no more than seven specters under its control at one time."}
    ]
  },
  {
    id:"banshee", name:"Banshee", size:"Medium", type:"undead", alignment:"chaotic evil",
    tag:"undead",
    ac:12, hp:58, hpFormula:"13d8", speed:"0 ft., fly 40 ft. (hover)",
    abilities:{str:[1,-5], dex:[14,2], con:[10,0], int:[12,1], wis:[11,0], cha:[17,3]},
    savingThrows:"Wis +2, Cha +4",
    damageResistances:"acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
    damageImmunities:"cold, necrotic, poison",
    conditionImmunities:"charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
    senses:"darkvision 60 ft., passive Perception 10",
    languages:"Common, Elvish",
    cr:"4", crNum:4, xp:1100,
    traits:[
      {name:"Detect Life", text:"The banshee can magically sense the presence of living creatures up to 5 miles away. She knows the general direction they're in but not their exact locations."},
      {name:"Incorporeal Movement", text:"The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."}
    ],
    actions:[
      {name:"Corrupting Touch", text:"Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) necrotic damage."},
      {name:"Horrifying Visage", text:"Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute, with disadvantage on repeat saves made within her line of sight."},
      {name:"Wail (1/Day)", text:"The banshee releases a mournful wail, provided she isn't in sunlight. All creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points; on a success, it takes 10 (3d6) psychic damage."}
    ]
  },
  {
    id:"will-o-wisp", name:"Will-o'-Wisp", size:"Tiny", type:"undead", alignment:"chaotic evil",
    tag:"undead",
    ac:19, hp:22, hpFormula:"9d4", speed:"0 ft., fly 50 ft. (hover)",
    abilities:{str:[1,-5], dex:[28,9], con:[10,0], int:[13,1], wis:[14,2], cha:[11,0]},
    damageResistances:"acid, cold, fire, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
    damageImmunities:"lightning, poison",
    conditionImmunities:"exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
    senses:"darkvision 120 ft., passive Perception 12",
    languages:"the languages it knew in life",
    cr:"2", crNum:2, xp:450,
    traits:[
      {name:"Consume Life", text:"As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If it dies, the will-o'-wisp regains 10 (3d6) hit points."},
      {name:"Incorporeal Movement", text:"The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."},
      {name:"Variable Illumination", text:"The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional equal radius. It can alter the radius as a bonus action."}
    ],
    actions:[
      {name:"Shock", text:"Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage."},
      {name:"Invisibility", text:"The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends."}
    ]
  },

  /* ---- shapechangers & fey/fiends ---- */
  {
    id:"doppelganger", name:"Doppelganger", size:"Medium", type:"monstrosity (shapechanger)", alignment:"neutral",
    tag:"monstrosity",
    ac:14, hp:52, hpFormula:"8d8 + 16", speed:"30 ft.",
    abilities:{str:[11,0], dex:[18,4], con:[14,2], int:[11,0], wis:[12,1], cha:[14,2]},
    skills:"Deception +6, Insight +3",
    conditionImmunities:"charmed",
    senses:"darkvision 60 ft., passive Perception 11",
    languages:"Common",
    cr:"3", crNum:3, xp:700,
    traits:[
      {name:"Shapechanger", text:"The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. It reverts to its true form if it dies."},
      {name:"Ambusher", text:"The doppelganger has advantage on attack rolls against any creature it has surprised."},
      {name:"Surprise Attack", text:"If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage."}
    ],
    actions:[
      {name:"Multiattack", text:"The doppelganger makes two melee attacks."},
      {name:"Slam", text:"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage."},
      {name:"Read Thoughts", text:"The doppelganger magically reads the surface thoughts of one creature within 60 feet of it, as long as its concentration isn't broken. While reading the target's mind, it has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."}
    ]
  },
  {
    id:"werewolf", name:"Werewolf", size:"Medium", type:"humanoid (human, shapechanger)", alignment:"chaotic evil",
    tag:"humanoid",
    ac:11, acNote:"12 (natural armor) in wolf or hybrid form", hp:58, hpFormula:"9d8 + 18", speed:"30 ft. (40 ft. in wolf form)",
    abilities:{str:[15,2], dex:[13,1], con:[14,2], int:[10,0], wis:[11,0], cha:[10,0]},
    skills:"Perception +4, Stealth +3",
    damageImmunities:"bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
    senses:"passive Perception 14",
    languages:"Common (can't speak in wolf form)",
    cr:"3", crNum:3, xp:700,
    traits:[
      {name:"Shapechanger", text:"The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. It reverts to its true form if it dies."},
      {name:"Keen Hearing and Smell", text:"The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."}
    ],
    actions:[
      {name:"Multiattack (Humanoid or Hybrid Form Only)", text:"The werewolf makes two attacks: one with its bite and one with its claws or spear."},
      {name:"Bite (Wolf or Hybrid Form Only)", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."},
      {name:"Claws (Hybrid Form Only)", text:"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage."},
      {name:"Spear (Humanoid Form Only)", text:"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) if used with two hands to make a melee attack."}
    ]
  },
  {
    id:"werebear", name:"Werebear", size:"Medium", type:"humanoid (human, shapechanger)", alignment:"neutral good",
    tag:"humanoid",
    ac:10, acNote:"11 (natural armor) in bear or hybrid form", hp:135, hpFormula:"18d8 + 54", speed:"30 ft. (40 ft., climb 30 ft. in bear or hybrid form)",
    abilities:{str:[19,4], dex:[10,0], con:[17,3], int:[11,0], wis:[12,1], cha:[12,1]},
    skills:"Perception +7",
    damageImmunities:"bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
    senses:"passive Perception 17",
    languages:"Common (can't speak in bear form)",
    cr:"5", crNum:5, xp:1800,
    traits:[
      {name:"Shapechanger", text:"The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. It reverts to its true form if it dies."},
      {name:"Keen Smell", text:"The werebear has advantage on Wisdom (Perception) checks that rely on smell."}
    ],
    actions:[
      {name:"Multiattack", text:"In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."},
      {name:"Bite (Bear or Hybrid Form Only)", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."},
      {name:"Claw (Bear or Hybrid Form Only)", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."},
      {name:"Greataxe (Humanoid or Hybrid Form Only)", text:"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage."}
    ]
  },
  {
    id:"green-hag", name:"Green Hag", size:"Medium", type:"fey", alignment:"neutral evil",
    tag:"fey",
    ac:17, acNote:"natural armor", hp:82, hpFormula:"11d8 + 33", speed:"30 ft.",
    abilities:{str:[18,4], dex:[12,1], con:[16,3], int:[13,1], wis:[14,2], cha:[14,2]},
    skills:"Arcana +3, Deception +4, Perception +4, Stealth +3",
    senses:"darkvision 60 ft., passive Perception 14",
    languages:"Common, Draconic, Sylvan",
    cr:"3", crNum:3, xp:700,
    traits:[
      {name:"Amphibious", text:"The hag can breathe air and water."},
      {name:"Innate Spellcasting", text:"The hag's innate spellcasting ability is Charisma (spell save DC 12), requiring no material components — at will: dancing lights, minor illusion, vicious mockery."},
      {name:"Mimicry", text:"The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."}
    ],
    actions:[
      {name:"Claws", text:"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."},
      {name:"Illusory Appearance", text:"The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape, until she takes a bonus action to end it or dies. A creature must take an action and succeed on a DC 20 Intelligence (Investigation) check to discern the illusion."},
      {name:"Invisible Passage", text:"The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends. While invisible, she leaves no physical evidence of her passage."}
    ]
  },
  {
    id:"night-hag", name:"Night Hag", size:"Medium", type:"fiend", alignment:"neutral evil",
    tag:"fiend",
    ac:17, acNote:"natural armor", hp:112, hpFormula:"15d8 + 45", speed:"30 ft.",
    abilities:{str:[18,4], dex:[15,2], con:[16,3], int:[16,3], wis:[14,2], cha:[16,3]},
    skills:"Deception +7, Insight +6, Perception +6, Stealth +6",
    damageResistances:"cold, fire; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
    conditionImmunities:"charmed",
    senses:"darkvision 120 ft., passive Perception 16",
    languages:"Abyssal, Common, Infernal, Primordial",
    cr:"5", crNum:5, xp:1800,
    traits:[
      {name:"Innate Spellcasting", text:"The hag's innate spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks), requiring no material components — at will: detect magic, magic missile; 2/day each: plane shift (self only), ray of enfeeblement, sleep."},
      {name:"Magic Resistance", text:"The hag has advantage on saving throws against spells and other magical effects."}
    ],
    actions:[
      {name:"Claws (Hag Form Only)", text:"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."},
      {name:"Change Shape", text:"The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. She reverts to her true form if she dies."},
      {name:"Etherealness", text:"The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, she must have a heartstone in her possession."},
      {name:"Nightmare Haunting (1/Day)", text:"While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane, giving it dreadful visions. If sustained for at least 1 hour, the target gains no benefit from its rest and its hit point maximum is reduced by 5 (1d10)."}
    ]
  }
  ,
  // ==================== EXTRACTED FROM MONSTER MANUAL ====================
{
  "id": "commoner",
  "name": "Commoner",
  "size": "Medium",
  "type": "humanoid (any race)",
  "alignment": "any alignment",
  "tag": "humanoid",
  "ac": 10,
  "acNote": "",
  "hp": 4,
  "hpFormula": "1d8",
  "speed": "30ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      10,
      0
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "senses": "pass ive Pe rception 10",
  "languages": "any o ne langu age (usually Common)",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [],
  "actions": [
    {
      "name": "Club",
      "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeonin g damage."
    }
  ]
},
{
  "id": "hyena",
  "name": "Hyena",
  "size": "Medium",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 11,
  "acNote": "",
  "hp": 5,
  "hpFormula": "1d8 + 1",
  "speed": "50 ft .",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "skills": "Perception +3",
  "senses": "passive Perception 13",
  "languages": "-",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of    while deafened. the creature and the ally isn't incapacitated."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage ."
    }
  ]
},
{
  "id": "lizard",
  "name": "Lizard",
  "size": "Tiny",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 10,
  "acNote": "",
  "hp": 2,
  "hpFormula": "ld4",
  "speed": "20ft., climb 20 ft.",
  "abilities": {
    "str": [
      2,
      -4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      10,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      3,
      -4
    ]
  },
  "senses": "da rkvis io n 30ft. , pass ive Perception 9",
  "languages": "-",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +0 to hit , reach 5 ft ., o ne t arget. Hit: 1 pie rcing d amage ."
    }
  ]
},
{
  "id": "vulture",
  "name": "Vulture",
  "size": "Medium",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 10,
  "acNote": "",
  "hp": 5,
  "hpFormula": "1d8 + 1",
  "speed": "10ft., fly 50 ft.",
  "abilities": {
    "str": [
      7,
      -2
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      13,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      4,
      -3
    ]
  },
  "skills": "Perception +3",
  "senses": "passive Perception 13",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [
    {
      "name": "Keen Sight and Smell",
      "text": "The vulture ha s advantage on Wisdom (Perception) checks that rely on s ight or s mell . Pack Tactics. The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally is n't incapacitated ."
    }
  ],
  "actions": [
    {
      "name": "Beak",
      "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage."
    }
  ]
},
{
  "id": "blood-hawk",
  "name": "Blood Hawk",
  "size": "Small",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 12,
  "acNote": "",
  "hp": 7,
  "hpFormula": "2d6",
  "speed": "10ft., fly 60ft.",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      10,
      0
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      5,
      -3
    ]
  },
  "skills": "Perception +4",
  "senses": "passive Perception 14",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Keen Sight",
      "text": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
    },
    {
      "name": "Pack Tactics",
      "text": "The hawk has advantage on an attack roll against"
    }
  ],
  "actions": [
    {
      "name": "Beak",
      "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
    }
  ]
},
{
  "id": "giant-weasel",
  "name": "Giant Weasel",
  "size": "Medium",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 13,
  "acNote": "",
  "hp": 9,
  "hpFormula": "2d8",
  "speed": "40ft.",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      10,
      0
    ],
    "int": [
      4,
      -3
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "languages": "-",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Keen Hearing and Smell",
      "text": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell ."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
    }
  ]
},
{
  "id": "guard",
  "name": "Guard",
  "size": "Medium",
  "type": "humanoid (any race)",
  "alignment": "any alignment",
  "tag": "humanoid",
  "ac": 16,
  "acNote": "chain shirt, shield",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "30ft.",
  "abilities": {
    "str": [
      13,
      1
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "skills": "Perception +2",
  "senses": "passive Perception 12",
  "languages": "any one language (usually Common)",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [],
  "actions": [
    {
      "name": "Spear",
      "text": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20f60 ft., one target. Hit: 4 (1d6 + 1) piercing damage."
    }
  ]
},
{
  "id": "merfolk",
  "name": "Merfolk",
  "size": "Medium",
  "type": "humanoid (merfolk)",
  "alignment": "neutral",
  "tag": "humanoid",
  "ac": 11,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "10ft., swim 40ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "skills": "Perceptio n +2",
  "senses": "passive Perception 12",
  "languages": "Aquan, Common",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The merfolk can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Spear",
      "text": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1 d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack."
    }
  ]
},
{
  "id": "mule",
  "name": "Mule",
  "size": "Medium",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 10,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "40ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      13,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "senses": "passive Perception 10",
  "languages": "-",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Beast of Burden",
      "text": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
    },
    {
      "name": "Sure-Footed",
      "text": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
    }
  ],
  "actions": [
    {
      "name": "Hooves",
      "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target.   Talons. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."
    }
  ]
},
{
  "id": "blink-dog",
  "name": "Blink Dog",
  "size": "Medium",
  "type": "fey",
  "alignment": "lawful good",
  "tag": "fey",
  "ac": 13,
  "acNote": "",
  "hp": 22,
  "hpFormula": "4d8 + 4",
  "speed": "40ft.",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      12,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "skills": "Perception +3, Stealth +5",
  "senses": "passive Perception 13",
  "languages": "Blink Dog, understands Sylvan but can't speak it",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "Keen Hearing and Smell",
      "text": "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
    }
  ],
  "actions": [
    {
      "name": "CON        INT       WIS        CHA         Bite",
      "text": "Melee Weapon Attack: +3 to hit, reach 5 ft. , one target . 8 (-1)    2 (-4)    12 (+1)     4 (-3)      Hit: 4 (1d6 + 1) piercing damage. Teleport (Recharge 4-6). The dog magically teleports , along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
    }
  ]
},
{
  "id": "draft-horse",
  "name": "Draft Horse",
  "size": "Large",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 10,
  "acNote": "",
  "hp": 19,
  "hpFormula": "3d10 + 3",
  "speed": "40ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      12,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "senses": "passive Perception 10",
  "languages": "-",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Hooves",
      "text": "Melee Weapon Attack: +6 to hit, reach 5 ft. , one target. Hit: 9 (2d4 + 4) bludgeoning damage."
    },
    {
      "name": "Charge",
      "text": "\u00b7lf the ejk moves at least 20 feet straight toward a target and then bits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone. ' Speed 10 ft ., fly 60 ft. ACTIONS CON       INT       WIS      CHA       Ram. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (-2)       15 (+2)       10 (+0)   2 (- 4)   14 (+2)   7 (- 2)   Hit: 6 (1d6 + 3) bludgeoning damage. Hooves. Melee Weapon Attack: +5 to hit, reach 5 ft., one prone Skills Perception +4 creature. Hit: 8 (2d4 + 3) bludgeoning damage. Senses passive Perception 14 Languages - Challenge 0 (10 XP) FLYING SNAKE Tiny beast, unaligned Keen Sight. The eagle has advantage on Wisdom (Perception)"
    }
  ]
},
{
  "id": "giant-wolf-spider",
  "name": "Giant Wolf Spider",
  "size": "Medium",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 13,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "40 ft., cl imb 40 ft .",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      13,
      1
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      4,
      -3
    ]
  },
  "skills": "Pe rce pt ion +3, Stealth +7",
  "senses": "blind sight 10ft. , darkvi sion 60ft., pass ive Perce ptio n 13",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": []
},
{
  "id": "pseudodragon",
  "name": "Pseudodragon",
  "size": "Tiny",
  "type": "dragon",
  "alignment": "neutral good",
  "tag": "dragon",
  "ac": 13,
  "acNote": "",
  "hp": 7,
  "hpFormula": "2d4 + 2",
  "speed": "",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      13,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      10,
      0
    ]
  },
  "skills": "Perception +3, Stealth +4",
  "senses": "blindsight 10ft., darkvision 60ft., passive Perception 13",
  "languages": "understands Common and Draconic but",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "Keen Senses",
      "text": "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
    },
    {
      "name": "Magic Resistance",
      "text": "The pseudodragon has advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Limited Telepathy",
      "text": "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can und erstand a language."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. Sting. Melee Weapon Attack: +4 to hit, reach 5 ft. , one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the savin g throw fails by 5 or more, the target fall s unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake. ISz --..... - -                                        --ssp"
    }
  ]
},
{
  "id": "swarm-of-rats",
  "name": "Swarm of Rats",
  "size": "Medium",
  "type": "swarm of Tiny beasts",
  "alignment": "unaligned",
  "tag": "swarm",
  "ac": 10,
  "acNote": "",
  "hp": 24,
  "hpFormula": "7d8 - 7",
  "speed": "30ft.",
  "abilities": {
    "str": [
      9,
      -1
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      9,
      -1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      3,
      -4
    ]
  },
  "damageResistances": "bludgeoning, piercing, slashing",
  "conditionImmunities": "charmed, frightened , paralyzed,",
  "senses": "darkvision 30ft., passive Perception 10",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "Keen Smell",
      "text": "The swarm has advantage on Wisdom (Perception) checks that rely on smell ."
    },
    {
      "name": "Swarm",
      "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat . The swarm can 't regain hit points or gain   bite attack against it as a bonus action . temporary hit points ."
    }
  ],
  "actions": [
    {
      "name": "Bites",
      "text": "Melee Weapon Attack: +2 to hit, reach 0 ft. , one target in   Hit: 8 (1d10 + 3) piercing damage . the swarm's space. Hit: 7 (2d6) piercing dam age, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.    Claw. Melee Weapon Attack: +5 to hit , reach 5 ft ., one target."
    }
  ]
},
{
  "id": "swarm-of-ravens",
  "name": "Swarm of Ravens",
  "size": "Medium",
  "type": "swarm of Tiny beasts",
  "alignment": "unaligned",
  "tag": "swarm",
  "ac": 12,
  "acNote": "",
  "hp": 24,
  "hpFormula": "7d8 - 7",
  "speed": "10ft., fly 50 ft .",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      8,
      -1
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "skills": "Perception +5",
  "damageResistances": "bludgeoning, piercing, slashing",
  "conditionImmunities": "charmed, frightened, paralyzed,",
  "senses": "passive Perception 15",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "Swarm",
      "text": "The swarm can occupy another creature's space and vice versa , and the swarm can move through any opening large enough for a Tiny raven . The swarm can't regain hit points or gain temporary hit points ."
    }
  ],
  "actions": [
    {
      "name": "Beaks",
      "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) pi e rcing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
    }
  ]
},
{
  "id": "violet-fungus",
  "name": "Violet Fungus",
  "size": "Medium",
  "type": "plant",
  "alignment": "un~ligned",
  "tag": "plant",
  "ac": 5,
  "acNote": "",
  "hp": 18,
  "hpFormula": "4d8",
  "speed": "",
  "abilities": {
    "str": [
      3,
      -4
    ],
    "dex": [
      1,
      -5
    ],
    "con": [
      10,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      3,
      -4
    ],
    "cha": [
      1,
      -5
    ]
  },
  "conditionImmunities": "blinded, deafened, frightened",
  "senses": "blindsight 30ft. (blind beyond this radius) ,",
  "languages": "-",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "False Appearance",
      "text": "While the violet fungus remains motionless,"
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The fungu s makes 1d4 Rotting Touch attacks."
    },
    {
      "name": "Rotting Touch",
      "text": "Melee Weapon Attack: +2 to hit, reach 10ft., one"
    }
  ]
},
{
  "id": "winged-kobold",
  "name": "Winged Kobold",
  "size": "Small",
  "type": "humanoid (kobold)",
  "alignment": "lawful evil",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 7,
  "hpFormula": "3d6 - 3",
  "speed": "30 ft ., fly 30 ft.",
  "abilities": {
    "str": [
      7,
      -2
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      9,
      -1
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      7,
      -2
    ],
    "cha": [
      8,
      -1
    ]
  },
  "senses": "darkvision 60ft. , pass ive Perce ption 8",
  "languages": "Common, Draconic",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "Sunlight Sensitivity",
      "text": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Pe rception) checks that rely on sight."
    },
    {
      "name": "Pack Tactics",
      "text": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within    Pack Tactics. The kobold has adva ntage on an attack roll 5 feet of the creatu re and the ally isn't incapacitated."
    }
  ],
  "actions": [
    {
      "name": "Dagger",
      "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
    },
    {
      "name": "Dropped Rock",
      "text": "Ranged Weapon Attack: +5 to hit, one target directly below the kobo ld. Hit: 6 (1d6 + 3) bludgeoning damage."
    }
  ]
},
{
  "id": "giant-sea-horse",
  "name": "Giant Sea Horse",
  "size": "Large",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 13,
  "acNote": "natural armor",
  "hp": 16,
  "hpFormula": "3d10",
  "speed": "0 ft., swim 40ft.",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      11,
      0
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Charge",
      "text": "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn , the   Spider Climb. The spider can climb difficult surfaces, including target takes an extra 7 (2d6) bludgeoning damage. It the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone ."
    },
    {
      "name": "Water Breathing",
      "text": "The sea horse can breathe only underwater."
    }
  ],
  "actions": [
    {
      "name": "Ram",
      "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage. Like their smaller kin, giant sea horses are shy, colorful fish with elongated bodies and curled tails. Aquatic elves train them as mounts."
    }
  ]
},
{
  "id": "swarm-of-insects",
  "name": "Swarm of Insects",
  "size": "Medium",
  "type": "swarm of Tiny beasts",
  "alignment": "unaligned",
  "tag": "swarm",
  "ac": 12,
  "acNote": "natural armor",
  "hp": 22,
  "hpFormula": "5d8",
  "speed": "20ft., climb 20ft.",
  "abilities": {
    "str": [
      3,
      -4
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      10,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      7,
      -2
    ],
    "cha": [
      1,
      -5
    ]
  },
  "damageResistances": "bludgeoning, piercing, slashing",
  "conditionImmunities": "charmed, frightened, paralyzed,",
  "senses": "blindsight 10ft., passive Perception 8",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Swarm",
      "text": "The swarm can occupy another creature's space and vice versa , and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
    }
  ],
  "actions": [
    {
      "name": "Bites",
      "text": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4)"
    }
  ]
},
{
  "id": "animated-armor",
  "name": "Animated Armor",
  "size": "Medium",
  "type": "construct",
  "alignment": "unaligned",
  "tag": "construct",
  "ac": 18,
  "acNote": "natural armor",
  "hp": 33,
  "hpFormula": "6d8 + 6",
  "speed": "25ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      13,
      1
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      3,
      -4
    ],
    "cha": [
      1,
      -5
    ]
  },
  "damageImmunities": "poison, psychic",
  "conditionImmunities": "blinded, charmed, deafened, exhaustion,",
  "senses": "blindsight 60ft. (blind beyond th is radius),",
  "languages": "-",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Antimagic Susceptibility",
      "text": "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute. False Appearance. While the arm or remains motion less, it is indistinguishable from a normal suit of armor."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The armor makes two melee attacks. Slam. Melee Weapon Attack: +4 to hit, reach 5 ft., o ne target. Hit: 5 (ld6 + 2) bludgeo ning da mage."
    }
  ]
},
{
  "id": "brown-bear",
  "name": "Brown Bear",
  "size": "Large",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 11,
  "acNote": "natural armor",
  "hp": 34,
  "hpFormula": "4d10 + 12",
  "speed": "40ft., climb 30ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      16,
      3
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      7,
      -2
    ]
  },
  "skills": "Perception +3",
  "senses": "passive Perception 13",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Keen Smell",
      "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The bear makes two attacks : one with its bite and one with its claws . Bite. Melee Weapon Attack: +5 to hit, reach 5 ft. , one target. Hit: 8 (1d8 + 4) piercing damage. Claws. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) s la shing damage."
    }
  ]
},
{
  "id": "lion",
  "name": "Lion",
  "size": "Large",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 12,
  "acNote": "",
  "hp": 26,
  "hpFormula": "4d10 + 4",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      13,
      1
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "skills": "Percept ion +3 , Stealth +6",
  "senses": "passive Perception 13",
  "languages": "-",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Keen Smell",
      "text": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
    },
    {
      "name": "Pack Tactics",
      "text": "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn 't incapacitated ."
    },
    {
      "name": "Pounce",
      "text": "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action. livENA Running Leap. With a 10-foot running start, the lion can long jump up to 25 feet."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target . Hit: 7 (1d8 + 3) piercing damage. Claw. Melee Weapon Attack: +5 to hit, reach 5 ft., one target., Hit: 6 (1d6 + 3) slashing damage."
    }
  ]
},
{
  "id": "quaggoth-spore-servant",
  "name": "Quaggoth Spore Servant",
  "size": "Medium",
  "type": "plant",
  "alignment": "unaligned",
  "tag": "plant",
  "ac": 13,
  "acNote": "natura l armo r",
  "hp": 45,
  "hpFormula": "6d8 + 18",
  "speed": "20 ft., climb 20 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      16,
      3
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      6,
      -2
    ],
    "cha": [
      1,
      -5
    ]
  },
  "damageImmunities": "poison",
  "conditionImmunities": "blinded, cha rmed , frighten ed,",
  "senses": "blinds ight 30ft. (blind beyond this radius),",
  "languages": "-",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The spore servant makes two claw attacks."
    },
    {
      "name": "Claw",
      "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
    }
  ]
},
{
  "id": "scarecrow",
  "name": "Scarecrow",
  "size": "Medium",
  "type": "construct",
  "alignment": "ohaotic evil",
  "tag": "construct",
  "ac": 11,
  "acNote": "",
  "hp": 36,
  "hpFormula": "8d8",
  "speed": "30ft.",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      11,
      0
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "damageVulnerabilities": "fire",
  "damageResistances": "bludgeoning, piercing, and slashing from",
  "damageImmunities": "poison",
  "conditionImmunities": "charmed, exhaustion , frightened,",
  "senses": "darkvision 60ft., passive Perception 10",
  "languages": "understands the languages of its creator but",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "False Appearance",
      "text": "While the scarecrow remains motionless , it is indistinguishable from an ordinary, inanimate scarecrow."
    },
    {
      "name": "Multiattack",
      "text": "The scarecrow makes two claw attacks. Claw. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn. Terrifying Glare. The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn . The frightened target is paralyzed."
    }
  ],
  "actions": []
},
{
  "id": "giant-constrictor-snake",
  "name": "Giant Constrictor Snake",
  "size": "Huge",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 12,
  "acNote": "",
  "hp": 60,
  "hpFormula": "8d12 + 8",
  "speed": "30ft. , swim 30ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      12,
      1
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      3,
      -4
    ]
  },
  "skills": "Perception +2",
  "senses": "blindsight 10ft., passive Perception 12",
  "languages": "-",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +6 to hit , reach 10ft., one creature.   ACTIONS Hit: 11 (2d6 +4) piercing damage."
    },
    {
      "name": "Constrict",
      "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the"
    }
  ]
},
{
  "id": "giant-elk",
  "name": "Giant Elk",
  "size": "Huge",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 14,
  "acNote": "natural armor",
  "hp": 42,
  "hpFormula": "Sd12 + 10",
  "speed": "60ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      14,
      2
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      10,
      0
    ]
  },
  "skills": "Perception +4",
  "senses": "passive Perception 14",
  "languages": "Giant Elk, understands Common, Elvish, and Sylvan",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Charge",
      "text": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on th e same turn, the target takes an extra 7 (2d6) damage . If the target is a creature,   high jump is up to 10 feet , with or without a running start. it must succeed on a DC 14 Strength saving throw or be"
    }
  ],
  "actions": [
    {
      "name": "Ram",
      "text": "Melee Weapon Attack: +6 to hit, reach 10ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
    },
    {
      "name": "Hooves",
      "text": "Melee Weapon Attack: +6 to hit, reach 5 ft ., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage ."
    }
  ]
},
{
  "id": "saber-toothed-tiger",
  "name": "Saber-Toothed Tiger",
  "size": "Large",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 12,
  "acNote": "",
  "hp": 52,
  "hpFormula": "7d10 + 14",
  "speed": "40ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      15,
      2
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "skills": "Perception +3, Stea lt h +6",
  "senses": "pass ive Pe rce pti o n 13",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Keen Smell",
      "text": "The tiger has advantage on Wisdom (Perception) checks that rely on smell. DEX        CON         INT       WIS        CHA         Pounce. If the tiger moves at least 20 feet straight toward a 8 (- 1)    15 (+2)     2 (- 4)   12 (+1)     6 (- 2)     creature and then hits it with a claw attack on the same t urn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can ma ke one bite attac k agai nst it as a bonus action."
    },
    {
      "name": "ACT IONS Bite",
      "text": "Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 10 (1d10 + 5) piercing damage."
    },
    {
      "name": "Claw",
      "text": "Melee Weapon Attack: +6 to hit , reach 5 ft., one target."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +4 to hit, reach 5 ft. , one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage."
    }
  ]
},
{
  "id": "sea-hag",
  "name": "Sea Hag",
  "size": "Medium",
  "type": "fey",
  "alignment": "chaotic evil",
  "tag": "fey",
  "ac": 14,
  "acNote": "natura l armor",
  "hp": 52,
  "hpFormula": "7d8 + 21",
  "speed": "30ft., swim 40ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      16,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      13,
      1
    ]
  },
  "senses": "darkv ision 60ft., passive Perception 11",
  "languages": "Aquan, Common, Giant",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The hag can breathe air and water."
    },
    {
      "name": "Horrific Appearance",
      "text": "Any hum anoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns , with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours."
    }
  ],
  "actions": []
},
{
  "id": "swarm-of-poisonous-snakes",
  "name": "Swarm of Poisonous Snakes",
  "size": "Medium",
  "type": "swarm of Tiny beasts",
  "alignment": "unaligned",
  "tag": "swarm",
  "ac": 14,
  "acNote": "",
  "hp": 36,
  "hpFormula": "8d8",
  "speed": "30ft. , swim 30ft.",
  "abilities": {
    "str": [
      8,
      -1
    ],
    "dex": [
      18,
      4
    ],
    "con": [
      11,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      3,
      -4
    ]
  },
  "damageResistances": "bludgeoning, piercing, slashing",
  "conditionImmunities": "charmed, frightened, paralyzed ,",
  "senses": "blindsight 10ft., passive Perception 10",
  "languages": "-",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Swarm",
      "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
    }
  ],
  "actions": [
    {
      "name": "Bites",
      "text": "Melee Weapon Attack: +6 to hit, reach 0 ft ., one creature   piercing damage if the swarm has half of its hit points or fewer. in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
    }
  ]
},
{
  "id": "ankylosaurus",
  "name": "Ankylosaurus",
  "size": "Huge",
  "type": "beast",
  "alignment": "unaligned",
  "tag": "beast",
  "ac": 15,
  "acNote": "natural armor",
  "hp": 68,
  "hpFormula": "8d12 + 16",
  "speed": "30ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      15,
      2
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "senses": "pas sive Perception 11",
  "languages": "-",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "ACT IONS Tail",
      "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target . Hit: 18 (4d6 + 4) bludgeoning damage . If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
    }
  ],
  "actions": []
},
{
  "id": "knight",
  "name": "Knight",
  "size": "Medium",
  "type": "humanoid (any race)",
  "alignment": "any alignment",
  "tag": "humanoid",
  "ac": 18,
  "acNote": "plate",
  "hp": 52,
  "hpFormula": "8d8 + 16",
  "speed": "30ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      14,
      2
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "savingThrows": "Con +4, Wi s +2",
  "senses": "passive Perception 10",
  "languages": "any one language (usually Common)",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Brave",
      "text": "The knight has advantage on saving throws against being frightened ."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The knight makes two melee attacks."
    },
    {
      "name": "Creatsword",
      "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
    },
    {
      "name": "Heavy Crossbow",
      "text": "Ranged Weapon Attack: +2 to hit, range 100f400 ft., one target. Hit: 5 (ld10) piercing damage."
    }
  ]
},
{
  "id": "winter-wolf",
  "name": "Winter Wolf",
  "size": "Large",
  "type": "monstrosity",
  "alignment": "neutral evil",
  "tag": "monstrosity",
  "ac": 13,
  "acNote": "natural armor",
  "hp": 75,
  "hpFormula": "10d10 + 20",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      14,
      2
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "skills": "Perception +5, Stealth +3",
  "damageImmunities": "cold",
  "senses": "passive Perception 15",
  "languages": "Common, Giant, Winter Wolf",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Keen Hearing and Smell",
      "text": "The wo lf has advantage on Wisdom (Perception) checks that re ly on hearing or sme ll. Pack Tactics. The wolf has advantage on an attack roll aga in st a creature if at least one of the wolf's alli es is within 5 feet of the creature and the ally isn't incapacitated. Snow Camouflage. Th e wo lf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
    }
  ],
  "actions": []
},
{
  "id": "medusa",
  "name": "Medusa",
  "size": "Medium",
  "type": "monstrosity",
  "alignment": "lawful e~il",
  "tag": "monstrosity",
  "ac": 15,
  "acNote": "natural armor",
  "hp": 127,
  "hpFormula": "17d8 +51",
  "speed": "30ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      15,
      2
    ]
  },
  "skills": "Deception +5, Insight +4, Perception +4, Stealth +5",
  "senses": "darkvision 60ft., passive Perception 14",
  "languages": "Common",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [
    {
      "name": "Petrifying Gaze",
      "text": "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa , the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained . The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic. Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save. If the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is , due to its curse, affected by its own gaze. eternal youth, beauty, and adoration might pray to ACTIONS malicious gods, beg dragons for ancient magic, or seek Multiattack. The medusa makes either three melee attacks- one with its snake hair and two with its shortsword-or two all in exchange for this gift, oblivious to the curse that    ranged attacks with its longbow. Snake Hair. Melee Weapon Attack: +5 to hit, reach 5 ft ., one creature. Hit: 4 (ld4 + 2) piercing damage plus 14 (4d6) poison damage . influence and power they so desire. However, after years Shortsword. Melee Weapon Attack: +5 to hit, reach 5 ft. , one of the living like a demigod among mortals, the price for target. Hit: 5 (ld6 + 2) piercing damage. their vanity and hubris is exacted, and they are forever Longbow. Ranged Weapon Attack: +5 to hit, range 150/600 ft. , one target. Hit: 6 (ld8 + 2) piercing damage plus 7 (2d6) poison damage. its c.orruption."
    }
  ],
  "actions": []
},
{
  "id": "young-gold-dragon",
  "name": "Young Gold Dragon",
  "size": "Large",
  "type": "dragon",
  "alignment": "lawful good",
  "tag": "dragon",
  "ac": 18,
  "acNote": "natural armor",
  "hp": 178,
  "hpFormula": "17d10 + 85",
  "speed": "40ft., fly 80ft., swim 40ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      21,
      5
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      20,
      5
    ]
  },
  "savingThrows": "Dex +6, Con +9, Wis +5, Cha +9",
  "skills": "Insight +5, Perception +9, Persuasion +9, Stealth +6",
  "damageImmunities": "fire",
  "senses": "blindsight 30ft., darkvision 120ft., passive Perception 19",
  "languages": "Common, Draconic",
  "cr": "10",
  "crNum": 10.0,
  "xp": 5900,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three attacks: one with its bite and two with its claws."
    },
    {
      "name": "Bite",
      "text": "Melee Weapon Attack: +10 to hit, reach 10ft., one target. Hit: 17 (2d10 + 6) piercing damage. Claw. Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage. Breath Weapons (Recharge 5-6). The dragon uses one of the following breath weapons. Fire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
    }
  ]
}
  ,
  // ==================== SRD 2024 (downfallx/dnd-5e-srd-markdown) ====================
{
  "id": "aboleth",
  "name": "Aboleth",
  "size": "Large",
  "type": "Aberration",
  "alignment": "Lawful Evil",
  "tag": "aberration",
  "ac": 17,
  "acNote": "",
  "hp": 150,
  "hpFormula": "20d10 + 40",
  "speed": "10 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+7",
  "savingThrows": "Dex +3, Con +6, Int +8, Wis +6",
  "skills": "History +12, Perception +10",
  "senses": "Darkvision 120 ft.; Passive Perception 20",
  "languages": "Deep Speech; telepathy 120 ft.",
  "cr": "10",
  "crNum": 10.0,
  "xp": 5900,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The aboleth can breathe air and water."
    },
    {
      "name": "Eldritch Restoration",
      "text": "If destroyed, the aboleth gains a new body in 5d10 days, reviving with all its Hit Points in the Far Realm or another location chosen by the GM."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the aboleth fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Mucus Cloud",
      "text": "While underwater, the aboleth is surrounded by mucus. <i>Constitution Saving Throw:</i> DC 14, each creature in a 5-foot Emanation originating from the aboleth at the end of the aboleth's turn. <i>Failure:</i> The target is cursed. Until the curse ends, the target's skin becomes slimy, the target can breathe air and water, and it can't regain Hit Points unless it is underwater. While the cursed creature is outside a body of water, the creature takes 6 (1d12) Acid damage at the end of every 10 minutes unless moisture is applied to its skin before those minutes have passed."
    },
    {
      "name": "Probing Telepathy",
      "text": "If a creature the aboleth can see communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The aboleth makes two Tentacle attacks and uses either Consume Memories or Dominate Mind if available."
    },
    {
      "name": "Tentacle",
      "text": "<i>Melee Attack Roll:</i> +9, reach 15 ft. <i>Hit:</i> 12 (2d6 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of four tentacles."
    },
    {
      "name": "Consume Memories",
      "text": "<i>Intelligence Saving Throw:</i> DC 16, one creature within 30 feet that is Charmed or Grappled by the aboleth. <i>Failure:</i> 10 (3d6) Psychic damage. <i>Success:</i> Half damage. <i>Failure or Success:</i> The aboleth gains the target's memories if the target is a Humanoid and is reduced to 0 Hit Points by this action."
    },
    {
      "name": "Dominate Mind (2/Day)",
      "text": "<i>Wisdom Saving Throw:</i> DC 16, one creature the aboleth can see within 30 feet. <i>Failure:</i> The target has the Charmed condition until the aboleth dies or is on a different plane of existence from the target. While Charmed, the target acts as an ally to the aboleth and is under its control while within 60 feet of it. In addition, the aboleth and the target can communicate telepathically with each other over any distance. The target repeats the save whenever it takes damage as well as after every 24 hours it spends at least 1 mile away from the aboleth, ending the effect on itself on a success."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the aboleth can expend a use to take one of the following actions. The aboleth regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Lash",
        "text": "The aboleth makes one Tentacle attack."
      },
      {
        "name": "Psychic Drain",
        "text": "If the aboleth has at least one creature Charmed or Grappled, it uses Consume Memories and regains 5 (1d10) Hit Points."
      }
    ]
  }
},
{
  "id": "air-elemental",
  "name": "Air Elemental",
  "size": "Large",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 15,
  "acNote": "",
  "hp": 90,
  "hpFormula": "12d10 + 24",
  "speed": "10 ft., Fly 90 ft. (hover)",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      20,
      5
    ],
    "con": [
      14,
      2
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+5",
  "damageResistances": "Bludgeoning, Lightning, Piercing, Slashing",
  "damageImmunities": "Poison, Thunder",
  "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Auran)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Air Form",
      "text": "The elemental can enter a creature's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The elemental makes two Thunderous Slam attacks."
    },
    {
      "name": "Thunderous Slam",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 14 (2d8 + 5) Thunder damage."
    },
    {
      "name": "Whirlwind (Recharge 4\u20136)",
      "text": "<i>Strength Saving Throw:</i> DC 13, one Medium or smaller creature in the elemental's space. <i>Failure:</i> 24 (4d10 + 2) Thunder damage, and the target is pushed up to 20 feet straight away from the elemental and has the Prone condition. <i>Success:</i> Half damage only."
    }
  ]
},
{
  "id": "animated-flying-sword",
  "name": "Animated Flying Sword",
  "size": "Small",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 17,
  "acNote": "",
  "hp": 14,
  "hpFormula": "4d6",
  "speed": "5 ft., Fly 50 ft. (hover)",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      11,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      5,
      -3
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4",
  "damageImmunities": "Poison, Psychic",
  "conditionImmunities": "Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Blindsight 60 ft.; Passive Perception 7",
  "languages": "None",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Slash",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 6 (1d8 + 2) Slashing damage."
    }
  ]
},
{
  "id": "animated-rug-of-smothering",
  "name": "Animated Rug of Smothering",
  "size": "Large",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 12,
  "acNote": "",
  "hp": 27,
  "hpFormula": "5d10",
  "speed": "10 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      10,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      3,
      -4
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "+4",
  "damageImmunities": "Poison, Psychic",
  "conditionImmunities": "Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Blindsight 60 ft.; Passive Perception 6",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Smother",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Bludgeoning damage. If the target is a Medium or smaller creature, the rug can give it the Grappled condition (escape DC 13) instead of dealing damage. Until the grapple ends, the target has the Blinded and Restrained conditions, is suffocating, and takes 10 (2d6 + 3) Bludgeoning damage at the start of each of its turns. The rug can smother only one creature at a time. While grappling the target, the rug can't take this action, the rug halves the damage it takes (round down), and the target takes the same amount of damage."
    }
  ]
},
{
  "id": "ankheg",
  "name": "Ankheg",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 14,
  "acNote": "",
  "hp": 45,
  "hpFormula": "6d10 + 12",
  "speed": "30 ft., Burrow 10 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      14,
      2
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+0",
  "senses": "Darkvision 60 ft., Tremorsense 60 ft.; Passive Perception 11",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Tunneler",
      "text": "The ankheg can burrow through solid rock at half its Burrow Speed and leaves a 10-foot-diameter tunnel in its wake."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +5 (with Advantage if the target is Grappled by the ankheg), reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Slashing damage plus 3 (1d6) Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13)."
    },
    {
      "name": "Acid Spray (Recharge 6)",
      "text": "<i>Dexterity Saving Throw:</i> DC 12, each creature in a 30-foot-long, 5-foot-wide Line. <i>Failure:</i> 14 (4d6) Acid damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "awakened-shrub",
  "name": "Awakened Shrub",
  "size": "Small",
  "type": "Plant",
  "alignment": "Neutral",
  "tag": "plant",
  "ac": 9,
  "acNote": "",
  "hp": 10,
  "hpFormula": "3d6",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      3,
      -4
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      11,
      0
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "-1",
  "damageVulnerabilities": "Fire",
  "damageResistances": "Piercing",
  "senses": "Passive Perception 10",
  "languages": "Common plus one other language",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [],
  "actions": [
    {
      "name": "Rake",
      "text": "<i>Melee Attack Roll:</i> +1, reach 5 ft. <i>Hit:</i> 1 Slashing damage."
    }
  ]
},
{
  "id": "awakened-tree",
  "name": "Awakened Tree",
  "size": "Huge",
  "type": "Plant",
  "alignment": "Neutral",
  "tag": "plant",
  "ac": 13,
  "acNote": "",
  "hp": 59,
  "hpFormula": "7d12 + 14",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      6,
      -2
    ],
    "con": [
      15,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "-2",
  "damageVulnerabilities": "Fire",
  "damageResistances": "Bludgeoning, Piercing",
  "senses": "Passive Perception 10",
  "languages": "Common plus one other language",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 14 (3d6 + 4) Bludgeoning damage."
    }
  ]
},
{
  "id": "axe-beak",
  "name": "Axe Beak",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 11,
  "acNote": "",
  "hp": 19,
  "hpFormula": "3d10 + 3",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+1",
  "senses": "Passive Perception 10",
  "languages": "None",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Beak",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 6 (1d8 + 2) Slashing damage."
    }
  ]
},
{
  "id": "azer-sentinel",
  "name": "Azer Sentinel",
  "size": "Medium",
  "type": "Elemental",
  "alignment": "Lawful Neutral",
  "tag": "elemental",
  "ac": 17,
  "acNote": "",
  "hp": 39,
  "hpFormula": "6d8 + 12",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+1",
  "savingThrows": "Con +4",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Passive Perception 11",
  "languages": "Primordial (Ignan)",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Fire Aura",
      "text": "At the end of each of the azer's turns, each creature of the azer's choice in a 5-foot Emanation originating from the azer takes 5 (1d10) Fire damage unless the azer has the Incapacitated condition."
    },
    {
      "name": "Illumination",
      "text": "The azer sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet."
    }
  ],
  "actions": [
    {
      "name": "Burning Hammer",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 8 (1d10 + 3) Bludgeoning damage plus 3 (1d6) Fire damage."
    }
  ]
},
{
  "id": "balor",
  "name": "Balor",
  "size": "Huge",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 19,
  "acNote": "",
  "hp": 287,
  "hpFormula": "23d12 + 138",
  "speed": "40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      26,
      8
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      22,
      6
    ],
    "int": [
      20,
      5
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      22,
      6
    ]
  },
  "initiative": "+14",
  "savingThrows": "Con +12, Wis +9",
  "skills": "Perception +9",
  "damageResistances": "Cold, Lightning",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Charmed, Frightened, Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 19",
  "languages": "Abyssal; telepathy 120 ft.",
  "cr": "19",
  "crNum": 19.0,
  "xp": 22000,
  "traits": [
    {
      "name": "Death Throes",
      "text": "The balor explodes when it dies. <i>Dexterity Saving Throw:</i> DC 20, each creature in a 30-foot Emanation originating from the balor. <i>Failure:</i> 31 (9d6) Fire damage plus 31 (9d6) Force damage. <i>Success:</i> Half damage. <i>Failure or Success:</i> If the balor dies outside the Abyss, it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
    },
    {
      "name": "Fire Aura",
      "text": "At the end of each of the balor's turns, each creature in a 5-foot Emanation originating from the balor takes 13 (3d8) Fire damage."
    },
    {
      "name": "Legendary Resistance (3/Day)",
      "text": "If the balor fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Magic Resistance",
      "text": "The balor has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The balor makes one Flame Whip attack and one Lightning Blade attack."
    },
    {
      "name": "Flame Whip",
      "text": "<i>Melee Attack Roll:</i> +14, reach 30 ft. <i>Hit:</i> 18 (3d6 + 8) Force damage plus 17 (5d6) Fire damage. If the target is a Huge or smaller creature, the balor pulls the target up to 25 feet straight toward itself, and the target has the Prone condition."
    },
    {
      "name": "Lightning Blade",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 21 (3d8 + 8) Force damage plus 22 (4d10) Lightning damage, and the target can't take Reactions until the start of the balor's next turn."
    },
    {
      "name": "Teleport",
      "text": "The balor teleports itself or a willing demon within 10 feet of itself up to 60 feet to an unoccupied space the balor can see."
    }
  ]
},
{
  "id": "barbed-devil",
  "name": "Barbed Devil",
  "size": "Medium",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 110,
  "hpFormula": "13d8 + 52",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      18,
      4
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+3",
  "savingThrows": "Str +6, Con +7, Wis +5, Cha +5",
  "skills": "Deception +5, Insight +5, Perception +8",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft. (unimpeded by magical Darkness); Passive Perception 18",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Barbed Hide",
      "text": "At the start of each of its turns, the devil deals 5 (1d10) Piercing damage to any creature it is grappling or any creature grappling it."
    },
    {
      "name": "Diabolical Restoration",
      "text": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Magic Resistance",
      "text": "The devil has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The devil makes one Claws attack and one Tail attack, or it makes two Hurl Flame attacks."
    },
    {
      "name": "Claws",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13) from both claws."
    },
    {
      "name": "Tail",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 14 (2d10 + 3) Slashing damage."
    },
    {
      "name": "Hurl Flame",
      "text": "<i>Ranged Attack Roll:</i> +5, range 150 ft. <i>Hit:</i> 17 (5d6) Fire damage. If the target is a flammable object that isn't being worn or carried, it starts burning."
    }
  ]
},
{
  "id": "basilisk",
  "name": "Basilisk",
  "size": "Medium",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 15,
  "acNote": "",
  "hp": 52,
  "hpFormula": "8d8 + 16",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "-1",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "None",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Piercing damage plus 7 (2d6) Poison damage."
    },
    {
      "name": "Petrifying Gaze (Recharge 4\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 12, each creature in a 30-foot Cone. If the basilisk sees its reflection in the Cone, the basilisk must make this save. <i>First Failure:</i> The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. <i>Second Failure:</i> The target has the Petrified condition instead of the Restrained condition."
    }
  ]
},
{
  "id": "bearded-devil",
  "name": "Bearded Devil",
  "size": "Medium",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 13,
  "acNote": "",
  "hp": 58,
  "hpFormula": "9d8 + 18",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      15,
      2
    ],
    "int": [
      9,
      -1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+2",
  "savingThrows": "Str +5, Con +4, Cha +4",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Frightened, Poisoned",
  "senses": "Darkvision 120 ft. (unimpeded by magical Darkness); Passive Perception 10",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The devil has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The devil makes one Beard attack and one Infernal Glaive attack."
    },
    {
      "name": "Beard",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Piercing damage, and the target has the Poisoned condition until the start of the devil's next turn. Until this poison ends, the target can't regain Hit Points."
    },
    {
      "name": "Infernal Glaive",
      "text": "<i>Melee Attack Roll:</i> +5, reach 10 ft. <i>Hit:</i> 8 (1d10 + 3) Slashing damage. If the target is a creature and doesn't already have an infernal wound, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 12. <i>Failure:</i> The target receives an infernal wound. While wounded, the target loses 5 (1d10) Hit Points at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit Points to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a DC 12 Wisdom (Medicine) check."
    }
  ]
},
{
  "id": "behir",
  "name": "Behir",
  "size": "Huge",
  "type": "Monstrosity",
  "alignment": "Neutral Evil",
  "tag": "monstrosity",
  "ac": 17,
  "acNote": "",
  "hp": 168,
  "hpFormula": "16d12 + 64",
  "speed": "50 ft., Climb 50 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      18,
      4
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+3",
  "skills": "Perception +6, Stealth +7",
  "damageImmunities": "Lightning",
  "senses": "Darkvision 90 ft.; Passive Perception 16",
  "languages": "Draconic",
  "cr": "11",
  "crNum": 11.0,
  "xp": 7200,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The behir makes one Bite attack and uses Constrict."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +10, reach 10 ft. <i>Hit:</i> 19 (2d12 + 6) Piercing damage plus 11 (2d10) Lightning damage."
    },
    {
      "name": "Constrict",
      "text": "<i>Strength Saving Throw:</i> DC 18, one Large or smaller creature the behir can see within 5 feet. <i>Failure:</i> 28 (5d8 + 6) Bludgeoning damage. The target has the Grappled condition (escape DC 16), and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 16, each creature in a 90-foot-long, 5-foot-wide Line. <i>Failure:</i> 66 (12d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Swallow",
      "text": "<i>Dexterity Saving Throw:</i> DC 18, one Large or smaller creature Grappled by the behir (the behir can have only one creature swallowed at a time). <i>Failure:</i> The behir swallows the target, which is no longer Grappled. While swallowed, a creature has the Blinded and Restrained conditions, has Total Cover against attacks and other effects outside the behir, and takes 21 (6d6) Acid damage at the start of each of the behir's turns. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls in a space within 10 feet of the behir and has the Prone condition. If the behir dies, a swallowed creature is no longer Restrained and can escape from the corpse by using 15 feet of movement, exiting Prone."
    }
  ]
},
{
  "id": "black-dragon-wyrmling",
  "name": "Black Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 33,
  "hpFormula": "6d8 + 6",
  "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      13,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +2",
  "skills": "Perception +4, Stealth +4",
  "damageImmunities": "Acid",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Slashing damage plus 2 (1d4) Acid damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 11, each creature in a 15-foot-long, 5-foot-wide Line. <i>Failure:</i> 22 (5d8) Acid damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "young-black-dragon",
  "name": "Young Black Dragon",
  "size": "Large",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 127,
  "hpFormula": "15d10 + 45",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      17,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+5",
  "savingThrows": "Dex +5, Wis +3",
  "skills": "Perception +6, Stealth +5",
  "damageImmunities": "Acid",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 16",
  "languages": "Common, Draconic",
  "cr": "7",
  "crNum": 7.0,
  "xp": 2900,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 9 (2d4 + 4) Slashing damage plus 3 (1d6) Acid damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 14, each creature in a 30-foot-long, 5-foot-wide Line. <i>Failure:</i> 49 (14d6) Acid damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "adult-black-dragon",
  "name": "Adult Black Dragon",
  "size": "Huge",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 19,
  "acNote": "",
  "hp": 195,
  "hpFormula": "17d12 + 85",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      21,
      5
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      19,
      4
    ]
  },
  "initiative": "+12",
  "savingThrows": "Dex +7, Wis +6",
  "skills": "Perception +11, Stealth +7",
  "damageImmunities": "Acid",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 21",
  "languages": "Common, Draconic",
  "cr": "14",
  "crNum": 14.0,
  "xp": 11500,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Acid Arrow</i> (level 3 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +11, reach 10 ft. <i>Hit:</i> 13 (2d6 + 6) Slashing damage plus 4 (1d8) Acid damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 18, each creature in a 60-foot-long, 5-foot-wide Line. <i>Failure:</i> 54 (12d8) Acid damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17, +9 to hit with spell attacks): **At Will:** <i>Acid Arrow</i> (level 3 version), <i>Detect Magic</i>, <i>Fear</i> **1/Day Each:** <i>Speak with Dead</i>, <i>Vitriolic Sphere</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Cloud of Insects",
        "text": "<i>Dexterity Saving Throw:</i> DC 17, one creature the dragon can see within 120 feet. <i>Failure:</i> 22 (4d10) Poison damage, and the target has Disadvantage on saving throws to maintain Concentration until the end of its next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "text": "The dragon uses Spellcasting to cast <i>Fear</i>. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "ancient-black-dragon",
  "name": "Ancient Black Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 22,
  "acNote": "",
  "hp": 367,
  "hpFormula": "21d20 + 147",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      25,
      7
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      22,
      6
    ]
  },
  "initiative": "+16",
  "savingThrows": "Dex +9, Wis +9",
  "skills": "Perception +16, Stealth +9",
  "damageImmunities": "Acid",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 26",
  "languages": "Common, Draconic",
  "cr": "21",
  "crNum": 21.0,
  "xp": 33000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Acid Arrow</i> (level 4 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +15, reach 15 ft. <i>Hit:</i> 17 (2d8 + 8) Slashing damage plus 9 (2d8) Acid damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 22, each creature in a 90-foot-long, 10-foot-wide Line. <i>Failure:</i> 67 (15d8) Acid damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21, +13 to hit with spell attacks): **At Will:** <i>Acid Arrow</i> (level 4 version), <i>Detect Magic</i>, <i>Fear</i> **1/Day Each:** <i>Create Undead</i>, <i>Speak with Dead</i>, <i>Vitriolic Sphere</i> (level 5 version)"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Cloud of Insects",
        "text": "<i>Dexterity Saving Throw:</i> DC 21, one creature the dragon can see within 120 feet. <i>Failure:</i> 33 (6d10) Poison damage, and the target has Disadvantage on saving throws to maintain Concentration until the end of its next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "text": "The dragon uses Spellcasting to cast <i>Fear</i>. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "black-pudding",
  "name": "Black Pudding",
  "size": "Large",
  "type": "Ooze",
  "alignment": "Unaligned",
  "tag": "ooze",
  "ac": 7,
  "acNote": "",
  "hp": 68,
  "hpFormula": "8d10 + 24",
  "speed": "20 ft., Climb 20 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      5,
      -3
    ],
    "con": [
      16,
      3
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      6,
      -2
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "-3",
  "damageImmunities": "Acid, Cold, Lightning, Slashing",
  "conditionImmunities": "Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",
  "senses": "Blindsight 60 ft.; Passive Perception 8",
  "languages": "None",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [
    {
      "name": "Amorphous",
      "text": "The pudding can move through a space as narrow as 1 inch without expending extra movement to do so."
    },
    {
      "name": "Corrosive Form",
      "text": "A creature that hits the pudding with a melee attack roll takes 4 (1d8) Acid damage. Nonmagical ammunition is destroyed immediately after hitting the pudding and dealing any damage. Any nonmagical weapon takes a cumulative \u22121 penalty to attack rolls immediately after dealing damage to the pudding and coming into contact with it. The weapon is destroyed if the penalty reaches \u22125. The penalty can be removed by casting the <i>Mending</i> spell on the weapon. In 1 minute, the pudding can eat through 2 feet of nonmagical wood or metal."
    },
    {
      "name": "Spider Climb",
      "text": "The pudding can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    }
  ],
  "actions": [
    {
      "name": "Dissolving Pseudopod",
      "text": "<i>Melee Attack Roll:</i> +5, reach 10 ft. <i>Hit:</i> 17 (4d6 + 3) Acid damage. Nonmagical armor worn by the target takes a \u22121 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the <i>Mending</i> spell on the armor."
    }
  ],
  "reactions": [
    {
      "name": "Split",
      "text": "<i>Trigger:</i> While the pudding is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. <i>Response:</i> The pudding splits into two new **Black Puddings**. Each new pudding is one size smaller than the original pudding and acts on its Initiative. The original pudding's Hit Points are divided evenly between the new puddings (round down)."
    }
  ]
},
{
  "id": "blue-dragon-wyrmling",
  "name": "Blue Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 65,
  "hpFormula": "10d8 + 20",
  "speed": "30 ft., Burrow 15 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      15,
      2
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +2, Wis +2",
  "skills": "Perception +4, Stealth +2",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 8 (1d10 + 3) Slashing damage plus 3 (1d6) Lightning damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 12, each creature in a 30-foot-long, 5-foot-wide Line. <i>Failure:</i> 21 (6d6) Lightning damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "young-blue-dragon",
  "name": "Young Blue Dragon",
  "size": "Large",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 152,
  "hpFormula": "16d10 + 64",
  "speed": "40 ft., Burrow 20 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      19,
      4
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      17,
      3
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +5",
  "skills": "Perception +9, Stealth +4",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 19",
  "languages": "Common, Draconic",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +9, reach 10 ft. <i>Hit:</i> 12 (2d6 + 5) Slashing damage plus 5 (1d10) Lightning damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 16, each creature in a 60-foot-long, 5-foot-wide Line. <i>Failure:</i> 55 (10d10) Lightning damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "adult-blue-dragon",
  "name": "Adult Blue Dragon",
  "size": "Huge",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 19,
  "acNote": "",
  "hp": 212,
  "hpFormula": "17d12 + 102",
  "speed": "40 ft., Burrow 30 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      25,
      7
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      23,
      6
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+10",
  "savingThrows": "Dex +5, Wis +7",
  "skills": "Perception +12, Stealth +5",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 22",
  "languages": "Common, Draconic",
  "cr": "16",
  "crNum": 16.0,
  "xp": 15000,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Shatter</i>."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +12, reach 10 ft. <i>Hit:</i> 16 (2d8 + 7) Slashing damage plus 5 (1d10) Lightning damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 19, each creature in a 90-foot-long, 5-foot-wide Line. <i>Failure:</i> 60 (11d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 18): **At Will:** <i>Detect Magic</i>, <i>Invisibility</i>, <i>Mage Hand</i>, <i>Shatter</i> **1/Day Each:** <i>Scrying</i>, <i>Sending</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Cloaked Flight",
        "text": "The dragon uses Spellcasting to cast <i>Invisibility</i> on itself, and it can fly up to half its Fly Speed. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Sonic Boom",
        "text": "The dragon uses Spellcasting to cast <i>Shatter</i>. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Tail Swipe",
        "text": "The dragon makes one Rend attack."
      }
    ]
  }
},
{
  "id": "ancient-blue-dragon",
  "name": "Ancient Blue Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 22,
  "acNote": "",
  "hp": 481,
  "hpFormula": "26d20 + 208",
  "speed": "40 ft., Burrow 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      29,
      9
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      27,
      8
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      25,
      7
    ]
  },
  "initiative": "+14",
  "savingThrows": "Dex +7, Wis +10",
  "skills": "Perception +17, Stealth +7",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 27",
  "languages": "Common, Draconic",
  "cr": "23",
  "crNum": 23.0,
  "xp": 50000,
  "traits": [
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Shatter</i> (level 3 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +16, reach 15 ft. <i>Hit:</i> 18 (2d8 + 9) Slashing damage plus 11 (2d10) Lightning damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 23, each creature in a 120-foot-long, 10-foot-wide Line. <i>Failure:</i> 88 (16d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 22): **At Will:** <i>Detect Magic</i>, <i>Invisibility</i>, <i>Mage Hand</i>, <i>Shatter</i> (level 3 version) **1/Day Each:** <i>Scrying</i>, <i>Sending</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Cloaked Flight",
        "text": "The dragon uses Spellcasting to cast <i>Invisibility</i> on itself, and it can fly up to half its Fly Speed. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Sonic Boom",
        "text": "The dragon uses Spellcasting to cast <i>Shatter</i> (level 3 version). The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Tail Swipe",
        "text": "The dragon makes one Rend attack."
      }
    ]
  }
},
{
  "id": "bone-devil",
  "name": "Bone Devil",
  "size": "Large",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 16,
  "acNote": "",
  "hp": 161,
  "hpFormula": "17d10 + 68",
  "speed": "40 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      18,
      4
    ],
    "int": [
      13,
      1
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+7",
  "savingThrows": "Str +8, Int +5, Wis +6, Cha +7",
  "skills": "Deception +7, Insight +6",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft. (unimpeded by magical Darkness); Passive Perception 12",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [
    {
      "name": "Diabolical Restoration",
      "text": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Magic Resistance",
      "text": "The devil has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The devil makes two Claw attacks and one Infernal Sting attack."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 13 (2d8 + 4) Slashing damage."
    },
    {
      "name": "Infernal Sting",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 15 (2d10 + 4) Piercing damage plus 18 (4d8) Poison damage, and the target has the Poisoned condition until the start of the devil's next turn. While Poisoned, the target can't regain Hit Points."
    }
  ]
},
{
  "id": "brass-dragon-wyrmling",
  "name": "Brass Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 15,
  "acNote": "",
  "hp": 22,
  "hpFormula": "4d8 + 4",
  "speed": "30 ft., Burrow 15 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      13,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +2, Wis +2",
  "skills": "Perception +4, Stealth +2",
  "damageImmunities": "Fire",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (1d10 + 2) Slashing damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 11, each creature in a 20-foot-long, 5-foot-wide Line. <i>Failure:</i> 14 (4d6) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Sleep Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 11, each creature in a 15-foot Cone. <i>Failure:</i> The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. <i>Second Failure:</i> The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
    }
  ]
},
{
  "id": "young-brass-dragon",
  "name": "Young Brass Dragon",
  "size": "Large",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 110,
  "hpFormula": "13d10 + 39",
  "speed": "40 ft., Burrow 20 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      17,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +3, Wis +3",
  "skills": "Perception +6, Persuasion +5, Stealth +3",
  "damageImmunities": "Fire",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 16",
  "languages": "Common, Draconic",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace two attacks with a use of Sleep Breath."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 15 (2d10 + 4) Slashing damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 14, each creature in a 40-foot-long, 5-foot-wide Line. <i>Failure:</i> 38 (11d6) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Sleep Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 14, each creature in a 30-foot Cone. <i>Failure:</i> The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. <i>Second Failure:</i> The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
    }
  ]
},
{
  "id": "adult-brass-dragon",
  "name": "Adult Brass Dragon",
  "size": "Huge",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 172,
  "hpFormula": "15d12 + 75",
  "speed": "40 ft., Burrow 30 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      21,
      5
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      17,
      3
    ]
  },
  "initiative": "+10",
  "savingThrows": "Dex +5, Wis +6",
  "skills": "History +7, Perception +11, Persuasion +8, Stealth +5",
  "damageImmunities": "Fire",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 21",
  "languages": "Common, Draconic",
  "cr": "13",
  "crNum": 13.0,
  "xp": 10000,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast <i>Scorching Ray</i>."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +11, reach 10 ft. <i>Hit:</i> 17 (2d10 + 6) Slashing damage plus 4 (1d8) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 18, each creature in a 60-foot-long, 5-foot-wide Line. <i>Failure:</i> 45 (10d8) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Sleep Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 18, each creature in a 60-foot Cone. <i>Failure:</i> The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. <i>Second Failure:</i> The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 16): **At Will:** <i>Detect Magic</i>, <i>Minor Illusion</i>, <i>Scorching Ray</i>, <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), <i>Speak with Animals</i> **1/Day Each:** <i>Detect Thoughts</i>, <i>Control Weather</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Blazing Light",
        "text": "The dragon uses Spellcasting to cast <i>Scorching Ray</i>."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Scorching Sands",
        "text": "<i>Dexterity Saving Throw:</i> DC 16, one creature the dragon can see within 120 feet. <i>Failure:</i> 27 (6d8) Fire damage, and the target's Speed is halved until the end of its next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "ancient-brass-dragon",
  "name": "Ancient Brass Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 20,
  "acNote": "",
  "hp": 332,
  "hpFormula": "19d20 + 133",
  "speed": "40 ft., Burrow 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      25,
      7
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      22,
      6
    ]
  },
  "initiative": "+12",
  "savingThrows": "Dex +6, Wis +8",
  "skills": "History +9, Perception +14, Persuasion +12, Stealth +6",
  "damageImmunities": "Fire",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 24",
  "languages": "Common, Draconic",
  "cr": "20",
  "crNum": 20.0,
  "xp": 25000,
  "traits": [
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast <i>Scorching Ray</i> (level 3 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +14, reach 15 ft. <i>Hit:</i> 19 (2d10 + 8) Slashing damage plus 7 (2d6) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 21, each creature in a 90-foot-long, 5-foot-wide Line. <i>Failure:</i> 58 (13d8) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Sleep Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 21, each creature in a 90-foot Cone. <i>Failure:</i> The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. <i>Second Failure:</i> The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 20): **At Will:** <i>Detect Magic</i>, <i>Minor Illusion</i>, <i>Scorching Ray</i> (level 3 version), <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), <i>Speak with Animals</i> **1/Day Each:** <i>Control Weather</i>, <i>Detect Thoughts</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Blazing Light",
        "text": "The dragon uses Spellcasting to cast <i>Scorching Ray</i> (level 3 version)."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Scorching Sands",
        "text": "<i>Dexterity Saving Throw:</i> DC 20, one creature the dragon can see within 120 feet. <i>Failure:</i> 36 (8d8) Fire damage, and the target's Speed is halved until the end of its next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "bronze-dragon-wyrmling",
  "name": "Bronze Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 15,
  "acNote": "",
  "hp": 39,
  "hpFormula": "6d8 + 12",
  "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      15,
      2
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +2, Wis +2",
  "skills": "Perception +4, Stealth +2",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 8 (1d10 + 3) Slashing damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 12, each creature in a 40-foot-long, 5-foot-wide Line. <i>Failure:</i> 16 (3d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Repulsion Breath",
      "text": "<i>Strength Saving Throw:</i> DC 12, each creature in a 30-foot Cone. <i>Failure:</i> The target is pushed up to 30 feet straight away from the dragon and has the Prone condition."
    }
  ]
},
{
  "id": "young-bronze-dragon",
  "name": "Young Bronze Dragon",
  "size": "Large",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 142,
  "hpFormula": "15d10 + 60",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      19,
      4
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      17,
      3
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +3, Wis +4",
  "skills": "Insight +4, Perception +7, Stealth +3",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 17",
  "languages": "Common, Draconic",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Repulsion Breath."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 16 (2d10 + 5) Slashing damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 15, each creature in a 60-foot-long, 5-foot-wide Line. <i>Failure:</i> 49 (9d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Repulsion Breath",
      "text": "<i>Strength Saving Throw:</i> DC 15, each creature in a 30-foot Cone. <i>Failure:</i> The target is pushed up to 40 feet straight away from the dragon and has the Prone condition."
    }
  ]
},
{
  "id": "adult-bronze-dragon",
  "name": "Adult Bronze Dragon",
  "size": "Huge",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 212,
  "hpFormula": "17d12 + 102",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      25,
      7
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      23,
      6
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+10",
  "savingThrows": "Dex +5, Wis +7",
  "skills": "Insight +7, Perception +12, Stealth +5",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 22",
  "languages": "Common, Draconic",
  "cr": "15",
  "crNum": 15.0,
  "xp": 13000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast <i>Guiding Bolt</i> (level 2 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +12, reach 10 ft. <i>Hit:</i> 16 (2d8 + 7) Slashing damage plus 5 (1d10) Lightning damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 19, each creature in a 90-foot-long, 5-foot-wide Line. <i>Failure:</i> 55 (10d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Repulsion Breath",
      "text": "<i>Strength Saving Throw:</i> DC 19, each creature in a 30-foot Cone. <i>Failure:</i> The target is pushed up to 60 feet straight away from the dragon and has the Prone condition."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17, +10 to hit with spell attacks): **At Will:** <i>Detect Magic</i>, <i>Guiding Bolt</i> (level 2 version), <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), <i>Speak with Animals</i>, <i>Thaumaturgy</i> **1/Day Each:** <i>Detect Thoughts</i>, <i>Water Breathing</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Guiding Light",
        "text": "The dragon uses Spellcasting to cast <i>Guiding Bolt</i> (level 2 version)."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Thunderclap",
        "text": "<i>Constitution Saving Throw:</i> DC 17, each creature in a 20-foot-radius Sphere centered on a point the dragon can see within 90 feet. <i>Failure:</i> 10 (3d6) Thunder damage, and the target has the Deafened condition until the end of its next turn."
      }
    ]
  }
},
{
  "id": "ancient-bronze-dragon",
  "name": "Ancient Bronze Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 22,
  "acNote": "",
  "hp": 444,
  "hpFormula": "24d20 + 192",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      29,
      9
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      27,
      8
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      25,
      7
    ]
  },
  "initiative": "+14",
  "savingThrows": "Dex +7, Wis +10",
  "skills": "Insight +10, Perception +17, Stealth +7",
  "damageImmunities": "Lightning",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 27",
  "languages": "Common, Draconic",
  "cr": "22",
  "crNum": 22.0,
  "xp": 41000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast <i>Guiding Bolt</i> (level 2 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +16, reach 15 ft. <i>Hit:</i> 18 (2d8 + 9) Slashing damage plus 9 (2d8) Lightning damage."
    },
    {
      "name": "Lightning Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 23, each creature in a 120-foot-long, 10-foot-wide Line. <i>Failure:</i> 82 (15d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Repulsion Breath",
      "text": "<i>Strength Saving Throw:</i> DC 23, each creature in a 30-foot Cone. <i>Failure:</i> The target is pushed up to 60 feet straight away from the dragon and has the Prone condition."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 22, +14 to hit with spell attacks): **At Will:** <i>Detect Magic</i>, <i>Guiding Bolt</i> (level 2 version), <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell), <i>Speak with Animals</i>, <i>Thaumaturgy</i> **1/Day Each:** <i>Detect Thoughts</i>, <i>Control Water</i>, <i>Scrying</i>, <i>Water Breathing</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Guiding Light",
        "text": "The dragon uses Spellcasting to cast <i>Guiding Bolt</i> (level 2 version)."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      },
      {
        "name": "Thunderclap",
        "text": "<i>Constitution Saving Throw:</i> DC 22, each creature in a 20-foot-radius Sphere centered on a point the dragon can see within 120 feet. <i>Failure:</i> 13 (3d8) Thunder damage, and the target has the Deafened condition until the end of its next turn."
      }
    ]
  }
},
{
  "id": "bugbear-stalker",
  "name": "Bugbear Stalker",
  "size": "Medium",
  "type": "Fey (Goblinoid)",
  "alignment": "Chaotic Evil",
  "tag": "fey",
  "ac": 15,
  "acNote": "",
  "hp": 65,
  "hpFormula": "10d8 + 20",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      14,
      2
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "savingThrows": "Con +4, Wis +3",
  "skills": "Stealth +6, Survival +3",
  "gear": "Chain Shirt, Javelins (6), Morningstar",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "Common, Goblin",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Abduct",
      "text": "The bugbear needn't spend extra movement to move a creature it is grappling."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The bugbear makes two Javelin or Morningstar attacks."
    },
    {
      "name": "Javelin",
      "text": "<i>Melee or Ranged Attack Roll:</i> +5, reach 10 ft. or range 30/120 ft. <i>Hit:</i> 13 (3d6 + 3) Piercing damage."
    },
    {
      "name": "Morningstar",
      "text": "<i>Melee Attack Roll:</i> +5 (with Advantage if the target is Grappled by the bugbear), reach 10 ft. <i>Hit:</i> 12 (2d8 + 3) Piercing damage."
    },
    {
      "name": "Quick Grapple",
      "text": "<i>Dexterity Saving Throw:</i> DC 13, one Medium or smaller creature the bugbear can see within 10 feet. <i>Failure:</i> The target has the Grappled condition (escape DC 13)."
    }
  ]
},
{
  "id": "bugbear-warrior",
  "name": "Bugbear Warrior",
  "size": "Medium",
  "type": "Fey (Goblinoid)",
  "alignment": "Chaotic Evil",
  "tag": "fey",
  "ac": 14,
  "acNote": "",
  "hp": 33,
  "hpFormula": "6d8 + 6",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      13,
      1
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Stealth +6, Survival +2",
  "gear": "Hide Armor, Light Hammers (3)",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Common, Goblin",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Abduct",
      "text": "The bugbear needn't spend extra movement to move a creature it is grappling."
    }
  ],
  "actions": [
    {
      "name": "Grab",
      "text": "<i>Melee Attack Roll:</i> +4, reach 10 ft. <i>Hit:</i> 9 (2d6 + 2) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 12)."
    },
    {
      "name": "Light Hammer",
      "text": "<i>Melee or Ranged Attack Roll:</i> +4 (with Advantage if the target is Grappled by the bugbear), reach 10 ft. or range 20/60 ft. <i>Hit:</i> 9 (3d4 + 2) Bludgeoning damage."
    }
  ]
},
{
  "id": "bulette",
  "name": "Bulette",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 17,
  "acNote": "",
  "hp": 94,
  "hpFormula": "9d10 + 45",
  "speed": "40 ft., Burrow 40 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      21,
      5
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+0",
  "skills": "Perception +6",
  "senses": "Darkvision 60 ft., Tremorsense 120 ft.; Passive Perception 16",
  "languages": "None",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The bulette makes two Bite attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 17 (2d12 + 4) Piercing damage."
    },
    {
      "name": "Deadly Leap",
      "text": "The bulette spends 5 feet of movement to jump to a space within 15 feet that contains one or more Large or smaller creatures. <i>Dexterity Saving Throw:</i> DC 15, each creature in the bulette's destination space. <i>Failure:</i> 19 (3d12) Bludgeoning damage, and the target has the Prone condition. <i>Success:</i> Half damage, and the target is pushed 5 feet straight away from the bulette."
    },
    {
      "name": "Leap",
      "text": "The bulette jumps up to 30 feet by spending 10 feet of movement."
    }
  ]
},
{
  "id": "centaur-trooper",
  "name": "Centaur Trooper",
  "size": "Large",
  "type": "Fey",
  "alignment": "Neutral Good",
  "tag": "fey",
  "ac": 16,
  "acNote": "",
  "hp": 45,
  "hpFormula": "6d10 + 12",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      14,
      2
    ],
    "int": [
      9,
      -1
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "skills": "Athletics +6, Perception +3",
  "gear": "Breastplate, Longbow, Pike",
  "senses": "Passive Perception 13",
  "languages": "Elvish, Sylvan",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The centaur makes two attacks, using Pike or Longbow in any combination."
    },
    {
      "name": "Pike",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 9 (1d10 + 4) Piercing damage."
    },
    {
      "name": "Longbow",
      "text": "<i>Ranged Attack Roll:</i> +4, range 150/600 ft. <i>Hit:</i> 6 (1d8 + 2) Piercing damage."
    },
    {
      "name": "Trampling Charge (Recharge 5\u20136)",
      "text": "The centaur moves up to its Speed without provoking Opportunity Attacks and can move through the spaces of Medium or smaller creatures. Each creature whose space the centaur enters is targeted once by the following effect. <i>Strength Saving Throw:</i> DC 14. <i>Failure:</i> 7 (1d6 + 4) Bludgeoning damage, and the target has the Prone condition."
    }
  ]
},
{
  "id": "chain-devil",
  "name": "Chain Devil",
  "size": "Medium",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 85,
  "hpFormula": "10d8 + 40",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      18,
      4
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+5",
  "savingThrows": "Con +7, Wis +4",
  "damageResistances": "Bludgeoning, Cold, Piercing, Slashing",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft. (unimpeded by magical Darkness); Passive Perception 11",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Diabolical Restoration",
      "text": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Magic Resistance",
      "text": "The devil has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The devil makes two Chain attacks and uses Conjure Infernal Chain."
    },
    {
      "name": "Chain",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 11 (2d6 + 4) Slashing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of two chains, and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Conjure Infernal Chain",
      "text": "The devil conjures a fiery chain to bind a creature. <i>Dexterity Saving Throw:</i> DC 15, one creature the devil can see within 60 feet. <i>Failure:</i> 9 (2d4 + 4) Fire damage, and the target has the Restrained condition until the end of the devil's next turn, at which point the chain disappears. If the target is Large or smaller, the devil moves the target up to 30 feet straight toward itself. <i>Success:</i> The chain disappears."
    }
  ],
  "reactions": [
    {
      "name": "Unnerving Gaze",
      "text": "<i>Trigger:</i> A creature the devil can see starts its turn within 30 feet of the devil and can see the devil. <i>Response\u2014Wisdom Saving Throw:</i> DC 15, the triggering creature. <i>Failure:</i> The target has the Frightened condition until the end of its turn. <i>Success:</i> The target is immune to this devil's Unnerving Gaze for 24 hours."
    }
  ]
},
{
  "id": "chimera",
  "name": "Chimera",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Chaotic Evil",
  "tag": "monstrosity",
  "ac": 14,
  "acNote": "",
  "hp": 114,
  "hpFormula": "12d10 + 48",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      19,
      4
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+0",
  "skills": "Perception +8",
  "senses": "Darkvision 60 ft.; Passive Perception 18",
  "languages": "Understands Draconic but can't speak",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The chimera makes one Ram attack, one Bite attack, and one Claw attack. It can replace the Claw attack with a use of Fire Breath if available."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 11 (2d6 + 4) Piercing damage, or 18 (4d6 + 4) Piercing damage if the chimera had Advantage on the attack roll."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 7 (1d6 + 4) Slashing damage."
    },
    {
      "name": "Ram",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 10 (1d12 + 4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 15, each creature in a 15-foot Cone. <i>Failure:</i> 31 (7d8) Fire damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "chuul",
  "name": "Chuul",
  "size": "Large",
  "type": "Aberration",
  "alignment": "Chaotic Evil",
  "tag": "aberration",
  "ac": 16,
  "acNote": "",
  "hp": 76,
  "hpFormula": "9d10 + 27",
  "speed": "30 ft., Swim 30 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      16,
      3
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+0",
  "skills": "Perception +4",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Understands Deep Speech but can't speak",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The chuul can breathe air and water."
    },
    {
      "name": "Sense Magic",
      "text": "The chuul senses magic within 120 feet of itself. This trait otherwise works like the <i>Detect Magic</i> spell but isn't itself magical."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The chuul makes two Pincer attacks and uses Paralyzing Tentacles."
    },
    {
      "name": "Pincer",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 9 (1d10 + 4) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of two pincers."
    },
    {
      "name": "Paralyzing Tentacles",
      "text": "<i>Constitution Saving Throw:</i> DC 13, one creature Grappled by the chuul. <i>Failure:</i> The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Poisoned, the target has the Paralyzed condition."
    }
  ]
},
{
  "id": "clay-golem",
  "name": "Clay Golem",
  "size": "Large",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 14,
  "acNote": "",
  "hp": 123,
  "hpFormula": "13d10 + 52",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      20,
      5
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      18,
      4
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "+3",
  "damageResistances": "Bludgeoning, Piercing, Slashing",
  "damageImmunities": "Acid, Poison, Psychic",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "Common plus one other language",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [
    {
      "name": "Acid Absorption",
      "text": "Whenever the golem is subjected to Acid damage, it takes no damage and instead regains a number of Hit Points equal to the Acid damage dealt."
    },
    {
      "name": "Berserk",
      "text": "Whenever the golem starts its turn Bloodied, roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it continues to be berserk until it is destroyed or it is no longer Bloodied."
    },
    {
      "name": "Immutable Form",
      "text": "The golem can't shape-shift."
    },
    {
      "name": "Magic Resistance",
      "text": "The golem has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The golem makes two Slam attacks, or it makes three Slam attacks if it used Hasten this turn."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +9, reach 5 ft. <i>Hit:</i> 10 (1d10 + 5) Bludgeoning damage plus 6 (1d12) Acid damage, and the target's Hit Point maximum decreases by an amount equal to the Acid damage taken."
    },
    {
      "name": "Hasten (Recharge 5\u20136)",
      "text": "The golem takes the Dash and Disengage actions."
    }
  ]
},
{
  "id": "cloaker",
  "name": "Cloaker",
  "size": "Large",
  "type": "Aberration",
  "alignment": "Chaotic Neutral",
  "tag": "aberration",
  "ac": 14,
  "acNote": "",
  "hp": 91,
  "hpFormula": "14d10 + 14",
  "speed": "10 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      12,
      1
    ],
    "int": [
      13,
      1
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+5",
  "skills": "Stealth +5",
  "damageImmunities": "Frightened",
  "senses": "Darkvision 120 ft.; Passive Perception 12",
  "languages": "Deep Speech, Undercommon",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Light Sensitivity",
      "text": "While in Bright Light, the cloaker has Disadvantage on attack rolls."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The cloaker makes one Attach attack and two Tail attacks."
    },
    {
      "name": "Attach",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 13 (3d6 + 3) Piercing damage. If the target is a Large or smaller creature, the cloaker attaches to it. While the cloaker is attached, the target has the Blinded condition, and the cloaker can't make Attach attacks against other targets. In addition, the cloaker halves the damage it takes (round down), and the target takes the same amount of damage. The cloaker can detach itself by spending 5 feet of movement. The target or a creature within 5 feet of it can take an action to try to detach the cloaker, doing so by succeeding on a DC 14 Strength (Athletics) check."
    },
    {
      "name": "Tail",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 8 (1d10 + 3) Slashing damage."
    },
    {
      "name": "Moan",
      "text": "<i>Wisdom Saving Throw:</i> DC 13, each creature in a 60-foot Emanation originating from the cloaker. <i>Failure:</i> The target has the Frightened condition until the end of the cloaker's next turn. <i>Success:</i> The target is immune to this cloaker's Moan for the next 24 hours."
    },
    {
      "name": "Phantasms (Recharge after a Short or Long Rest)",
      "text": "The cloaker casts the <i>Mirror Image</i> spell, requiring no spell components and using Wisdom as the spellcasting ability. The spell ends early if the cloaker starts or ends its turn in Bright Light."
    }
  ]
},
{
  "id": "cloud-giant",
  "name": "Cloud Giant",
  "size": "Huge",
  "type": "Giant",
  "alignment": "Neutral",
  "tag": "giant",
  "ac": 14,
  "acNote": "",
  "hp": 200,
  "hpFormula": "16d12 + 96",
  "speed": "40 ft., Fly 20 ft. (hover)",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      22,
      6
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+4",
  "savingThrows": "Con +10, Wis +7",
  "skills": "Insight +7, Perception +11",
  "senses": "Passive Perception 21",
  "languages": "Common, Giant",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The giant makes two attacks, using Thunderous Mace or Thundercloud in any combination. It can replace one attack with a use of Spellcasting to cast <i>Fog Cloud</i>."
    },
    {
      "name": "Thunderous Mace",
      "text": "<i>Melee Attack Roll:</i> +12, reach 10 ft. <i>Hit:</i> 21 (3d8 + 8) Bludgeoning damage plus 7 (2d6) Thunder damage."
    },
    {
      "name": "Thundercloud",
      "text": "<i>Ranged Attack Roll:</i> +12, range 240 ft. <i>Hit:</i> 18 (3d6 + 8) Thunder damage, and the target has the Incapacitated condition until the end of its next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The giant casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 15): **At Will:** <i>Detect Magic</i>, <i>Fog Cloud</i>, <i>Light</i> **1/Day Each:** <i>Control Weather</i>, <i>Gaseous Form</i>, <i>Telekinesis</i>"
    },
    {
      "name": "Misty Step",
      "text": "The giant casts the <i>Misty Step</i> spell, using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "cockatrice",
  "name": "Cockatrice",
  "size": "Small",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 11,
  "acNote": "",
  "hp": 22,
  "hpFormula": "5d6 + 5",
  "speed": "20 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+1",
  "damageImmunities": "Petrified",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [],
  "actions": [
    {
      "name": "Petrifying Bite",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 3 (1d4 + 1) Piercing damage. If the target is a creature, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 11. <i>First Failure:</i> The target has the Restrained condition. The target repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. <i>Second Failure:</i> The target has the Petrified condition, instead of the Restrained condition, for 24 hours."
    }
  ]
},
{
  "id": "copper-dragon-wyrmling",
  "name": "Copper Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 16,
  "acNote": "",
  "hp": 22,
  "hpFormula": "4d8 + 4",
  "speed": "30 ft., Climb 30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +3, Wis +2",
  "skills": "Perception +4, Stealth +3",
  "damageImmunities": "Acid",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (1d10 + 2) Slashing damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 11, each creature in a 20-foot-long, 5-foot-wide Line. <i>Failure:</i> 18 (4d8) Acid damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Slowing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 11, each creature in a 15-foot Cone. <i>Failure:</i> The target can't take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
    }
  ]
},
{
  "id": "young-copper-dragon",
  "name": "Young Copper Dragon",
  "size": "Large",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 119,
  "hpFormula": "14d10 + 42",
  "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      17,
      3
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +4",
  "skills": "Deception +5, Perception +7, Stealth +4",
  "damageImmunities": "Acid",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 17",
  "languages": "Common, Draconic",
  "cr": "7",
  "crNum": 7.0,
  "xp": 2900,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Slowing Breath."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 15 (2d10 + 4) Slashing damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 14, each creature in a 40-foot-long, 5-foot-wide Line. <i>Failure:</i> 40 (9d8) Acid damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Slowing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 14, each creature in a 30-foot Cone. <i>Failure:</i> The target can't take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
    }
  ]
},
{
  "id": "adult-copper-dragon",
  "name": "Adult Copper Dragon",
  "size": "Huge",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 184,
  "hpFormula": "16d12 + 80",
  "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      21,
      5
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+11",
  "savingThrows": "Dex +6, Wis +7",
  "skills": "Deception +9, Perception +12, Stealth +6",
  "damageImmunities": "Acid",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 22",
  "languages": "Common, Draconic",
  "cr": "14",
  "crNum": 14.0,
  "xp": 11500,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast <i>Mind Spike</i> (level 4 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +11, reach 10 ft. <i>Hit:</i> 17 (2d10 + 6) Slashing damage plus 4 (1d8) Acid damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 18, each creature in an 60-foot-long, 5-foot-wide Line. <i>Failure:</i> 54 (12d8) Acid damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Slowing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 18, each creature in a 60-foot Cone. <i>Failure:</i> The target can't take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): **At Will:** <i>Detect Magic</i>, <i>Mind Spike</i> (level 4 version), <i>Minor Illusion</i>, <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Greater Restoration</i>, <i>Major Image</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Giggling Magic",
        "text": "<i>Charisma Saving Throw:</i> DC 17, one creature the dragon can see within 90 feet. <i>Failure:</i> 24 (7d6) Psychic damage. Until the end of its next turn, the target rolls 1d6 whenever it makes an ability check or attack roll and subtracts the number rolled from the D20 Test. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Mind Jolt",
        "text": "The dragon uses Spellcasting to cast <i>Mind Spike</i> (level 4 version). The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "ancient-copper-dragon",
  "name": "Ancient Copper Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Metallic)",
  "alignment": "Chaotic Good",
  "tag": "dragon",
  "ac": 21,
  "acNote": "",
  "hp": 367,
  "hpFormula": "21d20 + 147",
  "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      25,
      7
    ],
    "int": [
      20,
      5
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      22,
      6
    ]
  },
  "initiative": "+15",
  "savingThrows": "Dex +8, Wis +10",
  "skills": "Deception +13, Perception +17, Stealth +8",
  "damageImmunities": "Acid",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 27",
  "languages": "Common, Draconic",
  "cr": "21",
  "crNum": 21.0,
  "xp": 33000,
  "traits": [
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast <i>Mind Spike</i> (level 5 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +15, reach 15 ft. <i>Hit:</i> 19 (2d10 + 8) Slashing damage plus 9 (2d8) Acid damage."
    },
    {
      "name": "Acid Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 22, each creature in an 90-foot-long, 10-foot-wide Line. <i>Failure:</i> 63 (14d8) Acid damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Slowing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 22, each creature in a 90-foot Cone. <i>Failure:</i> The target can't take Reactions; its Speed is halved; and it can take either an action or a Bonus Action on its turn, not both. This effect lasts until the end of its next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21): **At Will:** <i>Detect Magic, Mind Spike</i> (level 5 version), <i>Minor Illusion, Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Greater Restoration, Major Image, Project Image</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Giggling Magic",
        "text": "<i>Charisma Saving Throw:</i> DC 21, one creature the dragon can see within 120 feet. <i>Failure:</i> 31 (9d6) Psychic damage. Until the end of its next turn, the target rolls 1d8 whenever it makes an ability check or attack roll and subtracts the number rolled from the D20 Test. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Mind Jolt",
        "text": "The dragon uses Spellcasting to cast <i>Mind Spike</i> (level 5 version). The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "couatl",
  "name": "Couatl",
  "size": "Medium",
  "type": "Celestial",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 19,
  "acNote": "",
  "hp": 60,
  "hpFormula": "8d8 + 24",
  "speed": "30 ft., Fly 90 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      20,
      5
    ],
    "con": [
      17,
      3
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      20,
      5
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+5",
  "savingThrows": "Con +5, Wis +7",
  "damageResistances": "Bludgeoning, Piercing, Slashing",
  "damageImmunities": "Psychic, Radiant",
  "senses": "Truesight 120 ft.; Passive Perception 15",
  "languages": "All; telepathy 120 ft.",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [
    {
      "name": "Shielded Mind",
      "text": "The couatl's thoughts can't be read by any means, and other creatures can communicate with it telepathically only if it allows them."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 11 (1d12 + 5) Piercing damage, and the target has the Poisoned condition until the end of the couatl's next turn."
    },
    {
      "name": "Constrict",
      "text": "<i>Strength Saving Throw:</i> DC 15, one Medium or smaller creature the couatl can see within 5 feet. <i>Failure:</i> 8 (1d6 + 5) Bludgeoning damage. The target has the Grappled condition (escape DC 13), and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Spellcasting",
      "text": "The couatl casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save DC 15): **At Will:** <i>Detect Evil and Good, Detect Magic, Detect Thoughts, Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Create Food and Water</i>, <i>Dream</i>, <i>Greater Restoration</i>, <i>Scrying</i>, <i>Sleep</i>"
    },
    {
      "name": "Divine Aid (2/Day)",
      "text": "The couatl casts <i>Bless</i>, <i>Lesser Restoration</i>, or <i>Sanctuary</i>, requiring no spell components and using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "swarm-of-crawling-claws",
  "name": "Swarm of Crawling Claws",
  "size": "Medium",
  "type": "Swarm of Tiny Undead",
  "alignment": "Neutral Evil",
  "tag": "swarm",
  "ac": 12,
  "acNote": "",
  "hp": 49,
  "hpFormula": "11d8",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      11,
      0
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      4,
      -3
    ]
  },
  "initiative": "+2",
  "damageResistances": "Bludgeoning, Piercing, Slashing",
  "damageImmunities": "Necrotic, Poison",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Grappled, Incapacitated, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned",
  "senses": "Blindsight 30 ft.; Passive Perception 10",
  "languages": "Understands Common but can't speak",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Swarm",
      "text": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can't regain Hit Points or gain Temporary Hit Points."
    }
  ],
  "actions": [
    {
      "name": "Swarm of Grasping Hands",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 20 (4d8 + 2) Necrotic damage, or 11 (2d8 + 2) Necrotic damage if the swarm is Bloodied. If the target is a Medium or smaller creature, it has the Prone condition."
    }
  ]
},
{
  "id": "cultist-fanatic",
  "name": "Cultist Fanatic",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 44,
  "hpFormula": "8d8 + 8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      12,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+2",
  "savingThrows": "Wis +4",
  "skills": "Deception +3, Persuasion +3, Religion +2",
  "gear": "Holy Symbol, Leather Armor",
  "senses": "Passive Perception 12",
  "languages": "Common",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Pact Blade",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 6 (1d8 + 2) Slashing damage plus 7 (2d6) Necrotic damage."
    },
    {
      "name": "Spellcasting",
      "text": "The cultist casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 12, +4 to hit with spell attacks): **At Will:** <i>Light</i>, <i>Thaumaturgy</i> **2/Day:** <i>Command</i> **1/Day:** <i>Hold Person</i>"
    },
    {
      "name": "Spiritual Weapon (2/Day)",
      "text": "The cultist casts the <i>Spiritual Weapon</i> spell, using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "darkmantle",
  "name": "Darkmantle",
  "size": "Small",
  "type": "Aberration",
  "alignment": "Unaligned",
  "tag": "aberration",
  "ac": 11,
  "acNote": "",
  "hp": 22,
  "hpFormula": "5d6 + 5",
  "speed": "10 ft., Fly 30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+3",
  "skills": "Stealth +3",
  "senses": "Blindsight 60 ft.; Passive Perception 10",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [],
  "actions": [
    {
      "name": "Crush",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 6 (1d6 + 3) Bludgeoning damage, and the darkmantle attaches to the target. If the target is a Medium or smaller creature and the darkmantle had Advantage on the attack roll, it covers the target, which has the Blinded condition and is suffocating while the darkmantle is attached in this way. While attached to a target, the darkmantle can attack only the target but has Advantage on its attack rolls. Its Speed becomes 0, it can't benefit from any bonus to its Speed, and it moves with the target. A creature can take an action to try to detach the darkmantle from itself, doing so with a successful DC 13 Strength (Athletics) check. On its turn, the darkmantle can detach itself by using 5 feet of movement."
    },
    {
      "name": "Darkness Aura (1/Day)",
      "text": "Magical Darkness fills a 15-foot Emanation originating from the darkmantle. This effect lasts while the darkmantle maintains Concentration on it, up to 10 minutes. Darkvision can't penetrate this area, and no light can illuminate it."
    }
  ]
},
{
  "id": "death-dog",
  "name": "Death Dog",
  "size": "Medium",
  "type": "Monstrosity",
  "alignment": "Neutral Evil",
  "tag": "monstrosity",
  "ac": 12,
  "acNote": "",
  "hp": 39,
  "hpFormula": "6d8 + 12",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      14,
      2
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+2",
  "skills": "Perception +5, Stealth +4",
  "damageImmunities": "Blinded, Charmed, Deafened, Frightened, Stunned, Unconscious",
  "senses": "Darkvision 120 ft.; Passive Perception 15",
  "languages": "None",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The death dog makes two Bite attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 4 (1d4 + 2) Piercing damage. If the target is a creature, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 12. <i>First Failure:</i> The target has the Poisoned condition. While Poisoned, the target's Hit Point maximum doesn't return to normal when finishing a Long Rest, and it repeats the save every 24 hours that elapse, ending the effect on itself on a success. <i>Subsequent Failures:</i> The Poisoned target's Hit Point maximum decreases by 5 (1d10)."
    }
  ]
},
{
  "id": "deva",
  "name": "Deva",
  "size": "Medium",
  "type": "Celestial (Angel)",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 17,
  "acNote": "",
  "hp": 229,
  "hpFormula": "27d8 + 108",
  "speed": "30 ft., Fly 90 ft. (hover)",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      18,
      4
    ],
    "con": [
      18,
      4
    ],
    "int": [
      17,
      3
    ],
    "wis": [
      20,
      5
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+4",
  "savingThrows": "Wis +9, Cha +9",
  "skills": "Insight +9, Perception +9",
  "damageResistances": "Radiant",
  "damageImmunities": "Charmed, Exhaustion, Frightened",
  "senses": "Darkvision 120 ft.; Passive Perception 19",
  "languages": "All; telepathy 120 ft.",
  "cr": "10",
  "crNum": 10.0,
  "xp": 5900,
  "traits": [
    {
      "name": "Exalted Restoration",
      "text": "If the deva dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia."
    },
    {
      "name": "Magic Resistance",
      "text": "The deva has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The deva makes two Holy Mace attacks."
    },
    {
      "name": "Holy Mace",
      "text": "<i>Melee Attack Roll:</i> +8, reach 5 ft. <i>Hit:</i> 7 (1d6 + 4) Bludgeoning damage plus 18 (4d8) Radiant damage."
    },
    {
      "name": "Spellcasting",
      "text": "The deva casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): **At Will:** <i>Detect Evil and Good</i>, <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Commune</i>, <i>Raise Dead</i>"
    },
    {
      "name": "Divine Aid (2/Day)",
      "text": "The deva casts <i>Cure Wounds</i>, <i>Lesser Restoration</i>, or <i>Remove Curse</i>, using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "djinni",
  "name": "Djinni",
  "size": "Large",
  "type": "Elemental (Genie)",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 17,
  "acNote": "",
  "hp": 218,
  "hpFormula": "19d10 + 114",
  "speed": "30 ft., Fly 90 ft. (hover)",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      22,
      6
    ],
    "int": [
      15,
      2
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +6, Wis +7",
  "damageImmunities": "Lightning, Thunder",
  "senses": "Darkvision 120 ft.; Passive Perception 13",
  "languages": "Primordial (Auran)",
  "cr": "11",
  "crNum": 11.0,
  "xp": 7200,
  "traits": [
    {
      "name": "Elemental Restoration",
      "text": "If the djinni dies outside the Elemental Plane of Air, its body dissolves into mist, and it gains a new body in 1d4 days, reviving with all its Hit Points somewhere on the Plane of Air."
    },
    {
      "name": "Magic Resistance",
      "text": "The djinni has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Wishes",
      "text": "The djinni has a 30 percent chance of knowing the <i>Wish</i> spell. If the djinni knows it, the djinni can cast it only on behalf of a non-genie creature who communicates a wish in a way the djinni can understand. If the djinni casts the spell for the creature, the djinni suffers none of the spell's stress. Once the djinni has cast it three times, the djinni can't do so again for 365 days."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The djinni makes three attacks, using Storm Blade or Storm Bolt in any combination."
    },
    {
      "name": "Storm Blade",
      "text": "<i>Melee Attack Roll:</i> +9, reach 5 feet. <i>Hit:</i> 12 (2d6 + 5) Slashing damage plus 7 (2d6) Lightning damage."
    },
    {
      "name": "Storm Bolt",
      "text": "<i>Ranged Attack Roll:</i> +9, range 120 feet. <i>Hit:</i> 13 (3d8) Thunder damage. If the target is a Large or smaller creature, it has the Prone condition."
    },
    {
      "name": "Create Whirlwind",
      "text": "The djinni conjures a whirlwind at a point it can see within 120 feet. The whirlwind fills a 20-foot-radius, 60-foot-high Cylinder centered on that point. The whirlwind lasts until the djinni's Concentration on it ends. The djinni can move the whirlwind up to 20 feet at the start of each of its turns. Whenever the whirlwind enters a creature's space or a creature enters the whirlwind, that creature is subjected to the following effect. <i>Strength Saving Throw:</i> DC 17 (a creature makes this save only once per turn, and the djinni is unaffected). <i>Failure:</i> While in the whirlwind, the target has the Restrained condition and moves with the whirlwind. At the start of each of its turns, the Restrained target takes 21 (6d6) Thunder damage. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success."
    },
    {
      "name": "Spellcasting",
      "text": "The djinni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): **At Will:** <i>Detect Evil and Good, Detect Magic</i> **2/Day Each:** <i>Create Food and Water</i> (can create wine instead of water), <i>Tongues, Wind Walk</i> **1/Day Each:** <i>Creation, Gaseous Form, Invisibility, Major Image, Plane Shift</i>"
    }
  ]
},
{
  "id": "dragon-turtle",
  "name": "Dragon Turtle",
  "size": "Gargantuan",
  "type": "Dragon",
  "alignment": "Neutral",
  "tag": "dragon",
  "ac": 20,
  "acNote": "",
  "hp": 356,
  "hpFormula": "23d20 + 115",
  "speed": "20 ft., Swim 50 ft.",
  "abilities": {
    "str": [
      25,
      7
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      20,
      5
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+6",
  "savingThrows": "Con +11, Wis +7",
  "damageResistances": "Fire",
  "senses": "Darkvision 120 ft.; Passive Perception 11",
  "languages": "Draconic, Primordial (Aquan)",
  "cr": "17",
  "crNum": 17.0,
  "xp": 18000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Bite attacks. It can replace one attack with a Tail attack."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +13, reach 15 ft. <i>Hit:</i> 23 (3d10 + 7) Piercing damage plus 7 (2d6) Fire damage. Being underwater doesn't grant Resistance to this Fire damage."
    },
    {
      "name": "Tail",
      "text": "<i>Melee Attack Roll:</i> +13, reach 15 ft. <i>Hit:</i> 18 (2d10 + 7) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
    },
    {
      "name": "Steam Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 19, each creature in a 60-foot Cone. <i>Failure:</i> 56 (16d6) Fire damage. <i>Success:</i> Half damage. <i>Failure or Success:</i> Being underwater doesn't grant Resistance to this Fire damage."
    }
  ]
},
{
  "id": "dretch",
  "name": "Dretch",
  "size": "Small",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 11,
  "acNote": "",
  "hp": 18,
  "hpFormula": "4d6 + 4",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      12,
      1
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      3,
      -4
    ]
  },
  "initiative": "+0",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "Abyssal; telepathy 60 ft. (works only with creatures that understand Abyssal)",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 4 (1d6 + 1) Slashing damage."
    },
    {
      "name": "Fetid Cloud (1/Day)",
      "text": "<i>Constitution Saving Throw:</i> DC 11, each creature in a 10-foot Emanation originating from the dretch. <i>Failure:</i> The target has the Poisoned condition until the end of its next turn. While Poisoned, the creature can take either an action or a Bonus Action on its turn, not both, and it can't take Reactions."
    }
  ]
},
{
  "id": "drider",
  "name": "Drider",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Chaotic Evil",
  "tag": "monstrosity",
  "ac": 19,
  "acNote": "",
  "hp": 123,
  "hpFormula": "13d10 + 52",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      19,
      4
    ],
    "con": [
      18,
      4
    ],
    "int": [
      13,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+4",
  "skills": "Perception +6, Stealth +10",
  "senses": "Darkvision 120 ft.; Passive Perception 16",
  "languages": "Elvish, Undercommon",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [
    {
      "name": "Spider Climb",
      "text": "The drider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    },
    {
      "name": "Sunlight Sensitivity",
      "text": "While in sunlight, the drider has Disadvantage on ability checks and attack rolls."
    },
    {
      "name": "Web Walker",
      "text": "The drider ignores movement restrictions caused by webs, and the drider knows the location of any other creature in contact with the same web."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The drider makes three attacks, using Foreleg or Poison Burst in any combination."
    },
    {
      "name": "Foreleg",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 13 (2d8 + 4) Piercing damage."
    },
    {
      "name": "Poison Burst",
      "text": "<i>Ranged Attack Roll:</i> +6, range 120 ft. <i>Hit:</i> 13 (3d6 + 3) Poison damage."
    },
    {
      "name": "Magic of the Spider Queen (Recharge 5\u20136)",
      "text": "The drider casts <i>Darkness</i>, <i>Faerie Fire</i>, or <i>Web</i>, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 14)."
    }
  ]
},
{
  "id": "druid",
  "name": "Druid",
  "size": "Medium or Small",
  "type": "Humanoid (Druid)",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 44,
  "hpFormula": "8d8 + 8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+1",
  "skills": "Medicine +5, Nature +3, Perception +5",
  "gear": "Studded Leather Armor",
  "senses": "Passive Perception 15",
  "languages": "Common, Druidic, Sylvan",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The druid makes two attacks, using Vine Staff or Verdant Wisp in any combination."
    },
    {
      "name": "Vine Staff",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Bludgeoning damage plus 2 (1d4) Poison damage."
    },
    {
      "name": "Verdant Wisp",
      "text": "<i>Ranged Attack Roll:</i> +5, range 90 ft. <i>Hit:</i> 10 (3d6) Radiant damage."
    },
    {
      "name": "Spellcasting",
      "text": "The druid casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 13): **At Will:** <i>Druidcraft, Speak with Animals</i> **2/Day Each:** <i>Entangle, Thunderwave</i> **1/Day Each:** <i>Animal Messenger, Long-strider, Moonbeam</i>"
    }
  ]
},
{
  "id": "dryad",
  "name": "Dryad",
  "size": "Medium",
  "type": "Fey",
  "alignment": "Neutral",
  "tag": "fey",
  "ac": 16,
  "acNote": "",
  "hp": 22,
  "hpFormula": "5d8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      11,
      0
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+1",
  "skills": "Perception +4, Stealth +5",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Elvish, Sylvan",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The dryad has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Speak with Beasts and Plants",
      "text": "The dryad can communicate with Beasts and Plants as if they shared a language."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dryad makes one Vine Lash or Thorn Burst attack, and it can use Spellcasting to cast <i>Charm Monster</i>."
    },
    {
      "name": "Vine Lash",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 8 (1d8 + 4) Slashing damage."
    },
    {
      "name": "Thorn Burst",
      "text": "<i>Ranged Attack Roll:</i> +6, range 60 ft. <i>Hit:</i> 7 (1d6 + 4) Piercing damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dryad casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 14): **At Will:** <i>Animal Friendship, Charm Monster</i> (lasts 24 hours; ends early if the dryad casts the spell again), <i>Druidcraft</i> **1/Day Each:** <i>Entangle, Pass without Trace</i>"
    },
    {
      "name": "Tree Stride",
      "text": "If within 5 feet of a Large or bigger tree, the dryad teleports to an unoccupied space within 5 feet of a second Large or bigger tree that is within 60 feet of the previous tree."
    }
  ]
},
{
  "id": "earth-elemental",
  "name": "Earth Elemental",
  "size": "Large",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 17,
  "acNote": "",
  "hp": 147,
  "hpFormula": "14d10 + 70",
  "speed": "30 ft., Burrow 30 ft.",
  "abilities": {
    "str": [
      20,
      5
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      20,
      5
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "-1",
  "damageVulnerabilities": "Thunder",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
  "senses": "Darkvision 60 ft., Tremorsense 60 ft.; Passive Perception 10",
  "languages": "Primordial (Terran)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Earth Glide",
      "text": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
    },
    {
      "name": "Siege Monster",
      "text": "The elemental deals double damage to objects and structures."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The elemental makes two attacks, using Slam or Rock Launch in any combination."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 14 (2d8 + 5) Bludgeoning damage."
    },
    {
      "name": "Rock Launch",
      "text": "<i>Ranged Attack Roll:</i> +8, range 60 ft. <i>Hit:</i> 8 (1d6 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
    }
  ]
},
{
  "id": "efreeti",
  "name": "Efreeti",
  "size": "Large",
  "type": "Elemental (Genie)",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 17,
  "acNote": "",
  "hp": 212,
  "hpFormula": "17d10 + 119",
  "speed": "40 ft., Fly 60 ft. (hover)",
  "abilities": {
    "str": [
      22,
      6
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      24,
      7
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      19,
      4
    ]
  },
  "initiative": "+1",
  "savingThrows": "Wis +6, Cha +8",
  "damageImmunities": "Fire",
  "senses": "Darkvision 120 ft.; Passive Perception 12",
  "languages": "Primordial (Ignan)",
  "cr": "11",
  "crNum": 11.0,
  "xp": 7200,
  "traits": [
    {
      "name": "Elemental Restoration",
      "text": "If the efreeti dies outside the Elemental Plane of Fire, its body dissolves into ash, and it gains a new body in 1d4 days, reviving with all its Hit Points somewhere on the Plane of Fire."
    },
    {
      "name": "Magic Resistance",
      "text": "The efreeti has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Wishes",
      "text": "The efreeti has a 30 percent chance of knowing the <i>Wish</i> spell. If the efreeti knows it, the efreeti can cast it only on behalf of a non-genie creature who communicates a wish in a way the efreeti can understand. If the efreeti casts the spell for the creature, the efreeti suffers none of the spell's stress. Once the efreeti has cast it three times, the efreeti can't do so again for 365 days."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The efreeti makes three attacks, using Heated Blade or Hurl Flame in any combination."
    },
    {
      "name": "Heated Blade",
      "text": "<i>Melee Attack Roll:</i> +10, reach 5 ft. <i>Hit:</i> 13 (2d6 + 6) Slashing damage plus 13 (2d12) Fire damage."
    },
    {
      "name": "Hurl Flame",
      "text": "<i>Ranged Attack Roll:</i> +8, range 120 ft. <i>Hit:</i> 24 (7d6) Fire damage."
    },
    {
      "name": "Spellcasting",
      "text": "The efreeti casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 16): **At Will:** <i>Detect Magic, Elementalism</i> **1/Day Each:** <i>Gaseous Form, Invisibility, Major Image, Plane Shift, Tongues, Wall of Fire</i> (level 7 version)"
    }
  ]
},
{
  "id": "erinyes",
  "name": "Erinyes",
  "size": "Medium",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 18,
  "acNote": "",
  "hp": 178,
  "hpFormula": "21d8 + 84",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      18,
      4
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+7",
  "savingThrows": "Dex +7, Con +8, Cha +8",
  "skills": "Perception +6, Persuasion +8",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 16",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "12",
  "crNum": 12.0,
  "xp": 8400,
  "traits": [
    {
      "name": "Diabolical Restoration",
      "text": "If the erinyes dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Magic Resistance",
      "text": "The erinyes has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Magic Rope",
      "text": "The erinyes has a magic rope. While bearing it, the erinyes can use the Entangling Rope action. The rope has AC 20, HP 90, and Immunity to Poison and Psychic damage. The rope turns to dust if reduced to 0 Hit Points, if it is 5+ feet away from the erinyes for 1 hour or more, or if the erinyes dies. If the rope is damaged or destroyed, the erinyes can fully restore it when finishing a Short or Long Rest."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The erinyes makes three Withering Sword attacks and can use Entangling Rope."
    },
    {
      "name": "Withering Sword",
      "text": "<i>Melee Attack Roll:</i> +8, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Slashing damage plus 11 (2d10) Necrotic damage."
    },
    {
      "name": "Entangling Rope (Requires Magic Rope)",
      "text": "<i>Strength Saving Throw:</i> DC 16, one creature the erinyes can see within 120 feet. <i>Failure:</i> 14 (4d6) Force damage, and the target has the Restrained condition until the rope is destroyed, the erinyes uses a Bonus Action to release the target, or the erinyes uses Entangling Rope again."
    }
  ],
  "reactions": [
    {
      "name": "Parry",
      "text": "<i>Trigger:</i> The erinyes is hit by a melee attack roll while holding a weapon. <i>Response:</i> The erinyes adds 4 to its AC against that attack, possibly causing it to miss."
    }
  ]
},
{
  "id": "ettercap",
  "name": "Ettercap",
  "size": "Medium",
  "type": "Monstrosity",
  "alignment": "Neutral Evil",
  "tag": "monstrosity",
  "ac": 13,
  "acNote": "",
  "hp": 44,
  "hpFormula": "8d8 + 8",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      13,
      1
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Perception +3, Stealth +4, Survival +3",
  "senses": "Darkvision 60 ft.; Passive Perception 13",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Spider Climb",
      "text": "The ettercap can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    },
    {
      "name": "Web Walker",
      "text": "The ettercap ignores movement restrictions caused by webs, and the ettercap knows the location of any other creature in contact with the same web."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The ettercap makes one Bite attack and one Claw attack."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Piercing damage plus 2 (1d4) Poison damage, and the target has the Poisoned condition until the start of the ettercap's next turn."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (2d4 + 2) Slashing damage."
    },
    {
      "name": "Web Strand (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 12, one Large or smaller creature the ettercap can see within 30 feet. <i>Failure:</i> The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability to Fire damage; Immunity to Bludgeoning, Poison, and Psychic damage)."
    },
    {
      "name": "Reel",
      "text": "The ettercap pulls one creature within 30 feet of itself that is Restrained by its Web Strand up to 25 feet straight toward itself."
    }
  ]
},
{
  "id": "ettin",
  "name": "Ettin",
  "size": "Large",
  "type": "Giant",
  "alignment": "Chaotic Evil",
  "tag": "giant",
  "ac": 12,
  "acNote": "",
  "hp": 85,
  "hpFormula": "10d10 + 30",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      17,
      3
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "-1",
  "skills": "Perception +4",
  "damageImmunities": "Blinded, Charmed, Deafened, Frightened, Stunned, Unconscious",
  "gear": "Battleaxe, Morningstar",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Giant",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The ettin makes one Battleaxe attack and one Morningstar attack."
    },
    {
      "name": "Battleaxe",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 14 (2d8 + 5) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
    },
    {
      "name": "Morningstar",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 14 (2d8 + 5) Piercing damage, and the target has Disadvantage on the next attack roll it makes before the end of its next turn."
    }
  ]
},
{
  "id": "fire-elemental",
  "name": "Fire Elemental",
  "size": "Large",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 13,
  "acNote": "",
  "hp": 93,
  "hpFormula": "11d10 + 33",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      16,
      3
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+3",
  "damageResistances": "Bludgeoning, Piercing, Slashing",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Ignan)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Fire Aura",
      "text": "At the end of each of the elemental's turns, each creature in a 10-foot Emanation originating from the elemental takes 5 (1d10) Fire damage. Creatures and flammable objects in the Emanation start burning."
    },
    {
      "name": "Fire Form",
      "text": "The elemental can move through a space as narrow as 1 inch without expending extra movement to do so, and it can enter a creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) Fire damage."
    },
    {
      "name": "Illumination",
      "text": "The elemental sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet."
    },
    {
      "name": "Water Susceptibility",
      "text": "The elemental takes 3 (1d6) Cold damage for every 5 feet the elemental moves in water or for every gallon of water splashed on it."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The elemental makes two Burn attacks."
    },
    {
      "name": "Burn",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Fire damage. If the target is a creature or a flammable object, it starts burning."
    }
  ]
},
{
  "id": "fire-giant",
  "name": "Fire Giant",
  "size": "Huge",
  "type": "Giant",
  "alignment": "Lawful Evil",
  "tag": "giant",
  "ac": 18,
  "acNote": "",
  "hp": 162,
  "hpFormula": "13d12 + 78",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      25,
      7
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      23,
      6
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +3, Con +10, Cha +5",
  "skills": "Athletics +11, Perception +6",
  "damageImmunities": "Fire",
  "senses": "Passive Perception 16",
  "languages": "Giant",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The giant makes two attacks, using Flame Sword or Hammer Throw in any combination."
    },
    {
      "name": "Flame Sword",
      "text": "<i>Melee Attack Roll:</i> +11, reach 10 ft. <i>Hit:</i> 21 (4d6 + 7) Slashing damage plus 10 (3d6) Fire damage."
    },
    {
      "name": "Hammer Throw",
      "text": "<i>Ranged Attack Roll:</i> +11, range 60/240 ft. <i>Hit:</i> 23 (3d10 + 7) Bludgeoning damage plus 4 (1d8) Fire damage, and the target is pushed up to 15 feet straight away from the giant and has Disadvantage on the next attack roll it makes before the end of its next turn."
    }
  ]
},
{
  "id": "flesh-golem",
  "name": "Flesh Golem",
  "size": "Medium",
  "type": "Construct",
  "alignment": "Neutral",
  "tag": "construct",
  "ac": 9,
  "acNote": "",
  "hp": 127,
  "hpFormula": "15d8 + 60",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      18,
      4
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "-1",
  "damageImmunities": "Lightning, Poison",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Understands Common plus one other language but can't speak",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Aversion to Fire",
      "text": "If the golem takes Fire damage, it has Disadvantage on attack rolls and ability checks until the end of its next turn."
    },
    {
      "name": "Berserk",
      "text": "Whenever the golem starts its turn Bloodied, roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it remains so until it is destroyed or it is no longer Bloodied. The golem's creator, if within 60 feet of the berserk golem, can try to calm it by taking an action to make a DC 15 Charisma (Persuasion) check; the golem must be able to hear its creator. If this check succeeds, the golem ceases being berserk until the start of its next turn, at which point it resumes rolling for the Berserk trait again if it is still Bloodied."
    },
    {
      "name": "Immutable Form",
      "text": "The golem can't shape-shift."
    },
    {
      "name": "Lightning Absorption",
      "text": "Whenever the golem is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt."
    },
    {
      "name": "Magic Resistance",
      "text": "The golem has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The golem makes two Slam attacks."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Bludgeoning damage plus 4 (1d8) Lightning damage."
    }
  ]
},
{
  "id": "frost-giant",
  "name": "Frost Giant",
  "size": "Huge",
  "type": "Giant",
  "alignment": "Neutral Evil",
  "tag": "giant",
  "ac": 15,
  "acNote": "",
  "hp": 149,
  "hpFormula": "13d12 + 65",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      21,
      5
    ],
    "int": [
      9,
      -1
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+2",
  "savingThrows": "Con +8, Wis +3, Cha +4",
  "skills": "Athletics +9, Perception +3",
  "damageImmunities": "Cold",
  "senses": "Passive Perception 13",
  "languages": "Giant",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The giant makes two attacks, using Frost Axe or Great Bow in any combination."
    },
    {
      "name": "Frost Axe",
      "text": "<i>Melee Attack Roll:</i> +9, reach 10 ft. <i>Hit:</i> 19 (2d12 + 6) Slashing damage plus 9 (2d8) Cold damage."
    },
    {
      "name": "Great Bow",
      "text": "<i>Ranged Attack Roll:</i> +9, range 150/600 ft. <i>Hit:</i> 17 (2d10 + 6) Piercing damage plus 7 (2d6) Cold damage, and the target's Speed decreases by 10 feet until the end of its next turn."
    },
    {
      "name": "War Cry (Recharge 5\u20136)",
      "text": "The giant or one creature of its choice that can see or hear it gains 16 (2d10 + 5) Temporary Hit Points and has Advantage on attack rolls until the start of the giant's next turn."
    }
  ]
},
{
  "id": "shrieker-fungus",
  "name": "Shrieker Fungus",
  "size": "Medium",
  "type": "Plant",
  "alignment": "Unaligned",
  "tag": "plant",
  "ac": 5,
  "acNote": "",
  "hp": 13,
  "hpFormula": "3d8",
  "speed": "5 ft.",
  "abilities": {
    "str": [
      1,
      -5
    ],
    "dex": [
      1,
      -5
    ],
    "con": [
      10,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      3,
      -4
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "-5",
  "damageImmunities": "Blinded, Charmed, Deafened, Frightened",
  "senses": "Blindsight 30 ft.; Passive Perception 6",
  "languages": "None",
  "cr": "0",
  "crNum": 0.0,
  "xp": 0,
  "traits": [],
  "actions": [],
  "reactions": [
    {
      "name": "Shriek",
      "text": "<i>Trigger:</i> A creature or a source of Bright Light moves within 30 feet of the shrieker. <i>Response:</i> The shrieker emits a shriek audible within 300 feet of itself for 1 minute or until the shrieker dies."
    }
  ]
},
{
  "id": "gargoyle",
  "name": "Gargoyle",
  "size": "Medium",
  "type": "Elemental",
  "alignment": "Chaotic Evil",
  "tag": "elemental",
  "ac": 15,
  "acNote": "",
  "hp": 67,
  "hpFormula": "9d8 + 27",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      16,
      3
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+2",
  "skills": "Stealth +4",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Petrified, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Terran)",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Flyby",
      "text": "The gargoyle doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The gargoyle makes two Claw attacks."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (2d4 + 2) Slashing damage."
    }
  ]
},
{
  "id": "gelatinous-cube",
  "name": "Gelatinous Cube",
  "size": "Large",
  "type": "Ooze",
  "alignment": "Unaligned",
  "tag": "ooze",
  "ac": 6,
  "acNote": "",
  "hp": 63,
  "hpFormula": "6d10 + 30",
  "speed": "15 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      3,
      -4
    ],
    "con": [
      20,
      5
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      6,
      -2
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "-4",
  "damageImmunities": "Acid",
  "conditionImmunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
  "senses": "Blindsight 60 ft.; Passive Perception 8",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Ooze Cube",
      "text": "The cube fills its entire space and is transparent. Other creatures can enter that space, but a creature that does so is subjected to the cube's Engulf and has Disadvantage on the saving throw. Creatures inside the cube have Total Cover, and the cube can hold one Large creature or up to four Medium or Small creatures inside itself at a time. As an action, a creature within 5 feet of the cube can pull a creature or an object out of the cube by succeeding on a DC 12 Strength (Athletics) check, and the puller takes 10 (3d6) Acid damage."
    },
    {
      "name": "Transparent",
      "text": "Even when the cube is in plain sight, a creature must succeed on a DC 15 Wisdom (Perception) check to notice the cube if the creature hasn't witnessed the cube move or otherwise act."
    }
  ],
  "actions": [
    {
      "name": "Pseudopod",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 12 (3d6 + 2) Acid damage."
    },
    {
      "name": "Engulf",
      "text": "The cube moves up to its Speed without provoking Opportunity Attacks. The cube can move through the spaces of Large or smaller creatures if it has room inside itself to contain them (see the Ooze Cube trait). <i>Dexterity Saving Throw:</i> DC 12, each creature whose space the cube enters for the first time during this move. <i>Failure:</i> 10 (3d6) Acid damage, and the target is engulfed. An engulfed target is suffocating, can't cast spells with a Verbal component, has the Restrained condition, and takes 10 (3d6) Acid damage at the start of each of the cube's turns. When the cube moves, the engulfed target moves with it. An engulfed target can try to escape by taking an action to make a DC 12 Strength (Athletics) check. On a successful check, the target escapes and enters the nearest unoccupied space. <i>Success:</i> Half damage, and the target moves to an unoccupied space within 5 feet of the cube. If there is no unoccupied space, the target fails the save instead."
    }
  ]
},
{
  "id": "gibbering-mouther",
  "name": "Gibbering Mouther",
  "size": "Medium",
  "type": "Aberration",
  "alignment": "Chaotic Neutral",
  "tag": "aberration",
  "ac": 9,
  "acNote": "",
  "hp": 52,
  "hpFormula": "7d8 + 21",
  "speed": "20 ft., Swim 20 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      16,
      3
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "-1",
  "damageImmunities": "Prone",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Aberrant Ground",
      "text": "The ground in a 10-foot Emanation originating from the mouther is Difficult Terrain."
    },
    {
      "name": "Gibbering",
      "text": "The mouther babbles incoherently while it doesn't have the Incapacitated condition. <i>Wisdom Saving Throw:</i> DC 10, any creature that starts its turn within 20 feet of the mouther while it is babbling. <i>Failure:</i> The target rolls 1d8 to determine what it does during the current turn: **1\u20134.** The target does nothing. **5\u20136.** The target takes no action or Bonus Action and uses all its movement to move in a random direction. **7\u20138.** The target makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +2, reach 5 ft. <i>Hit:</i> 7 (2d6) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition. The target dies if it is reduced to 0 Hit Points by this attack. Its body is then absorbed into the mouther, leaving only equipment behind."
    },
    {
      "name": "Blinding Spittle (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 10, each creature in a 10-foot-radius Sphere centered on a point within 30 feet. <i>Failure:</i> 7 (2d6) Radiant damage, and the target has the Blinded condition until the end of the mouther's next turn."
    }
  ]
},
{
  "id": "glabrezu",
  "name": "Glabrezu",
  "size": "Large",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 17,
  "acNote": "",
  "hp": 189,
  "hpFormula": "18d10 + 90",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      20,
      5
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      21,
      5
    ],
    "int": [
      19,
      4
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+6",
  "savingThrows": "Str +9, Con +9, Wis +7, Cha +7",
  "skills": "Deception +7, Perception +7",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 17",
  "languages": "Abyssal; telepathy 120 ft.",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [
    {
      "name": "Demonic Restoration",
      "text": "If the glabrezu dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
    },
    {
      "name": "Magic Resistance",
      "text": "The glabrezu has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The glabrezu makes two Pincer attacks and uses Pummel or Spellcasting."
    },
    {
      "name": "Pincer",
      "text": "<i>Melee Attack Roll:</i> +9, reach 10 ft. <i>Hit:</i> 16 (2d10 + 5) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 15) from one of two pincers."
    },
    {
      "name": "Pummel",
      "text": "<i>Dexterity Saving Throw:</i> DC 17, one creature Grappled by the glabrezu. <i>Failure:</i> 15 (3d6 + 5) Bludgeoning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The glabrezu casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save DC 16): **At Will:** <i>Darkness, Detect Magic, Dispel Magic</i> **1/Day Each:** <i>Confusion, Fly, Power Word Stun</i>"
    }
  ]
},
{
  "id": "gnoll-warrior",
  "name": "Gnoll Warrior",
  "size": "Medium",
  "type": "Fiend",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 27,
  "hpFormula": "6d8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      11,
      0
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+1",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Gnoll",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Piercing damage."
    },
    {
      "name": "Bone Bow",
      "text": "<i>Ranged Attack Roll:</i> +3, range 150/600 ft. <i>Hit:</i> 6 (1d10 + 1) Piercing damage."
    },
    {
      "name": "Rampage (1/Day)",
      "text": "Immediately after dealing damage to a creature that is already Bloodied, the gnoll moves up to half its Speed, and it makes one Rend attack."
    }
  ]
},
{
  "id": "goblin-minion",
  "name": "Goblin Minion",
  "size": "Small",
  "type": "Fey (Goblinoid)",
  "alignment": "Chaotic Neutral",
  "tag": "fey",
  "ac": 12,
  "acNote": "",
  "hp": 7,
  "hpFormula": "2d6",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      8,
      -1
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      10,
      0
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Stealth +6",
  "gear": "Daggers (3)",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "Common, Goblin",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [],
  "actions": [
    {
      "name": "Dagger",
      "text": "<i>Melee or Ranged Attack Roll:</i> +4, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 4 (1d4 + 2) Piercing damage."
    },
    {
      "name": "Nimble Escape",
      "text": "The goblin takes the Disengage or Hide action."
    }
  ]
},
{
  "id": "goblin-warrior",
  "name": "Goblin Warrior",
  "size": "Small",
  "type": "Fey (Goblinoid)",
  "alignment": "Chaotic Neutral",
  "tag": "fey",
  "ac": 15,
  "acNote": "",
  "hp": 10,
  "hpFormula": "3d6",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      8,
      -1
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      10,
      0
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Stealth +6",
  "gear": "Leather Armor, Scimitar, Shield, Shortbow",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "Common, Goblin",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Scimitar",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Slashing damage, plus 2 (1d4) Slashing damage if the attack roll had Advantage."
    },
    {
      "name": "Shortbow",
      "text": "<i>Ranged Attack Roll:</i> +4, range 80/320 ft. <i>Hit:</i> 5 (1d6 + 2) Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had Advantage."
    },
    {
      "name": "Nimble Escape",
      "text": "The goblin takes the Disengage or Hide action."
    }
  ]
},
{
  "id": "gold-dragon-wyrmling",
  "name": "Gold Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 60,
  "hpFormula": "8d8 + 24",
  "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      17,
      3
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +2",
  "skills": "Perception +4, Stealth +4",
  "damageImmunities": "Fire",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 9 (1d10 + 4) Slashing damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 13, each creature in a 15-foot Cone. <i>Failure:</i> 22 (4d10) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Weakening Breath",
      "text": "<i>Strength Saving Throw:</i> DC 13, each creature that isn't currently affected by this breath in a 15-foot Cone. <i>Failure:</i> The target has Disadvantage on Strength-based D20 Tests and subtracts 2 (1d4) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    }
  ]
},
{
  "id": "adult-gold-dragon",
  "name": "Adult Gold Dragon",
  "size": "Huge",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 19,
  "acNote": "",
  "hp": 243,
  "hpFormula": "18d12 + 126",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      25,
      7
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      24,
      7
    ]
  },
  "initiative": "+14",
  "savingThrows": "Dex +8, Wis +8",
  "skills": "Insight +8, Perception +14, Persuasion +13, Stealth +8",
  "damageImmunities": "Fire",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 24",
  "languages": "Common, Draconic",
  "cr": "17",
  "crNum": 17.0,
  "xp": 18000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast <i>Guiding Bolt</i> (level 2 version) or (B) Weakening Breath."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 17 (2d8 + 8) Slashing damage plus 4 (1d8) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 21, each creature in a 60-foot Cone. <i>Failure:</i> 66 (12d10) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21, +13 to hit with spell attacks): **At Will:** <i>Detect Magic</i>, <i>Guiding Bolt</i> (level 2 version), <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Flame Strike</i>, <i>Zone of Truth</i>"
    },
    {
      "name": "Weakening Breath",
      "text": "<i>Strength Saving Throw:</i> DC 21, each creature that isn't currently affected by this breath in a 60-foot Cone. <i>Failure:</i> The target has Disadvantage on Strength-based D20 Tests and subtracts 3 (1d6) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Banish",
        "text": "<i>Charisma Saving Throw:</i> DC 21, one creature the dragon can see within 120 feet. <i>Failure:</i> 10 (3d6) Force damage, and the target has the Incapacitated condition and is transported to a harmless demiplane until the start of the dragon's next turn, at which point it reappears in an unoccupied space of the dragon's choice within 120 feet of the dragon. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Guiding Light",
        "text": "The dragon uses Spellcasting to cast <i>Guiding Bolt</i> (level 2 version)."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "ancient-gold-dragon",
  "name": "Ancient Gold Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 22,
  "acNote": "",
  "hp": 546,
  "hpFormula": "28d20 + 252",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      30,
      10
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      29,
      9
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      28,
      9
    ]
  },
  "initiative": "+16",
  "savingThrows": "Dex +9, Wis +10",
  "skills": "Insight +10, Perception +17, Persuasion +16, Stealth +9",
  "damageImmunities": "Fire",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 27",
  "languages": "Common, Draconic",
  "cr": "24",
  "crNum": 24.0,
  "xp": 62000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast <i>Guiding Bolt</i> (level 4 version) or (B) Weakening Breath."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +17 to hit, reach 15 ft. <i>Hit:</i> 19 (2d8 + 10) Slashing damage plus 9 (2d8) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 24, each creature in a 90-foot Cone. <i>Failure:</i> 71 (13d10) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 24, +16 to hit with spell attacks): **At Will:** <i>Detect Magic</i>, <i>Guiding Bolt</i> (level 4 version), <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Flame Strike</i> (level 6 version), <i>Word of Recall</i>, <i>Zone of Truth</i>"
    },
    {
      "name": "Weakening Breath",
      "text": "<i>Strength Saving Throw:</i> DC 24, each creature that isn't currently affected by this breath in a 90-foot Cone. <i>Failure:</i> The target has Disadvantage on Strength-based D20 Tests and subtracts 5 (1d10) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Banish",
        "text": "<i>Charisma Saving Throw:</i> DC 24, one creature the dragon can see within 120 feet. <i>Failure:</i> 24 (7d6) Force damage, and the target has the Incapacitated condition and is transported to a harmless demiplane until the start of the dragon's next turn, at which point it reappears in an unoccupied space of the dragon's choice within 120 feet of the dragon. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Guiding Light",
        "text": "The dragon uses Spellcasting to cast <i>Guiding Bolt</i> (level 4 version)."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "gorgon",
  "name": "Gorgon",
  "size": "Large",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 19,
  "acNote": "",
  "hp": 114,
  "hpFormula": "12d10 + 48",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      20,
      5
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      18,
      4
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+0",
  "skills": "Perception +7",
  "damageImmunities": "Exhaustion, Petrified",
  "senses": "Darkvision 60 ft.; Passive Perception 17",
  "languages": "None",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [],
  "actions": [
    {
      "name": "Gore",
      "text": "<i>Melee Attack Roll:</i> +8, reach 5 ft. <i>Hit:</i> 18 (2d12 + 5) Piercing damage. If the target is a Large or smaller creature and the gorgon moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
    },
    {
      "name": "Petrifying Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 15, each creature in a 30-foot Cone. <i>First Failure:</i> The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. <i>Second Failure:</i> The target has the Petrified condition instead of the Restrained condition."
    },
    {
      "name": "Trample",
      "text": "<i>Dexterity Saving Throw:</i> DC 16, one creature within 5 feet that has the Prone condition. <i>Failure:</i> 16 (2d10 + 5) Bludgeoning damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "gray-ooze",
  "name": "Gray Ooze",
  "size": "Medium",
  "type": "Ooze",
  "alignment": "Unaligned",
  "tag": "ooze",
  "ac": 9,
  "acNote": "",
  "hp": 22,
  "hpFormula": "3d8 + 9",
  "speed": "10 ft., Climb 10 ft.",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      6,
      -2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      6,
      -2
    ],
    "cha": [
      2,
      -4
    ]
  },
  "initiative": "-2",
  "skills": "Stealth +2",
  "damageResistances": "Acid, Cold, Fire",
  "damageImmunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",
  "senses": "Blindsight 60 ft.; Passive Perception 8",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Amorphous",
      "text": "The ooze can move through a space as narrow as 1 inch without expending extra movement to do so."
    },
    {
      "name": "Corrosive Form",
      "text": "Nonmagical ammunition is destroyed immediately after hitting the ooze and dealing any damage. Any nonmagical weapon takes a cumulative \u22121 penalty to attack rolls immediately after dealing damage to the ooze and coming into contact with it. The weapon is destroyed if the penalty reaches \u22125. The penalty can be removed by casting the <i>Mending</i> spell on the weapon. The ooze can eat through 2-inch-thick, nonmagical metal or wood in 1 round."
    }
  ],
  "actions": [
    {
      "name": "Pseudopod",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 10 (2d8 + 1) Acid damage. Nonmagical armor worn by the target takes a \u22121 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the <i>Mending</i> spell on the armor."
    }
  ]
},
{
  "id": "green-dragon-wyrmling",
  "name": "Green Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 38,
  "hpFormula": "7d8 + 7",
  "speed": "30 ft., Fly 60 ft., Swim 30 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +3, Wis +2",
  "skills": "Perception +4, Stealth +3",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (1d10 + 2) Slashing damage plus 3 (1d6) Poison damage."
    },
    {
      "name": "Poison Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 11, each creature in a 15-foot Cone. <i>Failure:</i> 21 (6d6) Poison damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "young-green-dragon",
  "name": "Young Green Dragon",
  "size": "Large",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 136,
  "hpFormula": "16d10 + 48",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      17,
      3
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +4",
  "skills": "Deception +5, Perception +7, Stealth +4",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 17",
  "languages": "Common, Draconic",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 11 (2d6 + 4) Slashing damage plus 7 (2d6) Poison damage."
    },
    {
      "name": "Poison Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 14, each creature in a 30-foot Cone. <i>Failure:</i> 42 (12d6) Poison damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "adult-green-dragon",
  "name": "Adult Green Dragon",
  "size": "Huge",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 19,
  "acNote": "",
  "hp": 207,
  "hpFormula": "18d12 + 90",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      21,
      5
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+11",
  "savingThrows": "Dex +6, Wis +7",
  "skills": "Deception +9, Perception +12, Persuasion +9, Stealth +6",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 22",
  "languages": "Common, Draconic",
  "cr": "15",
  "crNum": 15.0,
  "xp": 13000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Mind Spike</i> (level 3 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +11, reach 10 ft. <i>Hit:</i> 15 (2d8 + 6) Slashing damage plus 7 (2d6) Poison damage."
    },
    {
      "name": "Poison Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 18, each creature in a 60-foot Cone. <i>Failure:</i> 56 (16d6) Poison damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17): **At Will:** <i>Detect Magic</i>, <i>Mind Spike</i> (level 3 version) **1/Day:** <i>Geas</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Mind Invasion",
        "text": "The dragon uses Spellcasting to cast <i>Mind Spike</i> (level 3 version)."
      },
      {
        "name": "Noxious Miasma",
        "text": "<i>Constitution Saving Throw:</i> DC 17, each creature in a 20-foot-radius Sphere centered on a point the dragon can see within 90 feet. <i>Failure:</i> 7 (2d6) Poison damage, and the target takes a \u22122 penalty to AC until the end of its next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "ancient-green-dragon",
  "name": "Ancient Green Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Chromatic)",
  "alignment": "Lawful Evil",
  "tag": "dragon",
  "ac": 21,
  "acNote": "",
  "hp": 402,
  "hpFormula": "23d20 + 161",
  "speed": "40 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      25,
      7
    ],
    "int": [
      20,
      5
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      22,
      6
    ]
  },
  "initiative": "+15",
  "savingThrows": "Dex +8, Wis +10",
  "skills": "Deception +13, Perception +17, Persuasion +13, Stealth +8",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 27",
  "languages": "Common, Draconic",
  "cr": "22",
  "crNum": 22.0,
  "xp": 41000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The dragon can breathe air and water."
    },
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Mind Spike</i> (level 5 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +15, reach 15 ft. <i>Hit:</i> 17 (2d8 + 8) Slashing damage plus 10 (3d6) Poison damage."
    },
    {
      "name": "Poison Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 22, each creature in a 90-foot Cone. <i>Failure:</i> 77 (22d6) Poison damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21): **At Will:** <i>Detect Magic</i>, <i>Mind Spike</i> (level 5 version) **1/Day Each:** <i>Geas</i>, <i>Modify Memory</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Mind Invasion",
        "text": "The dragon uses Spellcasting to cast <i>Mind Spike</i> (level 5 version)."
      },
      {
        "name": "Noxious Miasma",
        "text": "<i>Constitution Saving Throw:</i> DC 21, each creature in a 30-foot-radius Sphere centered on a point the dragon can see within 90 feet. <i>Failure:</i> 17 (5d6) Poison damage, and the target takes a \u22122 penalty to AC until the end of its next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "grick",
  "name": "Grick",
  "size": "Medium",
  "type": "Aberration",
  "alignment": "Unaligned",
  "tag": "aberration",
  "ac": 14,
  "acNote": "",
  "hp": 54,
  "hpFormula": "12d8",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      11,
      0
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+2",
  "skills": "Stealth +4",
  "senses": "Darkvision 60 ft.; Passive Perception 12",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The grick makes one Beak attack and one Tentacles attack."
    },
    {
      "name": "Beak",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 9 (2d6 + 2) Piercing damage."
    },
    {
      "name": "Tentacles",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (1d10 + 2) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 12) from all four tentacles."
    }
  ]
},
{
  "id": "griffon",
  "name": "Griffon",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 12,
  "acNote": "",
  "hp": 59,
  "hpFormula": "7d10 + 21",
  "speed": "30 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Perception +5",
  "senses": "Darkvision 60 ft.; Passive Perception 15",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The griffon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 8 (1d8 + 4) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 14) from both of the griffon's front claws."
    }
  ]
},
{
  "id": "grimlock",
  "name": "Grimlock",
  "size": "Medium",
  "type": "Aberration",
  "alignment": "Neutral Evil",
  "tag": "aberration",
  "ac": 11,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      9,
      -1
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+1",
  "skills": "Athletics +5, Perception +3, Stealth +5",
  "senses": "Blindsight 30 ft.; Passive Perception 13",
  "languages": "None",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Bone Cudgel",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 6 (1d6 + 3) Bludgeoning damage plus 2 (1d4) Psychic damage."
    }
  ]
},
{
  "id": "guardian-naga",
  "name": "Guardian Naga",
  "size": "Large",
  "type": "Celestial",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 18,
  "acNote": "",
  "hp": 136,
  "hpFormula": "16d10 + 48",
  "speed": "40 ft., Climb 40 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      18,
      4
    ],
    "con": [
      16,
      3
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      19,
      4
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +8, Con +7, Int +7, Wis +8, Cha +8",
  "skills": "Arcana +11, History +11, Religion +11",
  "damageImmunities": "Poison",
  "conditionImmunities": "Charmed, Paralyzed, Poisoned, Restrained",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Celestial, Common",
  "cr": "10",
  "crNum": 10.0,
  "xp": 5900,
  "traits": [
    {
      "name": "Celestial Restoration",
      "text": "If the naga dies, it returns to life in 1d6 days and regains all its Hit Points unless <i>Dispel Evil and Good</i> is cast on its remains."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The naga makes two Bite attacks. It can replace any attack with a use of Poisonous Spittle."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 17 (2d12 + 4) Piercing damage plus 22 (4d10) Poison damage."
    },
    {
      "name": "Poisonous Spittle",
      "text": "<i>Constitution Saving Throw:</i> DC 16, one creature the naga can see within 60 feet. <i>Failure:</i> 31 (7d8) Poison damage, and the target has the Blinded condition until the start of the naga's next turn. <i>Success:</i> Half damage only."
    },
    {
      "name": "Spellcasting",
      "text": "The naga casts one of the following spells, requiring no Somatic or Material components and using Wisdom as the spellcasting ability (spell save DC 16): **At Will:** <i>Thaumaturgy</i> **1/Day Each:** <i>Clairvoyance</i>, <i>Cure Wounds</i> (level 6 version), <i>Flame Strike</i> (level 6 version), <i>Geas</i>, <i>True Seeing</i>"
    }
  ]
},
{
  "id": "guard-captain",
  "name": "Guard Captain",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 18,
  "acNote": "",
  "hp": 75,
  "hpFormula": "10d8 + 30",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+4",
  "skills": "Athletics +6, Perception +4",
  "gear": "Breastplate, Javelins (6), Longsword, Shield",
  "senses": "Passive Perception 14",
  "languages": "Common",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The guard makes two attacks, using Javelin or Longsword in any combination."
    },
    {
      "name": "Javelin",
      "text": "<i>Melee or Ranged Attack Roll:</i> +6, reach 5 ft. or range 30/120 ft. <i>Hit:</i> 14 (3d6 + 4) Piercing damage."
    },
    {
      "name": "Longsword",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 15 (2d10 + 4) Slashing damage."
    }
  ]
},
{
  "id": "half-dragon",
  "name": "Half-Dragon",
  "size": "Medium",
  "type": "Dragon",
  "alignment": "Neutral",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 105,
  "hpFormula": "14d8 + 42",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+5",
  "savingThrows": "Dex +5, Wis +5",
  "skills": "Athletics +7, Perception +5, Stealth +5",
  "damageResistances": "Damage type chosen for the Draconic Origin trait below",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 15",
  "languages": "Common, Draconic",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Draconic Origin",
      "text": "The half-dragon is related to a type of dragon associated with one of the following damage types (GM's choice): Acid, Cold, Fire, Lightning, or Poison. This choice affects other aspects of the stat block."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The half-dragon makes two Claw attacks."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 6 (1d4 + 4) Slashing damage plus 7 (2d6) damage of the type chosen for the Draconic Origin trait."
    },
    {
      "name": "Dragon's Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 14, each creature in a 30-foot Cone. <i>Failure:</i> 28 (8d6) damage of the type chosen for the Draconic Origin trait. <i>Success:</i> Half damage."
    },
    {
      "name": "Leap",
      "text": "The half-dragon jumps up to 30 feet by spending 10 feet of movement."
    }
  ]
},
{
  "id": "harpy",
  "name": "Harpy",
  "size": "Medium",
  "type": "Monstrosity",
  "alignment": "Chaotic Evil",
  "tag": "monstrosity",
  "ac": 11,
  "acNote": "",
  "hp": 38,
  "hpFormula": "7d8 + 7",
  "speed": "20 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+1",
  "senses": "Passive Perception 10",
  "languages": "Common",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 6 (2d4 + 1) Slashing damage."
    },
    {
      "name": "Luring Song",
      "text": "The harpy sings a magical melody, which lasts until the harpy's Concentration ends on it. <i>Wisdom Saving Throw:</i> DC 11, each Humanoid and Giant in a 300-foot Emanation originating from the harpy when the song starts. <i>Failure:</i> The target has the Charmed condition until the song ends and repeats the save at the end of each of its turns. While Charmed, the target has the Incapacitated condition and ignores the Luring Song of other harpies. If the target is more than 5 feet from the harpy, the target moves on its turn toward the harpy by the most direct route, trying to get within 5 feet of the harpy. It doesn't avoid Opportunity Attacks; however, before moving into damaging terrain (such as lava or a pit) and whenever it takes damage from a source other than the harpy, the target repeats the save. <i>Success:</i> The target is immune to this harpy's Luring Song for 24 hours."
    }
  ]
},
{
  "id": "hell-hound",
  "name": "Hell Hound",
  "size": "Medium",
  "type": "Fiend",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 58,
  "hpFormula": "9d8 + 18",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      14,
      2
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+1",
  "skills": "Perception +5",
  "damageImmunities": "Fire",
  "senses": "Darkvision 60 ft.; Passive Perception 15",
  "languages": "Understands Infernal but can't speak",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The hound has Advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The hound makes two Bite attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Piercing damage plus 3 (1d6) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 12, each creature in a 15-foot Cone. <i>Failure:</i> 17 (5d6) Fire damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "hezrou",
  "name": "Hezrou",
  "size": "Large",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 18,
  "acNote": "",
  "hp": 157,
  "hpFormula": "15d10 + 75",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      20,
      5
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+6",
  "savingThrows": "Str +7, Con +8, Wis +4",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft.; Passive Perception 11",
  "languages": "Abyssal; telepathy 120 ft.",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Demonic Restoration",
      "text": "If the hezrou dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
    },
    {
      "name": "Magic Resistance",
      "text": "The hezrou has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Stench",
      "text": "<i>Constitution Saving Throw:</i> DC 16, any creature that starts its turn in a 10-foot Emanation originating from the hezrou. <i>Failure:</i> The target has the Poisoned condition until the start of its next turn."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The hezrou makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 6 (1d4 + 4) Slashing damage plus 9 (2d8) Poison damage."
    },
    {
      "name": "Leap",
      "text": "The hezrou jumps up to 30 feet by spending 10 feet of movement."
    }
  ]
},
{
  "id": "hill-giant",
  "name": "Hill Giant",
  "size": "Huge",
  "type": "Giant",
  "alignment": "Chaotic Evil",
  "tag": "giant",
  "ac": 13,
  "acNote": "",
  "hp": 105,
  "hpFormula": "10d12 + 40",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      19,
      4
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      9,
      -1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+2",
  "skills": "Perception +2",
  "senses": "Passive Perception 12",
  "languages": "Giant",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The giant makes two attacks, using Tree Club or Trash Lob in any combination."
    },
    {
      "name": "Tree Club",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 18 (3d8 + 5) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
    },
    {
      "name": "Trash Lob",
      "text": "<i>Ranged Attack Roll:</i> +8, range 60/240 ft. <i>Hit:</i> 16 (2d10 + 5) Bludgeoning damage, and the target has the Poisoned condition until the end of its next turn."
    }
  ]
},
{
  "id": "hippogriff",
  "name": "Hippogriff",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 11,
  "acNote": "",
  "hp": 26,
  "hpFormula": "4d10 + 4",
  "speed": "40 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+1",
  "skills": "Perception +5",
  "senses": "Passive Perception 15",
  "languages": "None",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Flyby",
      "text": "The hippogriff doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The hippogriff makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Slashing damage."
    }
  ]
},
{
  "id": "hobgoblin-warrior",
  "name": "Hobgoblin Warrior",
  "size": "Medium",
  "type": "Fey (Goblinoid)",
  "alignment": "Lawful Evil",
  "tag": "fey",
  "ac": 18,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      13,
      1
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+3",
  "gear": "Half Plate Armor, Longbow, Longsword, Shield",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Common, Goblin",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The hobgoblin has Advantage on an attack roll against a creature if at least one of the hobgoblin's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
    }
  ],
  "actions": [
    {
      "name": "Longsword",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 12 (2d10 + 1) Slashing damage."
    },
    {
      "name": "Longbow",
      "text": "<i>Ranged Attack Roll:</i> +3, range 150/600 ft. <i>Hit:</i> 5 (1d8 + 1) Piercing damage plus 7 (3d4) Poison damage."
    }
  ]
},
{
  "id": "hobgoblin-captain",
  "name": "Hobgoblin Captain",
  "size": "Medium",
  "type": "Fey (Goblinoid)",
  "alignment": "Lawful Evil",
  "tag": "fey",
  "ac": 17,
  "acNote": "",
  "hp": 58,
  "hpFormula": "9d8 + 18",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      14,
      2
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+4",
  "gear": "Greatsword, Half Plate Armor, Longbow",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Common, Goblin",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Aura of Authority",
      "text": "While in a 10-foot Emanation originating from the hobgoblin, the hobgoblin and its allies have Advantage on attack rolls and saving throws, provided the hobgoblin doesn't have the Incapacitated condition."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The hobgoblin makes two attacks, using Greatsword or Longbow in any combination."
    },
    {
      "name": "Greatsword",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 9 (2d6 + 2) Slashing damage plus 3 (1d6) Poison damage."
    },
    {
      "name": "Longbow",
      "text": "<i>Ranged Attack Roll:</i> +4, range 150/600 ft. <i>Hit:</i> 6 (1d8 + 2) Piercing damage plus 5 (2d4) Poison damage."
    }
  ]
},
{
  "id": "homunculus",
  "name": "Homunculus",
  "size": "Tiny",
  "type": "Construct",
  "alignment": "Neutral",
  "tag": "construct",
  "ac": 13,
  "acNote": "",
  "hp": 4,
  "hpFormula": "1d4 + 2",
  "speed": "20 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      4,
      -3
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      14,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+2",
  "savingThrows": "Wis +2, Cha +0",
  "damageImmunities": "Poison",
  "conditionImmunities": "Charmed, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Understands Common plus one other language but can't speak",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [
    {
      "name": "Telepathic Bond",
      "text": "While the homunculus is on the same plane of existence as its master, the two of them can communicate telepathically with each other."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 1 Piercing damage, and the target is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 12. <i>Failure:</i> The target has the Poisoned condition until the end of the homunculus's next turn. <i>Failure by 5 or More:</i> The target has the Poisoned condition for 1 minute. While Poisoned, the target has the Unconscious condition, which ends early if the target takes any damage."
    }
  ]
},
{
  "id": "horned-devil",
  "name": "Horned Devil",
  "size": "Large",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 18,
  "acNote": "",
  "hp": 199,
  "hpFormula": "19d10 + 95",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      22,
      6
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      21,
      5
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+7",
  "savingThrows": "Str +10, Dex +7, Wis +7, Cha +8",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 150 ft. (unimpeded by magical Darkness); Passive Perception 13",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "11",
  "crNum": 11.0,
  "xp": 7200,
  "traits": [
    {
      "name": "Diabolical Restoration",
      "text": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Magic Resistance",
      "text": "The devil has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The devil makes three attacks, using Searing Fork or Hurl Flame in any combination. It can replace one attack with a use of Infernal Tail."
    },
    {
      "name": "Searing Fork",
      "text": "<i>Melee Attack Roll:</i> +10, reach 10 ft. <i>Hit:</i> 15 (2d8 + 6) Piercing damage plus 9 (2d8) Fire damage."
    },
    {
      "name": "Hurl Flame",
      "text": "<i>Ranged Attack Roll:</i> +8, range 150 ft. <i>Hit:</i> 26 (5d8 + 4) Fire damage. If the target is a flammable object that isn't being worn or carried, it starts burning."
    },
    {
      "name": "Infernal Tail",
      "text": "<i>Dexterity Saving Throw:</i> DC 17, one creature the devil can see within 10 feet. <i>Failure:</i> 10 (1d8 + 6) Necrotic damage, and the target receives an infernal wound if it doesn't have one. While wounded, the target loses 10 (3d6) Hit Points at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit Points to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a DC 17 Wisdom (Medicine) check."
    }
  ]
},
{
  "id": "hydra",
  "name": "Hydra",
  "size": "Huge",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 15,
  "acNote": "",
  "hp": 184,
  "hpFormula": "16d12 + 80",
  "speed": "40 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      20,
      5
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      20,
      5
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+4",
  "skills": "Perception +6",
  "damageImmunities": "Blinded, Charmed, Deafened, Frightened, Stunned, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 16",
  "languages": "None",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Hold Breath",
      "text": "The hydra can hold its breath for 1 hour."
    },
    {
      "name": "Multiple Heads",
      "text": "The hydra has five heads. Whenever the hydra takes 25 damage or more on a single turn, one of its heads dies. The hydra dies if all its heads are dead. At the end of each of its turns when it has at least one living head, the hydra grows two heads for each of its heads that died since its last turn, unless it has taken Fire damage since its last turn. The hydra regains 20 Hit Points when it grows new heads."
    },
    {
      "name": "Reactive Heads",
      "text": "For each head the hydra has beyond one, it gets an extra Reaction that can be used only for Opportunity Attacks."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The hydra makes as many Bite attacks as it has heads."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +8, reach 10 ft. <i>Hit:</i> 10 (1d10 + 5) Piercing damage."
    }
  ]
},
{
  "id": "ice-devil",
  "name": "Ice Devil",
  "size": "Large",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 18,
  "acNote": "",
  "hp": 228,
  "hpFormula": "24d10 + 96",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      18,
      4
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+7",
  "savingThrows": "Dex +7, Con +9, Wis +7, Cha +9",
  "skills": "Insight +7, Perception +7, Persuasion +9",
  "damageImmunities": "Cold, Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Blindsight 120 ft.; Passive Perception 17",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "14",
  "crNum": 14.0,
  "xp": 11500,
  "traits": [
    {
      "name": "Diabolical Restoration",
      "text": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Magic Resistance",
      "text": "The devil has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The devil makes three Ice Spear attacks. It can replace one attack with a Tail attack."
    },
    {
      "name": "Ice Spear",
      "text": "<i>Melee or Ranged Attack Roll:</i> +10, reach 5 ft. or range 30/120 ft. <i>Hit:</i> 14 (2d8 + 5) Piercing damage plus 10 (3d6) Cold damage. Until the end of its next turn, the target can't take a Bonus Action or Reaction, its Speed decreases by 10 feet, and it can move or take one action on its turn, not both. <i>Hit or Miss:</i> The spear magically returns to the devil's hand immediately after a ranged attack."
    },
    {
      "name": "Tail",
      "text": "<i>Melee Attack Roll:</i> +10, reach 10 ft. <i>Hit:</i> 15 (3d6 + 5) Bludgeoning damage plus 18 (4d8) Cold damage."
    },
    {
      "name": "Ice Wall (Recharge 6)",
      "text": "The devil casts <i>Wall of Ice</i> (level 8 version), requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 17)."
    }
  ]
},
{
  "id": "imp",
  "name": "Imp",
  "size": "Tiny",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 13,
  "acNote": "",
  "hp": 21,
  "hpFormula": "6d4 + 6",
  "speed": "20 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      13,
      1
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+3",
  "skills": "Deception +4, Insight +3, Stealth +5",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft. (unimpeded by magical Darkness); Passive Perception 11",
  "languages": "Common, Infernal",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The imp has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Sting",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 6 (1d6 + 3) Piercing damage plus 7 (2d6) Poison damage."
    },
    {
      "name": "Invisibility",
      "text": "The imp casts <i>Invisibility</i> on itself, requiring no spell components and using Charisma as the spell-casting ability."
    },
    {
      "name": "Shape-Shift",
      "text": "The imp shape-shifts to resemble a rat (Speed 20 ft.), a raven (20 ft., Fly 60 ft.), or a spider (20 ft., Climb 20 ft.), or it returns to its true form. Its game statistics are the same in each form, except for its Speed. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "incubus",
  "name": "Incubus",
  "size": "Medium",
  "type": "Fiend",
  "alignment": "Neutral Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 66,
  "hpFormula": "12d8 + 12",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      8,
      -1
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      13,
      1
    ],
    "int": [
      15,
      2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+3",
  "skills": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
  "damageResistances": "Cold, Fire, Poison, Psychic",
  "senses": "Darkvision 60 ft.; Passive Perception 15",
  "languages": "Abyssal, Common, Infernal; telepathy 60 ft.",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [
    {
      "name": "Succubus Form",
      "text": "When the incubus finishes a Long Rest, it can shape-shift into a **Succubus**, using that stat block instead of this one. Any equipment it is wearing or carrying isn't transformed."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The incubus makes two Restless Touch attacks."
    },
    {
      "name": "Restless Touch",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 15 (3d6 + 5) Psychic damage, and the target is cursed for 24 hours or until the incubus dies. Until the curse ends, the target gains no benefit from finishing Short Rests."
    },
    {
      "name": "Spellcasting",
      "text": "The incubus casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 15): **At Will:** <i>Disguise Self, Etherealness</i> **1/Day Each:** <i>Dream, Hypnotic Pattern</i>"
    },
    {
      "name": "Nightmare (Recharge 6)",
      "text": "<i>Wisdom Saving Throw:</i> DC 15, one creature the incubus can see within 60 feet. <i>Failure:</i> If the target has 20 Hit Points or fewer, it has the Unconscious condition for 1 hour, until it takes damage, or until a creature within 5 feet of it takes an action to wake it. Otherwise, the target takes 18 (4d8) Psychic damage."
    }
  ]
},
{
  "id": "invisible-stalker",
  "name": "Invisible Stalker",
  "size": "Large",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 14,
  "acNote": "",
  "hp": 97,
  "hpFormula": "13d10 + 26",
  "speed": "50 ft., Fly 50 ft. (hover)",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      19,
      4
    ],
    "con": [
      14,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+7",
  "skills": "Perception +8, Stealth +10",
  "damageResistances": "Bludgeoning, Piercing, Slashing",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 18",
  "languages": "Common, Primordial (Auran)",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [
    {
      "name": "Air Form",
      "text": "The stalker can enter an enemy's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
    },
    {
      "name": "Invisibility",
      "text": "The stalker has the Invisible condition."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The stalker makes three Wind Swipe attacks. It can replace one attack with a use of Vortex."
    },
    {
      "name": "Wind Swipe",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 11 (2d6 + 4) Force damage."
    },
    {
      "name": "Vortex",
      "text": "<i>Constitution Saving Throw:</i> DC 14, one Large or smaller creature in the stalker's space. <i>Failure:</i> 7 (1d8 + 3) Thunder damage, and the target has the Grappled condition (escape DC 13). Until the grapple ends, the target can't cast spells with a Verbal component and takes 7 (2d6) Thunder damage at the start of each of the stalker's turns."
    }
  ]
},
{
  "id": "iron-golem",
  "name": "Iron Golem",
  "size": "Large",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 20,
  "acNote": "",
  "hp": 252,
  "hpFormula": "24d10 + 120",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      24,
      7
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      20,
      5
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "+9",
  "damageImmunities": "Fire, Poison, Psychic",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Darkvision 120 ft.; Passive Perception 10",
  "languages": "Understands Common plus two other languages but can't speak",
  "cr": "16",
  "crNum": 16.0,
  "xp": 15000,
  "traits": [
    {
      "name": "Fire Absorption",
      "text": "Whenever the golem is subjected to Fire damage, it regains a number of Hit Points equal to the Fire damage dealt."
    },
    {
      "name": "Immutable Form",
      "text": "The golem can't shape-shift."
    },
    {
      "name": "Magic Resistance",
      "text": "The golem has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The golem makes two attacks, using Bladed Arm or Fiery Bolt in any combination."
    },
    {
      "name": "Bladed Arm",
      "text": "<i>Melee Attack Roll:</i> +12, reach 10 ft. <i>Hit:</i> 20 (3d8 + 7) Slashing damage plus 10 (3d6) Fire damage."
    },
    {
      "name": "Fiery Bolt",
      "text": "<i>Ranged Attack Roll:</i> +10, range 120 ft. <i>Hit:</i> 36 (8d8) Fire damage."
    },
    {
      "name": "Poison Breath (Recharge 6)",
      "text": "<i>Constitution Saving Throw:</i> DC 18, each creature in a 60-foot Cone. <i>Failure:</i> 55 (10d10) Poison damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "kobold-warrior",
  "name": "Kobold Warrior",
  "size": "Small",
  "type": "Dragon",
  "alignment": "Neutral",
  "tag": "dragon",
  "ac": 14,
  "acNote": "",
  "hp": 7,
  "hpFormula": "3d6 \u2212 3",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      7,
      -2
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      9,
      -1
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      7,
      -2
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "gear": "Daggers (3)",
  "senses": "Darkvision 60 ft.; Passive Perception 8",
  "languages": "Common, Draconic",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The kobold has Advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
    },
    {
      "name": "Sunlight Sensitivity",
      "text": "While in sunlight, the kobold has Disadvantage on ability checks and attack rolls."
    }
  ],
  "actions": [
    {
      "name": "Dagger",
      "text": "<i>Melee or Ranged Attack Roll:</i> +4, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 4 (1d4 + 2) Piercing damage."
    }
  ]
},
{
  "id": "kraken",
  "name": "Kraken",
  "size": "Gargantuan",
  "type": "Monstrosity (Titan)",
  "alignment": "Chaotic Evil",
  "tag": "monstrosity",
  "ac": 18,
  "acNote": "",
  "hp": 481,
  "hpFormula": "26d20 + 208",
  "speed": "30 ft., Swim 120 ft.",
  "abilities": {
    "str": [
      30,
      10
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      26,
      8
    ],
    "int": [
      22,
      6
    ],
    "wis": [
      18,
      4
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+14",
  "savingThrows": "Str +17, Dex +7, Con +15, Wis +11",
  "skills": "History +13, Perception +11",
  "damageImmunities": "Cold, Lightning",
  "conditionImmunities": "Frightened, Grappled, Paralyzed, Restrained",
  "senses": "Truesight 120 ft.; Passive Perception 21",
  "languages": "Understands Abyssal, Celestial, Infernal, and Primordial but can't speak; telepathy 120 ft.",
  "cr": "23",
  "crNum": 23.0,
  "xp": 50000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The kraken can breathe air and water."
    },
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the kraken fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Siege Monster",
      "text": "The kraken deals double damage to objects and structures."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The kraken makes two Tentacle attacks and uses Fling, Lightning Strike, or Swallow."
    },
    {
      "name": "Tentacle",
      "text": "<i>Melee Attack Roll:</i> +17, reach 30 ft. <i>Hit:</i> 24 (4d6 + 10) Bludgeoning damage. The target has the Grappled condition (escape DC 20) from one of ten tentacles, and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Fling",
      "text": "The kraken throws a Large or smaller creature Grappled by it to a space it can see within 60 feet of itself that isn't in the air. <i>Dexterity Saving Throw:</i> DC 25, the creature thrown and each creature in the destination space. <i>Failure:</i> 18 (4d8) Bludgeoning damage, and the target has the Prone condition. <i>Success:</i> Half damage only."
    },
    {
      "name": "Lightning Strike",
      "text": "<i>Dexterity Saving Throw:</i> DC 23, one creature the kraken can see within 120 feet. <i>Failure:</i> 33 (6d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Swallow",
      "text": "<i>Dexterity Saving Throw:</i> DC 25, one creature Grappled by the kraken (it can have up to four creatures swallowed at a time). <i>Failure:</i> 23 (3d8 + 10) Piercing damage. If the target is Large or smaller, it is swallowed and no longer Grappled. A swallowed creature has the Restrained condition, has Total Cover against attacks and other effects outside the kraken, and takes 24 (7d6) Acid damage at the start of each of its turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the kraken with the Prone condition. If the kraken dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 15 feet of movement, exiting Prone."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the kraken can expend a use to take one of the following actions. The kraken regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Storm Bolt",
        "text": "The kraken uses Lightning Strike."
      },
      {
        "name": "Toxic Ink",
        "text": "<i>Constitution Saving Throw:</i> DC 23, each creature in a 15-foot Emanation originating from the kraken while it is underwater. <i>Failure:</i> The target has the Blinded and Poisoned conditions until the end of the kraken's next turn. The kraken then moves up to its Speed. <i>Failure or Success:</i> The kraken can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "lamia",
  "name": "Lamia",
  "size": "Large",
  "type": "Fiend",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 13,
  "acNote": "",
  "hp": 97,
  "hpFormula": "13d10 + 26",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+1",
  "skills": "Deception +7, Insight +4, Stealth +5",
  "senses": "Darkvision 60 ft.; Passive Perception 12",
  "languages": "Abyssal, Common",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The lamia makes two Claw attacks. It can replace one attack with a use of Corrupting Touch."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Slashing damage plus 7 (2d6) Psychic damage."
    },
    {
      "name": "Corrupting Touch",
      "text": "<i>Wisdom Saving Throw:</i> DC 13, one creature the lamia can see within 5 feet. <i>Failure:</i> 13 (3d8) Psychic damage, and the target is cursed for 1 hour. Until the curse ends, the target has the Charmed and Poisoned conditions."
    },
    {
      "name": "Spellcasting",
      "text": "The lamia casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 13): **At Will:** <i>Disguise Self</i> (can appear as a Large or Medium biped), <i>Minor Illusion</i> **1/Day Each:** <i>Geas</i>, <i>Major Image</i>, <i>Scrying</i>"
    },
    {
      "name": "Leap",
      "text": "The lamia jumps up to 30 feet by spending 10 feet of movement."
    }
  ]
},
{
  "id": "lemure",
  "name": "Lemure",
  "size": "Medium",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 9,
  "acNote": "",
  "hp": 9,
  "hpFormula": "2d8",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      5,
      -3
    ],
    "con": [
      11,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      3,
      -4
    ]
  },
  "initiative": "-3",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Charmed, Frightened, Poisoned",
  "senses": "Darkvision 120 ft. (unimpeded by magical Darkness); Passive Perception 10",
  "languages": "Understands Infernal but can't speak",
  "cr": "0",
  "crNum": 0.0,
  "xp": 10,
  "traits": [
    {
      "name": "Hellish Restoration",
      "text": "If the lemure dies in the Nine Hells, it revives with all its Hit Points in 1d10 days unless it is killed by a creature under the effects of a <i>Bless</i> spell or its remains are sprinkled with Holy Water."
    }
  ],
  "actions": [
    {
      "name": "Vile Slime",
      "text": "<i>Melee Attack Roll:</i> +2, reach 5 ft. <i>Hit:</i> 2 (1d4) Poison damage."
    }
  ]
},
{
  "id": "lich",
  "name": "Lich",
  "size": "Medium",
  "type": "Undead (Wizard)",
  "alignment": "Neutral Evil",
  "tag": "undead",
  "ac": 20,
  "acNote": "",
  "hp": 315,
  "hpFormula": "42d8 + 126",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      16,
      3
    ],
    "int": [
      21,
      5
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+17",
  "savingThrows": "Dex +10, Con +10, Int +12, Wis +9",
  "skills": "Arcana +19, History +12, Insight +9, Perception +9",
  "damageResistances": "Cold, Lightning",
  "damageImmunities": "Necrotic, Poison",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
  "gear": "Component Pouch",
  "senses": "Truesight 120 ft.; Passive Perception 19",
  "languages": "All",
  "cr": "21",
  "crNum": 21.0,
  "xp": 33000,
  "traits": [
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the lich fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Spirit Jar",
      "text": "If destroyed, the lich reforms in 1d10 days if it has a spirit jar, reviving with all its Hit Points. The new body appears in an unoccupied space within the lich's lair."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The lich makes three attacks, using Eldritch Burst or Paralyzing Touch in any combination."
    },
    {
      "name": "Eldritch Burst",
      "text": "<i>Melee or Ranged Attack Roll:</i> +12, reach 5 ft. or range 120 ft. <i>Hit:</i> 31 (4d12 + 5) Force damage."
    },
    {
      "name": "Paralyzing Touch",
      "text": "<i>Melee Attack Roll:</i> +12, reach 5 ft. <i>Hit:</i> 15 (3d6 + 5) Cold damage, and the target has the Paralyzed condition until the start of the lich's next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The lich casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 20): **At Will:** <i>Detect Magic, Detect Thoughts, Dispel Magic, Fireball</i> (level 5 version), <i>Invisibility, Lightning Bolt</i> (level 5 version), <i>Mage Hand, Prestidigitation</i> **2/Day Each:** <i>Animate Dead, Dimension Door, Plane Shift</i> **1/Day Each:** <i>Chain Lightning, Finger of Death, Power Word Kill, Scrying</i>"
    }
  ],
  "reactions": [
    {
      "name": "Protective Magic",
      "text": "The lich casts <i>Counterspell</i> or <i>Shield</i> in response to the spell's trigger, using the same spellcasting ability as Spellcasting."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the lich can expend a use to take one of the following actions. The lich regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Deathly Teleport",
        "text": "The lich teleports up to 60 feet to an unoccupied space it can see, and each creature within 10 feet of the space it left takes 11 (2d10) Necrotic damage."
      },
      {
        "name": "Disrupt Life",
        "text": "<i>Constitution Saving Throw:</i> DC 20, each creature that isn't an Undead in a 20-foot Emanation originating from the lich. <i>Failure:</i> 31 (9d6) Necrotic damage. <i>Success:</i> Half damage. <i>Failure or Success:</i> The lich can't take this action again until the start of its next turn."
      },
      {
        "name": "Frightening Gaze",
        "text": "The lich casts <i>Fear</i>, using the same spellcasting ability as Spellcasting. The lich can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "mage",
  "name": "Mage",
  "size": "Medium or Small",
  "type": "Humanoid (Wizard)",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 15,
  "acNote": "",
  "hp": 81,
  "hpFormula": "18d8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      9,
      -1
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      11,
      0
    ],
    "int": [
      17,
      3
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "savingThrows": "Int +6, Wis +4",
  "skills": "Arcana +6, History +6, Perception +4",
  "gear": "Wand",
  "senses": "Passive Perception 14",
  "languages": "Common plus three other languages",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The mage makes three Arcane Burst attacks."
    },
    {
      "name": "Arcane Burst",
      "text": "<i>Melee or Ranged Attack Roll:</i> +6, reach 5 ft. or range 120 ft. <i>Hit:</i> 16 (3d8 + 3) Force damage."
    },
    {
      "name": "Spellcasting",
      "text": "The mage casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14): **At Will:** <i>Detect Magic</i>, <i>Light</i>, <i>Mage Armor</i> (included in AC), <i>Mage Hand</i>, <i>Prestidigitation</i> **2/Day Each:** <i>Fireball</i> (level 4 version), <i>Invisibility</i> **1/Day Each:** <i>Cone of Cold</i>, <i>Fly</i>"
    },
    {
      "name": "Misty Step (3/Day)",
      "text": "The mage casts <i>Misty Step</i>, using the same spellcasting ability as Spellcasting."
    }
  ],
  "reactions": [
    {
      "name": "Protective Magic (3/Day)",
      "text": "The mage casts <i>Counterspell</i> or <i>Shield</i> in response to the spell's trigger, using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "archmage",
  "name": "Archmage",
  "size": "Medium or Small",
  "type": "Humanoid (Wizard)",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 17,
  "acNote": "",
  "hp": 170,
  "hpFormula": "31d8 + 31",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      12,
      1
    ],
    "int": [
      20,
      5
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+7",
  "savingThrows": "Int +9, Wis +6",
  "skills": "Arcana +13, History +9, Perception +6",
  "damageImmunities": "Psychic",
  "conditionImmunities": "Charmed (with _Mind Blank_)",
  "gear": "Wand",
  "senses": "Passive Perception 16",
  "languages": "Common plus five other languages",
  "cr": "12",
  "crNum": 12.0,
  "xp": 8000,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The archmage has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The archmage makes four Arcane Burst attacks."
    },
    {
      "name": "Arcane Burst",
      "text": "<i>Melee or Ranged Attack Roll:</i> +9, reach 5 ft. or range 150 ft. <i>Hit:</i> 27 (4d10 + 5) Force damage."
    },
    {
      "name": "Spellcasting",
      "text": "The archmage casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 17): **At Will:** <i>Detect Magic</i>, <i>Detect Thoughts</i>, <i>Disguise Self</i>, <i>Invisibility</i>, <i>Light</i>, <i>Mage Armor</i> (included in AC), <i>Mage Hand</i>, <i>Prestidigitation</i> **2/Day Each:** <i>Fly</i>, <i>Lightning Bolt</i> (level 7 version) **1/Day Each:** <i>Cone of Cold</i> (level 9 version), <i>Mind Blank</i> (cast before combat), <i>Scrying</i>, <i>Teleport</i>"
    },
    {
      "name": "Misty Step (3/Day)",
      "text": "The mage casts <i>Misty Step</i>, using the same spellcasting ability as Spellcasting."
    }
  ],
  "reactions": [
    {
      "name": "Protective Magic (3/Day)",
      "text": "The archmage casts <i>Counterspell</i> or <i>Shield</i> in response to the spell's trigger, using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "magmin",
  "name": "Magmin",
  "size": "Small",
  "type": "Elemental",
  "alignment": "Chaotic Neutral",
  "tag": "elemental",
  "ac": 14,
  "acNote": "",
  "hp": 13,
  "hpFormula": "3d6 + 3",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      7,
      -2
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      12,
      1
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+2",
  "damageImmunities": "Fire",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Ignan)",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Death Burst",
      "text": "The magmin explodes when it dies. <i>Dexterity Saving Throw:</i> DC 11, each creature in a 10-foot Emanation originating from the magmin. <i>Failure:</i> 7 (2d6) Fire damage. <i>Success:</i> Half damage."
    }
  ],
  "actions": [
    {
      "name": "Touch",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (2d4 + 2) Fire damage. If the target is a creature or a flammable object that isn't being worn or carried, it starts burning."
    },
    {
      "name": "Ignited Illumination",
      "text": "The magmin sets itself ablaze or extinguishes its flames. While ablaze, the magmin sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet."
    }
  ]
},
{
  "id": "manticore",
  "name": "Manticore",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Lawful Evil",
  "tag": "monstrosity",
  "ac": 14,
  "acNote": "",
  "hp": 68,
  "hpFormula": "8d10 + 24",
  "speed": "30 ft., Fly 50 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      17,
      3
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+3",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "Common",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The manticore makes three attacks, using Rend or Tail Spike in any combination."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Slashing damage."
    },
    {
      "name": "Tail Spike",
      "text": "<i>Ranged Attack Roll:</i> +5, range 100/200 ft. <i>Hit:</i> 7 (1d8 + 3) Piercing damage."
    }
  ]
},
{
  "id": "marilith",
  "name": "Marilith",
  "size": "Large",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 16,
  "acNote": "",
  "hp": 220,
  "hpFormula": "21d10 + 105",
  "speed": "40 ft., Climb 40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      20,
      5
    ],
    "con": [
      20,
      5
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+10",
  "savingThrows": "Str +9, Con +10, Wis +8, Cha +10",
  "skills": "Perception +8",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 18",
  "languages": "Abyssal; telepathy 120 ft.",
  "cr": "16",
  "crNum": 16.0,
  "xp": 15000,
  "traits": [
    {
      "name": "Demonic Restoration",
      "text": "If the marilith dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
    },
    {
      "name": "Magic Resistance",
      "text": "The marilith has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Reactive",
      "text": "The marilith can take one Reaction on every turn of combat."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The marilith makes six Pact Blade attacks and uses Constrict."
    },
    {
      "name": "Pact Blade",
      "text": "<i>Melee Attack Roll:</i> +10, reach 5 ft. <i>Hit:</i> 10 (1d10 + 5) Slashing damage plus 7 (2d6) Necrotic damage."
    },
    {
      "name": "Constrict",
      "text": "<i>Strength Saving Throw:</i> DC 17, one Medium or smaller creature the marilith can see within 5 feet. <i>Failure:</i> 15 (2d10 + 4) Bludgeoning damage. The target has the Grappled condition (escape DC 14), and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Teleport (Recharge 5\u20136)",
      "text": "The marilith teleports up to 120 feet to an unoccupied space it can see."
    }
  ],
  "reactions": [
    {
      "name": "Parry",
      "text": "<i>Trigger:</i> The marilith is hit by a melee attack roll while holding a weapon. <i>Response:</i> The marilith adds 5 to its AC against that attack, possibly causing it to miss."
    }
  ]
},
{
  "id": "dust-mephit",
  "name": "Dust Mephit",
  "size": "Small",
  "type": "Elemental",
  "alignment": "Neutral Evil",
  "tag": "elemental",
  "ac": 12,
  "acNote": "",
  "hp": 17,
  "hpFormula": "5d6",
  "speed": "30 ft., Fly 30 ft.",
  "abilities": {
    "str": [
      5,
      -3
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      10,
      0
    ],
    "int": [
      9,
      -1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+2",
  "skills": "Perception +2, Stealth +4",
  "damageVulnerabilities": "Fire",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 12",
  "languages": "Primordial (Auran, Terran)",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Death Burst",
      "text": "The mephit explodes when it dies. <i>Dexterity Saving Throw:</i> DC 10, each creature in a 5-foot Emanation originating from the mephit. <i>Failure:</i> 5 (2d4) Bludgeoning damage. <i>Success:</i> Half damage."
    }
  ],
  "actions": [
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 4 (1d4 + 2) Slashing damage."
    },
    {
      "name": "Blinding Breath (Recharge 6)",
      "text": "<i>Dexterity Saving Throw:</i> DC 10, each creature in a 15-foot Cone. <i>Failure:</i> The target has the Blinded condition until the end of the mephit's next turn."
    },
    {
      "name": "Sleep (1/Day)",
      "text": "The mephit casts the <i>Sleep</i> spell, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 10)."
    }
  ]
},
{
  "id": "ice-mephit",
  "name": "Ice Mephit",
  "size": "Small",
  "type": "Elemental",
  "alignment": "Neutral Evil",
  "tag": "elemental",
  "ac": 11,
  "acNote": "",
  "hp": 21,
  "hpFormula": "6d6",
  "speed": "30 ft., Fly 30 ft.",
  "abilities": {
    "str": [
      7,
      -2
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      10,
      0
    ],
    "int": [
      9,
      -1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+1",
  "skills": "Perception +2, Stealth +3",
  "damageVulnerabilities": "Fire",
  "damageImmunities": "Cold, Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 12",
  "languages": "Primordial (Aquan, Auran)",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Death Burst",
      "text": "The mephit explodes when it dies. <i>Constitution Saving Throw:</i> DC 10, each creature in a 5-foot Emanation originating from the mephit. <i>Failure:</i> 5 (2d4) Cold damage. <i>Success:</i> Half damage."
    }
  ],
  "actions": [
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 3 (1d4 + 1) Slashing damage plus 2 (1d4) Cold damage."
    },
    {
      "name": "Fog Cloud (1/Day)",
      "text": "The mephit casts <i>Fog Cloud</i>, requiring no spell components and using Charisma as the spellcasting ability."
    },
    {
      "name": "Frost Breath (Recharge 6)",
      "text": "<i>Constitution Saving Throw:</i> DC 10, each creature in a 15-foot Cone. <i>Failure:</i> 7 (3d4) Cold damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "magma-mephit",
  "name": "Magma Mephit",
  "size": "Small",
  "type": "Elemental",
  "alignment": "Neutral Evil",
  "tag": "elemental",
  "ac": 11,
  "acNote": "",
  "hp": 18,
  "hpFormula": "4d6 + 4",
  "speed": "30 ft., Fly 30 ft.",
  "abilities": {
    "str": [
      8,
      -1
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+1",
  "skills": "Stealth +3",
  "damageVulnerabilities": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Ignan, Terran)",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Death Burst",
      "text": "The mephit explodes when it dies. <i>Dexterity Saving Throw:</i> DC 11, each creature in a 5-foot Emanation originating from the mephit. <i>Failure:</i> 7 (2d6) Fire damage. <i>Success:</i> Half damage."
    }
  ],
  "actions": [
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 3 (1d4 + 1) Slashing damage plus 3 (1d6) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 6)",
      "text": "<i>Dexterity Saving Throw:</i> DC 11, each creature in a 15-foot Cone. <i>Failure:</i> 7 (2d6) Fire damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "steam-mephit",
  "name": "Steam Mephit",
  "size": "Small",
  "type": "Elemental",
  "alignment": "Neutral Evil",
  "tag": "elemental",
  "ac": 10,
  "acNote": "",
  "hp": 17,
  "hpFormula": "5d6",
  "speed": "30 ft., Fly 30 ft.",
  "abilities": {
    "str": [
      5,
      -3
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      10,
      0
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+0",
  "skills": "Stealth +2",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Aquan, Ignan)",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [
    {
      "name": "Blurred Form",
      "text": "Attack rolls against the mephit are made with Disadvantage unless the mephit has the Incapacitated condition."
    },
    {
      "name": "Death Burst",
      "text": "The mephit explodes when it dies. <i>Dexterity Saving Throw:</i> DC 10, each creature in a 5-foot Emanation originating from the mephit. <i>Failure:</i> 5 (2d4) Fire damage. <i>Success:</i> Half damage."
    }
  ],
  "actions": [
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +2, reach 5 ft. <i>Hit:</i> 2 (1d4) Slashing damage plus 2 (1d4) Fire damage."
    },
    {
      "name": "Steam Breath (Recharge 6)",
      "text": "<i>Constitution Saving Throw:</i> DC 10, each creature in a 15-foot Cone. <i>Failure:</i> 5 (2d4) Fire damage, and the target's Speed decreases by 10 feet until the end of the mephit's next turn. <i>Success:</i> Half damage only. <i>Failure or Success:</i> Being underwater doesn't grant Resistance to this Fire damage."
    }
  ]
},
{
  "id": "merfolk-skirmisher",
  "name": "Merfolk Skirmisher",
  "size": "Medium",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 11,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "10 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      12,
      1
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+1",
  "senses": "Passive Perception 12",
  "languages": "Common, Primordial (Aquan)",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The merfolk can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Ocean Spear",
      "text": "<i>Melee or Ranged Attack Roll:</i> +2, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 3 (1d6) Piercing damage plus 2 (1d4) Cold damage. If the target is a creature, its Speed decreases by 10 feet until the end of its next turn. <i>Hit or Miss:</i> The spear magically returns to the merfolk's hand immediately after a ranged attack."
    }
  ]
},
{
  "id": "merrow",
  "name": "Merrow",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Chaotic Evil",
  "tag": "monstrosity",
  "ac": 13,
  "acNote": "",
  "hp": 45,
  "hpFormula": "6d10 + 12",
  "speed": "10 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      15,
      2
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+2",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Abyssal, Primordial (Aquan)",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The merrow can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The merrow makes two attacks, using Bite, Claw, or Harpoon in any combination."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 6 (1d4 + 4) Piercing damage, and the target has the Poisoned condition until the end of the merrow's next turn."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 9 (2d4 + 4) Slashing damage."
    },
    {
      "name": "Harpoon",
      "text": "<i>Melee or Ranged Attack Roll:</i> +6, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 11 (2d6 + 4) Piercing damage. If the target is a Large or smaller creature, the merrow pulls the target up to 15 feet straight toward itself."
    }
  ]
},
{
  "id": "mimic",
  "name": "Mimic",
  "size": "Medium",
  "type": "Monstrosity",
  "alignment": "Neutral",
  "tag": "monstrosity",
  "ac": 12,
  "acNote": "",
  "hp": 58,
  "hpFormula": "9d8 + 18",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+3",
  "skills": "Stealth +5",
  "damageImmunities": "Acid",
  "conditionImmunities": "Prone",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Adhesive (Object Form Only)",
      "text": "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic has the Grappled condition (escape DC 13). Ability checks made to escape this grapple have Disadvantage."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +5 (with Advantage if the target is Grappled by the mimic), reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Piercing damage\u2014or 12 (2d8 + 3) Piercing damage if the target is Grappled by the mimic\u2014plus 4 (1d8) Acid damage."
    },
    {
      "name": "Pseudopod",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Bludgeoning damage plus 4 (1d8) Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 13). Ability checks made to escape this grapple have Disadvantage."
    },
    {
      "name": "Shape-Shift",
      "text": "The mimic shape-shifts to resemble a Medium or Small object while retaining its game statistics, or it returns to its true blob form. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "minotaur-of-baphomet",
  "name": "Minotaur of Baphomet",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Chaotic Evil",
  "tag": "monstrosity",
  "ac": 14,
  "acNote": "",
  "hp": 85,
  "hpFormula": "10d10 + 30",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      16,
      3
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+0",
  "skills": "Perception +7, Survival +7",
  "senses": "Darkvision 60 ft.; Passive Perception 17",
  "languages": "Abyssal",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [],
  "actions": [
    {
      "name": "Abyssal Glaive",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 10 (1d12 + 4) Slashing damage plus 10 (3d6) Necrotic damage."
    },
    {
      "name": "Gore (Recharge 5\u20136)",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 18 (4d6 + 4) Piercing damage. If the target is a Large or smaller creature and the minotaur moved 10+ feet straight toward it immediately before the hit, the target takes an extra 10 (3d6) Piercing damage and has the Prone condition."
    }
  ]
},
{
  "id": "mummy",
  "name": "Mummy",
  "size": "Medium or Small",
  "type": "Undead",
  "alignment": "Lawful Evil",
  "tag": "undead",
  "ac": 11,
  "acNote": "",
  "hp": 58,
  "hpFormula": "9d8 + 18",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "-1",
  "savingThrows": "Wis +3",
  "damageVulnerabilities": "Fire",
  "damageImmunities": "Necrotic, Poison",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "Common plus two other languages",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The mummy makes two Rotting Fist attacks and uses Dreadful Glare."
    },
    {
      "name": "Rotting Fist",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 8 (1d10 + 3) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can't regain Hit Points, its Hit Point maximum doesn't return to normal when finishing a Long Rest, and its Hit Point maximum decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit Points by this attack."
    },
    {
      "name": "Dreadful Glare",
      "text": "<i>Wisdom Saving Throw:</i> DC 11, one creature the mummy can see within 60 feet. <i>Failure:</i> The target has the Frightened condition until the end of the mummy's next turn. <i>Success:</i> The target is immune to this mummy's Dreadful Glare for 24 hours."
    }
  ]
},
{
  "id": "mummy-lord",
  "name": "Mummy Lord",
  "size": "Medium or Small",
  "type": "Undead (Cleric)",
  "alignment": "Lawful Evil",
  "tag": "undead",
  "ac": 17,
  "acNote": "",
  "hp": 187,
  "hpFormula": "25d8 + 75",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      17,
      3
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      19,
      4
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+10",
  "savingThrows": "Int +5, Wis +9",
  "skills": "History +5, Perception +9, Religion +5",
  "damageVulnerabilities": "Fire",
  "damageImmunities": "Necrotic, Poison",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
  "senses": "Truesight 60 ft.; Passive Perception 19",
  "languages": "Common plus three other languages",
  "cr": "15",
  "crNum": 15.0,
  "xp": 13000,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the mummy fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Magic Resistance",
      "text": "The mummy has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Undead Restoration",
      "text": "If destroyed, the mummy gains a new body in 24 hours if its heart is intact, reviving with all its Hit Points. The new body appears in an unoccupied space within the mummy's lair. The heart is a Tiny object that has AC 17, HP 10, and Immunity to all damage except Fire."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The mummy makes one Rotting Fist or Channel Negative Energy attack, and it uses Dreadful Glare."
    },
    {
      "name": "Rotting Fist",
      "text": "<i>Melee Attack Roll:</i> +9, reach 5 ft. <i>Hit:</i> 15 (2d10 + 4) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can't regain Hit Points, it gains no benefit from finishing a Long Rest, and its Hit Point maximum decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit Points by this attack."
    },
    {
      "name": "Channel Negative Energy",
      "text": "<i>Ranged Attack Roll:</i> +9, range 60 ft. <i>Hit:</i> 25 (6d6 + 4) Necrotic damage."
    },
    {
      "name": "Dreadful Glare",
      "text": "<i>Wisdom Saving Throw:</i> DC 17, one creature the mummy can see within 60 feet. <i>Failure:</i> 25 (6d6 + 4) Psychic damage, and the target has the Paralyzed condition until the end of the mummy's next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The mummy casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 17, +9 to hit with spell attacks): **At Will:** <i>Dispel Magic</i>, <i>Thaumaturgy</i> **1/Day Each:** <i>Animate Dead</i>, <i>Harm</i>, <i>Insect Plague</i> (level 7 version)"
    }
  ],
  "reactions": [
    {
      "name": "Whirlwind of Sand",
      "text": "<i>Trigger:</i> The mummy is hit by an attack roll. <i>Response:</i> The mummy adds 2 to its AC against the attack, possibly causing the attack to miss, and the mummy teleports up to 60 feet to an unoccupied space it can see. Each creature of its choice that it can see within 5 feet of its destination space has the Blinded condition until the end of the mummy's next turn."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the mummy can expend a use to take one of the following actions. The mummy regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Dread Command",
        "text": "The mummy casts <i>Command</i> (level 2 version), using the same spellcasting ability as Spellcasting. The mummy can't take this action again until the start of its next turn."
      },
      {
        "name": "Glare",
        "text": "The mummy uses Dreadful Glare. The mummy can't take this action again until the start of its next turn."
      },
      {
        "name": "Necrotic Strike",
        "text": "The mummy makes one Rotting Fist or Channel Negative Energy attack."
      }
    ]
  }
},
{
  "id": "nalfeshnee",
  "name": "Nalfeshnee",
  "size": "Large",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 18,
  "acNote": "",
  "hp": 184,
  "hpFormula": "16d10 + 96",
  "speed": "20 ft., Fly 30 ft.",
  "abilities": {
    "str": [
      21,
      5
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      22,
      6
    ],
    "int": [
      19,
      4
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+5",
  "savingThrows": "Con +11, Int +9, Wis +6, Cha +7",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Frightened, Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 11",
  "languages": "Abyssal; telepathy 120 ft.",
  "cr": "13",
  "crNum": 13.0,
  "xp": 10000,
  "traits": [
    {
      "name": "Demonic Restoration",
      "text": "If the nalfeshnee dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
    },
    {
      "name": "Magic Resistance",
      "text": "The nalfeshnee has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The nalfeshnee makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +10, reach 10 ft. <i>Hit:</i> 16 (2d10 + 5) Slashing damage plus 11 (2d10) Force damage."
    },
    {
      "name": "Teleport",
      "text": "The nalfeshnee teleports up to 120 feet to an unoccupied space it can see."
    },
    {
      "name": "Horror Nimbus (Recharge 5\u20136)",
      "text": "<i>Wisdom Saving Throw:</i> DC 15, each creature in a 15-foot Emanation originating from the nalfeshnee. <i>Failure:</i> 28 (8d6) Psychic damage, and the target has the Frightened condition for 1 minute, until it takes damage, or until it ends its turn with the nalfeshnee out of line of sight. <i>Success:</i> The target is immune to this nalfeshnee's Horror Nimbus for 24 hours."
    }
  ],
  "reactions": [
    {
      "name": "Pursuit",
      "text": "Trigger: Another creature the nalfeshnee can see ends its move within 120 feet of the nalfeshnee. Response: The nalfeshnee uses Teleport, but its destination space must be within 10 feet of the triggering creature."
    }
  ]
},
{
  "id": "nightmare",
  "name": "Nightmare",
  "size": "Large",
  "type": "Fiend",
  "alignment": "Neutral Evil",
  "tag": "fiend",
  "ac": 13,
  "acNote": "",
  "hp": 68,
  "hpFormula": "8d10 + 24",
  "speed": "60 ft., Fly 90 ft. (hover)",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+2",
  "damageImmunities": "Fire",
  "senses": "Passive Perception 11",
  "languages": "Understands Abyssal, Common, and Infernal but can't speak",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Confer Fire Resistance",
      "text": "The nightmare can grant Resistance to Fire damage to a rider while it is on the nightmare."
    },
    {
      "name": "Illumination",
      "text": "The nightmare sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet."
    }
  ],
  "actions": [
    {
      "name": "Hooves",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Bludgeoning damage plus 10 (3d6) Fire damage."
    },
    {
      "name": "Ethereal Stride",
      "text": "The nightmare and up to three willing creatures within 5 feet of it teleport to the Ethereal Plane from the Material Plane or vice versa."
    }
  ]
},
{
  "id": "noble",
  "name": "Noble",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 15,
  "acNote": "",
  "hp": 9,
  "hpFormula": "2d8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      11,
      0
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+1",
  "skills": "Deception +5, Insight +4, Persuasion +5",
  "gear": "Breastplate, Rapier",
  "senses": "Passive Perception 12",
  "languages": "Common plus two other languages",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [],
  "actions": [
    {
      "name": "Rapier",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 5 (1d8 + 1) Piercing damage."
    }
  ],
  "reactions": [
    {
      "name": "Parry",
      "text": "<i>Trigger:</i> The noble is hit by a melee attack roll while holding a weapon. <i>Response:</i> The noble adds 2 to its AC against that attack, possibly causing it to miss."
    }
  ]
},
{
  "id": "ochre-jelly",
  "name": "Ochre Jelly",
  "size": "Large",
  "type": "Ooze",
  "alignment": "Unaligned",
  "tag": "ooze",
  "ac": 8,
  "acNote": "",
  "hp": 52,
  "hpFormula": "7d10 + 14",
  "speed": "20 ft., Climb 20 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      6,
      -2
    ],
    "con": [
      14,
      2
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      6,
      -2
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "-2",
  "damageResistances": "Acid",
  "damageImmunities": "Lightning, Slashing",
  "conditionImmunities": "Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",
  "senses": "Blindsight 60 ft.; Passive Perception 8",
  "languages": "None",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Amorphous",
      "text": "The jelly can move through a space as narrow as 1 inch without expending extra movement to do so."
    },
    {
      "name": "Spider Climb",
      "text": "The jelly can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    }
  ],
  "actions": [
    {
      "name": "Pseudopod",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 12 (3d6 + 2) Acid damage."
    }
  ],
  "reactions": [
    {
      "name": "Split",
      "text": "<i>Trigger:</i> While the jelly is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. <i>Response:</i> The jelly splits into two new **Ochre Jellies**. Each new jelly is one size smaller than the original jelly and acts on its Initiative. The original jelly's Hit Points are divided evenly between the new jellies (round down)."
    }
  ]
},
{
  "id": "ogre",
  "name": "Ogre",
  "size": "Large",
  "type": "Giant",
  "alignment": "Chaotic Evil",
  "tag": "giant",
  "ac": 11,
  "acNote": "",
  "hp": 68,
  "hpFormula": "8d10 + 24",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      16,
      3
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      7,
      -2
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "-1",
  "gear": "Greatclub, Javelins (3)",
  "senses": "Darkvision 60 ft.; Passive Perception 8",
  "languages": "Common, Giant",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Greatclub",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Bludgeoning damage."
    },
    {
      "name": "Javelin",
      "text": "<i>Melee or Ranged Attack Roll:</i> +6, reach 5 ft. or range 30/120 ft. <i>Hit:</i> 11 (2d6 + 4) Piercing damage."
    }
  ]
},
{
  "id": "oni",
  "name": "Oni",
  "size": "Large",
  "type": "Fiend",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 17,
  "acNote": "",
  "hp": 119,
  "hpFormula": "14d10 + 42",
  "speed": "30 ft., Fly 30 ft. (hover)",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      16,
      3
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+0",
  "savingThrows": "Dex +3, Con +6, Wis +4, Cha +5",
  "skills": "Arcana +5, Deception +8, Perception +4",
  "damageResistances": "Cold",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Common, Giant",
  "cr": "7",
  "crNum": 7.0,
  "xp": 2900,
  "traits": [
    {
      "name": "Regeneration",
      "text": "The oni regains 10 Hit Points at the start of each of its turns if it has at least 1 Hit Point."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The oni makes two Claw or Nightmare Ray attacks. It can replace one attack with a use of Spellcasting."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 10 (1d12 + 4) Slashing damage plus 9 (2d8) Necrotic damage."
    },
    {
      "name": "Nightmare Ray",
      "text": "<i>Ranged Attack Roll:</i> +5, range 60 ft. <i>Hit:</i> 9 (2d6 + 2) Psychic damage, and the target has the Frightened condition until the start of the oni's next turn."
    },
    {
      "name": "Shape-Shift",
      "text": "The oni shape-shifts into a Small or Medium Humanoid or a Large Giant, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed."
    },
    {
      "name": "Spellcasting",
      "text": "The oni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 13): **1/Day Each:** <i>Charm Person</i> (level 2 version), <i>Darkness</i>, <i>Gaseous Form</i>, <i>Sleep</i>"
    },
    {
      "name": "Invisibility",
      "text": "The oni casts <i>Invisibility</i> on itself, requiring no spell components and using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "otyugh",
  "name": "Otyugh",
  "size": "Large",
  "type": "Aberration",
  "alignment": "Neutral",
  "tag": "aberration",
  "ac": 14,
  "acNote": "",
  "hp": 104,
  "hpFormula": "11d10 + 44",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      19,
      4
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+0",
  "savingThrows": "Con +7",
  "senses": "Darkvision 120 ft.; Passive Perception 11",
  "languages": "Otyugh; telepathy 120 ft. (doesn't allow the receiving creature to respond telepathically)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The otyugh makes one Bite attack and two Tentacle attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 12 (2d8 + 3) Piercing damage, and the target has the Poisoned condition. Whenever the Poisoned target finishes a Long Rest, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 15. <i>Failure:</i> The target's Hit Point maximum decreases by 5 (1d10) and doesn't return to normal until the Poisoned condition ends on the target. <i>Success:</i> The Poisoned condition ends."
    },
    {
      "name": "Tentacle",
      "text": "<i>Melee Attack Roll:</i> +6, reach 10 ft. <i>Hit:</i> 12 (2d8 + 3) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 13) from one of two tentacles."
    },
    {
      "name": "Tentacle Slam",
      "text": "<i>Constitution Saving Throw:</i> DC 14, each creature Grappled by the otyugh. <i>Failure:</i> 16 (3d8 + 3) Bludgeoning damage, and the target has the Stunned condition until the start of the otyugh's next turn. <i>Success:</i> Half damage only."
    }
  ]
},
{
  "id": "pegasus",
  "name": "Pegasus",
  "size": "Large",
  "type": "Celestial",
  "alignment": "Chaotic Good",
  "tag": "celestial",
  "ac": 12,
  "acNote": "",
  "hp": 59,
  "hpFormula": "7d10 + 21",
  "speed": "60 ft., Fly 90 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +4, Con +5, Wis +4, Cha +3",
  "skills": "Perception +6",
  "senses": "Passive Perception 16",
  "languages": "Understands Celestial, Common, Elvish, and Sylvan but can't speak",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Hooves",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 7 (1d6 + 4) Bludgeoning damage plus 5 (2d4) Radiant damage."
    }
  ]
},
{
  "id": "phase-spider",
  "name": "Phase Spider",
  "size": "Large",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 14,
  "acNote": "",
  "hp": 45,
  "hpFormula": "7d10 + 7",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      12,
      1
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+3",
  "skills": "Stealth +7",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "None",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Ethereal Sight",
      "text": "The spider can see 60 feet into the Ethereal Plane while on the Material Plane and vice versa."
    },
    {
      "name": "Spider Climb",
      "text": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    },
    {
      "name": "Web Walker",
      "text": "The spider ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The spider makes two Bite attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 8 (1d10 + 3) Piercing damage plus 9 (2d8) Poison damage. If this damage reduces the target to 0 Hit Points, the target becomes Stable, and it has the Poisoned condition for 1 hour. While Poisoned, the target also has the Paralyzed condition."
    },
    {
      "name": "Ethereal Jaunt",
      "text": "The spider teleports from the Material Plane to the Ethereal Plane or vice versa."
    }
  ]
},
{
  "id": "pirate",
  "name": "Pirate",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 14,
  "acNote": "",
  "hp": 33,
  "hpFormula": "6d8 + 6",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      12,
      1
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+5",
  "savingThrows": "Dex +5, Cha +4",
  "gear": "Daggers (6), Leather Armor",
  "senses": "Passive Perception 11",
  "languages": "Common plus one other language",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The pirate makes two Dagger attacks. It can replace one attack with a use of Enthralling Panache."
    },
    {
      "name": "Dagger",
      "text": "<i>Melee or Ranged Attack Roll:</i> +5, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 5 (1d4 + 3) Piercing damage."
    },
    {
      "name": "Enthralling Panache",
      "text": "<i>Wisdom Saving Throw:</i> DC 12, one creature the pirate can see within 30 feet. <i>Failure:</i> The target has the Charmed condition until the start of the pirate's next turn."
    }
  ]
},
{
  "id": "pirate-captain",
  "name": "Pirate Captain",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 17,
  "acNote": "",
  "hp": 84,
  "hpFormula": "13d8 + 26",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      18,
      4
    ],
    "con": [
      14,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      17,
      3
    ]
  },
  "initiative": "+7",
  "savingThrows": "Str +3, Dex +7, Wis +5, Cha +6",
  "skills": "Acrobatics +7, Perception +5",
  "gear": "Pistol, Rapier",
  "senses": "Passive Perception 15",
  "languages": "Common plus one other language",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The pirate makes three attacks, using Rapier or Pistol in any combination."
    },
    {
      "name": "Rapier",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Piercing damage, and the pirate has Advantage on the next attack roll it makes before the end of this turn."
    },
    {
      "name": "Pistol",
      "text": "<i>Ranged Attack Roll:</i> +7, range 30/90 ft. <i>Hit:</i> 15 (2d10 + 4) Piercing damage."
    },
    {
      "name": "Captain's Charm",
      "text": "<i>Wisdom Saving Throw:</i> DC 14, one creature the pirate can see within 30 feet. <i>Failure:</i> The target has the Charmed condition until the start of the pirate's next turn."
    }
  ],
  "reactions": [
    {
      "name": "Riposte",
      "text": "<i>Trigger:</i> The pirate is hit by a melee attack roll while holding a weapon. <i>Response:</i> The pirate adds 3 to its AC against that attack, possibly causing it to miss. On a miss, the pirate makes one Rapier attack against the triggering creature if within range."
    }
  ]
},
{
  "id": "pit-fiend",
  "name": "Pit Fiend",
  "size": "Large",
  "type": "Fiend (Devil)",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 21,
  "acNote": "",
  "hp": 337,
  "hpFormula": "27d10 + 189",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      26,
      8
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      24,
      7
    ],
    "int": [
      22,
      6
    ],
    "wis": [
      18,
      4
    ],
    "cha": [
      24,
      7
    ]
  },
  "initiative": "+14",
  "savingThrows": "Dex +8, Wis +10",
  "skills": "Perception +10, Persuasion +19",
  "damageResistances": "Cold",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 20",
  "languages": "Infernal; telepathy 120 ft.",
  "cr": "20",
  "crNum": 20.0,
  "xp": 25000,
  "traits": [
    {
      "name": "Diabolical Restoration",
      "text": "If the pit fiend dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    },
    {
      "name": "Fear Aura",
      "text": "The pit fiend emanates an aura in a 20-foot Emanation while it doesn't have the Incapacitated condition. <i>Wisdom Saving Throw:</i> DC 21, any enemy that starts its turn in the aura. <i>Failure:</i> The target has the Frightened condition until the start of its next turn. <i>Success:</i> The target is immune to this pit fiend's aura for 24 hours."
    },
    {
      "name": "Legendary Resistance (4/Day)",
      "text": "If the pit fiend fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Magic Resistance",
      "text": "The pit fiend has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The pit fiend makes one Bite attack, two Devilish Claw attacks, and one Fiery Mace attack."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 18 (3d6 + 8) Piercing damage. If the target is a creature, it must make the following saving throw. <i>Constitution Saving Throw:</i> DC 21. <i>Failure:</i> The target has the Poisoned condition. While Poisoned, the target can't regain Hit Points and takes 21 (6d6) Poison damage at the start of each of its turns, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    },
    {
      "name": "Devilish Claw",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 26 (4d8 + 8) Necrotic damage."
    },
    {
      "name": "Fiery Mace",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 22 (4d6 + 8) Force damage plus 21 (6d6) Fire damage."
    },
    {
      "name": "Hellfire Spellcasting (Recharge 4\u20136)",
      "text": "The pit fiend casts <i>Fireball</i> (level 5 version) twice, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21). It can replace one <i>Fireball</i> with <i>Hold Monster</i> (level 7 version) or <i>Wall of Fire</i>."
    }
  ]
},
{
  "id": "planetar",
  "name": "Planetar",
  "size": "Large",
  "type": "Celestial (Angel)",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 19,
  "acNote": "",
  "hp": 262,
  "hpFormula": "21d10 + 147",
  "speed": "40 ft., Fly 120 ft. (hover)",
  "abilities": {
    "str": [
      24,
      7
    ],
    "dex": [
      20,
      5
    ],
    "con": [
      24,
      7
    ],
    "int": [
      19,
      4
    ],
    "wis": [
      22,
      6
    ],
    "cha": [
      25,
      7
    ]
  },
  "initiative": "+10",
  "savingThrows": "Str +12, Con +12, Wis +11, Cha +12",
  "skills": "Perception +11",
  "damageResistances": "Radiant",
  "damageImmunities": "Charmed, Exhaustion, Frightened",
  "senses": "Truesight 120 ft.; Passive Perception 21",
  "languages": "All; telepathy 120 ft.",
  "cr": "16",
  "crNum": 16.0,
  "xp": 15000,
  "traits": [
    {
      "name": "Divine Awareness",
      "text": "The planetar knows if it hears a lie."
    },
    {
      "name": "Exalted Restoration",
      "text": "If the planetar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia."
    },
    {
      "name": "Magic Resistance",
      "text": "The planetar has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The planetar makes three Radiant Sword attacks or uses Holy Burst twice."
    },
    {
      "name": "Radiant Sword",
      "text": "<i>Melee Attack Roll:</i> +12, reach 10 ft. <i>Hit:</i> 14 (2d6 + 7) Slashing damage plus 18 (4d8) Radiant damage."
    },
    {
      "name": "Holy Burst",
      "text": "<i>Dexterity Saving Throw:</i> DC 20, each enemy in a 20-foot-radius Sphere centered on a point the planetar can see within 120 feet. <i>Failure:</i> 24 (7d6) Radiant damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The planetar casts one of the following spells, requiring no Material components and using Charisma as spellcasting ability (spell save DC 20): **At Will:** <i>Detect Evil and Good</i> **1/Day Each:** <i>Commune</i>, <i>Control Weather</i>, <i>Dispel Evil and Good</i>, <i>Raise Dead</i>"
    },
    {
      "name": "Divine Aid (2/Day)",
      "text": "The planetar casts <i>Cure Wounds</i>, <i>Invisibility</i>, <i>Lesser Restoration</i>, or <i>Remove Curse</i>, using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "priest-acolyte",
  "name": "Priest Acolyte",
  "size": "Medium or Small",
  "type": "Humanoid (Cleric)",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 11,
  "hpFormula": "2d8 + 2",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      12,
      1
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+0",
  "skills": "Medicine +4, Religion +2",
  "gear": "Chain Shirt, Holy Symbol, Mace",
  "senses": "Passive Perception 12",
  "languages": "Common",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Mace",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Bludgeoning damage plus 2 (1d4) Radiant damage."
    },
    {
      "name": "Radiant Flame",
      "text": "<i>Ranged Attack Roll:</i> +4, range 60 ft. <i>Hit:</i> 7 (2d6) Radiant damage."
    },
    {
      "name": "Spellcasting",
      "text": "The priest casts one of the following spells, using Wisdom as the spellcasting ability: **At Will:** <i>Light, Thaumaturgy</i>"
    },
    {
      "name": "Divine Aid (1/Day)",
      "text": "The priest casts <i>Bless, Healing Word,</i> or <i>Sanctuary,</i> using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "priest",
  "name": "Priest",
  "size": "Medium or Small",
  "type": "Humanoid (Cleric)",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 38,
  "hpFormula": "7d8 + 7",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      12,
      1
    ],
    "int": [
      13,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      13,
      1
    ]
  },
  "initiative": "+0",
  "skills": "Medicine +7, Perception +5, Religion +5",
  "gear": "Chain Shirt, Holy Symbol, Mace",
  "senses": "Passive Perception 15",
  "languages": "Common plus one other language",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The priest makes two attacks, using Mace or Radiant Flame in any combination."
    },
    {
      "name": "Mace",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 6 (1d6 + 3) Bludgeoning damage plus 5 (2d4) Radiant damage."
    },
    {
      "name": "Radiant Flame",
      "text": "<i>Ranged Attack Roll:</i> +5, range 60 ft. <i>Hit:</i> 11 (2d10) Radiant damage."
    },
    {
      "name": "Spellcasting",
      "text": "The priest casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 13): **At Will:** <i>Light, Thaumaturgy</i> **1/Day:** <i>Spirit Guardians</i>"
    },
    {
      "name": "Divine Aid (3/Day)",
      "text": "The priest casts <i>Bless, Dispel Magic, Healing Word,</i> or <i>Lesser Restoration,</i> using the same spellcasting ability as Spellcasting."
    }
  ]
},
{
  "id": "purple-worm",
  "name": "Purple Worm",
  "size": "Gargantuan",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 18,
  "acNote": "",
  "hp": 247,
  "hpFormula": "15d20 + 90",
  "speed": "50 ft., Burrow 50 ft.",
  "abilities": {
    "str": [
      28,
      9
    ],
    "dex": [
      7,
      -2
    ],
    "con": [
      22,
      6
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      4,
      -3
    ]
  },
  "initiative": "+3",
  "savingThrows": "Con +11, Wis +4",
  "senses": "Blindsight 30 ft., Tremorsense 60 ft.; Passive Perception 9",
  "languages": "None",
  "cr": "15",
  "crNum": 15.0,
  "xp": 13000,
  "traits": [
    {
      "name": "Tunneler",
      "text": "The worm can burrow through solid rock at half its Burrow Speed and leaves a 10-foot-diameter tunnel in its wake."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The worm makes one Bite attack and one Tail Stinger attack."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 22 (3d8 + 9) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 19), and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Tail Stinger",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 16 (2d6 + 9) Piercing damage plus 35 (10d6) Poison damage."
    },
    {
      "name": "Swallow",
      "text": "<i>Strength Saving Throw:</i> DC 19, one Large or smaller creature Grappled by the worm (it can have up to three creatures swallowed at a time). <i>Failure:</i> The target is swallowed by the worm, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions, has Total Cover against attacks and other effects outside the worm, and takes 17 (5d6) Acid damage at the start of each of the worm's turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 5 feet of the worm and has the Prone condition. If the worm dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 20 feet of movement, exiting Prone."
    }
  ]
},
{
  "id": "quasit",
  "name": "Quasit",
  "size": "Tiny",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 13,
  "acNote": "",
  "hp": 25,
  "hpFormula": "10d4",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      5,
      -3
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      10,
      0
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+3",
  "skills": "Stealth +5",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft.; Passive Perception 10",
  "languages": "Abyssal, Common",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The quasit has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 5 (1d4 + 3) Slashing damage, and the target has the Poisoned condition until the start of the quasit's next turn."
    },
    {
      "name": "Invisibility",
      "text": "The quasit casts <i>Invisibility</i> on itself, requiring no spell components and using Charisma as the spellcasting ability."
    },
    {
      "name": "Scare (1/Day)",
      "text": "<i>Wisdom Saving Throw:</i> DC 10, one creature within 20 feet. <i>Failure:</i> The target has the Frightened condition. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    },
    {
      "name": "Shape-Shift",
      "text": "The quasit shape-shifts to resemble a bat (Speed 10 ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft., Swim 40 ft.), or it returns to its true form. Its game statistics are the same in each form, except for its Speed. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "rakshasa",
  "name": "Rakshasa",
  "size": "Medium",
  "type": "Fiend",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 17,
  "acNote": "",
  "hp": 221,
  "hpFormula": "26d8 + 104",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      18,
      4
    ],
    "int": [
      13,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+8",
  "skills": "Deception +10, Insight +8, Perception +8",
  "damageVulnerabilities": "Piercing damage from weapons wielded by creatures under the effect of a _Bless_ spell",
  "damageImmunities": "Charmed, Frightened",
  "senses": "Truesight 60 ft.; Passive Perception 18",
  "languages": "Common, Infernal",
  "cr": "13",
  "crNum": 13.0,
  "xp": 10000,
  "traits": [
    {
      "name": "Greater Magic Resistance",
      "text": "The rakshasa automatically succeeds on saving throws against spells and other magical effects, and the attack rolls of spells automatically miss it. Without the rakshasa's permission, no spell can observe the rakshasa remotely or detect its thoughts, creature type, or alignment."
    },
    {
      "name": "Fiendish Restoration",
      "text": "If the rakshasa dies outside the Nine Hells, its body turns to ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Nine Hells."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The rakshasa makes three Cursed Touch attacks."
    },
    {
      "name": "Cursed Touch",
      "text": "<i>Melee Attack Roll:</i> +10, reach 5 ft. <i>Hit:</i> 12 (2d6 + 5) Slashing damage plus 19 (3d12) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target gains no benefit from finishing a Short or Long Rest."
    },
    {
      "name": "Baleful Command (Recharge 5\u20136)",
      "text": "<i>Wisdom Saving Throw:</i> DC 18, each enemy in a 30-foot Emanation originating from the rakshasa. <i>Failure:</i> 28 (8d6) Psychic damage, and the target has the Frightened and Incapacitated conditions until the start of the rakshasa's next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The rakshasa casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 18): **At Will:** <i>Detect Magic, Detect Thoughts, Disguise Self, Mage Hand, Minor Illusion</i> **1/Day Each:** <i>Fly, Invisibility, Major Image, Plane Shift</i>"
    }
  ]
},
{
  "id": "red-dragon-wyrmling",
  "name": "Red Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 75,
  "hpFormula": "10d8 + 30",
  "speed": "30 ft., Climb 30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      17,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +2, Wis +2",
  "skills": "Perception +4, Stealth +2",
  "damageImmunities": "Fire",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 9 (1d10 + 4) Slashing damage plus 3 (1d6) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 13, each creature in a 15-foot Cone. <i>Failure:</i> 24 (7d6) Fire damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "young-red-dragon",
  "name": "Young Red Dragon",
  "size": "Large",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 178,
  "hpFormula": "17d10 + 85",
  "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      21,
      5
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      19,
      4
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +4",
  "skills": "Perception +8, Stealth +4",
  "damageImmunities": "Fire",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 18",
  "languages": "Common, Draconic",
  "cr": "10",
  "crNum": 10.0,
  "xp": 5900,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +10, reach 10 ft. <i>Hit:</i> 13 (2d6 + 6) Slashing damage plus 3 (1d6) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 17, each creature in a 30-foot Cone. <i>Failure:</i> 56 (16d6) Fire damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "adult-red-dragon",
  "name": "Adult Red Dragon",
  "size": "Huge",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 19,
  "acNote": "",
  "hp": 256,
  "hpFormula": "19d12 + 133",
  "speed": "40 ft., Climb 40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      25,
      7
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      23,
      6
    ]
  },
  "initiative": "+12",
  "savingThrows": "Dex +6, Wis +7",
  "skills": "Perception +13, Stealth +6",
  "damageImmunities": "Fire",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 23",
  "languages": "Common, Draconic",
  "cr": "17",
  "crNum": 17.0,
  "xp": 18000,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast <i>Scorching Ray</i>."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 13 (1d10 + 8) Slashing damage plus 5 (2d4) Fire damage."
    },
    {
      "name": "Fire Breath (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 21, each creature in a 60-foot Cone. <i>Failure:</i> 59 (17d6) Fire damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 20, +12 to hit with spell attacks): **At Will:** <i>Command</i> (level 2 version), <i>Detect Magic</i>, <i>Scorching Ray</i> **1/Day:** <i>Fireball</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Commanding Presence",
        "text": "The dragon uses Spellcasting to cast <i>Command</i> (level 2 version). The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Fiery Rays",
        "text": "The dragon uses Spellcasting to cast <i>Scorching Ray</i>. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "roc",
  "name": "Roc",
  "size": "Gargantuan",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 15,
  "acNote": "",
  "hp": 248,
  "hpFormula": "16d20 + 80",
  "speed": "20 ft., Fly 120 ft.",
  "abilities": {
    "str": [
      28,
      9
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      20,
      5
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+8",
  "savingThrows": "Dex +4, Wis +4",
  "skills": "Perception +8",
  "senses": "Passive Perception 18",
  "languages": "None",
  "cr": "11",
  "crNum": 11.0,
  "xp": 7200,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The roc makes two Beak attacks. It can replace one attack with a Talons attack."
    },
    {
      "name": "Beak",
      "text": "<i>Melee Attack Roll:</i> +13, reach 10 ft. <i>Hit:</i> 28 (3d12 + 9) Piercing damage."
    },
    {
      "name": "Talons",
      "text": "<i>Melee Attack Roll:</i> +13, reach 5 ft. <i>Hit:</i> 23 (4d6 + 9) Slashing damage. If the target is a Huge or smaller creature, it has the Grappled condition (escape DC 19) from both talons, and it has the Restrained condition until the grapple ends."
    },
    {
      "name": "Swoop (Recharge 5\u20136)",
      "text": "If the roc has a creature Grappled, the roc flies up to half its Fly Speed without provoking Opportunity Attacks and drops that creature."
    }
  ]
},
{
  "id": "roper",
  "name": "Roper",
  "size": "Large",
  "type": "Aberration",
  "alignment": "Neutral Evil",
  "tag": "aberration",
  "ac": 20,
  "acNote": "",
  "hp": 93,
  "hpFormula": "11d10 + 33",
  "speed": "10 ft., Climb 20 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      17,
      3
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+5",
  "skills": "Perception +6, Stealth +5",
  "senses": "Darkvision 60 ft.; Passive Perception 16",
  "languages": "None",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Spider Climb",
      "text": "The roper can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The roper makes two Tentacle attacks, uses Reel, and makes two Bite attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 17 (3d8 + 4) Piercing damage."
    },
    {
      "name": "Tentacle",
      "text": "<i>Melee Attack Roll:</i> +7, reach 60 ft. <i>Hit:</i> The target has the Grappled condition (escape DC 14) from one of six tentacles, and the target has the Poisoned condition until the grapple ends. The tentacle can be damaged, freeing a creature it has Grappled when destroyed (AC 20, HP 10, Immunity to Poison and Psychic damage). Damaging the tentacle deals no damage to the roper, and a destroyed tentacle regrows at the start of the roper's next turn."
    },
    {
      "name": "Reel",
      "text": "The roper pulls each creature Grappled by it up to 30 feet straight toward it."
    }
  ]
},
{
  "id": "rust-monster",
  "name": "Rust Monster",
  "size": "Medium",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 14,
  "acNote": "",
  "hp": 33,
  "hpFormula": "6d8 + 6",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      13,
      1
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+1",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Iron Scent",
      "text": "The rust monster can pinpoint the location of ferrous metal within 30 feet of itself."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The rust monster makes one Bite attack and uses Antennae twice."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 5 (1d8 + 1) Piercing damage."
    },
    {
      "name": "Antennae",
      "text": "The rust monster targets one nonmagical metal object\u2014armor or a weapon\u2014worn or carried by a creature within 5 feet of itself. <i>Dexterity Saving Throw:</i> DC 11, the creature with the object. <i>Failure:</i> The object takes a \u22121 penalty to the AC it offers (armor) or to its attack rolls (weapon). Armor is destroyed if the penalty reduces its AC to 10, and a weapon is destroyed if its penalty reaches \u22125. The penalty can be removed by casting the <i>Mending</i> spell on the armor or weapon."
    },
    {
      "name": "Destroy Metal",
      "text": "The rust monster touches a nonmagical metal object within 5 feet of itself that isn't being worn or carried. The touch destroys a 1-foot Cube of the object."
    }
  ],
  "reactions": [
    {
      "name": "Reflexive Antennae",
      "text": "<i>Trigger:</i> An attack roll hits the rust monster. <i>Response:</i> The rust monster uses Antennae."
    }
  ]
},
{
  "id": "sahuagin-warrior",
  "name": "Sahuagin Warrior",
  "size": "Medium",
  "type": "Fiend",
  "alignment": "Lawful Evil",
  "tag": "fiend",
  "ac": 12,
  "acNote": "",
  "hp": 22,
  "hpFormula": "4d8 + 4",
  "speed": "30 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      13,
      1
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      12,
      1
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+0",
  "skills": "Perception +5",
  "damageResistances": "Acid, Cold",
  "senses": "Darkvision 120 ft.; Passive Perception 15",
  "languages": "Sahuagin",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Blood Frenzy",
      "text": "The sahuagin has Advantage on attack rolls against any creature that doesn't have all its Hit Points."
    },
    {
      "name": "Limited Amphibiousness",
      "text": "The sahuagin can breathe air and water, but it must be submerged at least once every 4 hours to avoid suffocating outside water."
    },
    {
      "name": "Shark Telepathy",
      "text": "The sahuagin can magically control sharks within 120 feet of itself, using a special telepathy."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The sahuagin makes two Claw attacks."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +3, reach 5 ft. <i>Hit:</i> 4 (1d6 + 1) Slashing damage."
    },
    {
      "name": "Aquatic Charge",
      "text": "The sahuagin swims up to its Swim Speed straight toward an enemy it can see."
    }
  ]
},
{
  "id": "salamander",
  "name": "Salamander",
  "size": "Large",
  "type": "Elemental",
  "alignment": "Neutral Evil",
  "tag": "elemental",
  "ac": 15,
  "acNote": "",
  "hp": 90,
  "hpFormula": "12d10 + 24",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      15,
      2
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+2",
  "damageVulnerabilities": "Cold",
  "damageImmunities": "Fire",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Ignan)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Fire Aura",
      "text": "At the end of each of the salamander's turns, each creature of the salamander's choice in a 5-foot Emanation originating from the salamander takes 7 (2d6) Fire damage."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The salamander makes two Flame Spear attacks. It can replace one attack with a use of Constrict."
    },
    {
      "name": "Flame Spear",
      "text": "<i>Melee or Ranged Attack Roll:</i> +7, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 13 (2d8 + 4) Piercing damage plus 7 (2d6) Fire damage. <i>Hit or Miss:</i> The spear magically returns to the salamander's hand immediately after a ranged attack."
    },
    {
      "name": "Constrict",
      "text": "<i>Strength Saving Throw:</i> DC 15, one Large or smaller creature the salamander can see within 10 feet. <i>Failure:</i> 11 (2d6 + 4) Bludgeoning damage plus 7 (2d6) Fire damage. The target has the Grappled condition (escape DC 14), and it has the Restrained condition until the grapple ends."
    }
  ]
},
{
  "id": "satyr",
  "name": "Satyr",
  "size": "Medium",
  "type": "Fey",
  "alignment": "Chaotic Neutral",
  "tag": "fey",
  "ac": 13,
  "acNote": "",
  "hp": 31,
  "hpFormula": "7d8",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      12,
      1
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      11,
      0
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+3",
  "skills": "Perception +2, Performance +6, Stealth +5",
  "senses": "Passive Perception 12",
  "languages": "Common, Elvish, Sylvan",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The satyr has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Hooves",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 5 (1d4 + 3) Bludgeoning damage. If the target is a Medium or smaller creature, the satyr pushes the target up to 10 feet straight away from itself."
    },
    {
      "name": "Mockery",
      "text": "<i>Wisdom Saving Throw:</i> DC 12, one creature the satyr can see within 90 feet. <i>Failure:</i> 5 (1d6 + 2) Psychic damage."
    }
  ]
},
{
  "id": "scout",
  "name": "Scout",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 16,
  "hpFormula": "3d8 + 3",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      11,
      0
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      12,
      1
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "skills": "Nature +4, Perception +5, Stealth +6, Survival +5",
  "gear": "Leather Armor, Longbow, Shortsword",
  "senses": "Passive Perception 15",
  "languages": "Common plus one other language",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The scout makes two attacks, using Shortsword and Longbow in any combination."
    },
    {
      "name": "Shortsword",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Piercing damage."
    },
    {
      "name": "Longbow",
      "text": "<i>Ranged Attack Roll:</i> +4, range 150/600 ft. <i>Hit:</i> 6 (1d8 + 2) Piercing damage."
    }
  ]
},
{
  "id": "shadow",
  "name": "Shadow",
  "size": "Medium",
  "type": "Undead",
  "alignment": "Chaotic Evil",
  "tag": "undead",
  "ac": 12,
  "acNote": "",
  "hp": 27,
  "hpFormula": "5d8 + 5",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      13,
      1
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Stealth +6",
  "damageVulnerabilities": "Radiant",
  "damageResistances": "Acid, Cold, Fire, Lightning, Thunder",
  "damageImmunities": "Necrotic, Poison",
  "conditionImmunities": "Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Amorphous",
      "text": "The shadow can move through a space as narrow as 1 inch without expending extra movement to do so."
    },
    {
      "name": "Sunlight Weakness",
      "text": "While in sunlight, the shadow has Disadvantage on D20 Tests."
    }
  ],
  "actions": [
    {
      "name": "Draining Swipe",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Necrotic damage, and the target's Strength score decreases by 1d4. The target dies if this reduces that score to 0. If a Humanoid is slain by this attack, a **Shadow** rises from the corpse 1d4 hours later."
    },
    {
      "name": "Shadow Stealth",
      "text": "While in Dim Light or Darkness, the shadow takes the Hide action."
    }
  ]
},
{
  "id": "shambling-mound",
  "name": "Shambling Mound",
  "size": "Large",
  "type": "Plant",
  "alignment": "Unaligned",
  "tag": "plant",
  "ac": 15,
  "acNote": "",
  "hp": 110,
  "hpFormula": "13d10 + 39",
  "speed": "30 ft., Swim 20 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      16,
      3
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "-1",
  "skills": "Stealth +3",
  "damageResistances": "Cold, Fire",
  "damageImmunities": "Lightning",
  "conditionImmunities": "Deafened, Exhaustion",
  "senses": "Blindsight 60 ft.; Passive Perception 10",
  "languages": "None",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Lightning Absorption",
      "text": "Whenever the shambling mound is subjected to Lightning damage, it regains a number of Hit Points equal to the Lightning damage dealt."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The shambling mound makes three Charged Tendril attacks. It can replace one attack with a use of Engulf."
    },
    {
      "name": "Charged Tendril",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 7 (1d6 + 4) Bludgeoning damage plus 5 (2d4) Lightning damage. If the target is a Medium or smaller creature, the shambling mound pulls the target 5 feet straight toward itself."
    },
    {
      "name": "Engulf",
      "text": "<i>Strength Saving Throw:</i> DC 15, one Medium or smaller creature within 5 feet. <i>Failure:</i> The target is pulled into the shambling mound's space and has the Grappled condition (escape DC 14). Until the grapple ends, the target has the Blinded and Restrained conditions, and it takes 10 (3d6) Lightning damage at the start of each of its turns. When the shambling mound moves, the Grappled target moves with it, costing it no extra movement. The shambling mound can have only one creature Grappled by this action at a time."
    }
  ]
},
{
  "id": "shield-guardian",
  "name": "Shield Guardian",
  "size": "Large",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 17,
  "acNote": "",
  "hp": 142,
  "hpFormula": "15d10 + 60",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      18,
      4
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      3,
      -4
    ]
  },
  "initiative": "-1",
  "damageImmunities": "Poison",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 10",
  "languages": "Understands commands given in any language but can't speak",
  "cr": "7",
  "crNum": 7.0,
  "xp": 2900,
  "traits": [
    {
      "name": "Bound",
      "text": "The guardian is magically bound to an amulet. While the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (round up) is transferred to the guardian."
    },
    {
      "name": "Regeneration",
      "text": "The guardian regains 10 Hit Points at the start of each of its turns if it has at least 1 Hit Point."
    },
    {
      "name": "Spell Storing",
      "text": "A spellcaster who wears the guardian's amulet can cause the guardian to store one spell of level 4 or lower. To do so, the wearer must cast the spell on the guardian while within 5 feet of it. The spell has no effect but is stored within the guardian. Any previously stored spell is lost when a new spell is stored. The guardian can cast the spell stored with any parameters set by the original caster, requiring no spell components and using the caster's spellcasting ability. The stored spell is then lost."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The guardian makes two Fist attacks."
    },
    {
      "name": "Fist",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 11 (2d6 + 4) Bludgeoning damage plus 7 (2d6) Force damage."
    }
  ],
  "reactions": [
    {
      "name": "Protection",
      "text": "<i>Trigger:</i> An attack roll hits the wearer of the guardian's amulet while the wearer is within 5 feet of the guardian. <i>Response:</i> The wearer gains a +5 bonus to AC, including against the triggering attack and possibly causing it to miss, until the start of the guardian's next turn."
    }
  ]
},
{
  "id": "silver-dragon-wyrmling",
  "name": "Silver Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 45,
  "hpFormula": "6d8 + 18",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      17,
      3
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      15,
      2
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +2, Wis +2",
  "skills": "Perception +4, Stealth +2",
  "damageImmunities": "Cold",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 9 (1d10 + 4) Piercing damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 13, each creature in a 15-foot Cone. <i>Failure:</i> 18 (4d8) Cold damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Paralyzing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 13, each creature in a 15-foot Cone. <i>First Failure:</i> The target has the Incapacitated condition until the end of its next turn, when it repeats the save. <i>Second Failure:</i> The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    }
  ]
},
{
  "id": "young-silver-dragon",
  "name": "Young Silver Dragon",
  "size": "Large",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 168,
  "hpFormula": "16d10 + 80",
  "speed": "40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      21,
      5
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      19,
      4
    ]
  },
  "initiative": "+4",
  "savingThrows": "Dex +4, Wis +4",
  "skills": "History +6, Perception +8, Stealth +4",
  "damageImmunities": "Cold",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 18",
  "languages": "Common, Draconic",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of Paralyzing Breath."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +10, reach 10 ft. <i>Hit:</i> 15 (2d8 + 6) Slashing damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 17, each creature in a 30-foot Cone. <i>Failure:</i> 49 (11d8) Cold damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Paralyzing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 17, each creature in a 30-foot Cone. <i>First Failure:</i> The target has the Incapacitated condition until the end of its next turn, when it repeats the save. <i>Second Failure:</i> The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    }
  ]
},
{
  "id": "adult-silver-dragon",
  "name": "Adult Silver Dragon",
  "size": "Huge",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 19,
  "acNote": "",
  "hp": 216,
  "hpFormula": "16d12 + 112",
  "speed": "40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      27,
      8
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      25,
      7
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      22,
      6
    ]
  },
  "initiative": "+10",
  "savingThrows": "Dex +5, Wis +6",
  "skills": "History +8, Perception +11, Stealth +5",
  "damageImmunities": "Cold",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 21",
  "languages": "Common, Draconic",
  "cr": "16",
  "crNum": 16.0,
  "xp": 15000,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast <i>Ice Knife</i>."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +13, reach 10 ft. <i>Hit:</i> 17 (2d8 + 8) Slashing damage plus 4 (1d8) Cold damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 20, each creature in a 60-foot Cone. <i>Failure:</i> 54 (12d8) Cold damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Paralyzing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 20, each creature in a 60-foot Cone. <i>First Failure:</i> The target has the Incapacitated condition until the end of its next turn, when it repeats the save. <i>Second Failure:</i> The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 19, +11 to hit with spell attacks): **At Will:** <i>Detect Magic</i>, <i>Hold Monster</i>, <i>Ice Knife</i>, <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Ice Storm</i> (level 5 version), <i>Zone of Truth</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Chill",
        "text": "The dragon uses Spellcasting to cast <i>Hold Monster</i>. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Cold Gale",
        "text": "<i>Dexterity Saving Throw:</i> DC 19, each creature in a 60-foot-long, 10-foot-wide Line. <i>Failure:</i> 14 (4d6) Cold damage, and the target is pushed up to 30 feet straight away from the dragon. <i>Success:</i> Half damage only. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "ancient-silver-dragon",
  "name": "Ancient Silver Dragon",
  "size": "Gargantuan",
  "type": "Dragon (Metallic)",
  "alignment": "Lawful Good",
  "tag": "dragon",
  "ac": 22,
  "acNote": "",
  "hp": 468,
  "hpFormula": "24d20 + 216",
  "speed": "40 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      30,
      10
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      29,
      9
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      26,
      8
    ]
  },
  "initiative": "+14",
  "savingThrows": "Dex +7, Wis +9",
  "skills": "History +11, Perception +16, Stealth +7",
  "damageImmunities": "Cold",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 26",
  "languages": "Common, Draconic",
  "cr": "23",
  "crNum": 23.0,
  "xp": 50000,
  "traits": [
    {
      "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast <i>Ice Knife</i> (level 2 version)."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +17, reach 15 ft. <i>Hit:</i> 19 (2d8 + 10) Slashing damage plus 9 (2d8) Cold damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 24, each creature in a 90-foot Cone. <i>Failure:</i> 67 (15d8) Cold damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Paralyzing Breath",
      "text": "<i>Constitution Saving Throw:</i> DC 24, each creature in a 90-foot Cone. <i>First Failure:</i> The target has the Incapacitated condition until the end of its next turn, when it repeats the save. <i>Second Failure:</i> The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    },
    {
      "name": "Spellcasting",
      "text": "The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 23, +15 to hit with spell attacks): **At Will:** <i>Detect Magic</i>, <i>Hold Monster</i>, <i>Ice Knife</i> (level 2 version), <i>Shapechange</i> (Beast or Humanoid form only, no Temporary Hit Points gained from the spell, and no Concentration or Temporary Hit Points required to maintain the spell) **1/Day Each:** <i>Control Weather</i>, <i>Ice Storm</i> (level 7 version), <i>Teleport</i>, <i>Zone of Truth</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Chill",
        "text": "The dragon uses Spellcasting to cast <i>Hold Monster</i>. The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Cold Gale",
        "text": "<i>Dexterity Saving Throw:</i> DC 23, each creature in a 60-foot-long, 10-foot-wide Line. <i>Failure:</i> 14 (4d6) Cold damage, and the target is pushed up to 30 feet straight away from the dragon. <i>Success:</i> Half damage only. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "warhorse-skeleton",
  "name": "Warhorse Skeleton",
  "size": "Large",
  "type": "Undead",
  "alignment": "Lawful Evil",
  "tag": "undead",
  "ac": 13,
  "acNote": "",
  "hp": 22,
  "hpFormula": "3d10 + 6",
  "speed": "60 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      15,
      2
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+1",
  "damageVulnerabilities": "Bludgeoning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [],
  "actions": [
    {
      "name": "Hooves",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 7 (1d6 + 4) Bludgeoning damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
    }
  ]
},
{
  "id": "minotaur-skeleton",
  "name": "Minotaur Skeleton",
  "size": "Large",
  "type": "Undead",
  "alignment": "Lawful Evil",
  "tag": "undead",
  "ac": 12,
  "acNote": "",
  "hp": 45,
  "hpFormula": "6d10 + 12",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      15,
      2
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "+0",
  "damageVulnerabilities": "Bludgeoning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "Understands Abyssal but can't speak",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Gore",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 11 (2d6 + 4) Piercing damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 15 (2d10 + 4) Bludgeoning damage."
    }
  ]
},
{
  "id": "solar",
  "name": "Solar",
  "size": "Large",
  "type": "Celestial (Angel)",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 21,
  "acNote": "",
  "hp": 297,
  "hpFormula": "22d10 + 176",
  "speed": "50 ft., Fly 150 ft. (hover)",
  "abilities": {
    "str": [
      26,
      8
    ],
    "dex": [
      22,
      6
    ],
    "con": [
      26,
      8
    ],
    "int": [
      25,
      7
    ],
    "wis": [
      25,
      7
    ],
    "cha": [
      30,
      10
    ]
  },
  "initiative": "+20",
  "skills": "Perception +14",
  "damageImmunities": "Poison, Radiant",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Poisoned",
  "senses": "Truesight 120 ft.; Passive Perception 24",
  "languages": "All; telepathy 120 ft.",
  "cr": "21",
  "crNum": 21.0,
  "xp": 33000,
  "traits": [
    {
      "name": "Divine Awareness",
      "text": "The solar knows if it hears a lie."
    },
    {
      "name": "Exalted Restoration",
      "text": "If the solar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit Points somewhere in Mount Celestia."
    },
    {
      "name": "Legendary Resistance (4/Day)",
      "text": "If the solar fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Magic Resistance",
      "text": "The solar has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The solar makes two Flying Sword attacks. It can replace one attack with a use of Slaying Bow."
    },
    {
      "name": "Flying Sword",
      "text": "<i>Melee or Ranged Attack Roll:</i> +15, reach 10 ft. or range 120 ft. <i>Hit:</i> 22 (4d6 + 8) Slashing damage plus 36 (8d8) Radiant damage. <i>Hit or Miss:</i> The sword magically returns to the solar's hand or hovers within 5 feet of the solar immediately after a ranged attack."
    },
    {
      "name": "Slaying Bow",
      "text": "<i>Dexterity Saving Throw:</i> DC 21, one creature the solar can see within 600 feet. <i>Failure:</i> If the creature has 100 Hit Points or fewer, it dies. It otherwise takes 24 (4d8 + 6) Piercing damage plus 36 (8d8) Radiant damage."
    },
    {
      "name": "Spellcasting",
      "text": "The solar casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 25): **At Will:** <i>Detect Evil and Good</i> **1/Day Each:** <i>Commune, Control Weather, Dispel Evil and Good, Resurrection</i>"
    },
    {
      "name": "Divine Aid (3/Day)",
      "text": "The solar casts <i>Cure Wounds</i> (level 2 version), <i>Lesser Restoration</i>, or <i>Remove Curse</i>, using the same spellcasting ability as Spellcasting."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3. Immediately after another creature's turn, the solar can expend a use to take one of the following actions. The solar regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Blinding Gaze",
        "text": "<i>Constitution Saving Throw:</i> DC 25, one creature the solar can see within 120 feet. <i>Failure:</i> The target has the Blinded condition for 1 minute. <i>Failure or Success:</i> The solar can't take this action again until the start of its next turn."
      },
      {
        "name": "Radiant Teleport",
        "text": "The solar teleports up to 60 feet to an unoccupied space it can see. <i>Dexterity Saving Throw:</i> DC 25, each creature in a 10-foot Emanation originating from the solar at its destination space. <i>Failure:</i> 11 (2d10) Radiant damage. <i>Success:</i> Half damage."
      }
    ]
  }
},
{
  "id": "specter",
  "name": "Specter",
  "size": "Medium",
  "type": "Undead",
  "alignment": "Chaotic Evil",
  "tag": "undead",
  "ac": 12,
  "acNote": "",
  "hp": 22,
  "hpFormula": "5d8",
  "speed": "30 ft., Fly 50 ft. (hover)",
  "abilities": {
    "str": [
      1,
      -5
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      11,
      0
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "damageResistances": "Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder",
  "damageImmunities": "Necrotic, Poison",
  "conditionImmunities": "Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Understands Common plus one other language but can't speak",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Incorporeal Movement",
      "text": "The specter can move through other creatures and objects as if they were Difficult Terrain. It takes 5 (1d10) Force damage if it ends its turn inside an object."
    },
    {
      "name": "Sunlight Sensitivity",
      "text": "While in sunlight, the specter has Disadvantage on ability checks and attack rolls."
    }
  ],
  "actions": [
    {
      "name": "Life Drain",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 7 (2d6) Necrotic damage. If the target is a creature, its Hit Point maximum decreases by an amount equal to the damage taken."
    }
  ]
},
{
  "id": "sphinx-of-wonder",
  "name": "Sphinx of Wonder",
  "size": "Tiny",
  "type": "Celestial",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 13,
  "acNote": "",
  "hp": 24,
  "hpFormula": "7d4 + 7",
  "speed": "20 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      6,
      -2
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      13,
      1
    ],
    "int": [
      15,
      2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+3",
  "skills": "Arcana +4, Religion +4, Stealth +5",
  "damageResistances": "Necrotic, Psychic, Radiant",
  "senses": "Darkvision 60 ft.; Passive Perception 11",
  "languages": "Celestial, Common",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [
    {
      "name": "Magic Resistance",
      "text": "The sphinx has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 5 (1d4 + 3) Slashing damage plus 7 (2d6) Radiant damage."
    }
  ],
  "reactions": [
    {
      "name": "Burst of Ingenuity (2/Day)",
      "text": "<i>Trigger:</i> The sphinx or another creature within 30 feet makes an ability check or a saving throw. <i>Response:</i> The sphinx adds 2 to the roll."
    }
  ]
},
{
  "id": "sphinx-of-lore",
  "name": "Sphinx of Lore",
  "size": "Large",
  "type": "Celestial",
  "alignment": "Lawful Neutral",
  "tag": "celestial",
  "ac": 17,
  "acNote": "",
  "hp": 170,
  "hpFormula": "20d10 + 60",
  "speed": "40 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      18,
      4
    ],
    "wis": [
      18,
      4
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+10",
  "skills": "Arcana +12, History +12, Perception +8, Religion +12",
  "damageResistances": "Necrotic, Radiant",
  "damageImmunities": "Psychic",
  "conditionImmunities": "Charmed, Frightened",
  "senses": "Truesight 120 ft.; Passive Perception 18",
  "languages": "Celestial, Common",
  "cr": "11",
  "crNum": 11.0,
  "xp": 7200,
  "traits": [
    {
      "name": "Inscrutable",
      "text": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight) checks made to ascertain its intentions or sincerity are made with Disadvantage."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the sphinx fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The sphinx makes three Claw attacks."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +8, reach 5 ft. <i>Hit:</i> 14 (3d6 + 4) Slashing damage."
    },
    {
      "name": "Mind-Rending Roar (Recharge 5\u20136)",
      "text": "<i>Wisdom Saving Throw:</i> DC 16, each enemy in a 300-foot Emanation originating from the sphinx. <i>Failure:</i> 35 (10d6) Psychic damage, and the target has the Incapacitated condition until the start of the sphinx's next turn."
    },
    {
      "name": "Spellcasting",
      "text": "The sphinx casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability (spell save DC 16): **At Will:** <i>Detect Magic</i>, <i>Identify</i>, <i>Mage Hand</i>, <i>Minor Illusion</i>, <i>Prestidigitation</i> **1/Day Each:** <i>Dispel Magic</i>, <i>Legend Lore</i>, <i>Locate Object</i>, <i>Plane Shift</i>, <i>Remove Curse</i>, <i>Tongues</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the sphinx can expend a use to take one of the following actions. The sphinx regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Arcane Prowl",
        "text": "The sphinx can teleport up to 30 feet to an unoccupied space it can see, and it makes one Claw attack."
      },
      {
        "name": "Weight of Years",
        "text": "<i>Constitution Saving Throw:</i> DC 16, one creature the sphinx can see within 120 feet. <i>Failure:</i> The target gains 1 Exhaustion level. While the target has any Exhaustion levels, it appears 3d10 years older. <i>Failure or Success:</i> The sphinx can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "sphinx-of-valor",
  "name": "Sphinx of Valor",
  "size": "Large",
  "type": "Celestial",
  "alignment": "Lawful Neutral",
  "tag": "celestial",
  "ac": 17,
  "acNote": "",
  "hp": 199,
  "hpFormula": "19d10 + 95",
  "speed": "40 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      22,
      6
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      20,
      5
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      23,
      6
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+12",
  "savingThrows": "Dex +6, Con +11, Int +9, Wis +12",
  "skills": "Arcana +9, Perception +12, Religion +15",
  "damageResistances": "Necrotic, Radiant",
  "damageImmunities": "Psychic",
  "conditionImmunities": "Charmed, Frightened",
  "senses": "Truesight 120 ft.; Passive Perception 22",
  "languages": "Celestial, Common",
  "cr": "17",
  "crNum": 17.0,
  "xp": 18000,
  "traits": [
    {
      "name": "Inscrutable",
      "text": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight) checks made to ascertain its intentions or sincerity are made with Disadvantage."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the sphinx fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The sphinx makes two Claw attacks and uses Roar."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +12, reach 5 ft. <i>Hit:</i> 20 (4d6 + 6) Slashing damage."
    },
    {
      "name": "Roar (3/Day)",
      "text": "The sphinx emits a magical roar. Whenever it roars, the roar has a different effect, as detailed below (the sequence resets when it takes a Long Rest):"
    },
    {
      "name": "First Roar",
      "text": "<i>Wisdom Saving Throw:</i> DC 20, each enemy in a 500-foot Emanation originating from the sphinx. <i>Failure:</i> The target has the Frightened condition for 1 minute."
    },
    {
      "name": "Second Roar",
      "text": "<i>Wisdom Saving Throw:</i> DC 20, each enemy in a 500-foot Emanation originating from the sphinx. <i>Failure:</i> The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
    },
    {
      "name": "Third Roar",
      "text": "<i>Constitution Saving Throw:</i> DC 20, each enemy in a 500-foot Emanation originating from the sphinx. <i>Failure:</i> 44 (8d10) Thunder damage, and the target has the Prone condition. <i>Success:</i> Half damage only."
    },
    {
      "name": "Spellcasting",
      "text": "The sphinx casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 20): **At Will:** <i>Detect Evil and Good</i>, <i>Thaumaturgy</i> **1/Day Each:** <i>Detect Magic</i>, <i>Dispel Magic</i>, <i>Greater Restoration</i>, <i>Heroes' Feast</i>, <i>Zone of Truth</i>"
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the sphinx can expend a use to take one of the following actions. The sphinx regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Arcane Prowl",
        "text": "The sphinx can teleport up to 30 feet to an unoccupied space it can see, and it makes one Claw attack."
      },
      {
        "name": "Weight of Years",
        "text": "<i>Constitution Saving Throw:</i> DC 16, one creature the sphinx can see within 120 feet. <i>Failure:</i> The target gains 1 Exhaustion level. While the target has any Exhaustion levels, it appears 3d10 years older. <i>Failure or Success:</i> The sphinx can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "spirit-naga",
  "name": "Spirit Naga",
  "size": "Large",
  "type": "Fiend",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 17,
  "acNote": "",
  "hp": 135,
  "hpFormula": "18d10 + 36",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      14,
      2
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +6, Con +5, Wis +5, Cha +6",
  "damageImmunities": "Poison",
  "conditionImmunities": "Charmed, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 12",
  "languages": "Abyssal, Common",
  "cr": "8",
  "crNum": 8.0,
  "xp": 3900,
  "traits": [
    {
      "name": "Fiendish Restoration",
      "text": "If it dies, the naga returns to life in 1d6 days and regains all its Hit Points. Only a <i>Wish</i> spell can prevent this trait from functioning."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The naga makes three attacks, using Bite or Necrotic Ray in any combination."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 7 (1d6 + 4) Piercing damage plus 14 (4d6) Poison damage."
    },
    {
      "name": "Necrotic Ray",
      "text": "<i>Ranged Attack Roll:</i> +6, range 60 ft. <i>Hit:</i> 21 (6d6) Necrotic damage."
    },
    {
      "name": "Spellcasting",
      "text": "The naga casts one of the following spells, requiring no Somatic or Material components and using Intelligence as the spellcasting ability (spell save DC 14): **At Will:** <i>Detect Magic</i>, <i>Mage Hand</i>, <i>Minor Illusion</i>, <i>Water Breathing</i> **2/Day Each:** <i>Detect Thoughts</i>, <i>Dimension Door</i>, <i>Hold Person</i> (level 3 version), <i>Lightning Bolt</i> (level 4 version)"
    }
  ]
},
{
  "id": "sprite",
  "name": "Sprite",
  "size": "Tiny",
  "type": "Fey",
  "alignment": "Neutral Good",
  "tag": "fey",
  "ac": 15,
  "acNote": "",
  "hp": 10,
  "hpFormula": "4d4",
  "speed": "10 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      3,
      -4
    ],
    "dex": [
      18,
      4
    ],
    "con": [
      10,
      0
    ],
    "int": [
      14,
      2
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+4",
  "skills": "Perception +3, Stealth +8",
  "senses": "Passive Perception 13",
  "languages": "Common, Elvish, Sylvan",
  "cr": "1/4",
  "crNum": 0.25,
  "xp": 50,
  "traits": [],
  "actions": [
    {
      "name": "Needle Sword",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 6 (1d4 + 4) Piercing damage."
    },
    {
      "name": "Enchanting Bow",
      "text": "<i>Ranged Attack Roll:</i> +6, range 40/160 ft. <i>Hit:</i> 1 Piercing damage, and the target has the Charmed condition until the start of the sprite's next turn."
    },
    {
      "name": "Heart Sight",
      "text": "<i>Charisma Saving Throw:</i> DC 10, one creature within 5 feet the sprite can see (Celestials, Fiends, and Undead automatically fail the save). <i>Failure:</i> The sprite knows the target's emotions and alignment."
    },
    {
      "name": "Invisibility",
      "text": "The sprite casts <i>Invisibility</i> on itself, requiring no spell components and using Charisma as the spellcasting ability."
    }
  ]
},
{
  "id": "spy",
  "name": "Spy",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 12,
  "acNote": "",
  "hp": 27,
  "hpFormula": "6d8",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      10,
      0
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      14,
      2
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+4",
  "skills": "Deception +5, Insight +4, Investigation +5, Perception +6, Sleight of Hand +4, Stealth +6",
  "gear": "Hand Crossbow, Shortsword, Thieves' Tools",
  "senses": "Passive Perception 16",
  "languages": "Common plus one other language",
  "cr": "1",
  "crNum": 1.0,
  "xp": 200,
  "traits": [],
  "actions": [
    {
      "name": "Shortsword",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Piercing damage plus 7 (2d6) Poison damage."
    },
    {
      "name": "Hand Crossbow",
      "text": "<i>Ranged Attack Roll:</i> +4, range 30/120 ft. <i>Hit:</i> 5 (1d6 + 2) Piercing damage plus 7 (2d6) Poison damage."
    },
    {
      "name": "Cunning Action",
      "text": "The spy takes the Dash, Disengage, or Hide action."
    }
  ]
},
{
  "id": "stirge",
  "name": "Stirge",
  "size": "Tiny",
  "type": "Monstrosity",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 13,
  "acNote": "",
  "hp": 5,
  "hpFormula": "2d4",
  "speed": "10 ft., Fly 40 ft.",
  "abilities": {
    "str": [
      4,
      -3
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      11,
      0
    ],
    "int": [
      2,
      -4
    ],
    "wis": [
      8,
      -1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+3",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "None",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [],
  "actions": [
    {
      "name": "Proboscis",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 6 (1d6 + 3) Piercing damage, and the stirge attaches to the target. While attached, the stirge can't make Proboscis attacks, and the target takes 5 (2d4) Necrotic damage at the start of each of the stirge's turns. The stirge can detach itself by spending 5 feet of its movement. The target or a creature within 5 feet of it can detach the stirge as an action."
    }
  ]
},
{
  "id": "stone-giant",
  "name": "Stone Giant",
  "size": "Huge",
  "type": "Giant",
  "alignment": "Neutral",
  "tag": "giant",
  "ac": 17,
  "acNote": "",
  "hp": 126,
  "hpFormula": "11d12 + 55",
  "speed": "40 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      20,
      5
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      9,
      -1
    ]
  },
  "initiative": "+5",
  "savingThrows": "Dex +5, Con +8, Wis +4",
  "skills": "Athletics +12, Perception +4, Stealth +5",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Giant",
  "cr": "7",
  "crNum": 7.0,
  "xp": 2900,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The giant makes two attacks, using Stone Club or Boulder in any combination."
    },
    {
      "name": "Stone Club",
      "text": "<i>Melee Attack Roll:</i> +9, reach 15 ft. <i>Hit:</i> 22 (3d10 + 6) Bludgeoning damage."
    },
    {
      "name": "Boulder",
      "text": "<i>Ranged Attack Roll:</i> +9, range 60/240 ft. <i>Hit:</i> 15 (2d8 + 6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
    }
  ],
  "reactions": [
    {
      "name": "Deflect Missile (Recharge 5\u20136)",
      "text": "<i>Trigger:</i> The giant is hit by a ranged attack roll and takes Bludgeoning, Piercing, or Slashing damage from it. <i>Response:</i> The giant reduces the damage it takes from the attack by 11 (1d10 + 6), and if that damage is reduced to 0, the giant can redirect some of the attack's force. <i>Dexterity Saving Throw:</i> DC 17, one creature the giant can see within 60 feet. <i>Failure:</i> 11 (1d10 + 6) Force damage."
    }
  ]
},
{
  "id": "stone-golem",
  "name": "Stone Golem",
  "size": "Large",
  "type": "Construct",
  "alignment": "Unaligned",
  "tag": "construct",
  "ac": 18,
  "acNote": "",
  "hp": 220,
  "hpFormula": "21d10 + 105",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      22,
      6
    ],
    "dex": [
      9,
      -1
    ],
    "con": [
      20,
      5
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "+3",
  "damageImmunities": "Poison, Psychic",
  "conditionImmunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
  "senses": "Darkvision 120 ft.; Passive Perception 10",
  "languages": "Understands Common plus two other languages but can't speak",
  "cr": "10",
  "crNum": 10.0,
  "xp": 5900,
  "traits": [
    {
      "name": "Immutable Form",
      "text": "The golem can't shape-shift."
    },
    {
      "name": "Magic Resistance",
      "text": "The golem has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The golem makes two attacks, using Slam or Force Bolt in any combination."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +10, reach 5 ft. <i>Hit:</i> 15 (2d8 + 6) Bludgeoning damage plus 9 (2d8) Force damage."
    },
    {
      "name": "Force Bolt",
      "text": "<i>Ranged Attack Roll:</i> +9, range 120 ft. <i>Hit:</i> 22 (4d10) Force damage."
    },
    {
      "name": "Slow (Recharge 5\u20136)",
      "text": "The golem casts the <i>Slow</i> spell, requiring no spell components and using Constitution as the spellcasting ability (spell save DC 17)."
    }
  ]
},
{
  "id": "storm-giant",
  "name": "Storm Giant",
  "size": "Huge",
  "type": "Giant",
  "alignment": "Chaotic Good",
  "tag": "giant",
  "ac": 16,
  "acNote": "",
  "hp": 230,
  "hpFormula": "20d12 + 100",
  "speed": "50 ft., Fly 25 ft. (hover), Swim 50 ft.",
  "abilities": {
    "str": [
      29,
      9
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      20,
      5
    ],
    "int": [
      16,
      3
    ],
    "wis": [
      20,
      5
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+7",
  "savingThrows": "Str +14, Con +10, Wis +10, Cha +9",
  "skills": "Arcana +8, Athletics +14, History +8, Perception +10",
  "damageResistances": "Cold",
  "damageImmunities": "Lightning, Thunder",
  "senses": "Darkvision 120 ft., Truesight 30 ft.; Passive Perception 20",
  "languages": "Common, Giant",
  "cr": "13",
  "crNum": 13.0,
  "xp": 10000,
  "traits": [
    {
      "name": "Amphibious",
      "text": "The giant can breathe air and water."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The giant makes two attacks, using Storm Sword or Thunderbolt in any combination."
    },
    {
      "name": "Storm Sword",
      "text": "<i>Melee Attack Roll:</i> +14, reach 10 ft. <i>Hit:</i> 23 (4d6 + 9) Slashing damage plus 13 (3d8) Lightning damage."
    },
    {
      "name": "Thunderbolt",
      "text": "<i>Ranged Attack Roll:</i> +14, range 500 ft. <i>Hit:</i> 22 (2d12 + 9) Lightning damage, and the target has the Blinded and Deafened conditions until the start of the giant's next turn."
    },
    {
      "name": "Lightning Storm (Recharge 5\u20136)",
      "text": "<i>Dexterity Saving Throw:</i> DC 18, each creature in a 10-foot-radius, 40-foot-high Cylinder originating from a point the giant can see within 500 feet. <i>Failure:</i> 55 (10d10) Lightning damage. <i>Success:</i> Half damage."
    },
    {
      "name": "Spellcasting",
      "text": "The giant casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 18): **At Will:** Detect Magic, Light **1/Day:** Control Weather"
    }
  ]
},
{
  "id": "succubus",
  "name": "Succubus",
  "size": "Medium",
  "type": "Fiend",
  "alignment": "Neutral Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 71,
  "hpFormula": "13d8 + 13",
  "speed": "30 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      8,
      -1
    ],
    "dex": [
      17,
      3
    ],
    "con": [
      13,
      1
    ],
    "int": [
      15,
      2
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      20,
      5
    ]
  },
  "initiative": "+3",
  "skills": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
  "damageResistances": "Cold, Fire, Poison, Psychic",
  "senses": "Darkvision 60 ft.; Passive Perception 15",
  "languages": "Abyssal, Common, Infernal; telepathy 60 ft.",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [
    {
      "name": "Incubus Form",
      "text": "When the succubus finishes a Long Rest, it can shape-shift into an **Incubus**, using that stat block instead of this one."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The succubus makes one Fiendish Touch attack and uses Charm or Draining Kiss."
    },
    {
      "name": "Fiendish Touch",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 16 (2d10 + 5) Psychic damage."
    },
    {
      "name": "Charm",
      "text": "The succubus casts Dominate Person (level 8 version), requiring no spell components and using Charisma as the spellcasting ability (spell save DC 15)."
    },
    {
      "name": "Draining Kiss",
      "text": "<i>Constitution Saving Throw:</i> DC 15, one creature Charmed by the succubus within 5 feet. <i>Failure:</i> 13 (3d8) Psychic damage. <i>Success:</i> Half damage. <i>Failure or Success:</i> The target's Hit Point maximum decreases by an amount equal to the damage taken."
    },
    {
      "name": "Shape-Shift",
      "text": "The succubus shape-shifts into a Medium or Small Humanoid, or it returns to its true form. Its game statistics are the same in each form, except its Fly Speed is available only in its true form. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "tarrasque",
  "name": "Tarrasque",
  "size": "Gargantuan",
  "type": "Monstrosity (Titan)",
  "alignment": "Unaligned",
  "tag": "monstrosity",
  "ac": 25,
  "acNote": "",
  "hp": 697,
  "hpFormula": "34d20 + 340",
  "speed": "60 ft., Burrow 40 ft., Climb 60 ft.",
  "abilities": {
    "str": [
      30,
      10
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      30,
      10
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+18",
  "savingThrows": "Dex +9, Int +5, Wis +9, Cha +9",
  "skills": "Perception +9",
  "damageResistances": "Bludgeoning, Piercing, Slashing",
  "damageImmunities": "Fire, Poison",
  "conditionImmunities": "Charmed, Deafened, Frightened, Paralyzed, Poisoned",
  "senses": "Blindsight 120 ft.; Passive Perception 19",
  "languages": "None",
  "cr": "30",
  "crNum": 30.0,
  "xp": 155000,
  "traits": [
    {
      "name": "Legendary Resistance (6/Day)",
      "text": "If the tarrasque fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Magic Resistance",
      "text": "The tarrasque has Advantage on saving throws against spells and other magical effects."
    },
    {
      "name": "Reflective Carapace",
      "text": "If the tarrasque is targeted by a Magic Missile spell or a spell that requires a ranged attack roll, roll 1d6. On a **1\u20135**, the tarrasque is unaffected. On a **6**, the tarrasque is unaffected and reflects the spell, turning the caster into the target."
    },
    {
      "name": "Siege Monster",
      "text": "The tarrasque deals double damage to objects and structures."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The tarrasque makes one Bite attack and three other attacks, using Claw or Tail in any combination."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +19, reach 15 ft. <i>Hit:</i> 36 (4d12 + 10) Piercing damage, and the target has the Grappled condition (escape DC 20). Until the grapple ends, the target has the Restrained condition and can't teleport."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +19, reach 15 ft. <i>Hit:</i> 28 (4d8 + 10) Slashing damage."
    },
    {
      "name": "Tail",
      "text": "<i>Melee Attack Roll:</i> +19, reach 30 ft. <i>Hit:</i> 23 (3d8 + 10) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
    },
    {
      "name": "Thunderous Bellow (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 27, each creature and each object that isn't being worn or carried in a 150-foot Cone. <i>Failure:</i> 78 (12d12) Thunder damage, and the target has the Deafened and Frightened conditions until the end of its next turn. <i>Success:</i> Half damage only."
    },
    {
      "name": "Swallow",
      "text": "<i>Strength Saving Throw:</i> DC 27, one Large or smaller creature Grappled by the tarrasque (it can have up to six creatures swallowed at a time). <i>Failure:</i> The target is swallowed, and the Grappled condition ends. A swallowed creature has the Blinded and Restrained conditions and can't teleport, it has Total Cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) Acid damage at the start of each of the tarrasque's turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the tarrasque and has the Prone condition. If the tarrasque dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 20 feet of movement, exiting Prone."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3. Immediately after another creature's turn, the tarrasque can expend a use to take one of the following actions. The tarrasque regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Onslaught",
        "text": "The tarrasque moves up to half its Speed, and it makes one Claw or Tail attack."
      },
      {
        "name": "World-Shaking Movement",
        "text": "The tarrasque moves up to its Speed. At the end of this movement, the tarrasque creates an instantaneous shock wave in a 60-foot Emanation originating from itself. Creatures in that area lose Concentration and, if Medium or smaller, have the Prone condition. The tarrasque can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "tough",
  "name": "Tough",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 12,
  "acNote": "",
  "hp": 32,
  "hpFormula": "5d8 + 10",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      15,
      2
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      14,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+1",
  "gear": "Heavy Crossbow, Leather Armor, Mace",
  "senses": "Passive Perception 10",
  "languages": "Common",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The tough has Advantage on an attack roll against a creature if at least one of the tough's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
    }
  ],
  "actions": [
    {
      "name": "Mace",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 5 (1d6 + 2) Bludgeoning damage."
    },
    {
      "name": "Heavy Crossbow",
      "text": "<i>Ranged Attack Roll:</i> +3, range 100/400 ft. <i>Hit:</i> 6 (1d10 + 1) Piercing damage."
    }
  ]
},
{
  "id": "tough-boss",
  "name": "Tough Boss",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 16,
  "acNote": "",
  "hp": 82,
  "hpFormula": "11d8 + 33",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "savingThrows": "Str +5, Con +5, Cha +2",
  "gear": "Chain Mail, Heavy Crossbow, Warhammer",
  "senses": "Passive Perception 10",
  "languages": "Common plus one other language",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The tough has Advantage on an attack roll against a creature if at least one of the tough's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The tough makes two attacks, using Warhammer or Heavy Crossbow in any combination."
    },
    {
      "name": "Warhammer",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 12 (2d8 + 3) Bludgeoning damage. If the target is a Large or smaller creature, the tough pushes the target up to 10 feet straight away from itself."
    },
    {
      "name": "Heavy Crossbow",
      "text": "<i>Ranged Attack Roll:</i> +4, range 100/400 ft. <i>Hit:</i> 13 (2d10 + 2) Piercing damage."
    }
  ]
},
{
  "id": "treant",
  "name": "Treant",
  "size": "Huge",
  "type": "Plant",
  "alignment": "Chaotic Good",
  "tag": "plant",
  "ac": 16,
  "acNote": "",
  "hp": 138,
  "hpFormula": "12d12 + 60",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      23,
      6
    ],
    "dex": [
      8,
      -1
    ],
    "con": [
      21,
      5
    ],
    "int": [
      12,
      1
    ],
    "wis": [
      16,
      3
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+3",
  "damageVulnerabilities": "Fire",
  "damageResistances": "Bludgeoning, Piercing",
  "senses": "Passive Perception 13",
  "languages": "Common, Druidic, Elvish, Sylvan",
  "cr": "9",
  "crNum": 9.0,
  "xp": 5000,
  "traits": [
    {
      "name": "Siege Monster",
      "text": "The treant deals double damage to objects and structures."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The treant makes two Slam attacks."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +10, reach 5 ft. <i>Hit:</i> 16 (3d6 + 6) Bludgeoning damage."
    },
    {
      "name": "Hail of Bark",
      "text": "<i>Ranged Attack Roll:</i> +10, range 180 ft. <i>Hit:</i> 28 (4d10 + 6) Piercing damage."
    },
    {
      "name": "Animate Trees (1/Day)",
      "text": "The treant magically animates up to two trees it can see within 60 feet of itself. Each tree uses the Treant stat block, except it has Intelligence and Charisma scores of 1, it can't speak, and it lacks this action. The tree takes its turn immediately after the treant on the same Initiative count, and it obeys the treant. A tree remains animate for 1 day or until it dies, the treant dies, or it is more than 120 feet from the treant. The tree then takes root if possible."
    }
  ]
},
{
  "id": "troll",
  "name": "Troll",
  "size": "Large",
  "type": "Giant",
  "alignment": "Chaotic Evil",
  "tag": "giant",
  "ac": 15,
  "acNote": "",
  "hp": 94,
  "hpFormula": "9d10 + 45",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      20,
      5
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      9,
      -1
    ],
    "cha": [
      7,
      -2
    ]
  },
  "initiative": "+1",
  "skills": "Perception +5",
  "senses": "Darkvision 60 ft.; Passive Perception 15",
  "languages": "Giant",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Loathsome Limbs (4/Day)",
      "text": "If the troll ends any turn Bloodied and took 15+ Slashing damage during that turn, one of the troll's limbs is severed, falls into the troll's space, and becomes a **Troll Limb**. The limb acts immediately after the troll's turn. The troll has 1 Exhaustion level for each missing limb, and it grows replacement limbs the next time it regains Hit Points."
    },
    {
      "name": "Regeneration",
      "text": "The troll regains 15 Hit Points at the start of each of its turns. If the troll takes Acid or Fire damage, this trait doesn't function on the troll's next turn. The troll dies only if it starts its turn with 0 Hit Points and doesn't regenerate."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The troll makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 11 (2d6 + 4) Slashing damage."
    },
    {
      "name": "Charge",
      "text": "The troll moves up to half its Speed straight toward an enemy it can see."
    }
  ]
},
{
  "id": "troll-limb",
  "name": "Troll Limb",
  "size": "Small",
  "type": "Giant",
  "alignment": "Chaotic Evil",
  "tag": "giant",
  "ac": 13,
  "acNote": "",
  "hp": 14,
  "hpFormula": "4d6",
  "speed": "20 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      12,
      1
    ],
    "con": [
      10,
      0
    ],
    "int": [
      1,
      -5
    ],
    "wis": [
      9,
      -1
    ],
    "cha": [
      1,
      -5
    ]
  },
  "initiative": "+1",
  "senses": "Darkvision 60 ft.; Passive Perception 9",
  "languages": "None",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [
    {
      "name": "Regeneration",
      "text": "The limb regains 5 Hit Points at the start of each of its turns. If the limb takes Acid or Fire damage, this trait doesn't function on the limb's next turn. The limb dies only if it starts its turn with 0 Hit Points and doesn't regenerate."
    },
    {
      "name": "Troll Spawn",
      "text": "The limb uncannily has the same senses as a whole troll. If the limb isn't destroyed within 24 hours, roll 1d12. On a 12, the limb turns into a **Troll**. Otherwise, the limb withers away."
    }
  ],
  "actions": [
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 9 (2d4 + 4) Slashing damage."
    }
  ]
},
{
  "id": "unicorn",
  "name": "Unicorn",
  "size": "Large",
  "type": "Celestial",
  "alignment": "Lawful Good",
  "tag": "celestial",
  "ac": 12,
  "acNote": "",
  "hp": 97,
  "hpFormula": "13d10 + 26",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      15,
      2
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      17,
      3
    ],
    "cha": [
      16,
      3
    ]
  },
  "initiative": "+8",
  "damageImmunities": "Poison",
  "conditionImmunities": "Charmed, Paralyzed, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 13",
  "languages": "Celestial, Elvish, Sylvan; telepathy 120 ft.",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day)",
      "text": "If the unicorn fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Magic Resistance",
      "text": "The unicorn has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The unicorn makes one Hooves attack and one Radiant Horn attack."
    },
    {
      "name": "Hooves",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 11 (2d6 + 4) Bludgeoning damage."
    },
    {
      "name": "Radiant Horn",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 9 (1d10 + 4) Radiant damage."
    },
    {
      "name": "Spellcasting",
      "text": "The unicorn casts one of the following spells, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 14): **At Will:** <i>Detect Evil and Good, Druidcraft</i> **1/Day Each:** <i>Calm Emotions, Dispel Evil and Good, Entangle, Pass without Trace, Word of Recall</i>"
    },
    {
      "name": "Unicorn's Blessing (3/Day)",
      "text": "The unicorn touches another creature with its horn and casts <i>Cure Wounds</i> or <i>Lesser Restoration</i> on that creature, using the same spellcasting ability as Spellcasting."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3. Immediately after another creature's turn, the unicorn can expend a use to take one of the following actions. The unicorn regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Charging Horn",
        "text": "The unicorn moves up to half its Speed without provoking Opportunity Attacks, and it makes one Radiant Horn attack."
      },
      {
        "name": "Shimmering Shield",
        "text": "The unicorn targets itself or one creature it can see within 60 feet of itself. The target gains 10 (3d6) Temporary Hit Points, and its AC increases by 2 until the end of the unicorn's next turn. The unicorn can't take this action again until the start of its next turn."
      }
    ]
  }
},
{
  "id": "vampire-familiar",
  "name": "Vampire Familiar",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral Evil",
  "tag": "humanoid",
  "ac": 15,
  "acNote": "",
  "hp": 65,
  "hpFormula": "10d8 + 20",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      15,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      14,
      2
    ]
  },
  "initiative": "+5",
  "savingThrows": "Dex +5, Wis +2",
  "skills": "Perception +4, Persuasion +4, Stealth +7",
  "damageResistances": "Necrotic",
  "damageImmunities": "Charmed (except from its vampire master)",
  "gear": "Daggers (10)",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Common plus one other language",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [
    {
      "name": "Vampiric Connection",
      "text": "While the familiar and its vampire master are on the same plane of existence, the vampire can communicate with the familiar telepathically, and the vampire can perceive through the familiar's senses."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The familiar makes two Umbral Dagger attacks."
    },
    {
      "name": "Umbral Dagger",
      "text": "<i>Melee or Ranged Attack Roll:</i> +5, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 5 (1d4 + 3) Piercing damage plus 7 (3d4) Necrotic damage. If the target is reduced to 0 Hit Points by this attack, the target becomes Stable but has the Poisoned condition for 1 hour. While it has the Poisoned condition, the target has the Paralyzed condition."
    },
    {
      "name": "Deathless Agility",
      "text": "The familiar takes the Dash or Disengage action."
    }
  ]
},
{
  "id": "vampire-spawn",
  "name": "Vampire Spawn",
  "size": "Medium or Small",
  "type": "Undead",
  "alignment": "Neutral Evil",
  "tag": "undead",
  "ac": 16,
  "acNote": "",
  "hp": 90,
  "hpFormula": "12d8 + 36",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      16,
      3
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +6, Wis +3",
  "skills": "Perception +3, Stealth +6",
  "damageResistances": "Necrotic",
  "senses": "Darkvision 60 ft.; Passive Perception 13",
  "languages": "Common plus one other language",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Spider Climb",
      "text": "The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    },
    {
      "name": "Vampire Weakness",
      "text": "The vampire has these weaknesses:"
    },
    {
      "name": "Forbiddance",
      "text": "The vampire can't enter a residence without an invitation from an occupant."
    },
    {
      "name": "Running Water",
      "text": "The vampire takes 20 Acid damage if it ends its turn in running water."
    },
    {
      "name": "Stake to the Heart",
      "text": "The vampire is destroyed if a weapon that deals Piercing damage is driven into the vampire's heart while the vampire has the Incapacitated condition."
    },
    {
      "name": "Sunlight",
      "text": "The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The vampire makes two Claw attacks and uses Bite."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 8 (2d4 + 3) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 13) from one of two claws."
    },
    {
      "name": "Bite",
      "text": "<i>Constitution Saving Throw:</i> DC 14, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. <i>Failure:</i> 5 (1d4 + 3) Piercing damage plus 10 (3d6) Necrotic damage. The target's Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount."
    },
    {
      "name": "Deathless Agility",
      "text": "The vampire takes the Dash or Disengage action."
    }
  ]
},
{
  "id": "vampire",
  "name": "Vampire",
  "size": "Medium or Small",
  "type": "Undead",
  "alignment": "Lawful Evil",
  "tag": "undead",
  "ac": 16,
  "acNote": "",
  "hp": 195,
  "hpFormula": "23d8 + 92",
  "speed": "40 ft., Climb 40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      18,
      4
    ],
    "con": [
      18,
      4
    ],
    "int": [
      17,
      3
    ],
    "wis": [
      15,
      2
    ],
    "cha": [
      18,
      4
    ]
  },
  "initiative": "+14",
  "savingThrows": "Dex +9, Con +9, Wis +7, Cha +9",
  "skills": "Perception +7, Stealth +9",
  "damageResistances": "Necrotic",
  "senses": "Darkvision 120 ft.; Passive Perception 17",
  "languages": "Common plus two other languages",
  "cr": "13",
  "crNum": 13.0,
  "xp": 10000,
  "traits": [
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the vampire fails a saving throw, it can choose to succeed instead."
    },
    {
      "name": "Misty Escape",
      "text": "If the vampire drops to 0 Hit Points outside its resting place, the vampire uses Shape-Shift to become mist (no action required). If it can't use Shape-Shift, it is destroyed. While it has 0 Hit Points in mist form, it can't return to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it returns to its vampire form and has the Paralyzed condition until it regains any Hit Points, and it regains 1 Hit Point after spending 1 hour there."
    },
    {
      "name": "Spider Climb",
      "text": "The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check."
    },
    {
      "name": "Vampire Weakness",
      "text": "The vampire has these weaknesses:"
    },
    {
      "name": "Forbiddance",
      "text": "The vampire can't enter a residence without an invitation from an occupant."
    },
    {
      "name": "Running Water",
      "text": "The vampire takes 20 Acid damage if it ends its turn in running water."
    },
    {
      "name": "Stake to the Heart",
      "text": "If a weapon that deals Piercing damage is driven into the vampire's heart while the vampire has the Incapacitated condition in its resting place, the vampire has the Paralyzed condition until the weapon is removed."
    },
    {
      "name": "Sunlight",
      "text": "The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks."
    }
  ],
  "actions": [
    {
      "name": "Multiattack (Vampire Form Only)",
      "text": "The vampire makes two Grave Strike attacks and uses Bite."
    },
    {
      "name": "Grave Strike (Vampire Form Only)",
      "text": "<i>Melee Attack Roll:</i> +9, reach 5 ft. <i>Hit:</i> 8 (1d8 + 4) Bludgeoning damage plus 7 (2d6) Necrotic damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14) from one of two hands."
    },
    {
      "name": "Bite (Bat or Vampire Form Only)",
      "text": "<i>Constitution Saving Throw:</i> DC 17, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. <i>Failure:</i> 6 (1d4 + 4) Piercing damage plus 13 (3d8) Necrotic damage. The target's Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount. A Humanoid reduced to 0 Hit Points by this damage and then buried rises the following sunset as a **Vampire Spawn** under the vampire's control."
    },
    {
      "name": "Charm (Recharge 5\u20136)",
      "text": "The vampire casts <i>Charm Person</i>, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 17), and the duration is 24 hours. The Charmed target is a willing recipient of the vampire's Bite, the damage of which doesn't end the spell. When the spell ends, the target is unaware it was Charmed by the vampire."
    },
    {
      "name": "Shape-Shift",
      "text": "If the vampire isn't in sunlight or running water, it shape-shifts into a Tiny bat (Speed 5 ft., Fly Speed 30 ft.) or a Medium cloud of mist (Speed 5 ft., Fly Speed 20 ft. [hover]), or it returns to its vampire form. Anything it is wearing transforms with it. While in bat form, the vampire can't speak. Its game statistics, other than its size and Speed, are unchanged. While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless and can enter an enemy's space and stop there. If air can pass through a space, the mist can do so, but it can't pass through liquid. It has Resistance to all damage, except the damage it takes from sunlight."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the vampire can expend a use to take one of the following actions. The vampire regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Beguile",
        "text": "The vampire casts <i>Command</i>, requiring no spell components and using Charisma as the spellcasting ability (spell save DC 17). The vampire can't take this action again until the start of its next turn."
      },
      {
        "name": "Deathless Strike",
        "text": "The vampire moves up to half its Speed, and it makes one Grave Strike attack."
      }
    ]
  }
},
{
  "id": "vrock",
  "name": "Vrock",
  "size": "Large",
  "type": "Fiend (Demon)",
  "alignment": "Chaotic Evil",
  "tag": "fiend",
  "ac": 15,
  "acNote": "",
  "hp": 152,
  "hpFormula": "16d10 + 64",
  "speed": "40 ft., Fly 60 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      18,
      4
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +5, Wis +4, Cha +2",
  "damageResistances": "Cold, Fire, Lightning",
  "damageImmunities": "Poison",
  "conditionImmunities": "Poisoned",
  "senses": "Darkvision 120 ft.; Passive Perception 11",
  "languages": "Abyssal; telepathy 120 ft.",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [
    {
      "name": "Demonic Restoration",
      "text": "If the vrock dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss."
    },
    {
      "name": "Magic Resistance",
      "text": "The vrock has Advantage on saving throws against spells and other magical effects."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The vrock makes two Shred attacks."
    },
    {
      "name": "Shred",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Piercing damage plus 10 (3d6) Poison damage."
    },
    {
      "name": "Spores (Recharge 6)",
      "text": "<i>Constitution Saving Throw:</i> DC 15, each creature in a 20-foot Emanation originating from the vrock. <i>Failure:</i> The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. While Poisoned, the target takes 5 (1d10) Poison damage at the start of each of its turns. Emptying a flask of Holy Water on the target ends the effect early."
    },
    {
      "name": "Stunning Screech (1/Day)",
      "text": "<i>Constitution Saving Throw:</i> DC 15, each creature in a 20-foot Emanation originating from the vrock (demons succeed automatically). <i>Failure:</i> 10 (3d6) Thunder damage, and the target has the Stunned condition until the end of the vrock's next turn."
    }
  ]
},
{
  "id": "warrior-infantry",
  "name": "Warrior Infantry",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 13,
  "acNote": "",
  "hp": 9,
  "hpFormula": "2d8",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      13,
      1
    ],
    "dex": [
      11,
      0
    ],
    "con": [
      11,
      0
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+0",
  "gear": "Chain Shirt, Spear",
  "senses": "Passive Perception 10",
  "languages": "Common",
  "cr": "1/8",
  "crNum": 0.125,
  "xp": 25,
  "traits": [
    {
      "name": "Pack Tactics",
      "text": "The warrior has Advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
    }
  ],
  "actions": [
    {
      "name": "Spear",
      "text": "<i>Melee or Ranged Attack Roll:</i> +3, reach 5 ft. or range 20/60 ft. <i>Hit:</i> 4 (1d6 + 1) Piercing damage."
    }
  ]
},
{
  "id": "warrior-veteran",
  "name": "Warrior Veteran",
  "size": "Medium or Small",
  "type": "Humanoid",
  "alignment": "Neutral",
  "tag": "humanoid",
  "ac": 17,
  "acNote": "",
  "hp": 65,
  "hpFormula": "10d8 + 20",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      14,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      10,
      0
    ]
  },
  "initiative": "+3",
  "skills": "Athletics +5, Perception +2",
  "gear": "Greatsword, Heavy Crossbow, Splint Armor",
  "senses": "Passive Perception 12",
  "languages": "Common plus one other language",
  "cr": "3",
  "crNum": 3.0,
  "xp": 700,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The warrior makes two Greatsword or Heavy Crossbow attacks."
    },
    {
      "name": "Greatsword",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Slashing damage."
    },
    {
      "name": "Heavy Crossbow",
      "text": "<i>Ranged Attack Roll:</i> +3, range 100/400 ft. <i>Hit:</i> 12 (2d10 + 1) Piercing damage."
    }
  ],
  "reactions": [
    {
      "name": "Parry",
      "text": "<i>Trigger:</i> The warrior is hit by a melee attack roll while holding a weapon. <i>Response:</i> The warrior adds 2 to its AC against that attack, possibly causing it to miss."
    }
  ]
},
{
  "id": "water-elemental",
  "name": "Water Elemental",
  "size": "Large",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 14,
  "acNote": "",
  "hp": 114,
  "hpFormula": "12d10 + 48",
  "speed": "30 ft., Swim 90 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      14,
      2
    ],
    "con": [
      18,
      4
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "damageResistances": "Acid, Fire",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
  "senses": "Darkvision 60 ft.; Passive Perception 10",
  "languages": "Primordial (Aquan)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Freeze",
      "text": "If the elemental takes Cold damage, its Speed decreases by 20 feet until the end of its next turn."
    },
    {
      "name": "Water Form",
      "text": "The elemental can enter an enemy's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The elemental makes two Slam attacks."
    },
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
    },
    {
      "name": "Whelm (Recharge 4\u20136)",
      "text": "<i>Strength Saving Throw:</i> DC 15, each creature in the elemental's space. <i>Failure:</i> 22 (4d8 + 4) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC 14). Until the grapple ends, the target has the Restrained condition, is suffocating unless it can breathe water, and takes 9 (2d8) Bludgeoning damage at the start of each of the elemental's turns. The elemental can grapple one Large creature or up to two Medium or smaller creatures at a time with Whelm. As an action, a creature within 5 feet of the elemental can pull a creature out of it by succeeding on a DC 14 Strength (Athletics) check. <i>Success:</i> Half damage only."
    }
  ]
},
{
  "id": "wereboar",
  "name": "Wereboar",
  "size": "Medium or Small",
  "type": "Monstrosity (Lycanthrope)",
  "alignment": "Neutral Evil",
  "tag": "monstrosity",
  "ac": 15,
  "acNote": "",
  "hp": 97,
  "hpFormula": "15d8 + 30",
  "speed": "30 ft., 40 ft. (boar form only)",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      15,
      2
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+2",
  "skills": "Perception +2",
  "gear": "Javelins (6)",
  "senses": "Passive Perception 12",
  "languages": "Common (can't speak in boar form)",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The wereboar makes two attacks, using Javelin or Tusk in any combination. It can replace one attack with a Gore attack."
    },
    {
      "name": "Gore (Boar or Hybrid Form Only)",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 12. <i>Failure:</i> The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a **Wereboar** under the GM's control and has 10 Hit Points. <i>Success:</i> The target is immune to this wereboar's curse for 24 hours."
    },
    {
      "name": "Javelin (Humanoid or Hybrid Form Only)",
      "text": "Melee or <i>Ranged Attack Roll:</i> +5, reach 5 ft. or range 30/120 ft. <i>Hit:</i> 13 (3d6 + 3) Piercing damage."
    },
    {
      "name": "Tusk (Boar or Hybrid Form Only)",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Piercing damage. If the target is a Medium or smaller creature and the wereboar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Piercing damage and has the Prone condition."
    },
    {
      "name": "Shape-Shift",
      "text": "The wereboar shape-shifts into a Medium boar-humanoid hybrid or a Small boar, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "wererat",
  "name": "Wererat",
  "size": "Medium or Small",
  "type": "Monstrosity (Lycanthrope)",
  "alignment": "Lawful Evil",
  "tag": "monstrosity",
  "ac": 13,
  "acNote": "",
  "hp": 60,
  "hpFormula": "11d8 + 11",
  "speed": "30 ft., Climb 30 ft.",
  "abilities": {
    "str": [
      10,
      0
    ],
    "dex": [
      16,
      3
    ],
    "con": [
      12,
      1
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+3",
  "skills": "Perception +4, Stealth +5",
  "gear": "Hand Crossbow",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Common (can't speak in rat form)",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The wererat makes two attacks, using Scratch or Hand Crossbow in any combination. It can replace one attack with a Bite attack."
    },
    {
      "name": "Bite (Rat or Hybrid Form Only)",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 8 (2d4 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 11. <i>Failure:</i> The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a **Wererat** under the GM's control and has 10 Hit Points. <i>Success:</i> The target is immune to this wererat's curse for 24 hours."
    },
    {
      "name": "Scratch",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 6 (1d6 + 3) Slashing damage."
    },
    {
      "name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
      "text": "<i>Ranged Attack Roll:</i> +5, range 30/120 ft. <i>Hit:</i> 6 (1d6 + 3) Piercing damage."
    },
    {
      "name": "Shape-Shift",
      "text": "The wererat shape-shifts into a Medium rat-humanoid hybrid or a Small rat, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "weretiger",
  "name": "Weretiger",
  "size": "Medium or Small",
  "type": "Monstrosity (Lycanthrope)",
  "alignment": "Neutral",
  "tag": "monstrosity",
  "ac": 12,
  "acNote": "",
  "hp": 120,
  "hpFormula": "16d8 + 48",
  "speed": "30 ft., 40 ft. (tiger form only)",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      15,
      2
    ],
    "con": [
      16,
      3
    ],
    "int": [
      10,
      0
    ],
    "wis": [
      13,
      1
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "skills": "Perception +5, Stealth +4",
  "gear": "Longbow",
  "senses": "Darkvision 60 ft.; Passive Perception 15",
  "languages": "Common (can't speak in tiger form)",
  "cr": "4",
  "crNum": 4.0,
  "xp": 1100,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The weretiger makes two attacks, using Scratch or Longbow in any combination. It can replace one attack with a Bite attack."
    },
    {
      "name": "Bite (Tiger or Hybrid Form Only)",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 12 (2d8 + 3) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. <i>Constitution Saving Throw:</i> DC 13. <i>Failure:</i> The target is cursed. If the cursed target drops to 0 Hit Points, it instead becomes a **Weretiger** under the GM's control and has 10 Hit Points. <i>Success:</i> The target is immune to this weretiger's curse for 24 hours."
    },
    {
      "name": "Scratch",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 10 (2d6 + 3) Slashing damage."
    },
    {
      "name": "Longbow (Humanoid or Hybrid Form Only)",
      "text": "<i>Ranged Attack Roll:</i> +4, range 150/600 ft. <i>Hit:</i> 11 (2d8 + 2) Piercing damage."
    },
    {
      "name": "Prowl (Tiger or Hybrid Form Only)",
      "text": "The weretiger moves up to its Speed without provoking Opportunity Attacks. At the end of this movement, the weretiger can take the Hide action."
    },
    {
      "name": "Shape-Shift",
      "text": "The weretiger shape-shifts into a Large tiger-humanoid hybrid or a Large tiger, or it returns to its true humanoid form. Its game statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed."
    }
  ]
},
{
  "id": "white-dragon-wyrmling",
  "name": "White Dragon Wyrmling",
  "size": "Medium",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 16,
  "acNote": "",
  "hp": 32,
  "hpFormula": "5d8 + 10",
  "speed": "30 ft., Burrow 15 ft., Fly 60 ft., Swim 30 ft.",
  "abilities": {
    "str": [
      14,
      2
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      14,
      2
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+2",
  "savingThrows": "Dex +2, Wis +2",
  "skills": "Perception +4, Stealth +2",
  "damageImmunities": "Cold",
  "senses": "Blindsight 10 ft., Darkvision 60 ft.; Passive Perception 14",
  "languages": "Draconic",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Ice Walk",
      "text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes two Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +4, reach 5 ft. <i>Hit:</i> 6 (1d8 + 2) Slashing damage plus 2 (1d4) Cold damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 12, each creature in a 15-foot Cone. <i>Failure:</i> 22 (5d8) Cold damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "young-white-dragon",
  "name": "Young White Dragon",
  "size": "Large",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 17,
  "acNote": "",
  "hp": 123,
  "hpFormula": "13d10 + 52",
  "speed": "40 ft., Burrow 20 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      18,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      18,
      4
    ],
    "int": [
      6,
      -2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+3",
  "savingThrows": "Dex +3, Int +2, Wis +3",
  "skills": "Perception +6, Stealth +3",
  "damageImmunities": "Cold",
  "senses": "Blindsight 30 ft., Darkvision 120 ft.; Passive Perception 16",
  "languages": "Common, Draconic",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [
    {
      "name": "Ice Walk",
      "text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 9 (2d4 + 4) Slashing damage plus 2 (1d4) Cold damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 15, each creature in a 30-foot Cone. <i>Failure:</i> 40 (9d8) Cold damage. <i>Success:</i> Half damage."
    }
  ]
},
{
  "id": "adult-white-dragon",
  "name": "Adult White Dragon",
  "size": "Huge",
  "type": "Dragon (Chromatic)",
  "alignment": "Chaotic Evil",
  "tag": "dragon",
  "ac": 18,
  "acNote": "",
  "hp": 200,
  "hpFormula": "16d12 + 96",
  "speed": "40 ft., Burrow 30 ft., Fly 80 ft., Swim 40 ft.",
  "abilities": {
    "str": [
      22,
      6
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      22,
      6
    ],
    "int": [
      8,
      -1
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      12,
      1
    ]
  },
  "initiative": "+10",
  "savingThrows": "Dex +5, Wis +6",
  "skills": "Perception +11, Stealth +5",
  "damageImmunities": "Cold",
  "senses": "Blindsight 60 ft., Darkvision 120 ft.; Passive Perception 21",
  "languages": "Common, Draconic",
  "cr": "13",
  "crNum": 13.0,
  "xp": 10000,
  "traits": [
    {
      "name": "Ice Walk",
      "text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement."
    },
    {
      "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
      "text": "If the dragon fails a saving throw, it can choose to succeed instead."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The dragon makes three Rend attacks."
    },
    {
      "name": "Rend",
      "text": "<i>Melee Attack Roll:</i> +11, reach 10 ft. <i>Hit:</i> 13 (2d6 + 6) Slashing damage plus 4 (1d8) Cold damage."
    },
    {
      "name": "Cold Breath (Recharge 5\u20136)",
      "text": "<i>Constitution Saving Throw:</i> DC 19, each creature in a 60-foot Cone. <i>Failure:</i> 54 (12d8) Cold damage. <i>Success:</i> Half damage."
    }
  ],
  "legendary": {
    "intro": "<i>Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.</i>",
    "actions": [
      {
        "name": "Freezing Burst",
        "text": "<i>Constitution Saving Throw:</i> DC 14, each creature in a 30-foot-radius Sphere centered on a point the dragon can see within 120 feet. <i>Failure:</i> 7 (2d6) Cold damage, and the target's Speed is 0 until the end of the target's next turn. <i>Failure or Success:</i> The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Frightful Presence",
        "text": "The dragon casts <i>Fear</i>, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 14). The dragon can't take this action again until the start of its next turn."
      },
      {
        "name": "Pounce",
        "text": "The dragon moves up to half its Speed, and it makes one Rend attack."
      }
    ]
  }
},
{
  "id": "worg",
  "name": "Worg",
  "size": "Large",
  "type": "Fey",
  "alignment": "Neutral Evil",
  "tag": "fey",
  "ac": 13,
  "acNote": "",
  "hp": 26,
  "hpFormula": "4d10 + 4",
  "speed": "50 ft.",
  "abilities": {
    "str": [
      16,
      3
    ],
    "dex": [
      13,
      1
    ],
    "con": [
      13,
      1
    ],
    "int": [
      7,
      -2
    ],
    "wis": [
      11,
      0
    ],
    "cha": [
      8,
      -1
    ]
  },
  "initiative": "+1",
  "skills": "Perception +4",
  "senses": "Darkvision 60 ft.; Passive Perception 14",
  "languages": "Goblin, Worg",
  "cr": "1/2",
  "crNum": 0.5,
  "xp": 100,
  "traits": [],
  "actions": [
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +5, reach 5 ft. <i>Hit:</i> 7 (1d8 + 3) Piercing damage, and the next attack roll made against the target before the start of the worg's next turn has Advantage."
    }
  ]
},
{
  "id": "wyvern",
  "name": "Wyvern",
  "size": "Large",
  "type": "Dragon",
  "alignment": "Unaligned",
  "tag": "dragon",
  "ac": 14,
  "acNote": "",
  "hp": 127,
  "hpFormula": "15d10 + 45",
  "speed": "30 ft., Fly 80 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      16,
      3
    ],
    "int": [
      5,
      -3
    ],
    "wis": [
      12,
      1
    ],
    "cha": [
      6,
      -2
    ]
  },
  "initiative": "+0",
  "skills": "Perception +4",
  "senses": "Darkvision 120 ft.; Passive Perception 14",
  "languages": "None",
  "cr": "6",
  "crNum": 6.0,
  "xp": 2300,
  "traits": [],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The wyvern makes one Bite attack and one Sting attack."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +7, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Piercing damage."
    },
    {
      "name": "Sting",
      "text": "<i>Melee Attack Roll:</i> +7, reach 10 ft. <i>Hit:</i> 11 (2d6 + 4) Piercing damage plus 24 (7d6) Poison damage, and the target has the Poisoned condition until the start of the wyvern's next turn."
    }
  ]
},
{
  "id": "xorn",
  "name": "Xorn",
  "size": "Medium",
  "type": "Elemental",
  "alignment": "Neutral",
  "tag": "elemental",
  "ac": 19,
  "acNote": "",
  "hp": 84,
  "hpFormula": "8d8 + 48",
  "speed": "20 ft., Burrow 20 ft.",
  "abilities": {
    "str": [
      17,
      3
    ],
    "dex": [
      10,
      0
    ],
    "con": [
      22,
      6
    ],
    "int": [
      11,
      0
    ],
    "wis": [
      10,
      0
    ],
    "cha": [
      11,
      0
    ]
  },
  "initiative": "+0",
  "skills": "Perception +6, Stealth +6",
  "damageImmunities": "Poison",
  "conditionImmunities": "Paralyzed, Petrified, Poisoned",
  "senses": "Darkvision 60 ft., Tremorsense 60 ft.; Passive Perception 16",
  "languages": "Primordial (Terran)",
  "cr": "5",
  "crNum": 5.0,
  "xp": 1800,
  "traits": [
    {
      "name": "Earth Glide",
      "text": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
    },
    {
      "name": "Treasure Sense",
      "text": "The xorn can pinpoint the location of precious metals and stones within 60 feet of itself."
    }
  ],
  "actions": [
    {
      "name": "Multiattack",
      "text": "The xorn makes one Bite attack and three Claw attacks."
    },
    {
      "name": "Bite",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 17 (4d6 + 3) Piercing damage."
    },
    {
      "name": "Claw",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 8 (1d10 + 3) Slashing damage."
    },
    {
      "name": "Charge",
      "text": "The xorn moves up to its Speed or Burrow Speed straight toward an enemy it can sense."
    }
  ]
},
{
  "id": "ogre-zombie",
  "name": "Ogre Zombie",
  "size": "Large",
  "type": "Undead",
  "alignment": "Neutral Evil",
  "tag": "undead",
  "ac": 8,
  "acNote": "",
  "hp": 85,
  "hpFormula": "9d10 + 36",
  "speed": "30 ft.",
  "abilities": {
    "str": [
      19,
      4
    ],
    "dex": [
      6,
      -2
    ],
    "con": [
      18,
      4
    ],
    "int": [
      3,
      -4
    ],
    "wis": [
      6,
      -2
    ],
    "cha": [
      5,
      -3
    ]
  },
  "initiative": "-2",
  "savingThrows": "Wis +0",
  "damageImmunities": "Poison",
  "conditionImmunities": "Exhaustion, Poisoned",
  "senses": "Darkvision 60 ft.; Passive Perception 8",
  "languages": "Understands Common and Giant but can't speak",
  "cr": "2",
  "crNum": 2.0,
  "xp": 450,
  "traits": [
    {
      "name": "Undead Fortitude",
      "text": "If damage reduces the zombie to 0 Hit Points, it makes a Constitution saving throw (DC 5 plus the damage taken) unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead."
    }
  ],
  "actions": [
    {
      "name": "Slam",
      "text": "<i>Melee Attack Roll:</i> +6, reach 5 ft. <i>Hit:</i> 13 (2d8 + 4) Bludgeoning damage."
    }
  ]
}
];
