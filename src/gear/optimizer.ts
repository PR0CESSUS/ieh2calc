import EventEmitter from "./EventEmitter";
import data from "./data.js";
import { effectUsage, rateEffects } from "./effectRater";
import {
  Effect,
  EffectValues,
  Enchant,
  EnchantKind,
  GearSet,
  Item,
  ItemKind,
  Part,
  Rating,
  SetKind,
  enchantKinds,
  itemKinds,
  parts,
  setKinds,
} from "./types";

const defaultEffectValues: EffectValues = enchantKinds.reduce((acc, kind) => {
  acc[kind] = 0;
  return acc;
}, {}) as EffectValues;

const defaultRating: Rating = {
  dps: 0,
  gains: 0,
  total: 0,
} as const;

export const setItemsEffectMult = [
  1, 1, 1.05, 1.1, 1.14, 1.19, 1.25, 1.35, 1.5,
] as const;

export const maxItemSlotsByPart: { [part in Part]: number } = {
  Weapon: 19,
  Armor: 18,
  Jewelry: 19,
} as const;

/**
 * initialize a gearSet for optimization
 * this fills enchantsMap and itemsMap and default values
 */
export const initGearset = (gearSet: GearSet): GearSet => {
  gearSet.events = new EventEmitter();

  gearSet.enchantsMap = new Map();
  gearSet.itemsMap = new Map();

  gearSet.enchants = [];
  gearSet.items = [];

  gearSet.itemSets = {} as GearSet["itemSets"];
  for (let setKind of setKinds) {
    gearSet.itemSets[setKind] = {
      activeItems: {},
      activeCount: 0,
      activeMultiplier: 1,
      newSetItemBonusRating: {
        ...defaultRating,
      },
    };
  }
  gearSet.itemSetsAverageMultiplier = 1;

  gearSet.enchantsMap.set("Nothing", {
    kind: "Nothing",
    usage: "",
    maxLevel: 1,
    maxValue: 1,
    maxValueLottery: 1,
    rating: {
      ...defaultRating,
    },
  });
  for (let enchant of data.enchants) {
    //copy to not modify the original data
    enchant = JSON.parse(JSON.stringify(enchant)) as Enchant;

    enchant.usage = "";

    enchant.rating = {
      ...defaultRating,
    };

    gearSet.enchantsMap.set(enchant.kind, enchant);
  }

  for (let item of data.items) {
    //copy to not modify the original data
    item = JSON.parse(JSON.stringify(item)) as Item;

    item.usage = "";

    item.rating = {
      ...defaultRating,
    };

    item.ese = {
      ...defaultEffectValues,
    };
    item.eseSum = 0;

    gearSet.itemsMap.set(item.kind, item);
  }

  gearSet.ese = {
    ...defaultEffectValues,
  };
  gearSet.eseSum = 0;
  gearSet.rating = {
    ...defaultRating,
  };

  updateEnchantsFilter(gearSet);
  updateItemsFilter(gearSet);
  updateItemsEse(gearSet);
  updateItemSets(gearSet);
  updateGearsetEse(gearSet);
  updateAllRatings(gearSet);

  return gearSet;
};

export const changedEnchantFilter = (gearSet: GearSet) => {
  updateEnchantsFilter(gearSet);
  updateGearsetEse(gearSet);
  updateAllRatings(gearSet);
};

export const changedItemsFilter = (gearSet: GearSet) => {
  updateItemsFilter(gearSet);
};

export const changedEquippedItems = (gearSet: GearSet) => {
  updateItemSets(gearSet);
  updateGearsetEse(gearSet);
  updateAllRatings(gearSet);
};

export const changedEquippedEnchants = (gearSet: GearSet) => {
  updateGearsetEse(gearSet);
  updateAllRatings(gearSet);
};

export const changedItemSettings = (gearSet: GearSet) => {
  updateItemsEse(gearSet);
  updateItemSets(gearSet);
  updateGearsetEse(gearSet);
  updateAllRatings(gearSet);
};

export const update = (
  enchantFilterChanged,
  itemFilterChanged,
  itemsChanged
) => {};

export const getItemKindInSlot = (
  gearSet: GearSet,
  part: Part,
  index: number
): ItemKind => {
  return gearSet.equippedItems[part][index];
};

export const addEnchant = (gearSet: GearSet, enchant: Enchant): boolean => {
  //TODO check for available enchant slots
  const maxEnchantSlots = 300;

  for (let i = 0; i < maxEnchantSlots; i++) {
    const equippedEnchant = gearSet.equippedEnchants[i];
    if (!equippedEnchant || equippedEnchant === "Nothing") {
      return setEnchantAtIndex(gearSet, enchant.kind, gearSet.equippedEnchants.length);
    }
  }

  return false
}

export const setEnchantAtIndex = (
  gearSet: GearSet,
  enchant: EnchantKind,
  index: number
) => {
  if (gearSet.equippedEnchants[index] == enchant) {
    return false;
  }

  for (let i = 0; i < index; i++) {
    if (!gearSet.equippedEnchants[i]) {
      gearSet.equippedEnchants[i] = "Nothing";
    }
  }

  gearSet.equippedEnchants[index] = enchant;

  changedEquippedEnchants(gearSet);

  return true;
};

export const isEmptySlot = (gearSet: GearSet, part: Part, index: number) => {
  const itemKind = getItemKindInSlot(gearSet, part, index);
  return isEmptyItemKind(itemKind);
};

export const isEmptyItemKind = (itemKind: ItemKind) => {
  return !itemKind || itemKind === "Nothing";
};

export const addItem = (gearSet: GearSet, item: Item): boolean => {
  const part = item.part;

  const maxItemSlots = maxItemSlotsByPart[part];
  for (let i = 0; i < maxItemSlots; i++) {
    if (isEmptySlot(gearSet, part, i)) {
      return setItemAtIndex(gearSet, item.kind, part, i);
    }
  }

  return false;
};
export const getItemAtIndex = (
  gearSet: GearSet,
  part: Part,
  index: number
): ItemKind => {
  return gearSet.equippedItems[part][index];
};
export const setItemAtIndex = (
  gearSet: GearSet,
  itemKind: ItemKind,
  part: Part,
  index: number
): boolean => {
  if (gearSet.equippedItems[part][index] == itemKind) {
    return false;
  }

  if (index >= maxItemSlotsByPart[part]) {
    return false;
  }

  for (let i = 0; i < index; i++) {
    if (!gearSet.equippedItems[part][i]) {
      gearSet.equippedItems[part][i] = "Nothing";
    }
  }

  gearSet.equippedItems[part][index] = itemKind;

  changedEquippedItems(gearSet);

  return true;
};

export const clearAll = (gearSet: GearSet) => {
  gearSet.equippedItems.Weapon.length = 0;
  gearSet.equippedItems.Armor.length = 0;
  gearSet.equippedItems.Jewelry.length = 0;

  gearSet.equippedEnchants.length = 0;

  changedEquippedItems(gearSet);
};

/**
 * apply the filter to the gearSet
 */
const updateEnchantsFilter = (gearSet: GearSet) => {
  for (const [enchantKind, enchant] of gearSet.enchantsMap) {
    enchant.usage = effectUsage(gearSet, enchant.kind);

    if (enchant.usage) {
      const index = gearSet.enchants.indexOf(enchant);
      if (index === -1) {
        gearSet.enchants.push(enchant);
      }
    }
  }

  filterArrayInPlace(gearSet.enchants, (enchant) => enchant.usage !== "");
};
const updateItemsFilter = (gearSet: GearSet) => {
  //TODO implement the filter
  for (const [itemKind, item] of gearSet.itemsMap) {
    if (item.setKind === "Nothing") {
      item.usage = "";
    } else {
      item.usage = "default";
    }

    const index = gearSet.items.indexOf(item);
    if (item.usage) {
      if (index === -1) {
        gearSet.items.push(item);
      }
    }
  }

  filterArrayInPlace(gearSet.items, (item) => item.usage !== "");
};

/**
 * return the best item for the given part within the gearSet
 */
export const findBestItem = (gearSet: GearSet, part: Part): Item => {
  //gearSet.items is already sorted by rating
  for (let item of gearSet.items) {
    if (item.part === part) {
      return item;
    }
  }
  return null;
};

/**
 * return the best enchant within the gearSet
 */
export const findBestEnchant = (gearSet: GearSet): Enchant => {
  return gearSet.enchants[0];
};

/**
 * Fills all Item and Enchant slots with the best possible item/enchant.
 */
export const optimizeAll = (gearSet: GearSet) => {
  while (true) {
    const didOptimizeitem = optimizeNextItem(gearSet);
    if (!didOptimizeitem) {
      break;
    }
  }

  while (true) {
    const didOptimizeenchant = optimizeNextEnchant(gearSet);
    if (!didOptimizeenchant) {
      break;
    }
  }
};
export const optimizeNextItem = (gearSet: GearSet): boolean => {
  const freeSlotsPerPart = {
    ...gearSet.config.item.slots,
  };

  for (let part of parts) {
    for (let itemKind of gearSet.equippedItems[part]) {
      if (itemKind === "Nothing") {
        continue;
      }

      freeSlotsPerPart[part]--;
    }
  }

  let partToOptimize: Part;
  for (let part of parts) {
    const freeSlots = freeSlotsPerPart[part];
    if (
      freeSlots > 0 &&
      (!partToOptimize || freeSlots > freeSlotsPerPart[partToOptimize])
    ) {
      partToOptimize = part;
    }
  }

  if (!partToOptimize) {
    return false;
  }

  const bestItem = findBestItem(gearSet, partToOptimize);
  if (!bestItem) {
    return false;
  }
  return addItem(gearSet, bestItem);
};
export const optimizeNextEnchant = (gearSet: GearSet): boolean => {
  const bestEnchant = findBestEnchant(gearSet);
  if (!bestEnchant) {
    return false;
  }
  return addEnchant(gearSet, bestEnchant);
}

const updateItemsEse = (gearSet: GearSet) => {
  for (let item of gearSet.items) {
    recalcItemEse(gearSet, item);
  }
};

const recalcItemEse = (gearSet: GearSet, item: Item) => {
  for (let effectKind of enchantKinds) {
    item.ese[effectKind] = 0;
  }

  addEffectsToEse(gearSet, item, item.effects);
  if (gearSet.config.item.includeMastery) {
    addEffectsToEse(gearSet, item, item.levelMaxEffects);
  }
};

const addEffectsToEse = (
  gearSet: GearSet,
  object: { ese: EffectValues; eseSum: number; rating: Rating },
  effects: Effect[]
) => {
  for (let effect of effects) {
    const enchant = gearSet.enchantsMap.get(effect.kind);
    let enchantEffectValue = enchant.maxValue;
    if (gearSet.config.item.lottery) {
      enchantEffectValue = enchant.maxValueLottery;
    }

    let itemEffectValue =
      effect.initValue + effect.baseValue * gearSet.config.item.itemLevel;

    if (itemEffectValue < 0 && gearSet.config.item.curseAnvil) {
      //this is a cursed effect, if we add curse anvils it will be nullified
      itemEffectValue = 0;
    }

    const eseValue = itemEffectValue / enchantEffectValue;
    object.ese[effect.kind] += eseValue;
    object.eseSum += eseValue;
  }
};

const filterArrayInPlace = <T>(arr: T[], condition: (e: T) => boolean) => {
  let i = 0,
    j = 0;

  while (i < arr.length) {
    const val = arr[i];
    if (condition(val)) arr[j++] = val;
    i++;
  }

  arr.length = j;
  return arr;
};

const updateItemSets = (gearSet: GearSet) => {
  //count active set items
  for (const setKind of setKinds) {
    const itemSet = gearSet.itemSets[setKind];
    itemSet.activeItems = {};
    itemSet.activeCount = 0;
    itemSet.activeMultiplier = 1;
  }
  for (let part of parts) {
    for (let itemKind of gearSet.equippedItems[part]) {
      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setKind = item.setKind;
      const itemSet = gearSet.itemSets[setKind];
      if (!itemSet.activeItems[itemKind]) {
        itemSet.activeItems[itemKind] = true;
        itemSet.activeCount += 1;
        itemSet.activeMultiplier = setItemsEffectMult[itemSet.activeCount];
      }
    }
  }

  //update itemSetsAverageMultiplier
  let equippedItemCount = 0;
  for (let part of parts) {
    for (let itemKind of gearSet.equippedItems[part]) {
      equippedItemCount++;

      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setKind = item.setKind;
      const itemSet = gearSet.itemSets[setKind];
      gearSet.itemSetsAverageMultiplier += itemSet.activeMultiplier;
    }
  }
  if (equippedItemCount > 0) {
    gearSet.itemSetsAverageMultiplier =
      gearSet.itemSetsAverageMultiplier / equippedItemCount;
  } else {
    gearSet.itemSetsAverageMultiplier = 1;
  }
};

const updateGearsetEse = (gearSet: GearSet) => {
  gearSet.eseSum = 0;
  for (let enchantKind of enchantKinds) {
    gearSet.ese[enchantKind] = 0;
  }

  //apply enchant ese to gearSet
  const value = gearSet.itemSetsAverageMultiplier;
  for (const enchantKind of gearSet.equippedEnchants) {
    gearSet.ese[enchantKind] += value;
    gearSet.eseSum += value;
  }

  //apply items ese to gearSet
  for (let part of parts) {
    for (let itemKind of gearSet.equippedItems[part]) {
      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setKind = item.setKind;
      const itemSet = gearSet.itemSets[setKind];
      for (const enchantKind of enchantKinds) {
        const value = item.ese[enchantKind] * itemSet.activeMultiplier;

        gearSet.ese[enchantKind] += value;
        gearSet.eseSum += value;
      }
    }
  }
};

export const updateAllRatings = (gearSet: GearSet) => {
  rateEffects(gearSet, gearSet.ese, gearSet.rating);

  updateAllEnchantRating(gearSet);

  updateAllItemRating(gearSet);
};

const updateAllEnchantRating = (gearSet: GearSet) => {
  const setMultiplier = gearSet.itemSetsAverageMultiplier;

  for (const enchant of gearSet.enchants) {
    gearSet.ese[enchant.kind] += setMultiplier;

    rateEffects(gearSet, gearSet.ese, enchant.rating);

    gearSet.ese[enchant.kind] -= setMultiplier;
  }

  gearSet.enchants.sort((a, b) => b.rating.dps - a.rating.dps);
};

const updateAllItemRating = (gearSet: GearSet) => {
  
  //fill all enchant slots with temporary enchants
  //  this is so we choose items which dont overlap with good enchant options
  const originalEse = gearSet.ese;
  gearSet.ese = { ...originalEse };
  //TODO check for available enchant slots
  const maxEnchantSlots = 300 - gearSet.equippedEnchants.length;
  for (let i = 0; i < maxEnchantSlots; i++) {
    let lowestEseValue = Number.MAX_VALUE;
    let lowestEseKind: EnchantKind = "Nothing";
    for (const enchant of gearSet.enchants) {
      if (gearSet.ese[enchant.kind] < lowestEseValue) {
        lowestEseValue = gearSet.ese[enchant.kind];
        lowestEseKind = enchant.kind;
      }
    }
    if (lowestEseKind === "Nothing") {
      break;
    }

    gearSet.ese[lowestEseKind] += gearSet.itemSetsAverageMultiplier
  }

  for (const item of gearSet.items) {
    updateItemRating(gearSet, item);
  }

  //revert the temporary enchants
  gearSet.ese = originalEse;

  //after we rated all items, apply a bonus to set items which would improve a set
  for (const setKind in gearSet.itemSets) {
    gearSet.itemSets[setKind as SetKind].newSetItemBonusRating = {
      ...defaultRating,
    };
  }
  for (const part of parts) {
    for (const itemKind of gearSet.equippedItems[part as Part]) {
      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setKind = item.setKind;
      if (setKind === "Nothing") {
        continue;
      }

      const itemSet = gearSet.itemSets[setKind];
      for (let ratingKey in item.rating) {
        itemSet.newSetItemBonusRating[ratingKey] +=
          item.rating[ratingKey] * gearSet.config.item.setBias;
      }
    }
  }
  for (const item of gearSet.items) {
    const setKind = item.setKind;
    if (setKind === "Nothing") {
      continue;
    }

    const itemSet = gearSet.itemSets[setKind];
    //if this is a new set item, add the value of the other items atop of it
    if (!itemSet.activeItems[item.kind]) {
      for (const ratingKey in item.rating) {
        item.rating[ratingKey] += itemSet.newSetItemBonusRating[ratingKey];
      }
    }
  }

  gearSet.items.sort((a, b) => b.rating.dps - a.rating.dps);

  gearSet.events.emit("itemRatingUpdated");
};

//variable to avoid creating a new object every time
const updateItemRatingEffectTemp: EffectValues = {
  ...defaultEffectValues,
};
/**
 * update the item rating within the gearSet
 */
const updateItemRating = (gearSet: GearSet, item: Item) => {
  const itemSet = gearSet.itemSets[item.setKind];
  const setMultiplier = itemSet.activeMultiplier;
  for (let enchantKind of enchantKinds) {
    updateItemRatingEffectTemp[enchantKind] =
      gearSet.ese[enchantKind] + item.ese[enchantKind] * setMultiplier;
  }

  rateEffects(gearSet, updateItemRatingEffectTemp, item.rating);
};
