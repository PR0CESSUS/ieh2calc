function anvilSave(input) {
  localStorage.setItem(input, document.getElementById(input).value);
  calcAnvil();
}

function calcAnvil() {
  var nitro = localStorage.getItem("anvil-nitro-speed");

  for (let i = 1; i <= 10; i++) {
    let id = "anvil-dungeon-" + i + "-time";
    let value = "anvil-dungeon-" + i + "-value";
    let time = "anvil-dungeon-" + i + "-time";
    let orb = "anvil-dungeon-" + i + "-orb";
    let reward = document.getElementById(
      "anvil-dungeon-" + i + "-reward"
    ).innerHTML;

    document.getElementById(id).value = localStorage.getItem(id);
    document.getElementById(value).innerHTML = Math.round(
      (3600 / document.getElementById(time).value) * reward * nitro
    );
    document.getElementById(orb).innerHTML = Math.round(
      (3600 / document.getElementById(time).value) * nitro
    );
  }

  // list.forEach(myFunction);
  // if (localStorage.getItem('anvil-fox-dungeon-1-time') && document.getElementById('anvil-fox-dungeon-1-time').value != localStorage.getItem('anvil-fox-dungeon-1-time')) {
  //   document.getElementById('anvil-fox-dungeon-1-time').value = localStorage.getItem('anvil-fox-dungeon-1-time');
  // }
  // else {localStorage.setItem('anvil-fox-dungeon-1-time', document.getElementById('anvil-fox-dungeon-1-time').value);}

  //  document.getElementById('anvil-fox-dungeon-1-value').innerHTML = 3600 / document.getElementById('anvil-fox-dungeon-1-time').value;
}

export { calcAnvil, anvilSave };
