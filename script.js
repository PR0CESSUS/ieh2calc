function load() {


    if (localStorage.getItem('slime-bank-research-stone-level')) {
      document.getElementById('slime-bank-research-stone-level').value = localStorage.getItem('slime-bank-research-stone-level');
      Research_Slime_Bank_Stone(localStorage.getItem('slime-bank-research-stone-level'));
  } else {Research_Slime_Bank_Stone(0);}

    if (localStorage.getItem('slime-bank-research-leaf-level')) {
      document.getElementById('slime-bank-research-leaf-level').value = localStorage.getItem('slime-bank-research-leaf-level');
      Research_Slime_Bank_Leaf(localStorage.getItem('slime-bank-research-leaf-level'));
    } else {Research_Slime_Bank_Leaf(0);}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level')) {
      document.getElementById('slime-bank-upgrade-slime-coin-cap-1-level').value = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level');
      Upgrade_Slime_Bank_Gold_Cap_1(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level'));
    } else {Upgrade_Slime_Bank_Gold_Cap_1(0);}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level')) {
      document.getElementById('slime-bank-upgrade-slime-coin-cap-2-level').value = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level');
      Upgrade_Slime_Bank_Gold_Cap_2(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-level'));
    } else {Upgrade_Slime_Bank_Gold_Cap_2(0);}

    if (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-cost')) {
      document.getElementById('slime-bank-upgrade-slime-coin-cap-1-cost').value = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-cost'); 
    } else {}

        
    
    

    Slime_Bank_Gold_Cap_Total();    
    Slime_Bank_Intrest();
    Slime_Bank_Optimiser();
    // document.getElementById('upgrade-slime-bank-cap-1-value-new').innerHTML = convert(localStorage.getItem('upgrade-slime-bank-cap-1-value'));
    // console.log(key);
    // console.log(localStorage.getItem(key));
}

function restart() {
  window.localStorage.clear();
}


function convert(input) {
  input = parseFloat(input);
  // console.log(input);
  var output = 0;
  if (input <= 1000) {output = Math.round(input);}
    else if (input <= 1000000) {output = (input / 1000).toFixed(2) + 'K';}
    else if (input <= 1000000000) {output = (input / 1000000).toFixed(2) + 'M';}
    else if (input <= 1000000000000) {output = (input / 1000000000).toFixed(2) + 'B';}
    else if (input <= 1000000000000000) {output = (input / 1000000000000).toFixed(2) + 'T';}
    else {output = input.toExponential(2);}

  return output; 
}

function Slime_Bank_Gold_Cap_Total() {
  output = localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-value') * ((localStorage.getItem('slime-bank-research-leaf-level') * 2 + 100) / 100) * (localStorage.getItem('slime-bank-upgrade-slime-coin-cap-2-value') / 100);
  localStorage.setItem('slime-bank-slime-coin-cap-total', output);
  document.getElementById('slime-bank-slime-coin-cap-value').innerHTML = convert(output);
}

function Slime_Bank_Intrest() {
  intrest = (document.getElementById('slime-bank-research-stone-level').value * 0.001 ) * localStorage.getItem('slime-bank-slime-coin-cap-total');
  localStorage.setItem('slime-bank-intrest', intrest);
  document.getElementById('slime-bank-intrest').innerHTML = convert(intrest);
}

function Slime_Bank_Optimiser() {

  output = localStorage.getItem('slime-bank-intrest') / document.getElementById('slime-bank-upgrade-slime-coin-cap-1-cost').value;
  document.getElementById('slime-bank-optimiser').innerHTML = output;
}

function Upgrade_Slime_Bank_Gold_Cap_1(input) {
  if (input != localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-level')) {
    var base = 10000;
    var i = 1;
    var buffer = -10;
    var sum = 0;
  
    while (i <= input) {
      buffer += 20;
      sum += buffer;
      i++;
  }
    output = base + base * input + sum;
    document.getElementById('slime-bank-upgrade-slime-coin-cap-1-value').innerHTML = convert(output);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-level', input);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-value', output);
  } else {
    document.getElementById('slime-bank-upgrade-slime-coin-cap-1-value').innerHTML = convert(localStorage.getItem('slime-bank-upgrade-slime-coin-cap-1-value'));
  }
  Slime_Bank_Gold_Cap_Total();
  }
  
  function Upgrade_Slime_Bank_Gold_Cap_2(input) {
    var base = 10000;
    var i = 1;
    var buffer = -10;
    var sum = 0;
  
    while (i <= input) {
      buffer += 20;
      sum += buffer;
      i++;
  }
    document.getElementById('slime-bank-upgrade-slime-coin-cap-2-value').innerHTML = sum+100+'%';
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-2-level', input);
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-2-value', sum + 100);
    // return base + base * input + sum;
    Slime_Bank_Gold_Cap_Total();
  }

  function Slime_Bank_Upgrade_Slime_Coin_Cap_1_Cost(input) {
    localStorage.setItem('slime-bank-upgrade-slime-coin-cap-1-cost', input);
  }


  function Research_Slime_Bank_Stone(input) {
    document.getElementById('slime-bank-research-stone-value').innerHTML = +(input * 0.1).toFixed(8)+'%';
    localStorage.setItem('slime-bank-research-stone-level', input);
    Slime_Bank_Intrest();
  }

  function Research_Slime_Bank_Leaf(input) {
    document.getElementById('slime-bank-research-leaf-value').innerHTML = +(input * 2).toFixed(8)+100+'%';
    localStorage.setItem('slime-bank-research-leaf-level', input);
    Slime_Bank_Gold_Cap_Total();   
  }