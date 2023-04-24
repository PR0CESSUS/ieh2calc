/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js?1513":
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
        .replace("SkillEffectRange", "Aoe")
        .replace("SkillRange", "Range")
        .replace("Knowledge", "Dmg")
        .replace("PetPhysical", "PetPhys")
        .replace("PetMagical", "PetMag")
        .replace("CatalystDoubleCritChance", "CataDblCrit")
        .replace("CritChance", "Crit")
        .replace("TownMatAreaClearGain", "TownMat+")
        .replace("TownMatGain", "TownMat%")
        .replace("Absorption", "Absorp")
        .replace("ColorMaterial", "RareMat")
        .replace("RebirthPoint", "RB")
        .replace("LoyaltyPointGain", "LPG")
        .replace("TamingPoint", "TPG")
        .replace("Equipment", "EQ");

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

  renderOptimizerResult(optimizer) {
    let html = "";
    let highestIndex = Math.max(
      optimizer.bestItems.Weapon.length,
      optimizer.bestItems.Armor.length,
      optimizer.bestItems.Jewelry.length
    );
    let item;
    for (let bestItemIndex = 0; bestItemIndex < highestIndex; bestItemIndex++) {
      item = optimizer.bestItems.Weapon[bestItemIndex];
      html += `<div class="third">
        ${item ? item.kind : "-"}
      </div>`;

      item = optimizer.bestItems.Armor[bestItemIndex];
      html += `<div class="third">
        ${item ? item.kind : "-"}
      </div>`;

      item = optimizer.bestItems.Jewelry[bestItemIndex];
      html += `<div class="third">
        ${item ? item.kind : "-"}
      </div>`;
    }
    document.getElementById("optimizeResultItems").innerHTML = html;

    html = "";
    for (const effectKind in optimizer.bestEnchants) {
      if (optimizer.bestEnchants[effectKind] > 0) {
        html += `<div class="halve">
          ${effectKind}: ${optimizer.bestEnchants[effectKind]}
        </div>`;
      }
    }
    document.getElementById("optimizeResultEnchants").innerHTML = html;

    html = "";
    for (const setKind in optimizer.setItems) {
      if (optimizer.setItems[setKind].activeSetItems > 0) {
        html += `<div class="halve">
          ${setKind}: ${optimizer.setItems[setKind].activeSetItems}
        </div>`;
      }
    }
    document.getElementById("optimizeResultSetItems").innerHTML = html;

    this.renderOptimizerResultEnchtantSpread(optimizer);
  }

  colors = [
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
  ];

  optimizeResultTotalEseBarChart = null;
  renderOptimizerResultEnchtantSpread(optimizer) {
    if (this.optimizeResultTotalEseBarChart) {
      this.optimizeResultTotalEseBarChart.destroy();
    }

    let labels = [];
    let effectKindToDataIndex = {};
    let dataSets = {
      enchants: {
        label: "Enchants",
        data: [],
        backgroundColor: "red",
      },
    };
    for (let effectKind in optimizer.totalEseWithEnchants) {
      if (!optimizer.enchantUsage[effectKind]) {
        continue;
      }

      let dataIndex = labels.length;
      effectKindToDataIndex[effectKind] = dataIndex;

      labels[dataIndex] = effectKind;

      dataSets.enchants.data[dataIndex] = optimizer.bestEnchants[effectKind];
    }
    let colorIndex = 0;
    for (let part in optimizer.bestItems) {
      for (let item of optimizer.bestItems[part]) {
        if (typeof dataSets[item.kind] === "undefined") {
          dataSets[item.kind] = {
            label: item.kind,
            data: [],
            backgroundColor: this.colors[colorIndex],
          };

          colorIndex = (colorIndex + 1) % this.colors.length;
        }

        for (let effectKind in optimizer.totalEseWithEnchants) {
          if (typeof effectKindToDataIndex[effectKind] === "undefined") {
            continue;
          }

          let dataIndex = effectKindToDataIndex[effectKind];
          if (typeof dataSets[item.kind].data[dataIndex] === "undefined") {
            dataSets[item.kind].data[dataIndex] = 0;
          }
          if (typeof item.relEffects[effectKind] === "number") {
            dataSets[item.kind].data[dataIndex] +=
              item.relEffects[effectKind] * item.setEffectMult;
          }
        }
      }
    }

    let dataSetsArray = [];
    for (let dataSet in dataSets) {
      dataSetsArray.push(dataSets[dataSet]);
    }

    this.optimizeResultTotalEseBarChart = new Chart(
      document.getElementById("optimizeResultTotalEseBarChart"),
      {
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
      }
    );
  }

  renderOptimizerResultDataDump(optimizer) {
    let html =
      "<h2>Results</h2><p>click on the headers to collapse the section</p>";

    html += `<h3>items</h3><pre>${JSON.stringify(
      JSON.parse(JSON.stringify(optimizer.items)),
      (key, value) => {
        delete value.effects;
        delete value.levelMaxEffects;
        return value;
      },
      2
    )}</pre>`;

    html += `<h3>totalEse</h3><pre>${JSON.stringify(
      optimizer.totalEse,
      null,
      2
    )}</pre>`;
    html += `<h3>totalEseWithEnchants</h3><pre>${JSON.stringify(
      optimizer.totalEseWithEnchants,
      null,
      2
    )}</pre>`;
    html += `<h3>totalEseWithEnchants</h3><pre>${JSON.stringify(
      optimizer.totalEse,
      null,
      2
    )}</pre>`;

    html += `<h3>bestEnchants</h3><pre>${JSON.stringify(
      optimizer.bestEnchants,
      null,
      2
    )}</pre>`;

    html += `<h3>bestItems</h3><pre>${JSON.stringify(
      JSON.parse(JSON.stringify(optimizer.bestItems)),
      (key, value) => {
        delete value.effects;
        delete value.levelMaxEffects;
        delete value.relEffects;
        delete value.ese;
        delete value.part;
        delete value.setEffectMult;
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
    document.querySelector("#optimizeResultDataDump").innerHTML = html;

    document
      .querySelectorAll("#optimizeResultDataDump > h3")
      .forEach((header) => {
        header.addEventListener("click", (event) => {
          const target = event.target;
          const nextSibling = target.nextElementSibling;

          if (nextSibling.style.display === "none") {
            nextSibling.style.display = "block";
          } else {
            nextSibling.style.display = "none";
          }
        });
      });
  }

  optimize() {
    this.toggleOptimizeButton(false);

    this.save();

    const optimizer = new _optimizer_js__WEBPACK_IMPORTED_MODULE_0__.Optimizer(this.data);
    optimizer.optimize();

    this.renderOptimizerResult(optimizer);
    this.renderOptimizerResultDataDump(optimizer);

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
          let enchantEffectValue = this.calcEnchantEffectValue(effect);
          relEffects[effect.kind] += itemEffectValue / enchantEffectValue;

          //if we care about this effect, include in the ese
          if (this.enchantUsage[effect.kind]) {
            ese.masteries += itemEffectValue / enchantEffectValue;
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

  totalEse = {};
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
    for (let effectKind in this.enchantUsage) {
      this.totalEse[effectKind] = 0;
      this.bestEnchants[effectKind] = 0;
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

        this.totalEse[effectKind] +=
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
        for (let effectKind in this.totalEse) {
          this.totalEse[effectKind] = 0;
        }
        for (let part in this.bestItems) {
          for (let item of this.bestItems[part]) {
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
      for (let effectKind in this.totalEse) {
        this.bestEnchants[effectKind] = 0;
        this.totalEseWithEnchants[effectKind] = this.totalEse[effectKind];
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
        this.bestEnchants[lowestEffectKind] += 1;
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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js?1513");
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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js?1513");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQ0FBaUMsbUJBQU8sQ0FBQywyQ0FBZTtBQUN4RCwwQ0FBMEMsbUJBQU8sQ0FBQywrSEFBNkQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGFBQWEscUJBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0NBQW9DLG1CQUFtQixzQkFBc0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUJBQXFCO0FBQ3JFLHdCQUF3QixJQUFJLElBQUksTUFBTTtBQUN0QztBQUNBO0FBQ0Esd0JBQXdCLElBQUksSUFBSSxNQUFNO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQVdFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLeUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxJQUFJLFdBQVcsMEJBQTBCLEdBQUc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVyxJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUSxJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04saURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BtQnVDO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RnQmlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQyxpQkFBaUIsb0JBQW9CO0FBQ3JDLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFROztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxtREFBTztBQUNyRSwrREFBK0QsbURBQU87QUFDdEU7QUFDQTtBQUNBLDJEQUEyRCxtREFBTztBQUNsRSwrREFBK0QsbURBQU87QUFDdEU7QUFDQTtBQUNBLDhEQUE4RCxtREFBTzs7QUFFckUsNkRBQTZELG1EQUFPO0FBQ3BFLDZEQUE2RCxtREFBTztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxvREFBUTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlQckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1GO0FBQ2hEO0FBQ25DLFlBQVksaUJBQWlCO0FBQ2M7QUFDTDtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBZ0Q7QUFDdEQsTUFBTSxtQ0FBbUM7QUFDekMsTUFBTSx1Q0FBdUM7QUFDN0MsTUFBTSxpREFBaUQ7QUFDdkQsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSxrQ0FBa0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVEsb0NBQW9DLG9EQUFZO0FBQ3BFO0FBQ0EsWUFBWSxvREFBUSxpQ0FBaUMsa0RBQVU7QUFDL0Q7QUFDQSxZQUFZLG9EQUFRLDhCQUE4QiwrQ0FBTztBQUN6RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSxtREFBTztBQUNYO0FBQ0EsVUFBVSxvREFBUztBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsWUFBWTtBQUNaLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEUseUJBQXlCLElBQUksSUFBSSxNQUFNO0FBQ3ZDLDJEQUEyRCxJQUFJLFdBQVcsTUFBTTtBQUNoRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvY29tbW9uLmpzPzE1MTMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9hbnZpbC5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvZ2Vhci9nZWFyLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvb3B0aW1pemVyLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL3NsaW1lYmFuay5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fID0gcmVxdWlyZShcIi0hLi9jb21tb24uanNcIik7XG52YXIgX19fRVhQT1NFX0xPQURFUl9HRVRfR0xPQkFMX1RISVNfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldEdsb2JhbFRoaXMuanNcIik7XG52YXIgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fXyA9IF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX18uY2hhbmdlVGFiXG5pZiAodHlwZW9mIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX19bXCJjaGFuZ2VUYWJcIl0gPT09ICd1bmRlZmluZWQnKSBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfTU9EVUxFX0xPQ0FMX05BTUVfX187XG5lbHNlIHRocm93IG5ldyBFcnJvcignW2V4cG9zZXMtbG9hZGVyXSBUaGUgXCJjaGFuZ2VUYWJcIiB2YWx1ZSBleGlzdHMgaW4gdGhlIGdsb2JhbCBzY29wZSwgaXQgbWF5IG5vdCBiZSBzYWZlIHRvIG92ZXJ3cml0ZSBpdCwgdXNlIHRoZSBcIm92ZXJyaWRlXCIgb3B0aW9uJylcbm1vZHVsZS5leHBvcnRzID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcztcbiAgfVxuICB2YXIgZztcbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBnID0gdGhpcyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBzZWxmIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIGdsb2JhbCByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgfVxuICB9XG4gIHJldHVybiBnO1xufSgpOyIsImNsYXNzIEFudmlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9IFwiYW52aWxcIjtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgbml0cm86IDEuMCxcclxuICAgICAgZHVuZ2VvbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLWNhbGN1bGF0b3JcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnNhdmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXdhcmQobmFtZSkge1xyXG4gICAgbGV0IHJld2FyZCA9IDA7XHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImhlcm9sZXZlbFwiOlxyXG4gICAgICBjYXNlIFwicmVxdWlyZWRhYmlsaXR5XCI6XHJcbiAgICAgICAgcmV3YXJkID0gNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImhlcm9sZXZlbDJcIjpcclxuICAgICAgY2FzZSBcInJlcXVpcmVkYWJpbGl0eTJcIjpcclxuICAgICAgICByZXdhcmQgPSAxMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInByb2ZpY2llbmN5Z2FpblwiOlxyXG4gICAgICAgIHJld2FyZCA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlcXVpcG1lbnRlZmZlY3RcIjpcclxuICAgICAgICByZXdhcmQgPSAwLjE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwdXJpZnlvZmN1cnNlZGVmZmVjdFwiOlxyXG4gICAgICAgIHJld2FyZCA9IDAuMDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwcm9maWNpZW5jeWdhaW4yXCI6XHJcbiAgICAgICAgcmV3YXJkID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVxdWlwbWVudGVmZmVjdDJcIjpcclxuICAgICAgICByZXdhcmQgPSAwLjI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJld2FyZDtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmRhdGEubml0cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLm5pdHJvLnNwZWVkXCIpLnZhbHVlO1xyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLmRhdGEuZHVuZ2Vvbikge1xyXG4gICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm5hbWVcIikudmFsdWU7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLmRpZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIuZGlmZlwiKS52YWx1ZTtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0udGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCIpLnZhbHVlO1xyXG4gICAgICBsZXQgcGVyaG91ciA9IDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpXS50aW1lO1xyXG4gICAgICBsZXQgcmV3YXJkID0gdGhpcy5nZXRSZXdhcmQodGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSk7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLnJld2FyZCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgcGVyaG91ciAqIHJld2FyZCAqIHRoaXMuZGF0YS5kdW5nZW9uW2ldLmRpZmYgKiB0aGlzLmRhdGEubml0cm9cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ub3JiID0gTWF0aC5yb3VuZChwZXJob3VyICogdGhpcy5kYXRhLm5pdHJvKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5uaXRybztcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YS5kdW5nZW9uKSB7XHJcbiAgICAgIGxldCBuYW1lID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm5hbWVcIjtcclxuICAgICAgbGV0IHRpbWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xyXG4gICAgICBsZXQgZGlmZiA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi5kaWZmXCI7XHJcbiAgICAgIGxldCByZXdhcmQgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIucmV3YXJkXCI7XHJcbiAgICAgIGxldCBvcmIgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIub3JiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpLnZhbHVlID0gdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGltZSkudmFsdWUgPSB0aGlzLmRhdGEuZHVuZ2VvbltpXS50aW1lO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWZmKS52YWx1ZSA9IHRoaXMuZGF0YS5kdW5nZW9uW2ldLmRpZmY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJld2FyZCkuaW5uZXJIVE1MID0gdGhpcy5kYXRhLmR1bmdlb25baV0ucmV3YXJkO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5kdW5nZW9uW2ldLm9yYjtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5uYW1lID09IFwicHJvZmljaWVuY3lnYWluMlwiIHx8XHJcbiAgICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSA9PSBcInByb2ZpY2llbmN5Z2FpblwiIHx8XHJcbiAgICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSA9PSBcImVxdWlwbWVudGVmZmVjdDJcIiB8fFxyXG4gICAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUgPT0gXCJlcXVpcG1lbnRlZmZlY3RcIiB8fFxyXG4gICAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUgPT0gXCJwdXJpZnlvZmN1cnNlZGVmZmVjdFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJld2FyZCkuaW5uZXJIVE1MICs9IFwiJVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBbnZpbCB9O1xyXG4iLCJmdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaWQsIHRoaXMudmFsdWUpO1xyXG4gIGNvbnNvbGUubG9nKHRoaXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChpZCwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGFiKGlucHV0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIGlucHV0KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFRhYih0YWIpIHtcclxuICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyBodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcHJvLWNlc3MtdXMvaWVoMmNhbGMvcmF3L21hc3Rlci9odG1sL3NsaW1lQmFuay5odG1sXHJcbiAgLy8gbGV0IGZpbGUgPSBcIi4uL2h0bWwvXCIgKyB0YWIgKyBcIi5odG1sXCI7XHJcbiAgbGV0IGZpbGUgPSBcIi4vaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcclxuICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QgIT0gXCIxMjcuMC4wLjE6MzAwMFwiKSB7XHJcbiAgICBmaWxlID0gXCJodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW5cIik7XHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcclxuICAvLyAgIFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3k6XCIsXHJcbiAgLy8gICBcImRlZmF1bHQtc3JjICdzZWxmJzsgc3R5bGUtc3JjICdzZWxmJyAndW5zYWZlLWlubGluZScgKjsgZm9udC1zcmMgJ3NlbGYnICo7IGNvbm5lY3Qtc3JjICdzZWxmJyAqOyBpbWctc3JjIGRhdGE6ICpcIlxyXG4gIC8vICk7XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIC8vIHJlZmVycmVyUG9saWN5OiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgfTtcclxuICAvLyBsZXQgeCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gIC8vIGxldCB5ID0gYXdhaXQgeC50ZXh0KCk7XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHk7XHJcbiAgcmV0dXJuIGZldGNoKGZpbGUsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG59XHJcblxyXG4vLyBleHQuZ2V0ID0gKHVybCkgPT4ge1xyXG4vLyAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuLy8gICBsZXQgb3B0aW9ucyA9IHtcclxuLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcclxuLy8gICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4vLyAgICAgICBtb2RlOiAnY29ycydcclxuLy8gICB9O1xyXG5cclxuLy8gICAvL2ZldGNoIGdldFxyXG5cclxuLy8gICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbi8vIH07XHJcblxyXG4vLyBleHQuZ2V0KFwiaHR0cDovL2V4YW1wbGUuY29tXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAvLyBvciB3aGF0ZXZlclxyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIHNpZ21hKGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIGl0ZXJhdG9yLCBhY2N1bXVsYXRvciA9IDApIHtcclxuICAvLyBsZXQgYWNjdW11bGF0b3IgPSAwO1xyXG4gIGZvciAobGV0IGkgPSBsb3dlckJvdW5kOyBpIDw9IHVwcGVyQm91bmQ7ICsraSkge1xyXG4gICAgYWNjdW11bGF0b3IgKz0gaXRlcmF0b3IoaSk7XHJcbiAgfVxyXG4gIHJldHVybiBhY2N1bXVsYXRvcjtcclxufVxyXG5cclxuLy8gY29udmVydCBub3JtYWwgbnVtYmVyIHRvIEssTSxCLFQgYW5kIGV4cG9uZW50aWFsXHJcbmZ1bmN0aW9uIGNvbnZlcnQoaW5wdXQpIHtcclxuICBpbnB1dCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xyXG4gIHZhciBvdXRwdXQgPSAwO1xyXG4gIGlmIChpbnB1dCA9PSAwKSB7XHJcbiAgICBvdXRwdXQgPSAwO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPD0gMTAwMDApIHtcclxuICAgIG91dHB1dCA9IE1hdGgucm91bmQoaW5wdXQpO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwKS50b0ZpeGVkKDIpICsgXCJLXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk1cIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMCkudG9GaXhlZCgzKSArIFwiQlwiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJUXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG91dHB1dCA9IGlucHV0LnRvRXhwb25lbnRpYWwoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGssbSxiLHQgdG8gbm9ybWFsIG51bWJlcnNcclxuZnVuY3Rpb24gY29udmVydDIoaW5wdXQsIG1pbiA9IDAsIG1heCA9IDk5OTk5OTk5OTk5OTk5OSkge1xyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvLC9nLCBcIi5cIik7IC8vIGNvbnZlcnQgLCB0byAuXHJcbiAgaWYgKC9eXFxkKlxcLj9cXGQrJC8udGVzdChpbnB1dCkpIHtcclxuICAgIGlmIChpbnB1dCA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dCA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0gLy8gcmV0dXJuIHJvdW5kZWQgbnVtYmVyIGlmIHRoZXJlIGlzIG5vIGFiYnJldmlldGVcclxuICBlbHNlIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gLyguKikoXFxEKSQvZ207XHJcbiAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyAvZywgXCJcIik7IC8vIHJlbW92ZXMgYWxsIHNwYWNlc1xyXG5cclxuICAgIGlucHV0ID0gcmVnZXguZXhlYyhpbnB1dCk7XHJcbiAgICBsZXQgb3V0cHV0ID0gMDtcclxuICAgIGlmIChpbnB1dFsyXSA9PSBcInRcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogNDtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJiXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDM7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwibVwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAyO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcImtcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvRmlsZSgpIHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UsIG51bGwsIDIpXSwge1xyXG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIixcclxuICAgIH0pXHJcbiAgKTtcclxuICBhLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiSUVIMmNhbGMtZGF0YS5qc29uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgYS5jbGljaygpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGcm9tRmlsZSgpIHtcclxuICBsZXQgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIpLmZpbGVzWzBdO1xyXG4gIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsZS1jb250ZW50c1wiKS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHRleHQpKTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4uSlNPTi5wYXJzZSh0ZXh0KSB9KSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udmVydCxcclxuICBjb252ZXJ0MixcclxuICBzaWdtYSxcclxuICByZXN0YXJ0LFxyXG4gIGNoYW5nZVRhYixcclxuICBsb2FkVGFiLFxyXG4gIGFkZEV2ZW50LFxyXG4gIHNhdmVUb0ZpbGUsXHJcbiAgbG9hZEZyb21GaWxlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBPcHRpbWl6ZXIgfSBmcm9tIFwiLi9vcHRpbWl6ZXIuanNcIjtcclxuXHJcbmNsYXNzIEdlYXIge1xyXG4gIG5hbWUgPSBcImdlYXJcIjtcclxuICB2ZXJzaW9uID0gMTtcclxuICBkYXRhID0ge1xyXG4gICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxyXG4gICAgaXRlbUxldmVsOiAxMjAsXHJcbiAgICBpbmNsdWRlTWFzdGVyeTogdHJ1ZSxcclxuICAgIGN1cnNlQW52aWw6IHRydWUsXHJcbiAgICBsb3R0ZXJ5OiB0cnVlLFxyXG4gICAgaXRlbVNsb3RzOiB7XHJcbiAgICAgIEpld2Vscnk6IDE5LFxyXG4gICAgICBBcm1vcjogMTksXHJcbiAgICAgIFdlYXBvbjogMTksXHJcbiAgICB9LFxyXG4gICAgZW5jaGFudFNsb3RzOiAzNDIsXHJcbiAgICBzZXRCaWFzOiAwLjA3NSxcclxuICAgIGVuY2hhbnRVc2FnZToge1xyXG4gICAgICBVbmljb3JuS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBIUEFkZGVyOiBcIlwiLFxyXG4gICAgICBNUEFkZGVyOiBcIlwiLFxyXG4gICAgICBBVEtBZGRlcjogXCJcIixcclxuICAgICAgTUFUS0FkZGVyOiBcIlwiLFxyXG4gICAgICBERUZBZGRlcjogXCJcIixcclxuICAgICAgTURFRkFkZGVyOiBcIlwiLFxyXG4gICAgICBTUERBZGRlcjogXCJcIixcclxuICAgICAgSFBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBNUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEFUS011bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIE1BVEtNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBNREVGTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgQVRLUHJvcG90aW9uOiBcImRwc1wiLFxyXG4gICAgICBNQVRLUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgICBERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICAgIE1ERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICAgIEZpcmVSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBJY2VSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBUaHVuZGVyUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgTGlnaHRSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBEYXJrUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgUGh5c2ljYWxBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBGaXJlQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgSWNlQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgVGh1bmRlckFic29ycHRpb246IFwiXCIsXHJcbiAgICAgIExpZ2h0QWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgRGFya0Fic29ycHRpb246IFwiXCIsXHJcbiAgICAgIERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIEVxdWlwbWVudERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFNsaW1lRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgTWFnaWNTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFNwaWRlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIEJhdERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIEZhaXJ5RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRm94RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRGV2aWxGaXNoRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgVHJlYW50RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRmxhbWVUaWdlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFVuaWNvcm5Ecm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBDb2xvck1hdGVyaWFsRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgUGh5c2ljYWxDcml0aWNhbDogXCJkcHNcIixcclxuICAgICAgTWFnaWNhbENyaXRpY2FsOiBcIlwiLFxyXG4gICAgICBFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICAgIFNraWxsUHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgICAgRXF1aXBtZW50UHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgICAgTW92ZVNwZWVkTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgR29sZEdhaW46IFwiXCIsXHJcbiAgICAgIFN0b25lR2FpbjogXCJcIixcclxuICAgICAgQ3J5c3RhbEdhaW46IFwiXCIsXHJcbiAgICAgIExlYWZHYWluOiBcIlwiLFxyXG4gICAgICBXYXJyaW9yU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgV2l6YXJkU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgQW5nZWxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBUaGllZlNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIEFyY2hlclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIFRhbWVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgQWxsU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIE1hZ2ljU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIFNwaWRlcktub3dsZWRnZTogXCJcIixcclxuICAgICAgQmF0S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBGYWlyeUtub3dsZWRnZTogXCJcIixcclxuICAgICAgRm94S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBEZXZpbEZpc2hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIFRyZWFudEtub3dsZWRnZTogXCJcIixcclxuICAgICAgRmxhbWVUaWdlcktub3dsZWRnZTogXCJcIixcclxuICAgICAgUGh5c2ljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIEZpcmVEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIEljZURhbWFnZTogXCJkcHNcIixcclxuICAgICAgVGh1bmRlckRhbWFnZTogXCJcIixcclxuICAgICAgTGlnaHREYW1hZ2U6IFwiXCIsXHJcbiAgICAgIERhcmtEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIEhwUmVnZW46IFwiXCIsXHJcbiAgICAgIE1wUmVnZW46IFwiXCIsXHJcbiAgICAgIFRhbWluZ1BvaW50OiBcIlwiLFxyXG4gICAgICBXYXJyaW9yU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgV2l6YXJkU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgQW5nZWxTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBUaGllZlNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIEFyY2hlclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRhbWVyU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgVG93bk1hdEdhaW46IFwiZ2FpbnNcIixcclxuICAgICAgVG93bk1hdEFyZWFDbGVhckdhaW46IFwiXCIsXHJcbiAgICAgIFJlYmlydGhQb2ludEdhaW4xOiBcImdhaW5zXCIsXHJcbiAgICAgIFJlYmlydGhQb2ludEdhaW4yOiBcImdhaW5zXCIsXHJcbiAgICAgIFJlYmlydGhQb2ludEdhaW4zOiBcImdhaW5zXCIsXHJcbiAgICAgIENyaXRpY2FsRGFtYWdlOiBcImRwc1wiLFxyXG4gICAgICBCbGVzc2luZ0VmZmVjdDogXCJkcHNcIixcclxuICAgICAgTW92ZVNwZWVkQWRkZXI6IFwiXCIsXHJcbiAgICAgIFBldEVYUEdhaW46IFwiXCIsXHJcbiAgICAgIExveWFsdHlQb2ludEdhaW46IFwiXCIsXHJcbiAgICAgIENhdGFseXN0RG91YmxlQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFdhcnJpb3JTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBXaXphcmRTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBBbmdlbFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRoaWVmU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgQXJjaGVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgVGFtZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBIcFJlZ2VuTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgTXBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEFybW9yZWRGdXJ5OiBcIlwiLFxyXG4gICAgICBXYXJkZWRGdXJ5OiBcImRwc1wiLFxyXG4gICAgICBQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBQZXRNYWdpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFBldENyaXRpY2FsRGFtYWdlOiBcIlwiLFxyXG4gICAgICBQZXREZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBTdG9uZVRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgICBDcnlzdGFsVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICAgIExlYWZUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgICAgR3VpbGRFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICAgIFNQRE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIENyaXRpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgU2tpbGxQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgICAgRXF1aXBtZW50UHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICAgIEVYUEdhaW5NdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICAgIEdvbGRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgUGh5c2ljYWxEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBGaXJlRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgSWNlRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgVGh1bmRlckRhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIExpZ2h0RGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgRGFya0RhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIFRhbWluZ1BvaW50TXVsdGlwbGllcjogXCJcIixcclxuICAgICAgUGV0RVhQR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIExveWFsdHlQb2ludEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBCbGVzc2luZ0VmZmVjdE11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIFBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgICBNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGEudmVyc2lvbiA8IHRoaXMudmVyc2lvbikge1xyXG4gICAgICBhbGVydChcIm1pc3NpbmcgdmVyc2lvbiBtaWdyYXRpb25cIik7XHJcbiAgICAgIC8vdGhpcy5kYXRhLnZlcnNpb24gPSB0aGlzLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMudXBkYXRlRGVmYXVsdFZhbHVlcygpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbmNoYW50VXNhZ2VUZW1wbGF0ZSA9IChpZCwgbmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lU2hvcnQgPSBuYW1lXHJcbiAgICAgICAgLnJlcGxhY2UoXCJBZGRlclwiLCBcIitcIilcclxuICAgICAgICAucmVwbGFjZShcIkVmZmVjdE11bHRpcGxpZXJcIiwgXCIlXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJNdWx0aXBsaWVyXCIsIFwiJVwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiVG93blJlc2VhcmNoUG93ZXJcIiwgXCJSZXNlYXJjaFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUHJvZmljaWVuY3lcIiwgXCJQcm9mXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJTa2lsbExldmVsXCIsIFwiU2tpbGxcIilcclxuICAgICAgICAucmVwbGFjZShcIlJlc2lzdGFuY2VcIiwgXCJSZXNcIilcclxuICAgICAgICAucmVwbGFjZShcIkRyb3BDaGFuY2VcIiwgXCJEcm9wXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJDcml0aWNhbFwiLCBcIkNyaXRcIilcclxuICAgICAgICAucmVwbGFjZShcIkRhbWFnZVwiLCBcIkRtZ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiU2tpbGxFZmZlY3RSYW5nZVwiLCBcIkFvZVwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiU2tpbGxSYW5nZVwiLCBcIlJhbmdlXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJLbm93bGVkZ2VcIiwgXCJEbWdcIilcclxuICAgICAgICAucmVwbGFjZShcIlBldFBoeXNpY2FsXCIsIFwiUGV0UGh5c1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUGV0TWFnaWNhbFwiLCBcIlBldE1hZ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiQ2F0YWx5c3REb3VibGVDcml0Q2hhbmNlXCIsIFwiQ2F0YURibENyaXRcIilcclxuICAgICAgICAucmVwbGFjZShcIkNyaXRDaGFuY2VcIiwgXCJDcml0XCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJUb3duTWF0QXJlYUNsZWFyR2FpblwiLCBcIlRvd25NYXQrXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJUb3duTWF0R2FpblwiLCBcIlRvd25NYXQlXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJBYnNvcnB0aW9uXCIsIFwiQWJzb3JwXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJDb2xvck1hdGVyaWFsXCIsIFwiUmFyZU1hdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUmViaXJ0aFBvaW50XCIsIFwiUkJcIilcclxuICAgICAgICAucmVwbGFjZShcIkxveWFsdHlQb2ludEdhaW5cIiwgXCJMUEdcIilcclxuICAgICAgICAucmVwbGFjZShcIlRhbWluZ1BvaW50XCIsIFwiVFBHXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJFcXVpcG1lbnRcIiwgXCJFUVwiKTtcclxuXHJcbiAgICAgIHJldHVybiBgPGxhYmVsIHRpdGxlPVwiJHtuYW1lfVwiPiR7bmFtZVNob3J0fSA8aW5wdXQgaWQ9XCJlbmNoYW50VXNhZ2UuJHtpZH1cIiB0eXBlPVwidGV4dFwiIHNpemU9XCI1XCIvPjwvbGFiZWw+YDtcclxuICAgIH07XHJcbiAgICBsZXQgZW5jaGFudFVzYWdlSFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMuZGF0YS5lbmNoYW50VXNhZ2UpIHtcclxuICAgICAgZW5jaGFudFVzYWdlSFRNTCArPSBlbmNoYW50VXNhZ2VUZW1wbGF0ZShpZCwgaWQpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmNoYW50VXNhZ2VJbnB1dFdyYXBwZXJcIikuaW5uZXJIVE1MID1cclxuICAgICAgZW5jaGFudFVzYWdlSFRNTDtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiN1c2VySW5wdXRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5pbnB1dENoYW5nZWQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW1pemVcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9wdGltaXplLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcclxuICAgIGNvbnN0IGlkUGFydHMgPSBpZC5zcGxpdChcIi5cIik7XHJcblxyXG4gICAgc3dpdGNoIChpZFBhcnRzWzBdKSB7XHJcbiAgICAgIGNhc2UgXCJpdGVtTGV2ZWxcIjpcclxuICAgICAgICB0aGlzLmRhdGEuaXRlbUxldmVsID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImluY2x1ZGVNYXN0ZXJ5XCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLmluY2x1ZGVNYXN0ZXJ5ID0gdGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjdXJzZUFudmlsXCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLmN1cnNlQW52aWwgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImxvdHRlcnlcIjpcclxuICAgICAgICB0aGlzLmRhdGEubG90dGVyeSA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaXRlbVNsb3RzXCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLml0ZW1TbG90c1tpZFBhcnRzWzFdXSA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlbmNoYW50U2xvdHNcIjpcclxuICAgICAgICB0aGlzLmRhdGEuZW5jaGFudFNsb3RzID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInNldEJpYXNcIjpcclxuICAgICAgICB0aGlzLmRhdGEuc2V0QmlhcyA9IHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVuY2hhbnRVc2FnZVwiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5lbmNoYW50VXNhZ2VbaWRQYXJ0c1sxXV0gPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlucHV0Q2hhbmdlZCBmb3IgdW5rbm93biBpZFwiLCBpZCwgYXJndW1lbnRzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZURlZmF1bHRWYWx1ZXMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBpbnB1dC5pZDtcclxuICAgICAgY29uc3QgaWRQYXJ0cyA9IGlkLnNwbGl0KFwiLlwiKTtcclxuICAgICAgc3dpdGNoIChpZFBhcnRzWzBdKSB7XHJcbiAgICAgICAgY2FzZSBcIml0ZW1MZXZlbFwiOlxyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuaXRlbUxldmVsO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImluY2x1ZGVNYXN0ZXJ5XCI6XHJcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdGhpcy5kYXRhLmluY2x1ZGVNYXN0ZXJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImN1cnNlQW52aWxcIjpcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEuY3Vyc2VBbnZpbDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsb3R0ZXJ5XCI6XHJcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdGhpcy5kYXRhLmxvdHRlcnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiaXRlbVNsb3RzXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5pdGVtU2xvdHNbaWRQYXJ0c1sxXV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZW5jaGFudFNsb3RzXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5lbmNoYW50U2xvdHM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2V0Qmlhc1wiOlxyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuc2V0QmlhcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbmNoYW50VXNhZ2VcIjpcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLmVuY2hhbnRVc2FnZVtpZFBhcnRzWzFdXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwidXBkYXRlSFRNTFZhbHVlcyBmb3IgdW5rbm93biBpZFwiLCBpZCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU9wdGltaXplQnV0dG9uKGVuYWJsZSkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVwiKTtcclxuICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLWdyZXlcIik7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW9yYW5nZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLW9yYW5nZVwiKTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tZ3JleVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck9wdGltaXplclJlc3VsdChvcHRpbWl6ZXIpIHtcclxuICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgIGxldCBoaWdoZXN0SW5kZXggPSBNYXRoLm1heChcclxuICAgICAgb3B0aW1pemVyLmJlc3RJdGVtcy5XZWFwb24ubGVuZ3RoLFxyXG4gICAgICBvcHRpbWl6ZXIuYmVzdEl0ZW1zLkFybW9yLmxlbmd0aCxcclxuICAgICAgb3B0aW1pemVyLmJlc3RJdGVtcy5KZXdlbHJ5Lmxlbmd0aFxyXG4gICAgKTtcclxuICAgIGxldCBpdGVtO1xyXG4gICAgZm9yIChsZXQgYmVzdEl0ZW1JbmRleCA9IDA7IGJlc3RJdGVtSW5kZXggPCBoaWdoZXN0SW5kZXg7IGJlc3RJdGVtSW5kZXgrKykge1xyXG4gICAgICBpdGVtID0gb3B0aW1pemVyLmJlc3RJdGVtcy5XZWFwb25bYmVzdEl0ZW1JbmRleF07XHJcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ0aGlyZFwiPlxyXG4gICAgICAgICR7aXRlbSA/IGl0ZW0ua2luZCA6IFwiLVwifVxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgaXRlbSA9IG9wdGltaXplci5iZXN0SXRlbXMuQXJtb3JbYmVzdEl0ZW1JbmRleF07XHJcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ0aGlyZFwiPlxyXG4gICAgICAgICR7aXRlbSA/IGl0ZW0ua2luZCA6IFwiLVwifVxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgaXRlbSA9IG9wdGltaXplci5iZXN0SXRlbXMuSmV3ZWxyeVtiZXN0SXRlbUluZGV4XTtcclxuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cInRoaXJkXCI+XHJcbiAgICAgICAgJHtpdGVtID8gaXRlbS5raW5kIDogXCItXCJ9XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplUmVzdWx0SXRlbXNcIikuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICBodG1sID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgZWZmZWN0S2luZCBpbiBvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzKSB7XHJcbiAgICAgIGlmIChvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdID4gMCkge1xyXG4gICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJoYWx2ZVwiPlxyXG4gICAgICAgICAgJHtlZmZlY3RLaW5kfTogJHtvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdfVxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemVSZXN1bHRFbmNoYW50c1wiKS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgIGh0bWwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBzZXRLaW5kIGluIG9wdGltaXplci5zZXRJdGVtcykge1xyXG4gICAgICBpZiAob3B0aW1pemVyLnNldEl0ZW1zW3NldEtpbmRdLmFjdGl2ZVNldEl0ZW1zID4gMCkge1xyXG4gICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJoYWx2ZVwiPlxyXG4gICAgICAgICAgJHtzZXRLaW5kfTogJHtvcHRpbWl6ZXIuc2V0SXRlbXNbc2V0S2luZF0uYWN0aXZlU2V0SXRlbXN9XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpbWl6ZVJlc3VsdFNldEl0ZW1zXCIpLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJPcHRpbWl6ZXJSZXN1bHRFbmNodGFudFNwcmVhZChvcHRpbWl6ZXIpO1xyXG4gIH1cclxuXHJcbiAgY29sb3JzID0gW1xyXG4gICAgXCIjMzM2NkNDXCIsXHJcbiAgICBcIiNEQzM5MTJcIixcclxuICAgIFwiI0ZGOTkwMFwiLFxyXG4gICAgXCIjMTA5NjE4XCIsXHJcbiAgICBcIiM5OTAwOTlcIixcclxuICAgIFwiIzNCM0VBQ1wiLFxyXG4gICAgXCIjMDA5OUM2XCIsXHJcbiAgICBcIiNERDQ0NzdcIixcclxuICAgIFwiIzY2QUEwMFwiLFxyXG4gICAgXCIjQjgyRTJFXCIsXHJcbiAgICBcIiMzMTYzOTVcIixcclxuICAgIFwiIzk5NDQ5OVwiLFxyXG4gICAgXCIjMjJBQTk5XCIsXHJcbiAgICBcIiNBQUFBMTFcIixcclxuICAgIFwiIzY2MzNDQ1wiLFxyXG4gICAgXCIjRTY3MzAwXCIsXHJcbiAgICBcIiM4QjA3MDdcIixcclxuICAgIFwiIzMyOTI2MlwiLFxyXG4gICAgXCIjNTU3NEE2XCIsXHJcbiAgICBcIiMzQjNFQUNcIixcclxuICAgIFwiI0ZGMDBGRlwiLFxyXG4gICAgXCIjRkY2NjAwXCIsXHJcbiAgICBcIiNDNzE1ODVcIixcclxuICAgIFwiIzAwN0JBN1wiLFxyXG4gICAgXCIjRkY3RjUwXCIsXHJcbiAgICBcIiNEQzE0M0NcIixcclxuICAgIFwiIzAwRkY3RlwiLFxyXG4gICAgXCIjQzBDMEMwXCIsXHJcbiAgICBcIiMwMDgwODBcIixcclxuICAgIFwiIzhCMDA4QlwiLFxyXG4gICAgXCIjQjAxNzFGXCIsXHJcbiAgICBcIiM2OTY5NjlcIixcclxuICAgIFwiIzQ4M0Q4QlwiLFxyXG4gICAgXCIjMDA4MDAwXCIsXHJcbiAgICBcIiNBMDUyMkRcIixcclxuICAgIFwiI0ZGQzBDQlwiLFxyXG4gICAgXCIjQUREOEU2XCIsXHJcbiAgICBcIiM4N0NFRkFcIixcclxuICAgIFwiI0RBNzBENlwiLFxyXG4gICAgXCIjRjA4MDgwXCIsXHJcbiAgICBcIiNFMEZGRkZcIixcclxuICAgIFwiI0ZBODA3MlwiLFxyXG4gICAgXCIjRkZFNEUxXCIsXHJcbiAgICBcIiNCQTU1RDNcIixcclxuICAgIFwiI0ZGRUJDRFwiLFxyXG4gICAgXCIjN0ZGRkQ0XCIsXHJcbiAgICBcIiNGMEU2OENcIixcclxuICAgIFwiI0QyQjQ4Q1wiLFxyXG4gICAgXCIjQUZFRUVFXCIsXHJcbiAgICBcIiNGRjYzNDdcIixcclxuICAgIFwiI0ZGRUZENVwiLFxyXG4gICAgXCIjNkI4RTIzXCIsXHJcbiAgICBcIiNDRDVDNUNcIixcclxuICAgIFwiI0Y0QTQ2MFwiLFxyXG4gICAgXCIjRDhCRkQ4XCIsXHJcbiAgICBcIiM5OTMyQ0NcIixcclxuICAgIFwiI0ZGOEMwMFwiLFxyXG4gICAgXCIjOTkzMkNDXCIsXHJcbiAgICBcIiNGRkQ3MDBcIixcclxuICAgIFwiI0IwQzRERVwiLFxyXG4gICAgXCIjNDBFMEQwXCIsXHJcbiAgICBcIiNGRkI2QzFcIixcclxuICAgIFwiIzAwQ0VEMVwiLFxyXG4gICAgXCIjQkE1NUQzXCIsXHJcbiAgICBcIiM3QjY4RUVcIixcclxuICAgIFwiI0U2RTZGQVwiLFxyXG4gICAgXCIjOEZCQzhGXCIsXHJcbiAgICBcIiMwMEZBOUFcIixcclxuICAgIFwiIzE5MTk3MFwiLFxyXG4gICAgXCIjRjVERUIzXCIsXHJcbiAgXTtcclxuXHJcbiAgb3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0ID0gbnVsbDtcclxuICByZW5kZXJPcHRpbWl6ZXJSZXN1bHRFbmNodGFudFNwcmVhZChvcHRpbWl6ZXIpIHtcclxuICAgIGlmICh0aGlzLm9wdGltaXplUmVzdWx0VG90YWxFc2VCYXJDaGFydCkge1xyXG4gICAgICB0aGlzLm9wdGltaXplUmVzdWx0VG90YWxFc2VCYXJDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxhYmVscyA9IFtdO1xyXG4gICAgbGV0IGVmZmVjdEtpbmRUb0RhdGFJbmRleCA9IHt9O1xyXG4gICAgbGV0IGRhdGFTZXRzID0ge1xyXG4gICAgICBlbmNoYW50czoge1xyXG4gICAgICAgIGxhYmVsOiBcIkVuY2hhbnRzXCIsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gb3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSB7XHJcbiAgICAgIGlmICghb3B0aW1pemVyLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZGF0YUluZGV4ID0gbGFiZWxzLmxlbmd0aDtcclxuICAgICAgZWZmZWN0S2luZFRvRGF0YUluZGV4W2VmZmVjdEtpbmRdID0gZGF0YUluZGV4O1xyXG5cclxuICAgICAgbGFiZWxzW2RhdGFJbmRleF0gPSBlZmZlY3RLaW5kO1xyXG5cclxuICAgICAgZGF0YVNldHMuZW5jaGFudHMuZGF0YVtkYXRhSW5kZXhdID0gb3B0aW1pemVyLmJlc3RFbmNoYW50c1tlZmZlY3RLaW5kXTtcclxuICAgIH1cclxuICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IHBhcnQgaW4gb3B0aW1pemVyLmJlc3RJdGVtcykge1xyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIG9wdGltaXplci5iZXN0SXRlbXNbcGFydF0pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGFTZXRzW2l0ZW0ua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGRhdGFTZXRzW2l0ZW0ua2luZF0gPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLmtpbmQsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3JzW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb2xvckluZGV4ID0gKGNvbG9ySW5kZXggKyAxKSAlIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gb3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGVmZmVjdEtpbmRUb0RhdGFJbmRleFtlZmZlY3RLaW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gZWZmZWN0S2luZFRvRGF0YUluZGV4W2VmZmVjdEtpbmRdO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhU2V0c1tpdGVtLmtpbmRdLmRhdGFbZGF0YUluZGV4XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXRhU2V0c1tpdGVtLmtpbmRdLmRhdGFbZGF0YUluZGV4XSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBkYXRhU2V0c1tpdGVtLmtpbmRdLmRhdGFbZGF0YUluZGV4XSArPVxyXG4gICAgICAgICAgICAgIGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSAqIGl0ZW0uc2V0RWZmZWN0TXVsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0YVNldHNBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgZGF0YVNldCBpbiBkYXRhU2V0cykge1xyXG4gICAgICBkYXRhU2V0c0FycmF5LnB1c2goZGF0YVNldHNbZGF0YVNldF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0ID0gbmV3IENoYXJ0KFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplUmVzdWx0VG90YWxFc2VCYXJDaGFydFwiKSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICAgICAgICBkYXRhc2V0czogZGF0YVNldHNBcnJheSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiRW5jaGFudCBTcHJlYWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck9wdGltaXplclJlc3VsdERhdGFEdW1wKG9wdGltaXplcikge1xyXG4gICAgbGV0IGh0bWwgPVxyXG4gICAgICBcIjxoMj5SZXN1bHRzPC9oMj48cD5jbGljayBvbiB0aGUgaGVhZGVycyB0byBjb2xsYXBzZSB0aGUgc2VjdGlvbjwvcD5cIjtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+aXRlbXM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpbWl6ZXIuaXRlbXMpKSxcclxuICAgICAgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBkZWxldGUgdmFsdWUuZWZmZWN0cztcclxuICAgICAgICBkZWxldGUgdmFsdWUubGV2ZWxNYXhFZmZlY3RzO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz50b3RhbEVzZTwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIudG90YWxFc2UsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuICAgIGh0bWwgKz0gYDxoMz50b3RhbEVzZVdpdGhFbmNoYW50czwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIudG90YWxFc2VXaXRoRW5jaGFudHMsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuICAgIGh0bWwgKz0gYDxoMz50b3RhbEVzZVdpdGhFbmNoYW50czwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIudG90YWxFc2UsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+YmVzdEVuY2hhbnRzPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci5iZXN0RW5jaGFudHMsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+YmVzdEl0ZW1zPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW1pemVyLmJlc3RJdGVtcykpLFxyXG4gICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5lZmZlY3RzO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5sZXZlbE1heEVmZmVjdHM7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLnJlbEVmZmVjdHM7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLmVzZTtcclxuICAgICAgICBkZWxldGUgdmFsdWUucGFydDtcclxuICAgICAgICBkZWxldGUgdmFsdWUuc2V0RWZmZWN0TXVsdDtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+c2V0SXRlbXM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLnNldEl0ZW1zLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci5nZXRUb3RhbEVuY2hhbnRzVmFsdWUob3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIC8vVE9ETyBicmVha2Rvd24gdG90YWxFc2VXaXRoRW5jaGFudHMgYnkgc291cmNlc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVJlc3VsdERhdGFEdW1wXCIpLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjb3B0aW1pemVSZXN1bHREYXRhRHVtcCA+IGgzXCIpXHJcbiAgICAgIC5mb3JFYWNoKChoZWFkZXIpID0+IHtcclxuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAgIGlmIChuZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wdGltaXplKCkge1xyXG4gICAgdGhpcy50b2dnbGVPcHRpbWl6ZUJ1dHRvbihmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5zYXZlKCk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW1pemVyID0gbmV3IE9wdGltaXplcih0aGlzLmRhdGEpO1xyXG4gICAgb3B0aW1pemVyLm9wdGltaXplKCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJPcHRpbWl6ZXJSZXN1bHQob3B0aW1pemVyKTtcclxuICAgIHRoaXMucmVuZGVyT3B0aW1pemVyUmVzdWx0RGF0YUR1bXAob3B0aW1pemVyKTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZU9wdGltaXplQnV0dG9uKHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgR2VhciB9O1xyXG4iLCJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzb25cIiBhc3NlcnQgeyB0eXBlOiBcImpzb25cIiB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9wdGltaXplciB7XHJcbiAgaXRlbUxldmVsID0gMTIwO1xyXG4gIGluY2x1ZGVNYXN0ZXJ5ID0gdHJ1ZTtcclxuICBjdXJzZUFudmlsID0gdHJ1ZTtcclxuICBsb3R0ZXJ5ID0gdHJ1ZTtcclxuICBpdGVtU2xvdHMgPSB7XHJcbiAgICBKZXdlbHJ5OiAxOSxcclxuICAgIEFybW9yOiAxOSxcclxuICAgIFdlYXBvbjogMTksXHJcbiAgfTtcclxuICBlbmNoYW50U2xvdHMgPSAzNDI7XHJcbiAgc2V0QmlhcyA9IDAuMDc1O1xyXG4gIGVuY2hhbnRVc2FnZSA9IHtcclxuICAgIFVuaWNvcm5Lbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBIUEFkZGVyOiBcIlwiLFxyXG4gICAgTVBBZGRlcjogXCJcIixcclxuICAgIEFUS0FkZGVyOiBcIlwiLFxyXG4gICAgTUFUS0FkZGVyOiBcIlwiLFxyXG4gICAgREVGQWRkZXI6IFwiXCIsXHJcbiAgICBNREVGQWRkZXI6IFwiXCIsXHJcbiAgICBTUERBZGRlcjogXCJcIixcclxuICAgIEhQTXVsdGlwbGllcjogXCJcIixcclxuICAgIE1QTXVsdGlwbGllcjogXCJcIixcclxuICAgIEFUS011bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBNQVRLTXVsdGlwbGllcjogXCJcIixcclxuICAgIERFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBNREVGTXVsdGlwbGllcjogXCJcIixcclxuICAgIEFUS1Byb3BvdGlvbjogXCJkcHNcIixcclxuICAgIE1BVEtQcm9wb3Rpb246IFwiXCIsXHJcbiAgICBERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICBNREVGUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgRmlyZVJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBJY2VSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgVGh1bmRlclJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBMaWdodFJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBEYXJrUmVzaXN0YW5jZTogXCJcIixcclxuICAgIFBoeXNpY2FsQWJzb3JwdGlvbjogXCJcIixcclxuICAgIEZpcmVBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgSWNlQWJzb3JwdGlvbjogXCJcIixcclxuICAgIFRodW5kZXJBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgTGlnaHRBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgRGFya0Fic29ycHRpb246IFwiXCIsXHJcbiAgICBEZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgRXF1aXBtZW50RHJvcENoYW5jZTogXCJcIixcclxuICAgIFNsaW1lRHJvcENoYW5jZTogXCJcIixcclxuICAgIE1hZ2ljU2xpbWVEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgU3BpZGVyRHJvcENoYW5jZTogXCJcIixcclxuICAgIEJhdERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBGYWlyeURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBGb3hEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRGV2aWxGaXNoRHJvcENoYW5jZTogXCJcIixcclxuICAgIFRyZWFudERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBGbGFtZVRpZ2VyRHJvcENoYW5jZTogXCJcIixcclxuICAgIFVuaWNvcm5Ecm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgQ29sb3JNYXRlcmlhbERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBQaHlzaWNhbENyaXRpY2FsOiBcImRwc1wiLFxyXG4gICAgTWFnaWNhbENyaXRpY2FsOiBcIlwiLFxyXG4gICAgRVhQR2FpbjogXCJnYWluc1wiLFxyXG4gICAgU2tpbGxQcm9maWNpZW5jeTogXCJnYWluc1wiLFxyXG4gICAgRXF1aXBtZW50UHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgIE1vdmVTcGVlZE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBHb2xkR2FpbjogXCJcIixcclxuICAgIFN0b25lR2FpbjogXCJcIixcclxuICAgIENyeXN0YWxHYWluOiBcIlwiLFxyXG4gICAgTGVhZkdhaW46IFwiXCIsXHJcbiAgICBXYXJyaW9yU2tpbGxMZXZlbDogXCJcIixcclxuICAgIFdpemFyZFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBBbmdlbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBUaGllZlNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBBcmNoZXJTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgVGFtZXJTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgQWxsU2tpbGxMZXZlbDogXCJcIixcclxuICAgIFNsaW1lS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgTWFnaWNTbGltZUtub3dsZWRnZTogXCJcIixcclxuICAgIFNwaWRlcktub3dsZWRnZTogXCJcIixcclxuICAgIEJhdEtub3dsZWRnZTogXCJcIixcclxuICAgIEZhaXJ5S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgRm94S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgRGV2aWxGaXNoS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgVHJlYW50S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgRmxhbWVUaWdlcktub3dsZWRnZTogXCJcIixcclxuICAgIFBoeXNpY2FsRGFtYWdlOiBcIlwiLFxyXG4gICAgRmlyZURhbWFnZTogXCJcIixcclxuICAgIEljZURhbWFnZTogXCJkcHNcIixcclxuICAgIFRodW5kZXJEYW1hZ2U6IFwiXCIsXHJcbiAgICBMaWdodERhbWFnZTogXCJcIixcclxuICAgIERhcmtEYW1hZ2U6IFwiXCIsXHJcbiAgICBIcFJlZ2VuOiBcIlwiLFxyXG4gICAgTXBSZWdlbjogXCJcIixcclxuICAgIFRhbWluZ1BvaW50OiBcIlwiLFxyXG4gICAgV2FycmlvclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBXaXphcmRTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgQW5nZWxTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgVGhpZWZTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgQXJjaGVyU2tpbGxSYW5nZTogXCJcIixcclxuICAgIFRhbWVyU2tpbGxSYW5nZTogXCJcIixcclxuICAgIFRvd25NYXRHYWluOiBcImdhaW5zXCIsXHJcbiAgICBUb3duTWF0QXJlYUNsZWFyR2FpbjogXCJcIixcclxuICAgIFJlYmlydGhQb2ludEdhaW4xOiBcImdhaW5zXCIsXHJcbiAgICBSZWJpcnRoUG9pbnRHYWluMjogXCJnYWluc1wiLFxyXG4gICAgUmViaXJ0aFBvaW50R2FpbjM6IFwiZ2FpbnNcIixcclxuICAgIENyaXRpY2FsRGFtYWdlOiBcImRwc1wiLFxyXG4gICAgQmxlc3NpbmdFZmZlY3Q6IFwiZHBzXCIsXHJcbiAgICBNb3ZlU3BlZWRBZGRlcjogXCJcIixcclxuICAgIFBldEVYUEdhaW46IFwiXCIsXHJcbiAgICBMb3lhbHR5UG9pbnRHYWluOiBcIlwiLFxyXG4gICAgQ2F0YWx5c3REb3VibGVDcml0aWNhbENoYW5jZTogXCJcIixcclxuICAgIFdhcnJpb3JTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgV2l6YXJkU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIEFuZ2VsU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIFRoaWVmU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIEFyY2hlclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBUYW1lclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBIcFJlZ2VuTXVsdGlwbGllcjogXCJcIixcclxuICAgIE1wUmVnZW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQXJtb3JlZEZ1cnk6IFwiXCIsXHJcbiAgICBXYXJkZWRGdXJ5OiBcImRwc1wiLFxyXG4gICAgUGV0UGh5c2ljYWxDcml0aWNhbENoYW5jZTogXCJcIixcclxuICAgIFBldE1hZ2ljYWxDcml0aWNhbENoYW5jZTogXCJcIixcclxuICAgIFBldENyaXRpY2FsRGFtYWdlOiBcIlwiLFxyXG4gICAgUGV0RGVidWZmUmVzaXN0YW5jZTogXCJcIixcclxuICAgIFN0b25lVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICBDcnlzdGFsVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICBMZWFmVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICBHdWlsZEVYUEdhaW46IFwiZ2FpbnNcIixcclxuICAgIFNQRE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBDcml0aWNhbERhbWFnZU11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBTa2lsbFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgRXF1aXBtZW50UHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICBFWFBHYWluTXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgR29sZEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgRmlyZURhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBJY2VEYW1hZ2VNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgVGh1bmRlckRhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBMaWdodERhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBEYXJrRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIFRhbWluZ1BvaW50TXVsdGlwbGllcjogXCJcIixcclxuICAgIFBldEVYUEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTG95YWx0eVBvaW50R2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBCbGVzc2luZ0VmZmVjdE11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBQaHlzaWNhbENyaXRpY2FsTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIE1hZ2ljYWxDcml0aWNhbE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcklucHV0KSB7XHJcbiAgICB0aGlzLml0ZW1MZXZlbCA9IHVzZXJJbnB1dC5pdGVtTGV2ZWw7XHJcbiAgICB0aGlzLmluY2x1ZGVNYXN0ZXJ5ID0gdXNlcklucHV0LmluY2x1ZGVNYXN0ZXJ5O1xyXG4gICAgdGhpcy5jdXJzZUFudmlsID0gdXNlcklucHV0LmN1cnNlQW52aWw7XHJcbiAgICB0aGlzLmxvdHRlcnkgPSB1c2VySW5wdXQubG90dGVyeTtcclxuICAgIHRoaXMuaXRlbVNsb3RzID0gdXNlcklucHV0Lml0ZW1TbG90cztcclxuICAgIHRoaXMuZW5jaGFudFNsb3RzID0gdXNlcklucHV0LmVuY2hhbnRTbG90cztcclxuICAgIHRoaXMuc2V0QmlhcyA9IHVzZXJJbnB1dC5zZXRCaWFzO1xyXG4gICAgdGhpcy5lbmNoYW50VXNhZ2UgPSB1c2VySW5wdXQuZW5jaGFudFVzYWdlO1xyXG4gIH1cclxuXHJcbiAgb3B0aW1pemUoKSB7XHJcbiAgICB0aGlzLnN0ZXAxKCk7XHJcbiAgICB0aGlzLnN0ZXAyKCk7XHJcbiAgfVxyXG5cclxuICBlbmNoYW50TWFwID0ge307XHJcbiAgY2FsY0VuY2hhbnRFZmZlY3RWYWx1ZShlZmZlY3QpIHtcclxuICAgIGxldCBlbmNoYW50ID0gdGhpcy5lbmNoYW50TWFwW2VmZmVjdC5raW5kXTtcclxuICAgIGxldCBlbmNoYW50RWZmZWN0VmFsdWUgPSBlbmNoYW50Lm1heFZhbHVlO1xyXG4gICAgaWYgKHRoaXMubG90dGVyeSkge1xyXG4gICAgICBlbmNoYW50RWZmZWN0VmFsdWUgPSBlbmNoYW50Lm1heFZhbHVlTG90dGVyeTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG4gIH1cclxuICBjYWxjSXRlbUVmZmVjdFZhbHVlKGVmZmVjdCkge1xyXG4gICAgbGV0IGl0ZW1FZmZlY3RWYWx1ZSA9IGVmZmVjdC5pbml0VmFsdWUgKyBlZmZlY3QuYmFzZVZhbHVlICogdGhpcy5pdGVtTGV2ZWw7XHJcblxyXG4gICAgaWYgKGl0ZW1FZmZlY3RWYWx1ZSA8IDAgJiYgdGhpcy5jdXJzZUFudmlsKSB7XHJcbiAgICAgIC8vdGhpcyBpcyBhIGN1cnNlZCBlZmZlY3QsIGlmIHdlIGFkZCBjdXJzZSBhbnZpbHMgaXQgd2lsbCBiZSBudWxsaWZpZWRcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1FZmZlY3RWYWx1ZTtcclxuICB9XHJcbiAgaXRlbXMgPSBbXTtcclxuICBzdGVwMSgpIHtcclxuICAgIGxldCBlbmNoYW50VXNhZ2VBZGRlZE5ldyA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGVuY2hhbnQgb2YgZGF0YS5lbmNoYW50cykge1xyXG4gICAgICB0aGlzLmVuY2hhbnRNYXBbZW5jaGFudC5raW5kXSA9IGVuY2hhbnQ7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuZW5jaGFudFVzYWdlW2VuY2hhbnQua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcImZvdW5kIG5ldyBlbmNoYW50IG5vdCBsaXN0ZWQgaW4gZW5jaGFudFVzYWdlXCIsXHJcbiAgICAgICAgICBlbmNoYW50LmtpbmRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZW5jaGFudFVzYWdlW2VuY2hhbnQua2luZF0gPSBcIlwiO1xyXG4gICAgICAgIGVuY2hhbnRVc2FnZUFkZGVkTmV3ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmNoYW50VXNhZ2VBZGRlZE5ldykge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT1wcmludGluZyBlbmNoYW50VXNhZ2U9PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4odGhpcy5lbmNoYW50VXNhZ2UpO1xyXG4gICAgICBjb25zb2xlLndhcm4odGhpcy5lbmNoYW50VXNhZ2UpO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YS5pdGVtcykge1xyXG4gICAgICAvL2ZpbHRlciBvdXQgdmVyeSBiYWQgaXRlbXNcclxuICAgICAgaWYgKGl0ZW0uc2V0S2luZCA9PT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICBsZXQgZXNlID0ge1xyXG4gICAgICAgIHNsb3RzOiA0LFxyXG4gICAgICAgIG1hc3RlcmllczogMCxcclxuICAgICAgICBlZmZlY3RzOiAwLFxyXG4gICAgICAgIHN1bTogMCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCByZWxFZmZlY3RzID0ge307XHJcblxyXG4gICAgICBmb3IgKGxldCBlZmZlY3Qgb2YgaXRlbS5lZmZlY3RzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUVmZmVjdFZhbHVlID0gdGhpcy5jYWxjSXRlbUVmZmVjdFZhbHVlKGVmZmVjdCk7XHJcbiAgICAgICAgbGV0IGVuY2hhbnRFZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0VuY2hhbnRFZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdICs9IGl0ZW1FZmZlY3RWYWx1ZSAvIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuXHJcbiAgICAgICAgLy9pZiB3ZSBjYXJlIGFib3V0IHRoaXMgZWZmZWN0LCBpbmNsdWRlIGluIHRoZSBlc2VcclxuICAgICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0LmtpbmRdKSB7XHJcbiAgICAgICAgICBlc2UuZWZmZWN0cyArPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pbmNsdWRlTWFzdGVyeSkge1xyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdCBvZiBpdGVtLmxldmVsTWF4RWZmZWN0cykge1xyXG4gICAgICAgICAgLy9lZmZlY3Qua2luZCBOb3RoaW5nIGFyZSBlbmNoYW50IFNsb3RzXHJcbiAgICAgICAgICBpZiAoZWZmZWN0LmtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChlZmZlY3QuaW5pdFZhbHVlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgZXNlLnNsb3RzID0gNztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlc2Uuc2xvdHMgPSA2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0eXBlb2YgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGl0ZW1FZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0l0ZW1FZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgICAgbGV0IGVuY2hhbnRFZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0VuY2hhbnRFZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gKz0gaXRlbUVmZmVjdFZhbHVlIC8gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG5cclxuICAgICAgICAgIC8vaWYgd2UgY2FyZSBhYm91dCB0aGlzIGVmZmVjdCwgaW5jbHVkZSBpbiB0aGUgZXNlXHJcbiAgICAgICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0LmtpbmRdKSB7XHJcbiAgICAgICAgICAgIGVzZS5tYXN0ZXJpZXMgKz0gaXRlbUVmZmVjdFZhbHVlIC8gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZXNlLnN1bSA9IGVzZS5zbG90cyArIGVzZS5tYXN0ZXJpZXMgKyBlc2UuZWZmZWN0cztcclxuXHJcbiAgICAgIGl0ZW0uZXNlID0gZXNlO1xyXG5cclxuICAgICAgaXRlbS5yZWxFZmZlY3RzID0gcmVsRWZmZWN0cztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGIuZXNlLnN1bSAtIGEuZXNlLnN1bTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG90YWxFc2UgPSB7fTtcclxuICB0b3RhbEVzZVdpdGhFbmNoYW50cyA9IHt9O1xyXG4gIGJlc3RFbmNoYW50cyA9IHt9O1xyXG4gIGJlc3RJdGVtcyA9IHtcclxuICAgIEpld2Vscnk6IFtdLFxyXG4gICAgQXJtb3I6IFtdLFxyXG4gICAgV2VhcG9uOiBbXSxcclxuICB9O1xyXG4gIHNldEl0ZW1zID0ge307XHJcblxyXG4gIC8vVE9ETyByZXR1cm4gYSBvYmplY3Qgbm90IGEgZmxvYXRcclxuICAvLyBoYXZlIHNlcGVyYXRlIHZhbHVlcyBmb3IgZHBzIGFuZCBnYWlucywgLi4uXHJcbiAgZ2V0VG90YWxFbmNoYW50c1ZhbHVlKGVuY2hhbnRzLCBlbmNoYW50c1RvQWRkKSB7XHJcbiAgICBsZXQgdG90YWwgPSAxO1xyXG5cclxuICAgIC8vVE9ETyBpbXByb3ZlIHRoZSBhY2N1cmFjeVxyXG4gICAgLy8gY29uc2lkZXIgYmFzZSBlbmNoYW50IHZhbHVlXHJcbiAgICAvLyBjb25zaWRlciBvdXRsZWlyIGxpa2UgZnVyeVxyXG4gICAgLy9jb25zaWRlciB0YXJnZXQgY2FwcyBmb3IgZHBzIGFuZCBjcml0IGNoYW5jZVxyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBlbmNoYW50cykge1xyXG4gICAgICAvL2lmIHdlIGRvbnQgY2FyZSBmb3IgdGhlc2UgZG9udCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhbHVlXHJcbiAgICAgIGlmICghdGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGVmZmVjdFZhbHVlID0gZW5jaGFudHNbZWZmZWN0S2luZF07XHJcbiAgICAgIGlmIChlbmNoYW50c1RvQWRkICYmIGVuY2hhbnRzVG9BZGRbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICBlZmZlY3RWYWx1ZSArPSBlbmNoYW50c1RvQWRkW2VmZmVjdEtpbmRdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b3RhbCAqPSAxICsgZWZmZWN0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuICBzdGVwMigpIHtcclxuICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdGhpcy5lbmNoYW50VXNhZ2UpIHtcclxuICAgICAgdGhpcy50b3RhbEVzZVtlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgIHRoaXMuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0SXRlbXNFZmZlY3RNdWx0ID0gWzEsIDEsIDEuMDUsIDEuMSwgMS4xNCwgMS4xOSwgMS4yNSwgMS4zNSwgMS41XTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICBpdGVtLnNldEVmZmVjdE11bHQgPSAwO1xyXG4gICAgICBpZiAoaXRlbS5zZXRLaW5kICE9PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0gPSB7XHJcbiAgICAgICAgICAgIG5ld1NldEl0ZW1WYWx1ZTogMCxcclxuICAgICAgICAgICAgYWN0aXZlU2V0SXRlbXM6IDAsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZEJlc3RJdGVtID0gKHBhcnQpID0+IHtcclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucGFydCA9PT0gcGFydCkge1xyXG4gICAgICAgICAgLy9pdGVtcyBpcyBzb3J0ZWQsIHNvIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCB3aGljaCBtYXRjaGVzIHRoZSBwYXJ0XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJdGVtVG9Ub3RhbEVzZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gaXRlbS5yZWxFZmZlY3RzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSA9PT0gMCkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsRXNlW2VmZmVjdEtpbmRdICs9XHJcbiAgICAgICAgICBpdGVtLnJlbEVmZmVjdHNbZWZmZWN0S2luZF0gKiBpdGVtLnNldEVmZmVjdE11bHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0pIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdLmFjdGl2ZVNldEl0ZW1zKys7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIGFsbCBzZXQgaXRlbSBzdHJlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IHNldEl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgaWYgKHNldEl0ZW0uc2V0S2luZCA9PT0gaXRlbS5zZXRLaW5kKSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW0uc2V0RWZmZWN0TXVsdCA9XHJcbiAgICAgICAgICAgICAgc2V0SXRlbXNFZmZlY3RNdWx0W3RoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXS5hY3RpdmVTZXRJdGVtc107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3JlY2FsY3VsYXRlIHRvdGFsRXNlIHdpdGggY2hhbmdlZCBzZXQgc3RyZW5ndGhcclxuICAgICAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIHRoaXMudG90YWxFc2UpIHtcclxuICAgICAgICAgIHRoaXMudG90YWxFc2VbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYmVzdEl0ZW1zW3BhcnRdKSB7XHJcbiAgICAgICAgICAgIGFkZEl0ZW1Ub1RvdGFsRXNlKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5iZXN0SXRlbXNbaXRlbS5wYXJ0XS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgLy91cGRhdGUgdGhlIHRvdGFsRXNlXHJcbiAgICAgIGFkZEl0ZW1Ub1RvdGFsRXNlKGl0ZW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVFc2UgPSAoKSA9PiB7XHJcbiAgICAgIC8vcmVzZXQgdG90YWxFc2VXaXRoRW5jaGFudHNcclxuICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50cyA9IHt9O1xyXG4gICAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIHRoaXMudG90YWxFc2UpIHtcclxuICAgICAgICB0aGlzLmJlc3RFbmNoYW50c1tlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXSA9IHRoaXMudG90YWxFc2VbZWZmZWN0S2luZF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vY2FsY3VhbHRlIHRoZSBhdmVyYWdlIHNldCBlZmZlY3QgbXVsdCwgbmV3IGVuY2hhbnRzIHdpbGwgdXNlIHRoaXMgb25lXHJcbiAgICAgIGxldCBhdmVyYWdlU2V0RWZmZWN0TXVsdCA9IDE7XHJcbiAgICAgIGxldCBlcXVpcHBlZEl0ZW1Db3VudCA9IDA7XHJcbiAgICAgIGZvciAobGV0IHBhcnQgaW4gdGhpcy5iZXN0SXRlbXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYmVzdEl0ZW1zW3BhcnRdKSB7XHJcbiAgICAgICAgICBlcXVpcHBlZEl0ZW1Db3VudCsrO1xyXG5cclxuICAgICAgICAgIGlmIChlcXVpcHBlZEl0ZW1Db3VudCA9PT0gMSlcclxuICAgICAgICAgICAgYXZlcmFnZVNldEVmZmVjdE11bHQgPSBpdGVtLnNldEVmZmVjdE11bHQ7XHJcbiAgICAgICAgICBlbHNlIGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ICs9IGl0ZW0uc2V0RWZmZWN0TXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVxdWlwcGVkSXRlbUNvdW50ID4gMCkge1xyXG4gICAgICAgIGF2ZXJhZ2VTZXRFZmZlY3RNdWx0IC89IGVxdWlwcGVkSXRlbUNvdW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZW5jaGFudHNUb1NwZW50ID0gdGhpcy5lbmNoYW50U2xvdHM7XHJcbiAgICAgIHdoaWxlIChlbmNoYW50c1RvU3BlbnQgPiAwKSB7XHJcbiAgICAgICAgbGV0IGxvd2VzdEVmZmVjdEtpbmQgPSBcIlwiO1xyXG4gICAgICAgIGxldCBsb3dlc3RFbmNoYW50VmFsdWUgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIHRoaXMuZW5jaGFudFVzYWdlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF0gPCBsb3dlc3RFbmNoYW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICBsb3dlc3RFZmZlY3RLaW5kID0gZWZmZWN0S2luZDtcclxuICAgICAgICAgICAgICBsb3dlc3RFbmNoYW50VmFsdWUgPSB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2VmZmVjdEtpbmRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1RPRE8gaW5jbHVkZSBhdmVyYWdlIHNldEVmZmVjdE11bHRcclxuICAgICAgICB0aGlzLmJlc3RFbmNoYW50c1tsb3dlc3RFZmZlY3RLaW5kXSArPSAxO1xyXG4gICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbbG93ZXN0RWZmZWN0S2luZF0gKz0gYXZlcmFnZVNldEVmZmVjdE11bHQ7XHJcbiAgICAgICAgZW5jaGFudHNUb1NwZW50LS07XHJcbiAgICAgIH1cclxuICAgICAgLy9UT0RPIGRvIHRoaXMgZm9yIHVwIHRvICs3IGVuY2hhbnRzIGZvciBpdGVtLmVzZS5zbG90c1xyXG5cclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgLy9UT0RPIGZhY3RvciBpbiBpdGVtLmVzZS5zbG90cywgY2hvb3NlIHRoZSB0b3RhbEVzZVdpdGhFbmNoYW50cyBhY2NvcmRpbmdseVxyXG4gICAgICAgIGl0ZW0uZXNlLnVwZGF0ZWRTdW0gPSB0aGlzLmdldFRvdGFsRW5jaGFudHNWYWx1ZShcclxuICAgICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHMsXHJcbiAgICAgICAgICBpdGVtLnJlbEVmZmVjdHNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2FmdGVyIGFsbCBuZXcgaXRlbVZhbHVlcyBoYXZlIGJlZW4gY2FsY3VsYXRlZCwgdXBkYXRlIHRoZSBzZXRJdGVtVmFsdWVzXHJcbiAgICAgIC8vICBhbmQgaW5jcmVhc2UgdGhlIHZhbHVlIG9mIGl0ZW1zIHdoaWNoIGFyZSBwYXJ0IG9mIGFuIGluY29tcGxldGUgc2V0XHJcbiAgICAgIGZvciAobGV0IHNldEtpbmQgaW4gdGhpcy5zZXRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbc2V0S2luZF0ubmV3U2V0SXRlbVZhbHVlID0gMDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpdGVtUGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5iZXN0SXRlbXNbaXRlbVBhcnRdKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0ubmV3U2V0SXRlbVZhbHVlICs9XHJcbiAgICAgICAgICAgIGl0ZW0uZXNlLnVwZGF0ZWRTdW0gKiB0aGlzLnNldEJpYXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgIC8vaWYgdGhpcyBpcyBhIG5ldyBzZXQgaXRlbSwgYWRkIHRoZSB2YWx1ZSBvZiB0aGUgb3RoZXIgaXRlbXMgYXRvcCBvZiBpdFxyXG4gICAgICAgIGlmICghdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0pIHtcclxuICAgICAgICAgIGl0ZW0uZXNlLnVwZGF0ZWRTdW0gKz0gdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdLm5ld1NldEl0ZW1WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmVzZS51cGRhdGVkU3VtIC0gYS5lc2UudXBkYXRlZFN1bTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbnN0cnVjdEJlc3RJdGVtcyA9ICgpID0+IHtcclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsZXQgYmVzdFBhcnQgPSBcIlwiO1xyXG4gICAgICAgIGxldCBiZXN0UGFydEZyZWVTbG90cyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBhcnQgaW4gdGhpcy5pdGVtU2xvdHMpIHtcclxuICAgICAgICAgIGxldCBmcmVlU2xvdHMgPSB0aGlzLml0ZW1TbG90c1twYXJ0XSAtIHRoaXMuYmVzdEl0ZW1zW3BhcnRdLmxlbmd0aDtcclxuICAgICAgICAgIGlmIChmcmVlU2xvdHMgPiBiZXN0UGFydEZyZWVTbG90cykge1xyXG4gICAgICAgICAgICBiZXN0UGFydCA9IHBhcnQ7XHJcbiAgICAgICAgICAgIGJlc3RQYXJ0RnJlZVNsb3RzID0gZnJlZVNsb3RzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9ubyBtb3JlIGl0ZW1zIHRvIGFkZCwgd2UgYXJlIGRvbmVcclxuICAgICAgICBpZiAoYmVzdFBhcnQgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiZXN0SXRlbSA9IGZpbmRCZXN0SXRlbShiZXN0UGFydCk7XHJcbiAgICAgICAgYWRkSXRlbShiZXN0SXRlbSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUVzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdEJlc3RJdGVtcygpO1xyXG4gICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICB0aGlzLmJlc3RJdGVtc1twYXJ0XS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuZXNlLnN1bSA8IGIuZXNlLnN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLmVzZS5zdW0gPiBiLmVzZS5zdW0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb252ZXJ0LCBjb252ZXJ0Miwgc2lnbWEsIGFkZEV2ZW50IH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5cbmNsYXNzIFNsaW1lQmFuayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmFtZSA9IFwic2xpbWVCYW5rXCI7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgcmVzZWFyY2g6IHtcbiAgICAgICAgbGVhZjogeyBsZXZlbDogMCwgdmFsdWU6IDAgfSxcbiAgICAgICAgc3RvbmU6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXG4gICAgICB9LFxuXG4gICAgICBzbGltZUNvaW5DYXAxOiB7XG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICB2YWx1ZTogMTAwMDAsXG4gICAgICAgIGNvc3Q6IDEwMDAwLFxuICAgICAgfSxcbiAgICAgIHNsaW1lQ29pbkNhcDI6IHtcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgIGNvc3Q6IDEwMDAwMDAwMDAwLFxuICAgICAgfSxcbiAgICAgIHNsaW1lQ29pbkNhcFRvdGFsOiAwLFxuICAgICAgaW50cmVzdDogMCxcbiAgICAgIG11bHRpcGxpZXI6IDAsXG4gICAgICBwZXQxOiB7XG4gICAgICAgIHJhbms6IDAsXG4gICAgICAgIGxveWFsdHk6IDAsXG4gICAgICAgIHBhc3NpdmU6IDAsXG4gICAgICB9LFxuICAgICAgbWlsZXN0b25lMTgwMDogZmFsc2UsXG4gICAgICBtaWxlc3RvbmUyNzAwOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJjbGFzcyBjb25zdHJ1Y3RvciBha2EgSW5pdFwiKTtcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hTdG9uZS5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5yZXNlYXJjaExlYWYuYmluZCh0aGlzKSk7XG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMS5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zbGltZUNvaW5DYXAyLmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwicGV0MS5yYW5rXCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwicGV0MS5sb3lhbHR5XCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwibWlsZXN0b25lMTgwMFwiLCBcImNoYW5nZVwiLCB0aGlzLm1pbGVzdG9uZS5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTI3MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXkoKVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZygkKFwiI3Jlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWw7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWw7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLnZhbHVlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZVxuICAgICk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZVxuICAgICk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmNvc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLmludHJlc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuaW50cmVzdCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXBUb3RhbFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmsubXVsdGlwbGllclwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEubXVsdGlwbGllcjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucGFzc2l2ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucGV0MS5wYXNzaXZlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlID0gdGhpcy5kYXRhLnBldDEucmFuaztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLmxveWFsdHk7XG5cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1pbGVzdG9uZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIHBldCgpIHtcbiAgICB0aGlzLmRhdGEucGV0MS5yYW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnJhbmtcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnBldDEubG95YWx0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5sb3lhbHR5XCIpLnZhbHVlO1xuICAgIGxldCBsb3lhbHR5ID0gMi41ICogKHBhcnNlRmxvYXQodGhpcy5kYXRhLnBldDEubG95YWx0eSkgKyAxMDApICogMC4wMTtcbiAgICB0aGlzLmRhdGEucGV0MS5wYXNzaXZlID0gcGFyc2VGbG9hdCh0aGlzLmRhdGEucGV0MS5yYW5rICogbG95YWx0eSArIDEwMCkudG9GaXhlZCgyKTtcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICByZXNlYXJjaFN0b25lKCkge1xuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgKiAwLjEpLnRvRml4ZWQoMik7XG4gICAgdGhpcy5pbnRyZXN0KCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICByZXNlYXJjaExlYWYoKSB7XG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgPSArKHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsICogMikudG9GaXhlZCgyKSArIDEwMDtcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgLy8gc2xpbWVCYW5rU2xpbWVDb2luQ2FwVG90YWwoKTtcbiAgfVxuXG4gIHNsaW1lQ29pbkNhcDEoKSB7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPSBjb252ZXJ0Mihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIikudmFsdWUpO1xuICAgIC8vIGlucHV0ID0gY29udmVydDIoaW5wdXQpO1xuXG4gICAgLy8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSBzaWdtYShcbiAgICAvLyAgIDAsXG4gICAgLy8gICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCxcbiAgICAvLyAgIGZ1bmN0aW9uIChhKSB7XG4gICAgLy8gICAgIHJldHVybiBhICogMjAgLSAxMCArIDEwMDAwO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIDEwXG4gICAgLy8gKTtcbiAgICBsZXQgbGV2ZWwgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbDtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSA9IDEwMDAwLjAgKyAxMDAwMC4wICogbGV2ZWwgKyAxMC4wICogTWF0aC5wb3cobGV2ZWwsIDIuMCk7XG5cbiAgICB0aGlzLnNsaW1lQ29pbkNhcDFDb3N0KCk7XG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgc2xpbWVDb2luQ2FwMigpIHtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZTtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSA9XG4gICAgICBzaWdtYShcbiAgICAgICAgMCxcbiAgICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwsXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGEgKiAyMCAtIDEwO1xuICAgICAgICB9LFxuICAgICAgICAxMFxuICAgICAgKSArIDEwMDtcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5jb3N0ID0gMTAwMDAwMDAwMDAuMCAqIE1hdGgucG93KDIuMCwgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwpO1xuXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgc2xpbWVDb2luQ2FwVG90YWwoKSB7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsID1cbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlICpcbiAgICAgICh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZSAvIDEwMCkgKlxuICAgICAgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlIC8gMTAwKSAqXG4gICAgICAodGhpcy5kYXRhLnBldDEucGFzc2l2ZSAvIDEwMCk7XG5cbiAgICB0aGlzLmludHJlc3QoKTtcbiAgfVxuXG4gIGludHJlc3QoKSB7XG4gICAgbGV0IGludHJlc3RQZXJjZW50ID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4wMDE7XG5cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDApIHtcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDI1O1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDApIHtcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDU7XG4gICAgfVxuICAgIHRoaXMuZGF0YS5pbnRyZXN0ID0gaW50cmVzdFBlcmNlbnQgKiB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWw7XG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5pbnRyZXN0IC8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgLT0gTWF0aC5yb3VuZCh0aGlzLmRhdGEubXVsdGlwbGllciAqIDAuMTUpO1xuICAgIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xuICB9XG5cbiAgc2xpbWVDb2luQ2FwMUNvc3QoKSB7XG4gICAgLy8gaWYgKChkb3VibGUpIHRoaXMubGV2ZWwudmFsdWUgPj0gNTAwIDAwMCAwMDAuMClcbiAgICAvLyByZXR1cm4gMUUrMTUgKiB0aGlzLkNvc3RNb2RpZmllcigpO1xuXG4gICAgLy8gNTAwVFxuICAgIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjdcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMDAwMDApIHtcbiAgICAgIC8vIDEwMFRcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyNlxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAvLyA1MFRcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTI1XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwMDApIHtcbiAgICAgIC8vIDEwVFxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyNFxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyM1xuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTIyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTIxXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjBcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMTlcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UxOFxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UxN1xuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTE2XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTE1XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMTAwVFxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxMFRcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxVFxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsICogMTAwMDAgKyAxMDAwMDtcbiAgICB9IC8vIG5lZWQgdG8gZmluZCBzb2x1dGlvbiBmb3IgbGVzcyB0aGFuIDEwTSB1cGdyYWRlc1xuICB9XG59XG5cbmV4cG9ydCB7IFNsaW1lQmFuayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZFRhYiwgbG9hZEZyb21GaWxlLCBhZGRFdmVudCwgcmVzdGFydCwgc2F2ZVRvRmlsZSB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBBbnZpbCB9IGZyb20gXCIuL2FudmlsLmpzXCI7XHJcbi8vIGltcG9ydCB7IGV4cGVkaXRpb25Mb2FkIH0gZnJvbSBcIi4vZXhwZWRpdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBTbGltZUJhbmsgfSBmcm9tIFwiLi9zbGltZWJhbmsuanNcIjtcclxuaW1wb3J0IHsgR2VhciB9IGZyb20gXCIuL2dlYXIvZ2Vhci5qc1wiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgdmVyc2lvbiA9IFwiMC4xLjJcIjtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIGZuKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICB9XHJcbn1cclxuXHJcbnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyBzdGFydCB1cFxyXG4gIGxvYWQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gIC8vIGN1cnJlbnQgdGFiXHJcbiAgdmFyIHRhYiA9IDA7XHJcbiAgY29uc3QgdGFiX2xpc3QgPSBbXHJcbiAgICB7IGlkOiBcInNsaW1lQmFua1wiLCBuYW1lOiBcIlNsaW1lIEJhbmsgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImxhYlwiLCBuYW1lOiBcIkxhYiBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiYW52aWxcIiwgbmFtZTogXCJBbnZpbCBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiZXhwZWRpdGlvblwiLCBuYW1lOiBcIkV4cGVkaXRpb24gQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImdlYXJcIiwgbmFtZTogXCJHZWFyIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJzZXR0aW5nc1wiLCBuYW1lOiBcIlNldHRpbmdzXCIgfSxcclxuICBdO1xyXG5cclxuICAvLyBjb25zdCB0YWJfbGlzdCA9IFtcInNsaW1lLWJhbmtcIiwgXCJsYWJcIiwgXCJhbnZpbFwiLCBcImV4cGVkaXRpb25cIiwgXCJzZXR0aW5nc1wiXTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpKSB7XHJcbiAgICB0YWJfbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIC8vIGFkZEV2ZW50KGVsZW1lbnQuaWQsIFwiY2xpY2tcIiwgY2hhbmdlVGFiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5pZCk7XHJcbiAgICAgIC8vIHRhYiA9IGVsZW1lbnQgKyBcIi1jYWxjdWxhdG9yXCI7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYWJcIikgPT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgIGxvYWRUYWIoZWxlbWVudC5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGxvYWRpbmdcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2xpbWVCYW5rXCIpIHtcclxuICAgICAgICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJhbnZpbFwiKSB7XHJcbiAgICAgICAgICAgIG5ldyBBbnZpbCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJnZWFyXCIpIHtcclxuICAgICAgICAgICAgbmV3IEdlYXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2V0dGluZ3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIiwgXCJjaGFuZ2VcIiwgbG9hZEZyb21GaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5zYXZlVG9GaWxlXCIsIFwiY2xpY2tcIiwgc2F2ZVRvRmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgc2F2ZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5yZXN0YXJ0XCIsIFwiY2xpY2tcIiwgcmVzdGFydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVzdGFydFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5pbm5lckhUTUwgPSBcIklFSDJjYWxjID4gXCIgKyBlbGVtZW50Lm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCkuc3R5bGUuY29sb3IgPSBcIiNmMmUwMDlcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBcInNsaW1lQmFua1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rXCIpLnN0eWxlLmNvbG9yID0gXCIjZjJlMDA5XCI7XHJcbiAgICBsb2FkVGFiKFwic2xpbWVCYW5rXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsc2UgaW4gbG9hZCB8IGFmdGVyIEluaXRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gQW52aWwgbG9hZGluZ1xyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIsIDEpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLW5pdHJvLXNwZWVkXCIpLnZhbHVlID1cclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiKTtcclxuICAvLyB9XHJcbiAgLy8gYW52aWwgbG9hZCBuZWVkIHJlZmFjdG9yXHJcblxyXG4gIC8vIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAvLyAgIHZhciBpZCA9IDA7XHJcbiAgLy8gICBpZCA9IFwiYW52aWwtZHVuZ2Vvbi1cIiArIGkgKyBcIi10aW1lXCI7XHJcbiAgLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpID09PSBudWxsKSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBjYWxjQW52aWwoKTtcclxuICAvLyBjYWxjRXhwZWRpdGlvbigpO1xyXG4gIC8vIGV4cGVkaXRpb25Mb2FkKCk7XHJcbiAgLy8gbG9hZGluZyB2YWx1ZXMgZnJvbSBsb2NhbFN0b3JhZ2UgZWxzZSBzZXR0aW5nIHZhbHVlcyBhcyAwXHJcbiAgLy8gY29uc3QgbGlzdCA9IFtcclxuICAvLyAgICdhbnZpbC1mb3gtZHVuZ2Vvbi0xLXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tMi10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTMtdGltZScsXHJcbiAgLy8gJ2FudmlsLWZveC1kdW5nZW9uLTQtdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi01LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0xLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0yLXRpbWUnLFxyXG4gIC8vICdhbnZpbC1iYXQtZHVuZ2Vvbi0zLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi00LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi01LXRpbWUnXTtcclxuICAvLyBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlIH07XHJcbiAgLy8gY29uc29sZS5sb2coaXRlbXMpO1xyXG4gIC8vIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAvLyAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgLy8gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlbGVtZW50KSA9PT0gbnVsbCkge3NsaW1lQmFua1Jlc2VhcmNoU3RvbmUoMCk7fVxyXG4gIC8vICBlbHNlIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsJykpO31cclxuICAvLyB9KTtcclxuXHJcbiAgLy8gU2xpbWUgQmFuayBsb2FkaW5nXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZShcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaExlYWYoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLWxlYWYtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoXHJcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpID09PSBudWxsXHJcbiAgLy8gKSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKSA9PT0gbnVsbFxyXG4gIC8vICkge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMigwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgLy8gc2xpbWVCYW5rSW50cmVzdCgpO1xyXG4gIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xyXG4gIC8vIGRlYnVnXHJcbiAgLy8gZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeyAuLi5sb2NhbFN0b3JhZ2UgfSkpIHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKS5pbm5lckhUTUwgKz0gYDxpPiR7a2V5fTo8L2k+IDxiPiR7dmFsdWV9PC9iPjxicj5gO1xyXG4gIC8vIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
