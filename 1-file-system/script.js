const fs = require("fs");

// **************************
//          Files
// **************************

// 1. Write File
fs.writeFile("./files/f3.txt", "This is my third note.", (err) => {
  if (err) throw err;
  console.log("File created and written!");
});

// Append File
fs.appendFile("./files/f1.txt", "\nAdding one more line.", (err) => {
  if (err) throw err;
  console.log("Content added to file!");
});

// Read File
fs.readFile("./files/f1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename("./files/f2.txt", "newName.txt", (err) => {
  if (err) throw err;
  console.log("File Deleted!");
});

// Delete File
fs.unlink("./files/f3.txt", (err) => {
  if (err) throw err;
  console.log("File deleted.");
});

// **************************
//          Folder
// **************************

// 1. Folder Creation
fs.mkdir("./folder2", (err) => {
  if (err) throw err;
  console.log("Folder Created!");
});

// 2. Read Folder
fs.readdir("./myFolder", (err, files) => {
  if (err) throw err;
  console.log(`Folder Content ${files}`);
});

// 3. Delete Folder
fs.rmdir("folder2", (err) => {
  if (err) throw err;
  console.log("Folder deleted!");
});
