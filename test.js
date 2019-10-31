var cards = [{
    name: "魏无羡",
    weight: 10,
    data: [70, 25, 5]
}, {
    name: "蓝忘机",
    weight: 30,
    data: [70, 25, 5]
}, {
    name: "江澄",
    weight: 30,
    data: [70, 25, 5]
}, {
    name: "蓝曦臣",
    weight: 10,
    data: [70, 25, 5]
}, {
    name: "金光瑶",
    weight: 20,
    data: [70, 25, 5]
}, ]

var weightMap = {
    level: [98, 1, 1],
    R: [1, 30, 30, 19, 20],
    SR: [10, 30, 30, 10, 20],
    SSR: [10, 30, 30, 10, 20]
}

var gems = [{
    type: 0,
    name: "蓝宝石",
    weight: 10,
    index: 1
}, {
    type: 1,
    name: "蓝砖石",
    weight: "max",
    index: 1
}, {
    type: 2,
    name: "紫宝石",
    weight: 10,
    index: 2
}, {
    type: 3,
    name: "紫砖石",
    weight: "max",
    index: 2
}, ]



var person = {
    count: 20,
    gems: [{
        type: 0,
        count: 0
    }, {
        type: 1,
        count: 0
    }, {
        type: 2,
        count: 0
    }, {
        type: 3,
        count: 0
    }]
}
var personTotal = 1000;
var personCard = {
    "蓝忘机_R": 1
}

var result = [];


new Array(personTotal).fill(person).forEach(item => {
    result.push(draws(item))
})

var resultPerson = {};
["R", "SR", "SSR"].forEach(level => {
    let obj = {}
    let data = result.map(item => item[level]).filter(item => {
        return Object.keys(item).length === 5
    })
    obj["总共集齐人数"] = data.length;
    obj["集齐一套人数"] = getCount(data, 1);
    obj["集齐两套人数"] = getCount(data, 2);
    obj["集齐三套人数"] = getCount(data, 3);
    obj["集齐四套及以上人数"] = getCount(data, 4, true);
    resultPerson[level] = obj
})



function getCount(data, num, flag) {
    return data.filter(item => {
        let keys = Object.keys(item);
        return keys.every(key => {
            return item[key] >= num
        }) && (flag || keys.some(key => {
            return item[key] === num
        }))
    }).length
}



console.log(result)
console.log("参与人数", personTotal)
console.log(resultPerson)

function draws(person) {
    let personResult = {
        "R": {},
        "SR": {},
        "SSR": {}
    }
    let gems = person.gems.sort((a, b) => a.type - b.type).reduce((total, item) => {
        return item.count ? total.concat(new Array(item.count).fill(item.type)) : total
    }, [])

    new Array(person.count).fill(0).forEach(() => {
        let card = draw(gems.pop());
        if (personResult[card.level][card.name]) {
            personResult[card.level][card.name]++
        } else {
            personResult[card.level][card.name] = 1
        }
    })
    return personResult;
}

//抽奖
function draw(gemIndex) {
    let levelWeight = [...weightMap.level];
    if (gemIndex !== undefined) {
        let gem = gems[gemIndex];
        if (gem.weight === "max") { //必中
            levelWeight.fill(0)[gem.index] = 1;
        } else { //增加权重
            levelWeight[gem.index] += gem.weight
        }
    }
    let levelIndex = getRandomIndexByWeight(levelWeight);
    let seriesWeight = weightMap[["R", "SR", "SSR"][levelIndex]];
    // console.log("系列权重",seriesWeight)
    let seriesIndex = getRandomIndexByWeight(seriesWeight);
    return {
        name: cards[seriesIndex].name,
        level: ["R", "SR", "SSR"][levelIndex]
    }
}


function getRandomIndexByWeight(weights) { //根据权重随机 weights = [1,2,3,2,4]  权重  返回随机的权重索引
    let total = weights.reduce((sum, item) => sum + item); //所有权重
    let result = random(1, total);
    let index = 0;
    let sum = 0;
    weights.some((item, _index) => {
        sum += item;
        if (result <= sum) {
            index = _index;
            return true
        }
        return false
    })
    return index
}


function random(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min
}






define("kundian_farm/pages/template/calendarTemplate/calendarTemplate.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var app = new getApp,
        conf = { getThisMonthDays: function(a, t) {
                return new Date(a, t, 0).getDate() }, getFirstDayOfWeek: function(a, t) {
                return new Date(Date.UTC(a, t - 1, 1)).getDay() }, getNowday: function() {
                var a = new Date;
                return a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate() }, calculateEmptyGrids: function(a, t) {
                var e = conf.getFirstDayOfWeek(a, t),
                    n = [];
                if (0 < e) {
                    for (var r = 0; r < e; r++) n.push(r);
                    this.setData({ "calendar.hasEmptyGrid": !0, "calendar.empytGrids": n }) } else this.setData({ "calendar.hasEmptyGrid": !1, "calendar.empytGrids": [] }) }, calculateDays: function(a, t) {
                var e = [],
                    n = conf.getThisMonthDays(a, t),
                    r = conf.getNowday();
                r = new Date(r);
                for (var s = 1; s <= n; s++) {
                    var c = a + "/" + t + "/" + s;
                    c = new Date(c);
                    var d = void 0;
                    d = !(0 < r.getTime() - c.getTime()), e.push({ day: s, choosed: !1, size: d, sign: !1 }) }
                this.setData({ "calendar.days": e }) }, handleCalendar: function(a) {
                var t = a.currentTarget.dataset.handle,
                    e = this.data.calendar.curYear,
                    n = this.data.calendar.curMonth,
                    r = 0,
                    s = 0; "prev" === t ? (s = e, (r = n - 1) < 1 && (s = e - 1, r = 12)) : (s = e, 12 < (r = n + 1) && (s = e + 1, r = 1)), conf.calculateDays.call(this, s, r), conf.calculateEmptyGrids.call(this, s, r), this.setData({ "calendar.curYear": s, "calendar.curMonth": r });
                var c = wx.getStorageSync("kundian_farm_uid"),
                    d = app.siteInfo.uniacid,
                    i = this,
                    o = i.data.calendar;
                app.util.request({ url: "entry/wxapp/class", data: { control: "sign", op: "getChangeSign", uid: c, uniacid: d, year: s, month: r }, success: function(a) {
                        if (console.log(a), a.data.signData) {
                            for (var t = a.data.signData, e = 0; e < o.days.length; e++)
                                for (var n = 0; n < t.length; n++) o.days[e].day == t[n].day && (o.days[e].choosed = !0, o.days[e].sign = !0);
                            i.setData({ calendar: o }) } } }) }, tapDayItem: function(a) {
                var t = a.currentTarget.dataset.idx,
                    e = this.data.calendar.days,
                    n = this.data.calendar.curYear + "/" + this.data.calendar.curMonth + "/" + e[t].day;
                console.log(n), n = new Date(n);
                var r = conf.getNowday();
                if ((r = new Date(r)).getTime() - n.getTime() == 0) { e[t].choosed = !e[t].choosed, this.setData({ "calendar.days": e });
                    var s = this.data.calendar.curYear,
                        c = this.data.calendar.curMonth,
                        d = e[t].day,
                        i = wx.getStorageSync("kundian_farm_uid"),
                        o = app.siteInfo.uniacid,
                        l = this;
                    app.util.request({ url: "entry/wxapp/class", data: { control: "sign", op: "addSign", uid: i, uniacid: o, year: s, month: c, day: d }, success: function(a) { console.log(a), 1 == a.data.code ? (wx.showToast({ title: "签到成功" }), l.setData({ userData: a.data.userData, is_sign: 1 })) : 2 == a.data.code ? wx.showToast({ title: "签到失败" }) : 3 == a.data.code ? wx.showToast({ title: "今日已签到" }) : wx.showToast({ title: "签到失败1" }) } }) } } };

    function _getCurrentPage() {
        var a = getCurrentPages();
        return a[a.length - 1] }
    exports.default = function() {
        var a = _getCurrentPage(),
            t = new Date,
            e = t.getFullYear(),
            n = t.getMonth() + 1;
        a.setData({ calendar: { curYear: e, curMonth: n, weeksCh: ["日", "一", "二", "三", "四", "五", "六"], hasEmptyGrid: !1 } }), conf.calculateEmptyGrids.call(a, e, n), conf.calculateDays.call(a, e, n), a.tapDayItem = conf.tapDayItem.bind(a), a.handleCalendar = conf.handleCalendar.bind(a) };
});
