import { Optimizer } from "./optimizer.js";

class Gear {
  name = "gear";
  version = 1;
  data = {
    version: this.version,
    itemLevel: 120,
    includeMastery: true,
    curseAnvil: true,
    lottery: true,
    itemSlots: {
      Jewelry: 19,
      Armor: 19,
      Weapon: 19,
    },
    enchantSlots: 342,
    setBias: 0.075,
    enchantUsage: {
      UnicornKnowledge: "",
      HPAdder: "",
      MPAdder: "",
      ATKAdder: "",
      MATKAdder: "",
      DEFAdder: "",
      MDEFAdder: "",
      SPDAdder: "",
      HPMultiplier: "",
      MPMultiplier: "",
      ATKMultiplier: "dps",
      MATKMultiplier: "",
      DEFMultiplier: "",
      MDEFMultiplier: "",
      ATKPropotion: "dps",
      MATKPropotion: "",
      DEFPropotion: "",
      MDEFPropotion: "",
      FireResistance: "",
      IceResistance: "",
      ThunderResistance: "",
      LightResistance: "",
      DarkResistance: "",
      PhysicalAbsorption: "",
      FireAbsorption: "",
      IceAbsorption: "",
      ThunderAbsorption: "",
      LightAbsorption: "",
      DarkAbsorption: "",
      DebuffResistance: "",
      EquipmentDropChance: "",
      SlimeDropChance: "",
      MagicSlimeDropChance: "",
      SpiderDropChance: "",
      BatDropChance: "",
      FairyDropChance: "",
      FoxDropChance: "",
      DevilFishDropChance: "",
      TreantDropChance: "",
      FlameTigerDropChance: "",
      UnicornDropChance: "",
      ColorMaterialDropChance: "",
      PhysicalCritical: "dps",
      MagicalCritical: "",
      EXPGain: "gains",
      SkillProficiency: "gains",
      EquipmentProficiency: "gains",
      MoveSpeedMultiplier: "",
      GoldGain: "",
      StoneGain: "",
      CrystalGain: "",
      LeafGain: "",
      WarriorSkillLevel: "",
      WizardSkillLevel: "",
      AngelSkillLevel: "",
      ThiefSkillLevel: "",
      ArcherSkillLevel: "",
      TamerSkillLevel: "",
      AllSkillLevel: "",
      SlimeKnowledge: "",
      MagicSlimeKnowledge: "",
      SpiderKnowledge: "",
      BatKnowledge: "",
      FairyKnowledge: "",
      FoxKnowledge: "",
      DevilFishKnowledge: "",
      TreantKnowledge: "",
      FlameTigerKnowledge: "",
      PhysicalDamage: "",
      FireDamage: "",
      IceDamage: "dps",
      ThunderDamage: "",
      LightDamage: "",
      DarkDamage: "",
      HpRegen: "",
      MpRegen: "",
      TamingPoint: "",
      WarriorSkillRange: "",
      WizardSkillRange: "",
      AngelSkillRange: "",
      ThiefSkillRange: "",
      ArcherSkillRange: "",
      TamerSkillRange: "",
      TownMatGain: "gains",
      TownMatAreaClearGain: "",
      RebirthPointGain1: "gains",
      RebirthPointGain2: "gains",
      RebirthPointGain3: "gains",
      CriticalDamage: "dps",
      BlessingEffect: "dps",
      MoveSpeedAdder: "",
      PetEXPGain: "",
      LoyaltyPointGain: "",
      CatalystDoubleCriticalChance: "",
      WarriorSkillEffectRange: "",
      WizardSkillEffectRange: "",
      AngelSkillEffectRange: "",
      ThiefSkillEffectRange: "",
      ArcherSkillEffectRange: "",
      TamerSkillEffectRange: "",
      HpRegenMultiplier: "",
      MpRegenMultiplier: "",
      ArmoredFury: "",
      WardedFury: "dps",
      PetPhysicalCriticalChance: "",
      PetMagicalCriticalChance: "",
      PetCriticalDamage: "",
      PetDebuffResistance: "",
      StoneTownResearchPower: "",
      CrystalTownResearchPower: "",
      LeafTownResearchPower: "",
      GuildEXPGain: "gains",
      SPDMultiplier: "",
      CriticalDamageMultiplier: "dps",
      SkillProficiencyMultiplier: "gains",
      EquipmentProficiencyMultiplier: "gains",
      EXPGainMultiplier: "gains",
      GoldGainMultiplier: "",
      PhysicalDamageMultiplier: "",
      FireDamageMultiplier: "",
      IceDamageMultiplier: "dps",
      ThunderDamageMultiplier: "",
      LightDamageMultiplier: "",
      DarkDamageMultiplier: "",
      TamingPointMultiplier: "",
      PetEXPGainMultiplier: "",
      LoyaltyPointGainMultiplier: "",
      BlessingEffectMultiplier: "dps",
      PhysicalCriticalMultiplier: "dps",
      MagicalCriticalMultiplier: "",
    },
  };

  constructor() {
    if (localStorage.getItem(this.name) === null) {
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    if (this.data.version < this.version) {
      alert("missing version migration");
      //this.data.version = this.version;
    }

    this.render();
    this.updateDefaultValues();
  }

  save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }

  render() {
    const enchantUsageTemplate = (id, name) => {
      const nameShort = name
        .replace("Adder", "+")
        .replace("EffectMultiplier", "%")
        .replace("Multiplier", "%")
        .replace("TownResearchPower", "Research")
        .replace("Proficiency", "Prof")
        .replace("SkillLevel", "Skill")
        .replace("Resistance", "Res")
        .replace("DropChance", "Drop")
        .replace("Critical", "Crit")
        .replace("Damage", "Dmg")
        .replace("SkillEffectRange", "Aoe")
        .replace("SkillRange", "Range")
        .replace("Knowledge", "Dmg")
        .replace("PetPhysical", "PetPhys")
        .replace("PetMagical", "PetMag")
        .replace("CatalystDoubleCritChance", "CataDblCrit")
        .replace("CritChance", "Crit")
        .replace("TownMatAreaClearGain", "TownMat+")
        .replace("TownMatGain", "TownMat%")
        .replace("Absorption", "Absorp")
        .replace("ColorMaterial", "RareMat")
        .replace("RebirthPoint", "RB")
        .replace("LoyaltyPointGain", "LPG")
        .replace("TamingPoint", "TPG")
        .replace("Equipment", "EQ");

      return `<label title="${name}">${nameShort} <input id="enchantUsage.${id}" type="text" size="5"/></label>`;
    };
    let enchantUsageHTML = "";
    for (const id in this.data.enchantUsage) {
      enchantUsageHTML += enchantUsageTemplate(id, id);
    }
    document.querySelector("#enchantUsageInputWrapper").innerHTML =
      enchantUsageHTML;

    document
      .querySelector("#userInput")
      .addEventListener("change", this.inputChanged.bind(this));

    document
      .querySelector("#optimize")
      .addEventListener("click", this.optimize.bind(this));
  }

  inputChanged(event) {
    const target = event.target;
    const id = target.id;
    const idParts = id.split(".");

    switch (idParts[0]) {
      case "itemLevel":
        this.data.itemLevel = parseInt(target.value);
        break;
      case "includeMastery":
        this.data.includeMastery = target.checked;
        break;
      case "curseAnvil":
        this.data.curseAnvil = target.checked;
        break;
      case "lottery":
        this.data.lottery = target.checked;
        break;
      case "itemSlots":
        this.data.itemSlots[idParts[1]] = parseInt(target.value);
        break;
      case "enchantSlots":
        this.data.enchantSlots = parseInt(target.value);
        break;
      case "setBias":
        this.data.setBias = parseFloat(target.value);
        break;
      case "enchantUsage":
        this.data.enchantUsage[idParts[1]] = target.value;
        break;
      default:
        console.error("inputChanged for unknown id", id, arguments);
        break;
    }
  }

  updateDefaultValues() {
    document.querySelectorAll("input").forEach((input) => {
      const id = input.id;
      const idParts = id.split(".");
      switch (idParts[0]) {
        case "itemLevel":
          input.value = this.data.itemLevel;
          break;
        case "includeMastery":
          input.checked = this.data.includeMastery;
          break;
        case "curseAnvil":
          input.checked = this.data.curseAnvil;
          break;
        case "lottery":
          input.checked = this.data.lottery;
          break;
        case "itemSlots":
          input.value = this.data.itemSlots[idParts[1]];
          break;
        case "enchantSlots":
          input.value = this.data.enchantSlots;
          break;
        case "setBias":
          input.value = this.data.setBias;
          break;
        case "enchantUsage":
          input.value = this.data.enchantUsage[idParts[1]];
          break;
        default:
          console.error("updateHTMLValues for unknown id", id, arguments);
          break;
      }
    });
  }

  toggleOptimizeButton(enable) {
    const button = document.querySelector("#optimize");
    if (enable) {
      button.disabled = false;
      button.classList.remove("button-grey");
      button.classList.add("button-orange");
    } else {
      button.disabled = true;
      button.classList.remove("button-orange");
      button.classList.add("button-grey");
    }
  }

  renderOptimizerResult(optimizer) {
    let html = "";
    let highestIndex = Math.max(
      optimizer.bestItems.Weapon.length,
      optimizer.bestItems.Armor.length,
      optimizer.bestItems.Jewelry.length
    );
    let item;
    for (let bestItemIndex = 0; bestItemIndex < highestIndex; bestItemIndex++) {
      item = optimizer.bestItems.Weapon[bestItemIndex];
      html += `<div class="third">
        ${item ? item.kind : "-"}
      </div>`;

      item = optimizer.bestItems.Armor[bestItemIndex];
      html += `<div class="third">
        ${item ? item.kind : "-"}
      </div>`;

      item = optimizer.bestItems.Jewelry[bestItemIndex];
      html += `<div class="third">
        ${item ? item.kind : "-"}
      </div>`;
    }
    document.getElementById("optimizeResultItems").innerHTML = html;

    html = "";
    for (const effectKind in optimizer.bestEnchants) {
      if (optimizer.bestEnchants[effectKind] > 0) {
        html += `<div class="halve">
          ${effectKind}: ${optimizer.bestEnchants[effectKind]}
        </div>`;
      }
    }
    document.getElementById("optimizeResultEnchants").innerHTML = html;

    html = "";
    for (const setKind in optimizer.setItems) {
      if (optimizer.setItems[setKind].activeSetItems > 0) {
        html += `<div class="halve">
          ${setKind}: ${optimizer.setItems[setKind].activeSetItems}
        </div>`;
      }
    }
    document.getElementById("optimizeResultSetItems").innerHTML = html;

    this.renderOptimizerResultEnchtantSpread(optimizer);
  }

  colors = [
    "#3366CC",
    "#DC3912",
    "#FF9900",
    "#109618",
    "#990099",
    "#3B3EAC",
    "#0099C6",
    "#DD4477",
    "#66AA00",
    "#B82E2E",
    "#316395",
    "#994499",
    "#22AA99",
    "#AAAA11",
    "#6633CC",
    "#E67300",
    "#8B0707",
    "#329262",
    "#5574A6",
    "#3B3EAC",
    "#FF00FF",
    "#FF6600",
    "#C71585",
    "#007BA7",
    "#FF7F50",
    "#DC143C",
    "#00FF7F",
    "#C0C0C0",
    "#008080",
    "#8B008B",
    "#B0171F",
    "#696969",
    "#483D8B",
    "#008000",
    "#A0522D",
    "#FFC0CB",
    "#ADD8E6",
    "#87CEFA",
    "#DA70D6",
    "#F08080",
    "#E0FFFF",
    "#FA8072",
    "#FFE4E1",
    "#BA55D3",
    "#FFEBCD",
    "#7FFFD4",
    "#F0E68C",
    "#D2B48C",
    "#AFEEEE",
    "#FF6347",
    "#FFEFD5",
    "#6B8E23",
    "#CD5C5C",
    "#F4A460",
    "#D8BFD8",
    "#9932CC",
    "#FF8C00",
    "#9932CC",
    "#FFD700",
    "#B0C4DE",
    "#40E0D0",
    "#FFB6C1",
    "#00CED1",
    "#BA55D3",
    "#7B68EE",
    "#E6E6FA",
    "#8FBC8F",
    "#00FA9A",
    "#191970",
    "#F5DEB3",
  ];

  optimizeResultTotalEseBarChart = null;
  renderOptimizerResultEnchtantSpread(optimizer) {
    if (this.optimizeResultTotalEseBarChart) {
      this.optimizeResultTotalEseBarChart.destroy();
    }

    let labels = [];
    let effectKindToDataIndex = {};
    let dataSets = {
      enchants: {
        label: "Enchants",
        data: [],
        backgroundColor: "red",
      },
    };
    for (let effectKind in optimizer.totalEseWithEnchants) {
      if (!optimizer.enchantUsage[effectKind]) {
        continue;
      }

      let dataIndex = labels.length;
      effectKindToDataIndex[effectKind] = dataIndex;

      labels[dataIndex] = effectKind;

      dataSets.enchants.data[dataIndex] = optimizer.bestEnchants[effectKind];
    }
    let colorIndex = 0;
    for (let part in optimizer.bestItems) {
      for (let item of optimizer.bestItems[part]) {
        if (typeof dataSets[item.kind] === "undefined") {
          dataSets[item.kind] = {
            label: item.kind,
            data: [],
            backgroundColor: this.colors[colorIndex],
          };

          colorIndex = (colorIndex + 1) % this.colors.length;
        }

        for (let effectKind in optimizer.totalEseWithEnchants) {
          if (typeof effectKindToDataIndex[effectKind] === "undefined") {
            continue;
          }

          let dataIndex = effectKindToDataIndex[effectKind];
          if (typeof dataSets[item.kind].data[dataIndex] === "undefined") {
            dataSets[item.kind].data[dataIndex] = 0;
          }
          if (typeof item.relEffects[effectKind] === "number") {
            dataSets[item.kind].data[dataIndex] +=
              item.relEffects[effectKind] * item.setEffectMult;
          }
        }
      }
    }

    let dataSetsArray = [];
    for (let dataSet in dataSets) {
      dataSetsArray.push(dataSets[dataSet]);
    }

    this.optimizeResultTotalEseBarChart = new Chart(
      document.getElementById("optimizeResultTotalEseBarChart"),
      {
        type: "bar",
        data: {
          labels: labels,
          datasets: dataSetsArray,
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Enchant Spread",
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      }
    );
  }

  renderOptimizerResultDataDump(optimizer) {
    let html =
      "<h2>Results</h2><p>click on the headers to collapse the section</p>";

    html += `<h3>items</h3><pre>${JSON.stringify(
      JSON.parse(JSON.stringify(optimizer.items)),
      (key, value) => {
        delete value.effects;
        delete value.levelMaxEffects;
        return value;
      },
      2
    )}</pre>`;

    html += `<h3>totalEse</h3><pre>${JSON.stringify(
      optimizer.totalEse,
      null,
      2
    )}</pre>`;
    html += `<h3>totalEseWithEnchants</h3><pre>${JSON.stringify(
      optimizer.totalEseWithEnchants,
      null,
      2
    )}</pre>`;
    html += `<h3>totalEseWithEnchants</h3><pre>${JSON.stringify(
      optimizer.totalEse,
      null,
      2
    )}</pre>`;

    html += `<h3>bestEnchants</h3><pre>${JSON.stringify(
      optimizer.bestEnchants,
      null,
      2
    )}</pre>`;

    html += `<h3>bestItems</h3><pre>${JSON.stringify(
      JSON.parse(JSON.stringify(optimizer.bestItems)),
      (key, value) => {
        delete value.effects;
        delete value.levelMaxEffects;
        delete value.relEffects;
        delete value.ese;
        delete value.part;
        delete value.setEffectMult;
        return value;
      },
      2
    )}</pre>`;

    html += `<h3>setItems</h3><pre>${JSON.stringify(
      optimizer.setItems,
      null,
      2
    )}</pre>`;

    html += `<h3>total</h3><pre>${JSON.stringify(
      optimizer.getTotalEnchantsValue(optimizer.totalEseWithEnchants),
      null,
      2
    )}</pre>`;

    //TODO breakdown totalEseWithEnchants by sources
    document.querySelector("#optimizeResultDataDump").innerHTML = html;

    document
      .querySelectorAll("#optimizeResultDataDump > h3")
      .forEach((header) => {
        header.addEventListener("click", (event) => {
          const target = event.target;
          const nextSibling = target.nextElementSibling;

          if (nextSibling.style.display === "none") {
            nextSibling.style.display = "block";
          } else {
            nextSibling.style.display = "none";
          }
        });
      });
  }

  optimize() {
    this.toggleOptimizeButton(false);

    this.save();

    const optimizer = new Optimizer(this.data);
    optimizer.optimize();

    this.renderOptimizerResult(optimizer);
    this.renderOptimizerResultDataDump(optimizer);

    this.toggleOptimizeButton(true);
  }
}

export { Gear };
