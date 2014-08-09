/**
 * Created by Victor on 2014/8/9.
 */
/*jslint node:true, nomen: true, unparam: true*/
'use strict';
var wechat = require('wechat'),
    myweixin = require('../myweixin');
module.exports = function (message, req, res, next) {
    // message为文本内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125035',
    // MsgType: 'text',
    // Content: 'http',
    // MsgId: '5837397576500011341' }
    console.log(JSON.stringify(message));
//    myweixin.api.getUser(message.FromUserName, function () {
//        console.log(111);
//    });
    res.reply([
        {
            title: '欢迎光临',
            description: JSON.stringify(message),
            picurl: 'http://image.tianjimedia.com/uploadImages/2012/313/92X936E4W266_1000x500.jpg',
            url: 'http://baike.baidu.com/view/9209.htm'
        }
    ]);
};