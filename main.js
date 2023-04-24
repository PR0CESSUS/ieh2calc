/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js?6715":
/*!*******************************!*\
  !*** ./src/common-exposed.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./common.js */ "./src/common.js?69d9");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
var ___EXPOSE_LOADER_IMPORT_MODULE_LOCAL_NAME___ = ___EXPOSE_LOADER_IMPORT___.changeTab
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["changeTab"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["changeTab"] = ___EXPOSE_LOADER_IMPORT_MODULE_LOCAL_NAME___;
else throw new Error('[exposes-loader] The "changeTab" value exists in the global scope, it may not be safe to overwrite it, use the "override" option')
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/expose-loader/dist/runtime/getGlobalThis.js":
/*!******************************************************************!*\
  !*** ./node_modules/expose-loader/dist/runtime/getGlobalThis.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// eslint-disable-next-line func-names
module.exports = function () {
  if (typeof globalThis === "object") {
    return globalThis;
  }
  var g;
  try {
    // This works if eval is allowed (see CSP)
    // eslint-disable-next-line no-new-func
    g = this || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") {
      return window;
    }

    // This works if the self reference is available
    if (typeof self === "object") {
      return self;
    }

    // This works if the global reference is available
    if (typeof __webpack_require__.g !== "undefined") {
      return __webpack_require__.g;
    }
  }
  return g;
}();

/***/ }),

/***/ "./src/gear/EventEmitter.ts":
/*!**********************************!*\
  !*** ./src/gear/EventEmitter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventEmitter)
/* harmony export */ });
class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }
    on(eventName, listener) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }
        this.listeners.get(eventName).push(listener);
    }
    emit(eventName, ...args) {
        if (this.listeners.has(eventName)) {
            this.listeners.get(eventName).forEach((listener) => listener(...args));
        }
    }
    off(eventName, listener) {
        if (this.listeners.has(eventName)) {
            const listeners = this.listeners.get(eventName);
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }
}


/***/ }),

/***/ "./src/gear/colors.ts":
/*!****************************!*\
  !*** ./src/gear/colors.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    "#3366CC",
    "#DC3912",
    "#FF9900",
    "#109618",
    "#990099",
    "#3B3EAC",
    "#0099C6",
    "#DD4477",
    "#66AA00",
    "#B82E2E",
    "#316395",
    "#994499",
    "#22AA99",
    "#AAAA11",
    "#6633CC",
    "#E67300",
    "#8B0707",
    "#329262",
    "#5574A6",
    "#3B3EAC",
    "#FF00FF",
    "#FF6600",
    "#C71585",
    "#007BA7",
    "#FF7F50",
    "#DC143C",
    "#00FF7F",
    "#C0C0C0",
    "#008080",
    "#8B008B",
    "#B0171F",
    "#696969",
    "#483D8B",
    "#008000",
    "#A0522D",
    "#FFC0CB",
    "#ADD8E6",
    "#87CEFA",
    "#DA70D6",
    "#F08080",
    "#E0FFFF",
    "#FA8072",
    "#FFE4E1",
    "#BA55D3",
    "#FFEBCD",
    "#7FFFD4",
    "#F0E68C",
    "#D2B48C",
    "#AFEEEE",
    "#FF6347",
    "#FFEFD5",
    "#6B8E23",
    "#CD5C5C",
    "#F4A460",
    "#D8BFD8",
    "#9932CC",
    "#FF8C00",
    "#9932CC",
    "#FFD700",
    "#B0C4DE",
    "#40E0D0",
    "#FFB6C1",
    "#00CED1",
    "#BA55D3",
    "#7B68EE",
    "#E6E6FA",
    "#8FBC8F",
    "#00FA9A",
    "#191970",
    "#F5DEB3",
]);


/***/ }),

/***/ "./src/gear/effectRater.ts":
/*!*********************************!*\
  !*** ./src/gear/effectRater.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rateEffects": () => (/* binding */ rateEffects)
/* harmony export */ });
const enchantUsage = {
    UnicornKnowledge: "",
    HPAdder: "",
    MPAdder: "",
    ATKAdder: "",
    MATKAdder: "",
    DEFAdder: "",
    MDEFAdder: "",
    SPDAdder: "",
    HPMultiplier: "",
    MPMultiplier: "",
    ATKMultiplier: "dps",
    MATKMultiplier: "",
    DEFMultiplier: "",
    MDEFMultiplier: "",
    ATKPropotion: "dps",
    MATKPropotion: "",
    DEFPropotion: "",
    MDEFPropotion: "",
    FireResistance: "",
    IceResistance: "",
    ThunderResistance: "",
    LightResistance: "",
    DarkResistance: "",
    PhysicalAbsorption: "",
    FireAbsorption: "",
    IceAbsorption: "",
    ThunderAbsorption: "",
    LightAbsorption: "",
    DarkAbsorption: "",
    DebuffResistance: "",
    EquipmentDropChance: "",
    SlimeDropChance: "",
    MagicSlimeDropChance: "",
    SpiderDropChance: "",
    BatDropChance: "",
    FairyDropChance: "",
    FoxDropChance: "",
    DevilFishDropChance: "",
    TreantDropChance: "",
    FlameTigerDropChance: "",
    UnicornDropChance: "",
    ColorMaterialDropChance: "",
    PhysicalCritical: "dps",
    MagicalCritical: "",
    EXPGain: "gains",
    SkillProficiency: "gains",
    EquipmentProficiency: "gains",
    MoveSpeedMultiplier: "",
    GoldGain: "",
    StoneGain: "",
    CrystalGain: "",
    LeafGain: "",
    WarriorSkillLevel: "",
    WizardSkillLevel: "",
    AngelSkillLevel: "",
    ThiefSkillLevel: "",
    ArcherSkillLevel: "",
    TamerSkillLevel: "",
    AllSkillLevel: "",
    SlimeKnowledge: "",
    MagicSlimeKnowledge: "",
    SpiderKnowledge: "",
    BatKnowledge: "",
    FairyKnowledge: "",
    FoxKnowledge: "",
    DevilFishKnowledge: "",
    TreantKnowledge: "",
    FlameTigerKnowledge: "",
    PhysicalDamage: "",
    FireDamage: "",
    IceDamage: "dps",
    ThunderDamage: "",
    LightDamage: "",
    DarkDamage: "",
    HpRegen: "",
    MpRegen: "",
    TamingPoint: "",
    WarriorSkillRange: "",
    WizardSkillRange: "",
    AngelSkillRange: "",
    ThiefSkillRange: "",
    ArcherSkillRange: "",
    TamerSkillRange: "",
    TownMatGain: "gains",
    TownMatAreaClearGain: "",
    RebirthPointGain1: "gains",
    RebirthPointGain2: "gains",
    RebirthPointGain3: "gains",
    CriticalDamage: "dps",
    BlessingEffect: "dps",
    MoveSpeedAdder: "",
    PetEXPGain: "",
    LoyaltyPointGain: "",
    CatalystDoubleCriticalChance: "",
    WarriorSkillEffectRange: "",
    WizardSkillEffectRange: "",
    AngelSkillEffectRange: "",
    ThiefSkillEffectRange: "",
    ArcherSkillEffectRange: "",
    TamerSkillEffectRange: "",
    HpRegenMultiplier: "",
    MpRegenMultiplier: "",
    ArmoredFury: "",
    WardedFury: "dps",
    PetPhysicalCriticalChance: "",
    PetMagicalCriticalChance: "",
    PetCriticalDamage: "",
    PetDebuffResistance: "",
    StoneTownResearchPower: "",
    CrystalTownResearchPower: "",
    LeafTownResearchPower: "",
    GuildEXPGain: "gains",
    SPDMultiplier: "",
    CriticalDamageMultiplier: "dps",
    SkillProficiencyMultiplier: "gains",
    EquipmentProficiencyMultiplier: "gains",
    EXPGainMultiplier: "gains",
    GoldGainMultiplier: "",
    PhysicalDamageMultiplier: "",
    FireDamageMultiplier: "",
    IceDamageMultiplier: "dps",
    ThunderDamageMultiplier: "",
    LightDamageMultiplier: "",
    DarkDamageMultiplier: "",
    TamingPointMultiplier: "",
    PetEXPGainMultiplier: "",
    LoyaltyPointGainMultiplier: "",
    BlessingEffectMultiplier: "dps",
    PhysicalCriticalMultiplier: "dps",
    MagicalCriticalMultiplier: "",
};
const rateEffects = (gearSet, ese, rating) => {
    rating.dps = 1;
    rating.gains = 1;
    //TODO improve the accuracy
    // "Nothing" is a enchant slot, its worth as much as the best enchant
    // consider outlier like fury
    //consider target caps for dps and crit chance
    for (let effectKind in ese) {
        //if we dont care for these dont include them in the value
        if (!enchantUsage[effectKind]) {
            continue;
        }
        let effectValue = ese[effectKind];
        rating.dps *= 1 + effectValue;
    }
    rating.total = rating.dps * rating.gains;
};


/***/ }),

/***/ "./src/gear/gear.ts":
/*!**************************!*\
  !*** ./src/gear/gear.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gear": () => (/* binding */ Gear)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/gear/colors.ts");
/* harmony import */ var _optimizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optimizer */ "./src/gear/optimizer.ts");


class Gear {
    constructor() {
        this.name = "gear";
        this.version = 2;
        this.data = {
            version: this.version,
            selectedLoadout: 0,
            gearsets: [],
            optimizerConfig: {
                dps: {},
                gains: {},
                item: {
                    itemLevel: 120,
                    includeMastery: true,
                    curseAnvil: true,
                    lottery: true,
                    setBias: 0.075,
                    slots: {
                        Jewelry: 19,
                        Armor: 19,
                        Weapon: 19,
                    },
                },
            },
        };
        this.dom = {
            gearSetContainer: document.getElementById("gearSetContainer"),
            itemsWeapons: document.getElementById("itemsWeapons"),
            itemsArmor: document.getElementById("itemsArmor"),
            itemsJewelry: document.getElementById("itemsJewelry"),
            itemsAutocompleteWeapon: document.getElementById("itemsAutocompleteWeapon"),
            itemsAutocompleteArmor: document.getElementById("itemsAutocompleteArmor"),
            itemsAutocompleteJewelry: document.getElementById("itemsAutocompleteJewelry"),
            optimizeResultTotalEseBarChart: document.getElementById("optimizeResultTotalEseBarChart"),
            itemTemplate: document.getElementById("itemTemplate"),
        };
        this.itemRatingUpdatedTimeout = null;
        this.itemRatingUpdatedThrottled = () => {
            if (this.itemRatingUpdatedTimeout) {
                clearTimeout(this.itemRatingUpdatedTimeout);
            }
            this.itemRatingUpdatedTimeout = setTimeout(this.itemRatingUpdated, 25);
        };
        this.itemRatingChart = null;
        this.itemRatingUpdated = () => {
            const gearset = this.data.gearsets[this.data.selectedLoadout];
            let labels = [];
            let effectKindToDataIndex = {};
            let dataSets = {
                enchants: {
                    label: "Enchants",
                    data: [],
                    backgroundColor: "red",
                },
            };
            for (let effectKind in gearset.ese) {
                if (effectKind === "Nothing") {
                    continue;
                }
                let dataIndex = labels.length;
                effectKindToDataIndex[effectKind] = dataIndex;
                labels[dataIndex] = effectKind;
                dataSets.enchants.data[dataIndex] = gearset.equippedEnchants.reduce((acc, enchant) => {
                    if (enchant === effectKind) {
                        acc++;
                    }
                    return acc;
                }, 0);
            }
            let colorIndex = 0;
            for (let part in gearset.equippedItems) {
                for (let itemKind of gearset.equippedItems[part]) {
                    if (itemKind === "Nothing") {
                        continue;
                    }
                    const item = gearset.itemsMap.get(itemKind);
                    const setEffectMult = gearset.itemSets[item.setKind].activeMultiplier;
                    if (typeof dataSets[itemKind] === "undefined") {
                        dataSets[itemKind] = {
                            label: itemKind,
                            data: [],
                            backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"][colorIndex],
                        };
                        colorIndex = (colorIndex + 1) % _colors__WEBPACK_IMPORTED_MODULE_0__["default"].length;
                    }
                    for (let effectKind in gearset.ese) {
                        if (typeof effectKindToDataIndex[effectKind] === "undefined") {
                            continue;
                        }
                        let dataIndex = effectKindToDataIndex[effectKind];
                        if (typeof dataSets[item.kind].data[dataIndex] === "undefined") {
                            dataSets[item.kind].data[dataIndex] = 0;
                        }
                        if (typeof item.ese[effectKind] === "number") {
                            dataSets[item.kind].data[dataIndex] +=
                                item.ese[effectKind] * setEffectMult;
                        }
                    }
                }
            }
            let dataSetsArray = [];
            for (let dataSet in dataSets) {
                dataSetsArray.push(dataSets[dataSet]);
            }
            if (this.itemRatingChart) {
                //this.itemRatingChart.destroy();
                this.itemRatingChart.data.labels = labels;
                this.itemRatingChart.data.datasets = dataSetsArray;
                this.itemRatingChart.update("none");
            }
            else {
                //@ts-ignore
                this.itemRatingChart = new Chart(this.dom.optimizeResultTotalEseBarChart, {
                    type: "bar",
                    data: {
                        labels: labels,
                        datasets: dataSetsArray,
                    },
                    options: {
                        plugins: {
                            title: {
                                display: true,
                                text: "Enchant Spread",
                            },
                        },
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                            },
                            y: {
                                stacked: true,
                            },
                        },
                    },
                });
            }
        };
        const savedString = localStorage.getItem(this.name);
        if (savedString === null || savedString === "null") {
        }
        else {
            this.data = JSON.parse(localStorage.getItem(this.name));
        }
        if (this.data.version < this.version) {
            switch (this.data.version) {
                case 1:
                    this.data.version = this.version;
                    this.data = null;
                    this.save();
                    document.location.reload();
                    break;
                default:
                    alert("missing version migration");
                    break;
            }
        }
        this.renderGearSet();
        this.activateLoadout(this.data.selectedLoadout);
    }
    renderGearSet() {
        let html;
        html = "";
        for (let i = 0; i < 19; i++) {
            html += this.itemTemplate("Weapon", i);
        }
        this.dom.itemsWeapons.innerHTML = html;
        html = "";
        for (let i = 0; i < 19; i++) {
            html += this.itemTemplate("Armor", i);
        }
        this.dom.itemsArmor.innerHTML = html;
        html = "";
        for (let i = 0; i < 19; i++) {
            html += this.itemTemplate("Jewelry", i);
        }
        this.dom.itemsJewelry.innerHTML = html;
        const updatePartAutocomplete = (part) => {
            const gearset = this.data.gearsets[this.data.selectedLoadout];
            const autoCompleteOptions = this.dom[`itemsAutocomplete${part}`];
            autoCompleteOptions.innerHTML = "";
            for (const item of gearset.items) {
                if (item.part !== part) {
                    continue;
                }
                var option = document.createElement("option");
                option.value = item.kind;
                autoCompleteOptions.appendChild(option);
            }
        };
        this.dom.gearSetContainer.addEventListener("focus", (event) => {
            const target = event.target;
            if (target.classList.contains("optimizeItemInput")) {
                const part = target.getAttribute("data-part");
                //console.log("focus", target);
                updatePartAutocomplete(part);
            }
        }, true);
        const setItemOnGearset = (part, slotIndex, choosenName) => {
            const gearset = this.data.gearsets[this.data.selectedLoadout];
            if (!choosenName || choosenName === "Nothing") {
                (0,_optimizer__WEBPACK_IMPORTED_MODULE_1__.setItemAtIndex)(gearset, "Nothing", part, slotIndex);
                return true;
            }
            if (gearset.itemsMap.has(choosenName)) {
                const item = gearset.itemsMap.get(choosenName);
                if (item.part !== part) {
                    return false;
                }
                (0,_optimizer__WEBPACK_IMPORTED_MODULE_1__.setItemAtIndex)(gearset, item.kind, item.part, slotIndex);
                return true;
            }
            return false;
        };
        this.dom.gearSetContainer.addEventListener("input", (event) => {
            const target = event.target;
            if (target.classList.contains("optimizeItemInput")) {
                const part = target.getAttribute("data-part");
                const index = parseInt(target.getAttribute("data-index"));
                //console.log("input", target);
                setItemOnGearset(part, index, target.value);
            }
        }, true);
        this.dom.gearSetContainer.addEventListener("blur", (event) => {
            const target = event.target;
            if (target.classList.contains("optimizeItemInput")) {
                const part = target.getAttribute("data-part");
                const index = parseInt(target.getAttribute("data-index"));
                //console.log("blur", target);
                if (!setItemOnGearset(part, index, target.value)) {
                    target.value = "";
                    setItemOnGearset(part, index, target.value);
                }
            }
        }, true);
        this.dom.gearSetContainer.addEventListener("keyup", (event) => {
            const target = event.target;
            if (target.classList.contains("optimizeItemInput")) {
                if (event.key === "Enter" || event.keyCode === 13) {
                    const part = target.getAttribute("data-part");
                    const index = parseInt(target.getAttribute("data-index"));
                    //console.log("keyup/enter", target);
                    if (!setItemOnGearset(part, index, target.value)) {
                        target.value = "";
                        setItemOnGearset(part, index, target.value);
                    }
                }
            }
        }, true);
        //click auto button
        this.dom.gearSetContainer.addEventListener("click", (event) => {
            let target = event.target;
            if (target.classList.contains("optimizeItemButton")) {
                while (!target.classList ||
                    !target.classList.contains("optimizeItemInput")) {
                    if (!target.previousSibling) {
                        return;
                    }
                    target = target.previousSibling;
                }
                const part = target.getAttribute("data-part");
                const index = parseInt(target.getAttribute("data-index"));
                setItemOnGearset(part, index, "Nothing");
                const bestItem = (0,_optimizer__WEBPACK_IMPORTED_MODULE_1__.findBestItem)(this.data.gearsets[this.data.selectedLoadout], part);
                target.value = bestItem.kind;
                setItemOnGearset(part, index, bestItem.kind);
            }
        }, true);
    }
    itemTemplate(part, index) {
        return this.dom.itemTemplate.innerHTML
            .replace(/{{part}}/g, part)
            .replace(/{{index}}/g, index);
    }
    save() {
        let dataToSave = JSON.parse(JSON.stringify(this.data));
        for (const gearset of dataToSave.gearsets) {
            for (const key in gearset) {
                //only save sets, effects, rating, items, enchants from GearSet
                switch (key) {
                    case "items":
                    case "enchants":
                    case "config":
                    case "sets":
                    case "effects":
                    case "rating":
                        break;
                    default:
                        delete gearset[key];
                        break;
                }
            }
        }
        localStorage.setItem(this.name, JSON.stringify(dataToSave));
    }
    activateLoadout(loadout) {
        //disable old
        const gearsetPrevious = this.data.gearsets[this.data.selectedLoadout];
        if (gearsetPrevious) {
            gearsetPrevious.events.off("itemRatingUpdated", this.itemRatingUpdatedThrottled);
        }
        this.data.selectedLoadout = loadout;
        let gearset = this.data.gearsets[loadout];
        if (typeof gearset === "undefined") {
            gearset = {
                equippedItems: {
                    Weapon: [],
                    Armor: [],
                    Jewelry: [],
                },
                equippedEnchants: [],
            };
        }
        gearset.config = this.data.optimizerConfig;
        (0,_optimizer__WEBPACK_IMPORTED_MODULE_1__.initGearset)(gearset);
        this.data.gearsets[loadout] = gearset;
        gearset.events.on("itemRatingUpdated", this.itemRatingUpdatedThrottled);
    }
}



/***/ }),

/***/ "./src/gear/optimizer.ts":
/*!*******************************!*\
  !*** ./src/gear/optimizer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyEnchantsFilter": () => (/* binding */ applyEnchantsFilter),
/* harmony export */   "applyItemsFilter": () => (/* binding */ applyItemsFilter),
/* harmony export */   "findBestEnchant": () => (/* binding */ findBestEnchant),
/* harmony export */   "findBestItem": () => (/* binding */ findBestItem),
/* harmony export */   "gearSetItemChangedRecalcAll": () => (/* binding */ gearSetItemChangedRecalcAll),
/* harmony export */   "getItemAtIndex": () => (/* binding */ getItemAtIndex),
/* harmony export */   "initGearset": () => (/* binding */ initGearset),
/* harmony export */   "runOptimization": () => (/* binding */ runOptimization),
/* harmony export */   "setEnchantAtIndex": () => (/* binding */ setEnchantAtIndex),
/* harmony export */   "setItemAtIndex": () => (/* binding */ setItemAtIndex)
/* harmony export */ });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./src/gear/EventEmitter.ts");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/gear/data.js");
/* harmony import */ var _effectRater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effectRater */ "./src/gear/effectRater.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/gear/types.ts");




const defaultEffectValues = _types__WEBPACK_IMPORTED_MODULE_3__.enchantKinds.reduce((acc, kind) => {
    acc[kind] = 0;
    return acc;
}, {});
const defaultRating = {
    dps: 0,
    gains: 0,
    total: 0,
};
const setItemsEffectMult = [1, 1, 1.05, 1.1, 1.14, 1.19, 1.25, 1.35, 1.5];
/**
 * initialize a gearset for optimization
 * this fills enchantsMap and itemsMap and default values
 */
const initGearset = (gearSet) => {
    gearSet.events = new _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    gearSet.enchantsMap = new Map();
    gearSet.itemsMap = new Map();
    gearSet.enchants = [];
    gearSet.items = [];
    gearSet.itemSets = {};
    for (let setKind of _types__WEBPACK_IMPORTED_MODULE_3__.setKinds) {
        gearSet.itemSets[setKind] = {
            activeItems: {},
            activeCount: 0,
            activeMultiplier: 1,
            newSetItemBonusRating: Object.assign({}, defaultRating),
        };
    }
    gearSet.enchantsMap.set("Nothing", {
        kind: "Nothing",
        didPassFilter: false,
        maxLevel: 1,
        maxValue: 1,
        maxValueLottery: 1,
        rating: Object.assign({}, defaultRating),
    });
    for (let enchant of _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].enchants) {
        //copy to not modify the original data
        enchant = JSON.parse(JSON.stringify(enchant));
        enchant.didPassFilter = true;
        enchant.rating = Object.assign({}, defaultRating);
        gearSet.enchantsMap.set(enchant.kind, enchant);
    }
    applyEnchantsFilter(gearSet);
    for (let item of _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].items) {
        //copy to not modify the original data
        item = JSON.parse(JSON.stringify(item));
        item.rating = Object.assign({}, defaultRating);
        item.ese = Object.assign({}, defaultEffectValues);
        item.eseSum = 0;
        item.eseFiltered = Object.assign({}, defaultEffectValues);
        item.eseFilteredSum = 0;
        resetItemEse(gearSet, item);
        gearSet.itemsMap.set(item.kind, item);
    }
    applyItemsFilter(gearSet);
    gearSet.ese = Object.assign({}, defaultEffectValues);
    gearSet.eseSum = 0;
    gearSet.ese = Object.assign({}, defaultEffectValues);
    gearSet.eseFilteredSum = 0;
    gearSet.rating = Object.assign({}, defaultRating);
    gearSetItemChangedRecalcAll(gearSet);
    return gearSet;
};
const getItemAtIndex = (gearSet, part, index) => {
    return gearSet.equippedItems[part][index];
};
const setItemAtIndex = (gearSet, itemKind, part, index) => {
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
const setEnchantAtIndex = (gearSet, enchant, index) => {
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
const applyEnchantsFilter = (gearSet) => {
    //TODO implement the filter
    for (const [enchantKind, enchant] of gearSet.enchantsMap) {
        //this enchant can not be applied to an item and is therefore filtered
        if (enchant.kind === "Nothing") {
            enchant.didPassFilter = false;
        }
        else {
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
const applyItemsFilter = (gearSet) => {
    //TODO implement the filter
    for (const [itemKind, item] of gearSet.itemsMap) {
        if (item.setKind === "Nothing") {
            item.didPassFilter = false;
        }
        else {
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
const findBestItem = (gearSet, part) => {
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
const findBestEnchant = (gearSet) => {
    //TODO implement
    return null;
};
/**
 * Fills all Item and Enchant slots with the best possible item/enchant.
 */
const runOptimization = (gearSet) => {
    //TODO implement
};
const resetItemEse = (gearSet, item) => {
    for (let effectKind of _types__WEBPACK_IMPORTED_MODULE_3__.enchantKinds) {
        item.ese[effectKind] = 0;
    }
    addEffectsToEse(gearSet, item, item.effects);
    if (gearSet.config.item.includeMastery) {
        addEffectsToEse(gearSet, item, item.levelMaxEffects);
    }
};
const addEffectsToEse = (gearSet, object, effects) => {
    for (let effect of effects) {
        let enchant = gearSet.enchantsMap.get(effect.kind);
        let enchantEffectValue = enchant.maxValue;
        if (gearSet.config.item.lottery) {
            enchantEffectValue = enchant.maxValueLottery;
        }
        let itemEffectValue = effect.initValue + effect.baseValue * gearSet.config.item.itemLevel;
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
const filterArrayInPlace = (arr, condition) => {
    let i = 0, j = 0;
    while (i < arr.length) {
        const val = arr[i];
        if (condition(val))
            arr[j++] = val;
        i++;
    }
    arr.length = j;
    return arr;
};
const gearSetItemChangedRecalcAll = (gearSet) => {
    for (let enchantKind of _types__WEBPACK_IMPORTED_MODULE_3__.enchantKinds) {
        gearSet.ese[enchantKind] = 0;
        gearSet.eseSum = 0;
        gearSet.ese[enchantKind] = 0;
        gearSet.eseFilteredSum = 0;
    }
    for (const setKind of _types__WEBPACK_IMPORTED_MODULE_3__.setKinds) {
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
            for (let enchantKind of _types__WEBPACK_IMPORTED_MODULE_3__.enchantKinds) {
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
    }
    else {
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
    (0,_effectRater__WEBPACK_IMPORTED_MODULE_2__.rateEffects)(gearSet, gearSet.ese, gearSet.rating);
    updateAllEnchantRating(gearSet);
    updateAllItemRating(gearSet);
};
const updateAllEnchantRating = (gearSet) => {
    //TODO implement
};
/**
 * updates Item.rating
 */
const updateAllItemRating = (gearSet) => {
    //TODO temporary fill all enchants with the best enchant before rating gear
    for (let [itemKind, item] of gearSet.itemsMap) {
        updateItemRating(gearSet, item);
    }
    for (let setKind in gearSet.itemSets) {
        gearSet.itemSets[setKind].newSetItemBonusRating = Object.assign({}, defaultRating);
    }
    for (let part in gearSet.equippedItems) {
        for (let itemKind of gearSet.equippedItems[part]) {
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
const updateItemRatingEffectTemp = Object.assign({}, defaultEffectValues);
/**
 * update the item rating within the gearset
 */
const updateItemRating = (gearSet, item) => {
    const itemSet = gearSet.itemSets[item.setKind];
    const setMultiplier = itemSet.activeMultiplier;
    for (let enchantKind of _types__WEBPACK_IMPORTED_MODULE_3__.enchantKinds) {
        updateItemRatingEffectTemp[enchantKind] =
            gearSet.ese[enchantKind] + (item.ese[enchantKind] * setMultiplier);
    }
    (0,_effectRater__WEBPACK_IMPORTED_MODULE_2__.rateEffects)(gearSet, updateItemRatingEffectTemp, item.rating);
};


/***/ }),

/***/ "./src/gear/types.ts":
/*!***************************!*\
  !*** ./src/gear/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enchantKinds": () => (/* binding */ enchantKinds),
/* harmony export */   "itemKinds": () => (/* binding */ itemKinds),
/* harmony export */   "parts": () => (/* binding */ parts),
/* harmony export */   "setKinds": () => (/* binding */ setKinds)
/* harmony export */ });
const enchantKinds = [
    "Nothing",
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
];
const itemKinds = [
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
];
const setKinds = [
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
];
const parts = ["Weapon", "Armor", "Jewelry"];


/***/ }),

/***/ "./src/anvil.js":
/*!**********************!*\
  !*** ./src/anvil.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anvil": () => (/* binding */ Anvil)
/* harmony export */ });
class Anvil {
  constructor() {
    this.name = "anvil";
    this.data = {
      nitro: 1.0,
      dungeon: [
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
      ],
    };

    if (localStorage.getItem(this.name) === null) {
      localStorage.setItem(this.name, JSON.stringify(this.data));
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    document.getElementById("anvil-calculator").addEventListener("change", this.save.bind(this));

    this.display();
  }

  getReward(name) {
    let reward = 0;
    switch (name) {
      case "herolevel":
      case "requiredability":
        reward = 5;
        break;
      case "herolevel2":
      case "requiredability2":
        reward = 10;
        break;
      case "proficiencygain":
        reward = 1;
        break;
      case "equipmenteffect":
        reward = 0.1;
        break;
      case "purifyofcursedeffect":
        reward = 0.01;
        break;
      case "proficiencygain2":
        reward = 2;
        break;
      case "equipmenteffect2":
        reward = 0.2;
        break;
    }

    return reward;
  }

  save() {
    this.data.nitro = document.getElementById("anvil.nitro.speed").value;
    for (let i in this.data.dungeon) {
      this.data.dungeon[i].name = document.getElementById("anvil.dungeon." + i + ".name").value;
      this.data.dungeon[i].diff = document.getElementById("anvil.dungeon." + i + ".diff").value;
      this.data.dungeon[i].time = document.getElementById("anvil.dungeon." + i + ".time").value;
      let perhour = 3600 / this.data.dungeon[i].time;
      let reward = this.getReward(this.data.dungeon[i].name);
      this.data.dungeon[i].reward = Math.round(
        perhour * reward * this.data.dungeon[i].diff * this.data.nitro
      );
      this.data.dungeon[i].orb = Math.round(perhour * this.data.nitro);
    }

    localStorage.setItem(this.name, JSON.stringify(this.data));
    this.display();
  }

  display() {
    document.getElementById("anvil.nitro.speed").value = this.data.nitro;

    for (let i in this.data.dungeon) {
      let name = "anvil.dungeon." + i + ".name";
      let time = "anvil.dungeon." + i + ".time";
      let diff = "anvil.dungeon." + i + ".diff";
      let reward = "anvil.dungeon." + i + ".reward";
      let orb = "anvil.dungeon." + i + ".orb";
      document.getElementById(name).value = this.data.dungeon[i].name;
      document.getElementById(time).value = this.data.dungeon[i].time;
      document.getElementById(diff).value = this.data.dungeon[i].diff;
      document.getElementById(reward).innerHTML = this.data.dungeon[i].reward;
      document.getElementById(orb).innerHTML = this.data.dungeon[i].orb;

      if (
        this.data.dungeon[i].name == "proficiencygain2" ||
        this.data.dungeon[i].name == "proficiencygain" ||
        this.data.dungeon[i].name == "equipmenteffect2" ||
        this.data.dungeon[i].name == "equipmenteffect" ||
        this.data.dungeon[i].name == "purifyofcursedeffect"
      ) {
        document.getElementById(reward).innerHTML += "%";
      }
    }
  }
}




/***/ }),

/***/ "./src/common.js?69d9":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "changeTab": () => (/* binding */ changeTab),
/* harmony export */   "convert": () => (/* binding */ convert),
/* harmony export */   "convert2": () => (/* binding */ convert2),
/* harmony export */   "loadFromFile": () => (/* binding */ loadFromFile),
/* harmony export */   "loadTab": () => (/* binding */ loadTab),
/* harmony export */   "restart": () => (/* binding */ restart),
/* harmony export */   "saveToFile": () => (/* binding */ saveToFile),
/* harmony export */   "sigma": () => (/* binding */ sigma)
/* harmony export */ });
function save() {
  localStorage.setItem(this.id, this.value);
  console.log(this);
}

function restart() {
  localStorage.clear();
  location.reload();
}

function addEvent(id, event, callback) {
  document.getElementById(id).addEventListener(event, callback);
}

function changeTab(input) {
  localStorage.setItem("currentTab", input);
}

async function loadTab(tab) {
  let myHeaders = new Headers();
  // https://pro-cess-us.github.io/ieh2calc/
  // https://github.com/pro-cess-us/ieh2calc/raw/master/html/slimeBank.html
  // let file = "../html/" + tab + ".html";
  let file = "./html/" + tab + ".html";
  if (window.location.host != "127.0.0.1:3000") {
    file = "https://pro-cess-us.github.io/ieh2calc/html/" + tab + ".html";
  }

  // myHeaders.append("Content-Type", "text/plain");
  // myHeaders.append(
  //   "Content-Security-Policy:",
  //   "default-src 'self'; style-src 'self' 'unsafe-inline' *; font-src 'self' *; connect-src 'self' *; img-src data: *"
  // );
  let options = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    // referrerPolicy: "same-origin",
  };
  // let x = await fetch(file);
  // let y = await x.text();
  // document.getElementById("content").innerHTML = y;
  return fetch(file, options).then((response) => response.text());
}

// ext.get = (url) => {
//   let myHeaders = new Headers();

//   let options = {
//       method: 'GET',
//       headers: myHeaders,
//       mode: 'cors'
//   };

//   //fetch get

//   return fetch(url, options).then(response => response.text());
// };

// ext.get("http://example.com").then((response) => {
//   console.log(response); // or whatever
// });

function sigma(lowerBound, upperBound, iterator, accumulator = 0) {
  // let accumulator = 0;
  for (let i = lowerBound; i <= upperBound; ++i) {
    accumulator += iterator(i);
  }
  return accumulator;
}

// convert normal number to K,M,B,T and exponential
function convert(input) {
  input = parseFloat(input);
  var output = 0;
  if (input == 0) {
    output = 0;
  } else if (input <= 10000) {
    output = Math.round(input);
  } else if (input < 1000000) {
    output = (input / 1000).toFixed(2) + "K";
  } else if (input < 1000000000) {
    output = (input / 1000000).toFixed(2) + "M";
  } else if (input < 1000000000000) {
    output = (input / 1000000000).toFixed(3) + "B";
  } else if (input < 1000000000000000) {
    output = (input / 1000000000000).toFixed(2) + "T";
  } else {
    output = input.toExponential(2);
  }

  return output;
}

// convert k,m,b,t to normal numbers
function convert2(input, min = 0, max = 999999999999999) {
  input = input.replace(/,/g, "."); // convert , to .
  if (/^\d*\.?\d+$/.test(input)) {
    if (input < min) {
      return min;
    } else if (input > max) {
      return max;
    } else {
      return input;
    }
    return input;
  } // return rounded number if there is no abbreviete
  else {
    const regex = /(.*)(\D)$/gm;
    input = input.toLowerCase();
    input = input.replace(/ /g, ""); // removes all spaces

    input = regex.exec(input);
    let output = 0;
    if (input[2] == "t") {
      output = input[1] * 1000 ** 4;
    } else if (input[2] == "b") {
      output = input[1] * 1000 ** 3;
    } else if (input[2] == "m") {
      output = input[1] * 1000 ** 2;
    } else if (input[2] == "k") {
      output = input[1] * 1000 ** 1;
    }

    return output;
  }
}

function saveToFile() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(localStorage, null, 2)], {
      type: "text/plain",
    })
  );
  a.setAttribute("download", "IEH2calc-data.json");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function loadFromFile() {
  let file = document.getElementById("settings.loadFromFile").files[0];
  let reader = new FileReader();
  reader.addEventListener("load", function (e) {
    let text = e.target.result;
    //   document.querySelector("#file-contents").textContent = text;
    console.log(JSON.parse(text));
    for (const [key, value] of Object.entries({ ...JSON.parse(text) })) {
      // console.log(`${key}: ${value}`);
      localStorage.setItem(key, value);
      location.reload();
      // console.log(`${key}: ${value}`);
    }
  });
  reader.readAsText(file);
}




/***/ }),

/***/ "./src/gear/data.js":
/*!**************************!*\
  !*** ./src/gear/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "enchants": [
      {
        "kind": "HPAdder",
        "maxLevel": 10,
        "maxValue": 1000,
        "maxValueLottery": 1210
      },
      {
        "kind": "MPAdder",
        "maxLevel": 10,
        "maxValue": 500,
        "maxValueLottery": 605
      },
      {
        "kind": "ATKAdder",
        "maxLevel": 10,
        "maxValue": 100,
        "maxValueLottery": 121
      },
      {
        "kind": "MATKAdder",
        "maxLevel": 10,
        "maxValue": 100,
        "maxValueLottery": 121
      },
      {
        "kind": "DEFAdder",
        "maxLevel": 10,
        "maxValue": 100,
        "maxValueLottery": 121
      },
      {
        "kind": "MDEFAdder",
        "maxLevel": 10,
        "maxValue": 100,
        "maxValueLottery": 121
      },
      {
        "kind": "SPDAdder",
        "maxLevel": 10,
        "maxValue": 100,
        "maxValueLottery": 121
      },
      {
        "kind": "HPMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "MPMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "ATKMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "MATKMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "DEFMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "MDEFMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "ATKPropotion",
        "maxLevel": 5,
        "maxValue": 0.5,
        "maxValueLottery": 0.6
      },
      {
        "kind": "MATKPropotion",
        "maxLevel": 5,
        "maxValue": 0.5,
        "maxValueLottery": 0.6
      },
      {
        "kind": "DEFPropotion",
        "maxLevel": 5,
        "maxValue": 0.5,
        "maxValueLottery": 0.6
      },
      {
        "kind": "MDEFPropotion",
        "maxLevel": 5,
        "maxValue": 0.5,
        "maxValueLottery": 0.6
      },
      {
        "kind": "FireResistance",
        "maxLevel": 10,
        "maxValue": 0.2,
        "maxValueLottery": 0.22
      },
      {
        "kind": "IceResistance",
        "maxLevel": 10,
        "maxValue": 0.2,
        "maxValueLottery": 0.22
      },
      {
        "kind": "ThunderResistance",
        "maxLevel": 10,
        "maxValue": 0.2,
        "maxValueLottery": 0.22
      },
      {
        "kind": "LightResistance",
        "maxLevel": 10,
        "maxValue": 0.2,
        "maxValueLottery": 0.22
      },
      {
        "kind": "DarkResistance",
        "maxLevel": 10,
        "maxValue": 0.2,
        "maxValueLottery": 0.22
      },
      {
        "kind": "PhysicalAbsorption",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.09
      },
      {
        "kind": "FireAbsorption",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.09
      },
      {
        "kind": "IceAbsorption",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.09
      },
      {
        "kind": "ThunderAbsorption",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.09
      },
      {
        "kind": "LightAbsorption",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.09
      },
      {
        "kind": "DarkAbsorption",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.09
      },
      {
        "kind": "DebuffResistance",
        "maxLevel": 5,
        "maxValue": 0.25,
        "maxValueLottery": 0.3
      },
      {
        "kind": "EquipmentDropChance",
        "maxLevel": 10,
        "maxValue": 0.00021999999999999998,
        "maxValueLottery": 0.000264
      },
      {
        "kind": "SlimeDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "MagicSlimeDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "SpiderDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "BatDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "FairyDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "FoxDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "DevilFishDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "TreantDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "FlameTigerDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "UnicornDropChance",
        "maxLevel": 10,
        "maxValue": 0.011000000000000001,
        "maxValueLottery": 0.0132
      },
      {
        "kind": "ColorMaterialDropChance",
        "maxLevel": 10,
        "maxValue": 0.00010999999999999999,
        "maxValueLottery": 0.000132
      },
      {
        "kind": "PhysicalCritical",
        "maxLevel": 2,
        "maxValue": 0.06,
        "maxValueLottery": 0.09
      },
      {
        "kind": "MagicalCritical",
        "maxLevel": 2,
        "maxValue": 0.06,
        "maxValueLottery": 0.09
      },
      {
        "kind": "EXPGain",
        "maxLevel": 10,
        "maxValue": 1.1,
        "maxValueLottery": 1.32
      },
      {
        "kind": "SkillProficiency",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "EquipmentProficiency",
        "maxLevel": 10,
        "maxValue": 0.275,
        "maxValueLottery": 0.33
      },
      {
        "kind": "MoveSpeedMultiplier",
        "maxLevel": 10,
        "maxValue": 0.11,
        "maxValueLottery": 0.132
      },
      {
        "kind": "GoldGain",
        "maxLevel": 5,
        "maxValue": 0.3,
        "maxValueLottery": 0.42
      },
      {
        "kind": "StoneGain",
        "maxLevel": 10,
        "maxValue": 5,
        "maxValueLottery": 6.05
      },
      {
        "kind": "CrystalGain",
        "maxLevel": 10,
        "maxValue": 5,
        "maxValueLottery": 6.05
      },
      {
        "kind": "LeafGain",
        "maxLevel": 10,
        "maxValue": 5,
        "maxValueLottery": 6.05
      },
      {
        "kind": "WarriorSkillLevel",
        "maxLevel": 10,
        "maxValue": 20,
        "maxValueLottery": 22
      },
      {
        "kind": "WizardSkillLevel",
        "maxLevel": 10,
        "maxValue": 20,
        "maxValueLottery": 22
      },
      {
        "kind": "AngelSkillLevel",
        "maxLevel": 10,
        "maxValue": 20,
        "maxValueLottery": 22
      },
      {
        "kind": "ThiefSkillLevel",
        "maxLevel": 10,
        "maxValue": 20,
        "maxValueLottery": 22
      },
      {
        "kind": "ArcherSkillLevel",
        "maxLevel": 10,
        "maxValue": 20,
        "maxValueLottery": 22
      },
      {
        "kind": "TamerSkillLevel",
        "maxLevel": 10,
        "maxValue": 20,
        "maxValueLottery": 22
      },
      {
        "kind": "AllSkillLevel",
        "maxLevel": 10,
        "maxValue": 10,
        "maxValueLottery": 11
      },
      {
        "kind": "SlimeKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "MagicSlimeKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "SpiderKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "BatKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "FairyKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "FoxKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "DevilFishKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "TreantKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "FlameTigerKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "UnicornKnowledge",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "PhysicalDamage",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "FireDamage",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "IceDamage",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "ThunderDamage",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "LightDamage",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      {
        "kind": "DarkDamage",
        "maxLevel": 10,
        "maxValue": 0.55,
        "maxValueLottery": 0.66
      },
      { "kind": "HpRegen", "maxLevel": 5, "maxValue": 50, "maxValueLottery": 60 },
      {
        "kind": "MpRegen",
        "maxLevel": 5,
        "maxValue": 300,
        "maxValueLottery": 420
      },
      {
        "kind": "TamingPoint",
        "maxLevel": 10,
        "maxValue": 0.5,
        "maxValueLottery": 0.55
      },
      {
        "kind": "WarriorSkillRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "WizardSkillRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "AngelSkillRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "ThiefSkillRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "ArcherSkillRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "TamerSkillRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "TownMatGain",
        "maxLevel": 10,
        "maxValue": 0.1,
        "maxValueLottery": 0.11
      },
      {
        "kind": "TownMatAreaClearGain",
        "maxLevel": 10,
        "maxValue": 10,
        "maxValueLottery": 11
      },
      {
        "kind": "RebirthPointGain1",
        "maxLevel": 10,
        "maxValue": 0.1,
        "maxValueLottery": 0.11
      },
      {
        "kind": "RebirthPointGain2",
        "maxLevel": 10,
        "maxValue": 0.1,
        "maxValueLottery": 0.11
      },
      {
        "kind": "RebirthPointGain3",
        "maxLevel": 10,
        "maxValue": 0.1,
        "maxValueLottery": 0.11
      },
      {
        "kind": "CriticalDamage",
        "maxLevel": 2,
        "maxValue": 0.3,
        "maxValueLottery": 0.6
      },
      {
        "kind": "BlessingEffect",
        "maxLevel": 10,
        "maxValue": 0.1,
        "maxValueLottery": 0.11
      },
      {
        "kind": "MoveSpeedAdder",
        "maxLevel": 10,
        "maxValue": 55,
        "maxValueLottery": 66
      },
      {
        "kind": "PetEXPGain",
        "maxLevel": 10,
        "maxValue": 0.5,
        "maxValueLottery": 0.55
      },
      {
        "kind": "LoyaltyPointGain",
        "maxLevel": 10,
        "maxValue": 0.5,
        "maxValueLottery": 0.55
      },
      {
        "kind": "CatalystDoubleCriticalChance",
        "maxLevel": 10,
        "maxValue": 0.05,
        "maxValueLottery": 0.055
      },
      {
        "kind": "WarriorSkillEffectRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "WizardSkillEffectRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "AngelSkillEffectRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "ThiefSkillEffectRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "ArcherSkillEffectRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "TamerSkillEffectRange",
        "maxLevel": 2,
        "maxValue": 0.004,
        "maxValueLottery": 0.006
      },
      {
        "kind": "HpRegenMultiplier",
        "maxLevel": 5,
        "maxValue": 0.0015000000000000002,
        "maxValueLottery": 0.0021
      },
      {
        "kind": "MpRegenMultiplier",
        "maxLevel": 5,
        "maxValue": 0.0015000000000000002,
        "maxValueLottery": 0.0021
      },
      {
        "kind": "ArmoredFury",
        "maxLevel": 10,
        "maxValue": 0.01,
        "maxValueLottery": 0.011000000000000001
      },
      {
        "kind": "WardedFury",
        "maxLevel": 10,
        "maxValue": 0.01,
        "maxValueLottery": 0.011000000000000001
      },
      {
        "kind": "PetPhysicalCriticalChance",
        "maxLevel": 2,
        "maxValue": 0.06,
        "maxValueLottery": 0.09
      },
      {
        "kind": "PetMagicalCriticalChance",
        "maxLevel": 2,
        "maxValue": 0.06,
        "maxValueLottery": 0.09
      },
      {
        "kind": "PetCriticalDamage",
        "maxLevel": 2,
        "maxValue": 0.3,
        "maxValueLottery": 0.6
      },
      {
        "kind": "PetDebuffResistance",
        "maxLevel": 5,
        "maxValue": 0.25,
        "maxValueLottery": 0.3
      },
      {
        "kind": "StoneTownResearchPower",
        "maxLevel": 10,
        "maxValue": 0.0275,
        "maxValueLottery": 0.033
      },
      {
        "kind": "CrystalTownResearchPower",
        "maxLevel": 10,
        "maxValue": 0.0275,
        "maxValueLottery": 0.033
      },
      {
        "kind": "LeafTownResearchPower",
        "maxLevel": 10,
        "maxValue": 0.0275,
        "maxValueLottery": 0.033
      },
      {
        "kind": "GuildEXPGain",
        "maxLevel": 10,
        "maxValue": 0.0022,
        "maxValueLottery": 0.00264
      },
      {
        "kind": "SPDMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "CriticalDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "SkillProficiencyMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "EquipmentProficiencyMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "EXPGainMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "GoldGainMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "PhysicalDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "FireDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "IceDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "ThunderDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "LightDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "DarkDamageMultiplier",
        "maxLevel": 5,
        "maxValue": 0.075,
        "maxValueLottery": 0.105
      },
      {
        "kind": "TamingPointMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "PetEXPGainMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "LoyaltyPointGainMultiplier",
        "maxLevel": 5,
        "maxValue": 0.15,
        "maxValueLottery": 0.21
      },
      {
        "kind": "BlessingEffectMultiplier",
        "maxLevel": 5,
        "maxValue": 0.015,
        "maxValueLottery": 0.021000000000000005
      },
      {
        "kind": "PhysicalCriticalMultiplier",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.06
      },
      {
        "kind": "MagicalCriticalMultiplier",
        "maxLevel": 2,
        "maxValue": 0.04,
        "maxValueLottery": 0.06
      }
    ],
    "items": [
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "ATKAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "ATKAdder" }
        ],
        "kind": "DullSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0, "initValue": 1, "kind": "AllSkillLevel" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "MATKAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "MATKAdder" }
        ],
        "kind": "BrittleStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0, "initValue": 1, "kind": "AllSkillLevel" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "MATKAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "MATKAdder" }
        ],
        "kind": "FlimsyWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0, "initValue": 1, "kind": "AllSkillLevel" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 2.5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "ATKAdder" },
          { "baseValue": 0.025, "initValue": 0.1, "kind": "StoneGain" },
          { "baseValue": 0.5, "initValue": 2.5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "ATKAdder" },
          { "baseValue": 0.025, "initValue": 0.1, "kind": "StoneGain" }
        ],
        "kind": "WornDart",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0, "initValue": 1, "kind": "AllSkillLevel" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 2.5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "MATKAdder" },
          { "baseValue": 0.025, "initValue": 0.1, "kind": "CrystalGain" },
          { "baseValue": 0.5, "initValue": 2.5, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 4, "kind": "MATKAdder" },
          { "baseValue": 0.025, "initValue": 0.1, "kind": "CrystalGain" }
        ],
        "kind": "SmallBow",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0, "initValue": 1, "kind": "AllSkillLevel" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 2.5, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "MATKAdder" },
          { "baseValue": 0.025, "initValue": 0.1, "kind": "LeafGain" },
          { "baseValue": 0.5, "initValue": 2.5, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 2, "kind": "MATKAdder" },
          { "baseValue": 0.025, "initValue": 0.1, "kind": "LeafGain" }
        ],
        "kind": "WoodenRecorder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0, "initValue": 1, "kind": "AllSkillLevel" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 10, "kind": "HPAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 10, "initValue": 10, "kind": "HPAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" }
        ],
        "kind": "OldCloak",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 1, "kind": "DEFAdder" },
          { "baseValue": 1, "initValue": 1, "kind": "DEFAdder" }
        ],
        "kind": "BlueHat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 1, "kind": "MDEFAdder" },
          { "baseValue": 1, "initValue": 1, "kind": "MDEFAdder" }
        ],
        "kind": "OrangeHat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 5, "initValue": 20, "kind": "HPAdder" },
          { "baseValue": 0.5, "initValue": 0.5, "kind": "DEFAdder" },
          { "baseValue": 5, "initValue": 20, "kind": "HPAdder" },
          { "baseValue": 0.5, "initValue": 0.5, "kind": "DEFAdder" }
        ],
        "kind": "TShirt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 2.5, "kind": "DEFAdder" },
          {
            "baseValue": 0.00025,
            "initValue": 0.005,
            "kind": "PhysicalCritical"
          },
          { "baseValue": 0.5, "initValue": 2.5, "kind": "DEFAdder" },
          { "baseValue": 0.00025, "initValue": 0.005, "kind": "PhysicalCritical" }
        ],
        "kind": "ClothGlove",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 3, "initValue": 30, "kind": "MPAdder" },
          { "baseValue": 3, "initValue": 30, "kind": "MPAdder" }
        ],
        "kind": "BlueTShirt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 20, "kind": "HPAdder" },
          { "baseValue": 20, "initValue": 20, "kind": "HPAdder" }
        ],
        "kind": "OrangeTShirt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.001, "initValue": 0.01, "kind": "DEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "DEFMultiplier" }
        ],
        "kind": "ClothBelt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.25, "initValue": 5, "kind": "MoveSpeedAdder" },
          { "baseValue": 0.25, "initValue": 5, "kind": "MoveSpeedAdder" }
        ],
        "kind": "ClothShoes",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "HPAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "HPMultiplier" },
          { "baseValue": 2, "initValue": 20, "kind": "HPAdder" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "HPMultiplier" }
        ],
        "kind": "IronRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 4, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MPMultiplier" },
          { "baseValue": 4, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MPMultiplier" }
        ],
        "kind": "PearlEarring",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "FireDamage" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "FireDamage" }
        ],
        "kind": "FireBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "IceDamage" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "IceDamage" }
        ],
        "kind": "IceBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "ThunderDamage" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "ThunderDamage" }
        ],
        "kind": "ThunderBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "LightDamage" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "LightDamage" }
        ],
        "kind": "LightBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "DarkDamage" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "DarkDamage" }
        ],
        "kind": "DarkBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "DEFAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "DEFAdder" }
        ],
        "kind": "WoodenShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "WarriorSkillLevel" },
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "WarriorSkillLevel" }
        ],
        "kind": "LongSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "WizardSkillLevel" },
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "WizardSkillLevel" }
        ],
        "kind": "LongStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "AngelSkillLevel" },
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "AngelSkillLevel" }
        ],
        "kind": "WarmWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.8, "initValue": 8, "kind": "ATKAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "ThiefSkillLevel" },
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.8, "initValue": 8, "kind": "ATKAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "ThiefSkillLevel" }
        ],
        "kind": "DualDagger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "ATKAdder" },
          { "baseValue": 0.8, "initValue": 8, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "ArcherSkillLevel" },
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "ATKAdder" },
          { "baseValue": 0.8, "initValue": 8, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "ArcherSkillLevel" }
        ],
        "kind": "ReinforcedBow",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "TamerSkillLevel" },
          { "baseValue": 2, "initValue": 10, "kind": "MPAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MATKAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "TamerSkillLevel" }
        ],
        "kind": "Flute",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "FireDamage" },
          { "baseValue": 2, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "FireDamage" }
        ],
        "kind": "FireStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "IceDamage" },
          { "baseValue": 2, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "IceDamage" }
        ],
        "kind": "IceStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "ThunderDamage" },
          { "baseValue": 2, "initValue": 20, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "ThunderDamage" }
        ],
        "kind": "ThunderStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 10, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 1, "initValue": 10, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" }
        ],
        "kind": "LeatherBelt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 10, "kind": "SPDAdder" },
          { "baseValue": 0.5, "initValue": 10, "kind": "MoveSpeedAdder" },
          { "baseValue": 0.5, "initValue": 10, "kind": "SPDAdder" },
          { "baseValue": 0.5, "initValue": 10, "kind": "MoveSpeedAdder" }
        ],
        "kind": "LeatherShoes",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 25, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 5, "initValue": 25, "kind": "MPAdder" },
          { "baseValue": 25, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 5, "initValue": 25, "kind": "MPAdder" }
        ],
        "kind": "WarmCloak",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "DEFAdder" },
          { "baseValue": 2, "initValue": 20, "kind": "MDEFAdder" },
          { "baseValue": 2, "initValue": 20, "kind": "DEFAdder" },
          { "baseValue": 2, "initValue": 20, "kind": "MDEFAdder" }
        ],
        "kind": "LeatherArmor",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 5, "kind": "MDEFAdder" },
          { "baseValue": 0.0005, "initValue": 0.005, "kind": "MagicalCritical" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MDEFAdder" },
          { "baseValue": 0.0005, "initValue": 0.005, "kind": "MagicalCritical" }
        ],
        "kind": "LeatherGlove",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "DEFAdder" },
          {
            "baseValue": 0.0005,
            "initValue": 0.01,
            "kind": "PhysicalAbsorption"
          },
          { "baseValue": 1, "initValue": 20, "kind": "DEFAdder" },
          { "baseValue": 0.0005, "initValue": 0.01, "kind": "PhysicalAbsorption" }
        ],
        "kind": "LeatherShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "FireResistance" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "FireResistance" }
        ],
        "kind": "FireRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "IceResistance" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "IceResistance" }
        ],
        "kind": "IceRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "ThunderResistance" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "ThunderResistance" }
        ],
        "kind": "ThunderRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "LightResistance" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "LightResistance" }
        ],
        "kind": "LightRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "DarkResistance" },
          { "baseValue": 1, "initValue": 5, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "DarkResistance" }
        ],
        "kind": "DarkRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.15, "kind": "FireDamage" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "FireDamage" }
        ],
        "kind": "EnhancedFireBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.15, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "IceDamage" }
        ],
        "kind": "EnhancedIceBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.15, "kind": "ThunderDamage" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "ThunderDamage" }
        ],
        "kind": "EnhancedThunderBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.15, "kind": "LightDamage" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "LightDamage" }
        ],
        "kind": "EnhancedLightBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.15, "kind": "DarkDamage" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "DarkDamage" }
        ],
        "kind": "EnhancedDarkBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "ATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.01, "kind": "ATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "ATKPropotion" },
          { "baseValue": 1, "initValue": 20, "kind": "ATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.01, "kind": "ATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "ATKPropotion" }
        ],
        "kind": "BattleSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "MATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.01, "kind": "MATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "MATKPropotion" },
          { "baseValue": 1, "initValue": 20, "kind": "MATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.01, "kind": "MATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "MATKPropotion" }
        ],
        "kind": "BattleStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 0.00025, "initValue": 0.005, "kind": "ATKMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "ATKPropotion" },
          { "baseValue": 0.5, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.00025, "initValue": 0.005, "kind": "MATKMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "MATKPropotion" },
          { "baseValue": 0.5, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 0.00025, "initValue": 0.005, "kind": "ATKMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "ATKPropotion" },
          { "baseValue": 0.5, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.00025, "initValue": 0.005, "kind": "MATKMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "MATKPropotion" }
        ],
        "kind": "BattleWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1.5, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.05, "kind": "PhysicalCritical" },
          { "baseValue": 1.5, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0.5, "initValue": 5, "kind": "MATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.05, "kind": "PhysicalCritical" }
        ],
        "kind": "BattleDagger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.5, "initValue": 5, "kind": "ATKAdder" },
          { "baseValue": 1.5, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.05, "kind": "MagicalCritical" },
          { "baseValue": 0.5, "initValue": 5, "kind": "ATKAdder" },
          { "baseValue": 1.5, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0.0005, "initValue": 0.05, "kind": "MagicalCritical" }
        ],
        "kind": "BattleBow",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          {
            "baseValue": 0.00025,
            "initValue": 0.025,
            "kind": "PhysicalCritical"
          },
          { "baseValue": 0.00025, "initValue": 0.025, "kind": "MagicalCritical" },
          { "baseValue": 1, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          {
            "baseValue": 0.00025,
            "initValue": 0.025,
            "kind": "PhysicalCritical"
          },
          { "baseValue": 0.00025, "initValue": 0.025, "kind": "MagicalCritical" }
        ],
        "kind": "BattleRecorder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "ATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 2, "initValue": 15, "kind": "ATKAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "ATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimeSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 1, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimeGlove",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 0.1, "initValue": 0.5, "kind": "StoneGain" },
          { "baseValue": 0.1, "initValue": 0.5, "kind": "CrystalGain" },
          { "baseValue": 0.1, "initValue": 0.5, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 0.1, "initValue": 0.5, "kind": "StoneGain" },
          { "baseValue": 0.1, "initValue": 0.5, "kind": "CrystalGain" },
          { "baseValue": 0.1, "initValue": 0.5, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimeRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 5, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.1, "kind": "DebuffResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 1, "initValue": 5, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.1, "kind": "DebuffResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimeBelt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "EXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "EXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimePincenez",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 0.0005, "initValue": 0.005, "kind": "ATKMultiplier" },
          { "baseValue": 0.0005, "initValue": 0.005, "kind": "MATKMultiplier" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "AngelSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 0.0005, "initValue": 0.005, "kind": "ATKMultiplier" },
          { "baseValue": 0.0005, "initValue": 0.005, "kind": "MATKMultiplier" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "AngelSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimeWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 20, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimePoncho",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SlimeKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SlimeDropChance" }
        ],
        "kind": "SlimeDart",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Slime"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 2, "initValue": 15, "kind": "MATKAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeStick",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 10, "kind": "MDEFAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 2, "initValue": 10, "kind": "MDEFAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeHat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "FireDamage" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "IceDamage" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "ThunderDamage" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "FireDamage" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "IceDamage" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "ThunderDamage" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeBow",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "FireResistance" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "IceResistance" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "ThunderResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "FireResistance" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "IceResistance" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "ThunderResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeShoes",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0.2, "initValue": 5, "kind": "TamerSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0.2, "initValue": 5, "kind": "TamerSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeRecorder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeEarring",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          {
            "baseValue": 1e-6,
            "initValue": 0.00015,
            "kind": "ColorMaterialDropChance"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          {
            "baseValue": 1e-6,
            "initValue": 0.00015,
            "kind": "ColorMaterialDropChance"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeBalloon",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "MagicSlimeKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "MagicSlimeDropChance"
          }
        ],
        "kind": "MagicSlimeSkirt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Magicslime"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 500, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 20, "initValue": 500, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderHat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "DarkResistance" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "DarkAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "DarkResistance" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "DarkAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderSkirt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 500, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MDEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 20, "initValue": 500, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MDEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderSuit",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 3, "initValue": 30, "kind": "MATKAdder" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "ThiefSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 3, "initValue": 30, "kind": "MATKAdder" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "ThiefSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderDagger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "PhysicalCritical" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MagicalCritical" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "PhysicalCritical" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MagicalCritical" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 0.01, "initValue": 0.5, "kind": "TamingPoint" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 0.01, "initValue": 0.5, "kind": "TamingPoint" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderCatchingNet",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.25, "kind": "TamingPoint" },
          {
            "baseValue": 1e-6,
            "initValue": 0.0001,
            "kind": "ColorMaterialDropChance"
          },
          { "baseValue": 0.2, "initValue": 5, "kind": "WizardSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "TamingPoint" },
          {
            "baseValue": 1e-6,
            "initValue": 0.0001,
            "kind": "ColorMaterialDropChance"
          },
          { "baseValue": 0.2, "initValue": 5, "kind": "WizardSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderStick",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "SpiderKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "SpiderDropChance" }
        ],
        "kind": "SpiderFoldingFan",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Spider"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.001, "initValue": 0.1, "kind": "DebuffResistance" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.001, "initValue": 0.1, "kind": "DebuffResistance" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "MoveSpeedAdder" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "MoveSpeedAdder" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatShoes",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 5, "initValue": 50, "kind": "ATKAdder" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0.2, "initValue": 5, "kind": "WarriorSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 5, "initValue": 50, "kind": "ATKAdder" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0.2, "initValue": 5, "kind": "WarriorSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "FireAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "IceAbsorption" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "ThunderAbsorption"
          },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "LightAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "DarkAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "FireAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "IceAbsorption" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "ThunderAbsorption"
          },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "LightAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "DarkAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatHat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.25, "initValue": 10, "kind": "TamerSkillLevel" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "TamingPoint" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.25, "initValue": 10, "kind": "TamerSkillLevel" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "TamingPoint" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatRecorder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "ATKPropotion" },
          { "baseValue": 0.2, "initValue": 5, "kind": "ArcherSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "ATKPropotion" },
          { "baseValue": 0.2, "initValue": 5, "kind": "ArcherSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatBow",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0, "initValue": 0.05, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "EXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.01, "initValue": 0.2, "kind": "EXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatMascaradeMask",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain1" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.2, "kind": "LoyaltyPointGain" }
        ],
        "part": "Jewelry",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "PhysicalAbsorption"
          },
          { "baseValue": 20, "initValue": 200, "kind": "MPAdder" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" },
          { "baseValue": 2, "initValue": 20, "kind": "SPDAdder" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "PhysicalAbsorption"
          },
          { "baseValue": 20, "initValue": 200, "kind": "MPAdder" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "BatKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "BatDropChance" }
        ],
        "kind": "BatCloak",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 100, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Bat"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "MDEFAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "MDEFAdder" }
        ],
        "kind": "BronzeShoulder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 100, "kind": "HPAdder" },
          { "baseValue": 0, "initValue": 50, "kind": "MPAdder" },
          { "baseValue": 0, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 20, "kind": "MpRegen" },
          { "baseValue": 0, "initValue": 0.05, "kind": "LoyaltyPointGain" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "PhysicalDamage" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "PhysicalDamage" }
        ],
        "kind": "BattleRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.25, "initValue": 5, "kind": "HpRegen" },
          { "baseValue": 0.25, "initValue": 5, "kind": "HpRegen" }
        ],
        "kind": "Halo",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 1, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0, "initValue": 0.05, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 5, "initValue": 25, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 5, "initValue": 25, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 25, "kind": "MDEFAdder" }
        ],
        "kind": "IronShoulder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.15, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "PhysicalDamage" }
        ],
        "kind": "StrengthRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.002, "initValue": 0.02, "kind": "HPMultiplier" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "HPMultiplier" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" }
        ],
        "kind": "GoldenRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "FireResistance" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "FireResistance" }
        ],
        "kind": "GoldenFireRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "IceResistance" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "IceResistance" }
        ],
        "kind": "GoldenIceRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "ThunderResistance" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "ThunderResistance" }
        ],
        "kind": "GoldenThunderRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "LightResistance" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "LightResistance" }
        ],
        "kind": "GoldenLightRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "DarkResistance" },
          { "baseValue": 0.002, "initValue": 0.02, "kind": "MPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "DarkResistance" }
        ],
        "kind": "GoldenDarkRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFPropotion" },
          { "baseValue": 2, "initValue": 20, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFPropotion" }
        ],
        "kind": "IronBelt",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.5, "initValue": 20, "kind": "MoveSpeedAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "SPDAdder" },
          { "baseValue": 0.5, "initValue": 20, "kind": "MoveSpeedAdder" }
        ],
        "kind": "IronShoes",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 4, "initValue": 40, "kind": "DEFAdder" },
          { "baseValue": 4, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 4, "initValue": 40, "kind": "DEFAdder" },
          { "baseValue": 4, "initValue": 40, "kind": "MDEFAdder" }
        ],
        "kind": "CopperArmor",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 20, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFPropotion" },
          { "baseValue": 2, "initValue": 20, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFPropotion" }
        ],
        "kind": "IronGlove",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 40, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "DEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "PhysicalAbsorption" },
          { "baseValue": 2, "initValue": 40, "kind": "DEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "DEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "PhysicalAbsorption" }
        ],
        "kind": "TowerShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "FireAbsorption" },
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "FireAbsorption" }
        ],
        "kind": "FireTowerShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "IceAbsorption" },
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "IceAbsorption" }
        ],
        "kind": "IceTowerShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "ThunderAbsorption" },
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "ThunderAbsorption" }
        ],
        "kind": "ThunderTowerShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "LightAbsorption" },
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "LightAbsorption" }
        ],
        "kind": "LightTowerShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "DarkAbsorption" },
          { "baseValue": 2, "initValue": 40, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "MDEFMultiplier" },
          { "baseValue": 0.001, "initValue": 0.02, "kind": "DarkAbsorption" }
        ],
        "kind": "DarkTowerShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "PhysicalDamage" }
        ],
        "kind": "SavageRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "FireDamage" },
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "FireDamage" }
        ],
        "kind": "SpellboundFireBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "IceDamage" },
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "IceDamage" }
        ],
        "kind": "SpellboundIceBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "ThunderDamage" },
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "ThunderDamage" }
        ],
        "kind": "SpellboundThunderBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "LightDamage" }
        ],
        "kind": "SpellboundLightBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.0075, "initValue": 0.2, "kind": "DarkDamage" }
        ],
        "kind": "SpellboundDarkBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.025, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 250, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "HPMultiplier" },
          { "baseValue": 10, "initValue": 250, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.01, "kind": "HPMultiplier" }
        ],
        "kind": "CopperHelm",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "PhysicalDamage" },
          { "baseValue": 1, "initValue": 10, "kind": "ATKAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "PhysicalDamage" }
        ],
        "kind": "BattleHelm",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "FireDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "IceDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "ThunderDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "LightDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "DarkDamage" },
          { "baseValue": 1, "initValue": 10, "kind": "MATKAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "FireDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "IceDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "ThunderDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "LightDamage" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "DarkDamage" }
        ],
        "kind": "WizardHelm",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 25, "kind": "DEFAdder" },
          { "baseValue": 0, "initValue": 25, "kind": "MDEFAdder" },
          { "baseValue": 0, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.025, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 3, "initValue": 30, "kind": "ATKAdder" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0.1, "initValue": 5, "kind": "WarriorSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 3, "initValue": 30, "kind": "ATKAdder" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0.1, "initValue": 5, "kind": "WarriorSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" }
        ],
        "kind": "LargeSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 3, "initValue": 30, "kind": "MATKAdder" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0.1, "initValue": 5, "kind": "WizardSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 3, "initValue": 30, "kind": "MATKAdder" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0.1, "initValue": 5, "kind": "WizardSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" }
        ],
        "kind": "LargeStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.1, "initValue": 5, "kind": "AngelSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "LightDamage" },
          { "baseValue": 0.1, "initValue": 5, "kind": "AngelSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" }
        ],
        "kind": "LargeWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.1, "initValue": 5, "kind": "ThiefSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "PhysicalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DarkDamage" },
          { "baseValue": 0.1, "initValue": 5, "kind": "ThiefSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "StoneGain" }
        ],
        "kind": "LargeDagger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FireDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "ThunderDamage" },
          { "baseValue": 0.1, "initValue": 5, "kind": "ArcherSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FireDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "ThunderDamage" },
          { "baseValue": 0.1, "initValue": 5, "kind": "ArcherSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "CrystalGain" }
        ],
        "kind": "LargeBow",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.1, "kind": "TamingPoint" },
          { "baseValue": 0.1, "initValue": 5, "kind": "TamerSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "TamingPoint" },
          { "baseValue": 0.1, "initValue": 5, "kind": "TamerSkillLevel" },
          { "baseValue": 0.2, "initValue": 1, "kind": "LeafGain" }
        ],
        "kind": "LargeOcarina",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.025, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 1, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 50, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Nothing"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyClothes",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "CrystalGain" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MATKMultiplier" },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "CrystalGain" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MATKMultiplier" },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyStaff",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "MoveSpeedAdder" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "LightResistance" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "LightAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 1, "initValue": 20, "kind": "MoveSpeedAdder" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "LightResistance" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "LightAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyBoots",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "SkillProficiency" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.005, "initValue": 0.15, "kind": "SkillProficiency" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyGlove",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.015, "initValue": 0.3, "kind": "EXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.015, "initValue": 0.3, "kind": "EXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyBrooch",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.1, "initValue": 2, "kind": "TownMatAreaClearGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyLamp",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "ATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0.01, "initValue": 0.25, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "StoneGain" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "ATKMultiplier" },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "ATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" },
          { "baseValue": 10, "initValue": 100, "kind": "MPAdder" },
          { "baseValue": 0.2, "initValue": 2, "kind": "StoneGain" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "ATKMultiplier" },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "ATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FairyKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FairyDropChance" }
        ],
        "kind": "FairyShuriken",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Fairy"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "BlessingEffect" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.0025, "initValue": 0.1, "kind": "BlessingEffect" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxKanzashi",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.025, "initValue": 0.5, "kind": "EXPGain" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "DEFMultiplier" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.025, "initValue": 0.5, "kind": "EXPGain" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "DEFMultiplier" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxLoincloth",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 10, "initValue": 100, "kind": "MpRegen" },
          {
            "baseValue": 0.0001,
            "initValue": 0.02,
            "kind": "PhysicalAbsorption"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MPMultiplier" },
          { "baseValue": 10, "initValue": 100, "kind": "MpRegen" },
          {
            "baseValue": 0.0001,
            "initValue": 0.02,
            "kind": "PhysicalAbsorption"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxMask",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "CriticalDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "ArcherSkillLevel" },
          { "baseValue": 0.0005, "initValue": 0.05, "kind": "DebuffResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "CriticalDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "ArcherSkillLevel" },
          { "baseValue": 0.0005, "initValue": 0.05, "kind": "DebuffResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxHamayayumi",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 20, "initValue": 500, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 1, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 20, "initValue": 500, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.05, "kind": "HPMultiplier" },
          { "baseValue": 1, "initValue": 10, "kind": "HpRegen" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxHat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "IceResistance" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "ThunderResistance" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "LightResistance" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "ThunderAbsorption"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "IceResistance" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "ThunderResistance" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "LightResistance" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "ThunderAbsorption"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxCoat",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          {
            "baseValue": 0.002,
            "initValue": -0.2,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "ThunderDamage" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "LightDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          {
            "baseValue": 0.002,
            "initValue": -0.2,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "ThunderDamage" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "LightDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxBoot",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "BlessingEffect" },
          {
            "baseValue": 5e-6,
            "initValue": 0.0001,
            "kind": "EquipmentDropChance"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "GoldGain" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "BlessingEffect" },
          {
            "baseValue": 5e-6,
            "initValue": 0.0001,
            "kind": "EquipmentDropChance"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FoxKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "FoxDropChance" }
        ],
        "kind": "FoxEma",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Fox"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "PhysicalCritical" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "MagicalCritical" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "WarriorSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "PhysicalCritical" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "MagicalCritical" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0.2, "initValue": 5, "kind": "WarriorSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishSword",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "HPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "FireResistance" },
          { "baseValue": 0.2, "initValue": 5, "kind": "AngelSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "HPMultiplier" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "ATKMultiplier" },
          { "baseValue": 0.005, "initValue": 0.05, "kind": "MATKMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "FireResistance" },
          { "baseValue": 0.2, "initValue": 5, "kind": "AngelSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishWing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "DarkDamage" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "MPMultiplier" },
          { "baseValue": 0.2, "initValue": 5, "kind": "TamerSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.02, "initValue": 0.5, "kind": "MATKPropotion" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.25, "kind": "DarkDamage" },
          { "baseValue": 0.002, "initValue": -0.2, "kind": "MPMultiplier" },
          { "baseValue": 0.2, "initValue": 5, "kind": "TamerSkillLevel" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishRecorder",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 5, "initValue": 50, "kind": "DEFAdder" },
          { "baseValue": 5, "initValue": 50, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "HPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "FireResistance" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "DarkResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 5, "initValue": 50, "kind": "DEFAdder" },
          { "baseValue": 5, "initValue": 50, "kind": "MDEFAdder" },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "HPMultiplier" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "FireResistance" },
          { "baseValue": 0.0025, "initValue": 0.15, "kind": "DarkResistance" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishArmor",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFPropotion" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MDEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFPropotion" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFPropotion" },
          { "baseValue": 0.0025, "initValue": 0.025, "kind": "MDEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFPropotion" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "IceDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishScarf",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "IceDamage" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "FireAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "IceAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "DarkAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.0025, "initValue": 0.05, "kind": "IceDamage" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "FireAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "IceAbsorption" },
          { "baseValue": 0.0005, "initValue": 0.025, "kind": "DarkAbsorption" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishGill",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishPendant",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.0015, "initValue": 0.15, "kind": "DebuffResistance" },
          { "baseValue": 0.5, "initValue": 3, "kind": "StoneGain" },
          { "baseValue": 0.5, "initValue": 3, "kind": "CrystalGain" },
          { "baseValue": 0.5, "initValue": 3, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 0.0015, "initValue": 0.15, "kind": "DebuffResistance" },
          { "baseValue": 0.5, "initValue": 3, "kind": "StoneGain" },
          { "baseValue": 0.5, "initValue": 3, "kind": "CrystalGain" },
          { "baseValue": 0.5, "initValue": 3, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "DevilFishKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "DevilFishDropChance"
          }
        ],
        "kind": "DevilfishRing",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Devilfish"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 1, "initValue": 100, "kind": "StoneGain" },
          { "baseValue": 1, "initValue": 100, "kind": "CrystalGain" },
          { "baseValue": 1, "initValue": 100, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 1, "initValue": 100, "kind": "StoneGain" },
          { "baseValue": 1, "initValue": 100, "kind": "CrystalGain" },
          { "baseValue": 1, "initValue": 100, "kind": "LeafGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantAmulet",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.025, "initValue": 0.25, "kind": "TamingPoint" },
          { "baseValue": 0.025, "initValue": 0.25, "kind": "PetEXPGain" },
          { "baseValue": 0.025, "initValue": 0.25, "kind": "LoyaltyPointGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.025, "initValue": 0.25, "kind": "TamingPoint" },
          { "baseValue": 0.025, "initValue": 0.25, "kind": "PetEXPGain" },
          { "baseValue": 0.025, "initValue": 0.25, "kind": "LoyaltyPointGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantHagoita",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 10, "initValue": 100, "kind": "DEFAdder" },
          { "baseValue": 10, "initValue": 100, "kind": "MDEFAdder" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 20, "initValue": 200, "kind": "HPAdder" },
          { "baseValue": 10, "initValue": 100, "kind": "DEFAdder" },
          { "baseValue": 10, "initValue": 100, "kind": "MDEFAdder" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "DEFMultiplier" },
          { "baseValue": 0.01, "initValue": 0.1, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantChoppingBoard",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.01, "initValue": 1, "kind": "PhysicalDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "FireDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "IceDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "ThunderDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "LightDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "DarkDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.01, "initValue": 1, "kind": "PhysicalDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "FireDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "IceDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "ThunderDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "LightDamage" },
          { "baseValue": 0.01, "initValue": 1, "kind": "DarkDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantDagger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "ATKMultiplier" },
          { "baseValue": 0, "initValue": 0.2, "kind": "MATKMultiplier" },
          { "baseValue": 0, "initValue": 0.1, "kind": "CriticalDamage" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.5, "kind": "TamingPoint" }
        ],
        "part": "Weapon",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 50, "initValue": 1000, "kind": "HPAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 25, "initValue": 250, "kind": "HpRegen" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 50, "initValue": 1000, "kind": "HPAdder" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "HPMultiplier" },
          { "baseValue": 25, "initValue": 250, "kind": "HpRegen" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantHaniwa",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "DEFPropotion" },
          { "baseValue": 0, "initValue": 0.25, "kind": "MDEFPropotion" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGain" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 200, "kind": "SPDAdder" },
          { "baseValue": 0, "initValue": 0.1, "kind": "EquipmentProficiency" }
        ],
        "part": "Armor",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          {
            "baseValue": 1e-6,
            "initValue": 0.0001,
            "kind": "ColorMaterialDropChance"
          },
          { "baseValue": 0.01, "initValue": 1, "kind": "CriticalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          {
            "baseValue": 1e-6,
            "initValue": 0.0001,
            "kind": "ColorMaterialDropChance"
          },
          { "baseValue": 0.01, "initValue": 1, "kind": "CriticalDamage" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantKokeshi",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.025, "initValue": 0.5, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          { "baseValue": 0.025, "initValue": 0.5, "kind": "GoldGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantLamp",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "CatalystDoubleCriticalChance"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" },
          { "baseValue": 30, "initValue": -3600, "kind": "SPDAdder" },
          { "baseValue": 1, "initValue": -120, "kind": "MoveSpeedAdder" },
          {
            "baseValue": 0.0005,
            "initValue": -0.06,
            "kind": "MoveSpeedMultiplier"
          },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "CatalystDoubleCriticalChance"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "TreantKnowledge" },
          { "baseValue": 5e-5, "initValue": 0.0005, "kind": "TreantDropChance" }
        ],
        "kind": "TreantLunchbox",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.25, "kind": "EXPGain" },
          { "baseValue": 0, "initValue": 0.1, "kind": "SkillProficiency" },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain2" },
          { "baseValue": 0, "initValue": 2, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.05, "kind": "TownMatGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGain" }
        ],
        "part": "Jewelry",
        "setKind": "Treant"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": -2, "kind": "SkillProficiency" },
          { "baseValue": 500, "initValue": 5000, "kind": "HPAdder" },
          { "baseValue": 200, "initValue": 2000, "kind": "MPAdder" },
          { "baseValue": 0.01, "initValue": 0.5, "kind": "HPMultiplier" },
          { "baseValue": 0.01, "initValue": 0.5, "kind": "MPMultiplier" },
          { "baseValue": 5e-5, "initValue": 0.001, "kind": "HpRegenMultiplier" },
          { "baseValue": 5e-5, "initValue": 0.001, "kind": "MpRegenMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.005, "initValue": -2, "kind": "SkillProficiency" },
          { "baseValue": 500, "initValue": 5000, "kind": "HPAdder" },
          { "baseValue": 200, "initValue": 2000, "kind": "MPAdder" },
          { "baseValue": 0.01, "initValue": 0.5, "kind": "HPMultiplier" },
          { "baseValue": 0.01, "initValue": 0.5, "kind": "MPMultiplier" },
          { "baseValue": 5e-5, "initValue": 0.001, "kind": "HpRegenMultiplier" },
          { "baseValue": 5e-5, "initValue": 0.001, "kind": "MpRegenMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "FlametigerPortableHotSpring",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "EXPGainMultiplier" },
          {
            "baseValue": 0,
            "initValue": 0.2,
            "kind": "SkillProficiencyMultiplier"
          },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain3" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          {
            "baseValue": 0,
            "initValue": 0.1,
            "kind": "EquipmentProficiencyMultiplier"
          },
          {
            "baseValue": 0,
            "initValue": 0.25,
            "kind": "LoyaltyPointGainMultiplier"
          }
        ],
        "part": "Jewelry",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": -1, "kind": "EXPGain" },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "PhysicalDamageMultiplier"
          },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "ArmoredFury" },
          { "baseValue": 20, "initValue": 200, "kind": "DEFAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "DEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.0025, "initValue": -1, "kind": "EXPGain" },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "PhysicalDamageMultiplier"
          },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "ArmoredFury" },
          { "baseValue": 20, "initValue": 200, "kind": "DEFAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "DEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "FlametigerVolcanicShield",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "StoneTownResearchPower" },
          {
            "baseValue": 0,
            "initValue": 0.05,
            "kind": "CrystalTownResearchPower"
          },
          { "baseValue": 0, "initValue": 0.05, "kind": "LeafTownResearchPower" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.3, "kind": "SPDMultiplier" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPointMultiplier" }
        ],
        "part": "Weapon",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 0.01, "initValue": -4, "kind": "DebuffResistance" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "PhysicalCriticalMultiplier"
          },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "MagicalCriticalMultiplier"
          },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "EXPGainMultiplier" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "GoldGainMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.01, "initValue": -4, "kind": "DebuffResistance" },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "PhysicalCriticalMultiplier"
          },
          {
            "baseValue": 0.0005,
            "initValue": 0.025,
            "kind": "MagicalCriticalMultiplier"
          },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "EXPGainMultiplier" },
          { "baseValue": 0.005, "initValue": 0.1, "kind": "GoldGainMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "FlametigerStripedBriefs",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ArmoredFury" },
          { "baseValue": 0, "initValue": 0.05, "kind": "WardedFury" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGainMultiplier" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.01, "kind": "GuildEXPGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGainMultiplier" }
        ],
        "part": "Armor",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": -2, "kind": "GoldGain" },
          {
            "baseValue": 2.5e-5,
            "initValue": 0.001,
            "kind": "WarriorSkillRange"
          },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "WizardSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "AngelSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "ThiefSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "ArcherSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "TamerSkillRange" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.005, "initValue": -2, "kind": "GoldGain" },
          {
            "baseValue": 2.5e-5,
            "initValue": 0.001,
            "kind": "WarriorSkillRange"
          },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "WizardSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "AngelSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "ThiefSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "ArcherSkillRange" },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "TamerSkillRange" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "TorchOfEverburningFlametiger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "StoneTownResearchPower" },
          {
            "baseValue": 0,
            "initValue": 0.05,
            "kind": "CrystalTownResearchPower"
          },
          { "baseValue": 0, "initValue": 0.05, "kind": "LeafTownResearchPower" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.3, "kind": "SPDMultiplier" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPointMultiplier" }
        ],
        "part": "Weapon",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 0.005, "initValue": -2, "kind": "EquipmentProficiency" },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "PetPhysicalCriticalChance"
          },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "PetMagicalCriticalChance"
          },
          { "baseValue": 0.005, "initValue": 0.3, "kind": "PetCriticalDamage" },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "TamingPointMultiplier"
          },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "PetEXPGainMultiplier"
          },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "LoyaltyPointGainMultiplier"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.005, "initValue": -2, "kind": "EquipmentProficiency" },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "PetPhysicalCriticalChance"
          },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "PetMagicalCriticalChance"
          },
          { "baseValue": 0.005, "initValue": 0.3, "kind": "PetCriticalDamage" },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "TamingPointMultiplier"
          },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "PetEXPGainMultiplier"
          },
          {
            "baseValue": 0.005,
            "initValue": 0.1,
            "kind": "LoyaltyPointGainMultiplier"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "FlametigerCostume",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "ArmoredFury" },
          { "baseValue": 0, "initValue": 0.05, "kind": "WardedFury" },
          { "baseValue": 0, "initValue": 0.1, "kind": "GoldGainMultiplier" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.01, "kind": "GuildEXPGain" },
          { "baseValue": 0, "initValue": 0.25, "kind": "PetEXPGainMultiplier" }
        ],
        "part": "Armor",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 0.0025, "initValue": -1, "kind": "EXPGain" },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "FireDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "IceDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "ThunderDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "LightDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "DarkDamageMultiplier"
          },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "WardedFury" },
          { "baseValue": 20, "initValue": 200, "kind": "MDEFAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.0025, "initValue": -1, "kind": "EXPGain" },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "FireDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "IceDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "ThunderDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "LightDamageMultiplier"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.01,
            "kind": "DarkDamageMultiplier"
          },
          { "baseValue": 0.001, "initValue": 0.025, "kind": "WardedFury" },
          { "baseValue": 20, "initValue": 200, "kind": "MDEFAdder" },
          { "baseValue": 0.02, "initValue": 0.2, "kind": "MDEFMultiplier" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "RingOfFlametigersWrath",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.05, "kind": "StoneTownResearchPower" },
          {
            "baseValue": 0,
            "initValue": 0.05,
            "kind": "CrystalTownResearchPower"
          },
          { "baseValue": 0, "initValue": 0.05, "kind": "LeafTownResearchPower" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          { "baseValue": 0, "initValue": 0.3, "kind": "SPDMultiplier" },
          { "baseValue": 0, "initValue": 0.25, "kind": "TamingPointMultiplier" }
        ],
        "part": "Weapon",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 0.025, "initValue": -10, "kind": "TamingPoint" },
          { "baseValue": 0.025, "initValue": -10, "kind": "LoyaltyPointGain" },
          {
            "baseValue": 0.001,
            "initValue": 0.025,
            "kind": "StoneTownResearchPower"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.025,
            "kind": "CrystalTownResearchPower"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.025,
            "kind": "LeafTownResearchPower"
          },
          {
            "baseValue": 0.00025,
            "initValue": 0.01,
            "kind": "BlessingEffectMultiplier"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 0.025, "initValue": -10, "kind": "TamingPoint" },
          { "baseValue": 0.025, "initValue": -10, "kind": "LoyaltyPointGain" },
          {
            "baseValue": 0.001,
            "initValue": 0.025,
            "kind": "StoneTownResearchPower"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.025,
            "kind": "CrystalTownResearchPower"
          },
          {
            "baseValue": 0.001,
            "initValue": 0.025,
            "kind": "LeafTownResearchPower"
          },
          {
            "baseValue": 0.00025,
            "initValue": 0.01,
            "kind": "BlessingEffectMultiplier"
          },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "EndlessBowlOfSpicyFlametigerRamen",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "EXPGainMultiplier" },
          {
            "baseValue": 0,
            "initValue": 0.2,
            "kind": "SkillProficiencyMultiplier"
          },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain3" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          {
            "baseValue": 0,
            "initValue": 0.1,
            "kind": "EquipmentProficiencyMultiplier"
          },
          {
            "baseValue": 0,
            "initValue": 0.25,
            "kind": "LoyaltyPointGainMultiplier"
          }
        ],
        "part": "Jewelry",
        "setKind": "Flametiger"
      },
      {
        "effects": [
          { "baseValue": 2.5, "initValue": -1000, "kind": "AllSkillLevel" },
          {
            "baseValue": 0.0025,
            "initValue": 0.05,
            "kind": "GoldGainMultiplier"
          },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "GuildEXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          },
          { "baseValue": 2.5, "initValue": -1000, "kind": "AllSkillLevel" },
          {
            "baseValue": 0.0025,
            "initValue": 0.05,
            "kind": "GoldGainMultiplier"
          },
          { "baseValue": 2.5e-5, "initValue": 0.001, "kind": "GuildEXPGain" },
          { "baseValue": 0.005, "initValue": 0.2, "kind": "FlameTigerKnowledge" },
          {
            "baseValue": 5e-5,
            "initValue": 0.0005,
            "kind": "FlameTigerDropChance"
          }
        ],
        "kind": "ScreenOfTheSneakyFlametiger",
        "levelMaxEffects": [
          { "baseValue": 0, "initValue": 0.2, "kind": "EXPGainMultiplier" },
          {
            "baseValue": 0,
            "initValue": 0.2,
            "kind": "SkillProficiencyMultiplier"
          },
          { "baseValue": 0, "initValue": 0.025, "kind": "RebirthPointGain3" },
          { "baseValue": 0, "initValue": 3, "kind": "Nothing" },
          {
            "baseValue": 0,
            "initValue": 0.1,
            "kind": "EquipmentProficiencyMultiplier"
          },
          {
            "baseValue": 0,
            "initValue": 0.25,
            "kind": "LoyaltyPointGainMultiplier"
          }
        ],
        "part": "Jewelry",
        "setKind": "Flametiger"
      }
    ]
  });
  

/***/ }),

/***/ "./src/slimebank.js":
/*!**************************!*\
  !*** ./src/slimebank.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlimeBank": () => (/* binding */ SlimeBank)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js?6715");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);


class SlimeBank {
  constructor() {
    this.name = "slimeBank";
    this.data = {
      research: {
        leaf: { level: 0, value: 0 },
        stone: { level: 0, value: 0 },
      },

      slimeCoinCap1: {
        level: 0,
        value: 10000,
        cost: 10000,
      },
      slimeCoinCap2: {
        level: 0,
        value: 100,
        cost: 10000000000,
      },
      slimeCoinCapTotal: 0,
      intrest: 0,
      multiplier: 0,
      pet1: {
        rank: 0,
        loyalty: 0,
        passive: 0,
      },
      milestone1800: false,
      milestone2700: false,
    };

    if (localStorage.getItem(this.name) === null) {
      localStorage.setItem(this.name, JSON.stringify(this.data));
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    // console.log("class constructor aka Init");
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("research.stone.level", "change", this.researchStone.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("research.leaf.level", "change", this.researchLeaf.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("slimeCoinCap1.level", "change", this.slimeCoinCap1.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("slimeCoinCap2.level", "change", this.slimeCoinCap2.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("pet1.rank", "change", this.pet.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("pet1.loyalty", "change", this.pet.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("milestone1800", "change", this.milestone.bind(this));
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("milestone2700", "change", this.milestone.bind(this));

    this.display();
  }

  display() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
    // console.log("display()");
    // console.log($("#research.stone.level").value);

    document.getElementById("research.stone.level").value = this.data.research.stone.level;
    document.getElementById("research.stone.value").innerHTML = this.data.research.stone.value;
    document.getElementById("research.leaf.level").value = this.data.research.leaf.level;
    document.getElementById("research.leaf.value").innerHTML = this.data.research.leaf.value;
    document.getElementById("slimeCoinCap2.level").value = this.data.slimeCoinCap2.level;
    document.getElementById("slimeCoinCap2.cost").innerHTML = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(this.data.slimeCoinCap2.cost);
    document.getElementById("slimeCoinCap2.value").innerHTML = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(
      this.data.slimeCoinCap2.value
    );
    document.getElementById("slimeCoinCap1.level").value = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(this.data.slimeCoinCap1.level);
    document.getElementById("slimeCoinCap1.value").innerHTML = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(
      this.data.slimeCoinCap1.value
    );
    document.getElementById("slimeCoinCap1.cost").innerHTML = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(this.data.slimeCoinCap1.cost);

    document.getElementById("slimeBank.intrest").innerHTML = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(this.data.intrest);
    document.getElementById("slimeCoinCapTotal").innerHTML = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert)(this.data.slimeCoinCapTotal);
    document.getElementById("slimeBank.multiplier").innerHTML = this.data.multiplier;
    document.getElementById("pet1.passive").innerHTML = this.data.pet1.passive;
    document.getElementById("pet1.rank").value = this.data.pet1.rank;
    document.getElementById("pet1.loyalty").value = this.data.pet1.loyalty;

    if (this.data.milestone1800 == true) {
      document.getElementById("milestone1800").checked = true;
    } else {
      document.getElementById("milestone1800").checked = false;
    }
    if (this.data.milestone2700 == true) {
      document.getElementById("milestone2700").checked = true;
    } else {
      document.getElementById("milestone2700").checked = false;
    }
  }

  milestone() {
    if (document.getElementById("milestone1800").checked) {
      this.data.milestone1800 = true;
    } else {
      this.data.milestone1800 = false;
    }
    if (document.getElementById("milestone2700").checked) {
      this.data.milestone2700 = true;
    } else {
      this.data.milestone2700 = false;
    }
    this.slimeCoinCapTotal();
    this.display();
  }

  pet() {
    this.data.pet1.rank = document.getElementById("pet1.rank").value;
    this.data.pet1.loyalty = document.getElementById("pet1.loyalty").value;
    let loyalty = 2.5 * (parseFloat(this.data.pet1.loyalty) + 100) * 0.01;
    this.data.pet1.passive = parseFloat(this.data.pet1.rank * loyalty + 100).toFixed(2);
    this.slimeCoinCapTotal();
    this.display();
  }

  researchStone() {
    this.data.research.stone.level = document.getElementById("research.stone.level").value;
    this.data.research.stone.value = +(this.data.research.stone.level * 0.1).toFixed(2);
    this.intrest();
    this.display();
  }

  researchLeaf() {
    this.data.research.leaf.level = document.getElementById("research.leaf.level").value;
    this.data.research.leaf.value = +(this.data.research.leaf.level * 2).toFixed(2) + 100;
    this.slimeCoinCapTotal();
    this.display();
    // slimeBankSlimeCoinCapTotal();
  }

  slimeCoinCap1() {
    this.data.slimeCoinCap1.level = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.convert2)(document.getElementById("slimeCoinCap1.level").value);
    // input = convert2(input);

    // this.data.slimeCoinCap1.value = sigma(
    //   0,
    //   this.data.slimeCoinCap1.level,
    //   function (a) {
    //     return a * 20 - 10 + 10000;
    //   },
    //   10
    // );
    let level = this.data.slimeCoinCap1.level;
    this.data.slimeCoinCap1.value = 10000.0 + 10000.0 * level + 10.0 * Math.pow(level, 2.0);

    this.slimeCoinCap1Cost();
    this.slimeCoinCapTotal();
    this.display();
  }

  slimeCoinCap2() {
    this.data.slimeCoinCap2.level = document.getElementById("slimeCoinCap2.level").value;
    this.data.slimeCoinCap2.value =
      (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.sigma)(
        0,
        this.data.slimeCoinCap2.level,
        function (a) {
          return a * 20 - 10;
        },
        10
      ) + 100;
    this.data.slimeCoinCap2.cost = 10000000000.0 * Math.pow(2.0, this.data.slimeCoinCap2.level);

    this.slimeCoinCapTotal();
    this.display();
  }

  slimeCoinCapTotal() {
    this.data.slimeCoinCapTotal =
      this.data.slimeCoinCap1.value *
      (this.data.research.leaf.value / 100) *
      (this.data.slimeCoinCap2.value / 100) *
      (this.data.pet1.passive / 100);

    this.intrest();
  }

  intrest() {
    let intrestPercent = this.data.research.stone.level * 0.001;

    if (this.data.milestone1800) {
      intrestPercent += 0.025;
    }
    if (this.data.milestone2700) {
      intrestPercent += 0.05;
    }
    this.data.intrest = intrestPercent * this.data.slimeCoinCapTotal;
    this.data.multiplier = Math.round(this.data.intrest / this.data.slimeCoinCap1.cost);
    this.data.multiplier -= Math.round(this.data.multiplier * 0.15);
    // slimeBankOptimiser();
  }

  slimeCoinCap1Cost() {
    // if ((double) this.level.value >= 500 000 000.0)
    // return 1E+15 * this.CostModifier();

    // 500T
    if (this.data.slimeCoinCap1.level >= 500000000000000) {
      this.data.slimeCoinCap1.cost = 1000000000000000000000000000;
    } // 1.00+E27
    else if (this.data.slimeCoinCap1.level >= 100000000000000) {
      // 100T
      this.data.slimeCoinCap1.cost = 100000000000000000000000000;
    } // 1.00+E26
    else if (this.data.slimeCoinCap1.level >= 50000000000000) {
      // 50T
      this.data.slimeCoinCap1.cost = 10000000000000000000000000;
    } // 1.00+E25
    else if (this.data.slimeCoinCap1.level >= 10000000000000) {
      // 10T
      this.data.slimeCoinCap1.cost = 1000000000000000000000000;
    } // 1.00+E24
    else if (this.data.slimeCoinCap1.level >= 5000000000000) {
      this.data.slimeCoinCap1.cost = 100000000000000000000000;
    } // 1.00+E23
    else if (this.data.slimeCoinCap1.level >= 1000000000000) {
      this.data.slimeCoinCap1.cost = 10000000000000000000000;
    } // 1.00+E22
    else if (this.data.slimeCoinCap1.level >= 500000000000) {
      this.data.slimeCoinCap1.cost = 1000000000000000000000;
    } // 1.00+E21
    else if (this.data.slimeCoinCap1.level >= 100000000000) {
      this.data.slimeCoinCap1.cost = 100000000000000000000;
    } // 1.00+E20
    else if (this.data.slimeCoinCap1.level >= 50000000000) {
      this.data.slimeCoinCap1.cost = 10000000000000000000;
    } // 1.00+E19
    else if (this.data.slimeCoinCap1.level >= 10000000000) {
      this.data.slimeCoinCap1.cost = 1000000000000000000;
    } // 1.00+E18
    else if (this.data.slimeCoinCap1.level >= 5000000000) {
      this.data.slimeCoinCap1.cost = 100000000000000000;
    } // 1.00+E17
    else if (this.data.slimeCoinCap1.level >= 1000000000) {
      this.data.slimeCoinCap1.cost = 10000000000000000;
    } // 1.00+E16
    else if (this.data.slimeCoinCap1.level >= 500000000) {
      this.data.slimeCoinCap1.cost = 1000000000000000;
    } // 1.00+E15
    else if (this.data.slimeCoinCap1.level >= 100000000) {
      this.data.slimeCoinCap1.cost = 100000000000000;
    } // 100T
    else if (this.data.slimeCoinCap1.level >= 50000000) {
      this.data.slimeCoinCap1.cost = 10000000000000;
    } // 10T
    else if (this.data.slimeCoinCap1.level >= 10000000) {
      this.data.slimeCoinCap1.cost = 1000000000000;
    } // 1T
    else {
      this.data.slimeCoinCap1.cost = this.data.slimeCoinCap1.level * 10000 + 10000;
    } // need to find solution for less than 10M upgrades
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js?6715");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anvil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anvil.js */ "./src/anvil.js");
/* harmony import */ var _slimebank_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slimebank.js */ "./src/slimebank.js");
/* harmony import */ var _gear_gear_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gear/gear.ts */ "./src/gear/gear.ts");


// import { expeditionLoad } from "./expedition.js";


// import "./style.css";

const version = "0.1.2";

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  // start up
  load();
});

function load() {
  // current tab
  var tab = 0;
  const tab_list = [
    { id: "slimeBank", name: "Slime Bank Calculator" },
    { id: "lab", name: "Lab Calculator" },
    { id: "anvil", name: "Anvil Calculator" },
    { id: "expedition", name: "Expedition Calculator" },
    { id: "gear", name: "Gear Calculator" },
    { id: "settings", name: "Settings" },
  ];

  // const tab_list = ["slime-bank", "lab", "anvil", "expedition", "settings"];
  if (localStorage.getItem("currentTab")) {
    tab_list.forEach((element) => {
      // addEvent(element.id, "click", changeTab);
      // console.log(element.id);
      // tab = element + "-calculator";
      if (localStorage.getItem("currentTab") == element.id) {
        (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)(element.id).then((response) => {
          // loading
          document.getElementById("content").innerHTML = response;
          if (element.id == "slimeBank") {
            new _slimebank_js__WEBPACK_IMPORTED_MODULE_2__.SlimeBank();
            // console.log("sd");
          }
          if (element.id == "anvil") {
            new _anvil_js__WEBPACK_IMPORTED_MODULE_1__.Anvil();
            // console.log("sd");
          }
          if (element.id == "gear") {
            new _gear_gear_ts__WEBPACK_IMPORTED_MODULE_3__.Gear();
          }
          if (element.id == "settings") {
            console.log("before");
            (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("settings.loadFromFile", "change", _common_js__WEBPACK_IMPORTED_MODULE_0__.loadFromFile);
            console.log("after");
            (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("settings.saveToFile", "click", _common_js__WEBPACK_IMPORTED_MODULE_0__.saveToFile);
            console.log("after save");
            (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("settings.restart", "click", _common_js__WEBPACK_IMPORTED_MODULE_0__.restart);
            console.log("after restart");
          }
        });

        document.getElementById("title").innerHTML = "IEH2calc > " + element.name;
        document.getElementById(element.id).style.color = "#f2e009";
      }
    });
  } else {
    localStorage.setItem("currentTab", "slimeBank");
    document.getElementById("slimeBank").style.color = "#f2e009";
    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.loadTab)("slimeBank").then((response) => {
      document.getElementById("content").innerHTML = response;
      new _slimebank_js__WEBPACK_IMPORTED_MODULE_2__.SlimeBank();
      console.log("else in load | after Init");
    });
  }
  // Anvil loading
  // if (localStorage.getItem("anvil-nitro-speed") === null) {
  //   localStorage.setItem("anvil-nitro-speed", 1);
  // } else {
  //   document.getElementById("anvil-nitro-speed").value =
  //     localStorage.getItem("anvil-nitro-speed");
  // }
  // anvil load need refactor

  // for (let i = 1; i <= 10; i++) {
  //   var id = 0;
  //   id = "anvil-dungeon-" + i + "-time";
  //   if (localStorage.getItem(id) === null) {
  //     localStorage.setItem(id, document.getElementById(id).value);
  //   } else {
  //     document.getElementById(id).value = localStorage.getItem(id);
  //   }
  // }
  // calcAnvil();
  // calcExpedition();
  // expeditionLoad();
  // loading values from localStorage else setting values as 0
  // const list = [
  //   'anvil-fox-dungeon-1-time', 'anvil-fox-dungeon-2-time', 'anvil-fox-dungeon-3-time',
  // 'anvil-fox-dungeon-4-time', 'anvil-fox-dungeon-5-time','anvil-bat-dungeon-1-time','anvil-bat-dungeon-2-time',
  // 'anvil-bat-dungeon-3-time','anvil-bat-dungeon-4-time','anvil-bat-dungeon-5-time'];
  // const items = { ...localStorage };
  // console.log(items);
  // list.forEach(element => {
  //  console.log(element);
  //  if (localStorage.getItem(element) === null) {slimeBankResearchStone(0);}
  //  else {slimeBankResearchStone(localStorage.getItem('slime-bank-research-stone-level'));}
  // });

  // Slime Bank loading
  // if (localStorage.getItem("slime-bank-research-stone-level") === null) {
  //   slimeBankResearchStone(0);
  // } else {
  //   slimeBankResearchStone(
  //     localStorage.getItem("slime-bank-research-stone-level")
  //   );
  // }

  // if (localStorage.getItem("slime-bank-research-leaf-level") === null) {
  //   slimeBankResearchLeaf(0);
  // } else {
  //   slimeBankResearchLeaf(
  //     localStorage.getItem("slime-bank-research-leaf-level")
  //   );
  // }

  // if (
  //   localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level") === null
  // ) {
  //   slimeBankSlimeCoinCap1(0);
  // } else {
  //   slimeBankSlimeCoinCap1(
  //     localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level")
  //   );
  // }

  // if (
  //   localStorage.getItem("slime-bank-upgrade-slime-coin-cap-2-level") === null
  // ) {
  //   slimeBankSlimeCoinCap2(0);
  // } else {
  //   slimeBankSlimeCoinCap2(
  //     localStorage.getItem("slime-bank-upgrade-slime-coin-cap-2-level")
  //   );
  // }

  // slimeBankSlimeCoinCapTotal();
  // slimeBankIntrest();
  // slimeBankOptimiser();
  // debug
  // for (const [key, value] of Object.entries({ ...localStorage })) {
  //   // console.log(`${key}: ${value}`);
  //   document.getElementById('debug').innerHTML += `<i>${key}:</i> <b>${value}</b><br>`;
  // }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0NBQW9DLG1CQUFtQixzQkFBc0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUJBQXFCO0FBQ3JFLHdCQUF3QixJQUFJLElBQUksTUFBTTtBQUN0QztBQUNBO0FBQ0Esd0JBQXdCLElBQUksSUFBSSxNQUFNO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQVdFOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEtGLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsUUFBUSx5RUFBeUU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7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QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFLO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRXFCOzs7Ozs7O1VDOVByQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUY7QUFDaEQ7QUFDbkMsWUFBWSxpQkFBaUI7QUFDYztBQUNMO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNLG1DQUFtQztBQUN6QyxNQUFNLHVDQUF1QztBQUM3QyxNQUFNLGlEQUFpRDtBQUN2RCxNQUFNLHFDQUFxQztBQUMzQyxNQUFNLGtDQUFrQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBUSxvQ0FBb0Msb0RBQVk7QUFDcEU7QUFDQSxZQUFZLG9EQUFRLGlDQUFpQyxrREFBVTtBQUMvRDtBQUNBLFlBQVksb0RBQVEsOEJBQThCLCtDQUFPO0FBQ3pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJLG1EQUFPO0FBQ1g7QUFDQSxVQUFVLG9EQUFTO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxZQUFZO0FBQ1osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRSx5QkFBeUIsSUFBSSxJQUFJLE1BQU07QUFDdkMsMkRBQTJELElBQUksV0FBVyxNQUFNO0FBQ2hGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24uanM/NjcxNSIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvRXZlbnRFbWl0dGVyLnRzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvY29sb3JzLnRzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvZWZmZWN0UmF0ZXIudHMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvZ2Vhci9nZWFyLnRzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvb3B0aW1pemVyLnRzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvYW52aWwuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvZGF0YS5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9zbGltZWJhbmsuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4vY29tbW9uLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbnZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fLmNoYW5nZVRhYlxuaWYgKHR5cGVvZiBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID09PSAndW5kZWZpbmVkJykgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fO1xuZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1tleHBvc2VzLWxvYWRlcl0gVGhlIFwiY2hhbmdlVGFiXCIgdmFsdWUgZXhpc3RzIGluIHRoZSBnbG9iYWwgc2NvcGUsIGl0IG1heSBub3QgYmUgc2FmZSB0byBvdmVyd3JpdGUgaXQsIHVzZSB0aGUgXCJvdmVycmlkZVwiIG9wdGlvbicpXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cbiAgdmFyIGc7XG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZyA9IHRoaXMgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZztcbn0oKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG4gIGxpc3RlbmVyczogTWFwPHN0cmluZywgRnVuY3Rpb25bXT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XHJcbiAgfVxyXG5cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNldChldmVudE5hbWUsIFtdKTtcclxuICAgIH1cclxuICAgIHRoaXMubGlzdGVuZXJzLmdldChldmVudE5hbWUpLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgZW1pdChldmVudE5hbWU6IHN0cmluZywgLi4uYXJncykge1xyXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLmdldChldmVudE5hbWUpLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lciguLi5hcmdzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIFwiIzMzNjZDQ1wiLFxyXG4gICAgXCIjREMzOTEyXCIsXHJcbiAgICBcIiNGRjk5MDBcIixcclxuICAgIFwiIzEwOTYxOFwiLFxyXG4gICAgXCIjOTkwMDk5XCIsXHJcbiAgICBcIiMzQjNFQUNcIixcclxuICAgIFwiIzAwOTlDNlwiLFxyXG4gICAgXCIjREQ0NDc3XCIsXHJcbiAgICBcIiM2NkFBMDBcIixcclxuICAgIFwiI0I4MkUyRVwiLFxyXG4gICAgXCIjMzE2Mzk1XCIsXHJcbiAgICBcIiM5OTQ0OTlcIixcclxuICAgIFwiIzIyQUE5OVwiLFxyXG4gICAgXCIjQUFBQTExXCIsXHJcbiAgICBcIiM2NjMzQ0NcIixcclxuICAgIFwiI0U2NzMwMFwiLFxyXG4gICAgXCIjOEIwNzA3XCIsXHJcbiAgICBcIiMzMjkyNjJcIixcclxuICAgIFwiIzU1NzRBNlwiLFxyXG4gICAgXCIjM0IzRUFDXCIsXHJcbiAgICBcIiNGRjAwRkZcIixcclxuICAgIFwiI0ZGNjYwMFwiLFxyXG4gICAgXCIjQzcxNTg1XCIsXHJcbiAgICBcIiMwMDdCQTdcIixcclxuICAgIFwiI0ZGN0Y1MFwiLFxyXG4gICAgXCIjREMxNDNDXCIsXHJcbiAgICBcIiMwMEZGN0ZcIixcclxuICAgIFwiI0MwQzBDMFwiLFxyXG4gICAgXCIjMDA4MDgwXCIsXHJcbiAgICBcIiM4QjAwOEJcIixcclxuICAgIFwiI0IwMTcxRlwiLFxyXG4gICAgXCIjNjk2OTY5XCIsXHJcbiAgICBcIiM0ODNEOEJcIixcclxuICAgIFwiIzAwODAwMFwiLFxyXG4gICAgXCIjQTA1MjJEXCIsXHJcbiAgICBcIiNGRkMwQ0JcIixcclxuICAgIFwiI0FERDhFNlwiLFxyXG4gICAgXCIjODdDRUZBXCIsXHJcbiAgICBcIiNEQTcwRDZcIixcclxuICAgIFwiI0YwODA4MFwiLFxyXG4gICAgXCIjRTBGRkZGXCIsXHJcbiAgICBcIiNGQTgwNzJcIixcclxuICAgIFwiI0ZGRTRFMVwiLFxyXG4gICAgXCIjQkE1NUQzXCIsXHJcbiAgICBcIiNGRkVCQ0RcIixcclxuICAgIFwiIzdGRkZENFwiLFxyXG4gICAgXCIjRjBFNjhDXCIsXHJcbiAgICBcIiNEMkI0OENcIixcclxuICAgIFwiI0FGRUVFRVwiLFxyXG4gICAgXCIjRkY2MzQ3XCIsXHJcbiAgICBcIiNGRkVGRDVcIixcclxuICAgIFwiIzZCOEUyM1wiLFxyXG4gICAgXCIjQ0Q1QzVDXCIsXHJcbiAgICBcIiNGNEE0NjBcIixcclxuICAgIFwiI0Q4QkZEOFwiLFxyXG4gICAgXCIjOTkzMkNDXCIsXHJcbiAgICBcIiNGRjhDMDBcIixcclxuICAgIFwiIzk5MzJDQ1wiLFxyXG4gICAgXCIjRkZENzAwXCIsXHJcbiAgICBcIiNCMEM0REVcIixcclxuICAgIFwiIzQwRTBEMFwiLFxyXG4gICAgXCIjRkZCNkMxXCIsXHJcbiAgICBcIiMwMENFRDFcIixcclxuICAgIFwiI0JBNTVEM1wiLFxyXG4gICAgXCIjN0I2OEVFXCIsXHJcbiAgICBcIiNFNkU2RkFcIixcclxuICAgIFwiIzhGQkM4RlwiLFxyXG4gICAgXCIjMDBGQTlBXCIsXHJcbiAgICBcIiMxOTE5NzBcIixcclxuICAgIFwiI0Y1REVCM1wiLFxyXG4gIF07IiwiaW1wb3J0IHsgRWZmZWN0VmFsdWVzLCBHZWFyU2V0LCBSYXRpbmcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY29uc3QgZW5jaGFudFVzYWdlID0ge1xyXG4gIFVuaWNvcm5Lbm93bGVkZ2U6IFwiXCIsXHJcbiAgSFBBZGRlcjogXCJcIixcclxuICBNUEFkZGVyOiBcIlwiLFxyXG4gIEFUS0FkZGVyOiBcIlwiLFxyXG4gIE1BVEtBZGRlcjogXCJcIixcclxuICBERUZBZGRlcjogXCJcIixcclxuICBNREVGQWRkZXI6IFwiXCIsXHJcbiAgU1BEQWRkZXI6IFwiXCIsXHJcbiAgSFBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gIE1QTXVsdGlwbGllcjogXCJcIixcclxuICBBVEtNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gIE1BVEtNdWx0aXBsaWVyOiBcIlwiLFxyXG4gIERFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgTURFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgQVRLUHJvcG90aW9uOiBcImRwc1wiLFxyXG4gIE1BVEtQcm9wb3Rpb246IFwiXCIsXHJcbiAgREVGUHJvcG90aW9uOiBcIlwiLFxyXG4gIE1ERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgRmlyZVJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgSWNlUmVzaXN0YW5jZTogXCJcIixcclxuICBUaHVuZGVyUmVzaXN0YW5jZTogXCJcIixcclxuICBMaWdodFJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgRGFya1Jlc2lzdGFuY2U6IFwiXCIsXHJcbiAgUGh5c2ljYWxBYnNvcnB0aW9uOiBcIlwiLFxyXG4gIEZpcmVBYnNvcnB0aW9uOiBcIlwiLFxyXG4gIEljZUFic29ycHRpb246IFwiXCIsXHJcbiAgVGh1bmRlckFic29ycHRpb246IFwiXCIsXHJcbiAgTGlnaHRBYnNvcnB0aW9uOiBcIlwiLFxyXG4gIERhcmtBYnNvcnB0aW9uOiBcIlwiLFxyXG4gIERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgRXF1aXBtZW50RHJvcENoYW5jZTogXCJcIixcclxuICBTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgTWFnaWNTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgU3BpZGVyRHJvcENoYW5jZTogXCJcIixcclxuICBCYXREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gIEZhaXJ5RHJvcENoYW5jZTogXCJcIixcclxuICBGb3hEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gIERldmlsRmlzaERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgVHJlYW50RHJvcENoYW5jZTogXCJcIixcclxuICBGbGFtZVRpZ2VyRHJvcENoYW5jZTogXCJcIixcclxuICBVbmljb3JuRHJvcENoYW5jZTogXCJcIixcclxuICBDb2xvck1hdGVyaWFsRHJvcENoYW5jZTogXCJcIixcclxuICBQaHlzaWNhbENyaXRpY2FsOiBcImRwc1wiLFxyXG4gIE1hZ2ljYWxDcml0aWNhbDogXCJcIixcclxuICBFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgU2tpbGxQcm9maWNpZW5jeTogXCJnYWluc1wiLFxyXG4gIEVxdWlwbWVudFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgTW92ZVNwZWVkTXVsdGlwbGllcjogXCJcIixcclxuICBHb2xkR2FpbjogXCJcIixcclxuICBTdG9uZUdhaW46IFwiXCIsXHJcbiAgQ3J5c3RhbEdhaW46IFwiXCIsXHJcbiAgTGVhZkdhaW46IFwiXCIsXHJcbiAgV2FycmlvclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgV2l6YXJkU2tpbGxMZXZlbDogXCJcIixcclxuICBBbmdlbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgVGhpZWZTa2lsbExldmVsOiBcIlwiLFxyXG4gIEFyY2hlclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgVGFtZXJTa2lsbExldmVsOiBcIlwiLFxyXG4gIEFsbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgTWFnaWNTbGltZUtub3dsZWRnZTogXCJcIixcclxuICBTcGlkZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgQmF0S25vd2xlZGdlOiBcIlwiLFxyXG4gIEZhaXJ5S25vd2xlZGdlOiBcIlwiLFxyXG4gIEZveEtub3dsZWRnZTogXCJcIixcclxuICBEZXZpbEZpc2hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgVHJlYW50S25vd2xlZGdlOiBcIlwiLFxyXG4gIEZsYW1lVGlnZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgUGh5c2ljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgRmlyZURhbWFnZTogXCJcIixcclxuICBJY2VEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgVGh1bmRlckRhbWFnZTogXCJcIixcclxuICBMaWdodERhbWFnZTogXCJcIixcclxuICBEYXJrRGFtYWdlOiBcIlwiLFxyXG4gIEhwUmVnZW46IFwiXCIsXHJcbiAgTXBSZWdlbjogXCJcIixcclxuICBUYW1pbmdQb2ludDogXCJcIixcclxuICBXYXJyaW9yU2tpbGxSYW5nZTogXCJcIixcclxuICBXaXphcmRTa2lsbFJhbmdlOiBcIlwiLFxyXG4gIEFuZ2VsU2tpbGxSYW5nZTogXCJcIixcclxuICBUaGllZlNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgQXJjaGVyU2tpbGxSYW5nZTogXCJcIixcclxuICBUYW1lclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgVG93bk1hdEdhaW46IFwiZ2FpbnNcIixcclxuICBUb3duTWF0QXJlYUNsZWFyR2FpbjogXCJcIixcclxuICBSZWJpcnRoUG9pbnRHYWluMTogXCJnYWluc1wiLFxyXG4gIFJlYmlydGhQb2ludEdhaW4yOiBcImdhaW5zXCIsXHJcbiAgUmViaXJ0aFBvaW50R2FpbjM6IFwiZ2FpbnNcIixcclxuICBDcml0aWNhbERhbWFnZTogXCJkcHNcIixcclxuICBCbGVzc2luZ0VmZmVjdDogXCJkcHNcIixcclxuICBNb3ZlU3BlZWRBZGRlcjogXCJcIixcclxuICBQZXRFWFBHYWluOiBcIlwiLFxyXG4gIExveWFsdHlQb2ludEdhaW46IFwiXCIsXHJcbiAgQ2F0YWx5c3REb3VibGVDcml0aWNhbENoYW5jZTogXCJcIixcclxuICBXYXJyaW9yU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICBXaXphcmRTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gIEFuZ2VsU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICBUaGllZlNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgQXJjaGVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICBUYW1lclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgSHBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgTXBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgQXJtb3JlZEZ1cnk6IFwiXCIsXHJcbiAgV2FyZGVkRnVyeTogXCJkcHNcIixcclxuICBQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gIFBldE1hZ2ljYWxDcml0aWNhbENoYW5jZTogXCJcIixcclxuICBQZXRDcml0aWNhbERhbWFnZTogXCJcIixcclxuICBQZXREZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gIFN0b25lVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gIExlYWZUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICBHdWlsZEVYUEdhaW46IFwiZ2FpbnNcIixcclxuICBTUERNdWx0aXBsaWVyOiBcIlwiLFxyXG4gIENyaXRpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICBTa2lsbFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gIEVxdWlwbWVudFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gIEVYUEdhaW5NdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgR29sZEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gIFBoeXNpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICBGaXJlRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICBJY2VEYW1hZ2VNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gIFRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gIExpZ2h0RGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICBEYXJrRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICBUYW1pbmdQb2ludE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgUGV0RVhQR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgTG95YWx0eVBvaW50R2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgQmxlc3NpbmdFZmZlY3RNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gIFBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gIE1hZ2ljYWxDcml0aWNhbE11bHRpcGxpZXI6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmF0ZUVmZmVjdHMgPSAoZ2VhclNldDpHZWFyU2V0LCBlc2U6IEVmZmVjdFZhbHVlcywgcmF0aW5nOiBSYXRpbmcpID0+IHtcclxuICByYXRpbmcuZHBzID0gMTtcclxuICByYXRpbmcuZ2FpbnMgPSAxO1xyXG5cclxuICAvL1RPRE8gaW1wcm92ZSB0aGUgYWNjdXJhY3lcclxuICAvLyBcIk5vdGhpbmdcIiBpcyBhIGVuY2hhbnQgc2xvdCwgaXRzIHdvcnRoIGFzIG11Y2ggYXMgdGhlIGJlc3QgZW5jaGFudFxyXG4gIC8vIGNvbnNpZGVyIG91dGxpZXIgbGlrZSBmdXJ5XHJcbiAgLy9jb25zaWRlciB0YXJnZXQgY2FwcyBmb3IgZHBzIGFuZCBjcml0IGNoYW5jZVxyXG4gIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gZXNlKSB7XHJcbiAgICAvL2lmIHdlIGRvbnQgY2FyZSBmb3IgdGhlc2UgZG9udCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhbHVlXHJcbiAgICBpZiAoIWVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWZmZWN0VmFsdWUgPSBlc2VbZWZmZWN0S2luZF07XHJcblxyXG4gICAgcmF0aW5nLmRwcyAqPSAxICsgZWZmZWN0VmFsdWU7XHJcbiAgfVxyXG5cclxuICByYXRpbmcudG90YWwgPSByYXRpbmcuZHBzICogcmF0aW5nLmdhaW5zO1xyXG59O1xyXG4iLCJpbXBvcnQgY29sb3JzIGZyb20gXCIuL2NvbG9yc1wiO1xyXG5pbXBvcnQgeyBzZXRJdGVtQXRJbmRleCwgaW5pdEdlYXJzZXQsIGZpbmRCZXN0SXRlbSB9IGZyb20gXCIuL29wdGltaXplclwiO1xyXG5pbXBvcnQgeyBTYXZlRGF0YSwgUGFydCwgR2VhclNldCwgSXRlbSwgSXRlbUtpbmQgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY2xhc3MgR2VhciB7XHJcbiAgbmFtZSA9IFwiZ2VhclwiO1xyXG4gIHZlcnNpb24gPSAyO1xyXG4gIGRhdGE6IFNhdmVEYXRhID0ge1xyXG4gICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxyXG5cclxuICAgIHNlbGVjdGVkTG9hZG91dDogMCxcclxuICAgIGdlYXJzZXRzOiBbXSxcclxuXHJcbiAgICBvcHRpbWl6ZXJDb25maWc6IHtcclxuICAgICAgZHBzOiB7fSxcclxuICAgICAgZ2FpbnM6IHt9LFxyXG4gICAgICBpdGVtOiB7XHJcbiAgICAgICAgaXRlbUxldmVsOiAxMjAsXHJcbiAgICAgICAgaW5jbHVkZU1hc3Rlcnk6IHRydWUsXHJcbiAgICAgICAgY3Vyc2VBbnZpbDogdHJ1ZSxcclxuICAgICAgICBsb3R0ZXJ5OiB0cnVlLFxyXG4gICAgICAgIHNldEJpYXM6IDAuMDc1LFxyXG4gICAgICAgIHNsb3RzOiB7XHJcbiAgICAgICAgICBKZXdlbHJ5OiAxOSxcclxuICAgICAgICAgIEFybW9yOiAxOSxcclxuICAgICAgICAgIFdlYXBvbjogMTksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZG9tID0ge1xyXG4gICAgZ2VhclNldENvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZWFyU2V0Q29udGFpbmVyXCIpLFxyXG4gICAgaXRlbXNXZWFwb25zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zV2VhcG9uc1wiKSxcclxuICAgIGl0ZW1zQXJtb3I6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbXNBcm1vclwiKSxcclxuICAgIGl0ZW1zSmV3ZWxyeTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc0pld2VscnlcIiksXHJcblxyXG4gICAgaXRlbXNBdXRvY29tcGxldGVXZWFwb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbXNBdXRvY29tcGxldGVXZWFwb25cIiksXHJcbiAgICBpdGVtc0F1dG9jb21wbGV0ZUFybW9yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zQXV0b2NvbXBsZXRlQXJtb3JcIiksXHJcbiAgICBpdGVtc0F1dG9jb21wbGV0ZUpld2Vscnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcIml0ZW1zQXV0b2NvbXBsZXRlSmV3ZWxyeVwiXHJcbiAgICApLFxyXG5cclxuICAgIG9wdGltaXplUmVzdWx0VG90YWxFc2VCYXJDaGFydDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwib3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0XCJcclxuICAgICkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXHJcblxyXG4gICAgaXRlbVRlbXBsYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1UZW1wbGF0ZVwiKSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHNhdmVkU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKTtcclxuICAgIGlmIChzYXZlZFN0cmluZyA9PT0gbnVsbCB8fCBzYXZlZFN0cmluZyA9PT0gXCJudWxsXCIpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS52ZXJzaW9uIDwgdGhpcy52ZXJzaW9uKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnZlcnNpb24pIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLmRhdGEudmVyc2lvbiA9IHRoaXMudmVyc2lvbjtcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGFsZXJ0KFwibWlzc2luZyB2ZXJzaW9uIG1pZ3JhdGlvblwiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJHZWFyU2V0KCk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZUxvYWRvdXQodGhpcy5kYXRhLnNlbGVjdGVkTG9hZG91dCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJHZWFyU2V0KCkge1xyXG4gICAgbGV0IGh0bWw7XHJcblxyXG4gICAgaHRtbCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE5OyBpKyspIHtcclxuICAgICAgaHRtbCArPSB0aGlzLml0ZW1UZW1wbGF0ZShcIldlYXBvblwiLCBpKTtcclxuICAgIH1cclxuICAgIHRoaXMuZG9tLml0ZW1zV2VhcG9ucy5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgIGh0bWwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOTsgaSsrKSB7XHJcbiAgICAgIGh0bWwgKz0gdGhpcy5pdGVtVGVtcGxhdGUoXCJBcm1vclwiLCBpKTtcclxuICAgIH1cclxuICAgIHRoaXMuZG9tLml0ZW1zQXJtb3IuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICBodG1sID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTk7IGkrKykge1xyXG4gICAgICBodG1sICs9IHRoaXMuaXRlbVRlbXBsYXRlKFwiSmV3ZWxyeVwiLCBpKTtcclxuICAgIH1cclxuICAgIHRoaXMuZG9tLml0ZW1zSmV3ZWxyeS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBhcnRBdXRvY29tcGxldGUgPSAocGFydDogUGFydCkgPT4ge1xyXG4gICAgICBjb25zdCBnZWFyc2V0ID0gdGhpcy5kYXRhLmdlYXJzZXRzW3RoaXMuZGF0YS5zZWxlY3RlZExvYWRvdXRdO1xyXG5cclxuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlT3B0aW9ucyA9IHRoaXMuZG9tW1xyXG4gICAgICAgIGBpdGVtc0F1dG9jb21wbGV0ZSR7cGFydH1gXHJcbiAgICAgIF0gYXMgRWxlbWVudDtcclxuXHJcbiAgICAgIGF1dG9Db21wbGV0ZU9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGdlYXJzZXQuaXRlbXMpIHtcclxuICAgICAgICBpZiAoaXRlbS5wYXJ0ICE9PSBwYXJ0KSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS5raW5kO1xyXG4gICAgICAgIGF1dG9Db21wbGV0ZU9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuZG9tLmdlYXJTZXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm9wdGltaXplSXRlbUlucHV0XCIpKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGFydFwiKSBhcyBQYXJ0O1xyXG5cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmb2N1c1wiLCB0YXJnZXQpO1xyXG4gICAgICAgICAgdXBkYXRlUGFydEF1dG9jb21wbGV0ZShwYXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBjb25zdCBzZXRJdGVtT25HZWFyc2V0ID0gKFxyXG4gICAgICBwYXJ0OiBQYXJ0LFxyXG4gICAgICBzbG90SW5kZXg6IG51bWJlcixcclxuICAgICAgY2hvb3Nlbk5hbWU6IHN0cmluZ1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdlYXJzZXQgPSB0aGlzLmRhdGEuZ2VhcnNldHNbdGhpcy5kYXRhLnNlbGVjdGVkTG9hZG91dF07XHJcblxyXG4gICAgICBpZiAoIWNob29zZW5OYW1lIHx8IGNob29zZW5OYW1lID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgIHNldEl0ZW1BdEluZGV4KGdlYXJzZXQsIFwiTm90aGluZ1wiLCBwYXJ0LCBzbG90SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2VhcnNldC5pdGVtc01hcC5oYXMoY2hvb3Nlbk5hbWUgYXMgSXRlbUtpbmQpKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGdlYXJzZXQuaXRlbXNNYXAuZ2V0KGNob29zZW5OYW1lIGFzIEl0ZW1LaW5kKTtcclxuICAgICAgICBpZiAoaXRlbS5wYXJ0ICE9PSBwYXJ0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJdGVtQXRJbmRleChnZWFyc2V0LCBpdGVtLmtpbmQsIGl0ZW0ucGFydCwgc2xvdEluZGV4KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZG9tLmdlYXJTZXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJpbnB1dFwiLFxyXG4gICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm9wdGltaXplSXRlbUlucHV0XCIpKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGFydFwiKSBhcyBQYXJ0O1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcblxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImlucHV0XCIsIHRhcmdldCk7XHJcbiAgICAgICAgICBzZXRJdGVtT25HZWFyc2V0KHBhcnQsIGluZGV4LCB0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuZG9tLmdlYXJTZXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJibHVyXCIsXHJcbiAgICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3B0aW1pemVJdGVtSW5wdXRcIikpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcnQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXJ0XCIpIGFzIFBhcnQ7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmx1clwiLCB0YXJnZXQpO1xyXG4gICAgICAgICAgaWYgKCFzZXRJdGVtT25HZWFyc2V0KHBhcnQsIGluZGV4LCB0YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHNldEl0ZW1PbkdlYXJzZXQocGFydCwgaW5kZXgsIHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG4gICAgdGhpcy5kb20uZ2VhclNldENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImtleXVwXCIsXHJcbiAgICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3B0aW1pemVJdGVtSW5wdXRcIikpIHtcclxuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fCBldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGFydFwiKSBhcyBQYXJ0O1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJrZXl1cC9lbnRlclwiLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIXNldEl0ZW1PbkdlYXJzZXQocGFydCwgaW5kZXgsIHRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIHNldEl0ZW1PbkdlYXJzZXQocGFydCwgaW5kZXgsIHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICAvL2NsaWNrIGF1dG8gYnV0dG9uXHJcbiAgICB0aGlzLmRvbS5nZWFyU2V0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3B0aW1pemVJdGVtQnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgICF0YXJnZXQuY2xhc3NMaXN0IHx8XHJcbiAgICAgICAgICAgICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3B0aW1pemVJdGVtSW5wdXRcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldC5wcmV2aW91c1NpYmxpbmcpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnByZXZpb3VzU2libGluZyBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcGFydCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcnRcIikgYXMgUGFydDtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xyXG5cclxuICAgICAgICAgIHNldEl0ZW1PbkdlYXJzZXQocGFydCwgaW5kZXgsIFwiTm90aGluZ1wiKTtcclxuICAgICAgICAgIGNvbnN0IGJlc3RJdGVtID0gZmluZEJlc3RJdGVtKFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2VhcnNldHNbdGhpcy5kYXRhLnNlbGVjdGVkTG9hZG91dF0sXHJcbiAgICAgICAgICAgIHBhcnRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0YXJnZXQudmFsdWUgPSBiZXN0SXRlbS5raW5kO1xyXG4gICAgICAgICAgc2V0SXRlbU9uR2VhcnNldChwYXJ0LCBpbmRleCwgYmVzdEl0ZW0ua2luZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG4gIH1cclxuICBpdGVtVGVtcGxhdGUocGFydCwgaW5kZXgpIHtcclxuICAgIHJldHVybiB0aGlzLmRvbS5pdGVtVGVtcGxhdGUuaW5uZXJIVE1MXHJcbiAgICAgIC5yZXBsYWNlKC97e3BhcnR9fS9nLCBwYXJ0KVxyXG4gICAgICAucmVwbGFjZSgve3tpbmRleH19L2csIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGl0ZW1SYXRpbmdVcGRhdGVkVGltZW91dCA9IG51bGw7XHJcbiAgaXRlbVJhdGluZ1VwZGF0ZWRUaHJvdHRsZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pdGVtUmF0aW5nVXBkYXRlZFRpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaXRlbVJhdGluZ1VwZGF0ZWRUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbVJhdGluZ1VwZGF0ZWRUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLml0ZW1SYXRpbmdVcGRhdGVkLCAyNSk7XHJcbiAgfTtcclxuICBpdGVtUmF0aW5nQ2hhcnQgPSBudWxsO1xyXG4gIGl0ZW1SYXRpbmdVcGRhdGVkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2VhcnNldCA9IHRoaXMuZGF0YS5nZWFyc2V0c1t0aGlzLmRhdGEuc2VsZWN0ZWRMb2Fkb3V0XTtcclxuXHJcbiAgICBsZXQgbGFiZWxzID0gW107XHJcbiAgICBsZXQgZWZmZWN0S2luZFRvRGF0YUluZGV4ID0ge307XHJcbiAgICBsZXQgZGF0YVNldHMgPSB7XHJcbiAgICAgIGVuY2hhbnRzOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiRW5jaGFudHNcIixcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBnZWFyc2V0LmVzZSkge1xyXG4gICAgICBpZiAoZWZmZWN0S2luZCA9PT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGRhdGFJbmRleCA9IGxhYmVscy5sZW5ndGg7XHJcbiAgICAgIGVmZmVjdEtpbmRUb0RhdGFJbmRleFtlZmZlY3RLaW5kXSA9IGRhdGFJbmRleDtcclxuXHJcbiAgICAgIGxhYmVsc1tkYXRhSW5kZXhdID0gZWZmZWN0S2luZDtcclxuXHJcbiAgICAgIGRhdGFTZXRzLmVuY2hhbnRzLmRhdGFbZGF0YUluZGV4XSA9IGdlYXJzZXQuZXF1aXBwZWRFbmNoYW50cy5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgZW5jaGFudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVuY2hhbnQgPT09IGVmZmVjdEtpbmQpIHtcclxuICAgICAgICAgICAgYWNjKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgcGFydCBpbiBnZWFyc2V0LmVxdWlwcGVkSXRlbXMpIHtcclxuICAgICAgZm9yIChsZXQgaXRlbUtpbmQgb2YgZ2VhcnNldC5lcXVpcHBlZEl0ZW1zW3BhcnQgYXMgUGFydF0pIHtcclxuICAgICAgICBpZiAoaXRlbUtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBnZWFyc2V0Lml0ZW1zTWFwLmdldChpdGVtS2luZCk7XHJcbiAgICAgICAgY29uc3Qgc2V0RWZmZWN0TXVsdCA9IGdlYXJzZXQuaXRlbVNldHNbaXRlbS5zZXRLaW5kXS5hY3RpdmVNdWx0aXBsaWVyO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGRhdGFTZXRzW2l0ZW1LaW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgZGF0YVNldHNbaXRlbUtpbmRdID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogaXRlbUtpbmQsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tjb2xvckluZGV4XSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29sb3JJbmRleCA9IChjb2xvckluZGV4ICsgMSkgJSBjb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBnZWFyc2V0LmVzZSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3RLaW5kVG9EYXRhSW5kZXhbZWZmZWN0S2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGVmZmVjdEtpbmRUb0RhdGFJbmRleFtlZmZlY3RLaW5kXTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVNldHNbaXRlbS5raW5kXS5kYXRhW2RhdGFJbmRleF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGF0YVNldHNbaXRlbS5raW5kXS5kYXRhW2RhdGFJbmRleF0gPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLmVzZVtlZmZlY3RLaW5kXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBkYXRhU2V0c1tpdGVtLmtpbmRdLmRhdGFbZGF0YUluZGV4XSArPVxyXG4gICAgICAgICAgICAgIGl0ZW0uZXNlW2VmZmVjdEtpbmRdICogc2V0RWZmZWN0TXVsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0YVNldHNBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgZGF0YVNldCBpbiBkYXRhU2V0cykge1xyXG4gICAgICBkYXRhU2V0c0FycmF5LnB1c2goZGF0YVNldHNbZGF0YVNldF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLml0ZW1SYXRpbmdDaGFydCkge1xyXG4gICAgICAvL3RoaXMuaXRlbVJhdGluZ0NoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5pdGVtUmF0aW5nQ2hhcnQuZGF0YS5sYWJlbHMgPSBsYWJlbHM7XHJcbiAgICAgIHRoaXMuaXRlbVJhdGluZ0NoYXJ0LmRhdGEuZGF0YXNldHMgPSBkYXRhU2V0c0FycmF5O1xyXG5cclxuICAgICAgdGhpcy5pdGVtUmF0aW5nQ2hhcnQudXBkYXRlKFwibm9uZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLml0ZW1SYXRpbmdDaGFydCA9IG5ldyBDaGFydChcclxuICAgICAgICB0aGlzLmRvbS5vcHRpbWl6ZVJlc3VsdFRvdGFsRXNlQmFyQ2hhcnQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBkYXRhU2V0c0FycmF5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJFbmNoYW50IFNwcmVhZFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzYXZlKCkge1xyXG4gICAgbGV0IGRhdGFUb1NhdmUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZ2VhcnNldCBvZiBkYXRhVG9TYXZlLmdlYXJzZXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGdlYXJzZXQpIHtcclxuICAgICAgICAvL29ubHkgc2F2ZSBzZXRzLCBlZmZlY3RzLCByYXRpbmcsIGl0ZW1zLCBlbmNoYW50cyBmcm9tIEdlYXJTZXRcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgY2FzZSBcIml0ZW1zXCI6XHJcbiAgICAgICAgICBjYXNlIFwiZW5jaGFudHNcIjpcclxuICAgICAgICAgIGNhc2UgXCJjb25maWdcIjpcclxuICAgICAgICAgIGNhc2UgXCJzZXRzXCI6XHJcbiAgICAgICAgICBjYXNlIFwiZWZmZWN0c1wiOlxyXG4gICAgICAgICAgY2FzZSBcInJhdGluZ1wiOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGRlbGV0ZSBnZWFyc2V0W2tleV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2F2ZSkpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVMb2Fkb3V0KGxvYWRvdXQ6IG51bWJlcikge1xyXG4gICAgLy9kaXNhYmxlIG9sZFxyXG5cclxuICAgIGNvbnN0IGdlYXJzZXRQcmV2aW91cyA9IHRoaXMuZGF0YS5nZWFyc2V0c1t0aGlzLmRhdGEuc2VsZWN0ZWRMb2Fkb3V0XTtcclxuICAgIGlmIChnZWFyc2V0UHJldmlvdXMpIHtcclxuICAgICAgZ2VhcnNldFByZXZpb3VzLmV2ZW50cy5vZmYoXHJcbiAgICAgICAgXCJpdGVtUmF0aW5nVXBkYXRlZFwiLFxyXG4gICAgICAgIHRoaXMuaXRlbVJhdGluZ1VwZGF0ZWRUaHJvdHRsZWRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRhdGEuc2VsZWN0ZWRMb2Fkb3V0ID0gbG9hZG91dDtcclxuXHJcbiAgICBsZXQgZ2VhcnNldCA9IHRoaXMuZGF0YS5nZWFyc2V0c1tsb2Fkb3V0XTtcclxuICAgIGlmICh0eXBlb2YgZ2VhcnNldCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBnZWFyc2V0ID0ge1xyXG4gICAgICAgIGVxdWlwcGVkSXRlbXM6IHtcclxuICAgICAgICAgIFdlYXBvbjogW10sXHJcbiAgICAgICAgICBBcm1vcjogW10sXHJcbiAgICAgICAgICBKZXdlbHJ5OiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVxdWlwcGVkRW5jaGFudHM6IFtdLFxyXG4gICAgICB9IGFzIEdlYXJTZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VhcnNldC5jb25maWcgPSB0aGlzLmRhdGEub3B0aW1pemVyQ29uZmlnO1xyXG4gICAgaW5pdEdlYXJzZXQoZ2VhcnNldCk7XHJcblxyXG4gICAgdGhpcy5kYXRhLmdlYXJzZXRzW2xvYWRvdXRdID0gZ2VhcnNldDtcclxuXHJcbiAgICBnZWFyc2V0LmV2ZW50cy5vbihcIml0ZW1SYXRpbmdVcGRhdGVkXCIsIHRoaXMuaXRlbVJhdGluZ1VwZGF0ZWRUaHJvdHRsZWQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgR2VhciB9O1xyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcbmltcG9ydCB7IHJhdGVFZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0UmF0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBFZmZlY3QsXHJcbiAgRWZmZWN0VmFsdWVzLFxyXG4gIEVuY2hhbnQsXHJcbiAgRW5jaGFudEtpbmQsXHJcbiAgRXNlT2JqZWN0LFxyXG4gIEdlYXJTZXQsXHJcbiAgSXRlbSxcclxuICBJdGVtS2luZCxcclxuICBQYXJ0LFxyXG4gIFJhdGluZyxcclxuICBTZXRLaW5kLFxyXG4gIGVuY2hhbnRLaW5kcyxcclxuICBzZXRLaW5kcyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdEVmZmVjdFZhbHVlczogRWZmZWN0VmFsdWVzID0gZW5jaGFudEtpbmRzLnJlZHVjZSgoYWNjLCBraW5kKSA9PiB7XHJcbiAgYWNjW2tpbmRdID0gMDtcclxuICByZXR1cm4gYWNjO1xyXG59LCB7fSkgYXMgRWZmZWN0VmFsdWVzO1xyXG5cclxuY29uc3QgZGVmYXVsdFJhdGluZzogUmF0aW5nID0ge1xyXG4gIGRwczogMCxcclxuICBnYWluczogMCxcclxuICB0b3RhbDogMCxcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IHNldEl0ZW1zRWZmZWN0TXVsdCA9IFsxLCAxLCAxLjA1LCAxLjEsIDEuMTQsIDEuMTksIDEuMjUsIDEuMzUsIDEuNV07XHJcblxyXG4vKipcclxuICogaW5pdGlhbGl6ZSBhIGdlYXJzZXQgZm9yIG9wdGltaXphdGlvblxyXG4gKiB0aGlzIGZpbGxzIGVuY2hhbnRzTWFwIGFuZCBpdGVtc01hcCBhbmQgZGVmYXVsdCB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0R2VhcnNldCA9IChnZWFyU2V0OiBHZWFyU2V0KTogR2VhclNldCA9PiB7XHJcbiAgZ2VhclNldC5ldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGdlYXJTZXQuZW5jaGFudHNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgZ2VhclNldC5pdGVtc01hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgZ2VhclNldC5lbmNoYW50cyA9IFtdO1xyXG4gIGdlYXJTZXQuaXRlbXMgPSBbXTtcclxuXHJcbiAgZ2VhclNldC5pdGVtU2V0cyA9IHt9IGFzIEdlYXJTZXRbXCJpdGVtU2V0c1wiXTtcclxuICBmb3IgKGxldCBzZXRLaW5kIG9mIHNldEtpbmRzKSB7XHJcbiAgICBnZWFyU2V0Lml0ZW1TZXRzW3NldEtpbmRdID0ge1xyXG4gICAgICBhY3RpdmVJdGVtczoge30sXHJcbiAgICAgIGFjdGl2ZUNvdW50OiAwLFxyXG4gICAgICBhY3RpdmVNdWx0aXBsaWVyOiAxLFxyXG4gICAgICBuZXdTZXRJdGVtQm9udXNSYXRpbmc6IHtcclxuICAgICAgICAuLi5kZWZhdWx0UmF0aW5nLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdlYXJTZXQuZW5jaGFudHNNYXAuc2V0KFwiTm90aGluZ1wiLCB7XHJcbiAgICBraW5kOiBcIk5vdGhpbmdcIixcclxuICAgIGRpZFBhc3NGaWx0ZXI6IGZhbHNlLFxyXG4gICAgbWF4TGV2ZWw6IDEsXHJcbiAgICBtYXhWYWx1ZTogMSxcclxuICAgIG1heFZhbHVlTG90dGVyeTogMSxcclxuICAgIHJhdGluZzoge1xyXG4gICAgICAuLi5kZWZhdWx0UmF0aW5nLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBmb3IgKGxldCBlbmNoYW50IG9mIGRhdGEuZW5jaGFudHMpIHtcclxuICAgIC8vY29weSB0byBub3QgbW9kaWZ5IHRoZSBvcmlnaW5hbCBkYXRhXHJcbiAgICBlbmNoYW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbmNoYW50KSkgYXMgRW5jaGFudDtcclxuXHJcbiAgICBlbmNoYW50LmRpZFBhc3NGaWx0ZXIgPSB0cnVlO1xyXG4gICAgZW5jaGFudC5yYXRpbmcgPSB7XHJcbiAgICAgIC4uLmRlZmF1bHRSYXRpbmcsXHJcbiAgICB9O1xyXG5cclxuICAgIGdlYXJTZXQuZW5jaGFudHNNYXAuc2V0KGVuY2hhbnQua2luZCwgZW5jaGFudCk7XHJcbiAgfVxyXG4gIGFwcGx5RW5jaGFudHNGaWx0ZXIoZ2VhclNldCk7XHJcblxyXG4gIGZvciAobGV0IGl0ZW0gb2YgZGF0YS5pdGVtcykge1xyXG4gICAgLy9jb3B5IHRvIG5vdCBtb2RpZnkgdGhlIG9yaWdpbmFsIGRhdGFcclxuICAgIGl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKSBhcyBJdGVtO1xyXG5cclxuICAgIGl0ZW0ucmF0aW5nID0ge1xyXG4gICAgICAuLi5kZWZhdWx0UmF0aW5nLFxyXG4gICAgfTtcclxuXHJcbiAgICBpdGVtLmVzZSA9IHtcclxuICAgICAgLi4uZGVmYXVsdEVmZmVjdFZhbHVlcyxcclxuICAgIH07XHJcbiAgICBpdGVtLmVzZVN1bSA9IDA7XHJcbiAgICBpdGVtLmVzZUZpbHRlcmVkID0ge1xyXG4gICAgICAuLi5kZWZhdWx0RWZmZWN0VmFsdWVzLFxyXG4gICAgfTtcclxuICAgIGl0ZW0uZXNlRmlsdGVyZWRTdW0gPSAwO1xyXG4gICAgcmVzZXRJdGVtRXNlKGdlYXJTZXQsIGl0ZW0pO1xyXG5cclxuICAgIGdlYXJTZXQuaXRlbXNNYXAuc2V0KGl0ZW0ua2luZCwgaXRlbSk7XHJcbiAgfVxyXG4gIGFwcGx5SXRlbXNGaWx0ZXIoZ2VhclNldCk7XHJcblxyXG4gIGdlYXJTZXQuZXNlID0ge1xyXG4gICAgLi4uZGVmYXVsdEVmZmVjdFZhbHVlcyxcclxuICB9O1xyXG4gIGdlYXJTZXQuZXNlU3VtID0gMDtcclxuICBnZWFyU2V0LmVzZSA9IHtcclxuICAgIC4uLmRlZmF1bHRFZmZlY3RWYWx1ZXMsXHJcbiAgfTtcclxuICBnZWFyU2V0LmVzZUZpbHRlcmVkU3VtID0gMDtcclxuICBnZWFyU2V0LnJhdGluZyA9IHtcclxuICAgIC4uLmRlZmF1bHRSYXRpbmcsXHJcbiAgfTtcclxuXHJcbiAgZ2VhclNldEl0ZW1DaGFuZ2VkUmVjYWxjQWxsKGdlYXJTZXQpO1xyXG5cclxuICByZXR1cm4gZ2VhclNldDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtQXRJbmRleCA9IChcclxuICBnZWFyU2V0OiBHZWFyU2V0LFxyXG4gIHBhcnQ6IFBhcnQsXHJcbiAgaW5kZXg6IG51bWJlclxyXG4pOiBJdGVtS2luZCA9PiB7XHJcbiAgcmV0dXJuIGdlYXJTZXQuZXF1aXBwZWRJdGVtc1twYXJ0XVtpbmRleF07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXRJdGVtQXRJbmRleCA9IChcclxuICBnZWFyU2V0OiBHZWFyU2V0LFxyXG4gIGl0ZW1LaW5kOiBJdGVtS2luZCxcclxuICBwYXJ0OiBQYXJ0LFxyXG4gIGluZGV4OiBudW1iZXJcclxuKSA9PiB7XHJcbiAgaWYgKGdlYXJTZXQuZXF1aXBwZWRJdGVtc1twYXJ0XVtpbmRleF0gPT0gaXRlbUtpbmQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XHJcbiAgICBpZiAoIWdlYXJTZXQuZXF1aXBwZWRJdGVtc1twYXJ0XVtpXSkge1xyXG4gICAgICBnZWFyU2V0LmVxdWlwcGVkSXRlbXNbcGFydF1baV0gPSBcIk5vdGhpbmdcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlYXJTZXQuZXF1aXBwZWRJdGVtc1twYXJ0XVtpbmRleF0gPSBpdGVtS2luZDtcclxuXHJcbiAgZ2VhclNldEl0ZW1DaGFuZ2VkUmVjYWxjQWxsKGdlYXJTZXQpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRFbmNoYW50QXRJbmRleCA9IChcclxuICBnZWFyU2V0OiBHZWFyU2V0LFxyXG4gIGVuY2hhbnQ6IEVuY2hhbnRLaW5kLFxyXG4gIGluZGV4OiBudW1iZXJcclxuKSA9PiB7XHJcbiAgaWYgKGdlYXJTZXQuZXF1aXBwZWRFbmNoYW50c1tpbmRleF0gPT0gZW5jaGFudCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcclxuICAgIGlmICghZ2VhclNldC5lcXVpcHBlZEVuY2hhbnRzW2ldKSB7XHJcbiAgICAgIGdlYXJTZXQuZXF1aXBwZWRFbmNoYW50c1tpXSA9IFwiTm90aGluZ1wiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VhclNldC5lcXVpcHBlZEVuY2hhbnRzW2luZGV4XSA9IGVuY2hhbnQ7XHJcblxyXG4gIGdlYXJTZXRJdGVtQ2hhbmdlZFJlY2FsY0FsbChnZWFyU2V0KTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogYXBwbHkgdGhlIGZpbHRlciB0byB0aGUgZ2VhcnNldFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGx5RW5jaGFudHNGaWx0ZXIgPSAoZ2VhclNldDogR2VhclNldCkgPT4ge1xyXG4gIC8vVE9ETyBpbXBsZW1lbnQgdGhlIGZpbHRlclxyXG4gIGZvciAoY29uc3QgW2VuY2hhbnRLaW5kLCBlbmNoYW50XSBvZiBnZWFyU2V0LmVuY2hhbnRzTWFwKSB7XHJcbiAgICAvL3RoaXMgZW5jaGFudCBjYW4gbm90IGJlIGFwcGxpZWQgdG8gYW4gaXRlbSBhbmQgaXMgdGhlcmVmb3JlIGZpbHRlcmVkXHJcbiAgICBpZiAoZW5jaGFudC5raW5kID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICBlbmNoYW50LmRpZFBhc3NGaWx0ZXIgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVuY2hhbnQuZGlkUGFzc0ZpbHRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVuY2hhbnQuZGlkUGFzc0ZpbHRlcikge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGdlYXJTZXQuZW5jaGFudHMuaW5kZXhPZihlbmNoYW50KTtcclxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIGdlYXJTZXQuZW5jaGFudHMucHVzaChlbmNoYW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyQXJyYXlJblBsYWNlKGdlYXJTZXQuZW5jaGFudHMsIChlbmNoYW50KSA9PiBlbmNoYW50LmRpZFBhc3NGaWx0ZXIpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXBwbHlJdGVtc0ZpbHRlciA9IChnZWFyU2V0OiBHZWFyU2V0KSA9PiB7XHJcbiAgLy9UT0RPIGltcGxlbWVudCB0aGUgZmlsdGVyXHJcbiAgZm9yIChjb25zdCBbaXRlbUtpbmQsIGl0ZW1dIG9mIGdlYXJTZXQuaXRlbXNNYXApIHtcclxuICAgIGlmIChpdGVtLnNldEtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgIGl0ZW0uZGlkUGFzc0ZpbHRlciA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5kaWRQYXNzRmlsdGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGdlYXJTZXQuaXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgIGlmIChpdGVtLmRpZFBhc3NGaWx0ZXIpIHtcclxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIGdlYXJTZXQuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyQXJyYXlJblBsYWNlKGdlYXJTZXQuaXRlbXMsIChpdGVtKSA9PiBpdGVtLmRpZFBhc3NGaWx0ZXIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybiB0aGUgYmVzdCBpdGVtIGZvciB0aGUgZ2l2ZW4gcGFydCB3aXRoaW4gdGhlIGdlYXJzZXRcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaW5kQmVzdEl0ZW0gPSAoZ2VhclNldDogR2VhclNldCwgcGFydDogUGFydCk6IEl0ZW0gPT4ge1xyXG4gIC8vZ2VhclNldC5pdGVtcyBpcyBhbHJlYWR5IHNvcnRlZCBieSByYXRpbmdcclxuICBmb3IgKGxldCBpdGVtIG9mIGdlYXJTZXQuaXRlbXMpIHtcclxuICAgIGlmIChpdGVtLnBhcnQgPT09IHBhcnQpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybiB0aGUgYmVzdCBlbmNoYW50IHdpdGhpbiB0aGUgZ2VhcnNldFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpbmRCZXN0RW5jaGFudCA9IChnZWFyU2V0OiBHZWFyU2V0KTogRW5jaGFudCA9PiB7XHJcbiAgLy9UT0RPIGltcGxlbWVudFxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbGxzIGFsbCBJdGVtIGFuZCBFbmNoYW50IHNsb3RzIHdpdGggdGhlIGJlc3QgcG9zc2libGUgaXRlbS9lbmNoYW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJ1bk9wdGltaXphdGlvbiA9IChnZWFyU2V0OiBHZWFyU2V0KSA9PiB7XHJcbiAgLy9UT0RPIGltcGxlbWVudFxyXG59O1xyXG5cclxuY29uc3QgcmVzZXRJdGVtRXNlID0gKGdlYXJTZXQ6IEdlYXJTZXQsIGl0ZW06IEl0ZW0pID0+IHtcclxuICBmb3IgKGxldCBlZmZlY3RLaW5kIG9mIGVuY2hhbnRLaW5kcykge1xyXG4gICAgaXRlbS5lc2VbZWZmZWN0S2luZF0gPSAwO1xyXG4gIH1cclxuXHJcbiAgYWRkRWZmZWN0c1RvRXNlKGdlYXJTZXQsIGl0ZW0sIGl0ZW0uZWZmZWN0cyk7XHJcbiAgaWYgKGdlYXJTZXQuY29uZmlnLml0ZW0uaW5jbHVkZU1hc3RlcnkpIHtcclxuICAgIGFkZEVmZmVjdHNUb0VzZShnZWFyU2V0LCBpdGVtLCBpdGVtLmxldmVsTWF4RWZmZWN0cyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYWRkRWZmZWN0c1RvRXNlID0gKFxyXG4gIGdlYXJTZXQ6IEdlYXJTZXQsXHJcbiAgb2JqZWN0OiBFc2VPYmplY3QsXHJcbiAgZWZmZWN0czogRWZmZWN0W11cclxuKSA9PiB7XHJcbiAgZm9yIChsZXQgZWZmZWN0IG9mIGVmZmVjdHMpIHtcclxuICAgIGxldCBlbmNoYW50ID0gZ2VhclNldC5lbmNoYW50c01hcC5nZXQoZWZmZWN0LmtpbmQpO1xyXG4gICAgbGV0IGVuY2hhbnRFZmZlY3RWYWx1ZSA9IGVuY2hhbnQubWF4VmFsdWU7XHJcbiAgICBpZiAoZ2VhclNldC5jb25maWcuaXRlbS5sb3R0ZXJ5KSB7XHJcbiAgICAgIGVuY2hhbnRFZmZlY3RWYWx1ZSA9IGVuY2hhbnQubWF4VmFsdWVMb3R0ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtRWZmZWN0VmFsdWUgPVxyXG4gICAgICBlZmZlY3QuaW5pdFZhbHVlICsgZWZmZWN0LmJhc2VWYWx1ZSAqIGdlYXJTZXQuY29uZmlnLml0ZW0uaXRlbUxldmVsO1xyXG5cclxuICAgIGlmIChpdGVtRWZmZWN0VmFsdWUgPCAwICYmIGdlYXJTZXQuY29uZmlnLml0ZW0uY3Vyc2VBbnZpbCkge1xyXG4gICAgICAvL3RoaXMgaXMgYSBjdXJzZWQgZWZmZWN0LCBpZiB3ZSBhZGQgY3Vyc2UgYW52aWxzIGl0IHdpbGwgYmUgbnVsbGlmaWVkXHJcbiAgICAgIGl0ZW1FZmZlY3RWYWx1ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXNlVmFsdWUgPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcbiAgICBvYmplY3QuZXNlW2VmZmVjdC5raW5kXSArPSBlc2VWYWx1ZTtcclxuICAgIG9iamVjdC5lc2VTdW0gKz0gZXNlVmFsdWU7XHJcbiAgICBpZiAoZW5jaGFudC5kaWRQYXNzRmlsdGVyKSB7XHJcbiAgICAgIG9iamVjdC5lc2VbZWZmZWN0LmtpbmRdICs9IGVzZVZhbHVlO1xyXG4gICAgICBvYmplY3QuZXNlRmlsdGVyZWRTdW0gKz0gZXNlVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmlsdGVyQXJyYXlJblBsYWNlID0gPFQ+KGFycjogVFtdLCBjb25kaXRpb246IChlOiBUKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgbGV0IGkgPSAwLFxyXG4gICAgaiA9IDA7XHJcblxyXG4gIHdoaWxlIChpIDwgYXJyLmxlbmd0aCkge1xyXG4gICAgY29uc3QgdmFsID0gYXJyW2ldO1xyXG4gICAgaWYgKGNvbmRpdGlvbih2YWwpKSBhcnJbaisrXSA9IHZhbDtcclxuICAgIGkrKztcclxuICB9XHJcblxyXG4gIGFyci5sZW5ndGggPSBqO1xyXG4gIHJldHVybiBhcnI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VhclNldEl0ZW1DaGFuZ2VkUmVjYWxjQWxsID0gKGdlYXJTZXQ6IEdlYXJTZXQpID0+IHtcclxuICBmb3IgKGxldCBlbmNoYW50S2luZCBvZiBlbmNoYW50S2luZHMpIHtcclxuICAgIGdlYXJTZXQuZXNlW2VuY2hhbnRLaW5kXSA9IDA7XHJcbiAgICBnZWFyU2V0LmVzZVN1bSA9IDA7XHJcbiAgICBnZWFyU2V0LmVzZVtlbmNoYW50S2luZF0gPSAwO1xyXG4gICAgZ2VhclNldC5lc2VGaWx0ZXJlZFN1bSA9IDA7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IHNldEtpbmQgb2Ygc2V0S2luZHMpIHtcclxuICAgIGNvbnN0IGl0ZW1TZXQgPSBnZWFyU2V0Lml0ZW1TZXRzW3NldEtpbmRdO1xyXG4gICAgaXRlbVNldC5hY3RpdmVJdGVtcyA9IHt9O1xyXG4gICAgaXRlbVNldC5hY3RpdmVDb3VudCA9IDA7XHJcbiAgICBpdGVtU2V0LmFjdGl2ZU11bHRpcGxpZXIgPSAxO1xyXG4gIH1cclxuICBmb3IgKGxldCBwYXJ0IGluIGdlYXJTZXQuZXF1aXBwZWRJdGVtcykge1xyXG4gICAgZm9yIChsZXQgaXRlbUtpbmQgb2YgZ2VhclNldC5lcXVpcHBlZEl0ZW1zW3BhcnRdKSB7XHJcbiAgICAgIGlmIChpdGVtS2luZCA9PT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXRlbSA9IGdlYXJTZXQuaXRlbXNNYXAuZ2V0KGl0ZW1LaW5kKTtcclxuICAgICAgY29uc3Qgc2V0S2luZCA9IGl0ZW0uc2V0S2luZDtcclxuICAgICAgaWYgKHNldEtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1TZXQgPSBnZWFyU2V0Lml0ZW1TZXRzW3NldEtpbmRdO1xyXG4gICAgICBpZiAoIWl0ZW1TZXQuYWN0aXZlSXRlbXNbaXRlbUtpbmRdKSB7XHJcbiAgICAgICAgaXRlbVNldC5hY3RpdmVJdGVtc1tpdGVtS2luZF0gPSB0cnVlO1xyXG4gICAgICAgIGl0ZW1TZXQuYWN0aXZlQ291bnQgKz0gMTtcclxuICAgICAgICBpdGVtU2V0LmFjdGl2ZU11bHRpcGxpZXIgPSBzZXRJdGVtc0VmZmVjdE11bHRbaXRlbVNldC5hY3RpdmVDb3VudF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IHBhcnQgaW4gZ2VhclNldC5lcXVpcHBlZEl0ZW1zKSB7XHJcbiAgICBmb3IgKGxldCBpdGVtS2luZCBvZiBnZWFyU2V0LmVxdWlwcGVkSXRlbXNbcGFydF0pIHtcclxuICAgICAgaWYgKGl0ZW1LaW5kID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBnZWFyU2V0Lml0ZW1zTWFwLmdldChpdGVtS2luZCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZXQgPSBnZWFyU2V0Lml0ZW1TZXRzW2l0ZW0uc2V0S2luZF07XHJcbiAgICAgIGZvciAobGV0IGVuY2hhbnRLaW5kIG9mIGVuY2hhbnRLaW5kcykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5lc2VbZW5jaGFudEtpbmRdICogaXRlbVNldC5hY3RpdmVNdWx0aXBsaWVyO1xyXG5cclxuICAgICAgICBnZWFyU2V0LmVzZVtlbmNoYW50S2luZF0gKz0gdmFsdWU7XHJcbiAgICAgICAgZ2VhclNldC5lc2VTdW0gKz0gdmFsdWU7XHJcbiAgICAgICAgY29uc3QgZW5jaGFudCA9IGdlYXJTZXQuZW5jaGFudHNNYXAuZ2V0KGVuY2hhbnRLaW5kKTtcclxuICAgICAgICBpZiAoZW5jaGFudC5kaWRQYXNzRmlsdGVyKSB7XHJcbiAgICAgICAgICBnZWFyU2V0LmVzZVtlbmNoYW50S2luZF0gKz0gdmFsdWU7XHJcbiAgICAgICAgICBnZWFyU2V0LmVzZUZpbHRlcmVkU3VtICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ID0gMDtcclxuICBsZXQgZXF1aXBwZWRJdGVtQ291bnQgPSAwO1xyXG4gIGZvciAobGV0IHBhcnQgaW4gZ2VhclNldC5lcXVpcHBlZEl0ZW1zKSB7XHJcbiAgICBmb3IgKGxldCBpdGVtS2luZCBvZiBnZWFyU2V0LmVxdWlwcGVkSXRlbXNbcGFydF0pIHtcclxuICAgICAgZXF1aXBwZWRJdGVtQ291bnQrKztcclxuXHJcbiAgICAgIGlmIChpdGVtS2luZCA9PT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXRlbSA9IGdlYXJTZXQuaXRlbXNNYXAuZ2V0KGl0ZW1LaW5kKTtcclxuICAgICAgY29uc3Qgc2V0S2luZCA9IGl0ZW0uc2V0S2luZDtcclxuICAgICAgaWYgKHNldEtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1TZXQgPSBnZWFyU2V0Lml0ZW1TZXRzW3NldEtpbmRdO1xyXG4gICAgICBpdGVtU2V0LmFjdGl2ZU11bHRpcGxpZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChlcXVpcHBlZEl0ZW1Db3VudCA+IDApIHtcclxuICAgIGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ID0gYXZlcmFnZVNldEVmZmVjdE11bHQgLyBlcXVpcHBlZEl0ZW1Db3VudDtcclxuICB9IGVsc2Uge1xyXG4gICAgYXZlcmFnZVNldEVmZmVjdE11bHQgPSAxO1xyXG4gIH1cclxuICBmb3IgKGxldCBlbmNoYW50S2luZCBvZiBnZWFyU2V0LmVxdWlwcGVkRW5jaGFudHMpIHtcclxuICAgIGNvbnN0IGVuY2hhbnQgPSBnZWFyU2V0LmVuY2hhbnRzTWFwLmdldChlbmNoYW50S2luZCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGF2ZXJhZ2VTZXRFZmZlY3RNdWx0O1xyXG5cclxuICAgIGdlYXJTZXQuZXNlW2VuY2hhbnRLaW5kXSArPSB2YWx1ZTtcclxuICAgIGdlYXJTZXQuZXNlU3VtICs9IHZhbHVlO1xyXG4gICAgaWYgKGVuY2hhbnQuZGlkUGFzc0ZpbHRlcikge1xyXG4gICAgICBnZWFyU2V0LmVzZVtlbmNoYW50S2luZF0gKz0gdmFsdWU7XHJcbiAgICAgIGdlYXJTZXQuZXNlRmlsdGVyZWRTdW0gKz0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByYXRlRWZmZWN0cyhnZWFyU2V0LCBnZWFyU2V0LmVzZSwgZ2VhclNldC5yYXRpbmcpO1xyXG5cclxuICB1cGRhdGVBbGxFbmNoYW50UmF0aW5nKGdlYXJTZXQpO1xyXG5cclxuICB1cGRhdGVBbGxJdGVtUmF0aW5nKGdlYXJTZXQpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlQWxsRW5jaGFudFJhdGluZyA9IChnZWFyU2V0OiBHZWFyU2V0KSA9PiB7XHJcbiAgLy9UT0RPIGltcGxlbWVudFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHVwZGF0ZXMgSXRlbS5yYXRpbmdcclxuICovXHJcbmNvbnN0IHVwZGF0ZUFsbEl0ZW1SYXRpbmcgPSAoZ2VhclNldDogR2VhclNldCkgPT4ge1xyXG4gIC8vVE9ETyB0ZW1wb3JhcnkgZmlsbCBhbGwgZW5jaGFudHMgd2l0aCB0aGUgYmVzdCBlbmNoYW50IGJlZm9yZSByYXRpbmcgZ2VhclxyXG5cclxuICBmb3IgKGxldCBbaXRlbUtpbmQsIGl0ZW1dIG9mIGdlYXJTZXQuaXRlbXNNYXApIHtcclxuICAgIHVwZGF0ZUl0ZW1SYXRpbmcoZ2VhclNldCwgaXRlbSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBzZXRLaW5kIGluIGdlYXJTZXQuaXRlbVNldHMpIHtcclxuICAgIGdlYXJTZXQuaXRlbVNldHNbc2V0S2luZCBhcyBTZXRLaW5kXS5uZXdTZXRJdGVtQm9udXNSYXRpbmcgPSB7XHJcbiAgICAgIC4uLmRlZmF1bHRSYXRpbmcsXHJcbiAgICB9O1xyXG4gIH1cclxuICBmb3IgKGxldCBwYXJ0IGluIGdlYXJTZXQuZXF1aXBwZWRJdGVtcykge1xyXG4gICAgZm9yIChsZXQgaXRlbUtpbmQgb2YgZ2VhclNldC5lcXVpcHBlZEl0ZW1zW3BhcnQgYXMgUGFydF0pIHtcclxuICAgICAgaWYgKGl0ZW1LaW5kID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBnZWFyU2V0Lml0ZW1zTWFwLmdldChpdGVtS2luZCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1TZXQgPSBnZWFyU2V0Lml0ZW1TZXRzW2l0ZW0uc2V0S2luZF07XHJcbiAgICAgIGZvciAobGV0IHJhdGluZ0tleSBpbiBpdGVtLnJhdGluZykge1xyXG4gICAgICAgIGl0ZW1TZXQubmV3U2V0SXRlbUJvbnVzUmF0aW5nW3JhdGluZ0tleV0gKz1cclxuICAgICAgICAgIGl0ZW0ucmF0aW5nW3JhdGluZ0tleV0gKiBnZWFyU2V0LmNvbmZpZy5pdGVtLnNldEJpYXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgaXRlbSBvZiBnZWFyU2V0Lml0ZW1zKSB7XHJcbiAgICBjb25zdCBpdGVtU2V0ID0gZ2VhclNldC5pdGVtU2V0c1tpdGVtLnNldEtpbmRdO1xyXG4gICAgLy9pZiBnZWFyU2V0IGlzIGEgbmV3IHNldCBpdGVtLCBhZGQgdGhlIHZhbHVlIG9mIHRoZSBvdGhlciBpdGVtcyBhdG9wIG9mIGl0XHJcbiAgICBpZiAoIWl0ZW1TZXQuYWN0aXZlSXRlbXNbaXRlbS5raW5kXSkge1xyXG4gICAgICBmb3IgKGxldCByYXRpbmdLZXkgaW4gaXRlbS5yYXRpbmcpIHtcclxuICAgICAgICBpdGVtLnJhdGluZ1tyYXRpbmdLZXldICs9IGl0ZW1TZXQubmV3U2V0SXRlbUJvbnVzUmF0aW5nW3JhdGluZ0tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlYXJTZXQuaXRlbXMuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcuZHBzIC0gYS5yYXRpbmcuZHBzKTtcclxuXHJcbiAgLy9UT0RPIHJldmVydCB0aGUgZW5jaGFudHNcclxuXHJcbiAgZ2VhclNldC5ldmVudHMuZW1pdChcIml0ZW1SYXRpbmdVcGRhdGVkXCIpO1xyXG59O1xyXG5cclxuLy92YXJpYWJsZSB0byBhdm9pZCBjcmVhdGluZyBhIG5ldyBvYmplY3QgZXZlcnkgdGltZVxyXG5jb25zdCB1cGRhdGVJdGVtUmF0aW5nRWZmZWN0VGVtcDogRWZmZWN0VmFsdWVzID0ge1xyXG4gIC4uLmRlZmF1bHRFZmZlY3RWYWx1ZXMsXHJcbn07XHJcbi8qKlxyXG4gKiB1cGRhdGUgdGhlIGl0ZW0gcmF0aW5nIHdpdGhpbiB0aGUgZ2VhcnNldFxyXG4gKi9cclxuY29uc3QgdXBkYXRlSXRlbVJhdGluZyA9IChnZWFyU2V0OiBHZWFyU2V0LCBpdGVtOiBJdGVtKSA9PiB7XHJcbiAgY29uc3QgaXRlbVNldCA9IGdlYXJTZXQuaXRlbVNldHNbaXRlbS5zZXRLaW5kXTtcclxuICBjb25zdCBzZXRNdWx0aXBsaWVyID0gaXRlbVNldC5hY3RpdmVNdWx0aXBsaWVyO1xyXG4gIGZvciAobGV0IGVuY2hhbnRLaW5kIG9mIGVuY2hhbnRLaW5kcykge1xyXG4gICAgdXBkYXRlSXRlbVJhdGluZ0VmZmVjdFRlbXBbZW5jaGFudEtpbmRdID1cclxuICAgICAgZ2VhclNldC5lc2VbZW5jaGFudEtpbmRdICsgKGl0ZW0uZXNlW2VuY2hhbnRLaW5kXSAqIHNldE11bHRpcGxpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmF0ZUVmZmVjdHMoZ2VhclNldCwgdXBkYXRlSXRlbVJhdGluZ0VmZmVjdFRlbXAsIGl0ZW0ucmF0aW5nKTtcclxufTtcclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiLi9FdmVudEVtaXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmNoYW50S2luZHMgPSBbXHJcbiAgXCJOb3RoaW5nXCIsIC8vYWRkcyBhbiBlbXB0eSBlbmNoYW50IHNsb3RcclxuICBcIkhQQWRkZXJcIixcclxuICBcIk1QQWRkZXJcIixcclxuICBcIkFUS0FkZGVyXCIsXHJcbiAgXCJNQVRLQWRkZXJcIixcclxuICBcIkRFRkFkZGVyXCIsXHJcbiAgXCJNREVGQWRkZXJcIixcclxuICBcIlNQREFkZGVyXCIsXHJcbiAgXCJIUE11bHRpcGxpZXJcIixcclxuICBcIk1QTXVsdGlwbGllclwiLFxyXG4gIFwiQVRLTXVsdGlwbGllclwiLFxyXG4gIFwiTUFUS011bHRpcGxpZXJcIixcclxuICBcIkRFRk11bHRpcGxpZXJcIixcclxuICBcIk1ERUZNdWx0aXBsaWVyXCIsXHJcbiAgXCJBVEtQcm9wb3Rpb25cIixcclxuICBcIk1BVEtQcm9wb3Rpb25cIixcclxuICBcIkRFRlByb3BvdGlvblwiLFxyXG4gIFwiTURFRlByb3BvdGlvblwiLFxyXG4gIFwiRmlyZVJlc2lzdGFuY2VcIixcclxuICBcIkljZVJlc2lzdGFuY2VcIixcclxuICBcIlRodW5kZXJSZXNpc3RhbmNlXCIsXHJcbiAgXCJMaWdodFJlc2lzdGFuY2VcIixcclxuICBcIkRhcmtSZXNpc3RhbmNlXCIsXHJcbiAgXCJQaHlzaWNhbEFic29ycHRpb25cIixcclxuICBcIkZpcmVBYnNvcnB0aW9uXCIsXHJcbiAgXCJJY2VBYnNvcnB0aW9uXCIsXHJcbiAgXCJUaHVuZGVyQWJzb3JwdGlvblwiLFxyXG4gIFwiTGlnaHRBYnNvcnB0aW9uXCIsXHJcbiAgXCJEYXJrQWJzb3JwdGlvblwiLFxyXG4gIFwiRGVidWZmUmVzaXN0YW5jZVwiLFxyXG4gIFwiRXF1aXBtZW50RHJvcENoYW5jZVwiLFxyXG4gIFwiU2xpbWVEcm9wQ2hhbmNlXCIsXHJcbiAgXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiLFxyXG4gIFwiU3BpZGVyRHJvcENoYW5jZVwiLFxyXG4gIFwiQmF0RHJvcENoYW5jZVwiLFxyXG4gIFwiRmFpcnlEcm9wQ2hhbmNlXCIsXHJcbiAgXCJGb3hEcm9wQ2hhbmNlXCIsXHJcbiAgXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCIsXHJcbiAgXCJUcmVhbnREcm9wQ2hhbmNlXCIsXHJcbiAgXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiLFxyXG4gIFwiVW5pY29ybkRyb3BDaGFuY2VcIixcclxuICBcIkNvbG9yTWF0ZXJpYWxEcm9wQ2hhbmNlXCIsXHJcbiAgXCJQaHlzaWNhbENyaXRpY2FsXCIsXHJcbiAgXCJNYWdpY2FsQ3JpdGljYWxcIixcclxuICBcIkVYUEdhaW5cIixcclxuICBcIlNraWxsUHJvZmljaWVuY3lcIixcclxuICBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIsXHJcbiAgXCJNb3ZlU3BlZWRNdWx0aXBsaWVyXCIsXHJcbiAgXCJHb2xkR2FpblwiLFxyXG4gIFwiU3RvbmVHYWluXCIsXHJcbiAgXCJDcnlzdGFsR2FpblwiLFxyXG4gIFwiTGVhZkdhaW5cIixcclxuICBcIldhcnJpb3JTa2lsbExldmVsXCIsXHJcbiAgXCJXaXphcmRTa2lsbExldmVsXCIsXHJcbiAgXCJBbmdlbFNraWxsTGV2ZWxcIixcclxuICBcIlRoaWVmU2tpbGxMZXZlbFwiLFxyXG4gIFwiQXJjaGVyU2tpbGxMZXZlbFwiLFxyXG4gIFwiVGFtZXJTa2lsbExldmVsXCIsXHJcbiAgXCJBbGxTa2lsbExldmVsXCIsXHJcbiAgXCJTbGltZUtub3dsZWRnZVwiLFxyXG4gIFwiTWFnaWNTbGltZUtub3dsZWRnZVwiLFxyXG4gIFwiU3BpZGVyS25vd2xlZGdlXCIsXHJcbiAgXCJCYXRLbm93bGVkZ2VcIixcclxuICBcIkZhaXJ5S25vd2xlZGdlXCIsXHJcbiAgXCJGb3hLbm93bGVkZ2VcIixcclxuICBcIkRldmlsRmlzaEtub3dsZWRnZVwiLFxyXG4gIFwiVHJlYW50S25vd2xlZGdlXCIsXHJcbiAgXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIsXHJcbiAgXCJVbmljb3JuS25vd2xlZGdlXCIsXHJcbiAgXCJQaHlzaWNhbERhbWFnZVwiLFxyXG4gIFwiRmlyZURhbWFnZVwiLFxyXG4gIFwiSWNlRGFtYWdlXCIsXHJcbiAgXCJUaHVuZGVyRGFtYWdlXCIsXHJcbiAgXCJMaWdodERhbWFnZVwiLFxyXG4gIFwiRGFya0RhbWFnZVwiLFxyXG4gIFwiSHBSZWdlblwiLFxyXG4gIFwiTXBSZWdlblwiLFxyXG4gIFwiVGFtaW5nUG9pbnRcIixcclxuICBcIldhcnJpb3JTa2lsbFJhbmdlXCIsXHJcbiAgXCJXaXphcmRTa2lsbFJhbmdlXCIsXHJcbiAgXCJBbmdlbFNraWxsUmFuZ2VcIixcclxuICBcIlRoaWVmU2tpbGxSYW5nZVwiLFxyXG4gIFwiQXJjaGVyU2tpbGxSYW5nZVwiLFxyXG4gIFwiVGFtZXJTa2lsbFJhbmdlXCIsXHJcbiAgXCJUb3duTWF0R2FpblwiLFxyXG4gIFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIixcclxuICBcIlJlYmlydGhQb2ludEdhaW4xXCIsXHJcbiAgXCJSZWJpcnRoUG9pbnRHYWluMlwiLFxyXG4gIFwiUmViaXJ0aFBvaW50R2FpbjNcIixcclxuICBcIkNyaXRpY2FsRGFtYWdlXCIsXHJcbiAgXCJCbGVzc2luZ0VmZmVjdFwiLFxyXG4gIFwiTW92ZVNwZWVkQWRkZXJcIixcclxuICBcIlBldEVYUEdhaW5cIixcclxuICBcIkxveWFsdHlQb2ludEdhaW5cIixcclxuICBcIkNhdGFseXN0RG91YmxlQ3JpdGljYWxDaGFuY2VcIixcclxuICBcIldhcnJpb3JTa2lsbEVmZmVjdFJhbmdlXCIsXHJcbiAgXCJXaXphcmRTa2lsbEVmZmVjdFJhbmdlXCIsXHJcbiAgXCJBbmdlbFNraWxsRWZmZWN0UmFuZ2VcIixcclxuICBcIlRoaWVmU2tpbGxFZmZlY3RSYW5nZVwiLFxyXG4gIFwiQXJjaGVyU2tpbGxFZmZlY3RSYW5nZVwiLFxyXG4gIFwiVGFtZXJTa2lsbEVmZmVjdFJhbmdlXCIsXHJcbiAgXCJIcFJlZ2VuTXVsdGlwbGllclwiLFxyXG4gIFwiTXBSZWdlbk11bHRpcGxpZXJcIixcclxuICBcIkFybW9yZWRGdXJ5XCIsXHJcbiAgXCJXYXJkZWRGdXJ5XCIsXHJcbiAgXCJQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlXCIsXHJcbiAgXCJQZXRNYWdpY2FsQ3JpdGljYWxDaGFuY2VcIixcclxuICBcIlBldENyaXRpY2FsRGFtYWdlXCIsXHJcbiAgXCJQZXREZWJ1ZmZSZXNpc3RhbmNlXCIsXHJcbiAgXCJTdG9uZVRvd25SZXNlYXJjaFBvd2VyXCIsXHJcbiAgXCJDcnlzdGFsVG93blJlc2VhcmNoUG93ZXJcIixcclxuICBcIkxlYWZUb3duUmVzZWFyY2hQb3dlclwiLFxyXG4gIFwiR3VpbGRFWFBHYWluXCIsXHJcbiAgXCJTUERNdWx0aXBsaWVyXCIsXHJcbiAgXCJDcml0aWNhbERhbWFnZU11bHRpcGxpZXJcIixcclxuICBcIlNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyXCIsXHJcbiAgXCJFcXVpcG1lbnRQcm9maWNpZW5jeU11bHRpcGxpZXJcIixcclxuICBcIkVYUEdhaW5NdWx0aXBsaWVyXCIsXHJcbiAgXCJHb2xkR2Fpbk11bHRpcGxpZXJcIixcclxuICBcIlBoeXNpY2FsRGFtYWdlTXVsdGlwbGllclwiLFxyXG4gIFwiRmlyZURhbWFnZU11bHRpcGxpZXJcIixcclxuICBcIkljZURhbWFnZU11bHRpcGxpZXJcIixcclxuICBcIlRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyXCIsXHJcbiAgXCJMaWdodERhbWFnZU11bHRpcGxpZXJcIixcclxuICBcIkRhcmtEYW1hZ2VNdWx0aXBsaWVyXCIsXHJcbiAgXCJUYW1pbmdQb2ludE11bHRpcGxpZXJcIixcclxuICBcIlBldEVYUEdhaW5NdWx0aXBsaWVyXCIsXHJcbiAgXCJMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllclwiLFxyXG4gIFwiQmxlc3NpbmdFZmZlY3RNdWx0aXBsaWVyXCIsXHJcbiAgXCJQaHlzaWNhbENyaXRpY2FsTXVsdGlwbGllclwiLFxyXG4gIFwiTWFnaWNhbENyaXRpY2FsTXVsdGlwbGllclwiLFxyXG5dIGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBFbmNoYW50S2luZCA9ICh0eXBlb2YgZW5jaGFudEtpbmRzKVtudW1iZXJdO1xyXG5leHBvcnQgY29uc3QgaXRlbUtpbmRzID0gW1xyXG4gIFwiTm90aGluZ1wiLFxyXG4gIFwiRHVsbFN3b3JkXCIsXHJcbiAgXCJCcml0dGxlU3RhZmZcIixcclxuICBcIkZsaW1zeVdpbmdcIixcclxuICBcIldvcm5EYXJ0XCIsXHJcbiAgXCJTbWFsbEJvd1wiLFxyXG4gIFwiV29vZGVuUmVjb3JkZXJcIixcclxuICBcIk9sZENsb2FrXCIsXHJcbiAgXCJCbHVlSGF0XCIsXHJcbiAgXCJPcmFuZ2VIYXRcIixcclxuICBcIlRTaGlydFwiLFxyXG4gIFwiQ2xvdGhHbG92ZVwiLFxyXG4gIFwiQmx1ZVRTaGlydFwiLFxyXG4gIFwiT3JhbmdlVFNoaXJ0XCIsXHJcbiAgXCJDbG90aEJlbHRcIixcclxuICBcIkNsb3RoU2hvZXNcIixcclxuICBcIklyb25SaW5nXCIsXHJcbiAgXCJQZWFybEVhcnJpbmdcIixcclxuICBcIkZpcmVCcm9vY2hcIixcclxuICBcIkljZUJyb29jaFwiLFxyXG4gIFwiVGh1bmRlckJyb29jaFwiLFxyXG4gIFwiTGlnaHRCcm9vY2hcIixcclxuICBcIkRhcmtCcm9vY2hcIixcclxuICBcIldvb2RlblNoaWVsZFwiLFxyXG4gIFwiTG9uZ1N3b3JkXCIsXHJcbiAgXCJMb25nU3RhZmZcIixcclxuICBcIldhcm1XaW5nXCIsXHJcbiAgXCJEdWFsRGFnZ2VyXCIsXHJcbiAgXCJSZWluZm9yY2VkQm93XCIsXHJcbiAgXCJGbHV0ZVwiLFxyXG4gIFwiRmlyZVN0YWZmXCIsXHJcbiAgXCJJY2VTdGFmZlwiLFxyXG4gIFwiVGh1bmRlclN0YWZmXCIsXHJcbiAgXCJMZWF0aGVyQmVsdFwiLFxyXG4gIFwiTGVhdGhlclNob2VzXCIsXHJcbiAgXCJXYXJtQ2xvYWtcIixcclxuICBcIkxlYXRoZXJBcm1vclwiLFxyXG4gIFwiTGVhdGhlckdsb3ZlXCIsXHJcbiAgXCJMZWF0aGVyU2hpZWxkXCIsXHJcbiAgXCJGaXJlUmluZ1wiLFxyXG4gIFwiSWNlUmluZ1wiLFxyXG4gIFwiVGh1bmRlclJpbmdcIixcclxuICBcIkxpZ2h0UmluZ1wiLFxyXG4gIFwiRGFya1JpbmdcIixcclxuICBcIkVuaGFuY2VkRmlyZUJyb29jaFwiLFxyXG4gIFwiRW5oYW5jZWRJY2VCcm9vY2hcIixcclxuICBcIkVuaGFuY2VkVGh1bmRlckJyb29jaFwiLFxyXG4gIFwiRW5oYW5jZWRMaWdodEJyb29jaFwiLFxyXG4gIFwiRW5oYW5jZWREYXJrQnJvb2NoXCIsXHJcbiAgXCJCYXR0bGVTd29yZFwiLFxyXG4gIFwiQmF0dGxlU3RhZmZcIixcclxuICBcIkJhdHRsZVdpbmdcIixcclxuICBcIkJhdHRsZURhZ2dlclwiLFxyXG4gIFwiQmF0dGxlQm93XCIsXHJcbiAgXCJCYXR0bGVSZWNvcmRlclwiLFxyXG4gIFwiU2xpbWVTd29yZFwiLFxyXG4gIFwiU2xpbWVHbG92ZVwiLFxyXG4gIFwiU2xpbWVSaW5nXCIsXHJcbiAgXCJTbGltZUJlbHRcIixcclxuICBcIlNsaW1lUGluY2VuZXpcIixcclxuICBcIlNsaW1lV2luZ1wiLFxyXG4gIFwiU2xpbWVQb25jaG9cIixcclxuICBcIlNsaW1lRGFydFwiLFxyXG4gIFwiTWFnaWNTbGltZVN0aWNrXCIsXHJcbiAgXCJNYWdpY1NsaW1lSGF0XCIsXHJcbiAgXCJNYWdpY1NsaW1lQm93XCIsXHJcbiAgXCJNYWdpY1NsaW1lU2hvZXNcIixcclxuICBcIk1hZ2ljU2xpbWVSZWNvcmRlclwiLFxyXG4gIFwiTWFnaWNTbGltZUVhcnJpbmdcIixcclxuICBcIk1hZ2ljU2xpbWVCYWxsb29uXCIsXHJcbiAgXCJNYWdpY1NsaW1lU2tpcnRcIixcclxuICBcIlNwaWRlckhhdFwiLFxyXG4gIFwiU3BpZGVyU2tpcnRcIixcclxuICBcIlNwaWRlclN1aXRcIixcclxuICBcIlNwaWRlckRhZ2dlclwiLFxyXG4gIFwiU3BpZGVyV2luZ1wiLFxyXG4gIFwiU3BpZGVyQ2F0Y2hpbmdOZXRcIixcclxuICBcIlNwaWRlclN0aWNrXCIsXHJcbiAgXCJTcGlkZXJGb2xkaW5nRmFuXCIsXHJcbiAgXCJCYXRSaW5nXCIsXHJcbiAgXCJCYXRTaG9lc1wiLFxyXG4gIFwiQmF0U3dvcmRcIixcclxuICBcIkJhdEhhdFwiLFxyXG4gIFwiQmF0UmVjb3JkZXJcIixcclxuICBcIkJhdEJvd1wiLFxyXG4gIFwiQmF0TWFzY2FyYWRlTWFza1wiLFxyXG4gIFwiQmF0Q2xvYWtcIixcclxuICBcIkJyb256ZVNob3VsZGVyXCIsXHJcbiAgXCJCYXR0bGVSaW5nXCIsXHJcbiAgXCJIYWxvXCIsXHJcbiAgXCJJcm9uU2hvdWxkZXJcIixcclxuICBcIlN0cmVuZ3RoUmluZ1wiLFxyXG4gIFwiR29sZGVuUmluZ1wiLFxyXG4gIFwiR29sZGVuRmlyZVJpbmdcIixcclxuICBcIkdvbGRlbkljZVJpbmdcIixcclxuICBcIkdvbGRlblRodW5kZXJSaW5nXCIsXHJcbiAgXCJHb2xkZW5MaWdodFJpbmdcIixcclxuICBcIkdvbGRlbkRhcmtSaW5nXCIsXHJcbiAgXCJJcm9uQmVsdFwiLFxyXG4gIFwiSXJvblNob2VzXCIsXHJcbiAgXCJDb3BwZXJBcm1vclwiLFxyXG4gIFwiSXJvbkdsb3ZlXCIsXHJcbiAgXCJUb3dlclNoaWVsZFwiLFxyXG4gIFwiRmlyZVRvd2VyU2hpZWxkXCIsXHJcbiAgXCJJY2VUb3dlclNoaWVsZFwiLFxyXG4gIFwiVGh1bmRlclRvd2VyU2hpZWxkXCIsXHJcbiAgXCJMaWdodFRvd2VyU2hpZWxkXCIsXHJcbiAgXCJEYXJrVG93ZXJTaGllbGRcIixcclxuICBcIlNhdmFnZVJpbmdcIixcclxuICBcIlNwZWxsYm91bmRGaXJlQnJvb2NoXCIsXHJcbiAgXCJTcGVsbGJvdW5kSWNlQnJvb2NoXCIsXHJcbiAgXCJTcGVsbGJvdW5kVGh1bmRlckJyb29jaFwiLFxyXG4gIFwiU3BlbGxib3VuZExpZ2h0QnJvb2NoXCIsXHJcbiAgXCJTcGVsbGJvdW5kRGFya0Jyb29jaFwiLFxyXG4gIFwiQ29wcGVySGVsbVwiLFxyXG4gIFwiQmF0dGxlSGVsbVwiLFxyXG4gIFwiV2l6YXJkSGVsbVwiLFxyXG4gIFwiTGFyZ2VTd29yZFwiLFxyXG4gIFwiTGFyZ2VTdGFmZlwiLFxyXG4gIFwiTGFyZ2VXaW5nXCIsXHJcbiAgXCJMYXJnZURhZ2dlclwiLFxyXG4gIFwiTGFyZ2VCb3dcIixcclxuICBcIkxhcmdlT2NhcmluYVwiLFxyXG4gIFwiRmFpcnlDbG90aGVzXCIsXHJcbiAgXCJGYWlyeVN0YWZmXCIsXHJcbiAgXCJGYWlyeUJvb3RzXCIsXHJcbiAgXCJGYWlyeUdsb3ZlXCIsXHJcbiAgXCJGYWlyeUJyb29jaFwiLFxyXG4gIFwiRmFpcnlMYW1wXCIsXHJcbiAgXCJGYWlyeVdpbmdcIixcclxuICBcIkZhaXJ5U2h1cmlrZW5cIixcclxuICBcIkZveEthbnphc2hpXCIsXHJcbiAgXCJGb3hMb2luY2xvdGhcIixcclxuICBcIkZveE1hc2tcIixcclxuICBcIkZveEhhbWF5YXl1bWlcIixcclxuICBcIkZveEhhdFwiLFxyXG4gIFwiRm94Q29hdFwiLFxyXG4gIFwiRm94Qm9vdFwiLFxyXG4gIFwiRm94RW1hXCIsXHJcbiAgXCJEZXZpbGZpc2hTd29yZFwiLFxyXG4gIFwiRGV2aWxmaXNoV2luZ1wiLFxyXG4gIFwiRGV2aWxmaXNoUmVjb3JkZXJcIixcclxuICBcIkRldmlsZmlzaEFybW9yXCIsXHJcbiAgXCJEZXZpbGZpc2hTY2FyZlwiLFxyXG4gIFwiRGV2aWxmaXNoR2lsbFwiLFxyXG4gIFwiRGV2aWxmaXNoUGVuZGFudFwiLFxyXG4gIFwiRGV2aWxmaXNoUmluZ1wiLFxyXG4gIFwiVHJlYW50QW11bGV0XCIsXHJcbiAgXCJUcmVhbnRIYWdvaXRhXCIsXHJcbiAgXCJUcmVhbnRDaG9wcGluZ0JvYXJkXCIsXHJcbiAgXCJUcmVhbnREYWdnZXJcIixcclxuICBcIlRyZWFudEhhbml3YVwiLFxyXG4gIFwiVHJlYW50S29rZXNoaVwiLFxyXG4gIFwiVHJlYW50TGFtcFwiLFxyXG4gIFwiVHJlYW50THVuY2hib3hcIixcclxuICBcIkZsYW1ldGlnZXJQb3J0YWJsZUhvdFNwcmluZ1wiLFxyXG4gIFwiRmxhbWV0aWdlclZvbGNhbmljU2hpZWxkXCIsXHJcbiAgXCJGbGFtZXRpZ2VyU3RyaXBlZEJyaWVmc1wiLFxyXG4gIFwiVG9yY2hPZkV2ZXJidXJuaW5nRmxhbWV0aWdlclwiLFxyXG4gIFwiRmxhbWV0aWdlckNvc3R1bWVcIixcclxuICBcIlJpbmdPZkZsYW1ldGlnZXJzV3JhdGhcIixcclxuICBcIkVuZGxlc3NCb3dsT2ZTcGljeUZsYW1ldGlnZXJSYW1lblwiLFxyXG4gIFwiU2NyZWVuT2ZUaGVTbmVha3lGbGFtZXRpZ2VyXCIsXHJcbl0gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIEl0ZW1LaW5kID0gKHR5cGVvZiBpdGVtS2luZHMpW251bWJlcl07XHJcbmV4cG9ydCBjb25zdCBzZXRLaW5kcyA9IFtcclxuICBcIk5vdGhpbmdcIixcclxuICBcIlNsaW1lXCIsXHJcbiAgXCJNYWdpY3NsaW1lXCIsXHJcbiAgXCJTcGlkZXJcIixcclxuICBcIkJhdFwiLFxyXG4gIFwiRmFpcnlcIixcclxuICBcIkZveFwiLFxyXG4gIFwiRGV2aWxmaXNoXCIsXHJcbiAgXCJUcmVhbnRcIixcclxuICBcIkZsYW1ldGlnZXJcIixcclxuXSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgU2V0S2luZCA9ICh0eXBlb2Ygc2V0S2luZHMpW251bWJlcl07XHJcbmV4cG9ydCBjb25zdCBwYXJ0cyA9IFtcIldlYXBvblwiLCBcIkFybW9yXCIsIFwiSmV3ZWxyeVwiXSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgUGFydCA9ICh0eXBlb2YgcGFydHMpW251bWJlcl07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVuY2hhbnQge1xyXG4gIGtpbmQ6IEVuY2hhbnRLaW5kO1xyXG4gIGRpZFBhc3NGaWx0ZXI6IGJvb2xlYW47IC8vd2V0aGVyIHRoaXMgZW5jaGFudCBwYXNzZWQgdGhlIGZpbHRlclxyXG4gIG1heExldmVsOiBudW1iZXI7XHJcbiAgbWF4VmFsdWU6IG51bWJlcjtcclxuICBtYXhWYWx1ZUxvdHRlcnk6IG51bWJlcjtcclxuICByYXRpbmc6IFJhdGluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZmZlY3Qge1xyXG4gIGtpbmQ6IEVuY2hhbnRLaW5kO1xyXG4gIGJhc2VWYWx1ZTogbnVtYmVyO1xyXG4gIGluaXRWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG4vL2Egb2JqZWN0IG9mIGNvbWJpbmVkIGVmZmVjdCB2YWx1ZXMsIHVzdWFsbHkgY29udmVydGVkIHRvIGVzZVxyXG5leHBvcnQgdHlwZSBFZmZlY3RWYWx1ZXMgPSB7XHJcbiAgW2VmZmVjdEtpbmQgaW4gRW5jaGFudEtpbmRdOiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJhdGluZyB7XHJcbiAgZHBzOiBudW1iZXI7XHJcbiAgZ2FpbnM6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVzZU9iamVjdCB7XHJcbiAgZXNlOiBFZmZlY3RWYWx1ZXM7XHJcbiAgZXNlU3VtOiBudW1iZXI7XHJcbiAgZXNlRmlsdGVyZWQ6IEVmZmVjdFZhbHVlcztcclxuICBlc2VGaWx0ZXJlZFN1bTogbnVtYmVyO1xyXG4gIHJhdGluZzogUmF0aW5nOyAvL3RvdGFsIHJhdGluZyBmb3IgYSBzZXQsIG9yIGhvdyBtdWNoIGEgaXRlbSB3b3VsZCBhZGQgZm9yIGFuIGl0ZW1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSXRlbSA9IEVzZU9iamVjdCAmIHtcclxuICBraW5kOiBJdGVtS2luZDtcclxuICBkaWRQYXNzRmlsdGVyOiBib29sZWFuOyAvL3dldGhlciB0aGlzIGVuY2hhbnQgcGFzc2VkIHRoZSBmaWx0ZXJcclxuICBwYXJ0OiBQYXJ0O1xyXG4gIHNldEtpbmQ6IFNldEtpbmQ7XHJcbiAgZWZmZWN0czogRWZmZWN0W107XHJcbiAgbGV2ZWxNYXhFZmZlY3RzOiBFZmZlY3RbXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2VhclNldCA9IEVzZU9iamVjdCAmIHtcclxuICBldmVudHM6IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgZXF1aXBwZWRJdGVtczoge1xyXG4gICAgV2VhcG9uOiBJdGVtS2luZFtdO1xyXG4gICAgQXJtb3I6IEl0ZW1LaW5kW107XHJcbiAgICBKZXdlbHJ5OiBJdGVtS2luZFtdO1xyXG4gIH07XHJcbiAgZXF1aXBwZWRFbmNoYW50czogRW5jaGFudEtpbmRbXTtcclxuXHJcbiAgY29uZmlnOiBDb25maWc7XHJcblxyXG4gIGl0ZW1TZXRzOiB7XHJcbiAgICBbc2V0S2luZCBpbiBTZXRLaW5kXToge1xyXG4gICAgICBhY3RpdmVJdGVtczoge1xyXG4gICAgICAgIFtpdGVtS2luZCBpbiBJdGVtS2luZF0/OiBib29sZWFuXHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZlQ291bnQ6IG51bWJlcjtcclxuICAgICAgYWN0aXZlTXVsdGlwbGllcjogbnVtYmVyO1xyXG4gICAgICBuZXdTZXRJdGVtQm9udXNSYXRpbmc6IFJhdGluZztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLy9tYXAgdG8gbG9vayB1cCBraW5kICs+IGl0ZW0vZW5jaGFudFxyXG4gIGVuY2hhbnRzTWFwOiBNYXA8RW5jaGFudEtpbmQsIEVuY2hhbnQ+O1xyXG4gIGl0ZW1zTWFwOiBNYXA8SXRlbUtpbmQsIEl0ZW0+O1xyXG5cclxuICAvL3NvcnRlZCBhbmQgZmlsdGVyZWQgYXJyYXlzXHJcbiAgZW5jaGFudHM6IEVuY2hhbnRbXTtcclxuICBpdGVtczogSXRlbVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgZHBzOiB7fTtcclxuICBnYWluczoge307XHJcbiAgaXRlbToge1xyXG4gICAgaXRlbUxldmVsOiBudW1iZXI7XHJcbiAgICBpbmNsdWRlTWFzdGVyeTogYm9vbGVhbjtcclxuICAgIGN1cnNlQW52aWw6IGJvb2xlYW47XHJcbiAgICBsb3R0ZXJ5OiBib29sZWFuO1xyXG4gICAgc2V0QmlhczogbnVtYmVyO1xyXG4gICAgc2xvdHM6IHtcclxuICAgICAgW3BhcnQgaW4gUGFydF06IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNhdmVEYXRhIHtcclxuICB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gIHNlbGVjdGVkTG9hZG91dDogbnVtYmVyO1xyXG4gIGdlYXJzZXRzOiBHZWFyU2V0W107XHJcblxyXG4gIG9wdGltaXplckNvbmZpZzogQ29uZmlnO1xyXG59XHJcbiIsImNsYXNzIEFudmlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9IFwiYW52aWxcIjtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgbml0cm86IDEuMCxcclxuICAgICAgZHVuZ2VvbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLWNhbGN1bGF0b3JcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnNhdmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXdhcmQobmFtZSkge1xyXG4gICAgbGV0IHJld2FyZCA9IDA7XHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImhlcm9sZXZlbFwiOlxyXG4gICAgICBjYXNlIFwicmVxdWlyZWRhYmlsaXR5XCI6XHJcbiAgICAgICAgcmV3YXJkID0gNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImhlcm9sZXZlbDJcIjpcclxuICAgICAgY2FzZSBcInJlcXVpcmVkYWJpbGl0eTJcIjpcclxuICAgICAgICByZXdhcmQgPSAxMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInByb2ZpY2llbmN5Z2FpblwiOlxyXG4gICAgICAgIHJld2FyZCA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlcXVpcG1lbnRlZmZlY3RcIjpcclxuICAgICAgICByZXdhcmQgPSAwLjE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwdXJpZnlvZmN1cnNlZGVmZmVjdFwiOlxyXG4gICAgICAgIHJld2FyZCA9IDAuMDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwcm9maWNpZW5jeWdhaW4yXCI6XHJcbiAgICAgICAgcmV3YXJkID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVxdWlwbWVudGVmZmVjdDJcIjpcclxuICAgICAgICByZXdhcmQgPSAwLjI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJld2FyZDtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmRhdGEubml0cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLm5pdHJvLnNwZWVkXCIpLnZhbHVlO1xyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLmRhdGEuZHVuZ2Vvbikge1xyXG4gICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm5hbWVcIikudmFsdWU7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLmRpZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIuZGlmZlwiKS52YWx1ZTtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0udGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCIpLnZhbHVlO1xyXG4gICAgICBsZXQgcGVyaG91ciA9IDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpXS50aW1lO1xyXG4gICAgICBsZXQgcmV3YXJkID0gdGhpcy5nZXRSZXdhcmQodGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSk7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLnJld2FyZCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgcGVyaG91ciAqIHJld2FyZCAqIHRoaXMuZGF0YS5kdW5nZW9uW2ldLmRpZmYgKiB0aGlzLmRhdGEubml0cm9cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ub3JiID0gTWF0aC5yb3VuZChwZXJob3VyICogdGhpcy5kYXRhLm5pdHJvKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5uaXRybztcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YS5kdW5nZW9uKSB7XHJcbiAgICAgIGxldCBuYW1lID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm5hbWVcIjtcclxuICAgICAgbGV0IHRpbWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xyXG4gICAgICBsZXQgZGlmZiA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi5kaWZmXCI7XHJcbiAgICAgIGxldCByZXdhcmQgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIucmV3YXJkXCI7XHJcbiAgICAgIGxldCBvcmIgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIub3JiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpLnZhbHVlID0gdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkudmFsdWUgPSB0aGlzLmRhdGEuZHVuZ2VvbltpXS50aW1lO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWZmKS52YWx1ZSA9IHRoaXMuZGF0YS5kdW5nZW9uW2ldLmRpZmY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJld2FyZCkuaW5uZXJIVE1MID0gdGhpcy5kYXRhLmR1bmdlb25baV0ucmV3YXJkO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5kdW5nZW9uW2ldLm9yYjtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5uYW1lID09IFwicHJvZmljaWVuY3lnYWluMlwiIHx8XHJcbiAgICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSA9PSBcInByb2ZpY2llbmN5Z2FpblwiIHx8XHJcbiAgICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSA9PSBcImVxdWlwbWVudGVmZmVjdDJcIiB8fFxyXG4gICAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUgPT0gXCJlcXVpcG1lbnRlZmZlY3RcIiB8fFxyXG4gICAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUgPT0gXCJwdXJpZnlvZmN1cnNlZGVmZmVjdFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJld2FyZCkuaW5uZXJIVE1MICs9IFwiJVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBbnZpbCB9O1xyXG4iLCJmdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaWQsIHRoaXMudmFsdWUpO1xyXG4gIGNvbnNvbGUubG9nKHRoaXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChpZCwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGFiKGlucHV0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIGlucHV0KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFRhYih0YWIpIHtcclxuICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyBodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcHJvLWNlc3MtdXMvaWVoMmNhbGMvcmF3L21hc3Rlci9odG1sL3NsaW1lQmFuay5odG1sXHJcbiAgLy8gbGV0IGZpbGUgPSBcIi4uL2h0bWwvXCIgKyB0YWIgKyBcIi5odG1sXCI7XHJcbiAgbGV0IGZpbGUgPSBcIi4vaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcclxuICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QgIT0gXCIxMjcuMC4wLjE6MzAwMFwiKSB7XHJcbiAgICBmaWxlID0gXCJodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW5cIik7XHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcclxuICAvLyAgIFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3k6XCIsXHJcbiAgLy8gICBcImRlZmF1bHQtc3JjICdzZWxmJzsgc3R5bGUtc3JjICdzZWxmJyAndW5zYWZlLWlubGluZScgKjsgZm9udC1zcmMgJ3NlbGYnICo7IGNvbm5lY3Qtc3JjICdzZWxmJyAqOyBpbWctc3JjIGRhdGE6ICpcIlxyXG4gIC8vICk7XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIC8vIHJlZmVycmVyUG9saWN5OiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgfTtcclxuICAvLyBsZXQgeCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gIC8vIGxldCB5ID0gYXdhaXQgeC50ZXh0KCk7XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHk7XHJcbiAgcmV0dXJuIGZldGNoKGZpbGUsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG59XHJcblxyXG4vLyBleHQuZ2V0ID0gKHVybCkgPT4ge1xyXG4vLyAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuLy8gICBsZXQgb3B0aW9ucyA9IHtcclxuLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcclxuLy8gICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4vLyAgICAgICBtb2RlOiAnY29ycydcclxuLy8gICB9O1xyXG5cclxuLy8gICAvL2ZldGNoIGdldFxyXG5cclxuLy8gICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbi8vIH07XHJcblxyXG4vLyBleHQuZ2V0KFwiaHR0cDovL2V4YW1wbGUuY29tXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAvLyBvciB3aGF0ZXZlclxyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIHNpZ21hKGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIGl0ZXJhdG9yLCBhY2N1bXVsYXRvciA9IDApIHtcclxuICAvLyBsZXQgYWNjdW11bGF0b3IgPSAwO1xyXG4gIGZvciAobGV0IGkgPSBsb3dlckJvdW5kOyBpIDw9IHVwcGVyQm91bmQ7ICsraSkge1xyXG4gICAgYWNjdW11bGF0b3IgKz0gaXRlcmF0b3IoaSk7XHJcbiAgfVxyXG4gIHJldHVybiBhY2N1bXVsYXRvcjtcclxufVxyXG5cclxuLy8gY29udmVydCBub3JtYWwgbnVtYmVyIHRvIEssTSxCLFQgYW5kIGV4cG9uZW50aWFsXHJcbmZ1bmN0aW9uIGNvbnZlcnQoaW5wdXQpIHtcclxuICBpbnB1dCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xyXG4gIHZhciBvdXRwdXQgPSAwO1xyXG4gIGlmIChpbnB1dCA9PSAwKSB7XHJcbiAgICBvdXRwdXQgPSAwO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPD0gMTAwMDApIHtcclxuICAgIG91dHB1dCA9IE1hdGgucm91bmQoaW5wdXQpO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwKS50b0ZpeGVkKDIpICsgXCJLXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk1cIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMCkudG9GaXhlZCgzKSArIFwiQlwiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJUXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG91dHB1dCA9IGlucHV0LnRvRXhwb25lbnRpYWwoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGssbSxiLHQgdG8gbm9ybWFsIG51bWJlcnNcclxuZnVuY3Rpb24gY29udmVydDIoaW5wdXQsIG1pbiA9IDAsIG1heCA9IDk5OTk5OTk5OTk5OTk5OSkge1xyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvLC9nLCBcIi5cIik7IC8vIGNvbnZlcnQgLCB0byAuXHJcbiAgaWYgKC9eXFxkKlxcLj9cXGQrJC8udGVzdChpbnB1dCkpIHtcclxuICAgIGlmIChpbnB1dCA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dCA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0gLy8gcmV0dXJuIHJvdW5kZWQgbnVtYmVyIGlmIHRoZXJlIGlzIG5vIGFiYnJldmlldGVcclxuICBlbHNlIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gLyguKikoXFxEKSQvZ207XHJcbiAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyAvZywgXCJcIik7IC8vIHJlbW92ZXMgYWxsIHNwYWNlc1xyXG5cclxuICAgIGlucHV0ID0gcmVnZXguZXhlYyhpbnB1dCk7XHJcbiAgICBsZXQgb3V0cHV0ID0gMDtcclxuICAgIGlmIChpbnB1dFsyXSA9PSBcInRcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogNDtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJiXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDM7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwibVwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAyO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcImtcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvRmlsZSgpIHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UsIG51bGwsIDIpXSwge1xyXG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIixcclxuICAgIH0pXHJcbiAgKTtcclxuICBhLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiSUVIMmNhbGMtZGF0YS5qc29uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgYS5jbGljaygpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGcm9tRmlsZSgpIHtcclxuICBsZXQgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIpLmZpbGVzWzBdO1xyXG4gIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsZS1jb250ZW50c1wiKS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHRleHQpKTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4uSlNPTi5wYXJzZSh0ZXh0KSB9KSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udmVydCxcclxuICBjb252ZXJ0MixcclxuICBzaWdtYSxcclxuICByZXN0YXJ0LFxyXG4gIGNoYW5nZVRhYixcclxuICBsb2FkVGFiLFxyXG4gIGFkZEV2ZW50LFxyXG4gIHNhdmVUb0ZpbGUsXHJcbiAgbG9hZEZyb21GaWxlLFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcImVuY2hhbnRzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkhQQWRkZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMTAwMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAxMjEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNUEFkZGVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDUwMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiA2MDVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkFUS0FkZGVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDEwMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAxMjFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIk1BVEtBZGRlclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMTIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJERUZBZGRlclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAxMDAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMTIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNREVGQWRkZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMTAwLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDEyMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiU1BEQWRkZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMTAwLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDEyMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjE1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMjFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjE1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMjFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4yMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkRFRlByb3BvdGlvblwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIk1ERUZQcm9wb3Rpb25cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC42XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJGaXJlUmVzaXN0YW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4yMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiSWNlUmVzaXN0YW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4yMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlclJlc2lzdGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4yLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMjJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkxpZ2h0UmVzaXN0YW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4yMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiRGFya1Jlc2lzdGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4yLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMjJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsQWJzb3JwdGlvblwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMixcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wOVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmlyZUFic29ycHRpb25cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkljZUFic29ycHRpb25cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRodW5kZXJBYnNvcnB0aW9uXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjA5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJMaWdodEFic29ycHRpb25cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkRhcmtBYnNvcnB0aW9uXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjA5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJEZWJ1ZmZSZXNpc3RhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4yNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjNcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkVxdWlwbWVudERyb3BDaGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDAyMTk5OTk5OTk5OTk5OTk5OCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAwMDI2NFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDExMDAwMDAwMDAwMDAwMDAxLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDEzMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZURyb3BDaGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMTEwMDAwMDAwMDAwMDAwMDEsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMTMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDExMDAwMDAwMDAwMDAwMDAxLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDEzMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmF0RHJvcENoYW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAxMTAwMDAwMDAwMDAwMDAwMSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAxMzJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAxMTAwMDAwMDAwMDAwMDAwMSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAxMzJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkZveERyb3BDaGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMTEwMDAwMDAwMDAwMDAwMDEsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMTMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDExMDAwMDAwMDAwMDAwMDAxLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDEzMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAxMTAwMDAwMDAwMDAwMDAwMSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAxMzJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDExMDAwMDAwMDAwMDAwMDAxLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDEzMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiVW5pY29ybkRyb3BDaGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMTEwMDAwMDAwMDAwMDAwMDEsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMTMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJDb2xvck1hdGVyaWFsRHJvcENoYW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAwMDEwOTk5OTk5OTk5OTk5OTk5LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDAwMTMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJQaHlzaWNhbENyaXRpY2FsXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNixcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjA5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNYWdpY2FsQ3JpdGljYWxcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA2LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkVYUEdhaW5cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMS4xLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDEuMzJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjI3NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjMzXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNb3ZlU3BlZWRNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMTEsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4xMzJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkdvbGRHYWluXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4zLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNDJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlN0b25lR2FpblwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDYuMDVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogNi4wNVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiTGVhZkdhaW5cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiA2LjA1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxMZXZlbFwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAyMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAyMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiV2l6YXJkU2tpbGxMZXZlbFwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAyMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAyMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQW5nZWxTa2lsbExldmVsXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDIwLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDIyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJUaGllZlNraWxsTGV2ZWxcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMjAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMjJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkFyY2hlclNraWxsTGV2ZWxcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMjAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMjJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRhbWVyU2tpbGxMZXZlbFwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAyMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAyMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQWxsU2tpbGxMZXZlbFwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAxMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiU2xpbWVLbm93bGVkZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC42NlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC42NlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmF0S25vd2xlZGdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC42NlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJGb3hLbm93bGVkZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hLbm93bGVkZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJUcmVhbnRLbm93bGVkZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC42NlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiVW5pY29ybktub3dsZWRnZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjU1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNjZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC42NlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjU1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNjZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkljZURhbWFnZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjU1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNjZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJMaWdodERhbWFnZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjU1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNjZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkRhcmtEYW1hZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXCJraW5kXCI6IFwiSHBSZWdlblwiLCBcIm1heExldmVsXCI6IDUsIFwibWF4VmFsdWVcIjogNTAsIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDYwIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNcFJlZ2VuXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMzAwLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDQyMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC41LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNTVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIldhcnJpb3JTa2lsbFJhbmdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIldpemFyZFNraWxsUmFuZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAwNCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAwNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQW5nZWxTa2lsbFJhbmdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRoaWVmU2tpbGxSYW5nZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMixcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJBcmNoZXJTa2lsbFJhbmdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRhbWVyU2tpbGxSYW5nZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMixcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4xMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMTFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4xXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjExXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluMlwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4xMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjNcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMTFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkNyaXRpY2FsRGFtYWdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4zLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmxlc3NpbmdFZmZlY3RcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMTFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDU1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDY2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjU1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjU1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJDYXRhbHlzdERvdWJsZUNyaXRpY2FsQ2hhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wNTVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIldhcnJpb3JTa2lsbEVmZmVjdFJhbmdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIldpemFyZFNraWxsRWZmZWN0UmFuZ2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAwNCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAwNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQW5nZWxTa2lsbEVmZmVjdFJhbmdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRoaWVmU2tpbGxFZmZlY3RSYW5nZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMixcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJBcmNoZXJTa2lsbEVmZmVjdFJhbmdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDQsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRhbWVyU2tpbGxFZmZlY3RSYW5nZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMixcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDA0LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJIcFJlZ2VuTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDAxNTAwMDAwMDAwMDAwMDAwMixcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAwMjFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIk1wUmVnZW5NdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMDE1MDAwMDAwMDAwMDAwMDAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDAyMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQXJtb3JlZEZ1cnlcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDEwLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAxMTAwMDAwMDAwMDAwMDAwMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiV2FyZGVkRnVyeVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogMTAsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjAxLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDExMDAwMDAwMDAwMDAwMDAxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNixcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjA5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJQZXRNYWdpY2FsQ3JpdGljYWxDaGFuY2VcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDIsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA2LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMDlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlBldENyaXRpY2FsRGFtYWdlXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4zLFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiUGV0RGVidWZmUmVzaXN0YW5jZVwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMjUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4zXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJTdG9uZVRvd25SZXNlYXJjaFBvd2VyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDI3NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAzM1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDI3NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAzM1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiTGVhZlRvd25SZXNlYXJjaFBvd2VyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDI3NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAzM1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiR3VpbGRFWFBHYWluXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAxMCxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDAyMixcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjAwMjY0XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJTUERNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZU11bHRpcGxpZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjE1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMjFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeU11bHRpcGxpZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA3NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjEwNVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiRVhQR2Fpbk11bHRpcGxpZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjA3NSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjEwNVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiR29sZEdhaW5NdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNzUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4xMDVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDc1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMTA1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJGaXJlRGFtYWdlTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDc1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMTA1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJJY2VEYW1hZ2VNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNzUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4xMDVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNzUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4xMDVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDc1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMTA1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJEYXJrRGFtYWdlTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMDc1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMTA1XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJUYW1pbmdQb2ludE11bHRpcGxpZXJcIixcclxuICAgICAgICBcIm1heExldmVsXCI6IDUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZVwiOiAwLjE1LFxyXG4gICAgICAgIFwibWF4VmFsdWVMb3R0ZXJ5XCI6IDAuMjFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlBldEVYUEdhaW5NdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4xNSxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjIxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllclwiLFxyXG4gICAgICAgIFwibWF4TGV2ZWxcIjogNSxcclxuICAgICAgICBcIm1heFZhbHVlXCI6IDAuMTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4yMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmxlc3NpbmdFZmZlY3RNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiA1LFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wMTUsXHJcbiAgICAgICAgXCJtYXhWYWx1ZUxvdHRlcnlcIjogMC4wMjEwMDAwMDAwMDAwMDAwMDVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImtpbmRcIjogXCJNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyXCIsXHJcbiAgICAgICAgXCJtYXhMZXZlbFwiOiAyLFxyXG4gICAgICAgIFwibWF4VmFsdWVcIjogMC4wNCxcclxuICAgICAgICBcIm1heFZhbHVlTG90dGVyeVwiOiAwLjA2XHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcIml0ZW1zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA0LCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA0LCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkR1bGxTd29yZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTUsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTUsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkFsbFNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA0LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiQnJpdHRsZVN0YWZmXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQWxsU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGbGltc3lXaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQWxsU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAyLjUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA0LCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMi41LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJXb3JuRGFydFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTUsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTUsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkFsbFNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMi41LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIuNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDQsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU21hbGxCb3dcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDE1LCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDE1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJBbGxTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIuNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAyLjUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIldvb2RlblJlY29yZGVyXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQWxsU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJPbGRDbG9ha1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJNcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmx1ZUhhdFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJNcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJPcmFuZ2VIYXRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1LCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRTaGlydFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJNcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIuNSwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDI1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiUGh5c2ljYWxDcml0aWNhbFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDIuNSwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAwNSwgXCJraW5kXCI6IFwiUGh5c2ljYWxDcml0aWNhbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkNsb3RoR2xvdmVcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMywgXCJpbml0VmFsdWVcIjogMzAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzLCBcImluaXRWYWx1ZVwiOiAzMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJsdWVUU2hpcnRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiT3JhbmdlVFNoaXJ0XCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkhwUmVnZW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1wUmVnZW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJDbG90aEJlbHRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yNSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjI1LCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkNsb3RoU2hvZXNcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJJcm9uUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA0LCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA0LCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJQZWFybEVhcnJpbmdcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkZpcmVEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZpcmVCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJJY2VCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGh1bmRlckRhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRodW5kZXJCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTGlnaHRCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkRhcmtEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkRhcmtCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiV29vZGVuU2hpZWxkXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkhwUmVnZW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1wUmVnZW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxMZXZlbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkxvbmdTd29yZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJXaXphcmRTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJXaXphcmRTa2lsbExldmVsXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTG9uZ1N0YWZmXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiQW5nZWxTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIkFuZ2VsU2tpbGxMZXZlbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIldhcm1XaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuOCwgXCJpbml0VmFsdWVcIjogOCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiVGhpZWZTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjgsIFwiaW5pdFZhbHVlXCI6IDgsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRoaWVmU2tpbGxMZXZlbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkR1YWxEYWdnZXJcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuOCwgXCJpbml0VmFsdWVcIjogOCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJBcmNoZXJTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC44LCBcImluaXRWYWx1ZVwiOiA4LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIkFyY2hlclNraWxsTGV2ZWxcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJSZWluZm9yY2VkQm93XCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiVGFtZXJTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRhbWVyU2tpbGxMZXZlbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZsdXRlXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJGaXJlRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZpcmVTdGFmZlwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSWNlRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSWNlRGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiSWNlU3RhZmZcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlclN0YWZmXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJMZWF0aGVyQmVsdFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkxlYXRoZXJTaG9lc1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyNSwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyNSwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJXYXJtQ2xvYWtcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJMZWF0aGVyQXJtb3JcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDA1LCBcImtpbmRcIjogXCJNYWdpY2FsQ3JpdGljYWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMDUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkxlYXRoZXJHbG92ZVwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsQWJzb3JwdGlvblwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIlBoeXNpY2FsQWJzb3JwdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkxlYXRoZXJTaGllbGRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRmlyZVJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJGaXJlUmVzaXN0YW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZpcmVSaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkljZVJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJJY2VSZXNpc3RhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiSWNlUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUaHVuZGVyUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRodW5kZXJSZXNpc3RhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlclJpbmdcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTGlnaHRSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTGlnaHRSZXNpc3RhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTGlnaHRSaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkRhcmtSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRGFya1Jlc2lzdGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJEYXJrUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJGaXJlRGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRW5oYW5jZWRGaXJlQnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMTUsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJFbmhhbmNlZEljZUJyb29jaFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMTUsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJFbmhhbmNlZFRodW5kZXJCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiTGlnaHREYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiTGlnaHREYW1hZ2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJFbmhhbmNlZExpZ2h0QnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMTUsIFwia2luZFwiOiBcIkRhcmtEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkVuaGFuY2VkRGFya0Jyb29jaFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJhdHRsZVN3b3JkXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXR0bGVTdGFmZlwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAwNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAwNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLUHJvcG90aW9uXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmF0dGxlV2luZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMS41LCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjUsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiUGh5c2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEuNSwgXCJpbml0VmFsdWVcIjogMTUsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlBoeXNpY2FsQ3JpdGljYWxcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXR0bGVEYWdnZXJcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLjUsIFwiaW5pdFZhbHVlXCI6IDE1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLjUsIFwiaW5pdFZhbHVlXCI6IDE1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJhdHRsZUJvd1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwMjUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQaHlzaWNhbENyaXRpY2FsXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJNYWdpY2FsQ3JpdGljYWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDAyNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMjUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsQ3JpdGljYWxcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJhdHRsZVJlY29yZGVyXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTbGltZURyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAxNSwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTbGltZURyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTbGltZVN3b3JkXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJBVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJTbGltZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNsaW1lRHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNsaW1lR2xvdmVcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNsaW1lXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTbGltZURyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTbGltZVJpbmdcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjFcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiU2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJEZWJ1ZmZSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNsaW1lRHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRGVidWZmUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTbGltZURyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTbGltZUJlbHRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNsaW1lXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTbGltZURyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU2xpbWVQaW5jZW5lelwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluMVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJTbGltZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAwNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJBbmdlbFNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAwNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMiwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJMaWdodERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQW5nZWxTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNsaW1lRHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNsaW1lV2luZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiU2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU2xpbWVEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU2xpbWVQb25jaG9cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNsaW1lXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNsaW1lRHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNsaW1lRHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNsaW1lRGFydFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiU2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTUsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDE1LCBcImtpbmRcIjogXCJNQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lU3RpY2tcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk1hZ2ljc2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTWFnaWNTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZURyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTWFnaWNTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZURyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZUhhdFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTWFnaWNzbGltZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJGaXJlRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTWFnaWNTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZURyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSWNlRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVCb3dcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk1hZ2ljc2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkZpcmVSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkljZVJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGh1bmRlclJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRmlyZVJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSWNlUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUaHVuZGVyUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVTaG9lc1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTWFnaWNzbGltZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJUYW1lclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJUYW1lclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lUmVjb3JkZXJcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk1hZ2ljc2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIk1hZ2ljU2xpbWVFYXJyaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4xXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk1hZ2ljc2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMWUtNixcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDAxNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiQ29sb3JNYXRlcmlhbERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTWFnaWNTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZURyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMWUtNixcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDAxNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiQ29sb3JNYXRlcmlhbERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTWFnaWNTbGltZUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZURyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTWFnaWNTbGltZUJhbGxvb25cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjFcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTWFnaWNzbGltZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNYWdpY1NsaW1lS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJNYWdpY1NsaW1lU2tpcnRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk1hZ2ljc2xpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDUwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkRFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNwaWRlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU3BpZGVyRHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiA1MDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTcGlkZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNwaWRlckRyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTcGlkZXJIYXRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNwaWRlclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRGFya1Jlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJEYXJrQWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNwaWRlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU3BpZGVyRHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJEYXJrUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkRhcmtBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BpZGVyU2tpcnRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNwaWRlclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogNTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIk1ERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTcGlkZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNwaWRlckRyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogNTAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIk1ERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTcGlkZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNwaWRlckRyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTcGlkZXJTdWl0XCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIkhwUmVnZW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJTcGlkZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMywgXCJpbml0VmFsdWVcIjogMzAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiVGhpZWZTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMywgXCJpbml0VmFsdWVcIjogMzAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiVGhpZWZTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BpZGVyRGFnZ2VyXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJBVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJTcGlkZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUGh5c2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUGh5c2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BpZGVyV2luZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiU3BpZGVyXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJTcGlkZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIlNwaWRlckRyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BpZGVyQ2F0Y2hpbmdOZXRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNwaWRlclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAxZS02LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkNvbG9yTWF0ZXJpYWxEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiV2l6YXJkU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNwaWRlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU3BpZGVyRHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDFlLTYsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiQ29sb3JNYXRlcmlhbERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJXaXphcmRTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BpZGVyU3RpY2tcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlNwaWRlclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiU3BpZGVyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJTcGlkZXJEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlNwaWRlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiU3BpZGVyRHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNwaWRlckZvbGRpbmdGYW5cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjFcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiU3BpZGVyXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkRlYnVmZlJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiQmF0S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJCYXREcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRGVidWZmUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXRSaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4xXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkJhdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXRTaG9lc1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiQmF0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDUsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkJhdEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiQmF0RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDUsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJBVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkJhdEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiQmF0RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJhdFN3b3JkXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJBVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJCYXRcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRmlyZUFic29ycHRpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJJY2VBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAyNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlckFic29ycHRpb25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiTGlnaHRBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRGFya0Fic29ycHRpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJGaXJlQWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkljZUFic29ycHRpb25cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJUaHVuZGVyQWJzb3JwdGlvblwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJMaWdodEFic29ycHRpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJEYXJrQWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkJhdEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiQmF0RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJhdEhhdFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiQmF0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMjUsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJUYW1lclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiQmF0S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJCYXREcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yNSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIlRhbWVyU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXRSZWNvcmRlclwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiQmF0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJBcmNoZXJTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiQmF0S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJCYXREcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMiwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJBVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkFyY2hlclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXRCb3dcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkJhdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXRNYXNjYXJhZGVNYXNrXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4xXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkJhdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQaHlzaWNhbEFic29ycHRpb25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQaHlzaWNhbEFic29ycHRpb25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJCYXRLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkJhdERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJCYXRDbG9ha1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwLCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiQmF0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiQnJvbnplU2hvdWxkZXJcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiQmF0dGxlUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjI1LCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yNSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkhhbG9cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiVG93bk1hdEFyZWFDbGVhckdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyNSwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAyNSwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiSXJvblNob3VsZGVyXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyNSwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyNSwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJQaHlzaWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJQaHlzaWNhbERhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlN0cmVuZ3RoUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogMC4wMiwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJHb2xkZW5SaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJGaXJlUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRmlyZVJlc2lzdGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJHb2xkZW5GaXJlUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSWNlUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSWNlUmVzaXN0YW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkdvbGRlbkljZVJpbmdcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogMC4wMiwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRodW5kZXJSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUaHVuZGVyUmVzaXN0YW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkdvbGRlblRodW5kZXJSaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJMaWdodFJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogMC4wMiwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkxpZ2h0UmVzaXN0YW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkdvbGRlbkxpZ2h0UmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRGFya1Jlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogMC4wMiwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkRhcmtSZXNpc3RhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiR29sZGVuRGFya1JpbmdcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkRFRlByb3BvdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIklyb25CZWx0XCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyNSwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyNSwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IDIwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJJcm9uU2hvZXNcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNCwgXCJpbml0VmFsdWVcIjogNDAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNCwgXCJpbml0VmFsdWVcIjogNDAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDQsIFwiaW5pdFZhbHVlXCI6IDQwLCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDQsIFwiaW5pdFZhbHVlXCI6IDQwLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJDb3BwZXJBcm1vclwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiAyMCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRlByb3BvdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIklyb25HbG92ZVwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJQaHlzaWNhbEFic29ycHRpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJQaHlzaWNhbEFic29ycHRpb25cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJUb3dlclNoaWVsZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIkZpcmVBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogNDAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJGaXJlQWJzb3JwdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZpcmVUb3dlclNoaWVsZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIkljZUFic29ycHRpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIkljZUFic29ycHRpb25cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJJY2VUb3dlclNoaWVsZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIlRodW5kZXJBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogNDAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJUaHVuZGVyQWJzb3JwdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRodW5kZXJUb3dlclNoaWVsZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIkxpZ2h0QWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIsIFwiaW5pdFZhbHVlXCI6IDQwLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMiwgXCJraW5kXCI6IFwiTGlnaHRBYnNvcnB0aW9uXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTGlnaHRUb3dlclNoaWVsZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLCBcImluaXRWYWx1ZVwiOiA0MCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIk1ERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDIsIFwia2luZFwiOiBcIkRhcmtBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMiwgXCJpbml0VmFsdWVcIjogNDAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyLCBcImtpbmRcIjogXCJEYXJrQWJzb3JwdGlvblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkRhcmtUb3dlclNoaWVsZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNzUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNzUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTYXZhZ2VSaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDc1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZpcmVEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNzUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNwZWxsYm91bmRGaXJlQnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDc1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA3NSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJTcGVsbGJvdW5kSWNlQnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDc1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNzUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiVGh1bmRlckRhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNwZWxsYm91bmRUaHVuZGVyQnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDc1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDc1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiU3BlbGxib3VuZExpZ2h0QnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDc1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRhcmtEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNzUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNwZWxsYm91bmREYXJrQnJvb2NoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDI1MCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAxLCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxMCwgXCJpbml0VmFsdWVcIjogMjUwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkNvcHBlckhlbG1cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIkFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJQaHlzaWNhbERhbWFnZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkJhdHRsZUhlbG1cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDI1LCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkZpcmVEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiTGlnaHREYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJEYXJrRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIk1BVEtBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkZpcmVEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiTGlnaHREYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJEYXJrRGFtYWdlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiV2l6YXJkSGVsbVwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjUsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzLCBcImluaXRWYWx1ZVwiOiAzMCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJBVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIldhcnJpb3JTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzLCBcImluaXRWYWx1ZVwiOiAzMCwgXCJraW5kXCI6IFwiQVRLQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJBVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIldhcnJpb3JTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJMYXJnZVN3b3JkXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzLCBcImluaXRWYWx1ZVwiOiAzMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiV2l6YXJkU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzLCBcImluaXRWYWx1ZVwiOiAzMCwgXCJraW5kXCI6IFwiTUFUS0FkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiV2l6YXJkU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiQ3J5c3RhbEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJMYXJnZVN0YWZmXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiA1MCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiTm90aGluZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJQaHlzaWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJBbmdlbFNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJMaWdodERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQW5nZWxTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkxhcmdlV2luZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiUGh5c2ljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJEYXJrRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJUaGllZlNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMSwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiVGhpZWZTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJMYXJnZURhZ2dlclwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIk5vdGhpbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkFyY2hlclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmlyZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIkFyY2hlclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiTGFyZ2VCb3dcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4xLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJUYW1lclNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkxlYWZHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIlRhbWVyU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJMYXJnZU9jYXJpbmFcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJOb3RoaW5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZhaXJ5Q2xvdGhlc1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTURFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZhaXJ5XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZhaXJ5S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGYWlyeURyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGYWlyeUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRmFpcnlEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmFpcnlTdGFmZlwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQ3JpdGljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGYWlyeVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkxpZ2h0UmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkxpZ2h0QWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZhaXJ5S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGYWlyeURyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxMCwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkxpZ2h0UmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkxpZ2h0QWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZhaXJ5S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGYWlyeURyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGYWlyeUJvb3RzXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRmFpcnlcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZhaXJ5S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGYWlyeURyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGYWlyeUdsb3ZlXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRmFpcnlcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDE1LCBcImluaXRWYWx1ZVwiOiAwLjMsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGYWlyeUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRmFpcnlEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDE1LCBcImluaXRWYWx1ZVwiOiAwLjMsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGYWlyeUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRmFpcnlEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmFpcnlCcm9vY2hcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZhaXJ5XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjEsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZhaXJ5TGFtcFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluMlwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRmFpcnlcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGYWlyeUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRmFpcnlEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGYWlyeUtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRmFpcnlEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmFpcnlXaW5nXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZhaXJ5XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1QQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIlN0b25lR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmFpcnlLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZhaXJ5RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZhaXJ5U2h1cmlrZW5cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkNyaXRpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRmFpcnlcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkJsZXNzaW5nRWZmZWN0XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkJsZXNzaW5nRWZmZWN0XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRm94S2FuemFzaGlcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZveFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IC0wLjIsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogLTAuMiwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGb3hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZveERyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IC0wLjIsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogLTAuMiwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGb3hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZveERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGb3hMb2luY2xvdGhcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkRFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1ERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGb3hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIk1wUmVnZW5cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDIsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsQWJzb3JwdGlvblwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGb3hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZveERyb3BDaGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTVBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTXBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiUGh5c2ljYWxBYnNvcnB0aW9uXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZveEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRm94RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkZveE1hc2tcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZveFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiQXJjaGVyU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiRGVidWZmUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZveEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRm94RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkNyaXRpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJBcmNoZXJTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJEZWJ1ZmZSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRm94SGFtYXlheXVtaVwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQ3JpdGljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGb3hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDUwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZveEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRm94RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiA1MDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAsIFwia2luZFwiOiBcIkhwUmVnZW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGb3hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMDUsIFwia2luZFwiOiBcIkZveERyb3BDaGFuY2VcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGb3hIYXRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkRFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1ERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGb3hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJJY2VSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJUaHVuZGVyUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiTGlnaHRSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAyNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlckFic29ycHRpb25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJJY2VSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJUaHVuZGVyUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiTGlnaHRSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAyNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlckFic29ycHRpb25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRm94Q29hdFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTURFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZveFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMixcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTW92ZVNwZWVkTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIk1BVEtQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiVGh1bmRlckRhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJMaWdodERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZveEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRm94RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAyLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAtMC4yLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNb3ZlU3BlZWRNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRm94Qm9vdFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTURFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZveFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkJsZXNzaW5nRWZmZWN0XCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNixcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJFcXVpcG1lbnREcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZveEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiRm94RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQmxlc3NpbmdFZmZlY3RcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS02LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkVxdWlwbWVudERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRm94S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJGb3hEcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRm94RW1hXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4yXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGb3hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAtMC4yLCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IC0wLjIsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBoeXNpY2FsQ3JpdGljYWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTWFnaWNhbENyaXRpY2FsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQ3JpdGljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIldhcnJpb3JTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMiwgXCJpbml0VmFsdWVcIjogLTAuMiwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAtMC4yLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQaHlzaWNhbENyaXRpY2FsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1hZ2ljYWxDcml0aWNhbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkNyaXRpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRldmlsRmlzaEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRGV2aWxGaXNoRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJEZXZpbGZpc2hTd29yZFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQ3JpdGljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJEZXZpbGZpc2hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMTUsIFwia2luZFwiOiBcIkZpcmVSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJBbmdlbFNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJEZXZpbEZpc2hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkRldmlsRmlzaERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMTUsIFwia2luZFwiOiBcIkZpcmVSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4yLCBcImluaXRWYWx1ZVwiOiA1LCBcImtpbmRcIjogXCJBbmdlbFNraWxsTGV2ZWxcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJEZXZpbEZpc2hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkRldmlsRmlzaERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRGV2aWxmaXNoV2luZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJBVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiQ3JpdGljYWxEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJEZXZpbGZpc2hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiTUFUS1Byb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiRGFya0RhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyLCBcImluaXRWYWx1ZVwiOiAtMC4yLCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjIsIFwiaW5pdFZhbHVlXCI6IDUsIFwia2luZFwiOiBcIlRhbWVyU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRldmlsRmlzaEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRGV2aWxGaXNoRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMiwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJNQVRLUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJEYXJrRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDIsIFwiaW5pdFZhbHVlXCI6IC0wLjIsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMiwgXCJpbml0VmFsdWVcIjogNSwgXCJraW5kXCI6IFwiVGFtZXJTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkRldmlsZmlzaFJlY29yZGVyXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkRldmlsZmlzaFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNSwgXCJpbml0VmFsdWVcIjogNTAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAwLjE1LCBcImtpbmRcIjogXCJGaXJlUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiRGFya1Jlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJEZXZpbEZpc2hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkRldmlsRmlzaERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDUsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDUsIFwiaW5pdFZhbHVlXCI6IDUwLCBcImtpbmRcIjogXCJNREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkhQTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiRmlyZVJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMTUsIFwia2luZFwiOiBcIkRhcmtSZXNpc3RhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkRldmlsZmlzaEFybW9yXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRGV2aWxmaXNoXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSWNlRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiTURFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiSWNlRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkRldmlsZmlzaFNjYXJmXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRGV2aWxmaXNoXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkZpcmVBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiSWNlQWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkRhcmtBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkljZURhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkZpcmVBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDA1LCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiSWNlQWJzb3JwdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAwNSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkRhcmtBYnNvcnB0aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRGV2aWxGaXNoS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJEZXZpbEZpc2hEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIkRldmlsZmlzaEdpbGxcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkRldmlsZmlzaFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMiwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRldmlsRmlzaEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRGV2aWxGaXNoRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyMCwgXCJpbml0VmFsdWVcIjogMjAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMiwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRldmlsRmlzaEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRGV2aWxGaXNoRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJEZXZpbGZpc2hQZW5kYW50XCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4yXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJEZXZpbGZpc2hcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiRGVidWZmUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAzLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJEZXZpbEZpc2hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkRldmlsRmlzaERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxNSwgXCJpbml0VmFsdWVcIjogMC4xNSwgXCJraW5kXCI6IFwiRGVidWZmUmVzaXN0YW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiU3RvbmVHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC41LCBcImluaXRWYWx1ZVwiOiAzLCBcImtpbmRcIjogXCJDcnlzdGFsR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuNSwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiTGVhZkdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJEZXZpbEZpc2hLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkRldmlsRmlzaERyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRGV2aWxmaXNoUmluZ1wiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluMlwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRGV2aWxmaXNoXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJTdG9uZUdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIkNyeXN0YWxHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogMTAwLCBcImtpbmRcIjogXCJMZWFmR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRyZWFudEFtdWxldFwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluMlwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJUb3duTWF0R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiVHJlYW50XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRyZWFudEhhZ29pdGFcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiQVRLTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTUFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkNyaXRpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiV2VhcG9uXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiVHJlYW50XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEwLCBcImluaXRWYWx1ZVwiOiAxMDAsIFwia2luZFwiOiBcIkRFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMTAsIFwiaW5pdFZhbHVlXCI6IDEwMCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJERUZNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRyZWFudENob3BwaW5nQm9hcmRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkRFRlByb3BvdGlvblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIk1ERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5XCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJUcmVhbnRcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMzAsIFwiaW5pdFZhbHVlXCI6IC0zNjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IC0xMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAtMC4wNixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTW92ZVNwZWVkTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJQaHlzaWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkZpcmVEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGlnaHREYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJEYXJrRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiVHJlYW50S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJUcmVhbnREcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMzAsIFwiaW5pdFZhbHVlXCI6IC0zNjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IC0xMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAtMC4wNixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTW92ZVNwZWVkTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJQaHlzaWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDEsIFwia2luZFwiOiBcIkZpcmVEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJJY2VEYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJUaHVuZGVyRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMSwgXCJraW5kXCI6IFwiTGlnaHREYW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJEYXJrRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiVHJlYW50S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJUcmVhbnREcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiVHJlYW50RGFnZ2VyXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkFUS011bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIk1BVEtNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludFwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlRyZWFudFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzMCwgXCJpbml0VmFsdWVcIjogLTM2MDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogLTEyMCwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IC0wLjA2LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNb3ZlU3BlZWRNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDUwLCBcImluaXRWYWx1ZVwiOiAxMDAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjUsIFwiaW5pdFZhbHVlXCI6IDI1MCwgXCJraW5kXCI6IFwiSHBSZWdlblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNTAsIFwiaW5pdFZhbHVlXCI6IDEwMDAsIFwia2luZFwiOiBcIkhQQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyNSwgXCJpbml0VmFsdWVcIjogMjUwLCBcImtpbmRcIjogXCJIcFJlZ2VuXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiVHJlYW50S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJUcmVhbnREcm9wQ2hhbmNlXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiVHJlYW50SGFuaXdhXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJERUZQcm9wb3Rpb25cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJNREVGUHJvcG90aW9uXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDIsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkFybW9yXCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiVHJlYW50XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMWUtNixcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJDb2xvck1hdGVyaWFsRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDMwLCBcImluaXRWYWx1ZVwiOiAtMzYwMCwgXCJraW5kXCI6IFwiU1BEQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAxLCBcImluaXRWYWx1ZVwiOiAtMTIwLCBcImtpbmRcIjogXCJNb3ZlU3BlZWRBZGRlclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogLTAuMDYsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIk1vdmVTcGVlZE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMWUtNixcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJDb2xvck1hdGVyaWFsRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAxLCBcImtpbmRcIjogXCJDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRyZWFudEtva2VzaGlcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlRyZWFudFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzMCwgXCJpbml0VmFsdWVcIjogLTM2MDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogLTEyMCwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IC0wLjA2LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNb3ZlU3BlZWRNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDI1LCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIkdvbGRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiVHJlYW50S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJUcmVhbnREcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMzAsIFwiaW5pdFZhbHVlXCI6IC0zNjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IC0xMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAtMC4wNixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTW92ZVNwZWVkTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJHb2xkR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRyZWFudExhbXBcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiUmViaXJ0aFBvaW50R2FpbjJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAyLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiVG93bk1hdEdhaW5cIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJQZXRFWFBHYWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiSmV3ZWxyeVwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIlRyZWFudFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAzMCwgXCJpbml0VmFsdWVcIjogLTM2MDAsIFwia2luZFwiOiBcIlNQREFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMSwgXCJpbml0VmFsdWVcIjogLTEyMCwgXCJraW5kXCI6IFwiTW92ZVNwZWVkQWRkZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IC0wLjA2LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNb3ZlU3BlZWRNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMjUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkNhdGFseXN0RG91YmxlQ3JpdGljYWxDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiVHJlYW50S25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDA1LCBcImtpbmRcIjogXCJUcmVhbnREcm9wQ2hhbmNlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMzAsIFwiaW5pdFZhbHVlXCI6IC0zNjAwLCBcImtpbmRcIjogXCJTUERBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDEsIFwiaW5pdFZhbHVlXCI6IC0xMjAsIFwia2luZFwiOiBcIk1vdmVTcGVlZEFkZGVyXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAtMC4wNixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTW92ZVNwZWVkTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJDYXRhbHlzdERvdWJsZUNyaXRpY2FsQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIlRyZWFudEtub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSwgXCJraW5kXCI6IFwiVHJlYW50RHJvcENoYW5jZVwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRyZWFudEx1bmNoYm94XCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4yXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMiwgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlRvd25NYXRHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiUGV0RVhQR2FpblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJUcmVhbnRcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IC0yLCBcImtpbmRcIjogXCJTa2lsbFByb2ZpY2llbmN5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogNTAwLCBcImluaXRWYWx1ZVwiOiA1MDAwLCBcImtpbmRcIjogXCJIUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAwLCBcImluaXRWYWx1ZVwiOiAyMDAwLCBcImtpbmRcIjogXCJNUEFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJIUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAxLCBcImluaXRWYWx1ZVwiOiAwLjUsIFwia2luZFwiOiBcIk1QTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAxLCBcImtpbmRcIjogXCJIcFJlZ2VuTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAxLCBcImtpbmRcIjogXCJNcFJlZ2VuTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZsYW1lVGlnZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAtMiwgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDUwMCwgXCJpbml0VmFsdWVcIjogNTAwMCwgXCJraW5kXCI6IFwiSFBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwMCwgXCJpbml0VmFsdWVcIjogMjAwMCwgXCJraW5kXCI6IFwiTVBBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDEsIFwiaW5pdFZhbHVlXCI6IDAuNSwgXCJraW5kXCI6IFwiSFBNdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogMC41LCBcImtpbmRcIjogXCJNUE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiSHBSZWdlbk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiA1ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiTXBSZWdlbk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGbGFtZXRpZ2VyUG9ydGFibGVIb3RTcHJpbmdcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRVhQR2Fpbk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjIsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluM1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDMsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5TXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRmxhbWV0aWdlclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IC0xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkFybW9yZWRGdXJ5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMjUsIFwiaW5pdFZhbHVlXCI6IC0xLCBcImtpbmRcIjogXCJFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBoeXNpY2FsRGFtYWdlTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwMSwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIkFybW9yZWRGdXJ5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiREVGQWRkZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyLCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkRFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGbGFtZXRpZ2VyVm9sY2FuaWNTaGllbGRcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlN0b25lVG93blJlc2VhcmNoUG93ZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJDcnlzdGFsVG93blJlc2VhcmNoUG93ZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTGVhZlRvd25SZXNlYXJjaFBvd2VyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMywgXCJraW5kXCI6IFwiU1BETXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50TXVsdGlwbGllclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZsYW1ldGlnZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogLTQsIFwia2luZFwiOiBcIkRlYnVmZlJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQaHlzaWNhbENyaXRpY2FsTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5NdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5NdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmxhbWVUaWdlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRmxhbWVUaWdlckRyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMSwgXCJpbml0VmFsdWVcIjogLTQsIFwia2luZFwiOiBcIkRlYnVmZlJlc2lzdGFuY2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQaHlzaWNhbENyaXRpY2FsTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjEsIFwia2luZFwiOiBcIkVYUEdhaW5NdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5NdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmxhbWVUaWdlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRmxhbWVUaWdlckRyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJraW5kXCI6IFwiRmxhbWV0aWdlclN0cmlwZWRCcmllZnNcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkFybW9yZWRGdXJ5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiV2FyZGVkRnVyeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMSwgXCJraW5kXCI6IFwiR29sZEdhaW5NdWx0aXBsaWVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDEsIFwia2luZFwiOiBcIkd1aWxkRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlBldEVYUEdhaW5NdWx0aXBsaWVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJwYXJ0XCI6IFwiQXJtb3JcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGbGFtZXRpZ2VyXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAtMiwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAyLjVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxSYW5nZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLjVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAxLCBcImtpbmRcIjogXCJXaXphcmRTa2lsbFJhbmdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiQW5nZWxTa2lsbFJhbmdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiVGhpZWZTa2lsbFJhbmdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiQXJjaGVyU2tpbGxSYW5nZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIuNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDEsIFwia2luZFwiOiBcIlRhbWVyU2tpbGxSYW5nZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZsYW1lVGlnZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAtMiwgXCJraW5kXCI6IFwiR29sZEdhaW5cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAyLjVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJXYXJyaW9yU2tpbGxSYW5nZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLjVlLTUsIFwiaW5pdFZhbHVlXCI6IDAuMDAxLCBcImtpbmRcIjogXCJXaXphcmRTa2lsbFJhbmdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiQW5nZWxTa2lsbFJhbmdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiVGhpZWZTa2lsbFJhbmdlXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiQXJjaGVyU2tpbGxSYW5nZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIuNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDEsIFwia2luZFwiOiBcIlRhbWVyU2tpbGxSYW5nZVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZsYW1lVGlnZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlRvcmNoT2ZFdmVyYnVybmluZ0ZsYW1ldGlnZXJcIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIlN0b25lVG93blJlc2VhcmNoUG93ZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJDcnlzdGFsVG93blJlc2VhcmNoUG93ZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiTGVhZlRvd25SZXNlYXJjaFBvd2VyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMywgXCJraW5kXCI6IFwiU1BETXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMjUsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50TXVsdGlwbGllclwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIldlYXBvblwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZsYW1ldGlnZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IC0yLCBcImtpbmRcIjogXCJFcXVpcG1lbnRQcm9maWNpZW5jeVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBldFBoeXNpY2FsQ3JpdGljYWxDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiUGV0TWFnaWNhbENyaXRpY2FsQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjMsIFwia2luZFwiOiBcIlBldENyaXRpY2FsRGFtYWdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBldEVYUEdhaW5NdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5NdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZsYW1lVGlnZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAtMiwgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4xLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlBldE1hZ2ljYWxDcml0aWNhbENoYW5jZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4zLCBcImtpbmRcIjogXCJQZXRDcml0aWNhbERhbWFnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDA1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlRhbWluZ1BvaW50TXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4xLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJQZXRFWFBHYWluTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4xLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJGbGFtZXRpZ2VyQ29zdHVtZVwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wNSwgXCJraW5kXCI6IFwiQXJtb3JlZEZ1cnlcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJXYXJkZWRGdXJ5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4xLCBcImtpbmRcIjogXCJHb2xkR2Fpbk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAzLCBcImtpbmRcIjogXCJOb3RoaW5nXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMSwgXCJraW5kXCI6IFwiR3VpbGRFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yNSwgXCJraW5kXCI6IFwiUGV0RVhQR2Fpbk11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJBcm1vclwiLFxyXG4gICAgICAgIFwic2V0S2luZFwiOiBcIkZsYW1ldGlnZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJlZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDI1LCBcImluaXRWYWx1ZVwiOiAtMSwgXCJraW5kXCI6IFwiRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGaXJlRGFtYWdlTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiSWNlRGFtYWdlTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiVGh1bmRlckRhbWFnZU11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpZ2h0RGFtYWdlTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRGFya0RhbWFnZU11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDEsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJXYXJkZWRGdXJ5XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMjAsIFwiaW5pdFZhbHVlXCI6IDIwMCwgXCJraW5kXCI6IFwiTURFRkFkZGVyXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMiwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJNREVGTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZsYW1lVGlnZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAyNSwgXCJpbml0VmFsdWVcIjogLTEsIFwia2luZFwiOiBcIkVYUEdhaW5cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRmlyZURhbWFnZU11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkljZURhbWFnZU11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaWdodERhbWFnZU11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkRhcmtEYW1hZ2VNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDAxLCBcImluaXRWYWx1ZVwiOiAwLjAyNSwgXCJraW5kXCI6IFwiV2FyZGVkRnVyeVwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIwLCBcImluaXRWYWx1ZVwiOiAyMDAsIFwia2luZFwiOiBcIk1ERUZBZGRlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDIsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiTURFRk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJSaW5nT2ZGbGFtZXRpZ2Vyc1dyYXRoXCIsXHJcbiAgICAgICAgXCJsZXZlbE1heEVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjA1LCBcImtpbmRcIjogXCJTdG9uZVRvd25SZXNlYXJjaFBvd2VyXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMCxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDUsIFwia2luZFwiOiBcIkxlYWZUb3duUmVzZWFyY2hQb3dlclwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDMsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjMsIFwia2luZFwiOiBcIlNQRE11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLCBcImluaXRWYWx1ZVwiOiAwLjI1LCBcImtpbmRcIjogXCJUYW1pbmdQb2ludE11bHRpcGxpZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJXZWFwb25cIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGbGFtZXRpZ2VyXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDI1LCBcImluaXRWYWx1ZVwiOiAtMTAsIFwia2luZFwiOiBcIlRhbWluZ1BvaW50XCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IC0xMCwgXCJraW5kXCI6IFwiTG95YWx0eVBvaW50R2FpblwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAyNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiU3RvbmVUb3duUmVzZWFyY2hQb3dlclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMjUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkNyeXN0YWxUb3duUmVzZWFyY2hQb3dlclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMjUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxlYWZUb3duUmVzZWFyY2hQb3dlclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLjAwMDI1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAxLFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJCbGVzc2luZ0VmZmVjdE11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmxhbWVUaWdlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRmxhbWVUaWdlckRyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMjUsIFwiaW5pdFZhbHVlXCI6IC0xMCwgXCJraW5kXCI6IFwiVGFtaW5nUG9pbnRcIiB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAyNSwgXCJpbml0VmFsdWVcIjogLTEwLCBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDEsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJTdG9uZVRvd25SZXNlYXJjaFBvd2VyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAyNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAxLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAyNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGVhZlRvd25SZXNlYXJjaFBvd2VyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAwMjUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkJsZXNzaW5nRWZmZWN0TXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAwLjAwNSwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJGbGFtZVRpZ2VyS25vd2xlZGdlXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogNWUtNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wMDA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJGbGFtZVRpZ2VyRHJvcENoYW5jZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImtpbmRcIjogXCJFbmRsZXNzQm93bE9mU3BpY3lGbGFtZXRpZ2VyUmFtZW5cIixcclxuICAgICAgICBcImxldmVsTWF4RWZmZWN0c1wiOiBbXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRVhQR2Fpbk11bHRpcGxpZXJcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjIsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDAuMDI1LCBcImtpbmRcIjogXCJSZWJpcnRoUG9pbnRHYWluM1wiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAsIFwiaW5pdFZhbHVlXCI6IDMsIFwia2luZFwiOiBcIk5vdGhpbmdcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkVxdWlwbWVudFByb2ZpY2llbmN5TXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiAwLFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjI1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllclwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInBhcnRcIjogXCJKZXdlbHJ5XCIsXHJcbiAgICAgICAgXCJzZXRLaW5kXCI6IFwiRmxhbWV0aWdlclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImVmZmVjdHNcIjogW1xyXG4gICAgICAgICAgeyBcImJhc2VWYWx1ZVwiOiAyLjUsIFwiaW5pdFZhbHVlXCI6IC0xMDAwLCBcImtpbmRcIjogXCJBbGxTa2lsbExldmVsXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJiYXNlVmFsdWVcIjogMC4wMDI1LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjA1LFxyXG4gICAgICAgICAgICBcImtpbmRcIjogXCJHb2xkR2Fpbk11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41ZS01LCBcImluaXRWYWx1ZVwiOiAwLjAwMSwgXCJraW5kXCI6IFwiR3VpbGRFWFBHYWluXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMC4wMDUsIFwiaW5pdFZhbHVlXCI6IDAuMiwgXCJraW5kXCI6IFwiRmxhbWVUaWdlcktub3dsZWRnZVwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDVlLTUsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMDAwNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRmxhbWVUaWdlckRyb3BDaGFuY2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMi41LCBcImluaXRWYWx1ZVwiOiAtMTAwMCwgXCJraW5kXCI6IFwiQWxsU2tpbGxMZXZlbFwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAuMDAyNSxcclxuICAgICAgICAgICAgXCJpbml0VmFsdWVcIjogMC4wNSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiR29sZEdhaW5NdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDIuNWUtNSwgXCJpbml0VmFsdWVcIjogMC4wMDEsIFwia2luZFwiOiBcIkd1aWxkRVhQR2FpblwiIH0sXHJcbiAgICAgICAgICB7IFwiYmFzZVZhbHVlXCI6IDAuMDA1LCBcImluaXRWYWx1ZVwiOiAwLjIsIFwia2luZFwiOiBcIkZsYW1lVGlnZXJLbm93bGVkZ2VcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImJhc2VWYWx1ZVwiOiA1ZS01LFxyXG4gICAgICAgICAgICBcImluaXRWYWx1ZVwiOiAwLjAwMDUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZsYW1lVGlnZXJEcm9wQ2hhbmNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwia2luZFwiOiBcIlNjcmVlbk9mVGhlU25lYWt5RmxhbWV0aWdlclwiLFxyXG4gICAgICAgIFwibGV2ZWxNYXhFZmZlY3RzXCI6IFtcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4yLCBcImtpbmRcIjogXCJFWFBHYWluTXVsdGlwbGllclwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMixcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2tpbGxQcm9maWNpZW5jeU11bHRpcGxpZXJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMC4wMjUsIFwia2luZFwiOiBcIlJlYmlydGhQb2ludEdhaW4zXCIgfSxcclxuICAgICAgICAgIHsgXCJiYXNlVmFsdWVcIjogMCwgXCJpbml0VmFsdWVcIjogMywgXCJraW5kXCI6IFwiTm90aGluZ1wiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMSxcclxuICAgICAgICAgICAgXCJraW5kXCI6IFwiRXF1aXBtZW50UHJvZmljaWVuY3lNdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYmFzZVZhbHVlXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaW5pdFZhbHVlXCI6IDAuMjUsXHJcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxveWFsdHlQb2ludEdhaW5NdWx0aXBsaWVyXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicGFydFwiOiBcIkpld2VscnlcIixcclxuICAgICAgICBcInNldEtpbmRcIjogXCJGbGFtZXRpZ2VyXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuICAiLCJpbXBvcnQgeyBjb252ZXJ0LCBjb252ZXJ0Miwgc2lnbWEsIGFkZEV2ZW50IH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5cbmNsYXNzIFNsaW1lQmFuayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmFtZSA9IFwic2xpbWVCYW5rXCI7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgcmVzZWFyY2g6IHtcbiAgICAgICAgbGVhZjogeyBsZXZlbDogMCwgdmFsdWU6IDAgfSxcbiAgICAgICAgc3RvbmU6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXG4gICAgICB9LFxuXG4gICAgICBzbGltZUNvaW5DYXAxOiB7XG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICB2YWx1ZTogMTAwMDAsXG4gICAgICAgIGNvc3Q6IDEwMDAwLFxuICAgICAgfSxcbiAgICAgIHNsaW1lQ29pbkNhcDI6IHtcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgIGNvc3Q6IDEwMDAwMDAwMDAwLFxuICAgICAgfSxcbiAgICAgIHNsaW1lQ29pbkNhcFRvdGFsOiAwLFxuICAgICAgaW50cmVzdDogMCxcbiAgICAgIG11bHRpcGxpZXI6IDAsXG4gICAgICBwZXQxOiB7XG4gICAgICAgIHJhbms6IDAsXG4gICAgICAgIGxveWFsdHk6IDAsXG4gICAgICAgIHBhc3NpdmU6IDAsXG4gICAgICB9LFxuICAgICAgbWlsZXN0b25lMTgwMDogZmFsc2UsXG4gICAgICBtaWxlc3RvbmUyNzAwOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJjbGFzcyBjb25zdHJ1Y3RvciBha2EgSW5pdFwiKTtcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hTdG9uZS5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5yZXNlYXJjaExlYWYuYmluZCh0aGlzKSk7XG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMS5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zbGltZUNvaW5DYXAyLmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwicGV0MS5yYW5rXCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwicGV0MS5sb3lhbHR5XCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwibWlsZXN0b25lMTgwMFwiLCBcImNoYW5nZVwiLCB0aGlzLm1pbGVzdG9uZS5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTI3MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXkoKVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZygkKFwiI3Jlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWw7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWw7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLnZhbHVlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZVxuICAgICk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZVxuICAgICk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmNvc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLmludHJlc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuaW50cmVzdCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXBUb3RhbFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmsubXVsdGlwbGllclwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEubXVsdGlwbGllcjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucGFzc2l2ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucGV0MS5wYXNzaXZlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlID0gdGhpcy5kYXRhLnBldDEucmFuaztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLmxveWFsdHk7XG5cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1pbGVzdG9uZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIHBldCgpIHtcbiAgICB0aGlzLmRhdGEucGV0MS5yYW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnJhbmtcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnBldDEubG95YWx0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5sb3lhbHR5XCIpLnZhbHVlO1xuICAgIGxldCBsb3lhbHR5ID0gMi41ICogKHBhcnNlRmxvYXQodGhpcy5kYXRhLnBldDEubG95YWx0eSkgKyAxMDApICogMC4wMTtcbiAgICB0aGlzLmRhdGEucGV0MS5wYXNzaXZlID0gcGFyc2VGbG9hdCh0aGlzLmRhdGEucGV0MS5yYW5rICogbG95YWx0eSArIDEwMCkudG9GaXhlZCgyKTtcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICByZXNlYXJjaFN0b25lKCkge1xuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgKiAwLjEpLnRvRml4ZWQoMik7XG4gICAgdGhpcy5pbnRyZXN0KCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICByZXNlYXJjaExlYWYoKSB7XG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgPSArKHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsICogMikudG9GaXhlZCgyKSArIDEwMDtcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgLy8gc2xpbWVCYW5rU2xpbWVDb2luQ2FwVG90YWwoKTtcbiAgfVxuXG4gIHNsaW1lQ29pbkNhcDEoKSB7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPSBjb252ZXJ0Mihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIikudmFsdWUpO1xuICAgIC8vIGlucHV0ID0gY29udmVydDIoaW5wdXQpO1xuXG4gICAgLy8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSBzaWdtYShcbiAgICAvLyAgIDAsXG4gICAgLy8gICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCxcbiAgICAvLyAgIGZ1bmN0aW9uIChhKSB7XG4gICAgLy8gICAgIHJldHVybiBhICogMjAgLSAxMCArIDEwMDAwO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIDEwXG4gICAgLy8gKTtcbiAgICBsZXQgbGV2ZWwgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbDtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSA9IDEwMDAwLjAgKyAxMDAwMC4wICogbGV2ZWwgKyAxMC4wICogTWF0aC5wb3cobGV2ZWwsIDIuMCk7XG5cbiAgICB0aGlzLnNsaW1lQ29pbkNhcDFDb3N0KCk7XG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgc2xpbWVDb2luQ2FwMigpIHtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZTtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSA9XG4gICAgICBzaWdtYShcbiAgICAgICAgMCxcbiAgICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwsXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGEgKiAyMCAtIDEwO1xuICAgICAgICB9LFxuICAgICAgICAxMFxuICAgICAgKSArIDEwMDtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5jb3N0ID0gMTAwMDAwMDAwMDAuMCAqIE1hdGgucG93KDIuMCwgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwpO1xuXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgc2xpbWVDb2luQ2FwVG90YWwoKSB7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsID1cbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlICpcbiAgICAgICh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZSAvIDEwMCkgKlxuICAgICAgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlIC8gMTAwKSAqXG4gICAgICAodGhpcy5kYXRhLnBldDEucGFzc2l2ZSAvIDEwMCk7XG5cbiAgICB0aGlzLmludHJlc3QoKTtcbiAgfVxuXG4gIGludHJlc3QoKSB7XG4gICAgbGV0IGludHJlc3RQZXJjZW50ID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4wMDE7XG5cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDApIHtcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDI1O1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDApIHtcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDU7XG4gICAgfVxuICAgIHRoaXMuZGF0YS5pbnRyZXN0ID0gaW50cmVzdFBlcmNlbnQgKiB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWw7XG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5pbnRyZXN0IC8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgLT0gTWF0aC5yb3VuZCh0aGlzLmRhdGEubXVsdGlwbGllciAqIDAuMTUpO1xuICAgIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xuICB9XG5cbiAgc2xpbWVDb2luQ2FwMUNvc3QoKSB7XG4gICAgLy8gaWYgKChkb3VibGUpIHRoaXMubGV2ZWwudmFsdWUgPj0gNTAwIDAwMCAwMDAuMClcbiAgICAvLyByZXR1cm4gMUUrMTUgKiB0aGlzLkNvc3RNb2RpZmllcigpO1xuXG4gICAgLy8gNTAwVFxuICAgIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjdcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMDAwMDApIHtcbiAgICAgIC8vIDEwMFRcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyNlxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAvLyA1MFRcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTI1XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwMDApIHtcbiAgICAgIC8vIDEwVFxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyNFxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyM1xuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTIyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTIxXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjBcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMTlcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UxOFxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UxN1xuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTE2XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTE1XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMTAwVFxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxMFRcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxVFxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsICogMTAwMDAgKyAxMDAwMDtcbiAgICB9IC8vIG5lZWQgdG8gZmluZCBzb2x1dGlvbiBmb3IgbGVzcyB0aGFuIDEwTSB1cGdyYWRlc1xuICB9XG59XG5cbmV4cG9ydCB7IFNsaW1lQmFuayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZFRhYiwgbG9hZEZyb21GaWxlLCBhZGRFdmVudCwgcmVzdGFydCwgc2F2ZVRvRmlsZSB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBBbnZpbCB9IGZyb20gXCIuL2FudmlsLmpzXCI7XHJcbi8vIGltcG9ydCB7IGV4cGVkaXRpb25Mb2FkIH0gZnJvbSBcIi4vZXhwZWRpdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBTbGltZUJhbmsgfSBmcm9tIFwiLi9zbGltZWJhbmsuanNcIjtcclxuaW1wb3J0IHsgR2VhciB9IGZyb20gXCIuL2dlYXIvZ2Vhci50c1wiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgdmVyc2lvbiA9IFwiMC4xLjJcIjtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIGZuKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICB9XHJcbn1cclxuXHJcbnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyBzdGFydCB1cFxyXG4gIGxvYWQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gIC8vIGN1cnJlbnQgdGFiXHJcbiAgdmFyIHRhYiA9IDA7XHJcbiAgY29uc3QgdGFiX2xpc3QgPSBbXHJcbiAgICB7IGlkOiBcInNsaW1lQmFua1wiLCBuYW1lOiBcIlNsaW1lIEJhbmsgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImxhYlwiLCBuYW1lOiBcIkxhYiBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiYW52aWxcIiwgbmFtZTogXCJBbnZpbCBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiZXhwZWRpdGlvblwiLCBuYW1lOiBcIkV4cGVkaXRpb24gQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImdlYXJcIiwgbmFtZTogXCJHZWFyIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJzZXR0aW5nc1wiLCBuYW1lOiBcIlNldHRpbmdzXCIgfSxcclxuICBdO1xyXG5cclxuICAvLyBjb25zdCB0YWJfbGlzdCA9IFtcInNsaW1lLWJhbmtcIiwgXCJsYWJcIiwgXCJhbnZpbFwiLCBcImV4cGVkaXRpb25cIiwgXCJzZXR0aW5nc1wiXTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpKSB7XHJcbiAgICB0YWJfbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIC8vIGFkZEV2ZW50KGVsZW1lbnQuaWQsIFwiY2xpY2tcIiwgY2hhbmdlVGFiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5pZCk7XHJcbiAgICAgIC8vIHRhYiA9IGVsZW1lbnQgKyBcIi1jYWxjdWxhdG9yXCI7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYWJcIikgPT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgIGxvYWRUYWIoZWxlbWVudC5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGxvYWRpbmdcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2xpbWVCYW5rXCIpIHtcclxuICAgICAgICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJhbnZpbFwiKSB7XHJcbiAgICAgICAgICAgIG5ldyBBbnZpbCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJnZWFyXCIpIHtcclxuICAgICAgICAgICAgbmV3IEdlYXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2V0dGluZ3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIiwgXCJjaGFuZ2VcIiwgbG9hZEZyb21GaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5zYXZlVG9GaWxlXCIsIFwiY2xpY2tcIiwgc2F2ZVRvRmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgc2F2ZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5yZXN0YXJ0XCIsIFwiY2xpY2tcIiwgcmVzdGFydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVzdGFydFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5pbm5lckhUTUwgPSBcIklFSDJjYWxjID4gXCIgKyBlbGVtZW50Lm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCkuc3R5bGUuY29sb3IgPSBcIiNmMmUwMDlcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBcInNsaW1lQmFua1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rXCIpLnN0eWxlLmNvbG9yID0gXCIjZjJlMDA5XCI7XHJcbiAgICBsb2FkVGFiKFwic2xpbWVCYW5rXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsc2UgaW4gbG9hZCB8IGFmdGVyIEluaXRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gQW52aWwgbG9hZGluZ1xyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIsIDEpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLW5pdHJvLXNwZWVkXCIpLnZhbHVlID1cclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiKTtcclxuICAvLyB9XHJcbiAgLy8gYW52aWwgbG9hZCBuZWVkIHJlZmFjdG9yXHJcblxyXG4gIC8vIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAvLyAgIHZhciBpZCA9IDA7XHJcbiAgLy8gICBpZCA9IFwiYW52aWwtZHVuZ2Vvbi1cIiArIGkgKyBcIi10aW1lXCI7XHJcbiAgLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpID09PSBudWxsKSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBjYWxjQW52aWwoKTtcclxuICAvLyBjYWxjRXhwZWRpdGlvbigpO1xyXG4gIC8vIGV4cGVkaXRpb25Mb2FkKCk7XHJcbiAgLy8gbG9hZGluZyB2YWx1ZXMgZnJvbSBsb2NhbFN0b3JhZ2UgZWxzZSBzZXR0aW5nIHZhbHVlcyBhcyAwXHJcbiAgLy8gY29uc3QgbGlzdCA9IFtcclxuICAvLyAgICdhbnZpbC1mb3gtZHVuZ2Vvbi0xLXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tMi10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTMtdGltZScsXHJcbiAgLy8gJ2FudmlsLWZveC1kdW5nZW9uLTQtdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi01LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0xLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0yLXRpbWUnLFxyXG4gIC8vICdhbnZpbC1iYXQtZHVuZ2Vvbi0zLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi00LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi01LXRpbWUnXTtcclxuICAvLyBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlIH07XHJcbiAgLy8gY29uc29sZS5sb2coaXRlbXMpO1xyXG4gIC8vIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAvLyAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgLy8gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlbGVtZW50KSA9PT0gbnVsbCkge3NsaW1lQmFua1Jlc2VhcmNoU3RvbmUoMCk7fVxyXG4gIC8vICBlbHNlIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsJykpO31cclxuICAvLyB9KTtcclxuXHJcbiAgLy8gU2xpbWUgQmFuayBsb2FkaW5nXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZShcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaExlYWYoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLWxlYWYtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoXHJcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpID09PSBudWxsXHJcbiAgLy8gKSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKSA9PT0gbnVsbFxyXG4gIC8vICkge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMigwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgLy8gc2xpbWVCYW5rSW50cmVzdCgpO1xyXG4gIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xyXG4gIC8vIGRlYnVnXHJcbiAgLy8gZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeyAuLi5sb2NhbFN0b3JhZ2UgfSkpIHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKS5pbm5lckhUTUwgKz0gYDxpPiR7a2V5fTo8L2k+IDxiPiR7dmFsdWV9PC9iPjxicj5gO1xyXG4gIC8vIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=