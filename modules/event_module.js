const fs = require('fs')
var readStream = fs.createReadStream('./demo.txt')
readStream.on('open',()=>{
    console.log("The file is open");
})