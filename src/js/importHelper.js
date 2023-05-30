import { ExpeditionData } from "./expedition.js";
import { SlimeBankData } from "./slimebank.js";
import { GuildData } from "./guild.js";

class ImportHelper {
  expedition = new ExpeditionData();
  slimeBank = new SlimeBankData();
  // guild = new GuildData();
  guild = this.loadOldData('guild',new GuildData());

  constructor(data) {
    this.data = data;
    this.clearedMission = this.getClearedMission();
    this.expeditionLevelTotal = this.getExpeditionLevel();

    // expedition
    this.expedition.team = this.getExpeditionLevelTeams();
    this.expedition.expeditionMilestone175 = this.checkAreaMilestone(175);
    this.expedition.expeditionMilestone225 = this.checkAreaMilestone(225);
    this.expedition.townBonus = this.getAdventuringPartyPassive();
    localStorage.setItem("expedition", JSON.stringify(this.expedition));

    // slime bank
    this.slimeBank.researchStoneLevel = this.data.buildingResearchLevelsStone[6];
    this.slimeBank.researchLeafLevel = this.data.buildingResearchLevelsLeaf[6];
    this.slimeBank.slimeCoinCap1Level = this.data.upgradeLevelsSlimebank[0];
    this.slimeBank.slimeCoinCap2Level = this.data.upgradeLevelsSlimebank[21];
    this.slimeBank.pet1Rank = this.data.monsterPetRanks[83];
    this.slimeBank.pet1Loyalty = this.data.monsterPetLoyalty[83];
    this.slimeBank.milestone1800 = this.checkAreaMilestone(1800);
    this.slimeBank.milestone2700 = this.checkAreaMilestone(2700);
    localStorage.setItem("slimeBank", JSON.stringify(this.slimeBank));

    // guild

    this.guild.levelCurrent = data.guildLevel;
    this.guild.talisman = data.potionDisassembledNums[32];
    localStorage.setItem("guild", JSON.stringify(this.guild));
    alert("Data imported !");
  }

  loadOldData(name, data) {
    let key = localStorage.getItem(name);
    if (key === null || key === "null") {
      return data;
    } else {
      return JSON.parse(localStorage.getItem(name));
    }
  }
 
  checkAreaMilestone(value) {
    if (value <= this.clearedMission) {
      return true;
    } else {
      return false;
    }
  }

  getClearedMission() {
    let counter = 0;
    this.data.isClearedMission.forEach((element) => {
      if (element) {
        counter += 1;
      }
    });
    return counter;
  }

  getExpeditionLevel() {
    return this.data.expeditionLevels.reduce((a, b) => a + b, 0);
  }

  getAdventuringPartyPassive() {
    let level = this.data.buildingLevels[11] + this.getBuildingLevelBonus();
    let passive = (level * 0.005 * this.getTownLevelEffectMultiplier(2) + 1).toFixed(4);
    return parseFloat(passive);
  }

  getBuildingLevelBonus() {
    let bonus = 0;
    if (this.clearedMission >= 550) {
      bonus += 10;
    }
    if (this.clearedMission >= 1350) {
      bonus += 10;
    }
    if (this.clearedMission >= 2300) {
      bonus += 10;
    }
    return bonus;
  }

  getTownLevelEffectMultiplier(type) {
    // 0 = brick
    // 1 = tree
    // 2 = shard
    let expeditionMultiplier = 1;
    if (this.expeditionLevelTotal >= 200) {
      expeditionMultiplier += 0.25;
    }
    if (this.expeditionLevelTotal >= 250) {
      expeditionMultiplier += 0.25;
    }
    let level = this.data.ascensionMilestoneLevelReached[0];
    let expedition = 1 + this.data.expeditionLevels[type] * 0.01 * expeditionMultiplier;
    let ascension = 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
    let trowel = Math.min(1 + this.data.potionDisassembledNums[34] * 0.001, 3);
    let total = (1 + ascension) * trowel * expedition;

    return total;
  }

  getExpeditionLevelTeams() {
    let team = [];
    let offsetSpiecies = 0;
    let offsetColors = 0;
    let counter = 0;
    let totalLevel = 0;

    for (let i = 0; i < this.data.expeditionPetIsSet.length; i++) {
      counter++;
      if (this.data.expeditionPetIsSet[i]) {
        offsetSpiecies = this.data.expeditionPetSpecies[i] * 10;
        offsetColors = this.data.expeditionPetColors[i];
        totalLevel += this.data.monsterPetLevels[offsetSpiecies + offsetColors];
      }
      if (counter == 5) {
        team.push(totalLevel);
        counter = 0;
        totalLevel = 0;
      }
    }

    return team;
  }
}

export { ImportHelper };
