const formidable = require("formidable")
const path = require("path")
const { time, mkdirsSync, mv, rm } = require(path.join(__dirname, "../../utils"));

module.exports = (req, filepath) => {
    var form = new formidable.IncomingForm()
    form.uploadDir = path.join(__dirname, "../../upload");
    form.keepExtensions = true;
    form.multiples = true;
    return new Promise((res, rej) => {
        form.parse(req, function(err, fields, files) {
            let ext = path.extname(files.file.name)
            let name = Math.random().toString(36).substr(-8) + ext
            let namepath = time("/yyyy/MM/dd/")
            let dirpath = path.join(form.uploadDir, namepath)
            mkdirsSync(dirpath, mv(files.file.path, path.join(dirpath, name)).then(() => {
                files.file.path = path.join(req.headers.host + namepath + name);
                res(files.file)
            }).catch((err) => {
                if (err) {
                    console.error(err);
                    rej(err);
                }
            }))
        })
    })
}