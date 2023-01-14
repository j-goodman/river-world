let specialAbilities = [
    {
        name: "Amateur Healing",
        cost: "0☆",
        prerequisites: null,
        description: "Make a very hard action roll using your perception or dexterity and your medicine skill. On a success, heal one heart for yourself or anyone you’re close enough to to touch."
    },
    {
        name: "Ambush Predator",
        cost: "0☆",
        prerequisites: "Sharpshooter",
        duration: "As long as you are taking cover in your environment",
        description: "You can use this action any time you’re able to hide yourself in your environment. For as long as you remain among cover, anyone who attacks you at long range has to use perception for their attack rolls."
    },
    {
        name: "Animal Communication",
        cost: "0☆",
        prerequisites: ["any", "wilderness 卌", "witchcraft 卌", "horsemanship 卌"],
        description: "You can communicate with animals by imitating their sounds and body language. You can also try to calm an agitated or aggressive animal. If the animal is hostile or unfamiliar to you, you might have to make an action roll to succeed."
    },
    {
        name: "Animal Companion",
        cost: "2☆",
        prerequisites: "Animal Communication",
        duration: "Permanent, or until your bond with the animal is broken",
        description: "Form a bond with an animal that trusts you. The bond allows you to communicate with and understand your animal companion, and only lasts as long as you maintain trust and respect. Your companion can either travel with you or wander the wild returning to you regularly. You can’t have more than two animal companions at a time."
    },
    {
        name: "Berserkergang",
        cost: "X☆",
        prerequisites: ["any", "combat 卌卌", "wilderness 卌卌"],
        duration: "One turn",
        description: "Your judgment and self-control give way to a bloody fury. On the turn that you use this action, you can make a number of attack actions equal to the number of stars you spent to use it. Your defense also increases to 12 until the beginning of your next turn."
    },
    {
        name: "Blindness",
        cost: "2☆",
        prerequisites: "Transfiguration",
        duration: "Until sunrise",
        description: "Choose a target you can see and make an attack roll against the target, using charisma and your witchcraft skill. If you succeed, they are struck completely blind until you restore their sight or the sun rises. Works on humans and most animals. As with any spell that doesn’t specifically say otherwise, if you fail the attack roll, you don’t get your spent stars back."
    },
    {
        name: "Bodkin Arrow",
        cost: "2☆",
        prerequisites: "archery 卌",
        description: "Spending one star to use this action means firing one armor-piercing bodkin arrow. If the target you’re firing at is armored, this lets you make your attack roll as if their defense was one point lower than it actually is. This could include natural armor, like a monster with thick scales, or man-made armor. If you use this action and then miss, you can refund one of the two action stars you spent. Learning this action means you know how to make your own bodkin arrows. You don’t have to keep track of these in your inventory, when you rest and recover your special ability stars, that represents your character spending some time to make new arrows."
    },
    {
        name: "Bolt of Lightning",
        cost: "2☆",
        prerequisites: "alchemy 卌卌",
        duration: "As long as you can maintain control",
        description: "A crackling thunderbolt erupts between the palms of your hands. You can use it to strike at any target you can see, making a long range attack using your wisdom and adding your alchemy skill. After you attack with the lightning bolt, make a hard action roll (also using wisdom and alchemy) to try to maintain control of it so you can use it again. If you fail, you lose the lightning bolt but can first make one immediate free attack against a target of your choice, hurling the loose bolt in their direction. Whenever an attack with the lightning bolt succeeds, you can make an immediate second attack roll against another target within close range of the first, causing a chain of lightning. You can do this as many times in a row as you can before failing an attack roll, and you only need to roll to maintain control of the lightning bolt the first time."
    },
    {
        name: "Bluff",
        cost: "1☆",
        prerequisites: ["any", "stealth 卌", "negotiation 卌", "business 卌"],
        description: "Use this action to make it more likely that you’ll get away with a lie. Describe what you say, and if the difficulty otherwise would have been very hard or less, it becomes one level easier, with hard becoming moderate, etc. Special abilities like Detect Lies can counteract this."
    },
    {
        name: "Call a Truce",
        cost: "1☆",
        prerequisites: "Public Speaking",
        description: "You can use this action when you’re in a fight or witness to a fight, as long as it involves fewer than 30 people. When you Call a Truce, both sides stop fighting for a moment and listen to you. You then have a chance to try to resolve the conflict, but if it’s not resolved within about a minute, the fighting can resume. You can’t use this more than once during the same fight."
    },
    {
        name: "Catlike Grace",
        cost: "1☆",
        prerequisites: "climbing 卌",
        description: "Before making any action roll that has to do with jumping, climbing, dancing, flipping and spinning, or anything acrobatic, you can use this action to reduce the difficulty of that roll. Impossible actions become very hard, very hard ones become hard, and hard or moderate both become easy, meaning you succeed automatically."
    },
    {
        name: "Chemistry",
        cost: "0☆",
        prerequisites: ["any", "Identify Object", "Transmutation", "literacy 卌卌"],
        description: "Try to identify any substance you can see up close. Make a moderate action roll, using wisdom and adding your craftsmanship or alchemy skill. If you succeed, the narrator must tell you truthfully what the substance is, including hidden qualities it might have, like if a drink is poisoned. If you fail you can’t try again on the same target."
    },
    {
        name: "Clever Bladework",
        cost: "1☆",
        prerequisites: "Martial Arts",
        duration: "The length of one fight",
        description: "You’re so cunning with a blade that fighting you is like solving a puzzle. For the rest of the combat engagement you’re in, anyone making a close range attack against you can only use wisdom on their attack rolls. You can only use this action if you’re armed with a blade."
    },
    {
        name: "Conjure Fire",
        cost: "1☆",
        prerequisites: "alchemy 卌",
        duration: "As long as you can maintain control of the fireball",
        description: "A sparking, spitting ball of white-hot fire appears between the palms of your hands. You can shoot jets of flame from the fireball to make long range attacks, using strength and adding your alchemy skill. After you shoot a jet of fire from the fireball, make a moderate action roll (also using strength and alchemy). If you fail, the fireball burns too hot and you lose control. You can immediately make one final attack by hurling the fireball at a target as you lose control, then it explodes and dissipates."
    },
    {
        name: "Conjure Ice",
        cost: "1☆",
        prerequisites: "alchemy 卌",
        duration: "As long as you can maintain control of the ice beam",
        description: "A raw white beam of freezing energy crackles between the palms of your hands. You can direct the beam to make long range attacks using wisdom and adding your alchemy skill. After using the ice beam, make a hard action roll (also using wisdom and alchemy). If you fail, you lose control and the beam dissipates into the air."
    },
    {
        name: "Cover Fire",
        cost: "1☆",
        prerequisites: ["any", "archery 卌", "distance throwing 卌"],
        duration: "One turn",
        description: "Choose one ally you can see to provide cover for. Until your next turn, all close or long range attacks made against that ally have one penalty dice added, as you protect them with cover fire. On the turn that you use this action, you must also make a long range attack. The attack does not need to succeed, and can be made immediately after using your non-attack action to use Cover Fire. If you are incapacitated the effect ends immediately."
    },
    {
        name: "Cruel Barrage",
        cost: "1☆",
        prerequisites: "Pressing Advance",
        description: "Choose a target and make a close range attack against them. If you succeed, you can continue making repeated attacks against them as many times in a row as you can until you fail. On all but the first attack, you must use strength for the attack roll."
    },
    {
        name: "Defend",
        cost: "1☆",
        prerequisites: ["any", "close combat 卌", "leadership 卌"],
        description: "Use this action to choose an ally to defend. Until your next turn or until you are incapacitated, nobody can attack that ally unless they first successfully wound you on the same turn."
    },
    {
        name: "Defense Formation",
        cost: "1☆",
        prerequisites: ["any", "Defend", "Cover Fire"],
        duration: "As long as at least two participants remain in the formation",
        description: "When you use this special ability, any ally or enemy who also knows Defense Formation can immediately use it as well. All allies who use Defense Formation at the same time can set their defense equal to 1 + the defense of whichever of them has the highest. When someone in the formation is hit, they have to make a moderate action roll to stay in formation, and if they fail they break off and lose the defense bonus. If there is only one person in the Defense Formation, the effect ends immediately."
    },
    {
        name: "Detect Lies",
        cost: "1☆",
        prerequisites: ["any", "Keen Observation", "Bluff"],
        description: "If you win a contest roll with your perception against someone’s charisma, the narrator must tell you whether that person is lying to you."
    },
    {
        name: "Prey",
        cost: "1☆",
        prerequisites: ["any", "Catlike Grace", "Sharpshooter"],
        duration: "As long as you remain in motion",
        description: "For as long as you remain in constant motion after using this action, anyone making a close or long range attack against you must use agility on their attack roll. In a fight, you can use one action to both move and use Difficult Prey, then still use the second action of your turn."
    },
    {
        name: "Distort Space",
        cost: "2☆",
        prerequisites: "alchemy 卌卌",
        duration: "Until sunset, or until broken",
        description: "Your body is surrounded by a field of distorted space, raising your defense to 11. When someone successfully hits you despite your raised defense, you must make a hard action roll using your wisdom and adding your alchemy skill. If you fail, the distortion is undone and your defense returns to normal. Otherwise, the defensive field lasts until the sun sets."
    },
    {
        name: "Distort Time",
        cost: "1☆",
        prerequisites: "alchemy 卌卌",
        duration: "One turn",
        description: "Use your ability to bend the flow of time to make yourself move faster than the world around you, getting an extra action during your turn in a fight. After using your first action to use Distort Time, you then get an additional three actions. The first cannot be used to attack, but the second and third can be used to do anything you want."
    },
    {
        name: "Don Disguise",
        cost: "0☆",
        prerequisites: ["any", "stealth 卌", "craftsmanship 卌"],
        description: "Use the materials you have access to to create a cunning disguise to hide the appearance of yourself or someone else."
    },
    {
        name: "Dowsing",
        cost: "1☆",
        prerequisites: ["any", "alchemy 卌", "wilderness 卌"],
        duration: "One hour",
        description: "Using a stick or some other implement as a dowsing rod, choose a substance (for instance: water, salt, gold, blood, wood). Make a moderate action roll using perception and adding your alchemy or wilderness skill. If you succeed, and if there is any of your chosen substance within three thousand feet of you, the dowsing rod will point you toward it like a compass, lasting for about an hour."
    },
    {
        name: "Energy Bomb",
        cost: "1☆",
        prerequisites: "Transmutation",
        description: "You can charge up any object you can touch as long as it’s not made of living matter. The object remains charged for as long as you choose, then explodes with the force of a small grenade. You can only charge one object at a time, and it must be light enough for you to physically lift. If you’re using this in battle, make the attack roll using your dexterity or strength, and adding the distance throwing skill if you have it. Everybody within close range of your intended target is in danger of being hit by the blast. Make one attack roll for each target in that range, both enemies and allies, dealing an injury from the explosion on a success. If the sun sets while the energy bomb is still charged, it explodes."
    },
    {
        name: "Expert Healing",
        cost: "1☆",
        prerequisites: "medicine 卌卌",
        description: "Try to heal a wound on yourself or someone else with your hands, supplies, and knowledge of anatomy. Make a moderate action roll using your wisdom, perception, or dexterity, and adding your medicine skill. If you succeed, the target can restore one crossed-out heart. If you’re not in a fight and there’s no time pressure, the difficulty is easy."
    },
    {
        name: "Expert Transmutation",
        cost: "0☆",
        prerequisites: ["all", "Transmutation", "Distort Space"],
        description: "When you spend two or more stars to use Transmutation, you can use this ability at the same time to have one star instantly refunded."
    },
    {
        name: "Extra Stars",
        cost: "5☆",
        prerequisites: "Transmutation",
        duration: "Permanent",
        description: "Use an alchemical concoction to permanently increase the number of stars on your character sheet by one, as long as doing so doesn’t give you a total of more than nine stars. Add the star instantly, un-crossed out, after crossing out the five stars required to use this action. Can be used more than once."
    },
    {
        name: "Familiar",
        cost: "5☆",
        prerequisites: ["all", "Animal Companion", "Transfiguration"],
        duration: "Permanent, or until your bond is broken",
        description: "Form a magical bond with an animal companion. The bond lasts until either you or the animal choose to break it. You can communicate telepathically with your familiar, and see through its eyes and experience its other senses. Any spells you have the ability to cast, you can choose to have your familiar cast instead. Acquiring a familiar also increases your reserves of magical energy: permanently add two stars to your character sheet the first time you ever use this spell. You can only have one familiar at a time. Familiars often start to show unusual intelligence over time, and in cases where the telepathic link is used regularly, some familiars pick up personality traits or mental abilities from their witch, and vice versa."
    },
    {
        name: "Feint Attack",
        cost: "1☆",
        prerequisites: ["any", "close combat 卌", "stealth 卌"],
        description: "Choose a target to try to distract. Make a contest roll using your agility or dexterity against their perception, with both of you adding your related fighting skills. If you win or it’s a tie, you strike at them with a blow intended only to distract. This creates an opening for an ally of your choice who is also at close range to get an immediate free attack action against the target. Using this action doesn’t count as an attack."
    },
    {
        name: "Field of Protection",
        cost: "1☆",
        prerequisites: "alchemy 卌",
        duration: "Until sunset, or until broken",
        description: "You or someone else you can see are surrounded by a shimmering field that repels matter. You become harder to hit and your defense increases to 10. The next time someone succeeds at an attack roll against you, the spell is broken and your defense returns to normal. The spell also breaks when the sun sets."
    },
    {
        name: "Fifth Heart",
        cost: "11☆",
        prerequisites: "Martial Arts",
        duration: "Permanent",
        description: "Use this action to train your body to permanently increase the maximum number of hearts on your character sheet by one, as long as doing so doesn’t give you a total of more than five hearts."
    },
    {
        name: "First Aid",
        cost: "1☆",
        prerequisites: ["any", "medicine 卌", "Repair"],
        description: "Try to heal a wound with your hands, supplies, and knowledge of anatomy. Make a moderate action roll using your wisdom or dexterity and adding your medicine skill. If you succeed, restore one crossed-out heart. If you’re healing yourself, the roll is hard."
    },
    {
        name: "Flesh to Smoke",
        cost: "2☆",
        prerequisites: "Transfiguration",
        duration: "Until sunrise, or until broken",
        description: "Your body assumes a smokelike or liquidy form with an appearance of your choice. You can selectively restore your solidness, and are still able to do whatever you could normally do, but you become extremely hard to hit and your defense increases to 12. The next time someone succeeds at an attack roll against you, the spell is broken and your defense returns to normal. The spell is also broken when the sun rises."
    },
    {
        name: "Flight",
        cost: "6☆",
        prerequisites: ["all", "Witchwind", "Herb Foraging"],
        duration: "Permanent",
        description: "Make an ointment to use on an inanimate object that’s no more than about seven times your size, and which is substantial enough to support your weight. That object permanently gains the ability to fly while you are touching it (meaning you only have to spend the stars to cast this spell once), and can support your weight plus about twice your weight in cargo. To make difficult maneuvers while flying you may have to make action rolls using your agility and witchcraft. You can choose to undo the enchantment at any time, but can only use it on one object at a time. If you undo the enchantment and cast it again, you have to spend the stars again."
    },
    {
        name: "Fourth Heart",
        cost: "4☆",
        prerequisites: "Martial Arts",
        duration: "Permanent",
        description: "Train your body to permanently increase the maximum number of hearts on your character sheet by one, as long as doing so doesn’t give you a total of more than four hearts. This works differently than most special abilities: you only need to spend four stars to use it one time, and your maximum number of hearts is permanently increased."
    },
    {
        name: "Giant Animal",
        cost: "2☆",
        prerequisites: "Metamorphosis",
        duration: "Until sunrise, or permanent for a familiar",
        description: "Increase the size of an animal you can touch, up to about the size of a moose (or an elephant if you have 卌卌卌 in witchcraft). The transformation lasts until you choose to reverse it or the sun rises. If the animal is your familiar, the transformation can last as long as you want it to, even through sunrises."
    },
    {
        name: "Golemry",
        cost: "3☆",
        prerequisites: "alchemy 卌卌卌",
        duration: "Permanent",
        description: "Create a figure of clay, metal, or a material of your choice, that can move independently and act based on written instructions stored inside it. It is capable of incorporating new information into itself by physically eating more written instructions. The more writing it eats and the more complex it becomes, the more likely the golem is to start making independent changes to its assigned goals and actions. A golem is tethered to its physical form, and unlike living beings, its artificial spirit cannot exist without the body it was created in."
    },
    {
        name: "Gravity Throw",
        cost: "1☆",
        prerequisites: "alchemy 卌",
        description: "Cause an object you can see to be forcefully flung in a direction of your choice. It must be something you can physically lift, and can’t be in someone else’s grip. Make an attack roll against the target using your perception or wisdom and adding your distance throwing skill."
    },
    {
        name: "Hard Bargain",
        cost: "1☆",
        prerequisites: ["any", "negotiation 卌", "business 卌"],
        description: "Any time you fail an action roll using your charisma, you can use this ability to re-roll and use the new result instead, as long as the action you’re taking involves interacting one-on-one with another person."
    },
    {
        name: "Hard to Hit",
        cost: "0☆",
        prerequisites: "Catlike Grace",
        duration: "Permanent",
        description: "Your nimble cunning lets you permanently raise your defense to 10."
    },
    {
        name: "Healing Salve",
        cost: "1☆",
        prerequisites: "Herb Foraging",
        description: "Apply a healing salve to yourself or someone else. Make a moderate action roll using your perception and adding your medicine skill. If you succeed, restore one crossed-out heart. If you’re not in combat and there’s no time pressure, this action is easy."
    },
    {
        name: "Herb Foraging",
        cost: "0☆",
        prerequisites: ["any", "wilderness 卌", "witchcraft 卌", "farming 卌"],
        description: "You learn to forage for useful herbs. You don’t need to keep track of them in your inventory, when you rest and recover your action stars, that represents your character stocking up on herbal supplies. You can use this special ability to locate or identify a plant."
    },
    {
        name: "Identify Object",
        cost: "1☆",
        prerequisites: "Keen Observation",
        description: "Use this action on any object you can see. Make an action roll whose difficulty depends on the situation, but which can’t be harder than hard. Use your perception or wisdom and add your craftsmanship skill. If you succeed, the narrator has to tell you truthfully what the object is."
    },
    {
        name: "Illumination",
        cost: "0☆",
        prerequisites: "Conjure Fire",
        duration: "Until sunset",
        description: "A point of light as bright as a torch appears in your hand. It can be any color you choose, and you can attach it to objects. It lasts until you dispel it or the sun sets. You can make up to six at a time."
    },
    {
        name: "Improvised Carpentry",
        cost: "1☆",
        prerequisites: ["any", "craftsmanship 卌", "boatcraft 卌"],
        description: "Scavenge available wood to build a structure. To succeed you need to describe what tools you’re using and how you’re doing it, then make an action roll depending on how hard the job is. The difficulty is one level easier than it would normally be: very hard becomes hard, hard becomes moderate, etc."
    },
    {
        name: "Improvised Weapon",
        cost: "1☆",
        prerequisites: ["any", "close combat 卌", "distance throwing 卌"],
        description: "Pick up an object that’s not a weapon but could reasonably be used as one in the circumstances. Your opponent is caught off guard by your unexpected tactics, so if you fail your very first attack roll with the improvised weapon you get one chance to re-roll it."
    },
    {
        name: "Invisibility",
        cost: "2☆",
        prerequisites: "Blindness",
        duration: "Until sunrise",
        description: "Make you or one person you can touch completely invisible. They stay invisible until you choose to end the spell or the sun rises. Also works on roughly person-sized objects. Your clothes and items turn invisible too, as long as they’re not made of silver."
    },
    {
        name: "Keen Observation",
        cost: "1☆",
        prerequisites: "craftsmanship 卌",
        description: "Scrutinize something or someone with keen eyes. The narrator must give you additional meaningful information about what you’re looking at."
    },
    {
        name: "Lockmaster",
        cost: "1☆",
        prerequisites: ["any", "stealth 卌", "craftsmanship 卌"],
        description: "You’re good with locks. Most common locks will require a moderate or hard action roll to open without the key, using your dexterity or wisdom and adding your stealth or craftsmanship. More expensive high-quality locks might require a very hard roll, and magic locks might be impossible. Someone can also try to pick a lock as a normal action roll without having Lockmaster, but the difficulty will usually be impossible, since that’s the point of locks."
    },
    {
        name: "Lungs of Steel",
        cost: "1☆",
        prerequisites: "swimming 卌",
        duration: "15 or 30 minutes",
        description: "Make a hard strength roll. If you fail, you can hold your breath for the next 15 minutes. If you succeed, you get 30 minutes."
    },
    {
        name: "Magnifying Eyes",
        cost: "1☆",
        prerequisites: "Illumination",
        duration: "Until sunset",
        description: "Your irises appear to shrink and distort strangely, and you gain the power to see at up to a thousand times magnification. Lasts until you dispel it or the sun sets."
    },
    {
        name: "Martial Arts",
        cost: "2☆",
        prerequisites: "close combat 卌卌",
        description: "You’re an expert in a fight, elevating violence into an art form. You can use this action immediately when you fail a close range attack roll. You get to roll again and use that result instead."
    },
    {
        name: "Metamorphosis",
        cost: "1☆ / 2☆",
        prerequisites: "Familiar",
        duration: "Until sunrise",
        description: "For 1☆, transform yourself, or an ally you can touch, into any animal that you’ve seen before. If your target is unwilling, the spell costs 2☆, and you must succeed at a close range attack roll against them, using agility or strength and adding your witchcraft skill. Someone transformed against their will can make a very hard action roll using charisma and adding their witchcraft skill to turn back. You can’t transform into most monsters or magical creatures, and some magical creatures are immune to the spell’s effects. The transformation lasts until you choose to end it or the sun rises."
    },
    {
        name: "Minor Golem",
        cost: "2☆",
        prerequisites: "Transmutation",
        duration: "Until sunset",
        description: "Create a figure of stones, clay, or a material of your choice, that can move independently and use limited intelligence towards accomplishing a single simple task. You must write down its task and place it inside the golem. Can’t be bigger than an average human. Lasts until the next time the sun sets."
    },
    {
        name: "Multiple Targets",
        cost: "1☆",
        prerequisites: "distance throwing 卌",
        description: "After you make a successful range attack with a throwing weapon, use this action to make another attack roll against a target that’s within close range of the first target. Your weapon arcs like a boomerang or ricochets like a pinball, and you can use it as many times in a row as you can until you fail a roll."
    },
    {
        name: "Narrow Escape",
        cost: "1☆",
        prerequisites: "climbing 卌",
        description: "When an enemy moves into close range from you, or grabs, grapples, or pins you down, you can use this to get an immediate extra action. You must use that action to try to move out of close range from the enemy."
    },
    {
        name: "Parry",
        cost: "0☆",
        prerequisites: ["any", "close combat 卌", "wilderness 卌"],
        description: "When someone makes a close range attack against you and fails their attack roll, this action lets you instantly make an attack back against them. If both parties have Parry, they can continue using it back and forth against each other until someone lands a hit."
    },
    {
        name: "Pass in Silence",
        cost: "1☆",
        prerequisites: "stealth 卌",
        duration: "Until you make a noise",
        description: "You make yourself completely silent and can move without making a sound. It lasts until you speak or choose to make any kind of noise."
    },
    {
        name: "Peak Fitness",
        cost: "8☆",
        prerequisites: "Martial Arts",
        duration: "Permanent",
        description: "Permanently change your dice skill scores (agility, dexterity, strength, perception, wisdom, and charisma) to any numbers between 1 and 3, as long as they all add up to 14."
    },
    {
        name: "Pickpocket",
        cost: "1☆",
        prerequisites: "stealth 卌",
        description: "Roll to steal an item from someone. Describe how you attempt to steal it, then make an action roll depending on the circumstances. The difficulty becomes one level easier than it would normally be: very hard becomes hard, hard becomes moderate, etc. You get to know the difficulty before committing to trying this action. You can use your dexterity and add your stealth skill. Whether you succeed or fail, the target will notice your attempt if they can make a very hard perception roll."
    },
    {
        name: "Plume of Fresh Water",
        cost: "1☆",
        prerequisites: "Conjure Ice",
        duration: "Up to six minutes",
        description: "Turn air into water, making a stream erupt with medium force from any point you can see, in a direction of your choice. It’s about twelve gallons per minute, and can last up to six minutes."
    },
    {
        name: "Poison Immunity",
        cost: "1☆",
        prerequisites: ["any", "Herb Foraging", "Thief’s Ingenuity"],
        duration: "One full day",
        description: "Use herbal concoctions to make yourself or one other person immune to all venoms, toxins, and poisons, for one day."
    },
    {
        name: "Press Your Luck",
        cost: "1☆",
        prerequisites: ["any", "Self Defense", "Narrow Escape"],
        description: "Re-roll any failed roll and take the new result instead. If you fail again, you suffer a critical failure. On an attack roll, this means that you accidentally make yourself vulnerable, and an opponent gets an instant attack against you. On any other kind of roll, it just means the narrator will devise a harsher than normal consequence for failure."
    },
    {
        name: "Pressing Advance",
        cost: "1☆",
        prerequisites: "Parry",
        description: "When you use Parry against an opponent, you can use this action to push them, forcing them to back up in any direction you choose. You also choose how far they back up, up to about six steps. You must move with them, staying engaged in combat."
    },
    {
        name: "Public Speaking",
        cost: "1☆",
        prerequisites: ["any", "negotiation 卌", "music 卌"],
        description: "Your skills as an orator let you win back a crowd even if they’re skeptical at first. Any time you fail an action roll using your charisma, you can use this ability to re-roll and use the new result instead, as long as the action you’re taking involves speaking to two or more people."
    },
    {
        name: "Quickdraw",
        cost: "2☆",
        prerequisites: "Return Fire",
        description: "If someone other than you is about to get the first move in a fight, use this action to get to go first instead."
    },
    {
        name: "Repair",
        cost: "1☆",
        prerequisites: "craftsmanship 卌",
        description: "Try to fix a broken object. Describe how you attempt to fix it using the supplies and knowledge you have access to, then make an action roll depending on how hard the job is. The difficulty is one level easier than it would normally be: hard becomes moderate, moderate becomes easy, etc. You can use your wisdom or perception and add your craftsmanship skill. You cannot use this action on things which are broken beyond repair."
    },
    {
        name: "Return Fire",
        cost: "1☆",
        prerequisites: ["any", "archery 卌", "distance throwing 卌"],
        description: "When someone makes a long range attack against you and fails, use this to get an immediate long range attack back against them. Like with Parry, two opponents with this action can continue using it back and forth until one of them hits."
    },
    {
        name: "Reverse Time",
        cost: "5☆",
        prerequisites: "Distort Time",
        description: "Reverse the flow of time, causing everything that happened in the past twelve seconds to undo itself. You alone retain the memory of what happened the first time. The stars you spent to use this action are not restored, but any other consequences of the past twelve seconds are undone, including restoring hearts and stars, and even returning the dead to life."
    },
    {
        name: "See Through Illusion",
        cost: "1☆",
        prerequisites: "Keen Observation",
        description: "Notice the subtle flaws that give away a magical or non-magical illusion. When you use this action the narrator must tell you truthfully whether you’re looking at an illusion."
    },
    {
        name: "Self Defense",
        cost: "☆0",
        prerequisites: "Parry",
        duration: "Permanent",
        description: "Increase your defense to 9 plus the number of 卌s you have in the close combat skill. If you don’t have any points in close combat, you can raise your defense to 10."
    },
    {
        name: "Set a Snare",
        cost: "1☆",
        prerequisites: ["any", "wilderness 卌", "stealth 卌"],
        description: "You can build a trigger mechanism that sets off an alarm or trap of your choice, or triggers another existing mechanism."
    },
    {
        name: "Shapeshifter",
        cost: "0☆",
        prerequisites: "witchcraft 卌卌卌",
        description: "When you use Transfiguration or Metamorphosis on yourself, make a hard action roll using either your charisma or perception, and adding your witchcraft. If you succeed, you can immediately restore the star you spent to use Metamorphosis or Transfiguration."
    },
    {
        name: "Sharpshooter",
        cost: "1☆",
        prerequisites: ["any", "archery 卌卌", "distance throwing 卌卌"],
        description: "Use this action any time you’re making a long range attack roll to add one bonus dice to your roll. Can be combined with other special abilities."
    },
    {
        name: "Single Combat",
        cost: "3☆",
        prerequisites: ["any", "negotiation 卌", "etiquette 卌"],
        description: "Halt a conflict and force a resolution by single combat, with terms agreed on by both sides. Each side chooses a representative, and they fight either to incapacitation or to the death (the fighters must agree on the terms). The conflict is then resolved. If you try to use this action against an enemy that outnumbers you 5 to 1 or more, you have to make a hard action roll using charisma and negotiation. If you succeed, you can force the single combat, but if you fail you still lose the three stars you spent."
    },
    {
        name: "Smoke Bomb",
        cost: "2☆",
        prerequisites: ["any", "Chemistry", "Thief’s Ingenuity"],
        duration: "Ten seconds",
        description: "Learning this skill means you have the ability to use substances from your environment to make smoke bombs. When you throw one, you and everyone in close range to you is enveloped by a cloud of thick smoke that it’s impossible to see through. The smoke lingers for about ten seconds, then dissipates. You can choose the color of the smoke."
    },
    {
        name: "Sneak Attack",
        cost: "1☆",
        prerequisites: "stealth 卌",
        description: "Before you make an attack roll using your agility, you can choose to use this action to make it a sneak attack. This can either mean you’re sneaking up on an enemy unawares, or just striking in an unexpected way. If you then fail the attack roll, you get one chance to re-roll it, using the second result instead. For long range attacks, you cannot use this action unless the target doesn’t know you’re there."
    },
    {
        name: "Spinning Parry",
        cost: "1☆",
        prerequisites: ["all", "Parry", "Martial Arts"],
        description: "When you’re using Parry, you can also use this action to use your free attack against an opponent other than the one who you’re parrying."
    },
    {
        name: "Spirit Binding",
        cost: "1☆",
        prerequisites: "Witch Eyes",
        duration: "Until the boundary is broken or the sun rises",
        description: "Everything in the natural world is inhabited by a ghost or a spirit. To use this ability, you must create a physical boundary or enclosure, for example a chalk line, a cloth sack, a trail of salt or a wooden box. Once you’ve established your boundary, you can use spirit binding to bar any spirit of your choice (except for living human souls) from crossing that boundary. A witch can use spirit binding to catch a drifting ghost and bargain with it, convincing it to deliver a message quickly over a long distance, create an illusion, or influence nature. Some powerful spectral beings may be able to break through your boundary but it will always be at least very hard to do so. The power of the boundary is broken by the rising of the sun."
    },
    {
        name: "Superhuman Fitness",
        cost: "12☆",
        prerequisites: "Martial Arts",
        duration: "Permanent",
        description: "Permanently change all your dice skill scores to any number between 1 and 4, as long as they all add up to 15. Having a dice skill of 4 means you get two bonus dice when you roll with that dice skill."
    },
    {
        name: "Tactical Move",
        cost: "1☆",
        prerequisites: "leadership 卌",
        description: "Use a non-attack action to let an ally of your choice who can hear or see you make any action. If they use it to attack, you can choose their target."
    },
    {
        name: "Thief’s Ingenuity",
        cost: "1☆",
        prerequisites: "stealth 卌卌",
        description: "You have a mechanical affinity, and can attempt to create or dismantle a mechanism or device. The difficulty is one level easier than it would normally be: hard becomes moderate, moderate becomes easy, etc."
    },
    {
        name: "Tracking",
        cost: "1☆",
        prerequisites: "wilderness 卌",
        description: "Roll to track a person or creature. Describe how you attempt to track them, then make an action roll depending on the environment and your target. The difficulty is one level easier than it would normally be: very hard becomes hard, hard becomes moderate, etc."
    },
    {
        name: "Transfer Wounds",
        cost: "1☆",
        prerequisites: "witchcraft 卌",
        description: "When you successfully wound a foe with a close range attack, you can immediately use this action to heal a wounded ally in your line of sight. That ally’s wound is instantly inflicted on your target instead. The target still only takes one wound."
    },
    {
        name: "Transfiguration",
        cost: "1☆",
        prerequisites: "witchcraft 卌",
        duration: "Until sunrise",
        description: "Transform the appearance of someone you can touch, or yourself. They must still appear to be a person of about their real size, but their appearance can otherwise be disguised in any way of your choice. If you’re disguising as a specific person, people who know them may be able to see through it. You can also slightly change the appearance of an object. The new form lasts until you choose to dispel it or the sun rises."
    },
    {
        name: "Transmutation",
        cost: "X☆",
        prerequisites: "alchemy 卌",
        duration: "Permanent",
        description: "Use this action to transform something you can touch. The object’s shape and volume remain the same, but its substance is transmuted to something else. You can choose to transform the whole object or only part of it, but everything you transform must transform into the same new substance. The volume of matter that you transmute cannot be more than about three times the size of your body. Alchemy is an arcane and complex science: refer to the Alchemist’s Pocket Chart on page 77. The number of stars it costs to use this action depends on what you’re transmuting into what. If two substances on the Alchemist’s Table are connected by an arrow, transmuting in that arrow’s direction only costs 1☆. If they’re farther apart, it costs the number of stars as arrows that are between the substances. For instance, turning bronze into gold costs 2☆. Turning air into ice costs 3☆. In order to transmute across one of the dotted lines on the Alchemist’s Table, like turning lead into gold or stone into ice, you must have at least 卌卌 in the alchemy skill. “Dead matter” includes any form of processed organic matter, such as wood, wax, oil, smoke, or even plastic if you’re playing in a more modern setting. “Stone” includes all rocks and minerals. To try to transmute someone’s living flesh you need to make an attack roll with your strength or agility, and if you’re successful you only transmute enough to deal one wound."
    },
    {
        name: "Triage Healing",
        cost: "1☆",
        prerequisites: "medicine 卌卌卌",
        description: "Make a moderate action roll on a target you can touch using your wisdom, perception, or dexterity and adding your medicine skill. If you succeed, the target can restore one heart. Succeed or fail, you can then immediately try this three more times on different targets, but the second time it’s hard, the third time it’s very hard, and the fourth time it’s impossible. You can’t use this action on yourself."
    },
    {
        name: "Unbalancing Strike",
        cost: "1☆",
        prerequisites: "Martial Arts",
        description: "Use this action before you make an attack using your strength. If your attack succeeds, your opponent takes a wound, and also immediately has to make a hard action roll using their strength and adding their close combat skill. If they fail, they are knocked off their footing, and you can choose one ally who’s at close range to get an immediate free attack against them."
    },
    {
        name: "Undo Wounds",
        cost: "1☆",
        prerequisites: "Reverse Time",
        description: "You create a field of inverted time around a single wound or injury on yourself or someone you can see. Make a moderate action roll using your wisdom, dexterity or perception and adding your alchemy skill. If you succeed, the target can restore one crossed-out heart. Can also be used to repair small objects. Does not work on wounds that are more than a day old."
    },
    {
        name: "Vanish and Return",
        cost: "2☆",
        prerequisites: "Invisibility",
        duration: "Any amount of time you choose",
        description: "Space swirls around you and you vanish into non-being. Before you do this, choose any amount of time. When that time is up, you re-appear in the exact same spot. While you’re vanished you don’t exist, and when you return it feels to you like no time has passed. If the spot is occupied when you return, you either knock the obstruction out of the way, or, if it’s too large and solid, you are thrown out of it to the nearest empty space, taking one wound."
    },
    {
        name: "Walk Through Dreams",
        cost: "1☆",
        prerequisites: "Spirit Binding",
        description: "You can enter the dreams of anybody who you’ve met before, even over great distances. You can choose the form of your dream self, and the target may or may not realize what’s happening. You and the dreamer can both gain control of the dream environment. You can use this spell when you’re awake or before you go to sleep to mingle your dreams with the target’s. If you’re awake, you enter a trance-like state while in the dream. If you cast this spell and it turns out the target isn’t sleeping, it doesn’t work. You can bring up to two companions with you into the dream, as long as they’re sleeping."
    },
    {
        name: "Weather Magic",
        cost: "1☆",
        prerequisites: ["any", "witchcraft 卌", "boatcraft 卌卌"],
        description: "Make an action roll to try to control the weather within the area you can see, using perception or wisdom and adding witchcraft. If you just want to nudge the weather in a direction it might have gone anyway, it’s easy. If you want to create a sudden rainstorm or strong wind or turn rainy skies sunny, it’s moderate. Creating or stopping a thunderstorm might be hard, and a tornado or monsoon might be very hard. If you succeed, the weather you conjured gradually forms over the next few minutes. Casting this spell means attempting to make a single change to the weather, but if you succeed your change can persist for as long as you want it to up to one day."
    },
    {
        name: "Weird Smell",
        cost: "1☆",
        prerequisites: ["any", "Chemistry", "Smoke Bomb"],
        duration: "One day",
        description: "Counterfeit any smell of your choice by burning a small packet of chemicals. More complex spells may take up to an hour to produce, but most can be ready immediately. The smell can have the range and force of something extremely pungent, and lasts for a day."
    },
    {
        name: "Witch Eyes",
        cost: "1☆",
        prerequisites: "Transfiguration",
        duration: "Until sunrise",
        description: "Your eyes change color and you gain the ability to see through magical illusions at will, including seeing the invisible, and seeing normally if you’ve been magically blinded. You can also see ghosts and people’s emotions. Lasts until you choose to end the spell or the sun rises."
    },
    {
        name: "Witch’s Curse",
        cost: "2☆",
        prerequisites: "witchcraft 卌卌卌",
        duration: "Permanent",
        description: "If someone makes you a promise fully of their own free will, you can choose any curse you can think of. If they ever break their promise, they are instantly afflicted by that curse. The curse must be a bad thing for the promise maker."
    },
    {
        name: "Witchwind",
        cost: "2☆",
        prerequisites: "Weather Magic",
        duration: "Thirteen seconds",
        description: "Summon a wind with an appearance of your choice, it surrounds you and lifts you into the air, allowing you to fly. The wind only lasts for thirteen seconds, so you may need to make an action roll to travel long distances, using your agility and your witchcraft. If you’re carrying more than about twice your weight with you, you might have to make an action roll to avoid falling, using strength and witchcraft. You can also use this action to save up to seven people (including yourself) who are falling, slowing their fall so they land harmlessly."
    },
]
