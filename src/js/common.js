function addEvent(id, event, callback) {
  document.getElementById(id).addEventListener(event, callback);
}

function changeTab(event) {
  localStorage.setItem("currentTab", event.target.id);

  if (event.target.id == "changelog") {
    let version = document.getElementById("version").innerHTML;
    if (localStorage.getItem("version") === null || localStorage.getItem("version") === "null" || localStorage.getItem("version") != version) {
      localStorage.setItem("version", version);
      document.getElementById("changelog").classList.remove("menu-button-warning");
    }
  }
  document.location.reload();
}

async function loadTab(tab) {
  let myHeaders = new Headers();
  // https://pro-cess-us.github.io/ieh2calc/
  // https://github.com/pro-cess-us/ieh2calc/raw/master/html/slimeBank.html
  // let file = "../html/" + tab + ".html";
  let file = "./html/" + tab + ".html";
  if (window.location.host != "127.0.0.1:3000") {
    file = "https://pr0cessus.github.io/ieh2calc/html/" + tab + ".html";
  }

  let options = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
  };

  return fetch(file, options).then((response) => response.text());
}

function sigma(lowerBound, upperBound, iterator, accumulator = 0) {
  // let accumulator = 0;
  for (let i = lowerBound; i <= upperBound; ++i) {
    accumulator += iterator(i);
  }
  return accumulator;
}

// convert normal number to K,M,B,T and exponential
function convert(input) {
  input = parseFloat(input);
  var output = 0;
  if (input == 0) {
    output = 0;
  } else if (input <= 10000) {
    output = Math.round(input);
  } else if (input < 1000000) {
    output = (input / 1000).toFixed(2) + "K";
  } else if (input < 1000000000) {
    output = (input / 1000000).toFixed(2) + "M";
  } else if (input < 1000000000000) {
    output = (input / 1000000000).toFixed(3) + "B";
  } else if (input < 1000000000000000) {
    output = (input / 1000000000000).toFixed(2) + "T";
  } else {
    output = input.toExponential(2);
  }

  return output;
}

// convert k,m,b,t to normal numbers
function convert2(input) {
  input = input.replace(/,/g, "."); // convert , to .
  if (/^\d*\.?\d+$/.test(input)) {
    return parseFloat(input);
  } // return rounded number if there is no abbreviete
  else {
    const regex = /(.*)(\D)$/gm;
    input = input.toLowerCase();
    input = input.replace(/ /g, ""); // removes all spaces

    input = regex.exec(input);
    let output = 0;
    if (input[2] == "t") {
      output = input[1] * 1000 ** 4;
    } else if (input[2] == "b") {
      output = input[1] * 1000 ** 3;
    } else if (input[2] == "m") {
      output = input[1] * 1000 ** 2;
    } else if (input[2] == "k") {
      output = input[1] * 1000 ** 1;
    }

    return parseFloat(output);
  }
}

function secondsToDhms(seconds) {
  seconds = parseInt(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  return `${d}d ${h}:${m}:${s}`;
}

export { convert, convert2, sigma, changeTab, loadTab, addEvent, secondsToDhms };
