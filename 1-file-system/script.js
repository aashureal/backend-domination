const fs = require("fs");

// read file
// update file
// append file
// folder creation

// write file
fs.writeFile("efgh.txt", "Another File Created.", (err) => {
  if (err) throw err;
  console.log("File has been saved.");
});



