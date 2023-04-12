// import { convert, convert2, sigma, restart, currentTab } from "./common.js";
import { calcAnvil } from "./anvil.js";
import { expeditionLoad } from "./expedition.js";

import {
  slimeBankSlimeCoinCap1,
  slimeBankSlimeCoinCap2,
  slimeBankResearchStone,
  slimeBankResearchLeaf,
} from "./slimebank.js";

function load() {
  // current tab
  var tab = 0;
  const tab_list = ["slime-bank", "lab", "anvil", "expedition"];
  if (localStorage.getItem("setting-currentTab")) {
    tab_list.forEach((element) => {
      tab = element + "-calculator";
      if (localStorage.getItem("setting-currentTab") == element) {
        document.getElementById(tab).style.display = "block";
        document.getElementById(element).style.color = "#f2e009";
      } else {
        document.getElementById(tab).style.display = "none";
      }
    });
  } else {
    localStorage.setItem("setting-currentTab", "slime-bank");
    document.getElementById("slime-bank").style.color = "#f2e009";
    document.getElementById("lab-calculator").style.display = "none";
    document.getElementById("anvil-calculator").style.display = "none";
    document.getElementById("expedition-calculator").style.display = "none";
  }
  // Anvil loading
  if (localStorage.getItem("anvil-nitro-speed") === null) {
    localStorage.setItem("anvil-nitro-speed", 1);
  } else {
    document.getElementById("anvil-nitro-speed").value =
      localStorage.getItem("anvil-nitro-speed");
  }
  // anvil load need refactor

  for (let i = 1; i <= 10; i++) {
    var id = 0;
    id = "anvil-dungeon-" + i + "-time";
    if (localStorage.getItem(id) === null) {
      localStorage.setItem(id, document.getElementById(id).value);
    } else {
      document.getElementById(id).value = localStorage.getItem(id);
    }
  }
  calcAnvil();
  // calcExpedition();
  expeditionLoad();
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
  if (localStorage.getItem("slime-bank-research-stone-level") === null) {
    slimeBankResearchStone(0);
  } else {
    slimeBankResearchStone(
      localStorage.getItem("slime-bank-research-stone-level")
    );
  }

  if (localStorage.getItem("slime-bank-research-leaf-level") === null) {
    slimeBankResearchLeaf(0);
  } else {
    slimeBankResearchLeaf(
      localStorage.getItem("slime-bank-research-leaf-level")
    );
  }

  if (
    localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level") === null
  ) {
    slimeBankSlimeCoinCap1(0);
  } else {
    slimeBankSlimeCoinCap1(
      localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level")
    );
  }

  if (
    localStorage.getItem("slime-bank-upgrade-slime-coin-cap-2-level") === null
  ) {
    slimeBankSlimeCoinCap2(0);
  } else {
    slimeBankSlimeCoinCap2(
      localStorage.getItem("slime-bank-upgrade-slime-coin-cap-2-level")
    );
  }

  // slimeBankSlimeCoinCapTotal();
  // slimeBankIntrest();
  // slimeBankOptimiser();
  // debug
  // for (const [key, value] of Object.entries({ ...localStorage })) {
  //   // console.log(`${key}: ${value}`);
  //   document.getElementById('debug').innerHTML += `<i>${key}:</i> <b>${value}</b><br>`;
  // }
}

export { load };
