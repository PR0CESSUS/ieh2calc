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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQ0FBaUMsbUJBQU8sQ0FBQyxzQ0FBZTtBQUN4RCwwQ0FBMEMsbUJBQU8sQ0FBQywrSEFBNkQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGFBQWEscUJBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0NBQW9DLG1CQUFtQixzQkFBc0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUJBQXFCO0FBQ3JFLHdCQUF3QixJQUFJLElBQUksTUFBTTtBQUN0QztBQUNBO0FBQ0Esd0JBQXdCLElBQUksSUFBSSxNQUFNO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQVdFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLeUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxJQUFJLFdBQVcsMEJBQTBCLEdBQUc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVyxJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUSxJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04saURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BtQnVDO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RnQmlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEMsaUJBQWlCLG9CQUFvQjtBQUNyQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsbURBQU87QUFDckUsK0RBQStELG1EQUFPO0FBQ3RFO0FBQ0E7QUFDQSwyREFBMkQsbURBQU87QUFDbEUsK0RBQStELG1EQUFPO0FBQ3RFO0FBQ0E7QUFDQSw4REFBOEQsbURBQU87QUFDckU7QUFDQSw2REFBNkQsbURBQU87QUFDcEUsNkRBQTZELG1EQUFPO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5UHJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05tRjtBQUNoRDtBQUNuQyxZQUFZLGlCQUFpQjtBQUNjO0FBQ0w7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQWdEO0FBQ3RELE1BQU0sbUNBQW1DO0FBQ3pDLE1BQU0sdUNBQXVDO0FBQzdDLE1BQU0saURBQWlEO0FBQ3ZELE1BQU0scUNBQXFDO0FBQzNDLE1BQU0sa0NBQWtDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFRLG9DQUFvQyxvREFBWTtBQUNwRTtBQUNBLFlBQVksb0RBQVEsaUNBQWlDLGtEQUFVO0FBQy9EO0FBQ0EsWUFBWSxvREFBUSw4QkFBOEIsK0NBQU87QUFDekQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUksbURBQU87QUFDWDtBQUNBLFVBQVUsb0RBQVM7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELFlBQVk7QUFDWixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFLHlCQUF5QixJQUFJLElBQUksTUFBTTtBQUN2QywyREFBMkQsSUFBSSxXQUFXLE1BQU07QUFDaEY7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2NvbW1vbi1leHBvc2VkLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldEdsb2JhbFRoaXMuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvYW52aWwuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvZ2Vhci5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9nZWFyL29wdGltaXplci5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9zbGltZWJhbmsuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4vY29tbW9uLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbnZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fLmNoYW5nZVRhYlxuaWYgKHR5cGVvZiBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID09PSAndW5kZWZpbmVkJykgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fO1xuZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1tleHBvc2VzLWxvYWRlcl0gVGhlIFwiY2hhbmdlVGFiXCIgdmFsdWUgZXhpc3RzIGluIHRoZSBnbG9iYWwgc2NvcGUsIGl0IG1heSBub3QgYmUgc2FmZSB0byBvdmVyd3JpdGUgaXQsIHVzZSB0aGUgXCJvdmVycmlkZVwiIG9wdGlvbicpXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cbiAgdmFyIGc7XG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZyA9IHRoaXMgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZztcbn0oKTsiLCJjbGFzcyBBbnZpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBcImFudmlsXCI7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIG5pdHJvOiAxLjAsXHJcbiAgICAgIGR1bmdlb246IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImhlcm9sZXZlbFwiLFxyXG4gICAgICAgICAgZGlmZjogMSxcclxuICAgICAgICAgIHRpbWU6IDEsXHJcbiAgICAgICAgICByZXdhcmQ6IDE4MDAwLFxyXG4gICAgICAgICAgb3JiOiAzNjAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJoZXJvbGV2ZWxcIixcclxuICAgICAgICAgIGRpZmY6IDEsXHJcbiAgICAgICAgICB0aW1lOiAxLFxyXG4gICAgICAgICAgcmV3YXJkOiAxODAwMCxcclxuICAgICAgICAgIG9yYjogMzYwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiaGVyb2xldmVsXCIsXHJcbiAgICAgICAgICBkaWZmOiAxLFxyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHJld2FyZDogMTgwMDAsXHJcbiAgICAgICAgICBvcmI6IDM2MDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkgPT09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC1jYWxjdWxhdG9yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmV3YXJkKG5hbWUpIHtcclxuICAgIGxldCByZXdhcmQgPSAwO1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgIGNhc2UgXCJoZXJvbGV2ZWxcIjpcclxuICAgICAgY2FzZSBcInJlcXVpcmVkYWJpbGl0eVwiOlxyXG4gICAgICAgIHJld2FyZCA9IDU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJoZXJvbGV2ZWwyXCI6XHJcbiAgICAgIGNhc2UgXCJyZXF1aXJlZGFiaWxpdHkyXCI6XHJcbiAgICAgICAgcmV3YXJkID0gMTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwcm9maWNpZW5jeWdhaW5cIjpcclxuICAgICAgICByZXdhcmQgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZXF1aXBtZW50ZWZmZWN0XCI6XHJcbiAgICAgICAgcmV3YXJkID0gMC4xO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicHVyaWZ5b2ZjdXJzZWRlZmZlY3RcIjpcclxuICAgICAgICByZXdhcmQgPSAwLjAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicHJvZmljaWVuY3lnYWluMlwiOlxyXG4gICAgICAgIHJld2FyZCA9IDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJlcXVpcG1lbnRlZmZlY3QyXCI6XHJcbiAgICAgICAgcmV3YXJkID0gMC4yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXdhcmQ7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgdGhpcy5kYXRhLm5pdHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZTtcclxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5kYXRhLmR1bmdlb24pIHtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi5uYW1lXCIpLnZhbHVlO1xyXG4gICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5kaWZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLmRpZmZcIikudmFsdWU7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLnRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiKS52YWx1ZTtcclxuICAgICAgbGV0IHBlcmhvdXIgPSAzNjAwIC8gdGhpcy5kYXRhLmR1bmdlb25baV0udGltZTtcclxuICAgICAgbGV0IHJld2FyZCA9IHRoaXMuZ2V0UmV3YXJkKHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUpO1xyXG4gICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5yZXdhcmQgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgIHBlcmhvdXIgKiByZXdhcmQgKiB0aGlzLmRhdGEuZHVuZ2VvbltpXS5kaWZmICogdGhpcy5kYXRhLm5pdHJvXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm9yYiA9IE1hdGgucm91bmQocGVyaG91ciAqIHRoaXMuZGF0YS5uaXRybyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWUgPSB0aGlzLmRhdGEubml0cm87XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLmRhdGEuZHVuZ2Vvbikge1xyXG4gICAgICBsZXQgbmFtZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi5uYW1lXCI7XHJcbiAgICAgIGxldCB0aW1lID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIjtcclxuICAgICAgbGV0IGRpZmYgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIuZGlmZlwiO1xyXG4gICAgICBsZXQgcmV3YXJkID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnJld2FyZFwiO1xyXG4gICAgICBsZXQgb3JiID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm9yYlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKS52YWx1ZSA9IHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbWUpLnZhbHVlID0gdGhpcy5kYXRhLmR1bmdlb25baV0udGltZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlmZikudmFsdWUgPSB0aGlzLmRhdGEuZHVuZ2VvbltpXS5kaWZmO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXdhcmQpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5kdW5nZW9uW2ldLnJld2FyZDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3JiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEuZHVuZ2VvbltpXS5vcmI7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5kYXRhLmR1bmdlb25baV0ubmFtZSA9PSBcInByb2ZpY2llbmN5Z2FpbjJcIiB8fFxyXG4gICAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUgPT0gXCJwcm9maWNpZW5jeWdhaW5cIiB8fFxyXG4gICAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2ldLm5hbWUgPT0gXCJlcXVpcG1lbnRlZmZlY3QyXCIgfHxcclxuICAgICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5uYW1lID09IFwiZXF1aXBtZW50ZWZmZWN0XCIgfHxcclxuICAgICAgICB0aGlzLmRhdGEuZHVuZ2VvbltpXS5uYW1lID09IFwicHVyaWZ5b2ZjdXJzZWRlZmZlY3RcIlxyXG4gICAgICApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXdhcmQpLmlubmVySFRNTCArPSBcIiVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQW52aWwgfTtcclxuIiwiZnVuY3Rpb24gc2F2ZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmlkLCB0aGlzLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyh0aGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdGFydCgpIHtcclxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnQoaWQsIGV2ZW50LCBjYWxsYmFjaykge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRhYihpbnB1dCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBpbnB1dCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRUYWIodGFiKSB7XHJcbiAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgLy8gaHR0cHM6Ly9wcm8tY2Vzcy11cy5naXRodWIuaW8vaWVoMmNhbGMvXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Byby1jZXNzLXVzL2llaDJjYWxjL3Jhdy9tYXN0ZXIvaHRtbC9zbGltZUJhbmsuaHRtbFxyXG4gIC8vIGxldCBmaWxlID0gXCIuLi9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG4gIGxldCBmaWxlID0gXCIuLi9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdCAhPSBcIjEyNy4wLjAuMTozMDAwXCIpIHtcclxuICAgIGZpbGUgPSBcImh0dHBzOi8vcHJvLWNlc3MtdXMuZ2l0aHViLmlvL2llaDJjYWxjL2h0bWwvXCIgKyB0YWIgKyBcIi5odG1sXCI7XHJcbiAgfVxyXG5cclxuICAvLyBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpblwiKTtcclxuICAvLyBteUhlYWRlcnMuYXBwZW5kKFxyXG4gIC8vICAgXCJDb250ZW50LVNlY3VyaXR5LVBvbGljeTpcIixcclxuICAvLyAgIFwiZGVmYXVsdC1zcmMgJ3NlbGYnOyBzdHlsZS1zcmMgJ3NlbGYnICd1bnNhZmUtaW5saW5lJyAqOyBmb250LXNyYyAnc2VsZicgKjsgY29ubmVjdC1zcmMgJ3NlbGYnICo7IGltZy1zcmMgZGF0YTogKlwiXHJcbiAgLy8gKTtcclxuICBsZXQgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgLy8gcmVmZXJyZXJQb2xpY3k6IFwic2FtZS1vcmlnaW5cIixcclxuICB9O1xyXG4gIC8vIGxldCB4ID0gYXdhaXQgZmV0Y2goZmlsZSk7XHJcbiAgLy8gbGV0IHkgPSBhd2FpdCB4LnRleHQoKTtcclxuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0geTtcclxuICByZXR1cm4gZmV0Y2goZmlsZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbn1cclxuXHJcbi8vIGV4dC5nZXQgPSAodXJsKSA9PiB7XHJcbi8vICAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4vLyAgIGxldCBvcHRpb25zID0ge1xyXG4vLyAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4vLyAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbi8vICAgICAgIG1vZGU6ICdjb3JzJ1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vZmV0Y2ggZ2V0XHJcblxyXG4vLyAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4dC5nZXQoXCJodHRwOi8vZXhhbXBsZS5jb21cIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSk7IC8vIG9yIHdoYXRldmVyXHJcbi8vIH0pO1xyXG5cclxuZnVuY3Rpb24gc2lnbWEobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgaXRlcmF0b3IsIGFjY3VtdWxhdG9yID0gMCkge1xyXG4gIC8vIGxldCBhY2N1bXVsYXRvciA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IGxvd2VyQm91bmQ7IGkgPD0gdXBwZXJCb3VuZDsgKytpKSB7XHJcbiAgICBhY2N1bXVsYXRvciArPSBpdGVyYXRvcihpKTtcclxuICB9XHJcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IG5vcm1hbCBudW1iZXIgdG8gSyxNLEIsVCBhbmQgZXhwb25lbnRpYWxcclxuZnVuY3Rpb24gY29udmVydChpbnB1dCkge1xyXG4gIGlucHV0ID0gcGFyc2VGbG9hdChpbnB1dCk7XHJcbiAgdmFyIG91dHB1dCA9IDA7XHJcbiAgaWYgKGlucHV0ID09IDApIHtcclxuICAgIG91dHB1dCA9IDA7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8PSAxMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gTWF0aC5yb3VuZChpbnB1dCk7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDApLnRvRml4ZWQoMikgKyBcIktcIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMCkudG9GaXhlZCgyKSArIFwiTVwiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwKS50b0ZpeGVkKDMpICsgXCJCXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDAwMDAwMDApLnRvRml4ZWQoMikgKyBcIlRcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgb3V0cHV0ID0gaW5wdXQudG9FeHBvbmVudGlhbCgyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgayxtLGIsdCB0byBub3JtYWwgbnVtYmVyc1xyXG5mdW5jdGlvbiBjb252ZXJ0MihpbnB1dCwgbWluID0gMCwgbWF4ID0gOTk5OTk5OTk5OTk5OTk5KSB7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8sL2csIFwiLlwiKTsgLy8gY29udmVydCAsIHRvIC5cclxuICBpZiAoL15cXGQqXFwuP1xcZCskLy50ZXN0KGlucHV0KSkge1xyXG4gICAgaWYgKGlucHV0IDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0ID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfSAvLyByZXR1cm4gcm91bmRlZCBudW1iZXIgaWYgdGhlcmUgaXMgbm8gYWJicmV2aWV0ZVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgcmVnZXggPSAvKC4qKShcXEQpJC9nbTtcclxuICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcclxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvIC9nLCBcIlwiKTsgLy8gcmVtb3ZlcyBhbGwgc3BhY2VzXHJcblxyXG4gICAgaW5wdXQgPSByZWdleC5leGVjKGlucHV0KTtcclxuICAgIGxldCBvdXRwdXQgPSAwO1xyXG4gICAgaWYgKGlucHV0WzJdID09IFwidFwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiA0O1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcImJcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMztcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJtXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDI7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwia1wiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVG9GaWxlKCkge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKFxyXG4gICAgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZSwgbnVsbCwgMildLCB7XHJcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiLFxyXG4gICAgfSlcclxuICApO1xyXG4gIGEuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJJRUgyY2FsYy1kYXRhLmpzb25cIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICBhLmNsaWNrKCk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZyb21GaWxlKCkge1xyXG4gIGxldCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIikuZmlsZXNbMF07XHJcbiAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgdGV4dCA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxlLWNvbnRlbnRzXCIpLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UodGV4dCkpO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeyAuLi5KU09OLnBhcnNlKHRleHQpIH0pKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjb252ZXJ0LFxyXG4gIGNvbnZlcnQyLFxyXG4gIHNpZ21hLFxyXG4gIHJlc3RhcnQsXHJcbiAgY2hhbmdlVGFiLFxyXG4gIGxvYWRUYWIsXHJcbiAgYWRkRXZlbnQsXHJcbiAgc2F2ZVRvRmlsZSxcclxuICBsb2FkRnJvbUZpbGUsXHJcbn07XHJcbiIsImltcG9ydCB7IE9wdGltaXplciB9IGZyb20gXCIuL29wdGltaXplci5qc1wiO1xyXG5cclxuY2xhc3MgR2VhciB7XHJcbiAgbmFtZSA9IFwiZ2VhclwiO1xyXG4gIHZlcnNpb24gPSAxO1xyXG4gIGRhdGEgPSB7XHJcbiAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXHJcbiAgICBpdGVtTGV2ZWw6IDEyMCxcclxuICAgIGluY2x1ZGVNYXN0ZXJ5OiB0cnVlLFxyXG4gICAgY3Vyc2VBbnZpbDogdHJ1ZSxcclxuICAgIGxvdHRlcnk6IHRydWUsXHJcbiAgICBpdGVtU2xvdHM6IHtcclxuICAgICAgSmV3ZWxyeTogMTksXHJcbiAgICAgIEFybW9yOiAxOSxcclxuICAgICAgV2VhcG9uOiAxOSxcclxuICAgIH0sXHJcbiAgICBlbmNoYW50U2xvdHM6IDM0MixcclxuICAgIHNldEJpYXM6IDAuMDc1LFxyXG4gICAgZW5jaGFudFVzYWdlOiB7XHJcbiAgICAgIFVuaWNvcm5Lbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIEhQQWRkZXI6IFwiXCIsXHJcbiAgICAgIE1QQWRkZXI6IFwiXCIsXHJcbiAgICAgIEFUS0FkZGVyOiBcIlwiLFxyXG4gICAgICBNQVRLQWRkZXI6IFwiXCIsXHJcbiAgICAgIERFRkFkZGVyOiBcIlwiLFxyXG4gICAgICBNREVGQWRkZXI6IFwiXCIsXHJcbiAgICAgIFNQREFkZGVyOiBcIlwiLFxyXG4gICAgICBIUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIE1QTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgQVRLTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgTUFUS011bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIERFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIE1ERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBBVEtQcm9wb3Rpb246IFwiZHBzXCIsXHJcbiAgICAgIE1BVEtQcm9wb3Rpb246IFwiXCIsXHJcbiAgICAgIERFRlByb3BvdGlvbjogXCJcIixcclxuICAgICAgTURFRlByb3BvdGlvbjogXCJcIixcclxuICAgICAgRmlyZVJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIEljZVJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIFRodW5kZXJSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBMaWdodFJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIERhcmtSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgICBQaHlzaWNhbEFic29ycHRpb246IFwiXCIsXHJcbiAgICAgIEZpcmVBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBJY2VBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBUaHVuZGVyQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgTGlnaHRBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgICBEYXJrQWJzb3JwdGlvbjogXCJcIixcclxuICAgICAgRGVidWZmUmVzaXN0YW5jZTogXCJcIixcclxuICAgICAgRXF1aXBtZW50RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgU2xpbWVEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBNYWdpY1NsaW1lRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgU3BpZGVyRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgQmF0RHJvcENoYW5jZTogXCJcIixcclxuICAgICAgRmFpcnlEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBGb3hEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBEZXZpbEZpc2hEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBUcmVhbnREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBGbGFtZVRpZ2VyRHJvcENoYW5jZTogXCJcIixcclxuICAgICAgVW5pY29ybkRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICAgIENvbG9yTWF0ZXJpYWxEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgICBQaHlzaWNhbENyaXRpY2FsOiBcImRwc1wiLFxyXG4gICAgICBNYWdpY2FsQ3JpdGljYWw6IFwiXCIsXHJcbiAgICAgIEVYUEdhaW46IFwiZ2FpbnNcIixcclxuICAgICAgU2tpbGxQcm9maWNpZW5jeTogXCJnYWluc1wiLFxyXG4gICAgICBFcXVpcG1lbnRQcm9maWNpZW5jeTogXCJnYWluc1wiLFxyXG4gICAgICBNb3ZlU3BlZWRNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBHb2xkR2FpbjogXCJcIixcclxuICAgICAgU3RvbmVHYWluOiBcIlwiLFxyXG4gICAgICBDcnlzdGFsR2FpbjogXCJcIixcclxuICAgICAgTGVhZkdhaW46IFwiXCIsXHJcbiAgICAgIFdhcnJpb3JTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBXaXphcmRTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBBbmdlbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICAgIFRoaWVmU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgQXJjaGVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgICAgVGFtZXJTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBBbGxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgICBTbGltZUtub3dsZWRnZTogXCJcIixcclxuICAgICAgTWFnaWNTbGltZUtub3dsZWRnZTogXCJcIixcclxuICAgICAgU3BpZGVyS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBCYXRLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIEZhaXJ5S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBGb3hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICAgIERldmlsRmlzaEtub3dsZWRnZTogXCJcIixcclxuICAgICAgVHJlYW50S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBGbGFtZVRpZ2VyS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgICBQaHlzaWNhbERhbWFnZTogXCJcIixcclxuICAgICAgRmlyZURhbWFnZTogXCJcIixcclxuICAgICAgSWNlRGFtYWdlOiBcImRwc1wiLFxyXG4gICAgICBUaHVuZGVyRGFtYWdlOiBcIlwiLFxyXG4gICAgICBMaWdodERhbWFnZTogXCJcIixcclxuICAgICAgRGFya0RhbWFnZTogXCJcIixcclxuICAgICAgSHBSZWdlbjogXCJcIixcclxuICAgICAgTXBSZWdlbjogXCJcIixcclxuICAgICAgVGFtaW5nUG9pbnQ6IFwiXCIsXHJcbiAgICAgIFdhcnJpb3JTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBXaXphcmRTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBBbmdlbFNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICAgIFRoaWVmU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgQXJjaGVyU2tpbGxSYW5nZTogXCJcIixcclxuICAgICAgVGFtZXJTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgICBUb3duTWF0R2FpbjogXCJnYWluc1wiLFxyXG4gICAgICBUb3duTWF0QXJlYUNsZWFyR2FpbjogXCJcIixcclxuICAgICAgUmViaXJ0aFBvaW50R2FpbjE6IFwiZ2FpbnNcIixcclxuICAgICAgUmViaXJ0aFBvaW50R2FpbjI6IFwiZ2FpbnNcIixcclxuICAgICAgUmViaXJ0aFBvaW50R2FpbjM6IFwiZ2FpbnNcIixcclxuICAgICAgQ3JpdGljYWxEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgICAgIEJsZXNzaW5nRWZmZWN0OiBcImRwc1wiLFxyXG4gICAgICBNb3ZlU3BlZWRBZGRlcjogXCJcIixcclxuICAgICAgUGV0RVhQR2FpbjogXCJcIixcclxuICAgICAgTG95YWx0eVBvaW50R2FpbjogXCJcIixcclxuICAgICAgQ2F0YWx5c3REb3VibGVDcml0aWNhbENoYW5jZTogXCJcIixcclxuICAgICAgV2FycmlvclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIFdpemFyZFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIEFuZ2VsU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgICAgVGhpZWZTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBBcmNoZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgICBUYW1lclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICAgIEhwUmVnZW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBNcFJlZ2VuTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgQXJtb3JlZEZ1cnk6IFwiXCIsXHJcbiAgICAgIFdhcmRlZEZ1cnk6IFwiZHBzXCIsXHJcbiAgICAgIFBldFBoeXNpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICAgIFBldE1hZ2ljYWxDcml0aWNhbENoYW5jZTogXCJcIixcclxuICAgICAgUGV0Q3JpdGljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICAgIFBldERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICAgIFN0b25lVG93blJlc2VhcmNoUG93ZXI6IFwiXCIsXHJcbiAgICAgIENyeXN0YWxUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgICAgTGVhZlRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgICBHdWlsZEVYUEdhaW46IFwiZ2FpbnNcIixcclxuICAgICAgU1BETXVsdGlwbGllcjogXCJcIixcclxuICAgICAgQ3JpdGljYWxEYW1hZ2VNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgICBTa2lsbFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgICBFcXVpcG1lbnRQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgICAgRVhQR2Fpbk11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgICAgR29sZEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBQaHlzaWNhbERhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEZpcmVEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBJY2VEYW1hZ2VNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgICBUaHVuZGVyRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgTGlnaHREYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBEYXJrRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgVGFtaW5nUG9pbnRNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgICBQZXRFWFBHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgICAgTG95YWx0eVBvaW50R2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICAgIEJsZXNzaW5nRWZmZWN0TXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgICAgUGh5c2ljYWxDcml0aWNhbE11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICAgIE1hZ2ljYWxDcml0aWNhbE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkgPT09IG51bGwpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS52ZXJzaW9uIDwgdGhpcy52ZXJzaW9uKSB7XHJcbiAgICAgIGFsZXJ0KFwibWlzc2luZyB2ZXJzaW9uIG1pZ3JhdGlvblwiKTtcclxuICAgICAgLy90aGlzLmRhdGEudmVyc2lvbiA9IHRoaXMudmVyc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy51cGRhdGVEZWZhdWx0VmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVuY2hhbnRVc2FnZVRlbXBsYXRlID0gKGlkLCBuYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWVTaG9ydCA9IG5hbWVcclxuICAgICAgICAucmVwbGFjZShcIkFkZGVyXCIsIFwiK1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiRWZmZWN0TXVsdGlwbGllclwiLCBcIiVcIilcclxuICAgICAgICAucmVwbGFjZShcIk11bHRpcGxpZXJcIiwgXCIlXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJUb3duUmVzZWFyY2hQb3dlclwiLCBcIlJlc2VhcmNoXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJQcm9maWNpZW5jeVwiLCBcIlByb2ZcIilcclxuICAgICAgICAucmVwbGFjZShcIlNraWxsTGV2ZWxcIiwgXCJTa2lsbFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUmVzaXN0YW5jZVwiLCBcIlJlc1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiRHJvcENoYW5jZVwiLCBcIkRyb3BcIilcclxuICAgICAgICAucmVwbGFjZShcIkNyaXRpY2FsXCIsIFwiQ3JpdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiRGFtYWdlXCIsIFwiRG1nXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJTa2lsbEVmZmVjdFJhbmdlXCIsIFwiQW9lXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJTa2lsbFJhbmdlXCIsIFwiUmFuZ2VcIilcclxuICAgICAgICAucmVwbGFjZShcIktub3dsZWRnZVwiLCBcIkRtZ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiUGV0UGh5c2ljYWxcIiwgXCJQZXRQaHlzXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJQZXRNYWdpY2FsXCIsIFwiUGV0TWFnXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJDYXRhbHlzdERvdWJsZUNyaXRDaGFuY2VcIiwgXCJDYXRhRGJsQ3JpdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiQ3JpdENoYW5jZVwiLCBcIkNyaXRcIilcclxuICAgICAgICAucmVwbGFjZShcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIsIFwiVG93bk1hdCtcIilcclxuICAgICAgICAucmVwbGFjZShcIlRvd25NYXRHYWluXCIsIFwiVG93bk1hdCVcIilcclxuICAgICAgICAucmVwbGFjZShcIkFic29ycHRpb25cIiwgXCJBYnNvcnBcIilcclxuICAgICAgICAucmVwbGFjZShcIkNvbG9yTWF0ZXJpYWxcIiwgXCJSYXJlTWF0XCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJSZWJpcnRoUG9pbnRcIiwgXCJSQlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiTG95YWx0eVBvaW50R2FpblwiLCBcIkxQR1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiVGFtaW5nUG9pbnRcIiwgXCJUUEdcIilcclxuICAgICAgICAucmVwbGFjZShcIkVxdWlwbWVudFwiLCBcIkVRXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIGA8bGFiZWwgdGl0bGU9XCIke25hbWV9XCI+JHtuYW1lU2hvcnR9IDxpbnB1dCBpZD1cImVuY2hhbnRVc2FnZS4ke2lkfVwiIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjVcIi8+PC9sYWJlbD5gO1xyXG4gICAgfTtcclxuICAgIGxldCBlbmNoYW50VXNhZ2VIVE1MID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5kYXRhLmVuY2hhbnRVc2FnZSkge1xyXG4gICAgICBlbmNoYW50VXNhZ2VIVE1MICs9IGVuY2hhbnRVc2FnZVRlbXBsYXRlKGlkLCBpZCk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VuY2hhbnRVc2FnZUlucHV0V3JhcHBlclwiKS5pbm5lckhUTUwgPVxyXG4gICAgICBlbmNoYW50VXNhZ2VIVE1MO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJJbnB1dFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLmlucHV0Q2hhbmdlZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3B0aW1pemUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dENoYW5nZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkO1xyXG4gICAgY29uc3QgaWRQYXJ0cyA9IGlkLnNwbGl0KFwiLlwiKTtcclxuXHJcbiAgICBzd2l0Y2ggKGlkUGFydHNbMF0pIHtcclxuICAgICAgY2FzZSBcIml0ZW1MZXZlbFwiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5pdGVtTGV2ZWwgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW5jbHVkZU1hc3RlcnlcIjpcclxuICAgICAgICB0aGlzLmRhdGEuaW5jbHVkZU1hc3RlcnkgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImN1cnNlQW52aWxcIjpcclxuICAgICAgICB0aGlzLmRhdGEuY3Vyc2VBbnZpbCA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibG90dGVyeVwiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5sb3R0ZXJ5ID0gdGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpdGVtU2xvdHNcIjpcclxuICAgICAgICB0aGlzLmRhdGEuaXRlbVNsb3RzW2lkUGFydHNbMV1dID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVuY2hhbnRTbG90c1wiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5lbmNoYW50U2xvdHMgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2V0Qmlhc1wiOlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXRCaWFzID0gcGFyc2VGbG9hdCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW5jaGFudFVzYWdlXCI6XHJcbiAgICAgICAgdGhpcy5kYXRhLmVuY2hhbnRVc2FnZVtpZFBhcnRzWzFdXSA9IHRhcmdldC52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiaW5wdXRDaGFuZ2VkIGZvciB1bmtub3duIGlkXCIsIGlkLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGVmYXVsdFZhbHVlcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGlucHV0LmlkO1xyXG4gICAgICBjb25zdCBpZFBhcnRzID0gaWQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICBzd2l0Y2ggKGlkUGFydHNbMF0pIHtcclxuICAgICAgICBjYXNlIFwiaXRlbUxldmVsXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5pdGVtTGV2ZWw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiaW5jbHVkZU1hc3RlcnlcIjpcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEuaW5jbHVkZU1hc3Rlcnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY3Vyc2VBbnZpbFwiOlxyXG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRoaXMuZGF0YS5jdXJzZUFudmlsO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImxvdHRlcnlcIjpcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEubG90dGVyeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpdGVtU2xvdHNcIjpcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLml0ZW1TbG90c1tpZFBhcnRzWzFdXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbmNoYW50U2xvdHNcIjpcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLmVuY2hhbnRTbG90cztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzZXRCaWFzXCI6XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5zZXRCaWFzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImVuY2hhbnRVc2FnZVwiOlxyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuZW5jaGFudFVzYWdlW2lkUGFydHNbMV1dO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1cGRhdGVIVE1MVmFsdWVzIGZvciB1bmtub3duIGlkXCIsIGlkLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3B0aW1pemVCdXR0b24oZW5hYmxlKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wdGltaXplXCIpO1xyXG4gICAgaWYgKGVuYWJsZSkge1xyXG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tZ3JleVwiKTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tb3JhbmdlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tb3JhbmdlXCIpO1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1ncmV5XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyT3B0aW1pemVyUmVzdWx0KG9wdGltaXplcikge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgbGV0IGhpZ2hlc3RJbmRleCA9IE1hdGgubWF4KFxyXG4gICAgICBvcHRpbWl6ZXIuYmVzdEl0ZW1zLldlYXBvbi5sZW5ndGgsXHJcbiAgICAgIG9wdGltaXplci5iZXN0SXRlbXMuQXJtb3IubGVuZ3RoLFxyXG4gICAgICBvcHRpbWl6ZXIuYmVzdEl0ZW1zLkpld2VscnkubGVuZ3RoXHJcbiAgICApO1xyXG4gICAgbGV0IGl0ZW07XHJcbiAgICBmb3IgKGxldCBiZXN0SXRlbUluZGV4ID0gMDsgYmVzdEl0ZW1JbmRleCA8IGhpZ2hlc3RJbmRleDsgYmVzdEl0ZW1JbmRleCsrKSB7XHJcbiAgICAgIGl0ZW0gPSBvcHRpbWl6ZXIuYmVzdEl0ZW1zLldlYXBvbltiZXN0SXRlbUluZGV4XTtcclxuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cInRoaXJkXCI+XHJcbiAgICAgICAgJHtpdGVtID8gaXRlbS5raW5kIDogXCItXCJ9XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICBpdGVtID0gb3B0aW1pemVyLmJlc3RJdGVtcy5Bcm1vcltiZXN0SXRlbUluZGV4XTtcclxuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cInRoaXJkXCI+XHJcbiAgICAgICAgJHtpdGVtID8gaXRlbS5raW5kIDogXCItXCJ9XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICBpdGVtID0gb3B0aW1pemVyLmJlc3RJdGVtcy5KZXdlbHJ5W2Jlc3RJdGVtSW5kZXhdO1xyXG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwidGhpcmRcIj5cclxuICAgICAgICAke2l0ZW0gPyBpdGVtLmtpbmQgOiBcIi1cIn1cclxuICAgICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemVSZXN1bHRJdGVtc1wiKS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgIGh0bWwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlZmZlY3RLaW5kIGluIG9wdGltaXplci5iZXN0RW5jaGFudHMpIHtcclxuICAgICAgaWYgKG9wdGltaXplci5iZXN0RW5jaGFudHNbZWZmZWN0S2luZF0gPiAwKSB7XHJcbiAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImhhbHZlXCI+XHJcbiAgICAgICAgICAke2VmZmVjdEtpbmR9OiAke29wdGltaXplci5iZXN0RW5jaGFudHNbZWZmZWN0S2luZF19XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpbWl6ZVJlc3VsdEVuY2hhbnRzXCIpLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgaHRtbCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IHNldEtpbmQgaW4gb3B0aW1pemVyLnNldEl0ZW1zKSB7XHJcbiAgICAgIGlmIChvcHRpbWl6ZXIuc2V0SXRlbXNbc2V0S2luZF0uYWN0aXZlU2V0SXRlbXMgPiAwKSB7XHJcbiAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImhhbHZlXCI+XHJcbiAgICAgICAgICAke3NldEtpbmR9OiAke29wdGltaXplci5zZXRJdGVtc1tzZXRLaW5kXS5hY3RpdmVTZXRJdGVtc31cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplUmVzdWx0U2V0SXRlbXNcIikuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICB0aGlzLnJlbmRlck9wdGltaXplclJlc3VsdEVuY2h0YW50U3ByZWFkKG9wdGltaXplcik7XHJcbiAgfVxyXG5cclxuICBjb2xvcnMgPSBbXHJcbiAgICBcIiMzMzY2Q0NcIixcclxuICAgIFwiI0RDMzkxMlwiLFxyXG4gICAgXCIjRkY5OTAwXCIsXHJcbiAgICBcIiMxMDk2MThcIixcclxuICAgIFwiIzk5MDA5OVwiLFxyXG4gICAgXCIjM0IzRUFDXCIsXHJcbiAgICBcIiMwMDk5QzZcIixcclxuICAgIFwiI0RENDQ3N1wiLFxyXG4gICAgXCIjNjZBQTAwXCIsXHJcbiAgICBcIiNCODJFMkVcIixcclxuICAgIFwiIzMxNjM5NVwiLFxyXG4gICAgXCIjOTk0NDk5XCIsXHJcbiAgICBcIiMyMkFBOTlcIixcclxuICAgIFwiI0FBQUExMVwiLFxyXG4gICAgXCIjNjYzM0NDXCIsXHJcbiAgICBcIiNFNjczMDBcIixcclxuICAgIFwiIzhCMDcwN1wiLFxyXG4gICAgXCIjMzI5MjYyXCIsXHJcbiAgICBcIiM1NTc0QTZcIixcclxuICAgIFwiIzNCM0VBQ1wiLFxyXG4gICAgXCIjRkYwMEZGXCIsXHJcbiAgICBcIiNGRjY2MDBcIixcclxuICAgIFwiI0M3MTU4NVwiLFxyXG4gICAgXCIjMDA3QkE3XCIsXHJcbiAgICBcIiNGRjdGNTBcIixcclxuICAgIFwiI0RDMTQzQ1wiLFxyXG4gICAgXCIjMDBGRjdGXCIsXHJcbiAgICBcIiNDMEMwQzBcIixcclxuICAgIFwiIzAwODA4MFwiLFxyXG4gICAgXCIjOEIwMDhCXCIsXHJcbiAgICBcIiNCMDE3MUZcIixcclxuICAgIFwiIzY5Njk2OVwiLFxyXG4gICAgXCIjNDgzRDhCXCIsXHJcbiAgICBcIiMwMDgwMDBcIixcclxuICAgIFwiI0EwNTIyRFwiLFxyXG4gICAgXCIjRkZDMENCXCIsXHJcbiAgICBcIiNBREQ4RTZcIixcclxuICAgIFwiIzg3Q0VGQVwiLFxyXG4gICAgXCIjREE3MEQ2XCIsXHJcbiAgICBcIiNGMDgwODBcIixcclxuICAgIFwiI0UwRkZGRlwiLFxyXG4gICAgXCIjRkE4MDcyXCIsXHJcbiAgICBcIiNGRkU0RTFcIixcclxuICAgIFwiI0JBNTVEM1wiLFxyXG4gICAgXCIjRkZFQkNEXCIsXHJcbiAgICBcIiM3RkZGRDRcIixcclxuICAgIFwiI0YwRTY4Q1wiLFxyXG4gICAgXCIjRDJCNDhDXCIsXHJcbiAgICBcIiNBRkVFRUVcIixcclxuICAgIFwiI0ZGNjM0N1wiLFxyXG4gICAgXCIjRkZFRkQ1XCIsXHJcbiAgICBcIiM2QjhFMjNcIixcclxuICAgIFwiI0NENUM1Q1wiLFxyXG4gICAgXCIjRjRBNDYwXCIsXHJcbiAgICBcIiNEOEJGRDhcIixcclxuICAgIFwiIzk5MzJDQ1wiLFxyXG4gICAgXCIjRkY4QzAwXCIsXHJcbiAgICBcIiM5OTMyQ0NcIixcclxuICAgIFwiI0ZGRDcwMFwiLFxyXG4gICAgXCIjQjBDNERFXCIsXHJcbiAgICBcIiM0MEUwRDBcIixcclxuICAgIFwiI0ZGQjZDMVwiLFxyXG4gICAgXCIjMDBDRUQxXCIsXHJcbiAgICBcIiNCQTU1RDNcIixcclxuICAgIFwiIzdCNjhFRVwiLFxyXG4gICAgXCIjRTZFNkZBXCIsXHJcbiAgICBcIiM4RkJDOEZcIixcclxuICAgIFwiIzAwRkE5QVwiLFxyXG4gICAgXCIjMTkxOTcwXCIsXHJcbiAgICBcIiNGNURFQjNcIixcclxuICBdO1xyXG5cclxuICBvcHRpbWl6ZVJlc3VsdFRvdGFsRXNlQmFyQ2hhcnQgPSBudWxsO1xyXG4gIHJlbmRlck9wdGltaXplclJlc3VsdEVuY2h0YW50U3ByZWFkKG9wdGltaXplcikge1xyXG4gICAgaWYgKHRoaXMub3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0KSB7XHJcbiAgICAgIHRoaXMub3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGFiZWxzID0gW107XHJcbiAgICBsZXQgZWZmZWN0S2luZFRvRGF0YUluZGV4ID0ge307XHJcbiAgICBsZXQgZGF0YVNldHMgPSB7XHJcbiAgICAgIGVuY2hhbnRzOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiRW5jaGFudHNcIixcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBvcHRpbWl6ZXIudG90YWxFc2VXaXRoRW5jaGFudHMpIHtcclxuICAgICAgaWYgKCFvcHRpbWl6ZXIuZW5jaGFudFVzYWdlW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBkYXRhSW5kZXggPSBsYWJlbHMubGVuZ3RoO1xyXG4gICAgICBlZmZlY3RLaW5kVG9EYXRhSW5kZXhbZWZmZWN0S2luZF0gPSBkYXRhSW5kZXg7XHJcblxyXG4gICAgICBsYWJlbHNbZGF0YUluZGV4XSA9IGVmZmVjdEtpbmQ7XHJcblxyXG4gICAgICBkYXRhU2V0cy5lbmNoYW50cy5kYXRhW2RhdGFJbmRleF0gPSBvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdO1xyXG4gICAgfVxyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgcGFydCBpbiBvcHRpbWl6ZXIuYmVzdEl0ZW1zKSB7XHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb3B0aW1pemVyLmJlc3RJdGVtc1twYXJ0XSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVNldHNbaXRlbS5raW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgZGF0YVNldHNbaXRlbS5raW5kXSA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IGl0ZW0ua2luZCxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5jb2xvcnNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbG9ySW5kZXggPSAoY29sb3JJbmRleCArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBvcHRpbWl6ZXIudG90YWxFc2VXaXRoRW5jaGFudHMpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgZWZmZWN0S2luZFRvRGF0YUluZGV4W2VmZmVjdEtpbmRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBlZmZlY3RLaW5kVG9EYXRhSW5kZXhbZWZmZWN0S2luZF07XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFTZXRzW2l0ZW0ua2luZF0uZGF0YVtkYXRhSW5kZXhdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXRzW2l0ZW0ua2luZF0uZGF0YVtkYXRhSW5kZXhdID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS5yZWxFZmZlY3RzW2VmZmVjdEtpbmRdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGRhdGFTZXRzW2l0ZW0ua2luZF0uZGF0YVtkYXRhSW5kZXhdICs9XHJcbiAgICAgICAgICAgICAgaXRlbS5yZWxFZmZlY3RzW2VmZmVjdEtpbmRdICogaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRhU2V0c0FycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBkYXRhU2V0IGluIGRhdGFTZXRzKSB7XHJcbiAgICAgIGRhdGFTZXRzQXJyYXkucHVzaChkYXRhU2V0c1tkYXRhU2V0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcHRpbWl6ZVJlc3VsdFRvdGFsRXNlQmFyQ2hhcnQgPSBuZXcgQ2hhcnQoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0XCIpLFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBkYXRhU2V0c0FycmF5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCJFbmNoYW50IFNwcmVhZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyT3B0aW1pemVyUmVzdWx0RGF0YUR1bXAob3B0aW1pemVyKSB7XHJcbiAgICBsZXQgaHRtbCA9XHJcbiAgICAgIFwiPGgyPlJlc3VsdHM8L2gyPjxwPmNsaWNrIG9uIHRoZSBoZWFkZXJzIHRvIGNvbGxhcHNlIHRoZSBzZWN0aW9uPC9wPlwiO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5pdGVtczwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGltaXplci5pdGVtcykpLFxyXG4gICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5lZmZlY3RzO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5sZXZlbE1heEVmZmVjdHM7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsRXNlPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci50b3RhbEVzZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsRXNlV2l0aEVuY2hhbnRzPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci50b3RhbEVzZVdpdGhFbmNoYW50cyxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsRXNlV2l0aEVuY2hhbnRzPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgIG9wdGltaXplci50b3RhbEVzZSxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5iZXN0RW5jaGFudHM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLmJlc3RFbmNoYW50cyxcclxuICAgICAgbnVsbCxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5iZXN0SXRlbXM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpbWl6ZXIuYmVzdEl0ZW1zKSksXHJcbiAgICAgIChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLmVmZmVjdHM7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlLmxldmVsTWF4RWZmZWN0cztcclxuICAgICAgICBkZWxldGUgdmFsdWUucmVsRWZmZWN0cztcclxuICAgICAgICBkZWxldGUgdmFsdWUuZXNlO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5wYXJ0O1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgMlxyXG4gICAgKX08L3ByZT5gO1xyXG5cclxuICAgIGh0bWwgKz0gYDxoMz5zZXRJdGVtczwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICBvcHRpbWl6ZXIuc2V0SXRlbXMsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDJcclxuICAgICl9PC9wcmU+YDtcclxuXHJcbiAgICBodG1sICs9IGA8aDM+dG90YWw8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgb3B0aW1pemVyLmdldFRvdGFsRW5jaGFudHNWYWx1ZShvcHRpbWl6ZXIudG90YWxFc2VXaXRoRW5jaGFudHMpLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAyXHJcbiAgICApfTwvcHJlPmA7XHJcblxyXG4gICAgLy9UT0RPIGJyZWFrZG93biB0b3RhbEVzZVdpdGhFbmNoYW50cyBieSBzb3VyY2VzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wdGltaXplUmVzdWx0RGF0YUR1bXBcIikuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIiNvcHRpbWl6ZVJlc3VsdERhdGFEdW1wID4gaDNcIilcclxuICAgICAgLmZvckVhY2goKGhlYWRlcikgPT4ge1xyXG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgICAgaWYgKG5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3B0aW1pemUoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU9wdGltaXplQnV0dG9uKGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnNhdmUoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpbWl6ZXIgPSBuZXcgT3B0aW1pemVyKHRoaXMuZGF0YSk7XHJcbiAgICBvcHRpbWl6ZXIub3B0aW1pemUoKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlck9wdGltaXplclJlc3VsdChvcHRpbWl6ZXIpO1xyXG4gICAgdGhpcy5yZW5kZXJPcHRpbWl6ZXJSZXN1bHREYXRhRHVtcChvcHRpbWl6ZXIpO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlT3B0aW1pemVCdXR0b24odHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBHZWFyIH07XHJcbiIsImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiIGFzc2VydCB7IHR5cGU6IFwianNvblwiIH07XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW1pemVyIHtcclxuICBpdGVtTGV2ZWwgPSAxMjA7XHJcbiAgaW5jbHVkZU1hc3RlcnkgPSB0cnVlO1xyXG4gIGN1cnNlQW52aWwgPSB0cnVlO1xyXG4gIGxvdHRlcnkgPSB0cnVlO1xyXG4gIGl0ZW1TbG90cyA9IHtcclxuICAgIEpld2Vscnk6IDE5LFxyXG4gICAgQXJtb3I6IDE5LFxyXG4gICAgV2VhcG9uOiAxOSxcclxuICB9O1xyXG4gIGVuY2hhbnRTbG90cyA9IDM0MjtcclxuICBzZXRCaWFzID0gMC4wNzU7XHJcbiAgZW5jaGFudFVzYWdlID0ge1xyXG4gICAgVW5pY29ybktub3dsZWRnZTogXCJcIixcclxuICAgIEhQQWRkZXI6IFwiXCIsXHJcbiAgICBNUEFkZGVyOiBcIlwiLFxyXG4gICAgQVRLQWRkZXI6IFwiXCIsXHJcbiAgICBNQVRLQWRkZXI6IFwiXCIsXHJcbiAgICBERUZBZGRlcjogXCJcIixcclxuICAgIE1ERUZBZGRlcjogXCJcIixcclxuICAgIFNQREFkZGVyOiBcIlwiLFxyXG4gICAgSFBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTVBNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQVRLTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIE1BVEtNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgREVGTXVsdGlwbGllcjogXCJcIixcclxuICAgIE1ERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQVRLUHJvcG90aW9uOiBcImRwc1wiLFxyXG4gICAgTUFUS1Byb3BvdGlvbjogXCJcIixcclxuICAgIERFRlByb3BvdGlvbjogXCJcIixcclxuICAgIE1ERUZQcm9wb3Rpb246IFwiXCIsXHJcbiAgICBGaXJlUmVzaXN0YW5jZTogXCJcIixcclxuICAgIEljZVJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBUaHVuZGVyUmVzaXN0YW5jZTogXCJcIixcclxuICAgIExpZ2h0UmVzaXN0YW5jZTogXCJcIixcclxuICAgIERhcmtSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgRmlyZUFic29ycHRpb246IFwiXCIsXHJcbiAgICBJY2VBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgVGh1bmRlckFic29ycHRpb246IFwiXCIsXHJcbiAgICBMaWdodEFic29ycHRpb246IFwiXCIsXHJcbiAgICBEYXJrQWJzb3JwdGlvbjogXCJcIixcclxuICAgIERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBFcXVpcG1lbnREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgU2xpbWVEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgTWFnaWNTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBTcGlkZXJEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgQmF0RHJvcENoYW5jZTogXCJcIixcclxuICAgIEZhaXJ5RHJvcENoYW5jZTogXCJcIixcclxuICAgIEZveERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBEZXZpbEZpc2hEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgVHJlYW50RHJvcENoYW5jZTogXCJcIixcclxuICAgIEZsYW1lVGlnZXJEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgVW5pY29ybkRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBDb2xvck1hdGVyaWFsRHJvcENoYW5jZTogXCJcIixcclxuICAgIFBoeXNpY2FsQ3JpdGljYWw6IFwiZHBzXCIsXHJcbiAgICBNYWdpY2FsQ3JpdGljYWw6IFwiXCIsXHJcbiAgICBFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICBTa2lsbFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgICBFcXVpcG1lbnRQcm9maWNpZW5jeTogXCJnYWluc1wiLFxyXG4gICAgTW92ZVNwZWVkTXVsdGlwbGllcjogXCJcIixcclxuICAgIEdvbGRHYWluOiBcIlwiLFxyXG4gICAgU3RvbmVHYWluOiBcIlwiLFxyXG4gICAgQ3J5c3RhbEdhaW46IFwiXCIsXHJcbiAgICBMZWFmR2FpbjogXCJcIixcclxuICAgIFdhcnJpb3JTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgV2l6YXJkU2tpbGxMZXZlbDogXCJcIixcclxuICAgIEFuZ2VsU2tpbGxMZXZlbDogXCJcIixcclxuICAgIFRoaWVmU2tpbGxMZXZlbDogXCJcIixcclxuICAgIEFyY2hlclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBUYW1lclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBBbGxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBNYWdpY1NsaW1lS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgU3BpZGVyS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgQmF0S25vd2xlZGdlOiBcIlwiLFxyXG4gICAgRmFpcnlLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBGb3hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBEZXZpbEZpc2hLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBUcmVhbnRLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBGbGFtZVRpZ2VyS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICBGaXJlRGFtYWdlOiBcIlwiLFxyXG4gICAgSWNlRGFtYWdlOiBcImRwc1wiLFxyXG4gICAgVGh1bmRlckRhbWFnZTogXCJcIixcclxuICAgIExpZ2h0RGFtYWdlOiBcIlwiLFxyXG4gICAgRGFya0RhbWFnZTogXCJcIixcclxuICAgIEhwUmVnZW46IFwiXCIsXHJcbiAgICBNcFJlZ2VuOiBcIlwiLFxyXG4gICAgVGFtaW5nUG9pbnQ6IFwiXCIsXHJcbiAgICBXYXJyaW9yU2tpbGxSYW5nZTogXCJcIixcclxuICAgIFdpemFyZFNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBBbmdlbFNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBUaGllZlNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBBcmNoZXJTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgVGFtZXJTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgVG93bk1hdEdhaW46IFwiZ2FpbnNcIixcclxuICAgIFRvd25NYXRBcmVhQ2xlYXJHYWluOiBcIlwiLFxyXG4gICAgUmViaXJ0aFBvaW50R2FpbjE6IFwiZ2FpbnNcIixcclxuICAgIFJlYmlydGhQb2ludEdhaW4yOiBcImdhaW5zXCIsXHJcbiAgICBSZWJpcnRoUG9pbnRHYWluMzogXCJnYWluc1wiLFxyXG4gICAgQ3JpdGljYWxEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgICBCbGVzc2luZ0VmZmVjdDogXCJkcHNcIixcclxuICAgIE1vdmVTcGVlZEFkZGVyOiBcIlwiLFxyXG4gICAgUGV0RVhQR2FpbjogXCJcIixcclxuICAgIExveWFsdHlQb2ludEdhaW46IFwiXCIsXHJcbiAgICBDYXRhbHlzdERvdWJsZUNyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgV2FycmlvclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBXaXphcmRTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgQW5nZWxTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgVGhpZWZTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgQXJjaGVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIFRhbWVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIEhwUmVnZW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTXBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBBcm1vcmVkRnVyeTogXCJcIixcclxuICAgIFdhcmRlZEZ1cnk6IFwiZHBzXCIsXHJcbiAgICBQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgUGV0TWFnaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxyXG4gICAgUGV0Q3JpdGljYWxEYW1hZ2U6IFwiXCIsXHJcbiAgICBQZXREZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgU3RvbmVUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgIENyeXN0YWxUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgIExlYWZUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcclxuICAgIEd1aWxkRVhQR2FpbjogXCJnYWluc1wiLFxyXG4gICAgU1BETXVsdGlwbGllcjogXCJcIixcclxuICAgIENyaXRpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIFNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICBFcXVpcG1lbnRQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgIEVYUEdhaW5NdWx0aXBsaWVyOiBcImdhaW5zXCIsXHJcbiAgICBHb2xkR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBQaHlzaWNhbERhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBGaXJlRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIEljZURhbWFnZU11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBUaHVuZGVyRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIExpZ2h0RGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIERhcmtEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgVGFtaW5nUG9pbnRNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgUGV0RVhQR2Fpbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgIEJsZXNzaW5nRWZmZWN0TXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIFBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgTWFnaWNhbENyaXRpY2FsTXVsdGlwbGllcjogXCJcIixcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VySW5wdXQpIHtcclxuICAgIHRoaXMuaXRlbUxldmVsID0gdXNlcklucHV0Lml0ZW1MZXZlbDtcclxuICAgIHRoaXMuaW5jbHVkZU1hc3RlcnkgPSB1c2VySW5wdXQuaW5jbHVkZU1hc3Rlcnk7XHJcbiAgICB0aGlzLmN1cnNlQW52aWwgPSB1c2VySW5wdXQuY3Vyc2VBbnZpbDtcclxuICAgIHRoaXMubG90dGVyeSA9IHVzZXJJbnB1dC5sb3R0ZXJ5O1xyXG4gICAgdGhpcy5pdGVtU2xvdHMgPSB1c2VySW5wdXQuaXRlbVNsb3RzO1xyXG4gICAgdGhpcy5lbmNoYW50U2xvdHMgPSB1c2VySW5wdXQuZW5jaGFudFNsb3RzO1xyXG4gICAgdGhpcy5zZXRCaWFzID0gdXNlcklucHV0LnNldEJpYXM7XHJcbiAgICB0aGlzLmVuY2hhbnRVc2FnZSA9IHVzZXJJbnB1dC5lbmNoYW50VXNhZ2U7XHJcbiAgfVxyXG5cclxuICBvcHRpbWl6ZSgpIHtcclxuICAgIHRoaXMuc3RlcDEoKTtcclxuICAgIHRoaXMuc3RlcDIoKTtcclxuICB9XHJcblxyXG4gIGVuY2hhbnRNYXAgPSB7fTtcclxuICBjYWxjRW5jaGFudEVmZmVjdFZhbHVlKGVmZmVjdCkge1xyXG4gICAgbGV0IGVuY2hhbnQgPSB0aGlzLmVuY2hhbnRNYXBbZWZmZWN0LmtpbmRdO1xyXG4gICAgbGV0IGVuY2hhbnRFZmZlY3RWYWx1ZSA9IGVuY2hhbnQubWF4VmFsdWU7XHJcbiAgICBpZiAodGhpcy5sb3R0ZXJ5KSB7XHJcbiAgICAgIGVuY2hhbnRFZmZlY3RWYWx1ZSA9IGVuY2hhbnQubWF4VmFsdWVMb3R0ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbmNoYW50RWZmZWN0VmFsdWU7XHJcbiAgfVxyXG4gIGNhbGNJdGVtRWZmZWN0VmFsdWUoZWZmZWN0KSB7XHJcbiAgICBsZXQgaXRlbUVmZmVjdFZhbHVlID0gZWZmZWN0LmluaXRWYWx1ZSArIGVmZmVjdC5iYXNlVmFsdWUgKiB0aGlzLml0ZW1MZXZlbDtcclxuXHJcbiAgICBpZiAoaXRlbUVmZmVjdFZhbHVlIDwgMCAmJiB0aGlzLmN1cnNlQW52aWwpIHtcclxuICAgICAgLy90aGlzIGlzIGEgY3Vyc2VkIGVmZmVjdCwgaWYgd2UgYWRkIGN1cnNlIGFudmlscyBpdCB3aWxsIGJlIG51bGxpZmllZFxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbUVmZmVjdFZhbHVlO1xyXG4gIH1cclxuICBpdGVtcyA9IFtdO1xyXG4gIHN0ZXAxKCkge1xyXG4gICAgbGV0IGVuY2hhbnRVc2FnZUFkZGVkTmV3ID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgZW5jaGFudCBvZiBkYXRhLmVuY2hhbnRzKSB7XHJcbiAgICAgIHRoaXMuZW5jaGFudE1hcFtlbmNoYW50LmtpbmRdID0gZW5jaGFudDtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5lbmNoYW50VXNhZ2VbZW5jaGFudC5raW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiZm91bmQgbmV3IGVuY2hhbnQgbm90IGxpc3RlZCBpbiBlbmNoYW50VXNhZ2VcIixcclxuICAgICAgICAgIGVuY2hhbnQua2luZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5lbmNoYW50VXNhZ2VbZW5jaGFudC5raW5kXSA9IFwiXCI7XHJcbiAgICAgICAgZW5jaGFudFVzYWdlQWRkZWROZXcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVuY2hhbnRVc2FnZUFkZGVkTmV3KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PXByaW50aW5nIGVuY2hhbnRVc2FnZT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2Fybih0aGlzLmVuY2hhbnRVc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUud2Fybih0aGlzLmVuY2hhbnRVc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhLml0ZW1zKSB7XHJcbiAgICAgIC8vZmlsdGVyIG91dCB2ZXJ5IGJhZCBpdGVtc1xyXG4gICAgICBpZiAoaXRlbS5zZXRLaW5kID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgIGxldCBlc2UgPSB7XHJcbiAgICAgICAgc2xvdHM6IDQsXHJcbiAgICAgICAgbWFzdGVyaWVzOiAwLFxyXG4gICAgICAgIGVmZmVjdHM6IDAsXHJcbiAgICAgICAgc3VtOiAwLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJlbEVmZmVjdHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAobGV0IGVmZmVjdCBvZiBpdGVtLmVmZmVjdHMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpdGVtRWZmZWN0VmFsdWUgPSB0aGlzLmNhbGNJdGVtRWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICBsZXQgZW5jaGFudEVmZmVjdFZhbHVlID0gdGhpcy5jYWxjRW5jaGFudEVmZmVjdFZhbHVlKGVmZmVjdCk7XHJcbiAgICAgICAgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gKz0gaXRlbUVmZmVjdFZhbHVlIC8gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG5cclxuICAgICAgICAvL2lmIHdlIGNhcmUgYWJvdXQgdGhpcyBlZmZlY3QsIGluY2x1ZGUgaW4gdGhlIGVzZVxyXG4gICAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3Qua2luZF0pIHtcclxuICAgICAgICAgIGVzZS5lZmZlY3RzICs9IGl0ZW1FZmZlY3RWYWx1ZSAvIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmluY2x1ZGVNYXN0ZXJ5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0IG9mIGl0ZW0ubGV2ZWxNYXhFZmZlY3RzKSB7XHJcbiAgICAgICAgICAvL2VmZmVjdC5raW5kIE5vdGhpbmcgYXJlIGVuY2hhbnQgU2xvdHNcclxuICAgICAgICAgIGlmIChlZmZlY3Qua2luZCA9PT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICAgICAgaWYgKGVmZmVjdC5pbml0VmFsdWUgPT09IDMpIHtcclxuICAgICAgICAgICAgICBlc2Uuc2xvdHMgPSA3O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGVzZS5zbG90cyA9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgaXRlbUVmZmVjdFZhbHVlID0gdGhpcy5jYWxjSXRlbUVmZmVjdFZhbHVlKGVmZmVjdCk7XHJcbiAgICAgICAgICBsZXQgZW5jaGFudEVmZmVjdFZhbHVlID0gdGhpcy5jYWxjRW5jaGFudEVmZmVjdFZhbHVlKGVmZmVjdCk7XHJcbiAgICAgICAgICByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSArPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcblxyXG4gICAgICAgICAgLy9pZiB3ZSBjYXJlIGFib3V0IHRoaXMgZWZmZWN0LCBpbmNsdWRlIGluIHRoZSBlc2VcclxuICAgICAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3Qua2luZF0pIHtcclxuICAgICAgICAgICAgZXNlLm1hc3RlcmllcyArPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlc2Uuc3VtID0gZXNlLnNsb3RzICsgZXNlLm1hc3RlcmllcyArIGVzZS5lZmZlY3RzO1xyXG5cclxuICAgICAgaXRlbS5lc2UgPSBlc2U7XHJcblxyXG4gICAgICBpdGVtLnJlbEVmZmVjdHMgPSByZWxFZmZlY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICByZXR1cm4gYi5lc2Uuc3VtIC0gYS5lc2Uuc3VtO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b3RhbEVzZSA9IHt9O1xyXG4gIHRvdGFsRXNlV2l0aEVuY2hhbnRzID0ge307XHJcbiAgYmVzdEVuY2hhbnRzID0ge307XHJcbiAgYmVzdEl0ZW1zID0ge1xyXG4gICAgSmV3ZWxyeTogW10sXHJcbiAgICBBcm1vcjogW10sXHJcbiAgICBXZWFwb246IFtdLFxyXG4gIH07XHJcbiAgc2V0SXRlbXMgPSB7fTtcclxuXHJcbiAgLy9UT0RPIHJldHVybiBhIG9iamVjdCBub3QgYSBmbG9hdFxyXG4gIC8vIGhhdmUgc2VwZXJhdGUgdmFsdWVzIGZvciBkcHMgYW5kIGdhaW5zLCAuLi5cclxuICBnZXRUb3RhbEVuY2hhbnRzVmFsdWUoZW5jaGFudHMsIGVuY2hhbnRzVG9BZGQpIHtcclxuICAgIGxldCB0b3RhbCA9IDE7XHJcblxyXG4gICAgLy9UT0RPIGltcHJvdmUgdGhlIGFjY3VyYWN5XHJcbiAgICAvLyBjb25zaWRlciBiYXNlIGVuY2hhbnQgdmFsdWVcclxuICAgIC8vIGNvbnNpZGVyIG91dGxlaXIgbGlrZSBmdXJ5XHJcbiAgICAvL2NvbnNpZGVyIHRhcmdldCBjYXBzIGZvciBkcHMgYW5kIGNyaXQgY2hhbmNlXHJcbiAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIGVuY2hhbnRzKSB7XHJcbiAgICAgIC8vaWYgd2UgZG9udCBjYXJlIGZvciB0aGVzZSBkb250IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFsdWVcclxuICAgICAgaWYgKCF0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZWZmZWN0VmFsdWUgPSBlbmNoYW50c1tlZmZlY3RLaW5kXTtcclxuICAgICAgaWYgKGVuY2hhbnRzVG9BZGQgJiYgZW5jaGFudHNUb0FkZFtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIGVmZmVjdFZhbHVlICs9IGVuY2hhbnRzVG9BZGRbZWZmZWN0S2luZF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRvdGFsICo9IDEgKyBlZmZlY3RWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG4gIHN0ZXAyKCkge1xyXG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLmVuY2hhbnRVc2FnZSkge1xyXG4gICAgICB0aGlzLnRvdGFsRXNlW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgdGhpcy5iZXN0RW5jaGFudHNbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICBpZiAodGhpcy5lbmNoYW50VXNhZ2VbZWZmZWN0S2luZF0pIHtcclxuICAgICAgICB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZXRJdGVtc0VmZmVjdE11bHQgPSBbMSwgMSwgMS4wNSwgMS4xLCAxLjE0LCAxLjE5LCAxLjI1LCAxLjM1LCAxLjVdO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgIGl0ZW0uc2V0RWZmZWN0TXVsdCA9IDA7XHJcbiAgICAgIGlmIChpdGVtLnNldEtpbmQgIT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0pIHtcclxuICAgICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXSA9IHtcclxuICAgICAgICAgICAgbmV3U2V0SXRlbVZhbHVlOiAwLFxyXG4gICAgICAgICAgICBhY3RpdmVTZXRJdGVtczogMCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXVtpdGVtLmtpbmRdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5kQmVzdEl0ZW0gPSAocGFydCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBpZiAoaXRlbS5wYXJ0ID09PSBwYXJ0KSB7XHJcbiAgICAgICAgICAvL2l0ZW1zIGlzIHNvcnRlZCwgc28gd2UganVzdCByZXR1cm4gdGhlIGZpcnN0IHdoaWNoIG1hdGNoZXMgdGhlIHBhcnRcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW1Ub1RvdGFsRXNlID0gKGl0ZW0pID0+IHtcclxuICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBpdGVtLnJlbEVmZmVjdHMpIHtcclxuICAgICAgICBpZiAoaXRlbS5yZWxFZmZlY3RzW2VmZmVjdEtpbmRdID09PSAwKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxFc2VbZWZmZWN0S2luZF0gKz1cclxuICAgICAgICAgIGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSAqIGl0ZW0uc2V0RWZmZWN0TXVsdDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSkge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXVtpdGVtLmtpbmRdID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0uYWN0aXZlU2V0SXRlbXMrKztcclxuXHJcbiAgICAgICAgLy91cGRhdGUgYWxsIHNldCBpdGVtIHN0cmVuZ3RoXHJcbiAgICAgICAgZm9yIChsZXQgc2V0SXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICBpZiAoc2V0SXRlbS5zZXRLaW5kID09PSBpdGVtLnNldEtpbmQpIHtcclxuICAgICAgICAgICAgc2V0SXRlbS5zZXRFZmZlY3RNdWx0ID1cclxuICAgICAgICAgICAgICBzZXRJdGVtc0VmZmVjdE11bHRbdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdLmFjdGl2ZVNldEl0ZW1zXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcmVjYWxjdWxhdGUgdG90YWxFc2Ugd2l0aCBjaGFuZ2VkIHNldCBzdHJlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdGhpcy50b3RhbEVzZSkge1xyXG4gICAgICAgICAgdGhpcy50b3RhbEVzZVtlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHBhcnQgaW4gdGhpcy5iZXN0SXRlbXMpIHtcclxuICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5iZXN0SXRlbXNbcGFydF0pIHtcclxuICAgICAgICAgICAgYWRkSXRlbVRvVG90YWxFc2UoaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJlc3RJdGVtc1tpdGVtLnBhcnRdLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAvL3VwZGF0ZSB0aGUgdG90YWxFc2VcclxuICAgICAgYWRkSXRlbVRvVG90YWxFc2UoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUVzZSA9ICgpID0+IHtcclxuICAgICAgLy9yZXNldCB0b3RhbEVzZVdpdGhFbmNoYW50c1xyXG4gICAgICB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzID0ge307XHJcbiAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdGhpcy50b3RhbEVzZSkge1xyXG4gICAgICAgIHRoaXMuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2VmZmVjdEtpbmRdID0gdGhpcy50b3RhbEVzZVtlZmZlY3RLaW5kXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9jYWxjdWFsdGUgdGhlIGF2ZXJhZ2Ugc2V0IGVmZmVjdCBtdWx0LCBuZXcgZW5jaGFudHMgd2lsbCB1c2UgdGhpcyBvbmVcclxuICAgICAgbGV0IGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ID0gMTtcclxuICAgICAgbGV0IGVxdWlwcGVkSXRlbUNvdW50ID0gMDtcclxuICAgICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5iZXN0SXRlbXNbcGFydF0pIHtcclxuICAgICAgICAgIGVxdWlwcGVkSXRlbUNvdW50Kys7XHJcblxyXG4gICAgICAgICAgaWYgKGVxdWlwcGVkSXRlbUNvdW50ID09PSAxKVxyXG4gICAgICAgICAgICBhdmVyYWdlU2V0RWZmZWN0TXVsdCA9IGl0ZW0uc2V0RWZmZWN0TXVsdDtcclxuICAgICAgICAgIGVsc2UgYXZlcmFnZVNldEVmZmVjdE11bHQgKz0gaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZXF1aXBwZWRJdGVtQ291bnQgPiAwKSB7XHJcbiAgICAgICAgYXZlcmFnZVNldEVmZmVjdE11bHQgLz0gZXF1aXBwZWRJdGVtQ291bnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbmNoYW50c1RvU3BlbnQgPSB0aGlzLmVuY2hhbnRTbG90cztcclxuICAgICAgd2hpbGUgKGVuY2hhbnRzVG9TcGVudCA+IDApIHtcclxuICAgICAgICBsZXQgbG93ZXN0RWZmZWN0S2luZCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGxvd2VzdEVuY2hhbnRWYWx1ZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gdGhpcy5lbmNoYW50VXNhZ2UpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXSA8IGxvd2VzdEVuY2hhbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIGxvd2VzdEVmZmVjdEtpbmQgPSBlZmZlY3RLaW5kO1xyXG4gICAgICAgICAgICAgIGxvd2VzdEVuY2hhbnRWYWx1ZSA9IHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vVE9ETyBpbmNsdWRlIGF2ZXJhZ2Ugc2V0RWZmZWN0TXVsdFxyXG4gICAgICAgIHRoaXMuYmVzdEVuY2hhbnRzW2xvd2VzdEVmZmVjdEtpbmRdICs9IDE7XHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tsb3dlc3RFZmZlY3RLaW5kXSArPSBhdmVyYWdlU2V0RWZmZWN0TXVsdDtcclxuICAgICAgICBlbmNoYW50c1RvU3BlbnQtLTtcclxuICAgICAgfVxyXG4gICAgICAvL1RPRE8gZG8gdGhpcyBmb3IgdXAgdG8gKzcgZW5jaGFudHMgZm9yIGl0ZW0uZXNlLnNsb3RzXHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAvL1RPRE8gZmFjdG9yIGluIGl0ZW0uZXNlLnNsb3RzLCBjaG9vc2UgdGhlIHRvdGFsRXNlV2l0aEVuY2hhbnRzIGFjY29yZGluZ2x5XHJcbiAgICAgICAgaXRlbS5lc2UudXBkYXRlZFN1bSA9IHRoaXMuZ2V0VG90YWxFbmNoYW50c1ZhbHVlKFxyXG4gICAgICAgICAgdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50cyxcclxuICAgICAgICAgIGl0ZW0ucmVsRWZmZWN0c1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vYWZ0ZXIgYWxsIG5ldyBpdGVtVmFsdWVzIGhhdmUgYmVlbiBjYWxjdWxhdGVkLCB1cGRhdGUgdGhlIHNldEl0ZW1WYWx1ZXNcclxuICAgICAgLy8gIGFuZCBpbmNyZWFzZSB0aGUgdmFsdWUgb2YgaXRlbXMgd2hpY2ggYXJlIHBhcnQgb2YgYW4gaW5jb21wbGV0ZSBzZXRcclxuICAgICAgZm9yIChsZXQgc2V0S2luZCBpbiB0aGlzLnNldEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tzZXRLaW5kXS5uZXdTZXRJdGVtVmFsdWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGl0ZW1QYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJlc3RJdGVtc1tpdGVtUGFydF0pIHtcclxuICAgICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXS5uZXdTZXRJdGVtVmFsdWUgKz1cclxuICAgICAgICAgICAgaXRlbS5lc2UudXBkYXRlZFN1bSAqIHRoaXMuc2V0QmlhcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgLy9pZiB0aGlzIGlzIGEgbmV3IHNldCBpdGVtLCBhZGQgdGhlIHZhbHVlIG9mIHRoZSBvdGhlciBpdGVtcyBhdG9wIG9mIGl0XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF1baXRlbS5raW5kXSkge1xyXG4gICAgICAgICAgaXRlbS5lc2UudXBkYXRlZFN1bSArPSB0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0ubmV3U2V0SXRlbVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGIuZXNlLnVwZGF0ZWRTdW0gLSBhLmVzZS51cGRhdGVkU3VtO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29uc3RydWN0QmVzdEl0ZW1zID0gKCkgPT4ge1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGxldCBiZXN0UGFydCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGJlc3RQYXJ0RnJlZVNsb3RzID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLml0ZW1TbG90cykge1xyXG4gICAgICAgICAgbGV0IGZyZWVTbG90cyA9IHRoaXMuaXRlbVNsb3RzW3BhcnRdIC0gdGhpcy5iZXN0SXRlbXNbcGFydF0ubGVuZ3RoO1xyXG4gICAgICAgICAgaWYgKGZyZWVTbG90cyA+IGJlc3RQYXJ0RnJlZVNsb3RzKSB7XHJcbiAgICAgICAgICAgIGJlc3RQYXJ0ID0gcGFydDtcclxuICAgICAgICAgICAgYmVzdFBhcnRGcmVlU2xvdHMgPSBmcmVlU2xvdHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL25vIG1vcmUgaXRlbXMgdG8gYWRkLCB3ZSBhcmUgZG9uZVxyXG4gICAgICAgIGlmIChiZXN0UGFydCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJlc3RJdGVtID0gZmluZEJlc3RJdGVtKGJlc3RQYXJ0KTtcclxuICAgICAgICBhZGRJdGVtKGJlc3RJdGVtKTtcclxuXHJcbiAgICAgICAgdXBkYXRlRXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0QmVzdEl0ZW1zKCk7XHJcbiAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuYmVzdEl0ZW1zW3BhcnRdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5lc2Uuc3VtIDwgYi5lc2Uuc3VtKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEuZXNlLnN1bSA+IGIuZXNlLnN1bSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbnZlcnQsIGNvbnZlcnQyLCBzaWdtYSwgYWRkRXZlbnQgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxuXHJcbmNsYXNzIFNsaW1lQmFuayB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBcInNsaW1lQmFua1wiO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICByZXNlYXJjaDoge1xyXG4gICAgICAgIGxlYWY6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXHJcbiAgICAgICAgc3RvbmU6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzbGltZUNvaW5DYXAxOiB7XHJcbiAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgdmFsdWU6IDEwMDAwLFxyXG4gICAgICAgIGNvc3Q6IDEwMDAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzbGltZUNvaW5DYXAyOiB7XHJcbiAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgICBjb3N0OiAxMDAwMDAwMDAwMCxcclxuICAgICAgfSxcclxuICAgICAgc2xpbWVDb2luQ2FwVG90YWw6IDAsXHJcbiAgICAgIGludHJlc3Q6IDAsXHJcbiAgICAgIG11bHRpcGxpZXI6IDAsXHJcbiAgICAgIHBldDE6IHtcclxuICAgICAgICByYW5rOiAwLFxyXG4gICAgICAgIGxveWFsdHk6IDAsXHJcbiAgICAgICAgcGFzc2l2ZTogMCxcclxuICAgICAgfSxcclxuICAgICAgbWlsZXN0b25lMTgwMDogZmFsc2UsXHJcbiAgICAgIG1pbGVzdG9uZTI3MDA6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNsYXNzIGNvbnN0cnVjdG9yIGFrYSBJbml0XCIpO1xyXG4gICAgYWRkRXZlbnQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnJlc2VhcmNoU3RvbmUuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5yZXNlYXJjaExlYWYuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zbGltZUNvaW5DYXAxLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMi5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwicGV0MS5yYW5rXCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJwZXQxLmxveWFsdHlcIiwgXCJjaGFuZ2VcIiwgdGhpcy5wZXQuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTE4MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTI3MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzcGxheSgpXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUudmFsdWVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYudmFsdWVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIudmFsdWVcIikuaW5uZXJIVE1MID0gY29udmVydChcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWVcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIikudmFsdWUgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS52YWx1ZVwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmsuaW50cmVzdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5pbnRyZXN0KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwVG90YWxcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWwpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmsubXVsdGlwbGllclwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEubXVsdGlwbGllcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5wYXNzaXZlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5wZXQxLnBhc3NpdmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucmFua1wiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLnJhbms7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLmxveWFsdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID09IHRydWUpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9PSB0cnVlKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaWxlc3RvbmUoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwZXQoKSB7XHJcbiAgICB0aGlzLmRhdGEucGV0MS5yYW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnJhbmtcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEucGV0MS5sb3lhbHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLmxveWFsdHlcIikudmFsdWU7XHJcbiAgICBsZXQgbG95YWx0eSA9IDIuNSAqIChwYXJzZUZsb2F0KHRoaXMuZGF0YS5wZXQxLmxveWFsdHkpICsgMTAwKSAqIDAuMDE7XHJcbiAgICB0aGlzLmRhdGEucGV0MS5wYXNzaXZlID0gcGFyc2VGbG9hdCh0aGlzLmRhdGEucGV0MS5yYW5rICogbG95YWx0eSArIDEwMCkudG9GaXhlZCgyKTtcclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZWFyY2hTdG9uZSgpIHtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUudmFsdWUgPSArKHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCAqIDAuMSkudG9GaXhlZCgyKTtcclxuICAgIHRoaXMuaW50cmVzdCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICByZXNlYXJjaExlYWYoKSB7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbCAqIDIpLnRvRml4ZWQoMikgKyAxMDA7XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXAxKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPSBjb252ZXJ0Mihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIikudmFsdWUpO1xyXG4gICAgLy8gaW5wdXQgPSBjb252ZXJ0MihpbnB1dCk7XHJcblxyXG4gICAgLy8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSBzaWdtYShcclxuICAgIC8vICAgMCxcclxuICAgIC8vICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwsXHJcbiAgICAvLyAgIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGEgKiAyMCAtIDEwICsgMTAwMDA7XHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIDEwXHJcbiAgICAvLyApO1xyXG4gICAgbGV0IGxldmVsID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWw7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSA9IDEwMDAwLjAgKyAxMDAwMC4wICogbGV2ZWwgKyAxMC4wICogTWF0aC5wb3cobGV2ZWwsIDIuMCk7XHJcblxyXG4gICAgdGhpcy5zbGltZUNvaW5DYXAxQ29zdCgpO1xyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXAyKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSA9XHJcbiAgICAgIHNpZ21hKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwsXHJcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgIHJldHVybiBhICogMjAgLSAxMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICkgKyAxMDA7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5jb3N0ID0gMTAwMDAwMDAwMDAuMCAqIE1hdGgucG93KDIuMCwgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwpO1xyXG5cclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwVG90YWwoKSB7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWwgPVxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSAqXHJcbiAgICAgICh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZSAvIDEwMCkgKlxyXG4gICAgICAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWUgLyAxMDApICpcclxuICAgICAgKHRoaXMuZGF0YS5wZXQxLnBhc3NpdmUgLyAxMDApO1xyXG5cclxuICAgIHRoaXMuaW50cmVzdCgpO1xyXG4gIH1cclxuXHJcbiAgaW50cmVzdCgpIHtcclxuICAgIGxldCBpbnRyZXN0UGVyY2VudCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCAqIDAuMDAxO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMTgwMCkge1xyXG4gICAgICBpbnRyZXN0UGVyY2VudCArPSAwLjAyNTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMjcwMCkge1xyXG4gICAgICBpbnRyZXN0UGVyY2VudCArPSAwLjA1O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhLmludHJlc3QgPSBpbnRyZXN0UGVyY2VudCAqIHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbDtcclxuICAgIHRoaXMuZGF0YS5tdWx0aXBsaWVyID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuaW50cmVzdCAvIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QpO1xyXG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgLT0gTWF0aC5yb3VuZCh0aGlzLmRhdGEubXVsdGlwbGllciAqIDAuMTUpO1xyXG4gICAgLy8gc2xpbWVCYW5rT3B0aW1pc2VyKCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXAxQ29zdCgpIHtcclxuICAgIC8vIGlmICgoZG91YmxlKSB0aGlzLmxldmVsLnZhbHVlID49IDUwMCAwMDAgMDAwLjApXHJcbiAgICAvLyByZXR1cm4gMUUrMTUgKiB0aGlzLkNvc3RNb2RpZmllcigpO1xyXG5cclxuICAgIC8vIDUwMFRcclxuICAgIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTI3XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMDAwMDApIHtcclxuICAgICAgLy8gMTAwVFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UyNlxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDAwMDApIHtcclxuICAgICAgLy8gNTBUXHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMjVcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIC8vIDEwVFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMjRcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMjNcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UyMlxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UyMVxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTIwXHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE5XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMThcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMTdcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxNlxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxNVxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEwMFRcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMTBUXHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMVRcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgKiAxMDAwMCArIDEwMDAwO1xyXG4gICAgfSAvLyBuZWVkIHRvIGZpbmQgc29sdXRpb24gZm9yIGxlc3MgdGhhbiAxME0gdXBncmFkZXNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNsaW1lQmFuayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkVGFiLCBsb2FkRnJvbUZpbGUsIGFkZEV2ZW50LCByZXN0YXJ0LCBzYXZlVG9GaWxlIH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IEFudmlsIH0gZnJvbSBcIi4vYW52aWwuanNcIjtcclxuLy8gaW1wb3J0IHsgZXhwZWRpdGlvbkxvYWQgfSBmcm9tIFwiLi9leHBlZGl0aW9uLmpzXCI7XHJcbmltcG9ydCB7IFNsaW1lQmFuayB9IGZyb20gXCIuL3NsaW1lYmFuay5qc1wiO1xyXG5pbXBvcnQgeyBHZWFyIH0gZnJvbSBcIi4vZ2Vhci9nZWFyLmpzXCI7XHJcbi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCB2ZXJzaW9uID0gXCIwLjEuMlwiO1xyXG5cclxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSBcImxvYWRpbmdcIikge1xyXG4gICAgZm4oKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZm4pO1xyXG4gIH1cclxufVxyXG5cclxucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIC8vIHN0YXJ0IHVwXHJcbiAgbG9hZCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgLy8gY3VycmVudCB0YWJcclxuICB2YXIgdGFiID0gMDtcclxuICBjb25zdCB0YWJfbGlzdCA9IFtcclxuICAgIHsgaWQ6IFwic2xpbWVCYW5rXCIsIG5hbWU6IFwiU2xpbWUgQmFuayBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwibGFiXCIsIG5hbWU6IFwiTGFiIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJhbnZpbFwiLCBuYW1lOiBcIkFudmlsIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJleHBlZGl0aW9uXCIsIG5hbWU6IFwiRXhwZWRpdGlvbiBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiZ2VhclwiLCBuYW1lOiBcIkdlYXIgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcInNldHRpbmdzXCIsIG5hbWU6IFwiU2V0dGluZ3NcIiB9LFxyXG4gIF07XHJcblxyXG4gIC8vIGNvbnN0IHRhYl9saXN0ID0gW1wic2xpbWUtYmFua1wiLCBcImxhYlwiLCBcImFudmlsXCIsIFwiZXhwZWRpdGlvblwiLCBcInNldHRpbmdzXCJdO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYWJcIikpIHtcclxuICAgIHRhYl9saXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgLy8gYWRkRXZlbnQoZWxlbWVudC5pZCwgXCJjbGlja1wiLCBjaGFuZ2VUYWIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmlkKTtcclxuICAgICAgLy8gdGFiID0gZWxlbWVudCArIFwiLWNhbGN1bGF0b3JcIjtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFRhYlwiKSA9PSBlbGVtZW50LmlkKSB7XHJcbiAgICAgICAgbG9hZFRhYihlbGVtZW50LmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgLy8gbG9hZGluZ1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJzbGltZUJhbmtcIikge1xyXG4gICAgICAgICAgICBuZXcgU2xpbWVCYW5rKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcImFudmlsXCIpIHtcclxuICAgICAgICAgICAgbmV3IEFudmlsKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcImdlYXJcIikge1xyXG4gICAgICAgICAgICBuZXcgR2VhcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJzZXR0aW5nc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlXCIpO1xyXG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLmxvYWRGcm9tRmlsZVwiLCBcImNoYW5nZVwiLCBsb2FkRnJvbUZpbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyXCIpO1xyXG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLnNhdmVUb0ZpbGVcIiwgXCJjbGlja1wiLCBzYXZlVG9GaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBzYXZlXCIpO1xyXG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLnJlc3RhcnRcIiwgXCJjbGlja1wiLCByZXN0YXJ0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciByZXN0YXJ0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IFwiSUVIMmNhbGMgPiBcIiArIGVsZW1lbnQubmFtZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKS5zdHlsZS5jb2xvciA9IFwiI2YyZTAwOVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIFwic2xpbWVCYW5rXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmtcIikuc3R5bGUuY29sb3IgPSBcIiNmMmUwMDlcIjtcclxuICAgIGxvYWRUYWIoXCJzbGltZUJhbmtcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHJlc3BvbnNlO1xyXG4gICAgICBuZXcgU2xpbWVCYW5rKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBpbiBsb2FkIHwgYWZ0ZXIgSW5pdFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBBbnZpbCBsb2FkaW5nXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIikgPT09IG51bGwpIHtcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIiwgMSk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwtbml0cm8tc3BlZWRcIikudmFsdWUgPVxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpO1xyXG4gIC8vIH1cclxuICAvLyBhbnZpbCBsb2FkIG5lZWQgcmVmYWN0b3JcclxuXHJcbiAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gIC8vICAgdmFyIGlkID0gMDtcclxuICAvLyAgIGlkID0gXCJhbnZpbC1kdW5nZW9uLVwiICsgaSArIFwiLXRpbWVcIjtcclxuICAvLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkgPT09IG51bGwpIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIGNhbGNBbnZpbCgpO1xyXG4gIC8vIGNhbGNFeHBlZGl0aW9uKCk7XHJcbiAgLy8gZXhwZWRpdGlvbkxvYWQoKTtcclxuICAvLyBsb2FkaW5nIHZhbHVlcyBmcm9tIGxvY2FsU3RvcmFnZSBlbHNlIHNldHRpbmcgdmFsdWVzIGFzIDBcclxuICAvLyBjb25zdCBsaXN0ID0gW1xyXG4gIC8vICAgJ2FudmlsLWZveC1kdW5nZW9uLTEtdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi0yLXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tMy10aW1lJyxcclxuICAvLyAnYW52aWwtZm94LWR1bmdlb24tNC10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTUtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTEtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTItdGltZScsXHJcbiAgLy8gJ2FudmlsLWJhdC1kdW5nZW9uLTMtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTQtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTUtdGltZSddO1xyXG4gIC8vIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2UgfTtcclxuICAvLyBjb25zb2xlLmxvZyhpdGVtcyk7XHJcbiAgLy8gbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gIC8vICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAvLyAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGVsZW1lbnQpID09PSBudWxsKSB7c2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTt9XHJcbiAgLy8gIGVsc2Uge3NsaW1lQmFua1Jlc2VhcmNoU3RvbmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWwnKSk7fVxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBTbGltZSBCYW5rIGxvYWRpbmdcclxuICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaFN0b25lKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaFN0b25lKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLWxlYWYtbGV2ZWxcIikgPT09IG51bGwpIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZigwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hMZWFmKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtbGVhZi1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTEtbGV2ZWxcIikgPT09IG51bGxcclxuICAvLyApIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDEoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDEoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTEtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoXHJcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0yLWxldmVsXCIpID09PSBudWxsXHJcbiAgLy8gKSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAyKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAyKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0yLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc2xpbWVCYW5rU2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAvLyBzbGltZUJhbmtJbnRyZXN0KCk7XHJcbiAgLy8gc2xpbWVCYW5rT3B0aW1pc2VyKCk7XHJcbiAgLy8gZGVidWdcclxuICAvLyBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh7IC4uLmxvY2FsU3RvcmFnZSB9KSkge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1ZycpLmlubmVySFRNTCArPSBgPGk+JHtrZXl9OjwvaT4gPGI+JHt2YWx1ZX08L2I+PGJyPmA7XHJcbiAgLy8gfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==