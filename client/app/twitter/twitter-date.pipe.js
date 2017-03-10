"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TwitterDateWithTimePipe = (function () {
    function TwitterDateWithTimePipe() {
    }
    TwitterDateWithTimePipe.prototype.transform = function (date) {
        if (isExpectedDateFormat(date)) {
            var dateArray = date.split(" ");
            dateArray.splice(4, 1);
            return dateArray.join(" ");
        }
        return "Not Available";
    };
    return TwitterDateWithTimePipe;
}());
TwitterDateWithTimePipe = __decorate([
    core_1.Pipe({ name: 'twitterDateWithTime' })
], TwitterDateWithTimePipe);
exports.TwitterDateWithTimePipe = TwitterDateWithTimePipe;
function isExpectedDateFormat(date) {
    var dateArray = date.split(" ");
    return dateArray.length === 6 &&
        (dateArray[3].match(/:/g)).length === 2 &&
        dateArray[4].charAt(0) === "+";
}
//# sourceMappingURL=twitter-date.pipe.js.map