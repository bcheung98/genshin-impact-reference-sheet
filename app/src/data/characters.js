import albedoCard from "../assets/cards/Character_Albedo_Card.png";
import albedoAvatar from "../assets/avatars/Character_Albedo_Avatar.png";
import amberCard from "../assets/cards/Character_Amber_Card.png";
import amberAvatar from "../assets/avatars/Character_Amber_Avatar.png"
import barbaraCard from "../assets/cards/Character_Barbara_Card.png";
import barbaraAvatar from "../assets/avatars/Character_Barbara_Avatar.png";
import beidouCard from "../assets/cards/Character_Beidou_Card.png";
import beidouAvatar from "../assets/avatars/Character_Beidou_Avatar.png";
import bennettCard from "../assets/cards/Character_Bennett_Card.png";
import bennettAvatar from "../assets/avatars/Character_Bennett_Avatar.png";
import chongyunCard from "../assets/cards/Character_Chongyun_Card.png";
import chongyunAvatar from "../assets/avatars/Character_Chongyun_Avatar.png";
import dilucCard from "../assets/cards/Character_Diluc_Card.png";
import dilucAvatar from "../assets/avatars/Character_Diluc_Avatar.png";
import dionaCard from "../assets/cards/Character_Diona_Card.png";
import dionaAvatar from "../assets/avatars/Character_Diona_Avatar.png";
import fischlCard from "../assets/cards/Character_Fischl_Card.png";
import fischlAvatar from "../assets/avatars/Character_Fischl_Avatar.png";
import ganyuCard from "../assets/cards/Character_Ganyu_Card.png";
import ganyuAvatar from "../assets/avatars/Character_Ganyu_Avatar.png";
import hutaoCard from "../assets/cards/Character_Hu_Tao_Card.png";
import hutaoAvatar from "../assets/avatars/Character_Hu_Tao_Avatar.png";
import jeanCard from "../assets/cards/Character_Jean_Card.png";
import jeanAvatar from "../assets/avatars/Character_Jean_Avatar.png";
import kaeyaCard from "../assets/cards/Character_Kaeya_Card.png";
import kaeyaAvatar from "../assets/avatars/Character_Kaeya_Avatar.png";
import keqingCard from "../assets/cards/Character_Keqing_Card.png";
import keqingAvatar from "../assets/avatars/Character_Keqing_Avatar.png";
import kleeCard from "../assets/cards/Character_Klee_Card.png";
import kleeAvatar from "../assets/avatars/Character_Klee_Avatar.png";
import lisaCard from "../assets/cards/Character_Lisa_Card.png";
import lisaAvatar from "../assets/avatars/Character_Lisa_Avatar.png";
import monaCard from "../assets/cards/Character_Mona_Card.png";
import monaAvatar from "../assets/avatars/Character_Mona_Avatar.png";
import ningguangCard from "../assets/cards/Character_Ningguang_Card.png";
import ningguangAvatar from "../assets/avatars/Character_Ningguang_Avatar.png";
import noelleCard from "../assets/cards/Character_Noelle_Card.png";
import noelleAvatar from "../assets/avatars/Character_Noelle_Avatar.png";
import qiqiCard from "../assets/cards/Character_Qiqi_Card.png";
import qiqiAvatar from "../assets/avatars/Character_Qiqi_Avatar.png";
import razorCard from "../assets/cards/Character_Razor_Card.png";
import razorAvatar from "../assets/avatars/Character_Razor_Avatar.png";
import sucroseCard from "../assets/cards/Character_Sucrose_Card.png";
import sucroseAvatar from "../assets/avatars/Character_Sucrose_Avatar.png";
import tartagliaCard from "../assets/cards/Character_Tartaglia_Card.png";
import tartagliaAvatar from "../assets/avatars/Character_Tartaglia_Avatar.png";
import ventiCard from "../assets/cards/Character_Venti_Card.png";
import ventiAvatar from "../assets/avatars/Character_Venti_Avatar.png";
import xianglingCard from "../assets/cards/Character_Xiangling_Card.png";
import xianglingAvatar from "../assets/avatars/Character_Xiangling_Avatar.png";
import xiaoCard from "../assets/cards/Character_Xiao_Card.png";
import xiaoAvatar from "../assets/avatars/Character_Xiao_Avatar.png";
import xingqiuCard from "../assets/cards/Character_Xingqiu_Card.png";
import xingqiuAvatar from "../assets/avatars/Character_Xingqiu_Avatar.png";
import xinyanCard from "../assets/cards/Character_Xinyan_Card.png";
import xinyanAvatar from "../assets/avatars/Character_Xinyan_Avatar.png";
import zhongliCard from "../assets/cards/Character_Zhongli_Card.png";
import zhongliAvatar from "../assets/avatars/Character_Zhongli_Avatar.png";

const characters = [
    {
        name: "Albedo",
        title: "Kreideprinz",
        rarity: 5,
        images: {
            card: albedoCard,
            avatar: albedoAvatar,
        },
        element: "Geo",
        weapon: "Sword",
        materials: {
            talents: "Ballad",
            ascensionMat: "Basalt Pillar",
            localMat: "Cecilia",
            commonMat: "Scroll",
            bossMat: "Tusk of Monoceros Caeli"
        },
        gender: "Male",
        nation: "Mondstadt",
    },
    {
        name: "Amber",
        title: "Gliding Champion",
        rarity: 4,
        images: {
            card: amberCard,
            avatar: amberAvatar
        },
        element: "Pyro",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Everflame Seed",
            localMat: "Small Lamp Grass",
            commonMat: "Arrow",
            bossMat: "Dvalin's Sigh"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Barbara",
        title: "Shining Idol",
        rarity: 4,
        images: {
            card: barbaraCard,
            avatar: barbaraAvatar
        },
        element: "Hydro",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Cleansing Heart",
            localMat: "Philanemo Mushroom",
            commonMat: "Scroll",
            bossMat: "Ring of Boreas"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Beidou",
        title: "Uncrowned Lord of the Ocean",
        rarity: 4,
        images: {
            card: beidouCard,
            avatar: beidouAvatar
        },
        element: "Electro",
        weapon: "Claymore",
        materials: {
            talents: "Gold",
            ascensionMat: "Lightning Prism",
            localMat: "Noctilucous Jade",
            commonMat: "TH Insignia",
            bossMat: "Dvalin's Sigh"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Bennett",
        title: "Trial by Fire",
        rarity: 4,
        images: {
            card: bennettCard,
            avatar: bennettAvatar
        },
        element: "Pyro",
        weapon: "Sword",
        materials: {
            talents: "Resistance",
            ascensionMat: "Everflame Seed",
            localMat: "Windwheel Aster",
            commonMat: "TH Insignia",
            bossMat: "Dvalin's Plume"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Chongyun",
        title: "Frozen Ardor",
        rarity: 4,
        images: {
            card: chongyunCard,
            avatar: chongyunAvatar
        },
        element: "Cryo",
        weapon: "Claymore",
        materials: {
            talents: "Diligence",
            ascensionMat: "Hoarfrost Core",
            localMat: "Cor Lapis",
            commonMat: "Mask",
            bossMat: "Dvalin's Sigh"
        },
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Diluc",
        title: "The Dark Side of Dawn",
        rarity: 5,
        images: {
            card: dilucCard,
            avatar: dilucAvatar,
        },
        element: "Pyro",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Everflame Seed",
            localMat: "Small Lamp Grass",
            commonMat: "Fatui Insignia",
            bossMat: "Dvalin's Plume"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Diona",
        title: "Kätzlein Cocktail",
        rarity: 4,
        images: {
            card: dionaCard,
            avatar: dionaAvatar,
        },
        element: "Cryo",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Hoarfrost Core",
            localMat: "Calla Lily",
            commonMat: "Arrow",
            bossMat: "Shard of a Foul Legacy"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Fischl",
        title: "Prinzessin der Verurteilung",
        rarity: 4,
        images: {
            card: fischlCard,
            avatar: fischlAvatar,
        },
        element: "Electro",
        weapon: "Bow",
        materials: {
            talents: "Ballad",
            ascensionMat: "Lightning Prism",
            localMat: "Small Lamp Grass",
            commonMat: "Arrow",
            bossMat: "Spirit Locket of Boreas"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Ganyu",
        title: "Plenilune Gaze",
        rarity: 5,
        images: {
            card: ganyuCard,
            avatar: ganyuAvatar
        },
        element: "Cryo",
        weapon: "Bow",
        materials: {
            talents: "Diligence",
            ascensionMat: "Hoarfrost Core",
            localMat: "Qingxin",
            commonMat: "Nectar",
            bossMat: "Shadow of the Warrior"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Hu Tao",
        title: "Fragrance in Thaw",
        rarity: 5,
        images: {
            card: hutaoCard,
            avatar: hutaoAvatar
        },
        element: "Pyro",
        weapon: "Polearm",
        materials: {
            talents: "Diligence",
            ascensionMat: "Juvenile Jade",
            localMat: "Silk Flower",
            commonMat: "Nectar",
            bossMat: "Shard of a Foul Legacy"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Jean",
        title: "Dandelion Knight",
        rarity: 5,
        images: {
            card: jeanCard,
            avatar: jeanAvatar
        },
        element: "Anemo",
        weapon: "Sword",
        materials: {
            talents: "Resistance",
            ascensionMat: "Hurricane Seed",
            localMat: "Dandelion Seed",
            commonMat: "Mask",
            bossMat: "Dvalin's Plume"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Kaeya",
        title: "Frostwind Swordsman",
        rarity: 4,
        images: {
            card: kaeyaCard,
            avatar: kaeyaAvatar
        },
        element: "Cryo",
        weapon: "Sword",
        materials: {
            talents: "Ballad",
            ascensionMat: "Hoarfrost Core",
            localMat: "Calla Lily",
            commonMat: "TH Insignia",
            bossMat: "Spirit Locket of Boreas"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Keqing",
        title: "Driving Thunder",
        rarity: 5,
        images: {
            card: keqingCard,
            avatar: keqingAvatar
        },
        element: "Electro",
        weapon: "Sword",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Lightning Prism",
            localMat: "Cor Lapis",
            commonMat: "Nectar",
            bossMat: "Ring of Boreas"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Klee",
        title: "Fleeing Sunlight",
        rarity: 5,
        images: {
            card: kleeCard,
            avatar: kleeAvatar
        },
        element: "Pyro",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Everflame Seed",
            localMat: "Philanemo Mushroom",
            commonMat: "Scroll",
            bossMat: "Ring of Boreas"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Lisa",
        title: "Witch of Purple Rose",
        rarity: 4,
        images: {
            card: lisaCard,
            avatar: lisaAvatar
        },
        element: "Electro",
        weapon: "Catalyst",
        materials: {
            talents: "Ballad",
            ascensionMat: "Lightning Prism",
            localMat: "Valberry",
            commonMat: "Slime",
            bossMat: "Dvalin's Claw"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Mona",
        title: "Astral Reflection",
        rarity: 5,
        images: {
            card: monaCard,
            avatar: monaAvatar
        },
        element: "Hydro",
        weapon: "Catalyst",
        materials: {
            talents: "Resistance",
            ascensionMat: "Cleansing Heart",
            localMat: "Philanemo Mushroom",
            commonMat: "Nectar",
            bossMat: "Ring of Boreas"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Ningguang",
        title: "Eclipsing Star",
        rarity: 4,
        images: {
            card: ningguangCard,
            avatar: ningguangAvatar
        },
        element: "Geo",
        weapon: "Catalyst",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Basalt Pillar",
            localMat: "Glaze Lily",
            commonMat: "Fatui Insignia",
            bossMat: "Spirit Locket of Boreas"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Noelle",
        title: "Chivalric Blossom",
        rarity: 4,
        images: {
            card: noelleCard,
            avatar: noelleAvatar
        },
        element: "Geo",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Basalt Pillar",
            localMat: "Valberry",
            commonMat: "Mask",
            bossMat: "Dvalin's Claw"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Qiqi",
        title: "Icy Resurrection",
        rarity: 5,
        images: {
            card: qiqiCard,
            avatar: qiqiAvatar
        },
        element: "Cryo",
        weapon: "Sword",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Hoarfrost Core",
            localMat: "Violetgrass",
            commonMat: "Scroll",
            bossMat: "Tail of Boreas"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Razor",
        title: "Wolf Boy",
        rarity: 4,
        images: {
            card: razorCard,
            avatar: razorAvatar
        },
        element: "Electro",
        weapon: "Claymore",
        materials: {
            talents: "Resistance",
            ascensionMat: "Lightning Prism",
            localMat: "Wolfhook",
            commonMat: "Mask",
            bossMat: "Dvalin's Claw"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Sucrose",
        title: "Harmless Sweetie",
        rarity: 4,
        images: {
            card: sucroseCard,
            avatar: sucroseAvatar
        },
        element: "Anemo",
        weapon: "Catalyst",
        materials: {
            talents: "Freedom",
            ascensionMat: "Hurricane Seed",
            localMat: "Windwheel Aster",
            commonMat: "Nectar",
            bossMat: "Spirit Locket of Boreas"
        },
        gender: "Female",
        nation: "Mondstadt"
    },
    {
        name: "Tartaglia",
        title: "Childe",
        rarity: 5,
        images: {
            card: tartagliaCard,
            avatar: tartagliaAvatar
        },
        element: "Hydro",
        weapon: "Bow",
        materials: {
            talents: "Freedom",
            ascensionMat: "Cleansing Heart",
            localMat: "Starconch",
            commonMat: "Fatui Insignia",
            bossMat: "Shard of a Foul Legacy"
        },
        gender: "Male",
        nation: "Snezhnaya"
    },
    {
        name: "Venti",
        title: "Windborne Bard",
        rarity: 5,
        images: {
            card: ventiCard,
            avatar: ventiAvatar
        },
        element: "Anemo",
        weapon: "Bow",
        materials: {
            talents: "Ballad",
            ascensionMat: "Hurricane Seed",
            localMat: "Cecilia",
            commonMat: "Slime",
            bossMat: "Tail of Boreas"
        },
        gender: "Male",
        nation: "Mondstadt"
    },
    {
        name: "Xiangling",
        title: "Exquisite Delicacy",
        rarity: 4,
        images: {
            card: xianglingCard,
            avatar: xianglingAvatar
        },
        element: "Pyro",
        weapon: "Polearm",
        materials: {
            talents: "Diligence",
            ascensionMat: "Everflame Seed",
            localMat: "Jueyun Chili",
            commonMat: "Slime",
            bossMat: "Dvalin's Claw"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Xiao",
        title: "Vigilant Yaksha",
        rarity: 5,
        images: {
            card: xiaoCard,
            avatar: xiaoAvatar
        },
        element: "Anemo",
        weapon: "Polearm",
        materials: {
            talents: "Prosperity",
            ascensionMat: "Juvenile Jade",
            localMat: "Qingxin",
            commonMat: "Slime",
            bossMat: "Shadow of the Warrior"
        },
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Xingqiu",
        title: "Juvenile Galant",
        rarity: 4,
        images: {
            card: xingqiuCard,
            avatar: xingqiuAvatar
        },
        element: "Hydro",
        weapon: "Sword",
        materials: {
            talents: "Gold",
            ascensionMat: "Cleansing Heart",
            localMat: "Silk Flower",
            commonMat: "Mask",
            bossMat: "Tail of Boreas"
        },
        gender: "Male",
        nation: "Liyue"
    },
    {
        name: "Xinyan",
        title: "Blazing Riff",
        rarity: 4,
        images: {
            card: xinyanCard,
            avatar: xinyanAvatar
        },
        element: "Pyro",
        weapon: "Claymore",
        materials: {
            talents: "Gold",
            ascensionMat: "Everflame Seed",
            localMat: "Violetgrass",
            commonMat: "TH Insignia",
            bossMat: "Tusk of Monoceros Caeli"
        },
        gender: "Female",
        nation: "Liyue"
    },
    {
        name: "Zhongli",
        title: "Vago Mundo",
        rarity: 5,
        images: {
            card: zhongliCard,
            avatar: zhongliAvatar
        },
        element: "Geo",
        weapon: "Polearm",
        materials: {
            talents: "Gold",
            ascensionMat: "Basalt Pillar",
            localMat: "Cor Lapis",
            commonMat: "Slime",
            bossMat: "Tusk of Monoceros Caeli"
        },
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
    images: {
        card: card,
        avatar: avatar
    },
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