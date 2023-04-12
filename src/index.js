// import { currentTab } from "./common.js";
// import { currentTab } from "expose-loader?exposes=window.$ currentTab";
//
// Adds the `jquery` to the global object under the names `$` and `jQuery`
import { load } from "./load.js";
const { file, parse } = require("./globals.js");

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  // start up your app
  load();
  // console.log(document.body);
  // const xxx = currentTab();
});
// this.alert("Hmmm, this probably isn't a great idea...");
