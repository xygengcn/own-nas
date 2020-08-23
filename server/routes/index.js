const path = require("path");
const fs = require("fs");
var router = {}
router.all = function(filePath) {
    let routes = {};
    const fs = require("fs");
    var readDir = fs.readdirSync(filePath);
    readDir.forEach((el) => {
        let dirpath = path.join(filePath, el);
        if (fs.statSync(dirpath).isDirectory()) {
            routes[el] = require(dirpath)
        }
    })
    return routes;
}
module.exports = router;