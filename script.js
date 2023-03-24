function load() {
    if (localStorage.getItem('research-slime-bank-stone-level')) {
      document.getElementById('research-slime-bank-stone-level').value = localStorage.getItem('research-slime-bank-stone-level');
  }

    
    document.getElementById('research-slime-bank-leaf-level').value = localStorage.getItem('research-slime-bank-leaf-level');
    document.getElementById('upgrade-slime-bank-cap-1-level').value = localStorage.getItem('upgrade-slime-bank-cap-1-level');
    document.getElementById('upgrade-slime-bank-cap-2-level').value = localStorage.getItem('upgrade-slime-bank-cap-2-level');
    document.getElementById('upgrade-slime-bank-cap-1-cost').value = localStorage.getItem('upgrade-slime-bank-cap-1-cost');         
    Research_Slime_Bank_Stone(localStorage.getItem('research-slime-bank-stone-level'));
    Research_Slime_Bank_Leaf(localStorage.getItem('research-slime-bank-leaf-level'));
    Upgrade_Slime_Bank_Gold_Cap_1(localStorage.getItem('upgrade-slime-bank-cap-1-level'));
    Upgrade_Slime_Bank_Gold_Cap_2(localStorage.getItem('upgrade-slime-bank-cap-2-level'));
    Slime_Bank_Gold_Cap_Total();    
    Slime_Bank_Intrest();
    Slime_Bank_Optimiser();
    document.getElementById('upgrade-slime-bank-cap-1-value-new').innerHTML = convert(localStorage.getItem('upgrade-slime-bank-cap-1-value'));
    // console.log(key);
    // console.log(localStorage.getItem(key));
}

function restart() {
  window.localStorage.clear();
}


function convert(input) {
  input = parseFloat(input);
  var output = 0;
  if (1 < input > 1000) {
    output = input;
  }
    else if (1000000 < input > 1000) {
    output = Math.round(input / 1000) + 'K';
  } else if (1000000000 < input > 1000000) {
    output = Math.round(input / 1000000) + 'M';
  } else if (1000000000000 < input > 1000000000) {
    output = Math.round(input / 1000000000) + 'B';
  } else if (1000000000000000 < input > 100000000000) {
    output = Math.round(input / 1000000000000) + 'T';
  } 
   else {
    output = input.toExponential(2);
    // console.log('notacja naukowa');
  }

  return output;
}

function Slime_Bank_Gold_Cap_Total() {
  output = localStorage.getItem('upgrade-slime-bank-cap-1-value') * ((localStorage.getItem('research-slime-bank-leaf-level') * 2 + 100) / 100) * (localStorage.getItem('upgrade-slime-bank-cap-2-value') / 100);
  console.log(output);
  document.getElementById('slime-bank-gold-cap-value').innerHTML = convert(output);
}

function Slime_Bank_Intrest() {
  intrest = (document.getElementById('research-slime-bank-stone-level').value * 0.001 ) * document.getElementById('slime-bank-gold-cap-value').innerHTML 
  document.getElementById('slime-bank-intrest').innerHTML = convert(intrest);
}

function Slime_Bank_Optimiser() {
  console.log(document.getElementById('slime-bank-intrest').innerHTML);
  console.log(document.getElementById('upgrade-slime-bank-cap-1-cost').value);
  output = document.getElementById('slime-bank-intrest').innerHTML / document.getElementById('upgrade-slime-bank-cap-1-cost').value;
  document.getElementById('slime-bank-optimiser').innerHTML = output;
  console.log(output);
}

function Upgrade_Slime_Bank_Gold_Cap_1(input) {
  if (input != localStorage.getItem('upgrade-slime-bank-cap-1-level')) {
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
    document.getElementById('upgrade-slime-bank-cap-1-value').innerHTML = convert(output);
    localStorage.setItem('upgrade-slime-bank-cap-1-level', input);
    localStorage.setItem('upgrade-slime-bank-cap-1-value', output);
  } else {
    document.getElementById('upgrade-slime-bank-cap-1-value').innerHTML = convert(localStorage.getItem('upgrade-slime-bank-cap-1-value'));
  }
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
    document.getElementById('upgrade-slime-bank-cap-2-value').innerHTML = sum+100+'%';
    localStorage.setItem('upgrade-slime-bank-cap-2-level', input);
    localStorage.setItem('upgrade-slime-bank-cap-2-value', sum + 100);
    // return base + base * input + sum;
  
  }

  function Upgrade_Slime_Bank_Gold_Cap_1_Cost(input) {
    localStorage.setItem('upgrade-slime-bank-cap-1-cost', input);
  }


  function Research_Slime_Bank_Stone(input) {
    // output = +(input * 0.1).toFixed(8)+'%';
    document.getElementById('research-slime-bank-stone-value').innerHTML = +(input * 0.1).toFixed(8)+'%';
    localStorage.setItem('research-slime-bank-stone-level', input);
    // localStorage.setItem('research-slime-bank-stone-value', )
    
    // return +(input * 0.1).toFixed(8)
  }

  function Research_Slime_Bank_Leaf(input) {

    document.getElementById('research-slime-bank-leaf-value').innerHTML = +(input * 2).toFixed(8)+100+'%';
    localStorage.setItem('research-slime-bank-leaf-level', input);
    
    // return +(input * 0.1).toFixed(8)
  }