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

const isEffectUsageCrit = (effectKind: EnchantKind, critCurse: number, type: DamageType) => {
  //crit curse to big, dont include crit at all
  if (critCurse < 0) {
    return
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
    return
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

const isEffectUsageGains = (effectKind: EnchantKind) => {
  return oneOf(effectKind, [
    "EXPGain",
    "SkillProficiency",
    "EquipmentProficiency",
    "TownMatGain",
    "RebirthPointGain1",
    "RebirthPointGain2",
    "RebirthPointGain3",
    "GuildEXPGain",
    "SkillProficiencyMultiplier",
    "EquipmentProficiencyMultiplier",
    "EXPGainMultiplier",
  ]);
};

export const effectUsage = (gearSet: GearSet, effectKind: EnchantKind) => {
  let usage: string = "";

  //this enchant can not be applied to an item and is therefore filtered
  if (effectKind === "Nothing") {
    return usage;
  }

  if (isEffectUsageType(effectKind, gearSet.config.dps.type)) {
    usage += "_dps/type_";
  }

  if (isEffectUsageElement(effectKind, gearSet.config.dps.element)) {
    usage += "_dps/elemental_";
  }

  if (isEffectUsageCrit(effectKind, gearSet.config.dps.critCurse, gearSet.config.dps.type)) {
    usage += "_dps/crit_";
  }

  if (isEffectUsageBlessing(effectKind)) {
    usage += "_dps/blessing_";
  }

  if (isEffectUsageFury(effectKind, gearSet.config.dps.element)) {
    usage += "_dps/fury_";
  }

  if (isEffectUsageGains(effectKind)) {
    usage += "_gains_";
  }

  return usage;
};

export const rateEffects = (
  gearSet: GearSet,
  ese: EffectValues,
  rating: Rating
) => {
  rating.dps = 1;
  rating.gains = 1;

  //TODO improve the accuracy
  // "Nothing" is a enchant slot, its worth as much as the best enchant
  // consider outlier like fury
  //consider target caps for dps and crit chance
  for (let effectKind of enchantKinds) {
    //if we dont care for these dont include them in the value
    if (!gearSet.enchantsMap.get(effectKind).usage) {
      continue;
    }

    let effectValue = ese[effectKind];

    rating.dps *= 1 + effectValue;
  }

  rating.total = rating.dps * rating.gains;
};
