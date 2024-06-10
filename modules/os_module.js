const os = require('os');
 
console.log("Platform: " + os.platform());
console.log("CPU architecture: " + os.arch());
console.log("CPU's " + os.cpus().length);
console.log("Free memory: " + os.freemem());
console.log("Total memory: " + os.totalmem());
console.log("User info: " + os.userInfo().username);
