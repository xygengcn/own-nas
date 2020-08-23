var express = require('express');
var router = express.Router();
const upload = model("upload");
router.post('/', function(req, res) {
    upload(req).then(data => {
        res.send({
            code: 200,
            file: data
        });
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;