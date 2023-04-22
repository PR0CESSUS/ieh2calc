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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEUseUJBQXlCLElBQUksSUFBSSxNQUFNO0FBQ3ZDLDJEQUEyRCxJQUFJLFdBQVcsTUFBTTtBQUNoRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvY29tbW9uLWV4cG9zZWQuanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9hbnZpbC5qcyIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvLi9zcmMvc2xpbWViYW5rLmpzIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pZWgyY2FsYy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2llaDJjYWxjL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaWVoMmNhbGMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pZWgyY2FsYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX18gPSByZXF1aXJlKFwiLSEuL2NvbW1vbi5qc1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qc1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fID0gX19fRVhQT1NFX0xPQURFUl9HRVRfR0xPQkFMX1RISVNfX187XG52YXIgX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfTU9EVUxFX0xPQ0FMX05BTUVfX18gPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXy5jaGFuZ2VUYWJcbmlmICh0eXBlb2YgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImNoYW5nZVRhYlwiXSA9PT0gJ3VuZGVmaW5lZCcpIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX19bXCJjaGFuZ2VUYWJcIl0gPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9NT0RVTEVfTE9DQUxfTkFNRV9fXztcbmVsc2UgdGhyb3cgbmV3IEVycm9yKCdbZXhwb3Nlcy1sb2FkZXJdIFRoZSBcImNoYW5nZVRhYlwiIHZhbHVlIGV4aXN0cyBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBpdCBtYXkgbm90IGJlIHNhZmUgdG8gb3ZlcndyaXRlIGl0LCB1c2UgdGhlIFwib3ZlcnJpZGVcIiBvcHRpb24nKVxubW9kdWxlLmV4cG9ydHMgPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICB9XG4gIHZhciBnO1xuICB0cnkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGcgPSB0aGlzIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHNlbGYgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgZ2xvYmFsIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGc7XG59KCk7IiwiaW1wb3J0IHsgYWRkRXZlbnQsIGNvbnZlcnQgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxuXHJcbmNsYXNzIEFudmlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubmFtZSA9IFwiYW52aWxcIjtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgbml0cm86IDEuMCxcclxuICAgICAgZHVuZ2VvbjogWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudChcImFudmlsLm5pdHJvLnNwZWVkXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2F2ZS5iaW5kKHRoaXMpKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgYWRkRXZlbnQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnRpbWVcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zYXZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIC8vIHRoaXMuZGF0YS5kdW5nZW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5uaXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWU7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5kdW5nZW9uW2kgLSAxXSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwuZHVuZ2Vvbi5cIiArIGkgKyBcIi50aW1lXCIpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW52aWwubml0cm8uc3BlZWRcIikudmFsdWUgPSB0aGlzLmRhdGEubml0cm87XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXkoKVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCQoXCIjcmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICBsZXQgaWQgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xyXG4gICAgICBsZXQgdmFsdWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudmFsdWVcIjtcclxuICAgICAgbGV0IHRpbWUgPSBcImFudmlsLmR1bmdlb24uXCIgKyBpICsgXCIudGltZVwiO1xyXG4gICAgICBsZXQgb3JiID0gXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLm9yYlwiO1xyXG4gICAgICBsZXQgcmV3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC5kdW5nZW9uLlwiICsgaSArIFwiLnJld2FyZFwiKS5pbm5lckhUTUw7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWUgPSB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV07XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICgzNjAwIC8gdGhpcy5kYXRhLmR1bmdlb25baSAtIDFdKSAqIHJld2FyZCAqIHRoaXMuZGF0YS5uaXRyb1xyXG4gICAgICApO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmIpLmlubmVySFRNTCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKDM2MDAgLyB0aGlzLmRhdGEuZHVuZ2VvbltpIC0gMV0pICogdGhpcy5kYXRhLm5pdHJvXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBbnZpbCB9O1xyXG4iLCJmdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaWQsIHRoaXMudmFsdWUpO1xyXG4gIGNvbnNvbGUubG9nKHRoaXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudChpZCwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGFiKGlucHV0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIGlucHV0KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFRhYih0YWIpIHtcclxuICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBsZXQgZmlsZSA9IFwiLi4vaHRtbC9cIiArIHRhYiArIFwiLmh0bWxcIjtcclxuXHJcbiAgLy8gbXlIZWFkZXJzLmFwcGVuZChcclxuICAvLyAgIFwiY29udGVudC1zZWN1cml0eS1wb2xpY3k6XCIsXHJcbiAgLy8gICBcImRlZmF1bHQtc3JjICdzZWxmJzsgc3R5bGUtc3JjICdzZWxmJyAndW5zYWZlLWlubGluZScgKjsgZm9udC1zcmMgJ3NlbGYnICo7IGNvbm5lY3Qtc3JjICdzZWxmJyAqOyBpbWctc3JjIGRhdGE6ICpcIlxyXG4gIC8vICk7XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBtb2RlOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICByZWZlcnJlclBvbGljeTogXCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIixcclxuICB9O1xyXG4gIC8vIGxldCB4ID0gYXdhaXQgZmV0Y2goZmlsZSk7XHJcbiAgLy8gbGV0IHkgPSBhd2FpdCB4LnRleHQoKTtcclxuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0geTtcclxuICByZXR1cm4gZmV0Y2goZmlsZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSk7XHJcbn1cclxuXHJcbi8vIGV4dC5nZXQgPSAodXJsKSA9PiB7XHJcbi8vICAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4vLyAgIGxldCBvcHRpb25zID0ge1xyXG4vLyAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4vLyAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbi8vICAgICAgIG1vZGU6ICdjb3JzJ1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vZmV0Y2ggZ2V0XHJcblxyXG4vLyAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4dC5nZXQoXCJodHRwOi8vZXhhbXBsZS5jb21cIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSk7IC8vIG9yIHdoYXRldmVyXHJcbi8vIH0pO1xyXG5cclxuZnVuY3Rpb24gc2lnbWEobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgaXRlcmF0b3IsIGFjY3VtdWxhdG9yID0gMCkge1xyXG4gIC8vIGxldCBhY2N1bXVsYXRvciA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IGxvd2VyQm91bmQ7IGkgPD0gdXBwZXJCb3VuZDsgKytpKSB7XHJcbiAgICBhY2N1bXVsYXRvciArPSBpdGVyYXRvcihpKTtcclxuICB9XHJcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IG5vcm1hbCBudW1iZXIgdG8gSyxNLEIsVCBhbmQgZXhwb25lbnRpYWxcclxuZnVuY3Rpb24gY29udmVydChpbnB1dCkge1xyXG4gIGlucHV0ID0gcGFyc2VGbG9hdChpbnB1dCk7XHJcbiAgdmFyIG91dHB1dCA9IDA7XHJcbiAgaWYgKGlucHV0ID09IDApIHtcclxuICAgIG91dHB1dCA9IDA7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8PSAxMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gTWF0aC5yb3VuZChpbnB1dCk7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDApLnRvRml4ZWQoMikgKyBcIktcIjtcclxuICB9IGVsc2UgaWYgKGlucHV0IDwgMTAwMDAwMDAwMCkge1xyXG4gICAgb3V0cHV0ID0gKGlucHV0IC8gMTAwMDAwMCkudG9GaXhlZCgyKSArIFwiTVwiO1xyXG4gIH0gZWxzZSBpZiAoaW5wdXQgPCAxMDAwMDAwMDAwMDAwKSB7XHJcbiAgICBvdXRwdXQgPSAoaW5wdXQgLyAxMDAwMDAwMDAwKS50b0ZpeGVkKDMpICsgXCJCXCI7XHJcbiAgfSBlbHNlIGlmIChpbnB1dCA8IDEwMDAwMDAwMDAwMDAwMDApIHtcclxuICAgIG91dHB1dCA9IChpbnB1dCAvIDEwMDAwMDAwMDAwMDApLnRvRml4ZWQoMikgKyBcIlRcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgb3V0cHV0ID0gaW5wdXQudG9FeHBvbmVudGlhbCgyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgayxtLGIsdCB0byBub3JtYWwgbnVtYmVyc1xyXG5mdW5jdGlvbiBjb252ZXJ0MihpbnB1dCwgbWluID0gMCwgbWF4ID0gOTk5OTk5OTk5OTk5OTk5KSB7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8sL2csIFwiLlwiKTsgLy8gY29udmVydCAsIHRvIC5cclxuICBpZiAoL15cXGQqXFwuP1xcZCskLy50ZXN0KGlucHV0KSkge1xyXG4gICAgaWYgKGlucHV0IDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0ID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfSAvLyByZXR1cm4gcm91bmRlZCBudW1iZXIgaWYgdGhlcmUgaXMgbm8gYWJicmV2aWV0ZVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgcmVnZXggPSAvKC4qKShcXEQpJC9nbTtcclxuICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcclxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvIC9nLCBcIlwiKTsgLy8gcmVtb3ZlcyBhbGwgc3BhY2VzXHJcblxyXG4gICAgaW5wdXQgPSByZWdleC5leGVjKGlucHV0KTtcclxuICAgIGxldCBvdXRwdXQgPSAwO1xyXG4gICAgaWYgKGlucHV0WzJdID09IFwidFwiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiA0O1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFsyXSA9PSBcImJcIikge1xyXG4gICAgICBvdXRwdXQgPSBpbnB1dFsxXSAqIDEwMDAgKiogMztcclxuICAgIH0gZWxzZSBpZiAoaW5wdXRbMl0gPT0gXCJtXCIpIHtcclxuICAgICAgb3V0cHV0ID0gaW5wdXRbMV0gKiAxMDAwICoqIDI7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0WzJdID09IFwia1wiKSB7XHJcbiAgICAgIG91dHB1dCA9IGlucHV0WzFdICogMTAwMCAqKiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVG9GaWxlKCkge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKFxyXG4gICAgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZSwgbnVsbCwgMildLCB7XHJcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiLFxyXG4gICAgfSlcclxuICApO1xyXG4gIGEuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJJRUgyY2FsYy1kYXRhLmpzb25cIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICBhLmNsaWNrKCk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZyb21GaWxlKCkge1xyXG4gIGxldCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5ncy5sb2FkRnJvbUZpbGVcIikuZmlsZXNbMF07XHJcbiAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgdGV4dCA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxlLWNvbnRlbnRzXCIpLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UodGV4dCkpO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoeyAuLi5KU09OLnBhcnNlKHRleHQpIH0pKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjb252ZXJ0LFxyXG4gIGNvbnZlcnQyLFxyXG4gIHNpZ21hLFxyXG4gIHJlc3RhcnQsXHJcbiAgY2hhbmdlVGFiLFxyXG4gIGxvYWRUYWIsXHJcbiAgYWRkRXZlbnQsXHJcbiAgc2F2ZVRvRmlsZSxcclxuICBsb2FkRnJvbUZpbGUsXHJcbn07XHJcbiIsImltcG9ydCB7IGNvbnZlcnQsIGNvbnZlcnQyLCBzaWdtYSwgYWRkRXZlbnQgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxuXHJcbmNsYXNzIFNsaW1lQmFuayB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBcInNsaW1lQmFua1wiO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICByZXNlYXJjaDoge1xyXG4gICAgICAgIGxlYWY6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXHJcbiAgICAgICAgc3RvbmU6IHsgbGV2ZWw6IDAsIHZhbHVlOiAwIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzbGltZUNvaW5DYXAxOiB7XHJcbiAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgdmFsdWU6IDEwMDAwLFxyXG4gICAgICAgIGNvc3Q6IDEwMDAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzbGltZUNvaW5DYXAyOiB7XHJcbiAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgICBjb3N0OiAxMDAwMDAwMDAwMCxcclxuICAgICAgfSxcclxuICAgICAgc2xpbWVDb2luQ2FwVG90YWw6IDAsXHJcbiAgICAgIGludHJlc3Q6IDAsXHJcbiAgICAgIG11bHRpcGxpZXI6IDAsXHJcbiAgICAgIHBldDE6IHtcclxuICAgICAgICByYW5rOiAwLFxyXG4gICAgICAgIGxveWFsdHk6IDAsXHJcbiAgICAgICAgcGFzc2l2ZTogMCxcclxuICAgICAgfSxcclxuICAgICAgbWlsZXN0b25lMTgwMDogZmFsc2UsXHJcbiAgICAgIG1pbGVzdG9uZTI3MDA6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSA9PT0gbnVsbCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNsYXNzIGNvbnN0cnVjdG9yIGFrYSBJbml0XCIpO1xyXG4gICAgYWRkRXZlbnQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiLCBcImNoYW5nZVwiLCB0aGlzLnJlc2VhcmNoU3RvbmUuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInJlc2VhcmNoLmxlYWYubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5yZXNlYXJjaExlYWYuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIiwgXCJjaGFuZ2VcIiwgdGhpcy5zbGltZUNvaW5DYXAxLmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJzbGltZUNvaW5DYXAyLmxldmVsXCIsIFwiY2hhbmdlXCIsIHRoaXMuc2xpbWVDb2luQ2FwMi5iaW5kKHRoaXMpKTtcclxuICAgIGFkZEV2ZW50KFwicGV0MS5yYW5rXCIsIFwiY2hhbmdlXCIsIHRoaXMucGV0LmJpbmQodGhpcykpO1xyXG4gICAgYWRkRXZlbnQoXCJwZXQxLmxveWFsdHlcIiwgXCJjaGFuZ2VcIiwgdGhpcy5wZXQuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTE4MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRFdmVudChcIm1pbGVzdG9uZTI3MDBcIiwgXCJjaGFuZ2VcIiwgdGhpcy5taWxlc3RvbmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzcGxheSgpXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJChcIiNyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5zdG9uZS5sZXZlbFwiKS52YWx1ZSA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUudmFsdWVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnJlc2VhcmNoLnN0b25lLnZhbHVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlYXJjaC5sZWFmLmxldmVsXCIpLnZhbHVlID0gdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYubGV2ZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VhcmNoLmxlYWYudmFsdWVcIikuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnJlc2VhcmNoLmxlYWYudmFsdWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIikudmFsdWUgPSB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5sZXZlbDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMi5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIuY29zdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIudmFsdWVcIikuaW5uZXJIVE1MID0gY29udmVydChcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWVcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIikudmFsdWUgPSBjb252ZXJ0KHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS52YWx1ZVwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KFxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwMS5jb3N0XCIpLmlubmVySFRNTCA9IGNvbnZlcnQodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmsuaW50cmVzdFwiKS5pbm5lckhUTUwgPSBjb252ZXJ0KHRoaXMuZGF0YS5pbnRyZXN0KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpbWVDb2luQ2FwVG90YWxcIikuaW5uZXJIVE1MID0gY29udmVydCh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWwpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGltZUJhbmsubXVsdGlwbGllclwiKS5pbm5lckhUTUwgPSB0aGlzLmRhdGEubXVsdGlwbGllcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGV0MS5wYXNzaXZlXCIpLmlubmVySFRNTCA9IHRoaXMuZGF0YS5wZXQxLnBhc3NpdmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEucmFua1wiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLnJhbms7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBldDEubG95YWx0eVwiKS52YWx1ZSA9IHRoaXMuZGF0YS5wZXQxLmxveWFsdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5taWxlc3RvbmUxODAwID09IHRydWUpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9PSB0cnVlKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlsZXN0b25lMjcwMFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaWxlc3RvbmUoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWxlc3RvbmUxODAwXCIpLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLm1pbGVzdG9uZTE4MDAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbGVzdG9uZTI3MDBcIikuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEubWlsZXN0b25lMjcwMCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwZXQoKSB7XHJcbiAgICB0aGlzLmRhdGEucGV0MS5yYW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLnJhbmtcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEucGV0MS5sb3lhbHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXQxLmxveWFsdHlcIikudmFsdWU7XHJcbiAgICBsZXQgbG95YWx0eSA9IDIuNSAqIChwYXJzZUZsb2F0KHRoaXMuZGF0YS5wZXQxLmxveWFsdHkpICsgMTAwKSAqIDAuMDE7XHJcbiAgICB0aGlzLmRhdGEucGV0MS5wYXNzaXZlID0gKyh0aGlzLmRhdGEucGV0MS5yYW5rICogbG95YWx0eSkudG9GaXhlZCgyKSArIDEwMDtcclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZWFyY2hTdG9uZSgpIHtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2guc3RvbmUubGV2ZWxcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2guc3RvbmUudmFsdWUgPSArKHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCAqIDAuMSkudG9GaXhlZCgyKTtcclxuICAgIHRoaXMuaW50cmVzdCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICByZXNlYXJjaExlYWYoKSB7XHJcbiAgICB0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZWFyY2gubGVhZi5sZXZlbFwiKS52YWx1ZTtcclxuICAgIHRoaXMuZGF0YS5yZXNlYXJjaC5sZWFmLnZhbHVlID0gKyh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi5sZXZlbCAqIDIpLnRvRml4ZWQoMikgKyAxMDA7XHJcbiAgICB0aGlzLnNsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgIC8vIHNsaW1lQmFua1NsaW1lQ29pbkNhcFRvdGFsKCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXAxKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPSBjb252ZXJ0Mihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDEubGV2ZWxcIikudmFsdWUpO1xyXG4gICAgLy8gaW5wdXQgPSBjb252ZXJ0MihpbnB1dCk7XHJcblxyXG4gICAgLy8gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEudmFsdWUgPSBzaWdtYShcclxuICAgIC8vICAgMCxcclxuICAgIC8vICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwsXHJcbiAgICAvLyAgIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGEgKiAyMCAtIDEwICsgMTAwMDA7XHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIDEwXHJcbiAgICAvLyApO1xyXG4gICAgbGV0IGxldmVsID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWw7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSA9IDEwMDAwLjAgKyAxMDAwMC4wICogbGV2ZWwgKyAxMC4wICogTWF0aC5wb3cobGV2ZWwsIDIuMCk7XHJcblxyXG4gICAgdGhpcy5zbGltZUNvaW5DYXAxQ29zdCgpO1xyXG4gICAgdGhpcy5zbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXAyKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQ29pbkNhcDIubGV2ZWxcIikudmFsdWU7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi52YWx1ZSA9XHJcbiAgICAgIHNpZ21hKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwsXHJcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgIHJldHVybiBhICogMjAgLSAxMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICkgKyAxMDA7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMi5jb3N0ID0gMTAwMDAwMDAwMDAuMCAqIE1hdGgucG93KDIuMCwgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIubGV2ZWwpO1xyXG5cclxuICAgIHRoaXMuc2xpbWVDb2luQ2FwVG90YWwoKTtcclxuICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2xpbWVDb2luQ2FwVG90YWwoKSB7XHJcbiAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwVG90YWwgPVxyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS52YWx1ZSAqXHJcbiAgICAgICh0aGlzLmRhdGEucmVzZWFyY2gubGVhZi52YWx1ZSAvIDEwMCkgKlxyXG4gICAgICAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDIudmFsdWUgLyAxMDApICpcclxuICAgICAgKHRoaXMuZGF0YS5wZXQxLnBhc3NpdmUgLyAxMDApO1xyXG5cclxuICAgIHRoaXMuaW50cmVzdCgpO1xyXG4gIH1cclxuXHJcbiAgaW50cmVzdCgpIHtcclxuICAgIGxldCBpbnRyZXN0UGVyY2VudCA9IHRoaXMuZGF0YS5yZXNlYXJjaC5zdG9uZS5sZXZlbCAqIDAuMDAxO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMTgwMCkge1xyXG4gICAgICBpbnRyZXN0UGVyY2VudCArPSAwLjAyNTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGEubWlsZXN0b25lMjcwMCkge1xyXG4gICAgICBpbnRyZXN0UGVyY2VudCArPSAwLjA1O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhLmludHJlc3QgPSBpbnRyZXN0UGVyY2VudCAqIHRoaXMuZGF0YS5zbGltZUNvaW5DYXBUb3RhbDtcclxuICAgIHRoaXMuZGF0YS5tdWx0aXBsaWVyID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuaW50cmVzdCAvIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QpO1xyXG4gICAgdGhpcy5kYXRhLm11bHRpcGxpZXIgLT0gdGhpcy5kYXRhLm11bHRpcGxpZXIgKiAwLjE1O1xyXG4gICAgLy8gc2xpbWVCYW5rT3B0aW1pc2VyKCk7XHJcbiAgfVxyXG5cclxuICBzbGltZUNvaW5DYXAxQ29zdCgpIHtcclxuICAgIC8vIGlmICgoZG91YmxlKSB0aGlzLmxldmVsLnZhbHVlID49IDUwMCAwMDAgMDAwLjApXHJcbiAgICAvLyByZXR1cm4gMUUrMTUgKiB0aGlzLkNvc3RNb2RpZmllcigpO1xyXG4gICAgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDEwMDAwMDAwMDApIHtcclxuICAgICAgdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEuY29zdCA9IDEwMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxNlxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gNTAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgfSAvLyAxLjAwK0UxNVxyXG4gICAgZWxzZSBpZiAodGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgPj0gMTAwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDA7XHJcbiAgICB9IC8vIDEwMFRcclxuICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmxldmVsID49IDUwMDAwMDAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5zbGltZUNvaW5DYXAxLmNvc3QgPSAxMDAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMTBUXHJcbiAgICBlbHNlIGlmICh0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5sZXZlbCA+PSAxMDAwMDAwMCkge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gMTAwMDAwMDAwMDAwMDtcclxuICAgIH0gLy8gMVRcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEuc2xpbWVDb2luQ2FwMS5jb3N0ID0gdGhpcy5kYXRhLnNsaW1lQ29pbkNhcDEubGV2ZWwgKiAxMDAwMCArIDEwMDAwO1xyXG4gICAgfSAvLyBuZWVkIHRvIGZpbmQgc29sdXRpb24gZm9yIGxlc3MgdGhhbiAxME0gdXBncmFkZXNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNsaW1lQmFuayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkVGFiLCBsb2FkRnJvbUZpbGUsIGFkZEV2ZW50LCByZXN0YXJ0LCBzYXZlVG9GaWxlIH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IEFudmlsIH0gZnJvbSBcIi4vYW52aWwuanNcIjtcclxuLy8gaW1wb3J0IHsgZXhwZWRpdGlvbkxvYWQgfSBmcm9tIFwiLi9leHBlZGl0aW9uLmpzXCI7XHJcbmltcG9ydCB7IFNsaW1lQmFuayB9IGZyb20gXCIuL3NsaW1lYmFuay5qc1wiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgdmVyc2lvbiA9IFwiMC4xLjJcIjtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIGZuKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcclxuICB9XHJcbn1cclxuXHJcbnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLyBzdGFydCB1cFxyXG4gIGxvYWQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkKCkge1xyXG4gIC8vIGN1cnJlbnQgdGFiXHJcbiAgdmFyIHRhYiA9IDA7XHJcbiAgY29uc3QgdGFiX2xpc3QgPSBbXHJcbiAgICB7IGlkOiBcInNsaW1lQmFua1wiLCBuYW1lOiBcIlNsaW1lIEJhbmsgQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcImxhYlwiLCBuYW1lOiBcIkxhYiBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiYW52aWxcIiwgbmFtZTogXCJBbnZpbCBDYWxjdWxhdG9yXCIgfSxcclxuICAgIHsgaWQ6IFwiZXhwZWRpdGlvblwiLCBuYW1lOiBcIkV4cGVkaXRpb24gQ2FsY3VsYXRvclwiIH0sXHJcbiAgICB7IGlkOiBcInNldHRpbmdzXCIsIG5hbWU6IFwiU2V0dGluZ3NcIiB9LFxyXG4gIF07XHJcblxyXG4gIC8vIGNvbnN0IHRhYl9saXN0ID0gW1wic2xpbWUtYmFua1wiLCBcImxhYlwiLCBcImFudmlsXCIsIFwiZXhwZWRpdGlvblwiLCBcInNldHRpbmdzXCJdO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYWJcIikpIHtcclxuICAgIHRhYl9saXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgLy8gYWRkRXZlbnQoZWxlbWVudC5pZCwgXCJjbGlja1wiLCBjaGFuZ2VUYWIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LmlkKTtcclxuICAgICAgLy8gdGFiID0gZWxlbWVudCArIFwiLWNhbGN1bGF0b3JcIjtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFRhYlwiKSA9PSBlbGVtZW50LmlkKSB7XHJcbiAgICAgICAgbG9hZFRhYihlbGVtZW50LmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgLy8gbG9hZGluZ1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gXCJzbGltZUJhbmtcIikge1xyXG4gICAgICAgICAgICBuZXcgU2xpbWVCYW5rKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcImFudmlsXCIpIHtcclxuICAgICAgICAgICAgbmV3IEFudmlsKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBcInNldHRpbmdzXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmVcIik7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3MubG9hZEZyb21GaWxlXCIsIFwiY2hhbmdlXCIsIGxvYWRGcm9tRmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJcIik7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3Muc2F2ZVRvRmlsZVwiLCBcImNsaWNrXCIsIHNhdmVUb0ZpbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHNhdmVcIik7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50KFwic2V0dGluZ3MucmVzdGFydFwiLCBcImNsaWNrXCIsIHJlc3RhcnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHJlc3RhcnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MID0gXCJJRUgyY2FsYyA+IFwiICsgZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaWQpLnN0eWxlLmNvbG9yID0gXCIjZjJlMDA5XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRUYWJcIiwgXCJzbGltZUJhbmtcIik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaW1lQmFua1wiKS5zdHlsZS5jb2xvciA9IFwiI2YyZTAwOVwiO1xyXG4gICAgbG9hZFRhYihcInNsaW1lQmFua1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gcmVzcG9uc2U7XHJcbiAgICAgIG5ldyBTbGltZUJhbmsoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJlbHNlIGluIGxvYWQgfCBhZnRlciBJbml0XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIEFudmlsIGxvYWRpbmdcclxuICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbnZpbC1uaXRyby1zcGVlZFwiLCAxKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnZpbC1uaXRyby1zcGVlZFwiKS52YWx1ZSA9XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW52aWwtbml0cm8tc3BlZWRcIik7XHJcbiAgLy8gfVxyXG4gIC8vIGFudmlsIGxvYWQgbmVlZCByZWZhY3RvclxyXG5cclxuICAvLyBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgLy8gICB2YXIgaWQgPSAwO1xyXG4gIC8vICAgaWQgPSBcImFudmlsLWR1bmdlb24tXCIgKyBpICsgXCItdGltZVwiO1xyXG4gIC8vICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gY2FsY0FudmlsKCk7XHJcbiAgLy8gY2FsY0V4cGVkaXRpb24oKTtcclxuICAvLyBleHBlZGl0aW9uTG9hZCgpO1xyXG4gIC8vIGxvYWRpbmcgdmFsdWVzIGZyb20gbG9jYWxTdG9yYWdlIGVsc2Ugc2V0dGluZyB2YWx1ZXMgYXMgMFxyXG4gIC8vIGNvbnN0IGxpc3QgPSBbXHJcbiAgLy8gICAnYW52aWwtZm94LWR1bmdlb24tMS10aW1lJywgJ2FudmlsLWZveC1kdW5nZW9uLTItdGltZScsICdhbnZpbC1mb3gtZHVuZ2Vvbi0zLXRpbWUnLFxyXG4gIC8vICdhbnZpbC1mb3gtZHVuZ2Vvbi00LXRpbWUnLCAnYW52aWwtZm94LWR1bmdlb24tNS10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tMS10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tMi10aW1lJyxcclxuICAvLyAnYW52aWwtYmF0LWR1bmdlb24tMy10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tNC10aW1lJywnYW52aWwtYmF0LWR1bmdlb24tNS10aW1lJ107XHJcbiAgLy8gY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZSB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAvLyBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgLy8gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gIC8vICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZWxlbWVudCkgPT09IG51bGwpIHtzbGltZUJhbmtSZXNlYXJjaFN0b25lKDApO31cclxuICAvLyAgZWxzZSB7c2xpbWVCYW5rUmVzZWFyY2hTdG9uZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbCcpKTt9XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIFNsaW1lIEJhbmsgbG9hZGluZ1xyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtc3RvbmUtbGV2ZWxcIikgPT09IG51bGwpIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoU3RvbmUoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1Jlc2VhcmNoU3RvbmUoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1zdG9uZS1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNsaW1lLWJhbmstcmVzZWFyY2gtbGVhZi1sZXZlbFwiKSA9PT0gbnVsbCkge1xyXG4gIC8vICAgc2xpbWVCYW5rUmVzZWFyY2hMZWFmKDApO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBzbGltZUJhbmtSZXNlYXJjaExlYWYoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay1yZXNlYXJjaC1sZWFmLWxldmVsXCIpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMS1sZXZlbFwiKSA9PT0gbnVsbFxyXG4gIC8vICkge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMSgwKTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgc2xpbWVCYW5rU2xpbWVDb2luQ2FwMShcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzbGltZS1iYW5rLXVwZ3JhZGUtc2xpbWUtY29pbi1jYXAtMS1sZXZlbFwiKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTItbGV2ZWxcIikgPT09IG51bGxcclxuICAvLyApIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDIoMCk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHNsaW1lQmFua1NsaW1lQ29pbkNhcDIoXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2xpbWUtYmFuay11cGdyYWRlLXNsaW1lLWNvaW4tY2FwLTItbGV2ZWxcIilcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzbGltZUJhbmtTbGltZUNvaW5DYXBUb3RhbCgpO1xyXG4gIC8vIHNsaW1lQmFua0ludHJlc3QoKTtcclxuICAvLyBzbGltZUJhbmtPcHRpbWlzZXIoKTtcclxuICAvLyBkZWJ1Z1xyXG4gIC8vIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHsgLi4ubG9jYWxTdG9yYWdlIH0pKSB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnJykuaW5uZXJIVE1MICs9IGA8aT4ke2tleX06PC9pPiA8Yj4ke3ZhbHVlfTwvYj48YnI+YDtcclxuICAvLyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9