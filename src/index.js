import { loadTab, loadFromFile, addEvent, restart, saveToFile } from "./common.js";
import { Anvil } from "./anvil.js";
// import { expeditionLoad } from "./expedition.js";
import { SlimeBank } from "./slimebank.js";
import { Gear } from "./gear/gear.ts";
// import "./style.css";

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

  if (localStorage.getItem("currentTab")) {
    tab_list.forEach((element) => {
      if (localStorage.getItem("currentTab") == element.id) {
        loadTab(element.id).then((response) => {
          // loading
          document.getElementById("content").innerHTML = response;
          if (element.id == "slimeBank") {
            new SlimeBank();
          }
          if (element.id == "anvil") {
            new Anvil();
          }
          if (element.id == "gear") {
            new Gear();
          }
          if (element.id == "settings") {
            console.log("before");
            addEvent("settings.loadFromFile", "change", loadFromFile);
            console.log("after");
            addEvent("settings.saveToFile", "click", saveToFile);
            console.log("after save");
            addEvent("settings.restart", "click", restart);
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
    loadTab("slimeBank").then((response) => {
      document.getElementById("content").innerHTML = response;
      new SlimeBank();
      console.log("else in load | after Init");
    });
  }
}
