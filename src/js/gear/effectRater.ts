import {
  DamageElement,
  DamageType,
  EffectValues,
  EnchantKind,
  GearSet,
  Rating,
  enchantKinds,
} from "./types";

const oneOf = (effectKind: EnchantKind, effectKinds: EnchantKind[]) => {
  return effectKinds.indexOf(effectKind) !== -1;
};

const isEffectUsageType = (effectKind: EnchantKind, type: DamageType) => {
  switch (type) {
    case "ATK":
      return oneOf(effectKind, ["ATKMultiplier", "ATKPropotion"]);
    case "MATK":
      return oneOf(effectKind, ["MATKMultiplier", "MATKPropotion"]);
  }
};

const isEffectUsageElement = (
  effectKind: EnchantKind,
  element: DamageElement
) => {
  switch (element) {
    case "Physical":
      return oneOf(effectKind, ["PhysicalDamage", "PhysicalDamageMultiplier"]);
    case "Fire":
      return oneOf(effectKind, ["FireDamage", "FireDamageMultiplier"]);
    case "Ice":
      return oneOf(effectKind, ["IceDamage", "IceDamageMultiplier"]);
    case "Thunder":
      return oneOf(effectKind, ["ThunderDamage", "ThunderDamageMultiplier"]);
    case "Light":
      return oneOf(effectKind, ["LightDamage", "LightDamageMultiplier"]);
    case "Dark":
      return oneOf(effectKind, ["DarkDamage", "DarkDamageMultiplier"]);
  }
};

const isEffectUsageCrit = (
  effectKind: EnchantKind,
  critCurse: number,
  type: DamageType
) => {
  //crit curse to big, dont include crit at all
  if (critCurse < 0) {
    return;
  }

  //PhysicalCritical
  //PhysicalCriticalMultiplier
  //CriticalDamage
  //CriticalDamageMultiplier
  if (oneOf(effectKind, ["CriticalDamage", "CriticalDamageMultiplier"])) {
    return true;
  }

  //capped crit, dont get more chance
  if (critCurse >= 100) {
    return;
  }

  switch (type) {
    case "ATK":
      return oneOf(effectKind, [
        "PhysicalCritical",
        "PhysicalCriticalMultiplier",
      ]);
    case "MATK":
      return oneOf(effectKind, [
        "MagicalCritical",
        "MagicalCriticalMultiplier",
      ]);
  }
};

const isEffectUsageBlessing = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["BlessingEffect", "BlessingEffectMultiplier"]);
};

const isEffectUsageFury = (effectKind: EnchantKind, element: DamageElement) => {
  switch (element) {
    case "Physical":
      return oneOf(effectKind, ["ArmoredFury"]);
    case "Fire":
    case "Ice":
    case "Thunder":
    case "Light":
    case "Dark":
      return oneOf(effectKind, ["WardedFury"]);
  }
};

const isEffectUsageGainsExp = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["EXPGain", "EXPGainMultiplier"]);
};
const isEffectUsageGainsGExp = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["GuildEXPGain"]);
};
const isEffectUsageGainsRB1 = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["RebirthPointGain1"]);
};
const isEffectUsageGainsRB2 = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["RebirthPointGain2"]);
};
const isEffectUsageGainsRB3 = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["RebirthPointGain3"]);
};
const isEffectUsageGainsSkillProf = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["SkillProficiency", "SkillProficiencyMultiplier"]);
};
const isEffectUsageGainsEqProf = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["EquipmentProficiency"]);
};
const isEffectUsageGainsTownMat = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["TownMatGain"]);
};
const isEffectUsageGainsGold = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["GoldGain", "GoldGainMultiplier"]);
};
const isEffectUsageGainsResource = (effectKind: EnchantKind) => {
  return false;
};
const isEffectUsageGainsPetEXP = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["PetEXPGain", "PetEXPGainMultiplier"]);
};
const isEffectUsageGainsLPG = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["LoyaltyPointGain", "LoyaltyPointGainMultiplier"]);
};
const isEffectUsageGainsTPG = (effectKind: EnchantKind) => {
  return oneOf(effectKind, ["TamingPoint", "TamingPointMultiplier"]);
};
const isEffectUsageGainsDropRace = (effectKind: EnchantKind) => {
  return false;
};

export const effectUsage = (gearSet: GearSet, effectKind: EnchantKind) => {
  let usage: string = "";

  //this enchant can not be applied to an item and is therefore filtered
  if (effectKind === "Nothing") {
    return usage;
  }

  if (gearSet.config.dps.weight > 0) {
    if (isEffectUsageType(effectKind, gearSet.config.dps.type)) {
      usage += "dps/type";
    }

    if (isEffectUsageElement(effectKind, gearSet.config.dps.element)) {
      usage += "dps/elemental";
    }

    if (
      isEffectUsageCrit(
        effectKind,
        gearSet.config.dps.critCurse,
        gearSet.config.dps.type
      )
    ) {
      usage += "dps/crit";
    }

    if (isEffectUsageBlessing(effectKind)) {
      usage += "dps/blessing";
    }

    if (isEffectUsageFury(effectKind, gearSet.config.dps.element)) {
      usage += "dps/fury";
    }
  }

  if (gearSet.config.gains.exp > 0 && isEffectUsageGainsExp(effectKind)) {
    usage += "gains/exp";
  }
  if (gearSet.config.gains.gexp > 0 && isEffectUsageGainsGExp(effectKind)) {
    usage += "gains/gexp";
  }
  if (gearSet.config.gains.rb1 > 0 && isEffectUsageGainsRB1(effectKind)) {
    usage += "gains/rb1";
  }
  if (gearSet.config.gains.rb2 > 0 && isEffectUsageGainsRB2(effectKind)) {
    usage += "gains/rb2";
  }
  if (gearSet.config.gains.rb3 > 0 && isEffectUsageGainsRB3(effectKind)) {
    usage += "gains/rb3";
  }
  if (
    gearSet.config.gains.skillProf > 0 &&
    isEffectUsageGainsSkillProf(effectKind)
  ) {
    usage += "gains/skillprof";
  }
  if (gearSet.config.gains.eqProf > 0 && isEffectUsageGainsEqProf(effectKind)) {
    usage += "gains/eqprof";
  }
  if (
    gearSet.config.gains.townMat > 0 &&
    isEffectUsageGainsTownMat(effectKind)
  ) {
    usage += "gains/townmat";
  }
  if (gearSet.config.gains.gold > 0 && isEffectUsageGainsGold(effectKind)) {
    usage += "gains/gold";
  }
  if (
    gearSet.config.gains.resource > 0 &&
    isEffectUsageGainsResource(effectKind)
  ) {
    usage += "gains/resource";
  }
  if (gearSet.config.gains.petExp > 0 && isEffectUsageGainsPetEXP(effectKind)) {
    usage += "gains/petexp";
  }
  if (gearSet.config.gains.lpg > 0 && isEffectUsageGainsLPG(effectKind)) {
    usage += "gains/lpg";
  }
  if (gearSet.config.gains.tpg > 0 && isEffectUsageGainsTPG(effectKind)) {
    usage += "gains/tpg";
  }
  if (
    gearSet.config.gains.dropRace > 0 &&
    isEffectUsageGainsDropRace(effectKind)
  ) {
    usage += "gains/droprace";
  }

  return usage;
};

export const rateEffects = (
  gearSet: GearSet,
  ese: EffectValues,
  rating: Rating
) => {
  rating.dps = 1;

  rating.exp = 1;
  rating.gexp = 1;
  rating.rb1 = 1;
  rating.rb2 = 1;
  rating.rb3 = 1;
  rating.skillProf = 1;
  rating.eqProf = 1;
  rating.townMat = 1;
  rating.gold = 1;
  rating.resource = 1;
  rating.petExp = 1;
  rating.lpg = 1;
  rating.tpg = 1;
  rating.dropRace = 1;

  const enchantsMap = gearSet.enchantsMap;

  //TODO improve the accuracy
  // "Nothing" is a enchant slot, its worth as much as the best enchant
  // consider outlier like fury
  //consider target caps for dps and crit chance
  for (let effectKind of enchantKinds) {
    //if we dont care for these dont include them in the value
    if (!enchantsMap.get(effectKind).usage) {
      continue;
    }

    let effectValue = ese[effectKind];

    const usageSplitted = enchantsMap.get(effectKind).usage.split("/");

    switch (usageSplitted[0]) {
      case "dps":
        rating.dps *= 1 + effectValue;
        break;
      case "gains":
        switch (usageSplitted[1]) {
          case "exp":
            rating.exp *= 1 + effectValue;
            break;
          case "gexp":
            rating.gexp *= 1 + effectValue;
            break;
          case "rb1":
            rating.rb1 *= 1 + effectValue;
            break;
          case "rb2":
            rating.rb2 *= 1 + effectValue;
            break;
          case "rb3":
            rating.rb3 *= 1 + effectValue;
            break;
          case "skillprof":
            rating.skillProf *= 1 + effectValue;
            break;
          case "eqprof":
            rating.eqProf *= 1 + effectValue;
            break;
          case "townmat":
            rating.townMat *= 1 + effectValue;
            break;
          case "gold":
            rating.gold *= 1 + effectValue;
            break;
          case "resource":
            rating.resource *= 1 + effectValue;
            break;
          case "petexp":
            rating.petExp *= 1 + effectValue;
            break;
          case "lpg":
            rating.lpg *= 1 + effectValue;
            break;
          case "tpg":
            rating.tpg *= 1 + effectValue;
            break;
          case "droprace":
            rating.dropRace *= 1 + effectValue;
            break;
        }
        break;
    }
  }

  rating.total =
    Math.pow(rating.dps, gearSet.config.dps.weight) *
    Math.pow(rating.exp, gearSet.config.gains.exp) *
    Math.pow(rating.gexp, gearSet.config.gains.gexp) *
    Math.pow(rating.rb1, gearSet.config.gains.rb1) *
    Math.pow(rating.rb2, gearSet.config.gains.rb2) *
    Math.pow(rating.rb3, gearSet.config.gains.rb3) *
    Math.pow(rating.skillProf, gearSet.config.gains.skillProf) *
    Math.pow(rating.eqProf, gearSet.config.gains.eqProf) *
    Math.pow(rating.townMat, gearSet.config.gains.townMat) *
    Math.pow(rating.gold, gearSet.config.gains.gold) *
    Math.pow(rating.resource, gearSet.config.gains.resource) *
    Math.pow(rating.petExp, gearSet.config.gains.petExp) *
    Math.pow(rating.lpg, gearSet.config.gains.lpg) *
    Math.pow(rating.tpg, gearSet.config.gains.tpg) *
    Math.pow(rating.dropRace, gearSet.config.gains.dropRace);
};
