import { convert, convert2, secondsToDhms } from "./common.js";

class GuildData {
  constructor() {
    this.version = 1;
    this.levelCurrent = 0;
    this.levelTarget = 0;
    this.expPerHour = 0;
    this.talisman = 0;
  }
}

class Guild {
  name = "guild";
  data = new GuildData();
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

    // console.log("class constructor aka Init");
    document.getElementById("guild-calculator").addEventListener("change", this.update.bind(this));

    this.display();
  }

  save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }

  update(event) {
    const target = event.target;
    const idFull = target.id;

    const id = idFull.split(".")[1];
    // console.log(target);
    this.data[id] = convert2(document.getElementById(idFull).value);

    this.save();
    this.display();
  }

  display() {
    // console.log("display()");
    // console.log($("#research.stone.level").value);

    document.getElementById("guild.levelCurrent").value = this.data.levelCurrent;
    document.getElementById("guild.levelTarget").value = this.data.levelTarget;
    document.getElementById("guild.expPerHour").value = convert(this.data.expPerHour);
    document.getElementById("guild.talisman").value = this.data.talisman;
    document.getElementById("guild.time").innerHTML = this.getTime();
  }

  getTime() {
    let levelTotal = this.data.levelTarget - this.data.levelCurrent;

    if (levelTotal > 0 && this.data.expPerHour > 0) {
      let requiredExpTotal = 0;
      let time = 0;

      for (let i = 0; i < levelTotal; i++) {
        let level = this.data.levelCurrent + i;
        let requiredExp =
          Math.floor(
            500.0 * (level + 1) +
              50.0 * Math.pow(level, 2.0) +
              500.0 * Math.pow(level / 5.0, 3.0) +
              2000.0 * Math.pow(level / 10.0, 6.0) +
              25000.0 * Math.pow(level / 20.0, 9.0) +
              300000.0 * Math.pow(level / 30.0, 12.0)
          ) *
          (1.0 - this.data.talisman * 0.0001);

        requiredExpTotal += requiredExp;
      }

      let expPerSeconds = this.data.expPerHour / 3600;
      time = parseInt(requiredExpTotal / expPerSeconds);
      // console.log("expPerSeconds " + parseInt(expPerSeconds));
      // console.log("requiredExpTotal " + requiredExpTotal);

      // console.log("seconds " + time);

      // GuildParameter.RequiredExp(level) * (1.0 - this.expRequirementReduction.Value());

      return secondsToDhms(time);
    } else {
      return 0;
    }
    //
  }
}

export { Guild, GuildData };
