const fs = require("fs");
const path = require("path")

function mkdirsSync(dirname, callback = () => {}) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
    callback();
}

function rm(path) {
    var files = [];
    try {
        if (fs.existsSync(url)) {
            files = fs.readdirSync(url);
            files.forEach(function(file, index) {
                var curPath = path.join(url, file);
                if (fs.statSync(curPath).isDirectory()) {
                    rm(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(url);
            return true;
        } else {
            throw { error: "给定的路径不存在，请给出正确的路径" };
        }
    } catch (err) {
        return err;
    }
}

function mv(oldpath, newpath) {
    return new Promise((resolve, reject) => {
        fs.rename(oldpath, newpath, function(err) {
            if (err) {
                return reject(err)
            }
            return resolve(true);
        });
    })

}

function time(format = "yyyy-MM-dd HH:mm:ss", timestamp) {
    var date = timestamp ? new Date(timestamp) : new Date();
    var timeStamp = new Date().getTime();
    var year = String(date.getFullYear()).padStart(4, "0"); //获取当前年份
    var month = String(date.getMonth() + 1).padStart(2, "0"); //获取当前月份
    var day = String(date.getDate()).padStart(2, "0"); //获取当前日 
    var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    var weekday = weekdays[date.getDay()]; //获取当前星期几
    var hour = String(date.getHours()).padStart(2, "0"); //获取小时
    var minute = String(date.getMinutes()).padStart(2, "0"); //获取分钟
    var second = date.getSeconds().toString().padStart(2, "0"); //获取秒
    if (format) {
        return format.replace("yyyy", year).replace("MM", month).replace("dd", day).replace("HH", hour).replace("mm", minute).replace("ss", second).replace("day", weekday);
    }
    return timeStamp;
}
module.exports = {
    time,
    mkdirsSync,
    mv,
    rm
}