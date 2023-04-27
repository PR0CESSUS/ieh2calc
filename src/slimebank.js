import { convert, convert2 } from "./common.js";

class SlimeBankData {
  constructor() {
    this.version = 1;
    this.researchLeafLevel = 0;
    this.researchStoneLevel = 0;
    this.slimeCoinCap1Level = 0;
    this.slimeCoinCap2Level = 0;
    this.pet1Rank = 0;
    this.pet1Loyalty = 0;
    this.milestone1800 = false;
    this.milestone2700 = false;
  }
}

class SlimeBank {
  name = "slimeBank";
  data = new SlimeBankData();
  version = this.data.version;
  constructor() {
    const savedString = localStorage.getItem(this.name);
    if (savedString === null || savedString === "null") {
      this.save();
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));

      if (this.data.version < this.version) {
        switch (this.data.version) {
          case 1:
            // changes between versions
            this.data.version = this.version;
            this.save();
            document.location.reload();
            break;
          default:
            alert("missing version migration, use Hard Reset in Settings");
            break;
        }
      }
    }

    document
      .getElementById("slimeBank-calculator")
      .addEventListener("change", this.update.bind(this));

    this.display();
  }

  save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }
  update(event) {
    // figure out input text vs checkbox
    const target = event.target;
    const id = target.id;

    // console.log(target);
    if (target.type == "number" || target.type == "text") {
      this.data[id] = convert2(document.getElementById(id).value);
    }
    if (target.type == "checkbox") {
      this.data[id] = document.getElementById(id).checked;
    }

    this.save();
    this.display();

    // stone research
    // this.data.researchStoneLevel = document.getElementById("research.stone.level").value;
    // this.data.researchLeafLevel = document.getElementById("research.leaf.level").value;
    // this.data.slimeCoinCap1Level = convert2(document.getElementById("slimeCoinCap1.level").value);
    // this.data.slimeCoinCap2Level = document.getElementById("slimeCoinCap2.level").value;
    // this.data.pet1Rank = document.getElementById("pet1.rank").value;
    // this.data.pet1Loyalty = document.getElementById("pet1.loyalty").value;
  }

  display() {
    document.getElementById("researchStoneLevel").value = this.data.researchStoneLevel;
    document.getElementById("researchStoneValue").innerHTML = this.getResearchStoneValue();
    document.getElementById("researchLeafLevel").value = this.data.researchLeafLevel;
    document.getElementById("researchLeafValue").innerHTML = this.getResearchLeafValue();
    document.getElementById("slimeCoinCap2Level").value = this.data.slimeCoinCap2Level;
    document.getElementById("slimeCoinCap2Cost").innerHTML = convert(this.getSlimeCoinCap2Cost());
    document.getElementById("slimeCoinCap2Value").innerHTML = this.getSlimeCoinCap2Value();
    document.getElementById("slimeCoinCap1Level").value = convert(this.data.slimeCoinCap1Level);
    document.getElementById("slimeCoinCap1Value").innerHTML = convert(this.getSlimeCoinCap1Value());
    document.getElementById("slimeCoinCap1Cost").innerHTML = convert(this.getSlimeCoinCap1Cost());
    document.getElementById("slimeCoinIntrest").innerHTML = convert(this.getSlimeCoinIntrest());
    document.getElementById("slimeCoinCapTotal").innerHTML = convert(this.getSlimeCoinCapTotal());
    document.getElementById("slimeCoinCap1Multiplier").innerHTML = this.getMultiplier();
    document.getElementById("pet1Passive").innerHTML = this.getPet1Passive();
    document.getElementById("pet1Rank").value = this.data.pet1Rank;
    document.getElementById("pet1Loyalty").value = this.data.pet1Loyalty;
    document.getElementById("milestone1800").checked = this.data.milestone1800;
    document.getElementById("milestone2700").checked = this.data.milestone2700;
  }

  getSlimeCoinCapTotal() {
    let slimecap1value = this.getSlimeCoinCap1Value();
    let slimecap2value = this.getSlimeCoinCap2Value() / 100;
    let researchleafvalue = this.getResearchLeafValue() / 100;
    let pet1passive = this.getPet1Passive() / 100;
    let formula = slimecap1value * researchleafvalue * slimecap2value * pet1passive;

    return formula;
  }

  getMultiplier() {
    let intrest = this.getSlimeCoinIntrest();
    let cost = this.getSlimeCoinCap1Cost();
    let formula = Math.floor(intrest / cost);
    return formula - Math.floor(formula * 0.15);
  }

  getSlimeCoinIntrest() {
    let intrestPercent = this.data.researchStoneLevel * 0.001;

    if (this.data.milestone1800) {
      intrestPercent += 0.025;
    }
    if (this.data.milestone2700) {
      intrestPercent += 0.05;
    }
    return intrestPercent * this.getSlimeCoinCapTotal();
  }

  getSlimeCoinCap1Cost() {
    let level = this.data.slimeCoinCap1Level;
    // 500T
    if (level >= 500000000000000) {
      return 1.0e27;
    }
    if (level >= 100000000000000) {
      return 1.0e26;
    }
    if (level >= 50000000000000) {
      return 1.0e25;
    }
    if (level >= 10000000000000) {
      return 1.0e24;
    }
    if (level >= 5000000000000) {
      return 1.0e23;
    }
    if (level >= 1000000000000) {
      return 1.0e22;
    }
    if (level >= 500000000000) {
      return 1.0e21;
    }
    if (level >= 100000000000) {
      return 1.0e20;
    }
    if (level >= 50000000000) {
      return 1.0e19;
    }
    if (level >= 10000000000) {
      return 1.0e18;
    }
    if (level >= 5000000000) {
      return 1.0e17;
    }
    if (level >= 1000000000) {
      return 1.0e16;
    }
    if (level >= 500000000) {
      return 1.0e15;
    }
    if (level >= 100000000) {
      return 100000000000000;
    }
    if (level >= 50000000) {
      return 10000000000000;
    }
    if (level >= 10000000) {
      return 1000000000000;
    }

    return level * 10000 + 10000;
  }

  getResearchStoneValue() {
    return +(this.data.researchStoneLevel * 0.1).toFixed(2);
  }

  getResearchLeafValue() {
    return +(this.data.researchLeafLevel * 2).toFixed(2) + 100;
  }

  getSlimeCoinCap1Value() {
    let level = this.data.slimeCoinCap1Level;
    let formula = 10000.0 + 10000.0 * level + 10.0 * Math.pow(level, 2.0);
    return formula;
  }
  getSlimeCoinCap2Value() {
    let formula = Math.pow(this.data.slimeCoinCap2Level, 2.0) * 10 + 100;
    return formula;
  }

  getSlimeCoinCap2Cost() {
    let formula = 10000000000.0 * Math.pow(2.0, this.data.slimeCoinCap2Level);
    return formula;
  }

  getPet1Passive() {
    let loyalty = 2.5 * (parseFloat(this.data.pet1Loyalty) + 100) * 0.01;
    return parseFloat(this.data.pet1Rank * loyalty + 100).toFixed(2);
  }
}

export { SlimeBank, SlimeBankData };
