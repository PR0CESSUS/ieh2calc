function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  // start up
  load();
});

function loadFromFile() {
  let file = document.getElementById("settings.loadFromFile").files[0];
  let reader = new FileReader();
  reader.addEventListener("load", function (e) {
    let text = e.target.result;
    //   document.querySelector("#file-contents").textContent = text;
    //   console.log(JSON.parse(text));
    for (const [key, value] of Object.entries({ ...JSON.parse(text) })) {
      // console.log(`${key}: ${value}`);
      localStorage.setItem(key, value);
      location.reload();
      // console.log(`${key}: ${value}`);
    }
  });
  reader.readAsText(file);
}

function printlog(data, key) {
  str = JSON.stringify(data[key], null, 4);
  document.getElementById("content").innerHTML += key + ": ";
  document.getElementById("content").innerHTML += str + "<br>";
}

function load() {
  // fetch data0
  fetch("http://127.0.0.1:3000/data0.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("content").innerHTML += "<h3>data0.json</h3>";

      printlog(data, "catalystLevels");
      printlog(data, "buildingResearchLevelsStone");
      printlog(data, "buildingResearchLevelsCrystal");
      printlog(data, "buildingResearchLevelsLeaf");
      printlog(data, "essenceWaterPerSecs");
      printlog(data, "guildAbilityLevels");
      printlog(data, "mysteriousWater");
      printlog(data, "mysteriousWaterExpandedCapNum");
      printlog(data, "upgradeLevelsSlimebank");
      //   printlog(data, "monsterPetLevels");
    });
  // fetch 2
  fetch("http://127.0.0.1:3000/data1.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("content").innerHTML += "<h3>data1.json</h3>";
      printlog(data, "expeditionLevels");
      printlog(data, "monsterPetRanks");
      printlog(data, "monsterPetLoyalty");
      //   printlog(data, "monsterPetLevels");

      //   monsterPetLevels;
      //   monsterPetLoyalty;
      //   monsterPetRanks;
    });
  fetch("http://127.0.0.1:3000/data2.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("content").innerHTML += "<h3>data2.json</h3>";

      printlog(data, "buildingResearchLevelStone");
      printlog(data, "catalystLevels");
    });
}
