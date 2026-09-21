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
];
