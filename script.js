let bestias = [
  {
    name: "Bear",
    type: "Beasts",
    desc: "Bears are generally found far from human habitation, either in the high mountains or in the deep woods. Opposite of dogs and wolves, bears are solitary creatures, which is probably for the best considering how strong a killing machine they are. It is simple enough a thing to avoid fighting a bear, but that is not always the case. A bear may be clumsy but they run at high speeds despite their bulky sizes, so running away may not always be an option, especially if you have already angered the bear.",
    loot: "Bear Fat, Bear Hide, Raw Meat, and White Bear Hide",
    location: "Velen, Skellige, White Orchard, and Toussaint",
    weakness: "Beast Oil, and Quen",
    image: "Bear.png"
  },
  {
    name: "Panther",
    type: "Beasts",
    desc: "Panthers are dangerous predators found in forests and other woodlands. They are quick, agile and, like all cats, diabolically cunning. In many less-than-thoroughly-urbanized areas, folk still believe panthers are the stranded souls of those who die in their sleep. Superstition thus holds anyone perishing in this way should be dragged to the nearest woods and left there without a burial. The panther-spirit of the deceased may then devour its own body, thereby passing on to the nether realms.",
    loot: "Fur Scrap, Cured Leather, and Raw Meat",
    location: "Toussaint",
    weakness: "Beast Oil",
    image: "panther.png"
  },
  {
    name: "Wild Boars",
    type: "Beasts",
    desc: "These woodland beasts are as wild - untamed, nasty and aggressive - as their name indicates. To this day, many peasants in outlying Kaedweni villages believe wild boars persist on a diet of young maids, though in truth they most often slate their hunger with roots and acorns. Do not think this vegetarian diet makes them harmless, however. In fact, these animals' stout build and sharp teeth render them veritable fur-covered combat machines. Mother Nature has additionally equipped them with dual pairs of tusks - upper pipes and lower abres - and this weaponry's sum effect is to make the beasts the terrors of the woods, a threat to all who venture or dwell there, human, humanoid and otherwise. Boars also have hard, club-like snouts, which some peasants call their whistles, though no boar has ever been heard to make such a noise. Instead, they emit a characteristic grunt, which sounds to some like the snoring of an extremely overweight man. Another peasant belief claims boars have extremely prickly natures, and, if offended, will vent their anger by knocking down fences and gobbling up potatoes. Though they sometimes live alone, boars usually appear in small groups of 3 to 5 specimens.",
    loot: "Boar Tusk, Boar Pelt,Raw Meat",
    location: "Gustfields, and Toussaint",
    weakness: "Northern Wind, Beast Oil, Igni, and Yrden",
    image: "Wild_Boar.png"
  },
  {
    name: "Big Bad Wolf",
    type: "Beasts",
    desc: "The Big Bad Wolf is a large lupine humanoid who inhabits the illusory Land of a Thousand Fables, created by Artorius Vigo. He is based on a homonym figure from Nordling folk tales and served as a childhood playmate for Anna Henrietta and Sylvia Anna, two daughters of Toussaintois duke.",
    loot: "Magic Dust, Red Mutagen, Fake Tooth, Corkscrew, and Bottle Caps",
    location: "Land of a Thousand Fables",
    weakness: "Devil's Puffball, and Beast Oil",
    image: "BigBadWolf.png"
  },
  {
    name: "The Beast of Beauclair",
    type: "Beasts",
    desc: "Eyewitnesses to gruesome monster attacks always have a hard time describing the creature in question. The beasts move quickly and often attack at night, while the witnesses are terrified and primarily concerned with fleeing for their lives. As a result, witchers quite often have no inkling what creature they face until they find tracks or otherwise establish something for themselves. Such was the case with the Beast tormenting Beauclair. Geralt knew it was deadly, elusive and fiendishly clever. Everything else he heard was clearly the product of imaginations fed by fear of a dangerous predator. When Geralt identified the Beast, he discovered it was a higher vampire, meaning one of the most difficult foes a witcher can come to face. Higher vampires are superhumanly strong and fast. They can turn completely invisible, and each comes with its own personalized set of talents and abilities perfected through centuries of existence. When Geralt realized he was dealing with such a creature, he swore foully and realized the rumors about the Beast had not been exaggerated in the slightest.",
    loot: null,
    location: "Toussaint",
    weakness: "Vampire Oil, Black Blood, and Quen",
    image: "TheBeastOfBeau.png"
  },
  {
    name: "Wolves",
    type: "Beasts",
    desc: "Once upon a time wolves were the absolute rulers of the forest. Men used them to frighten children, while adults, too, trembled at the sound of their howling. Post-Conjunction monsters not only pushed wolves into the deepest wilds but also took over their place in human nightmares. Yet this does not mean the old predators ceased to be a danger. Wolves do not have a drop of magic within them, breathe no fire and spit no acid, but that in no way stops them from killing unwary travelers and hunters.",
    loot: "Raw Meat, Wolf Hide, Wolf's Liver, and Dog Tallow",
    location: "Velen, White Orchard,Skellige, and Toussaint",
    weakness: "Beast Oil",
    image: "Wolf.png"
  },
  {
    name: "Dogs",
    type: "Beasts",
    desc: "Some claim dogs are reflections of their masters. A well-treated pet repays his owner with loyalty and trust, whereas an ill-treated one repays this treatment in kind as well, meeting yells with barks and kicks with bites. Since there is an abundance of bad men, so, too, is there an abundance of bad dogs. Most dangerous of all are the vagrant mutts who have lost all respect for men and developed a taste for blood and carrion. Dogs usually attack in packs, choosing isolated victims, especially ones in whom they sense some kind of weakness. Packs of rabid dogs usually only dare attack children, drunkards, the elderly and cripples. Yet when backed into a corner, they will defend themselves with frothing bites and sharp claws against all and sundry.",
    loot: "Dog Tallow, Raw Meat",
    location: "Velen, Novigrad, and Skellige",
    weakness: "Beast Oil",
    image: "Dog.png"
  },
  {
    name: "Three Little Pigs",
    type: "Beasts",
    desc: "The three little pigs are perfect examples of a rather unfortunate phenomenon. Leave even a kind-hearted, warm, naively benign creature to fend for itself, and it won't remain so benign for long. The three little pigs from the Land of a Thousand Fables were left for years without Artorius Vigo's supervision. During this time they went completely feral, transforming into three wild boars which attacked anyone who dared approach their ruined home.",
    loot: "Magic Dust",
    location: "Land of a Thousand Fables",
    weakness: "Beast Oil",
    image: "ThreePigs.png"
  },
  {
    name: "Archespore",
    type: "CursedOnes",
    desc: "Archespores look like gigantic, aesthetically unpleasing flowers with some of the traits of exceptionally cruel and bloodthirsty sundews. They are, however, far more dangerous that even the most colossal sundew. Their peculiar appearance makes them practically impossible to discern amidsts other plants. By the time one draws close enough to realize what they are, it is often too late to flee. According to popular belief, archespores are cursed plants grown in soil fertilized by the blood of the dying. They are most often found in places which in the past saw pogroms, bloody rituals or cruel murders Four types of archespore have been catalogued to date, differing from one another in terms of coloring: brown(the least dangerous), green and purple(the most dangerous). The final variant, said to have been cultivated by mages from Ban Ard, is the yellow archespore, whose strength is similar to that of its green - colored - cousins. Regardless of color, all archespores fight using similar methods: attacking with powerful, jaw - like leaves. If their victim is out of reach, they can also spray caustic acid which if it makes any contact whatsoever with the skin, can provoke a reaction similar to that caused by severe poisoning.",
    loot: "Archespore Juice, Archespore Tendril, and Monster Spore",
    location: "Toussaint",
    weakness: "Cursed Oil, Aard, and Igni",
    image: "Archespore.png"
  },
  {
    name: "Botchlings",
    type: "CursedOnes",
    desc: "Botchlings are perhaps the most repulsive creatures a witcher will ever have the displeasure of meeting. Born of dead, unwanted babies discarded without a proper burial, their appearance is that of a partially-decayed fetus, their unformed flesh twisted with hate, fear and malice. These hideous creatures feed on the blood of pregnant women, driven by a mad hunger that most often leads to their victim's death. A botchling will emerge from its lair at night to lurk by the bedside of an expectant mother, draining her strength and that of her unborn progeny as she sleeps. A woman thus beleaguered first suffers from troubling dreams, then fever, delirium and a general weakening of the flesh. After a few such nights she is enfeebled and unable to defend herself - it is then the botchling attacks directly, sinking its long, sharp fangs into her body and drinking her blood until mother and fetus perish together. A botchling stands around a foot and a half in height, but, when threatened and if gorged with blood, it can change form. At such times it grows into a deformed man, hunched over and striding, ape-like, on its forearms. Stronger and fiercer after this alteration, it hurls itself into direct, physical combat, gnashing at its opponent or attacking him with sharp claws. A botchling's curse can be lifted by transforming it into a lubberkin - a guardian spirit of the hearth that watches over the family it never knew in the house it never could call home.",
    loot: "Lesser Red Mutagen, Monster Ear, Monster Blood, Necrophage Hide, Rotting Flesh, and Monster Brain",
    location: "Crow's Perch",
    weakness: "Cursed Oil, and Axii",
    image: "Botchling.png"
  },
  {
    name: "Ulfhedinn",
    type: "CursedOnes",
    desc: "Ulfhedinn are a breed of werewolf found mainly in Skellige. The harsh and barren conditions of the isles might explain why they primarily hunt men and are stronger than their continental brethren. Older and particularly dangerous ulfhedinn are called olrefs. Only a few daring warriors in Skellige history have managed to defeat an ulfhedinn, and each of them is commemorated in ballads as a hero to this day. Like werewolves, ulfhedinn and vorefs are active at night, particularly when the moon is at its fullest. Fast, strong, and amazingly resilient, these creatures kill with disturbing ease. Silver blades should be brought against them, as should Devil's Puffball. Take note that when near death the ulfhedinn becomes particularly dangerous and will attack with doubled fury, while calling on wolves to come to its rescue.",
    loot: "Werewolf Hide, Werewolf Mutagen, Werewolf Saliva, and Monster Essence",
    location: "Skellige",
    weakness: "Moon Dust, Devil's Puffball, Cursed Oil, and Igni",
    image: "ulfhedinn.png"
  },
  {
    name: "Berserkers",
    type: "CursedOnes",
    desc: "Skellige legends speak of men known as berserkers who transform into bears when overwhelmed by battle rage. In doing so, they lose all self-awareness and are driven by a bloodlust which they must satiate in order to return to human form. Few believe these blood-curdling tales, however, not even in Skellige, where the inhabitants usually treat even the least probable legends with the utmost gravity. This indicates either that berserkers are in fact mere figments of mead-sodden imaginations, or else that they have learned to hide their abilities from the rest of the islanders. The skalds' ballads indicate a berserker transformed in the heat of battle cannot be distinguised from a true-born bear. Only minute anatomical details - such as the shape of their tongues and teeth - reveal their secret. Descriptions of their fighting prowess paint them as invulnerable to pain and able to heal any wound received almost at once. If these men - turned - bears truly do exist, one can suppose that, like werewolves and lycanthropes, they are particularly vulnerable to oils that harm cursed creatured. But if we are to give credence to ancient songs about these creatures' deeds, about the mass murders and massacres they have committed, we can only hope that no witcher will have to test this hypothesis.",
    loot: "Bear Fat, Berserker Hide, and Raw Meat",
    location: "Skellige, and Vildkaarl's Village",
    weakness: "Devil's Puffball, Cursed Oil, Quen, and Igni",
    image: "Berserker.png"
  },
  {
    name: "Werewolf",
    type: "CursedOnes",
    desc: "Werewolves are creatures with both men and wolves inside them. When in beastly form, they take the worst traits of each: the wolf's drive to kill and hunger for raw flesh and the man's cruel and calculating intelligence. A werewolf's condition comes about through a curse, and the transformations happen outside his conscious control. When he reverts to human form, he has no memory of his deeds - otherwise he would surely go mad and take his own life. Werewolves are active at night, particularly when the moon is full. Though they hunt alone, when threatened they will summon wolves to aid them. Werewolves rarely feel the need to flee, for few adversaries put up much of a fight against them. They strike as swiftly as lightning with claws sharp as razors and regenerate any damage received in mere moments. When fighting werewolves a witcher should wield a blade covered in oil harmful to the cursed and have a large supply of Devil's Puffballs handy. A werewolf's curse can at times be lifted, yet there is no universal, surefire method for doing this. A witcher seeking to undertake such a task must there equip himself with a great deal of patience - and sturdy armor.",
    loot: "Werewolf Hide, Werewolf Mutagen, and Werewolf Saliva",
    location: "Velen, and Skellige",
    weakness: "Moon Dust, Devil's Puffball, Cursed Oil, and Igni",
    image: "Werewolf.png"
  },
  {
    name: "The Toad Prince",
    type: "CursedOnes",
    desc: "Timeless tales always carry within them a grain of truth. The legend of the frog prince is no exception, or at least that's what the folk of Oxenfurt wished to believe when they found out a monstrous toad lurked in their city sewers. The women who hunted it in search of romance and a better life, however, found their tales had a most unhappy ending. The creature they encountered was no small, sweet frog but a bloodthirsty beast, who not only did not let them in for a kiss, but instead greedily devoured them and anything else that strayed into its slime-covered lair.",
    loot: null,
    location: "Oxenfurt Sewers",
    weakness: "Northern Wind, Golden Oriole, Cursed Oil, and Yrden Sign",
    image: "Toad.png"
  },
  {
    name: "Basilisks",
    type: "Draconids",
    desc: "Contrary to popular belief, basilisks cannot turn anything to stone with their gaze. That is small comfort, however, given that their acid, venom, claws and teeth provide them many other ways to kill. Basilisks love dark, damp places such as cellars, caves and city sewers. They hunt by day, waiting patiently in hiding for their prey to come, then jump out in a flash to unleash a deadly attack. When preparing to fight such a creature one should drink Golden Oriole, which will provide resistance to its venom, and also prepare Dancing Star or shrapnel bombs, which work particularly well against basilisks. Basilisk leather is a highly - valued material used to make fashionable shoes and women's handbags. For this reason many men, their courage girded by goldlust, take to hunting them. Most of these hunts end in disaster, but some do manage to bag their prey, which has led to a drastic decline in this creature's numbers in recent years. Some mages and druids are of the opinion that basilisks should be included in programs meant to safeguard dying species. Everyone else thinks those mages and druids have gone completely mad.",
    loot: "Basilisk Venom, Basilisk Hide, and Basilisk Mutagen",
    location: "Velen",
    weakness: "Golden Oriole, Grapeshot, Draconid Oil, and Aard",
    image: "Basilisk.png"
  },
  {
    name: "Royal Wyverns",
    type: "Draconids",
    desc: "A hunter who knows his prey's habits and behavior will rarely return from his hunt empty-handed. To know what forest paths deer are like to trod, to know in what muck boars will wallow, to guess when a hare will emerge from its burrow - that is half the battle. What most men do not know is that some monsters also possess such knowledge. For example, a royal wyvern from Velen had learned the danger of exposing itself to human eyes and arrows by flying high to pick out its prey from afar. Instead, it would lurk by the roadside and wait for military transports. In this way it grew fat on salted pork and beer, expanding until it resembled a dragon more than other, lesser members of its own kind.",
    loot: "Wyvern Trophy, Wyvern Mutagen, Wyvern Egg, and Anathema",
    location: null,
    weakness: "Golden Oriole, Grapeshot, Draconid Oil, and Aard",
    image: "royal.png"
  },
  {
    name: "Slyzard Matriarchs",
    type: "Draconids",
    desc: "If you ever find yourself facing a monster that breathes fire, strikes with a tail tipped with venomous spines, bites with sharp teeth and swipes with even sharper claws and tends to knock its prey to the ground with a sonic blast, then you are fighting a slyzard. With an asernal like that, it comes as no surprise folk often mistake these draconids for dragons. Yet the experts (meaning witchers) know slyzards constitute an entirely seperate species, much smaller than dragons and far less dangerous. With one exception: slyzard females in mating season, or, even worse, just after laying their eggs. When fighing such individuals, my suggestion is to get as far as possible from the danger as quickly as possible, preferably by running, at full tilt, without looking back.",
    loot: "Slyzard Trophy",
    location: "Toussaint",
    weakness: "Grapeshot, Draconid Oil, Aard, and Quen",
    image: "Slyzard.png"
  },
  {
    name: "Cockatrices",
    type: "Draconids",
    desc: "Foolish superstitions claim cockatrices, like basilisks, can kill with their gaze alone. That is utter nonsense, however, a cockatrice's gaze being no more dangerous than that of an angry goose. One should instead watch out for it's sharp beak and long tail, which it can whip to murderous effect. Cockatrices thrive in dark caves, abandoned ruins, cobwebbed dungeons and old basements. Though small compared to griffins and manticores, they are more than capable of killing anyone who stumbles across them in a dark corridor. Cockatrices do not shun direct fights, in which they strike furiously with wing and tail in an attempt to exhaust their foes. Blows from their beaks are especially dangerous, as they aim with deadly precision at exposed flesh and vital organs and leave bleeding, life - threatening wounds. When fighting them one should make liberal use of draconid oil as well as Grapeshot, whose shrapnel will pierce their delicate wings with ease.",
    loot: "Cockatrice Egg, Cockatrice Mutagen, Cockatrice Stomach, Cockatrice Trophy, and Monster Carapace",
    location: "Velen, and Redania",
    weakness: "Grapeshot, Draconid Oil, and Aard",
    image: "Cockatrice.png"
  },
  {
    name: "Shrieker",
    type: "Draconids",
    desc: "The monster tormenting the residents of Crow's Perch turned out to be a particularly nasty cockatrice. Geralt was not surprised the baron's men had been unable to stop it. They could not possibly withstand the surgical precision of its strikes, which slice open arteries and provoke an outpouring of blood only the Swallow potion could hope to stop. Neither did they know to force it to the ground with a crossbow, a bomb or a Sign, and then evade its charge by rolling under the monster's outstretched wing. Just when it seemed the villagers would have to learn to live in the shadow of a bloodthirsty beast, to always look to the sky with fear, the witcher arrived - and put an end to the shrieker for good.",
    loot: "Cockatrice Egg, Cockatrice Mutagen, Cockatrice Stomach, Cockatrice Trophy, Dwarven Axe, Monster Carapace, Monster Feather, and Monster Saliva",
    location: "Cave near Crow's Perch",
    weakness: "Grapeshot, Draconid Oil, and Aard",
    image: "Shrieker.png"
  },
  {
    name: "Forktails",
    type: "Draconids",
    desc: "Forktails owe their quaint name to the long sharp growths at the tip of their tails. A blow from this weapon can slice an oaken shield in two - along with the arm that was carrying it. Thus, though its name conjures images of cutlery, fighting a forktail is nothing like a dinner party and ends in death rather than dessert.",
    loot: "Forktail Mutagen, Forktail Hide, Dragon Scales, Monster Liver, Monster Eye, and Raw Meat",
    location: "Velen, Skellige, and White Orchard",
    weakness: "Golden Oriole, Grapeshot, Draconid Oil, and Aard",
    image: "Forktail.png"
  },
  {
    name: "Silver Basilisk",
    type: "Draconids",
    desc: "Silver Basilisks were once a dominating species, especially in the region of Toussaint where they were very common around the year 1100. Their extirpation in the duchy, and possibly near-extinction in the world as a whole, is chiefly due to hunting by humans for the monsters' silver-colored hides. In the year 1275, the last regulus platinum specimen in Toussaint (known as the Great White Terror) attacked passing merchant caravans, primarily in the northern parts of the duchy. However, due to being the last specimen, he is vehemently protected by Count Borhis di Salvaress.",
    loot: null,
    location: "Toussaint",
    weakness: "Golden Oriole, Draconid Oil, Aard, and Igni",
    image: "Silver.png"
  },
  {
    name: "The Dragon of Fyresdal",
    type: "Draconids",
    desc: "Few truly know what a dragon looks like, for those who have seen one up-close rarely have a chance to share their impressions. That is why people are forever mistaking other monsters for dragons. This was the case in Fyresdal, where the so-called dragon wreaking havoc turned out to be a forktail. Yet this mistaken attribution did not mean there was no reason to worry. The forktail harassing Fyresdal was a particularly vile representative of its kind, one equipped with an endless store of deadly venom. Fighting it without first drinking a regenerative potion or a poison antidote would be tantamount to suicide.",
    loot: "Dragon Scales, Forktail Mutagen, Forktail Hide, Forktail Trophy, Monster Bone, Monster Heart, and Monster Tongue",
    location: "Abandoned Siege Tower Outside Fyresdal",
    weakness: "GOlden Oriole, Grapeshot, Draconid Oil, and Aard",
    image: "Fyresdal.png"
  },
  {
    name: "Dracolizards / Slyzards",
    type: "Draconids",
    desc: "Slyzards are often mistaken for wyverns or forktails. Yet make no mistake: slyzards are nasty, terribly dangerous beasts, and confusing them for wyverns will end very badly for the confuser. While a wyvern can tear apart and devour an untrained man in seconds, only a slyzard can first bake him to a crisp with a waft of fiery breath. Slyzards are keenly aggressive and attack from both ground and air. Their goal during a fight is to get close enough to their foe to injure it with a breath of fire or knock it down with a sonic blast. Like wyverns, slyzards also attack with venom - spiked tails. Slyzards like to disengage mid - fight to fly into the air and plummet down at high speed while spewing out balls of fire. Right before these igneous missiles emerge, you can observe a fiery ball forming in the monster's maw. While airborne, a slyzard can also attack with its claws and teeth. It is worthwhile to employ the Aard and Igni Signs to force slyzards to the ground. They are not, however, vulnerable to burning. Before tackling one of them, be sure to coat your blade in draconid oil.",
    loot: "Slyzard Scale Plate",
    location: "Dragon Mountains Near, Barefield, and Toussaint",
    weakness: "Grapeshot, Draconid Oil, Aard, and Quen",
    image: "Dracolyzard.png"
  },
  {
    name: "Wyverns",
    type: "Draconids",
    desc: "Wyverns are often mistaken for dragons, and, though they are much smaller than their more famous kin and do not breathe fire, they are likewise extremely dangerous monsters. Especially feared are the so-called royal wyverns who, like their namesake monarchs, are exceptionally ornery and extremely deadly.",
    loot: "Dragon Scales,Monster Blood, Monster Bone, Monster Brain, Monster Claw, Monster Eye, Wyvern Egg, Wyvern Hide, Wyvern Mutagen, and Wyvern Trophy",
    location: "Wyverns have been spotted nesting in northeastern Velen, though it must be stressed that these beasts are highly-adaptable, and have been sighted across the entire Continent and the Skellige isles.",
    weakness: "Golden Oriole, Grapeshot, Draconid Oil, Aard",
    image: "Wyvern.png"
  },
  {
    name: "Djin",
    type: "Elementa",
    desc: "A djinn is a powerful air spirit, a condensation of the power of that element endowed with consciousness and character - the latter usually nasty. According to legend, djinn can grant even the most far-fetched wishes, though they do so very begrudgingly. Unusually powerful mages can capture and tame these beings. The mage can then draw on its energy, using it to cast spells without having to call on Power from traditional sources. Only a sparse handful have managed this feat, however, for djinn fight to avoid such a fate with stubborn determination. To imprison a djinn and bend it to one's will, one must first weaken it - and that is no easy feat. Fighting a djinn is extraordinarily difficult. They can fling off spells in an instant that the most accomplished human mages could never cast with years of preparation. What's more, by manipulating the element of air they can summon powerful storms, hurricanes, and gales. Luckily, as magic beings, they are vulnerable to silver - yet steel will do them no harm.",
    loot: null,
    location: null,
    weakness: "Dimeritium Bomb, and Elementa Oil",
    image: "Djinn.png"
  },
  {
    name: "Golems",
    type: "Elementa",
    desc: "Golems are mindless matter brought to life by a spell. They obey their creator's orders without question. Their boundless strength, ability to withstand pain, endless patience and the fact that they neet not one jot of food or drink makes them the best servants or guards anyone could ask for. Once provoked, they will not tire of battle until they have either crushed their opponent or themselves crumbled to dust. Defeating a golem is extraordinarily difficult: for obvious reasons it does not bleed, it feels no fear or mercy and it is invulnerable to fire and poison. What's more, a golem's body is as hard as the rock it is sometimes heft out of, so even a silver blade will barely wound it. The monster's only weakness is acid - a blade covered in acrid oil can thus increase one's chances for victory. Golems use no weapons, for they have no need - their fists, weighing over a hundred pounds each, can crush solid granite with one hit. A blow from a golem should thus be avoided at all costs - there is no shield that can stop it, nor sword that can parry it. That is no easy task, for these creatures are able to move with surprising speed. Luckily, their enormous mass means they are not very agile - once a golem begins a charge, it cannot stop quickly, a fact experienced witchers use to their advantage.",
    loot: "Golem's Heart, Infused Dust, Monster Essence, Monster Saliva, and Runestones",
    location: "Elven Ruins and Caves (throughout the world)",
    weakness: "Dimeritium Bomb, and Elementa Oil",
    image: "Golem.png"
  },
  {
    name: "Pixies",
    type: "Elementa",
    desc: "Pixies might look like gentle, harmless creatures, yet in their case, the saying about appearances being deceiving fits all too perfectly. The pixies from the Land of a Thousand Fables were created to protect that magic place from intruders and ensure the ducal daughters, Sylvia Anna and Anna Henrietta, did not come to even the slightest harm. Thus whenever anyone else crossed the pixies' path, it ended badly for them, for pixies are aggressive, war-like creatures, created to kill, defend and fight till they can fight no more.",
    loot: null,
    location: "Land of a Thousand Fables",
    weakness: "Elementa Oil",
    image: "Pixies.png"
  },
  {
    name: "Earth Elemental",
    type: "Elementa",
    desc: "Earth elementals are made of mud, clay, sand and rock dust clumped together with water and brought alive with magic. While seemingly slow and ponderous, there creatures are nevertheless dangerous and should be avoided at all costs. Earth elementals can withstand a tremendous amount of punishment. Due to their enormous mass they are virtually impossible to knock off balance. They do not bleed nor feel any pain from poison or even fire. They kill men with astonishing ease - whether by smashing them with their fists or hurling enormous stones at them. Their only weakness is their vulnerability to dimeritium dust - thus before combat one should prepare a full arsenal of bombs containing this ingredient.",
    loot: "Elemental Essence, and Earth Elemental Mutagen",
    location: "Elven Ruins, Ermion's Laboratory in Kaer, and Trolde Citadel",
    weakness: "Dimeritium Bomb, and Elementa Oil",
    image: "Earth.png"
  },
  {
    name: "Hound of the Wild Hunt",
    type: "Elementa",
    desc: "Born, or so some experts believe, of magic ice crystal, the Hounds of the Wild Hunt race alongside their spectral masters. Like ravenous, feral dogs they are capable only of mindlessly attacking whatever crosses their path. The Hounds' chief weapons are their claws and teeth. Their battle tactics rely on knocking their opponents to the ground before tearing them to shreds. Badly wounded Hounds fall into a kind of frenzy that adds to their deadly might. These beasts also use their powers over the cold to freeze the ground around them and create sharp spikes of ice. Creatures born of frost,they feel pain from the Igni Sign, and there is also reason to believe Axii can momentarily weaken their drive to kill and somewhat weaken these fierce foes. The Hounds' icy nature also means they can draw strength from extreme cold. Thus one should be particularly on guard when fighting them during blizzards or in glacial regions. Elven legends likewise claim they gain strength when a red moon - a known herald of the Hunt's arrival - hangs in the sky",
    loot: "Monster Bone, Monster Brain, Monster Saliva, Rotting Flesh, and Sulfur",
    location: "Always Together with Wild Hunt",
    weakness: "Dimeritium Bomb, Elementa Oil, Igni, and Axii",
    image: "hunt.png"
  },
  {
    name: "The Apiarian Phantom",
    type: "Elementa",
    desc: "The Apiarian Phantom destroying the Meiersdorf family's hives turned out to be a lost Hound of the Wild Hunt. When fighting such a beast, one must bear in mind three things. First of all, that the thick armor of ice covering it can only be pierced by strong blows. Second, that, like any other frost-born creature, it is vulnerable to fire, the Igni Sign included. Third and last: that it shall show no mercy.",
    loot: "Wild Hunt Hound Trophy, and Sulfur",
    location: "In hut near Honeyfill Meadworks",
    weakness: "Dimeritium Bomb, Elementa Oil, Igni, and Axii",
    image: "apiarian.png"
  },
  {
    name: "Fire Elemental",
    type: "Elementa",
    desc: "Fire is the most destructive of the elements, thus the aggressive lethality of the creature that embodies its essence should come as no surprise. Fire elementals are forged in complicated magic rituals for one purpose: destruction. And they pursue this with murderous determination. This elemental attacks using fireballs and streams of flame which reduce anything in their path to ashes in the blink of an eye. Like golems and other elementals, poison does not touch it nor does it bleed. Fire - based spells not only do no harm but in fact strengthen it - thus one should by no means think of striking it with Igni. Though vulnerable to silver blades, getting within sword's reach of one is dangerous due to the furnace-like heart they emanate. When fighting a fire elemental one should thus strike from a distance, using frost-spewing and dimeritium bombs, for they will do it the most damage.",
    loot: "Greater Dazhbog Runestone",
    location: "Found in magical ruins",
    weakness: "Dimeritium Bomb, Northern Wind, Elementa Oil, and Aard",
    image: "fire.png"
  },
  {
    name: "Ice Elemental",
    type: "Elementa",
    desc: "An ice elemental is a mass of frozen water animated by magic. Deprived of consciousness or independent will, this elemental is boundlessly obedient to the orders of the mage who created it. Those orders usually contain but one syllable: kill. Ice elementals have no qualms about carrying out this order nor any particular difficulty in doing so. Gifted with incredible strength, they are completely invulnerable to poison and fire, deprived of sensitive organs, hard as permafrost and all in all incredibly difficult opponents. A witcher's only chance at tipping the scales towards victory is to toss a dimeritium bomb - shrapnel made of this metal interferes with the workings of the spell that gives this creature life. Beyond that remains only prayer.",
    loot: "Elemental Essence",
    location: "Skellige",
    weakness: "Dimeritium Bomb, and Elementa Oil",
    image: "ice.png"
  },
  {
    name: "Therazane",
    type: "Elementa",
    desc: "There's no such thing as a risk-free real estate investment. It might turn out your new home has a leaky roof, structural rot in the attic, a scratched floor in the living room... or elven ruins beneath its foundations, and within them an enormous earth elemental just waiting for a chance to break free of its chains. Fighting such a monster is no easy task. Its tough outer husk deflects all but the strongest blows. It can liquefy a man's bones with one crushing blow from its fists - thus, one should never near it without first casting the Quen Sign. One should have the Yrden Sign at the ready as well, whereas the other signs - Igni, Aard and Axii - are completely ineffective against it.",
    loot: "Earth Elemental Trophy, Earth Elemental Mutagen, Clever Hood, Monster Claw, Powdered Monster Tissue, Monster Eye, and Fifth Essence",
    location: "Moldavie Residence",
    weakness: "Dimeritium Bomb, and Elementa Oil",
    image: "Therazane.png"
  },
  {
    name: "Gargoyles",
    type: "Elementa",
    desc: "Gargoyles are stone statues brought to life by magic in order to guard mages' laboratories and lairs from intruders. Their appearance alone has scared off more than one prospective burglar. Those who do not take fright at the sight of these horned and winged monstrosities usually die shortly thereafter, torn to shreds by stony claws.",
    loot: "Gargoyle Dust, Gargoyle Heart, Elemental Essence, Iron Ore, and Monster Heart",
    location: "Abandoned Ruins and Castles",
    weakness: "Dimeritium Bomb, Elementa Oil, and Quen",
    image: "gargo.png"
  },
  {
    name: "Moreau's Golem",
    type: "Elementa",
    desc: "Long years of solitary study tend to make mages somewhat eccentric. As the years pass, laypeople being to irritate them more and more: they are dense, unreliable, disobedient and determined not to understand the gravity of mages' work. They display emotion when they should show discipline and self-mastery. No wonder mages have long considered the best companions to be artificial constructs they themselves bring to life and design to follow their orders and meet their needs. Professor Moreau was no exception in this regard. His golem was his dutiful servant and companion, in good times and bad. Moreau's golem was also an excellent guardian: massive, unyielding and devilishly strong. All in all, he was a tough nut for a witcher to crack!",
    loot: null,
    location: "Mont Crane Castle",
    weakness: "Dimeritium Bomb, and Elementa Oil",
    image: "moreau.png"
  },
  {
    name: "Ekhidna",
    type: "Hybrids",
    desc: "They are a larger, stronger, breed of sirens. They make bodies of water a dangerous place.",
    loot: "Ekhidna Mutagen, Lock of Lamia Hair, Monster Brain, Monster Blood, Monster Bone, Monster Claw, Monster Ear, Monster Eye, Monster Heart, Monster LiverMonster Tongue, Monster Tooth, Sea Shell, and Water Essence",
    location: "Bodies of water and Shorelines",
    weakness: "Grapeshot, Hybrid Oil, Igni, and Aard",
    image: "ekhidna.jpg"
  },
  {
    name: "Harpy",
    type: "Hybrids",
    desc: "It is hard to say what is most repulsive about harpies and their cousins, the shishigas: their hideous appearance, the overwhelming stench of rot and bird excrement that clings to them or their bloodcurdling screech. Suffice it to say that even rats, who dwell happily among the rankest fecal matter and rotten waste, give their nests wide berth. Harpy nests are most often found atop high cliffs or rocky ravines. Sure signs of having strayed near one are crumbling human and animals remains, guano-streaked rocks and feathers littering the ground. Harpies and shishigas hunt in flocks consisting of a handful to up to twenty individuals. Though rather cowardly and cautious, harpies fiercely defend their nests and will not hesitate to attack when outnumbering their foes. During combat they use their ability to fly to dive swiftly to strike their victims one by one before soaring back up out of reach. They can kill with their wings or their sharp beak and talons. Once on the ground they move slowly and clumsily, and thus no longer present much of a threat.",
    loot: "Harpy Egg, Harpy Talons, Harpy Feathers, Lesser Blue Mutagen, Monster Liver, and Raw Meat",
    location: "Highlands",
    weakness: "Grapeshot, Hybrid Oil, and Aard",
    image: "Harpy.png"
  },
  {
    name: "Salma",
    type: "Hybrids",
    desc: "The witcher's investigation uncovered that a succubus named Salma was responsible for the string of killings afflicting the Novigrad city guard. This came as a surprise, for succubi do not usually commit premeditated, cold-blooded murder. This is not to say they are not dangerous: they will at times kill on accident, when carried away on a particularly gushing stream of ecstasy. At other times, they kill in self-defense: though they have the look of slender maids from the waist up, their supple limbs hide incredible strength. They are also invulnerable to fire, the Igni Sign included. They present witchers with an intractable dilemma: does this monster, who wishes me no ill yet all the same often causes harm, deserve death, or mercy?",
    loot: null,
    location: "Novigrad",
    weakness: "Hybrid Oil, and Quen",
    image: "salma.png"
  },
  {
    name: "Erynias",
    type: "Hybrids",
    desc: "Hard as it is to imagine, the erynias found in Skellige are even more repulsive - and dangerous - than harpies, their close relatives. Though well-rotten carrion is their food of choice, they will not turn up their noses at fresh meat, man flesh included. When they spy a potential victim, erynias, like harpies or shishigas, will try to make full use of the strength of their numbers and their ability to control the skies. They will circle above their prey then attack from several directions at once, striking with razor - shark talons and tearing their targets to shreds. While attacking they aim for the neck, eyes and other vital organs, often causing their prey to bleed to death as a result. In this way a small flock of erynias is able to make quick work of larger and better - armed victims, who often are not able to defend themselves effectively from several opponents attacking at once.",
    loot: "Erynia Eye, Monster Blood, and Monster Feather",
    location: "Skellige",
    weakness: "Grapeshot, Hybrid Oil, and Aard",
    image: "Erynias.png"
  },
  {
    name: "Melusine",
    type: "Hybrids",
    desc: "In the mountains near the village of Svorlag in Skellige lies an enormous complex of caves. For many centuries they were given wide berth on account of the bloodthirsty ekhidna known as Melusine who had made them into her lair. Melusine was a beast so powerful some islanders worshiped her as a semi - divine being. The witcher, however, harbored no such delusions. He knew she was an extremely powerful monster - but a monster all the same. This meant she could be killed. To do so, he would need the highest quality bolts, a solid silver blade -and a steady hand.",
    loot: "Ekhidna Mutagen, Ekhidna Trophy, and Lock of Lamia Hair",
    location: "Spikeroog",
    weakness: "Grapeshot, Hybrid Oil, Igni, and Aard",
    image: "Melusine.png"
  },
  {
    name: "Siren",
    type: "Hybrids",
    desc: "Like skilled hunters setting out wooden ducks to lure in drakes, sirens and lamias lure men near - using their own bodies as decoys. They can transform to resemble beautiful human maidens, though with tails covered in silver scales instead of legs. Once a naive sailor gets within arm's reach of these beautiful creatures, their fair faces suddenly turn to fang-filled, fish-like maws, and lovely tails promising unknown delights become sharp, death dealing talons. One legend claims sirens and lamias were once friendly towards men - and supposedly were even known(albeit on rare occasions) to accept some sailors' clumsy attempts at courtship. In our day, however, they are decidedly aggressive, perhaps soured by the numerous kidnappings of carried out by frustrated sea salts. Whatever the truth, one thing is certain: these days the monsters display no signs of good will, and so when spotting them one should immediately reach for one's silver sword.",
    loot: "Monster Tooth, Siren Vocal Cords, and Water Essence",
    location: "Coastal Regions throughout Velen and Novigrad, Skellige is also a major breeding ground.",
    weakness: "Grapeshot, Hybrid Oil, Igni, and Aard",
    image: "Siren.png"
  },
  {
    name: "Griffin",
    type: "Hybrids",
    desc: "Griffins were once only found high in the mountains, where they would hunt marmots and wild goats. When humans encroached on their lands, however, griffins soon discovered a new source of much more plentiful and easier-caught prey: cows, sheep and shepherds. Though still wary of main roads and towns (where folk with the means to hire a witcher are like to dwell), these half-eagle, half-wildcat creatures have gone from rarities to oft-encountered pests known throughout the Northern Realms. Especially hated are the subspecies known as royal griffins and archgriffins. Griffins mate for life and when their partner is attacked they will defend it to the death. For this reason they are often considered the embodiment of courage, loyalty and fighting spirit. This last attribute no one would deny them - when provoked, they will not cease their attack until they have torn their opponent to shreds. Griffins find their victims using their extraordinary perceptive sense of smell. After drawing near to their chosen target they attack by swooping down from great height. Their muscular mass combined with their swift speed mean his blow alone is often enough to end the fight. If, however, the victim survives this aerial assault, the griffin will immediately engage it in direct combat, making use of its sharp, curved beak and powerful talons. The wounds it deals are deep and cause powerful bleeding. Even worse, griffins do not have any true weaknesses - except for their vulnerability to hybrid oil and certain kinds of bombs.",
    loot: "Griffin's Egg, Griffin Feathers, Griffin Mutagen, Griffin Trophy, Infused Dust, Monster Brain, Monster Claw, Monster Eye, Monster Heart, and Raw Meat",
    location: "Ovenfurt, Skellige, Velen, and White Orchard",
    weakness: "Grapeshot, Hybrid Oil, and Aard",
    image: "Griffin.png"
  },
  {
    name: "Opinicus",
    type: "Hybrids",
    desc: "Killers of various stripes - mercenaries, knights errant, ambitious lawmen - try at times to compete with witchers as monster slayers. This usually ends in a massacre that not only does not solve the problem, but in fact only makes it worse - the beast walks away from the fight unharmed, enraged and out for vengeance. Such was the case in the mountains outside Oxenfurt, where a powerful archgriffin had made its nest. Once again it fell to the witcher to clean up after amateurs. He knew neither Igni nor bombs dealing fire damage would have any effect against this fire - loving creature. He would also have to look out for its acid, which can eat through even the thickest armor - leaving one vulnerable to its razor - sharp talons.",
    loot: "Arhgriffin Mutagen, Griffin's Egg, Griffin Feathers, Griffin Trophy, Monster Brain, Monster Tongue, and Zireael Armor",
    location: "Forest Outside Oxenfurt",
    weakness: "Grapeshot, Hybrid Oil, and Aard",
    image: "Opinicus.png"
  },
  {
    name: "Succubus",
    type: "Hybrids",
    desc: "Unlike other monsters, succubi and menads feel no desire to kill, do not crave human blood and usually do not, in fact, mean any harm at all. They are motivated by one thing and one thing only: an insatiable lust. They try in vain to slake this by engaging in sexual acts with any other humanoid species they encounter. While it must be admitted that their victims rarely put up much resistance, this does not mean succubi and menads do not present any danger: their never-ending advances, though pleasurable at first, have pushed more than one man to madness or even death. Succubi and menads usually can be found near human settlement, including small villages and populous cities. They prowl at night, though when stricken by serious need they will leave their lairs during the day as well. They shower their affections on men as well as women, the young as well as the old, the ugly as well as the beautiful. Some of them are particularly fond of pastors and other holy men, whose seduction they treat as a sort of game. Though succubi are peaceful by nature, when forced to fight they will defend themselves fiercely. One should thus not be fooled by their fair appearance - under the velvety skin of their arms lie muscles of iron, and a blow delivered with their rear, goat - like legs or the thick horns on their head can easily crush bone.",
    loot: "Succubus Mutagen",
    location: "Try to live close to their prey, near towns and villages. Some succubi inhabit cities.",
    weakness: "Hybrid Oil, and Quen",
    image: "Succubus.png"
  },
  {
    name: "Arachasae",
    type: "Insectoids",
    desc: "Powerful pincers, a maw filled with razor-sharp teeth and venom glands packed with deadly toxins - these creatures constitute the arachas' deadly arsenal. Since people and farm animals make up an important part of these creatures' diet, contracts on arachasae in turn constitute an important source of witcher coin. Once native to the far south, this invasive species migrated north over the course of decades, adjusting as it went to new climates and temperatures. It found damp woodlands and swamps most hospitable and made them its home, making use of the much and moss found there as blankets during its winter hiberation. The arachas hides its unprotected, sack - like abdomen under a covering of hollow tree - trunks worn on its back. At first glance, a stationary arachas often looks like a part of the forest undergrowth, a fact it uses to deadly advantage when hunting. It usually begins a battle by spitting venom, then tries to grab its prey with prehensile feelers in order to drag it within reach of its crushing pincers.",
    loot: "Arachas Eyes, Chitinous Shell, Arachas Venom, and Lesser Red Mutagen",
    location: null,
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "arachas.png"
  },
  {
    name: "Arachnomorphs",
    type: "Insectoids",
    desc: "A similar saying could gain ground in our land concerning arachnomorphs and everything unable to flee them - meaning most every creature in the world. True, the tillers of the earth and fellers of trees need not fear them in their daily labors, for arachnomorphs, as distant, post-Conjunction cousins of common spiders, strongly prefer deep, dark caves and unfrequented sodden swamps. Anyone who does come across them, however, had best hope his conscience is clear and his worldly affairs are in order, for his life shall soon end, as not even the fastest man in the world can outrun them and only a few witchers can hope to slay them. Even worse are the more aggressive and dangerous kind known as arachnomorph colossi, which are capable of devouring an entire ox in seconds.",
    loot: "Chitinous Shell, Lesser Blue Mutagen, Lesser Green Mutagen, Monster Blood, Monster Hair, Monster Heart, Monster Saliva, Monster Tooth, and Venom Extract",
    location: null,
    weakness: "Aard, Axii, and Insectoid Oil",
    image: "arachnomorphs.png"
  },
  {
    name: "Armored Arachasae",
    type: "Insectoids",
    desc: "An arachas' only weakness is its soft, sensitive abdomen. Some arachasae hide this under hollow tree stumps, while other, \"armored\" varieties exist which have grown a thick carapace that covers all the more delicate parts of their bodies. An armored arachas is a true behemoth. It uses its enormous mass to knock over and trample its victims then devours their crushed remains. Like all arachasae, it is highly venomous, and this Golden Oriole should always be consumed before fighting it. It is also worthwhile to stock up on healing potions and crossbow bolts before setting out, for this arachas' thick plating can withstand a great deal of damage, making battles with it a long and exhausting affair.",
    loot: "Arachas Eyes, Chitinous Shell, and Arachas Venom",
    location: "Novigrad, and Skellige",
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "ArmoredAra.png"
  },
  {
    name: "Endrega Drones",
    type: "Insectoids",
    desc: "Endrega males - called 'drones' - are gluttonous creatures whose only aim in life is to eat, fight and reproduce. Yet when venturing outside their nests, these aggressive hunters attack any and every creature they come across. Endrega drones live but brief lives, the culmination of which comes in the autumn when they fertilize the queen. They pass the time leading to that moment protecting the colony's territory. Weaker drones die in these battles, while the largest and strongest survive. These elect ndividuals' genes are passed down to the next generation of endregas, while they themselves are killed after fertilization takes place and their bodies used to feed the hive during the long winter months. Drones are easy to identify thanks to their distinctive, cone - shaped abdomens. Unlike other endregas they can attack from a distance, sending out volleys of poisoned quills. As with all of their kind, bleeding has no effect on them and insectoid oil does them great harm.",
    loot: "Chitinous Shell, Endrega Armor Plates, and Lesser Red Mutagen",
    location: "Novigrad, Skellige, and Toussaint",
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "drones.png"
  },
  {
    name: "Endrega Warriors",
    type: "Insectoids",
    desc: "Endless waves of endrega workers are enough to overcome most attackers, but when confronting more dangerous foes, endrega colonies unleash their larger, stronger members - the so-called warriors. This caste lives only to fight, and gets ample opportunity to do so while defending the colony's borders or conquering new territory. An endrega warrior's main weapon is its long tail, which is tipped with a club-like growth and spiked with venomous quils. Powerful abdominal muscles allow it to swing this tail with enough force to kill most lesser opponents in one blow. Endrega warriors also use their mass and strength as a weapon by charging their opponents in an attempted to knock them over. As invertebrates with sectioned carapaces, endrega warriors do not bleed profusely, yet recoil in great pain when hit with a blade coated in insectoid oil.",
    loot: "Chitinous Shell, Endrega Armor Plates, Endrega Heart, Lesser Blue Mutagen, Lesser Green Mutagen, and Venom Extract",
    location: "Velen, and Skellige",
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "warrior.png"
  },
  {
    name: "Endrega Workers",
    type: "Insectoids",
    desc: "Workers are the most numerous, and thus the most frequently encountered, caste of endrega. Within the colony their duty lies in building nests and cocoons, acquiring food and caring for eggs and larvae. When threatened they will summon warriors to aid them, yet if forced to defend themselves they will - and do so surprisingly well. Endrega workers are most often found traveling in groups of half - dozen or more members. They move slowly, yet when attacking, they are capable of covering the distance to their victim in the blink of an eye. Like all of their kind, endrega workers are highly venomous. Their bite is toxic, as are any wounds dealt by the bony growths on the ends of their limbs. They can also spew acid to great effect from a distance of several paces. Their usual tactic is to surround their enemy and attack him from several sides at once. Like all insectoids they do not suffer particularly from bleeding, yet are caused great harm by insectoid oil.",
    loot: "Venom Extract, Endrega Embryo, Endrega Heart, Lesser Blue Mutagen, Lesser Green Mutagen, Chitinous Shell, and Monster Saliva",
    location: "Velen, and Skellige",
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "worker.png"
  },
  {
    name: "Giant Centipede",
    type: "Insectoids",
    desc: "Giant centipedes are enormous, insect-like monsters which can be found in many places in the world, but are particularly common in the lands (or more precisely, under the lands) of Toussaint. There they often dwell in close comity with shaelmaars, for a sort of monstrous symbiosis has developed between them: giant centipedes feed on the small creatures which eat Shaelmaar dung. Hard chitinous armor covers nearly the entire body of a giant centipede. Sticking out from under this carapace are rows of hooked limbs. Giant centipedes are able to burrow into the ground with shocking speed, only to then appear back on the surface in another place. Once they select a target, they will circle it determinedly, trying to get close enough to deliver a blow. They attack primarily with their powerful mandibles, but they also possess glands allowing them to spew acid. The greatest obstacle when fighting giant centipedes is their thick armor, which deflects most blows not only from weapons, but also from magical means - such as those dealt by simple spells or witcher Signs. When attacked with a weapon, they will often parry the strike, then quickly reply with their own forceful counter. Thus the best method for fighting them is to chatch them in an Yrden trap, keeping them from protecting themselves with their armor or burrowing into the ground.",
    loot: "Giant Centipede Discharge, Giant Centipede Mandible, and Monster Blood",
    location: "Toussaint",
    weakness: "Insectoid Oil, and Yrden",
    image: "GiantCentipede.png"
  },
  {
    name: "Harrisi",
    type: "Insectoids",
    desc: "Velen's woods and bogs brim with monsters. This fact is well known, and thus when the war drove refugees into this hostile land, certain of their number thought to avoid the dangers of the lowlands by hiding in an abandoned mine. They were in for an unfortunate surprise. The shaft they chose for their sanctuary was inhabited by a poisonous arachas - a merciless and bloodthirsty monster. The witcher knew he was in for a tough fight. The arachas had dwelled in the mine for years and had grown large and particularly strong and resilient in that time. Like other members of its vile species, it would be dangerous both at close quarters and at a distance. What's more, it was almost certainly venomous - he would need to imbibe Swallow or Golden Oriole (or both) before attacking if he was to stand a chance of surviving. As a small consolation, the witcher knew the monster would be vulnerable to his Signs - especially Igni, Aard and Yrden - as well as to the Northern Wind bomb. The witcher arrived at the cave too late to save the refugees - but he could still avenge their fate. He slew the powerful arachas and destroyed the eggs bearing its vile offspring.",
    loot: "Chitinous Shell, Arachas Eyes, Arachas Mutagen, Arachas Trophy, Arachas Venom, Rotting Flesh, and Mahakaman Trousers",
    location: null,
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "Harrisi.png"
  },
  {
    name: "Kikimore Warrior",
    type: "Insectoids",
    desc: "It is unknown how exactly it is kikimores communicate with each other. Autopsies are hampered by the high toxicity of their subjects. Scholars have established that kikimores do not seem to possess any detectable auricles. One amateur researcher, Count di Salvaress, put forth a theory in his treatise A Microscope Among Monsters suggesting kikimores have a highly developed since of smell and use airborne particles undetectable to humans to transmit information. This theory has yet to be proved or disproved. Kikimore warriors defend their nests from attackers. They attack somewhat slower than kikimore workers. They are able to spew streams of caustic venom a great distance and leap to attack. This venom is highly unique in that it reacts with a witcher's body to raise the level of his potion toxicity. They are covered with thick, hard armor which easily deflects blows from even the sharpest sword. Kikimore warriors are protected by swarms of workers which obey their orders until they are themselves eradicated. They are completely immune to the effects of the Axii Sign, but vulnerable to Igni, oils and bombs harming insectoids and blows dealt by a silver sword.",
    loot: "Kikimore Discharge",
    location: "Toussaint",
    weakness: "Insectoid Oil, White Honey, and Igni",
    image: "kikiWa.png"
  },
  {
    name: "Kikimore Worker",
    type: "Insectoids",
    desc: "Kikimores form colonies, making them similar to communal insects such as ants. A kikimore colony is ruled by a queen and organized into something of a social hierarchy. Kikimore workers take care of hunting food and bringing it back to the nest, while kikimore warriors defend the nest against attackers. A worker on its own can be easily killed by even a weak person or a child. It is rare indeed, however, to come across an isolated individual, for kikimore workers usual move in groups of a few to a dozen or so members. The only defense against a swarm of kikimores available to a normal person is to flee. And not even that is guaranteed to work. Kikimore workers listen to orders given by kikimore warriors. On command, a swarm of workers might begin burrowing tunnels near potential prey to allow for a surprise mass attack. Eliminate the warrior guiding a swarm, however, and the workers will disperse and cease digging. Kikimore workers are nimbler and quicker than warrriors. They show complete immunity to the Axii Sign, and when they dig tunnels, they are invulnerable to all the other Signs as well. Poison also does them no harm. A good method for fighting them is to use the Igni Sign as well as oils and bombs meant to damage insectoids.",
    loot: "Kikimore Discharge",
    location: "Toussaint",
    weakness: "Insectoid Oil, White Honey, and Igni",
    image: "kikiWo.png"
  },
  {
    name: "Pale Widows",
    type: "Insectoids",
    desc: "This rare variety of giant centipede dwells in underground lairs and owes its name to its unusual, pale white coloring. Like the more common giant centipede, its body is covered in hard chitinous armor, with numerous hooked limbs sticking out from underneath. Some scholars raise these creatures in laboratory conditions for the properties of their albumen, which makes an excellent base for the brewing of mutagenic potions.",
    loot: "Chitinous Shell, Giant Centipede Discharge, Giant Centipede Mandible, Monster Carapace, Monster Stomach, Red Mutagen, and Greater Red Mutagen",
    location: "Toussaint",
    weakness: "Insectoid Oil, and Yrden",
    image: "PaleWidow.png"
  },
  {
    name: "Sandcrabs",
    type: "Insectoids",
    desc: "Sandcrabs have well-developed carapaces, and two pairs of legs and a pair of wings, even though it is unknown whether the creatures are able to fly. A most eye-catching feature is the very long horn on their heads.",
    loot: "Sulfur, Rotting Flesh, Monster Blood, Monster Bone, Monster Saliva, and Monster Brain",
    location: "Ddiddiwedht Desert",
    weakness: "Samum, Northern Wind, Dancing Star, and Grapeshot",
    image: "sandcrab.jpg"
  },
  {
    name: "Venomous Arachasae",
    type: "Insectoids",
    desc: "Though all arachasae are highly venomous, this breed produces an especially strong toxin. A few drops are enough to kill a grown man - unless that man is a witcher, whose mutations will neutralize small amounts of this venom. Large quantities, however, will kill anything they touch, with mutations only prolonging an inevitable and painful death in such instances. Venomous arachasae produce colossal amounts of this toxin and deploy it during combat in many ways. Before striking a venomous arachas will cover its pincers and teeth with a thick coating of the deadly liquid. It will then squirt the venom at its opponent to weaken it, and once locked in direct combat, will continue spraying the noxious ooze all around itself, meaning every breath brings its victim closer to death. Like other members of this species, venomous arachasae use prehensile feelers to grab and immobilize their prey. When attempting to fight such a creature a witcher should drink Golden Oriole, which will reduce his body's vulnerability to poison, and then attack from a safe distance with crossbow or bombs before dealing the finishing blows with a silver sword enhanced with a coating of insectoid oil.",
    loot: "Arachas Eyes, Chitinous Shell, and Arachas Venom",
    location: "Novigrad, and Skellige",
    weakness: "Golden Oriole, and Insectoid Oil",
    image: "venochasae.png"
  },
  {
    name: "Abaya",
    type: "Necrophages",
    desc: "The bay below Kaer Trolde had a pernicious reputation. At times fishermen who chose to cast their nets in its waters would never come home again. Something would drag oarsmen off their longships or knock the ships themselves over. The locals blamed this on sea devils - the Skelligers' name for drowners. The truth, however, proved far worse. A water hag had made her lair in the caves beneath the cliffs of Kjerag. An old and experienced water hag. With powerful claws able to demolish any attempt to block or parry. And the ability to blind opponents from a distance, then strike with a lightning - quick counterattack. Signs would be needed to best her - Yrden, to slow her, and Quen, to protect from her blows. Needed most of all, however, would be a great deal of luck. The witcher, though, never was one to count on luck alone. Instead, he pulled a few tricks from up his sleeve to even the odds. By masking his scent, he managed to catch the monster by surprise... and slay it.",
    loot: "Water Hag Mutagen, Water Hag Tooth, and Water Hag Trophy",
    location: "Underwater cave off Kaer Trolde Harbor",
    weakness: "Northern Wind, Necrophage Oil, Quen, and Igni",
    image: "abaya.png"
  },
  {
    name: "Elghoul",
    type: "Necrophages",
    desc: "Alghouls differ from normal ghouls in size, strength, coloring and, most importantly, intelligence. Whereas ghouls and graveirs are primitive creatures unfit to plan even the simplest ambush, alghouls and their kindred (such as cemetaurs) are capable of forethought, and are thus much more dangerous. Ghouls seem to possess wits enough to at least know a brighter mind when they see it, and so let alghouls and cemetaurs lead their packs. A pack so led will terrorize all in its path, attacking not only lone travelers but also caravans and even farmsteads. When encountering such a pack the alghoul should be eliminated as a first priority, leaving the other beasts for once their leader is gone. One be particularly careful when fighting alghouls around dusk and at night, when they fight with doubled strength. During combat alghouls and cemetaurs try risky maneuvers aimed at knocking their opponents to the ground so the others can finish the job by tearing them to shreds. Like a normal ghoul, an injured alghoul can fall into a frenzy and attack with blind fury. An experienced witcher knows to get out of its way on such occasions and strike from behind, while for an inexperienced witcher, such a turn of events often marks the end of his Path.",
    loot: "Alghoul Bone Marrow, Alghoul Claw, and Alghoul Mutagen",
    location: "Battlefields and any location where a large number of corpses can be found in shallow graves or left out to rot.",
    weakness: "Necrophage Oil, and Axii",
    image: "alghoul.png"
  },
  {
    name: "Drowners",
    type: "Necrophages",
    desc: "A drowner resembles a corpse dredged from the bottom of a pond. It is sickly blue or green in color, with slime and sludge oozing out of every pore and the acrid stench of rot wafting off of it. That is why it is often thought drowners - along with their more dangerous cousins: vodniks, mucknixers and drowned dead - arise from the bodies of those who drown in shallow water: lost travelers falling into bogs, children who swim too far from the shore or, in the case of vodniks, inebriated peasants who stumble off narrow swamp trails. Like so many other beliefs about monsters, this one is false. While drowners do look like humans from a distance, witchers, who have the dubious pleasure of examining them from close quarters, have reported the numerous ways in which their anatomy differs from our own. Their scaly skin, gills and dorsal fins suggest drowners and their like are an entirely foreign species. The adaptations mentioned below make drowners excellent swimmers, well-suited to the muddy waters of the ponds and lakes in which they dwell. They often cluster near human settlements, which are for them an excellent source of food. Cowardly creatures by nature, they usually stick to eating scraps they dig out of rubbish piles and animal carcasses. Yet if a lone traveler or careless fisherman strays into their territory, they turn from scavengers to fearsome predators. They can attack with lightning speed, taking their victim by surprise and pulling him into the water to drown. If not particularly hungry at the moment, they will keep their prey under the water for a few days, aging it until it grows deliciously tender and rotten. Drowners are particularly active at dusk and during the night, especially if the rain is falling - at such times they will even leave their watery homes and venture inland.",
    loot: "Drowner Brain, Drowner Tongue, Monster Blood, Monster Heart, Monster Hair, Monster Saliva, Monster Tooth, and Water Essence",
    location: "Novigrad, Skellige, Toussaint, Velen, and White Orchard",
    weakness: "Necrophage Oil, and Igni",
    image: "drowner.png"
  },
  {
    name: "Drowned Dead",
    type: "Necrophages",
    desc: "Particularly strong and dangerous drowners are known as the drowned dead. Simple people see no difference between the drowner and the drowned dead - encountering either of them is equally deadly. We might suppose, though, that the most gloomy legends concern the drowned dead rather than drowners.",
    loot: null,
    location: "Kaer Morhen Valley, Novigrad, Skellige, and Velen",
    weakness: "Igni",
    image: "Drowdead.png"
  },
  {
    name: "Foglet",
    type: "Necrophages",
    desc: "Fog is the traveler's foe. In the forest, it can make one lose one's way, at sea, it can send one sailing into the rocks. Yet such dangers are nothing compared to the monsters known as foglets which sometimes lurk within it. These creatures have powerful arms and claws like Zerrikanian kinjals, yet what makes them truly dangerous is their mastery of deception, beguilement and disorientation. Many times they need not attack at all, instead simply driving their prey to madness or into boggy marshlands, after which they wait patiently for it to drown in the muddy waters.",
    loot: "Foglet Teeth, Foglet Mutagen, and Lesser Blue Mutagen.",
    location: "Isle of Mists, Kaer Morhen, and Velen",
    weakness: "Moon Dust, Necrophage Oil, and Quen",
    image: "foglet.png"
  },
  {
    name: "Ghoul",
    type: "Necrophages",
    desc: "Ghouls and graveirs are hard to describe. In part, they resemble humans - yet on the whole, they are the utter negation of all that is human. Though they have arms and legs like men, they walk on all fours like dogs or badgers. Though they have eerily familiar faces, one searches them in vain for any sign of sentiment, reason or even a spark of consciousness. They are driven by one thing and one thing only: an insatiable craving for human flesh. Ghouls and their more dangerous cousins, graveirs, usually feed in small groups, at times led by an alghoul. Since they delight most in the taste of fresh carcasses, they appear wherever newly - dug graves are to be found: cemeteries, crypts, catacombs and battlefields. Whenever the opportunity arises they hunt the living as well, especially when they have strength in numbers. In a one - on - one fight with a trained witcher, a ghoul poses little threat, but one must remember that wounded individuals can erupt in a mad frenzy. At such times they attack fiercely, paying no heed to their own safety and brushing off all wounds. One must likewise bear in mind that ghouls and graveirs are particular dangerous around dusk and at night.",
    loot: "Ghoul's Blood, Monster Blood, Monster Claw, Monster Eye, Monster Liver, Monster Saliva, Monster Tongue, Monster Tooth, and Venom Extract",
    location: "Anywhere near corpses",
    weakness: "Necrophage Oil",
    image: "ghoul.png"
  },
  {
    name: "Grave Hag",
    type: "Necrophages",
    desc: "Few monsters' names fit as well as the grave hags'. As one might guess, these creatures resemble aged, deformed women and loiter near graveyards and battlefields. Grave hags feed on human corpses and in particular on the rotten marrow which they slurp from human bones using their long, prehensile tongues. Once a hag has devoured all corpses within reach, she turns to killing men and burying them in the cemetery as she waits for them to decompose.",
    loot: "Grave Hag's Ear, and Grave Hag Mutagen",
    location: "Velen, and Skellige",
    weakness: "Black Blood, Necrophage Oil, Yrden, and Quen",
    image: "Grags.png"
  },
  {
    name: "Ignis Fatuus",
    type: "Necrophages",
    desc: "The monster haunting the peat bogs of Velen turned out to be an ancient foglet. These are exceptionally long-lived creatures - some have even dwelt on this earth for over two hundred years, growing stronger and stronger all the while. Blows dealt by foglets of such an age carry so much power blocking them is out of the question. These foglets possess the ability to move extremely quickly, and not even Yrden can slow them down. Furthermore, they can meld completely into the mist, then suddenly rematerialize to strike from behind. Wearing heavy armor or making good use of the Quen Sign is highly recommended. This ancient foglet proved particularly adept in the art of forming illusions. Only a professional monster slayer skilled with Signs and swords could best such a foe. Luckily, Geralt fit that description.",
    loot: "Foglet Teeth, Foglet Mutagen, Lesser Blue Mutagen, and Foglet Trophy",
    location: "Cave in Velen",
    weakness: "Moon Dust, Necrophage Oil, and Quen",
    image: "Ignituus.png"
  },
  {
    name: "Mourntart",
    type: "Necrophages",
    desc: "Most grave hags rarely attack humans, preferring instead to feed on the rotten remains they dig out of graves. Yet some individuals grow bold over the years and begin sneaking into huts to steal children and kill the elderly. Just such a monster was tormenting the inhabitants of Lindenvale. The witcher knew this grave hag would put up a fierce fight. He would have to watch out for her powerful claws, capable of smashing through any block or parry, and her long, venomous tongue. He also realized her attacks would be so quick not even his mutated reflexes would be able to keep pace - meaning only judicious use of the Yrden Sign would all[sic] him to survive and conquer. The outcome of the fight was not hard to predict. The grave hag perished in the very graveyard which had heretofore served as her feeding grounds, and her body was dumped in a grave she had dug with her own claws.",
    loot: "Grave Hag Trophy, Grave Hag Mutagen, Grave Hag's Ear, Monster Bone, Monster Claw, Monster Tongue, and Addan Deith",
    location: "Lindenvale",
    weakness: "Black Blood, Necrophage Oil, Yrden, and Quen",
    image: "Mourntart.png"
  },
  {
    name: "Rotfiend",
    type: "Necrophages",
    desc: "Rotfiends resemble decomposing human bodies that have been stripped of their skin. Their presence is given away by the overwhelming stench of the rot which gives them their name. Devourers are a particularly dangerous kind of rotfiend marked by an insatiable appetite for human flesh. Rotfiends and devourers were once rarities, but in the present age of constant warfare and violence they have become a veritable plague, particularly around battlefields and in disease - stricken areas. Though they feed mainly on carrion, they will at times attack the living. They usually feed in large groups and thus present a danger to lone travelers - especially considering their speed, which is more than a match for a horse at full gallop. The rotfiend's decomposing body is filled with gasses which are poisonous even to those who, like witchers, are immune to most other toxins. These emissions are also highly flammable, meaning any spark, not to mention a carelessly-cast Igni sign, can lead to an explosion. This is particularly likely after a rotfiend dies, when its body thrashes around in uncontrollable tremors. Rotfiends and devourers feed in the twilight hours and at night, when they become much more dangerous than during the day.",
    loot: "Rotfiend Blood, Necrophage Hide, Monster Brain, Monster Bone, Monster Heart, Monster Liver, Monster Saliva, Monster Tongue, and Monster Tooth",
    location: "Velen, White Orchard, Skellige, and Toussaint",
    weakness: "Necrophage Oil",
    image: "rotfiend.png"
  },
  {
    name: "Scurvers",
    type: "Necrophages",
    desc: "Scurvers are rotfiends' larger cousins. The bodies of these hideous, vaguely humanoid creatures are covered with rotten scraps of flesh, under which lurk even more rotten muscles stretched around a strong, flexible skeleton. Scurvers, which feed on old, rotting corpses, prefer to make their hunting grounds in abandoned torture sites, forgotten graveyards and old battlefields. They are very aggressive and, though they feed on corpses, if they come across a living person they are likely to attack. Thus when wandering near any of the above-mentioned places, one must be especially cautious. Scurvers usually feed underground, but sometimes, when they catch the scent of a human, they crawl to the surface in a matter of seconds and attack their potential prey. While fighting them one cannot afford to forget about their special boney spines, razor - sharp protuberances sticking out from their skeletons. When a scurver is near death, the gasses and enzymes gathered within its body cause it to explode, flinging these spines out at great speed, turning them into one last deadly weapon in their arsenal. To protect oneself against damage from these spines, one should make prodigious use of the Quen Sign.",
    loot: null,
    location: "Toussaint",
    weakness: "Necrophage Oil",
    image: "scurvers.png"
  },
  {
    name: "Spotted Wight",
    type: "Necrophages",
    desc: "Spotted wights were a subspecies of wight which the witchers drove to extinction. They were larger than their unspotted kin and owed their names to their numerous blotches and effusions. Spotted wights would most often dwell in derelict cemeteries and empty wildernesses, yet at times took to living in abandoned human domiciles. There they would indulge in their greatest passion: creating brews from their own emissions. When not disturbed, spotted wights would not act aggressively. If threatened, however, they became very dangerous indeed. In the colder months or when faced with an unseasonable chill, they would slip into a state of lethargy, making them easy targets. Even during their active periods, it is said the witchers found a surefire way of besting them, based around careful casting of the Yrden Sign - or at least, so claims witcher lore... Whenever on the one hand witchers swear they have driven a certain species of monster into extinction and one the other someone claims to have seen a member of that species walking around in apparent health, most likely we are dealing with a curse. This rule of thumb showed its worth with the spotted wight from the Trastamara estate. It turned out this creature was in fact a woman transformed into a monster by a curse many years prior, as punishment for refusing food and shelter to a wandering beggar.",
    loot: "Wight Ear, Wight Hair, Wight Saliva Gland, Wight Trophy, Fork, Disgusting Wight Key",
    location: "Toussaint",
    weakness: "Necrophage Oil, Igni, and Yrden",
    image: "spotted.png"
  },
  {
    name: "Water Hag",
    type: "Necrophages",
    desc: "Some tales mention water hags and swamp bints masquerading as lost old women to lure travelers back to the rickety shacks they build in the wetlands. In truth, only a blind man, or a sighted man blinded with drink, could mistake the rank sludge and rotting carrion of a water hag's den for a cozy cottage, and the hideous hag herself for an innocent grandmother. Their wrinkled, wart-covered bodies stand nearly two yards tall, with skin the color of a long-dead cadaver and stinking of muck and fish. Bony growths two spans long stick out from their backs, with hair like a tangle of seaweed and claws that would make a werewolf proud completing the picture.",
    loot: "Monster Saliva, Monster Tongue, Venom Extract, Water Essence, Water Hag Mutagen, Water Hag Tooth",
    location: "Velen, White Orchard, and Skellige",
    weakness: "Northern Wind, Necrophage Oil, Quen, and Igni",
    image: "WaterHag.png"
  },
  {
    name: "Wights",
    type: "Necrophages",
    desc: "Though wights are ghastly and threatening in appearance, one should not approach them with sword drawn or attack them unprovoked. Left alone, they present no serious danger to anyone and are far more interested in mixing noxious brews in cauldrons than in fighting. This species mainly lives around ancient burial sites, though they have also been spotted near more recently-founded cemeteries and wherever mass graves can be found. Wights spend the winter months in a state of lethargy very similar to human sleep. They live strictly solitary lives-- in fact, it is practically unheard of for these creatures to appear in groups. Yet when they fear their territory is threatened(and it is enough for one to step foot in a wight's territory for it to feel threatened), wights transform into dangerous foes and even abandon their solitary ways to summon other monsters to their aid. It is a certainty that if a wight finds itself in danger, it will immediately spew out an ectoplasmic solution which near instantaneously transforms into barghests. These beasts obey the wight and attack anyone it deems a foe. If one of them is killed, the wight tries to replace it at once. The best strategy when fighting such a wight is to take out the monsters guarding it with the Axii sign before attacking the wight itself. Wights are resistant to poison, but vulnerable to silver.",
    loot: "Monster Tongue, Wight Hair, Wight Ear, Greater Triglav Runestone, Green Mutagen",
    location: "Toussaint",
    weakness: "Necrophage Oil, and Axii",
    image: "Wights.png"
  },
  {
    name: "Cloud Giant",
    type: "Ogroids",
    desc: "The Cloud Giant is most likely a degenerated illusory being. He is an inhabitant of the castle in the sky in the Land of a Thousand Fables. This land was abandoned and left untended for years, during which time it began to rot, fester and degrade. The Cloud Giant was most likely meant to be a pleasant - natured strongman who would carry the duke's young daughters on his shoulders and never grow tired. When he became degenerated and overgrown, however, he turned into a dangerous monster. After Jack stole his goose that laid golden eggs, the Cloud Giant decided in the future anyone who climbed onto his cloud would be tossed off, without a word of warning.",
    loot: "Infused Shards, Cyclop's Eye, Orens, and Greater Red Mutagen",
    location: "Land of a thousand Fables Cloud Giant's Castle",
    weakness: "Ogroid Oil, Igni, and Dancing Star",
    image: "CloudGiant.png"
  },
  {
    name: "Cyclopses",
    type: "Ogroids",
    desc: "Cyclopses can easily be recognized by the single eye located in the center of their foreheads. If for some reason that is not visible, other tell-tale signs are their enormous size, incredible strength and a seething hatred for all humans.",
    loot: "Cyclop's Eye, Old Bear Hide, Infused Shard, Monster Brain, Monster Blood, Monster Bone, Monster Ear, Monster Hair, Monster Hide, Monster Hear, Monster Liver,Monster Saliva, Monster Tongue, Monster Tooth, and Orens",
    location: "Kaer Morhen, Skellige, and Velen",
    weakness: "Ogroid Oil, Quen, and Axii",
    image: "Cyclopses.png"
  },
  {
    name: "Golyat",
    type: "Ogroids",
    desc: "According to legend, Golyat had once been a knight who violated his vows, for which he was punished by the Lady of the Lake. Transformed into a giant, he fled into the mountains and would only descend into the inhabited lowlands when hunger forced him to it. There's no knowing how much truth lies in that legend, yet it is incontrovertible fact that this dangerous giant gobbled up shepherds and sheep alike, and was so widely feared, governesses used him to scare children into eating their vegetables. Though he came across as a wild, unthinking beast, Golyat used simple tools and any item could turn into a deadly weapon in his powerful hands. When fighting Geralt, Golyat wielded a millstone, making his every blow truly crushing. Luckily, Geralt already had some experience slaying giants and made quick work of Golyat as well, with the much appreciated help of three knights - Milton de Peyrac Peyran, Palmerin de Launfal and Guillaume de Launfal.",
    loot: "Golyat Trophy, Dahlia, and Greater Red Mutagen",
    location: "Dulcinea Windmill in Toussaint",
    weakness: "Ogroid Oil, and Quen",
    image: "Golyat.png"
  },
  {
    name: "Hagubman",
    type: "Ogroids",
    desc: "Your average nekker is cowardly and weak and only ever attacks in groups, even then only when the group greatly outnumbers its opponents. Yet at times there will appear among them an individual who towers over the rest in terms of strength, stamina and cunning. Such nekkers are usually called warriors, though that name is misleading. Warriors fight with honor, face to face. These overgrown nekkers act more like assassins - they strike by surprise, from hiding, in the back, or when their opponent exposes himself while attacking. Luckily, like other nekkers warriors are vulnerable to all the Signs, and their blows can be easily parried or countered. Such a monster lived near the village of Larvik on Hindarsfjall - and not even the strongest of islanders were capable of slaying it. A witcher though... A witcher's another story.",
    loot: "Nekker Claw, Nekker Heart, Nekker Warrio's Liver, Nekker Warrior Mutagen, Nekker Warrior Trophy, Devine, Venom Extract",
    location: "Near the village of Larvik on Hindarsfjall",
    weakness: "Northern Wind and Ogroid Oil",
    image: "Hagubman.png"
  },
  {
    name: "Ice Giant",
    type: "Ogroids",
    desc: "This powerful, primeval monster is quite possibly the last of its race. The Ice Giant resembles a man in many respects, but is blue as frost and taller than a tree. Though it seems capable of reason, all attempts to communicate with it to date have ended the same way - in a quick and painful death.",
    loot: "Elemental Essence, Monster Brain, and Monster Eye",
    location: "Skellige",
    weakness: "Ogroid Oil and Quen",
    image: "IceGiant.png"
  },
  {
    name: "Ice Trolls",
    type: "Ogroids",
    desc: "Climbing to the top of snow-covered peaks is never a safe endeavor. One can slip and fall into a ravine, be buried in an avalanche - or stumble across ice trolls. Unlike the rock trolls found at lower altitudes, these permafrost-dwelling monsters treat every man they encounter as a possible ingredient for a tasty meal. Luckily ice trolls live atop high mountain ridges so inaccessible they rarely encounter humans, and some suppose this is why they have not mastered the basics of Common Speech. Others claim their harsh mountain home has stripped them of an ability they once possessed, for in a land of never - ending cold there is no room for mercy or understanding. Ice trolls are crueler than their rocky kin. Though they use similar tactics in battle - tossing stones and swinging with their mighty fists - they are heartier and stronger than rock trolls and thus more dangerous. Like rock trolls, their backs are covered in thick protective armor, meaning one should never strike them from the rear. Meanwhile their mass means that the Aard Sign cannot move them. Lastly, never think of attacking them during a blizzard. At such times they draw power from the surrounding cold and fight with increased strength.",
    loot: "Troll Hide, Troll Mutagen, and Elemental Essence",
    location: "Skellige",
    weakness: "Ogroid Oil and Quen",
    image: "icetroll.png"
  },
  {
    name: "Nekkers",
    type: "Ogroids",
    desc: "A lone nekker is harmless. Five are dangerous. Ten can kill even a veteran monster slayer. Particularly troublesome are the larger, stronger individuals known as warriors, as well as the rare breed of nekkers known as phoocas. Nekkers and phoocas live in the dark woods that grow in damp, mist - filled valleys, in colonies of one to several dozen individuals. They dig deep burrows for lairs and connect them with a network of narrow tunnels. Using these passageways they are able to move at great speed within and around their colonies. Nekkers always attack in groups and by surprise. They try to surround their prey as quickly as possible, cutting off all escape routes. Luckily their attack is for the most part disorganized, for nekkers are not gifted with great courage and individual nekkers will often hesitate before overcoming their fear and striking. When fighting them one can use this moment of hesitation to kill the braver individuals before finishing off those who remain in the back.",
    loot: "Nekker Blood, Nekker Claw, Nekker Eyes, Nekker Heart, Lesser Blue Mutagen, and Lesser Green Mutagen",
    location: "Velen, White Orchard, Skellige, and Toussaint",
    weakness: "Northern Wind, and Ogroid Oil",
    image: "Nekker.png"
  },
  {
    name: "Rock Troll",
    type: "Ogroids",
    desc: "If while hiking high in the mountains you come across a walking stone, do not think your eyes deceive you. Instead, draw your sword - for before you stands a rock troll. True, not every encounter with these creatures ends in a fight - while not particularly intelligent, trolls are capable of reason - but it is better to prepare for the worst. Otherwise, your hike might end not on the summit, but in their stew. Trolls are able to use fire and simple tools, and some of them have even mastered the basics of Common Speech. Though linguistic nuances such as conjugations and declinations escape them, they are extremely fond of riddles, rhymes and all sorts of wordplay, a fact a witcher in possession of a bit of wit can use to his advantage. If a fight proves inevitable, one must watch out for the stones these trolls throw with great strength and shocking precision. Their powerful, heavy fists also present a danger, for they can buckle even the sturdiest breastplate or cuirass. Since their backs are covered in a layer of rocky growth, blows delivered from behind will not do them much damage. They must thus be fought directly, standing face to face - and preferably armed with a sword covered in a fresh coating of ogroid oil.",
    loot: "Cave Troll Liver, Troll Hide, Troll Mutagen, and Monster Heart",
    location: "Novigrad, Kaer Morhen Valley, Skellige, and Velen",
    weakness: "Ogroid Oil, and Quen",
    image: "RockTroll.png"
  },
  {
    name: "Wham-a-Wham",
    type: "Ogroids",
    desc: "Rock trolls come across as dim-witted, ponderous, slow - stupid, to be frank. It's easy to dismiss them - and even easier to enrage them. When this happens, one's best bet is to run as fast as possible, for an angered rock troll is as deadly as a thundering landslide. The truth held in the case of the massive rock troll known as Wham-a-Wham. His every blow struck like a battering ram - meaning one needed either avoid them entirely or protect oneself with the Quen Sign. Its hard skin meant it was near invulnerable to sword strikes - especially those dealt from behind, where its rock armor is the thickest. The only hope for defeating it lay in taking advantage of its typical troll slowness - especially if further exploited using the Yrden Sign. A certain set of Skellige miners learned first - hand just how dangerous rock trolls can be. Ignoring all warnings, they started to mine a rich silver vein in the cave which Wham - a - Wham called home. They died soon thereafter - crushed or torn to rough bits. This time, a troll's killings were a justified act of self-defense - after all, the witcher reasoned, every troll's cave is his castle.",
    loot: "Troll Hide, Troll Mutagen, and Cave Troll Trophy",
    location: "Cave near Blandare",
    weakness: "Ogroid Oil, and Quen",
    image: "wham.png"
  },
  {
    name: "Chort",
    type: "Relicts",
    desc: "Chorts are the somewhat smaller kin of fiends and bumbakvetches. Yet any witcher who thinks their diminutive stature means they present no danger commits a grave error - the kind that can end his career permanently. These denizens of dark and ancient woods are some of the most dangerous monsters known to man. Legends often mistake chorts for sylvans, ascribing to them the ability to speak, stand on two legs, gobble up cabbage, play pranks and work mischief around the household. The arrival of a true chort in a region soon puts an end to such tales. The creatures do not speak, at best communicating with each other through grunts, snorts and moans. They get about on four legs and as for their \"mischief\"... they destroy farmsteads, devouring anything that can be devoured, including cabbage, if such is available, but also extending to poultry, pork, the family dog and then the family itself. Chorts fight with little finesse, running straight towards their opponent and trying to knock him to the ground with the force of their charge. After downing their foe they bite, kick and strike with their claw - tipped paws. Due to their size and four-legged posture, they are mostly unperturbed by the force of the Aard Sign, and the regenerative powers of their body allow any wounds they receive to heal at a rapid pace.",
    loot: "Chort Hide, Raw Meat, and Chort Mutagen",
    location: "Velen, Skellige, and Kaer Morhen",
    weakness: "Devil's Puffball and Relict Oil",
    image: "chort.png"
  },
  {
    name: "Crones",
    type: "Relicts",
    desc: "The isolated corners of our world harbor creatures older than humans, older than academies and mages, older even than elves and dwarves. The Crones of Crookback Bog are such creatures. No one knows their true names, nor what breed of monstrosity they in fact are. Common folk have given these three sisters the names Weavess, Brewess and Whispess, and call the threesome \"The Ladies of the Wood\" or simply \"The Good Ladies.\" The Crones act as the true sovereigns of Velen, whose inhabitants they help survive through harsh times in return for unquestioning obedience. They wield powerful magic, but one different from that of mages. They draw power from water and earth and are bound to the land in which they live. The Crones can hear everything that happens in their woods, predict the future, twist the threads of human lives and bring blessings as well as curses. The Crones seem for all intents and purposes to be immortal. Magic elixirs keep them from aging and allow them to take the appearance of young women. These elixirs and their mystical ties to the swamps in which they live also give them supernatural strength and vitality.",
    loot: null,
    location: "Velen, Crookback Bog, and Bald Mountain",
    weakness: "Relict Oil and Quen",
    image: "crones.png"
  },
  {
    name: "Doppler",
    type: "Relicts",
    desc: "Dopplers, also known as vexlings or changelings, are beings able to take on the form of any humanoid or animal they please. This transformation is no mere illusion able to be shattered with a simple spell, but an authentic and complete metamorphosis. This means no protective amulets or witcher medallions will signal a doppler's presence - they emanate the same aura as the being whose form they have assumed. This, combined with their incredible intellect and cunning, would make dopplers supreme assassins or thieves - had not nature endowed them with generous and timid spirits which make them avoid the shedding of blood at all costs.",
    loot: "Doppler Mutagen",
    location: "Novigrad and Skellige",
    weakness: "Relict Oil",
    image: "doppler.png"
  },
  {
    name: "Fiend",
    type: "Relicts",
    desc: "Fiends are walking mountains of muscle capped with horned, tooth-filled heads. Like their rarer cousins, bumbakvetches, they live in thick forests, swamps and bogs. When possible they avoid humans, but when not possible, they kill them, and without much difficulty. Their size alone makes fiends and bumbakvetches extremely dangerous - one blow from their powerful paws can kill a knight along with it's fully armored mount. Their enormous heft also makes them invulnerable to Aard: even witchers specializing in the power of Signs could not move one even an inch. Furthermore, any wounds they receive heal at lightning speed. If that weren't trouble enough, fiends need not rely on their strength and stamina alone with fighting. They can also call on a more refined weapon: the third eye located in the center of their forehead, which they use to draw their prey into a state of hypnosis. During these times their victim does not see anything beyond this single burning eye - the last thing they see before their death. A fiend's only weakness is its fear of loud noises - bombs such as Samum or Devil's Puffball are thus quite effective when fighting this monster. Furthermore, a blade covered in relict oil can increase a witcher's chances of victory - or at least of walking away from the fight.",
    loot: "Fiend Mutagen, Fiend Trophy, Fiend's Eye, Fiend Dung, Fifth Essence, Lesser Blue Mutagen, Monster Bone, Monster Hair, and Raw Meat",
    location: "Velen and Skellige",
    weakness: "Samum, Devil's Puffball, and Relict Oil",
    image: "fiend.png"
  },
  {
    name: "Fugas",
    type: "Relicts",
    desc: "The devil Fugas held a very prestigious and responsible position during the Crones' sabbath: that of goon restricting access to the peak. He in no way resembled Torque, the irritating but harmless deovel Geralt and I had encountered many, many years prior. Fugas' size resembled that of a somewhat overgrown troll, and he likewise displayed a troll's lack of subtlety. There was not a jot of mischievous puck or cunning verbal trickster about this devil. Instead, he carried out his task with the commitment and professionalism of a Novigrad bouncer. Trying to stop Geralt, though, turned out to be Fugas' dumbest and final idea, ending both his life and his flourishing career in the Crones' employ.",
    loot: null,
    location: null,
    weakness: "Aard",
    image: "fugas.png"
  },
  {
    name: "Godling",
    type: "Relicts",
    desc: "Godlings (sometimes mistaken for lutin) are woodland creatures dwelling in burrows and moss-covered hollow stumps on the outskirts of human settlements. They are similar to children in behavior and appearance, and, like children, delight in mischief. Godlings are deeply rooted in their home territory and perform acts of care and guardianship to those dwelling near their burrows. They watch over people as well as animals, but, shy creatures by nature, they try to do so while remaining unseen. Godlings are drawn to joy and innocence, and so delight in the company of children and usually only show themselves to the young. These hard - working and clever creatures gladly perform small services for those in their care, asking only for respect and payment in the form of food or cast - off tools in return. They are easily offended by churlish, ungrateful or simply rude behavior. Godlings also treasure their peace and quiet. When the village a godling watches over becomes too populous or its inhabitants forget the old ways, it will abandon its burrow for good and walk off to destinations unknown.",
    loot: null,
    location: null,
    weakness: "Igni",
    image: "godling.png"
  },
  {
    name: "Grottore",
    type: "Relicts",
    desc: "No one knows exactly when the spriggan called \"Grottore\" first made its home in the caves at the foot of Mount Gorgon. Spriggans usually prefer isolated backwoods and rarely make dens in caverns. Yet Grottore seemed to have taken a liking to \"grottos,\" giving rise to its nickname. The monster was quite well - known among Beauclair knights, who often talked of it as a potential source of great glory. None were particularly eager to actually engage the monster in combat, however - none, that is, except for the young Knight François Grottore proved to be a demanding foe. It possessed the ability to teleport, meaning it would appear directly in front of Geralt and mount a surprise attack, dealing strong blows that were impossible to parry. It used primeval magic to control tree roots, which would shoot from the ground on its command, dealing significant damage to any in their way. It was resistant to the Aard Sign, but vulnerable to burning. Blows from a silver sword would do it harm, despite the bark - like hide covering it like armor.",
    loot: "Grottore Trophy, Fen'aeth, Greather Blue Mutagen, Leshen Resin, Fiber, Monster Bone, and Hardened Timber",
    location: "Toussaint",
    weakness: "Dimeritium Bomb, Relict Oil, and Igni",
    image: "grottore.png"
  },
  {
    name: "Howler",
    type: "Relicts",
    desc: "One is hard-pressed to name another area of our world more thoroughly riddled with monsters than Velen. There is on silver lining to this sad fact, however: the beasts living there must compete fiercely for hunting territory, meaning monsters often end up killing other monsters. An aggressive chort known as Howler went on just such a fratricidal rampage, tearing a pack of wolves to shreds before attacking and killing a fiend significantly larger than itself. Howler was a truly fearsome foe. Each one of its blows was enough to kill - only heavy armor or the Quen Sign could protect one from mortal damage. Particularly to be avoided was its charge - and whenever possible, the monster was best attacked from the side. Geralt slayed the Howler without much trouble, yet killing such a fierce fighter might very well have proved impossible, had not its previous conflicts with its monstrous kin weakened it considerably. The lesson, I suppose, is that when two monsters fight, a witcher wins.",
    loot: "Chort Trophy, Chort Mutagen, Chort Hide, and Azure Wrath",
    location: "South of Lindenvale",
    weakness: "Devil's Puffball and Relict Oil",
    image: "Howler.png"
  },
  {
    name: "Imp",
    type: "Relicts",
    desc: "The imp pestering the merchants of Novigrad turned out to be a doppler. These monsters usually avoid confrontation - to everyone's great relief, for when pinned they become extremely dangerous. Fighting them quickly turns into a fight against oneself. Or, to be precise, against a mirror image gifted with one's own strengths and abilities. In a conflict with such even odds, only luck - or destiny - decides the victor.",
    loot: "Doppler Mutagen and Doppler Trophy",
    location: "Novigrad",
    weakness: "Relict Oil",
    image: "imp.png"
  },
  {
    name: "Kernun",
    type: "Relicts",
    desc: "Novigrad - the greatest metropolis in the world, the acme of civilization, material proof - or so one is tempted to think - of mankind's ability to tame and control nature. Yet right outside the city walls lies the Novigrad Wilderness - and whoever sets foot in it soon finds out that man's primacy does not extend past the city walls. One of the monsters who made its lair in that thick tangle was an old, powerful leshen. It killed any who strayed into its territory with its species' characteristic cruelty: lacerating them with razor-sharp claws, sending strangling plants shooting out of the ground or feeding them to packs of hungry wolves. If not for its vulnerability to fire, the Igni Sign included, and the protection of the Quen Sign, one could wager not even the toughest witcher would be able to slay the beast. Geralt of Rivia was only able to finally put an end to this leshen after a long and exhausting battle. Once the beast died, the way was clear for loggers to move into its former domain. The woods now gradually fall to the ax. Perhaps one day they'll disappear altogether - and their monstrous denizens along with them.",
    loot: null,
    location: "near Loggers'Hut",
    weakness: "Dimeritium Bomb, Relict Oil, and Igni",
    image: "Kernun.png"
  },
  {
    name: "Leshen",
    type: "Relicts",
    desc: "Leshens dwell in dense, primeval woods. Fiercely territorial creatures, they hunt with stealth and cunning as their only companions. They use their inborn magic to control the plants and animals within their territory - and so, when stalking them, half the battle is merely getting near enough to strike. Leshens old enough to earn the appellation ancient wield advanced skills and tactics that make them particularly dangerous.",
    loot: "Leshen Resin, Leshen Mutagen, Monster Bone,  Leshen Trophy, and Fiber",
    location: "Velen and Skellige",
    weakness: "Dimeritium Bomb, Relict Oil, and Igni",
    image: "leshen.png"
  },
  {
    name: "Morvudd",
    type: "Relicts",
    desc: "They say every journey made in the Skellige Isles ends in adventure. And sometimes, that adventure ends in death. Such was the case for a group of adventure-seeking Skelligers who set out in search of treasure in forgotten ruins - which turned out to lie in the hunting grounds of a powerful fiend known as Morvudd. The witcher knew there was little room for error in a fight with such a creature. A moment of carelessness and the beast could hypnotize him with its third eye, then tear him to shreds while he remained in a trance. Morvudd was a particularly large individual, so one could presume fast attacks would not prove effective against it - and that its blows would kill anyone not protected with heavy armor or the Quen Sign. Though Morvudd killed the Skellige warriors without much trouble, it proved no match for the witcher. It even tried to save its life by fleeing at one point, but that only delayed its inevitable death by the witcher's silver blade.",
    loot: "Fiend's Eye, Fiend Dung, Fiend Mutagen, Rotting Flesh, Longclaw, and Fiend Trophy",
    location: "Boxholm",
    weakness: "Samum, Devil's Puffball, and Relict Oil",
    image: "morvudd.png"
  },
  {
    name: "Shaelmaar",
    type: "Relicts",
    desc: "Shaelmaars spend most of their lives deep underground, having no contact with the world up above. At times, however, a shaelmaar will dig its way to the surface and devour any men within its reach. Some shaelmaars also burrow tunnels close to the surface, collapsing buildings and causing tremors in the process. Since shaelmaars are blind, they find their way by sensing vibrations and listening for sounds. Thus the best tactic when fighting such a monster is to hurl something heavy or noisy against a nearby boulder or wall. Then pray silently that the beast will roll towards the sound and knock itself out upon striking into the obstacle. Clumsy shaelmaars might seem easy targets to hit, but when even your strongest blows bounce off the thick armor plating their backs, you realize they've little need to dodge. When threatened, a shaelmaar will curl up in a ball and roll forward with tremendous impetus, becoming an unstoppable force crushing everything in its path. A witcher's best bet is to stay out of a charging shaelmaar's way and strike after its charge fails, revealing its vulnerable underbelly. A witcher of particular cunning and agility will use the Aard Sign or a bomb(Samum works particularly well for this purpose) to cause the shaelmaar to slam into an obstacle at full speed, significantly lowering its fighting ability and opening the witcher's path to victory. Trying to disorient a shaelmaar in this way is a risky maneuver, but can be effective, especially when third parties are threatened.",
    loot: null,
    location: "Toussaint and Mahakam",
    weakness: "Samum, Relict Oil, and Aard",
    image: "shaelmaar.png"
  },
  {
    name: "Shaelmaar from the Emperor of Nilfgaard",
    type: "Relicts",
    desc: "Gladiator fights in massive arenas are a popular form of entertainment in Nilfgaard. Usually the fighters are slaves specially trained for this purpose, yet at times the arena masters pit humans against monsters. The shaelmaar Geralt had to fight in the tourney grounds was a present from the emperor to his relative, Duchess Anna Henrietta. It had been caught while young and prepared for its ultimate purpose by Nilfgaardian trainers. That does not mean it was tame, however - in fact, its wildness and inborn ferocity had not been dulled one whit. Like all creatures of its species, it was blind but could unerringly pinpoint its opponents' location using echolocation. The shaelmaar had thick armor and near impenetrable skin. It could also roll into a ball and charge its opponents. Its underbelly, however, was relatively vulnerable and became exposed when its charge failed.",
    loot: null,
    location: "Tourney Grounds",
    weakness: "Samum, Relict Oil, and Aard",
    image: "emperor.png"
  },
  {
    name: "Spriggans",
    type: "Relicts",
    desc: "Spriggans are a subspecies of the monsters known as leshens. One is liable to come across them in inaccessible, unfrequented woodlands. They do not usually attack humans if unprovoked, but when irritated they can be quite fearsome, and, as they possess considerable strength, they are capable of doing great damage. Their appetite is such that they can devour more flesh than an army at a wedding. Each spriggan has mastery over plants and is inextricably tied to them. Thus if someone destroys greenery in its domain, it immediately comes to punish the disturber.",
    loot: null,
    location: "Toussaint",
    weakness: "Dimeritium Bomb, Relict Oil, and Igni",
    image: "spriggan.png"
  },
  {
    name: "Sylvans",
    type: "Relicts",
    desc: "Sylvans and Yakshas, a kindred species, are extremely rare woodland creatures whose appearance combines traits of goats and rotund men. These beings usually pose little danger, for they limit their contact with humans to playing harmless (though often bothersome) tricks and eating crops from their fields.",
    loot: null,
    location: "Velen",
    weakness: "Samum, Devil's Puffball, Relict Oil, and Igni",
    image: "sylvan.png"
  },
  {
    name: "The Caretaker",
    type: "Relicts",
    desc: "The Caretaker served with the indifference of a golem, and proved as fierce in battle as it was diligent in its labors. It felt no pain - in fact, each blow it received seemed to give it strength, as did each blow it landed on Geralt with the spade it wielded as a weapon. What is more, the Caretaker was able to summon powerful spirits from the graves it had dug and could heal itself by absorbing them. The witcher had a hard time evading the devastating strikes of its weapon, and his only chance at wounding the creature came when it would stick its spade in the ground to draw on otherworldly energy in an attempt to petrify its foes with fright. The being known as the Caretaker had been summoned to the von Everec estate from another realm, making demon its most accurate designation. The Caretaker had been forced into servitude by magic. Its tasks - to care for the house and protect it from intruders. It performed these pedantically, tending the flowers, repairing the fences, tidying the yard... and murdering all intruders who set foot on the grounds, then burying their corpses in neat rows on untended land just beyond the manor garden's bounds.",
    loot: "The Caretaker's Spade",
    location: "von Everec Estate",
    weakness: "Relict Oil and Quen",
    image: "caretaker.png"
  },
  {
    name: "The Monster of Tufo",
    type: "Relicts",
    desc: "Imagine a creature that kills men, feeds on kikimore eggs and digs underground tunnels so wide they'd fit the emperor of Nilfgaard's coronation carriage along with a team of six horses. And now imagine this creature digs with such force, the earth quakes and the houses up above tremble and collapse. Noting these symptoms, Geralt was at first unsure what sort of a beast he could be dealing with, knowing only that he needed to be very, very careful. Only after he carefully examined the monster's tracks did he realize it had to be an aged female shaelmaar. The monster destroying Tufo turned out to be an old shaelmaar matriarch. Geralt hunted it down and fought it deep under the ground. Though blind like all members of its species, this creature could easily maneuver by sensing vibrations and noises. As long as Geralt stood quiet and motionless, he was safe. Yet if he took one step or breathed a bit too loud, the matriarch would start moving in his direction with great speed. Geralt had a very difficult time taking out this monster, whose armor could not be pierced by any of his weapons. In the end, however, he succeeded and the monster of Tufo was no more.",
    loot: "Shaelmaar Trophy, Ami, Shaelmaar Dust, Shaelmaar Hair, Monster Carapace, and Greater Blue Mutagen",
    location: "Tufo, Toussaint",
    weakness: "Samum, Relict Oil, and Aard",
    image: "tufo.png"
  },
  {
    name: "Wicked Witch",
    type: "Relicts",
    desc: "Though evil witches are often considered creatures born of the overactive imaginations of fabulists and mythologists, cartoonish characters only a child would ever be frightened of, there are accounts of men who claim to have happened across one of these improbable beings. All these accounts agree that the witch not only did in fact eat men, but had mastered the cooking of humans to a fine art. They are said to be particularly fond of children's liver fried in butter and served in a saffron sauce, balsamic vinegar-marinated fingers roasted to a golden crisp and, yes, even freshly-squeezed corpse juice. It should be noted here that all the above-mentioned witnesses who swore they saw such a witch were patients of the Ellander Institute for the Mentally Ill, thus the veracity of their testimony is highly debatable.",
    loot: "Cookies, Gingerbread, Gingerbread Man, Magic Dust, Poisoned Apple, Bone Ashes, and Grave Hag's Ear",
    location: "Land of a Thousand Fables",
    weakness: "Relicts Oils",
    image: "wickedwitch.png"
  },
  {
    name: "Woodland Spirit",
    type: "Relicts",
    desc: "Some monsters are so powerful local populaces begin worshiping them as gods. Such was the case with the leshen dwelling in the woods near the Skellige village of Fayrlund. The elders were absolutely convinced the monster watched over them by defending them from their enemies and training their hunters. The witcher had his doubts, however. Leshens are mean, self - serving creatures - and the ancient one living in the woods near Fayrlund was surely no exception. Geralt knew freeing the villagers from their supposed protector's grasp would be no easy task - if he decided to even try. The leshen known as the Woodland Spirit was so powerful as to have mastered the art of marking. This meant the monster had inserted his essence into one of the residents of Fayrlund. As long as this unfortunate soul remained alive and near the settlement, the leshen would always be reborn near its lair. Yet even with the marked one eliminated, killing the leshen would be no easy task. The monster commanded the obedience of the denizens of the woods - it could thus call on wolves, ravens or even the trees themselves for help. Luckily, it had a weakness as well: it was vulnerable to fire, that born of the Igni Sign in particular.",
    loot: "Leshen Resin, Ancient Leshen Mutagen, and Leshen Trophy",
    location: "Fayrlund",
    weakness: "Dimeritium Bomb, Relict Oil, and Igni",
    image: "woodland.png"
  },
  {
    name: "Barghests",
    type: "Specters",
    desc: "Folk of simple or superstitious minds claim committing particularly rotten acts will bring down the wrath of the gods in the form of barghests,phantom dogs which stalk the roads at night. Even if this were their origin, barghests saints and sinners alike would need fear barghests, for they attack both with equal ferocity. Witchers rarely believe in the gods, but they do accept that barghests exist and are always connected with some sequence of tragic events that happened in the past. Their explanation, however, holds that barghests result from a curse or a concentration of ill will. Barghests, like wolves, are stronger in packs. Together they surround their prey, leaping at it and tearing it apart with their teeth. If their prey defends itself too determinedly, they strike it with a blast of phantom fire. Since they are fast and agile, they can easily evade attacks directed at them. They cannot be burned, but fire hurts them as if they were of flesh and blood. The Axii Sign also works on them.",
    loot: "Barghest Essence, Infused Dust, and Lesser Blue Mutagen",
    location: "Toussaint",
    weakness: "Moon Dust, Specter Oil, Axii, and Yrden",
    image: "barghest.png"
  },
  {
    name: "Banshee",
    type: "Specters",
    desc: "Old gossips claim banshees are the spirits of women stuck between life and death due to traumatic experiences. Their wails and howls are considered ill omens of imminent, inevitable death, though they are said not to attack the living themselves. Most often they appear in the form of pale, tear-streaked women with shriveled faces and wrinkled, corpse-like bodies.",
    loot: "Essence of Wraith, Specter Dust, Infused Dust, and Lunar Shards",
    location: "Toussaint",
    weakness: "Specter Oil",
    image: "banshe.png"
  },
  {
    name: "Daphne's Wraith",
    type: "Specters",
    desc: "During his stay in Toussaint, Geralt became involved with a curiuos case of gynodendromorphy - that is to say, a woman who had been turned into a tree. When one cut into this tree's bark, it bled, and when the wind blew through its leaves, one could hear muffled sobs. Geralt investigated the matter and learned magic (or possibly a curse) was responsible for the transformation, and it surely had something to do with a certain sad episode form the woman's past. The love of Daphne's life, a knight errant, had gone to the witch of Lynx Crag and never returned, leaving her to wait for him forever, filled with sadness and longing.If Geralt threatens the witch:Our hero visited the witch and decided to force her to disenchant the woman stuck in the tree, but this did not end well. The witch freed Daphne, but the shock was too much for her tortured soul. Daphne's crazed soul turned out to be highly dangerous. It possessed the first living being it came across, a dog, then killed Jacob the woodcutter. Geralt put an end to the wraith's rampage by killing the possessed hound and walked away with a heavy heart, ruing the fate of woman, woodcutter and dog alike.",
    loot: null,
    location: "Toussaint",
    weakness: "Specter Oil",
    image: "daphne.png"
  },
  {
    name: "Devil by the Well",
    type: "Specters",
    desc: "The residents of White Orchard have suffered more than their fair share of misfortunes. Passing armies had trampled their spring planting, a griffin had begun abducting their livestock, and, the rotten icing on this painful cake, a noonwraith haunted a nearby well. No wonder the locals called this final evil a 'devil'. The witcher could sense something bound her to this place, and that in order to send her off into ethereal realms he would first need to learn her secret. Once that was done, he would have to prepare for battle - and a noonwraith is a demanding opponent. She can disorient her victim by blinding him and creating mirror images of herself. These copies slowly suck their victim's life energy - while their mistress remains untouchable. In order to defeat her, the witcher could not rely on his silver sword alone - the Yrden sign would also be needed to trap her and force her to take on material form. Witchers don't normally feel a limited range of emotions regarding the monsters they slay. They despise the particularly cruel ones and are repulsed by the disgusting ones, but rare indeed is the monster for which they feel sympathy. Yet that is exactly what Geralt felt for the noonwraith of White Orchard. For a long time he was haunted by thoughts of the young woman whose horrible death and powerful emotions had transformed her into that terrible monster.",
    loot: "Emerald Dust, Essence of Wraith, Light Essence, Specter Dust, Noonwraith Mutagen, Noonwraith Trophy, Amethyst Dust, and Infused Dust",
    location: "Hovel",
    weakness: "Moon Dust, Specter Oil, and Yrden",
    image: "devil.png"
  },
  {
    name: "Ethereal",
    type: "Specters",
    desc: "The painted world created in the mind of Iris von Everec was mainly populated by figures from her memories, but was also home to dangerous, predatory creatures: the embodiments of her fears. The most dangerous of these, the Ethereal, invoked her greatest fear - and wore the face of her husband. The Ethereal resembled Olgierd in appearance and also fought using a technique similar to his. A group of six such creatures lay in wait for Geralt, yet at first only one engaged him in battle. This one's death awoke the next, which was more powerful than the first, and so it went to the end, with a stronger ethereal replacing a fallen weaker brother until all were defeated. Yet Geralt had to be careful, for the slightest amount of damage dealt to a being awaiting his turn would cause him to come alive and join his still-living comrade in the fight. In the end, the best tactic against these nightmarish beings proved to be a well - timed counterattack.",
    loot: null,
    location: "von Everec Estate",
    weakness: "Specter Oil and Blizzard",
    image: "Ethereal.png"
  },
  {
    name: "Hym",
    type: "Specters",
    desc: "Monsters most commonly claim innocents as their victims: tardy merchants, reckless children and travelers who wander into dark woodlands out of misplaced curiosity. None of the above need fear hyms, however. These wraiths only latch onto particularly despicable individuals who have committed some unspeakable crime. To all others, they remain completely invisible. When they do show themselves to the one they torment, they appear as a tall, shadow-clad, humanoid silhouette with long, sharp claws. Yet hyms do not sink these claws into their victims. Instead, they sap their strength directly, through inflicting suffering. Speaking in a voice only the victim hears, they drive him to commit acts of violence, aggression and self - harm. A hym will seize on a guilty person's worst fears and weave out of them hideous visions, slowing[sic] driving the poor soul into madness. Those tormented by a hym are incapable of restful sleep, for they are tormented by ever - more - frequent, incredibly - realistic nightmares. At times the victim will become extremely on edge, yelling pleas or threats at invisible phantoms or confessing his guilt out loud in the hope this will end his torment. This act does not, however, bring any relief, for the hym will not leave until it has addled its victim's wits completely or driven him to suicide.",
    loot: "Crystalized Essence, Emerald Dust, Specter Dust, Essence of Wraith, and Lesser Veles Runestone",
    location: "Skellige and Gaunter's World",
    weakness: "Moon Dust, Specter Oil, and Igni Sign",
    image: "hym.png"
  },
  {
    name: "Jenny o'the Woods",
    type: "Specters",
    desc: "It is said true love's flame is never extinguished. This sad truth is the reason why Zula of Midcopse, whom an early death had separated from her beloved, was unable to find peace in the next life, and instead returned to haunt her former environs as a nightwraith. Fighting such an apparition is extremely difficult. A nightwraith will form mirror images of herself to confuse her opponent and aid her in battle. She herself can take on immaterial form, rendering her invulnerable to blows. The best way to force her out of this state is to set a trap with the Yrden Sign, then quickly followup with Igni while she is caught. Most important of all, however, is this: never attempt to fight one in the middle of the night, when the moon hangs high in the sky. This vengeful wraith might very well have killed every last inhabitant of the village, had not a famous witcher, Geralt of Rivia, appeared in Velen - and been in need of a bit of coin.",
    loot: "Dark Essence, Nightwraith Hair, Nightwraith Mutagen, Nightwraith Trophy, Forgotten Vran Sword",
    location: "Midcopse",
    weakness: "Moon Dust, Specter Oil, and Yrden",
    image: "jenny.png"
  },
  {
    name: "Longlocks",
    type: "Specters",
    desc: "Everyone knows love stories can have tragic endings, but few would think this also applies to princesses from fairy tales created to relieve a set happy ending over and over again. Longlocks had the misfortune of becoming just such an unlikely tragic heroine. After the duke's daughters grew up and the Land of a Thousand Fables went feral, Longlocks, whose prince never came and who suffered greatly from her loneliness, decided to hang herself by her own braid. After she died, her ghost stayed to haunt the castle in which she had awaited her suitor.",
    loot: "Lunar Shards, Infused Dust, Specter Dust, and Essence of Wraith",
    location: "Land of a Thousand Fables",
    weakness: "Specter Oil",
    image: "Longlocks.png"
  },
  {
    name: "Nightwraith",
    type: "Specters",
    desc: "Compared to other creatures of the night - katakans, nekurats and werewolves, for example - nightwraiths (and their rarer cousins, duskwraiths) might not seem all that dangerous. After all, one might ask, how much harm could a pale, withered woman in a tattered dress do? The answer: quite a bit. Instead of finding this out the hard way, avoid crossing fields and meadows at night at all costs. Like noonwraiths, nightwraiths are only found in rural areas. Travelers fall victim to them most often, but if legends are to be believed they also sneak into huts at times and murder peasants in their sleep. When they attack nightwraiths remain immaterial for most of the time, meaning physical blows pass right through them. They only take on more tangible form for the brief moments in which they strike. When weakened, they will create several projections of themselves which cannot attack directly but act as transmitters of sorts through which the nightwraith can sap her victim's vital energy. Nightwraiths can turn immaterial and are at such times very difficult to wound. In order to force one to take on corporeal form, trap it with the Yrden Sign or hit it with the blast of a Moon Dust bomb. Do not believe the old wife tales and think yourself completely safe from nightwraiths during the day. They appear under the light of the sun as well - but are much weaker then than after dusk.",
    loot: "Nightwraith Mutagen, Specter Dust, Nightwraith Hair, Infused Dust, Dark Essence, and Lunar Shards",
    location: "Velen",
    weakness: "Moon Dust, Specter Oil, and Yrden",
    image: "nightwrath.png"
  },
  {
    name: "Noonwraith",
    type: "Specters",
    desc: "On particularly searing summer days, when the sun reaches its zenith, wraiths will at times appear, resembling sun-scorched women dressed in long, white robes. These are noonwraiths - the spirits of young women and girls who died violent deaths right before their weddings. Driven mad with pain and anger, they wander the fields searching for their unfaithful lovers or backstabbing rivals, though they will kill anyone who does not get out of their way in time. They are often held in this world by some object of intense emotional significance. That is why, if one ever finds a wedding ring or torn veil in the middle of a field, one should not pick it up, but instead back away as quickly as possible. Noonwraiths are only known to haunt rural places, and usually stay near the place of their deaths. They prey on peasants working in the fields or children playing nearby. Noonwraiths do not bleed and are for the most part immune to the effects of Witcher Signs. They can create mirror images of themselves which circle their victims in a kind of morbid parody of a dance. This ghastly ritual drains their victims' life energy while adding to their own strength. Noonwraiths are also able to manipulate the physical world to a limited degree, kicking up clouds of dust which temporarily blind and disorient their opponents. Noonwraiths can turn immaterial and are at such times very difficult to wound. In order to force a noonwraith to take corporeal form, one must first trap it with the Yrden Sign or strike it with a Moon Dust bomb. Once the monster has regained physical presence, one can mount a fast attack with a silver blade, preferably one coated in specter oil. Contrary to popular belief, noonwraiths can also be encountered at night, but are much weaker then than during the day.",
    loot: "Noonwraith Mutagen, Noonwraith Trophy, Light Essence, and Specter Dust",
    location: "Velen and White Orchard",
    weakness: "Moon Dust, Specter Oil, and Yrden",
    image: "noon.png"
  },
  {
    name: "Penitent",
    type: "Specters",
    desc: "It turned out the monster haunting the isle of Eldberg and its lighthouse was a rare type of specter known as a penitent. Wherever this wraith haunts immediately becomes enveloped in thick fog and darkness - and those that wander into it usually never return. In order to defeat a penitent, one must remain in constant motion in order to avoid being struck by this agile creature, which can disappear and reappear in the blink of an eye to attack from behind. Most importantly of all, however, one must discover what keeps they monster bound to its haunting grounds - and break that bond as soon as possible. With the lighthouse keeper's help, Geralt drove the mist from the isle - then dispatched the penitent from our world for good. Now ships were once again able to sail to Arinbjorn's port, and the witcher's coin pouch grew a little fuller.",
    loot: "Specter Dust, Wraith Mutagen, Essence of Wraith, Wraith Trophy, and Ashrune",
    location: "Eldberg Lighthouse",
    weakness: "Moon Dust, Specter Oil, Yrden, and Quen",
    image: "penitent.png"
  },
  {
    name: "Plague Maiden",
    type: "Specters",
    desc: "When plague ravages a region, a spirit will sometimes walk its lands, a ghost resembling an ill woman whose flesh rots off her bones and in whose wake crawls a cavalcade of rats. No one knows whether this spirit brings the pox with her or is merely drawn to it like a moth to a light. Yet it is certain that she delights in dealing pain and suffering, in hearing the howling and moaning of men. Many have called into question the very existence of plague maidens, or pestae, as they are sometimes called. Only two sightings of such a creature have ever been recorded, both during times of raging epidemic. As the name \"plague maiden\" suggests, these wraiths take the appearance of females, though exactly why that is remains a mystery. Some speculate they, like other such specters, arise from the powerful emotional charge associated with certain circumstances of death, such as death preceded by a long and particularly painful illness. Not much is known about how to fight a plague maiden, though one can assume they possess many traits in common with other phantoms and wraiths. They undoubtedly pose a great danger, though a witcher's immunities should at least prevent him from catching the contagious illnesses they carry.",
    loot: null,
    location: "Fyke Isle and Velen",
    weakness: "Specter Oil and Yrden",
    image: "plague.png"
  },
  {
    name: "Umbra",
    type: "Specters",
    desc: "According to some philosophers, everything we do in life leaves a permanent trace in the delicate matter which makes up our souls. Evil deeds, especially harm done to innocent creatures, can torment the soul of a sinner an cause it to remain restless, even after death. While traveling through Toussaint, Geralt discovered there might a be grain of truth in these theories and folk beliefs. He came across a hermit whose sleep was troubled by some invisible phantom. Geralt determined this phantom was an umbra, the ghost of a recently - deceased knight who had committed a terrible deed while alive and now visited the hermit to demand forgiveness. In his wraithly form he drank her blood and systematically deprived her of life energy. The umbra appeared to the hermit as a horse, for the evil deed the knight had committed was to flog his own mount to death. The knight's spirit was unaware of the demonic role he had assumed in the afterlife.",
    loot: "Umbra Trophy",
    location: "Toussaint",
    weakness: "Specter Oils",
    image: "umbra.png"
  },
  {
    name: "The White Lady",
    type: "Specters",
    desc: "The apparition haunting the fields outside Novigrad turned out to be a noonwraith. Some powerful emotion must have bound it to that place - love, hate, anger or perhaps all three at once. Like every wraith of this type, she was surely capable of forming mirror images of herself, which served to mislead opponents and restore her vitality. Luckily, these mirages could be dispelled with a quick slash from a silver blade. Like any noonwraith, she would undoubtedly seek to assume immaterial form while fighting, making her almost impossible to injure - unless she is first caught in a trap laid by the Yrden Sign, or blasted with a special bomb. Once thus forced into materiality, she should be attacked with strong blows or the Igni Sign. Finally, one must always keep in mind two witcher sayings: The longer you fight a noonwraith, the lower your chances of surviving, and Fight a noonwraith at midday and you'll be dead before dusk. The vengeful wraith known as the White Lady had roamed the fields for a long times, murdering anyone she came across. Though the grain hung heavy from the stalks, the frightened peasants were kept from harvesting it and thus faced famine. They gathered their last bit of savings and went in together on a bounty for a witcher. That was coin well - spent.",
    loot: "Emerald Dust, Amethyst Dust, Essence of Wraith, Noonwraith Mutagen, and Noonwraith Trophy",
    location: "Fields south of Farcorners",
    weakness: "Moon Dust, Specter Oilm and Yrden",
    image: "lady.png"
  },
  {
    name: "The Wraith from the Painting",
    type: "Specters",
    desc: "While wandering the von Everecs' abandoned estate, Geralt came into contact with a woman's wraith haunting the house. The restless spirit had mastery over the house's furnishings and in particular over the paintings hanging from its walls. It moved freely between their canvasses, entering one and exiting through another. At first it tried to scare Geralt into giving up his search, then, when it was clear this strategy would not work, it attacked him directly. Geralt's battle against the wraith proved very difficult, for it was fueled by rage and launched its attacks with heated aggression. Geralt was forced to move with lightning speed in order to parry its blows, without time to take a breath or launch an attack of his own. What's more, the wraith had created a bond with the paintings around it and, until the witcher severed this tie, it would continually regain any lost strength. The key to victory over the Wraith from the Painting was to focus on parrying its blows and only attack sporadically, at exactly the right moments. Any attempt to attack in a flurry was always punished with a deadly counterattack.",
    loot: null,
    location: "Von Everec Estate",
    weakness: "Specter Oil and Yrden",
    image: "paint.png"
  },
  {
    name: "Wraith",
    type: "Specters",
    desc: "Clerics and scholars are forever debating whether spirits do in fact journey to another world after death, one where eternal joy or suffering awaits. Both groups agree, however, on what happens to spirits who, for one reason or another, remain in our world after their body breathes its last: they transform into wraiths. To hear their mournful howls, one can surmise this is not a fate to be envied. Wraiths are usually encountered at night, near cemeteries, catacombs and other such burial places, or else near the places that were important to them in life: abandoned homes, crumbling castles or forgotten bridges. Wraiths suffer endless, indescribable pain. Filled with anger and a sense of having been wronged, they both envy the living and brim with overwhelming hatred for them. Like other specters, they are immaterial, meaning they are not harmed by fire, poison or weapons designed to provoke bleeding. Wraiths can turn immaterial and are at times very difficult to wound. One can, however, force them to reassume a physical presence by trapping them with the Yrden Sign or by hitting them with slivers from a Moon Dust bomb. As with any such ghostly being, one should fight them using silver swords, preferably ones smeared with a thick coat of specter oil. Note as well that wraiths are particularly dangerous on moonless nights.",
    loot: "Specter Dust, Emerald Dust, Amethyst Dust, Infused Dust, Wraith Mutagen, and Essence of Wraith",
    location: "Velen, WHite Orchard, Skellige, and Toussaint",
    weakness: "Moon Dust, Specter Oil, Yrden, and Quen",
    image: "wraith.png"
  },
  {
    name: "Alpha Garkain",
    type: "Vampires",
    desc: "When a vampire gives a witcher a contract to kill another vampire, you can be certain neither of the two is entirely normal. The contract seemed simple enough, though Geralt knew his target was a vampire. Yet one must bear in mind vampires are a very diverse group and their various species differ from one another greatly. The witcher established the individual he sought had long, hooked claws with which it could tear apart a body with ease, leaving behind venom which hindered the clotting of blood. What's more, it could use these claws to scale even the sheer outer wall of a building, giving others the impression it possessed mind-boggling powers. Geralt also realized his opponent was an experienced predator able to set ambushes for its prey and attack it unexpectedly. The monster he was tracking turned out to be a powerful type of garkain, a pack leader or alpha. As the witcher expected, in addition to its ability to emit waves of mental energy, this alpha garkain also had powerful venom at its disposal. The monster killed for pleasure, not just to satisfy its hunger. It must be admitted that Geralt also gained a measure of satisfaction from eradicating this beast, for he could still remember the massacre in the orphanage for which this garkain was responsible.",
    loot: "Monster Ear, Monster Brain, Vampire Fang, Vampire Saliva, Vampire Blood, Lesser Green Mutagen, and Garkain Trophy",
    location: "Blood Simple",
    weakness: "Moon Dust, Samum, Vampire Oil, and Black Blood",
    image: "alpha.png"
  },
  {
    name: "Alp",
    type: "Vampires",
    desc: "Alps are vampires that resemble bruxae in appearance. They are called phantoms by some, a name which fits well enough, for like phantoms they haunt and torment men. They usually take on the form of a woman, though they can also appear as animals. They are most often found prowling near villages. They attack at night and are most active when the moon is full. Alp saliva can make one fall asleep, and when applied to a sleeping man, can invoke horrible nightmares. Some suggest they are the cause of legends about men who go to sleep healthy and are found in the morning white as snow, not a drop of blood in their veins. In combat alps display supernatural speed and incredible(even by vampire standards) stamina. One must aim one's sword with great precision, for alps are unequaled in the art of evading blows. The Yrden Sign is recommended, for it weakens an alp's defenses. Another strategy is to drink the Black Blood potion, for alps suck the blood of their victims to deprive them of strength and regenerate their own powers. Unlike bruxae, alps cannot turn invisible, yet like bruxae, they emit a shrieking noise whose shock wave can incapacitate. Their greatest asset is their agility and they can leap with uncanny lightness that appears to border on the power of flight. When in human form, they easily blend in with the surrounding community, which makes them very dangerous indeed.",
    loot: null,
    location: "Toussaint",
    weakness: "Yrden, Vampire Oil, Moon Dust, and Black Blood",
    image: "alp.png"
  },
  {
    name: "Bruxae",
    type: "Vampires",
    desc: "Fortunately for us all, bruxae are rare creatures. Most live far from population centers, for they care greatly for their own safety and make their lairs in places where they cannot be taken by surprise. Those who decide to live near men avoid crowds and emerge from their shelters only at night. When they do, one could almost mistake them for delayed travelers hurrying towards their night's lodging, yet subtle details give them away: their close ties to birds, their piercing voices and the breathtaking speed of their movements. Bruxae are far swifter and stronger than men, but their greatest asset is their ability to turn invisible. Bruxae dart about with uncanny speed, and with their power of invisibility they can easily confuse opponents and attack unexpectedly or from behind. Thus when fighting these vampires the Moon Dust bomb is a great aid - while it cannot eliminate the vampire's invisibility altogether, it can make it easier to track its motions. A generous smearing of vampire oil is also effective. Bruxae use their sharp claws to attack and can easily break through an opponent's guard by buffeting him with a hail of blows from all directions. They will try to bite their prey and drink its blood once it is weakened, so every witcher who expects to encounter such a monster should swallow a Black Blood potion beforehand. Bruxae are also known for their sonic attacks, which knock down and stun their prey.",
    loot: null,
    location: "Toussaint",
    weakness: "Moon Dust, Black Blood, Vampire Oil, and Yrden",
    image: "bruxae.png"
  },
  {
    name: "Dettlaff van der Eretein",
    type: "Vampires",
    desc: "Dettlaff is a higher vampire and one of the most terrifying creatures the world has ever known. Some vampires of his sort live among men easily and inconspicuously, sometimes even gaining the respect and admiration of their community. Yet even the most civilized vampire can be incredibly dangerous if provoked, and Dettlaff... Dettlaff was far from civilized. When in his two - legged form, Dettlaff strikes in surprising and unique ways, so one must be extremely alert and attentive. His razor - sharp claws, wielded with great strength and precision, are his chief weapons, yet he can also wield weapons of human devising with extraordinary skill. Like all higher vampires, Dettlaff can turn into fog and envelop opponents. When fighting a vampire in this form, one must watch out for magic puddles and attacks from the air. When wounded, Detlaff tends to assume his winged form, using these powerful appendages to stun his foes near effortlessly. One must remember higher vampires are immortal creatures and thus do not fear for their lives while fighting, meaning they take every risk. They are able to turn invisible and can regenerate strength during combat. All in all, they are supremely difficult foes, even for a witcher.",
    loot: null,
    location: "Toussaint",
    weakness: "null",
    image: "dettlaff_vampire.png"
  },
  {
    name: "Ekkimaras",
    type: "Vampires",
    desc: "Like other vampires, ekimmaras are not, despite what village gossips might say, undead humans. They are instead post-Conjunction monsters who have no particular feelings about garlic, holy water or religious symbols. Unlike their portrayals in ballads and legends, they look nothing like handsome, pale aristocrats with charming eastern accents, though, like katakans and nekurats, they do bear a strong resemblance to overgrown bats. They also do not suck blood from the necks of virgins with a delicate, kiss-like bite - they tear them to shreds using long, sharp claws and then slurp the splattered blood off the ground. Ekimmaras are unusually cruel and exceptionally swift. They are able to quickly land blow after blow capable of smashing even the best Mahakaman-made armor into tiny shards. They should be fought with a silver sword, remembering that they can regenerate back health over time. One should thus never attempt to tire them out or, gods forbid, wait for it to bleed to death. Instead, cut then down as quickly as possible and, if possible, burn the body to ash and scatter it to the four winds.",
    loot: "Ekimmara Hide, Ekimmara Mutagen, Lesser Blue Mutagen, Monster Ear, Monster Eye, Monster Hair, Monster Tongue, Vampire Fang, and Vampire Saliva",
    location: "Novigrad and Velen",
    weakness: "Devil's Puffball, Vampire Oil, and Igni",
    image: "ekimma.png"
  },
  {
    name: "Fleder",
    type: "Vampires",
    desc: "Fleders are classified as lesser vampires. Though weaker than the rest of their ilk in every aspect from the physiomagic to they physiognomic, they should not be underestimated - for they are very, very dangerous. Fleders cannot be mistaken for any other creature, with their wide, toothy jaws, flat, unpleasant faces and completely hairless, often warty bodies. These vampires mainly fight with their teeth and claws, flailing them blindly and not stopping even when their victim is already dead. Even a solitary fleder is strong enough to take down a trained soldier. Compared to other vampires, fleders display meager intelligence, seen most clearly in the mindless rage which causes them to try with all their might to attack and tear to shreds any weaker being. When fighting fleders, it is best to take advantage of their particular method of movement. These creatures do not run, but they do try to catch their prey and knock it over by leaping. Knowing this behavior, one can plan the fight appropriately and not let oneself be caught by surprise.",
    loot: "Lesser Red Mutagen, Monster Eye, Monster Hair, and Vampire Blood",
    location: "Toussaint",
    weakness: "Vampire Oil, and Black Blood",
    image: "fleder.png"
  },
  {
    name: "Gael",
    type: "Vampires",
    desc: "Contrary to popular belief, monsters are not all alike. Like people, individual members of the same species can each have their own unique traits, preferences and weaknesses. A good example of this is the katakan which once fed on the inhabitants of Oxenfurt. Perhaps influenced by its close proximity to the hard-drinking student youth of the city, this vampire had developed a keen appetite for blood spiked with a hefty dose of hard alcohol - and also baubles and gaudy jewelry of all kinds. The vampire had clearly thrived on its high - octane diet. It had grown exceptionally strong and gained the ability to regenerate lost life quickly, cause heavy bleeding with its claws and, if all that were not enough, meld into the air and appear again behind its opponent's back. Luckily the Quen Sign meant the witcher was well-equipped to defend against this surprise attack, and the Yrden Sign would let him catch the monster in a trap. To bait the vampire, Geralt took note of its dietary preferences and seasoned his blood to match by loading up on cheap wine. This made it somewhat harder to aim his blows, true, but he still managed to defeat the beast -then had another battle awaiting him the next morning, this one against a powerful hangover.",
    loot: "Katakan Mutagen, Katakan Trophy, Lesser Blue Mutagen, Monster Hide, Monster Ear, Monster Bone, Vampire Saliva, Deargdeith, Key to Katakan's Hideout",
    location: "Oxenfurt",
    weakness: "Moon Dust, Devil's Puffball, Vampire Oil, Yrden, and Igni",
    image: "gael.png"
  },
  {
    name: "Garkains",
    type: "Vampires",
    desc: "Garkains, like fleders, belong to the class of particularly dangerous vampires whose strength exceeds even that of fiends. An encounter with one of their number almost always ends in death, which is why there are not many eye-witness accounts of them. From the city guard reports written up in Lan Exeter describing the attacks committed in that city in 1104 by three garkains (later killed by a certain Olivier of Gulet, witcher), it seems these horrible monsters do not content themselves with drinking the blood of their victims. The investigators concluded from the blood and guts strewn around the crime scenes that garkains tear their victims to shreds with great delight and muck about in their bloody entrails. Garkains belong to the group of creatures known as lesser vampires. They often gather around themselves members of other subspecies of lesser vampires, acting in such situations as leaders of the pack. They are by and large unable to run, but can jump a great distance and often attack their prey in that way. During combat, they usually keep their distance from their foes, trying to incapacitate them using a blast of mental energy provoking visions that beguile and disorient. Before grappling a garkain, one should drink the Black Blood potion and stock up on vampire oil. It should also be remembered that the Samum and Moon Dust bombs are always effective weapons against any mental attacks.",
    loot: null,
    location: "Toussaint",
    weakness: "Moon Dust, Samum, Vampire Oil, and Black Blood",
    image: "garkain.png"
  },
  {
    name: "Higher Vampire",
    type: "Vampires",
    desc: "Only a mutual thirst for blood links higher vampires to their distant and much more primitive cousins: ekimmaras, alps, katakans and the like. Higher vampires are, in fact, much more similar to humans than to those bat-like blood slurpers. They not only resemble us in appearance, but also share our intelligence and behavioral patterns. This means they do not squat in distant forest or hide in the shadows. On the contrary, they are particularly fond of cities, where they live out deceivingly normal lives. Even witchers are not capable of recognizing them at once, for their medallions remain perfectly motionless in the presence of higher vampires. Yet all these similarities should not blind us to an essential difference: unlike men, higher vampires are immortal. Those who have faced them in combat and survived can be counted on one hand. It is a witcher's good fortune that higher vampires are extremely rare - and not all are dangerous to humans. Though they do have a taste for blood, they do not need to drink it to survive. Some higher vampires have renounced feeding on humans altogether and do no harm to anyone, but others give in to their desires. A witcher who braves fighting a higher vampire must bear in mind that he faces a monster endowed with incredible strength, one able to manipulate men and animals, turn invisible and transform into a giant bat - and furthermore one which it is nearly impossible to kill. In other words, even an experienced monster slayer should think twice before accepting a contract on one of these creatures, even if half a kingdom and a princess' hand is in the offing.",
    loot: null,
    location: "Novigrad and Toussaint",
    weakness: "Vampire Oil and Igni",
    image: "higher.png"
  },
  {
    name: "Katakans",
    type: "Vampires",
    desc: "Katakans and their more dangerous kin, nekurats, are the embodiments of human fear. They hide in the shadows. They feed on blood. They resemble enormous bats - though with long fangs and even longer talons. And, as if that weren't terror enough, they can turn invisible, waiting unseen while dread of their unpreventable attack overwhelms their victim. When fighting a katakan one must pay particular attention to its shadow - often the only way to know its location. Katakans are invulnerable to steel, regenerate quickly, hear acutely and move at incredible speed. To even the odds one can temporarily immobilize katakans using the Yrden sign, then seize that moment to attack with all one's might - for there might not be another chance. Unfortunately, the legends are wrong and the sun's rays do not turn katakans to ash. They are vulnerable to sunlight, however, and when the sun stands at its zenith their regeneration is considerably slowed.",
    loot: "Monster Heart, Monster Bone, Vampire Fang, Vampire Saliva, Lesser Blue Mutagen, and Katakan Mutagen",
    location: "Novigrad, Oxenfurt, and Toussaint",
    weakness: "Moon Dust, Devil's Puffball, Vampire Oil, Yrden, and Igni",
    image: "katakan.png"
  },
  {
    name: "Protofleder",
    type: "Vampires",
    desc: "Protofleders are relatives of fleders which came from the world of the higher vampires to our own during the Conjunction of the Spheres. The members of this species are characterized by their considerable strength and agility as well as the strange glow they emit, a trait most likely tied to their otherworldly nature. Protofleders have never had significant contact with the outside world, having spent their entire time on our planet in the Unseen Elder's cave, whose atmosphere is very similar to that of their home world.",
    loot: "Protofleder Mutagen, Monster Blood, Monster Brain, Monster Eye, Monster Heart, Vampire Fang, and Vampire Saliva",
    location: "only in Hen Gàidh cave in Toussaint",
    weakness: "Vampire Oil and Black Blood",
    image: "Protofleder.png"
  },
  {
    name: "Sarasti",
    type: "Vampires",
    desc: "Raiders of elven tombs either get rich quickly, or die trying. The Aen Seidhe's disintegrating temples and palaces hold priceless treasures, true, but within them many a foul monster waits in deep slumber. Such was the case in Byways, where a few peasants, unaware of the dangers they faced, awoke an unusually dangerous ekimmara. The witcher knew this monster would be no easy kill. That the vampire would quickly regenerate, that its blows would cause heavy bleeding, that it was able to disappear into thin air. Yet he also knew he could overcome these advantages. He needed merely to use Yrden and Quen Signs and strike heavy blows. Oh, and avoid getting killed. The vampire had already managed to kill several peasants and a patrol of heavily - armed Nilfgaardians. The list of victims would surely have grown even longer, had not Geralt of Rivia, the White Wolf, happened to waltz into town.",
    loot: "Ekimmara Mutagen, Ekimmara Hide, Ekimmara Trophy, and Bloed Aedd",
    location: "Elven ruins beneath Byways",
    weakness: "Devil's Puffball, Vampire Oil, and Igni",
    image: "Sarasti.png"
  },
  {
    name: "The Bruxa of Corvo Bianco",
    type: "Vampires",
    desc: "The bruxa Geralt encountered and killed in self-defense at Corvo Bianco differed from other creatures of this sort. Firstly, it was more intelligent, capable even of articulating words in human language without much difficulty. What's more, this bruxa was tied to the Beast, the mysterious murderer prowling Beauclair at the time. Fighting it presented Geralt with quite the challenge. Like other bruxae, this one possessed strength and speed far above that of any human, could turn invisible and could attack using a sonic wave. As is typical for all vampires, it sought to suck its victim's blood. This meant the usual defense against those creatures, the Black Blood potion, was an effective weapon against it, as were the Moon Dust bomb and, naturally, the witcher's trusty silver blade.",
    loot: "Monster Eye, Monster Heart, Vampire Fang, Vampire Saliva, Vampire Blood, and Greater Blue Mutagen",
    location: "Corvo Bianco",
    weakness: "Moon Dust, Black Blood, Vampire Oil, and Yrden",
    image: "Bianco.png"
  }
]
//creo una funcion que le agregue un id a cada objeto ya que el json de donde lo saque no lo tenia
function addId(beasts) {
  let c = 1
  beasts.forEach(element => {
    element.id = c++
  })
  return beasts
}

function showObject(obj) {
  let final = ""
  for (const prop in obj) {
    if (prop !== 'image') {
      final += `${prop.charAt(0).toUpperCase() + prop.slice(1).toLowerCase()} : ${obj[prop]} \n\n`
    }
  }
  alert(final)
}

function searchByName(beasts) {
  let inputBeast = ""
  do {
    inputBeast = prompt("Ingrese la bestia a buscar")
  } while (inputBeast === "" || !isNaN(inputBeast));
  let beast = beasts.find((el) => el.name.toLowerCase() === inputBeast.toLowerCase())
  if (beast) {
    showObject(beast)
  } else {
    alert("Bestia no encontrada")
  }
}



function listArrayObj(beasts) {
  let final = ""
  beasts.forEach(beast => {
    for (const prop in beast) {
      final += `${prop.charAt(0).toUpperCase() + prop.slice(1).toLowerCase()}: ${beast[prop]}\n`
    }
    final += "\n"
  })
  alert(final)
}

function filterByProperty(arr, prop, opc) {
  let byType = arr.filter((el) => { return el[prop] && el[prop].toLowerCase().includes(opc) }).map((el) => {
    return {
      name: el.name,
      type: el.type,
      //desc: el.desc, Por ahora no mando la descripcion pq es muy larga y se va a hacer tedioso de leer jaja
      loot: el.loot,
      location: el.location,
      weakness: el.weakness
    }
  })
  if (byType.length !== 0) {
    listArrayObj(byType)
  } else {
    switch (prop) {
      case "type":
        alert("No existe el tipo de bestia ingresado")
        break
      case "location":
        alert("No existe la locacion ingresada o no hay bestias que habiten la misma")
        break
      case "weakness":
        alert("No existe la debilidad ingresada o no hay bestias que lo sean")
        break
      default:
        break
    }
  }
}

function extrait(beasts) {
  let aux = beasts.map((el) => {
    return {
      name: el.name,
      id: el.id
    }
  })
  let beast_list = ""
  aux.forEach(element => {
    beast_list += `${element.id}. ${element.name} \n`
  })
  return beast_list
}

function compare(beasts) {
  let beast_list = extrait(beasts)
  let opc = 0
  let beast1 = []
  for (let i = 0; i < 3; i++) {
    do {
      opc = Number(prompt("Elegi una bestia a comparar\n0.Terminar\n" + beast_list))
      if (opc === 0) { break }
      if (!(opc < 0 || opc >= 133 || isNaN(opc)) && opc !== 0) {
        beast1.push(beasts.find((el) => el.id === opc))
      }
    } while ((opc < 0 || opc >= 133 || isNaN(opc)))
    if (opc === 0) break
  }
  if (beast1.length !== 0) {
    listArrayObj(beast1)
  } else { alert("No se ha seleccionado nada, volviendo al menu") }
}

function menu(bestias) {
  bestias = addId(bestias)
  let option
  let opc = ""
  do {
    option = Number(prompt("Ingrese una opcion\n\n1.Buscar por nombre\n2.Ordenar por nombre\n3.Filtrar por tipo\n4.Filtrar por locacion\n5.Filtrar por debilidad\n6.Comparar\n0.Salir"))
    switch (option) {
      case 1:
        searchByName(bestias)
        break
      case 2:
        let arrayNames = orderByName(bestias)
        if (arrayNames !== 0) alert(arrayNames)
        break
      case 3:
        do {
          opc = prompt("Ingrese el tipo de bestia a buscar")
        } while (opc === "" || !isNaN(opc))
        filterByProperty(bestias, "type", opc.toLowerCase())
        opc = ""
        break
      case 4:
        do {
          opc = prompt("Ingrese la locacion a buscar")
        } while (opc === "" || !isNaN(opc))
        filterByProperty(bestias, "location", opc.toLowerCase())
        opc = ""
        break
      case 5:
        do {
          opc = prompt("Ingrese la debilidad a buscar")
        } while (opc === "" || !isNaN(opc))
        filterByProperty(bestias, "weakness", opc.toLowerCase())
        opc = ""
        break
      case 6:
        compare(bestias)
        break
      default:
        break
    }
  } while (option !== 0)
}
//Aca arranca lo nuevo
const obtainBeastsLS = () => JSON.parse(localStorage.getItem("bestiasComp")) || []

function orderByName(obj, way) {
  let ordered = obj.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else if (a.name < b.name) {
      return -1
    } else {
      return 0
    }
  })
  if (way === "z-a") {
    ordered.reverse()
  }

  renderizarBestias(ordered)
}


function filtrarBestias(bestias) {
  let inputSearch = document.getElementById("buscador")
  return bestias.filter((el) => el.name.toLowerCase().includes(inputSearch.value.toLowerCase()) || el.type.toLowerCase().includes(inputSearch.value.toLowerCase()))
}

function compareBeasts(e, beasts) {

  let compareArr = obtainBeastsLS()
  let checkBox = e.target
  let beastId = Number(checkBox.id.substring(7))
  let selectedBeast = beasts.find(beast => beast.id === beastId)

  if (compareArr.length > 2) {
    checkBox.checked = false
  }
  if (checkBox.checked) {
    compareArr.push(selectedBeast)
    localStorage.setItem("bestiasComp", JSON.stringify(compareArr))
  } else {
    compareArr = compareArr.filter(beast => beast.id !== beastId)
    localStorage.setItem("bestiasComp", JSON.stringify(compareArr))
  }

  let btnCompare = document.getElementById("btnCompare")
  if (compareArr.length >= 2) {
    btnCompare.classList.replace("notDisplay", "nowDisplay")
  } else { btnCompare.classList.replace("nowDisplay", "notDisplay") }

}

function renderizarBestias(bestias) {
  let beastContainer = document.getElementById("beastContainer")
  beastContainer.innerHTML = ""

  bestias.forEach(el => {
    let beastCard = document.createElement("div")
    beastCard.classList.add("tarjeta")
    beastCard.setAttribute("data-aos", "fade-up")
    beastCard.innerHTML = `
    <div class=contenedor-img>
    <img style=height: 250px;  width:250px; src=./assets/images/${el.image} />
    </div>
    <h3>${el.name}</h3>
    <h5>Type: ${el.type}</h5>
    <p>Loot: ${el.loot}</p>
    <p>Location: ${el.location}</p>
    <p>Weakness: ${el.weakness}</p>
    <button type="button" class="button-white mt-auto">Ver Mas</button>
    <div class=checkContainer>
    <label for=compare${el.id}>Comparar</label>
    <input type="checkbox" id="compare${el.id}" class=checkBeast>
    </div>
    `

    beastContainer.appendChild(beastCard)

    let checkBeast = document.getElementById("compare" + el.id)
    checkBeast.addEventListener("change", (e) => compareBeasts(e, bestias))
  })

  /*   let menu = document.getElementById("menu")
    let count = document.createElement("div")
    menu.innerHTML = ""
    count.innerHTML = `<p>${bestias.length} resultados</p>`
    menu.appendChild(count) */
}

function filtraRenderizarBestias(bestias) {
  let filteredBeasts = filtrarBestias(bestias)
  renderizarBestias(filteredBeasts)
}

function filterRenderEnter(beasts, e) {
  e.key === "Enter" && renderizarBestias(filtrarBestias(beasts))
}

function renderCompare() {
 //ocultar el panel de control y mostrar un boton de volver atras para borrar el LS y renderizar todas las bestias
  let bestiasLS = obtainBeastsLS()
  let main = document.getElementById("beastContainer")
  main.innerHTML = ""

  bestiasLS.forEach(el => {
    let beastContainer = document.createElement("div")
    beastContainer.classList.add("tarjeton")
    beastContainer.innerHTML = `
    <div class=contenedor-img>
    <img style=height: 250px;  width:250px; src=./assets/images/${el.image} />
    </div>
    <h3>${el.name}</h3>
    <h5>Type: ${el.type}</h5>
    <p>Description: ${el.desc}</p>
    <p>Loot: ${el.loot}</p>
    <p>Location: ${el.location}</p>
    <p>Weakness: ${el.weakness}</p>
    `

    main.appendChild(beastContainer)
  })

}

function principal(bestias) {

  addId(bestias)

  document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
  });

  let btnSearch = document.getElementById("btnBuscar")
  btnSearch.addEventListener("click", () => filtraRenderizarBestias(bestias))

  let selectOrder = document.getElementById("order")
  selectOrder.addEventListener("change", () => orderByName(bestias, selectOrder.value))

  let inputSearch = document.getElementById("buscador")
  inputSearch.addEventListener("keypress", (e) => filterRenderEnter(bestias, e))

  let btnCompare = document.getElementById("btnCompare")
  btnCompare.addEventListener("click", () => renderCompare())

  renderizarBestias(bestias)
}

principal(bestias)
