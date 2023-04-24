import { createRequire } from "module";
import fs from "fs";
import { Buffer } from "node:buffer";
import { Rfc2898DeriveBytes } from "./Rfc2898DeriveBytes.js";
const require = createRequire(import.meta.url);
const crypto = require("crypto");

let option = { encoding: "utf8", flag: "r" };
let data = fs.readFileSync("save.txt", option);
let dataArray = data.split("#");
let output = "";

function dencrypt(src) {
  let pw = "kkyyhka";
  let salt = "stkttnsstkttns";
  let rfc2898DeriveBytes = new Rfc2898DeriveBytes(pw, 20);
  rfc2898DeriveBytes.salt = salt;

  let key = rfc2898DeriveBytes.getBytes(16);
  let iv = rfc2898DeriveBytes.getBytes(16);

  let decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  let decoded = decipher.update(src, "base64", "ascii");
  decoded += decipher.final("ascii");
  console.log("decoding");
  return decoded;
}

for (let index = 0; index < dataArray.length; index++) {
  const element = dataArray[index];
  let output = dencrypt(element);
  let name = "data" + index + ".json";
  fs.writeFileSync(name, output);
}
// dataArray.forEach((element) => {
//   output += dencrypt(element);

//   // output += element + ",";
// });

// let output = data;
