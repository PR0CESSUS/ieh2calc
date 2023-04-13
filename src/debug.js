// for (const [key, value] of Object.entries({ ...localStorage })) {
//   // console.log(`${key}: ${value}`);
//   console.log(`${key}: ${value}`);
// }

// var testObject = { one: 1, two: 2, three: 3 };

// Put the object into storage
// localStorage.setItem("testObject", JSON.stringify(testObject));

// Retrieve the object from storage
// var retrievedObject = localStorage.getItem("testObject");

// console.log("retrievedObject: ", JSON.parse(localStorage));

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  // start up your app
  injectDebuggingTools();
  loadFromFile();
});

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
  document.querySelector("#file-input").addEventListener("change", function () {
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function (e) {
      let text = e.target.result;
      //   document.querySelector("#file-contents").textContent = text;
      console.log(JSON.parse(text));
      for (const [key, value] of Object.entries({ ...JSON.parse(text) })) {
        // console.log(`${key}: ${value}`);
        localStorage.setItem(key, value);
        location.reload();
        // console.log(`${key}: ${value}`);
      }
    });
    reader.readAsText(file);
  });
}

function injectDebuggingTools() {
  html =
    '<form><fieldset><legend>Debugging Tools</legend><input type="button" value="Clear localStorage" onclick="restart()"><input type="button" value="Save data to file" onclick="saveToFile()"><label for="file-input" id="file-input-label">Load data from file</label><input type="file" id="file-input" accept=".json" style="display: none;" /></fieldset></form>';
  document.getElementById("footer").innerHTML += html;
}

// function displayContents(contents) {
//   var element = document.getElementById("file-content");
//   element.textContent = contents;
// }

// document.getElementById("file-input").addEventListener("changes", loadFromFile);
