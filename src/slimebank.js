import { convert, convert2, sigma } from "./common.js";
// Slime Bank functions

function slimeBankSlimeCoinCapTotal() {
  let output =
    localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-value") *
    ((localStorage.getItem("slime-bank-research-leaf-level") * 2 + 100) / 100) *
    (localStorage.getItem("slime-bank-upgrade-slime-coin-cap-2-value") / 100);
  localStorage.setItem("slime-bank-slime-coin-cap-total", output);
  document.getElementById("slime-bank-slime-coin-cap-value").innerHTML =
    convert(output);
  slimeBankIntrest();
  slimeBankOptimiser();
}

function slimeBankIntrest() {
  let intrest =
    document.getElementById("slime-bank-research-stone-level").value *
    0.001 *
    localStorage.getItem("slime-bank-slime-coin-cap-total");
  localStorage.setItem("slime-bank-intrest", intrest);
  document.getElementById("slime-bank-intrest").innerHTML = convert(intrest);
  slimeBankOptimiser();
}

function slimeBankOptimiser() {
  let slime_coin_cap_1_level = localStorage.getItem(
    "slime-bank-upgrade-slime-coin-cap-1-level"
  );
  let intrest =
    localStorage.getItem("slime-bank-intrest") -
    localStorage.getItem("slime-bank-intrest") * 0.1;
  let slime_coin_cap_1_cost;

  if (slime_coin_cap_1_level >= 1000000000) {
    slime_coin_cap_1_cost = 10000000000000000;
  } // 1.00+E16
  else if (slime_coin_cap_1_level >= 500000000) {
    slime_coin_cap_1_cost = 1000000000000000;
  } // 1.00+E15
  else if (slime_coin_cap_1_level >= 100000000) {
    slime_coin_cap_1_cost = 100000000000000;
  } // 100T
  else if (slime_coin_cap_1_level >= 50000000) {
    slime_coin_cap_1_cost = 10000000000000;
  } // 10T
  else if (slime_coin_cap_1_level >= 10000000) {
    slime_coin_cap_1_cost = 1000000000000;
  } // 1T
  else {
    slime_coin_cap_1_cost =
      localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level") *
        10000 +
      10000;
  } // need to find solution for less than 10M upgrades

  document.getElementById(
    "slime-bank-upgrade-slime-coin-cap-1-cost"
  ).innerHTML = convert(slime_coin_cap_1_cost);
  let output = Math.round(intrest / slime_coin_cap_1_cost);
  document.getElementById("slime-bank-optimiser").innerHTML = output;
}

function slimeBankSlimeCoinCap1(input) {
  input = convert2(input);

  if (
    input != localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level")
  ) {
    let output = sigma(
      0,
      input,
      function (a) {
        return a * 20 - 10 + 10000;
      },
      10
    );
    document.getElementById(
      "slime-bank-upgrade-slime-coin-cap-1-value"
    ).innerHTML = convert(output);
    localStorage.setItem("slime-bank-upgrade-slime-coin-cap-1-level", input);
    localStorage.setItem("slime-bank-upgrade-slime-coin-cap-1-value", output);
  } else {
    document.getElementById(
      "slime-bank-upgrade-slime-coin-cap-1-value"
    ).innerHTML = convert(
      localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-value")
    );
  }
  document.getElementById("slime-bank-upgrade-slime-coin-cap-1-level").value =
    convert(localStorage.getItem("slime-bank-upgrade-slime-coin-cap-1-level"));
  slimeBankSlimeCoinCapTotal();
}

function slimeBankSlimeCoinCap2(input) {
  let output = sigma(
    0,
    input,
    function (a) {
      return a * 20 - 10;
    },
    10
  );
  localStorage.setItem("slime-bank-upgrade-slime-coin-cap-2-level", input);
  localStorage.setItem(
    "slime-bank-upgrade-slime-coin-cap-2-value",
    output + 100
  );
  document.getElementById(
    "slime-bank-upgrade-slime-coin-cap-2-value"
  ).innerHTML = convert(output + 100);
  document.getElementById("slime-bank-upgrade-slime-coin-cap-2-level").value =
    localStorage.getItem("slime-bank-upgrade-slime-coin-cap-2-level");
  slimeBankSlimeCoinCapTotal();
}

function slimeBankResearchStone(input) {
  localStorage.setItem("slime-bank-research-stone-level", input);
  document.getElementById("slime-bank-research-stone-level").value =
    localStorage.getItem("slime-bank-research-stone-level");
  document.getElementById("slime-bank-research-stone-value").innerHTML = +(
    input * 0.1
  ).toFixed(2);
  slimeBankIntrest();
}

function slimeBankResearchLeaf(input) {
  localStorage.setItem("slime-bank-research-leaf-level", input);
  document.getElementById("slime-bank-research-leaf-level").value =
    localStorage.getItem("slime-bank-research-leaf-level");
  document.getElementById("slime-bank-research-leaf-value").innerHTML =
    +(input * 2).toFixed(2) + 100;
  slimeBankSlimeCoinCapTotal();
}

export {
  slimeBankSlimeCoinCap1,
  slimeBankSlimeCoinCap2,
  slimeBankResearchStone,
  slimeBankResearchLeaf,
  slimeBankIntrest,
  slimeBankOptimiser,
  slimeBankSlimeCoinCapTotal,
};
