function load() {
    // current tab
    const tab_list = ['slime-bank', 'lab', 'anvil'];
    if (localStorage.getItem('setting-currentTab')) {
      tab_list.forEach(element => {
        tab = element + '-calculator';
        if (localStorage.getItem('setting-currentTab') == element) {
          document.getElementById(tab).style.display = 'block';
          document.getElementById(element).style.color = '#f2e009';
        } else {
          document.getElementById(tab).style.display = 'none';
        }});} 
    else {
      localStorage.setItem('setting-currentTab', 'slime-bank');
      document.getElementById('anvil-calculator').style.display = 'none';
      document.getElementById('slime-bank').style.color = '#f2e009';
      document.getElementById('lab-calculator').style.display = 'none';   
    }
    // Anvil loading
    if (localStorage.getItem('anvil-nitro-speed') === null) {localStorage.setItem('anvil-nitro-speed', 1);} 
    else {document.getElementById('anvil-nitro-speed').value = localStorage.getItem('anvil-nitro-speed');}
    // anvil load need refactor
    for (let i = 1; i <= 10; i++) {
      id = 'anvil-dungeon-' + i + '-time';
      if (localStorage.getItem(id) === null) {localStorage.setItem(id, document.getElementById(id).value);} 
      else {document.getElementById(id).value = localStorage.getItem(id);}

    }
    calc_anvil();

    // loading values from localStorage else setting values as 0
    // const list = [
    //   'anvil-fox-dungeon-1-time', 'anvil-fox-dungeon-2-time', 'anvil-fox-dungeon-3-time',
    // 'anvil-fox-dungeon-4-time', 'anvil-fox-dungeon-5-time','anvil-bat-dungeon-1-time','anvil-bat-dungeon-2-time',
    // 'anvil-bat-dungeon-3-time','anvil-bat-dungeon-4-time','anvil-bat-dungeon-5-time'];
    // const items = { ...localStorage };
    // console.log(items);
    // list.forEach(element => {
    //  console.log(element);
    //  if (localStorage.getItem(element) === null) {Slime_Bank_Research_Stone(0);} 
    //  else {Slime_Bank_Research_Stone(localStorage.getItem('slime-bank-research-stone-level'));}
    // });


    // Slime Bank loading
    if (localStorage.getItem('slime-bank-research-stone-level') === null) {Slime_Bank_Research_Stone(0);} 
    else {Slime_Bank_Research_Stone(localStorage.getItem('slime-bank-research-stone-level'));}

    if (localStorage.getItem('slime-bank-research-leaf-level') === null) {Slime_Bank_Research_Leaf(0);} 
    else {Slime_Bank_Research_Leaf(localStorage.getItem('slime-bank-research-leaf-level'));}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level') === null) {Slime_Bank_Slime_Coin_Cap_1(0);} 
    else {Slime_Bank_Slime_Coin_Cap_1(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level'));}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level') === null) {Slime_Bank_Slime_Coin_Cap_2(0);} 
    else {Slime_Bank_Slime_Coin_Cap_2(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level'));}

    // Slime_Bank_Gold_Cap_Total();    
    // Slime_Bank_Intrest();
    // Slime_Bank_Optimiser();
    // debug
    // for (const [key, value] of Object.entries({ ...localStorage })) {
    //   // console.log(`${key}: ${value}`);
    //   document.getElementById('debug').innerHTML += `<i>${key}:</i> <b>${value}</b><br>`;
    // }
}

function calc_anvil_save(input) {
  localStorage.setItem(input, document.getElementById(input).value);
  calc_anvil();
}


function calc_anvil() {
  var nitro = localStorage.getItem('anvil-nitro-speed');

  for (let i = 1; i <= 10; i++) {
    id = 'anvil-dungeon-' + i + '-time';
    value = 'anvil-dungeon-' + i + '-value';
    time = 'anvil-dungeon-' + i + '-time';
    orb = 'anvil-dungeon-' + i + '-orb';
    reward = document.getElementById('anvil-dungeon-' + i + '-reward').innerHTML;
    document.getElementById(id).value = localStorage.getItem(id);
    document.getElementById(value).innerHTML = Math.round(3600 / document.getElementById(time).value * reward * nitro);
    document.getElementById(orb).innerHTML = Math.round(3600 / document.getElementById(time).value * nitro) ;
  }



  // list.forEach(myFunction);
  // if (localStorage.getItem('anvil-fox-dungeon-1-time') && document.getElementById('anvil-fox-dungeon-1-time').value != localStorage.getItem('anvil-fox-dungeon-1-time')) {
  //   document.getElementById('anvil-fox-dungeon-1-time').value = localStorage.getItem('anvil-fox-dungeon-1-time');
  // } 
  // else {localStorage.setItem('anvil-fox-dungeon-1-time', document.getElementById('anvil-fox-dungeon-1-time').value);}
   
  //  document.getElementById('anvil-fox-dungeon-1-value').innerHTML = 3600 / document.getElementById('anvil-fox-dungeon-1-time').value;
}

// debug
function restart() {
  window.localStorage.clear();
}




function currentTab(input) {
  localStorage.setItem('setting-currentTab', input);
}



function sigma(lowerBound, upperBound, iterator, accumulator = 0) {
  // let accumulator = 0;
  for(let i = lowerBound; i <= upperBound; ++i) {
    accumulator += iterator(i);
  } 
  return accumulator;
}

// convert normal number to K,M,B,T and exponential
function convert(input) {
  input = parseFloat(input);
  var output = 0;
  if (input == 0) {output = 0;}
  else if (input <= 10000) {output = Math.round(input);}
  else if (input < 1000000) {output = (input / 1000).toFixed(2) + 'K';}
  else if (input < 1000000000) {output = (input / 1000000).toFixed(2) + 'M';}
  else if (input < 1000000000000) {output = (input / 1000000000).toFixed(2) + 'B';}
  else if (input < 1000000000000000) {output = (input / 1000000000000).toFixed(2) + 'T';}
  else {output = input.toExponential(2);}

  return output; 
}

// convert k,m,b,t to normal numbers
function convert2(input) {
  if (/^\d*\.?\d+$/.test(input)) {return Math.round(input);} // return rounded number if there is no abbreviete
  else {
  const regex = /(.*)(\D)$/gm;
  input = input.toLowerCase();
  input = input.replace(/ /g, ''); //removes all spaces
  input = regex.exec(input);

  if (input[2] == 't') {output = input[1] * 1000 ** 4;}
  else if (input[2] == 'b') {output = input[1] * 1000 ** 3;}
  else if (input[2] == 'm') {output = input[1] * 1000 ** 2;}
  else if (input[2] == 'k') {output = input[1] * 1000 ** 1;}
  
  return output;
  }
}


// Slime Bank functions

function Slime_Bank_Gold_Cap_Total() {
  output = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-value') * ((localStorage.getItem('slime-bank-research-leaf-level') * 2 + 100) / 100) * (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-value') / 100);
  localStorage.setItem('slime-bank-slime-coin-cap-total', output);
  document.getElementById('slime-bank-slime-coin-cap-value').innerHTML = convert(output);
  Slime_Bank_Intrest();
  Slime_Bank_Optimiser();
}

function Slime_Bank_Intrest() {
  intrest = (document.getElementById('slime-bank-research-stone-level').value * 0.001 ) * localStorage.getItem('slime-bank-slime-coin-cap-total');
  localStorage.setItem('slime-bank-intrest', intrest);
  document.getElementById('slime-bank-intrest').innerHTML = convert(intrest);
  Slime_Bank_Optimiser();
}

function Slime_Bank_Optimiser() {
  slime_coin_cap_1_level = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level');
  intrest = localStorage.getItem('slime-bank-intrest') - localStorage.getItem('slime-bank-intrest') * 0.1;

    if (slime_coin_cap_1_level >= 1000000000) {slime_coin_cap_1_cost =     10000000000000000;} // 1.00+E16
    else if (slime_coin_cap_1_level >= 500000000) {slime_coin_cap_1_cost = 1000000000000000;} // 1.00+E15
    else if (slime_coin_cap_1_level >= 100000000) {slime_coin_cap_1_cost = 100000000000000;} // 100T
    else if (slime_coin_cap_1_level >= 50000000) {slime_coin_cap_1_cost =  10000000000000;} // 10T
    else if (slime_coin_cap_1_level >= 10000000) {slime_coin_cap_1_cost =  1000000000000;} // 1T
    else { slime_coin_cap_1_cost = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level') * 10000 + 10000;} // need to find solution for less than 10M upgrades

  document.getElementById('slime-bank-upgrade-slime-coin-cap-1-cost').value = convert(slime_coin_cap_1_cost);
  output = Math.round(intrest  / slime_coin_cap_1_cost);
  document.getElementById('slime-bank-optimiser').innerHTML = output;
}

function Slime_Bank_Slime_Coin_Cap_1(input) {
  input = convert2(input);

  if (input != localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level')) {
    output = sigma(0, input, function (a) {return a*20-10+10000;}, 10);
    document.getElementById('slime-bank-upgrade-slime-coin-cap-1-value').innerHTML = convert(output);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-level', input);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-value', output);
  } else {
    document.getElementById('slime-bank-upgrade-slime-coin-cap-1-value').innerHTML = convert(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-value'));
  }
  document.getElementById('slime-bank-upgrade-slime-coin-cap-1-level').value = convert(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level'));
  Slime_Bank_Gold_Cap_Total();
}
  
function Slime_Bank_Slime_Coin_Cap_2(input) {
  output = sigma(0, input, function (a) {return a*20-10;}, 10);
  localStorage.setItem('slime-bank-upgrade-slime-coin-cap-2-level', input);
  localStorage.setItem('slime-bank-upgrade-slime-coin-cap-2-value', output+100);
  document.getElementById('slime-bank-upgrade-slime-coin-cap-2-value').innerHTML = convert(output+100);
  document.getElementById('slime-bank-upgrade-slime-coin-cap-2-level').value = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level');
  Slime_Bank_Gold_Cap_Total();
}

function Slime_Bank_Research_Stone(input) {
  localStorage.setItem('slime-bank-research-stone-level', input);
  document.getElementById('slime-bank-research-stone-level').value = localStorage.getItem('slime-bank-research-stone-level');
  document.getElementById('slime-bank-research-stone-value').innerHTML = +(input * 0.1).toFixed(2);
  Slime_Bank_Intrest();
}

function Slime_Bank_Research_Leaf(input) {
  localStorage.setItem('slime-bank-research-leaf-level', input);
  document.getElementById('slime-bank-research-leaf-level').value = localStorage.getItem('slime-bank-research-leaf-level');
  document.getElementById('slime-bank-research-leaf-value').innerHTML = +(input * 2).toFixed(2)+100;
  Slime_Bank_Gold_Cap_Total();   
}


  