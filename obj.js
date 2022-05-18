"use strict";
/*
 * src      : obj.ts
 * job      : generic TypeScript object
 * git      : https://github.com/pffy/hanyupinyin-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
exports.HanyuPinyin = void 0;
var hpdx_ts_1 = require("hpdx-ts");
var HanyuPinyin = /** @class */ (function () {
    function HanyuPinyin() {
        this.input = '';
        this.text = '';
    }
    HanyuPinyin.prototype.setInput = function (str) {
        this.input = str;
        this.text = str;
        this.convert();
        return this;
    };
    HanyuPinyin.prototype.convert = function () {
        for (var h in hpdx_ts_1.IdxHanyuPinyin.hpdx) {
            this.text = this.text.replace((new RegExp(h, 'g')), ' ' + hpdx_ts_1.IdxHanyuPinyin.hpdx[h] + ' ');
        }
        this.text = this.text.replace((new RegExp('[^\\S\\n]{2,}', 'g')), ' ').trim();
    };
    HanyuPinyin.prototype.toString = function () {
        return this.text;
    };
    return HanyuPinyin;
}());
exports.HanyuPinyin = HanyuPinyin;
