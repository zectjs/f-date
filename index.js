'use strict';

function XDate(date) {
    var dat;
    if (!date) return new Date();

    if (date instanceof Date) {
        return date;
    } else if (/^\d+$/.exec(date)) {
        dat = new Date(parseInt(date));
    } else {
        try {
            var d = date.split(/[^0-9]/),
                i;
            for (i = 3; i < 6; i++) {
                d[i] = d[i] || 0;
            }
            dat = new Date(d[0] || 0, (d[1] - 1) || 0, d[2] || 0, d[3] || 0, d[4] || 0, d[5] || 0);
        } catch (e) {
            dat = new Date(date);
        }
    }
    return dat;
}

module.exports = function(date, template) {
    var dat;
    if (!date) return '';

    dat = XDate(date);

    var hours = dat.getHours(),
        minute = dat.getMinutes(),
        second = dat.getSeconds(),
        day = dat.getDate(),
        month = dat.getMonth() + 1;

    if (!template) {
        template = 'YY年MM月DD日 hh:mm:ss';
    }

    hours <= 9 && template.match('hh') && (hours = '0' + hours);
    minute <= 9 && (minute = '0' + minute);
    second <= 9 && (second = '0' + second);

    return template
        .replace(/["']/g, '')
        .replace('XMM', /^\d$/.exec(month) ? '0' + month : month)
        .replace('XDD', /^\d$/.exec(day) ? '0' + day : day)
        .replace('YY', dat.getFullYear())
        .replace('MM', month)
        .replace('DD', day)
        .replace(/hh|h/, hours)
        .replace('mm', minute)
        .replace('ss', second)
        .replace('WW', ['日', '一', '二', '三', '四', '五', '六'][dat.getDay()]);
}