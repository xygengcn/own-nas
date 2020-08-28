var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const upload = model("upload");
router.post('/', function(req, res, next) {
    upload(req).then(data => {
        res.send({
            code: 200,
            file: data
        });
    }).catch(err => {
        console.log(err);
        next(createError(404))
    })
});

module.exports = router;