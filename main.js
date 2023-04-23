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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQ0FBaUMsbUJBQU8sQ0FBQyxzQ0FBZTtBQUN4RCwwQ0FBMEMsbUJBQU8sQ0FBQywrSEFBNkQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGFBQWEscUJBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QitDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBUTtBQUNaLG9CQUFvQixTQUFTO0FBQzdCLE1BQU0sb0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9DQUFvQyxtQkFBbUIsc0JBQXNCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQjtBQUNyRSx3QkFBd0IsSUFBSSxJQUFJLE1BQU07QUFDdEM7QUFDQTtBQUNBLHdCQUF3QixJQUFJLElBQUksTUFBTTtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFXRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S3lDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUssSUFBSSxXQUFXLDBCQUEwQixHQUFHO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFh1QztBQUN2RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xoQmlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEMsaUJBQWlCLG9CQUFvQjtBQUNyQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsbURBQU87QUFDckUsK0RBQStELG1EQUFPO0FBQ3RFO0FBQ0E7QUFDQSwyREFBMkQsbURBQU87QUFDbEUsK0RBQStELG1EQUFPO0FBQ3RFO0FBQ0E7QUFDQSw4REFBOEQsbURBQU87QUFDckU7QUFDQSw2REFBNkQsbURBQU87QUFDcEUsNkRBQTZELG1EQUFPO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5UHJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05tRjtBQUNoRDtBQUNuQyxZQUFZLGlCQUFpQjtBQUNjO0FBQ0w7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQWdEO0FBQ3RELE1BQU0sbUNBQW1DO0FBQ3pDLE1BQU0sdUNBQXVDO0FBQzdDLE1BQU0saURBQWlEO0FBQ3ZELE1BQU0scUNBQXFDO0FBQzNDLE1BQU0sa0NBQWtDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFRLG9DQUFvQyxvREFBWTtBQUNwRTtBQUNBLFlBQVksb0RBQVEsaUNBQWlDLGtEQUFVO0FBQy9EO0FBQ0EsWUFBWSxvREFBUSw4QkFBOEIsK0NBQU87QUFDekQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUksbURBQU87QUFDWDtBQUNBLFVBQVUsb0RBQVM7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELFlBQVk7QUFDWixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFLHlCQUF5QixJQUFJLElBQUksTUFBTTtBQUN2QywyREFBMkQsSUFBSSxXQUFXLE1BQU07QUFDaEY7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2NvbW1vbi1leHBvc2VkLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldEdsb2JhbFRoaXMuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvYW52aWwuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvZ2Vhci5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9nZWFyL29wdGltaXplci5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9zbGltZWJhbmsuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4vY29tbW9uLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbnZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fLmNoYW5nZVRhYlxuaWYgKHR5cGVvZiBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID09PSAndW5kZWZpbmVkJykgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fO1xuZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1tleHBvc2VzLWxvYWRlcl0gVGhlIFwiY2hhbmdlVGFiXCIgdmFsdWUgZXhpc3RzIGluIHRoZSBnbG9iYWwgc2NvcGUsIGl0IG1heSBub3QgYmUgc2FmZSB0byBvdmVyd3JpdGUgaXQsIHVzZSB0aGUgXCJvdmVycmlkZVwiIG9wdGlvbicpXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cbiAgdmFyIGc7XG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZyA9IHRoaXMgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZztcbn0oKTsiLCJpbXBvcnQgeyBhZGRFdmVudCwgY29udmVydCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5cclxuY2xhc3MgQW52aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJhbnZpbFwiO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBuaXRybzogMS4wLFxyXG4gICAgICBkdW5nZW9uOiBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KFwiYW52aWwubml0cm8uc3BlZWRcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBhZGRFdmVudChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiLCBcImNoYW5nZVwiLCB0aGlzLnNhdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgLy8gdGhpcy5kYXRhLmR1bmdlb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLm5pdHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIikudmFsdWU7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5uaXRybztcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzcGxheSgpXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCBpZCA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCI7XHJcbiAgICAgIGxldCB2YWx1ZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi52YWx1ZVwiO1xyXG4gICAgICBsZXQgdGltZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCI7XHJcbiAgICAgIGxldCBvcmIgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIub3JiXCI7XHJcbiAgICAgIGxldCByZXdhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIucmV3YXJkXCIpLmlubmVySFRNTDtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA9IHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpLmlubmVySFRNTCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV0pICogcmV3YXJkICogdGhpcy5kYXRhLm5pdHJvXHJcbiAgICAgICk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9yYikuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChcclxuICAgICAgICAoMzYwMCAvIHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXSkgKiB0aGlzLmRhdGEubml0cm9cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFudmlsIH07XHJcbiIsImZ1bmN0aW9uIHNhdmUoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgdGhpcy52YWx1ZSk7XHJcbiAgY29uc29sZS5sb2codGhpcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGlkLCBldmVudCwgY2FsbGJhY2spIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUYWIoaW5wdXQpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRUYWJcIiwgaW5wdXQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkVGFiKHRhYikge1xyXG4gIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vIGh0dHBzOi8vcHJvLWNlc3MtdXMuZ2l0aHViLmlvL2llaDJjYWxjL1xyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm8tY2Vzcy11cy9pZWgyY2FsYy9yYXcvbWFzdGVyL2h0bWwvc2xpbWVCYW5rLmh0bWxcclxuICAvLyBsZXQgZmlsZSA9IFwiLi4vaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcclxuICBsZXQgZmlsZSA9IFwiLi4vaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcclxuICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QgIT0gXCIxMjcuMC4wLjE6MzAwMFwiKSB7XHJcbiAgICBmaWxlID0gXCJodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW5cIik7XHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcclxuICAvLyAgIFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3k6XCIsXHJcbiAgLy8gICBcImRlZmF1bHQtc3JjICdzZWxmJzsgc3R5bGUtc3JjICdzZWxmJyAndW5zYWZlLWlubGluZScgKjsgZm9udC1zcmMgJ3NlbGYnICo7IGNvbm5lY3Qtc3JjICdzZWxmJyAqOyBpbWctc3JjIGRhdGE6ICpcIlxyXG4gIC8vICk7XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIC8vIHJlZmVycmVyUG9saWN5OiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgfTtcclxuICAvLyBsZXQgeCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gIC8vIGxldCB5ID0gYXdhaXQgeC50ZXh0KCk7XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHk7XHJcbiAgcmV0dXJuIGZldGNoKGZpbGUsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG59XHJcblxyXG4vLyBleHQuZ2V0ID0gKHVybCkgPT4ge1xyXG4vLyAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuLy8gICBsZXQgb3B0aW9ucyA9IHtcclxuLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcclxuLy8gICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4vLyAgICAgICBtb2RlOiAnY29ycydcclxuLy8gICB9O1xyXG5cclxuLy8gICAvL2ZldGNoIGdldFxyXG5cclxuLy8gICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbi8vIH07XHJcblxyXG4vLyBleHQuZ2V0KFwiaHR0cDovL2V4YW1wbGUuY29tXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAvLyBvciB3aGF0ZXZlclxyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIHNpZ21hKGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIGl0ZXJhdG9yLCBhY2N1bXVsYXRvciA9IDApIHtcclxuICAvLyBsZXQgYWNjdW11bGF0b3IgPSAwO1xyXG4gIGZvciAobGV0IGkgPSBsb3dlckJvdW5kOyBpIDw9IHVwcGVyQm91bmQ7ICsraSkge1xyXG4gICAgYWNjdW11bGF0b3IgKz0gaXRlcmF0b3IoaSk7XHJcbiAgfVxyXG4gIHJldHVybiBhY2N1bXVsYXRvcjtcclxufVxyXG5cclxuLy8gY29udmVydCBub3JtYWwgbnVtYmVyIHRvIEssTSxCLFQgYW5kIGV4cG9uZW50aWFsXHJcbmZ1bmN0aW9uIGNvbnZlcnQoaW5wdXQpIHtcclxuICBpbnB1dCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xyXG4gIHZhciBvdXRwdXQgPSAwO1xyXG4gIGlmIChpbnB1dCA9PSAwKSB7XHJcbiAgICBvdXRwdXQgPSAwO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPD0gMTAwMDApIHtcclxuICAgIG91dHB1dCA9IE1hdGgucm91bmQoaW5wdXQpO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwKS50b0ZpeGVkKDIpICsgXCJLXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk1cIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMCkudG9GaXhlZCgzKSArIFwiQlwiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJUXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG91dHB1dCA9IGlucHV0LnRvRXhwb25lbnRpYWwoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGssbSxiLHQgdG8gbm9ybWFsIG51bWJlcnNcclxuZnVuY3Rpb24gY29udmVydDIoaW5wdXQsIG1pbiA9IDAsIG1heCA9IDk5OTk5OTk5OTk5OTk5OSkge1xyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvLC9nLCBcIi5cIik7IC8vIGNvbnZlcnQgLCB0byAuXHJcbiAgaWYgKC9eXFxkKlxcLj9cXGQrJC8udGVzdChpbnB1dCkpIHtcclxuICAgIGlmIChpbnB1dCA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dCA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0gLy8gcmV0dXJuIHJvdW5kZWQgbnVtYmVyIGlmIHRoZXJlIGlzIG5vIGFiYnJldmlldGVcclxuICBlbHNlIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gLyguKikoXFxEKSQvZ207XHJcbiAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyAvZywgXCJcIik7IC8vIHJlbW92ZXMgYWxsIHNwYWNlc1xyXG5cclxuICAgIGlucHV0ID0gcmVnZXguZXhlYyhpbnB1dCk7XHJcbiAgICBsZXQgb3V0cHV0ID0gMDtcclxuICAgIGlmIChpbnB1dFsyXSA9PSBcInRcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogNDtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJiXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDM7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwibVwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAyO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcImtcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvRmlsZSgpIHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UsIG51bGwsIDIpXSwge1xyXG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIixcclxuICAgIH0pXHJcbiAgKTtcclxuICBhLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiSUVIMmNhbGMtZGF0YS5qc29uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgYS5jbGljaygpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGcm9tRmlsZSgpIHtcclxuICBsZXQgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIpLmZpbGVzWzBdO1xyXG4gIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsZS1jb250ZW50c1wiKS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHRleHQpKTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4uSlNPTi5wYXJzZSh0ZXh0KSB9KSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udmVydCxcclxuICBjb252ZXJ0MixcclxuICBzaWdtYSxcclxuICByZXN0YXJ0LFxyXG4gIGNoYW5nZVRhYixcclxuICBsb2FkVGFiLFxyXG4gIGFkZEV2ZW50LFxyXG4gIHNhdmVUb0ZpbGUsXHJcbiAgbG9hZEZyb21GaWxlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBPcHRpbWl6ZXIgfSBmcm9tIFwiLi9vcHRpbWl6ZXIuanNcIjtcclxuXHJcbmNsYXNzIEdlYXIge1xyXG4gIG5hbWUgPSBcImdlYXJcIjtcclxuICB2ZXJzaW9uID0gMTtcclxuICBkYXRhID0ge1xyXG4gICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxyXG4gICAgaXRlbUxldmVsOiAxMjAsXHJcbiAgICBpbmNsdWRlTWFzdGVyeTogdHJ1ZSxcclxuICAgIGN1cnNlQW52aWw6IHRydWUsXHJcbiAgICBsb3R0ZXJ5OiB0cnVlLFxyXG4gICAgaXRlbVNsb3RzOiB7XHJcbiAgICAgIEpld2Vscnk6IDE5LFxyXG4gICAgICBBcm1vcjogMTksXHJcbiAgICAgIFdlYXBvbjogMTksXHJcbiAgICB9LFxyXG4gICAgZW5jaGFudFNsb3RzOiAzNDIsXHJcbiAgICBzZXRCaWFzOiAwLjA3NSxcclxuICAgIGVuY2hhbnRVc2FnZToge1xyXG4gICAgICBVbmljb3JuS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBIUEFkZGVyOiBcIlwiLFxyXG4gICAgICBNUEFkZGVyOiBcIlwiLFxyXG4gICAgICBBVEtBZGRlcjogXCJcIixcclxuICAgICAgTUFUS0FkZGVyOiBcIlwiLFxyXG4gICAgICBERUZBZGRlcjogXCJcIixcclxuICAgICAgTURFRkFkZGVyOiBcIlwiLFxyXG4gICAgICBTUERBZGRlcjogXCJcIixcclxuICAgICAgSFBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBNUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEFUS011bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIE1BVEtNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBNREVGTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgQVRLUHJvcG90aW9uOiBcImRwc1wiLFxyXG4gICAgICBNQVRLUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgICBERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICAgIE1ERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICAgIEZpcmVSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBJY2VSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBUaHVuZGVyUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgTGlnaHRSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBEYXJrUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgUGh5c2ljYWxBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBGaXJlQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgSWNlQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgVGh1bmRlckFic29ycHRpb246IFwiXCIsXHJcbiAgICAgIExpZ2h0QWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgRGFya0Fic29ycHRpb246IFwiXCIsXHJcbiAgICAgIERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIEVxdWlwbWVudERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFNsaW1lRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgTWFnaWNTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFNwaWRlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIEJhdERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIEZhaXJ5RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRm94RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRGV2aWxGaXNoRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgVHJlYW50RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRmxhbWVUaWdlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFVuaWNvcm5Ecm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBDb2xvck1hdGVyaWFsRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgUGh5c2ljYWxDcml0aWNhbDogXCJkcHNcIixcclxuICAgICAgTWFnaWNhbENyaXRpY2FsOiBcIlwiLFxyXG4gICAgICBFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICAgIFNraWxsUHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgICAgRXF1aXBtZW50UHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgICAgTW92ZVNwZWVkTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgR29sZEdhaW46IFwiXCIsXHJcbiAgICAgIFN0b25lR2FpbjogXCJcIixcclxuICAgICAgQ3J5c3RhbEdhaW46IFwiXCIsXHJcbiAgICAgIExlYWZHYWluOiBcIlwiLFxyXG4gICAgICBXYXJyaW9yU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgV2l6YXJkU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgQW5nZWxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBUaGllZlNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIEFyY2hlclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIFRhbWVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgQWxsU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIE1hZ2ljU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIFNwaWRlcktub3dsZWRnZTogXCJcIixcclxuICAgICAgQmF0S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBGYWlyeUtub3dsZWRnZTogXCJcIixcclxuICAgICAgRm94S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBEZXZpbEZpc2hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIFRyZWFudEtub3dsZWRnZTogXCJcIixcclxuICAgICAgRmxhbWVUaWdlcktub3dsZWRnZTogXCJcIixcclxuICAgICAgUGh5c2ljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIEZpcmVEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIEljZURhbWFnZTogXCJkcHNcIixcclxuICAgICAgVGh1bmRlckRhbWFnZTogXCJcIixcclxuICAgICAgTGlnaHREYW1hZ2U6IFwiXCIsXHJcbiAgICAgIERhcmtEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIEhwUmVnZW46IFwiXCIsXHJcbiAgICAgIE1wUmVnZW46IFwiXCIsXHJcbiAgICAgIFRhbWluZ1BvaW50OiBcIlwiLFxyXG4gICAgICBXYXJyaW9yU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgV2l6YXJkU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgQW5nZWxTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBUaGllZlNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIEFyY2hlclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRhbWVyU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgVG93bk1hdEdhaW46IFwiZ2FpbnNcIixcclxuICAgICAgVG93bk1hdEFyZWFDbGVhckdhaW46IFwiXCIsXHJcbiAgICAgIFJlYmlydGhQb2ludEdhaW4xOiBcImdhaW5zXCIsXHJcbiAgICAgIFJlYmlydGhQb2ludEdhaW4yOiBcImdhaW5zXCIsXHJcbiAgICAgIFJlYmlydGhQb2ludEdhaW4zOiBcImdhaW5zXCIsXHJcbiAgICAgIENyaXRpY2FsRGFtYWdlOiBcImRwc1wiLFxyXG4gICAgICBCbGVzc2luZ0VmZmVjdDogXCJkcHNcIixcclxuICAgICAgTW92ZVNwZWVkQWRkZXI6IFwiXCIsXHJcbiAgICAgIFBldEVYUEdhaW46IFwiXCIsXHJcbiAgICAgIExveWFsdHlQb2ludEdhaW46IFwiXCIsXHJcbiAgICAgIENhdGFseXN0RG91YmxlQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFdhcnJpb3JTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBXaXphcmRTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBBbmdlbFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRoaWVmU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgQXJjaGVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgVGFtZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBIcFJlZ2VuTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgTXBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEFybW9yZWRGdXJ5OiBcIlwiLFxyXG4gICAgICBXYXJkZWRGdXJ5OiBcImRwc1wiLFxyXG4gICAgICBQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBQZXRNYWdpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFBldENyaXRpY2FsRGFtYWdlOiBcIlwiLFxyXG4gICAgICBQZXREZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBTdG9uZVRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgICBDcnlzdGFsVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICAgIExlYWZUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgICAgR3VpbGRFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICAgIFNQRE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIENyaXRpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgU2tpbGxQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgICAgRXF1aXBtZW50UHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICAgIEVYUEdhaW5NdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICAgIEdvbGRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgUGh5c2ljYWxEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBGaXJlRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgSWNlRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgVGh1bmRlckRhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIExpZ2h0RGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgRGFya0RhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIFRhbWluZ1BvaW50TXVsdGlwbGllcjogXCJcIixcclxuICAgICAgUGV0RVhQR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIExveWFsdHlQb2ludEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBCbGVzc2luZ0VmZmVjdE11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIFBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgICBNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEudmVyc2lvbiA8IHRoaXMudmVyc2lvbikge1xyXG4gICAgICBhbGVydChcIm1pc3NpbmcgdmVyc2lvbiBtaWdyYXRpb25cIik7XHJcbiAgICAgIC8vdGhpcy5kYXRhLnZlcnNpb24gPSB0aGlzLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMudXBkYXRlRGVmYXVsdFZhbHVlcygpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbmNoYW50VXNhZ2VUZW1wbGF0ZSA9IChpZCwgbmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lU2hvcnQgPSBuYW1lXHJcbiAgICAgICAgLnJlcGxhY2UoXCJBZGRlclwiLCBcIitcIilcclxuICAgICAgICAucmVwbGFjZShcIkVmZmVjdE11bHRpcGxpZXJcIiwgXCIlXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJNdWx0aXBsaWVyXCIsIFwiJVwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiVG93blJlc2VhcmNoUG93ZXJcIiwgXCJSZXNlYXJjaFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUHJvZmljaWVuY3lcIiwgXCJQcm9mXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJTa2lsbExldmVsXCIsIFwiU2tpbGxcIilcclxuICAgICAgICAucmVwbGFjZShcIlJlc2lzdGFuY2VcIiwgXCJSZXNcIilcclxuICAgICAgICAucmVwbGFjZShcIkRyb3BDaGFuY2VcIiwgXCJEcm9wXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJDcml0aWNhbFwiLCBcIkNyaXRcIilcclxuICAgICAgICAucmVwbGFjZShcIkRhbWFnZVwiLCBcIkRtZ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiU2tpbGxFZmZlY3RSYW5nZVwiLCBcIlJhbmdlXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJLbm93bGVkZ2VcIiwgXCJEbWdcIilcclxuICAgICAgICAucmVwbGFjZShcIlBldFBoeXNpY2FsXCIsIFwiUGV0UGh5c1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUGV0TWFnaWNhbFwiLCBcIlBldE1hZ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiQ2F0YWx5c3REb3VibGVDcml0Q2hhbmNlXCIsIFwiQ2F0YURibENyaXRcIilcclxuICAgICAgICAucmVwbGFjZShcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIsIFwiVG93bk1hdEFyZWFHYWluXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIGA8bGFiZWwgdGl0bGU9XCIke25hbWV9XCI+JHtuYW1lU2hvcnR9IDxpbnB1dCBpZD1cImVuY2hhbnRVc2FnZS4ke2lkfVwiIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjVcIi8+PC9sYWJlbD5gO1xyXG4gICAgfTtcclxuICAgIGxldCBlbmNoYW50VXNhZ2VIVE1MID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5kYXRhLmVuY2hhbnRVc2FnZSkge1xyXG4gICAgICBlbmNoYW50VXNhZ2VIVE1MICs9IGVuY2hhbnRVc2FnZVRlbXBsYXRlKGlkLCBpZCk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VuY2hhbnRVc2FnZUlucHV0V3JhcHBlclwiKS5pbm5lckhUTUwgPVxyXG4gICAgICBlbmNoYW50VXNhZ2VIVE1MO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJJbnB1dFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLmlucHV0Q2hhbmdlZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3B0aW1pemUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dENoYW5nZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xyXG4gICAgY29uc3QgaWRQYXJ0cyA9IGlkLnNwbGl0KFwiLlwiKTtcclxuXHJcbiAgICBzd2l0Y2ggKGlkUGFydHNbMF0pIHtcclxuICAgICAgY2FzZSBcIml0ZW1MZXZlbFwiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5pdGVtTGV2ZWwgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW5jbHVkZU1hc3RlcnlcIjpcclxuICAgICAgICB0aGlzLmRhdGEuaW5jbHVkZU1hc3RlcnkgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImN1cnNlQW52aWxcIjpcclxuICAgICAgICB0aGlzLmRhdGEuY3Vyc2VBbnZpbCA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibG90dGVyeVwiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5sb3R0ZXJ5ID0gdGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpdGVtU2xvdHNcIjpcclxuICAgICAgICB0aGlzLmRhdGEuaXRlbVNsb3RzW2lkUGFydHNbMV1dID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVuY2hhbnRTbG90c1wiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5lbmNoYW50U2xvdHMgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2V0Qmlhc1wiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXRCaWFzID0gcGFyc2VGbG9hdCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW5jaGFudFVzYWdlXCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLmVuY2hhbnRVc2FnZVtpZFBhcnRzWzFdXSA9IHRhcmdldC52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiaW5wdXRDaGFuZ2VkIGZvciB1bmtub3duIGlkXCIsIGlkLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGVmYXVsdFZhbHVlcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGlucHV0LmlkO1xyXG4gICAgICBjb25zdCBpZFBhcnRzID0gaWQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICBzd2l0Y2ggKGlkUGFydHNbMF0pIHtcclxuICAgICAgICBjYXNlIFwiaXRlbUxldmVsXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5pdGVtTGV2ZWw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiaW5jbHVkZU1hc3RlcnlcIjpcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEuaW5jbHVkZU1hc3Rlcnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY3Vyc2VBbnZpbFwiOlxyXG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRoaXMuZGF0YS5jdXJzZUFudmlsO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxvdHRlcnlcIjpcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEubG90dGVyeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpdGVtU2xvdHNcIjpcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLml0ZW1TbG90c1tpZFBhcnRzWzFdXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbmNoYW50U2xvdHNcIjpcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLmVuY2hhbnRTbG90cztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzZXRCaWFzXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5zZXRCaWFzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImVuY2hhbnRVc2FnZVwiOlxyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuZW5jaGFudFVzYWdlW2lkUGFydHNbMV1dO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1cGRhdGVIVE1MVmFsdWVzIGZvciB1bmtub3duIGlkXCIsIGlkLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3B0aW1pemVCdXR0b24oZW5hYmxlKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wdGltaXplXCIpO1xyXG4gICAgaWYgKGVuYWJsZSkge1xyXG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tZ3JleVwiKTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tb3JhbmdlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tb3JhbmdlXCIpO1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1ncmV5XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3B0aW1pemUoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU9wdGltaXplQnV0dG9uKGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnNhdmUoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpbWl6ZXIgPSBuZXcgT3B0aW1pemVyKHRoaXMuZGF0YSk7XHJcbiAgICBvcHRpbWl6ZXIub3B0aW1pemUoKTtcclxuXHJcbiAgICBsZXQgaHRtbCA9XHJcbiAgICAgIFwiPGgyPlJlc3VsdHM8L2gyPjxwPmNsaWNrIG9uIHRoZSBoZWFkZXJzIHRvIGNvbGxhcHNlIHRoZSBzZWN0aW9uPC9wPlwiO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5pdGVtczwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIuaXRlbXMsXHJcbiAgICAgIChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLmVmZmVjdHM7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLmxldmVsTWF4RWZmZWN0cztcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+dG90YWxFc2VXaXRoRW5jaGFudHM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPmJlc3RFbmNoYW50czwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPmJlc3RJdGVtczwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIuYmVzdEl0ZW1zLFxyXG4gICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5lZmZlY3RzO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5sZXZlbE1heEVmZmVjdHM7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnJlbEVmZmVjdHM7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLmVzZTtcclxuICAgICAgICBkZWxldGUgdmFsdWUucGFydDtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+c2V0SXRlbXM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLnNldEl0ZW1zLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci5nZXRUb3RhbEVuY2hhbnRzVmFsdWUob3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIC8vVE9ETyBicmVha2Rvd24gdG90YWxFc2VXaXRoRW5jaGFudHMgYnkgc291cmNlc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVJlc3VsdFwiKS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjb3B0aW1pemVSZXN1bHQgPiBoM1wiKS5mb3JFYWNoKChoZWFkZXIpID0+IHtcclxuICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5leHRTaWJsaW5nKTtcclxuICAgICAgICBpZiAobmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50b2dnbGVPcHRpbWl6ZUJ1dHRvbih0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdlYXIgfTtcclxuIiwiaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCIgYXNzZXJ0IHsgdHlwZTogXCJqc29uXCIgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpbWl6ZXIge1xyXG4gIGl0ZW1MZXZlbCA9IDEyMDtcclxuICBpbmNsdWRlTWFzdGVyeSA9IHRydWU7XHJcbiAgY3Vyc2VBbnZpbCA9IHRydWU7XHJcbiAgbG90dGVyeSA9IHRydWU7XHJcbiAgaXRlbVNsb3RzID0ge1xyXG4gICAgSmV3ZWxyeTogMTksXHJcbiAgICBBcm1vcjogMTksXHJcbiAgICBXZWFwb246IDE5LFxyXG4gIH07XHJcbiAgZW5jaGFudFNsb3RzID0gMzQyO1xyXG4gIHNldEJpYXMgPSAwLjA3NTtcclxuICBlbmNoYW50VXNhZ2UgPSB7XHJcbiAgICBVbmljb3JuS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgSFBBZGRlcjogXCJcIixcclxuICAgIE1QQWRkZXI6IFwiXCIsXHJcbiAgICBBVEtBZGRlcjogXCJcIixcclxuICAgIE1BVEtBZGRlcjogXCJcIixcclxuICAgIERFRkFkZGVyOiBcIlwiLFxyXG4gICAgTURFRkFkZGVyOiBcIlwiLFxyXG4gICAgU1BEQWRkZXI6IFwiXCIsXHJcbiAgICBIUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBNUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBBVEtNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgTUFUS011bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTURFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBBVEtQcm9wb3Rpb246IFwiZHBzXCIsXHJcbiAgICBNQVRLUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgREVGUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgTURFRlByb3BvdGlvbjogXCJcIixcclxuICAgIEZpcmVSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgSWNlUmVzaXN0YW5jZTogXCJcIixcclxuICAgIFRodW5kZXJSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgTGlnaHRSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgRGFya1Jlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBQaHlzaWNhbEFic29ycHRpb246IFwiXCIsXHJcbiAgICBGaXJlQWJzb3JwdGlvbjogXCJcIixcclxuICAgIEljZUFic29ycHRpb246IFwiXCIsXHJcbiAgICBUaHVuZGVyQWJzb3JwdGlvbjogXCJcIixcclxuICAgIExpZ2h0QWJzb3JwdGlvbjogXCJcIixcclxuICAgIERhcmtBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgRGVidWZmUmVzaXN0YW5jZTogXCJcIixcclxuICAgIEVxdWlwbWVudERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBNYWdpY1NsaW1lRHJvcENoYW5jZTogXCJcIixcclxuICAgIFNwaWRlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBCYXREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRmFpcnlEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRm94RHJvcENoYW5jZTogXCJcIixcclxuICAgIERldmlsRmlzaERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBUcmVhbnREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRmxhbWVUaWdlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBVbmljb3JuRHJvcENoYW5jZTogXCJcIixcclxuICAgIENvbG9yTWF0ZXJpYWxEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxDcml0aWNhbDogXCJkcHNcIixcclxuICAgIE1hZ2ljYWxDcml0aWNhbDogXCJcIixcclxuICAgIEVYUEdhaW46IFwiZ2FpbnNcIixcclxuICAgIFNraWxsUHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgIEVxdWlwbWVudFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgICBNb3ZlU3BlZWRNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgR29sZEdhaW46IFwiXCIsXHJcbiAgICBTdG9uZUdhaW46IFwiXCIsXHJcbiAgICBDcnlzdGFsR2FpbjogXCJcIixcclxuICAgIExlYWZHYWluOiBcIlwiLFxyXG4gICAgV2FycmlvclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBXaXphcmRTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgQW5nZWxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgVGhpZWZTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgQXJjaGVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgIFRhbWVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgIEFsbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBTbGltZUtub3dsZWRnZTogXCJcIixcclxuICAgIE1hZ2ljU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBTcGlkZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBCYXRLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBGYWlyeUtub3dsZWRnZTogXCJcIixcclxuICAgIEZveEtub3dsZWRnZTogXCJcIixcclxuICAgIERldmlsRmlzaEtub3dsZWRnZTogXCJcIixcclxuICAgIFRyZWFudEtub3dsZWRnZTogXCJcIixcclxuICAgIEZsYW1lVGlnZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBQaHlzaWNhbERhbWFnZTogXCJcIixcclxuICAgIEZpcmVEYW1hZ2U6IFwiXCIsXHJcbiAgICBJY2VEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgICBUaHVuZGVyRGFtYWdlOiBcIlwiLFxyXG4gICAgTGlnaHREYW1hZ2U6IFwiXCIsXHJcbiAgICBEYXJrRGFtYWdlOiBcIlwiLFxyXG4gICAgSHBSZWdlbjogXCJcIixcclxuICAgIE1wUmVnZW46IFwiXCIsXHJcbiAgICBUYW1pbmdQb2ludDogXCJcIixcclxuICAgIFdhcnJpb3JTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgV2l6YXJkU2tpbGxSYW5nZTogXCJcIixcclxuICAgIEFuZ2VsU2tpbGxSYW5nZTogXCJcIixcclxuICAgIFRoaWVmU2tpbGxSYW5nZTogXCJcIixcclxuICAgIEFyY2hlclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBUYW1lclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBUb3duTWF0R2FpbjogXCJnYWluc1wiLFxyXG4gICAgVG93bk1hdEFyZWFDbGVhckdhaW46IFwiXCIsXHJcbiAgICBSZWJpcnRoUG9pbnRHYWluMTogXCJnYWluc1wiLFxyXG4gICAgUmViaXJ0aFBvaW50R2FpbjI6IFwiZ2FpbnNcIixcclxuICAgIFJlYmlydGhQb2ludEdhaW4zOiBcImdhaW5zXCIsXHJcbiAgICBDcml0aWNhbERhbWFnZTogXCJkcHNcIixcclxuICAgIEJsZXNzaW5nRWZmZWN0OiBcImRwc1wiLFxyXG4gICAgTW92ZVNwZWVkQWRkZXI6IFwiXCIsXHJcbiAgICBQZXRFWFBHYWluOiBcIlwiLFxyXG4gICAgTG95YWx0eVBvaW50R2FpbjogXCJcIixcclxuICAgIENhdGFseXN0RG91YmxlQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICBXYXJyaW9yU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIFdpemFyZFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBBbmdlbFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBUaGllZlNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBBcmNoZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgVGFtZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgSHBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBNcFJlZ2VuTXVsdGlwbGllcjogXCJcIixcclxuICAgIEFybW9yZWRGdXJ5OiBcIlwiLFxyXG4gICAgV2FyZGVkRnVyeTogXCJkcHNcIixcclxuICAgIFBldFBoeXNpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICBQZXRNYWdpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICBQZXRDcml0aWNhbERhbWFnZTogXCJcIixcclxuICAgIFBldERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBTdG9uZVRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgTGVhZlRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgR3VpbGRFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICBTUERNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQ3JpdGljYWxEYW1hZ2VNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgU2tpbGxQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgIEVxdWlwbWVudFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgRVhQR2Fpbk11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgIEdvbGRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgIFBoeXNpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIEZpcmVEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgSWNlRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIFRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTGlnaHREYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgRGFya0RhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBUYW1pbmdQb2ludE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBQZXRFWFBHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgIExveWFsdHlQb2ludEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQmxlc3NpbmdFZmZlY3RNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgUGh5c2ljYWxDcml0aWNhbE11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVzZXJJbnB1dCkge1xyXG4gICAgdGhpcy5pdGVtTGV2ZWwgPSB1c2VySW5wdXQuaXRlbUxldmVsO1xyXG4gICAgdGhpcy5pbmNsdWRlTWFzdGVyeSA9IHVzZXJJbnB1dC5pbmNsdWRlTWFzdGVyeTtcclxuICAgIHRoaXMuY3Vyc2VBbnZpbCA9IHVzZXJJbnB1dC5jdXJzZUFudmlsO1xyXG4gICAgdGhpcy5sb3R0ZXJ5ID0gdXNlcklucHV0LmxvdHRlcnk7XHJcbiAgICB0aGlzLml0ZW1TbG90cyA9IHVzZXJJbnB1dC5pdGVtU2xvdHM7XHJcbiAgICB0aGlzLmVuY2hhbnRTbG90cyA9IHVzZXJJbnB1dC5lbmNoYW50U2xvdHM7XHJcbiAgICB0aGlzLnNldEJpYXMgPSB1c2VySW5wdXQuc2V0QmlhcztcclxuICAgIHRoaXMuZW5jaGFudFVzYWdlID0gdXNlcklucHV0LmVuY2hhbnRVc2FnZTtcclxuICB9XHJcblxyXG4gIG9wdGltaXplKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJPcHRpbWl6ZXIub3B0aW1pemUoKSBjYWxsZWRcIik7XHJcbiAgICB0aGlzLnN0ZXAxKCk7XHJcbiAgICB0aGlzLnN0ZXAyKCk7XHJcbiAgfVxyXG5cclxuICBlbmNoYW50TWFwID0ge307XHJcbiAgY2FsY0VuY2hhbnRFZmZlY3RWYWx1ZShlZmZlY3QpIHtcclxuICAgIGxldCBlbmNoYW50ID0gdGhpcy5lbmNoYW50TWFwW2VmZmVjdC5raW5kXTtcclxuICAgIGxldCBlbmNoYW50RWZmZWN0VmFsdWUgPSBlbmNoYW50Lm1heFZhbHVlO1xyXG4gICAgaWYgKHRoaXMubG90dGVyeSkge1xyXG4gICAgICBlbmNoYW50RWZmZWN0VmFsdWUgPSBlbmNoYW50Lm1heFZhbHVlTG90dGVyeTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG4gIH1cclxuICBjYWxjSXRlbUVmZmVjdFZhbHVlKGVmZmVjdCkge1xyXG4gICAgbGV0IGl0ZW1FZmZlY3RWYWx1ZSA9IGVmZmVjdC5pbml0VmFsdWUgKyBlZmZlY3QuYmFzZVZhbHVlICogdGhpcy5pdGVtTGV2ZWw7XHJcblxyXG4gICAgaWYgKGl0ZW1FZmZlY3RWYWx1ZSA8IDAgJiYgdGhpcy5jdXJzZUFudmlsKSB7XHJcbiAgICAgIC8vdGhpcyBpcyBhIGN1cnNlZCBlZmZlY3QsIGlmIHdlIGFkZCBjdXJzZSBhbnZpbHMgaXQgd2lsbCBiZSBudWxsaWZpZWRcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1FZmZlY3RWYWx1ZTtcclxuICB9XHJcbiAgaXRlbXMgPSBbXTtcclxuICBzdGVwMSgpIHtcclxuICAgIGxldCBlbmNoYW50VXNhZ2VBZGRlZE5ldyA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGVuY2hhbnQgb2YgZGF0YS5lbmNoYW50cykge1xyXG4gICAgICB0aGlzLmVuY2hhbnRNYXBbZW5jaGFudC5raW5kXSA9IGVuY2hhbnQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW5jaGFudFVzYWdlW2VuY2hhbnQua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcImZvdW5kIG5ldyBlbmNoYW50IG5vdCBsaXN0ZWQgaW4gZW5jaGFudFVzYWdlXCIsXHJcbiAgICAgICAgICBlbmNoYW50LmtpbmRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZW5jaGFudFVzYWdlW2VuY2hhbnQua2luZF0gPSBcIlwiO1xyXG4gICAgICAgIGVuY2hhbnRVc2FnZUFkZGVkTmV3ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmNoYW50VXNhZ2VBZGRlZE5ldykge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT1wcmludGluZyBlbmNoYW50VXNhZ2U9PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4odGhpcy5lbmNoYW50VXNhZ2UpO1xyXG4gICAgICBjb25zb2xlLndhcm4odGhpcy5lbmNoYW50VXNhZ2UpO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YS5pdGVtcykge1xyXG4gICAgICAvL2ZpbHRlciBvdXQgdmVyeSBiYWQgaXRlbXNcclxuICAgICAgaWYgKGl0ZW0uc2V0S2luZCA9PT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICBsZXQgZXNlID0ge1xyXG4gICAgICAgIHNsb3RzOiA0LFxyXG4gICAgICAgIG1hc3RlcmllczogMCxcclxuICAgICAgICBlZmZlY3RzOiAwLFxyXG4gICAgICAgIHN1bTogMCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCByZWxFZmZlY3RzID0ge307XHJcblxyXG4gICAgICBmb3IgKGxldCBlZmZlY3Qgb2YgaXRlbS5lZmZlY3RzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUVmZmVjdFZhbHVlID0gdGhpcy5jYWxjSXRlbUVmZmVjdFZhbHVlKGVmZmVjdCk7XHJcbiAgICAgICAgbGV0IGVuY2hhbnRFZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0VuY2hhbnRFZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdICs9IGl0ZW1FZmZlY3RWYWx1ZSAvIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuXHJcbiAgICAgICAgLy9pZiB3ZSBjYXJlIGFib3V0IHRoaXMgZWZmZWN0LCBpbmNsdWRlIGluIHRoZSBlc2VcclxuICAgICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0LmtpbmRdKSB7XHJcbiAgICAgICAgICBlc2UuZWZmZWN0cyArPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pbmNsdWRlTWFzdGVyeSkge1xyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdCBvZiBpdGVtLmxldmVsTWF4RWZmZWN0cykge1xyXG4gICAgICAgICAgLy9lZmZlY3Qua2luZCBOb3RoaW5nIGFyZSBlbmNoYW50IFNsb3RzXHJcbiAgICAgICAgICBpZiAoZWZmZWN0LmtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChlZmZlY3QuaW5pdFZhbHVlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgZXNlLnNsb3RzID0gNztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlc2Uuc2xvdHMgPSA2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0eXBlb2YgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGl0ZW1FZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0l0ZW1FZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gKz0gaXRlbUVmZmVjdFZhbHVlO1xyXG5cclxuICAgICAgICAgIC8vaWYgd2UgY2FyZSBhYm91dCB0aGlzIGVmZmVjdCwgaW5jbHVkZSBpbiB0aGUgZXNlXHJcbiAgICAgICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0LmtpbmRdKSB7XHJcbiAgICAgICAgICAgIGVzZS5tYXN0ZXJpZXMgKz1cclxuICAgICAgICAgICAgICBpdGVtRWZmZWN0VmFsdWUgLyB0aGlzLmNhbGNFbmNoYW50RWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVzZS5zdW0gPSBlc2Uuc2xvdHMgKyBlc2UubWFzdGVyaWVzICsgZXNlLmVmZmVjdHM7XHJcblxyXG4gICAgICBpdGVtLmVzZSA9IGVzZTtcclxuXHJcbiAgICAgIGl0ZW0ucmVsRWZmZWN0cyA9IHJlbEVmZmVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBiLmVzZS5zdW0gLSBhLmVzZS5zdW07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvdGFsRXNlV2l0aEVuY2hhbnRzID0ge307XHJcbiAgYmVzdEVuY2hhbnRzID0ge307XHJcbiAgYmVzdEl0ZW1zID0ge1xyXG4gICAgSmV3ZWxyeTogW10sXHJcbiAgICBBcm1vcjogW10sXHJcbiAgICBXZWFwb246IFtdLFxyXG4gIH07XHJcbiAgc2V0SXRlbXMgPSB7fTtcclxuXHJcbiAgLy9UT0RPIHJldHVybiBhIG9iamVjdCBub3QgYSBmbG9hdFxyXG4gIC8vIGhhdmUgc2VwZXJhdGUgdmFsdWVzIGZvciBkcHMgYW5kIGdhaW5zLCAuLi5cclxuICBnZXRUb3RhbEVuY2hhbnRzVmFsdWUoZW5jaGFudHMsIGVuY2hhbnRzVG9BZGQpIHtcclxuICAgIGxldCB0b3RhbCA9IDE7XHJcblxyXG4gICAgLy9UT0RPIGltcHJvdmUgdGhlIGFjY3VyYWN5XHJcbiAgICAvLyBjb25zaWRlciBiYXNlIGVuY2hhbnQgdmFsdWVcclxuICAgIC8vIGNvbnNpZGVyIG91dGxlaXIgbGlrZSBmdXJ5XHJcbiAgICAvL2NvbnNpZGVyIHRhcmdldCBjYXBzIGZvciBkcHMgYW5kIGNyaXQgY2hhbmNlXHJcbiAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIGVuY2hhbnRzKSB7XHJcbiAgICAgIC8vaWYgd2UgZG9udCBjYXJlIGZvciB0aGVzZSBkb250IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFsdWVcclxuICAgICAgaWYgKCF0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZWZmZWN0VmFsdWUgPSBlbmNoYW50c1tlZmZlY3RLaW5kXTtcclxuICAgICAgaWYgKGVuY2hhbnRzVG9BZGQgJiYgZW5jaGFudHNUb0FkZFtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIGVmZmVjdFZhbHVlICs9IGVuY2hhbnRzVG9BZGRbZWZmZWN0S2luZF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRvdGFsICo9IDEgKyBlZmZlY3RWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG4gIHN0ZXAyKCkge1xyXG4gICAgbGV0IHRvdGFsRXNlID0ge307XHJcbiAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIHRoaXMuZW5jaGFudFVzYWdlKSB7XHJcbiAgICAgIHRvdGFsRXNlW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0SXRlbXNFZmZlY3RNdWx0ID0gWzEsIDEsIDEuMDUsIDEuMSwgMS4xNCwgMS4xOSwgMS4yNSwgMS4zNSwgMS41XTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICBpdGVtLnNldEVmZmVjdE11bHQgPSAwO1xyXG4gICAgICBpZiAoaXRlbS5zZXRLaW5kICE9PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0gPSB7XHJcbiAgICAgICAgICAgIG5ld1NldEl0ZW1WYWx1ZTogMCxcclxuICAgICAgICAgICAgYWN0aXZlU2V0SXRlbXM6IDAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZEJlc3RJdGVtID0gKHBhcnQpID0+IHtcclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucGFydCA9PT0gcGFydCkge1xyXG4gICAgICAgICAgLy9pdGVtcyBpcyBzb3J0ZWQsIHNvIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCB3aGljaCBtYXRjaGVzIHRoZSBwYXJ0XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJdGVtVG9Ub3RhbEVzZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gaXRlbS5yZWxFZmZlY3RzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b3RhbEVzZVtlZmZlY3RLaW5kXSArPVxyXG4gICAgICAgICAgaXRlbS5yZWxFZmZlY3RzW2VmZmVjdEtpbmRdICogaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXVtpdGVtLmtpbmRdKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXS5hY3RpdmVTZXRJdGVtcysrO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBhbGwgc2V0IGl0ZW0gc3RyZW5ndGhcclxuICAgICAgICBmb3IgKGxldCBzZXRJdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzZXRJdGVtLnNldEtpbmQgPT09IGl0ZW0uc2V0S2luZCkge1xyXG4gICAgICAgICAgICBzZXRJdGVtLnNldEVmZmVjdE11bHQgPVxyXG4gICAgICAgICAgICAgIHNldEl0ZW1zRWZmZWN0TXVsdFt0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0uYWN0aXZlU2V0SXRlbXNdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9yZWNhbGN1bGF0ZSB0b3RhbEVzZSB3aXRoIGNoYW5nZWQgc2V0IHN0cmVuZ3RoXHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0b3RhbEVzZSkge1xyXG4gICAgICAgICAgdG90YWxFc2VbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMuYmVzdEl0ZW1zW3BhcnRdKSB7XHJcbiAgICAgICAgICAgIGFkZEl0ZW1Ub1RvdGFsRXNlKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5iZXN0SXRlbXNbaXRlbS5wYXJ0XS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgLy91cGRhdGUgdGhlIHRvdGFsRXNlXHJcbiAgICAgIGFkZEl0ZW1Ub1RvdGFsRXNlKGl0ZW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVFc2UgPSAoKSA9PiB7XHJcbiAgICAgIC8vcmVzZXQgdG90YWxFc2VXaXRoRW5jaGFudHNcclxuICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50cyA9IHt9O1xyXG4gICAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIHRvdGFsRXNlKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXSA9IHRvdGFsRXNlW2VmZmVjdEtpbmRdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2NhbGN1YWx0ZSB0aGUgYXZlcmFnZSBzZXQgZWZmZWN0IG11bHQsIG5ldyBlbmNoYW50cyB3aWxsIHVzZSB0aGlzIG9uZVxyXG4gICAgICBsZXQgYXZlcmFnZVNldEVmZmVjdE11bHQgPSAxO1xyXG4gICAgICBsZXQgZXF1aXBwZWRJdGVtQ291bnQgPSAwO1xyXG4gICAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJlc3RJdGVtc1twYXJ0XSkge1xyXG4gICAgICAgICAgZXF1aXBwZWRJdGVtQ291bnQrKztcclxuXHJcbiAgICAgICAgICBpZiAoZXF1aXBwZWRJdGVtQ291bnQgPT09IDEpXHJcbiAgICAgICAgICAgIGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ID0gaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgICAgZWxzZSBhdmVyYWdlU2V0RWZmZWN0TXVsdCArPSBpdGVtLnNldEVmZmVjdE11bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlcXVpcHBlZEl0ZW1Db3VudCA+IDApIHtcclxuICAgICAgICBhdmVyYWdlU2V0RWZmZWN0TXVsdCAvPSBlcXVpcHBlZEl0ZW1Db3VudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGVuY2hhbnRzVG9TcGVudCA9IHRoaXMuZW5jaGFudFNsb3RzO1xyXG4gICAgICB3aGlsZSAoZW5jaGFudHNUb1NwZW50ID4gMCkge1xyXG4gICAgICAgIGxldCBsb3dlc3RFZmZlY3RLaW5kID0gXCJcIjtcclxuICAgICAgICBsZXQgbG93ZXN0RW5jaGFudFZhbHVlID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLmVuY2hhbnRVc2FnZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2VmZmVjdEtpbmRdIDwgbG93ZXN0RW5jaGFudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0RWZmZWN0S2luZCA9IGVmZmVjdEtpbmQ7XHJcbiAgICAgICAgICAgICAgbG93ZXN0RW5jaGFudFZhbHVlID0gdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9UT0RPIGluY2x1ZGUgYXZlcmFnZSBzZXRFZmZlY3RNdWx0XHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tsb3dlc3RFZmZlY3RLaW5kXSArPSBhdmVyYWdlU2V0RWZmZWN0TXVsdDtcclxuICAgICAgICBlbmNoYW50c1RvU3BlbnQtLTtcclxuICAgICAgfVxyXG4gICAgICAvL1RPRE8gZG8gdGhpcyBmb3IgdXAgdG8gKzcgZW5jaGFudHMgZm9yIGl0ZW0uZXNlLnNsb3RzXHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAvL1RPRE8gZmFjdG9yIGluIGl0ZW0uZXNlLnNsb3RzLCBjaG9vc2UgdGhlIHRvdGFsRXNlV2l0aEVuY2hhbnRzIGFjY29yZGluZ2x5XHJcbiAgICAgICAgaXRlbS5lc2UudXBkYXRlZFN1bSA9IHRoaXMuZ2V0VG90YWxFbmNoYW50c1ZhbHVlKFxyXG4gICAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50cyxcclxuICAgICAgICAgIGl0ZW0ucmVsRWZmZWN0c1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vYWZ0ZXIgYWxsIG5ldyBpdGVtVmFsdWVzIGhhdmUgYmVlbiBjYWxjdWxhdGVkLCB1cGRhdGUgdGhlIHNldEl0ZW1WYWx1ZXNcclxuICAgICAgLy8gIGFuZCBpbmNyZWFzZSB0aGUgdmFsdWUgb2YgaXRlbXMgd2hpY2ggYXJlIHBhcnQgb2YgYW4gaW5jb21wbGV0ZSBzZXRcclxuICAgICAgZm9yIChsZXQgc2V0S2luZCBpbiB0aGlzLnNldEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tzZXRLaW5kXS5uZXdTZXRJdGVtVmFsdWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGl0ZW1QYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJlc3RJdGVtc1tpdGVtUGFydF0pIHtcclxuICAgICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXS5uZXdTZXRJdGVtVmFsdWUgKz1cclxuICAgICAgICAgICAgaXRlbS5lc2UudXBkYXRlZFN1bSAqIHRoaXMuc2V0QmlhcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgLy9pZiB0aGlzIGlzIGEgbmV3IHNldCBpdGVtLCBhZGQgdGhlIHZhbHVlIG9mIHRoZSBvdGhlciBpdGVtcyBhdG9wIG9mIGl0XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSkge1xyXG4gICAgICAgICAgaXRlbS5lc2UudXBkYXRlZFN1bSArPSB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0ubmV3U2V0SXRlbVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGIuZXNlLnVwZGF0ZWRTdW0gLSBhLmVzZS51cGRhdGVkU3VtO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29uc3RydWN0QmVzdEl0ZW1zID0gKCkgPT4ge1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGxldCBiZXN0UGFydCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGJlc3RQYXJ0RnJlZVNsb3RzID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLml0ZW1TbG90cykge1xyXG4gICAgICAgICAgbGV0IGZyZWVTbG90cyA9IHRoaXMuaXRlbVNsb3RzW3BhcnRdIC0gdGhpcy5iZXN0SXRlbXNbcGFydF0ubGVuZ3RoO1xyXG4gICAgICAgICAgaWYgKGZyZWVTbG90cyA+IGJlc3RQYXJ0RnJlZVNsb3RzKSB7XHJcbiAgICAgICAgICAgIGJlc3RQYXJ0ID0gcGFydDtcclxuICAgICAgICAgICAgYmVzdFBhcnRGcmVlU2xvdHMgPSBmcmVlU2xvdHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL25vIG1vcmUgaXRlbXMgdG8gYWRkLCB3ZSBhcmUgZG9uZVxyXG4gICAgICAgIGlmIChiZXN0UGFydCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJlc3RJdGVtID0gZmluZEJlc3RJdGVtKGJlc3RQYXJ0KTtcclxuICAgICAgICBhZGRJdGVtKGJlc3RJdGVtKTtcclxuXHJcbiAgICAgICAgdXBkYXRlRXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0QmVzdEl0ZW1zKCk7XHJcbiAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuYmVzdEl0ZW1zW3BhcnRdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5lc2Uuc3VtIDwgYi5lc2Uuc3VtKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuZXNlLnN1bSA+IGIuZXNlLnN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIHRoaXMuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdID0gTWF0aC5yb3VuZChcclxuICAgICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF0gLSB0b3RhbEVzZVtlZmZlY3RLaW5kXVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIGJlc3RUb3RhbEVzZVdpdGhFbmNoYW50czogdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50cyxcclxuICAgICAgYmVzdEVuY2hhbnRzOiB0aGlzLmJlc3RFbmNoYW50cyxcclxuICAgICAgYmVzdEl0ZW1zOiB0aGlzLmJlc3RJdGVtcyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb252ZXJ0LCBjb252ZXJ0Miwgc2lnbWEsIGFkZEV2ZW50IH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XHJcblxyXG5jbGFzcyBTbGltZUJhbmsge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJzbGltZUJhbmtcIjtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgcmVzZWFyY2g6IHtcclxuICAgICAgICBsZWFmOiB7IGxldmVsOiAwLCB2YWx1ZTogMCB9LFxyXG4gICAgICAgIHN0b25lOiB7IGxldmVsOiAwLCB2YWx1ZTogMCB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2xpbWVDb2luQ2FwMToge1xyXG4gICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgIHZhbHVlOiAxMDAwMCxcclxuICAgICAgICBjb3N0OiAxMDAwMCxcclxuICAgICAgfSxcclxuICAgICAgc2xpbWVDb2luQ2FwMjoge1xyXG4gICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgIHZhbHVlOiAxMDAsXHJcbiAgICAgICAgY29zdDogMTAwMDAwMDAwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaW1lQ29pbkNhcFRvdGFsOiAwLFxyXG4gICAgICBpbnRyZXN0OiAwLFxyXG4gICAgICBtdWx0aXBsaWVyOiAwLFxyXG4gICAgICBwZXQxOiB7XHJcbiAgICAgICAgcmFuazogMCxcclxuICAgICAgICBsb3lhbHR5OiAwLFxyXG4gICAgICAgIHBhc3NpdmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pbGVzdG9uZTE4MDA6IGZhbHNlLFxyXG4gICAgICBtaWxlc3RvbmUyNzAwOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkgPT09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJjbGFzcyBjb25zdHJ1Y3RvciBha2EgSW5pdFwiKTtcclxuICAgIGFkZEV2ZW50KFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5yZXNlYXJjaFN0b25lLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hMZWFmLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMS5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnNsaW1lQ29pbkNhcDIuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInBldDEucmFua1wiLCBcImNoYW5nZVwiLCB0aGlzLnBldC5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwicGV0MS5sb3lhbHR5XCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJtaWxlc3RvbmUxODAwXCIsIFwiY2hhbmdlXCIsIHRoaXMubWlsZXN0b25lLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJtaWxlc3RvbmUyNzAwXCIsIFwiY2hhbmdlXCIsIHRoaXMubWlsZXN0b25lLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXkoKVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCQoXCIjcmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLnZhbHVlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS52YWx1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLnZhbHVlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIuY29zdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmNvc3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEudmFsdWVcIikuaW5uZXJIVE1MID0gY29udmVydChcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWVcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEuY29zdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLmludHJlc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuaW50cmVzdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcFRvdGFsXCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLm11bHRpcGxpZXJcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLm11bHRpcGxpZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucGFzc2l2ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucGV0MS5wYXNzaXZlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnJhbmtcIikudmFsdWUgPSB0aGlzLmRhdGEucGV0MS5yYW5rO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLmxveWFsdHlcIikudmFsdWUgPSB0aGlzLmRhdGEucGV0MS5sb3lhbHR5O1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9PSB0cnVlKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPT0gdHJ1ZSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWlsZXN0b25lKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcGV0KCkge1xyXG4gICAgdGhpcy5kYXRhLnBldDEucmFuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnBldDEubG95YWx0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5sb3lhbHR5XCIpLnZhbHVlO1xyXG4gICAgbGV0IGxveWFsdHkgPSAyLjUgKiAocGFyc2VGbG9hdCh0aGlzLmRhdGEucGV0MS5sb3lhbHR5KSArIDEwMCkgKiAwLjAxO1xyXG4gICAgdGhpcy5kYXRhLnBldDEucGFzc2l2ZSA9IHBhcnNlRmxvYXQodGhpcy5kYXRhLnBldDEucmFuayAqIGxveWFsdHkgKyAxMDApLnRvRml4ZWQoMik7XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHJlc2VhcmNoU3RvbmUoKSB7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgKiAwLjEpLnRvRml4ZWQoMik7XHJcbiAgICB0aGlzLmludHJlc3QoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZWFyY2hMZWFmKCkge1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZSA9ICsodGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWwgKiAyKS50b0ZpeGVkKDIpICsgMTAwO1xyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICAvLyBzbGltZUJhbmtTbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwMSgpIHtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID0gY29udmVydDIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlKTtcclxuICAgIC8vIGlucHV0ID0gY29udmVydDIoaW5wdXQpO1xyXG5cclxuICAgIC8vIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlID0gc2lnbWEoXHJcbiAgICAvLyAgIDAsXHJcbiAgICAvLyAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsLFxyXG4gICAgLy8gICBmdW5jdGlvbiAoYSkge1xyXG4gICAgLy8gICAgIHJldHVybiBhICogMjAgLSAxMCArIDEwMDAwO1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICAxMFxyXG4gICAgLy8gKTtcclxuICAgIGxldCBsZXZlbCA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsO1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSAxMDAwMC4wICsgMTAwMDAuMCAqIGxldmVsICsgMTAuMCAqIE1hdGgucG93KGxldmVsLCAyLjApO1xyXG5cclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwMUNvc3QoKTtcclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwMigpIHtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWUgPVxyXG4gICAgICBzaWdtYShcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsLFxyXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICByZXR1cm4gYSAqIDIwIC0gMTA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMFxyXG4gICAgICApICsgMTAwO1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCA9IDEwMDAwMDAwMDAwLjAgKiBNYXRoLnBvdygyLjAsIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsKTtcclxuXHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcFRvdGFsKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsID1cclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgKlxyXG4gICAgICAodGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgLyAxMDApICpcclxuICAgICAgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlIC8gMTAwKSAqXHJcbiAgICAgICh0aGlzLmRhdGEucGV0MS5wYXNzaXZlIC8gMTAwKTtcclxuXHJcbiAgICB0aGlzLmludHJlc3QoKTtcclxuICB9XHJcblxyXG4gIGludHJlc3QoKSB7XHJcbiAgICBsZXQgaW50cmVzdFBlcmNlbnQgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgKiAwLjAwMTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDApIHtcclxuICAgICAgaW50cmVzdFBlcmNlbnQgKz0gMC4wMjU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDApIHtcclxuICAgICAgaW50cmVzdFBlcmNlbnQgKz0gMC4wNTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YS5pbnRyZXN0ID0gaW50cmVzdFBlcmNlbnQgKiB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWw7XHJcbiAgICB0aGlzLmRhdGEubXVsdGlwbGllciA9IE1hdGgucm91bmQodGhpcy5kYXRhLmludHJlc3QgLyB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0KTtcclxuICAgIHRoaXMuZGF0YS5tdWx0aXBsaWVyIC09IE1hdGgucm91bmQodGhpcy5kYXRhLm11bHRpcGxpZXIgKiAwLjE1KTtcclxuICAgIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwMUNvc3QoKSB7XHJcbiAgICAvLyBpZiAoKGRvdWJsZSkgdGhpcy5sZXZlbC52YWx1ZSA+PSA1MDAgMDAwIDAwMC4wKVxyXG4gICAgLy8gcmV0dXJuIDFFKzE1ICogdGhpcy5Db3N0TW9kaWZpZXIoKTtcclxuXHJcbiAgICAvLyA1MDBUXHJcbiAgICBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UyN1xyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIC8vIDEwMFRcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMjZcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIC8vIDUwVFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTI1XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMDAwMCkge1xyXG4gICAgICAvLyAxMFRcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTI0XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTIzXHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMjJcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMjFcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UyMFxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxOVxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE4XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE3XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMTZcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMTVcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxMDBUXHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEwVFxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDFUXHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsICogMTAwMDAgKyAxMDAwMDtcclxuICAgIH0gLy8gbmVlZCB0byBmaW5kIHNvbHV0aW9uIGZvciBsZXNzIHRoYW4gMTBNIHVwZ3JhZGVzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTbGltZUJhbmsgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZFRhYiwgbG9hZEZyb21GaWxlLCBhZGRFdmVudCwgcmVzdGFydCwgc2F2ZVRvRmlsZSB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBBbnZpbCB9IGZyb20gXCIuL2FudmlsLmpzXCI7XHJcbi8vIGltcG9ydCB7IGV4cGVkaXRpb25Mb2FkIH0gZnJvbSBcIi4vZXhwZWRpdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBTbGltZUJhbmsgfSBmcm9tIFwiLi9zbGltZWJhbmsuanNcIjtcclxuaW1wb3J0IHsgR2VhciB9IGZyb20gXCIuL2dlYXIvZ2Vhci5qc1wiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgdmVyc2lvbiA9IFwiMC4xLjJcIjtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIGZuKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICB9XHJcbn1cclxuXHJcbnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyBzdGFydCB1cFxyXG4gIGxvYWQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gIC8vIGN1cnJlbnQgdGFiXHJcbiAgdmFyIHRhYiA9IDA7XHJcbiAgY29uc3QgdGFiX2xpc3QgPSBbXHJcbiAgICB7IGlkOiBcInNsaW1lQmFua1wiLCBuYW1lOiBcIlNsaW1lIEJhbmsgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImxhYlwiLCBuYW1lOiBcIkxhYiBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiYW52aWxcIiwgbmFtZTogXCJBbnZpbCBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiZXhwZWRpdGlvblwiLCBuYW1lOiBcIkV4cGVkaXRpb24gQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImdlYXJcIiwgbmFtZTogXCJHZWFyIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJzZXR0aW5nc1wiLCBuYW1lOiBcIlNldHRpbmdzXCIgfSxcclxuICBdO1xyXG5cclxuICAvLyBjb25zdCB0YWJfbGlzdCA9IFtcInNsaW1lLWJhbmtcIiwgXCJsYWJcIiwgXCJhbnZpbFwiLCBcImV4cGVkaXRpb25cIiwgXCJzZXR0aW5nc1wiXTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpKSB7XHJcbiAgICB0YWJfbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIC8vIGFkZEV2ZW50KGVsZW1lbnQuaWQsIFwiY2xpY2tcIiwgY2hhbmdlVGFiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5pZCk7XHJcbiAgICAgIC8vIHRhYiA9IGVsZW1lbnQgKyBcIi1jYWxjdWxhdG9yXCI7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYWJcIikgPT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgIGxvYWRUYWIoZWxlbWVudC5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGxvYWRpbmdcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2xpbWVCYW5rXCIpIHtcclxuICAgICAgICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJhbnZpbFwiKSB7XHJcbiAgICAgICAgICAgIG5ldyBBbnZpbCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJnZWFyXCIpIHtcclxuICAgICAgICAgICAgbmV3IEdlYXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2V0dGluZ3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIiwgXCJjaGFuZ2VcIiwgbG9hZEZyb21GaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5zYXZlVG9GaWxlXCIsIFwiY2xpY2tcIiwgc2F2ZVRvRmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgc2F2ZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5yZXN0YXJ0XCIsIFwiY2xpY2tcIiwgcmVzdGFydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVzdGFydFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5pbm5lckhUTUwgPSBcIklFSDJjYWxjID4gXCIgKyBlbGVtZW50Lm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCkuc3R5bGUuY29sb3IgPSBcIiNmMmUwMDlcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBcInNsaW1lQmFua1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rXCIpLnN0eWxlLmNvbG9yID0gXCIjZjJlMDA5XCI7XHJcbiAgICBsb2FkVGFiKFwic2xpbWVCYW5rXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsc2UgaW4gbG9hZCB8IGFmdGVyIEluaXRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gQW52aWwgbG9hZGluZ1xyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIsIDEpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLW5pdHJvLXNwZWVkXCIpLnZhbHVlID1cclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiKTtcclxuICAvLyB9XHJcbiAgLy8gYW52aWwgbG9hZCBuZWVkIHJlZmFjdG9yXHJcblxyXG4gIC8vIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAvLyAgIHZhciBpZCA9IDA7XHJcbiAgLy8gICBpZCA9IFwiYW52aWwtZHVuZ2Vvbi1cIiArIGkgKyBcIi10aW1lXCI7XHJcbiAgLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpID09PSBudWxsKSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBjYWxjQW52aWwoKTtcclxuICAvLyBjYWxjRXhwZWRpdGlvbigpO1xyXG4gIC8vIGV4cGVkaXRpb25Mb2FkKCk7XHJcbiAgLy8gbG9hZGluZyB2YWx1ZXMgZnJvbSBsb2NhbFN0b3JhZ2UgZWxzZSBzZXR0aW5nIHZhbHVlcyBhcyAwXHJcbiAgLy8gY29uc3QgbGlzdCA9IFtcclxuICAvLyAgICdhbnZpbC1mb3gtZHVuZ2Vvbi0xLXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tMi10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTMtdGltZScsXHJcbiAgLy8gJ2FudmlsLWZveC1kdW5nZW9uLTQtdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi01LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0xLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0yLXRpbWUnLFxyXG4gIC8vICdhbnZpbC1iYXQtZHVuZ2Vvbi0zLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi00LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi01LXRpbWUnXTtcclxuICAvLyBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlIH07XHJcbiAgLy8gY29uc29sZS5sb2coaXRlbXMpO1xyXG4gIC8vIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAvLyAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgLy8gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlbGVtZW50KSA9PT0gbnVsbCkge3NsaW1lQmFua1Jlc2VhcmNoU3RvbmUoMCk7fVxyXG4gIC8vICBlbHNlIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsJykpO31cclxuICAvLyB9KTtcclxuXHJcbiAgLy8gU2xpbWUgQmFuayBsb2FkaW5nXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZShcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaExlYWYoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLWxlYWYtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoXHJcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpID09PSBudWxsXHJcbiAgLy8gKSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKSA9PT0gbnVsbFxyXG4gIC8vICkge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMigwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgLy8gc2xpbWVCYW5rSW50cmVzdCgpO1xyXG4gIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xyXG4gIC8vIGRlYnVnXHJcbiAgLy8gZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeyAuLi5sb2NhbFN0b3JhZ2UgfSkpIHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKS5pbm5lckhUTUwgKz0gYDxpPiR7a2V5fTo8L2k+IDxiPiR7dmFsdWV9PC9iPjxicj5gO1xyXG4gIC8vIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=