class nameData {
  constructor() {
    this.version = 1;
  }
}

class name {
  name = "name";
  data = new nameData();
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

    document.getElementById("name-calculator").addEventListener("change", this.update.bind(this));

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
}

export { name, nameData };
