"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
require("./style/button.css");
require("./JavaScript/index");
vue_1["default"].config.productionTip = false;
new vue_1["default"]({
    router: router_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount('#app');
