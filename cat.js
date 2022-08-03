const fs = require("fs");

const catFunc = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  if (cmd[0] === "cat") {
    const file = cmd[1];
    fs.readFile(
      `/Users/corumgold/Desktop/pair-exercise-node-shell/${file}`,
      "utf8",
      (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      }
    );
  }
  // process.stdout.write('You typed: ' + cmd)
  process.stdout.write("\nprompt > ");
});

module.exports.catFunc;
