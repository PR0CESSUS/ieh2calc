import { loadTab, changeTab } from "./common.js";
import { Anvil } from "./anvil.js";
import { Guild } from "./guild.js";
import { Expedition } from "./expedition.js";
import { SlimeBank } from "./slimebank.js";
import { Gear } from "./gear/gear.ts";
// import "./style.css";

const version = "0.1.7";

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
    { id: "guild", name: "Guild Calculator" },
    // { id: "lab", name: "Lab Calculator" },
    { id: "anvil", name: "Anvil Calculator" },
    { id: "expedition", name: "Expedition Calculator" },
    { id: "gear", name: "Gear Calculator" },
    { id: "settings", name: "Settings" },
    { id: "changelog", name: "Changelog" },
  ];

  if (localStorage.getItem("currentTab")) {
    tab_list.forEach((element) => {
      document.getElementById(element.id).addEventListener("click", changeTab);
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
          if (element.id == "expedition") {
            new Expedition();
          }
          if (element.id == "gear") {
            new Gear();
          }
          if (element.id == "guild") {
            new Guild();
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

            script.src = "js/settings.bundle.js";

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
    });
  }
  document.getElementById("version").innerHTML = version;

  // let version = document.getElementById("version").innerHTML;
  if (
    localStorage.getItem("version") === null ||
    localStorage.getItem("version") === "null" ||
    localStorage.getItem("version") != version
  ) {
    // localStorage.setItem("version", version);
    document.getElementById("changelog").classList.add("menu-button-warning");
  }
}
