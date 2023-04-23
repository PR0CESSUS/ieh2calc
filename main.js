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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQ0FBaUMsbUJBQU8sQ0FBQyxzQ0FBZTtBQUN4RCwwQ0FBMEMsbUJBQU8sQ0FBQywrSEFBNkQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGFBQWEscUJBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QitDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsSUFBSSxvREFBUTtBQUNaLG9CQUFvQixTQUFTO0FBQzdCLE1BQU0sb0RBQVE7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0NBQW9DLG1CQUFtQixzQkFBc0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLElBQUk7O0FBRUo7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQkFBcUI7QUFDckUsd0JBQXdCLElBQUksSUFBSSxNQUFNO0FBQ3RDO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSSxJQUFJLE1BQU07QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFZRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S3lDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSyxJQUFJLFdBQVcsMEJBQTBCLEdBQUc7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXLElBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVEsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07O0FBRU4scUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNOztBQUVOLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEIsb0RBQVM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BtQnVDO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RnQmlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQyxpQkFBaUIsb0JBQW9CO0FBQ3JDLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFRO0FBQ1osSUFBSSxvREFBUTtBQUNaLElBQUksb0RBQVE7QUFDWixJQUFJLG9EQUFROztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxtREFBTztBQUNyRSwrREFBK0QsbURBQU87QUFDdEU7QUFDQTtBQUNBLDJEQUEyRCxtREFBTztBQUNsRSwrREFBK0QsbURBQU87QUFDdEU7QUFDQTtBQUNBLDhEQUE4RCxtREFBTzs7QUFFckUsNkRBQTZELG1EQUFPO0FBQ3BFLDZEQUE2RCxtREFBTztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxvREFBUTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlQckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1GO0FBQ2hEO0FBQ25DLFlBQVksaUJBQWlCO0FBQ2M7QUFDTDtBQUN0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNLG1DQUFtQztBQUN6QyxNQUFNLHVDQUF1QztBQUM3QyxNQUFNLGlEQUFpRDtBQUN2RCxNQUFNLHFDQUFxQztBQUMzQyxNQUFNLGtDQUFrQztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFRLG9DQUFvQyxvREFBWTtBQUNwRTtBQUNBLFlBQVksb0RBQVEsaUNBQWlDLGtEQUFVO0FBQy9EO0FBQ0EsWUFBWSxvREFBUSw4QkFBOEIsK0NBQU87QUFDekQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSxtREFBTztBQUNYO0FBQ0EsVUFBVSxvREFBUztBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxZQUFZO0FBQ1osTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEUseUJBQXlCLElBQUksSUFBSSxNQUFNO0FBQ3ZDLDJEQUEyRCxJQUFJLFdBQVcsTUFBTTtBQUNoRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvY29tbW9uLWV4cG9zZWQuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9hbnZpbC5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvZ2Vhci9nZWFyLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2dlYXIvb3B0aW1pemVyLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL3NsaW1lYmFuay5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fID0gcmVxdWlyZShcIi0hLi9jb21tb24uanNcIik7XG52YXIgX19fRVhQT1NFX0xPQURFUl9HRVRfR0xPQkFMX1RISVNfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldEdsb2JhbFRoaXMuanNcIik7XG52YXIgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fXyA9IF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX18uY2hhbmdlVGFiXG5pZiAodHlwZW9mIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX19bXCJjaGFuZ2VUYWJcIl0gPT09ICd1bmRlZmluZWQnKSBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfTU9EVUxFX0xPQ0FMX05BTUVfX187XG5lbHNlIHRocm93IG5ldyBFcnJvcignW2V4cG9zZXMtbG9hZGVyXSBUaGUgXCJjaGFuZ2VUYWJcIiB2YWx1ZSBleGlzdHMgaW4gdGhlIGdsb2JhbCBzY29wZSwgaXQgbWF5IG5vdCBiZSBzYWZlIHRvIG92ZXJ3cml0ZSBpdCwgdXNlIHRoZSBcIm92ZXJyaWRlXCIgb3B0aW9uJylcbm1vZHVsZS5leHBvcnRzID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcztcbiAgfVxuICB2YXIgZztcbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBnID0gdGhpcyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBzZWxmIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIGdsb2JhbCByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgfVxuICB9XG4gIHJldHVybiBnO1xufSgpOyIsImltcG9ydCB7IGFkZEV2ZW50LCBjb252ZXJ0IH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5cbmNsYXNzIEFudmlsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJhbnZpbFwiO1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIG5pdHJvOiAxLjAsXG4gICAgICBkdW5nZW9uOiBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgfTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50KFwiYW52aWwubml0cm8uc3BlZWRcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGFkZEV2ZW50KFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2F2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgLy8gdGhpcy5kYXRhLmR1bmdlb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xuICAgIHRoaXMuZGF0YS5uaXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWU7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIikudmFsdWU7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWUgPSB0aGlzLmRhdGEubml0cm87XG4gICAgLy8gY29uc29sZS5sb2coXCJkaXNwbGF5KClcIik7XG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgbGV0IGlkID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIjtcbiAgICAgIGxldCB2YWx1ZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi52YWx1ZVwiO1xuICAgICAgbGV0IHRpbWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xuICAgICAgbGV0IG9yYiA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi5vcmJcIjtcbiAgICAgIGxldCByZXdhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIucmV3YXJkXCIpLmlubmVySFRNTDtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlID0gdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpLmlubmVySFRNTCA9IE1hdGgucm91bmQoXG4gICAgICAgICgzNjAwIC8gdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdKSAqIHJld2FyZCAqIHRoaXMuZGF0YS5uaXRyb1xuICAgICAgKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9yYikuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChcbiAgICAgICAgKDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV0pICogdGhpcy5kYXRhLm5pdHJvXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBBbnZpbCB9O1xuIiwiZnVuY3Rpb24gc2F2ZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgdGhpcy52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKHRoaXMpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50KGlkLCBldmVudCwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFiKGlucHV0KSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBpbnB1dCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRUYWIodGFiKSB7XG4gIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAvLyBodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Byby1jZXNzLXVzL2llaDJjYWxjL3Jhdy9tYXN0ZXIvaHRtbC9zbGltZUJhbmsuaHRtbFxuICAvLyBsZXQgZmlsZSA9IFwiLi4vaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcbiAgbGV0IGZpbGUgPSBcIi4uL2h0bWwvXCIgKyB0YWIgKyBcIi5odG1sXCI7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdCAhPSBcIjEyNy4wLjAuMTozMDAwXCIpIHtcbiAgICBmaWxlID0gXCJodHRwczovL3Byby1jZXNzLXVzLmdpdGh1Yi5pby9pZWgyY2FsYy9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xuICB9XG5cbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW5cIik7XG4gIC8vIG15SGVhZGVycy5hcHBlbmQoXG4gIC8vICAgXCJDb250ZW50LVNlY3VyaXR5LVBvbGljeTpcIixcbiAgLy8gICBcImRlZmF1bHQtc3JjICdzZWxmJzsgc3R5bGUtc3JjICdzZWxmJyAndW5zYWZlLWlubGluZScgKjsgZm9udC1zcmMgJ3NlbGYnICo7IGNvbm5lY3Qtc3JjICdzZWxmJyAqOyBpbWctc3JjIGRhdGE6ICpcIlxuICAvLyApO1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIC8vIHJlZmVycmVyUG9saWN5OiBcInNhbWUtb3JpZ2luXCIsXG4gIH07XG4gIC8vIGxldCB4ID0gYXdhaXQgZmV0Y2goZmlsZSk7XG4gIC8vIGxldCB5ID0gYXdhaXQgeC50ZXh0KCk7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSB5O1xuICByZXR1cm4gZmV0Y2goZmlsZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSk7XG59XG5cbi8vIGV4dC5nZXQgPSAodXJsKSA9PiB7XG4vLyAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4vLyAgIGxldCBvcHRpb25zID0ge1xuLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcbi8vICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbi8vICAgICAgIG1vZGU6ICdjb3JzJ1xuLy8gICB9O1xuXG4vLyAgIC8vZmV0Y2ggZ2V0XG5cbi8vICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpO1xuLy8gfTtcblxuLy8gZXh0LmdldChcImh0dHA6Ly9leGFtcGxlLmNvbVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSk7IC8vIG9yIHdoYXRldmVyXG4vLyB9KTtcblxuZnVuY3Rpb24gc2lnbWEobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgaXRlcmF0b3IsIGFjY3VtdWxhdG9yID0gMCkge1xuICAvLyBsZXQgYWNjdW11bGF0b3IgPSAwO1xuICBmb3IgKGxldCBpID0gbG93ZXJCb3VuZDsgaSA8PSB1cHBlckJvdW5kOyArK2kpIHtcbiAgICBhY2N1bXVsYXRvciArPSBpdGVyYXRvcihpKTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8vIGNvbnZlcnQgbm9ybWFsIG51bWJlciB0byBLLE0sQixUIGFuZCBleHBvbmVudGlhbFxuZnVuY3Rpb24gY29udmVydChpbnB1dCkge1xuICBpbnB1dCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gMDtcbiAgaWYgKGlucHV0ID09IDApIHtcbiAgICBvdXRwdXQgPSAwO1xuICB9IGVsc2UgaWYgKGlucHV0IDw9IDEwMDAwKSB7XG4gICAgb3V0cHV0ID0gTWF0aC5yb3VuZChpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwKSB7XG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMCkudG9GaXhlZCgyKSArIFwiS1wiO1xuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMCkge1xuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk1cIjtcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDAwMDApIHtcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwKS50b0ZpeGVkKDMpICsgXCJCXCI7XG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwMDAwKSB7XG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiVFwiO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGlucHV0LnRvRXhwb25lbnRpYWwoMik7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBjb252ZXJ0IGssbSxiLHQgdG8gbm9ybWFsIG51bWJlcnNcbmZ1bmN0aW9uIGNvbnZlcnQyKGlucHV0LCBtaW4gPSAwLCBtYXggPSA5OTk5OTk5OTk5OTk5OTkpIHtcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8sL2csIFwiLlwiKTsgLy8gY29udmVydCAsIHRvIC5cbiAgaWYgKC9eXFxkKlxcLj9cXGQrJC8udGVzdChpbnB1dCkpIHtcbiAgICBpZiAoaW5wdXQgPCBtaW4pIHtcbiAgICAgIHJldHVybiBtaW47XG4gICAgfSBlbHNlIGlmIChpbnB1dCA+IG1heCkge1xuICAgICAgcmV0dXJuIG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gLy8gcmV0dXJuIHJvdW5kZWQgbnVtYmVyIGlmIHRoZXJlIGlzIG5vIGFiYnJldmlldGVcbiAgZWxzZSB7XG4gICAgY29uc3QgcmVnZXggPSAvKC4qKShcXEQpJC9nbTtcbiAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8gL2csIFwiXCIpOyAvLyByZW1vdmVzIGFsbCBzcGFjZXNcblxuICAgIGlucHV0ID0gcmVnZXguZXhlYyhpbnB1dCk7XG4gICAgbGV0IG91dHB1dCA9IDA7XG4gICAgaWYgKGlucHV0WzJdID09IFwidFwiKSB7XG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogNDtcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwiYlwiKSB7XG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMztcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwibVwiKSB7XG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMjtcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwia1wiKSB7XG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVUb0ZpbGUoKSB7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlLCBudWxsLCAyKV0sIHtcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiLFxuICAgIH0pXG4gICk7XG4gIGEuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJJRUgyY2FsYy1kYXRhLmpzb25cIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gIGEuY2xpY2soKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbn1cblxuZnVuY3Rpb24gbG9hZEZyb21GaWxlKCkge1xuICBsZXQgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIpLmZpbGVzWzBdO1xuICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGUtY29udGVudHNcIikudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UodGV4dCkpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4uSlNPTi5wYXJzZSh0ZXh0KSB9KSkge1xuICAgICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xuICAgIH1cbiAgfSk7XG4gIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xufVxuXG5leHBvcnQge1xuICBjb252ZXJ0LFxuICBjb252ZXJ0MixcbiAgc2lnbWEsXG4gIHJlc3RhcnQsXG4gIGNoYW5nZVRhYixcbiAgbG9hZFRhYixcbiAgYWRkRXZlbnQsXG4gIHNhdmVUb0ZpbGUsXG4gIGxvYWRGcm9tRmlsZSxcbn07XG4iLCJpbXBvcnQgeyBPcHRpbWl6ZXIgfSBmcm9tIFwiLi9vcHRpbWl6ZXIuanNcIjtcblxuY2xhc3MgR2VhciB7XG4gIG5hbWUgPSBcImdlYXJcIjtcbiAgdmVyc2lvbiA9IDE7XG4gIGRhdGEgPSB7XG4gICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uLFxuICAgIGl0ZW1MZXZlbDogMTIwLFxuICAgIGluY2x1ZGVNYXN0ZXJ5OiB0cnVlLFxuICAgIGN1cnNlQW52aWw6IHRydWUsXG4gICAgbG90dGVyeTogdHJ1ZSxcbiAgICBpdGVtU2xvdHM6IHtcbiAgICAgIEpld2Vscnk6IDE5LFxuICAgICAgQXJtb3I6IDE5LFxuICAgICAgV2VhcG9uOiAxOSxcbiAgICB9LFxuICAgIGVuY2hhbnRTbG90czogMzQyLFxuICAgIHNldEJpYXM6IDAuMDc1LFxuICAgIGVuY2hhbnRVc2FnZToge1xuICAgICAgVW5pY29ybktub3dsZWRnZTogXCJcIixcbiAgICAgIEhQQWRkZXI6IFwiXCIsXG4gICAgICBNUEFkZGVyOiBcIlwiLFxuICAgICAgQVRLQWRkZXI6IFwiXCIsXG4gICAgICBNQVRLQWRkZXI6IFwiXCIsXG4gICAgICBERUZBZGRlcjogXCJcIixcbiAgICAgIE1ERUZBZGRlcjogXCJcIixcbiAgICAgIFNQREFkZGVyOiBcIlwiLFxuICAgICAgSFBNdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgTVBNdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgQVRLTXVsdGlwbGllcjogXCJkcHNcIixcbiAgICAgIE1BVEtNdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgREVGTXVsdGlwbGllcjogXCJcIixcbiAgICAgIE1ERUZNdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgQVRLUHJvcG90aW9uOiBcImRwc1wiLFxuICAgICAgTUFUS1Byb3BvdGlvbjogXCJcIixcbiAgICAgIERFRlByb3BvdGlvbjogXCJcIixcbiAgICAgIE1ERUZQcm9wb3Rpb246IFwiXCIsXG4gICAgICBGaXJlUmVzaXN0YW5jZTogXCJcIixcbiAgICAgIEljZVJlc2lzdGFuY2U6IFwiXCIsXG4gICAgICBUaHVuZGVyUmVzaXN0YW5jZTogXCJcIixcbiAgICAgIExpZ2h0UmVzaXN0YW5jZTogXCJcIixcbiAgICAgIERhcmtSZXNpc3RhbmNlOiBcIlwiLFxuICAgICAgUGh5c2ljYWxBYnNvcnB0aW9uOiBcIlwiLFxuICAgICAgRmlyZUFic29ycHRpb246IFwiXCIsXG4gICAgICBJY2VBYnNvcnB0aW9uOiBcIlwiLFxuICAgICAgVGh1bmRlckFic29ycHRpb246IFwiXCIsXG4gICAgICBMaWdodEFic29ycHRpb246IFwiXCIsXG4gICAgICBEYXJrQWJzb3JwdGlvbjogXCJcIixcbiAgICAgIERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXG4gICAgICBFcXVpcG1lbnREcm9wQ2hhbmNlOiBcIlwiLFxuICAgICAgU2xpbWVEcm9wQ2hhbmNlOiBcIlwiLFxuICAgICAgTWFnaWNTbGltZURyb3BDaGFuY2U6IFwiXCIsXG4gICAgICBTcGlkZXJEcm9wQ2hhbmNlOiBcIlwiLFxuICAgICAgQmF0RHJvcENoYW5jZTogXCJcIixcbiAgICAgIEZhaXJ5RHJvcENoYW5jZTogXCJcIixcbiAgICAgIEZveERyb3BDaGFuY2U6IFwiXCIsXG4gICAgICBEZXZpbEZpc2hEcm9wQ2hhbmNlOiBcIlwiLFxuICAgICAgVHJlYW50RHJvcENoYW5jZTogXCJcIixcbiAgICAgIEZsYW1lVGlnZXJEcm9wQ2hhbmNlOiBcIlwiLFxuICAgICAgVW5pY29ybkRyb3BDaGFuY2U6IFwiXCIsXG4gICAgICBDb2xvck1hdGVyaWFsRHJvcENoYW5jZTogXCJcIixcbiAgICAgIFBoeXNpY2FsQ3JpdGljYWw6IFwiZHBzXCIsXG4gICAgICBNYWdpY2FsQ3JpdGljYWw6IFwiXCIsXG4gICAgICBFWFBHYWluOiBcImdhaW5zXCIsXG4gICAgICBTa2lsbFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXG4gICAgICBFcXVpcG1lbnRQcm9maWNpZW5jeTogXCJnYWluc1wiLFxuICAgICAgTW92ZVNwZWVkTXVsdGlwbGllcjogXCJcIixcbiAgICAgIEdvbGRHYWluOiBcIlwiLFxuICAgICAgU3RvbmVHYWluOiBcIlwiLFxuICAgICAgQ3J5c3RhbEdhaW46IFwiXCIsXG4gICAgICBMZWFmR2FpbjogXCJcIixcbiAgICAgIFdhcnJpb3JTa2lsbExldmVsOiBcIlwiLFxuICAgICAgV2l6YXJkU2tpbGxMZXZlbDogXCJcIixcbiAgICAgIEFuZ2VsU2tpbGxMZXZlbDogXCJcIixcbiAgICAgIFRoaWVmU2tpbGxMZXZlbDogXCJcIixcbiAgICAgIEFyY2hlclNraWxsTGV2ZWw6IFwiXCIsXG4gICAgICBUYW1lclNraWxsTGV2ZWw6IFwiXCIsXG4gICAgICBBbGxTa2lsbExldmVsOiBcIlwiLFxuICAgICAgU2xpbWVLbm93bGVkZ2U6IFwiXCIsXG4gICAgICBNYWdpY1NsaW1lS25vd2xlZGdlOiBcIlwiLFxuICAgICAgU3BpZGVyS25vd2xlZGdlOiBcIlwiLFxuICAgICAgQmF0S25vd2xlZGdlOiBcIlwiLFxuICAgICAgRmFpcnlLbm93bGVkZ2U6IFwiXCIsXG4gICAgICBGb3hLbm93bGVkZ2U6IFwiXCIsXG4gICAgICBEZXZpbEZpc2hLbm93bGVkZ2U6IFwiXCIsXG4gICAgICBUcmVhbnRLbm93bGVkZ2U6IFwiXCIsXG4gICAgICBGbGFtZVRpZ2VyS25vd2xlZGdlOiBcIlwiLFxuICAgICAgUGh5c2ljYWxEYW1hZ2U6IFwiXCIsXG4gICAgICBGaXJlRGFtYWdlOiBcIlwiLFxuICAgICAgSWNlRGFtYWdlOiBcImRwc1wiLFxuICAgICAgVGh1bmRlckRhbWFnZTogXCJcIixcbiAgICAgIExpZ2h0RGFtYWdlOiBcIlwiLFxuICAgICAgRGFya0RhbWFnZTogXCJcIixcbiAgICAgIEhwUmVnZW46IFwiXCIsXG4gICAgICBNcFJlZ2VuOiBcIlwiLFxuICAgICAgVGFtaW5nUG9pbnQ6IFwiXCIsXG4gICAgICBXYXJyaW9yU2tpbGxSYW5nZTogXCJcIixcbiAgICAgIFdpemFyZFNraWxsUmFuZ2U6IFwiXCIsXG4gICAgICBBbmdlbFNraWxsUmFuZ2U6IFwiXCIsXG4gICAgICBUaGllZlNraWxsUmFuZ2U6IFwiXCIsXG4gICAgICBBcmNoZXJTa2lsbFJhbmdlOiBcIlwiLFxuICAgICAgVGFtZXJTa2lsbFJhbmdlOiBcIlwiLFxuICAgICAgVG93bk1hdEdhaW46IFwiZ2FpbnNcIixcbiAgICAgIFRvd25NYXRBcmVhQ2xlYXJHYWluOiBcIlwiLFxuICAgICAgUmViaXJ0aFBvaW50R2FpbjE6IFwiZ2FpbnNcIixcbiAgICAgIFJlYmlydGhQb2ludEdhaW4yOiBcImdhaW5zXCIsXG4gICAgICBSZWJpcnRoUG9pbnRHYWluMzogXCJnYWluc1wiLFxuICAgICAgQ3JpdGljYWxEYW1hZ2U6IFwiZHBzXCIsXG4gICAgICBCbGVzc2luZ0VmZmVjdDogXCJkcHNcIixcbiAgICAgIE1vdmVTcGVlZEFkZGVyOiBcIlwiLFxuICAgICAgUGV0RVhQR2FpbjogXCJcIixcbiAgICAgIExveWFsdHlQb2ludEdhaW46IFwiXCIsXG4gICAgICBDYXRhbHlzdERvdWJsZUNyaXRpY2FsQ2hhbmNlOiBcIlwiLFxuICAgICAgV2FycmlvclNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXG4gICAgICBXaXphcmRTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxuICAgICAgQW5nZWxTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxuICAgICAgVGhpZWZTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxuICAgICAgQXJjaGVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcbiAgICAgIFRhbWVyU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcbiAgICAgIEhwUmVnZW5NdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgTXBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXG4gICAgICBBcm1vcmVkRnVyeTogXCJcIixcbiAgICAgIFdhcmRlZEZ1cnk6IFwiZHBzXCIsXG4gICAgICBQZXRQaHlzaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxuICAgICAgUGV0TWFnaWNhbENyaXRpY2FsQ2hhbmNlOiBcIlwiLFxuICAgICAgUGV0Q3JpdGljYWxEYW1hZ2U6IFwiXCIsXG4gICAgICBQZXREZWJ1ZmZSZXNpc3RhbmNlOiBcIlwiLFxuICAgICAgU3RvbmVUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcbiAgICAgIENyeXN0YWxUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcbiAgICAgIExlYWZUb3duUmVzZWFyY2hQb3dlcjogXCJcIixcbiAgICAgIEd1aWxkRVhQR2FpbjogXCJnYWluc1wiLFxuICAgICAgU1BETXVsdGlwbGllcjogXCJcIixcbiAgICAgIENyaXRpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcbiAgICAgIFNraWxsUHJvZmljaWVuY3lNdWx0aXBsaWVyOiBcImdhaW5zXCIsXG4gICAgICBFcXVpcG1lbnRQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcbiAgICAgIEVYUEdhaW5NdWx0aXBsaWVyOiBcImdhaW5zXCIsXG4gICAgICBHb2xkR2Fpbk11bHRpcGxpZXI6IFwiXCIsXG4gICAgICBQaHlzaWNhbERhbWFnZU11bHRpcGxpZXI6IFwiXCIsXG4gICAgICBGaXJlRGFtYWdlTXVsdGlwbGllcjogXCJcIixcbiAgICAgIEljZURhbWFnZU11bHRpcGxpZXI6IFwiZHBzXCIsXG4gICAgICBUaHVuZGVyRGFtYWdlTXVsdGlwbGllcjogXCJcIixcbiAgICAgIExpZ2h0RGFtYWdlTXVsdGlwbGllcjogXCJcIixcbiAgICAgIERhcmtEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgVGFtaW5nUG9pbnRNdWx0aXBsaWVyOiBcIlwiLFxuICAgICAgUGV0RVhQR2Fpbk11bHRpcGxpZXI6IFwiXCIsXG4gICAgICBMb3lhbHR5UG9pbnRHYWluTXVsdGlwbGllcjogXCJcIixcbiAgICAgIEJsZXNzaW5nRWZmZWN0TXVsdGlwbGllcjogXCJkcHNcIixcbiAgICAgIFBoeXNpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcImRwc1wiLFxuICAgICAgTWFnaWNhbENyaXRpY2FsTXVsdGlwbGllcjogXCJcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YS52ZXJzaW9uIDwgdGhpcy52ZXJzaW9uKSB7XG4gICAgICBhbGVydChcIm1pc3NpbmcgdmVyc2lvbiBtaWdyYXRpb25cIik7XG4gICAgICAvL3RoaXMuZGF0YS52ZXJzaW9uID0gdGhpcy52ZXJzaW9uO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy51cGRhdGVEZWZhdWx0VmFsdWVzKCk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZW5jaGFudFVzYWdlVGVtcGxhdGUgPSAoaWQsIG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVTaG9ydCA9IG5hbWVcbiAgICAgICAgLnJlcGxhY2UoXCJBZGRlclwiLCBcIitcIilcbiAgICAgICAgLnJlcGxhY2UoXCJFZmZlY3RNdWx0aXBsaWVyXCIsIFwiJVwiKVxuICAgICAgICAucmVwbGFjZShcIk11bHRpcGxpZXJcIiwgXCIlXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiVG93blJlc2VhcmNoUG93ZXJcIiwgXCJSZXNlYXJjaFwiKVxuICAgICAgICAucmVwbGFjZShcIlByb2ZpY2llbmN5XCIsIFwiUHJvZlwiKVxuICAgICAgICAucmVwbGFjZShcIlNraWxsTGV2ZWxcIiwgXCJTa2lsbFwiKVxuICAgICAgICAucmVwbGFjZShcIlJlc2lzdGFuY2VcIiwgXCJSZXNcIilcbiAgICAgICAgLnJlcGxhY2UoXCJEcm9wQ2hhbmNlXCIsIFwiRHJvcFwiKVxuICAgICAgICAucmVwbGFjZShcIkNyaXRpY2FsXCIsIFwiQ3JpdFwiKVxuICAgICAgICAucmVwbGFjZShcIkRhbWFnZVwiLCBcIkRtZ1wiKVxuICAgICAgICAucmVwbGFjZShcIlNraWxsRWZmZWN0UmFuZ2VcIiwgXCJBb2VcIilcbiAgICAgICAgLnJlcGxhY2UoXCJTa2lsbFJhbmdlXCIsIFwiUmFuZ2VcIilcbiAgICAgICAgLnJlcGxhY2UoXCJLbm93bGVkZ2VcIiwgXCJEbWdcIilcbiAgICAgICAgLnJlcGxhY2UoXCJQZXRQaHlzaWNhbFwiLCBcIlBldFBoeXNcIilcbiAgICAgICAgLnJlcGxhY2UoXCJQZXRNYWdpY2FsXCIsIFwiUGV0TWFnXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiQ2F0YWx5c3REb3VibGVDcml0Q2hhbmNlXCIsIFwiQ2F0YURibENyaXRcIilcbiAgICAgICAgLnJlcGxhY2UoXCJDcml0Q2hhbmNlXCIsIFwiQ3JpdFwiKVxuICAgICAgICAucmVwbGFjZShcIlRvd25NYXRBcmVhQ2xlYXJHYWluXCIsIFwiVG93bk1hdCtcIilcbiAgICAgICAgLnJlcGxhY2UoXCJUb3duTWF0R2FpblwiLCBcIlRvd25NYXQlXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiQWJzb3JwdGlvblwiLCBcIkFic29ycFwiKVxuICAgICAgICAucmVwbGFjZShcIkNvbG9yTWF0ZXJpYWxcIiwgXCJSYXJlTWF0XCIpXG4gICAgICAgIC5yZXBsYWNlKFwiUmViaXJ0aFBvaW50XCIsIFwiUkJcIilcbiAgICAgICAgLnJlcGxhY2UoXCJMb3lhbHR5UG9pbnRHYWluXCIsIFwiTFBHXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiVGFtaW5nUG9pbnRcIiwgXCJUUEdcIilcbiAgICAgICAgLnJlcGxhY2UoXCJFcXVpcG1lbnRcIiwgXCJFUVwiKTtcblxuICAgICAgcmV0dXJuIGA8bGFiZWwgdGl0bGU9XCIke25hbWV9XCI+JHtuYW1lU2hvcnR9IDxpbnB1dCBpZD1cImVuY2hhbnRVc2FnZS4ke2lkfVwiIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjVcIi8+PC9sYWJlbD5gO1xuICAgIH07XG4gICAgbGV0IGVuY2hhbnRVc2FnZUhUTUwgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5kYXRhLmVuY2hhbnRVc2FnZSkge1xuICAgICAgZW5jaGFudFVzYWdlSFRNTCArPSBlbmNoYW50VXNhZ2VUZW1wbGF0ZShpZCwgaWQpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VuY2hhbnRVc2FnZUlucHV0V3JhcHBlclwiKS5pbm5lckhUTUwgPVxuICAgICAgZW5jaGFudFVzYWdlSFRNTDtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiN1c2VySW5wdXRcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuaW5wdXRDaGFuZ2VkLmJpbmQodGhpcykpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI29wdGltaXplXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3B0aW1pemUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbnB1dENoYW5nZWQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgaWQgPSB0YXJnZXQuaWQ7XG4gICAgY29uc3QgaWRQYXJ0cyA9IGlkLnNwbGl0KFwiLlwiKTtcblxuICAgIHN3aXRjaCAoaWRQYXJ0c1swXSkge1xuICAgICAgY2FzZSBcIml0ZW1MZXZlbFwiOlxuICAgICAgICB0aGlzLmRhdGEuaXRlbUxldmVsID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaW5jbHVkZU1hc3RlcnlcIjpcbiAgICAgICAgdGhpcy5kYXRhLmluY2x1ZGVNYXN0ZXJ5ID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImN1cnNlQW52aWxcIjpcbiAgICAgICAgdGhpcy5kYXRhLmN1cnNlQW52aWwgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibG90dGVyeVwiOlxuICAgICAgICB0aGlzLmRhdGEubG90dGVyeSA9IHRhcmdldC5jaGVja2VkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpdGVtU2xvdHNcIjpcbiAgICAgICAgdGhpcy5kYXRhLml0ZW1TbG90c1tpZFBhcnRzWzFdXSA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImVuY2hhbnRTbG90c1wiOlxuICAgICAgICB0aGlzLmRhdGEuZW5jaGFudFNsb3RzID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2V0Qmlhc1wiOlxuICAgICAgICB0aGlzLmRhdGEuc2V0QmlhcyA9IHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZW5jaGFudFVzYWdlXCI6XG4gICAgICAgIHRoaXMuZGF0YS5lbmNoYW50VXNhZ2VbaWRQYXJ0c1sxXV0gPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlucHV0Q2hhbmdlZCBmb3IgdW5rbm93biBpZFwiLCBpZCwgYXJndW1lbnRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGVmYXVsdFZhbHVlcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gaW5wdXQuaWQ7XG4gICAgICBjb25zdCBpZFBhcnRzID0gaWQuc3BsaXQoXCIuXCIpO1xuICAgICAgc3dpdGNoIChpZFBhcnRzWzBdKSB7XG4gICAgICAgIGNhc2UgXCJpdGVtTGV2ZWxcIjpcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5pdGVtTGV2ZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbmNsdWRlTWFzdGVyeVwiOlxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEuaW5jbHVkZU1hc3Rlcnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjdXJzZUFudmlsXCI6XG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRoaXMuZGF0YS5jdXJzZUFudmlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibG90dGVyeVwiOlxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0aGlzLmRhdGEubG90dGVyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIml0ZW1TbG90c1wiOlxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLml0ZW1TbG90c1tpZFBhcnRzWzFdXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVuY2hhbnRTbG90c1wiOlxuICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5kYXRhLmVuY2hhbnRTbG90cztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldEJpYXNcIjpcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS5zZXRCaWFzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZW5jaGFudFVzYWdlXCI6XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmRhdGEuZW5jaGFudFVzYWdlW2lkUGFydHNbMV1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1cGRhdGVIVE1MVmFsdWVzIGZvciB1bmtub3duIGlkXCIsIGlkLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlT3B0aW1pemVCdXR0b24oZW5hYmxlKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVwiKTtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLWdyZXlcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1vcmFuZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi1vcmFuZ2VcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1ncmV5XCIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck9wdGltaXplclJlc3VsdChvcHRpbWl6ZXIpIHtcbiAgICBsZXQgaHRtbCA9IFwiXCI7XG4gICAgbGV0IGhpZ2hlc3RJbmRleCA9IE1hdGgubWF4KFxuICAgICAgb3B0aW1pemVyLmJlc3RJdGVtcy5XZWFwb24ubGVuZ3RoLFxuICAgICAgb3B0aW1pemVyLmJlc3RJdGVtcy5Bcm1vci5sZW5ndGgsXG4gICAgICBvcHRpbWl6ZXIuYmVzdEl0ZW1zLkpld2VscnkubGVuZ3RoXG4gICAgKTtcbiAgICBsZXQgaXRlbTtcbiAgICBmb3IgKGxldCBiZXN0SXRlbUluZGV4ID0gMDsgYmVzdEl0ZW1JbmRleCA8IGhpZ2hlc3RJbmRleDsgYmVzdEl0ZW1JbmRleCsrKSB7XG4gICAgICBpdGVtID0gb3B0aW1pemVyLmJlc3RJdGVtcy5XZWFwb25bYmVzdEl0ZW1JbmRleF07XG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwidGhpcmRcIj5cbiAgICAgICAgJHtpdGVtID8gaXRlbS5raW5kIDogXCItXCJ9XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgICBpdGVtID0gb3B0aW1pemVyLmJlc3RJdGVtcy5Bcm1vcltiZXN0SXRlbUluZGV4XTtcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ0aGlyZFwiPlxuICAgICAgICAke2l0ZW0gPyBpdGVtLmtpbmQgOiBcIi1cIn1cbiAgICAgIDwvZGl2PmA7XG5cbiAgICAgIGl0ZW0gPSBvcHRpbWl6ZXIuYmVzdEl0ZW1zLkpld2VscnlbYmVzdEl0ZW1JbmRleF07XG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwidGhpcmRcIj5cbiAgICAgICAgJHtpdGVtID8gaXRlbS5raW5kIDogXCItXCJ9XG4gICAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplUmVzdWx0SXRlbXNcIikuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGh0bWwgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgZWZmZWN0S2luZCBpbiBvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzKSB7XG4gICAgICBpZiAob3B0aW1pemVyLmJlc3RFbmNoYW50c1tlZmZlY3RLaW5kXSA+IDApIHtcbiAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImhhbHZlXCI+XG4gICAgICAgICAgJHtlZmZlY3RLaW5kfTogJHtvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzW2VmZmVjdEtpbmRdfVxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplUmVzdWx0RW5jaGFudHNcIikuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGh0bWwgPSBcIlwiO1xuICAgIGZvciAoY29uc3Qgc2V0S2luZCBpbiBvcHRpbWl6ZXIuc2V0SXRlbXMpIHtcbiAgICAgIGlmIChvcHRpbWl6ZXIuc2V0SXRlbXNbc2V0S2luZF0uYWN0aXZlU2V0SXRlbXMgPiAwKSB7XG4gICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJoYWx2ZVwiPlxuICAgICAgICAgICR7c2V0S2luZH06ICR7b3B0aW1pemVyLnNldEl0ZW1zW3NldEtpbmRdLmFjdGl2ZVNldEl0ZW1zfVxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGltaXplUmVzdWx0U2V0SXRlbXNcIikuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIHRoaXMucmVuZGVyT3B0aW1pemVyUmVzdWx0RW5jaHRhbnRTcHJlYWQob3B0aW1pemVyKTtcbiAgfVxuXG4gIGNvbG9ycyA9IFtcbiAgICBcIiMzMzY2Q0NcIixcbiAgICBcIiNEQzM5MTJcIixcbiAgICBcIiNGRjk5MDBcIixcbiAgICBcIiMxMDk2MThcIixcbiAgICBcIiM5OTAwOTlcIixcbiAgICBcIiMzQjNFQUNcIixcbiAgICBcIiMwMDk5QzZcIixcbiAgICBcIiNERDQ0NzdcIixcbiAgICBcIiM2NkFBMDBcIixcbiAgICBcIiNCODJFMkVcIixcbiAgICBcIiMzMTYzOTVcIixcbiAgICBcIiM5OTQ0OTlcIixcbiAgICBcIiMyMkFBOTlcIixcbiAgICBcIiNBQUFBMTFcIixcbiAgICBcIiM2NjMzQ0NcIixcbiAgICBcIiNFNjczMDBcIixcbiAgICBcIiM4QjA3MDdcIixcbiAgICBcIiMzMjkyNjJcIixcbiAgICBcIiM1NTc0QTZcIixcbiAgICBcIiMzQjNFQUNcIixcbiAgICBcIiNGRjAwRkZcIixcbiAgICBcIiNGRjY2MDBcIixcbiAgICBcIiNDNzE1ODVcIixcbiAgICBcIiMwMDdCQTdcIixcbiAgICBcIiNGRjdGNTBcIixcbiAgICBcIiNEQzE0M0NcIixcbiAgICBcIiMwMEZGN0ZcIixcbiAgICBcIiNDMEMwQzBcIixcbiAgICBcIiMwMDgwODBcIixcbiAgICBcIiM4QjAwOEJcIixcbiAgICBcIiNCMDE3MUZcIixcbiAgICBcIiM2OTY5NjlcIixcbiAgICBcIiM0ODNEOEJcIixcbiAgICBcIiMwMDgwMDBcIixcbiAgICBcIiNBMDUyMkRcIixcbiAgICBcIiNGRkMwQ0JcIixcbiAgICBcIiNBREQ4RTZcIixcbiAgICBcIiM4N0NFRkFcIixcbiAgICBcIiNEQTcwRDZcIixcbiAgICBcIiNGMDgwODBcIixcbiAgICBcIiNFMEZGRkZcIixcbiAgICBcIiNGQTgwNzJcIixcbiAgICBcIiNGRkU0RTFcIixcbiAgICBcIiNCQTU1RDNcIixcbiAgICBcIiNGRkVCQ0RcIixcbiAgICBcIiM3RkZGRDRcIixcbiAgICBcIiNGMEU2OENcIixcbiAgICBcIiNEMkI0OENcIixcbiAgICBcIiNBRkVFRUVcIixcbiAgICBcIiNGRjYzNDdcIixcbiAgICBcIiNGRkVGRDVcIixcbiAgICBcIiM2QjhFMjNcIixcbiAgICBcIiNDRDVDNUNcIixcbiAgICBcIiNGNEE0NjBcIixcbiAgICBcIiNEOEJGRDhcIixcbiAgICBcIiM5OTMyQ0NcIixcbiAgICBcIiNGRjhDMDBcIixcbiAgICBcIiM5OTMyQ0NcIixcbiAgICBcIiNGRkQ3MDBcIixcbiAgICBcIiNCMEM0REVcIixcbiAgICBcIiM0MEUwRDBcIixcbiAgICBcIiNGRkI2QzFcIixcbiAgICBcIiMwMENFRDFcIixcbiAgICBcIiNCQTU1RDNcIixcbiAgICBcIiM3QjY4RUVcIixcbiAgICBcIiNFNkU2RkFcIixcbiAgICBcIiM4RkJDOEZcIixcbiAgICBcIiMwMEZBOUFcIixcbiAgICBcIiMxOTE5NzBcIixcbiAgICBcIiNGNURFQjNcIixcbiAgXTtcblxuICBvcHRpbWl6ZVJlc3VsdFRvdGFsRXNlQmFyQ2hhcnQgPSBudWxsO1xuICByZW5kZXJPcHRpbWl6ZXJSZXN1bHRFbmNodGFudFNwcmVhZChvcHRpbWl6ZXIpIHtcbiAgICBpZiAodGhpcy5vcHRpbWl6ZVJlc3VsdFRvdGFsRXNlQmFyQ2hhcnQpIHtcbiAgICAgIHRoaXMub3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsZXQgbGFiZWxzID0gW107XG4gICAgbGV0IGVmZmVjdEtpbmRUb0RhdGFJbmRleCA9IHt9O1xuICAgIGxldCBkYXRhU2V0cyA9IHtcbiAgICAgIGVuY2hhbnRzOiB7XG4gICAgICAgIGxhYmVsOiBcIkVuY2hhbnRzXCIsXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiBvcHRpbWl6ZXIudG90YWxFc2VXaXRoRW5jaGFudHMpIHtcbiAgICAgIGlmICghb3B0aW1pemVyLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFJbmRleCA9IGxhYmVscy5sZW5ndGg7XG4gICAgICBlZmZlY3RLaW5kVG9EYXRhSW5kZXhbZWZmZWN0S2luZF0gPSBkYXRhSW5kZXg7XG5cbiAgICAgIGxhYmVsc1tkYXRhSW5kZXhdID0gZWZmZWN0S2luZDtcblxuICAgICAgZGF0YVNldHMuZW5jaGFudHMuZGF0YVtkYXRhSW5kZXhdID0gb3B0aW1pemVyLmJlc3RFbmNoYW50c1tlZmZlY3RLaW5kXTtcbiAgICB9XG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xuICAgIGZvciAobGV0IHBhcnQgaW4gb3B0aW1pemVyLmJlc3RJdGVtcykge1xuICAgICAgZm9yIChsZXQgaXRlbSBvZiBvcHRpbWl6ZXIuYmVzdEl0ZW1zW3BhcnRdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVNldHNbaXRlbS5raW5kXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGRhdGFTZXRzW2l0ZW0ua2luZF0gPSB7XG4gICAgICAgICAgICBsYWJlbDogaXRlbS5raW5kLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3JzW2NvbG9ySW5kZXhdLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb2xvckluZGV4ID0gKGNvbG9ySW5kZXggKyAxKSAlIHRoaXMuY29sb3JzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gb3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3RLaW5kVG9EYXRhSW5kZXhbZWZmZWN0S2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBlZmZlY3RLaW5kVG9EYXRhSW5kZXhbZWZmZWN0S2luZF07XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhU2V0c1tpdGVtLmtpbmRdLmRhdGFbZGF0YUluZGV4XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZGF0YVNldHNbaXRlbS5raW5kXS5kYXRhW2RhdGFJbmRleF0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0ucmVsRWZmZWN0c1tlZmZlY3RLaW5kXSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZGF0YVNldHNbaXRlbS5raW5kXS5kYXRhW2RhdGFJbmRleF0gKz1cbiAgICAgICAgICAgICAgaXRlbS5yZWxFZmZlY3RzW2VmZmVjdEtpbmRdICogaXRlbS5zZXRFZmZlY3RNdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkYXRhU2V0c0FycmF5ID0gW107XG4gICAgZm9yIChsZXQgZGF0YVNldCBpbiBkYXRhU2V0cykge1xuICAgICAgZGF0YVNldHNBcnJheS5wdXNoKGRhdGFTZXRzW2RhdGFTZXRdKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGltaXplUmVzdWx0VG90YWxFc2VCYXJDaGFydCA9IG5ldyBDaGFydChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW1pemVSZXN1bHRUb3RhbEVzZUJhckNoYXJ0XCIpLFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgZGF0YXNldHM6IGRhdGFTZXRzQXJyYXksXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICB0ZXh0OiBcIkVuY2hhbnQgU3ByZWFkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck9wdGltaXplclJlc3VsdERhdGFEdW1wKG9wdGltaXplcikge1xuICAgIGxldCBodG1sID1cbiAgICAgIFwiPGgyPlJlc3VsdHM8L2gyPjxwPmNsaWNrIG9uIHRoZSBoZWFkZXJzIHRvIGNvbGxhcHNlIHRoZSBzZWN0aW9uPC9wPlwiO1xuXG4gICAgaHRtbCArPSBgPGgzPml0ZW1zPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGltaXplci5pdGVtcykpLFxuICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgZGVsZXRlIHZhbHVlLmVmZmVjdHM7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5sZXZlbE1heEVmZmVjdHM7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICAyXG4gICAgKX08L3ByZT5gO1xuXG4gICAgaHRtbCArPSBgPGgzPnRvdGFsRXNlPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICBvcHRpbWl6ZXIudG90YWxFc2UsXG4gICAgICBudWxsLFxuICAgICAgMlxuICAgICl9PC9wcmU+YDtcbiAgICBodG1sICs9IGA8aDM+dG90YWxFc2VXaXRoRW5jaGFudHM8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcbiAgICAgIG9wdGltaXplci50b3RhbEVzZVdpdGhFbmNoYW50cyxcbiAgICAgIG51bGwsXG4gICAgICAyXG4gICAgKX08L3ByZT5gO1xuICAgIGh0bWwgKz0gYDxoMz50b3RhbEVzZVdpdGhFbmNoYW50czwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxuICAgICAgb3B0aW1pemVyLnRvdGFsRXNlLFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApfTwvcHJlPmA7XG5cbiAgICBodG1sICs9IGA8aDM+YmVzdEVuY2hhbnRzPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICBvcHRpbWl6ZXIuYmVzdEVuY2hhbnRzLFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApfTwvcHJlPmA7XG5cbiAgICBodG1sICs9IGA8aDM+YmVzdEl0ZW1zPC9oMz48cHJlPiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGltaXplci5iZXN0SXRlbXMpKSxcbiAgICAgIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5lZmZlY3RzO1xuICAgICAgICBkZWxldGUgdmFsdWUubGV2ZWxNYXhFZmZlY3RzO1xuICAgICAgICBkZWxldGUgdmFsdWUucmVsRWZmZWN0cztcbiAgICAgICAgZGVsZXRlIHZhbHVlLmVzZTtcbiAgICAgICAgZGVsZXRlIHZhbHVlLnBhcnQ7XG4gICAgICAgIGRlbGV0ZSB2YWx1ZS5zZXRFZmZlY3RNdWx0O1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgMlxuICAgICl9PC9wcmU+YDtcblxuICAgIGh0bWwgKz0gYDxoMz5zZXRJdGVtczwvaDM+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxuICAgICAgb3B0aW1pemVyLnNldEl0ZW1zLFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApfTwvcHJlPmA7XG5cbiAgICBodG1sICs9IGA8aDM+dG90YWw8L2gzPjxwcmU+JHtKU09OLnN0cmluZ2lmeShcbiAgICAgIG9wdGltaXplci5nZXRUb3RhbEVuY2hhbnRzVmFsdWUob3B0aW1pemVyLnRvdGFsRXNlV2l0aEVuY2hhbnRzKSxcbiAgICAgIG51bGwsXG4gICAgICAyXG4gICAgKX08L3ByZT5gO1xuXG4gICAgLy9UT0RPIGJyZWFrZG93biB0b3RhbEVzZVdpdGhFbmNoYW50cyBieSBzb3VyY2VzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcHRpbWl6ZVJlc3VsdERhdGFEdW1wXCIpLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjb3B0aW1pemVSZXN1bHREYXRhRHVtcCA+IGgzXCIpXG4gICAgICAuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgIGlmIChuZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9wdGltaXplKCkge1xuICAgIHRoaXMudG9nZ2xlT3B0aW1pemVCdXR0b24oZmFsc2UpO1xuXG4gICAgdGhpcy5zYXZlKCk7XG5cbiAgICBjb25zdCBvcHRpbWl6ZXIgPSBuZXcgT3B0aW1pemVyKHRoaXMuZGF0YSk7XG4gICAgb3B0aW1pemVyLm9wdGltaXplKCk7XG5cbiAgICB0aGlzLnJlbmRlck9wdGltaXplclJlc3VsdChvcHRpbWl6ZXIpO1xuICAgIHRoaXMucmVuZGVyT3B0aW1pemVyUmVzdWx0RGF0YUR1bXAob3B0aW1pemVyKTtcblxuICAgIHRoaXMudG9nZ2xlT3B0aW1pemVCdXR0b24odHJ1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgR2VhciB9O1xuIiwiaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCIgYXNzZXJ0IHsgdHlwZTogXCJqc29uXCIgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpbWl6ZXIge1xyXG4gIGl0ZW1MZXZlbCA9IDEyMDtcclxuICBpbmNsdWRlTWFzdGVyeSA9IHRydWU7XHJcbiAgY3Vyc2VBbnZpbCA9IHRydWU7XHJcbiAgbG90dGVyeSA9IHRydWU7XHJcbiAgaXRlbVNsb3RzID0ge1xyXG4gICAgSmV3ZWxyeTogMTksXHJcbiAgICBBcm1vcjogMTksXHJcbiAgICBXZWFwb246IDE5LFxyXG4gIH07XHJcbiAgZW5jaGFudFNsb3RzID0gMzQyO1xyXG4gIHNldEJpYXMgPSAwLjA3NTtcclxuICBlbmNoYW50VXNhZ2UgPSB7XHJcbiAgICBVbmljb3JuS25vd2xlZGdlOiBcIlwiLFxyXG4gICAgSFBBZGRlcjogXCJcIixcclxuICAgIE1QQWRkZXI6IFwiXCIsXHJcbiAgICBBVEtBZGRlcjogXCJcIixcclxuICAgIE1BVEtBZGRlcjogXCJcIixcclxuICAgIERFRkFkZGVyOiBcIlwiLFxyXG4gICAgTURFRkFkZGVyOiBcIlwiLFxyXG4gICAgU1BEQWRkZXI6IFwiXCIsXHJcbiAgICBIUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBNUE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBBVEtNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgTUFUS011bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBERUZNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTURFRk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBBVEtQcm9wb3Rpb246IFwiZHBzXCIsXHJcbiAgICBNQVRLUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgREVGUHJvcG90aW9uOiBcIlwiLFxyXG4gICAgTURFRlByb3BvdGlvbjogXCJcIixcclxuICAgIEZpcmVSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgSWNlUmVzaXN0YW5jZTogXCJcIixcclxuICAgIFRodW5kZXJSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgTGlnaHRSZXNpc3RhbmNlOiBcIlwiLFxyXG4gICAgRGFya1Jlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBQaHlzaWNhbEFic29ycHRpb246IFwiXCIsXHJcbiAgICBGaXJlQWJzb3JwdGlvbjogXCJcIixcclxuICAgIEljZUFic29ycHRpb246IFwiXCIsXHJcbiAgICBUaHVuZGVyQWJzb3JwdGlvbjogXCJcIixcclxuICAgIExpZ2h0QWJzb3JwdGlvbjogXCJcIixcclxuICAgIERhcmtBYnNvcnB0aW9uOiBcIlwiLFxyXG4gICAgRGVidWZmUmVzaXN0YW5jZTogXCJcIixcclxuICAgIEVxdWlwbWVudERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBTbGltZURyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBNYWdpY1NsaW1lRHJvcENoYW5jZTogXCJcIixcclxuICAgIFNwaWRlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBCYXREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRmFpcnlEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRm94RHJvcENoYW5jZTogXCJcIixcclxuICAgIERldmlsRmlzaERyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBUcmVhbnREcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgRmxhbWVUaWdlckRyb3BDaGFuY2U6IFwiXCIsXHJcbiAgICBVbmljb3JuRHJvcENoYW5jZTogXCJcIixcclxuICAgIENvbG9yTWF0ZXJpYWxEcm9wQ2hhbmNlOiBcIlwiLFxyXG4gICAgUGh5c2ljYWxDcml0aWNhbDogXCJkcHNcIixcclxuICAgIE1hZ2ljYWxDcml0aWNhbDogXCJcIixcclxuICAgIEVYUEdhaW46IFwiZ2FpbnNcIixcclxuICAgIFNraWxsUHJvZmljaWVuY3k6IFwiZ2FpbnNcIixcclxuICAgIEVxdWlwbWVudFByb2ZpY2llbmN5OiBcImdhaW5zXCIsXHJcbiAgICBNb3ZlU3BlZWRNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgR29sZEdhaW46IFwiXCIsXHJcbiAgICBTdG9uZUdhaW46IFwiXCIsXHJcbiAgICBDcnlzdGFsR2FpbjogXCJcIixcclxuICAgIExlYWZHYWluOiBcIlwiLFxyXG4gICAgV2FycmlvclNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBXaXphcmRTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgQW5nZWxTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgVGhpZWZTa2lsbExldmVsOiBcIlwiLFxyXG4gICAgQXJjaGVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgIFRhbWVyU2tpbGxMZXZlbDogXCJcIixcclxuICAgIEFsbFNraWxsTGV2ZWw6IFwiXCIsXHJcbiAgICBTbGltZUtub3dsZWRnZTogXCJcIixcclxuICAgIE1hZ2ljU2xpbWVLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBTcGlkZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBCYXRLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBGYWlyeUtub3dsZWRnZTogXCJcIixcclxuICAgIEZveEtub3dsZWRnZTogXCJcIixcclxuICAgIERldmlsRmlzaEtub3dsZWRnZTogXCJcIixcclxuICAgIFRyZWFudEtub3dsZWRnZTogXCJcIixcclxuICAgIEZsYW1lVGlnZXJLbm93bGVkZ2U6IFwiXCIsXHJcbiAgICBQaHlzaWNhbERhbWFnZTogXCJcIixcclxuICAgIEZpcmVEYW1hZ2U6IFwiXCIsXHJcbiAgICBJY2VEYW1hZ2U6IFwiZHBzXCIsXHJcbiAgICBUaHVuZGVyRGFtYWdlOiBcIlwiLFxyXG4gICAgTGlnaHREYW1hZ2U6IFwiXCIsXHJcbiAgICBEYXJrRGFtYWdlOiBcIlwiLFxyXG4gICAgSHBSZWdlbjogXCJcIixcclxuICAgIE1wUmVnZW46IFwiXCIsXHJcbiAgICBUYW1pbmdQb2ludDogXCJcIixcclxuICAgIFdhcnJpb3JTa2lsbFJhbmdlOiBcIlwiLFxyXG4gICAgV2l6YXJkU2tpbGxSYW5nZTogXCJcIixcclxuICAgIEFuZ2VsU2tpbGxSYW5nZTogXCJcIixcclxuICAgIFRoaWVmU2tpbGxSYW5nZTogXCJcIixcclxuICAgIEFyY2hlclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBUYW1lclNraWxsUmFuZ2U6IFwiXCIsXHJcbiAgICBUb3duTWF0R2FpbjogXCJnYWluc1wiLFxyXG4gICAgVG93bk1hdEFyZWFDbGVhckdhaW46IFwiXCIsXHJcbiAgICBSZWJpcnRoUG9pbnRHYWluMTogXCJnYWluc1wiLFxyXG4gICAgUmViaXJ0aFBvaW50R2FpbjI6IFwiZ2FpbnNcIixcclxuICAgIFJlYmlydGhQb2ludEdhaW4zOiBcImdhaW5zXCIsXHJcbiAgICBDcml0aWNhbERhbWFnZTogXCJkcHNcIixcclxuICAgIEJsZXNzaW5nRWZmZWN0OiBcImRwc1wiLFxyXG4gICAgTW92ZVNwZWVkQWRkZXI6IFwiXCIsXHJcbiAgICBQZXRFWFBHYWluOiBcIlwiLFxyXG4gICAgTG95YWx0eVBvaW50R2FpbjogXCJcIixcclxuICAgIENhdGFseXN0RG91YmxlQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICBXYXJyaW9yU2tpbGxFZmZlY3RSYW5nZTogXCJcIixcclxuICAgIFdpemFyZFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBBbmdlbFNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBUaGllZlNraWxsRWZmZWN0UmFuZ2U6IFwiXCIsXHJcbiAgICBBcmNoZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgVGFtZXJTa2lsbEVmZmVjdFJhbmdlOiBcIlwiLFxyXG4gICAgSHBSZWdlbk11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBNcFJlZ2VuTXVsdGlwbGllcjogXCJcIixcclxuICAgIEFybW9yZWRGdXJ5OiBcIlwiLFxyXG4gICAgV2FyZGVkRnVyeTogXCJkcHNcIixcclxuICAgIFBldFBoeXNpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICBQZXRNYWdpY2FsQ3JpdGljYWxDaGFuY2U6IFwiXCIsXHJcbiAgICBQZXRDcml0aWNhbERhbWFnZTogXCJcIixcclxuICAgIFBldERlYnVmZlJlc2lzdGFuY2U6IFwiXCIsXHJcbiAgICBTdG9uZVRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgQ3J5c3RhbFRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgTGVhZlRvd25SZXNlYXJjaFBvd2VyOiBcIlwiLFxyXG4gICAgR3VpbGRFWFBHYWluOiBcImdhaW5zXCIsXHJcbiAgICBTUERNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQ3JpdGljYWxEYW1hZ2VNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgU2tpbGxQcm9maWNpZW5jeU11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgIEVxdWlwbWVudFByb2ZpY2llbmN5TXVsdGlwbGllcjogXCJnYWluc1wiLFxyXG4gICAgRVhQR2Fpbk11bHRpcGxpZXI6IFwiZ2FpbnNcIixcclxuICAgIEdvbGRHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgIFBoeXNpY2FsRGFtYWdlTXVsdGlwbGllcjogXCJcIixcclxuICAgIEZpcmVEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgSWNlRGFtYWdlTXVsdGlwbGllcjogXCJkcHNcIixcclxuICAgIFRodW5kZXJEYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgTGlnaHREYW1hZ2VNdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgRGFya0RhbWFnZU11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBUYW1pbmdQb2ludE11bHRpcGxpZXI6IFwiXCIsXHJcbiAgICBQZXRFWFBHYWluTXVsdGlwbGllcjogXCJcIixcclxuICAgIExveWFsdHlQb2ludEdhaW5NdWx0aXBsaWVyOiBcIlwiLFxyXG4gICAgQmxlc3NpbmdFZmZlY3RNdWx0aXBsaWVyOiBcImRwc1wiLFxyXG4gICAgUGh5c2ljYWxDcml0aWNhbE11bHRpcGxpZXI6IFwiZHBzXCIsXHJcbiAgICBNYWdpY2FsQ3JpdGljYWxNdWx0aXBsaWVyOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVzZXJJbnB1dCkge1xyXG4gICAgdGhpcy5pdGVtTGV2ZWwgPSB1c2VySW5wdXQuaXRlbUxldmVsO1xyXG4gICAgdGhpcy5pbmNsdWRlTWFzdGVyeSA9IHVzZXJJbnB1dC5pbmNsdWRlTWFzdGVyeTtcclxuICAgIHRoaXMuY3Vyc2VBbnZpbCA9IHVzZXJJbnB1dC5jdXJzZUFudmlsO1xyXG4gICAgdGhpcy5sb3R0ZXJ5ID0gdXNlcklucHV0LmxvdHRlcnk7XHJcbiAgICB0aGlzLml0ZW1TbG90cyA9IHVzZXJJbnB1dC5pdGVtU2xvdHM7XHJcbiAgICB0aGlzLmVuY2hhbnRTbG90cyA9IHVzZXJJbnB1dC5lbmNoYW50U2xvdHM7XHJcbiAgICB0aGlzLnNldEJpYXMgPSB1c2VySW5wdXQuc2V0QmlhcztcclxuICAgIHRoaXMuZW5jaGFudFVzYWdlID0gdXNlcklucHV0LmVuY2hhbnRVc2FnZTtcclxuICB9XHJcblxyXG4gIG9wdGltaXplKCkge1xyXG4gICAgdGhpcy5zdGVwMSgpO1xyXG4gICAgdGhpcy5zdGVwMigpO1xyXG4gIH1cclxuXHJcbiAgZW5jaGFudE1hcCA9IHt9O1xyXG4gIGNhbGNFbmNoYW50RWZmZWN0VmFsdWUoZWZmZWN0KSB7XHJcbiAgICBsZXQgZW5jaGFudCA9IHRoaXMuZW5jaGFudE1hcFtlZmZlY3Qua2luZF07XHJcbiAgICBsZXQgZW5jaGFudEVmZmVjdFZhbHVlID0gZW5jaGFudC5tYXhWYWx1ZTtcclxuICAgIGlmICh0aGlzLmxvdHRlcnkpIHtcclxuICAgICAgZW5jaGFudEVmZmVjdFZhbHVlID0gZW5jaGFudC5tYXhWYWx1ZUxvdHRlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuICB9XHJcbiAgY2FsY0l0ZW1FZmZlY3RWYWx1ZShlZmZlY3QpIHtcclxuICAgIGxldCBpdGVtRWZmZWN0VmFsdWUgPSBlZmZlY3QuaW5pdFZhbHVlICsgZWZmZWN0LmJhc2VWYWx1ZSAqIHRoaXMuaXRlbUxldmVsO1xyXG5cclxuICAgIGlmIChpdGVtRWZmZWN0VmFsdWUgPCAwICYmIHRoaXMuY3Vyc2VBbnZpbCkge1xyXG4gICAgICAvL3RoaXMgaXMgYSBjdXJzZWQgZWZmZWN0LCBpZiB3ZSBhZGQgY3Vyc2UgYW52aWxzIGl0IHdpbGwgYmUgbnVsbGlmaWVkXHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtRWZmZWN0VmFsdWU7XHJcbiAgfVxyXG4gIGl0ZW1zID0gW107XHJcbiAgc3RlcDEoKSB7XHJcbiAgICBsZXQgZW5jaGFudFVzYWdlQWRkZWROZXcgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBlbmNoYW50IG9mIGRhdGEuZW5jaGFudHMpIHtcclxuICAgICAgdGhpcy5lbmNoYW50TWFwW2VuY2hhbnQua2luZF0gPSBlbmNoYW50O1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVuY2hhbnRVc2FnZVtlbmNoYW50LmtpbmRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJmb3VuZCBuZXcgZW5jaGFudCBub3QgbGlzdGVkIGluIGVuY2hhbnRVc2FnZVwiLFxyXG4gICAgICAgICAgZW5jaGFudC5raW5kXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmVuY2hhbnRVc2FnZVtlbmNoYW50LmtpbmRdID0gXCJcIjtcclxuICAgICAgICBlbmNoYW50VXNhZ2VBZGRlZE5ldyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW5jaGFudFVzYWdlQWRkZWROZXcpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09cHJpbnRpbmcgZW5jaGFudFVzYWdlPT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS53YXJuKHRoaXMuZW5jaGFudFVzYWdlKTtcclxuICAgICAgY29uc29sZS53YXJuKHRoaXMuZW5jaGFudFVzYWdlKTtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIlxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEuaXRlbXMpIHtcclxuICAgICAgLy9maWx0ZXIgb3V0IHZlcnkgYmFkIGl0ZW1zXHJcbiAgICAgIGlmIChpdGVtLnNldEtpbmQgPT09IFwiTm90aGluZ1wiKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgbGV0IGVzZSA9IHtcclxuICAgICAgICBzbG90czogNCxcclxuICAgICAgICBtYXN0ZXJpZXM6IDAsXHJcbiAgICAgICAgZWZmZWN0czogMCxcclxuICAgICAgICBzdW06IDAsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgcmVsRWZmZWN0cyA9IHt9O1xyXG5cclxuICAgICAgZm9yIChsZXQgZWZmZWN0IG9mIGl0ZW0uZWZmZWN0cykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVsRWZmZWN0c1tlZmZlY3Qua2luZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1FZmZlY3RWYWx1ZSA9IHRoaXMuY2FsY0l0ZW1FZmZlY3RWYWx1ZShlZmZlY3QpO1xyXG4gICAgICAgIGxldCBlbmNoYW50RWZmZWN0VmFsdWUgPSB0aGlzLmNhbGNFbmNoYW50RWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICByZWxFZmZlY3RzW2VmZmVjdC5raW5kXSArPSBpdGVtRWZmZWN0VmFsdWUgLyBlbmNoYW50RWZmZWN0VmFsdWU7XHJcblxyXG4gICAgICAgIC8vaWYgd2UgY2FyZSBhYm91dCB0aGlzIGVmZmVjdCwgaW5jbHVkZSBpbiB0aGUgZXNlXHJcbiAgICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdC5raW5kXSkge1xyXG4gICAgICAgICAgZXNlLmVmZmVjdHMgKz0gaXRlbUVmZmVjdFZhbHVlIC8gZW5jaGFudEVmZmVjdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaW5jbHVkZU1hc3RlcnkpIHtcclxuICAgICAgICBmb3IgKGxldCBlZmZlY3Qgb2YgaXRlbS5sZXZlbE1heEVmZmVjdHMpIHtcclxuICAgICAgICAgIC8vZWZmZWN0LmtpbmQgTm90aGluZyBhcmUgZW5jaGFudCBTbG90c1xyXG4gICAgICAgICAgaWYgKGVmZmVjdC5raW5kID09PSBcIk5vdGhpbmdcIikge1xyXG4gICAgICAgICAgICBpZiAoZWZmZWN0LmluaXRWYWx1ZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgIGVzZS5zbG90cyA9IDc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZXNlLnNsb3RzID0gNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBpdGVtRWZmZWN0VmFsdWUgPSB0aGlzLmNhbGNJdGVtRWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICAgIGxldCBlbmNoYW50RWZmZWN0VmFsdWUgPSB0aGlzLmNhbGNFbmNoYW50RWZmZWN0VmFsdWUoZWZmZWN0KTtcclxuICAgICAgICAgIHJlbEVmZmVjdHNbZWZmZWN0LmtpbmRdICs9IGl0ZW1FZmZlY3RWYWx1ZSAvIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuXHJcbiAgICAgICAgICAvL2lmIHdlIGNhcmUgYWJvdXQgdGhpcyBlZmZlY3QsIGluY2x1ZGUgaW4gdGhlIGVzZVxyXG4gICAgICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdC5raW5kXSkge1xyXG4gICAgICAgICAgICBlc2UubWFzdGVyaWVzICs9IGl0ZW1FZmZlY3RWYWx1ZSAvIGVuY2hhbnRFZmZlY3RWYWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVzZS5zdW0gPSBlc2Uuc2xvdHMgKyBlc2UubWFzdGVyaWVzICsgZXNlLmVmZmVjdHM7XHJcblxyXG4gICAgICBpdGVtLmVzZSA9IGVzZTtcclxuXHJcbiAgICAgIGl0ZW0ucmVsRWZmZWN0cyA9IHJlbEVmZmVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBiLmVzZS5zdW0gLSBhLmVzZS5zdW07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvdGFsRXNlID0ge307XHJcbiAgdG90YWxFc2VXaXRoRW5jaGFudHMgPSB7fTtcclxuICBiZXN0RW5jaGFudHMgPSB7fTtcclxuICBiZXN0SXRlbXMgPSB7XHJcbiAgICBKZXdlbHJ5OiBbXSxcclxuICAgIEFybW9yOiBbXSxcclxuICAgIFdlYXBvbjogW10sXHJcbiAgfTtcclxuICBzZXRJdGVtcyA9IHt9O1xyXG5cclxuICAvL1RPRE8gcmV0dXJuIGEgb2JqZWN0IG5vdCBhIGZsb2F0XHJcbiAgLy8gaGF2ZSBzZXBlcmF0ZSB2YWx1ZXMgZm9yIGRwcyBhbmQgZ2FpbnMsIC4uLlxyXG4gIGdldFRvdGFsRW5jaGFudHNWYWx1ZShlbmNoYW50cywgZW5jaGFudHNUb0FkZCkge1xyXG4gICAgbGV0IHRvdGFsID0gMTtcclxuXHJcbiAgICAvL1RPRE8gaW1wcm92ZSB0aGUgYWNjdXJhY3lcclxuICAgIC8vIGNvbnNpZGVyIGJhc2UgZW5jaGFudCB2YWx1ZVxyXG4gICAgLy8gY29uc2lkZXIgb3V0bGVpciBsaWtlIGZ1cnlcclxuICAgIC8vY29uc2lkZXIgdGFyZ2V0IGNhcHMgZm9yIGRwcyBhbmQgY3JpdCBjaGFuY2VcclxuICAgIGZvciAobGV0IGVmZmVjdEtpbmQgaW4gZW5jaGFudHMpIHtcclxuICAgICAgLy9pZiB3ZSBkb250IGNhcmUgZm9yIHRoZXNlIGRvbnQgaW5jbHVkZSB0aGVtIGluIHRoZSB2YWx1ZVxyXG4gICAgICBpZiAoIXRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlZmZlY3RWYWx1ZSA9IGVuY2hhbnRzW2VmZmVjdEtpbmRdO1xyXG4gICAgICBpZiAoZW5jaGFudHNUb0FkZCAmJiBlbmNoYW50c1RvQWRkW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgZWZmZWN0VmFsdWUgKz0gZW5jaGFudHNUb0FkZFtlZmZlY3RLaW5kXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG90YWwgKj0gMSArIGVmZmVjdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcbiAgc3RlcDIoKSB7XHJcbiAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIHRoaXMuZW5jaGFudFVzYWdlKSB7XHJcbiAgICAgIHRoaXMudG90YWxFc2VbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICB0aGlzLmJlc3RFbmNoYW50c1tlZmZlY3RLaW5kXSA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmVuY2hhbnRVc2FnZVtlZmZlY3RLaW5kXSkge1xyXG4gICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNldEl0ZW1zRWZmZWN0TXVsdCA9IFsxLCAxLCAxLjA1LCAxLjEsIDEuMTQsIDEuMTksIDEuMjUsIDEuMzUsIDEuNV07XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgaXRlbS5zZXRFZmZlY3RNdWx0ID0gMDtcclxuICAgICAgaWYgKGl0ZW0uc2V0S2luZCAhPT0gXCJOb3RoaW5nXCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdID0ge1xyXG4gICAgICAgICAgICBuZXdTZXRJdGVtVmFsdWU6IDAsXHJcbiAgICAgICAgICAgIGFjdGl2ZVNldEl0ZW1zOiAwLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRCZXN0SXRlbSA9IChwYXJ0KSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgIGlmIChpdGVtLnBhcnQgPT09IHBhcnQpIHtcclxuICAgICAgICAgIC8vaXRlbXMgaXMgc29ydGVkLCBzbyB3ZSBqdXN0IHJldHVybiB0aGUgZmlyc3Qgd2hpY2ggbWF0Y2hlcyB0aGUgcGFydFxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbVRvVG90YWxFc2UgPSAoaXRlbSkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBlZmZlY3RLaW5kIGluIGl0ZW0ucmVsRWZmZWN0cykge1xyXG4gICAgICAgIGlmIChpdGVtLnJlbEVmZmVjdHNbZWZmZWN0S2luZF0gPT09IDApIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3RhbEVzZVtlZmZlY3RLaW5kXSArPVxyXG4gICAgICAgICAgaXRlbS5yZWxFZmZlY3RzW2VmZmVjdEtpbmRdICogaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXVtpdGVtLmtpbmRdKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdW2l0ZW0ua2luZF0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXS5hY3RpdmVTZXRJdGVtcysrO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBhbGwgc2V0IGl0ZW0gc3RyZW5ndGhcclxuICAgICAgICBmb3IgKGxldCBzZXRJdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgIGlmIChzZXRJdGVtLnNldEtpbmQgPT09IGl0ZW0uc2V0S2luZCkge1xyXG4gICAgICAgICAgICBzZXRJdGVtLnNldEVmZmVjdE11bHQgPVxyXG4gICAgICAgICAgICAgIHNldEl0ZW1zRWZmZWN0TXVsdFt0aGlzLnNldEl0ZW1zW2l0ZW0uc2V0S2luZF0uYWN0aXZlU2V0SXRlbXNdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9yZWNhbGN1bGF0ZSB0b3RhbEVzZSB3aXRoIGNoYW5nZWQgc2V0IHN0cmVuZ3RoXHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLnRvdGFsRXNlKSB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsRXNlW2VmZmVjdEtpbmRdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgcGFydCBpbiB0aGlzLmJlc3RJdGVtcykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJlc3RJdGVtc1twYXJ0XSkge1xyXG4gICAgICAgICAgICBhZGRJdGVtVG9Ub3RhbEVzZShpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYmVzdEl0ZW1zW2l0ZW0ucGFydF0ucHVzaChpdGVtKTtcclxuXHJcbiAgICAgIC8vdXBkYXRlIHRoZSB0b3RhbEVzZVxyXG4gICAgICBhZGRJdGVtVG9Ub3RhbEVzZShpdGVtKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRXNlID0gKCkgPT4ge1xyXG4gICAgICAvL3Jlc2V0IHRvdGFsRXNlV2l0aEVuY2hhbnRzXHJcbiAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHMgPSB7fTtcclxuICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLnRvdGFsRXNlKSB7XHJcbiAgICAgICAgdGhpcy5iZXN0RW5jaGFudHNbZWZmZWN0S2luZF0gPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxFc2VXaXRoRW5jaGFudHNbZWZmZWN0S2luZF0gPSB0aGlzLnRvdGFsRXNlW2VmZmVjdEtpbmRdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2NhbGN1YWx0ZSB0aGUgYXZlcmFnZSBzZXQgZWZmZWN0IG11bHQsIG5ldyBlbmNoYW50cyB3aWxsIHVzZSB0aGlzIG9uZVxyXG4gICAgICBsZXQgYXZlcmFnZVNldEVmZmVjdE11bHQgPSAxO1xyXG4gICAgICBsZXQgZXF1aXBwZWRJdGVtQ291bnQgPSAwO1xyXG4gICAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuYmVzdEl0ZW1zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmJlc3RJdGVtc1twYXJ0XSkge1xyXG4gICAgICAgICAgZXF1aXBwZWRJdGVtQ291bnQrKztcclxuXHJcbiAgICAgICAgICBpZiAoZXF1aXBwZWRJdGVtQ291bnQgPT09IDEpXHJcbiAgICAgICAgICAgIGF2ZXJhZ2VTZXRFZmZlY3RNdWx0ID0gaXRlbS5zZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgICAgZWxzZSBhdmVyYWdlU2V0RWZmZWN0TXVsdCArPSBpdGVtLnNldEVmZmVjdE11bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlcXVpcHBlZEl0ZW1Db3VudCA+IDApIHtcclxuICAgICAgICBhdmVyYWdlU2V0RWZmZWN0TXVsdCAvPSBlcXVpcHBlZEl0ZW1Db3VudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGVuY2hhbnRzVG9TcGVudCA9IHRoaXMuZW5jaGFudFNsb3RzO1xyXG4gICAgICB3aGlsZSAoZW5jaGFudHNUb1NwZW50ID4gMCkge1xyXG4gICAgICAgIGxldCBsb3dlc3RFZmZlY3RLaW5kID0gXCJcIjtcclxuICAgICAgICBsZXQgbG93ZXN0RW5jaGFudFZhbHVlID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0S2luZCBpbiB0aGlzLmVuY2hhbnRVc2FnZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZW5jaGFudFVzYWdlW2VmZmVjdEtpbmRdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2VmZmVjdEtpbmRdIDwgbG93ZXN0RW5jaGFudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgbG93ZXN0RWZmZWN0S2luZCA9IGVmZmVjdEtpbmQ7XHJcbiAgICAgICAgICAgICAgbG93ZXN0RW5jaGFudFZhbHVlID0gdGhpcy50b3RhbEVzZVdpdGhFbmNoYW50c1tlZmZlY3RLaW5kXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9UT0RPIGluY2x1ZGUgYXZlcmFnZSBzZXRFZmZlY3RNdWx0XHJcbiAgICAgICAgdGhpcy5iZXN0RW5jaGFudHNbbG93ZXN0RWZmZWN0S2luZF0gKz0gMTtcclxuICAgICAgICB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzW2xvd2VzdEVmZmVjdEtpbmRdICs9IGF2ZXJhZ2VTZXRFZmZlY3RNdWx0O1xyXG4gICAgICAgIGVuY2hhbnRzVG9TcGVudC0tO1xyXG4gICAgICB9XHJcbiAgICAgIC8vVE9ETyBkbyB0aGlzIGZvciB1cCB0byArNyBlbmNoYW50cyBmb3IgaXRlbS5lc2Uuc2xvdHNcclxuXHJcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgIC8vVE9ETyBmYWN0b3IgaW4gaXRlbS5lc2Uuc2xvdHMsIGNob29zZSB0aGUgdG90YWxFc2VXaXRoRW5jaGFudHMgYWNjb3JkaW5nbHlcclxuICAgICAgICBpdGVtLmVzZS51cGRhdGVkU3VtID0gdGhpcy5nZXRUb3RhbEVuY2hhbnRzVmFsdWUoXHJcbiAgICAgICAgICB0aGlzLnRvdGFsRXNlV2l0aEVuY2hhbnRzLFxyXG4gICAgICAgICAgaXRlbS5yZWxFZmZlY3RzXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9hZnRlciBhbGwgbmV3IGl0ZW1WYWx1ZXMgaGF2ZSBiZWVuIGNhbGN1bGF0ZWQsIHVwZGF0ZSB0aGUgc2V0SXRlbVZhbHVlc1xyXG4gICAgICAvLyAgYW5kIGluY3JlYXNlIHRoZSB2YWx1ZSBvZiBpdGVtcyB3aGljaCBhcmUgcGFydCBvZiBhbiBpbmNvbXBsZXRlIHNldFxyXG4gICAgICBmb3IgKGxldCBzZXRLaW5kIGluIHRoaXMuc2V0SXRlbXMpIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW1zW3NldEtpbmRdLm5ld1NldEl0ZW1WYWx1ZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaXRlbVBhcnQgaW4gdGhpcy5iZXN0SXRlbXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuYmVzdEl0ZW1zW2l0ZW1QYXJ0XSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRJdGVtc1tpdGVtLnNldEtpbmRdLm5ld1NldEl0ZW1WYWx1ZSArPVxyXG4gICAgICAgICAgICBpdGVtLmVzZS51cGRhdGVkU3VtICogdGhpcy5zZXRCaWFzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAvL2lmIHRoaXMgaXMgYSBuZXcgc2V0IGl0ZW0sIGFkZCB0aGUgdmFsdWUgb2YgdGhlIG90aGVyIGl0ZW1zIGF0b3Agb2YgaXRcclxuICAgICAgICBpZiAoIXRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXVtpdGVtLmtpbmRdKSB7XHJcbiAgICAgICAgICBpdGVtLmVzZS51cGRhdGVkU3VtICs9IHRoaXMuc2V0SXRlbXNbaXRlbS5zZXRLaW5kXS5uZXdTZXRJdGVtVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLml0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5lc2UudXBkYXRlZFN1bSAtIGEuZXNlLnVwZGF0ZWRTdW07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb25zdHJ1Y3RCZXN0SXRlbXMgPSAoKSA9PiB7XHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgbGV0IGJlc3RQYXJ0ID0gXCJcIjtcclxuICAgICAgICBsZXQgYmVzdFBhcnRGcmVlU2xvdHMgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwYXJ0IGluIHRoaXMuaXRlbVNsb3RzKSB7XHJcbiAgICAgICAgICBsZXQgZnJlZVNsb3RzID0gdGhpcy5pdGVtU2xvdHNbcGFydF0gLSB0aGlzLmJlc3RJdGVtc1twYXJ0XS5sZW5ndGg7XHJcbiAgICAgICAgICBpZiAoZnJlZVNsb3RzID4gYmVzdFBhcnRGcmVlU2xvdHMpIHtcclxuICAgICAgICAgICAgYmVzdFBhcnQgPSBwYXJ0O1xyXG4gICAgICAgICAgICBiZXN0UGFydEZyZWVTbG90cyA9IGZyZWVTbG90cztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vbm8gbW9yZSBpdGVtcyB0byBhZGQsIHdlIGFyZSBkb25lXHJcbiAgICAgICAgaWYgKGJlc3RQYXJ0ID09PSBcIlwiKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmVzdEl0ZW0gPSBmaW5kQmVzdEl0ZW0oYmVzdFBhcnQpO1xyXG4gICAgICAgIGFkZEl0ZW0oYmVzdEl0ZW0pO1xyXG5cclxuICAgICAgICB1cGRhdGVFc2UoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RCZXN0SXRlbXMoKTtcclxuICAgIGZvciAobGV0IHBhcnQgaW4gdGhpcy5iZXN0SXRlbXMpIHtcclxuICAgICAgdGhpcy5iZXN0SXRlbXNbcGFydF0uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLmVzZS5zdW0gPCBiLmVzZS5zdW0pIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5lc2Uuc3VtID4gYi5lc2Uuc3VtKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udmVydCwgY29udmVydDIsIHNpZ21hLCBhZGRFdmVudCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuXG5jbGFzcyBTbGltZUJhbmsge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSBcInNsaW1lQmFua1wiO1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHJlc2VhcmNoOiB7XG4gICAgICAgIGxlYWY6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXG4gICAgICAgIHN0b25lOiB7IGxldmVsOiAwLCB2YWx1ZTogMCB9LFxuICAgICAgfSxcblxuICAgICAgc2xpbWVDb2luQ2FwMToge1xuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgdmFsdWU6IDEwMDAwLFxuICAgICAgICBjb3N0OiAxMDAwMCxcbiAgICAgIH0sXG4gICAgICBzbGltZUNvaW5DYXAyOiB7XG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgICBjb3N0OiAxMDAwMDAwMDAwMCxcbiAgICAgIH0sXG4gICAgICBzbGltZUNvaW5DYXBUb3RhbDogMCxcbiAgICAgIGludHJlc3Q6IDAsXG4gICAgICBtdWx0aXBsaWVyOiAwLFxuICAgICAgcGV0MToge1xuICAgICAgICByYW5rOiAwLFxuICAgICAgICBsb3lhbHR5OiAwLFxuICAgICAgICBwYXNzaXZlOiAwLFxuICAgICAgfSxcbiAgICAgIG1pbGVzdG9uZTE4MDA6IGZhbHNlLFxuICAgICAgbWlsZXN0b25lMjcwMDogZmFsc2UsXG4gICAgfTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xhc3MgY29uc3RydWN0b3IgYWthIEluaXRcIik7XG4gICAgYWRkRXZlbnQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnJlc2VhcmNoU3RvbmUuYmluZCh0aGlzKSk7XG4gICAgYWRkRXZlbnQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hMZWFmLmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50KFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnNsaW1lQ29pbkNhcDEuYmluZCh0aGlzKSk7XG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMi5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcInBldDEucmFua1wiLCBcImNoYW5nZVwiLCB0aGlzLnBldC5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcInBldDEubG95YWx0eVwiLCBcImNoYW5nZVwiLCB0aGlzLnBldC5iaW5kKHRoaXMpKTtcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTE4MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XG4gICAgYWRkRXZlbnQoXCJtaWxlc3RvbmUyNzAwXCIsIFwiY2hhbmdlXCIsIHRoaXMubWlsZXN0b25lLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkaXNwbGF5KClcIik7XG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUudmFsdWVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIuY29zdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmNvc3QpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi52YWx1ZVwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KFxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWVcbiAgICApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiKS52YWx1ZSA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS52YWx1ZVwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KFxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWVcbiAgICApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFuay5pbnRyZXN0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLmludHJlc3QpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwVG90YWxcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWwpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLm11bHRpcGxpZXJcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLm11bHRpcGxpZXI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnBhc3NpdmVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnBldDEucGFzc2l2ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucmFua1wiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLnJhbms7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLmxveWFsdHlcIikudmFsdWUgPSB0aGlzLmRhdGEucGV0MS5sb3lhbHR5O1xuXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtaWxlc3RvbmUoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkKSB7XG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCkge1xuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICBwZXQoKSB7XG4gICAgdGhpcy5kYXRhLnBldDEucmFuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlO1xuICAgIHRoaXMuZGF0YS5wZXQxLmxveWFsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZTtcbiAgICBsZXQgbG95YWx0eSA9IDIuNSAqIChwYXJzZUZsb2F0KHRoaXMuZGF0YS5wZXQxLmxveWFsdHkpICsgMTAwKSAqIDAuMDE7XG4gICAgdGhpcy5kYXRhLnBldDEucGFzc2l2ZSA9IHBhcnNlRmxvYXQodGhpcy5kYXRhLnBldDEucmFuayAqIGxveWFsdHkgKyAxMDApLnRvRml4ZWQoMik7XG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgcmVzZWFyY2hTdG9uZSgpIHtcbiAgICB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS52YWx1ZSA9ICsodGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4xKS50b0ZpeGVkKDIpO1xuICAgIHRoaXMuaW50cmVzdCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgcmVzZWFyY2hMZWFmKCkge1xuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlO1xuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbCAqIDIpLnRvRml4ZWQoMikgKyAxMDA7XG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XG4gIH1cblxuICBzbGltZUNvaW5DYXAxKCkge1xuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID0gY29udmVydDIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlKTtcbiAgICAvLyBpbnB1dCA9IGNvbnZlcnQyKGlucHV0KTtcblxuICAgIC8vIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlID0gc2lnbWEoXG4gICAgLy8gICAwLFxuICAgIC8vICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwsXG4gICAgLy8gICBmdW5jdGlvbiAoYSkge1xuICAgIC8vICAgICByZXR1cm4gYSAqIDIwIC0gMTAgKyAxMDAwMDtcbiAgICAvLyAgIH0sXG4gICAgLy8gICAxMFxuICAgIC8vICk7XG4gICAgbGV0IGxldmVsID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWw7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSAxMDAwMC4wICsgMTAwMDAuMCAqIGxldmVsICsgMTAuMCAqIE1hdGgucG93KGxldmVsLCAyLjApO1xuXG4gICAgdGhpcy5zbGltZUNvaW5DYXAxQ29zdCgpO1xuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIHNsaW1lQ29pbkNhcDIoKSB7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIikudmFsdWU7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWUgPVxuICAgICAgc2lnbWEoXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsLFxuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiBhICogMjAgLSAxMDtcbiAgICAgICAgfSxcbiAgICAgICAgMTBcbiAgICAgICkgKyAxMDA7XG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCA9IDEwMDAwMDAwMDAwLjAgKiBNYXRoLnBvdygyLjAsIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsKTtcblxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIHNsaW1lQ29pbkNhcFRvdGFsKCkge1xuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCA9XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSAqXG4gICAgICAodGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgLyAxMDApICpcbiAgICAgICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSAvIDEwMCkgKlxuICAgICAgKHRoaXMuZGF0YS5wZXQxLnBhc3NpdmUgLyAxMDApO1xuXG4gICAgdGhpcy5pbnRyZXN0KCk7XG4gIH1cblxuICBpbnRyZXN0KCkge1xuICAgIGxldCBpbnRyZXN0UGVyY2VudCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCAqIDAuMDAxO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUxODAwKSB7XG4gICAgICBpbnRyZXN0UGVyY2VudCArPSAwLjAyNTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwKSB7XG4gICAgICBpbnRyZXN0UGVyY2VudCArPSAwLjA1O1xuICAgIH1cbiAgICB0aGlzLmRhdGEuaW50cmVzdCA9IGludHJlc3RQZXJjZW50ICogdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsO1xuICAgIHRoaXMuZGF0YS5tdWx0aXBsaWVyID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuaW50cmVzdCAvIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QpO1xuICAgIHRoaXMuZGF0YS5tdWx0aXBsaWVyIC09IE1hdGgucm91bmQodGhpcy5kYXRhLm11bHRpcGxpZXIgKiAwLjE1KTtcbiAgICAvLyBzbGltZUJhbmtPcHRpbWlzZXIoKTtcbiAgfVxuXG4gIHNsaW1lQ29pbkNhcDFDb3N0KCkge1xuICAgIC8vIGlmICgoZG91YmxlKSB0aGlzLmxldmVsLnZhbHVlID49IDUwMCAwMDAgMDAwLjApXG4gICAgLy8gcmV0dXJuIDFFKzE1ICogdGhpcy5Db3N0TW9kaWZpZXIoKTtcblxuICAgIC8vIDUwMFRcbiAgICBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTI3XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAvLyAxMDBUXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjZcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMDAwMCkge1xuICAgICAgLy8gNTBUXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyNVxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAvLyAxMFRcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjRcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMjNcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyMlxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UyMVxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTIwXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEuMDArRTE5XG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMThcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMS4wMCtFMTdcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UxNlxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDA7XG4gICAgfSAvLyAxLjAwK0UxNVxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDtcbiAgICB9IC8vIDEwMFRcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMCkge1xuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMTBUXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDApIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwO1xuICAgIH0gLy8gMVRcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCAqIDEwMDAwICsgMTAwMDA7XG4gICAgfSAvLyBuZWVkIHRvIGZpbmQgc29sdXRpb24gZm9yIGxlc3MgdGhhbiAxME0gdXBncmFkZXNcbiAgfVxufVxuXG5leHBvcnQgeyBTbGltZUJhbmsgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRUYWIsIGxvYWRGcm9tRmlsZSwgYWRkRXZlbnQsIHJlc3RhcnQsIHNhdmVUb0ZpbGUgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCB7IEFudmlsIH0gZnJvbSBcIi4vYW52aWwuanNcIjtcbi8vIGltcG9ydCB7IGV4cGVkaXRpb25Mb2FkIH0gZnJvbSBcIi4vZXhwZWRpdGlvbi5qc1wiO1xuaW1wb3J0IHsgU2xpbWVCYW5rIH0gZnJvbSBcIi4vc2xpbWViYW5rLmpzXCI7XG5pbXBvcnQgeyBHZWFyIH0gZnJvbSBcIi4vZ2Vhci9nZWFyLmpzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB2ZXJzaW9uID0gXCIwLjEuMlwiO1xuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSBcImxvYWRpbmdcIikge1xuICAgIGZuKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZm4pO1xuICB9XG59XG5cbnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhcnQgdXBcbiAgbG9hZCgpO1xufSk7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIC8vIGN1cnJlbnQgdGFiXG4gIHZhciB0YWIgPSAwO1xuICBjb25zdCB0YWJfbGlzdCA9IFtcbiAgICB7IGlkOiBcInNsaW1lQmFua1wiLCBuYW1lOiBcIlNsaW1lIEJhbmsgQ2FsY3VsYXRvclwiIH0sXG4gICAgeyBpZDogXCJsYWJcIiwgbmFtZTogXCJMYWIgQ2FsY3VsYXRvclwiIH0sXG4gICAgeyBpZDogXCJhbnZpbFwiLCBuYW1lOiBcIkFudmlsIENhbGN1bGF0b3JcIiB9LFxuICAgIHsgaWQ6IFwiZXhwZWRpdGlvblwiLCBuYW1lOiBcIkV4cGVkaXRpb24gQ2FsY3VsYXRvclwiIH0sXG4gICAgeyBpZDogXCJnZWFyXCIsIG5hbWU6IFwiR2VhciBDYWxjdWxhdG9yXCIgfSxcbiAgICB7IGlkOiBcInNldHRpbmdzXCIsIG5hbWU6IFwiU2V0dGluZ3NcIiB9LFxuICBdO1xuXG4gIC8vIGNvbnN0IHRhYl9saXN0ID0gW1wic2xpbWUtYmFua1wiLCBcImxhYlwiLCBcImFudmlsXCIsIFwiZXhwZWRpdGlvblwiLCBcInNldHRpbmdzXCJdO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpKSB7XG4gICAgdGFiX2xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgLy8gYWRkRXZlbnQoZWxlbWVudC5pZCwgXCJjbGlja1wiLCBjaGFuZ2VUYWIpO1xuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5pZCk7XG4gICAgICAvLyB0YWIgPSBlbGVtZW50ICsgXCItY2FsY3VsYXRvclwiO1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFRhYlwiKSA9PSBlbGVtZW50LmlkKSB7XG4gICAgICAgIGxvYWRUYWIoZWxlbWVudC5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyBsb2FkaW5nXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHJlc3BvbnNlO1xuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2xpbWVCYW5rXCIpIHtcbiAgICAgICAgICAgIG5ldyBTbGltZUJhbmsoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2RcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwiYW52aWxcIikge1xuICAgICAgICAgICAgbmV3IEFudmlsKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcImdlYXJcIikge1xuICAgICAgICAgICAgbmV3IEdlYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJzZXR0aW5nc1wiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIsIFwiY2hhbmdlXCIsIGxvYWRGcm9tRmlsZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyXCIpO1xuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5zYXZlVG9GaWxlXCIsIFwiY2xpY2tcIiwgc2F2ZVRvRmlsZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHNhdmVcIik7XG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLnJlc3RhcnRcIiwgXCJjbGlja1wiLCByZXN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVzdGFydFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MID0gXCJJRUgyY2FsYyA+IFwiICsgZWxlbWVudC5uYW1lO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKS5zdHlsZS5jb2xvciA9IFwiI2YyZTAwOVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBcInNsaW1lQmFua1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFua1wiKS5zdHlsZS5jb2xvciA9IFwiI2YyZTAwOVwiO1xuICAgIGxvYWRUYWIoXCJzbGltZUJhbmtcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcbiAgICAgIG5ldyBTbGltZUJhbmsoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBpbiBsb2FkIHwgYWZ0ZXIgSW5pdFwiKTtcbiAgICB9KTtcbiAgfVxuICAvLyBBbnZpbCBsb2FkaW5nXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpID09PSBudWxsKSB7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiLCAxKTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLW5pdHJvLXNwZWVkXCIpLnZhbHVlID1cbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIik7XG4gIC8vIH1cbiAgLy8gYW52aWwgbG9hZCBuZWVkIHJlZmFjdG9yXG5cbiAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAvLyAgIHZhciBpZCA9IDA7XG4gIC8vICAgaWQgPSBcImFudmlsLWR1bmdlb24tXCIgKyBpICsgXCItdGltZVwiO1xuICAvLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkgPT09IG51bGwpIHtcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIGNhbGNBbnZpbCgpO1xuICAvLyBjYWxjRXhwZWRpdGlvbigpO1xuICAvLyBleHBlZGl0aW9uTG9hZCgpO1xuICAvLyBsb2FkaW5nIHZhbHVlcyBmcm9tIGxvY2FsU3RvcmFnZSBlbHNlIHNldHRpbmcgdmFsdWVzIGFzIDBcbiAgLy8gY29uc3QgbGlzdCA9IFtcbiAgLy8gICAnYW52aWwtZm94LWR1bmdlb24tMS10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTItdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi0zLXRpbWUnLFxuICAvLyAnYW52aWwtZm94LWR1bmdlb24tNC10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTUtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTEtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTItdGltZScsXG4gIC8vICdhbnZpbC1iYXQtZHVuZ2Vvbi0zLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi00LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi01LXRpbWUnXTtcbiAgLy8gY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZSB9O1xuICAvLyBjb25zb2xlLmxvZyhpdGVtcyk7XG4gIC8vIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgLy8gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAvLyAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGVsZW1lbnQpID09PSBudWxsKSB7c2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTt9XG4gIC8vICBlbHNlIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsJykpO31cbiAgLy8gfSk7XG5cbiAgLy8gU2xpbWUgQmFuayBsb2FkaW5nXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWxcIikgPT09IG51bGwpIHtcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaFN0b25lKDApO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoU3RvbmUoXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWxcIilcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpID09PSBudWxsKSB7XG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hMZWFmKDApO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZihcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpXG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIC8vIGlmIChcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpID09PSBudWxsXG4gIC8vICkge1xuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDEoMCk7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMShcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTEtbGV2ZWxcIilcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgLy8gaWYgKFxuICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTItbGV2ZWxcIikgPT09IG51bGxcbiAgLy8gKSB7XG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMigwKTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAyKFxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKVxuICAvLyAgICk7XG4gIC8vIH1cblxuICAvLyBzbGltZUJhbmtTbGltZUNvaW5DYXBUb3RhbCgpO1xuICAvLyBzbGltZUJhbmtJbnRyZXN0KCk7XG4gIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xuICAvLyBkZWJ1Z1xuICAvLyBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh7IC4uLmxvY2FsU3RvcmFnZSB9KSkge1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnJykuaW5uZXJIVE1MICs9IGA8aT4ke2tleX06PC9pPiA8Yj4ke3ZhbHVlfTwvYj48YnI+YDtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9