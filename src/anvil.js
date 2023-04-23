class Anvil {
  constructor() {
    this.name = "anvil";
    this.data = {
      nitro: 1.0,
      dungeon: [
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
        {
          name: "herolevel",
          diff: 1,
          time: 1,
          reward: 18000,
          orb: 3600,
        },
      ],
    };

    if (localStorage.getItem(this.name) === null) {
      localStorage.setItem(this.name, JSON.stringify(this.data));
    } else {
      this.data = JSON.parse(localStorage.getItem(this.name));
    }

    document.getElementById("anvil-calculator").addEventListener("change", this.save.bind(this));

    this.display();
  }

  getReward(name) {
    let reward = 0;
    switch (name) {
      case "herolevel":
      case "requiredability":
        reward = 5;
        break;
      case "herolevel2":
      case "requiredability2":
        reward = 10;
        break;
      case "proficiencygain":
        reward = 1;
        break;
      case "equipmenteffect":
        reward = 0.1;
        break;
      case "purifyofcursedeffect":
        reward = 0.01;
        break;
      case "proficiencygain2":
        reward = 2;
        break;
      case "equipmenteffect2":
        reward = 0.2;
        break;
    }

    return reward;
  }

  save() {
    this.data.nitro = document.getElementById("anvil.nitro.speed").value;
    for (let i in this.data.dungeon) {
      this.data.dungeon[i].name = document.getElementById("anvil.dungeon." + i + ".name").value;
      this.data.dungeon[i].diff = document.getElementById("anvil.dungeon." + i + ".diff").value;
      this.data.dungeon[i].time = document.getElementById("anvil.dungeon." + i + ".time").value;
      let perhour = 3600 / this.data.dungeon[i].time;
      let reward = this.getReward(this.data.dungeon[i].name);
      this.data.dungeon[i].reward = Math.round(
        perhour * reward * this.data.dungeon[i].diff * this.data.nitro
      );
      this.data.dungeon[i].orb = Math.round(perhour * this.data.nitro);
    }

    localStorage.setItem(this.name, JSON.stringify(this.data));
    this.display();
  }

  display() {
    document.getElementById("anvil.nitro.speed").value = this.data.nitro;

    for (let i in this.data.dungeon) {
      let name = "anvil.dungeon." + i + ".name";
      let time = "anvil.dungeon." + i + ".time";
      let diff = "anvil.dungeon." + i + ".diff";
      let reward = "anvil.dungeon." + i + ".reward";
      let orb = "anvil.dungeon." + i + ".orb";
      document.getElementById(name).value = this.data.dungeon[i].name;
      document.getElementById(time).value = this.data.dungeon[i].time;
      document.getElementById(diff).value = this.data.dungeon[i].diff;
      document.getElementById(reward).innerHTML = this.data.dungeon[i].reward;
      document.getElementById(orb).innerHTML = this.data.dungeon[i].orb;

      if (
        this.data.dungeon[i].name == "proficiencygain2" ||
        this.data.dungeon[i].name == "proficiencygain" ||
        this.data.dungeon[i].name == "equipmenteffect2" ||
        this.data.dungeon[i].name == "equipmenteffect" ||
        this.data.dungeon[i].name == "purifyofcursedeffect"
      ) {
        document.getElementById(reward).innerHTML += "%";
      }
    }
  }
}

export { Anvil };
