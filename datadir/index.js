const os = require('os');
const fs = require('fs');

if (require('os').platform == "win32") {
    dp = __dirname.split("\\");
    dp.pop();
    dn = dp.join("\\");
    if (!require('fs').existsSync(dn + "\\data")) {
        require('fs').mkdirSync(dn + "\\data");
    }
    module.exports = dn + "\\data";
} else {
    dp = __dirname.split("/");
    dp.pop();
    dn = dp.join("/");
    if (!require('fs').existsSync(dn + "/data")) {
        require('fs').mkdirSync(dn + "/data");
    }
    module.exports = dn + "/data";
}