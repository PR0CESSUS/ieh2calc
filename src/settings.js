import { createDecipheriv } from "crypto";
import { pbkdf2Sync } from "crypto";

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
    console.log("file loaded");

    let dataArray = data.split("#");
    let data0 = dencrypt(dataArray[0]);
    let data1 = dencrypt(dataArray[1]);
    // data0:
    // console.log(data0);
    let json = JSON.parse(data0);
    let json2 = JSON.parse(data1);

    // console.log(json);

    let slimebank = JSON.parse(localStorage.getItem("slimeBank"));
    slimebank.research.stone.level = json.buildingResearchLevelsStone[6];
    slimebank.research.leaf.level = json.buildingResearchLevelsLeaf[6];
    slimebank.slimeCoinCap1.level = json.upgradeLevelsSlimebank[0];
    slimebank.slimeCoinCap2.level = json.upgradeLevelsSlimebank[21];
    slimebank.pet1.rank = json2.monsterPetRanks[83];
    slimebank.pet1.loyalty = json2.monsterPetLoyalty[83];
    let counter = 0;
    json2.isClearedMission.forEach((element) => {
      if (element) {
        counter += 1;
      }
    });
    if (counter >= 1800) {
      slimebank.milestone1800 = true;
    }
    if (counter >= 2700) {
      slimebank.milestone2700 = true;
    }
    slimebank.needUpdate = true;
    localStorage.setItem("slimeBank", JSON.stringify(slimebank));
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
