import colors from "./colors";
import { setItemAtIndex, initGearset, findBestItem } from "./optimizer";
import { SaveData, Part, GearSet, Item, ItemKind } from "./types";

class Gear {
  name = "gear";
  version = 2;
  data: SaveData = {
    version: this.version,

    selectedLoadout: 0,
    gearsets: [],

    optimizerConfig: {
      dps: {},
      gains: {},
      item: {
        itemLevel: 120,
        includeMastery: true,
        curseAnvil: true,
        lottery: true,
        setBias: 0.075,
        slots: {
          Jewelry: 19,
          Armor: 19,
          Weapon: 19,
        },
      },
    },
  };

  dom = {
    gearSetContainer: document.getElementById("gearSetContainer"),
    itemsWeapons: document.getElementById("itemsWeapons"),
    itemsArmor: document.getElementById("itemsArmor"),
    itemsJewelry: document.getElementById("itemsJewelry"),

    itemsAutocompleteWeapon: document.getElementById("itemsAutocompleteWeapon"),
    itemsAutocompleteArmor: document.getElementById("itemsAutocompleteArmor"),
    itemsAutocompleteJewelry: document.getElementById(
      "itemsAutocompleteJewelry"
    ),

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

    this.renderGearSet();

    this.activateLoadout(this.data.selectedLoadout);
  }

  renderGearSet() {
    let html;

    html = "";
    for (let i = 0; i < 19; i++) {
      html += this.itemTemplate("Weapon", i);
    }
    this.dom.itemsWeapons.innerHTML = html;

    html = "";
    for (let i = 0; i < 19; i++) {
      html += this.itemTemplate("Armor", i);
    }
    this.dom.itemsArmor.innerHTML = html;

    html = "";
    for (let i = 0; i < 19; i++) {
      html += this.itemTemplate("Jewelry", i);
    }
    this.dom.itemsJewelry.innerHTML = html;

    const updatePartAutocomplete = (part: Part) => {
      const gearset = this.data.gearsets[this.data.selectedLoadout];

      const autoCompleteOptions = this.dom[
        `itemsAutocomplete${part}`
      ] as Element;

      autoCompleteOptions.innerHTML = "";
      for (const item of gearset.items) {
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
      const gearset = this.data.gearsets[this.data.selectedLoadout];

      if (!choosenName || choosenName === "Nothing") {
        setItemAtIndex(gearset, "Nothing", part, slotIndex);
        return true;
      }

      if (gearset.itemsMap.has(choosenName as ItemKind)) {
        const item = gearset.itemsMap.get(choosenName as ItemKind);
        if (item.part !== part) {
          return false;
        }

        setItemAtIndex(gearset, item.kind, item.part, slotIndex);
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
          const bestItem = findBestItem(
            this.data.gearsets[this.data.selectedLoadout],
            part
          );
          target.value = bestItem.kind;
          setItemOnGearset(part, index, bestItem.kind);
        }
      },
      true
    );
  }
  itemTemplate(part, index) {
    return this.dom.itemTemplate.innerHTML
      .replace(/{{part}}/g, part)
      .replace(/{{index}}/g, index);
  }

  itemRatingUpdatedTimeout = null;
  itemRatingUpdatedThrottled = () => {
    if (this.itemRatingUpdatedTimeout) {
      clearTimeout(this.itemRatingUpdatedTimeout);
    }
    this.itemRatingUpdatedTimeout = setTimeout(this.itemRatingUpdated, 25);
  };
  itemRatingChart = null;
  itemRatingUpdated = () => {
    const gearset = this.data.gearsets[this.data.selectedLoadout];

    let labels = [];
    let effectKindToDataIndex = {};
    let dataSets = {
      enchants: {
        label: "Enchants",
        data: [],
        backgroundColor: "red",
      },
    };
    for (let effectKind in gearset.ese) {
      if (effectKind === "Nothing") {
        continue;
      }

      let dataIndex = labels.length;
      effectKindToDataIndex[effectKind] = dataIndex;

      labels[dataIndex] = effectKind;

      dataSets.enchants.data[dataIndex] = gearset.equippedEnchants.reduce(
        (acc, enchant) => {
          if (enchant === effectKind) {
            acc++;
          }
          return acc;
        },
        0
      );
    }
    let colorIndex = 0;
    for (let part in gearset.equippedItems) {
      for (let itemKind of gearset.equippedItems[part as Part]) {
        if (itemKind === "Nothing") {
          continue;
        }

        const item = gearset.itemsMap.get(itemKind);
        const setEffectMult = gearset.itemSets[item.setKind].activeMultiplier;

        if (typeof dataSets[itemKind] === "undefined") {
          dataSets[itemKind] = {
            label: itemKind,
            data: [],
            backgroundColor: colors[colorIndex],
          };

          colorIndex = (colorIndex + 1) % colors.length;
        }

        for (let effectKind in gearset.ese) {
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
    }

    let dataSetsArray = [];
    for (let dataSet in dataSets) {
      dataSetsArray.push(dataSets[dataSet]);
    }

    if (this.itemRatingChart) {
      //this.itemRatingChart.destroy();
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
  };

  save() {
    let dataToSave = JSON.parse(JSON.stringify(this.data));

    for (const gearset of dataToSave.gearsets) {
      for (const key in gearset) {
        //only save sets, effects, rating, items, enchants from GearSet
        switch (key) {
          case "items":
          case "enchants":
          case "config":
          case "sets":
          case "effects":
          case "rating":
            break;
          default:
            delete gearset[key];
            break;
        }
      }
    }

    localStorage.setItem(this.name, JSON.stringify(dataToSave));
  }

  activateLoadout(loadout: number) {
    //disable old

    const gearsetPrevious = this.data.gearsets[this.data.selectedLoadout];
    if (gearsetPrevious) {
      gearsetPrevious.events.off(
        "itemRatingUpdated",
        this.itemRatingUpdatedThrottled
      );
    }

    this.data.selectedLoadout = loadout;

    let gearset = this.data.gearsets[loadout];
    if (typeof gearset === "undefined") {
      gearset = {
        equippedItems: {
          Weapon: [],
          Armor: [],
          Jewelry: [],
        },
        equippedEnchants: [],
      } as GearSet;
    }

    gearset.config = this.data.optimizerConfig;
    initGearset(gearset);

    this.data.gearsets[loadout] = gearset;

    gearset.events.on("itemRatingUpdated", this.itemRatingUpdatedThrottled);
  }
}

export { Gear };
