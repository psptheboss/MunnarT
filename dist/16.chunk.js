webpackJsonp([16,28],{

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #209e91; }\n    .auth-block a:hover {\n      color: #1b867b; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n\n.custom-bullet li {\n  display: block; }\n\n.custom-bullet li:before {\n  /*Using a Bootstrap glyphicon as the bullet point*/\n  content: \"\\E013\";\n  font-family: 'Glyphicons Halflings';\n  font-size: 15px;\n  float: left;\n  margin-top: 4px;\n  margin-left: -17px;\n  color: #41cf34; }\n\n.custom-bullet1 li {\n  display: block; }\n\n.custom-bullet1 li:before {\n  /*Using a Bootstrap glyphicon as the bullet point*/\n  content: \"\\E014\";\n  font-family: 'Glyphicons Halflings';\n  font-size: 15px;\n  float: left;\n  margin-top: 4px;\n  margin-left: -17px;\n  color: #c53131; }\n\n#mainDiv {\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-bottom: 0%; }\n\n#backBtn {\n  float: right;\n  margin-top: 5px; }\n\n#bulletDiv {\n  padding-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1045:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    </div>\r\n    <div class=\"auth-main\">\r\n        <div class=\"auth-block\">\r\n            <div class=\"col-md-6\" id=\"mainDiv\">\r\n                <div class=\"panel panel-transparent animated zoomIn\" zoom-in=\"\" >\r\n                  <div class=\"panel-heading\">Package Includes:</div>\r\n                  <div class=\"panel-body\" >\r\n                                  \r\n                    <ul class=\"custom-bullet\" style=\"width:100%\" id=\"bulletDiv\">\r\n                        <li> Accommodation for 2 adults for 3 Nights  and 4 Days</li>\r\n                        <br>\r\n                        <li> Sight seeing assistance</li>\r\n                        <br>\r\n                        <li> All must seeing spots in all destinations will be covered</li>\r\n                        <br>\r\n                        <li> Toll/parking/road tax/fuel charge</li>\r\n                        <br>\r\n                        <li> All applicable taxes and service charges</li>\r\n                        \r\n                    </ul>\r\n                   \r\n                  </div>\r\n                  </div></div>\r\n                  <div class=\"col-md-6\" id=\"mainDiv\">\r\n                    <div class=\"panel panel-transparent animated zoomIn\" zoom-in=\"\" >\r\n                      <div class=\"panel-heading\">Package Excludes:</div>\r\n                      <div class=\"panel-body\" >\r\n                                      \r\n                        <ul class=\"custom-bullet1\" id=\"bulletDiv\">\r\n                            <li>Travel/health insurance.</li>\r\n                            <br>\r\n                            <li>Camera/ Video charges.</li>\r\n                            <br>\r\n                            <li>Charges for early arrivals/ late departures.</li>\r\n                            <br>\r\n                            <li>Entrance fees to various sightseeing places.</li>\r\n                            \r\n                           \r\n                            \r\n                        </ul>\r\n                        <br>\r\n                            <input type=\"button\" (click)=\"closePop($event)\" class=\"btn btn-primary\" id=\"backBtn\" value=\"Back\">\r\n                            <a (click)=\"closePop($event)\" href=\"#\">\r\n                                For price and more information please send a query/Contact us. \r\n                            </a>\r\n                            \r\n                      </div>\r\n                      </div></div>\r\n    \r\n        </div>\r\n        </div>\r\n        \r\n    \r\n    "

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip001_component__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trip001_routing__ = __webpack_require__(987);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip001Module", function() { return Trip001Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Trip001Module = (function () {
    function Trip001Module() {
    }
    return Trip001Module;
}());
Trip001Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__trip001_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__trip001_component__["a" /* Trip001 */]
        ]
    })
], Trip001Module);

//# sourceMappingURL=trip001.module.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_validators__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trip001; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Trip001 = (function () {
    function Trip001(fb) {
        this.submitted = false;
        this.form = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__theme_validators__["a" /* EmailValidator */].validate])],
            'passwords': fb.group({
                'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)])],
                'repeatPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)])]
            }, { validator: __WEBPACK_IMPORTED_MODULE_2__theme_validators__["b" /* EqualPasswordsValidator */].validate('password', 'repeatPassword') })
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    Trip001.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    };
    Trip001.prototype.closePop = function (e) {
        setTimeout(function () {
            window.close();
        }, 100);
    };
    Trip001.prototype.closeWin = function (e) {
        if (confirm("Do you want to Send a Query?")) {
            setTimeout(function () {
                window.close();
            }, 1000);
            if (window.closed == true) {
                console.log("working");
            }
        }
        else {
            console.log("NW");
        }
    };
    Trip001.prototype.winClosed = function (e) {
    };
    return Trip001;
}());
Trip001 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'trip001',
        template: __webpack_require__(1045),
        styles: [__webpack_require__(1016)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], Trip001);

var _a;
//# sourceMappingURL=trip001.component.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trip001_component__ = __webpack_require__(964);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__trip001_component__["a" /* Trip001 */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=trip001.routing.js.map

/***/ })

});
//# sourceMappingURL=16.chunk.js.map