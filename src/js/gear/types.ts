import EventEmitter from "./EventEmitter";

export const enchantKinds = [
  "Nothing", //adds an empty enchant slot
  "HPAdder",
  "MPAdder",
  "ATKAdder",
  "MATKAdder",
  "DEFAdder",
  "MDEFAdder",
  "SPDAdder",
  "HPMultiplier",
  "MPMultiplier",
  "ATKMultiplier",
  "MATKMultiplier",
  "DEFMultiplier",
  "MDEFMultiplier",
  "ATKPropotion",
  "MATKPropotion",
  "DEFPropotion",
  "MDEFPropotion",
  "FireResistance",
  "IceResistance",
  "ThunderResistance",
  "LightResistance",
  "DarkResistance",
  "PhysicalAbsorption",
  "FireAbsorption",
  "IceAbsorption",
  "ThunderAbsorption",
  "LightAbsorption",
  "DarkAbsorption",
  "DebuffResistance",
  "EquipmentDropChance",
  "SlimeDropChance",
  "MagicSlimeDropChance",
  "SpiderDropChance",
  "BatDropChance",
  "FairyDropChance",
  "FoxDropChance",
  "DevilFishDropChance",
  "TreantDropChance",
  "FlameTigerDropChance",
  "UnicornDropChance",
  "ColorMaterialDropChance",
  "PhysicalCritical",
  "MagicalCritical",
  "EXPGain",
  "SkillProficiency",
  "EquipmentProficiency",
  "MoveSpeedMultiplier",
  "GoldGain",
  "StoneGain",
  "CrystalGain",
  "LeafGain",
  "WarriorSkillLevel",
  "WizardSkillLevel",
  "AngelSkillLevel",
  "ThiefSkillLevel",
  "ArcherSkillLevel",
  "TamerSkillLevel",
  "AllSkillLevel",
  "SlimeKnowledge",
  "MagicSlimeKnowledge",
  "SpiderKnowledge",
  "BatKnowledge",
  "FairyKnowledge",
  "FoxKnowledge",
  "DevilFishKnowledge",
  "TreantKnowledge",
  "FlameTigerKnowledge",
  "UnicornKnowledge",
  "PhysicalDamage",
  "FireDamage",
  "IceDamage",
  "ThunderDamage",
  "LightDamage",
  "DarkDamage",
  "HpRegen",
  "MpRegen",
  "TamingPoint",
  "WarriorSkillRange",
  "WizardSkillRange",
  "AngelSkillRange",
  "ThiefSkillRange",
  "ArcherSkillRange",
  "TamerSkillRange",
  "TownMatGain",
  "TownMatAreaClearGain",
  "RebirthPointGain1",
  "RebirthPointGain2",
  "RebirthPointGain3",
  "CriticalDamage",
  "BlessingEffect",
  "MoveSpeedAdder",
  "PetEXPGain",
  "LoyaltyPointGain",
  "CatalystDoubleCriticalChance",
  "WarriorSkillEffectRange",
  "WizardSkillEffectRange",
  "AngelSkillEffectRange",
  "ThiefSkillEffectRange",
  "ArcherSkillEffectRange",
  "TamerSkillEffectRange",
  "HpRegenMultiplier",
  "MpRegenMultiplier",
  "ArmoredFury",
  "WardedFury",
  "PetPhysicalCriticalChance",
  "PetMagicalCriticalChance",
  "PetCriticalDamage",
  "PetDebuffResistance",
  "StoneTownResearchPower",
  "CrystalTownResearchPower",
  "LeafTownResearchPower",
  "GuildEXPGain",
  "SPDMultiplier",
  "CriticalDamageMultiplier",
  "SkillProficiencyMultiplier",
  "EquipmentProficiencyMultiplier",
  "EXPGainMultiplier",
  "GoldGainMultiplier",
  "PhysicalDamageMultiplier",
  "FireDamageMultiplier",
  "IceDamageMultiplier",
  "ThunderDamageMultiplier",
  "LightDamageMultiplier",
  "DarkDamageMultiplier",
  "TamingPointMultiplier",
  "PetEXPGainMultiplier",
  "LoyaltyPointGainMultiplier",
  "BlessingEffectMultiplier",
  "PhysicalCriticalMultiplier",
  "MagicalCriticalMultiplier",
] as const;
export type EnchantKind = (typeof enchantKinds)[number];
export const itemKinds = [
  "Nothing",
  "DullSword",
  "BrittleStaff",
  "FlimsyWing",
  "WornDart",
  "SmallBow",
  "WoodenRecorder",
  "OldCloak",
  "BlueHat",
  "OrangeHat",
  "TShirt",
  "ClothGlove",
  "BlueTShirt",
  "OrangeTShirt",
  "ClothBelt",
  "ClothShoes",
  "IronRing",
  "PearlEarring",
  "FireBrooch",
  "IceBrooch",
  "ThunderBrooch",
  "LightBrooch",
  "DarkBrooch",
  "WoodenShield",
  "LongSword",
  "LongStaff",
  "WarmWing",
  "DualDagger",
  "ReinforcedBow",
  "Flute",
  "FireStaff",
  "IceStaff",
  "ThunderStaff",
  "LeatherBelt",
  "LeatherShoes",
  "WarmCloak",
  "LeatherArmor",
  "LeatherGlove",
  "LeatherShield",
  "FireRing",
  "IceRing",
  "ThunderRing",
  "LightRing",
  "DarkRing",
  "EnhancedFireBrooch",
  "EnhancedIceBrooch",
  "EnhancedThunderBrooch",
  "EnhancedLightBrooch",
  "EnhancedDarkBrooch",
  "BattleSword",
  "BattleStaff",
  "BattleWing",
  "BattleDagger",
  "BattleBow",
  "BattleRecorder",
  "SlimeSword",
  "SlimeGlove",
  "SlimeRing",
  "SlimeBelt",
  "SlimePincenez",
  "SlimeWing",
  "SlimePoncho",
  "SlimeDart",
  "MagicSlimeStick",
  "MagicSlimeHat",
  "MagicSlimeBow",
  "MagicSlimeShoes",
  "MagicSlimeRecorder",
  "MagicSlimeEarring",
  "MagicSlimeBalloon",
  "MagicSlimeSkirt",
  "SpiderHat",
  "SpiderSkirt",
  "SpiderSuit",
  "SpiderDagger",
  "SpiderWing",
  "SpiderCatchingNet",
  "SpiderStick",
  "SpiderFoldingFan",
  "BatRing",
  "BatShoes",
  "BatSword",
  "BatHat",
  "BatRecorder",
  "BatBow",
  "BatMascaradeMask",
  "BatCloak",
  "BronzeShoulder",
  "BattleRing",
  "Halo",
  "IronShoulder",
  "StrengthRing",
  "GoldenRing",
  "GoldenFireRing",
  "GoldenIceRing",
  "GoldenThunderRing",
  "GoldenLightRing",
  "GoldenDarkRing",
  "IronBelt",
  "IronShoes",
  "CopperArmor",
  "IronGlove",
  "TowerShield",
  "FireTowerShield",
  "IceTowerShield",
  "ThunderTowerShield",
  "LightTowerShield",
  "DarkTowerShield",
  "SavageRing",
  "SpellboundFireBrooch",
  "SpellboundIceBrooch",
  "SpellboundThunderBrooch",
  "SpellboundLightBrooch",
  "SpellboundDarkBrooch",
  "CopperHelm",
  "BattleHelm",
  "WizardHelm",
  "LargeSword",
  "LargeStaff",
  "LargeWing",
  "LargeDagger",
  "LargeBow",
  "LargeOcarina",
  "FairyClothes",
  "FairyStaff",
  "FairyBoots",
  "FairyGlove",
  "FairyBrooch",
  "FairyLamp",
  "FairyWing",
  "FairyShuriken",
  "FoxKanzashi",
  "FoxLoincloth",
  "FoxMask",
  "FoxHamayayumi",
  "FoxHat",
  "FoxCoat",
  "FoxBoot",
  "FoxEma",
  "DevilfishSword",
  "DevilfishWing",
  "DevilfishRecorder",
  "DevilfishArmor",
  "DevilfishScarf",
  "DevilfishGill",
  "DevilfishPendant",
  "DevilfishRing",
  "TreantAmulet",
  "TreantHagoita",
  "TreantChoppingBoard",
  "TreantDagger",
  "TreantHaniwa",
  "TreantKokeshi",
  "TreantLamp",
  "TreantLunchbox",
  "FlametigerPortableHotSpring",
  "FlametigerVolcanicShield",
  "FlametigerStripedBriefs",
  "TorchOfEverburningFlametiger",
  "FlametigerCostume",
  "RingOfFlametigersWrath",
  "EndlessBowlOfSpicyFlametigerRamen",
  "ScreenOfTheSneakyFlametiger",
] as const;
export type ItemKind = (typeof itemKinds)[number];
export const setKinds = [
  "Nothing",
  "Slime",
  "Magicslime",
  "Spider",
  "Bat",
  "Fairy",
  "Fox",
  "Devilfish",
  "Treant",
  "Flametiger",
] as const;
export type SetKind = (typeof setKinds)[number];
export const parts = ["Weapon", "Armor", "Jewelry"] as const;
export type Part = (typeof parts)[number];

export interface Enchant {
  kind: EnchantKind;
  kindNumeric: number;
  usage: string;
  maxLevel: number;
  maxValue: number;
  maxValueLottery: number;
  rating: Rating;
}

export interface Effect {
  kind: EnchantKind;
  baseValue: number;
  initValue: number;
}

//a object of combined effect values, usually converted to ese
export type EffectValues = {
  [effectKind in EnchantKind]: number;
};

export interface Rating {
  dps: number;

  exp: number;
  gexp: number;
  rb1: number;
  rb2: number;
  rb3: number;
  skillProf: number;
  townMat: number;
  gold: number;
  resource: number;
  petExp: number;
  eqProf: number;
  lpg: number;
  tpg: number;
  dropRace: number;

  total: number;
}

export type Item = {
  kind: ItemKind;
  kindNumeric: number;
  usage: string;
  part: Part;
  setKind: SetKind;
  effects: Effect[];
  levelMaxEffects: Effect[];

  ese: EffectValues;
  eseSum: number;
  rating: Rating;
}

export type GearSet = {
  events: EventEmitter;

  equippedItems: {
    [part in Part]: ItemKind[];
  };
  equippedEnchants: EnchantKind[];

  config: Config;

  itemSets: {
    [setKind in SetKind]: {
      activeItems: {
        [itemKind in ItemKind]?: boolean
      }
      activeCount: number;
      activeMultiplier: number;
      newSetItemBonusRating: Rating;
    };
  };
  itemSetsAverageMultiplier: number;

  //map to look up kind +> item/enchant
  enchantsMap: Map<EnchantKind, Enchant>;
  itemsMap: Map<ItemKind, Item>;

  //sorted and filtered arrays
  enchants: Enchant[];
  items: Item[];
  
  ese: EffectValues;
  eseSum: number;
  rating: Rating;
}

export type DamageType = "ATK" | "MATK";
export type DamageElement = "Physical" | "Fire" | "Ice" | "Thunder" | "Light" | "Dark";

export interface Config {
  dps: {
    type: DamageType;
    element: DamageElement;
    baseDamage: number;
    critCurse: number;
    pet: boolean;
    weight: number;
  };
  gains: {
    exp: number;
    gexp: number;
    rb1: number;
    rb2: number;
    rb3: number;
    skillProf: number;
    eqProf: number;
    townMat: number;
    gold: number;
    resource: number;
    petExp: number;
    lpg: number;
    tpg: number;
    dropRace: number;
  };
  item: {
    itemLevel: number;
    includeMastery: boolean;
    curseAnvil: boolean;
    lottery: boolean;
    setBias: number;
    slots: {
      [part in Part]: number;
    };
  };
}
export interface SaveData {
  version: number;

  selectedLoadout: number;
  gearSets: GearSet[];
}
