# Monster Manual extraction — review notes

These 34 creatures were extracted automatically from an OCR'd copy of the 5e Monster Manual and added to `monsters.js`. The source text has real scan noise (misread digits, columns bleeding into each other), so before using one of these in play, especially the flagged ones below, it's worth a quick check against the book.

## General caveats (apply to all 34, not just flagged entries)

- **Merged action text**: when the book didn't have a blank line between two abilities (e.g. a dragon's Bite followed directly by its Breath Weapons), the parser sometimes filed both under one heading instead of splitting them out. The text itself is usually intact — check anything with recharge abilities, multiattack + breath weapons, or legendary actions for content that should be its own separate entry.

- **Legendary actions were not extracted** — none of these 34 have them, but if you hand-add a creature that does, add its `legendary` block yourself (see `statBlockHTML` in index.html for the `{intro, actions}` shape it expects).

## Flagged for review (24 of 34)

Each of these had at least one field the parser wasn't fully confident about.

### Commoner (CR 0)
- dropped unparsable paragraph: 'Commoners include peasants, serfs, slave'

### Vulture (CR 0)
- dropped unparsable paragraph: 'WARHORSE An armored warhorse has an AC b'
- dropped unparsable paragraph: 'AC       Barding                 AC     '

### Blood Hawk (CR 1/8)
- dropped unparsable paragraph: "a creature if at least one of the hawk '"
- dropped unparsable paragraph: 'Taking its name from its crimson feather'
- dropped unparsable paragraph: 'aggressive nature, the blood hawk fearle'

### Guard (CR 1/8)
- dropped unparsable paragraph: 'Guards include members of a city watch, '

### Merfolk (CR 1/8)
- dropped unparsable paragraph: 'DEX        CON        INT      WIS      '
- dropped unparsable paragraph: 'MIMIC Medium monstrosity (shapechanger),'

### Blink Dog (CR 1/4)
- dropped unparsable paragraph: 'A blink dog takes its name from its abil'

### Draft Horse (CR 1/4)
- dropped unparsable paragraph: '~             I                        •'

### Giant Wolf Spider (CR 1/4)
- dropped unparsable paragraph: 'HAWK Tiny beast, unaligned Spider Climb.'

### Pseudodragon (CR 1/4)
- Speed not matched

### Violet Fungus (CR 1/4)
- Speed not matched
- dropped unparsable paragraph: 'it is indistinguishable from an ord inar'

### Winged Kobold (CR 1/4)
- dropped unparsable paragraph: "''ilf·"
- dropped unparsable paragraph: 'taking 10 (3d6) lightning damage on a fa'
- dropped unparsable paragraph: 'REGIONAL EFFECTS The region containing a'

### Giant Sea Horse (CR 1/2)
- AC: OCR-fixed 'l3' -> 13

### Swarm of Insects (CR 1/2)
- dropped unparsable paragraph: 'piercing damage if the swarm has half of'

### Animated Armor (CR 1)
- dropped unparsable paragraph: 'RUG OF SMOTHERING'

### Brown Bear (CR 1)
- dropped unparsable paragraph: '•   •j   t        \\                     '
- dropped unparsable paragraph: 'creature . 1-ii"t: 6 (,ld8 + 2) bludgeon'
- dropped unparsable paragraph: 'STR         DEX         CON       INT   '

### Lion (CR 1)
- dropped unparsable paragraph: '.,        l'

### Scarecrow (CR 1)
- dropped unparsable paragraph: 'CON       INT       WIS       CHA 13 (+1'
- dropped unparsable paragraph: '•'

### Giant Constrictor Snake (CR 2)
- dropped unparsable paragraph: 'target is grappled (escape DC 16). Until'
- dropped unparsable paragraph: 'the creature is restrained, and the snak'
- dropped unparsable paragraph: 'another ta rget.'

### Giant Elk (CR 2)
- dropped unparsable paragraph: 'knocked prone.'
- dropped unparsable paragraph: 'The majestic giant elk is rare to the po'

### Saber-Toothed Tiger (CR 2)
- dropped unparsable paragraph: 'Hit: 12 (2d6 + 5) slashing damage.'
- dropped unparsable paragraph: 'SWARM OF BATS DEX        CON        INT '

### Ankylosaurus (CR 3)
- dropped unparsable paragraph: 'DINOS~URS 79'
- dropped unparsable paragraph: '..'

### Knight (CR 3)
- dropped unparsable paragraph: 'Leadership (Recharges after a Short or L'

### Winter Wolf (CR 3)
- AC: OCR-fixed 'l3' -> 13
- dex score: OCR-fixed 'l3' -> 13

### Medusa (CR 6)
- dropped unparsable paragraph: 'Du sT M EP HI T'
- dropped unparsable paragraph: '. " . \' · •\'• 4, .'

## Parsed cleanly, no flags (10 of 34)

Hyena, Lizard, Giant Weasel, Mule, Swarm of Rats, Swarm of Ravens, Quaggoth Spore Servant, Sea Hag, Swarm of Poisonous Snakes, Young Gold Dragon

## Not included

Out of ~284 stat blocks the parser found in the source, only these 34 passed every check: a complete header (AC/HP/all six ability scores/CR), a Challenge rating that matches the creature's real, known CR (this catches column-misalignment cases where a stat block's numbers get attached to the wrong creature's name), and a mostly-clean traits/actions split. Everything else was dropped rather than shipped with unverified data. If there's a specific monster you wanted that isn't here, tell me which one and I can hand-verify it against the source text directly.
