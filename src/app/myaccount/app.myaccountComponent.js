"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var valid_form_1 = require("./valid-form");
var myaccountComponent = (function () {
    function myaccountComponent() {
        this.powers = ['', 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.model = new valid_form_1.Validform(18, '', this.powers[0], '');
        this.submitted = false;
    }
    myaccountComponent.prototype.onSubmit = function () { this.submitted = true; };
    myaccountComponent.prototype.newHero = function () {
        this.model = new valid_form_1.Validform(42, '', '', '');
    };
    return myaccountComponent;
}());
myaccountComponent = __decorate([
    core_1.Component({
        // selector: '',
        templateUrl: 'app/myaccount/myaccount.html',
    })
], myaccountComponent);
exports.myaccountComponent = myaccountComponent;
//# sourceMappingURL=app.myaccountComponent.js.map