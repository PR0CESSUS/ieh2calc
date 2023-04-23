/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common-exposed.js":
/*!*******************************!*\
  !*** ./src/common-exposed.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./common.js */ "./src/common.js");
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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common-exposed.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);


class Anvil {
  constructor() {
    this.name = "anvil";
    this.data = {
      nitro: 1.0,
      dungeon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    };

    if (localStorage.getItem(this.name) === null) {
      localStorage.setItem(this.name, JSON.stringify(this.data));
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("anvil.nitro.speed", "change", this.save.bind(this));
    for (let i = 1; i <= 10; i++) {
      (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.addEvent)("anvil.dungeon." + i + ".time", "change", this.save.bind(this));
    }

    this.display();
  }

  save() {
    // this.data.dungeon = document.getElementById("research.stone.level").value;
    this.data.nitro = document.getElementById("anvil.nitro.speed").value;
    for (let i = 1; i <= 10; i++) {
      this.data.dungeon[i - 1] = document.getElementById("anvil.dungeon." + i + ".time").value;
    }
    localStorage.setItem(this.name, JSON.stringify(this.data));
    this.display();
  }

  display() {
    document.getElementById("anvil.nitro.speed").value = this.data.nitro;
    // console.log("display()");
    // console.log($("#research.stone.level").value);
    for (let i = 1; i <= 10; i++) {
      let id = "anvil.dungeon." + i + ".time";
      let value = "anvil.dungeon." + i + ".value";
      let time = "anvil.dungeon." + i + ".time";
      let orb = "anvil.dungeon." + i + ".orb";
      let reward = document.getElementById("anvil.dungeon." + i + ".reward").innerHTML;

      document.getElementById(id).value = this.data.dungeon[i - 1];
      document.getElementById(value).innerHTML = Math.round(
        (3600 / this.data.dungeon[i - 1]) * reward * this.data.nitro
      );
      document.getElementById(orb).innerHTML = Math.round(
        (3600 / this.data.dungeon[i - 1]) * this.data.nitro
      );
    }
  }
}




/***/ }),

/***/ "./src/common.js":
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
  let file = "../html/" + tab + ".html";
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

/***/ "./src/gear/gear.js":
/*!**************************!*\
  !*** ./src/gear/gear.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gear": () => (/* binding */ Gear)
/* harmony export */ });
/* harmony import */ var _optimizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optimizer.js */ "./src/gear/optimizer.js");


class Gear {
  name = "gear";
  version = 1;
  data = {
    version: this.version,
    itemLevel: 120,
    includeMastery: true,
    curseAnvil: true,
    lottery: true,
    itemSlots: {
      Jewelry: 19,
      Armor: 19,
      Weapon: 19,
    },
    enchantSlots: 342,
    setBias: 0.075,
    enchantUsage: {
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
    },
  };

  constructor() {
    if (localStorage.getItem(this.name) === null) {
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    if (this.data.version < this.version) {
      alert("missing version migration");
      //this.data.version = this.version;
    }

    this.render();
    this.updateDefaultValues();
  }

  save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }

  render() {
    const enchantUsageTemplate = (id, name) => {
      const nameShort = name
        .replace("Adder", "+")
        .replace("EffectMultiplier", "%")
        .replace("Multiplier", "%")
        .replace("TownResearchPower", "Research")
        .replace("Proficiency", "Prof")
        .replace("SkillLevel", "Skill")
        .replace("Resistance", "Res")
        .replace("DropChance", "Drop")
        .replace("Critical", "Crit")
        .replace("Damage", "Dmg")
        .replace("SkillEffectRange", "Range")
        .replace("Knowledge", "Dmg")
        .replace("PetPhysical", "PetPhys")
        .replace("PetMagical", "PetMag")
        .replace("CatalystDoubleCritChance", "CataDblCrit")
        .replace("TownMatAreaClearGain", "TownMatAreaGain");

      return `<label title="${name}">${nameShort} <input id="enchantUsage.${id}" type="text" size="5"/></label>`;
    };
    let enchantUsageHTML = "";
    for (const id in this.data.enchantUsage) {
      enchantUsageHTML += enchantUsageTemplate(id, id);
    }
    document.querySelector("#enchantUsageInputWrapper").innerHTML =
      enchantUsageHTML;

    document
      .querySelector("#userInput")
      .addEventListener("change", this.inputChanged.bind(this));

    document
      .querySelector("#optimize")
      .addEventListener("click", this.optimize.bind(this));
  }

  inputChanged(event) {
    const target = event.target;
    const id = target.id;
    const idParts = id.split(".");

    switch (idParts[0]) {
      case "itemLevel":
        this.data.itemLevel = parseInt(target.value);
        break;
      case "includeMastery":
        this.data.includeMastery = target.checked;
        break;
      case "curseAnvil":
        this.data.curseAnvil = target.checked;
        break;
      case "lottery":
        this.data.lottery = target.checked;
        break;
      case "itemSlots":
        this.data.itemSlots[idParts[1]] = parseInt(target.value);
        break;
      case "enchantSlots":
        this.data.enchantSlots = parseInt(target.value);
        break;
      case "setBias":
        this.data.setBias = parseFloat(target.value);
        break;
      case "enchantUsage":
        this.data.enchantUsage[idParts[1]] = target.value;
        break;
      default:
        console.error("inputChanged for unknown id", id, arguments);
        break;
    }
  }

  updateDefaultValues() {
    document.querySelectorAll("input").forEach((input) => {
      const id = input.id;
      const idParts = id.split(".");
      switch (idParts[0]) {
        case "itemLevel":
          input.value = this.data.itemLevel;
          break;
        case "includeMastery":
          input.checked = this.data.includeMastery;
          break;
        case "curseAnvil":
          input.checked = this.data.curseAnvil;
          break;
        case "lottery":
          input.checked = this.data.lottery;
          break;
        case "itemSlots":
          input.value = this.data.itemSlots[idParts[1]];
          break;
        case "enchantSlots":
          input.value = this.data.enchantSlots;
          break;
        case "setBias":
          input.value = this.data.setBias;
          break;
        case "enchantUsage":
          input.value = this.data.enchantUsage[idParts[1]];
          break;
        default:
          console.error("updateHTMLValues for unknown id", id, arguments);
          break;
      }
    });
  }

  toggleOptimizeButton(enable) {
    const button = document.querySelector("#optimize");
    if (enable) {
      button.disabled = false;
      button.classList.remove("button-grey");
      button.classList.add("button-orange");
    } else {
      button.disabled = true;
      button.classList.remove("button-orange");
      button.classList.add("button-grey");
    }
  }

  optimize() {
    this.toggleOptimizeButton(false);

    this.save();

    const optimizer = new _optimizer_js__WEBPACK_IMPORTED_MODULE_0__.Optimizer(this.data);
    optimizer.optimize();

    let html =
      "<h2>Results</h2><p>click on the headers to collapse the section</p>";

    html += `<h3>items</h3><pre>${JSON.stringify(
      optimizer.items,
      (key, value) => {
        delete value.effects;
        delete value.levelMaxEffects;
        return value;
      },
      2
    )}</pre>`;

    html += `<h3>totalEseWithEnchants</h3><pre>${JSON.stringify(
      optimizer.totalEseWithEnchants,
      null,
      2
    )}</pre>`;

    html += `<h3>bestEnchants</h3><pre>${JSON.stringify(
      optimizer.bestEnchants,
      null,
      2
    )}</pre>`;

    html += `<h3>bestItems</h3><pre>${JSON.stringify(
      optimizer.bestItems,
      (key, value) => {
        delete value.effects;
        delete value.levelMaxEffects;
        delete value.relEffects;
        delete value.ese;
        delete value.part;
        return value;
      },
      2
    )}</pre>`;

    html += `<h3>setItems</h3><pre>${JSON.stringify(
      optimizer.setItems,
      null,
      2
    )}</pre>`;

    html += `<h3>total</h3><pre>${JSON.stringify(
      optimizer.getTotalEnchantsValue(optimizer.totalEseWithEnchants),
      null,
      2
    )}</pre>`;

    //TODO breakdown totalEseWithEnchants by sources
    document.querySelector("#optimizeResult").innerHTML = html;

    document.querySelectorAll("#optimizeResult > h3").forEach((header) => {
      header.addEventListener("click", (event) => {
        const target = event.target;
        const nextSibling = target.nextElementSibling;
        console.log(nextSibling);
        if (nextSibling.style.display === "none") {
          nextSibling.style.display = "block";
        } else {
          nextSibling.style.display = "none";
        }
      });
    });

    this.toggleOptimizeButton(true);
  }
}




/***/ }),

/***/ "./src/gear/optimizer.js":
/*!*******************************!*\
  !*** ./src/gear/optimizer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Optimizer": () => (/* binding */ Optimizer)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/gear/data.json");


class Optimizer {
  itemLevel = 120;
  includeMastery = true;
  curseAnvil = true;
  lottery = true;
  itemSlots = {
    Jewelry: 19,
    Armor: 19,
    Weapon: 19,
  };
  enchantSlots = 342;
  setBias = 0.075;
  enchantUsage = {
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

  constructor(userInput) {
    this.itemLevel = userInput.itemLevel;
    this.includeMastery = userInput.includeMastery;
    this.curseAnvil = userInput.curseAnvil;
    this.lottery = userInput.lottery;
    this.itemSlots = userInput.itemSlots;
    this.enchantSlots = userInput.enchantSlots;
    this.setBias = userInput.setBias;
    this.enchantUsage = userInput.enchantUsage;
  }

  optimize() {
    console.log("Optimizer.optimize() called");
    this.step1();
    this.step2();
  }

  enchantMap = {};
  calcEnchantEffectValue(effect) {
    let enchant = this.enchantMap[effect.kind];
    let enchantEffectValue = enchant.maxValue;
    if (this.lottery) {
      enchantEffectValue = enchant.maxValueLottery;
    }

    return enchantEffectValue;
  }
  calcItemEffectValue(effect) {
    let itemEffectValue = effect.initValue + effect.baseValue * this.itemLevel;

    if (itemEffectValue < 0 && this.curseAnvil) {
      //this is a cursed effect, if we add curse anvils it will be nullified
      return 0;
    }

    return itemEffectValue;
  }
  items = [];
  step1() {
    let enchantUsageAddedNew = false;

    for (let enchant of _data_json__WEBPACK_IMPORTED_MODULE_0__.enchants) {
      this.enchantMap[enchant.kind] = enchant;

      if (typeof this.enchantUsage[enchant.kind] === "undefined") {
        console.warn(
          "found new enchant not listed in enchantUsage",
          enchant.kind
        );
        this.enchantUsage[enchant.kind] = "";
        enchantUsageAddedNew = true;
      }
    }

    if (enchantUsageAddedNew) {
      console.warn(
        "============================================================="
      );
      console.warn(
        "====================printing enchantUsage===================="
      );
      console.warn(
        "============================================================="
      );
      console.warn(this.enchantUsage);
      console.warn(this.enchantUsage);
      console.warn(
        "============================================================="
      );
      console.warn(
        "============================================================="
      );
      console.warn(
        "============================================================="
      );
    }

    for (let item of _data_json__WEBPACK_IMPORTED_MODULE_0__.items) {
      //filter out very bad items
      if (item.setKind === "Nothing") {
        continue;
      }

      this.items.push(item);
    }

    for (let item of this.items) {
      let ese = {
        slots: 4,
        masteries: 0,
        effects: 0,
        sum: 0,
      };

      let relEffects = {};

      for (let effect of item.effects) {
        if (typeof relEffects[effect.kind] === "undefined") {
          relEffects[effect.kind] = 0;
        }
        let itemEffectValue = this.calcItemEffectValue(effect);
        let enchantEffectValue = this.calcEnchantEffectValue(effect);
        relEffects[effect.kind] += itemEffectValue / enchantEffectValue;

        //if we care about this effect, include in the ese
        if (this.enchantUsage[effect.kind]) {
          ese.effects += itemEffectValue / enchantEffectValue;
        }
      }

      if (this.includeMastery) {
        for (let effect of item.levelMaxEffects) {
          //effect.kind Nothing are enchant Slots
          if (effect.kind === "Nothing") {
            if (effect.initValue === 3) {
              ese.slots = 7;
            } else {
              ese.slots = 6;
            }
            continue;
          }

          if (typeof relEffects[effect.kind] === "undefined") {
            relEffects[effect.kind] = 0;
          }
          let itemEffectValue = this.calcItemEffectValue(effect);
          relEffects[effect.kind] += itemEffectValue;

          //if we care about this effect, include in the ese
          if (this.enchantUsage[effect.kind]) {
            ese.masteries +=
              itemEffectValue / this.calcEnchantEffectValue(effect);
          }
        }
      }

      ese.sum = ese.slots + ese.masteries + ese.effects;

      item.ese = ese;

      item.relEffects = relEffects;
    }

    this.items.sort((a, b) => {
      return b.ese.sum - a.ese.sum;
    });
  }

  totalEseWithEnchants = {};
  bestEnchants = {};
  bestItems = {
    Jewelry: [],
    Armor: [],
    Weapon: [],
  };
  setItems = {};

  //TODO return a object not a float
  // have seperate values for dps and gains, ...
  getTotalEnchantsValue(enchants, enchantsToAdd) {
    let total = 1;

    //TODO improve the accuracy
    // consider base enchant value
    // consider outleir like fury
    //consider target caps for dps and crit chance
    for (let effectKind in enchants) {
      //if we dont care for these dont include them in the value
      if (!this.enchantUsage[effectKind]) {
        continue;
      }

      let effectValue = enchants[effectKind];
      if (enchantsToAdd && enchantsToAdd[effectKind]) {
        effectValue += enchantsToAdd[effectKind];
      }

      total *= 1 + effectValue;
    }

    return total;
  }
  step2() {
    let totalEse = {};
    for (let effectKind in this.enchantUsage) {
      totalEse[effectKind] = 0;
      if (this.enchantUsage[effectKind]) {
        this.totalEseWithEnchants[effectKind] = 0;
      }
    }

    let setItemsEffectMult = [1, 1, 1.05, 1.1, 1.14, 1.19, 1.25, 1.35, 1.5];
    for (let item of this.items) {
      item.setEffectMult = 0;
      if (item.setKind !== "Nothing") {
        if (!this.setItems[item.setKind]) {
          this.setItems[item.setKind] = {
            newSetItemValue: 0,
            activeSetItems: 0,
          };
        }
        this.setItems[item.setKind][item.kind] = false;
      }
    }

    const findBestItem = (part) => {
      for (let item of this.items) {
        if (item.part === part) {
          //items is sorted, so we just return the first which matches the part
          return item;
        }
      }

      return null;
    };

    const addItemToTotalEse = (item) => {
      for (let effectKind in item.relEffects) {
        if (item.relEffects[effectKind] === 0) {
          continue;
        }

        totalEse[effectKind] +=
          item.relEffects[effectKind] * item.setEffectMult;
      }
    };

    const addItem = (item) => {
      if (!this.setItems[item.setKind][item.kind]) {
        this.setItems[item.setKind][item.kind] = true;
        this.setItems[item.setKind].activeSetItems++;

        //update all set item strength
        for (let setItem of this.items) {
          if (setItem.setKind === item.setKind) {
            setItem.setEffectMult =
              setItemsEffectMult[this.setItems[item.setKind].activeSetItems];
          }
        }

        //recalculate totalEse with changed set strength
        for (let effectKind in totalEse) {
          totalEse[effectKind] = 0;
        }
        for (let part in this.bestItems) {
          for (let item in this.bestItems[part]) {
            addItemToTotalEse(item);
          }
        }
      }

      this.bestItems[item.part].push(item);

      //update the totalEse
      addItemToTotalEse(item);
    };

    const updateEse = () => {
      //reset totalEseWithEnchants
      this.totalEseWithEnchants = {};
      for (let effectKind in totalEse) {
        this.totalEseWithEnchants[effectKind] = totalEse[effectKind];
      }

      //calcualte the average set effect mult, new enchants will use this one
      let averageSetEffectMult = 1;
      let equippedItemCount = 0;
      for (let part in this.bestItems) {
        for (let item of this.bestItems[part]) {
          equippedItemCount++;

          if (equippedItemCount === 1)
            averageSetEffectMult = item.setEffectMult;
          else averageSetEffectMult += item.setEffectMult;
        }
      }
      if (equippedItemCount > 0) {
        averageSetEffectMult /= equippedItemCount;
      }

      let enchantsToSpent = this.enchantSlots;
      while (enchantsToSpent > 0) {
        let lowestEffectKind = "";
        let lowestEnchantValue = Number.MAX_VALUE;

        for (let effectKind in this.enchantUsage) {
          if (this.enchantUsage[effectKind]) {
            if (this.totalEseWithEnchants[effectKind] < lowestEnchantValue) {
              lowestEffectKind = effectKind;
              lowestEnchantValue = this.totalEseWithEnchants[effectKind];
            }
          }
        }

        //TODO include average setEffectMult
        this.totalEseWithEnchants[lowestEffectKind] += averageSetEffectMult;
        enchantsToSpent--;
      }
      //TODO do this for up to +7 enchants for item.ese.slots

      for (let item of this.items) {
        //TODO factor in item.ese.slots, choose the totalEseWithEnchants accordingly
        item.ese.updatedSum = this.getTotalEnchantsValue(
          this.totalEseWithEnchants,
          item.relEffects
        );
      }

      //after all new itemValues have been calculated, update the setItemValues
      //  and increase the value of items which are part of an incomplete set
      for (let setKind in this.setItems) {
        this.setItems[setKind].newSetItemValue = 0;
      }
      for (let itemPart in this.bestItems) {
        for (let item of this.bestItems[itemPart]) {
          this.setItems[item.setKind].newSetItemValue +=
            item.ese.updatedSum * this.setBias;
        }
      }
      for (let item of this.items) {
        //if this is a new set item, add the value of the other items atop of it
        if (!this.setItems[item.setKind][item.kind]) {
          item.ese.updatedSum += this.setItems[item.setKind].newSetItemValue;
        }
      }

      this.items.sort((a, b) => {
        return b.ese.updatedSum - a.ese.updatedSum;
      });
    };

    const constructBestItems = () => {
      while (true) {
        let bestPart = "";
        let bestPartFreeSlots = 0;

        for (let part in this.itemSlots) {
          let freeSlots = this.itemSlots[part] - this.bestItems[part].length;
          if (freeSlots > bestPartFreeSlots) {
            bestPart = part;
            bestPartFreeSlots = freeSlots;
          }
        }

        //no more items to add, we are done
        if (bestPart === "") {
          return;
        }

        let bestItem = findBestItem(bestPart);
        addItem(bestItem);

        updateEse();
      }
    };

    constructBestItems();
    for (let part in this.bestItems) {
      this.bestItems[part].sort((a, b) => {
        if (a.ese.sum < b.ese.sum) {
          return 1;
        }
        if (a.ese.sum > b.ese.sum) {
          return -1;
        }
        return 0;
      });
    }

    for (let effectKind in this.totalEseWithEnchants) {
      if (this.enchantUsage[effectKind]) {
        this.bestEnchants[effectKind] = Math.round(
          this.totalEseWithEnchants[effectKind] - totalEse[effectKind]
        );
      }
    }

    console.log({
      bestTotalEseWithEnchants: this.totalEseWithEnchants,
      bestEnchants: this.bestEnchants,
      bestItems: this.bestItems,
    });
  }
}


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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common-exposed.js");
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
    if (this.data.slimeCoinCap1.level >= 50000000000) {
      this.data.slimeCoinCap1.cost = 10000000000000000000;
    } // 1.00+E19
    if (this.data.slimeCoinCap1.level >= 10000000000) {
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




/***/ }),

/***/ "./src/gear/data.json":
/*!****************************!*\
  !*** ./src/gear/data.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"enchants":[{"kind":"HPAdder","maxLevel":10,"maxValue":1000,"maxValueLottery":1210},{"kind":"MPAdder","maxLevel":10,"maxValue":500,"maxValueLottery":605},{"kind":"ATKAdder","maxLevel":10,"maxValue":100,"maxValueLottery":121},{"kind":"MATKAdder","maxLevel":10,"maxValue":100,"maxValueLottery":121},{"kind":"DEFAdder","maxLevel":10,"maxValue":100,"maxValueLottery":121},{"kind":"MDEFAdder","maxLevel":10,"maxValue":100,"maxValueLottery":121},{"kind":"SPDAdder","maxLevel":10,"maxValue":100,"maxValueLottery":121},{"kind":"HPMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"MPMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"ATKMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"MATKMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"DEFMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"MDEFMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"ATKPropotion","maxLevel":5,"maxValue":0.5,"maxValueLottery":0.6},{"kind":"MATKPropotion","maxLevel":5,"maxValue":0.5,"maxValueLottery":0.6},{"kind":"DEFPropotion","maxLevel":5,"maxValue":0.5,"maxValueLottery":0.6},{"kind":"MDEFPropotion","maxLevel":5,"maxValue":0.5,"maxValueLottery":0.6},{"kind":"FireResistance","maxLevel":10,"maxValue":0.2,"maxValueLottery":0.22},{"kind":"IceResistance","maxLevel":10,"maxValue":0.2,"maxValueLottery":0.22},{"kind":"ThunderResistance","maxLevel":10,"maxValue":0.2,"maxValueLottery":0.22},{"kind":"LightResistance","maxLevel":10,"maxValue":0.2,"maxValueLottery":0.22},{"kind":"DarkResistance","maxLevel":10,"maxValue":0.2,"maxValueLottery":0.22},{"kind":"PhysicalAbsorption","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.09},{"kind":"FireAbsorption","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.09},{"kind":"IceAbsorption","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.09},{"kind":"ThunderAbsorption","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.09},{"kind":"LightAbsorption","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.09},{"kind":"DarkAbsorption","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.09},{"kind":"DebuffResistance","maxLevel":5,"maxValue":0.25,"maxValueLottery":0.3},{"kind":"EquipmentDropChance","maxLevel":10,"maxValue":0.00021999999999999998,"maxValueLottery":0.000264},{"kind":"SlimeDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"MagicSlimeDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"SpiderDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"BatDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"FairyDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"FoxDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"DevilFishDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"TreantDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"FlameTigerDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"UnicornDropChance","maxLevel":10,"maxValue":0.011000000000000001,"maxValueLottery":0.0132},{"kind":"ColorMaterialDropChance","maxLevel":10,"maxValue":0.00010999999999999999,"maxValueLottery":0.000132},{"kind":"PhysicalCritical","maxLevel":2,"maxValue":0.06,"maxValueLottery":0.09},{"kind":"MagicalCritical","maxLevel":2,"maxValue":0.06,"maxValueLottery":0.09},{"kind":"EXPGain","maxLevel":10,"maxValue":1.1,"maxValueLottery":1.32},{"kind":"SkillProficiency","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"EquipmentProficiency","maxLevel":10,"maxValue":0.275,"maxValueLottery":0.33},{"kind":"MoveSpeedMultiplier","maxLevel":10,"maxValue":0.11,"maxValueLottery":0.132},{"kind":"GoldGain","maxLevel":5,"maxValue":0.3,"maxValueLottery":0.42},{"kind":"StoneGain","maxLevel":10,"maxValue":5,"maxValueLottery":6.05},{"kind":"CrystalGain","maxLevel":10,"maxValue":5,"maxValueLottery":6.05},{"kind":"LeafGain","maxLevel":10,"maxValue":5,"maxValueLottery":6.05},{"kind":"WarriorSkillLevel","maxLevel":10,"maxValue":20,"maxValueLottery":22},{"kind":"WizardSkillLevel","maxLevel":10,"maxValue":20,"maxValueLottery":22},{"kind":"AngelSkillLevel","maxLevel":10,"maxValue":20,"maxValueLottery":22},{"kind":"ThiefSkillLevel","maxLevel":10,"maxValue":20,"maxValueLottery":22},{"kind":"ArcherSkillLevel","maxLevel":10,"maxValue":20,"maxValueLottery":22},{"kind":"TamerSkillLevel","maxLevel":10,"maxValue":20,"maxValueLottery":22},{"kind":"AllSkillLevel","maxLevel":10,"maxValue":10,"maxValueLottery":11},{"kind":"SlimeKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"MagicSlimeKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"SpiderKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"BatKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"FairyKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"FoxKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"DevilFishKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"TreantKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"FlameTigerKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"UnicornKnowledge","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"PhysicalDamage","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"FireDamage","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"IceDamage","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"ThunderDamage","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"LightDamage","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"DarkDamage","maxLevel":10,"maxValue":0.55,"maxValueLottery":0.66},{"kind":"HpRegen","maxLevel":5,"maxValue":50,"maxValueLottery":60},{"kind":"MpRegen","maxLevel":5,"maxValue":300,"maxValueLottery":420},{"kind":"TamingPoint","maxLevel":10,"maxValue":0.5,"maxValueLottery":0.55},{"kind":"WarriorSkillRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"WizardSkillRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"AngelSkillRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"ThiefSkillRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"ArcherSkillRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"TamerSkillRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"TownMatGain","maxLevel":10,"maxValue":0.1,"maxValueLottery":0.11},{"kind":"TownMatAreaClearGain","maxLevel":10,"maxValue":10,"maxValueLottery":11},{"kind":"RebirthPointGain1","maxLevel":10,"maxValue":0.1,"maxValueLottery":0.11},{"kind":"RebirthPointGain2","maxLevel":10,"maxValue":0.1,"maxValueLottery":0.11},{"kind":"RebirthPointGain3","maxLevel":10,"maxValue":0.1,"maxValueLottery":0.11},{"kind":"CriticalDamage","maxLevel":2,"maxValue":0.3,"maxValueLottery":0.6},{"kind":"BlessingEffect","maxLevel":10,"maxValue":0.1,"maxValueLottery":0.11},{"kind":"MoveSpeedAdder","maxLevel":10,"maxValue":55,"maxValueLottery":66},{"kind":"PetEXPGain","maxLevel":10,"maxValue":0.5,"maxValueLottery":0.55},{"kind":"LoyaltyPointGain","maxLevel":10,"maxValue":0.5,"maxValueLottery":0.55},{"kind":"CatalystDoubleCriticalChance","maxLevel":10,"maxValue":0.05,"maxValueLottery":0.055},{"kind":"WarriorSkillEffectRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"WizardSkillEffectRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"AngelSkillEffectRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"ThiefSkillEffectRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"ArcherSkillEffectRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"TamerSkillEffectRange","maxLevel":2,"maxValue":0.004,"maxValueLottery":0.006},{"kind":"HpRegenMultiplier","maxLevel":5,"maxValue":0.0015000000000000002,"maxValueLottery":0.0021},{"kind":"MpRegenMultiplier","maxLevel":5,"maxValue":0.0015000000000000002,"maxValueLottery":0.0021},{"kind":"ArmoredFury","maxLevel":10,"maxValue":0.01,"maxValueLottery":0.011000000000000001},{"kind":"WardedFury","maxLevel":10,"maxValue":0.01,"maxValueLottery":0.011000000000000001},{"kind":"PetPhysicalCriticalChance","maxLevel":2,"maxValue":0.06,"maxValueLottery":0.09},{"kind":"PetMagicalCriticalChance","maxLevel":2,"maxValue":0.06,"maxValueLottery":0.09},{"kind":"PetCriticalDamage","maxLevel":2,"maxValue":0.3,"maxValueLottery":0.6},{"kind":"PetDebuffResistance","maxLevel":5,"maxValue":0.25,"maxValueLottery":0.3},{"kind":"StoneTownResearchPower","maxLevel":10,"maxValue":0.0275,"maxValueLottery":0.033},{"kind":"CrystalTownResearchPower","maxLevel":10,"maxValue":0.0275,"maxValueLottery":0.033},{"kind":"LeafTownResearchPower","maxLevel":10,"maxValue":0.0275,"maxValueLottery":0.033},{"kind":"GuildEXPGain","maxLevel":10,"maxValue":0.0022,"maxValueLottery":0.00264},{"kind":"SPDMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"CriticalDamageMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"SkillProficiencyMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"EquipmentProficiencyMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"EXPGainMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"GoldGainMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"PhysicalDamageMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"FireDamageMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"IceDamageMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"ThunderDamageMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"LightDamageMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"DarkDamageMultiplier","maxLevel":5,"maxValue":0.075,"maxValueLottery":0.105},{"kind":"TamingPointMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"PetEXPGainMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"LoyaltyPointGainMultiplier","maxLevel":5,"maxValue":0.15,"maxValueLottery":0.21},{"kind":"BlessingEffectMultiplier","maxLevel":5,"maxValue":0.015,"maxValueLottery":0.021000000000000005},{"kind":"PhysicalCriticalMultiplier","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.06},{"kind":"MagicalCriticalMultiplier","maxLevel":2,"maxValue":0.04,"maxValueLottery":0.06}],"items":[{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"ATKAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"ATKAdder"}],"kind":"DullSword","levelMaxEffects":[{"baseValue":0,"initValue":15,"kind":"ATKAdder"},{"baseValue":0,"initValue":15,"kind":"MATKAdder"},{"baseValue":0,"initValue":1,"kind":"AllSkillLevel"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"MATKAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"MATKAdder"}],"kind":"BrittleStaff","levelMaxEffects":[{"baseValue":0,"initValue":15,"kind":"ATKAdder"},{"baseValue":0,"initValue":15,"kind":"MATKAdder"},{"baseValue":0,"initValue":1,"kind":"AllSkillLevel"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.5,"initValue":2,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":2,"kind":"MATKAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.5,"initValue":2,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":2,"kind":"MATKAdder"}],"kind":"FlimsyWing","levelMaxEffects":[{"baseValue":0,"initValue":15,"kind":"ATKAdder"},{"baseValue":0,"initValue":15,"kind":"MATKAdder"},{"baseValue":0,"initValue":1,"kind":"AllSkillLevel"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":2.5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"ATKAdder"},{"baseValue":0.025,"initValue":0.1,"kind":"StoneGain"},{"baseValue":0.5,"initValue":2.5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"ATKAdder"},{"baseValue":0.025,"initValue":0.1,"kind":"StoneGain"}],"kind":"WornDart","levelMaxEffects":[{"baseValue":0,"initValue":15,"kind":"ATKAdder"},{"baseValue":0,"initValue":15,"kind":"MATKAdder"},{"baseValue":0,"initValue":1,"kind":"AllSkillLevel"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":2.5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"MATKAdder"},{"baseValue":0.025,"initValue":0.1,"kind":"CrystalGain"},{"baseValue":0.5,"initValue":2.5,"kind":"MPAdder"},{"baseValue":1,"initValue":4,"kind":"MATKAdder"},{"baseValue":0.025,"initValue":0.1,"kind":"CrystalGain"}],"kind":"SmallBow","levelMaxEffects":[{"baseValue":0,"initValue":15,"kind":"ATKAdder"},{"baseValue":0,"initValue":15,"kind":"MATKAdder"},{"baseValue":0,"initValue":1,"kind":"AllSkillLevel"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":2.5,"kind":"MPAdder"},{"baseValue":0.5,"initValue":2,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":2,"kind":"MATKAdder"},{"baseValue":0.025,"initValue":0.1,"kind":"LeafGain"},{"baseValue":0.5,"initValue":2.5,"kind":"MPAdder"},{"baseValue":0.5,"initValue":2,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":2,"kind":"MATKAdder"},{"baseValue":0.025,"initValue":0.1,"kind":"LeafGain"}],"kind":"WoodenRecorder","levelMaxEffects":[{"baseValue":0,"initValue":15,"kind":"ATKAdder"},{"baseValue":0,"initValue":15,"kind":"MATKAdder"},{"baseValue":0,"initValue":1,"kind":"AllSkillLevel"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":10,"initValue":10,"kind":"HPAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":10,"initValue":10,"kind":"HPAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"}],"kind":"OldCloak","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":1,"kind":"DEFAdder"},{"baseValue":1,"initValue":1,"kind":"DEFAdder"}],"kind":"BlueHat","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":1,"kind":"MDEFAdder"},{"baseValue":1,"initValue":1,"kind":"MDEFAdder"}],"kind":"OrangeHat","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":5,"initValue":20,"kind":"HPAdder"},{"baseValue":0.5,"initValue":0.5,"kind":"DEFAdder"},{"baseValue":5,"initValue":20,"kind":"HPAdder"},{"baseValue":0.5,"initValue":0.5,"kind":"DEFAdder"}],"kind":"TShirt","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":2.5,"kind":"DEFAdder"},{"baseValue":0.00025,"initValue":0.005,"kind":"PhysicalCritical"},{"baseValue":0.5,"initValue":2.5,"kind":"DEFAdder"},{"baseValue":0.00025,"initValue":0.005,"kind":"PhysicalCritical"}],"kind":"ClothGlove","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":3,"initValue":30,"kind":"MPAdder"},{"baseValue":3,"initValue":30,"kind":"MPAdder"}],"kind":"BlueTShirt","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":20,"initValue":20,"kind":"HPAdder"},{"baseValue":20,"initValue":20,"kind":"HPAdder"}],"kind":"OrangeTShirt","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.001,"initValue":0.01,"kind":"DEFMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"DEFMultiplier"}],"kind":"ClothBelt","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.25,"initValue":5,"kind":"MoveSpeedAdder"},{"baseValue":0.25,"initValue":5,"kind":"MoveSpeedAdder"}],"kind":"ClothShoes","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"HPAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"HPMultiplier"},{"baseValue":2,"initValue":20,"kind":"HPAdder"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"HPMultiplier"}],"kind":"IronRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":4,"initValue":20,"kind":"MPAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MPMultiplier"},{"baseValue":4,"initValue":20,"kind":"MPAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MPMultiplier"}],"kind":"PearlEarring","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"FireDamage"},{"baseValue":0.0025,"initValue":0.1,"kind":"FireDamage"}],"kind":"FireBrooch","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"IceDamage"},{"baseValue":0.0025,"initValue":0.1,"kind":"IceDamage"}],"kind":"IceBrooch","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"ThunderDamage"},{"baseValue":0.0025,"initValue":0.1,"kind":"ThunderDamage"}],"kind":"ThunderBrooch","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"LightDamage"},{"baseValue":0.0025,"initValue":0.1,"kind":"LightDamage"}],"kind":"LightBrooch","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"DarkDamage"},{"baseValue":0.0025,"initValue":0.1,"kind":"DarkDamage"}],"kind":"DarkBrooch","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":20,"kind":"DEFAdder"},{"baseValue":1,"initValue":20,"kind":"DEFAdder"}],"kind":"WoodenShield","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"ATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"WarriorSkillLevel"},{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"ATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"WarriorSkillLevel"}],"kind":"LongSword","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"WizardSkillLevel"},{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"WizardSkillLevel"}],"kind":"LongStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.5,"initValue":5,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":5,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"AngelSkillLevel"},{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.5,"initValue":5,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":5,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"AngelSkillLevel"}],"kind":"WarmWing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.8,"initValue":8,"kind":"ATKAdder"},{"baseValue":0.2,"initValue":2,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"ThiefSkillLevel"},{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.8,"initValue":8,"kind":"ATKAdder"},{"baseValue":0.2,"initValue":2,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"ThiefSkillLevel"}],"kind":"DualDagger","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"ATKAdder"},{"baseValue":0.8,"initValue":8,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"ArcherSkillLevel"},{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"ATKAdder"},{"baseValue":0.8,"initValue":8,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"ArcherSkillLevel"}],"kind":"ReinforcedBow","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.5,"initValue":5,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":5,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"TamerSkillLevel"},{"baseValue":2,"initValue":10,"kind":"MPAdder"},{"baseValue":0.5,"initValue":5,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":5,"kind":"MATKAdder"},{"baseValue":0.1,"initValue":2,"kind":"TamerSkillLevel"}],"kind":"Flute","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"FireDamage"},{"baseValue":2,"initValue":20,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"FireDamage"}],"kind":"FireStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"IceDamage"},{"baseValue":2,"initValue":20,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"IceDamage"}],"kind":"IceStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"ThunderDamage"},{"baseValue":2,"initValue":20,"kind":"MPAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"ThunderDamage"}],"kind":"ThunderStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":10,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":1,"initValue":10,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"}],"kind":"LeatherBelt","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":10,"kind":"SPDAdder"},{"baseValue":0.5,"initValue":10,"kind":"MoveSpeedAdder"},{"baseValue":0.5,"initValue":10,"kind":"SPDAdder"},{"baseValue":0.5,"initValue":10,"kind":"MoveSpeedAdder"}],"kind":"LeatherShoes","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":25,"initValue":100,"kind":"HPAdder"},{"baseValue":5,"initValue":25,"kind":"MPAdder"},{"baseValue":25,"initValue":100,"kind":"HPAdder"},{"baseValue":5,"initValue":25,"kind":"MPAdder"}],"kind":"WarmCloak","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"DEFAdder"},{"baseValue":2,"initValue":20,"kind":"MDEFAdder"},{"baseValue":2,"initValue":20,"kind":"DEFAdder"},{"baseValue":2,"initValue":20,"kind":"MDEFAdder"}],"kind":"LeatherArmor","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":5,"kind":"MDEFAdder"},{"baseValue":0.0005,"initValue":0.005,"kind":"MagicalCritical"},{"baseValue":0.5,"initValue":5,"kind":"MDEFAdder"},{"baseValue":0.0005,"initValue":0.005,"kind":"MagicalCritical"}],"kind":"LeatherGlove","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":20,"kind":"DEFAdder"},{"baseValue":0.0005,"initValue":0.01,"kind":"PhysicalAbsorption"},{"baseValue":1,"initValue":20,"kind":"DEFAdder"},{"baseValue":0.0005,"initValue":0.01,"kind":"PhysicalAbsorption"}],"kind":"LeatherShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"FireResistance"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"FireResistance"}],"kind":"FireRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"IceResistance"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"IceResistance"}],"kind":"IceRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"ThunderResistance"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"ThunderResistance"}],"kind":"ThunderRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"LightResistance"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"LightResistance"}],"kind":"LightRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"DarkResistance"},{"baseValue":1,"initValue":5,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"DarkResistance"}],"kind":"DarkRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.15,"kind":"FireDamage"},{"baseValue":0.005,"initValue":0.15,"kind":"FireDamage"}],"kind":"EnhancedFireBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.15,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.15,"kind":"IceDamage"}],"kind":"EnhancedIceBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.15,"kind":"ThunderDamage"},{"baseValue":0.005,"initValue":0.15,"kind":"ThunderDamage"}],"kind":"EnhancedThunderBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.15,"kind":"LightDamage"},{"baseValue":0.005,"initValue":0.15,"kind":"LightDamage"}],"kind":"EnhancedLightBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.15,"kind":"DarkDamage"},{"baseValue":0.005,"initValue":0.15,"kind":"DarkDamage"}],"kind":"EnhancedDarkBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":20,"kind":"ATKAdder"},{"baseValue":0.0005,"initValue":0.01,"kind":"ATKMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"ATKPropotion"},{"baseValue":1,"initValue":20,"kind":"ATKAdder"},{"baseValue":0.0005,"initValue":0.01,"kind":"ATKMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"ATKPropotion"}],"kind":"BattleSword","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":20,"kind":"MATKAdder"},{"baseValue":0.0005,"initValue":0.01,"kind":"MATKMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"MATKPropotion"},{"baseValue":1,"initValue":20,"kind":"MATKAdder"},{"baseValue":0.0005,"initValue":0.01,"kind":"MATKMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"MATKPropotion"}],"kind":"BattleStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":10,"kind":"ATKAdder"},{"baseValue":0.00025,"initValue":0.005,"kind":"ATKMultiplier"},{"baseValue":0.0025,"initValue":0.05,"kind":"ATKPropotion"},{"baseValue":0.5,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.00025,"initValue":0.005,"kind":"MATKMultiplier"},{"baseValue":0.0025,"initValue":0.05,"kind":"MATKPropotion"},{"baseValue":0.5,"initValue":10,"kind":"ATKAdder"},{"baseValue":0.00025,"initValue":0.005,"kind":"ATKMultiplier"},{"baseValue":0.0025,"initValue":0.05,"kind":"ATKPropotion"},{"baseValue":0.5,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.00025,"initValue":0.005,"kind":"MATKMultiplier"},{"baseValue":0.0025,"initValue":0.05,"kind":"MATKPropotion"}],"kind":"BattleWing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":1.5,"initValue":15,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":5,"kind":"MATKAdder"},{"baseValue":0.0005,"initValue":0.05,"kind":"PhysicalCritical"},{"baseValue":1.5,"initValue":15,"kind":"ATKAdder"},{"baseValue":0.5,"initValue":5,"kind":"MATKAdder"},{"baseValue":0.0005,"initValue":0.05,"kind":"PhysicalCritical"}],"kind":"BattleDagger","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.5,"initValue":5,"kind":"ATKAdder"},{"baseValue":1.5,"initValue":15,"kind":"MATKAdder"},{"baseValue":0.0005,"initValue":0.05,"kind":"MagicalCritical"},{"baseValue":0.5,"initValue":5,"kind":"ATKAdder"},{"baseValue":1.5,"initValue":15,"kind":"MATKAdder"},{"baseValue":0.0005,"initValue":0.05,"kind":"MagicalCritical"}],"kind":"BattleBow","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":10,"kind":"ATKAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.00025,"initValue":0.025,"kind":"PhysicalCritical"},{"baseValue":0.00025,"initValue":0.025,"kind":"MagicalCritical"},{"baseValue":1,"initValue":10,"kind":"ATKAdder"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.00025,"initValue":0.025,"kind":"PhysicalCritical"},{"baseValue":0.00025,"initValue":0.025,"kind":"MagicalCritical"}],"kind":"BattleRecorder","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":15,"kind":"ATKAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"ATKMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":2,"initValue":15,"kind":"ATKAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"ATKMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimeSword","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Slime"},{"effects":[{"baseValue":1,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":1,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimeGlove","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Slime"},{"effects":[{"baseValue":0.1,"initValue":0.5,"kind":"StoneGain"},{"baseValue":0.1,"initValue":0.5,"kind":"CrystalGain"},{"baseValue":0.1,"initValue":0.5,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":0.1,"initValue":0.5,"kind":"StoneGain"},{"baseValue":0.1,"initValue":0.5,"kind":"CrystalGain"},{"baseValue":0.1,"initValue":0.5,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimeRing","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Slime"},{"effects":[{"baseValue":1,"initValue":5,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.1,"kind":"DebuffResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":1,"initValue":5,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.1,"kind":"DebuffResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimeBelt","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Slime"},{"effects":[{"baseValue":0.0025,"initValue":0.05,"kind":"EXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":0.0025,"initValue":0.05,"kind":"EXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimePincenez","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Slime"},{"effects":[{"baseValue":0.0005,"initValue":0.005,"kind":"ATKMultiplier"},{"baseValue":0.0005,"initValue":0.005,"kind":"MATKMultiplier"},{"baseValue":0.02,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.2,"initValue":5,"kind":"AngelSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":0.0005,"initValue":0.005,"kind":"ATKMultiplier"},{"baseValue":0.0005,"initValue":0.005,"kind":"MATKMultiplier"},{"baseValue":0.02,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.2,"initValue":5,"kind":"AngelSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimeWing","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Slime"},{"effects":[{"baseValue":20,"initValue":100,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":20,"initValue":100,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimePoncho","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Slime"},{"effects":[{"baseValue":0.005,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"},{"baseValue":0.005,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SlimeDropChance"}],"kind":"SlimeDart","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Slime"},{"effects":[{"baseValue":2,"initValue":15,"kind":"MATKAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MATKMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":2,"initValue":15,"kind":"MATKAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MATKMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeStick","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Magicslime"},{"effects":[{"baseValue":2,"initValue":10,"kind":"MDEFAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":2,"initValue":10,"kind":"MDEFAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeHat","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Magicslime"},{"effects":[{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.01,"initValue":0.1,"kind":"FireDamage"},{"baseValue":0.01,"initValue":0.1,"kind":"IceDamage"},{"baseValue":0.01,"initValue":0.1,"kind":"ThunderDamage"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.01,"initValue":0.1,"kind":"FireDamage"},{"baseValue":0.01,"initValue":0.1,"kind":"IceDamage"},{"baseValue":0.01,"initValue":0.1,"kind":"ThunderDamage"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeBow","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Magicslime"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"FireResistance"},{"baseValue":0.0025,"initValue":0.1,"kind":"IceResistance"},{"baseValue":0.0025,"initValue":0.1,"kind":"ThunderResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":0.0025,"initValue":0.1,"kind":"FireResistance"},{"baseValue":0.0025,"initValue":0.1,"kind":"IceResistance"},{"baseValue":0.0025,"initValue":0.1,"kind":"ThunderResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeShoes","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Magicslime"},{"effects":[{"baseValue":0.2,"initValue":1,"kind":"LeafGain"},{"baseValue":0.2,"initValue":5,"kind":"TamerSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"},{"baseValue":0.2,"initValue":5,"kind":"TamerSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeRecorder","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Magicslime"},{"effects":[{"baseValue":0.005,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":0.005,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeEarring","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Magicslime"},{"effects":[{"baseValue":0.000001,"initValue":0.00015,"kind":"ColorMaterialDropChance"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":0.000001,"initValue":0.00015,"kind":"ColorMaterialDropChance"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeBalloon","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Magicslime"},{"effects":[{"baseValue":20,"initValue":200,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"},{"baseValue":20,"initValue":200,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"MagicSlimeKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"MagicSlimeDropChance"}],"kind":"MagicSlimeSkirt","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Magicslime"},{"effects":[{"baseValue":20,"initValue":500,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":20,"initValue":500,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderHat","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Spider"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"DarkResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"DarkAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":0.0025,"initValue":0.1,"kind":"DarkResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"DarkAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderSkirt","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Spider"},{"effects":[{"baseValue":20,"initValue":500,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"MDEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":20,"initValue":500,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"MDEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderSuit","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Spider"},{"effects":[{"baseValue":3,"initValue":30,"kind":"MATKAdder"},{"baseValue":0.01,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.2,"initValue":5,"kind":"ThiefSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":3,"initValue":30,"kind":"MATKAdder"},{"baseValue":0.01,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.2,"initValue":5,"kind":"ThiefSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderDagger","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Spider"},{"effects":[{"baseValue":0.0025,"initValue":0.025,"kind":"PhysicalCritical"},{"baseValue":0.0025,"initValue":0.025,"kind":"MagicalCritical"},{"baseValue":0.01,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.01,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":0.0025,"initValue":0.025,"kind":"PhysicalCritical"},{"baseValue":0.0025,"initValue":0.025,"kind":"MagicalCritical"},{"baseValue":0.01,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.01,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderWing","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Spider"},{"effects":[{"baseValue":0.01,"initValue":0.5,"kind":"TamingPoint"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":0.01,"initValue":0.5,"kind":"TamingPoint"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderCatchingNet","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Spider"},{"effects":[{"baseValue":0.005,"initValue":0.25,"kind":"TamingPoint"},{"baseValue":0.000001,"initValue":0.0001,"kind":"ColorMaterialDropChance"},{"baseValue":0.2,"initValue":5,"kind":"WizardSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":0.005,"initValue":0.25,"kind":"TamingPoint"},{"baseValue":0.000001,"initValue":0.0001,"kind":"ColorMaterialDropChance"},{"baseValue":0.2,"initValue":5,"kind":"WizardSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderStick","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Spider"},{"effects":[{"baseValue":0.0025,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0.01,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"},{"baseValue":0.0025,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0.01,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"SpiderKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"SpiderDropChance"}],"kind":"SpiderFoldingFan","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Spider"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.001,"initValue":0.1,"kind":"DebuffResistance"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.001,"initValue":0.1,"kind":"DebuffResistance"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatRing","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":1,"initValue":20,"kind":"MoveSpeedAdder"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":1,"initValue":20,"kind":"MoveSpeedAdder"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatShoes","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":5,"initValue":50,"kind":"ATKAdder"},{"baseValue":0.005,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0.2,"initValue":5,"kind":"WarriorSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":5,"initValue":50,"kind":"ATKAdder"},{"baseValue":0.005,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0.2,"initValue":5,"kind":"WarriorSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatSword","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.0005,"initValue":0.025,"kind":"FireAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"IceAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"ThunderAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"LightAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"DarkAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.0005,"initValue":0.025,"kind":"FireAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"IceAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"ThunderAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"LightAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"DarkAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatHat","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.25,"initValue":10,"kind":"TamerSkillLevel"},{"baseValue":0.01,"initValue":0.1,"kind":"TamingPoint"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.25,"initValue":10,"kind":"TamerSkillLevel"},{"baseValue":0.01,"initValue":0.1,"kind":"TamingPoint"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatRecorder","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"ATKPropotion"},{"baseValue":0.2,"initValue":5,"kind":"ArcherSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"ATKPropotion"},{"baseValue":0.2,"initValue":5,"kind":"ArcherSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatBow","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0,"initValue":0.05,"kind":"SkillProficiency"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.25,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.01,"initValue":0.2,"kind":"EXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.01,"initValue":0.2,"kind":"EXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatMascaradeMask","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain1"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.2,"kind":"LoyaltyPointGain"}],"part":"Jewelry","setKind":"Bat"},{"effects":[{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.0005,"initValue":0.025,"kind":"PhysicalAbsorption"},{"baseValue":20,"initValue":200,"kind":"MPAdder"},{"baseValue":0.005,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"},{"baseValue":2,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.0005,"initValue":0.025,"kind":"PhysicalAbsorption"},{"baseValue":20,"initValue":200,"kind":"MPAdder"},{"baseValue":0.005,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"BatKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"BatDropChance"}],"kind":"BatCloak","levelMaxEffects":[{"baseValue":0,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0,"initValue":10,"kind":"HpRegen"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":100,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.05,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Bat"},{"effects":[{"baseValue":1,"initValue":20,"kind":"MDEFAdder"},{"baseValue":1,"initValue":20,"kind":"MDEFAdder"}],"kind":"BronzeShoulder","levelMaxEffects":[{"baseValue":0,"initValue":100,"kind":"HPAdder"},{"baseValue":0,"initValue":50,"kind":"MPAdder"},{"baseValue":0,"initValue":5,"kind":"HpRegen"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":20,"kind":"MpRegen"},{"baseValue":0,"initValue":0.05,"kind":"LoyaltyPointGain"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.0025,"initValue":0.1,"kind":"PhysicalDamage"},{"baseValue":0.0025,"initValue":0.1,"kind":"PhysicalDamage"}],"kind":"BattleRing","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.25,"initValue":5,"kind":"HpRegen"},{"baseValue":0.25,"initValue":5,"kind":"HpRegen"}],"kind":"Halo","levelMaxEffects":[{"baseValue":0,"initValue":1,"kind":"StoneGain"},{"baseValue":0,"initValue":1,"kind":"CrystalGain"},{"baseValue":0,"initValue":1,"kind":"LeafGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":1,"kind":"TownMatAreaClearGain"},{"baseValue":0,"initValue":0.05,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":5,"initValue":25,"kind":"MPAdder"},{"baseValue":1,"initValue":25,"kind":"MDEFAdder"},{"baseValue":5,"initValue":25,"kind":"MPAdder"},{"baseValue":1,"initValue":25,"kind":"MDEFAdder"}],"kind":"IronShoulder","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.15,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.15,"kind":"PhysicalDamage"}],"kind":"StrengthRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.002,"initValue":0.02,"kind":"HPMultiplier"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.002,"initValue":0.02,"kind":"HPMultiplier"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"}],"kind":"GoldenRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"FireResistance"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"FireResistance"}],"kind":"GoldenFireRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"IceResistance"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"IceResistance"}],"kind":"GoldenIceRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"ThunderResistance"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"ThunderResistance"}],"kind":"GoldenThunderRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"LightResistance"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"LightResistance"}],"kind":"GoldenLightRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"DarkResistance"},{"baseValue":0.002,"initValue":0.02,"kind":"MPMultiplier"},{"baseValue":0.0025,"initValue":0.1,"kind":"DarkResistance"}],"kind":"GoldenDarkRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFPropotion"},{"baseValue":2,"initValue":20,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFPropotion"}],"kind":"IronBelt","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.5,"initValue":20,"kind":"MoveSpeedAdder"},{"baseValue":1,"initValue":20,"kind":"SPDAdder"},{"baseValue":0.5,"initValue":20,"kind":"MoveSpeedAdder"}],"kind":"IronShoes","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":4,"initValue":40,"kind":"DEFAdder"},{"baseValue":4,"initValue":40,"kind":"MDEFAdder"},{"baseValue":4,"initValue":40,"kind":"DEFAdder"},{"baseValue":4,"initValue":40,"kind":"MDEFAdder"}],"kind":"CopperArmor","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":20,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFPropotion"},{"baseValue":2,"initValue":20,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFPropotion"}],"kind":"IronGlove","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":40,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"DEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"PhysicalAbsorption"},{"baseValue":2,"initValue":40,"kind":"DEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"DEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"PhysicalAbsorption"}],"kind":"TowerShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"FireAbsorption"},{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"FireAbsorption"}],"kind":"FireTowerShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"IceAbsorption"},{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"IceAbsorption"}],"kind":"IceTowerShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"ThunderAbsorption"},{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"ThunderAbsorption"}],"kind":"ThunderTowerShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"LightAbsorption"},{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"LightAbsorption"}],"kind":"LightTowerShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"DarkAbsorption"},{"baseValue":2,"initValue":40,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"MDEFMultiplier"},{"baseValue":0.001,"initValue":0.02,"kind":"DarkAbsorption"}],"kind":"DarkTowerShield","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":0.0075,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.0075,"initValue":0.2,"kind":"PhysicalDamage"}],"kind":"SavageRing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0075,"initValue":0.2,"kind":"FireDamage"},{"baseValue":0.0075,"initValue":0.2,"kind":"FireDamage"}],"kind":"SpellboundFireBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0075,"initValue":0.2,"kind":"IceDamage"},{"baseValue":0.0075,"initValue":0.2,"kind":"IceDamage"}],"kind":"SpellboundIceBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0075,"initValue":0.2,"kind":"ThunderDamage"},{"baseValue":0.0075,"initValue":0.2,"kind":"ThunderDamage"}],"kind":"SpellboundThunderBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0075,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.0075,"initValue":0.2,"kind":"LightDamage"}],"kind":"SpellboundLightBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":0.0075,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.0075,"initValue":0.2,"kind":"DarkDamage"}],"kind":"SpellboundDarkBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"EXPGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":0.025,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.1,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Nothing"},{"effects":[{"baseValue":10,"initValue":250,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"HPMultiplier"},{"baseValue":10,"initValue":250,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.01,"kind":"HPMultiplier"}],"kind":"CopperHelm","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":10,"kind":"ATKAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"PhysicalDamage"},{"baseValue":1,"initValue":10,"kind":"ATKAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"PhysicalDamage"}],"kind":"BattleHelm","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"FireDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"IceDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"ThunderDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"LightDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"DarkDamage"},{"baseValue":1,"initValue":10,"kind":"MATKAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"FireDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"IceDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"ThunderDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"LightDamage"},{"baseValue":0.0025,"initValue":0.025,"kind":"DarkDamage"}],"kind":"WizardHelm","levelMaxEffects":[{"baseValue":0,"initValue":25,"kind":"DEFAdder"},{"baseValue":0,"initValue":25,"kind":"MDEFAdder"},{"baseValue":0,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.025,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Nothing"},{"effects":[{"baseValue":3,"initValue":30,"kind":"ATKAdder"},{"baseValue":0.01,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0.1,"initValue":5,"kind":"WarriorSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"},{"baseValue":3,"initValue":30,"kind":"ATKAdder"},{"baseValue":0.01,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0.1,"initValue":5,"kind":"WarriorSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"}],"kind":"LargeSword","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":3,"initValue":30,"kind":"MATKAdder"},{"baseValue":0.01,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0.1,"initValue":5,"kind":"WizardSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"},{"baseValue":3,"initValue":30,"kind":"MATKAdder"},{"baseValue":0.01,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0.1,"initValue":5,"kind":"WizardSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"}],"kind":"LargeStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.1,"initValue":5,"kind":"AngelSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"LightDamage"},{"baseValue":0.1,"initValue":5,"kind":"AngelSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"}],"kind":"LargeWing","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.1,"initValue":5,"kind":"ThiefSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"},{"baseValue":0.005,"initValue":0.2,"kind":"PhysicalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"DarkDamage"},{"baseValue":0.1,"initValue":5,"kind":"ThiefSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"StoneGain"}],"kind":"LargeDagger","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.2,"kind":"FireDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"ThunderDamage"},{"baseValue":0.1,"initValue":5,"kind":"ArcherSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FireDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"ThunderDamage"},{"baseValue":0.1,"initValue":5,"kind":"ArcherSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"CrystalGain"}],"kind":"LargeBow","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":0.005,"initValue":0.1,"kind":"TamingPoint"},{"baseValue":0.1,"initValue":5,"kind":"TamerSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.1,"kind":"TamingPoint"},{"baseValue":0.1,"initValue":5,"kind":"TamerSkillLevel"},{"baseValue":0.2,"initValue":1,"kind":"LeafGain"}],"kind":"LargeOcarina","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"SkillProficiency"},{"baseValue":0,"initValue":1,"kind":"Nothing"},{"baseValue":0,"initValue":50,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Nothing"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyClothes","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"CrystalGain"},{"baseValue":0.01,"initValue":0.1,"kind":"MATKMultiplier"},{"baseValue":0.02,"initValue":0.5,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"CrystalGain"},{"baseValue":0.01,"initValue":0.1,"kind":"MATKMultiplier"},{"baseValue":0.02,"initValue":0.5,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyStaff","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":1,"initValue":20,"kind":"MoveSpeedAdder"},{"baseValue":0.0025,"initValue":0.1,"kind":"LightResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"LightAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":1,"initValue":20,"kind":"MoveSpeedAdder"},{"baseValue":0.0025,"initValue":0.1,"kind":"LightResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"LightAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyBoots","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.005,"initValue":0.15,"kind":"SkillProficiency"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.005,"initValue":0.15,"kind":"SkillProficiency"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyGlove","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.015,"initValue":0.3,"kind":"EXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.015,"initValue":0.3,"kind":"EXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyBrooch","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.1,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.1,"initValue":2,"kind":"TownMatAreaClearGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyLamp","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0.01,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0.005,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0.01,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0.01,"initValue":0.25,"kind":"ATKPropotion"},{"baseValue":0.005,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0.01,"initValue":0.25,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyWing","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Fairy"},{"effects":[{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"StoneGain"},{"baseValue":0.01,"initValue":0.1,"kind":"ATKMultiplier"},{"baseValue":0.02,"initValue":0.5,"kind":"ATKPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"},{"baseValue":10,"initValue":100,"kind":"MPAdder"},{"baseValue":0.2,"initValue":2,"kind":"StoneGain"},{"baseValue":0.01,"initValue":0.1,"kind":"ATKMultiplier"},{"baseValue":0.02,"initValue":0.5,"kind":"ATKPropotion"},{"baseValue":0.005,"initValue":0.2,"kind":"FairyKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FairyDropChance"}],"kind":"FairyShuriken","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Fairy"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.0025,"initValue":0.1,"kind":"BlessingEffect"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.0025,"initValue":0.1,"kind":"BlessingEffect"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxKanzashi","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.025,"initValue":0.5,"kind":"EXPGain"},{"baseValue":0.002,"initValue":-0.2,"kind":"DEFMultiplier"},{"baseValue":0.002,"initValue":-0.2,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.025,"initValue":0.5,"kind":"EXPGain"},{"baseValue":0.002,"initValue":-0.2,"kind":"DEFMultiplier"},{"baseValue":0.002,"initValue":-0.2,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxLoincloth","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":10,"initValue":100,"kind":"MpRegen"},{"baseValue":0.0001,"initValue":0.02,"kind":"PhysicalAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.05,"kind":"MPMultiplier"},{"baseValue":10,"initValue":100,"kind":"MpRegen"},{"baseValue":0.0001,"initValue":0.02,"kind":"PhysicalAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxMask","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"CriticalDamage"},{"baseValue":0.2,"initValue":5,"kind":"ArcherSkillLevel"},{"baseValue":0.0005,"initValue":0.05,"kind":"DebuffResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"CriticalDamage"},{"baseValue":0.2,"initValue":5,"kind":"ArcherSkillLevel"},{"baseValue":0.0005,"initValue":0.05,"kind":"DebuffResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxHamayayumi","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":20,"initValue":500,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":1,"initValue":10,"kind":"HpRegen"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":20,"initValue":500,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.05,"kind":"HPMultiplier"},{"baseValue":1,"initValue":10,"kind":"HpRegen"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxHat","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.0025,"initValue":0.15,"kind":"IceResistance"},{"baseValue":0.0025,"initValue":0.15,"kind":"ThunderResistance"},{"baseValue":0.0025,"initValue":0.15,"kind":"LightResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"ThunderAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.0025,"initValue":0.15,"kind":"IceResistance"},{"baseValue":0.0025,"initValue":0.15,"kind":"ThunderResistance"},{"baseValue":0.0025,"initValue":0.15,"kind":"LightResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"ThunderAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxCoat","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.002,"initValue":-0.2,"kind":"MoveSpeedMultiplier"},{"baseValue":0.02,"initValue":0.5,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.25,"kind":"ThunderDamage"},{"baseValue":0.005,"initValue":0.25,"kind":"LightDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.002,"initValue":-0.2,"kind":"MoveSpeedMultiplier"},{"baseValue":0.02,"initValue":0.5,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.25,"kind":"ThunderDamage"},{"baseValue":0.005,"initValue":0.25,"kind":"LightDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxBoot","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Fox"},{"effects":[{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.0025,"initValue":0.05,"kind":"BlessingEffect"},{"baseValue":0.000005,"initValue":0.0001,"kind":"EquipmentDropChance"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"},{"baseValue":0.005,"initValue":0.05,"kind":"GoldGain"},{"baseValue":0.0025,"initValue":0.05,"kind":"BlessingEffect"},{"baseValue":0.000005,"initValue":0.0001,"kind":"EquipmentDropChance"},{"baseValue":0.005,"initValue":0.2,"kind":"FoxKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FoxDropChance"}],"kind":"FoxEma","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Fox"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.002,"initValue":-0.2,"kind":"ATKMultiplier"},{"baseValue":0.002,"initValue":-0.2,"kind":"MATKMultiplier"},{"baseValue":0.005,"initValue":0.25,"kind":"PhysicalCritical"},{"baseValue":0.005,"initValue":0.25,"kind":"MagicalCritical"},{"baseValue":0.005,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0.2,"initValue":5,"kind":"WarriorSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.002,"initValue":-0.2,"kind":"ATKMultiplier"},{"baseValue":0.002,"initValue":-0.2,"kind":"MATKMultiplier"},{"baseValue":0.005,"initValue":0.25,"kind":"PhysicalCritical"},{"baseValue":0.005,"initValue":0.25,"kind":"MagicalCritical"},{"baseValue":0.005,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0.2,"initValue":5,"kind":"WarriorSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishSword","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.025,"kind":"HPMultiplier"},{"baseValue":0.005,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0.005,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0.0025,"initValue":0.15,"kind":"FireResistance"},{"baseValue":0.2,"initValue":5,"kind":"AngelSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.001,"initValue":0.025,"kind":"HPMultiplier"},{"baseValue":0.005,"initValue":0.05,"kind":"ATKMultiplier"},{"baseValue":0.005,"initValue":0.05,"kind":"MATKMultiplier"},{"baseValue":0.0025,"initValue":0.15,"kind":"FireResistance"},{"baseValue":0.2,"initValue":5,"kind":"AngelSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishWing","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.02,"initValue":0.5,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.25,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.25,"kind":"DarkDamage"},{"baseValue":0.002,"initValue":-0.2,"kind":"MPMultiplier"},{"baseValue":0.2,"initValue":5,"kind":"TamerSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.02,"initValue":0.5,"kind":"MATKPropotion"},{"baseValue":0.005,"initValue":0.25,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.25,"kind":"DarkDamage"},{"baseValue":0.002,"initValue":-0.2,"kind":"MPMultiplier"},{"baseValue":0.2,"initValue":5,"kind":"TamerSkillLevel"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishRecorder","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":5,"initValue":50,"kind":"DEFAdder"},{"baseValue":5,"initValue":50,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.025,"kind":"HPMultiplier"},{"baseValue":0.0025,"initValue":0.15,"kind":"FireResistance"},{"baseValue":0.0025,"initValue":0.15,"kind":"DarkResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":5,"initValue":50,"kind":"DEFAdder"},{"baseValue":5,"initValue":50,"kind":"MDEFAdder"},{"baseValue":0.001,"initValue":0.025,"kind":"HPMultiplier"},{"baseValue":0.0025,"initValue":0.15,"kind":"FireResistance"},{"baseValue":0.0025,"initValue":0.15,"kind":"DarkResistance"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishArmor","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFPropotion"},{"baseValue":0.0025,"initValue":0.025,"kind":"MDEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFPropotion"},{"baseValue":0.0025,"initValue":0.05,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.025,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFPropotion"},{"baseValue":0.0025,"initValue":0.025,"kind":"MDEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFPropotion"},{"baseValue":0.0025,"initValue":0.05,"kind":"IceDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishScarf","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"IceDamage"},{"baseValue":0.0005,"initValue":0.025,"kind":"FireAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"IceAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"DarkAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.0025,"initValue":0.05,"kind":"IceDamage"},{"baseValue":0.0005,"initValue":0.025,"kind":"FireAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"IceAbsorption"},{"baseValue":0.0005,"initValue":0.025,"kind":"DarkAbsorption"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishGill","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishPendant","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Devilfish"},{"effects":[{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.0015,"initValue":0.15,"kind":"DebuffResistance"},{"baseValue":0.5,"initValue":3,"kind":"StoneGain"},{"baseValue":0.5,"initValue":3,"kind":"CrystalGain"},{"baseValue":0.5,"initValue":3,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":0.0015,"initValue":0.15,"kind":"DebuffResistance"},{"baseValue":0.5,"initValue":3,"kind":"StoneGain"},{"baseValue":0.5,"initValue":3,"kind":"CrystalGain"},{"baseValue":0.5,"initValue":3,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"DevilFishKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"DevilFishDropChance"}],"kind":"DevilfishRing","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Devilfish"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":1,"initValue":100,"kind":"StoneGain"},{"baseValue":1,"initValue":100,"kind":"CrystalGain"},{"baseValue":1,"initValue":100,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":1,"initValue":100,"kind":"StoneGain"},{"baseValue":1,"initValue":100,"kind":"CrystalGain"},{"baseValue":1,"initValue":100,"kind":"LeafGain"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantAmulet","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.025,"initValue":0.25,"kind":"TamingPoint"},{"baseValue":0.025,"initValue":0.25,"kind":"PetEXPGain"},{"baseValue":0.025,"initValue":0.25,"kind":"LoyaltyPointGain"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.025,"initValue":0.25,"kind":"TamingPoint"},{"baseValue":0.025,"initValue":0.25,"kind":"PetEXPGain"},{"baseValue":0.025,"initValue":0.25,"kind":"LoyaltyPointGain"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantHagoita","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":10,"initValue":100,"kind":"DEFAdder"},{"baseValue":10,"initValue":100,"kind":"MDEFAdder"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":20,"initValue":200,"kind":"HPAdder"},{"baseValue":10,"initValue":100,"kind":"DEFAdder"},{"baseValue":10,"initValue":100,"kind":"MDEFAdder"},{"baseValue":0.01,"initValue":0.1,"kind":"DEFMultiplier"},{"baseValue":0.01,"initValue":0.1,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantChoppingBoard","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.01,"initValue":1,"kind":"PhysicalDamage"},{"baseValue":0.01,"initValue":1,"kind":"FireDamage"},{"baseValue":0.01,"initValue":1,"kind":"IceDamage"},{"baseValue":0.01,"initValue":1,"kind":"ThunderDamage"},{"baseValue":0.01,"initValue":1,"kind":"LightDamage"},{"baseValue":0.01,"initValue":1,"kind":"DarkDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.01,"initValue":1,"kind":"PhysicalDamage"},{"baseValue":0.01,"initValue":1,"kind":"FireDamage"},{"baseValue":0.01,"initValue":1,"kind":"IceDamage"},{"baseValue":0.01,"initValue":1,"kind":"ThunderDamage"},{"baseValue":0.01,"initValue":1,"kind":"LightDamage"},{"baseValue":0.01,"initValue":1,"kind":"DarkDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantDagger","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"ATKMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"MATKMultiplier"},{"baseValue":0,"initValue":0.1,"kind":"CriticalDamage"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.5,"kind":"TamingPoint"}],"part":"Weapon","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":50,"initValue":1000,"kind":"HPAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":25,"initValue":250,"kind":"HpRegen"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":50,"initValue":1000,"kind":"HPAdder"},{"baseValue":0.005,"initValue":0.1,"kind":"HPMultiplier"},{"baseValue":25,"initValue":250,"kind":"HpRegen"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantHaniwa","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"DEFPropotion"},{"baseValue":0,"initValue":0.25,"kind":"MDEFPropotion"},{"baseValue":0,"initValue":0.1,"kind":"GoldGain"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":200,"kind":"SPDAdder"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiency"}],"part":"Armor","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.000001,"initValue":0.0001,"kind":"ColorMaterialDropChance"},{"baseValue":0.01,"initValue":1,"kind":"CriticalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.000001,"initValue":0.0001,"kind":"ColorMaterialDropChance"},{"baseValue":0.01,"initValue":1,"kind":"CriticalDamage"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantKokeshi","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.025,"initValue":0.5,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.025,"initValue":0.5,"kind":"GoldGain"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantLamp","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Treant"},{"effects":[{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.0005,"initValue":0.025,"kind":"CatalystDoubleCriticalChance"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"},{"baseValue":30,"initValue":-3600,"kind":"SPDAdder"},{"baseValue":1,"initValue":-120,"kind":"MoveSpeedAdder"},{"baseValue":0.0005,"initValue":-0.06,"kind":"MoveSpeedMultiplier"},{"baseValue":0.0005,"initValue":0.025,"kind":"CatalystDoubleCriticalChance"},{"baseValue":0.005,"initValue":0.2,"kind":"TreantKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"TreantDropChance"}],"kind":"TreantLunchbox","levelMaxEffects":[{"baseValue":0,"initValue":0.25,"kind":"EXPGain"},{"baseValue":0,"initValue":0.1,"kind":"SkillProficiency"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain2"},{"baseValue":0,"initValue":2,"kind":"Nothing"},{"baseValue":0,"initValue":0.05,"kind":"TownMatGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGain"}],"part":"Jewelry","setKind":"Treant"},{"effects":[{"baseValue":0.005,"initValue":-2,"kind":"SkillProficiency"},{"baseValue":500,"initValue":5000,"kind":"HPAdder"},{"baseValue":200,"initValue":2000,"kind":"MPAdder"},{"baseValue":0.01,"initValue":0.5,"kind":"HPMultiplier"},{"baseValue":0.01,"initValue":0.5,"kind":"MPMultiplier"},{"baseValue":0.00005,"initValue":0.001,"kind":"HpRegenMultiplier"},{"baseValue":0.00005,"initValue":0.001,"kind":"MpRegenMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.005,"initValue":-2,"kind":"SkillProficiency"},{"baseValue":500,"initValue":5000,"kind":"HPAdder"},{"baseValue":200,"initValue":2000,"kind":"MPAdder"},{"baseValue":0.01,"initValue":0.5,"kind":"HPMultiplier"},{"baseValue":0.01,"initValue":0.5,"kind":"MPMultiplier"},{"baseValue":0.00005,"initValue":0.001,"kind":"HpRegenMultiplier"},{"baseValue":0.00005,"initValue":0.001,"kind":"MpRegenMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"FlametigerPortableHotSpring","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"EXPGainMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"SkillProficiencyMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain3"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiencyMultiplier"},{"baseValue":0,"initValue":0.25,"kind":"LoyaltyPointGainMultiplier"}],"part":"Jewelry","setKind":"Flametiger"},{"effects":[{"baseValue":0.0025,"initValue":-1,"kind":"EXPGain"},{"baseValue":0.001,"initValue":0.01,"kind":"PhysicalDamageMultiplier"},{"baseValue":0.001,"initValue":0.025,"kind":"ArmoredFury"},{"baseValue":20,"initValue":200,"kind":"DEFAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"DEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.0025,"initValue":-1,"kind":"EXPGain"},{"baseValue":0.001,"initValue":0.01,"kind":"PhysicalDamageMultiplier"},{"baseValue":0.001,"initValue":0.025,"kind":"ArmoredFury"},{"baseValue":20,"initValue":200,"kind":"DEFAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"DEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"FlametigerVolcanicShield","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"StoneTownResearchPower"},{"baseValue":0,"initValue":0.05,"kind":"CrystalTownResearchPower"},{"baseValue":0,"initValue":0.05,"kind":"LeafTownResearchPower"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.3,"kind":"SPDMultiplier"},{"baseValue":0,"initValue":0.25,"kind":"TamingPointMultiplier"}],"part":"Weapon","setKind":"Flametiger"},{"effects":[{"baseValue":0.01,"initValue":-4,"kind":"DebuffResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"PhysicalCriticalMultiplier"},{"baseValue":0.0005,"initValue":0.025,"kind":"MagicalCriticalMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"EXPGainMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"GoldGainMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.01,"initValue":-4,"kind":"DebuffResistance"},{"baseValue":0.0005,"initValue":0.025,"kind":"PhysicalCriticalMultiplier"},{"baseValue":0.0005,"initValue":0.025,"kind":"MagicalCriticalMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"EXPGainMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"GoldGainMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"FlametigerStripedBriefs","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ArmoredFury"},{"baseValue":0,"initValue":0.05,"kind":"WardedFury"},{"baseValue":0,"initValue":0.1,"kind":"GoldGainMultiplier"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.01,"kind":"GuildEXPGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGainMultiplier"}],"part":"Armor","setKind":"Flametiger"},{"effects":[{"baseValue":0.005,"initValue":-2,"kind":"GoldGain"},{"baseValue":0.000025,"initValue":0.001,"kind":"WarriorSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"WizardSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"AngelSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"ThiefSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"ArcherSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"TamerSkillRange"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.005,"initValue":-2,"kind":"GoldGain"},{"baseValue":0.000025,"initValue":0.001,"kind":"WarriorSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"WizardSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"AngelSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"ThiefSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"ArcherSkillRange"},{"baseValue":0.000025,"initValue":0.001,"kind":"TamerSkillRange"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"TorchOfEverburningFlametiger","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"StoneTownResearchPower"},{"baseValue":0,"initValue":0.05,"kind":"CrystalTownResearchPower"},{"baseValue":0,"initValue":0.05,"kind":"LeafTownResearchPower"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.3,"kind":"SPDMultiplier"},{"baseValue":0,"initValue":0.25,"kind":"TamingPointMultiplier"}],"part":"Weapon","setKind":"Flametiger"},{"effects":[{"baseValue":0.005,"initValue":-2,"kind":"EquipmentProficiency"},{"baseValue":0.005,"initValue":0.1,"kind":"PetPhysicalCriticalChance"},{"baseValue":0.005,"initValue":0.1,"kind":"PetMagicalCriticalChance"},{"baseValue":0.005,"initValue":0.3,"kind":"PetCriticalDamage"},{"baseValue":0.005,"initValue":0.1,"kind":"TamingPointMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"PetEXPGainMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"LoyaltyPointGainMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.005,"initValue":-2,"kind":"EquipmentProficiency"},{"baseValue":0.005,"initValue":0.1,"kind":"PetPhysicalCriticalChance"},{"baseValue":0.005,"initValue":0.1,"kind":"PetMagicalCriticalChance"},{"baseValue":0.005,"initValue":0.3,"kind":"PetCriticalDamage"},{"baseValue":0.005,"initValue":0.1,"kind":"TamingPointMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"PetEXPGainMultiplier"},{"baseValue":0.005,"initValue":0.1,"kind":"LoyaltyPointGainMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"FlametigerCostume","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"ArmoredFury"},{"baseValue":0,"initValue":0.05,"kind":"WardedFury"},{"baseValue":0,"initValue":0.1,"kind":"GoldGainMultiplier"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.01,"kind":"GuildEXPGain"},{"baseValue":0,"initValue":0.25,"kind":"PetEXPGainMultiplier"}],"part":"Armor","setKind":"Flametiger"},{"effects":[{"baseValue":0.0025,"initValue":-1,"kind":"EXPGain"},{"baseValue":0.001,"initValue":0.01,"kind":"FireDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"IceDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"ThunderDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"LightDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"DarkDamageMultiplier"},{"baseValue":0.001,"initValue":0.025,"kind":"WardedFury"},{"baseValue":20,"initValue":200,"kind":"MDEFAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.0025,"initValue":-1,"kind":"EXPGain"},{"baseValue":0.001,"initValue":0.01,"kind":"FireDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"IceDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"ThunderDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"LightDamageMultiplier"},{"baseValue":0.001,"initValue":0.01,"kind":"DarkDamageMultiplier"},{"baseValue":0.001,"initValue":0.025,"kind":"WardedFury"},{"baseValue":20,"initValue":200,"kind":"MDEFAdder"},{"baseValue":0.02,"initValue":0.2,"kind":"MDEFMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"RingOfFlametigersWrath","levelMaxEffects":[{"baseValue":0,"initValue":0.05,"kind":"StoneTownResearchPower"},{"baseValue":0,"initValue":0.05,"kind":"CrystalTownResearchPower"},{"baseValue":0,"initValue":0.05,"kind":"LeafTownResearchPower"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.3,"kind":"SPDMultiplier"},{"baseValue":0,"initValue":0.25,"kind":"TamingPointMultiplier"}],"part":"Weapon","setKind":"Flametiger"},{"effects":[{"baseValue":0.025,"initValue":-10,"kind":"TamingPoint"},{"baseValue":0.025,"initValue":-10,"kind":"LoyaltyPointGain"},{"baseValue":0.001,"initValue":0.025,"kind":"StoneTownResearchPower"},{"baseValue":0.001,"initValue":0.025,"kind":"CrystalTownResearchPower"},{"baseValue":0.001,"initValue":0.025,"kind":"LeafTownResearchPower"},{"baseValue":0.00025,"initValue":0.01,"kind":"BlessingEffectMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":0.025,"initValue":-10,"kind":"TamingPoint"},{"baseValue":0.025,"initValue":-10,"kind":"LoyaltyPointGain"},{"baseValue":0.001,"initValue":0.025,"kind":"StoneTownResearchPower"},{"baseValue":0.001,"initValue":0.025,"kind":"CrystalTownResearchPower"},{"baseValue":0.001,"initValue":0.025,"kind":"LeafTownResearchPower"},{"baseValue":0.00025,"initValue":0.01,"kind":"BlessingEffectMultiplier"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"EndlessBowlOfSpicyFlametigerRamen","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"EXPGainMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"SkillProficiencyMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain3"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiencyMultiplier"},{"baseValue":0,"initValue":0.25,"kind":"LoyaltyPointGainMultiplier"}],"part":"Jewelry","setKind":"Flametiger"},{"effects":[{"baseValue":2.5,"initValue":-1000,"kind":"AllSkillLevel"},{"baseValue":0.0025,"initValue":0.05,"kind":"GoldGainMultiplier"},{"baseValue":0.000025,"initValue":0.001,"kind":"GuildEXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"},{"baseValue":2.5,"initValue":-1000,"kind":"AllSkillLevel"},{"baseValue":0.0025,"initValue":0.05,"kind":"GoldGainMultiplier"},{"baseValue":0.000025,"initValue":0.001,"kind":"GuildEXPGain"},{"baseValue":0.005,"initValue":0.2,"kind":"FlameTigerKnowledge"},{"baseValue":0.00005,"initValue":0.0005,"kind":"FlameTigerDropChance"}],"kind":"ScreenOfTheSneakyFlametiger","levelMaxEffects":[{"baseValue":0,"initValue":0.2,"kind":"EXPGainMultiplier"},{"baseValue":0,"initValue":0.2,"kind":"SkillProficiencyMultiplier"},{"baseValue":0,"initValue":0.025,"kind":"RebirthPointGain3"},{"baseValue":0,"initValue":3,"kind":"Nothing"},{"baseValue":0,"initValue":0.1,"kind":"EquipmentProficiencyMultiplier"},{"baseValue":0,"initValue":0.25,"kind":"LoyaltyPointGainMultiplier"}],"part":"Jewelry","setKind":"Flametiger"}]}');

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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common-exposed.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anvil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anvil.js */ "./src/anvil.js");
/* harmony import */ var _slimebank_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slimebank.js */ "./src/slimebank.js");
/* harmony import */ var _gear_gear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gear/gear.js */ "./src/gear/gear.js");


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
            new _gear_gear_js__WEBPACK_IMPORTED_MODULE_3__.Gear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQ0FBaUMsbUJBQU8sQ0FBQyxzQ0FBZTtBQUN4RCwwQ0FBMEMsbUJBQU8sQ0FBQywrSEFBNkQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGFBQWEscUJBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QitDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBUTtBQUNaLG9CQUFvQixTQUFTO0FBQzdCLE1BQU0sb0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9DQUFvQyxtQkFBbUIsc0JBQXNCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQjtBQUNyRSx3QkFBd0IsSUFBSSxJQUFJLE1BQU07QUFDdEM7QUFDQTtBQUNBLHdCQUF3QixJQUFJLElBQUksTUFBTTtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFXRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S3lDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUssSUFBSSxXQUFXLDBCQUEwQixHQUFHO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFh1QztBQUN2RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xoQmlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEMsaUJBQWlCLG9CQUFvQjtBQUNyQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsbURBQU87QUFDckUsK0RBQStELG1EQUFPO0FBQ3RFO0FBQ0E7QUFDQSwyREFBMkQsbURBQU87QUFDbEUsK0RBQStELG1EQUFPO0FBQ3RFO0FBQ0E7QUFDQSw4REFBOEQsbURBQU87QUFDckU7QUFDQSw2REFBNkQsbURBQU87QUFDcEUsNkRBQTZELG1EQUFPO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak9yQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUY7QUFDaEQ7QUFDbkMsWUFBWSxpQkFBaUI7QUFDYztBQUNMO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNLG1DQUFtQztBQUN6QyxNQUFNLHVDQUF1QztBQUM3QyxNQUFNLGlEQUFpRDtBQUN2RCxNQUFNLHFDQUFxQztBQUMzQyxNQUFNLGtDQUFrQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBUSxvQ0FBb0Msb0RBQVk7QUFDcEU7QUFDQSxZQUFZLG9EQUFRLGlDQUFpQyxrREFBVTtBQUMvRDtBQUNBLFlBQVksb0RBQVEsOEJBQThCLCtDQUFPO0FBQ3pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJLG1EQUFPO0FBQ1g7QUFDQSxVQUFVLG9EQUFTO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxZQUFZO0FBQ1osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRSx5QkFBeUIsSUFBSSxJQUFJLE1BQU07QUFDdkMsMkRBQTJELElBQUksV0FBVyxNQUFNO0FBQ2hGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24tZXhwb3NlZC5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2FudmlsLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9nZWFyL2dlYXIuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvZ2Vhci9vcHRpbWl6ZXIuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvc2xpbWViYW5rLmpzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX18gPSByZXF1aXJlKFwiLSEuL2NvbW1vbi5qc1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qc1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fID0gX19fRVhQT1NFX0xPQURFUl9HRVRfR0xPQkFMX1RISVNfX187XG52YXIgX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfTU9EVUxFX0xPQ0FMX05BTUVfX18gPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXy5jaGFuZ2VUYWJcbmlmICh0eXBlb2YgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9PT0gJ3VuZGVmaW5lZCcpIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX19bXCJjaGFuZ2VUYWJcIl0gPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXztcbmVsc2UgdGhyb3cgbmV3IEVycm9yKCdbZXhwb3Nlcy1sb2FkZXJdIFRoZSBcImNoYW5nZVRhYlwiIHZhbHVlIGV4aXN0cyBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBpdCBtYXkgbm90IGJlIHNhZmUgdG8gb3ZlcndyaXRlIGl0LCB1c2UgdGhlIFwib3ZlcnJpZGVcIiBvcHRpb24nKVxubW9kdWxlLmV4cG9ydHMgPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICB9XG4gIHZhciBnO1xuICB0cnkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGcgPSB0aGlzIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHNlbGYgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgZ2xvYmFsIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGc7XG59KCk7IiwiaW1wb3J0IHsgYWRkRXZlbnQsIGNvbnZlcnQgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxuXHJcbmNsYXNzIEFudmlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9IFwiYW52aWxcIjtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgbml0cm86IDEuMCxcclxuICAgICAgZHVuZ2VvbjogWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudChcImFudmlsLm5pdHJvLnNwZWVkXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2F2ZS5iaW5kKHRoaXMpKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgYWRkRXZlbnQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIC8vIHRoaXMuZGF0YS5kdW5nZW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5uaXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWU7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCIpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWUgPSB0aGlzLmRhdGEubml0cm87XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXkoKVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCQoXCIjcmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBsZXQgaWQgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xyXG4gICAgICBsZXQgdmFsdWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudmFsdWVcIjtcclxuICAgICAgbGV0IHRpbWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xyXG4gICAgICBsZXQgb3JiID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm9yYlwiO1xyXG4gICAgICBsZXQgcmV3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnJld2FyZFwiKS5pbm5lckhUTUw7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUgPSB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV07XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICgzNjAwIC8gdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdKSAqIHJld2FyZCAqIHRoaXMuZGF0YS5uaXRyb1xyXG4gICAgICApO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmIpLmlubmVySFRNTCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV0pICogdGhpcy5kYXRhLm5pdHJvXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBbnZpbCB9O1xyXG4iLCJmdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaWQsIHRoaXMudmFsdWUpO1xyXG4gIGNvbnNvbGUubG9nKHRoaXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChpZCwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGFiKGlucHV0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIGlucHV0KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFRhYih0YWIpIHtcclxuICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyBodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcHJvLWNlc3MtdXMvaWVoMmNhbGMvcmF3L21hc3Rlci9odG1sL3NsaW1lQmFuay5odG1sXHJcbiAgLy8gbGV0IGZpbGUgPSBcIi4uL2h0bWwvXCIgKyB0YWIgKyBcIi5odG1sXCI7XHJcbiAgbGV0IGZpbGUgPSBcIi4uL2h0bWwvXCIgKyB0YWIgKyBcIi5odG1sXCI7XHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0ICE9IFwiMTI3LjAuMC4xOjMwMDBcIikge1xyXG4gICAgZmlsZSA9IFwiaHR0cHM6Ly9wcm8tY2Vzcy11cy5naXRodWIuaW8vaWVoMmNhbGMvaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcclxuICB9XHJcblxyXG4gIC8vIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluXCIpO1xyXG4gIC8vIG15SGVhZGVycy5hcHBlbmQoXHJcbiAgLy8gICBcIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5OlwiLFxyXG4gIC8vICAgXCJkZWZhdWx0LXNyYyAnc2VsZic7IHN0eWxlLXNyYyAnc2VsZicgJ3Vuc2FmZS1pbmxpbmUnICo7IGZvbnQtc3JjICdzZWxmJyAqOyBjb25uZWN0LXNyYyAnc2VsZicgKjsgaW1nLXNyYyBkYXRhOiAqXCJcclxuICAvLyApO1xyXG4gIGxldCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAvLyByZWZlcnJlclBvbGljeTogXCJzYW1lLW9yaWdpblwiLFxyXG4gIH07XHJcbiAgLy8gbGV0IHggPSBhd2FpdCBmZXRjaChmaWxlKTtcclxuICAvLyBsZXQgeSA9IGF3YWl0IHgudGV4dCgpO1xyXG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSB5O1xyXG4gIHJldHVybiBmZXRjaChmaWxlLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKTtcclxufVxyXG5cclxuLy8gZXh0LmdldCA9ICh1cmwpID0+IHtcclxuLy8gICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHJcbi8vICAgbGV0IG9wdGlvbnMgPSB7XHJcbi8vICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbi8vICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuLy8gICAgICAgbW9kZTogJ2NvcnMnXHJcbi8vICAgfTtcclxuXHJcbi8vICAgLy9mZXRjaCBnZXRcclxuXHJcbi8vICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG4vLyB9O1xyXG5cclxuLy8gZXh0LmdldChcImh0dHA6Ly9leGFtcGxlLmNvbVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgLy8gb3Igd2hhdGV2ZXJcclxuLy8gfSk7XHJcblxyXG5mdW5jdGlvbiBzaWdtYShsb3dlckJvdW5kLCB1cHBlckJvdW5kLCBpdGVyYXRvciwgYWNjdW11bGF0b3IgPSAwKSB7XHJcbiAgLy8gbGV0IGFjY3VtdWxhdG9yID0gMDtcclxuICBmb3IgKGxldCBpID0gbG93ZXJCb3VuZDsgaSA8PSB1cHBlckJvdW5kOyArK2kpIHtcclxuICAgIGFjY3VtdWxhdG9yICs9IGl0ZXJhdG9yKGkpO1xyXG4gIH1cclxuICByZXR1cm4gYWNjdW11bGF0b3I7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgbm9ybWFsIG51bWJlciB0byBLLE0sQixUIGFuZCBleHBvbmVudGlhbFxyXG5mdW5jdGlvbiBjb252ZXJ0KGlucHV0KSB7XHJcbiAgaW5wdXQgPSBwYXJzZUZsb2F0KGlucHV0KTtcclxuICB2YXIgb3V0cHV0ID0gMDtcclxuICBpZiAoaW5wdXQgPT0gMCkge1xyXG4gICAgb3V0cHV0ID0gMDtcclxuICB9IGVsc2UgaWYgKGlucHV0IDw9IDEwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSBNYXRoLnJvdW5kKGlucHV0KTtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMCkudG9GaXhlZCgyKSArIFwiS1wiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJNXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDAwMDApLnRvRml4ZWQoMykgKyBcIkJcIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiVFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvdXRwdXQgPSBpbnB1dC50b0V4cG9uZW50aWFsKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuLy8gY29udmVydCBrLG0sYix0IHRvIG5vcm1hbCBudW1iZXJzXHJcbmZ1bmN0aW9uIGNvbnZlcnQyKGlucHV0LCBtaW4gPSAwLCBtYXggPSA5OTk5OTk5OTk5OTk5OTkpIHtcclxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLywvZywgXCIuXCIpOyAvLyBjb252ZXJ0ICwgdG8gLlxyXG4gIGlmICgvXlxcZCpcXC4/XFxkKyQvLnRlc3QoaW5wdXQpKSB7XHJcbiAgICBpZiAoaW5wdXQgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9IC8vIHJldHVybiByb3VuZGVkIG51bWJlciBpZiB0aGVyZSBpcyBubyBhYmJyZXZpZXRlXHJcbiAgZWxzZSB7XHJcbiAgICBjb25zdCByZWdleCA9IC8oLiopKFxcRCkkL2dtO1xyXG4gICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8gL2csIFwiXCIpOyAvLyByZW1vdmVzIGFsbCBzcGFjZXNcclxuXHJcbiAgICBpbnB1dCA9IHJlZ2V4LmV4ZWMoaW5wdXQpO1xyXG4gICAgbGV0IG91dHB1dCA9IDA7XHJcbiAgICBpZiAoaW5wdXRbMl0gPT0gXCJ0XCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDQ7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwiYlwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAzO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcIm1cIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMjtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJrXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUb0ZpbGUoKSB7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXHJcbiAgICBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlLCBudWxsLCAyKV0sIHtcclxuICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICB9KVxyXG4gICk7XHJcbiAgYS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIklFSDJjYWxjLWRhdGEuanNvblwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gIGEuY2xpY2soKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRnJvbUZpbGUoKSB7XHJcbiAgbGV0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzLmxvYWRGcm9tRmlsZVwiKS5maWxlc1swXTtcclxuICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCB0ZXh0ID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGUtY29udGVudHNcIikudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZSh0ZXh0KSk7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh7IC4uLkpTT04ucGFyc2UodGV4dCkgfSkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNvbnZlcnQsXHJcbiAgY29udmVydDIsXHJcbiAgc2lnbWEsXHJcbiAgcmVzdGFydCxcclxuICBjaGFuZ2VUYWIsXHJcbiAgbG9hZFRhYixcclxuICBhZGRFdmVudCxcclxuICBzYXZlVG9GaWxlLFxyXG4gIGxvYWRGcm9tRmlsZSxcclxufTtcclxuIiwiaW1wb3J0IHsgT3B0aW1pemVyIH0gZnJvbSBcIi4vb3B0aW1pemVyLmpzXCI7XHJcblxyXG5jbGFzcyBHZWFyIHtcclxuICBuYW1lID0gXCJnZWFyXCI7XHJcbiAgdmVyc2lvbiA9IDE7XHJcbiAgZGF0YSA9IHtcclxuICAgIHZlcnNpb246IHRoaXMudmVyc2lvbixcclxuICAgIGl0ZW1MZXZlbDogMTIwLFxyXG4gICAgaW5jbHVkZU1hc3Rlcnk6IHRydWUsXHJcbiAgICBjdXJzZUFudmlsOiB0cnVlLFxyXG4gICAgbG90dGVyeTogdHJ1ZSxcclxuICAgIGl0ZW1TbG90czoge1xyXG4gICAgICBKZXdlbHJ5OiAxOSxcclxuICAgICAgQXJtb3I6IDE5LFxyXG4gICAgICBXZWFwb246IDE5LFxyXG4gICAgfSxcclxuICAgIGVuY2hhbnRTbG90czogMzQyLFxyXG4gICAgc2V0QmlhczogMC4wNzUsXHJcbiAgICBlbmNoYW50VXNhZ2U6IHtcclxuICAgICAgVW5pY29ybktub3dsZWRnZTogXCJcIixcclxuICAgICAgSFBBZGRlcjogXCJcIixcclxuICAgICAgTVBBZGRlcjogXCJcIixcclxuICAgICAgQVRLQWRkZXI6IFwiXCIsXHJcbiAgICAgIE1BVEtBZGRlcjogXCJcIixcclxuICAgICAgREVGQWRkZXI6IFwiXCIsXHJcbiAgICAgIE1ERUZBZGRlcjogXCJcIixcclxuICAgICAgU1BEQWRkZXI6IFwiXCIsXHJcbiAgICAgIEhQTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgTVBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBBVEtNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgICBNQVRLTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgREVGTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgTURFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEFUS1Byb3BvdGlvbjogXCJkcHNcIixcclxuICAgICAgTUFUS1Byb3BvdGlvbjogXCJcIixcclxuICAgICAgREVGUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgICBNREVGUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgICBGaXJlUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgSWNlUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgVGh1bmRlclJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIExpZ2h0UmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgRGFya1Jlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIFBoeXNpY2FsQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgRmlyZUFic29ycHRpb246IFwiXCIsXHJcbiAgICAgIEljZUFic29ycHRpb246IFwiXCIsXHJcbiAgICAgIFRodW5kZXJBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBMaWdodEFic29ycHRpb246IFwiXCIsXHJcbiAgICAgIERhcmtBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBEZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBFcXVpcG1lbnREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIE1hZ2ljU2xpbWVEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBTcGlkZXJEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBCYXREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBGYWlyeURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIEZveERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIERldmlsRmlzaERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFRyZWFudERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIEZsYW1lVGlnZXJEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBVbmljb3JuRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgQ29sb3JNYXRlcmlhbERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFBoeXNpY2FsQ3JpdGljYWw6IFwiZHBzXCIsXHJcbiAgICAgIE1hZ2ljYWxDcml0aWNhbDogXCJcIixcclxuICAgICAgRVhQR2FpbjogXCJnYWluc1wiLFxyXG4gICAgICBTa2lsbFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgICAgIEVxdWlwbWVudFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgICAgIE1vdmVTcGVlZE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEdvbGRHYWluOiBcIlwiLFxyXG4gICAgICBTdG9uZUdhaW46IFwiXCIsXHJcbiAgICAgIENyeXN0YWxHYWluOiBcIlwiLFxyXG4gICAgICBMZWFmR2FpbjogXCJcIixcclxuICAgICAgV2FycmlvclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIFdpemFyZFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIEFuZ2VsU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgVGhpZWZTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBBcmNoZXJTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBUYW1lclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIEFsbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIFNsaW1lS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBNYWdpY1NsaW1lS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBTcGlkZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIEJhdEtub3dsZWRnZTogXCJcIixcclxuICAgICAgRmFpcnlLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIEZveEtub3dsZWRnZTogXCJcIixcclxuICAgICAgRGV2aWxGaXNoS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBUcmVhbnRLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIEZsYW1lVGlnZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIFBoeXNpY2FsRGFtYWdlOiBcIlwiLFxyXG4gICAgICBGaXJlRGFtYWdlOiBcIlwiLFxyXG4gICAgICBJY2VEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgICAgIFRodW5kZXJEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIExpZ2h0RGFtYWdlOiBcIlwiLFxyXG4gICAgICBEYXJrRGFtYWdlOiBcIlwiLFxyXG4gICAgICBIcFJlZ2VuOiBcIlwiLFxyXG4gICAgICBNcFJlZ2VuOiBcIlwiLFxyXG4gICAgICBUYW1pbmdQb2ludDogXCJcIixcclxuICAgICAgV2FycmlvclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIFdpemFyZFNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIEFuZ2VsU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgVGhpZWZTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBBcmNoZXJTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBUYW1lclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRvd25NYXRHYWluOiBcImdhaW5zXCIsXHJcbiAgICAgIFRvd25NYXRBcmVhQ2xlYXJHYWluOiBcIlwiLFxyXG4gICAgICBSZWJpcnRoUG9pbnRHYWluMTogXCJnYWluc1wiLFxyXG4gICAgICBSZWJpcnRoUG9pbnRHYWluMjogXCJnYWluc1wiLFxyXG4gICAgICBSZWJpcnRoUG9pbnRHYWluMzogXCJnYWluc1wiLFxyXG4gICAgICBDcml0aWNhbERhbWFnZTogXCJkcHNcIixcclxuICAgICAgQmxlc3NpbmdFZmZlY3Q6IFwiZHBzXCIsXHJcbiAgICAgIE1vdmVTcGVlZEFkZGVyOiBcIlwiLFxyXG4gICAgICBQZXRFWFBHYWluOiBcIlwiLFxyXG4gICAgICBMb3lhbHR5UG9pbnRHYWluOiBcIlwiLFxyXG4gICAgICBDYXRhbHlzdERvdWJsZUNyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBXYXJyaW9yU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgV2l6YXJkU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgQW5nZWxTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBUaGllZlNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIEFyY2hlclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRhbWVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgSHBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIE1wUmVnZW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBBcm1vcmVkRnVyeTogXCJcIixcclxuICAgICAgV2FyZGVkRnVyeTogXCJkcHNcIixcclxuICAgICAgUGV0UGh5c2ljYWxDcml0aWNhbENoYW5jZTogXCJcIixcclxuICAgICAgUGV0TWFnaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBQZXRDcml0aWNhbERhbWFnZTogXCJcIixcclxuICAgICAgUGV0RGVidWZmUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgU3RvbmVUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgICAgQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgICBMZWFmVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICAgIEd1aWxkRVhQR2FpbjogXCJnYWluc1wiLFxyXG4gICAgICBTUERNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBDcml0aWNhbERhbWFnZU11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIFNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICAgIEVxdWlwbWVudFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgICBFWFBHYWluTXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgICBHb2xkR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIFBoeXNpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgRmlyZURhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEljZURhbWFnZU11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIFRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBMaWdodERhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIERhcmtEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBUYW1pbmdQb2ludE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIFBldEVYUEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgQmxlc3NpbmdFZmZlY3RNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgICBQaHlzaWNhbENyaXRpY2FsTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgTWFnaWNhbENyaXRpY2FsTXVsdGlwbGllcjogXCJcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnZlcnNpb24gPCB0aGlzLnZlcnNpb24pIHtcclxuICAgICAgYWxlcnQoXCJtaXNzaW5nIHZlcnNpb24gbWlncmF0aW9uXCIpO1xyXG4gICAgICAvL3RoaXMuZGF0YS52ZXJzaW9uID0gdGhpcy52ZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURlZmF1bHRWYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZW5jaGFudFVzYWdlVGVtcGxhdGUgPSAoaWQsIG5hbWUpID0+IHtcclxuICAgICAgY29uc3QgbmFtZVNob3J0ID0gbmFtZVxyXG4gICAgICAgIC5yZXBsYWNlKFwiQWRkZXJcIiwgXCIrXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJFZmZlY3RNdWx0aXBsaWVyXCIsIFwiJVwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiTXVsdGlwbGllclwiLCBcIiVcIilcclxuICAgICAgICAucmVwbGFjZShcIlRvd25SZXNlYXJjaFBvd2VyXCIsIFwiUmVzZWFyY2hcIilcclxuICAgICAgICAucmVwbGFjZShcIlByb2ZpY2llbmN5XCIsIFwiUHJvZlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiU2tpbGxMZXZlbFwiLCBcIlNraWxsXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJSZXNpc3RhbmNlXCIsIFwiUmVzXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJEcm9wQ2hhbmNlXCIsIFwiRHJvcFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiQ3JpdGljYWxcIiwgXCJDcml0XCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJEYW1hZ2VcIiwgXCJEbWdcIilcclxuICAgICAgICAucmVwbGFjZShcIlNraWxsRWZmZWN0UmFuZ2VcIiwgXCJSYW5nZVwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiS25vd2xlZGdlXCIsIFwiRG1nXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJQZXRQaHlzaWNhbFwiLCBcIlBldFBoeXNcIilcclxuICAgICAgICAucmVwbGFjZShcIlBldE1hZ2ljYWxcIiwgXCJQZXRNYWdcIilcclxuICAgICAgICAucmVwbGFjZShcIkNhdGFseXN0RG91YmxlQ3JpdENoYW5jZVwiLCBcIkNhdGFEYmxDcml0XCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiLCBcIlRvd25NYXRBcmVhR2FpblwiKTtcclxuXHJcbiAgICAgIHJldHVybiBgPGxhYmVsIHRpdGxlPVwiJHtuYW1lfVwiPiR7bmFtZVNob3J0fSA8aW5wdXQgaWQ9XCJlbmNoYW50VXNhZ2UuJHtpZH1cIiB0eXBlPVwidGV4dFwiIHNpemU9XCI1XCIvPjwvbGFiZWw+YDtcclxuICAgIH07XHJcbiAgICBsZXQgZW5jaGFudFVzYWdlSFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMuZGF0YS5lbmNoYW50VXNhZ2UpIHtcclxuICAgICAgZW5jaGFudFVzYWdlSFRNTCArPSBlbmNoYW50VXNhZ2VUZW1wbGF0ZShpZCwgaWQpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmNoYW50VXNhZ2VJbnB1dFdyYXBwZXJcIikuaW5uZXJIVE1MID1cclxuICAgICAgZW5jaGFudFVzYWdlSFRNTDtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiN1c2VySW5wdXRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5pbnB1dENoYW5nZWQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW1pemVcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9wdGltaXplLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcclxuICAgIGNvbnN0IGlkUGFydHMgPSBpZC5zcGxpdChcIi5cIik7XHJcblxyXG4gICAgc3dpdGNoIChpZFBhcnRzWzBdKSB7XHJcbiAgICAgIGNhc2UgXCJpdGVtTGV2ZWxcIjpcclxuICAgICAgICB0aGlzLmRhdGEuaXRlbUxldmVsID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImluY2x1ZGVNYXN0ZXJ5XCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLmluY2x1ZGVNYXN0ZXJ5ID0gdGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjdXJzZUFudmlsXCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLmN1cnNlQW52aWwgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImxvdHRlcnlcIjpcclxuICAgICAgICB0aGlzLmRhdGEubG90dGVyeSA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaXRlbVNsb3RzXCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLml0ZW1TbG90c1tpZFBhcnRzWzFdXSA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlbmNoYW50U2xvdHNcIjpcclxuICAgICAgICB0aGlzLmRhdGEuZW5jaGFudFNsb3RzID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInNldEJpYXNcIjpcclxuICAgICAgICB0aGlzLmRhdGEuc2V0QmlhcyA9IHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVuY2hhbnRVc2FnZVwiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5lbmNoYW50VXNhZ2VbaWRQYXJ0c1sxXV0gPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlucHV0Q2hhbmdlZCBmb3IgdW5rbm93biBpZFwiLCBpZCwgYXJndW1lbnRzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZURlZmF1bHRWYWx1ZXMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBpbnB1dC5pZDtcclxuICAgICAgY29uc3QgaWRQYXJ0cyA9IGlkLnNwbGl0KFwiLlwiKTtcclxuICAgICAgc3dpdGNoIChpZFBhcnRzWzBdKSB7XHJcbiAgICAgICAgY2FzZSBcIml0ZW1MZXZlbFwiOlxyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuaXRlbUxldmVsO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImluY2x1ZGVNYXN0ZXJ5XCI6XHJcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdGhpcy5kYXRhLmluY2x1ZGVNYXN0ZXJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImN1cnNlQW52aWxcIjpcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEuY3Vyc2VBbnZpbDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsb3R0ZXJ5XCI6XHJcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdGhpcy5kYXRhLmxvdHRlcnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiaXRlbVNsb3RzXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5pdGVtU2xvdHNbaWRQYXJ0c1sxXV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZW5jaGFudFNsb3RzXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5lbmNoYW50U2xvdHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2V0Qmlhc1wiOlxyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuc2V0QmlhcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbmNoYW50VXNhZ2VcIjpcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLmVuY2hhbnRVc2FnZVtpZFBhcnRzWzFdXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwidXBkYXRlSFRNTFZhbHVlcyBmb3IgdW5rbm93biBpZFwiLCBpZCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU9wdGltaXplQnV0dG9uKGVuYWJsZSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVwiKTtcclxuICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLWdyZXlcIik7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW9yYW5nZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLW9yYW5nZVwiKTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZ3JleVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wdGltaXplKCkge1xyXG4gICAgdGhpcy50b2dnbGVPcHRpbWl6ZUJ1dHRvbihmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5zYXZlKCk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW1pemVyID0gbmV3IE9wdGltaXplcih0aGlzLmRhdGEpO1xyXG4gICAgb3B0aW1pemVyLm9wdGltaXplKCk7XHJcblxyXG4gICAgbGV0IGh0bWwgPVxyXG4gICAgICBcIjxoMj5SZXN1bHRzPC9oMj48cD5jbGljayBvbiB0aGUgaGVhZGVycyB0byBjb2xsYXBzZSB0aGUgc2VjdGlvbjwvcD5cIjtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+aXRlbXM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLml0ZW1zLFxyXG4gICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5lZmZlY3RzO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5sZXZlbE1heEVmZmVjdHM7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsRXNlV2l0aEVuY2hhbnRzPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci50b3RhbEVzZVdpdGhFbmNoYW50cyxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5iZXN0RW5jaGFudHM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLmJlc3RFbmNoYW50cyxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5iZXN0SXRlbXM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLmJlc3RJdGVtcyxcclxuICAgICAgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBkZWxldGUgdmFsdWUuZWZmZWN0cztcclxuICAgICAgICBkZWxldGUgdmFsdWUubGV2ZWxNYXhFZmZlY3RzO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5yZWxFZmZlY3RzO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5lc2U7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnBhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPnNldEl0ZW1zPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci5zZXRJdGVtcyxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz50b3RhbDwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIuZ2V0VG90YWxFbmNoYW50c1ZhbHVlKG9wdGltaXplci50b3RhbEVzZVdpdGhFbmNoYW50cyksXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICAvL1RPRE8gYnJlYWtkb3duIHRvdGFsRXNlV2l0aEVuY2hhbnRzIGJ5IHNvdXJjZXNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW1pemVSZXN1bHRcIikuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI29wdGltaXplUmVzdWx0ID4gaDNcIikuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0U2libGluZyk7XHJcbiAgICAgICAgaWYgKG5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlT3B0aW1pemVCdXR0b24odHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBHZWFyIH07XHJcbiIsImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiIGFzc2VydCB7IHR5cGU6IFwianNvblwiIH07XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW1pemVyIHtcclxuICBpdGVtTGV2ZWwgPSAxMjA7XHJcbiAgaW5jbHVkZU1hc3RlcnkgPSB0cnVlO1xyXG4gIGN1cnNlQW52aWwgPSB0cnVlO1xyXG4gIGxvdHRlcnkgPSB0cnVlO1xyXG4gIGl0ZW1TbG90cyA9IHtcclxuICAgIEpld2Vscnk6IDE5LFxyXG4gICAgQXJtb3I6IDE5LFxyXG4gICAgV2VhcG9uOiAxOSxcclxuICB9O1xyXG4gIGVuY2hhbnRTbG90cyA9IDM0MjtcclxuICBzZXRCaWFzID0gMC4wNzU7XHJcbiAgZW5jaGFudFVzYWdlID0ge1xyXG4gICAgVW5pY29ybktub3dsZWRnZTogXCJcIixcclxuICAgIEhQQWRkZXI6IFwiXCIsXHJcbiAgICBNUEFkZGVyOiBcIlwiLFxyXG4gICAgQVRLQWRkZXI6IFwiXCIsXHJcbiAgICBNQVRLQWRkZXI6IFwiXCIsXHJcbiAgICBERUZBZGRlcjogXCJcIixcclxuICAgIE1ERUZBZGRlcjogXCJcIixcclxuICAgIFNQREFkZGVyOiBcIlwiLFxyXG4gICAgSFBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTVBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQVRLTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIE1BVEtNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgREVGTXVsdGlwbGllcjogXCJcIixcclxuICAgIE1ERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQVRLUHJvcG90aW9uOiBcImRwc1wiLFxyXG4gICAgTUFUS1Byb3BvdGlvbjogXCJcIixcclxuICAgIERFRlByb3BvdGlvbjogXCJcIixcclxuICAgIE1ERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICBGaXJlUmVzaXN0YW5jZTogXCJcIixcclxuICAgIEljZVJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBUaHVuZGVyUmVzaXN0YW5jZTogXCJcIixcclxuICAgIExpZ2h0UmVzaXN0YW5jZTogXCJcIixcclxuICAgIERhcmtSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgRmlyZUFic29ycHRpb246IFwiXCIsXHJcbiAgICBJY2VBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgVGh1bmRlckFic29ycHRpb246IFwiXCIsXHJcbiAgICBMaWdodEFic29ycHRpb246IFwiXCIsXHJcbiAgICBEYXJrQWJzb3JwdGlvbjogXCJcIixcclxuICAgIERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBFcXVpcG1lbnREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgU2xpbWVEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgTWFnaWNTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBTcGlkZXJEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgQmF0RHJvcENoYW5jZTogXCJcIixcclxuICAgIEZhaXJ5RHJvcENoYW5jZTogXCJcIixcclxuICAgIEZveERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBEZXZpbEZpc2hEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgVHJlYW50RHJvcENoYW5jZTogXCJcIixcclxuICAgIEZsYW1lVGlnZXJEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgVW5pY29ybkRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBDb2xvck1hdGVyaWFsRHJvcENoYW5jZTogXCJcIixcclxuICAgIFBoeXNpY2FsQ3JpdGljYWw6IFwiZHBzXCIsXHJcbiAgICBNYWdpY2FsQ3JpdGljYWw6IFwiXCIsXHJcbiAgICBFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICBTa2lsbFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgICBFcXVpcG1lbnRQcm9maWNpZW5jeTogXCJnYWluc1wiLFxyXG4gICAgTW92ZVNwZWVkTXVsdGlwbGllcjogXCJcIixcclxuICAgIEdvbGRHYWluOiBcIlwiLFxyXG4gICAgU3RvbmVHYWluOiBcIlwiLFxyXG4gICAgQ3J5c3RhbEdhaW46IFwiXCIsXHJcbiAgICBMZWFmR2FpbjogXCJcIixcclxuICAgIFdhcnJpb3JTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgV2l6YXJkU2tpbGxMZXZlbDogXCJcIixcclxuICAgIEFuZ2VsU2tpbGxMZXZlbDogXCJcIixcclxuICAgIFRoaWVmU2tpbGxMZXZlbDogXCJcIixcclxuICAgIEFyY2hlclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBUYW1lclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBBbGxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBNYWdpY1NsaW1lS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgU3BpZGVyS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgQmF0S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgRmFpcnlLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBGb3hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBEZXZpbEZpc2hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBUcmVhbnRLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBGbGFtZVRpZ2VyS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICBGaXJlRGFtYWdlOiBcIlwiLFxyXG4gICAgSWNlRGFtYWdlOiBcImRwc1wiLFxyXG4gICAgVGh1bmRlckRhbWFnZTogXCJcIixcclxuICAgIExpZ2h0RGFtYWdlOiBcIlwiLFxyXG4gICAgRGFya0RhbWFnZTogXCJcIixcclxuICAgIEhwUmVnZW46IFwiXCIsXHJcbiAgICBNcFJlZ2VuOiBcIlwiLFxyXG4gICAgVGFtaW5nUG9pbnQ6IFwiXCIsXHJcbiAgICBXYXJyaW9yU2tpbGxSYW5nZTogXCJcIixcclxuICAgIFdpemFyZFNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBBbmdlbFNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBUaGllZlNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBBcmNoZXJTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgVGFtZXJTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgVG93bk1hdEdhaW46IFwiZ2FpbnNcIixcclxuICAgIFRvd25NYXRBcmVhQ2xlYXJHYWluOiBcIlwiLFxyXG4gICAgUmViaXJ0aFBvaW50R2FpbjE6IFwiZ2FpbnNcIixcclxuICAgIFJlYmlydGhQb2ludEdhaW4yOiBcImdhaW5zXCIsXHJcbiAgICBSZWJpcnRoUG9pbnRHYWluMzogXCJnYWluc1wiLFxyXG4gICAgQ3JpdGljYWxEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgICBCbGVzc2luZ0VmZmVjdDogXCJkcHNcIixcclxuICAgIE1vdmVTcGVlZEFkZGVyOiBcIlwiLFxyXG4gICAgUGV0RVhQR2FpbjogXCJcIixcclxuICAgIExveWFsdHlQb2ludEdhaW46IFwiXCIsXHJcbiAgICBDYXRhbHlzdERvdWJsZUNyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgV2FycmlvclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBXaXphcmRTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgQW5nZWxTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgVGhpZWZTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgQXJjaGVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIFRhbWVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIEhwUmVnZW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTXBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBBcm1vcmVkRnVyeTogXCJcIixcclxuICAgIFdhcmRlZEZ1cnk6IFwiZHBzXCIsXHJcbiAgICBQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgUGV0TWFnaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgUGV0Q3JpdGljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICBQZXREZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgU3RvbmVUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgIENyeXN0YWxUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgIExlYWZUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgIEd1aWxkRVhQR2FpbjogXCJnYWluc1wiLFxyXG4gICAgU1BETXVsdGlwbGllcjogXCJcIixcclxuICAgIENyaXRpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIFNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICBFcXVpcG1lbnRQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgIEVYUEdhaW5NdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICBHb2xkR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBQaHlzaWNhbERhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBGaXJlRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIEljZURhbWFnZU11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBUaHVuZGVyRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIExpZ2h0RGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIERhcmtEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgVGFtaW5nUG9pbnRNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgUGV0RVhQR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgIEJsZXNzaW5nRWZmZWN0TXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIFBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgTWFnaWNhbENyaXRpY2FsTXVsdGlwbGllcjogXCJcIixcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VySW5wdXQpIHtcclxuICAgIHRoaXMuaXRlbUxldmVsID0gdXNlcklucHV0Lml0ZW1MZXZlbDtcclxuICAgIHRoaXMuaW5jbHVkZU1hc3RlcnkgPSB1c2VySW5wdXQuaW5jbHVkZU1hc3Rlcnk7XHJcbiAgICB0aGlzLmN1cnNlQW52aWwgPSB1c2VySW5wdXQuY3Vyc2VBbnZpbDtcclxuICAgIHRoaXMubG90dGVyeSA9IHVzZXJJbnB1dC5sb3R0ZXJ5O1xyXG4gICAgdGhpcy5pdGVtU2xvdHMgPSB1c2VySW5wdXQuaXRlbVNsb3RzO1xyXG4gICAgdGhpcy5lbmNoYW50U2xvdHMgPSB1c2VySW5wdXQuZW5jaGFudFNsb3RzO1xyXG4gICAgdGhpcy5zZXRCaWFzID0gdXNlcklucHV0LnNldEJpYXM7XHJcbiAgICB0aGlzLmVuY2hhbnRVc2FnZSA9IHVzZXJJbnB1dC5lbmNoYW50VXNhZ2U7XHJcbiAgfVxyXG5cclxuICBvcHRpbWl6ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiT3B0aW1pemVyLm9wdGltaXplKCkgY2FsbGVkXCIpO1xyXG4gICAgdGhpcy5zdGVwMSgpO1xyXG4gICAgdGhpcy5zdGVwMigpO1xyXG4gIH1cclxuXHJcbiAgZW5jaGFudE1hcCA9IHt9O1xyXG4gIGNhbGNFbmNoYW50RWZmZWN0VmFsdWUoZWZmZWN0KSB7XHJcbiAgICBsZXQgZW5jaGFudCA9IHRoaXMuZW5jaGFudE1hcFtlZmZlY3Qua2luZF07XHJcbiAgICBsZXQgZW5jaGFudEVmZmVjdFZhbHVlID0gZW5jaGFudC5tYXhWYWx1ZTtcclxuICAgIGlmICh0aGlzLmxvdHRlcnkpIHtcclxuICAgICAgZW5jaGFudEVmZmVjdFZhbHVlID0gZW5jaGFudC5tYXhWYWx1ZUxvdHRlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuICB9XHJcbiAgY2FsY0l0ZW1FZmZlY3RWYWx1ZShlZmZlY3QpIHtcclxuICAgIGxldCBpdGVtRWZmZWN0VmFsdWUgPSBlZmZlY3QuaW5pdFZhbHVlICsgZWZmZWN0LmJhc2VWYWx1ZSAqIHRoaXMuaXRlbUxldmVsO1xyXG5cclxuICAgIGlmIChpdGVtRWZmZWN0VmFsdWUgPCAwICYmIHRoaXMuY3Vyc2VBbnZpbCkge1xyXG4gICAgICAvL3RoaXMgaXMgYSBjdXJzZWQgZWZmZWN0LCBpZiB3ZSBhZGQgY3Vyc2UgYW52aWxzIGl0IHdpbGwgYmUgbnVsbGlmaWVkXHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtRWZmZWN0VmFsdWU7XHJcbiAgfVxyXG4gIGl0ZW1zID0gW107XHJcbiAgc3RlcDEoKSB7XHJcbiAgICBsZXQgZW5jaGFudFVzYWdlQWRkZWROZXcgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBlbmNoYW50IG9mIGRhdGEuZW5jaGFudHMpIHtcclxuICAgICAgdGhpcy5lbmNoYW50TWFwW2VuY2hhbnQua2luZF0gPSBlbmNoYW50O1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVuY2hhbnRVc2FnZVtlbmNoYW50LmtpbmRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJmb3VuZCBuZXcgZW5jaGFudCBub3QgbGlzdGVkIGluIGVuY2hhbnRVc2FnZVwiLFxyXG4gICAgICAgICAgZW5jaGFudC5raW5kXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmVuY2hhbnRVc2FnZVtlbmNoYW50LmtpbmRdID0gXCJcIjtcclxuICAgICAgICBlbmNoYW50VXNhZ2VBZGRlZE5ldyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW5jaGFudFVzYWdlQWRkZWROZXcpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09cHJpbnRpbmcgZW5jaGFudFVzYWdlPT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKHRoaXMuZW5jaGFudFVzYWdlKTtcclxuICAgICAgY29uc29sZS53YXJuKHRoaXMuZW5jaGFudFVzYWdlKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEuaXRlbXMpIHtcclxuICAgICAgLy9maWx0ZXIgb3V0IHZlcnkgYmFkIGl0ZW1zXHJcbiAgICAgIGlmIChpdGVtLnNldEtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgbGV0IGVzZSA9IHtcclxuICAgICAgICBzbG90czogNCxcclxuICAgICAgICBtYXN0ZXJpZXM6IDAsXHJcbiAgICAgICAgZWZmZWN0czogMCxcclxuICAgICAgICBzdW06IDAsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgcmVsRWZmZWN0cyA9IHt9O1xyXG5cclxuICAgICAgZm9yIChsZXQgZWZmZWN0IG9mIGl0ZW0uZWZmZWN0cykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1FZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0l0ZW1FZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgIGxldCBlbmNoYW50RWZmZWN0VmFsdWUgPSB0aGlzLmNhbGNFbmNoYW50RWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSArPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcblxyXG4gICAgICAgIC8vaWYgd2UgY2FyZSBhYm91dCB0aGlzIGVmZmVjdCwgaW5jbHVkZSBpbiB0aGUgZXNlXHJcbiAgICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdC5raW5kXSkge1xyXG4gICAgICAgICAgZXNlLmVmZmVjdHMgKz0gaXRlbUVmZmVjdFZhbHVlIC8gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaW5jbHVkZU1hc3RlcnkpIHtcclxuICAgICAgICBmb3IgKGxldCBlZmZlY3Qgb2YgaXRlbS5sZXZlbE1heEVmZmVjdHMpIHtcclxuICAgICAgICAgIC8vZWZmZWN0LmtpbmQgTm90aGluZyBhcmUgZW5jaGFudCBTbG90c1xyXG4gICAgICAgICAgaWYgKGVmZmVjdC5raW5kID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgICAgICBpZiAoZWZmZWN0LmluaXRWYWx1ZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgIGVzZS5zbG90cyA9IDc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZXNlLnNsb3RzID0gNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBpdGVtRWZmZWN0VmFsdWUgPSB0aGlzLmNhbGNJdGVtRWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdICs9IGl0ZW1FZmZlY3RWYWx1ZTtcclxuXHJcbiAgICAgICAgICAvL2lmIHdlIGNhcmUgYWJvdXQgdGhpcyBlZmZlY3QsIGluY2x1ZGUgaW4gdGhlIGVzZVxyXG4gICAgICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdC5raW5kXSkge1xyXG4gICAgICAgICAgICBlc2UubWFzdGVyaWVzICs9XHJcbiAgICAgICAgICAgICAgaXRlbUVmZmVjdFZhbHVlIC8gdGhpcy5jYWxjRW5jaGFudEVmZmVjdFZhbHVlKGVmZmVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlc2Uuc3VtID0gZXNlLnNsb3RzICsgZXNlLm1hc3RlcmllcyArIGVzZS5lZmZlY3RzO1xyXG5cclxuICAgICAgaXRlbS5lc2UgPSBlc2U7XHJcblxyXG4gICAgICBpdGVtLnJlbEVmZmVjdHMgPSByZWxFZmZlY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICByZXR1cm4gYi5lc2Uuc3VtIC0gYS5lc2Uuc3VtO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b3RhbEVzZVdpdGhFbmNoYW50cyA9IHt9O1xyXG4gIGJlc3RFbmNoYW50cyA9IHt9O1xyXG4gIGJlc3RJdGVtcyA9IHtcclxuICAgIEpld2Vscnk6IFtdLFxyXG4gICAgQXJtb3I6IFtdLFxyXG4gICAgV2VhcG9uOiBbXSxcclxuICB9O1xyXG4gIHNldEl0ZW1zID0ge307XHJcblxyXG4gIC8vVE9ETyByZXR1cm4gYSBvYmplY3Qgbm90IGEgZmxvYXRcclxuICAvLyBoYXZlIHNlcGVyYXRlIHZhbHVlcyBmb3IgZHBzIGFuZCBnYWlucywgLi4uXHJcbiAgZ2V0VG90YWxFbmNoYW50c1ZhbHVlKGVuY2hhbnRzLCBlbmNoYW50c1RvQWRkKSB7XHJcbiAgICBsZXQgdG90YWwgPSAxO1xyXG5cclxuICAgIC8vVE9ETyBpbXByb3ZlIHRoZSBhY2N1cmFjeVxyXG4gICAgLy8gY29uc2lkZXIgYmFzZSBlbmNoYW50IHZhbHVlXHJcbiAgICAvLyBjb25zaWRlciBvdXRsZWlyIGxpa2UgZnVyeVxyXG4gICAgLy9jb25zaWRlciB0YXJnZXQgY2FwcyBmb3IgZHBzIGFuZCBjcml0IGNoYW5jZVxyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBlbmNoYW50cykge1xyXG4gICAgICAvL2lmIHdlIGRvbnQgY2FyZSBmb3IgdGhlc2UgZG9udCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhbHVlXHJcbiAgICAgIGlmICghdGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGVmZmVjdFZhbHVlID0gZW5jaGFudHNbZWZmZWN0S2luZF07XHJcbiAgICAgIGlmIChlbmNoYW50c1RvQWRkICYmIGVuY2hhbnRzVG9BZGRbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICBlZmZlY3RWYWx1ZSArPSBlbmNoYW50c1RvQWRkW2VmZmVjdEtpbmRdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b3RhbCAqPSAxICsgZWZmZWN0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuICBzdGVwMigpIHtcclxuICAgIGxldCB0b3RhbEVzZSA9IHt9O1xyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLmVuY2hhbnRVc2FnZSkge1xyXG4gICAgICB0b3RhbEVzZVtlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNldEl0ZW1zRWZmZWN0TXVsdCA9IFsxLCAxLCAxLjA1LCAxLjEsIDEuMTQsIDEuMTksIDEuMjUsIDEuMzUsIDEuNV07XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgaXRlbS5zZXRFZmZlY3RNdWx0ID0gMDtcclxuICAgICAgaWYgKGl0ZW0uc2V0S2luZCAhPT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdID0ge1xyXG4gICAgICAgICAgICBuZXdTZXRJdGVtVmFsdWU6IDAsXHJcbiAgICAgICAgICAgIGFjdGl2ZVNldEl0ZW1zOiAwLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRCZXN0SXRlbSA9IChwYXJ0KSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGlmIChpdGVtLnBhcnQgPT09IHBhcnQpIHtcclxuICAgICAgICAgIC8vaXRlbXMgaXMgc29ydGVkLCBzbyB3ZSBqdXN0IHJldHVybiB0aGUgZmlyc3Qgd2hpY2ggbWF0Y2hlcyB0aGUgcGFydFxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbVRvVG90YWxFc2UgPSAoaXRlbSkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIGl0ZW0ucmVsRWZmZWN0cykge1xyXG4gICAgICAgIGlmIChpdGVtLnJlbEVmZmVjdHNbZWZmZWN0S2luZF0gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG90YWxFc2VbZWZmZWN0S2luZF0gKz1cclxuICAgICAgICAgIGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSAqIGl0ZW0uc2V0RWZmZWN0TXVsdDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSkge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXVtpdGVtLmtpbmRdID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0uYWN0aXZlU2V0SXRlbXMrKztcclxuXHJcbiAgICAgICAgLy91cGRhdGUgYWxsIHNldCBpdGVtIHN0cmVuZ3RoXHJcbiAgICAgICAgZm9yIChsZXQgc2V0SXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2V0SXRlbS5zZXRLaW5kID09PSBpdGVtLnNldEtpbmQpIHtcclxuICAgICAgICAgICAgc2V0SXRlbS5zZXRFZmZlY3RNdWx0ID1cclxuICAgICAgICAgICAgICBzZXRJdGVtc0VmZmVjdE11bHRbdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdLmFjdGl2ZVNldEl0ZW1zXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcmVjYWxjdWxhdGUgdG90YWxFc2Ugd2l0aCBjaGFuZ2VkIHNldCBzdHJlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdG90YWxFc2UpIHtcclxuICAgICAgICAgIHRvdGFsRXNlW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiB0aGlzLmJlc3RJdGVtc1twYXJ0XSkge1xyXG4gICAgICAgICAgICBhZGRJdGVtVG9Ub3RhbEVzZShpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYmVzdEl0ZW1zW2l0ZW0ucGFydF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgIC8vdXBkYXRlIHRoZSB0b3RhbEVzZVxyXG4gICAgICBhZGRJdGVtVG9Ub3RhbEVzZShpdGVtKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRXNlID0gKCkgPT4ge1xyXG4gICAgICAvL3Jlc2V0IHRvdGFsRXNlV2l0aEVuY2hhbnRzXHJcbiAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHMgPSB7fTtcclxuICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0b3RhbEVzZSkge1xyXG4gICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF0gPSB0b3RhbEVzZVtlZmZlY3RLaW5kXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9jYWxjdWFsdGUgdGhlIGF2ZXJhZ2Ugc2V0IGVmZmVjdCBtdWx0LCBuZXcgZW5jaGFudHMgd2lsbCB1c2UgdGhpcyBvbmVcclxuICAgICAgbGV0IGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ID0gMTtcclxuICAgICAgbGV0IGVxdWlwcGVkSXRlbUNvdW50ID0gMDtcclxuICAgICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5iZXN0SXRlbXNbcGFydF0pIHtcclxuICAgICAgICAgIGVxdWlwcGVkSXRlbUNvdW50Kys7XHJcblxyXG4gICAgICAgICAgaWYgKGVxdWlwcGVkSXRlbUNvdW50ID09PSAxKVxyXG4gICAgICAgICAgICBhdmVyYWdlU2V0RWZmZWN0TXVsdCA9IGl0ZW0uc2V0RWZmZWN0TXVsdDtcclxuICAgICAgICAgIGVsc2UgYXZlcmFnZVNldEVmZmVjdE11bHQgKz0gaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZXF1aXBwZWRJdGVtQ291bnQgPiAwKSB7XHJcbiAgICAgICAgYXZlcmFnZVNldEVmZmVjdE11bHQgLz0gZXF1aXBwZWRJdGVtQ291bnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbmNoYW50c1RvU3BlbnQgPSB0aGlzLmVuY2hhbnRTbG90cztcclxuICAgICAgd2hpbGUgKGVuY2hhbnRzVG9TcGVudCA+IDApIHtcclxuICAgICAgICBsZXQgbG93ZXN0RWZmZWN0S2luZCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGxvd2VzdEVuY2hhbnRWYWx1ZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdGhpcy5lbmNoYW50VXNhZ2UpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXSA8IGxvd2VzdEVuY2hhbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdEVmZmVjdEtpbmQgPSBlZmZlY3RLaW5kO1xyXG4gICAgICAgICAgICAgIGxvd2VzdEVuY2hhbnRWYWx1ZSA9IHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vVE9ETyBpbmNsdWRlIGF2ZXJhZ2Ugc2V0RWZmZWN0TXVsdFxyXG4gICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbbG93ZXN0RWZmZWN0S2luZF0gKz0gYXZlcmFnZVNldEVmZmVjdE11bHQ7XHJcbiAgICAgICAgZW5jaGFudHNUb1NwZW50LS07XHJcbiAgICAgIH1cclxuICAgICAgLy9UT0RPIGRvIHRoaXMgZm9yIHVwIHRvICs3IGVuY2hhbnRzIGZvciBpdGVtLmVzZS5zbG90c1xyXG5cclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgLy9UT0RPIGZhY3RvciBpbiBpdGVtLmVzZS5zbG90cywgY2hvb3NlIHRoZSB0b3RhbEVzZVdpdGhFbmNoYW50cyBhY2NvcmRpbmdseVxyXG4gICAgICAgIGl0ZW0uZXNlLnVwZGF0ZWRTdW0gPSB0aGlzLmdldFRvdGFsRW5jaGFudHNWYWx1ZShcclxuICAgICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHMsXHJcbiAgICAgICAgICBpdGVtLnJlbEVmZmVjdHNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2FmdGVyIGFsbCBuZXcgaXRlbVZhbHVlcyBoYXZlIGJlZW4gY2FsY3VsYXRlZCwgdXBkYXRlIHRoZSBzZXRJdGVtVmFsdWVzXHJcbiAgICAgIC8vICBhbmQgaW5jcmVhc2UgdGhlIHZhbHVlIG9mIGl0ZW1zIHdoaWNoIGFyZSBwYXJ0IG9mIGFuIGluY29tcGxldGUgc2V0XHJcbiAgICAgIGZvciAobGV0IHNldEtpbmQgaW4gdGhpcy5zZXRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbc2V0S2luZF0ubmV3U2V0SXRlbVZhbHVlID0gMDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpdGVtUGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5iZXN0SXRlbXNbaXRlbVBhcnRdKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0ubmV3U2V0SXRlbVZhbHVlICs9XHJcbiAgICAgICAgICAgIGl0ZW0uZXNlLnVwZGF0ZWRTdW0gKiB0aGlzLnNldEJpYXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgIC8vaWYgdGhpcyBpcyBhIG5ldyBzZXQgaXRlbSwgYWRkIHRoZSB2YWx1ZSBvZiB0aGUgb3RoZXIgaXRlbXMgYXRvcCBvZiBpdFxyXG4gICAgICAgIGlmICghdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0pIHtcclxuICAgICAgICAgIGl0ZW0uZXNlLnVwZGF0ZWRTdW0gKz0gdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdLm5ld1NldEl0ZW1WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmVzZS51cGRhdGVkU3VtIC0gYS5lc2UudXBkYXRlZFN1bTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbnN0cnVjdEJlc3RJdGVtcyA9ICgpID0+IHtcclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsZXQgYmVzdFBhcnQgPSBcIlwiO1xyXG4gICAgICAgIGxldCBiZXN0UGFydEZyZWVTbG90cyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBhcnQgaW4gdGhpcy5pdGVtU2xvdHMpIHtcclxuICAgICAgICAgIGxldCBmcmVlU2xvdHMgPSB0aGlzLml0ZW1TbG90c1twYXJ0XSAtIHRoaXMuYmVzdEl0ZW1zW3BhcnRdLmxlbmd0aDtcclxuICAgICAgICAgIGlmIChmcmVlU2xvdHMgPiBiZXN0UGFydEZyZWVTbG90cykge1xyXG4gICAgICAgICAgICBiZXN0UGFydCA9IHBhcnQ7XHJcbiAgICAgICAgICAgIGJlc3RQYXJ0RnJlZVNsb3RzID0gZnJlZVNsb3RzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9ubyBtb3JlIGl0ZW1zIHRvIGFkZCwgd2UgYXJlIGRvbmVcclxuICAgICAgICBpZiAoYmVzdFBhcnQgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiZXN0SXRlbSA9IGZpbmRCZXN0SXRlbShiZXN0UGFydCk7XHJcbiAgICAgICAgYWRkSXRlbShiZXN0SXRlbSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUVzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdEJlc3RJdGVtcygpO1xyXG4gICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICB0aGlzLmJlc3RJdGVtc1twYXJ0XS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuZXNlLnN1bSA8IGIuZXNlLnN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmVzZS5zdW0gPiBiLmVzZS5zdW0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50cykge1xyXG4gICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICB0aGlzLmJlc3RFbmNoYW50c1tlZmZlY3RLaW5kXSA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgICB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2VmZmVjdEtpbmRdIC0gdG90YWxFc2VbZWZmZWN0S2luZF1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBiZXN0VG90YWxFc2VXaXRoRW5jaGFudHM6IHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHMsXHJcbiAgICAgIGJlc3RFbmNoYW50czogdGhpcy5iZXN0RW5jaGFudHMsXHJcbiAgICAgIGJlc3RJdGVtczogdGhpcy5iZXN0SXRlbXMsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udmVydCwgY29udmVydDIsIHNpZ21hLCBhZGRFdmVudCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5cclxuY2xhc3MgU2xpbWVCYW5rIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9IFwic2xpbWVCYW5rXCI7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHJlc2VhcmNoOiB7XHJcbiAgICAgICAgbGVhZjogeyBsZXZlbDogMCwgdmFsdWU6IDAgfSxcclxuICAgICAgICBzdG9uZTogeyBsZXZlbDogMCwgdmFsdWU6IDAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNsaW1lQ29pbkNhcDE6IHtcclxuICAgICAgICBsZXZlbDogMCxcclxuICAgICAgICB2YWx1ZTogMTAwMDAsXHJcbiAgICAgICAgY29zdDogMTAwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaW1lQ29pbkNhcDI6IHtcclxuICAgICAgICBsZXZlbDogMCxcclxuICAgICAgICB2YWx1ZTogMTAwLFxyXG4gICAgICAgIGNvc3Q6IDEwMDAwMDAwMDAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzbGltZUNvaW5DYXBUb3RhbDogMCxcclxuICAgICAgaW50cmVzdDogMCxcclxuICAgICAgbXVsdGlwbGllcjogMCxcclxuICAgICAgcGV0MToge1xyXG4gICAgICAgIHJhbms6IDAsXHJcbiAgICAgICAgbG95YWx0eTogMCxcclxuICAgICAgICBwYXNzaXZlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBtaWxlc3RvbmUxODAwOiBmYWxzZSxcclxuICAgICAgbWlsZXN0b25lMjcwMDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xhc3MgY29uc3RydWN0b3IgYWthIEluaXRcIik7XHJcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hTdG9uZS5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwicmVzZWFyY2gubGVhZi5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnJlc2VhcmNoTGVhZi5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnNsaW1lQ29pbkNhcDEuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zbGltZUNvaW5DYXAyLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJwZXQxLnJhbmtcIiwgXCJjaGFuZ2VcIiwgdGhpcy5wZXQuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInBldDEubG95YWx0eVwiLCBcImNoYW5nZVwiLCB0aGlzLnBldC5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwibWlsZXN0b25lMTgwMFwiLCBcImNoYW5nZVwiLCB0aGlzLm1pbGVzdG9uZS5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwibWlsZXN0b25lMjcwMFwiLCBcImNoYW5nZVwiLCB0aGlzLm1pbGVzdG9uZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXkoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJkaXNwbGF5KClcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKFwiI3Jlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUudmFsdWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLmNvc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5jb3N0KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi52YWx1ZVwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiKS52YWx1ZSA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmNvc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFuay5pbnRyZXN0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLmludHJlc3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXBUb3RhbFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFuay5tdWx0aXBsaWVyXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5tdWx0aXBsaWVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnBhc3NpdmVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnBldDEucGFzc2l2ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlID0gdGhpcy5kYXRhLnBldDEucmFuaztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5sb3lhbHR5XCIpLnZhbHVlID0gdGhpcy5kYXRhLnBldDEubG95YWx0eTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPT0gdHJ1ZSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID09IHRydWUpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1pbGVzdG9uZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHBldCgpIHtcclxuICAgIHRoaXMuZGF0YS5wZXQxLnJhbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucmFua1wiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5wZXQxLmxveWFsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZTtcclxuICAgIGxldCBsb3lhbHR5ID0gMi41ICogKHBhcnNlRmxvYXQodGhpcy5kYXRhLnBldDEubG95YWx0eSkgKyAxMDApICogMC4wMTtcclxuICAgIHRoaXMuZGF0YS5wZXQxLnBhc3NpdmUgPSBwYXJzZUZsb2F0KHRoaXMuZGF0YS5wZXQxLnJhbmsgKiBsb3lhbHR5ICsgMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICByZXNlYXJjaFN0b25lKCkge1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS52YWx1ZSA9ICsodGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4xKS50b0ZpeGVkKDIpO1xyXG4gICAgdGhpcy5pbnRyZXN0KCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHJlc2VhcmNoTGVhZigpIHtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgPSArKHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsICogMikudG9GaXhlZCgyKSArIDEwMDtcclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgLy8gc2xpbWVCYW5rU2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcDEoKSB7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA9IGNvbnZlcnQyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiKS52YWx1ZSk7XHJcbiAgICAvLyBpbnB1dCA9IGNvbnZlcnQyKGlucHV0KTtcclxuXHJcbiAgICAvLyB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSA9IHNpZ21hKFxyXG4gICAgLy8gICAwLFxyXG4gICAgLy8gICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCxcclxuICAgIC8vICAgZnVuY3Rpb24gKGEpIHtcclxuICAgIC8vICAgICByZXR1cm4gYSAqIDIwIC0gMTAgKyAxMDAwMDtcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgMTBcclxuICAgIC8vICk7XHJcbiAgICBsZXQgbGV2ZWwgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbDtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlID0gMTAwMDAuMCArIDEwMDAwLjAgKiBsZXZlbCArIDEwLjAgKiBNYXRoLnBvdyhsZXZlbCwgMi4wKTtcclxuXHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcDFDb3N0KCk7XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcDIoKSB7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlID1cclxuICAgICAgc2lnbWEoXHJcbiAgICAgICAgMCxcclxuICAgICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCxcclxuICAgICAgICBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgcmV0dXJuIGEgKiAyMCAtIDEwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTBcclxuICAgICAgKSArIDEwMDtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmNvc3QgPSAxMDAwMDAwMDAwMC4wICogTWF0aC5wb3coMi4wLCB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCk7XHJcblxyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXBUb3RhbCgpIHtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCA9XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlICpcclxuICAgICAgKHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlIC8gMTAwKSAqXHJcbiAgICAgICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSAvIDEwMCkgKlxyXG4gICAgICAodGhpcy5kYXRhLnBldDEucGFzc2l2ZSAvIDEwMCk7XHJcblxyXG4gICAgdGhpcy5pbnRyZXN0KCk7XHJcbiAgfVxyXG5cclxuICBpbnRyZXN0KCkge1xyXG4gICAgbGV0IGludHJlc3RQZXJjZW50ID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4wMDE7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUxODAwKSB7XHJcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDI1O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwKSB7XHJcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEuaW50cmVzdCA9IGludHJlc3RQZXJjZW50ICogdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsO1xyXG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5pbnRyZXN0IC8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XHJcbiAgICB0aGlzLmRhdGEubXVsdGlwbGllciAtPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5tdWx0aXBsaWVyICogMC4xNSk7XHJcbiAgICAvLyBzbGltZUJhbmtPcHRpbWlzZXIoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcDFDb3N0KCkge1xyXG4gICAgLy8gaWYgKChkb3VibGUpIHRoaXMubGV2ZWwudmFsdWUgPj0gNTAwIDAwMCAwMDAuMClcclxuICAgIC8vIHJldHVybiAxRSsxNSAqIHRoaXMuQ29zdE1vZGlmaWVyKCk7XHJcbiAgICBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxOVxyXG4gICAgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxOFxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxN1xyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE2XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE1XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMTAwVFxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxMFRcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxVFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCAqIDEwMDAwICsgMTAwMDA7XHJcbiAgICB9IC8vIG5lZWQgdG8gZmluZCBzb2x1dGlvbiBmb3IgbGVzcyB0aGFuIDEwTSB1cGdyYWRlc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2xpbWVCYW5rIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRUYWIsIGxvYWRGcm9tRmlsZSwgYWRkRXZlbnQsIHJlc3RhcnQsIHNhdmVUb0ZpbGUgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgQW52aWwgfSBmcm9tIFwiLi9hbnZpbC5qc1wiO1xyXG4vLyBpbXBvcnQgeyBleHBlZGl0aW9uTG9hZCB9IGZyb20gXCIuL2V4cGVkaXRpb24uanNcIjtcclxuaW1wb3J0IHsgU2xpbWVCYW5rIH0gZnJvbSBcIi4vc2xpbWViYW5rLmpzXCI7XHJcbmltcG9ydCB7IEdlYXIgfSBmcm9tIFwiLi9nZWFyL2dlYXIuanNcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IHZlcnNpb24gPSBcIjAuMS4yXCI7XHJcblxyXG5mdW5jdGlvbiByZWFkeShmbikge1xyXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwibG9hZGluZ1wiKSB7XHJcbiAgICBmbigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmbik7XHJcbiAgfVxyXG59XHJcblxyXG5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgLy8gc3RhcnQgdXBcclxuICBsb2FkKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZCgpIHtcclxuICAvLyBjdXJyZW50IHRhYlxyXG4gIHZhciB0YWIgPSAwO1xyXG4gIGNvbnN0IHRhYl9saXN0ID0gW1xyXG4gICAgeyBpZDogXCJzbGltZUJhbmtcIiwgbmFtZTogXCJTbGltZSBCYW5rIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJsYWJcIiwgbmFtZTogXCJMYWIgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImFudmlsXCIsIG5hbWU6IFwiQW52aWwgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImV4cGVkaXRpb25cIiwgbmFtZTogXCJFeHBlZGl0aW9uIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJnZWFyXCIsIG5hbWU6IFwiR2VhciBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwic2V0dGluZ3NcIiwgbmFtZTogXCJTZXR0aW5nc1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8gY29uc3QgdGFiX2xpc3QgPSBbXCJzbGltZS1iYW5rXCIsIFwibGFiXCIsIFwiYW52aWxcIiwgXCJleHBlZGl0aW9uXCIsIFwic2V0dGluZ3NcIl07XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFRhYlwiKSkge1xyXG4gICAgdGFiX2xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAvLyBhZGRFdmVudChlbGVtZW50LmlkLCBcImNsaWNrXCIsIGNoYW5nZVRhYik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQuaWQpO1xyXG4gICAgICAvLyB0YWIgPSBlbGVtZW50ICsgXCItY2FsY3VsYXRvclwiO1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpID09IGVsZW1lbnQuaWQpIHtcclxuICAgICAgICBsb2FkVGFiKGVsZW1lbnQuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvLyBsb2FkaW5nXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcInNsaW1lQmFua1wiKSB7XHJcbiAgICAgICAgICAgIG5ldyBTbGltZUJhbmsoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwiYW52aWxcIikge1xyXG4gICAgICAgICAgICBuZXcgQW52aWwoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwiZ2VhclwiKSB7XHJcbiAgICAgICAgICAgIG5ldyBHZWFyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcInNldHRpbmdzXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmVcIik7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIsIFwiY2hhbmdlXCIsIGxvYWRGcm9tRmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJcIik7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3Muc2F2ZVRvRmlsZVwiLCBcImNsaWNrXCIsIHNhdmVUb0ZpbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHNhdmVcIik7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3MucmVzdGFydFwiLCBcImNsaWNrXCIsIHJlc3RhcnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHJlc3RhcnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MID0gXCJJRUgyY2FsYyA+IFwiICsgZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaWQpLnN0eWxlLmNvbG9yID0gXCIjZjJlMDA5XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRUYWJcIiwgXCJzbGltZUJhbmtcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFua1wiKS5zdHlsZS5jb2xvciA9IFwiI2YyZTAwOVwiO1xyXG4gICAgbG9hZFRhYihcInNsaW1lQmFua1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gcmVzcG9uc2U7XHJcbiAgICAgIG5ldyBTbGltZUJhbmsoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJlbHNlIGluIGxvYWQgfCBhZnRlciBJbml0XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIEFudmlsIGxvYWRpbmdcclxuICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiLCAxKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC1uaXRyby1zcGVlZFwiKS52YWx1ZSA9XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIik7XHJcbiAgLy8gfVxyXG4gIC8vIGFudmlsIGxvYWQgbmVlZCByZWZhY3RvclxyXG5cclxuICAvLyBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgLy8gICB2YXIgaWQgPSAwO1xyXG4gIC8vICAgaWQgPSBcImFudmlsLWR1bmdlb24tXCIgKyBpICsgXCItdGltZVwiO1xyXG4gIC8vICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gY2FsY0FudmlsKCk7XHJcbiAgLy8gY2FsY0V4cGVkaXRpb24oKTtcclxuICAvLyBleHBlZGl0aW9uTG9hZCgpO1xyXG4gIC8vIGxvYWRpbmcgdmFsdWVzIGZyb20gbG9jYWxTdG9yYWdlIGVsc2Ugc2V0dGluZyB2YWx1ZXMgYXMgMFxyXG4gIC8vIGNvbnN0IGxpc3QgPSBbXHJcbiAgLy8gICAnYW52aWwtZm94LWR1bmdlb24tMS10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTItdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi0zLXRpbWUnLFxyXG4gIC8vICdhbnZpbC1mb3gtZHVuZ2Vvbi00LXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tNS10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tMS10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tMi10aW1lJyxcclxuICAvLyAnYW52aWwtYmF0LWR1bmdlb24tMy10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tNC10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tNS10aW1lJ107XHJcbiAgLy8gY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZSB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAvLyBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgLy8gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gIC8vICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZWxlbWVudCkgPT09IG51bGwpIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKDApO31cclxuICAvLyAgZWxzZSB7c2xpbWVCYW5rUmVzZWFyY2hTdG9uZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbCcpKTt9XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIFNsaW1lIEJhbmsgbG9hZGluZ1xyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWxcIikgPT09IG51bGwpIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoU3RvbmUoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoU3RvbmUoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtbGVhZi1sZXZlbFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hMZWFmKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaExlYWYoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMS1sZXZlbFwiKSA9PT0gbnVsbFxyXG4gIC8vICkge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMSgwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMShcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMS1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTItbGV2ZWxcIikgPT09IG51bGxcclxuICAvLyApIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDIoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDIoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTItbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzbGltZUJhbmtTbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gIC8vIHNsaW1lQmFua0ludHJlc3QoKTtcclxuICAvLyBzbGltZUJhbmtPcHRpbWlzZXIoKTtcclxuICAvLyBkZWJ1Z1xyXG4gIC8vIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4ubG9jYWxTdG9yYWdlIH0pKSB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnJykuaW5uZXJIVE1MICs9IGA8aT4ke2tleX06PC9pPiA8Yj4ke3ZhbHVlfTwvYj48YnI+YDtcclxuICAvLyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9