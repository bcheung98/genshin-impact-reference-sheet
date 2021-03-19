import albedoCard from "../assets/cards/Character_Albedo_Card.png";
import amberCard from "../assets/cards/Character_Amber_Card.png";
import barbaraCard from "../assets/cards/Character_Barbara_Card.png";
import beidouCard from "../assets/cards/Character_Beidou_Card.png";
import bennettCard from "../assets/cards/Character_Bennett_Card.png";
import chongyunCard from "../assets/cards/Character_Chongyun_Card.png";
import dilucCard from "../assets/cards/Character_Diluc_Card.png";
import dionaCard from "../assets/cards/Character_Diona_Card.png";
import fischlCard from "../assets/cards/Character_Fischl_Card.png";
import ganyuCard from "../assets/cards/Character_Ganyu_Card.png";
import hutaoCard from "../assets/cards/Character_Hu_Tao_Card.png";
import jeanCard from "../assets/cards/Character_Jean_Card.png";
import kaeyaCard from "../assets/cards/Character_Kaeya_Card.png";
import keqingCard from "../assets/cards/Character_Keqing_Card.png";
import kleeCard from "../assets/cards/Character_Klee_Card.png";
import lisaCard from "../assets/cards/Character_Lisa_Card.png";
import monaCard from "../assets/cards/Character_Mona_Card.png";
import ningguangCard from "../assets/cards/Character_Ningguang_Card.png";

const characters = [
    {
        name: "Albedo",
        title: "Kreideprinz",
        rarity: 5,
        image: albedoCard,
        element: "Geo",
        weapon: "Sword",
        materials: {
            talents: "Ballad",
            ascensionMat: "Basalt Pillar",
            localMat: "Cecilia",
            commonMat: "Scroll",
            bossMat: "Tusk"
        },
        gender: "Male",
        nation: "Mondstadt",
    },
    {
        name: "Amber",
        title: "Gliding Champion",
        rarity: 4,
        image: amberCard,
        element: "Pyro",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Everflame Seed",
            localMat: "Small Lamp Grass",
            commonMat: "Arrow",
            bossMat: "Sigh"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Barbara",
        title: "Shining Idol",
        rarity: 4,
        image: barbaraCard,
        element: "Hydro",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Cleansing Heart",
            localMat: "Philanemo Mushroom",
            commonMat: "Scroll",
            bossMat: "Ring"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Beidou",
        title: "Uncrowned Lord of the Ocean",
        rarity: 4,
        image: beidouCard,
        element: "Electro",
        weapon: "Claymore",
        materials: {
            talents: "Gold",
            ascensionMat: "Lightning Prism",
            localMat: "Noctilous Jade",
            commonMat: "TR Insignia",
            bossMat: "Sigh"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Bennett",
        title: "Trial by Fire",
        rarity: 4,
        image: bennettCard,
        element: "Pyro",
        weapon: "Sword",
        materials: {
            talents: "Resistance",
            ascensionMat: "Everflame Seed",
            localMat: "Windwheel Aster",
            commonMat: "TR Insignia",
            bossMat: "Plume"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Chongyun",
        title: "Frozen Ardor",
        rarity: 4,
        image: chongyunCard,
        element: "Cryo",
        weapon: "Claymore",
        materials: {
            talents: "Diligence",
            ascensionMat: "Hoarfrost Core",
            localMat: "Cor Lapis",
            commonMat: "Mask",
            bossMat: "Sigh"
        },
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Diluc",
        title: "The Dark Side of Dawn",
        rarity: 5,
        image: dilucCard,
        element: "Pyro",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Everflame Seed",
            localMat: "Small Lamp Grass",
            commonMat: "Fatui Insignia",
            bossMat: "Plume"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Diona",
        title: "Kätzlein Cocktail",
        rarity: 4,
        image: dionaCard,
        element: "Cryo",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Hoarfrost Core",
            localMat: "Calla Lily",
            commonMat: "Arrow",
            bossMat: "Shard"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Fischl",
        title: "Prinzessin der Verurteilung",
        rarity: 4,
        image: fischlCard,
        element: "Electro",
        weapon: "Bow",
        materials: {
            talents: "Ballad",
            ascensionMat: "Lightning Prism",
            localMat: "Small Lamp Grass",
            commonMat: "Arrow",
            bossMat: "Locket"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Ganyu",
        title: "Plenilune Gaze",
        rarity: 5,
        image: ganyuCard,
        element: "Cryo",
        weapon: "Bow",
        materials: {
            talents: "Diligence",
            ascensionMat: "Hoarfrost Core",
            localMat: "Qingxin",
            commonMat: "Nectar",
            bossMat: "Shadow"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Hu Tao",
        title: "Fragrance in Thaw",
        rarity: 5,
        image: hutaoCard,
        element: "Pyro",
        weapon: "Polearm",
        materials: {
            talents: "Diligence",
            ascensionMat: "Juvenile Jade",
            localMat: "Silk Flower",
            commonMat: "Nectar",
            bossMat: "Shard"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Jean",
        title: "Dandelion Knight",
        rarity: 5,
        image: jeanCard,
        element: "Anemo",
        weapon: "Sword",
        materials: {
            talents: "Resistance",
            ascensionMat: "Hurricane Seed",
            localMat: "Dandelion Seed",
            commonMat: "Mask",
            bossMat: "Plume"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Kaeya",
        title: "Frostwind Swordsman",
        rarity: 4,
        image: kaeyaCard,
        element: "Cryo",
        weapon: "Sword",
        materials: {
            talents: "Ballad",
            ascensionMat: "Hoarfrost Core",
            localMat: "Calla Lily",
            commonMat: "TR Insignia",
            bossMat: "Locket"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Keqing",
        title: "Driving Thunder",
        rarity: 5,
        image: keqingCard,
        element: "Electro",
        weapon: "Sword",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Lightning Prism",
            localMat: "Cor Lapis",
            commonMat: "Nectar",
            bossMat: "Ring"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Klee",
        title: "Fleeing Sunlight",
        rarity: 5,
        image: kleeCard,
        element: "Pyro",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Everflame Seed",
            localMat: "Philanemo Mushroom",
            commonMat: "Scroll",
            bossMat: "Ring"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Lisa",
        title: "Witch of Purple Rose",
        rarity: 4,
        image: lisaCard,
        element: "Electro",
        weapon: "Catalyst",
        materials: {
            talents: "Ballad",
            ascensionMat: "Lightning Prism",
            localMat: "Valberry",
            commonMat: "Slime",
            bossMat: "Claw"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Mona",
        title: "Astral Reflection",
        rarity: 5,
        image: monaCard,
        element: "Hydro",
        weapon: "Catalyst",
        materials: {
            talents: "Resistance",
            ascensionMat: "Cleansing Heart",
            localMat: "Philanemo Mushroom",
            commonMat: "Nectar",
            bossMat: "Ring"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Ningguang",
        title: "Eclipsing Star",
        rarity: 4,
        image: ningguangCard,
        element: "Geo",
        weapon: "Catalyst",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Basalt Pillar",
            localMat: "Glaze Lily",
            commonMat: "Fatui Insignia",
            bossMat: "Locket"
        },
        gender: "Female",
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