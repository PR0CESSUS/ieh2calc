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
  // myHeaders.append(
  //   "content-security-policy:",
  //   "default-src 'self'; style-src 'self' 'unsafe-inline' *; font-src 'self' *; connect-src 'self' *; img-src data: *"
  // );
  let options = {
    method: "GET",
    headers: myHeaders,
    mode: "same-origin",
    referrerPolicy: "origin-when-cross-origin",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRSx5QkFBeUIsSUFBSSxJQUFJLE1BQU07QUFDdkMsMkRBQTJELElBQUksV0FBVyxNQUFNO0FBQ2hGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24tZXhwb3NlZC5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2FudmlsLmpzIiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9zbGltZWJhbmsuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2llaDJjYWxjLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4vY29tbW9uLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbnZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fLmNoYW5nZVRhYlxuaWYgKHR5cGVvZiBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiY2hhbmdlVGFiXCJdID09PSAndW5kZWZpbmVkJykgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX01PRFVMRV9MT0NBTF9OQU1FX19fO1xuZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1tleHBvc2VzLWxvYWRlcl0gVGhlIFwiY2hhbmdlVGFiXCIgdmFsdWUgZXhpc3RzIGluIHRoZSBnbG9iYWwgc2NvcGUsIGl0IG1heSBub3QgYmUgc2FmZSB0byBvdmVyd3JpdGUgaXQsIHVzZSB0aGUgXCJvdmVycmlkZVwiIG9wdGlvbicpXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cbiAgdmFyIGc7XG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZyA9IHRoaXMgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZztcbn0oKTsiLCJpbXBvcnQgeyBhZGRFdmVudCwgY29udmVydCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5cclxuY2xhc3MgQW52aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJhbnZpbFwiO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBuaXRybzogMS4wLFxyXG4gICAgICBkdW5nZW9uOiBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KFwiYW52aWwubml0cm8uc3BlZWRcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBhZGRFdmVudChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiLCBcImNoYW5nZVwiLCB0aGlzLnNhdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgLy8gdGhpcy5kYXRhLmR1bmdlb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLm5pdHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIikudmFsdWU7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5uaXRyby5zcGVlZFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5uaXRybztcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzcGxheSgpXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCBpZCA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCI7XHJcbiAgICAgIGxldCB2YWx1ZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi52YWx1ZVwiO1xyXG4gICAgICBsZXQgdGltZSA9IFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCI7XHJcbiAgICAgIGxldCBvcmIgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIub3JiXCI7XHJcbiAgICAgIGxldCByZXdhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIucmV3YXJkXCIpLmlubmVySFRNTDtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA9IHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpLmlubmVySFRNTCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV0pICogcmV3YXJkICogdGhpcy5kYXRhLm5pdHJvXHJcbiAgICAgICk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9yYikuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChcclxuICAgICAgICAoMzYwMCAvIHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXSkgKiB0aGlzLmRhdGEubml0cm9cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFudmlsIH07XHJcbiIsImZ1bmN0aW9uIHNhdmUoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgdGhpcy52YWx1ZSk7XHJcbiAgY29uc29sZS5sb2codGhpcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGlkLCBldmVudCwgY2FsbGJhY2spIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUYWIoaW5wdXQpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRUYWJcIiwgaW5wdXQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkVGFiKHRhYikge1xyXG4gIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGxldCBmaWxlID0gXCIuLi9odG1sL1wiICsgdGFiICsgXCIuaHRtbFwiO1xyXG5cclxuICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpblwiKTtcclxuICAvLyBteUhlYWRlcnMuYXBwZW5kKFxyXG4gIC8vICAgXCJjb250ZW50LXNlY3VyaXR5LXBvbGljeTpcIixcclxuICAvLyAgIFwiZGVmYXVsdC1zcmMgJ3NlbGYnOyBzdHlsZS1zcmMgJ3NlbGYnICd1bnNhZmUtaW5saW5lJyAqOyBmb250LXNyYyAnc2VsZicgKjsgY29ubmVjdC1zcmMgJ3NlbGYnICo7IGltZy1zcmMgZGF0YTogKlwiXHJcbiAgLy8gKTtcclxuICBsZXQgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIG1vZGU6IFwic2FtZS1vcmlnaW5cIixcclxuICAgIHJlZmVycmVyUG9saWN5OiBcIm9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiLFxyXG4gIH07XHJcbiAgLy8gbGV0IHggPSBhd2FpdCBmZXRjaChmaWxlKTtcclxuICAvLyBsZXQgeSA9IGF3YWl0IHgudGV4dCgpO1xyXG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSB5O1xyXG4gIHJldHVybiBmZXRjaChmaWxlLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKTtcclxufVxyXG5cclxuLy8gZXh0LmdldCA9ICh1cmwpID0+IHtcclxuLy8gICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHJcbi8vICAgbGV0IG9wdGlvbnMgPSB7XHJcbi8vICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbi8vICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuLy8gICAgICAgbW9kZTogJ2NvcnMnXHJcbi8vICAgfTtcclxuXHJcbi8vICAgLy9mZXRjaCBnZXRcclxuXHJcbi8vICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpO1xyXG4vLyB9O1xyXG5cclxuLy8gZXh0LmdldChcImh0dHA6Ly9leGFtcGxlLmNvbVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgLy8gb3Igd2hhdGV2ZXJcclxuLy8gfSk7XHJcblxyXG5mdW5jdGlvbiBzaWdtYShsb3dlckJvdW5kLCB1cHBlckJvdW5kLCBpdGVyYXRvciwgYWNjdW11bGF0b3IgPSAwKSB7XHJcbiAgLy8gbGV0IGFjY3VtdWxhdG9yID0gMDtcclxuICBmb3IgKGxldCBpID0gbG93ZXJCb3VuZDsgaSA8PSB1cHBlckJvdW5kOyArK2kpIHtcclxuICAgIGFjY3VtdWxhdG9yICs9IGl0ZXJhdG9yKGkpO1xyXG4gIH1cclxuICByZXR1cm4gYWNjdW11bGF0b3I7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgbm9ybWFsIG51bWJlciB0byBLLE0sQixUIGFuZCBleHBvbmVudGlhbFxyXG5mdW5jdGlvbiBjb252ZXJ0KGlucHV0KSB7XHJcbiAgaW5wdXQgPSBwYXJzZUZsb2F0KGlucHV0KTtcclxuICB2YXIgb3V0cHV0ID0gMDtcclxuICBpZiAoaW5wdXQgPT0gMCkge1xyXG4gICAgb3V0cHV0ID0gMDtcclxuICB9IGVsc2UgaWYgKGlucHV0IDw9IDEwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSBNYXRoLnJvdW5kKGlucHV0KTtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMCkudG9GaXhlZCgyKSArIFwiS1wiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJNXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDAwMDApLnRvRml4ZWQoMykgKyBcIkJcIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiVFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvdXRwdXQgPSBpbnB1dC50b0V4cG9uZW50aWFsKDIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuLy8gY29udmVydCBrLG0sYix0IHRvIG5vcm1hbCBudW1iZXJzXHJcbmZ1bmN0aW9uIGNvbnZlcnQyKGlucHV0LCBtaW4gPSAwLCBtYXggPSA5OTk5OTk5OTk5OTk5OTkpIHtcclxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLywvZywgXCIuXCIpOyAvLyBjb252ZXJ0ICwgdG8gLlxyXG4gIGlmICgvXlxcZCpcXC4/XFxkKyQvLnRlc3QoaW5wdXQpKSB7XHJcbiAgICBpZiAoaW5wdXQgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9IC8vIHJldHVybiByb3VuZGVkIG51bWJlciBpZiB0aGVyZSBpcyBubyBhYmJyZXZpZXRlXHJcbiAgZWxzZSB7XHJcbiAgICBjb25zdCByZWdleCA9IC8oLiopKFxcRCkkL2dtO1xyXG4gICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8gL2csIFwiXCIpOyAvLyByZW1vdmVzIGFsbCBzcGFjZXNcclxuXHJcbiAgICBpbnB1dCA9IHJlZ2V4LmV4ZWMoaW5wdXQpO1xyXG4gICAgbGV0IG91dHB1dCA9IDA7XHJcbiAgICBpZiAoaW5wdXRbMl0gPT0gXCJ0XCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDQ7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwiYlwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAzO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcIm1cIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMjtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJrXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUb0ZpbGUoKSB7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXHJcbiAgICBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlLCBudWxsLCAyKV0sIHtcclxuICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICB9KVxyXG4gICk7XHJcbiAgYS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIklFSDJjYWxjLWRhdGEuanNvblwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gIGEuY2xpY2soKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRnJvbUZpbGUoKSB7XHJcbiAgbGV0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzLmxvYWRGcm9tRmlsZVwiKS5maWxlc1swXTtcclxuICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCB0ZXh0ID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGUtY29udGVudHNcIikudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZSh0ZXh0KSk7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh7IC4uLkpTT04ucGFyc2UodGV4dCkgfSkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNvbnZlcnQsXHJcbiAgY29udmVydDIsXHJcbiAgc2lnbWEsXHJcbiAgcmVzdGFydCxcclxuICBjaGFuZ2VUYWIsXHJcbiAgbG9hZFRhYixcclxuICBhZGRFdmVudCxcclxuICBzYXZlVG9GaWxlLFxyXG4gIGxvYWRGcm9tRmlsZSxcclxufTtcclxuIiwiaW1wb3J0IHsgY29udmVydCwgY29udmVydDIsIHNpZ21hLCBhZGRFdmVudCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5cclxuY2xhc3MgU2xpbWVCYW5rIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9IFwic2xpbWVCYW5rXCI7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHJlc2VhcmNoOiB7XHJcbiAgICAgICAgbGVhZjogeyBsZXZlbDogMCwgdmFsdWU6IDAgfSxcclxuICAgICAgICBzdG9uZTogeyBsZXZlbDogMCwgdmFsdWU6IDAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNsaW1lQ29pbkNhcDE6IHtcclxuICAgICAgICBsZXZlbDogMCxcclxuICAgICAgICB2YWx1ZTogMTAwMDAsXHJcbiAgICAgICAgY29zdDogMTAwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaW1lQ29pbkNhcDI6IHtcclxuICAgICAgICBsZXZlbDogMCxcclxuICAgICAgICB2YWx1ZTogMTAwLFxyXG4gICAgICAgIGNvc3Q6IDEwMDAwMDAwMDAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzbGltZUNvaW5DYXBUb3RhbDogMCxcclxuICAgICAgaW50cmVzdDogMCxcclxuICAgICAgbXVsdGlwbGllcjogMCxcclxuICAgICAgcGV0MToge1xyXG4gICAgICAgIHJhbms6IDAsXHJcbiAgICAgICAgbG95YWx0eTogMCxcclxuICAgICAgICBwYXNzaXZlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBtaWxlc3RvbmUxODAwOiBmYWxzZSxcclxuICAgICAgbWlsZXN0b25lMjcwMDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xhc3MgY29uc3RydWN0b3IgYWthIEluaXRcIik7XHJcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMucmVzZWFyY2hTdG9uZS5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwicmVzZWFyY2gubGVhZi5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnJlc2VhcmNoTGVhZi5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnNsaW1lQ29pbkNhcDEuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zbGltZUNvaW5DYXAyLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJwZXQxLnJhbmtcIiwgXCJjaGFuZ2VcIiwgdGhpcy5wZXQuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInBldDEubG95YWx0eVwiLCBcImNoYW5nZVwiLCB0aGlzLnBldC5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwibWlsZXN0b25lMTgwMFwiLCBcImNoYW5nZVwiLCB0aGlzLm1pbGVzdG9uZS5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwibWlsZXN0b25lMjcwMFwiLCBcImNoYW5nZVwiLCB0aGlzLm1pbGVzdG9uZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXkoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJkaXNwbGF5KClcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZygkKFwiI3Jlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLnN0b25lLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUudmFsdWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi52YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmxldmVsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAyLmNvc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5jb3N0KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi52YWx1ZVwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiKS52YWx1ZSA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLnZhbHVlXCIpLmlubmVySFRNTCA9IGNvbnZlcnQoXHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXAxLmNvc3RcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFuay5pbnRyZXN0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLmludHJlc3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUNvaW5DYXBUb3RhbFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFuay5tdWx0aXBsaWVyXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5tdWx0aXBsaWVyO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnBhc3NpdmVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnBldDEucGFzc2l2ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5yYW5rXCIpLnZhbHVlID0gdGhpcy5kYXRhLnBldDEucmFuaztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5sb3lhbHR5XCIpLnZhbHVlID0gdGhpcy5kYXRhLnBldDEubG95YWx0eTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPT0gdHJ1ZSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID09IHRydWUpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUyNzAwXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1pbGVzdG9uZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTE4MDBcIikuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMTgwMCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHBldCgpIHtcclxuICAgIHRoaXMuZGF0YS5wZXQxLnJhbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucmFua1wiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5wZXQxLmxveWFsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZTtcclxuICAgIGxldCBsb3lhbHR5ID0gMi41ICogKHBhcnNlRmxvYXQodGhpcy5kYXRhLnBldDEubG95YWx0eSkgKyAxMDApICogMC4wMTtcclxuICAgIHRoaXMuZGF0YS5wZXQxLnBhc3NpdmUgPSArKHRoaXMuZGF0YS5wZXQxLnJhbmsgKiBsb3lhbHR5KS50b0ZpeGVkKDIpICsgMTAwO1xyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICByZXNlYXJjaFN0b25lKCkge1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS52YWx1ZSA9ICsodGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4xKS50b0ZpeGVkKDIpO1xyXG4gICAgdGhpcy5pbnRyZXN0KCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHJlc2VhcmNoTGVhZigpIHtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWUgPSArKHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLmxldmVsICogMikudG9GaXhlZCgyKSArIDEwMDtcclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgLy8gc2xpbWVCYW5rU2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcDEoKSB7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA9IGNvbnZlcnQyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5sZXZlbFwiKS52YWx1ZSk7XHJcbiAgICAvLyBpbnB1dCA9IGNvbnZlcnQyKGlucHV0KTtcclxuXHJcbiAgICAvLyB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSA9IHNpZ21hKFxyXG4gICAgLy8gICAwLFxyXG4gICAgLy8gICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCxcclxuICAgIC8vICAgZnVuY3Rpb24gKGEpIHtcclxuICAgIC8vICAgICByZXR1cm4gYSAqIDIwIC0gMTAgKyAxMDAwMDtcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgMTBcclxuICAgIC8vICk7XHJcbiAgICBsZXQgbGV2ZWwgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbDtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlID0gMTAwMDAuMCArIDEwMDAwLjAgKiBsZXZlbCArIDEwLjAgKiBNYXRoLnBvdyhsZXZlbCwgMi4wKTtcclxuXHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcDFDb3N0KCk7XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcDIoKSB7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLnZhbHVlID1cclxuICAgICAgc2lnbWEoXHJcbiAgICAgICAgMCxcclxuICAgICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCxcclxuICAgICAgICBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgcmV0dXJuIGEgKiAyMCAtIDEwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTBcclxuICAgICAgKSArIDEwMDtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAyLmNvc3QgPSAxMDAwMDAwMDAwMC4wICogTWF0aC5wb3coMi4wLCB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbCk7XHJcblxyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXBUb3RhbCgpIHtcclxuICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbCA9XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLnZhbHVlICpcclxuICAgICAgKHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlIC8gMTAwKSAqXHJcbiAgICAgICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSAvIDEwMCkgKlxyXG4gICAgICAodGhpcy5kYXRhLnBldDEucGFzc2l2ZSAvIDEwMCk7XHJcblxyXG4gICAgdGhpcy5pbnRyZXN0KCk7XHJcbiAgfVxyXG5cclxuICBpbnRyZXN0KCkge1xyXG4gICAgbGV0IGludHJlc3RQZXJjZW50ID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLmxldmVsICogMC4wMDE7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUxODAwKSB7XHJcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDI1O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUyNzAwKSB7XHJcbiAgICAgIGludHJlc3RQZXJjZW50ICs9IDAuMDU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEuaW50cmVzdCA9IGludHJlc3RQZXJjZW50ICogdGhpcy5kYXRhLnNsaW1lQ29pbkNhcFRvdGFsO1xyXG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5pbnRyZXN0IC8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XHJcbiAgICB0aGlzLmRhdGEubXVsdGlwbGllciAtPSB0aGlzLmRhdGEubXVsdGlwbGllciAqIDAuMTU7XHJcbiAgICAvLyBzbGltZUJhbmtPcHRpbWlzZXIoKTtcclxuICB9XHJcblxyXG4gIHNsaW1lQ29pbkNhcDFDb3N0KCkge1xyXG4gICAgLy8gaWYgKChkb3VibGUpIHRoaXMubGV2ZWwudmFsdWUgPj0gNTAwIDAwMCAwMDAuMClcclxuICAgIC8vIHJldHVybiAxRSsxNSAqIHRoaXMuQ29zdE1vZGlmaWVyKCk7XHJcbiAgICBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE2XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSA1MDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEuMDArRTE1XHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMTAwVFxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxMFRcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxVFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCAqIDEwMDAwICsgMTAwMDA7XHJcbiAgICB9IC8vIG5lZWQgdG8gZmluZCBzb2x1dGlvbiBmb3IgbGVzcyB0aGFuIDEwTSB1cGdyYWRlc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2xpbWVCYW5rIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRUYWIsIGxvYWRGcm9tRmlsZSwgYWRkRXZlbnQsIHJlc3RhcnQsIHNhdmVUb0ZpbGUgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgQW52aWwgfSBmcm9tIFwiLi9hbnZpbC5qc1wiO1xyXG4vLyBpbXBvcnQgeyBleHBlZGl0aW9uTG9hZCB9IGZyb20gXCIuL2V4cGVkaXRpb24uanNcIjtcclxuaW1wb3J0IHsgU2xpbWVCYW5rIH0gZnJvbSBcIi4vc2xpbWViYW5rLmpzXCI7XHJcbi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCB2ZXJzaW9uID0gXCIwLjEuMlwiO1xyXG5cclxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSBcImxvYWRpbmdcIikge1xyXG4gICAgZm4oKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZm4pO1xyXG4gIH1cclxufVxyXG5cclxucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIC8vIHN0YXJ0IHVwXHJcbiAgbG9hZCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgLy8gY3VycmVudCB0YWJcclxuICB2YXIgdGFiID0gMDtcclxuICBjb25zdCB0YWJfbGlzdCA9IFtcclxuICAgIHsgaWQ6IFwic2xpbWVCYW5rXCIsIG5hbWU6IFwiU2xpbWUgQmFuayBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwibGFiXCIsIG5hbWU6IFwiTGFiIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJhbnZpbFwiLCBuYW1lOiBcIkFudmlsIENhbGN1bGF0b3JcIiB9LFxyXG4gICAgeyBpZDogXCJleHBlZGl0aW9uXCIsIG5hbWU6IFwiRXhwZWRpdGlvbiBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwic2V0dGluZ3NcIiwgbmFtZTogXCJTZXR0aW5nc1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8gY29uc3QgdGFiX2xpc3QgPSBbXCJzbGltZS1iYW5rXCIsIFwibGFiXCIsIFwiYW52aWxcIiwgXCJleHBlZGl0aW9uXCIsIFwic2V0dGluZ3NcIl07XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFRhYlwiKSkge1xyXG4gICAgdGFiX2xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAvLyBhZGRFdmVudChlbGVtZW50LmlkLCBcImNsaWNrXCIsIGNoYW5nZVRhYik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQuaWQpO1xyXG4gICAgICAvLyB0YWIgPSBlbGVtZW50ICsgXCItY2FsY3VsYXRvclwiO1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpID09IGVsZW1lbnQuaWQpIHtcclxuICAgICAgICBsb2FkVGFiKGVsZW1lbnQuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvLyBsb2FkaW5nXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcInNsaW1lQmFua1wiKSB7XHJcbiAgICAgICAgICAgIG5ldyBTbGltZUJhbmsoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwiYW52aWxcIikge1xyXG4gICAgICAgICAgICBuZXcgQW52aWwoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IFwic2V0dGluZ3NcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIiwgXCJjaGFuZ2VcIiwgbG9hZEZyb21GaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5zYXZlVG9GaWxlXCIsIFwiY2xpY2tcIiwgc2F2ZVRvRmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgc2F2ZVwiKTtcclxuICAgICAgICAgICAgYWRkRXZlbnQoXCJzZXR0aW5ncy5yZXN0YXJ0XCIsIFwiY2xpY2tcIiwgcmVzdGFydCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcmVzdGFydFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5pbm5lckhUTUwgPSBcIklFSDJjYWxjID4gXCIgKyBlbGVtZW50Lm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCkuc3R5bGUuY29sb3IgPSBcIiNmMmUwMDlcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhYlwiLCBcInNsaW1lQmFua1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVCYW5rXCIpLnN0eWxlLmNvbG9yID0gXCIjZjJlMDA5XCI7XHJcbiAgICBsb2FkVGFiKFwic2xpbWVCYW5rXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICAgICAgbmV3IFNsaW1lQmFuaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVsc2UgaW4gbG9hZCB8IGFmdGVyIEluaXRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gQW52aWwgbG9hZGluZ1xyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFudmlsLW5pdHJvLXNwZWVkXCIsIDEpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFudmlsLW5pdHJvLXNwZWVkXCIpLnZhbHVlID1cclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiKTtcclxuICAvLyB9XHJcbiAgLy8gYW52aWwgbG9hZCBuZWVkIHJlZmFjdG9yXHJcblxyXG4gIC8vIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAvLyAgIHZhciBpZCA9IDA7XHJcbiAgLy8gICBpZCA9IFwiYW52aWwtZHVuZ2Vvbi1cIiArIGkgKyBcIi10aW1lXCI7XHJcbiAgLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpID09PSBudWxsKSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBjYWxjQW52aWwoKTtcclxuICAvLyBjYWxjRXhwZWRpdGlvbigpO1xyXG4gIC8vIGV4cGVkaXRpb25Mb2FkKCk7XHJcbiAgLy8gbG9hZGluZyB2YWx1ZXMgZnJvbSBsb2NhbFN0b3JhZ2UgZWxzZSBzZXR0aW5nIHZhbHVlcyBhcyAwXHJcbiAgLy8gY29uc3QgbGlzdCA9IFtcclxuICAvLyAgICdhbnZpbC1mb3gtZHVuZ2Vvbi0xLXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tMi10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTMtdGltZScsXHJcbiAgLy8gJ2FudmlsLWZveC1kdW5nZW9uLTQtdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi01LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0xLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi0yLXRpbWUnLFxyXG4gIC8vICdhbnZpbC1iYXQtZHVuZ2Vvbi0zLXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi00LXRpbWUnLCdhbnZpbC1iYXQtZHVuZ2Vvbi01LXRpbWUnXTtcclxuICAvLyBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlIH07XHJcbiAgLy8gY29uc29sZS5sb2coaXRlbXMpO1xyXG4gIC8vIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAvLyAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgLy8gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlbGVtZW50KSA9PT0gbnVsbCkge3NsaW1lQmFua1Jlc2VhcmNoU3RvbmUoMCk7fVxyXG4gIC8vICBlbHNlIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsJykpO31cclxuICAvLyB9KTtcclxuXHJcbiAgLy8gU2xpbWUgQmFuayBsb2FkaW5nXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZSgwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hTdG9uZShcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLXN0b25lLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpID09PSBudWxsKSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaExlYWYoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoTGVhZihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXJlc2VhcmNoLWxlYWYtbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoXHJcbiAgLy8gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpID09PSBudWxsXHJcbiAgLy8gKSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtTbGltZUNvaW5DYXAxKFxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstdXBncmFkZS1zbGltZS1jb2luLWNhcC0xLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKSA9PT0gbnVsbFxyXG4gIC8vICkge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMigwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMihcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMi1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgLy8gc2xpbWVCYW5rSW50cmVzdCgpO1xyXG4gIC8vIHNsaW1lQmFua09wdGltaXNlcigpO1xyXG4gIC8vIGRlYnVnXHJcbiAgLy8gZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeyAuLi5sb2NhbFN0b3JhZ2UgfSkpIHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKS5pbm5lckhUTUwgKz0gYDxpPiR7a2V5fTo8L2k+IDxiPiR7dmFsdWV9PC9iPjxicj5gO1xyXG4gIC8vIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=