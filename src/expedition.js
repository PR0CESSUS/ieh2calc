import { convert2 } from "./common.js";

class ExpeditionData {
  constructor() {
    this.version = 1;
    this.expeditionMilestone175 = false;
    this.expeditionMilestone225 = false;
    this.townBonus = 1;
    this.team = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}

class Expedition {
  name = "expedition";
  data = new ExpeditionData();
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
      .getElementById("expedition-calculator")
      .addEventListener("change", this.update.bind(this));

    this.display();
  }

  save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }

  update(event) {
    const target = event.target;
    // const idFull = target.id;
    // const id = idFull.split(".")[1];
    // console.log(target);
    if (target.type == "checkbox") {
      this.data[target.id] = target.checked;
    }
    if (target.type == "text" && target.id == "expeditionTownBonus") {
      this.data.townBonus = parseFloat(target.value / 100);
    } else {
      let index = target.id.split("-")[2];
      this.data.team[index - 1] = parseInt(target.value);
    }

    // this.data[id] = convert2(document.getElementById(idFull).value);

    this.save();
    this.display();
  }

  display() {
    let expeditionTownBonus = (this.data.townBonus * 100).toFixed(2);
    // console.log("display()");
    // console.log($("#research.stone.level").value);
    // alert("expedition calc");
    document.getElementById("expeditionTownBonus").value = expeditionTownBonus;
    document.getElementById("expeditionMilestone175").checked = this.data.expeditionMilestone175;
    document.getElementById("expeditionMilestone225").checked = this.data.expeditionMilestone225;

    for (let index = 0; index < this.data.team.length; index++) {
      let levelID = "expedition-team-" + (index + 1) + "-level";
      let speedID = "expedition-team-" + (index + 1) + "-speed";
      let timeID = "expedition-team-" + (index + 1) + "-time";

      document.getElementById(levelID).value = this.data.team[index];
      document.getElementById(speedID).innerHTML = this.getSpeed(index);
      document.getElementById(timeID).innerHTML = this.getBestReward(index);
    }
  }

  getSpeed(index) {
    let speedBase = 1 + this.data.team[index] * 0.001;
    let speedMultiplier = 1;

    if (this.data.expeditionMilestone175) {
      speedMultiplier += 0.25;
    }
    if (this.data.expeditionMilestone225) {
      speedMultiplier += 0.25;
    }

    let speedTotal = speedBase * (this.data.townBonus * speedMultiplier);

    return speedTotal.toFixed(3);
  }

  getBestReward(index) {
    let output = "0.5h";
    let speedTable = [
      [106.519, "48.0h"],
      [68.014, "24.0h"],
      [35.495, "16.0h"],
      [17.759, "8.0h"],
      [8.877, "4.0h"],
      [4.439, "2.0h"],
      [2.2, "1.0h"],
    ];
    for (let i = 0; i < speedTable.length; i++) {
      if (this.getSpeed(index) >= speedTable[i][0]) {
        output = speedTable[i][1];
        break;
      }
    }
    return output;
  }
}

function calcExpedition() {
  // var nitro = localStorage.getItem('anvil-nitro-speed');
  let speedBonus1 = localStorage.getItem("expedition-speed-bonus-1");
  let speedBonus2 = "expedition-speed-bonus-2";
  let speedBonus3 = "expedition-speed-bonus-3";
  let totalSpeed = 0;
  // if (localStorage.getItem(speedBonus1) === null) {localStorage.setItem(speedBonus1, document.getElementById(speedBonus1).checked);}
  // else {document.getElementById(speedBonus1).checked = localStorage.getItem(speedBonus1);}

  // if (localStorage.getItem(speedBonus2) == true) {totalSpeed += 1;}

  for (let i = 1; i <= 8; i++) {
    //   reward = document.getElementById('anvil-dungeon-' + i + '-reward').innerHTML;

    // if (localStorage.getItem(speedBonus2) === 'true') {totalSpeed += 1;}

    for (let i = 0; i < speedTable.length; i++) {
      if (totalSpeed >= speedTable[i][0]) {
        document.getElementById(time).innerHTML = speedTable[i][1];
        break;
      } else {
        document.getElementById(time).innerHTML = "0.5h";
      }
    }

    // for (const [key, value] of Object.entries(speedTable)) {
    //   if (totalSpeed > key) {
    //     document.getElementById(time).innerHTML = value;
    //   }
    //   console.log(`${key}: ${value}`);
    // }

    document.getElementById(speed).innerHTML = totalSpeed.toFixed(3);
    //   document.getElementById(orb).innerHTML = Math.round(3600 / document.getElementById(time).value * nitro) ;
  }
}

export { Expedition, ExpeditionData };
