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
  const tab_list = [
    { id: "slimeBank", name: "Slime Bank Calculator" },
    { id: "lab", name: "Lab Calculator" },
    { id: "anvil", name: "Anvil Calculator" },
    { id: "expedition", name: "Expedition Calculator" },
    { id: "gear", name: "Gear Calculator" },
    { id: "settings", name: "Settings" },
    { id: "changelog", name: "Changelog" },
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
            // addEvent("settings.loadFromFile", "change", loadFromFile);
            // addEvent("settings.saveToFile", "click", saveToFile);
            // addEvent("settings.restart", "click", restart);
            var script = document.createElement("script");
            // script.onload = function () {
            //   //do stuff with the script
            //   console.log("loaded?");
            // };
            script.src = "./settings.bundle.js";

            document.head.appendChild(script);
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
