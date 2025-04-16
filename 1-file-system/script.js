const fs = require("fs");

// update file
// append file
// folder creation

// write file
// fs.writeFile("efgh.txt", "Another File Created.", (err) => {
  //   if (err) throw err;
//   console.log("File has been saved.");
// });




// read file
fs.readFile('abcd.txt', 'utf8', (err, data)=>{
  if(err) throw err;
  console.log(data);
})