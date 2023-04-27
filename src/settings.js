import { createDecipheriv } from "crypto";
import { pbkdf2Sync } from "crypto";
import { SlimeBankData } from "./slimebank";
import { GuildData } from "./guild";

const $key = Symbol("key");
const $salt = Symbol("salt");
const $iterationCount = Symbol("iterationCount");
const $position = Symbol("position");

class Rfc2898DeriveBytes {
  constructor(key, salt, iterationCount = 1000) {
    this[$key] = key;
    this[$iterationCount] = iterationCount;
    this[$position] = 0;
    this[$salt] = salt;
  }

  get salt() {
    return this[$salt];
  }
  set salt(buffer) {
    this[$salt] = buffer;
  }

  get iterationCount() {
    return this[$iterationCount];
  }
  set iterationCount(count) {
    this[$iterationCount] = count;
  }

  getBytes(byteCount) {
    let position = this[$position];
    let bytes = pbkdf2Sync(
      Buffer.from(this[$key]),
      this.salt,
      this.iterationCount,
      position + byteCount,
      "sha1"
    );
    this[$position] += byteCount;
    let result = Buffer.alloc(byteCount);
    for (let i = 0; i < byteCount; i++) {
      result[i] = bytes[position + i];
    }
    return result;
  }
}

function dencrypt(src) {
  let pw = new Uint8Array([107, 107, 121, 121, 104, 107, 97]);
  let salt = new Uint8Array([115, 116, 107, 116, 116, 110, 115, 115, 116, 107, 116, 116, 110, 115]);
  let decoder = new TextDecoder();

  let rfc2898DeriveBytes = new Rfc2898DeriveBytes(decoder.decode(pw), decoder.decode(salt));

  let key = rfc2898DeriveBytes.getBytes(16);
  let iv = rfc2898DeriveBytes.getBytes(16);

  let decipher = createDecipheriv("aes-128-cbc", key, iv);
  let decoded = decipher.update(src, "base64", "ascii");
  decoded += decipher.final("ascii");
  console.log("decoding");
  return decoded;
}

function loadFromSaveFile() {
  let file = document.getElementById("settings.loadFromSaveFile").files[0];
  let reader = new FileReader();

  reader.addEventListener("load", function (e) {
    let data = e.target.result;
    let dataArray = data.split("#");
    let data0 = JSON.parse(dencrypt(dataArray[0]));
    let data1 = JSON.parse(dencrypt(dataArray[1]));
    let data2 = JSON.parse(dencrypt(dataArray[2]));

    // slime bank
    let storage = null;
    let name = "slimeBank";
    if (localStorage.getItem(name) === null || localStorage.getItem(name) === "null") {
      storage = new SlimeBankData();
    } else {
      storage = JSON.parse(localStorage.getItem(name));
    }

    storage.researchStoneLevel = data0.buildingResearchLevelsStone[6];
    storage.researchLeafLevel = data0.buildingResearchLevelsLeaf[6];
    storage.slimeCoinCap1Level = data0.upgradeLevelsSlimebank[0];
    storage.slimeCoinCap2Level = data0.upgradeLevelsSlimebank[21];
    storage.pet1Rank = data1.monsterPetRanks[83];
    storage.pet1Loyalty = data1.monsterPetLoyalty[83];
    let counter = 0;
    data1.isClearedMission.forEach((element) => {
      if (element) {
        counter += 1;
      }
    });
    if (counter >= 1800) {
      storage.milestone1800 = true;
    }
    if (counter >= 2700) {
      storage.milestone2700 = true;
    }
    localStorage.setItem(name, JSON.stringify(storage));

    // guild
    storage = null;
    name = "guild";
    if (localStorage.getItem(name) === null || localStorage.getItem(name) === "null") {
      storage = new GuildData();
    } else {
      storage = JSON.parse(localStorage.getItem(name));
    }
    storage.levelCurrent = data0.guildLevel;
    storage.talisman = data0.potionDisassembledNums[32];
    localStorage.setItem(name, JSON.stringify(storage));

    // debug

    console.log("succes");
  });
  reader.readAsText(file);
}

function restart() {
  localStorage.clear();
  location.reload();
}

function saveToFile() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(localStorage, null, 2)], {
      type: "text/plain",
    })
  );
  a.setAttribute("download", "IEH2calc-data.json");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function loadFromFile() {
  let file = document.getElementById("settings.loadFromFile").files[0];
  let reader = new FileReader();
  reader.addEventListener("load", function (e) {
    let text = e.target.result;
    console.log(JSON.parse(text));
    for (const [key, value] of Object.entries({ ...JSON.parse(text) })) {
      localStorage.setItem(key, value);
    }
    location.reload();
  });
  reader.readAsText(file);
}

document.getElementById("settings.loadFromSaveFile").addEventListener("change", loadFromSaveFile);
document.getElementById("settings.loadFromFile").addEventListener("change", loadFromFile);
document.getElementById("settings.saveToFile").addEventListener("click", saveToFile);
document.getElementById("settings.restart").addEventListener("click", restart);
