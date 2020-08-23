const path = require("path")
var model = function(model) {
    return require(path.join(__dirname, model));
}
module.exports = model;