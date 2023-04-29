import {
  changedEnchantFilter,
  changedItemSettings,
  clearAll,
  findBestItem,
  getItemKindInSlot,
  initGearset,
  isEmptyItemKind,
  isEmptySlot,
  maxItemSlotsByPart,
  optimizeAll,
  optimizeNextItem,
  setItemAtIndex,
} from "./optimizer";
import {
  DamageElement,
  DamageType,
  GearSet,
  ItemKind,
  Part,
  SaveData,
  parts,
} from "./types";

class Gear {
  name = "gear";
  version = 2;
  data: SaveData = {
    version: this.version,

    selectedLoadout: 0,
    gearSets: [],
  };

  dom = {
    loadoutSelect: document.getElementById("loadoutSelect") as HTMLElement,

    optimizeAllButton: document.getElementById(
      "optimizeAllButton"
    ) as HTMLButtonElement,
    optimizeNextButton: document.getElementById(
      "optimizeNextButton"
    ) as HTMLButtonElement,
    optimizeClearButton: document.getElementById(
      "optimizeClearButton"
    ) as HTMLButtonElement,
    optimizeSortButton: document.getElementById(
      "optimizeSortButton"
    ) as HTMLButtonElement,

    dpsSettingsType: document.getElementById(
      "dpsSettingsType"
    ) as HTMLSelectElement,
    dpsSettingsElement: document.getElementById(
      "dpsSettingsElement"
    ) as HTMLSelectElement,
    dpsSettingsBaseDamage: document.getElementById(
      "dpsSettingsBaseDamage"
    ) as HTMLInputElement,
    dpsSettingsCritCurse: document.getElementById(
      "dpsSettingsCritCurse"
    ) as HTMLInputElement,
    dpsSettingsPet: document.getElementById(
      "dpsSettingsPet"
    ) as HTMLInputElement,
    dpsSettingsWeight: document.getElementById(
      "dpsSettingsWeight"
    ) as HTMLInputElement,

    gainsSettingsEXP: document.getElementById(
      "gainsSettingsEXP"
    ) as HTMLInputElement,
    gainsSettingsGEXP: document.getElementById(
      "gainsSettingsGEXP"
    ) as HTMLInputElement,
    gainsSettingsRB1: document.getElementById(
      "gainsSettingsRB1"
    ) as HTMLInputElement,
    gainsSettingsRB2: document.getElementById(
      "gainsSettingsRB2"
    ) as HTMLInputElement,
    gainsSettingsRB3: document.getElementById(
      "gainsSettingsRB3"
    ) as HTMLInputElement,
    gainsSettingsSkillProf: document.getElementById(
      "gainsSettingsSkillProf"
    ) as HTMLInputElement,
    gainsSettingsEQProf: document.getElementById(
      "gainsSettingsEQProf"
    ) as HTMLInputElement,
    gainsSettingsTownMat: document.getElementById(
      "gainsSettingsTownMat"
    ) as HTMLInputElement,
    gainsSettingsGold: document.getElementById(
      "gainsSettingsGold"
    ) as HTMLInputElement,
    gainsSettingsResource: document.getElementById(
      "gainsSettingsResource"
    ) as HTMLInputElement,
    gainsSettingsPetEXP: document.getElementById(
      "gainsSettingsPetEXP"
    ) as HTMLInputElement,
    gainsSettingsLPG: document.getElementById(
      "gainsSettingsLPG"
    ) as HTMLInputElement,
    gainsSettingsTPG: document.getElementById(
      "gainsSettingsTPG"
    ) as HTMLInputElement,
    gainsSettingsDropRace: document.getElementById(
      "gainsSettingsDropRace"
    ) as HTMLInputElement,

    itemSettingsItemLevel: document.getElementById(
      "itemSettingsItemLevel"
    ) as HTMLInputElement,

    gearSetContainer: document.getElementById(
      "gearSetContainer"
    ) as HTMLDivElement,
    itemsWeapon: document.getElementById("itemsWeapon") as HTMLDivElement,
    itemsArmor: document.getElementById("itemsArmor") as HTMLDivElement,
    itemsJewelry: document.getElementById("itemsJewelry") as HTMLDivElement,

    itemsAutocompleteWeapon: document.getElementById(
      "itemsAutocompleteWeapon"
    ) as HTMLDataListElement,
    itemsAutocompleteArmor: document.getElementById(
      "itemsAutocompleteArmor"
    ) as HTMLDataListElement,
    itemsAutocompleteJewelry: document.getElementById(
      "itemsAutocompleteJewelry"
    ) as HTMLDataListElement,

    optimizeResultTotalEseBarChart: document.getElementById(
      "optimizeResultTotalEseBarChart"
    ) as HTMLCanvasElement,

    itemTemplate: document.getElementById("itemTemplate"),
  };

  constructor() {
    const savedString = localStorage.getItem(this.name);
    if (savedString === null || savedString === "null") {
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    if (this.data.version < this.version) {
      switch (this.data.version) {
        case 1:
          this.data.version = this.version;
          this.data = null;
          this.save();
          document.location.reload();
          break;
        default:
          alert("missing version migration");
          break;
      }
    }

    this.activateLoadout(this.data.selectedLoadout);

    this.initLoadoutHtml();
    this.initDpsSettingsHtml();
    this.initGainsWeightsHtml();
    this.initItemSettingsHtml();
    this.initOptimizationHtml();
    this.initGearSetHtml();
    this.updateItemRatingChart();
  }

  initLoadoutHtml() {
    //bind to ctrl + 1-9
    document.addEventListener("keydown", (event) => {
      if (event.altKey) {
        const index = parseInt(event.key) - 1;
        if (index >= 0 && index < 9) {
          this.activateLoadout(index);

          this.updateDpsSettingsHtml();
          this.updateGearsetHtml();
          this.updateItemRatingChart();
        }
      }
    });
    this.dom.loadoutSelect.addEventListener(
      "click",
      (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains("loadoutSelectButton")) {
          const index = parseInt(target.getAttribute("data-index"));
          this.activateLoadout(index);

          this.updateDpsSettingsHtml();
          this.updateGearsetHtml();
          this.updateItemRatingChart();
        }
      },
      true
    );
  }
  initDpsSettingsHtml() {
    this.dom.dpsSettingsType.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = target.value as DamageType;
      gearSet.config.dps.type = value;
      this.dpsSettingsUpdate();
    });

    this.dom.dpsSettingsElement.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = target.value as DamageElement;
      gearSet.config.dps.element = value;
      this.dpsSettingsUpdate();
    });

    this.dom.dpsSettingsBaseDamage.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.dps.baseDamage = value;
      this.dpsSettingsUpdate();
    });

    this.dom.dpsSettingsCritCurse.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.dps.critCurse = value;
      this.dpsSettingsUpdate();
    });

    this.dom.dpsSettingsPet.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = target.checked;
      gearSet.config.dps.pet = value;
      this.dpsSettingsUpdate();
    });

    this.dom.dpsSettingsWeight.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.dps.weight = value;
      this.dpsSettingsUpdate();
    });

    this.updateDpsSettingsHtml();
  }
  updateDpsSettingsHtml() {
    const gearSet = this.getCurrentGearset();

    this.dom.dpsSettingsType.value = gearSet.config.dps.type;
    this.dom.dpsSettingsElement.value = gearSet.config.dps.element;
    this.dom.dpsSettingsBaseDamage.value =
      gearSet.config.dps.baseDamage.toString();
    this.dom.dpsSettingsCritCurse.value =
      gearSet.config.dps.critCurse.toString();
    this.dom.dpsSettingsPet.checked = gearSet.config.dps.pet;
    this.dom.dpsSettingsWeight.value = gearSet.config.dps.weight.toString();
  }
  dpsSettingsUpdatedTimeout: string | number | NodeJS.Timeout;
  dpsSettingsUpdate = () => {
    clearTimeout(this.dpsSettingsUpdatedTimeout);
    this.dpsSettingsUpdatedTimeout = setTimeout(() => {
      this.dpsSettingsUpdateThrottled();
    }, 300);
  };
  dpsSettingsUpdateThrottled = () => {
    const gearSet = this.getCurrentGearset();

    changedEnchantFilter(gearSet);
  };

  initGainsWeightsHtml() {
    this.dom.gainsSettingsEXP.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.exp = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsGEXP.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.gexp = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsRB1.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.rb1 = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsRB2.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.rb2 = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsRB3.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.rb3 = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsSkillProf.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.skillProf = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsEQProf.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.eqProf = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsTownMat.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.townMat = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsGold.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.gold = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsResource.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.resource = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsPetEXP.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.petExp = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsLPG.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.lpg = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsTPG.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.tpg = value;
      this.gainsSettingsUpdate();
    });
    this.dom.gainsSettingsDropRace.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      gearSet.config.gains.dropRace = value;
      this.gainsSettingsUpdate();
    });

    this.updateGainsSettingsHtml();
  }
  updateGainsSettingsHtml() {
    const gearSet = this.getCurrentGearset();

    this.dom.gainsSettingsEXP.value = gearSet.config.gains.exp.toString();
    this.dom.gainsSettingsGEXP.value = gearSet.config.gains.gexp.toString();
    this.dom.gainsSettingsRB1.value = gearSet.config.gains.rb1.toString();
    this.dom.gainsSettingsRB2.value = gearSet.config.gains.rb2.toString();
    this.dom.gainsSettingsRB3.value = gearSet.config.gains.rb3.toString();
    this.dom.gainsSettingsSkillProf.value =
      gearSet.config.gains.skillProf.toString();
    this.dom.gainsSettingsEQProf.value = gearSet.config.gains.eqProf.toString();
    this.dom.gainsSettingsTownMat.value =
      gearSet.config.gains.townMat.toString();
    this.dom.gainsSettingsGold.value = gearSet.config.gains.gold.toString();
    this.dom.gainsSettingsResource.value =
      gearSet.config.gains.resource.toString();
    this.dom.gainsSettingsPetEXP.value = gearSet.config.gains.petExp.toString();
    this.dom.gainsSettingsLPG.value = gearSet.config.gains.lpg.toString();
    this.dom.gainsSettingsTPG.value = gearSet.config.gains.tpg.toString();
    this.dom.gainsSettingsDropRace.value =
      gearSet.config.gains.dropRace.toString();
  }
  gainsSettingsUpdatedTimeout: string | number | NodeJS.Timeout;
  gainsSettingsUpdate = () => {
    clearTimeout(this.gainsSettingsUpdatedTimeout);
    this.gainsSettingsUpdatedTimeout = setTimeout(() => {
      this.gainsSettingsUpdateThrottled();
    }, 300);
  };
  gainsSettingsUpdateThrottled = () => {
    const gearSet = this.getCurrentGearset();

    changedEnchantFilter(gearSet);
  };

  initItemSettingsHtml() {
    this.dom.itemSettingsItemLevel.addEventListener("change", (event) => {
      const gearSet = this.getCurrentGearset();
      const target = event.target as HTMLInputElement;
      const value = parseInt(target.value);
      gearSet.config.item.itemLevel = value;

      this.itemSettingsChanged();
    });

    this.updateItemSettingsHtml();
  }
  updateItemSettingsHtml() {
    const gearSet = this.getCurrentGearset();

    this.dom.itemSettingsItemLevel.value =
      gearSet.config.item.itemLevel.toString();
  }
  itemSettingsChangedTimeout: string | number | NodeJS.Timeout;
  itemSettingsChanged = () => {
    clearTimeout(this.itemSettingsChangedTimeout);
    this.itemSettingsChangedTimeout = setTimeout(() => {
      this.itemSettingsChangedThrottled();
    }, 300);
  };
  itemSettingsChangedThrottled = () => {
    const gearSet = this.getCurrentGearset();

    changedItemSettings(gearSet);
  };
  initOptimizationHtml() {
    this.dom.optimizeAllButton.addEventListener("click", () => {
      const gearSet = this.getCurrentGearset();
      optimizeAll(gearSet);
    });
    this.dom.optimizeNextButton.addEventListener("click", () => {
      const gearSet = this.getCurrentGearset();
      optimizeNextItem(gearSet);
    });
    this.dom.optimizeClearButton.addEventListener("click", () => {
      const gearSet = this.getCurrentGearset();
      clearAll(gearSet);
    });
    this.dom.optimizeSortButton.addEventListener("click", () => {
      const gearSet = this.getCurrentGearset();
      for (const part of parts) {
        gearSet.equippedItems[part].sort((a, b) => {
          let ratingA = 0;
          if (a && a !== "Nothing") {
            const itemA = gearSet.itemsMap.get(a);
            ratingA = itemA.kindNumeric;
          }

          let ratingB = 0;
          if (b && b !== "Nothing") {
            const itemB = gearSet.itemsMap.get(b);
            ratingB = itemB.kindNumeric;
          }

          return ratingB - ratingA;
        });
      }
      this.updateGearsetHtml();
    });
  }

  initGearSetHtml() {
    const gearSet = this.getCurrentGearset();

    let html;

    const itemTemplate = (part: Part, index, itemName: string) => {
      return this.dom.itemTemplate.innerHTML
        .replace(/{{part}}/g, part)
        .replace(/{{index}}/g, index)
        .replace(/{{number}}/g, index + 1)
        .replace(/{{itemName}}/g, itemName);
    };

    html = "";

    for (const part of parts) {
      const maxItemSlots = maxItemSlotsByPart[part];
      html = "";
      for (let i = 0; i < maxItemSlots; i++) {
        let itemKind = getItemKindInSlot(gearSet, part, i);
        html += itemTemplate(
          part,
          i,
          isEmptyItemKind(itemKind) ? "" : itemKind
        );
      }
      this.dom[`items${part}`].innerHTML = html;
    }

    const updatePartAutocomplete = (part: Part) => {
      const gearSet = this.getCurrentGearset();

      const autoCompleteOptions = this.dom[
        `itemsAutocomplete${part}`
      ] as Element;

      autoCompleteOptions.innerHTML = "";
      for (const item of gearSet.items) {
        if (item.part !== part) {
          continue;
        }
        var option = document.createElement("option");
        option.value = item.kind;
        autoCompleteOptions.appendChild(option);
      }
    };
    this.dom.gearSetContainer.addEventListener(
      "focus",
      (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains("optimizeItemInput")) {
          const part = target.getAttribute("data-part") as Part;

          //console.log("focus", target);
          updatePartAutocomplete(part);
        }
      },
      true
    );
    const setItemOnGearset = (
      part: Part,
      slotIndex: number,
      choosenName: string
    ) => {
      const gearSet = this.getCurrentGearset();

      if (!choosenName || choosenName === "Nothing") {
        setItemAtIndex(gearSet, "Nothing", part, slotIndex);
        return true;
      }

      if (gearSet.itemsMap.has(choosenName as ItemKind)) {
        const item = gearSet.itemsMap.get(choosenName as ItemKind);
        if (item.part !== part) {
          return false;
        }

        setItemAtIndex(gearSet, item.kind, item.part, slotIndex);
        return true;
      }

      return false;
    };
    this.dom.gearSetContainer.addEventListener(
      "input",
      (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains("optimizeItemInput")) {
          const part = target.getAttribute("data-part") as Part;
          const index = parseInt(target.getAttribute("data-index"));

          //console.log("input", target);
          setItemOnGearset(part, index, target.value);
        }
      },
      true
    );
    this.dom.gearSetContainer.addEventListener(
      "blur",
      (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains("optimizeItemInput")) {
          const part = target.getAttribute("data-part") as Part;
          const index = parseInt(target.getAttribute("data-index"));

          //console.log("blur", target);
          if (!setItemOnGearset(part, index, target.value)) {
            target.value = "";
            setItemOnGearset(part, index, target.value);
          }
        }
      },
      true
    );
    this.dom.gearSetContainer.addEventListener(
      "keyup",
      (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains("optimizeItemInput")) {
          if (event.key === "Enter" || event.keyCode === 13) {
            const part = target.getAttribute("data-part") as Part;
            const index = parseInt(target.getAttribute("data-index"));

            //console.log("keyup/enter", target);
            if (!setItemOnGearset(part, index, target.value)) {
              target.value = "";
              setItemOnGearset(part, index, target.value);
            }
          }
        }
      },
      true
    );
    //click auto button
    this.dom.gearSetContainer.addEventListener(
      "click",
      (event) => {
        let target = event.target as HTMLInputElement;
        if (target.classList.contains("optimizeItemButton")) {
          while (
            !target.classList ||
            !target.classList.contains("optimizeItemInput")
          ) {
            if (!target.previousSibling) {
              return;
            }
            target = target.previousSibling as HTMLInputElement;
          }
          const part = target.getAttribute("data-part") as Part;
          const index = parseInt(target.getAttribute("data-index"));

          setItemOnGearset(part, index, "Nothing");
          const bestItem = findBestItem(this.getCurrentGearset(), part);
          setItemOnGearset(part, index, bestItem.kind);
        }
      },
      true
    );
  }
  updateGearsetHtml = () => {
    const gearSet = this.getCurrentGearset();
    for (const part of parts) {
      for (
        let slotIndex = 0;
        slotIndex < maxItemSlotsByPart[part];
        slotIndex++
      ) {
        const itemInput = document.querySelector(
          `.optimizeItemInput[data-part='${part}'][data-index='${slotIndex}']`
        ) as HTMLInputElement;

        if (isEmptySlot(gearSet, part, slotIndex)) {
          itemInput.value = "";
        } else {
          const itemKind = gearSet.equippedItems[part][slotIndex];
          itemInput.value = itemKind;
        }
      }
    }
  };

  itemRatingUpdatedTimeout = null;
  itemRatingUpdated = () => {
    if (this.itemRatingUpdatedTimeout) {
      clearTimeout(this.itemRatingUpdatedTimeout);
    }
    this.itemRatingUpdatedTimeout = setTimeout(
      this.itemRatingUpdatedThrottled,
      25
    );
  };
  itemRatingUpdatedThrottled = () => {
    this.updateGearsetHtml();
    this.updateItemRatingChart();

    this.save();
  };

  itemRatingChart = null;
  updateItemRatingChart() {
    const gearSet = this.getCurrentGearset();

    let labels = [];
    let effectKindToDataIndex = {};
    let dataSets = {
      enchants: {
        label: "Enchants",
        data: [],
        backgroundColor: "red",
      },
    };
    const enchantsSortedByUsage = [...gearSet.enchants].sort((a, b) => {
      if (a.usage > b.usage) {
        return -1;
      }
      if (a.usage < b.usage) {
        return 1;
      }
      if (a.kind < b.kind) {
        return -1;
      }
      if (a.kind > b.kind) {
        return 1;
      }
      return 0;
    });
    for (let enchant of enchantsSortedByUsage) {
      let dataIndex = labels.length;
      effectKindToDataIndex[enchant.kind] = dataIndex;

      labels[dataIndex] = enchant.kind;

      dataSets.enchants.data[dataIndex] = gearSet.equippedEnchants.reduce(
        (acc, equippedEnchantKind) => {
          if (equippedEnchantKind === enchant.kind) {
            acc++;
          }
          return acc;
        },
        0
      );
    }

    const equippedItemsSortedByKindNumeric = [
      ...gearSet.equippedItems.Weapon,
      ...gearSet.equippedItems.Armor,
      ...gearSet.equippedItems.Jewelry,
    ].sort((a, b) => {
      let ratingA = 0;
      if (a && a !== "Nothing") {
        const itemA = gearSet.itemsMap.get(a);
        //ratingA = itemA.rating.total;
        ratingA = itemA.kindNumeric;
      }

      let ratingB = 0;
      if (b && b !== "Nothing") {
        const itemB = gearSet.itemsMap.get(b);
        //ratingB = itemB.rating.total;
        ratingB = itemB.kindNumeric;
      }

      return ratingB - ratingA;
    });
    for (let itemKind of equippedItemsSortedByKindNumeric) {
      if (itemKind === "Nothing") {
        continue;
      }

      const item = gearSet.itemsMap.get(itemKind);
      const setEffectMult = gearSet.itemSets[item.setKind].activeMultiplier;

      function generateColorFromString(str: string): string {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        const h = hash % 360;
        const s = 50 + Math.abs(Math.sin(hash)) * 50;
        const l = 50 + Math.abs(Math.cos(hash)) * 20;

        const color = `hsl(${h}, ${s}%, ${l}%)`;

        return color;
      }

      if (typeof dataSets[itemKind] === "undefined") {
        dataSets[itemKind] = {
          label: itemKind,
          data: [],
          backgroundColor: generateColorFromString(itemKind),
        };
      }

      for (let effectKind in gearSet.ese) {
        if (typeof effectKindToDataIndex[effectKind] === "undefined") {
          continue;
        }

        let dataIndex = effectKindToDataIndex[effectKind];
        if (typeof dataSets[item.kind].data[dataIndex] === "undefined") {
          dataSets[item.kind].data[dataIndex] = 0;
        }
        if (typeof item.ese[effectKind] === "number") {
          dataSets[item.kind].data[dataIndex] +=
            item.ese[effectKind] * setEffectMult;
        }
      }
    }

    let dataSetsArray = [];
    for (let dataSet in dataSets) {
      dataSetsArray.push(dataSets[dataSet]);
    }

    if (this.itemRatingChart) {
      this.itemRatingChart.data.labels = labels;
      this.itemRatingChart.data.datasets = dataSetsArray;

      this.itemRatingChart.update("none");
    } else {
      //@ts-ignore
      this.itemRatingChart = new Chart(
        this.dom.optimizeResultTotalEseBarChart,
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
  }

  save() {
    let dataToSave = JSON.parse(JSON.stringify(this.data));

    for (const gearSet of dataToSave.gearSets) {
      for (const key in gearSet) {
        //only save sets, effects, rating, items, enchants from GearSet
        switch (key) {
          case "equippedItems":
          case "equippedEnchants":
          case "config":
            break;
          default:
            delete gearSet[key];
            break;
        }
      }
    }

    localStorage.setItem(this.name, JSON.stringify(dataToSave));
  }

  getCurrentGearset(): GearSet {
    return this.data.gearSets[this.data.selectedLoadout];
  }
  activateLoadout(loadout: number) {
    //disable previous
    const gearSetPrevious = this.getCurrentGearset();
    if (gearSetPrevious && gearSetPrevious.events) {
      gearSetPrevious.events.off("itemRatingUpdated", this.itemRatingUpdated);
    }

    this.data.selectedLoadout = loadout;

    const loadoutSelectButtons = document.querySelectorAll<HTMLElement>(
      ".loadoutSelectButton"
    );
    for (const loadoutSelectButton of loadoutSelectButtons) {
      loadoutSelectButton.classList.remove("active");
      if (
        parseInt(loadoutSelectButton.getAttribute("data-index")) === loadout
      ) {
        loadoutSelectButton.classList.add("active");
      }
    }

    let gearSet = this.data.gearSets[loadout];
    if (typeof gearSet === "undefined" || !gearSet) {
      gearSet = {
        equippedItems: {
          Weapon: [],
          Armor: [],
          Jewelry: [],
        },
        equippedEnchants: [],
      } as GearSet;
    }

    if (typeof gearSet.config === "undefined" || !gearSet.config) {
      gearSet.config = {
        dps: {
          type: "ATK",
          element: "Ice",
          baseDamage: 1,
          critCurse: 0,
          pet: false,
          weight: 1,
        },
        gains: {
          exp: 1,
          gexp: 1,
          rb1: 1,
          rb2: 1,
          rb3: 1,
          skillProf: 1,
          eqProf: 1,
          townMat: 1,
          gold: 0,
          resource: 0,
          petExp: 0,
          lpg: 0,
          tpg: 0,
          dropRace: 0,
        },
        item: {
          itemLevel: 120,
          includeMastery: true,
          curseAnvil: true,
          lottery: true,
          setBias: 0.075,
          slots: {
            ...maxItemSlotsByPart,
          },
        },
      };
    }
    initGearset(gearSet);

    this.data.gearSets[loadout] = gearSet;

    gearSet.events.on("itemRatingUpdated", this.itemRatingUpdated);
  }
}

export { Gear };
