const fs = require('fs').promises;

const BUTTON = 1;
const SELECT = 2;

const MainQuest = {
    title: "Introduction to the Labyrinth",
    description: "And so it begins...\n\nThe Discord is the territory, the Labyrinth is the story, and you are the Initiate making his/her journey through to the Ultimate Reward. \n\nThis journey through the Discord will provide a literal and symbolic indication of the many dead-ends that can and will happen in your trek through the Labyrinth. Think of it as a mini-game within a mini-game in the ultimate Game of Life.",
    entry_label: "START",
    entry_style: "DANGER",
    actions: {
        entrypoint: {
            interactionType: BUTTON,
            message: "'The worst labyrinth is not that intricate form that can entrap us forever, but a single and precise straight line' ~ Jorge Luis Borges", 
            choices: [
                "intro_continue",
            ]
        },

        intro_continue: {
            interactionType: BUTTON,
            label: "Next",
            style: "PRIMARY",
            image: "https://cdn.discordapp.com/attachments/898288524086890537/912067080826794034/char.png",
            message: "Editor's Note: In the construction of the Labyrinth game, we’ve used the same conceptual tools measured for in IQ tests. Not the BS ones from Facebook. The ones given by Stanford-Binet and Wechsler. We’ve designed it so only those with a minimum full standard deviation above the mean can make it through with minimal trouble (many beneath this threshold will require a degree of imperceptible aid).",
            choices: [
                "entrance_continue"
            ],
        },       
        
        entrance_continue: {
            interactionType: BUTTON,
            label: "Venture Forward",
            style: "PRIMARY",
            message: "You find yourself in a room just past the entrance of the Labyrinth.\n\nThe room is empty except for a corner door and a pair of nunchucks hanging beside it.",
            choices: [
                "entrance_continue_again"
            ],
        },

        entrance_continue_again: {
            interactionType: BUTTON,
            label: "Look Around",
            style: "PRIMARY",
            message: "You just heard a roar coming from outside the room. It’s coming from the other side of the corner door. How will you approach it?",
            choices: [
                "exit",
                "peaceful",
                "aggressive"
            ],
        },

        peaceful: {
            interactionType: BUTTON,
            label: "Go in Peace",
            style: "PRIMARY",
            message: "Namaste.\n\nYou slowly peer outside the door. \n\nArching your head around the corner you find there’s nothing there. Just a long hallway. Perhaps your mind played tricks on you?",
            choices: [
                "continue_peaceful"
            ],
        },

        aggressive: {
            interactionType: BUTTON,
            label: "Nunchucks",
            style: "PRIMARY",
            message: "In your haste, you’ve stepped in a pile of shit. Nothing else is here. You look really cool with your nunchucks though, wild man. Just kidding, those are shit too. You picked up nunchucks made of shit. Nice work, dummy. Wash yourself. (By the way, that pile of shit you stepped in is huge. What animal could make such a mess?)",
            choices: [
                "continue_aggressive"
            ],
        },

        continue_aggressive: {
            interactionType: BUTTON,
            label: "Look Around",
            style: "PRIMARY",
            message: "Besides the pile of shit, there’s nothing else but a long hallway before you. \n\nYou run down the hallway, (you’re not sure why, thinking isn’t your strong suit). After a few hundred yards you hear a roar coming from the other side of the wall to your left. You hit the skids and look to the left to see a jagged crack in the wall. You squeeze through it (with only a few minor scrapes). \n\nYou now find yourself inside the walls of the Labyrinth. You hear another roar. It’s much louder and more clear now. Whatever is making that noise, it’s very close. You’re a little scraped up, you still have shit on yourself from the nunchucks, and you’re not sure what you’re up against. \n\nYou have a decision to make:",
            choices: [
                "shit",
                "help",
                "agg_run"
            ],
        },

        shit: {
            interactionType: BUTTON,
            label: "Rub the shit in your wounds",
            style: "PRIMARY",
            message: "Good thinking. You now have a staph infection. This is quickly becoming cellulitis. The painful infection is spreading from your arms to your torso. Without proper care you will die very soon.",
            choices: [
                "lay",
                "agg_ignore",
                "cut"
            ],
        },

        lay: {
            interactionType: BUTTON,
            label: "Lie down and die",
            style: "PRIMARY",
            message: "You welcome the sweet relief of death, eh? Well, good on you. The trek through the Labyrinth isn’t for everyone and in just three short moves you’ve proven it most certainly isn’t for you. Having those festering wounds spread throughout your body has gotta be one of the worst ways to go, too. \n\nNo matter. Pain is pain. Despite your poor decision-making, for some reason, the Labyrinth is going to give you a second chance here. Are you sure you want to die? Or would you rather continue through to Limbo?",
            choices: [
                "die_restart",
                "ground_fall"
            ],
        },

        ground_fall: {
            interactionType: BUTTON,
            label: "Die",
            style: "PRIMARY",
            message: "As you're pondering the decision you made, the ground beneath you begins to open.",
            choices: [
                "limbo"
            ],
        },

        die_restart: {
            interactionType: BUTTON,
            label: "Die",
            style: "PRIMARY",
            message: "Death is hard. Luckily, you can start over.",
            choices: [
                "entrance_continue"
            ],
        },


        agg_ignore: {
            interactionType: BUTTON,
            label: "Ignore it",
            style: "PRIMARY",
            message: "Good idea! Who cares if your flesh is rotting off your body? There’s a ROAR to catch! You run down the interior of the walls, hoping to catch something beastly. Before long, you stop and puke. You’re losing consciousness..",
            choices: [
                "die_restart",
                "keep"
            ],
        },

        keep: {
            interactionType: BUTTON,
            label: "Keep Running",
            style: "PRIMARY",
            message: "You keep running and running. The staph infection that is steadily spreading through your body to create cellulitis isn’t hurting you any more. You’re not sure if it’s because you’ve reached a second wind, if belying all common sense has led the Labyrinth Gods to smile upon you, or if you’re only here because you randomly clicked buttons without reading the prompts but here you are. If we didn’t know any better, we’d say your stubbornness is paying off. You’re still running.",
            choices: [
                "keep_continue"
            ],
        },

        keep_continue: {
            interactionType: BUTTON,
            label: "Keep Running",
            style: "PRIMARY",
            message: "You’re well past any roars now, you’ve gone through many doors and you’re racing to something, you’re not sure what it is, but it smells like a finish line. Who needs skin anyway?\n\n Just then you see a wooden door. You walk through. It takes you to a frontier, it might as well be the 19th century. Out here are only horses and carriages. It’s funny, you can’t even feel the pain anymore.",
            choices: [
                "keep_continue_next"
            ],
        },

        keep_continue_next: {
            interactionType: BUTTON,
            label: "Search Carriages",
            style: "PRIMARY",
            message: "You dig in one of the carriages and see a bottle of hooch. You open it up and smell it. Whatever it is, it’ll definitely put some hair on your chest. You also see a saddle for one of the horses. Inside the saddle bag is a note which reads:\n\n “Beware: This is the saddle for Lucky. He is a very dangerous horse. If you’re reading this, it is because I have died as a result of the bad luck riding him has brought me. Lucky should be posted up in the last stable of the northeastern most barn. Please avoid him.”",
            choices: [
                "hooch",
                "lucky"
            ],
        },

        hooch: {
            interactionType: BUTTON,
            label: "Drink the Hooch",
            style: "PRIMARY",
            assignRole: "912440118940405830",
            message: "I don’t know if I would’ve done that. This appears to be some sort of hallucinogen. You’re losing consciousness and you are go-",
            choices: [
                "lsd"
            ],
        },

        lucky: { //Cowboy Role
            interactionType: BUTTON,
            label: "Saddle up Lucky",
            style: "PRIMARY",
            assignRole: "914986688030326876",
            message: "You search for the barn, and find yourself in the last stable standing face to face with Lucky. You place the saddle on Lucky and hoist yourself up onto him. He bolts through the Labyrinth, faster than the speed of light. In fact, he’s going too fast. He gallops you out into the ether before you begin to fall.",
            choices: [
                "limbo"
            ],
        },


        cut: {//Skinned Alive Role
            interactionType: BUTTON,
            label: "Cut your skin off",
            style: "PRIMARY",
            assignRole: "914987157695893565",
            message: "I don’t think it’s possible to make dumber decisions than you’ve made so far. You just used the jagged walls to cut the rest of the flesh off your body. You’re going to get a special badge for your retardation when this thing is through.\n\n Anyway, for some reason you’re still alive. A skinless pulp in excruciating pain, but still alive nonetheless. You don’t care, you’re running on adrenaline and you see an opening at the end of the hallway. \n\nYou burst through the door and see a tiny room with a lone door, there’s a large purple lock on the knob, but you have no key. Above you is a vent. Perhaps you can get through there? Then again, you could always wait for some help or assistance too. \n\nWhat do you think?",
            choices: [
                "vent",
                "wait"
            ],
        },

        vent: {
            interactionType: BUTTON,
            label: "Vent",
            style: "PRIMARY",
            message: "You drag your skinless pulp of a self up through the vent. There’s a narrow duct that leads you through the length of 5 football fields. You’re a little woozy, but there’s no option to turn back. Eventually, you fall from the ducts into an office room. \n\nIt’s clearly some sort of board room with a long desk and many chairs surrounding it. The only odd thing about this room is the skin suits in each of the chairs. That’s right, the chairs are filled with different skins without bodies. Some clearly belonged to fat guys, others to old guys, one to a petite woman, another to a young guy. There are twelve skins in total. Odder still, the skin at the head of the table, (obviously the chairman’s seat) is a green reptilian skin. You have a choice to make. \n\nWhat skin do you put on?",
            choices: [
                "reptilian",
                "pulp",
                "dude"
            ],
        },

        pulp: {
            interactionType: BUTTON,
            label: "None",
            style: "PRIMARY",
            message: "You’re proud of who you are now. That’s cool. So are are we. Unfortunately, you’re dying now and your soul is leaving you. Bye.",
            choices: [
                "limbo"
            ],
        },

        dude: {
            interactionType: BUTTON,
            label: "Old Guy",
            style: "PRIMARY",
            message: "Cool. You’re a loose-skinned old dude. You also put on the Armani suit. A glance in the mirror shows you’re not very convincingly human, but oh well, right? Skin is better than no skin. Just then, a woman walks in. She calls you Rick and tells you that she needs you to come downstairs right away.\n\nSomething major is about to happen.\n\nYou follow her down 37 flights of stairs in a hurry.",
            choices: [
                "run_away"
            ],
        },

        reptilian: {//Reptilian Role
            interactionType: BUTTON,
            label: "Reptilian",
            style: "PRIMARY",
            assignRole: "914987548286263327",
            message: "Congratulations. You are now an inter-dimensional being. You can now go to the end of the Labyrinth, with your shiny new badge of honor. ",
            choices: [
                "joe_audio"

            ],
        },

        wait: {
            interactionType: BUTTON,
            label: "Wait",
            style: "PRIMARY",
            message: "You sit and wait.\n\nWhat will you do?",
            choices: [
                "wait_cont",
                "wait_give_up" //send to tickles dead end
            ],
        },

        wait_give_up: {
            interactionType: BUTTON,
            label: "Give Up",
            style: "PRIMARY",
            message: "You're approached by Tickles, the Svengali of the Labyrinth. He ushers you in to his domain within the Labyrinth. He wants you to join his tribe.",
            choices: [
                "deadend_tickles"
                ],
        },

        wait_cont: {
            interactionType: BUTTON,
            label: "Wait",
            style: "PRIMARY",
            message: "You sit and wait longer.\n\nWhat will you do?",
            choices: [
                "wait_cont_again",
                "wait_give_up" //send to tickles dead end
            ],
        },

        wait_cont_again: {
            interactionType: BUTTON,
            label: "Wait",
            style: "PRIMARY",
            message: "You sit and wait even longer.\n\nWhat will you do?",
            choices: [
                "wait_cont_again_final",
                "wait_give_up" //send to tickles dead end
            ],
        },

        wait_cont_again_final: {
            interactionType: BUTTON,
            label: "Wait",
            style: "PRIMARY",
            message: "You sit and wait some more. \n\nWhat will you do?",
            choices: [
                "wait_cont_again_final_real",
                "wait_give_up" //send to tickles dead end
            ],
        },

        wait_cont_again_final_real: {
            interactionType: BUTTON,
            label: "Wait",
            style: "PRIMARY",
            message: "Eventually, a janitor following the blood trail left from your skinless body arrives with a mop and a bucket. He has a bunch of keys on his belt. One of them is a large purple one which most assuredly fits the lock on the door. You know that’s your only way out.",
            choices: [
                "janny_continue"
            ],
        },

        janny_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You chat up the janitor a bit. You make small talk. He asks you why you’re a skinless pulp, you ask him what it’s like cleaning a metaphysical space, etc. \n\nEventually, he tells you he has to clean another hallway on the other end of the Labyrinth and he has to go. You really don’t want him to leave, you’ve been waiting here, skinless, for a very long time. You ask him if you can use the purple key to get into the only room you have available to you. He refuses you. \n\nHe says he doesn’t do those sorts of favors for free. \n\nHe is entrusted by the Gods of the Labyrinth to, among other things, keep the keys from the hands of unworthy travelers, which he has no way of knowing whether or not you are one.",
            choices: [
                "janny_beg"
            ],
        },

        janny_beg: {
            interactionType: BUTTON,
            label: "Beg Him",
            style: "PRIMARY",
            message: "You beg him to change his mind.\n\nHe refuses. It’s clear that if you want these keys you’re probably going to have to take them (possibly in a violent manner).\n\nHe makes a deal with you. He says if you help him mop the other side of the Labyrinth (its floor spans 17 square miles) he’ll give you the purple key. He says he thinks this is a good deal because the purple room is an especially special room. He’s never been inside, but he heard it’s contents are the most coveted in the entire Labyrinth.",
            choices: [
                "mop",
                "janny_keys"
            ],
        },

        janny_keys: {
            interactionType: BUTTON,
            label: "Kill Him",
            style: "PRIMARY",
            message: "You karate chop the old fool in the back of the neck. He goes down like he’s a henchman in a cheesy 80s action flick. \n\nYou grab the key and go into the Purple Room. Here at long last is your darkness. No cry of light, no glimmer, not even the faintest shred of hope to break free across the threshold. You are alone and without allies and defeat is imminent. \n\nYou begin to fall through the floor. ",
            choices: [
                "limbo"
            ],
        },

        mop: {
            interactionType: BUTTON,
            label: "Help Mop",
            style: "PRIMARY",
            message: "You’re some kind of gentleman. \n\nYou drag your bloody stumps across the Labyrinth and mop with geriatric custodian. He whistles along. You do the math in your head. \n\nIt’s clear it’s going to take you 3 days to mop this entire floor (you’ve added a day because you noticed you’re making a mess while you’re cleaning, what with all the blood you’re losing from being skinless and all). ",
            choices: [
                "mop_cont"
            ],
        },

        mop_cont: {
            interactionType: BUTTON,
            label: "Get to Work",
            style: "PRIMARY",
            message: "Before you know it, the three days are done and this entire side of the Labyrinth is squeaky clean.\n\n'Let me take you to that purple room', the custodian says.\n\nYou follow him back. He unlocks the door. ",
            choices: [
                "mop_door"
            ],
        },

        mop_door: {//Custodian Role
            interactionType: BUTTON,
            label: "Enter the Door",
            style: "PRIMARY",
            assignRole: "914988079490682990",
            message: "You enter it. Whether you’re in your body or out of your body, you do not know. All you know is the things you see, the things you do, and the things you hear in this room are unlawful to recant.  ",
            choices: [
                "joe_audio"
            ],
        },

        help: {
            interactionType: BUTTON,
            label: "Shout “HELP!”",
            style: "PRIMARY",
            message: "Your shouts for help echo off the interior walls of the endless hallway. After a few moments, an echo travels back to you. It says, “Hold on! Help is on the way!”\n\n You run towards the echo. Rushing towards you in the opposite direction is Edward Snowden wearing a “Stay Free NFT” shirt. He has a medical pack strapped to him. He tells you to lay back, you’re in bad shape and in need of immediate assistance.",
            choices: [
                "snap",
                "lay_back",
                "help_run"
            ],
        },

        help_run: { //Add Sigil Image for Balam
            interactionType: BUTTON,
            label: "Run Away",
            style: "PRIMARY",
            message: "Good thinking! There’s something about that guy I just don’t trust. Anyway, you’re a little banged up and you don’t know where you’re going, but you’re sure going to get there in a hurry. \n\nThe roar is getting louder. You look to the right and see a small manhole sized opening at the bottom of the wall, you’re not sure where it leads but there’s a light emanating from underneath it. You slip through and find yourself underground in the Labyrinth. There’s no roaring but there’s a sigil for the Demon King Balam on the floor drawn with what appears to be blood. There are candles lit on all 5 sides of the sigil. No one else is around. It’s clearly set up for an occult ritual. All it needs is someone to lay in the center of the sigil to perform the ritual.",
            choices: [
                "ritual",
                "gtfo"
            ],
        },

        ritual: { //Possessed Role
            interactionType: BUTTON,
            label: "Lie Down",
            style: "PRIMARY",
            assignRole: "914990575118319626",
            message: "You lie down in the center of the sigil and chant your incantation. Just then Balam grabs ahold of you and drags you beneath the ground. You begin to fall.",
            choices: [
                "limbo"
            ],
        },

        gtfo: {//Devout Role
            interactionType: BUTTON,
            label: "GTFO",
            style: "PRIMARY",
            assignRole: "914991133430513705",
            message: "Good idea! Occult rituals are not to be trifled with. Anyway, you’re lost in the Labyrinth now. Trapped in a dead-end. Someone will be along to help you shortly.",
            choices: [
                "deadend_joe"
            ],
        },
    
        lay_back: {
            interactionType: BUTTON,
            label: "Lie Back",
            style: "PRIMARY",
            message: "Snowden fixes you right up. What a great guy he is! He ain’t no turncoat for a limited hangout psyop against the American people, I can tell you that right now! Anyway, he wants to give you something. He says one of these two things he has in hands will help you through the Labyrinth. He gives you the choice. One is a shiny scepter, the other is a pair of fuzzy car dice.",
            choices: [
                "scepter",
                "dice"
            ],
        },

        scepter: {
            interactionType: BUTTON,
            label: "Take the Scepter",
            style: "PRIMARY",
            message: "You grab the scepter from his pale dainty hand. Smart choice. What the fuck could stuffed diced do anyway? Snowden vanishes.\n\nYou notice the head of the scepter start to glow. You look inside the reflection and see a moving picture of yourself dying. \n\nIn the vision you’re mauled by a lion from behind while staring into a scepter. Then it happens.\n\nIn a funny way, you even saw it coming.\n\nInside the bowels of the lion you’re eventually shat out. Some idiot steps on you at the front of the Labyrinth, you get out on the heels of his feet. But not before you find your soul fall through the floors of the Labyrinth.",
            choices: [
                "limbo"
            ],
        },

        dice: {
            interactionType: BUTTON,
            label: "Take the Dice",
            style: "PRIMARY",
            message: "You grab the inflatable dice from his pale dainty hand. Stupid choice. What the fuck are you going to do with this? Snowden vanishes in the shadows.\n\nYou roll the dice.\n\nWhat number comes up?",
            choices: [
                "dice_one",
                "dice_six"
            ],
        },

        dice_six: {
            interactionType: BUTTON,
            label: "6",
            style: "PRIMARY",
            message: "Congratulations! You’ve rolled a 6! This gives you the choice of either going to dinner or going to an anime fight. What do you choose?",
            choices: [
                "dice_dinner",
                "dice_anime"
            ],
        },

        dice_dinner: {
            interactionType: BUTTON,
            label: "Dinner",
            style: "PRIMARY",
            message: "There’s no roaring beasts. But what’s this? It’s a luxurious spread laid out on the table. With a tag that reads “Reserved for [your name]”. \n\nThe investigatory dinner is sumptuous. There’s a chiffonade of lobster (a salad of cold lobster, cubed foie gras, a touch of cognac and, we suspect, cayenne, and tarragon mayonnaise flavored with tomato, tossed with lettuce). In addition, there’s fresh foie gris with aspic, braised sweetbreads with a light truffle sauce, roast quail and those delectable tiny birds from the Landes region of France, ortolans. There’s also andouillettes served with an outstanding sorrel sauce and a mysterious meat you cannot quite identify but smells strongly of chicken. The wine is a fine Pommard.",
            choices: [
                "open_red_continue"
            ],
        },

         dice_anime: {
            interactionType: BUTTON,
            label: "1",
            style: "PRIMARY",
            message: "You walk through the Labyrinth, eventually happening upon an Anime set. \n\nYou see a waifu. The waifu tells you she’s your sister. Seeing as she is not human, you don’t believe her. Also, even if that were possible (it isn’t as far as you can tell) she’s still the most beautiful thing you’ve ever seen. While the two of you make small-talk a Cyber Kong, a member of the most technologically advanced species on Earth busts through the door and tells you he’s going to kill you. \n\nWhat do you do?",
            choices: [
                "joe_audio"
            ],
        },


        dice_one: {
            interactionType: BUTTON,
            label: "1",
            style: "PRIMARY",
            message: "Congratulations! You’ve rolled a 1. This is perhaps the most important number in the Labyrinth. It is the secret combination to your exit from Stage 1 of the Labyrinth.",
            choices: [
                "joe_audio"
            ],
        },

        snap: {
            interactionType: BUTTON,
            label: "Kill Him",
            style: "PRIMARY",
            message: "You ain’t no dummy. The Labyrinth smiles upon you. You snapped that fucking fraud’s neck and you did it well. Seriously, what’s with Snowden? Do you buy his story for a second? Let’s look at some facts…",
            choices: [
                "snap_cont"
            ],
        },

        snap_cont: {
            interactionType: BUTTON,
            label: "Get the Facts",
            style: "PRIMARY",
            message: "In 2003, at age 19, without a high school diploma, Snowden enlists in the Army. He begins a training program to join the Special Forces. The sequence here is fuzzy. At what point after enlistment can a new soldier start this training program? Does he need to demonstrate some exceptional ability before Special Forces puts him in that program?",
            choices: [
                "snap_cont_next"
            ],
        },

        snap_cont_next: {
            interactionType: BUTTON,
            label: "Get More Facts”",
            style: "PRIMARY",
            message: "Snowden breaks both legs in a training exercise. He’s discharged from the Army. Is that automatic? How about healing and then resuming Army service? Just asking.\n\nIf he was accepted in the Special Forces training program because he had special computer skills, then why discharge him simply because he broke both legs?",
            choices: [
                "snap_cont_next_again"
            ],
        },

        snap_cont_next_again: {
            interactionType: BUTTON,
            label: "Get More Facts",
            style: "PRIMARY",
            message: "Circa 2003 (?), Snowden gets a job as a security guard for an NSA facility at the University of Maryland. He specifically wanted to work for NSA? It was just a generic job opening he found out about?\n\nAlso in 2003 (?), Snowden shifts jobs. He’s now in the CIA, in IT. He has no high school diploma. He’s a young computer genius?",
            choices: [
                "snap_cont_next_again_two"
            ],
        },

        snap_cont_next_again_two: {
            interactionType: BUTTON,
            label: "Sounds Fishy",
            style: "PRIMARY",
            message: "In 2007, Snowden is sent to Geneva. He’s only 23 years old. The CIA gives him diplomatic cover there. He’s put in charge of maintaining computer-network security. Major job. Obviously, he has access to a very wide range of classified documents. Sound a little odd? Again, just asking. He’s just a kid. Maybe he has his GED by now. Otherwise, he still doesn’t have a high school diploma.",
            choices: [
                "snap_cont_next_again_three"
            ],
        },

        snap_cont_next_again_three: {
            interactionType: BUTTON,
            label: "Hmm...",
            style: "PRIMARY",
            message: "Snowden says that during this period, in Geneva, one of the incidents that really sours him on the CIA is the “turning of a Swiss banker.” One night, CIA guys get a banker drunk, encourage him to drive home, the banker gets busted, the CIA guys help him out, then with that bond formed, they eventually get the banker to reveal deep banking secrets to the Agency. Snowden is this naïve? He doesn’t know by now that the CIA does this sort of thing all the time? He’s shocked? He “didn’t sign up for this?”",
            choices: [
                "snap_cont_next_again_four"
            ],
        },

        snap_cont_next_again_four: {
            interactionType: BUTTON,
            label: "Interesting",
            style: "PRIMARY",
            message: "In 2009, Snowden leaves the CIA. Why? Presumably because he’s disillusioned. It should noted here that Snowden claimed he could do very heavy damage to the entire US intelligence community in 2008, but decided to wait because he thought Obama, just coming into the presidency, might make good changes.",
            choices: [
                "snap_cont_next_again_five"
            ],
        },

        snap_cont_next_again_five: {
            interactionType: BUTTON,
            label: "This Never Ends",
            style: "PRIMARY",
            message: "After two years with the CIA in Geneva, Snowden really had the capability to take down the whole US intelligence network, or a major chunk of it? He had that much access to classified data?\n\nAnyway, in 2009, Snowden leaves the CIA and goes to work for a private defense contractor. Apparently, by this time, he knows all about the phony US war in Iraq, and yet he chooses to work for a sector that relentlessly promotes such wars.",
            choices: [
                "snap_cont_next_again_six"
            ],
        },

        snap_cont_next_again_six: {
            interactionType: BUTTON,
            label: "Go figure",
            style: "PRIMARY",
            message: "This defense contractor (unnamed) assigns him to work at an NSA facility in Japan. Surely, Snowden understands what the NSA is. He knows it’s a key part of the whole military-intelligence network, the network he opposes.\n\nBut he takes the job anyway. Perhaps he’s doing it so he can obtain further access to classified data, in advance of blowing a big whistle. Perhaps.",
            choices: [
                "snap_cont_next_again_seven"
            ],
        },

        snap_cont_next_again_seven: {
            interactionType: BUTTON,
            label: "Perhaps",
            style: "PRIMARY",
            message: "Snowden goes on to work for two private defense contractors, Dell and Booze Allen Hamilton. In this latter job, Snowden is again assigned to work at the NSA.\n\nHe’s an outsider, but he claims to have so much sensitive NSA data that he can take down the whole US intelligence network in a single day. Hmm.\n\nThese are red flags. They raise questions.",
            choices: [
                "snap_cont_next_again_eight"
            ],
        },

        snap_cont_next_again_eight: { //Citizen4 Role
            interactionType: BUTTON,
            label: "Serious ones.",
            style: "PRIMARY",
            assignRole: "914991492005777428",
            message: "Anyway, we’re proud of you. Because of your wise decision making, you’re going straight to the end of the Labyrinth.",
            choices: [
                "joe_audio"
            ],
        },
        
        agg_run: {
            interactionType: BUTTON,
            label: "Run Towards the Roar ",
            style: "PRIMARY",
            message: "Well now, aren’t you the brave one? As you rush down the hall, the roar is becoming much louder. You don’t care if you’re unarmed, covered in shit, and completely out of your element, you’re going to find whatever is making that roar. \n\nAfter what seems like a mile run, you’re out of breath. You smell something. You look up. You’re at the end of the hallway. You glance to your right. It’s a lion, quietly stalking you. You know he’s about to pounce.",
            choices: [
                "pounce",
                "chicken",
                "scream"
            ],
        },

        pounce: {
            interactionType: BUTTON,
            label: "Run Away",
            style: "PRIMARY",
            message: "You know you’re overmatched by this lion. You run away from him. Before long, he catches up to you and mauls you to death. He eats you. You’re part of the lion now.",
            choices: [
                "pounce_lion"
            ],
        },

        pounce_lion: {//Animorph Role
            interactionType: BUTTON,
            label: "Animorph",
            style: "PRIMARY",
            assignRole: "914991693466599475",
            message: "The lion walks back through the Labyrinth to a room you recognize. Just then, your consciousness merges with that of the lion. You are the lion now.\n\nSuddenly, a naïve initiate wielding nunchucks made of shit rushes towards you.",
            choices: [
                "violent_tiger"
            ],
        },

        scream: {
            interactionType: BUTTON,
            label: "Scream",
            style: "PRIMARY",
            message: "You scream so loud you scare the lion away. They can say what they will, but sometimes it pays to be the biggest pussy of all-time. You’ve changed your tune, you know you’re not a tough guy, and that’s alright because your life is spared. You walk through a small opening at the end of the hall and find a lone door,it's PINK. You walk through. ",
            choices: [
                "open_pink"
            ],
        },

        chicken: {
            interactionType: BUTTON,
            label: "Lunge",
            style: "PRIMARY",
            message: "You lunge towards the lion. You’re clearly not afraid of anything. Perhaps he’s your totem animal? Perhaps what we fear most is where our true task is? Anyway, the lion lunges at you. Then, evidently intimidated by your fearlessness, the lion freezes up in front of you. You have a choice to make.",
            choices: [
                "mercy",
                "keel"
            ],
        },

        mercy: { //Lion Tamer Role
            interactionType: BUTTON,
            label: "Show Mercy",
            style: "PRIMARY",
            assignRole: "914994170970664990",
            message: "You look into the lion’s sad eyes and see a shred of shared existence staring back at you. You couldn’t possibly kill such a vulnerable being in cold blood. You pause and reach out your hand to the lion. The lion arches his neck and lowers his head to be pet by your outstretched hand.\n\nCongratulations, You have tamed the lion. Enjoy your new badge.",
            choices: [
                "joe_audio"
            ],
        },

        keel: {//Gladiator Role
            interactionType: BUTTON,
            label: "Kill Him",
            style: "PRIMARY",
            assignRole: "914994542455951371",
            message: "You look into the lion’s sad eyes and see a bitch about to get fucked by your brutal fist. You couldn’t possibly let such a large pussy go on living without a good fistfuck. You pull his stomach out of his ass, thus killing him in the most painful way you could think of in that moment. You have killed the lion.\n\nCongratulations. You have brutally murdered the lion.\n\n Enjoy your new badge, Gladiator. You wanted to be a tough guy, now suffer the consequences.",
            choices: [
                "deadend_joe"
            ],
        },

        continue_peaceful: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You slowly walk down the hallway. \n\nYou hear the faint sound of a roar coming from the only direction there is to walk toward. \n\nYou come to the end of the hall. \n\nSuddenly, you hear the roar again. ",
            choices: [
                "continue_peaceful_again"
            ],
        },

        continue_peaceful_again: {
            interactionType: BUTTON,
            label: "Keep Walking",
            style: "PRIMARY",
            message: "You enter a room with 3 doors. The roar is coming from beyond the door in the middle of the room. It is painted RED. To its left is a door painted PINK, to its right is one with a HANDICAP accessible sign engraved in it.\n\n Which door do you choose?",
            choices: [
                "open_pink",
                "open_red",
                "open_handi"
            ],
        },

        open_handi: {
            interactionType: BUTTON,
            label: "HANDICAP",
            style: "PRIMARY",
            assignRole: "912641038227742720",
            message: "The door creaks open, you step through, the door quickly shuts behind you. ",
            choices: [
                "handi_continue"
            ],

        },

        handi_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You’re in an endless desert. There’s no one here except a bunch of Special Needs types. Congratulations, you’ve found your tribe.", 
            choices: [
                "deadend_tickles"
            ],
        },

        deadend_tickles: {
            interactionType: BUTTON,
            label: "Join Your Tribe",
            style: "PRIMARY",
            assignRole: "912440118940405830",
            message: "You've really done it now. \n\nPlease enter <#912057462381752380> to find out how to continue your journey in The Labyrinth.",
            choices: [],
        },

        wilderness: {
            interactionType: BUTTON,
            label: "Escape",
            style: "PRIMARY",
            message: "You’re trapped in the desert. It’s the archetypal wilderness.\n\nEven though you’re clearly smarter than everyone around you. It’s clear you’re at the bottom of the tribe’s hierarchy, they don’t know why you’re smaller than them (they’re all 7 feet tall), why you’re not drooling, and only have one forehead.\n\nAll they know is they are stuck without food and they’re hangry.",
            choices: [
                "wilderness_continue"
            ],

        },

        wilderness_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "They send you out on a mission to climb a rock face and bring them back some grub.\n\nReluctantly, you head over the rock face and see amidst the endless desert a tribe of dancing cannibals feasting on their latest kills around a bonfire. You know if you’re spotted, you’re dead.\n\nBut they do have food (even if it is human, it smells pretty good) and they have fire, which your tribe is way too stupid to figure out. While you peer at them from behind a bush, one of their tribal children pokes you with a stick. He starts yelling in a tongue you don’t recognize for the rest of the tribe to hear.\n\nYou’re compromised.\n\nThey’re coming for you.\n\nThe tribe (a few of whom share your wardrobe) gather around you with their spears and swords, it’s looking grim.",
            choices: [
                "explainer",
                "runner",
                "savage"
            ],

        },

        explainer: {
            interactionType: BUTTON,
            label: "Explain Yourself",
            style: "PRIMARY",
            message: "You calmly explain what you’re doing there. Even if they cannot fully understand you, you’re an articulate person and it’s a good idea to remain diplomatic when tensions run high. ",
            choices: [
                "explainer_continue"
            ],

        },

        explainer_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The tribe is having none of your shit. \n\nSome asshole who looks like you immediately stabs you in the neck with a spear. \n\nWith your corpse in tow they go back into the cave, cut your body up into 5 separate pieces, cook you and put 5 pieces of your body onto 5 different plates featuring 5 different vegetables. \n\nYour essence can feel itself separated into dinner on each of these plates. It’s agonizing. Hopefully someone eats you soon, it’s your only way out. ",
            choices: [
                "explainer_continue_next"
            ],

        },

        explainer_continue_next: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "There you sit on the plate. \n\nPeeking past the table, you see a slightly opened door with a light coming from it. Someone walks through. \n\nNext to you, is a large spread of veggies. You desperately want to be in human form again, even if it means you’re inside someone's belly as food. \n\nYou send all your attracting energy to them. ",
            choices: [
                "explainer_continue_final"
            ],

        },

        explainer_continue_final: {//Dinner Role
            interactionType: BUTTON,
            label: "HEY OVER HERE",
            style: "PRIMARY",
            assignRole: "914994788313489499",
            message: "The fellow initiate notices you on the table. You get eaten. ",
            choices: [
                "inside_host"
            ],

        },

        inside_host: {
            interactionType: BUTTON,
            label: "Continue in Your Host",
            style: "PRIMARY",
            message: "Your host was very pleased with your flavor.\n\nYour host looks around the room and notices a door in the corner with light shining from underneath.\n\nYour host opens it up and finds himself in a vast wilderness. In the center of your hosts POV is a tribe of dancing cannibals.\n\nThey are singing while slaughtering their latest human meal.\n\nYour host is moved by their tribal rhythms and the beat moves through you as well as the smell of the burning human flesh fills him with an even deeper hunger.\n\nYou get your host to rip off their clothes and dance among them. They start dancing with your host, arm in arm … your host feasts on the flesh with their new brethren.\n\nJust then, from a corner bush, your host hears the shouts of a tribal child.\n\nYou cannot understand what he’s saying, but you know he’s distressed.\n\nThe music stops.\n\nYour host and their new tribe walk over to see a person, much like you used to be, wearing an Initiate’s robe.\n\nWhat does your host do? ",
            choices: [
                "host_murder",
                "host_chaser",
                "host_servant"
            ],

        },

        host_chaser: {
            interactionType: BUTTON,
            label: "Chases Initiate",
            style: "PRIMARY",
            message: "The stranger makes a run for it, up a rockface.\n\nYour host realizes he’s a fellow initiate so he follows him. Out of breath, your host finds himself among the slow-witted Mong tribe.\n\nThey want to know where their food is. Your host explains in a language they can grasp that he didn’t get any.\n\nAn argument breaks out within the tribe’s ranks. It’s about the sun going down. Arthur, a tribal elder says that the sun went down because Luca, another tribesman hid it. Luca says “That’s not true. I did not hide the sun! You can watch me everyday, I never hide the sun.” Arthur says, “Maybe he doesn’t hide it, but he definitely kills it everyday.” A fight breaks out.\n\nWhat does your host do?",
            choices: [
                "host_peacemaker",
                "host_troublemaker",
                "host_woo"
            ],

        },

        host_peacemaker: {
            interactionType: BUTTON,
            label: "Makes Peace",
            style: "PRIMARY",
            message: "Your host says “It’s ok, Luca! You are not kill the sun everyday! Arthur, the sun goes bye bye, because its tired. It comes back in a few hours.” ",
            choices: [
                "host_peacemaker_continue"
            ],

        },

        host_peacemaker_continue: {//Owl Image
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Luca and Arthur both look to your host for further clarification.\n\nYour host explains to them that the Sun has a mind of its own and sometimes it needs a rest, just like we do.\n\nArthur confides in your host that he doesn’t like the dark and he wants the Sun to be awake more. Your host tells him it’s not possible but he persists.\n\nArthur pulls some coffee beans out from underneath his loin cloth then tells your host to feed this to the Sun. If it doesn’t work, he’ll kill your host (and thus you).\n\nYour host heads off towards the Sunset. Walking and walking and walking with coffee beans. For many miles your host has walked, not really knowing why. Your host has no idea where you’re going, perhaps you’ll both just die?\n\nJust as this thought enters your host’s head a large owl picks you both up and carries you off into oblivion. ",
            choices: [
                "peacemaker_dreamer_host"
            ],

        },

        peacemaker_dreamer_host: {//Owl Image
            interactionType: BUTTON,
            label: "Weeee!",
            style: "PRIMARY",
            assignRole: "914995049438253057",
            message: "The owl soars far from the wilderness, far past the sun, far beyond the parameters of the Labyrinth.\n\nYou and your host are dropped.",
            choices: [
                "dreamer"

            ],

        },

        host_troublemaker: {
            interactionType: BUTTON,
            label: "Makes Trouble",
            style: "PRIMARY",
            message: "Your host says “Luca totally killed the sun! I saw it Arthur. I think he does it everyday!",
            choices: [
                "host_troublemaker_continue"
            ],

        },

        host_troublemaker_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Luca immediately crushes your host’s head with a rock. Damn.",
            choices: [
                "limbo"
            ],

        },

        limbo: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You fall. \n\nYou scream out but no one can hear. Not even you. You’re falling through a pit of deep darkness. \n\nYou close your eyes. \n\nYou open your eyes and find yourself in Limbo.",
            choices: [
                "limbo_cont"
            ],

        },

        limbo_cont: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Here is a place filled with people who are also trapped by their decisions.\n\n They’re confused and looking for answers. \n\nThey approach you and ask you how to get out of here. The truth is, you just fell and have no idea how to escape. \n\nThere is nothing around you except endless blackness, a cold hard ground, and a TV screen playing a generic welcome message. \n\nA spokesmodel walks into frame and says: \n\n“Welcome to Limbo”. \n\nFor some reason she’s dummy thicc and naked. ",
            choices: [
                "limbo_cont_next"
            ],

        },

        limbo_cont_next: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "There’s a group of people clamoring around the television screen, watching the loop of her saying “Welcome to Limbo” over and over. \n\nYou look around for an escape. There’s none visible. \n\nYou walk into the direction of the blackness and realize there’s no ground beyond the platform you’re standing on. \n\nYou watch as other people plunge into the abyss around you, their screams of terror echo in to eternity as they leap off one at a time. ",
            choices: [
                "sit_and_cry",
                "lust",
                "escape"
            ],

        },

        host_woo: { //Woo! Role
            interactionType: BUTTON,
            label: "Shouts 'Woo!'",
            style: "PRIMARY",
            assignRole: "914995151515049994",
            message: "Your host grabs two pots and bangs them together yelling “Woo!” ",
            choices: [
                "host_woo_continue"
            ],

        },

        host_woo_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Hearing your host’s clanging, the Mong Tribe immediately bows to him. They ask what your host wishes, anything they will do for your host, your host tells them to take him back to the Labyrinth. They break down a cave wall and it leads you both to the Labyrinth.",
            choices: [
                "host_dinner"
            ],

        },

        host_dinner: {
            interactionType: BUTTON,
            label: "Continue.",
            style: "PRIMARY",
            message: "Your host has a fabulous dinner. Shits you out. You go through pipes, end up in Joe Audio", //Flesh out Narrative
            choices: [
                "joe_audio"
            ],

        },


        host_servant: {
            interactionType: BUTTON,
            label: "Watches Initiate",
            style: "PRIMARY",
            message: "Your host watches as the stranger murders the child on a rock. Everyone in the tribe falls for him. And bows at his feet. Your host does likewise. ",
            choices: [
                "host_servant_continue"
            ],

        },

        host_servant_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Your host’s new Master is stern but fair. And best of all, you both can understand him as he speaks perfect English, just like you and your host! Your host rubs his feet in the cave, your host washes his robes and body in the large lagoon. One day your host asks you to accompany him to the back of the cave. He takes your host to a portal in the ground that leads to endless oblivion. He wants your host to join them to serve as his catamite. Your host reluctantly agrees. He tells your host, “We may not make it through this abyss, so in case we’re going out, I want to make sure we’re going out satisfied.” He grabs your host and takes your ass until its raw. You feel the pokes, it’s very unpleasant. He then throws your host in front of him, hurling you both into the abyss",
            choices: [
                "lsd"
            ],

        },


        host_murder: {
            interactionType: BUTTON,
            label: "Murders Initiate",
            style: "PRIMARY",
            message: "The stranger begins to explain himself. Your host takes no chances. He can’t risk the tribe not accepting him, so he grabs a spear and stabs the explaining stranger. ",
            choices: [
                "host_murder_continue"
            ],

        },

        
        host_murder_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The cannibals all pause in stunned silence.\n\n Then, in unison, they bow at your host’s feet. One of them hesitated ever so slightly (they’re wearing the same robe as your host) before bowing with the rest. They keep chanting. Your host doesn’t know what’s going on, but whatever your host did, they liked it. They hoist your host up on their shoulders chanting. “Yanaglanchi! Yanaglanchi!” \n\nDrumming starts up. ",
            choices: [
                "host_murder_continue_next"
            ],

        },

        host_murder_continue_next: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Your host is now their leader. \n\nThey take your host to a cave. Inside the cave there’s a bunch of people sitting and waiting. They’re looking at strange paintings on the wall. Most of them are drawings of monkeys with large phalluses. Some are debating as to whether or not the monkey drawing is a dick or a tail. Shouters are shouting. Others are shouting at the shouters. Some people are fighting. The tribal elders sit your host down in a large stone chair. The cave is your host’s court. One of your host’s new counsels speak to you, (in perfect English) he asks what your host requires. ",
            choices: [
                "host_murder_r_change"
            ],

        },

        host_murder_r_change: {//Demigod
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "914995291294425139",
            message: "Your host draws his image on the wall, thereby becoming a God, (which makes you part of God).",
            choices: [
                "joe_audio"
            ],

        },

        runner: {
            interactionType: BUTTON,
            label: "Run Away",
            style: "PRIMARY",
            message: "You get the fuck out of there.\n\nYou run away back to the other side of the rock face.\n\nYou’re outnumbered here, and just on the other side of the rock face is your merry band of retards.\n\nSlow or not, there’s safety in numbers.\n\nMaybe you and your Mong tribe can take them together?",
            choices: [
                "runner_continue"
            ],

        },

        runner_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You make a run for it over the rock face. Out of breath, you return and find yourself back with the Mong tribe. They want to know where their food is. You explain in a language they can grasp that you didn’t get any.",
            choices: [
                "runner_continue_again"
            ],

        },

        runner_continue_again: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "An argument breaks out within the tribe’s ranks.\n\nIt’s about the sun going down.\n\nArthur, a tribal elder says that the sun went down because Luca, another tribesman hid it.\n\nLuca says “That’s not true. I did not hide the sun! You can watch me everyday, I never hide the sun.”\n\nArthur says, “Maybe he doesn’t hide it, but he definitely kills it everyday.”\n\nA fight breaks out.",
            choices: [
                "peacemaker",
                "troublemaker",
                "woo"

            ],

        },

        peacemaker: {
            interactionType: BUTTON,
            label: "Make Peace",
            style: "PRIMARY",
            message: "You say “It’s ok, Luca! You are not kill the sun everyday! Arthur, the sun goes bye bye, because it's tired. It comes back in a few hours.”",
            choices: [
                "peacemaker_continue"

            ],

        },

        peacemaker_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Luca and Arthur both look to you for further clarification.\n\n You explain to them that the Sun has a mind of its own and sometimes it needs a rest, just like we do. \n\nArthur confides in you that he doesn’t like the dark and he wants the Sun to be awake more. You tell him it’s not possible but he persists. \n\nArthur pulls some coffee beans out from underneath his loin cloth then tells you to feed this to the Sun. If it doesn’t work, he’ll kill you. \n\nYou head off towards the Sunset. \n\nWalking and walking and walking with your coffee beans.",
            choices: [
                "peacemaker_continue_again"

            ],

        },

        peacemaker_continue_again: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "For miles you’ve walked, not really knowing why. You have no idea where you’re going, perhaps you’ll just die? Just as this thought enters your head a large owl picks you up by the robe and carries you off into oblivion.",
            choices: [
                "peacemaker_dreamer"

            ],

        },

        peacemaker_dreamer: {//Owl Role
            interactionType: BUTTON,
            label: "Weeee!",
            style: "PRIMARY",
            assignRole: "914995049438253057",
            message: "The owl soars far from the wilderness, far past the sun, far beyond the parameters of the Labyrinth.\n\nYou are dropped.",
            choices: [
                "dreamer"

            ],

        },

        troublemaker: {
            interactionType: BUTTON,
            label: "Make Trouble",
            style: "PRIMARY",
            message: "You say “Luca totally killed the sun! I saw it Arthur. I think he does it everyday!” ”",
            choices: [
                "troublemaker_continue"

            ],

        },

        troublemaker_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Luca immediately crushes your head with a rock. Nice job, asshole.",
            choices: [
                "limbo"

            ],

        },

        start_over: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You float around in purgatory for awhile, and end up back at the beginning of the Labyrinth", //Narrative note, flesh out.
            choices: [
                "entrance_continue"

            ],

        },

        woo: { //Woo! role
            interactionType: BUTTON,
            label: "Woo!",
            style: "PRIMARY",
            assignRole: "914995151515049994",
            message: "You grab two pots and bang them together yelling “Woo!”",
            choices: [
                "woo_continue"

            ],

        },

        woo_continue: {
            interactionType: BUTTON,
            label: "Woo!",
            style: "PRIMARY",
            message: "Hearing your clanging, the Mong Tribe immediately bows to you. They ask what you wish, anything they will do for you, you tell them to take you back to the Labyrinth. The break down a cave wall and it leads you to the Labyrinth.",
            choices: [
                "dinner"

            ],

        },

        savage: {//Baby Killer Role
            interactionType: BUTTON,
            label: "Attack the Kid",
            style: "PRIMARY",
            assignRole: "914995602293657680",
            message: "You grab the tribal kid and smash his head on a rock. Maybe it’ll signal a warning to them that you’re not to be trifled with.",
            choices: [
                "savage_continue"

            ],

        },

        savage_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The cannibals all pause in stunned silence. Then, in unison, they bow at your feet. One of them hesitated ever so slightly (they’re wearing the same robe as you) before bowing with the rest. They keep chanting. You don’t know what’s going on, but whatever you did, they liked it. They hoist you up on their shoulders chanting. “Yanaglanchi! Yanaglanchi!” Drumming starts up. ",
            choices: [
                "savage_continue_again"

            ],

        },

        savage_continue_again: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You are now their leader. \n\nThey take you to a cave. Inside the Cave there’s a bunch of people sitting and waiting. They’re looking at strange paintings on the wall. Most of them are drawings of monkeys with large phalluses. Some are debating as to whether or not the monkey drawing is a dick or a tail? Others are shouting at the shouters. Some people are fighting. \n\nThe tribal elders sit you down in a large stone chair. \n\nThe cave is your court. One of your new counsels speak to you, (in perfect English) he asks what you require.",
            choices: [
                "scholar",
                "silence",
                "transdimensional"

            ],

        },

        transdimensional: { //Transdimensional
            interactionType: BUTTON,
            label: "Draw your own image.",
            style: "PRIMARY",
            assignRole: "912878133676507156",
            message: "Please upload the image you want to draw on the wall to <#912057554123763723>.", //prompt to upload image to channel and then push them on to joe_audio afterwards
            choices: [
                "drawn_nothing"
            ],
        },
        
        drawn_nothing: { //prompt a successful upload
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You haven't drawn anything.\n\nPlease upload the image you want to draw on the wall to <#912057554123763723>.",
            choices: [
                "transdimensional"
            ],
        },

        r_change: {
            interactionType: BUTTON,
            label: "Draw Your Own Image",
            style: "PRIMARY",
            message: "You draw your own image on the wall, for the tribe to enjoy.", //prompt to upload image to channel and then push them on to joe_audio afterwards
            choices: [
                "joe_audio"
            ],
        },

        silence: {
            interactionType: BUTTON,
            label: "Stay Silent",
            style: "PRIMARY",
            message: "In the endless hum of Silence you feel your soul levitate to a plane beyond this one. Many call this the Astral Plane. You find this aural self transport to an endless void.",
            choices: [
                "lsd"

            ],

        },

        scholar: {//Add monkey dick role
            interactionType: BUTTON,
            label: "Monkey Dick?",
            style: "PRIMARY",
            assignRole: "914995905432813590",
            message: "A previous incarnation. You learn much about this tribe’s roots. One of the cave dwelling tribal elders tells you: \n\nSumerians came from a planet, Bonmidpyrasa, in a nearby solar system, whose apogee resided in a 4,800 retrograde elliptical orbit beyond Sirius. According to their records, likely using sonar as scientists and bats do today, they located phat asses on planet Earth.",
            choices: [
                "scholar_continue"
            ],

        },

        scholar_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "These were that of baboons. Due to a failing infrastructure on Bonmidpyrasa, Jeff the queen, dispatched his heir, Simba, on a rocket to Earth to recover enough phat ass so that he could feed and clothe their race for ions.",
            choices: [
                "scholar_continue_again"
            ],

        },

        scholar_continue_again: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Recently, Sumerian ass-mines have been found and carbon dated in Duluth, Minnesota. Ass-mining operations were occurring at the exact time and location that Artholopicuseseses (Lucii) was: our genetic origins are undeniably linked to Simba’s phat ass-mining. These gods and their baboon ass mines are our true ancestors. Based on these confirmed archaeological discoveries as well as their pictogram languages, we can deduce that Sumerians mated with monkeys.",
            choices: [
                "scholar_continue_final"
            ],

        },

        scholar_continue_final: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "After hearing the history of the Monkey Dick god, you decide to:",
            choices: [
                "scam",
                "tldr",
                "naive"
            ],

        },

        scam: {
            interactionType: BUTTON,
            label: "Call it a Scam",
            style: "PRIMARY",
            message: "You call it a scam and tell them you’re bored.",
            choices: [
                "scam_continue"
            ],

        },

        tldr: { //TLDR Badge
            interactionType: BUTTON,
            label: "TLDR",
            style: "PRIMARY",
            assignRole: "914996052359270430",
            message: "Your laziness is not rewarded. Continue to learn your fate.",
            choices: [
                "deadend_joe"
            ],

        },

        naive: { //Scholar Role 
            interactionType: BUTTON,
            label: "Tell Me More",
            style: "PRIMARY",
            assignRole: "914996143019155526",
            message: "The tribe is very pleased with your enthusiasm. \n\nAnother cave dwelling elder runs a slideshow presentation with a series of pictures. He speaks: \n\n“Since the dawn of man, if a story was ever worth being told, we tried to find a way to tell it to other people. It is presumed that spoken language is quite old and that written language is a relatively modern technology which necessitated out of it. But the evidence shows the great migration out of Africa was preceded by at least a million years of language without speech. Out of these proto-languages came the written word, Sumerian and Egyptian Hieroglyphics being amongst the first. As such, this is an alphabet where storytelling — the imaginary essentials of language — takes its root. There is no becoming truly and fully visually literate without knowledge of Sumerian Cuneiform and Egyptian Hieroglyphics. The simple fact is that this is a powerful, mysterious force that makes us do things.It is highly structured based on ancient geometric cosmology, it is a language which, instead of pulling out the answer, illuminates the mystery. It is a story about how the story is shaped.” \n\nYou clap your hands and raise to your feet. “That’s amazing!” You shout. You want to know more. \n\nOne of the guides takes you towards another wing of the cave, where imbedded in the rocks is a vast library. \n\nIt’s all about Nautilus, the cave dwelling tribe and their history. You earnestly grab a book, then another, and then another. You devour its pages with a greater fervor, as it tells a compelling tale of its own history that you, being the new tribal leader have inherited. \n\nThen, all of a sudden, you find yourself sucked into the pages of the book.",
            choices: [
                "sefirot" //send to Sefirot
            ],

        },

        scam_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You’re right, it’s a scam. Like everything else, it was imaginary. Most everything in life is. What would you like to do, leader?",
            choices: [
                "abandon",
                "sell",
                "repent"
            ],
        },

        repent: {
            interactionType: BUTTON,
            label: "Renounce",
            style: "PRIMARY",
            message: "Your humility is smiled upon by the Gods of the Labyrinth. They place you in a favorable room.",
            choices: [
                "repent_continue"

            ]
        },

        repent_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "In this room, is a red carpet spanning horizontally from one wall to the other. \n\nOn one end of the red carpet is your high school crush, she’s sitting in your high school cafeteria asking you to join MODEL U.N. \n\nOn the other end of the carpet sits a young Anime WAIFU body pillow come to life. She beckons you to join her on an adventure. \n\nBeyond the red carpet, sits a plain WHITE DOOR exiting the room. \n\nWhat do you choose?",
            choices: [
                "crush",
                "waifu",
                "whitedoor"

            ]
        },
            
        abandon: {
            interactionType: BUTTON,
            label: "Abandon Them",
            style: "PRIMARY",
            message: "You decide to abandon these people. On your way out, you notice another dressed like you. You motion for him to follow.",
            choices: [
                "abandon_continue"
            ],

        }, 

        abandon_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You and another robed cave-dweller go to the back of the cave where the fellow initiate offers you their ass since you’re the leader. You tell them to stop being so silly, you don’t need their ass (yet) you need to get back to the Labyrinth, you went off course when you decided to go through that stupid Handicap Accessible door.",
            choices: [
                "abandon_continue_again"
            ],
            
        }, 
      
        abandon_continue_again: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You find a hole in the ground at the bottom of the cave, inside is a swirl of cold wind and not much else leading on into oblivion. \n\n“Well?” Says the initiate. \n\nYou have their ass. You finish quickly. \n\nThen you jump into the hole in the ground. You fall… and fall.. and fall… ",
            choices: [
                "lsd" 
            ],
            
        }, 

        sell: {
            interactionType: BUTTON,
            label: "Fold the Narrative",
            style: "PRIMARY",
            message: "You try and sell them on a better mythology, with better characters and you at the center.",
            choices: [
                "sell_continue"
            ],
            
        }, 

        sell_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You tell them:\n\n “It’s a cute story, but what keeps it from being a compelling framing narrative is the fact that is completely lacking in self-reference.” \n\nThey look at you puzzled, “You see,” you say, “all of the best narratives are explicitly aware they’re a narrative and in fact have a way of referencing they’re a narrative within the form. The form and the content reference each other in compelling ways thus weaving a deeper thread in your neuromachinery thus creating the impression of a 4th dimension which you find yourself swept up in (often unconsciously)”. \n\nThe tribe has had enough of your shit, the tribal elder lets out a high-pitch whistle and the tribe murders you.",
            choices: [
                "lsd" 
            ],
            
        }, 

        open_red: {
            interactionType: BUTTON,
            label: "RED",
            style: "PRIMARY",
            message: "There’s no roaring beasts. But what’s this? It’s a luxurious spread laid out on the table. With a tag that reads “Reserved for [your name]”. \n\nThe investigatory dinner is sumptuous. There’s a chiffonade of lobster (a salad of cold lobster, cubed foie gras, a touch of cognac and, we suspect, cayenne, and tarragon mayonnaise flavored with tomato, tossed with lettuce). In addition, there’s fresh foie gris with aspic, braised sweetbreads with a light truffle sauce, roast quail and those delectable tiny birds from the Landes region of France, ortolans. There’s also andouillettes served with an outstanding sorrel sauce and a mysterious meat you cannot quite identify but smells strongly of chicken. The wine is a fine Pommard.", //Can [your name] @ the person playing?
            choices: [
                "open_red_continue",
            ],
        },

        dinner: {
            interactionType: BUTTON,
            label: "RED",
            style: "PRIMARY",
            message: "You walk in to a room. What's this? It’s a luxurious spread laid out on the table. With a tag that reads “Reserved for [your name]”. \n\nThe investigatory dinner is sumptuous. There’s a chiffonade of lobster (a salad of cold lobster, cubed foie gras, a touch of cognac and, we suspect, cayenne, and tarragon mayonnaise flavored with tomato, tossed with lettuce). In addition, there’s fresh foie gris with aspic, braised sweetbreads with a light truffle sauce, roast quail and those delectable tiny birds from the Landes region of France, ortolans. There’s also andouillettes served with an outstanding sorrel sauce and a mysterious meat you cannot quite identify but smells strongly of chicken. The wine is a fine Pommard.", //Can [your name] @ the person playing?
            choices: [
                "open_red_continue",
            ],
        },

        open_red_continue: {
            interactionType: BUTTON,
            label: "That Looks Yummy",
            style: "PRIMARY",
            message: "The meal is impressive. You’re very hungry too. True, there’s roars about, but this is truly the most remarkable spread you’ve seen. What will you do?",
            choices: [
                "open_red_refuse",
                "open_red_champ",
                "open_red_nothungry"
            ],
        },

        open_red_refuse: {
            interactionType: BUTTON,
            label: "I don't eat meat.",
            style: "PRIMARY",
            message: "Good eye, the meat looks rancid.",
            choices: [
                "vegan_path"
            ],
        },

        vegan_path: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Eating rancid meat is not on the menu for you today.\n\n You are still very hungry though. \n\nPeeking past the table, you see a slightly opened door with a light coming from behind it. You walk through. Beyond here on a table is a larger spread of veggies. There is also particularly scrumptious human meat on a plate next to the veggies. ",
            choices: [
                "eat_asparagus",
                "eat_human"
            ],
        },

        eat_asparagus: {
            interactionType: BUTTON,
            label: "Eat some asparagus.",
            style: "PRIMARY",
            message: "The asparagus was a bit dry, and you are still hungry. \n\nWhat do you do?",
            choices: [
                "eat_carrots",
                "eat_human"
            ],
        },

        eat_carrots: {
            interactionType: BUTTON,
            label: "Eat some carrots.",
            style: "PRIMARY",
            message: "The carrots were a bit better, but you're still starving. \n\nWhat do you do?",
            choices: [
                "eat_brocolli",
                "eat_human"
            ],
        },

        eat_brocolli: {
            interactionType: BUTTON,
            label: "Eat some brocolli.",
            style: "PRIMARY",
            message: "It appears this brocolli was sautéed in olive oil and fresh cracked pepper, which you found most agreeable. However, you're still hungry. \n\nWhat do you do?",
            choices: [
                "eat_kale",
                "eat_human"
            ],
        },

        eat_kale: {
            interactionType: BUTTON,
            label: "Eat some kale.",
            style: "PRIMARY",
            message: "Kale is never a pleasure, but you will do anything to cure this hunger. Unfortunately you're still hungry. \n\nWhat do you do?",
            choices: [
                "eat_greenbeans",
                "eat_human"
            ],
        },

        eat_greenbeans: {
            interactionType: BUTTON,
            label: "Eat some green beans.",
            style: "PRIMARY",
            assignRole: "912802977125900298",
            message: "Congratulations! You didn't cave in and eat the human meat. Not only are you no cannibal, you didn't allow your (admittedly insatiable) hunger to warp your moral judgement.", 
            choices: [
                "vegan_super_champ"
            ],
        },


        eat_human: { //Add Cannibal Role
            interactionType: BUTTON,
            label: "Eat human meat.",
            style: "PRIMARY",
            assignRole: "914996316835295312",
            message: "Congratulations. You're a cannibal.",
            choices: [
                "cannibal"
            ],
        },

        cannibal: { 
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "That was a lot better than you thought it was going to be. You look around the room and notice a door in the corner with light shining from underneath. ",
            choices: [
                "cannibal_continue"
            ],
        },

        cannibal_continue: {
            interactionType: BUTTON,
            label: "Open the door.",
            style: "PRIMARY",
            message: "You open it upon and find yourself in a vast wilderness.\n\n In the center of your POV is a tribe of dancing cannibals. \n\nThey are singing while slaughtering their latest human meal. You are moved by their tribal rhythms, the beat moves through you as the smell of the burning human flesh fills you with an even deeper hunger. \n\nYou rip off your clothes and dance among them. They start dancing with you, arm in arm … you feast on the flesh with your new brethren.",
            choices: [
                "cannibal_continue_next"
            ],
        },

        cannibal_continue_next: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Just then, from a corner bush, you hear the shouts of a tribal child. \n\nYou cannot understand what he’s saying, but you know he’s distressed. \n\nThe music stops. \n\nYou and your new tribe walk over to see a person, much like you used to be, wearing an initiate's robe.\n\nWhat do you do to this initiate?",
            choices: [
                "murder",
                "chaser",
                "servant"
            ],
        },

        murder: {
            interactionType: BUTTON,
            label: "Kill Him",
            style: "PRIMARY",
            message: "The stranger begins explaining himself. You take no chances. You can’t risk the tribe not accepting you, you grab a spear and stab the explaining stranger.",
            choices: [
                "murder_continue"
            ],
        },
        
        murder_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The cannibals all pause in stunned silence. \n\nThen, in unison, they bow at your feet. One of them hesitated ever so slightly (they’re wearing the same robe as you) before bowing with the rest. \n\nThey keep chanting. You don’t know what’s going on, but whatever you did, they liked it. \n\nThey hoist you up on their shoulders chanting. “Yanaglanchi! Yanaglanchi!” Drumming starts up. ",
            choices: [
                "savage_continue_again"
            ],
        },
        

        chaser: {
            interactionType: BUTTON,
            label: "Chase Him",
            style: "PRIMARY",
            message: "The stranger makes a run for it, up a rockface. You, realize he’s a fellow initiate so you follow him.",
            choices: [
                "chaser_cont"
            ],
        },

        chaser_cont: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Your new friend makes a run for it over the rock face. Out of breath, you find yourself among the slow-witted Mong tribe. They want to know where their food is. Your friend explains in a language they can grasp that you didn’t get any. An argument breaks out within the tribe’s ranks. It’s about the sun going down. Arthur, a tribal elder says that the sun went down because Luca, another tribesman hid it. Luca says “That’s not true. I did not hide the sun! You can watch me everyday, I never hide the sun.” Arthur says, “Maybe he doesn’t hide it, but he definitely kills it everyday.” A fight breaks out.",
            choices: [
                "peacemaker",
                "troublemaker",
                "woo"
            ],
        },

        
        servant: {
            interactionType: BUTTON,
            label: "Join him",
            style: "PRIMARY",
            message: "You watch as the stranger murders the child on a rock. Everyone in the tribe falls for him. And bows at his feet. You do likewise.",
            choices: [
                "servant_continue"
            ],
        },

        servant_continue: {
            interactionType: BUTTON,
            label: "Join him",
            style: "PRIMARY",
            message: "Some time passes as you serve your new Master.",
            choices: [
                "servant_continue_next"
            ],
        },



        servant_continue_next: {
            interactionType: BUTTON,
            label: "Join him",
            style: "PRIMARY",
            message: "Your Master is stern but fair. \n\nAnd best of all, you can understand him as he speaks perfect English, just like you! You rub his feet in the cave, you wash his robes and body in the large lagoon. \n\nOne day he asks you to accompany him to the back of the cave. He takes you to a portal in the ground that leads to endless oblivion. He wants you to join him to serve as his catamite. You reluctantly agree.\n\n He tells you, “We may not make it through this abyss, so in case we’re going out, I want to make sure we’re going out satisfied.” He grabs you and takes your ass until its raw.\n\n He then throws you in front of him, hurling you into the abyss. ",
            choices: [
                "limbo"
            ],
        },

        open_red_champ: {
            interactionType: BUTTON,
            label: "Enjoy the Meal",
            style: "PRIMARY",
            message: "You sit and enjoy the nice luxurious meal.",
            choices: [
                "continue_champ"
            ],
        },

        continue_champ: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You enjoyed your meal. It was the best you ever had. You now stand up and walk through to the next room. \n\nIn this room, is a red carpet spanning horizontally from one wall to the other. \n\nOn one end of the red carpet is your high school crush, she’s sitting in your high school cafeteria asking you to join MODEL U.N. \n\nOn the other end of the carpet sits a young Anime WAIFU body pillow come to life. She beckons you to join her on an adventure. \n\nBeyond the red carpet, sits a plain WHITE DOOR exiting the room. \n\nWhat do you choose?",
            choices: [
                "crush",
                "waifu",
                "whitedoor"
            ],
        },

        crush: {
            interactionType: BUTTON,
            label: "MODEL U.N.",
            style: "PRIMARY",
            message: "You sit down. Your high school crush asks you if you want to represent PALESTINE or ISRAEL in your Model U.N. course. They're the only two countries left and you're scheduled to represent one while another student will take the other for your scheduled debate today, (I hope you're prepared).\n\n Which side do you choose?",
            choices: [
                "palestine",
                "israel",
                "stupid"
            ],
        },

        palestine: {//Palestinian flag role
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "914996484221595648",
            message: "You find yourself arguing that Israel is an apartheid state that is doing the very thing we’re told European settlers did in order to take over the new world 4 centuries ago.\n\nYou say that the Palestinian people have been forcibly removed from their homes, marginalized as citizens, and relegated to an increasingly hostile standard of living underneath Israeli occupation.\n\nYou maintain it is getting worse by the day, with Israel using political apparatuses to subjugate them in accordance to promises made in a book written thousands of years ago.\n\nYou get very passionate as you argue for this. Your eyes welling up with tears. ",
            choices: [
                "palestine_continue"
            ],
        },

        
        palestine_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Mid-sentence, they cut your mic. The fire alarm rings.\n\nDroves of people rush to the exits in terror. Your high school flame looks up at you with tears in her eyes.\n\nShe eeks out a “How could you?” as she joins the rest of the fleeting mob.\n\nJust then, your High School principal puts his hand on your shoulder.\n\n“Come with me,” he says and walks you to an empty classroom.\n\nYou fucked up. Big time.",
            choices: [
                "deadend_tickles"
            ],
        },

        israel: {//Israeli flag role
            interactionType: BUTTON,
            label: "ISRAEL",
            style: "PRIMARY",
            assignRole: "914996490315923606",
            message: "You find yourself arguing that this is the land of God's Chosen People. You remark on their 3.5 thousand years of suffering at the hands of gentile governments and tell them the state itself was founded in 1948 as all of the following: \n\na) a safe haven for a historically maltreated and nationless people, \n\nb) an installment of First World ideals and practices in a historically primitive (even barbaric land), \n\nc) a fulfillment of a prophecy written about in the Chosen People’s holiest of books. \n\n You also make note that the entire concept of this debate is illegitimate, as Palestine doesn't even hold a seat at the U.N.",
            choices: [
                "israel_continue"
            ],
        },

        israel_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "As you rage on, your high school crush sneaks under the podium and gives you the greatest blowjob you’ve ever had. Evidently, she likes what you have to say on the topic of the Holy Land. \n\nAmazingly, you barely lose your train of thought as you continue to eloquently speak of Israel with the firmest erection you can recall having. \n\nAfter the debate, she joins the rest of the student body and the faculty in applauding your acumen. You’re invited to Israel to study and learn for one year. Your high school crush wishes to join you. \n\nYou put your hand on her shoulder and say ''I'm sorry, love. Where I'm going I have to go alone. Thanks for the beej.'' You then peck her cheek and head off.",
            choices: [
                "israel_continue_two"
            ],
        },

        israel_continue_two: {
            interactionType: BUTTON,
            label: "ISRAEL",
            style: "PRIMARY",
            message: "Next thing you know, you’re boarding a plane. You’re surrounded by strangers. You fall asleep. \n\nWhen you awake you hear an overhead voice say “Welcome to Israel”. You get off the plane, grab your bags, and look around the terminal.\n\n A woman you don’t know has a sign with your name on it. She asks you if you ordered a limo. Reluctantly you affirm. She takes you to the limo. From there you’re taken to the Capitol building where a group of 20,000 people clamor and shout your name. \n\nBeside yourself, you walk up to the podium. You go to the microphone.",
            choices: [
                "clueless",
                "terrorist",
                "messiah"

            ],
        },

        stupid: {
            interactionType: BUTTON,
            label: "Leave. This is Stupid!",
            style: "PRIMARY",
            message: "I just want to buy a fucking NFT. What the fuck is all this shit? You head to the White door.",
            choices: [
                "whitedoor"
            ],
        },

        waifu: {
            interactionType: BUTTON,
            label: "WAIFU",
            style: "PRIMARY",
            message: "You see a waifu.\n\nThe waifu tells you she’s your sister. Seeing as she is not human, you don’t believe her. Also, even if that were possible (it isn’t as far as you can tell) she’s still the most beautiful thing you’ve ever seen.\n\nWhile the two of you make small-talk a Cyber Kong, a member of the most technologically advanced species on Earth busts through the door and tells you he’s going to kill you.\n\nYou have nothing at your disposal accept a lump in your pocket.\n\nWhat do you do?",
            choices: [
                "incest",
                "apple",
                "brute"
            ],
        },

        apple: {
            interactionType: BUTTON,
            label: "Pocket",
            style: "PRIMARY",
            message: "You reach in your pocket and pull out an apple with a nose. You eat it.",
            choices: [
                "apple_continue"
            ],
        },

        apple_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Immediatelly the CyberKong sprouts to 100 feet tall in a matter of seconds.\n\n75 arms pop out of his back (how did you count so quickly?). His eyes start flashing, and blinking at different times… all 46 of them (or is it 47? You can’t tell. He won’t stop moving.) He grabs a banana the size of a bus and smashes it down toward you. It barely misses. You’re in deep trouble.\n\nThere are small woodland creatures surrounding you on all sides, pulling you by the legs. They beckon you to come with them.",
            choices: [
                "creatures",
                "fighter",
                "jumper"
            ],
        },

        fighter: {
            interactionType: BUTTON,
            label: "Attack CyberKong",
            style: "PRIMARY",
            message: "You’ve been killed. Continue your journey, dope.",
            choices: [
                "limbo"
            ],
        },

        jumper: {
            interactionType: BUTTON,
            label: "Jump",
            style: "PRIMARY",
            message: "You jump, you fly in to the air. You broke through the skylight. You continue to fly up in to the Abyss. Suddenly you find yourself in a boat on a river. Drifting.",
            choices: [
                "dreamer"
            ],
        },

        creatures: {
            interactionType: BUTTON,
            label: "Go With Them",
            style: "PRIMARY",
            message: "You’re taken underground where you find yourself the size of a squirrel. \n\nYou can still hear the thud of the CyberKong’s banana, but you’re no longer afraid. You are among your new friends and with them you frolic through the trail.\n\n You look down to see you now have fuzzy feet and paws. Your frolic becomes a hop. You’re now a fluffy little bunny. \n\nHopping hopping hopping. \n\nYou check your pocket, all there is is a little watch. You don’t know where you’re supposed to be, but you know one thing’s for sure, you’re very late. \n\nYou run and run until you are all alone. You find a large red head, many times the size of you … though how big are you now anyway? The CyberKong was 100 feet, this girl might not even be 4 feet, but it appears just as big to you because you’re now a small fluffy bunny. \n\nShe’s rummaging through her drawers.",
            choices: [
                "shouter",
                "hopper",
                "hide"
            ],
        },

        shouter: {
            interactionType: BUTTON,
            label: "Shout at Her",
            style: "PRIMARY",
            message: "The redhead looks down at you, smiles, and picks you up. She starts to nuzzle your little bunny nose. She then throws you as far as she can. You float through the air at a remarkable speed.",
            choices: [
                "lsd"
            ],
        },

        hopper: {//Role Little Cute Guy
            interactionType: BUTTON,
            label: "Hop Passed Her",
            style: "PRIMARY",
            assignRole: "914997370381533244",
            message: "You hop passed her. You soon find yourself far away from any sentient life. You are lost and alone and a bunny. You are at a dead end.",
            choices: [
                "deadend_joe"
            ],
        },

        hide: {
            interactionType: BUTTON,
            label: "Hide in Drawer",
            style: "PRIMARY",
            message: "As you hide in the drawers a large object (presumably CyberKong's big banana) smashes down next to you. You stumble backwards, and fall in an unexpected hole.",
            choices: [
                "limbo"
            ],
        },


        brute: {
            interactionType: BUTTON,
            label: "Fight the CyberKong",
            style: "PRIMARY",
            message: "You run at the CyberKong and punch him in the face. \n\nThe Cyber Kong kicks the fucking shit out of you. \n\nYou’re lying down: bruised, broken, and bloody. What were you thinking? You’re in way over your head. \n\nThe Cyber Kong has been at this shit for three-hundred years! He’s practically immortal. Well, no matter, you’re basically dead now. Luckily, he’s bored of you. He takes your sister waifu and leaves. \n\nYou’re in bad shape, what do you do?",
            choices: [
                "fruit_eat",
                "brute_pray",
                "brute_die"
            ],
        },

        fruit_eat: {
            interactionType: BUTTON,
            label: "Reach in Pocket",
            style: "PRIMARY",
            message: "You reach in your pocket and pull out an apple-like fruit with a nose. Without hesitating, you eat it. It immediately transports you back to the fight (you're much taller too).",
            choices: [
                "fruit_eat_continue"
            ],
        },


        fruit_eat_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You stand up and are ready to face the CyberKong again. He sprouts to 100 feet tall in a matter of seconds. His eyes start flashing. He grabs a banana the size of a bus and smashes it down toward you. It barely misses. You’re in deep trouble. There are small woodland creatures surrounding you on all sides, pulling you by the legs. ",
            choices: [
                "creatures",
                "fighter",
                "jumper"
            ],
        },

        brute_pray: {
            interactionType: BUTTON,
            label: "Pray",
            style: "PRIMARY",
            message: "A majestic angel swoops down from out of the sky and in the flash of an eye scoops you up and flies you over a vast wilderness.\n\nJust then, the angel spots a tribe of primitives creating smoke signals of monkeys with large dicks. \n\nThe angel gets distracted and drops you.",
            choices: [
                "limbo"
            ],
        },

        brute_die: {
            interactionType: BUTTON,
            label: "Die",
            style: "PRIMARY",
            message: "You die and resurrect at the entry of the Labyrinth.",
            choices: [
                "entrance_continue"
            ],
        },

        incest: {
            interactionType: BUTTON,
            label: "Fuck Your Sister",
            style: "PRIMARY",
            message: "Kind of weird you picked that one. You didn’t have to. There was no reason for it in this context. Anyway, the CyberKong still wants to kill you. What do you want to do now?",
            choices: [
                "incest_again",
                "pocket",
                "brute"
            ],
        },

        pocket: {
            interactionType: BUTTON,
            label: "Pocket",
            style: "PRIMARY",
            message: "You pull out a strange fruit with a human nose. You swallow it. You blink and find yourself in another realm.",
            choices: [
                "lsd"
            ],
        },

        incest_again: {
            interactionType: BUTTON,
            label: "Fuck Your Sister Again",
            style: "PRIMARY",
            assignRole: "912642611129483275",
            message: "There's definitely something wrong with you. Choose your fate.  ", //expand narrative
            choices: [
                "deadend_joe",
                "wilderness" 
            ],
        },

        deadend_joe: { 
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "912443633570033754",
            message: "This is where you are, a dead-end. You haven’t gotten the message. \n\nVisit <#912057501850173482> to figure out how to get back to The Labyrinth.",
            choices: [],
        },


        whitedoor: {
            interactionType: BUTTON,
            label: "WHITE DOOR",
            style: "PRIMARY",
            message: "Good choice. You've avoided the sirens and made the prudent decision to go through the White Door. This is a sort of freebie for you. Call it a reward for making wise choices." ,
            choices: [
                "joe_audio"
            ],
        },

        open_red_nothungry: {
            interactionType: BUTTON,
            label: "Ignore the Meal",
            style: "PRIMARY",
            message: "You aren't hungry, but keep hearing roars come from the Labyrinth. You continue on past the dinner.",
            choices: [
                "not_hungry_continue"
            ],
        },

        not_hungry_continue: { //Prompt after text sent
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "912872401912619039",
            message: "Wow. You may not be hungry for food, you may be hungry for adventure!\n\nIn the middle of the room sits a notepad. The top of the notepad says, “Write the unspeakable name.\n\nPlease go in to <#912057609064951878> and type the secret password. \n\nHint: Tetragrammaton", //prompt for a word to be typed in chat, one magic word sends them to a special dead end, anything else sends them continuing the story.
            choices: [
                "entered_nothing"
            ],
        },
        
        entered_nothing: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You didn't enter in anything at all! Go on, give it a try.",
            choices: [
                "not_hungry_continue"
            ],
        },

        
        correct_password: {
            interactionType: BUTTON,
            label: "Correct",
            style: "PRIMARY",
            message: "You guessed the correct password. Congratulations!",
            choices: [
                "joe_audio"
            ],
        },

        anything_else: {
            interactionType: BUTTON,
            label: "Anything Else",
            style: "PRIMARY",
            message: "Sorry you typed the wrong password. \n\nThe ground shakes and a passageway opens up underneath your feet. You fall into another room. It’s the size of a closet. You cautiously move through it and find another room. Luckily for you, there’s a doorway, this has no door though. You walk straight through and you see a nice king size bed with silk sheets and a comfy goose down-comforter. It’s quiet and you are a bit tired..",
            choices: [
                "dreamer",
                "cautious",
                "impetuous"
            ],
        },

        cautious: {
            interactionType: BUTTON,
            label: "Cautiously Sleep",
            style: "PRIMARY",
            message: "You go into bed as you are tired, but do so cautiously.",
            choices: [
                "cautious_continue"
            ],
        },

        cautious_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "As you slip into bed you hear the rumbles of what sounds like either an earthquake or a stampede of large wild animals. You look at the ground and see the foundation is opening up underneath you. You fall. You scream out but no one can hear. Not even you. You’re fall through a pit of deep darkness. You close your eyes. You open your eyes and find yourself in Limbo. Here is a place filled with people who are also trapped by their decisions. They’re confused and looking for answers. They come up to you and ask you if you know how to get out of here. The truth is, you just fell and have no idea how to escape. There is nothing around you accept endless blackness, a cold hard ground, and a TV screen playing a generic welcome message: A spokesmodel walks into frame and says “Welcome to Limbo”. For some reason she’s dummy thicc and naked. There’s a group of people clamored around the screen, watching the loop of her saying “Welcome to Limbo” over and over. You look around for an escape. There’s none visible. You walk into the direction of the blackness and realize there’s no ground beyond the platform you’re standing on. You watch as other people plunge into the abyss around you, their screams of terror echo as they leap off one at a time. ",
            choices: [
                "sit_and_cry",
                "lust",
                "escape"
            ],
        },

        sit_and_cry: {
            interactionType: BUTTON,
            label: "Sit and cry",
            style: "PRIMARY",
            message: "You sit down and cry. You're still in Limbo",
            choices: [
                "sit_and_cry",
                "lust",
                "escape"
            ],
        },

        escape: {
            interactionType: BUTTON,
            label: "Jump into the Abyss",
            style: "PRIMARY",
            message: "You plunge in to the Abyss.",
            choices: [
                "joe_audio"
            ],
        },

        lust: {
            interactionType: BUTTON,
            label: "Jack off",
            style: "PRIMARY",
            message: "You begin to beat your pud.\n\nYou feel your soul leave you, it sinks another layer deeper, surrounded by an Abyss. \n\nHere you are with a herd of other coomers, mysteriously lacking any capability to do anything but walk in circles and beat off. \n\nYou stare at other people and they stare at you, your arousal is emptied out into bursts of tiny orgasms which hurt more than anything. You are surrounded by television screens of increasingly bizarre behavior, all of which prompt you to unthinkingly masturbate until your next fix. \n\nTears fill your eyes. \n\nJust then, you notice a large chocolate cake with your name on it. This cake could make you very happy indeed.\n\nWhat do you do?",
            choices: [
                "glut",
                "escape"
            ],
        },

        glut: {
            interactionType: BUTTON,
            label: "Eat The Cake.",
            style: "PRIMARY",
            message: "Before you know it. You're morbidly obese. \n\nAll you do is eat large amounts of junk food. You eat and eat and eat. \n\nYou cannot envision doing anything else. Just then, another aimless coomer bumps into you. \n\nHe is emaciated and starving, he begs you for a spoonful of some of your food. You look him over.\n\nWhat do you do?",
            choices: [
                "greed",
                "escape"
            ],
        },

        greed: {
            interactionType: BUTTON,
            label: "Ignore Him",
            style: "PRIMARY",
            message: "Just as you turn away, your soul slips another layer deeper. \n\nYou’re surrounded by another Abyss. You look around you and find nothing has really changed. You’re sitting, eating, hoarding your food. Just then, you feel a tap on your shoulder. It’s the starving stranger! He is now screaming out in pain, “Please! Please! I’m so hungry. Please!”\n\nWhat do you do?",
            choices: [
                "anger",
                "escape"
            ],
        },

        anger: {
            interactionType: BUTTON,
            label: "Shout at Him",
            style: "PRIMARY",
            message: "As you shout at him, he begins to shout back. Eventually, all you can hear is a deafening inaudible noise. \n\nYou feel yourself sink another layer deeper. Surrounded by the same Abyss, your shouts echo into eternity. The sounds are deafening. \n\nEventually, you don’t even know why you’re yelling anymore. And that just makes you angrier. \n\nYou look around; you are alone. \n\n He who is alone is King. More than a King, he who is alone is Only. And he who is Only is a God. No, he who is only is The God.\n\nWhat do you do?",
            choices: [
                "heresy",
                "escape"
            ],
        },

        heresy: {
            interactionType: BUTTON,
            label: "Proclaim “I AM GOD!”",
            style: "PRIMARY",
            message: "The ground crumbles beneath you. \n\nYour soul plummets another depth, much further down this time, into another wasteland — floating on nothing — surrounded by an endless Abyss. You’re in trouble. \n\nYou’re surrounded by people who are calling themselves God… but how can that be? YOU are God. What in Hell is happening?\n\nWhat do you do?",
            choices: [
                "violence",
                "escape"
            ],
        },

        violence: {
            interactionType: BUTTON,
            label: "Kill Them All",
            style: "PRIMARY",
            message: "Carnage ensues. \n\nYou’re slaughtering all those who challenge you. \n\nAll those who surrender, you reward with the allowance of serving you for eternity. \n\nYou’re here for an impossibly long time, ruling over the small square of this barren waste-scape with an iron fist, murdering any detractors. When your servants ask you why something is so, you kill them. \n\nJust then, someone stabs you in the chest. Repeatedly. He stabs you without ceasing for 7 years. You are awake and in excruciating pain for every second. \n\nWhat do you do?",
            choices: [
                "fraud",
                "escape"
            ],
        },

        fraud: {
            interactionType: BUTTON,
            label: "Play Dead",
            style: "PRIMARY",
            message: "He doesn’t care faker. \n\nHe just keeps stabbing. \n\nAfter 40 years, your mutilated body sinks again. \n\nThis fall is much deeper, much harsher, and much faster than the others. You hit the ground at a high impact. \n\nYou look up. \n\nYou’re in a ditch. \n\nIt’s a deep one. You cannot see above it. \n\nYou begin to dig. As you dig, you begin to see through to the same endless Abyss. It’s frightening. The screeches of horror emanating from it pierce your ears. \n\nYou look up. Someone is at the edge of the top of the ditch, looking down at you. \n\nYou yell to him, “Help! I’m stuck.” \n\nThe man at the ditch smiles and reaches out his hand. You think about pulling him in to take your place.\n\nWhat do you do?",
            choices: [
                "treachery",
                "escape"
            ],
        },

        treachery: {
            interactionType: BUTTON,
            label: "Take his Hand",
            style: "PRIMARY",
            message: "You pull him in to the Abyss. He should’ve known better. Right?\n\n Just then… your soul sinks into oblivion. You fall for 70 years. Each moment more painful than the last. Finally, you land in a block of ice. \n\nThere are people just outside, one of them offers you his hand. You take it. He then twists your wrist out of joint and laughs at your pain. Then a woman offers you her hand. You’d do anything to get out of this ice, you’re freezing to death! She takes your hand and twists it out of joint again. This repeats itself over and over until you scream out in endless agony. \n\nJust then, a small child with innocent eyes approaches you. The child says, ''I’m deeply sorry for your trouble. You’ve been through an unthinkable afterlife in these increasingly harsh levels of Hell. I want to put a stop to all of this because I believe you’ve learned your lesson. Please, let me help you out of this ice. I can’t bear to watch you suffer anymore.''",
            choices: [
                "treachery_continue"
            ],
        },

        treachery_continue: {
            interactionType: BUTTON,
            label: "Take His Hand",
            style: "PRIMARY",
            assignRole: "912803313278410802",
            message: "The child predictably eats your hand in one bite. \n\nHe turns into a demon who laughs along with your other tormentors. \n\nYou scream your final scream. You’ve died out of sheer hopelessness. \n\nCongratulations, you’ve made it through the First Stage of the Labyrinth (the hard way).", 
            choices: [
                "joe_audio"
            ],
        },

        impetuous: {
            interactionType: BUTTON,
            label: "Skip This",
            style: "PRIMARY",
            message: "You have no time to sleep. You must get through these rooms. There must be another way out.",
            choices: [
                "impetuous_continue"
            ],
        },

        impetuous_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You see no immediate way out. Besides the bed, there’s no furniture. There’s a wall lamp. You move the bed. Underneath the bed is a manhole cover with a sign on it saying Warning: Portal leads to Godhood. You move the cover and see a deep tunnel leading to a bright white light. You crawl in. The portal takes you to … SURPRISE… a room. You look down. You’re a lion. You look to your left and see a bunch of people with smelly nunchucks running after you. Make no mistake, they mean to do you harm.",
            choices: [
                "cowardly_tiger",
                "violent_tiger",
                "dead_tiger"
            ],
        },

        impetuous_continue_weird: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You enter a room. \n\nThere's no furniture, other than a bed in the center. There’s a wall lamp. You move the bed. Underneath the bed is a manhole cover with a sign on it saying:\n\n Warning: Portal leads to Godhood. \n\nYou move the cover and see a deep tunnel leading to a bright white light. You crawl in. The portal takes you to … SURPRISE… a room. You look down. You’re a lion. You look to your left and see someone with smelly nunchucks running after you. Make no mistake, they mean to do you harm.",
            choices: [
                "cowardly_tiger",
                "violent_tiger",
                "dead_tiger"
            ],
        },

        cowardly_tiger: {
            interactionType: BUTTON,
            label: "Run Away",
            style: "PRIMARY",
            message: "You run away. You’re not sure where you’re going but there’s a long narrow hallway you can make your way through.",
            choices: [
                "cowardly_tiger_cont" 
            ],
        },

        cowardly_tiger_cont: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "912803495445409943",
            message: "As you run away your lion fur falls off and you become bipedal again. Whether you’re in your old form or not is unclear, but you’re definitely humanoid and definitely not a lion anymore.",
            choices: [
                "limbo" 
            ],
        },

        violent_tiger: {
            interactionType: BUTTON,
            label: "Devour Them",
            style: "PRIMARY",
            message: "This idiot has no idea what's coming for him. \n\nImagine being so stupid, you don't realize that your weapon is made of feces.\n\nIs he a member of the infamous Mong tribe?\n\nAnyway, he's dead meat, either way.",
            choices: [
                "violent_tiger_cont" 
            ],
        },

        violent_tiger_cont: {
            interactionType: BUTTON,
            label: "Do the Deed",
            style: "PRIMARY",
            message: "You devour the punk. Your hunger for human flesh is now insatiable. Any weary traveler who comes down the hall goes into your belly.\n\nYou enjoy being a lion. Stalking from place to place, eating whomever stands in your way. \n\nEventually you transform back into a person again. A very sick person. \n\nYou continue to stalk the halls like you did as a lion, but it is no longer flesh you desire, but a place to lay your head.\n\nFinally, the Labyrinth smiles upon you. Blessing you with a bed.",
            choices: [
                "dreamer" 
            ],
        },

        dead_tiger_cont: { 
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You are mutilated by the punk. Better luck next time.",
            choices: [
                "entrance_continue" 
            ],
        },

        dead_tiger: {
            interactionType: BUTTON,
            label: "Freeze up",
            style: "PRIMARY",
            message: "You freeze up. If this is the end, it’s the end. Who wants to live as a lion anyway?  ",
            choices: [
                "dead_tiger_cont"
            ],
        },


        dreamer: {
            interactionType: BUTTON,
            label: "Go to Bed",
            style: "PRIMARY",
            message: "The Labyrinth ushers you in to a dream:\n\nYou find yourself in a movie theater. You’re watching The Dark Knight Rises in Aurora, Colorado, it’s a packed house. But look closer at the screen. Batman isn’t Christian Bale, he’s you. You’re getting your ass kicked by Bane. You see on the screen that the fate of the world relies on you and you’re thoroughly overmatched.",
            choices: [
                "dreamer_continue"
            ],
        },

        dreamer_continue: {
            interactionType: BUTTON,
            label: "Continue Dream",
            style: "PRIMARY",
            message: "You hear the crowd in the theater around you shout “Kick his ass, Bane!” They start screaming, shouting, and bumping into one another. They’re getting angrier and angrier. They want Batman dead. The crowd starts shouting in unison:\n\n “Kill him!\nKill him! \nKill him!” \n\n500 people demanding your death is putting you off. ",
            choices: [
                "dreamer_continue_next"
            ],
        },
        
        
        dreamer_continue_next: {
            interactionType: BUTTON,
            label: "Continue Dream",
            style: "PRIMARY",
            message: "You know you must leave, this unruly crowd is about to break into a violent mob. You get up and try to get passed the people in your aisle, they start pushing and shoving you. You fall over into the next aisle. They lift you up. You’re crowd surfing now. The crowd's hands take you to the front of the theater where you stand up in front of the screen. The people continue to shout:\n\n “Kill him! \nKill him! \nKill him!”",
            choices: [
                "dreamer_continue_next_final"
            ],
        },

        dreamer_continue_next_final: {
            interactionType: BUTTON,
            label: "Continue Dream",
            style: "PRIMARY",
            message: "You need to do something. The crowd has now realized that you’re the man they want dead up on the screen.\n\n What do you do?",
            choices: [
                "calm",
                "shoot",
                "jump_in"
            ],
        },

        calm: {
            interactionType: BUTTON,
            label: "Stay Calm",
            style: "PRIMARY",
            message: "The hostile mob tears you apart, tough luck. Hopefully you've learned from this for your next trek through the Labyrinth.", 
            choices: [
                "entrance_continue"
            ],
        },


        shoot: {
            interactionType: BUTTON,
            label: "Shoot Them",
            style: "PRIMARY",
            message: "You pull a gas mask out from your back pocket and put it on. As you open fire you pop a vicodin. Amidst the carnage, you run out the front exit. Dash 100 yards, throw the gas mask away, then run back to your car to await the authorities, (holding another gas mask). Just then a cloud of smoke surrounds you. You cannot see anything but a few black silhouettes through the haze … you are grabbed by someone or something and taken under a large dark miasma of black smoke.",
            choices: [
                "lsd"
            ],
        },

        jump_in: {
            interactionType: BUTTON,
            label: "Jump In",
            style: "PRIMARY",
            message: "You’re Batman. Bane kills you. The last few hours of the movie is you lying dead in the sewer in your batsuit. The movie tanks at the box office and you’re considered the worst Batman of all-time.",
            choices: [
                "limbo"
            ],
        },

        open_pink: {
            interactionType: BUTTON,
            label: "PINK",
            style: "PRIMARY",
            message: "There’s a tall, strongly built woman with her ankle cuffed to a sleeping male Bored Ape. She tells you not to wake the Bored Ape, and there are keys underneath the dresser in the corner of the room one leads to the next door the other is for the cuffs, and the other is a large purple key with no known use.",
            choices: [
                "simp",
                "ignore",
                "measured" 
            ],
        },

        ignore: {
            interactionType: BUTTON,
            label: "Ignore Her",
            style: "PRIMARY",
            assignRole: "912803722260774952",
            message: "You swiftly grab the keys underneath the drawer. Find the one labelled “Door”, unlock it, and walk through to the next room. You're the unfortunate combination of physically weak and emotionally calloused. Continue to learn your fate.",
            choices: [
                "deadend_joe" 
            ],
        },

        measured: { 
            interactionType: BUTTON,
            label: "Think it Through.",
            style: "PRIMARY",
            assignRole: "912803901844103228",
            message: "You remain calm. You move the drawer and find the keys. You notice one labelled “cuffs,” and you take it off the keychain. You toss it to her. Pocket the purple key then take the key to next door, unlock it and proceed through.",
            choices: [
                "wedding"
            ],
        },

        wedding: {
            interactionType: BUTTON,
            label: "Proceed",
            style: "PRIMARY",
            message: "You walk in on your wedding. \n\nYou’re not prepared at all but you know it’s your wedding. Everyone is looking at you. You’re at the alter. Everyone is waiting for the bride. Who is she? You don’t know. Does anyone else? ",
            choices: [
                "get_married",
                "run_away",
                "best_man"
            ],
        },

        get_married: {
            interactionType: BUTTON,
            label: "Get Married",
            style: "PRIMARY",
            message: "You got married to the Amazonian from the other room. You had two kids; BiBi and Boris (you really liked Bs at the time).",
            choices: [
                "get_married_continue"
            ],
        },

        get_married_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "After 11 years, you divorced (You knew you would. You got married in a fucking Labyrinth, what did you expect?)",
            choices: [
                "get_married_continue_next"
            ],
        },

        get_married_continue_next: {//Family Man role
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "914997523532361769",
            message: "You married again, to someone 14 years your junior. You’re not sure which gender they are. You are laying in your favorite recliner now, an old man. In your eyes with one of those tiny fancy contraptions they place over your iris, you can see how quickly it all moved. You blink twice and are taken to a symbol you have not seen in many years. It’s the Labyrinth symbol — it beckons.",
            choices: [
                "get_married_continue_final"
            ],
        },

        get_married_continue_final: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "You see another chapter of life you locked away. You blink again, you’re on another page. The Labyrinth calls you to come back, it’s not your time. It went by too fast. But here’s a second chance… go back.",
            choices: [
                "dinner_explain",
                "anime_fight_explain",
                "wilderness_explain"
            ],
        },

        dinner_explain: {
            interactionType: BUTTON,
            label: "Luxurious Dinner",
            style: "PRIMARY",
            message: "Wise move, who doesn't like food?",
            choices: [
                "dinner"

            ],
        },

        anime_fight_explain: {
            interactionType: BUTTON,
            label: "Anime Fight",
            style: "PRIMARY",
            message: "I see you weeb.",
            choices: [
                "waifu"

            ],
        },

        wilderness_explain: {
            interactionType: BUTTON,
            label: "A Wilderness Beckons",
            style: "PRIMARY",
            message: "It might not be fun, but this your only way back in to the Labyrinth.",
            choices: [
                "wilderness"

            ],
        },

        run_away: {
            interactionType: BUTTON,
            label: "Run",
            style: "PRIMARY",
            message: " You run on a tarmac and find yourself boarding a plane. \n\nYou’re surrounded by strangers. You fall asleep. \n\nWhen you awake you hear an overhead voice say “Welcome to Israel”. You get off the plane. You look around. \n\nA woman you don’t know has a sign with your name on it. She asks you if you ordered a limo. Reluctantly you say yes. She takes you to a limo. \n\nFrom there you’re taken to the Capitol building where a group of 20,000 people clamor and shout your name. \n\nBeside yourself, you walk up to the podium. You go to the microphone.\n\nIn your mind, thoughts swarm. Do you insult this whole thing? Do you indulge their applause? Do you ask them WTF is going on?",
            choices: [
                "clueless",
                "terrorist",
                "messiah"
            ],
        },

        clueless: {
            interactionType: BUTTON,
            label: "WTF",
            style: "PRIMARY",
            message: "You are very confused. You say you don’t know what’s going on or why you’re here. You ask if someone can explain what has happened.",
            choices: [
                "stoned"
            ],
        },

        stoned: {//Stoned to Death
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "914997611394662440",
            message: "Without warning, you are stoned to death for being a Messiah imposter. Better luck next time.",
            choices: [
                "entrance_continue"
            ],
        },

        terrorist: {//Terrorist Role
            interactionType: BUTTON,
            label: "Insult Israel",
            style: "PRIMARY",
            assignRole: "912804196829503600",
            message: "You yell out “Fuck this fucking country! I hope Saudi Arabia blows you off the fucking map!”",
            choices: [
                "terror_limbo"
            ],
        },

        terror_limbo: { //Stoned to Death
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "914997611394662440",
            message: "Without warning, you are stoned to death for being a terrorist. Your soul leaves you.",
            choices: [
                "limbo"
            ],
        },

        messiah: { //Messiah Role
            interactionType: BUTTON,
            label: "Become the Messiah",
            style: "PRIMARY",
            assignRole: "912804603295318086",
            message: "You grab the microphone and say, “Thank you, everyone. As your leader, I would like to take you all to our ultimate goal. We are now in a position to fulfill Hashem’s promises. Your Messiah loves you and our time has come!”",
            choices: [
                "joe_audio"
            ],
        },

        best_man: {
            interactionType: BUTTON,
            label: "Ask Best Man",
            style: "PRIMARY",
            message: "You find the best man is also you. \n\nIt’s surreal seeing yourself look at you in the eyes.\n\n He can tell you’re confused. He tells the officiant that you two will be right back as he ushers you into the dressing room.",
            choices: [
                "best_man_one"
            ],
        },

        best_man_one: {
            interactionType: BUTTON,
            label: "Follow Him",
            style: "PRIMARY",
            message: "He says: Who are you carrying all this weight for anyway?",
            choices: [
                "best_man_two"
            ],
        },

        best_man_two: {
            interactionType: BUTTON,
            label: "Myself",
            style: "PRIMARY",
            message: "Yourself? Is that it?",
            choices: [
                "best_man_three"
            ],
        },

        best_man_three: {
            interactionType: BUTTON,
            label: "Yes.",
            style: "PRIMARY",
            message: "Yourself? Well, I tell ya, let me give you a little inside information about Yourself.",
            choices: [
                "best_man_four"
            ],
        },

        best_man_four: {
            interactionType: BUTTON,
            label: "Go on.",
            style: "PRIMARY",
            message: "You like to watch. You’re a prankster. Think about it. You have instincts. You have this extraordinary gift and then what do you do? I swear, for your own amusement, your own private cosmic gag reel, you set all the rules in opposition.",
            choices: [
                "best_man_five"
            ],
        },

        best_man_five: {
            interactionType: BUTTON,
            label: "No it isn't true.",
            style: "PRIMARY",
            message: "It’s the goof of all time. Look, but don’t touch. Touch, but don’t taste. Taste, don’t swallow.",
            choices: [
                "best_man_six"
            ],
        },

        best_man_six: {
            interactionType: BUTTON,
            label: "Ha ha ha..",
            style: "PRIMARY",
            message: "And while you’re jumping from one foot to the next, what is your inner-self doing? He’s laughing his sick, fucking ass off. He’s a tight-ass. He’s a sadist. He’s an absentee landlord.",
            choices: [
                "best_man_seven"
            ],
        },

        best_man_seven: {
            interactionType: BUTTON,
            label: "Why am I laughing at myself?",
            style: "PRIMARY",
            message: "I cared about what you wanted and I never judged you. Why? Because I never rejected you, in spite of all your imperfections! I’m a fan of you! Maybe your last fan.",
            choices: [
                "best_man_eight"
            ],
        },

        best_man_seven: { 
            interactionType: BUTTON,
            label: "End this.",
            style: "PRIMARY",
            assignRole: "912804783834955827",
            message: "You shoot yourself in the head.",
            choices: [
                "lsd"
            ],
        },


        simp: {//simp role
            interactionType: BUTTON,
            label: "HELP HER!",
            style: "PRIMARY",
            assignRole: "914997912092684318",
            message: "You apologize for her trouble and awkwardly fumble around for the cuff keys underneath the drawer. \n\nYou awkwardly pull a ring with 3 keys around it out from underneath the drawer. \n\nYou approach the Amazonian next to the Bored Ape.\n\nYou don’t know whether to ask for her consent to unlock her; to compliment her stunning beauty; or lighten the mood with some appropriate self-deprecation.",
            choices: [
                "ask",
                "compliment",
                "self_dep"
            ],
        },

        ask: {
            interactionType: BUTTON,
            label: "Ask Consent",
            style: "PRIMARY",
            message: "You ask for her consent. \n\nThe Amazonian tells you to get the fuck out of the room and leave the keys. \n\nYou listen because you’re pathetic. \n\nYou backtrack from whence you came.",
            choices: [
                "ask_continue"
            ],
        },

        ask_continue: {
            interactionType: BUTTON,
            label: "Better Luck Next Time",
            style: "PRIMARY",
            message: "While walking down the corridor you realize you haven’t been in this room, though it seems impossible, you just came from there, how could you have never been in this room before?",
            choices: [
                "waifu" //send to waifu storyline
            ],
        },


        compliment: {
            interactionType: BUTTON,
            label: "Compliment Her",
            style: "PRIMARY",
            message: "You squeek out, “You’re so strong, I bet you don’t need my help at all. I bet the Bored Ape wouldn’t stand a chance against you.”",
            choices: [
                "compliment_continue"
            ],
        },


        compliment_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The Bored Ape wakes up, tells you to fuck off ; grabs the cuffs and locks you to the wall. He unlocks the Amazonian and they begin to makeout. She spits on you before they leave together laughing.”",
            choices: [
                "insult"
            ],
        },

        
        insult: {
            interactionType: BUTTON,
            label: "Contemplate",
            style: "PRIMARY",
            message: "A group of robed initiates come into the room and call you the mother of all beta orbiters.",
            choices: [
                "insult_continue"
            ],
        },

        insult_continue: {
            interactionType: BUTTON,
            label: "Contemplate",
            style: "PRIMARY",
            message: "A group of robed initiates come into the room and ask why you’re cuffed to a pipe. You try to answer, but can’t. They laugh at you and leave.”",
            choices: [
                "insult_continue_next"
            ],
        },

        insult_continue_next: {
            interactionType: BUTTON,
            label: "Contemplate",
            style: "PRIMARY",
            message: "A group of robed initiates come into the room and call you a cuck. One says, “I can’t believe you fell for the old Bored Ape and the Girl ploy!”",
            choices: [
                "insult_continue_next_ha"
            ],
        },

        insult_continue_next_ha: {
            interactionType: BUTTON,
            label: "Contemplate",
            style: "PRIMARY",
            message: "A group of robed initiates come into the room and ask you why you’re so pathetic.",
            choices: [
                "insult_continue_next_ha_ha"
            ],
        },

        insult_continue_next_ha_ha: {
            interactionType: BUTTON,
            label: "Contemplate",
            style: "PRIMARY",
            message: "A group of robed initiates come into the room and tell you why you’ll never please a woman sexually. This takes hours.",
            choices: [
                "tickles_save"
            ],
        },

        tickles_save: {//tickled role
            interactionType: BUTTON,
            label: "Contemplate your existence.",
            style: "PRIMARY",
            assignRole: "914998020687409234",
            message: "Just then, the Svengali of the Labyrinth, Tickles bounces into the room with an off-puttingly cheery demeanor.\n\n'Whatcha doin' cuffed to the wall, silly?'\n\nYou can't muster up the strength to reply.\n\n'No matter, little guy! I got the perfect place for you!'\n\nTickles opens up a jewelry box and blows into it. \n\nEverything goes dark.", 
            choices: [
                "handicap_explain"
            ],
        },

        self_dep: {
            interactionType: BUTTON,
            label: "Self-Deprecate",
            style: "PRIMARY",
            message: "“At first I thought the Bored Ape might be your boyfriend. Then I thought, a strong beautiful woman like yourself doesn’t need a Bored Ape or anyone with male parts for that matter. I would unlock you, but my tiny arms tremble in the presence of your rippling physique.”", 
            choices: [
                "self_dep_continue"
            ],
        },

        self_dep_continue: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Charmed by your self-deprecation she gives a little giggle.\n\nShe then grabs the keys with her long strong toes from your weak little paws. She stretches her toes to her chin; takes the keys in her mouth; drops them into her left hand and nimbly unlocks herself.\n\n“Wow!” You say, very impressed at her strength and flexibility.\n\n“Come on!” She says, “let’s get you out of this Labyrinth!”\n\nYou are swelled with excitement, arousal, and a newfound confidence.\n\nYou’re sure she can lead you anywhere, and you trust her direction.", 
            choices: [
                "self_dep_continue_next"
            ],
        },

        self_dep_continue_next: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "She walks you through to the next room, where a bunch of cannibals prepare their next meal. They glare at you.\n\nOne yells out “Fresh pussy meat!” and runs quickly at you with full speed. The Amazonian quickly disposes of them with little effort, lifts you up in her strong arms, and then carries you across the threshold to the other room.\n\nYour heart is set aflutter as you feel your legs rub up against her shredded abdomen. You are home.", 
            choices: [
                "self_dep_continue_next_final"
            ],
        },

        self_dep_continue_next_final: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "She then gently sets you down in the next room where there is another Bored Ape, wearing a Bored Ape Yacht Club varsity jacket.\n\nHe looks at the Amazonian and then at you, and says to her, “Who’s the skirt?”\n\nShe says “This is my friend! He’s a sweet boy!”\n\nThe ape walks up to her and says, I’ll give you something sweet, and they embrace passionately.\n\nYou watch helplessly as he ravishes her and she surrenders herself in reckless abandon. Screaming at the top of her lungs in rapturous pleasure.\n\nJust then you realize the Labyrinth around you is beginning to crumble…all the walls and all the barriers tumble down. You see nothing beyond the rubble but oblivion.\n\nEndless dark.\n\nYou just want to die as you see yet another strong, powerful woman who don’t need no ape have hot sex with one in front of your strained little eyes.\n\nYou are torn between feelings of intense jealousy, inadequacy, and transcendent arousal.\n\nIf this is what being a Cuck is, then you have found you are a Cuck and don’t wish to be anything other. You are home! Or are you?", 
            choices: [
                "cuck_stay",
                "cuck_repent"
            ],
        },

        lsd: {
            interactionType: BUTTON,
            label: "Visions Await",
            style: "PRIMARY",
            message: "You’re now floating on a boat which itself floats on a river\n\nYou glance to the left and see tangerine trees and marmalade skies\n\nSomebody calls you, you answer quite slowly, “Yes?”\n\nIt’s a girl with kaleidoscope eyes\n\nYou look to the right, there’s cellophane flowers of yellow and green\n\nTowering over your head\n\nYou look back at the girl who now has the sun in her eyes\n\nAnd like that… she's gone\n\nFollow her down to a bridge by a fountain\n\nWhere rocking horse people eat marshmallow pies\n\nEveryone smiles as you drift past the flowers\n\nThat grow so incredibly high\n\nNewspaper taxis appear on the shore\n\nWaiting to take you away\n\nClimb in the back with your head in the clouds\n\nAnd you're gone\n\nNow you’re on a train in a station\n\nWith plasticine porters with looking glass ties\n\nSuddenly someone is there at the turnstile\n\nIt’s the girl with the kaleidoscope eyes!", //Expand Sefirot Narrative
            choices: [
                "joe_audio"
            ],
        },

        cuck_repent: {
            interactionType: BUTTON,
            label: "Repent",
            style: "PRIMARY",
            message: "You have seen the error of your ways. This is pathetic, deviant behavior and you want more from yourself.", 
            choices: [
                "cuck_super_champ"
            ],
        },

        cuck_stay: {
            interactionType: BUTTON,
            label: "Stay a Cuck",
            style: "PRIMARY",
            message: "You know you can do this forever, stay in this room with disintegrating boundaries, re-create this self-defeating loop over and over while you watch as she gets plugged by yet another ape repeatedly throughout all eternity. Sitting and seething and beating your pud… forever. ", 
            choices: [
                "cuck_trans"
            ],
        },

        cuck_trans: { 
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            assignRole: "912809157269262376",
            message: "Just then, your latest load turns into a sentient version of yourself. You feel your consciousness transport into the cum-made homunculus you just spewed. Just then, you're catapulted by an invisible force into the atmosphere.", 
            choices: [
                "limbo"
            ],
        },

        handicap_explain: {
            interactionType: BUTTON,
            label: "Black Out",
            style: "PRIMARY",
            message: "You wake up and see a door. It's time to join your new tribe.", //Expand narrative of Tickles telling the initiate where he is taking him.
            choices: [
                "open_handi"
            ],
        },

        vegan_super_champ: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The Labyrinth has chosen to open up new opportunities for your advanced consciousness.", 
            choices: [
                "joe_audio"
            ],
        },

        cuck_super_champ: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "The Labyrinth smiles upon your newly found humility and ushers you towards a most favorable option.",
            choices: [
                "joe_audio"
            ],
        },

        joe_audio: {
            interactionType: BUTTON,
            label: "Continue",
            style: "PRIMARY",
            message: "Congratulations, you may now pass through. If you feel inclined, please listen to @JoeWisdom for invaluable advice in the audio channel.", //Expand Narrative
            setChannel: "912811389037449297",
            choices: [
                "sefirot"
            ],
        },

        sefirot: {
            interactionType: BUTTON,
            label: "Begin Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'Remember: the trek through me is not a deviation from reality, it is an experience that fully engulfs reality. If you cannot feel the transformation while taking a shit or dumping the trash, you have yet to understand it.'", 
            choices: [
                "sefirot_two"
            ],
        },

        sefirot_two: {
            interactionType: BUTTON,
            label: "Continue Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'What is possible and what is, is the difference between dreaming and waking. To know one’s self is to know what is left over from a never-ending series of colossal accidents. The interesting part is all that is left now. But it has one requirement, it must be lived. It cannot be thought, written, analyzed away, or put off until later. It is lived or it is not lived.'", //Joe audio clip congratulations
            choices: [
                "sefirot_three"
            ],
        },

        sefirot_three: {
            interactionType: BUTTON,
            label: "Continue Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'Do not breathe in or out. Stop the breathing process wherever it is at this time. This may cause you to expire and if it does, it will be for the noblest of all causes. It’s time to plug up the drainage.'",
            choices: [
                "sefirot_four"
            ],
        },

        sefirot_four: {
            interactionType: BUTTON,
            label: "Continue Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'Avoid the temptation of substituting intellect for understanding, and information for knowledge, else your environment may become as dark and empty as the cave which surrounds the tribal leader. Succumbing to this temptation will sink you into smug complacency, making it impossible to progress passed this point.",
            choices: [
                "sefirot_five"
            ],
        },

        sefirot_five: {
            interactionType: BUTTON,
            label: "Continue Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'One does not become what one is by wanting it, and no matter what amount of attraction or ritual will ever change this. Meanwhile pretending to be what one is not, and convincing others that one is what one is not carries all the promises of disaster and unhappiness that fraud always does.'",
            choices: [
                "sefirot_six"
            ],
        },

        sefirot_six: {
            interactionType: BUTTON,
            label: "Continue Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'We tend to see delusion as an early stage malady of the Work - in actuality, it is an ever-increasing malady and essentially how most seek their death by perfecting it according to the dictates of the Will.'",
            choices: [
                "sefirot_seven"
            ],
        },

        sefirot_seven: {
            interactionType: BUTTON,
            label: "Continue Initiation",
            style: "PRIMARY",
            message: "The Labyrinth speaks:\n\n'Opposites are complimentary.\n\nOpposing forces augment each other.\n\nLife is not competitive, it is explorative.\n\nThe myriad forces augment and diminish each other in fluidic un-foldingness.'",
            choices: [
                "sefirot_eight"
            ],
        },

        sefirot_eight: {
            interactionType: BUTTON,
            label: "Complete Initiation",
            style: "PRIMARY",
            assignRole: "912444280008740945",
            message: "The Labyrinth speaks:\n\nThe reason the Bored Ape fucked the Amazonian is because you wanted it that way.\n\nThis is precisely the relationship you will find with personality when you discover the Higher Self. You become aware of freedom and clarity. Everything is sharper and clearer. You can no longer fool yourself about what you want or what you are. You may ignore what you see, but you can never ignore the fact that you have seen it.\n\nWelcome to Stage 2 of the Labyrinth.",
            interactionHandler: async (actionID, i, playerObj) => {
				await fs.writeFile(`./users/${i.user.tag}.json`, JSON.stringify(playerObj.choices, null, 2), 'utf8');
				await i.update({content: "The Labyrinth speaks:\n\nThe reason the Bored Ape fucked the Amazonian is because you wanted it that way.\n\nThis is precisely the relationship you will find with personality when you discover the Higher Self. You become aware of freedom and clarity. Everything is sharper and clearer. You can no longer fool yourself about what you want or what you are. You may ignore what you see, but you can never ignore the fact that you have seen it.\n\nWelcome to Stage 2 of the Labyrinth.", embeds: [], components: []});
			}
        },
	}
}

exports.MainQuest = MainQuest;