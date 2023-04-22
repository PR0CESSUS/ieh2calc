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
  let file = "../html/" + tab + ".html";

  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append(
    "Content-Security-Policy:",
    "default-src 'self'; style-src 'self' 'unsafe-inline' *; font-src 'self' *; connect-src 'self' *; img-src data: *"
  );
  let options = {
    method: "GET",
    headers: myHeaders,
    mode: "no-cors",
    referrerPolicy: "origin",
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
    this.data.pet1.passive = +(this.data.pet1.rank * loyalty).toFixed(2) + 100;
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
    this.data.multiplier -= this.data.multiplier * 0.15;
    // slimeBankOptimiser();
  }

  slimeCoinCap1Cost() {
    // if ((double) this.level.value >= 500 000 000.0)
    // return 1E+15 * this.CostModifier();
    if (this.data.slimeCoinCap1.level >= 1000000000) {
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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common-exposed.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anvil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anvil.js */ "./src/anvil.js");
/* harmony import */ var _slimebank_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slimebank.js */ "./src/slimebank.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRSx5QkFBeUIsSUFBSSxJQUFJLE1BQU07QUFDdkMsMkRBQTJELElBQUksV0FBVyxNQUFNO0FBQ2hGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24tZXhwb3NlZC5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2FudmlsLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9zbGltZWJhbmsuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4vY29tbW9uLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbnZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fLmNoYW5nZVRhYlxuaWYgKHR5cGVvZiBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID09PSAndW5kZWZpbmVkJykgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fO1xuZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1tleHBvc2VzLWxvYWRlcl0gVGhlIFwiY2hhbmdlVGFiXCIgdmFsdWUgZXhpc3RzIGluIHRoZSBnbG9iYWwgc2NvcGUsIGl0IG1heSBub3QgYmUgc2FmZSB0byBvdmVyd3JpdGUgaXQsIHVzZSB0aGUgXCJvdmVycmlkZVwiIG9wdGlvbicpXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cbiAgdmFyIGc7XG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZyA9IHRoaXMgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZztcbn0oKTsiLCJpbXBvcnQgeyBhZGRFdmVudCwgY29udmVydCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5cclxuY2xhc3MgQW52aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJhbnZpbFwiO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBuaXRybzogMS4wLFxyXG4gICAgICBkdW5nZW9uOiBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KFwiYW52aWwubml0cm8uc3BlZWRcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBhZGRFdmVudChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiLCBcImNoYW5nZVwiLCB0aGlzLnNhdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgLy8gdGhpcy5kYXRhLmR1bmdlb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLm5pdHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIikudmFsdWU7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5uaXRybztcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzcGxheSgpXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCBpZCA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCI7XHJcbiAgICAgIGxldCB2YWx1ZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi52YWx1ZVwiO1xyXG4gICAgICBsZXQgdGltZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCI7XHJcbiAgICAgIGxldCBvcmIgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIub3JiXCI7XHJcbiAgICAgIGxldCByZXdhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIucmV3YXJkXCIpLmlubmVySFRNTDtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA9IHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpLmlubmVySFRNTCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV0pICogcmV3YXJkICogdGhpcy5kYXRhLm5pdHJvXHJcbiAgICAgICk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9yYikuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChcclxuICAgICAgICAoMzYwMCAvIHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXSkgKiB0aGlzLmRhdGEubml0cm9cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFudmlsIH07XHJcbiIsImZ1bmN0aW9uIHNhdmUoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgdGhpcy52YWx1ZSk7XHJcbiAgY29uc29sZS5sb2codGhpcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGlkLCBldmVudCwgY2FsbGJhY2spIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUYWIoaW5wdXQpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRUYWJcIiwgaW5wdXQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkVGFiKHRhYikge1xyXG4gIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGxldCBmaWxlID0gXCIuLi9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG5cclxuICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpblwiKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKFxyXG4gICAgXCJDb250ZW50LVNlY3VyaXR5LVBvbGljeTpcIixcclxuICAgIFwiZGVmYXVsdC1zcmMgJ3NlbGYnOyBzdHlsZS1zcmMgJ3NlbGYnICd1bnNhZmUtaW5saW5lJyAqOyBmb250LXNyYyAnc2VsZicgKjsgY29ubmVjdC1zcmMgJ3NlbGYnICo7IGltZy1zcmMgZGF0YTogKlwiXHJcbiAgKTtcclxuICBsZXQgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIG1vZGU6IFwibm8tY29yc1wiLFxyXG4gICAgcmVmZXJyZXJQb2xpY3k6IFwib3JpZ2luXCIsXHJcbiAgfTtcclxuICAvLyBsZXQgeCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gIC8vIGxldCB5ID0gYXdhaXQgeC50ZXh0KCk7XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHk7XHJcbiAgcmV0dXJuIGZldGNoKGZpbGUsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG59XHJcblxyXG4vLyBleHQuZ2V0ID0gKHVybCkgPT4ge1xyXG4vLyAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuLy8gICBsZXQgb3B0aW9ucyA9IHtcclxuLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcclxuLy8gICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4vLyAgICAgICBtb2RlOiAnY29ycydcclxuLy8gICB9O1xyXG5cclxuLy8gICAvL2ZldGNoIGdldFxyXG5cclxuLy8gICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbi8vIH07XHJcblxyXG4vLyBleHQuZ2V0KFwiaHR0cDovL2V4YW1wbGUuY29tXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAvLyBvciB3aGF0ZXZlclxyXG4vLyB9KTtcclxuXHJcbmZ1bmN0aW9uIHNpZ21hKGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIGl0ZXJhdG9yLCBhY2N1bXVsYXRvciA9IDApIHtcclxuICAvLyBsZXQgYWNjdW11bGF0b3IgPSAwO1xyXG4gIGZvciAobGV0IGkgPSBsb3dlckJvdW5kOyBpIDw9IHVwcGVyQm91bmQ7ICsraSkge1xyXG4gICAgYWNjdW11bGF0b3IgKz0gaXRlcmF0b3IoaSk7XHJcbiAgfVxyXG4gIHJldHVybiBhY2N1bXVsYXRvcjtcclxufVxyXG5cclxuLy8gY29udmVydCBub3JtYWwgbnVtYmVyIHRvIEssTSxCLFQgYW5kIGV4cG9uZW50aWFsXHJcbmZ1bmN0aW9uIGNvbnZlcnQoaW5wdXQpIHtcclxuICBpbnB1dCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xyXG4gIHZhciBvdXRwdXQgPSAwO1xyXG4gIGlmIChpbnB1dCA9PSAwKSB7XHJcbiAgICBvdXRwdXQgPSAwO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPD0gMTAwMDApIHtcclxuICAgIG91dHB1dCA9IE1hdGgucm91bmQoaW5wdXQpO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwKS50b0ZpeGVkKDIpICsgXCJLXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk1cIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMCkudG9GaXhlZCgzKSArIFwiQlwiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJUXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG91dHB1dCA9IGlucHV0LnRvRXhwb25lbnRpYWwoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGssbSxiLHQgdG8gbm9ybWFsIG51bWJlcnNcclxuZnVuY3Rpb24gY29udmVydDIoaW5wdXQsIG1pbiA9IDAsIG1heCA9IDk5OTk5OTk5OTk5OTk5OSkge1xyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvLC9nLCBcIi5cIik7IC8vIGNvbnZlcnQgLCB0byAuXHJcbiAgaWYgKC9eXFxkKlxcLj9cXGQrJC8udGVzdChpbnB1dCkpIHtcclxuICAgIGlmIChpbnB1dCA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dCA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0gLy8gcmV0dXJuIHJvdW5kZWQgbnVtYmVyIGlmIHRoZXJlIGlzIG5vIGFiYnJldmlldGVcclxuICBlbHNlIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gLyguKikoXFxEKSQvZ207XHJcbiAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyAvZywgXCJcIik7IC8vIHJlbW92ZXMgYWxsIHNwYWNlc1xyXG5cclxuICAgIGlucHV0ID0gcmVnZXguZXhlYyhpbnB1dCk7XHJcbiAgICBsZXQgb3V0cHV0ID0gMDtcclxuICAgIGlmIChpbnB1dFsyXSA9PSBcInRcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogNDtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJiXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDM7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwibVwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAyO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcImtcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRvRmlsZSgpIHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcclxuICAgIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UsIG51bGwsIDIpXSwge1xyXG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIixcclxuICAgIH0pXHJcbiAgKTtcclxuICBhLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiSUVIMmNhbGMtZGF0YS5qc29uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgYS5jbGljaygpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGcm9tRmlsZSgpIHtcclxuICBsZXQgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIpLmZpbGVzWzBdO1xyXG4gIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRleHQgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsZS1jb250ZW50c1wiKS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHRleHQpKTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4uSlNPTi5wYXJzZSh0ZXh0KSB9KSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udmVydCxcclxuICBjb252ZXJ0MixcclxuICBzaWdtYSxcclxuICByZXN0YXJ0LFxyXG4gIGNoYW5nZVRhYixcclxuICBsb2FkVGFiLFxyXG4gIGFkZEV2ZW50LFxyXG4gIHNhdmVUb0ZpbGUsXHJcbiAgbG9hZEZyb21GaWxlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjb252ZXJ0LCBjb252ZXJ0Miwgc2lnbWEsIGFkZEV2ZW50IH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XHJcblxyXG5jbGFzcyBTbGltZUJhbmsge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJzbGltZUJhbmtcIjtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgcmVzZWFyY2g6IHtcclxuICAgICAgICBsZWFmOiB7IGxldmVsOiAwLCB2YWx1ZTogMCB9LFxyXG4gICAgICAgIHN0b25lOiB7IGxldmVsOiAwLCB2YWx1ZTogMCB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2xpbWVDb2luQ2FwMToge1xyXG4gICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgIHZhbHVlOiAxMDAwMCxcclxuICAgICAgICBjb3N0OiAxMDAwMCxcclxuICAgICAgfSxcclxuICAgICAgc2xpbWVDb2luQ2FwMjoge1xyXG4gICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgIHZhbHVlOiAxMDAsXHJcbiAgICAgICAgY29zdDogMTAwMDAwMDAwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaW1lQ29pbkNhcFRvdGFsOiAwLFxyXG4gICAgICBpbnRyZXN0OiAwLFxyXG4gICAgICBtdWx0aXBsaWVyOiAwLFxyXG4gICAgICBwZXQxOiB7XHJcbiAgICAgICAgcmFuazogMCxcclxuICAgICAgICBsb3lhbHR5OiAwLFxyXG4gICAgICAgIHBhc3NpdmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pbGVzdG9uZTE4MDA6IGZhbHNlLFxyXG4gICAgICBtaWxlc3RvbmUyNzAwOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkgPT09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJjbGFzcyBjb25zdHJ1Y3RvciBha2EgSW5pdFwiKTtcclxuICAgIGFkZEV2ZW50KFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5yZXNlYXJjaFN0b25lLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hMZWFmLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMS5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnNsaW1lQ29pbkNhcDIuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInBldDEucmFua1wiLCBcImNoYW5nZVwiLCB0aGlzLnBldC5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwicGV0MS5sb3lhbHR5XCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJtaWxlc3RvbmUxODAwXCIsIFwiY2hhbmdlXCIsIHRoaXMubWlsZXN0b25lLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJtaWxlc3RvbmUyNzAwXCIsIFwiY2hhbmdlXCIsIHRoaXMubWlsZXN0b25lLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXkoKVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCQoXCIjcmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLnZhbHVlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS52YWx1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLnZhbHVlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIuY29zdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmNvc3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEudmFsdWVcIikuaW5uZXJIVE1MID0gY29udmVydChcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWVcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEuY29zdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLmludHJlc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuaW50cmVzdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcFRvdGFsXCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rLm11bHRpcGxpZXJcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLm11bHRpcGxpZXI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucGFzc2l2ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucGV0MS5wYXNzaXZlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnJhbmtcIikudmFsdWUgPSB0aGlzLmRhdGEucGV0MS5yYW5rO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLmxveWFsdHlcIikudmFsdWUgPSB0aGlzLmRhdGEucGV0MS5sb3lhbHR5O1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9PSB0cnVlKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPT0gdHJ1ZSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWlsZXN0b25lKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMTgwMFwiKS5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTI3MDAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcGV0KCkge1xyXG4gICAgdGhpcy5kYXRhLnBldDEucmFuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnBldDEubG95YWx0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5sb3lhbHR5XCIpLnZhbHVlO1xyXG4gICAgbGV0IGxveWFsdHkgPSAyLjUgKiAocGFyc2VGbG9hdCh0aGlzLmRhdGEucGV0MS5sb3lhbHR5KSArIDEwMCkgKiAwLjAxO1xyXG4gICAgdGhpcy5kYXRhLnBldDEucGFzc2l2ZSA9ICsodGhpcy5kYXRhLnBldDEucmFuayAqIGxveWFsdHkpLnRvRml4ZWQoMikgKyAxMDA7XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHJlc2VhcmNoU3RvbmUoKSB7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgKiAwLjEpLnRvRml4ZWQoMik7XHJcbiAgICB0aGlzLmludHJlc3QoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZWFyY2hMZWFmKCkge1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZSA9ICsodGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWwgKiAyKS50b0ZpeGVkKDIpICsgMTAwO1xyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICAvLyBzbGltZUJhbmtTbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwMSgpIHtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID0gY29udmVydDIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmxldmVsXCIpLnZhbHVlKTtcclxuICAgIC8vIGlucHV0ID0gY29udmVydDIoaW5wdXQpO1xyXG5cclxuICAgIC8vIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlID0gc2lnbWEoXHJcbiAgICAvLyAgIDAsXHJcbiAgICAvLyAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsLFxyXG4gICAgLy8gICBmdW5jdGlvbiAoYSkge1xyXG4gICAgLy8gICAgIHJldHVybiBhICogMjAgLSAxMCArIDEwMDAwO1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICAxMFxyXG4gICAgLy8gKTtcclxuICAgIGxldCBsZXZlbCA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsO1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSAxMDAwMC4wICsgMTAwMDAuMCAqIGxldmVsICsgMTAuMCAqIE1hdGgucG93KGxldmVsLCAyLjApO1xyXG5cclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwMUNvc3QoKTtcclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwMigpIHtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWUgPVxyXG4gICAgICBzaWdtYShcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsLFxyXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICByZXR1cm4gYSAqIDIwIC0gMTA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMFxyXG4gICAgICApICsgMTAwO1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCA9IDEwMDAwMDAwMDAwLjAgKiBNYXRoLnBvdygyLjAsIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsKTtcclxuXHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcFRvdGFsKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsID1cclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgKlxyXG4gICAgICAodGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgLyAxMDApICpcclxuICAgICAgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlIC8gMTAwKSAqXHJcbiAgICAgICh0aGlzLmRhdGEucGV0MS5wYXNzaXZlIC8gMTAwKTtcclxuXHJcbiAgICB0aGlzLmludHJlc3QoKTtcclxuICB9XHJcblxyXG4gIGludHJlc3QoKSB7XHJcbiAgICBsZXQgaW50cmVzdFBlcmNlbnQgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUubGV2ZWwgKiAwLjAwMTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDApIHtcclxuICAgICAgaW50cmVzdFBlcmNlbnQgKz0gMC4wMjU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTI3MDApIHtcclxuICAgICAgaW50cmVzdFBlcmNlbnQgKz0gMC4wNTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YS5pbnRyZXN0ID0gaW50cmVzdFBlcmNlbnQgKiB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWw7XHJcbiAgICB0aGlzLmRhdGEubXVsdGlwbGllciA9IE1hdGgucm91bmQodGhpcy5kYXRhLmludHJlc3QgLyB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0KTtcclxuICAgIHRoaXMuZGF0YS5tdWx0aXBsaWVyIC09IHRoaXMuZGF0YS5tdWx0aXBsaWVyICogMC4xNTtcclxuICAgIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwMUNvc3QoKSB7XHJcbiAgICAvLyBpZiAoKGRvdWJsZSkgdGhpcy5sZXZlbC52YWx1ZSA+PSA1MDAgMDAwIDAwMC4wKVxyXG4gICAgLy8gcmV0dXJuIDFFKzE1ICogdGhpcy5Db3N0TW9kaWZpZXIoKTtcclxuICAgIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMTZcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMS4wMCtFMTVcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxMDBUXHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEwVFxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDFUXHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsICogMTAwMDAgKyAxMDAwMDtcclxuICAgIH0gLy8gbmVlZCB0byBmaW5kIHNvbHV0aW9uIGZvciBsZXNzIHRoYW4gMTBNIHVwZ3JhZGVzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTbGltZUJhbmsgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZFRhYiwgbG9hZEZyb21GaWxlLCBhZGRFdmVudCwgcmVzdGFydCwgc2F2ZVRvRmlsZSB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBBbnZpbCB9IGZyb20gXCIuL2FudmlsLmpzXCI7XHJcbi8vIGltcG9ydCB7IGV4cGVkaXRpb25Mb2FkIH0gZnJvbSBcIi4vZXhwZWRpdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBTbGltZUJhbmsgfSBmcm9tIFwiLi9zbGltZWJhbmsuanNcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IHZlcnNpb24gPSBcIjAuMS4yXCI7XHJcblxyXG5mdW5jdGlvbiByZWFkeShmbikge1xyXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9IFwibG9hZGluZ1wiKSB7XHJcbiAgICBmbigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmbik7XHJcbiAgfVxyXG59XHJcblxyXG5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgLy8gc3RhcnQgdXBcclxuICBsb2FkKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZCgpIHtcclxuICAvLyBjdXJyZW50IHRhYlxyXG4gIHZhciB0YWIgPSAwO1xyXG4gIGNvbnN0IHRhYl9saXN0ID0gW1xyXG4gICAgeyBpZDogXCJzbGltZUJhbmtcIiwgbmFtZTogXCJTbGltZSBCYW5rIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJsYWJcIiwgbmFtZTogXCJMYWIgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImFudmlsXCIsIG5hbWU6IFwiQW52aWwgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImV4cGVkaXRpb25cIiwgbmFtZTogXCJFeHBlZGl0aW9uIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJzZXR0aW5nc1wiLCBuYW1lOiBcIlNldHRpbmdzXCIgfSxcclxuICBdO1xyXG5cclxuICAvLyBjb25zdCB0YWJfbGlzdCA9IFtcInNsaW1lLWJhbmtcIiwgXCJsYWJcIiwgXCJhbnZpbFwiLCBcImV4cGVkaXRpb25cIiwgXCJzZXR0aW5nc1wiXTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpKSB7XHJcbiAgICB0YWJfbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIC8vIGFkZEV2ZW50KGVsZW1lbnQuaWQsIFwiY2xpY2tcIiwgY2hhbmdlVGFiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5pZCk7XHJcbiAgICAgIC8vIHRhYiA9IGVsZW1lbnQgKyBcIi1jYWxjdWxhdG9yXCI7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYWJcIikgPT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgIGxvYWRUYWIoZWxlbWVudC5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGxvYWRpbmdcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2xpbWVCYW5rXCIpIHtcclxuICAgICAgICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJhbnZpbFwiKSB7XHJcbiAgICAgICAgICAgIG5ldyBBbnZpbCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJzZXR0aW5nc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlXCIpO1xyXG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLmxvYWRGcm9tRmlsZVwiLCBcImNoYW5nZVwiLCBsb2FkRnJvbUZpbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyXCIpO1xyXG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLnNhdmVUb0ZpbGVcIiwgXCJjbGlja1wiLCBzYXZlVG9GaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBzYXZlXCIpO1xyXG4gICAgICAgICAgICBhZGRFdmVudChcInNldHRpbmdzLnJlc3RhcnRcIiwgXCJjbGlja1wiLCByZXN0YXJ0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciByZXN0YXJ0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IFwiSUVIMmNhbGMgPiBcIiArIGVsZW1lbnQubmFtZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKS5zdHlsZS5jb2xvciA9IFwiI2YyZTAwOVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIFwic2xpbWVCYW5rXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmtcIikuc3R5bGUuY29sb3IgPSBcIiNmMmUwMDlcIjtcclxuICAgIGxvYWRUYWIoXCJzbGltZUJhbmtcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHJlc3BvbnNlO1xyXG4gICAgICBuZXcgU2xpbWVCYW5rKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBpbiBsb2FkIHwgYWZ0ZXIgSW5pdFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBBbnZpbCBsb2FkaW5nXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIikgPT09IG51bGwpIHtcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIiwgMSk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwtbml0cm8tc3BlZWRcIikudmFsdWUgPVxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpO1xyXG4gIC8vIH1cclxuICAvLyBhbnZpbCBsb2FkIG5lZWQgcmVmYWN0b3JcclxuXHJcbiAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gIC8vICAgdmFyIGlkID0gMDtcclxuICAvLyAgIGlkID0gXCJhbnZpbC1kdW5nZW9uLVwiICsgaSArIFwiLXRpbWVcIjtcclxuICAvLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkgPT09IG51bGwpIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIGNhbGNBbnZpbCgpO1xyXG4gIC8vIGNhbGNFeHBlZGl0aW9uKCk7XHJcbiAgLy8gZXhwZWRpdGlvbkxvYWQoKTtcclxuICAvLyBsb2FkaW5nIHZhbHVlcyBmcm9tIGxvY2FsU3RvcmFnZSBlbHNlIHNldHRpbmcgdmFsdWVzIGFzIDBcclxuICAvLyBjb25zdCBsaXN0ID0gW1xyXG4gIC8vICAgJ2FudmlsLWZveC1kdW5nZW9uLTEtdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi0yLXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tMy10aW1lJyxcclxuICAvLyAnYW52aWwtZm94LWR1bmdlb24tNC10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTUtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTEtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTItdGltZScsXHJcbiAgLy8gJ2FudmlsLWJhdC1kdW5nZW9uLTMtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTQtdGltZScsJ2FudmlsLWJhdC1kdW5nZW9uLTUtdGltZSddO1xyXG4gIC8vIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2UgfTtcclxuICAvLyBjb25zb2xlLmxvZyhpdGVtcyk7XHJcbiAgLy8gbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gIC8vICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAvLyAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGVsZW1lbnQpID09PSBudWxsKSB7c2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTt9XHJcbiAgLy8gIGVsc2Uge3NsaW1lQmFua1Jlc2VhcmNoU3RvbmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWwnKSk7fVxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBTbGltZSBCYW5rIGxvYWRpbmdcclxuICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaFN0b25lKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaFN0b25lKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLWxlYWYtbGV2ZWxcIikgPT09IG51bGwpIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZigwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hMZWFmKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtbGVhZi1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTEtbGV2ZWxcIikgPT09IG51bGxcclxuICAvLyApIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDEoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDEoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTEtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoXHJcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0yLWxldmVsXCIpID09PSBudWxsXHJcbiAgLy8gKSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAyKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAyKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0yLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc2xpbWVCYW5rU2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAvLyBzbGltZUJhbmtJbnRyZXN0KCk7XHJcbiAgLy8gc2xpbWVCYW5rT3B0aW1pc2VyKCk7XHJcbiAgLy8gZGVidWdcclxuICAvLyBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh7IC4uLmxvY2FsU3RvcmFnZSB9KSkge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1ZycpLmlubmVySFRNTCArPSBgPGk+JHtrZXl9OjwvaT4gPGI+JHt2YWx1ZX08L2I+PGJyPmA7XHJcbiAgLy8gfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==