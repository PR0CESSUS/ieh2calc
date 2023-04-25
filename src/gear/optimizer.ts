import EventEmitter from "./EventEmitter";
import data from "./data.js";
import { rateEffects } from "./effectRater";
import {
  Effect,
  EffectValues,
  Enchant,
  EnchantKind,
  EseObject,
  GearSet,
  Item,
  ItemKind,
  Part,
  Rating,
  SetKind,
  enchantKinds,
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

const setItemsEffectMult = [1, 1, 1.05, 1.1, 1.14, 1.19, 1.25, 1.35, 1.5];

/**
 * initialize a gearset for optimization
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

  gearSet.enchantsMap.set("Nothing", {
    kind: "Nothing",
    didPassFilter: false,
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

    enchant.didPassFilter = true;
    enchant.rating = {
      ...defaultRating,
    };

    gearSet.enchantsMap.set(enchant.kind, enchant);
  }
  applyEnchantsFilter(gearSet);

  for (let item of data.items) {
    //copy to not modify the original data
    item = JSON.parse(JSON.stringify(item)) as Item;

    item.rating = {
      ...defaultRating,
    };

    item.ese = {
      ...defaultEffectValues,
    };
    item.eseSum = 0;
    item.eseFiltered = {
      ...defaultEffectValues,
    };
    item.eseFilteredSum = 0;
    resetItemEse(gearSet, item);

    gearSet.itemsMap.set(item.kind, item);
  }
  applyItemsFilter(gearSet);

  gearSet.ese = {
    ...defaultEffectValues,
  };
  gearSet.eseSum = 0;
  gearSet.ese = {
    ...defaultEffectValues,
  };
  gearSet.eseFilteredSum = 0;
  gearSet.rating = {
    ...defaultRating,
  };

  gearSetItemChangedRecalcAll(gearSet);

  return gearSet;
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
) => {
  if (gearSet.equippedItems[part][index] == itemKind) {
    return false;
  }
  
  for (let i = 0; i < index; i++) {
    if (!gearSet.equippedItems[part][i]) {
      gearSet.equippedItems[part][i] = "Nothing";
    }
  }

  gearSet.equippedItems[part][index] = itemKind;

  gearSetItemChangedRecalcAll(gearSet);

  return true;
};

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

  gearSetItemChangedRecalcAll(gearSet);

  return true;
};

/**
 * apply the filter to the gearset
 */
export const applyEnchantsFilter = (gearSet: GearSet) => {
  //TODO implement the filter
  for (const [enchantKind, enchant] of gearSet.enchantsMap) {
    //this enchant can not be applied to an item and is therefore filtered
    if (enchant.kind === "Nothing") {
      enchant.didPassFilter = false;
    } else {
      enchant.didPassFilter = true;
    }

    if (enchant.didPassFilter) {
      const index = gearSet.enchants.indexOf(enchant);
      if (index === -1) {
        gearSet.enchants.push(enchant);
      }
    }
  }

  filterArrayInPlace(gearSet.enchants, (enchant) => enchant.didPassFilter);
};
export const applyItemsFilter = (gearSet: GearSet) => {
  //TODO implement the filter
  for (const [itemKind, item] of gearSet.itemsMap) {
    if (item.setKind === "Nothing") {
      item.didPassFilter = false;
    } else {
      item.didPassFilter = true;
    }

    const index = gearSet.items.indexOf(item);
    if (item.didPassFilter) {
      if (index === -1) {
        gearSet.items.push(item);
      }
    }
  }

  filterArrayInPlace(gearSet.items, (item) => item.didPassFilter);
};

/**
 * return the best item for the given part within the gearset
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
 * return the best enchant within the gearset
 */
export const findBestEnchant = (gearSet: GearSet): Enchant => {
  //TODO implement
  return null;
};

/**
 * Fills all Item and Enchant slots with the best possible item/enchant.
 */
export const runOptimization = (gearSet: GearSet) => {
  //TODO implement
};

const resetItemEse = (gearSet: GearSet, item: Item) => {
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
  object: EseObject,
  effects: Effect[]
) => {
  for (let effect of effects) {
    let enchant = gearSet.enchantsMap.get(effect.kind);
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
    if (enchant.didPassFilter) {
      object.ese[effect.kind] += eseValue;
      object.eseFilteredSum += eseValue;
    }
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

export const gearSetItemChangedRecalcAll = (gearSet: GearSet) => {
  for (let enchantKind of enchantKinds) {
    gearSet.ese[enchantKind] = 0;
    gearSet.eseSum = 0;
    gearSet.ese[enchantKind] = 0;
    gearSet.eseFilteredSum = 0;
  }

  for (const setKind of setKinds) {
    const itemSet = gearSet.itemSets[setKind];
    itemSet.activeItems = {};
    itemSet.activeCount = 0;
    itemSet.activeMultiplier = 1;
  }
  for (let part in gearSet.equippedItems) {
    for (let itemKind of gearSet.equippedItems[part]) {
      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setKind = item.setKind;
      if (setKind === "Nothing") {
        continue;
      }

      const itemSet = gearSet.itemSets[setKind];
      if (!itemSet.activeItems[itemKind]) {
        itemSet.activeItems[itemKind] = true;
        itemSet.activeCount += 1;
        itemSet.activeMultiplier = setItemsEffectMult[itemSet.activeCount];
      }
    }
  }

  for (let part in gearSet.equippedItems) {
    for (let itemKind of gearSet.equippedItems[part]) {
      if (itemKind === "Nothing") {
        continue;
      }
      const item = gearSet.itemsMap.get(itemKind);
      const itemSet = gearSet.itemSets[item.setKind];
      for (let enchantKind of enchantKinds) {
        const value = item.ese[enchantKind] * itemSet.activeMultiplier;

        gearSet.ese[enchantKind] += value;
        gearSet.eseSum += value;
        const enchant = gearSet.enchantsMap.get(enchantKind);
        if (enchant.didPassFilter) {
          gearSet.ese[enchantKind] += value;
          gearSet.eseFilteredSum += value;
        }
      }
    }
  }

  let averageSetEffectMult = 0;
  let equippedItemCount = 0;
  for (let part in gearSet.equippedItems) {
    for (let itemKind of gearSet.equippedItems[part]) {
      equippedItemCount++;

      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setKind = item.setKind;
      if (setKind === "Nothing") {
        continue;
      }

      const itemSet = gearSet.itemSets[setKind];
      itemSet.activeMultiplier;
    }
  }
  if (equippedItemCount > 0) {
    averageSetEffectMult = averageSetEffectMult / equippedItemCount;
  } else {
    averageSetEffectMult = 1;
  }
  for (let enchantKind of gearSet.equippedEnchants) {
    const enchant = gearSet.enchantsMap.get(enchantKind);
    const value = averageSetEffectMult;

    gearSet.ese[enchantKind] += value;
    gearSet.eseSum += value;
    if (enchant.didPassFilter) {
      gearSet.ese[enchantKind] += value;
      gearSet.eseFilteredSum += value;
    }
  }

  rateEffects(gearSet, gearSet.ese, gearSet.rating);

  updateAllEnchantRating(gearSet);

  updateAllItemRating(gearSet);
};

const updateAllEnchantRating = (gearSet: GearSet) => {
  //TODO implement
};

/**
 * updates Item.rating
 */
const updateAllItemRating = (gearSet: GearSet) => {
  //TODO temporary fill all enchants with the best enchant before rating gear

  for (let [itemKind, item] of gearSet.itemsMap) {
    updateItemRating(gearSet, item);
  }

  for (let setKind in gearSet.itemSets) {
    gearSet.itemSets[setKind as SetKind].newSetItemBonusRating = {
      ...defaultRating,
    };
  }
  for (let part in gearSet.equippedItems) {
    for (let itemKind of gearSet.equippedItems[part as Part]) {
      if (itemKind === "Nothing") {
        continue;
      }
      const item = gearSet.itemsMap.get(itemKind);
      const itemSet = gearSet.itemSets[item.setKind];
      for (let ratingKey in item.rating) {
        itemSet.newSetItemBonusRating[ratingKey] +=
          item.rating[ratingKey] * gearSet.config.item.setBias;
      }
    }
  }
  for (let item of gearSet.items) {
    const itemSet = gearSet.itemSets[item.setKind];
    //if gearSet is a new set item, add the value of the other items atop of it
    if (!itemSet.activeItems[item.kind]) {
      for (let ratingKey in item.rating) {
        item.rating[ratingKey] += itemSet.newSetItemBonusRating[ratingKey];
      }
    }
  }

  gearSet.items.sort((a, b) => b.rating.dps - a.rating.dps);

  //TODO revert the enchants

  gearSet.events.emit("itemRatingUpdated");
};

//variable to avoid creating a new object every time
const updateItemRatingEffectTemp: EffectValues = {
  ...defaultEffectValues,
};
/**
 * update the item rating within the gearset
 */
const updateItemRating = (gearSet: GearSet, item: Item) => {
  const itemSet = gearSet.itemSets[item.setKind];
  const setMultiplier = itemSet.activeMultiplier;
  for (let enchantKind of enchantKinds) {
    updateItemRatingEffectTemp[enchantKind] =
      gearSet.ese[enchantKind] + (item.ese[enchantKind] * setMultiplier);
  }

  rateEffects(gearSet, updateItemRatingEffectTemp, item.rating);
};
