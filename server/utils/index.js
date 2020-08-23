const fs = require("fs");


function mkdir(paths, callback = () => {}) {
    paths = paths.split('/');
    let index = 1;

    function next() {
        if (index === paths.length + 1) return callback();
        let dirPath = paths.slice(0, index++).join('/');
        fs.access(dirPath, err => {
            if (err) {
                fs.mkdir(dirPath, next);
            } else {
                next();
            }
        })
    }
    next();
}

function mv(oldpath, newpath, callback = () => {}) {
    fs.rename(oldpath, newpath, function(err) {
        if (err) {
            return callback(err, "");
        }
        return callback(err, newpath);
    });
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
    mkdir,
    mv
}