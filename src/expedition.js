import { convert2 } from "./common.js";

function expeditionSave(input) {
  if (document.getElementById(input).type == "text") {
    let value = convert2(document.getElementById(input).value, 100);
    localStorage.setItem(input, value);
    document.getElementById(input).value = value;
    // console.log('text');
  } else if (document.getElementById(input).type == "checkbox") {
    localStorage.setItem(input, document.getElementById(input).checked);

    // console.log('checkbox');
    // console.log(document.getElementById(input).checked);
    // console.log(localStorage.getItem(input));
  }

  // console.log(input);
  calcExpedition();
}

function expeditionLoad() {
  let speedBonus1 = "expedition-speed-bonus-1";
  let speedBonus2 = "expedition-speed-bonus-2";
  let speedBonus3 = "expedition-speed-bonus-3";

  if (localStorage.getItem(speedBonus1) === null) {
    localStorage.setItem(speedBonus1, 100);
  } else {
    document.getElementById(speedBonus1).value =
      localStorage.getItem(speedBonus1);
  }
  if (localStorage.getItem(speedBonus2) === null) {
    localStorage.setItem(
      speedBonus2,
      document.getElementById(speedBonus2).checked
    );
  } else {
    document.getElementById(speedBonus2).checked =
      localStorage.getItem(speedBonus2) === "true";
  }
  if (localStorage.getItem(speedBonus3) === null) {
    localStorage.setItem(speedBonus3, false);
  } else {
    document.getElementById(speedBonus3).checked =
      localStorage.getItem(speedBonus3) === "true";
  }

  calcExpedition();
}

function calcExpedition() {
  // var nitro = localStorage.getItem('anvil-nitro-speed');
  let speedBonus1 = localStorage.getItem("expedition-speed-bonus-1");
  let speedBonus2 = "expedition-speed-bonus-2";
  let speedBonus3 = "expedition-speed-bonus-3";
  let totalSpeed = 0;
  // if (localStorage.getItem(speedBonus1) === null) {localStorage.setItem(speedBonus1, document.getElementById(speedBonus1).checked);}
  // else {document.getElementById(speedBonus1).checked = localStorage.getItem(speedBonus1);}
  let speedTable = [
    [106.519, "48.0h"],
    [68.014, "24.0h"],
    [35.495, "16.0h"],
    [17.759, "8.0h"],
    [8.877, "4.0h"],
    [4.439, "2.0h"],
    [2.2, "1.0h"],
  ];
  // if (localStorage.getItem(speedBonus2) == true) {totalSpeed += 1;}

  for (let i = 1; i <= 8; i++) {
    let level = "expedition-team-" + i + "-level";
    let speed = "expedition-team-" + i + "-speed";
    let time = "expedition-team-" + i + "-time";

    if (localStorage.getItem(level) === null) {
      localStorage.setItem(level, document.getElementById(level).value);
    } else {
      document.getElementById(level).value = localStorage.getItem(level);
    }

    //   reward = document.getElementById('anvil-dungeon-' + i + '-reward').innerHTML;
    document.getElementById(level).value = localStorage.getItem(level);
    let baseSpeed = 1 + document.getElementById(level).value * 0.001;
    // totalSpeed = baseSpeed ;
    let totalSpeed = (baseSpeed * speedBonus1) / 100;
    // if (localStorage.getItem(speedBonus2) === 'true') {totalSpeed += 1;}
    if (localStorage.getItem(speedBonus2) == "true") {
      totalSpeed += ((baseSpeed * speedBonus1) / 100) * 0.25;
    }
    if (localStorage.getItem(speedBonus3) == "true") {
      totalSpeed += ((baseSpeed * speedBonus1) / 100) * 0.25;
    }

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

function testExpedition() {
  return "testExpedition";
}

export { expeditionSave, expeditionLoad, calcExpedition, testExpedition };
