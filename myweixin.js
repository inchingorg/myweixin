/**
 * Created by Victor on 2014/8/9.
 */
/*jslint node:true, nomen: true, unparam: true*/
'use strict';
var wechat = require('wechat'),
    settings = require('./settings'),
    api = new wechat.API(settings.weixin.appid, settings.weixin.secret);

var handleApp = function (app) {
    app.use('/wechat', wechat(settings.weixin.token, wechat.text(function (message, req, res, next) {
        require('./wxHandlers/textHandler')(message, req, res, next);
    }).image(function (message, req, res, next) {
        require('./wxHandlers/imageHandler')(message, req, res, next);
    }).voice(function (message, req, res, next) {
        require('./wxHandlers/voiceHandler')(message, req, res, next);
    }).video(function (message, req, res, next) {
        require('./wxHandlers/videoHandler')(message, req, res, next);
    }).location(function (message, req, res, next) {
        require('./wxHandlers/locationHandler')(message, req, res, next);
    }).link(function (message, req, res, next) {
        require('./wxHandlers/linkHandler')(message, req, res, next);
    }).event(function (message, req, res, next) {
        require('./wxHandlers/eventHandler')(message, req, res, next);
    })));
};

exports.api = api;
exports.handleApp = handleApp;