import React, { Component } from "react";

// Ascension Materials
import basaltPillar from "../assets/materials/ascension_mats/Basalt_Pillar.png";
import cleansingHeart from "../assets/materials/ascension_mats/Cleansing_Heart.png";
import everflameSeed from "../assets/materials/ascension_mats/Everflame_Seed.png";
import hoarfrostCore from "../assets/materials/ascension_mats/Hoarfrost_Core.png";
import hurricaneSeed from "../assets/materials/ascension_mats/Hurricane_Seed.png";
import juvenileJade from "../assets/materials/ascension_mats/Juvenile_Jade.png";
import lightningPrism from "../assets/materials/ascension_mats/Lightning_Prism.png";

// Boss Materials
import claw from "../assets/materials/boss_mats/Dvalins_Claw.png";
import plume from "../assets/materials/boss_mats/Dvalins_Plume.png";
import sigh from "../assets/materials/boss_mats/Dvalins_Sigh.png";
import ring from "../assets/materials/boss_mats/Ring_of_Boreas.png";
import locket from "../assets/materials/boss_mats/Spirit_Locket_of_Boreas.png";
import tail from "../assets/materials/boss_mats/Tail_of_Boreas.png";
import shadow from "../assets/materials/boss_mats/Shadow_of_the_Warrior.png";
import shard from "../assets/materials/boss_mats/Shard_of_a_Foul_Legacy.png";
import tusk from "../assets/materials/boss_mats/Tusk_of_Monoceros_Caeli.png";

// Common Materials
import arrow from "../assets/materials/common_mats/Arrow.png";
import fatuiInsignia from "../assets/materials/common_mats/Fatui_Insignia.png";
import mask from "../assets/materials/common_mats/Mask.png";
import nectar from "../assets/materials/common_mats/Nectar.png";
import scroll from "../assets/materials/common_mats/Scroll.png";
import slime from "../assets/materials/common_mats/Slime.png";
import thInsignia from "../assets/materials/common_mats/TH_Insignia.png";

// Local Specialties
import callaLily from "../assets/materials/local_specialties/Calla_Lily.png";
import cecilia from "../assets/materials/local_specialties/Cecilia.png";
import corLapis from "../assets/materials/local_specialties/Cor_Lapis.png";
import dandelionSeed from "../assets/materials/local_specialties/Dandelion_Seed.png";
import glazeLily from "../assets/materials/local_specialties/Glaze_Lily.png";
import jueyunChili from "../assets/materials/local_specialties/Jueyun_Chili.png";
import noctilucousJade from "../assets/materials/local_specialties/Noctilucous_Jade.png";
import philanemoMushroom from "../assets/materials/local_specialties/Philanemo_Mushroom.png";
import qingxin from "../assets/materials/local_specialties/Qingxin.png";
import silkFlower from "../assets/materials/local_specialties/Silk_Flower.png";
import smallLampGrass from "../assets/materials/local_specialties/Small_Lamp_Grass.png";
import starconch from "../assets/materials/local_specialties/Starconch.png";
import valberry from "../assets/materials/local_specialties/Valberry.png";
import violetgrass from "../assets/materials/local_specialties/Violetgrass.png";
import windwheelAster from "../assets/materials/local_specialties/Windwheel_Aster.png";
import wolfhook from "../assets/materials/local_specialties/Wolfhook.png";

// Talent Books
import freedom from "../assets/materials/talent_mats/Freedom.png";
import resistance from "../assets/materials/talent_mats/Resistance.png";
import ballad from "../assets/materials/talent_mats/Ballad.png";
import prosperity from "../assets/materials/talent_mats/Prosperity.png";
import diligence from "../assets/materials/talent_mats/Diligence.png";
import gold from "../assets/materials/talent_mats/Gold.png";

const ascensionMatsMap = {
    "Basalt Pillar": basaltPillar,
    "Cleansing Heart": cleansingHeart,
    "Everflame Seed": everflameSeed,
    "Hoarfrost Core": hoarfrostCore,
    "Hurricane Seed": hurricaneSeed,
    "Juvenile Jade": juvenileJade,
    "Lightning Prism": lightningPrism
}; 

const bossMatsMap = {
    "Dvalin's Claw": claw,
    "Dvalin's Plume": plume,
    "Dvalin's Sigh": sigh,
    "Ring of Boreas": ring,
    "Spirit Locket of Boreas": locket,
    "Tail of Boreas": tail,
    "Shadow of the Warrior": shadow,
    "Shard of a Foul Legacy": shard,
    "Tusk of Monoceros Caeli": tusk
}

const commonMatsMap = {
    "Arrow": arrow,
    "Fatui Insignia": fatuiInsignia,
    "Mask": mask,
    "Nectar": nectar,
    "Scroll": scroll,
    "Slime": slime,
    "TH Insignia": thInsignia
};

const localSpecialtiesMap = {
    "Calla Lily": callaLily,
    "Cecilia": cecilia,
    "Cor Lapis": corLapis,
    "Dandelion Seed": dandelionSeed,
    "Glaze Lily": glazeLily,
    "Jueyun Chili": jueyunChili,
    "Noctilucous Jade": noctilucousJade,
    "Philanemo Mushroom": philanemoMushroom,
    "Qingxin": qingxin,
    "Silk Flower": silkFlower,
    "Small Lamp Grass": smallLampGrass,
    "Starconch": starconch,
    "Valberry": valberry,
    "Violetgrass": violetgrass,
    "Windwheel Aster": windwheelAster,
    "Wolfhook": wolfhook
};

const talentMatsMap = {
    "Freedom": freedom,
    "Resistance": resistance,
    "Ballad": ballad,
    "Prosperity": prosperity,
    "Diligence": diligence,
    "Gold": gold
};

class CharCardBack extends Component {

    render() {
        let { char } = this.props
        let { talents, ascensionMat, localMat, commonMat, bossMat } = char.materials;
        return (
            <div id={`${char.name}-back`} className="char-card-back" onClick={() => this.props.flipCardFromBack(this.props.char)} >
                <div>
                    <img className="material-img-back" src={talentMatsMap[talents]}/>
                    <img className="material-img-back" src={ascensionMatsMap[ascensionMat]}/>
                    <img className="material-img-back" src={localSpecialtiesMap[localMat]}/>
                    <img className="material-img-back" src={commonMatsMap[commonMat]}/>
                    <img className="material-img-back" src={bossMatsMap[bossMat]}/>
                </div>
            </div>
        )
    }
}

export default CharCardBack;