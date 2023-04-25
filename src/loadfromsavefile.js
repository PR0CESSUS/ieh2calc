import { Rfc2898DeriveBytes } from "./Rfc2898DeriveBytes.js";
import { createDecipheriv } from "crypto";

function dencrypt(src) {
  let pw = "kkyyhka";
  let salt = "stkttnsstkttns";
  let rfc2898DeriveBytes = new Rfc2898DeriveBytes(pw, 20);
  rfc2898DeriveBytes.salt = salt;

  let key = rfc2898DeriveBytes.getBytes(16);
  let iv = rfc2898DeriveBytes.getBytes(16);

  let decipher = createDecipheriv("aes-128-cbc", key, iv);
  let decoded = decipher.update(src, "base64", "ascii");
  decoded += decipher.final("ascii");
  console.log("decoding");
  return decoded;
}

// for (let index = 0; index < dataArray.length; index++) {
//   const element = dataArray[index];
//   let output = dencrypt(element);
//   let name = "data" + index + ".json";
//   fs.writeFileSync(name, output);
// }
// dataArray.forEach((element) => {
//   output += dencrypt(element);

//   // output += element + ",";
// });

// let output = data;
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
    // console.log(json.catalystLevels);

    let slimebank = JSON.parse(localStorage.getItem("slimeBank"));
    slimebank.research.stone.level = json.buildingResearchLevelsStone[6];
    slimebank.research.leaf.level = json.buildingResearchLevelsLeaf[6];
    slimebank.slimeCoinCap1.level = json.upgradeLevelsSlimebank[0];
    slimebank.slimeCoinCap2.level = json.upgradeLevelsSlimebank[21];
    slimebank.pet1.rank = json2.monsterPetRanks[83];
    slimebank.pet1.loyalty = json2.monsterPetLoyalty[83];

    slimebank.needUpdate = true;
    localStorage.setItem("slimeBank", JSON.stringify(slimebank));
    console.log("zapisano do localstorage");

    // catalystLevels
    // buildingResearchLevelsStone
    // buildingResearchLevelsCrystal
    // buildingResearchLevelsLeaf
    // essenceWaterPerSecs
    // guildAbilityLevels
    // mysteriousWater
    // mysteriousWaterExpandedCapNum
    // upgradeLevelsSlimebank

    // data1
    // printlog(data, "expeditionLevels");
    // printlog(data, "monsterPetRanks");
    // printlog(data, "monsterPetLoyalty");
    //   printlog(data, "monsterPetLevels");
    // for (const [key, value] of Object.entries({ ...JSON.parse(text) })) {
    //   // console.log(`${key}: ${value}`);
    //   // localStorage.setItem(key, value);
    //   // location.reload();
    //   // console.log(`${key}: ${value}`);
    // }
  });
  reader.readAsText(file);
}

export { loadFromSaveFile };
