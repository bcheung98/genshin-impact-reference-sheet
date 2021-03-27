const characters = [
    {
        name: "Albedo",
        title: "Kreideprinz",
        rarity: 5,
        element: "Geo",
        weapon: "Sword",
        materials: {
            talents: "Ballad",
            ascensionMat: "Basalt Pillar",
            localMat: "Cecilia",
            commonMat: "Scroll",
            bossMat: "Tusk of Monoceros Caeli"
        },
        description: "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
        gender: "Male",
        nation: "Mondstadt",
    },
    {
        name: "Amber",
        title: "Gliding Champion",
        rarity: 4,
        element: "Pyro",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Everflame Seed",
            localMat: "Small Lamp Grass",
            commonMat: "Arrow",
            bossMat: "Dvalin's Sigh"
        },
        description: "Always energetic and full of life, Amber's the best - albeit only - Outrider of the Knights of Favonius.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Barbara",
        title: "Shining Idol",
        rarity: 4,
        element: "Hydro",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Cleansing Heart",
            localMat: "Philanemo Mushroom",
            commonMat: "Scroll",
            bossMat: "Ring of Boreas"
        },
        description: "Every citizen of Mondstadt adores Barbara. However, she learned the word \"idol\" from a magazine.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Beidou",
        title: "Uncrowned Lord of the Ocean",
        rarity: 4,
        element: "Electro",
        weapon: "Claymore",
        materials: {
            talents: "Gold",
            ascensionMat: "Lightning Prism",
            localMat: "Noctilucous Jade",
            commonMat: "Treasure Hoarder Insignia",
            bossMat: "Dvalin's Sigh"
        },
        description: "Captain of her crew, The Crux. She's quite an unbound and forthright woman.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Bennett",
        title: "Trial by Fire",
        rarity: 4,
        element: "Pyro",
        weapon: "Sword",
        materials: {
            talents: "Resistance",
            ascensionMat: "Everflame Seed",
            localMat: "Windwheel Aster",
            commonMat: "Treasure Hoarder Insignia",
            bossMat: "Dvalin's Plume"
        },
        description: "A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Chongyun",
        title: "Frozen Ardor",
        rarity: 4,
        element: "Cryo",
        weapon: "Claymore",
        materials: {
            talents: "Diligence",
            ascensionMat: "Hoarfrost Core",
            localMat: "Cor Lapis",
            commonMat: "Mask",
            bossMat: "Dvalin's Sigh"
        },
        description: "A young exorcist from a family of exorcists. He does everything he can to suppress his pure positive energy.",
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Diluc",
        title: "The Dark Side of Dawn",
        rarity: 5,
        element: "Pyro",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Everflame Seed",
            localMat: "Small Lamp Grass",
            commonMat: "Fatui Insignia",
            bossMat: "Dvalin's Plume"
        },
        description: "The tycoon of a winery empire in Mondstadt, unmatched in every possible way",
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Diona",
        title: "Kätzlein Cocktail",
        rarity: 4,
        element: "Cryo",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Hoarfrost Core",
            localMat: "Calla Lily",
            commonMat: "Arrow",
            bossMat: "Shard of a Foul Legacy"
        },
        description: "A young lady who has inherited trace amounts of non-human blood. She is the incredible popular bartender of the Cat's Tail tavern.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Fischl",
        title: "Prinzessin der Verurteilung",
        rarity: 4,
        element: "Electro",
        weapon: "Bow",
        materials: {
            talents: "Ballad",
            ascensionMat: "Lightning Prism",
            localMat: "Small Lamp Grass",
            commonMat: "Arrow",
            bossMat: "Spirit Locket of Boreas"
        },
        description: "A mysterious girl who calls herself \"Prinzessin der Verurteilung\" and travels with a night raven named Oz.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Ganyu",
        title: "Plenilune Gaze",
        rarity: 5,
        element: "Cryo",
        weapon: "Bow",
        materials: {
            talents: "Diligence",
            ascensionMat: "Hoarfrost Core",
            localMat: "Qingxin",
            commonMat: "Nectar",
            bossMat: "Shadow of the Warrior"
        },
        description: "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Hu Tao",
        title: "Fragrance in Thaw",
        rarity: 5,
        element: "Pyro",
        weapon: "Polearm",
        materials: {
            talents: "Diligence",
            ascensionMat: "Juvenile Jade",
            localMat: "Silk Flower",
            commonMat: "Nectar",
            bossMat: "Shard of a Foul Legacy"
        },
        description: "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Jean",
        title: "Dandelion Knight",
        rarity: 5,
        element: "Anemo",
        weapon: "Sword",
        materials: {
            talents: "Resistance",
            ascensionMat: "Hurricane Seed",
            localMat: "Dandelion Seed",
            commonMat: "Mask",
            bossMat: "Dvalin's Plume"
        },
        description: "The righteous and rigorous Dandelion Knight, and Acting Grand Master of the Knights of Favonius of Mondstadt.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Kaeya",
        title: "Frostwind Swordsman",
        rarity: 4,
        element: "Cryo",
        weapon: "Sword",
        materials: {
            talents: "Ballad",
            ascensionMat: "Hoarfrost Core",
            localMat: "Calla Lily",
            commonMat: "Treasure Hoarder Insignia",
            bossMat: "Spirit Locket of Boreas"
        },
        description: "A thinker in the Knights of Favonius with a somewhat exotic appearance.",
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Keqing",
        title: "Driving Thunder",
        rarity: 5,
        element: "Electro",
        weapon: "Sword",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Lightning Prism",
            localMat: "Cor Lapis",
            commonMat: "Nectar",
            bossMat: "Ring of Boreas"
        },
        description: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Klee",
        title: "Fleeing Sunlight",
        rarity: 5,
        element: "Pyro",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Everflame Seed",
            localMat: "Philanemo Mushroom",
            commonMat: "Scroll",
            bossMat: "Ring of Boreas"
        },
        description: "An explosives expert and a regular at the Knights of Favonius' confinement room. Also known as Fleeing Sunlight.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Lisa",
        title: "Witch of Purple Rose",
        rarity: 4,
        element: "Electro",
        weapon: "Catalyst",
        materials: {
            talents: "Ballad",
            ascensionMat: "Lightning Prism",
            localMat: "Valberry",
            commonMat: "Slime",
            bossMat: "Dvalin's Claw"
        },
        description: "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Mona",
        title: "Astral Reflection",
        rarity: 5,
        element: "Hydro",
        weapon: "Catalyst",
        materials: {
            talents: "Resistance",
            ascensionMat: "Cleansing Heart",
            localMat: "Philanemo Mushroom",
            commonMat: "Nectar",
            bossMat: "Ring of Boreas"
        },
        description: "A mysterious young astrologer who proclaims herself to be \"Astrologist Mona Megistus\", and who possesses abilities to match the title. Erudite, but prideful.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Ningguang",
        title: "Eclipsing Star",
        rarity: 4,
        element: "Geo",
        weapon: "Catalyst",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Basalt Pillar",
            localMat: "Glaze Lily",
            commonMat: "Fatui Insignia",
            bossMat: "Spirit Locket of Boreas"
        },
        description: "The Tianquan of Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Noelle",
        title: "Chivalric Blossom",
        rarity: 4,
        element: "Geo",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Basalt Pillar",
            localMat: "Valberry",
            commonMat: "Mask",
            bossMat: "Dvalin's Claw"
        },
        description: "A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Qiqi",
        title: "Icy Resurrection",
        rarity: 5,
        element: "Cryo",
        weapon: "Sword",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Hoarfrost Core",
            localMat: "Violetgrass",
            commonMat: "Scroll",
            bossMat: "Tail of Boreas"
        },
        description: "An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Razor",
        title: "Wolf Boy",
        rarity: 4,
        element: "Electro",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Lightning Prism",
            localMat: "Wolfhook",
            commonMat: "Mask",
            bossMat: "Dvalin's Claw"
        },
        description: "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Sucrose",
        title: "Harmless Sweetie",
        rarity: 4,
        element: "Anemo",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Hurricane Seed",
            localMat: "Windwheel Aster",
            commonMat: "Nectar",
            bossMat: "Spirit Locket of Boreas"
        },
        description: "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Tartaglia",
        title: "Childe",
        rarity: 5,
        element: "Hydro",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Cleansing Heart",
            localMat: "Starconch",
            commonMat: "Fatui Insignia",
            bossMat: "Shard of a Foul Legacy"
        },
        description: "No. 11 of The Harbingers, also known as \"Childe\". His name is highly feared on the battlefield.",
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Venti",
        title: "Windborne Bard",
        rarity: 5,
        element: "Anemo",
        weapon: "Bow",
        materials: {
            talents: "Ballad",
            ascensionMat: "Hurricane Seed",
            localMat: "Cecilia",
            commonMat: "Slime",
            bossMat: "Tail of Boreas"
        },
        description: "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Xiangling",
        title: "Exquisite Delicacy",
        rarity: 4,
        element: "Pyro",
        weapon: "Polearm",
        materials: {
            talents: "Diligence",
            ascensionMat: "Everflame Seed",
            localMat: "Jueyun Chili",
            commonMat: "Slime",
            bossMat: "Dvalin's Claw"
        },
        description: "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Xiao",
        title: "Vigilant Yaksha",
        rarity: 5,
        element: "Anemo",
        weapon: "Polearm",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Juvenile Jade",
            localMat: "Qingxin",
            commonMat: "Slime",
            bossMat: "Shadow of the Warrior"
        },
        description: "A yaksha adeptus who defends Liyue. Also heralded as the \"Conquerer of Demons\" and \"Vigilant Yaksha\".",
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Xingqiu",
        title: "Juvenile Galant",
        rarity: 4,
        element: "Hydro",
        weapon: "Sword",
        materials: {
            talents: "Gold",
            ascensionMat: "Cleansing Heart",
            localMat: "Silk Flower",
            commonMat: "Mask",
            bossMat: "Tail of Boreas"
        },
        description: "A young man carrying a longsword who is frequently seen at book booths. He has a heart of gold and yearns for justice and fairness for all.",
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Xinyan",
        title: "Blazing Riff",
        rarity: 4,
        element: "Pyro",
        weapon: "Claymore",
        materials: {
            talents: "Gold",
            ascensionMat: "Everflame Seed",
            localMat: "Violetgrass",
            commonMat: "Treasure Hoarder Insignia",
            bossMat: "Tusk of Monoceros Caeli"
        },
        description: "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.", 
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Zhongli",
        title: "Vago Mundo",
        rarity: 5,
        element: "Geo",
        weapon: "Polearm",
        materials: {
            talents: "Gold",
            ascensionMat: "Basalt Pillar",
            localMat: "Cor Lapis",
            commonMat: "Slime",
            bossMat: "Tusk of Monoceros Caeli"
        },
        description: "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        gender: "Male",
        nation: "Liyue"
    }
]

export default characters;

/*
{
    name: "Name",
    title: "Title",
    rarity: 0,
    element: "Element",
    weapon: "Weapon",
    materials: {
        talents: "Talent",
        ascensionMat: "Material",
        localMat: "Material",
        commonMat: "Material",
        bossMat: "Material"
    },
    gender: "Gender",
    nation: "Nation"
}
*/
