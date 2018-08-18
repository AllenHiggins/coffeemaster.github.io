(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Models/card.model */ "./src/assets/Models/card.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardService = /** @class */ (function () {
    function CardService() {
        this.cardList = [];
        this.cardList = [
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Cappuccino', 'Usage of the Internet is becoming more common due to rapid advance.', 49),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Americano', 'Usage of the Internet is becoming more common due to rapid advance.', 52),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Espresso', 'Usage of the Internet is becoming more common due to rapid advance.', 90),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Macchiato', 'Usage of the Internet is becoming more common due to rapid advance.', 49),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Mocha', 'Usage of the Internet is becoming more common due to rapid advance.', 49),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Coffee Latte', 'Usage of the Internet is becoming more common due to rapid advance.', 38),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Piccolo Latte', 'Usage of the Internet is becoming more common due to rapid advance.', 40),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Ristretto', 'Usage of the Internet is becoming more common due to rapid advance.', 42),
            new _assets_Models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"]('Affogato', 'Usage of the Internet is becoming more common due to rapid advance.', 39),
        ];
    }
    CardService.prototype.getCardList = function () {
        return this.cardList;
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/Services/review.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_Models_review_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/Models/review.Model */ "./src/assets/Models/review.Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewService = /** @class */ (function () {
    function ReviewService() {
        this.reviews = [];
        this.reviews = [
            new _assets_Models_review_Model__WEBPACK_IMPORTED_MODULE_1__["Review"]('assets/images/r1.png', 'lorem ipusm', 3, 'Accessories Here you can find the best computer accessory for your laptop,\
        monitor, printer, scanner, speaker. Here you can find the best computer accessory\
        for your laptop, monitor, printer, scanner, speaker.'),
            new _assets_Models_review_Model__WEBPACK_IMPORTED_MODULE_1__["Review"]('assets/images/r2.png', 'lorem ipusm', 2, 'Accessories Here you can find the best computer accessory for your laptop,\
        monitor, printer, scanner, speaker. Here you can find the best computer accessory\
          for your laptop, monitor, printer, scanner, speaker.')
        ];
    }
    ReviewService.prototype.getReviews = function () {
        return this.reviews;
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/app/Services/stats.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/stats.service.ts ***!
  \*******************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsService = /** @class */ (function () {
    function StatsService() {
        this.stats = {};
        this.stats = {
            'happyClients': 2536,
            'totalProjects': 7562,
            'cupsOfCoffee': 2013,
            'totalSubmitted': 10536
        };
    }
    StatsService.prototype.getStats = function () {
        return this.stats;
    };
    StatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{\n  padding-top: 6em;\n}\n\n.video{\n  background-image: url('video-bg.jpg');\n  background-size: cover;\n  background-position-x: -27px;\n  width: 80%;\n  min-height: 311px;\n  display: block;\n  margin: auto;\n  border-radius: 30px;\n  margin-bottom: 3em;\n}\n\n.overlay{\n  background-color: #222222;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZThjMTE2MS05YjA5LTQ0ODMtOTRjMy0xMzViNzE4OTNlODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFERTM2OEIwNzIxMTFFODkzNjNFREYyMUE5MzVDRUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFERTM2OEEwNzIxMTFFODkzNjNFREYyMUE5MzVDRUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZmYyNzI1MC1iODVjLTQ0NzMtYmUyYi01OTEzZjAxOTQ5NzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YTlmZWJmYy0zNjVkLTExN2ItOGNmMC05NmE2NzdiNjI4NWUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5CQdCqAAAFVElEQVR42syaeWwUdRTHZweK4UgbVDwCBQICRVriRWLEihIVvBMPFBUiRkk8UIOx4vGPxihVY6LUOwIexAs14oGJERQ88aAqUqmCRYMSxXpQqFJp/b7ymTgdu9vZ2Zndfckns9vuzu999/fm997vzaTa1jhx2RAxWRwhxojhYl/RX3wmjnIStN45fn+omCGmi3EZPtfXSdiiCqkSN4pzRC/+1iLeER+Jr0Wj+E1s51hUQixUasUskRL/iJfF4+J18bdTIMtGyFniYbEPAhYhamNCvu0tRoqPw3zYDfGZErFALEXEanGomJ2gCLOFYg0/Xp9chfQndK5kFuaJSWJdHqLlGdHGD7ZclGb6cCrD8ttPvMmyuY3QWpXn0Lfl/HnC7EMxVfyRzYz04RcxEVtEdQFEmK3Ah5/FkeLFdGGWTsjd4jTUn8RyWijbII4XvzJDC8IKOVPMIT5PFV86hTfz4Qyxi2vm/J6E7C8e5fXN4l2neOw9UcPrOnFgJiG1XFh2PdzlFJ/dJ1aKgUH/3EDZMZOQukJ0ZDmIheMj1F9Jmfl0FanAwuvw7oTcQNmxMGKeuFZcKhrETWGSWERbR/inGKdLHrFf8TvRTgm+KcIAmwOz8a24mhosbjuI1cyhjGnyZuRCZufViCL8dhkibLDXqAxGxizEzv8KPs/yh9YFHJ+MYRCbgUpWvVZxOsvnLTHvSxZznOaFlu3sfmDQgTmU4l5oDRPf+zZe91DemDWJueKlGIT0JUnacYRLtnTIGXHvJ0zQ2eJEFoHhlBlWBI7K8dytlDBmk0zIBN6sTnDZtOLzEBJaC8WfrT53iAE5nPcDjhNMyGjeNCSczHaRxGy8p9nn2LZgvRfnEUsXswrXt6J8k6fs/BPJbDKOlItnCZODI4Ru57VoQgbxpjnP5cbb4jBxjfhdHCc+p/IuDXkOr6kxyPV96c8C1E5WatwrxrKc9qJC+CLkUu1tsspcpzjMZuRHhGVbe3Vef65vJkoLJOJoUU+fzLo6j7HCtYb4rufzdhPyi6/9kk8zJx5gyzCGssN2gpcwQ2FbRp0z6vpaOqPyKMJ2nl9Rl+3mAh/vS3BhzfN5owlp5M3YPAjYjxxiBd8QQsqaCteFDKWgeT5vMCGf+GI1SZtB8jtP/MVewqqKT3M4ZzXH+t6+6TQheyVQb1l99ZCYwvtVbMAaczyv+TrRy0kulW8DDbmTYxYxnpwwhTX/cnFsDCLMTsBna1Vt8vLIEo4zYxbikuRsc2X3Tx6M0AtIZxdxfMq/1R3GzjCOra5/P+KJaY/5BxrBVtfl9WbX58QyElJNzIO2J7Bw1ODrMnzv0kW5lWm/2Ml8G60nh3cnvPpV4mMHPv+vHbSWeCsh46ayHGAeLaUtCYown+7HxyX43KUd5NkBZFxL/deLO53iMgupWsp327ts7W5GHP4xm9e3+dbpYrCJ+OTg49bg8hi0F5w9TeIS+lJVRSCiCl9KCK2l3a3z3ZltbqxZV0bHo6KAIirwoQwxc9MlrHSNgnPF+2IwHZZjCiCimrEH48s0fAstxGwn/Sj7Nez++lssAKk8CEgx1grGXo4vOzOVEJlsh7PnTlEdCWg+TYPKBEWMY4z5jFmHDzt6qoV6MrtfModpbSbE1pJrymMUUM6FXM8YzYzp3QbMPIVZPh0UfISjjQvQOiBvRNgCWCk+lQLwFFalDs5nOWNb6FiM+JhTTw/VNDj/PVTTwv+tNWpN8tHs7KrJDf18Jc5z4nYnwg3YVI7Paw2l9J/uZN8l9Gw9298nAlVzXoUERVm3MPjg2QDfjFmoNFGC2xZ7ZS7O++1fAQYAiuQ9FMHh1WYAAAAASUVORK5CYII=');\n  background-repeat: no-repeat;\n  background-position-x: 50%;\n  background-position-y: 50%;\n  background-size: auto;\n  opacity: .9;\n  width: 100%;\n  min-height: 311px;\n  border-radius: 30px;\n}\n\n.aboutcontent{\n  width: 74%;\n  display: block;\n  margin: auto;\n}\n\nh6{\n  color: #b68834;\n  font-size: 12px;\n  text-align: left;\n}\n\nh1{\n  max-width: 330px;\n  font-size: 36px;\n  color: #222222;\n  line-height: 1.2em !important;\n  margin-bottom: 0;\n  margin-top: 0;\n  font-weight: 600;\n  padding-bottom: 1em;\n  text-align: left;\n}\n\np.p2{\n  color: #777777;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.625em;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row about\" id=\"aboutSection\">\n  <div class=\"col-md-6 col-xs-12\">\n    <div class=\"video\">\n      <a href=\"#\">\n        <div class=\"overlay\"></div>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xs-12\">\n      <div class=\"aboutcontent\">\n        <h6>LIVE COFFEE MAKING PROCESS.</h6>\n        <h1>We Telecast our Coffee Making Live</h1>\n        <p>We are here to listen from you deliver exellence</p>\n        <p class=\"p2\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.\n        </p>\n        <img src=\"assets/images/signature.png\" >\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-header></app-header>\n<app-about></app-about>\n<app-menu></app-menu>\n<app-images></app-images>\n<app-ratings></app-ratings>\n<app-serveforyou></app-serveforyou>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Coffee Master';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _menu_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/card/card.component */ "./src/app/menu/card/card.component.ts");
/* harmony import */ var _Services_card_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/card.service */ "./src/app/Services/card.service.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ratings/ratings.component */ "./src/app/ratings/ratings.component.ts");
/* harmony import */ var _ratings_review_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ratings/review/review.component */ "./src/app/ratings/review/review.component.ts");
/* harmony import */ var _Services_review_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/review.service */ "./src/app/Services/review.service.ts");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _Services_stats_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/stats.service */ "./src/app/Services/stats.service.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _serveforyou_serveforyou_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./serveforyou/serveforyou.component */ "./src/app/serveforyou/serveforyou.component.ts");
/* harmony import */ var _serveforyou_servecard_servecard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./serveforyou/servecard/servecard.component */ "./src/app/serveforyou/servecard/servecard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _menu_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _images_images_component__WEBPACK_IMPORTED_MODULE_9__["ImagesComponent"],
                _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_10__["RatingsComponent"],
                _ratings_review_review_component__WEBPACK_IMPORTED_MODULE_11__["ReviewComponent"],
                _stars_stars_component__WEBPACK_IMPORTED_MODULE_13__["StarsComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_15__["StatsComponent"],
                _serveforyou_serveforyou_component__WEBPACK_IMPORTED_MODULE_16__["ServeforyouComponent"],
                _serveforyou_servecard_servecard_component__WEBPACK_IMPORTED_MODULE_17__["ServecardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            providers: [_Services_card_service__WEBPACK_IMPORTED_MODULE_8__["CardService"], _Services_review_service__WEBPACK_IMPORTED_MODULE_12__["ReviewService"], _Services_stats_service__WEBPACK_IMPORTED_MODULE_14__["StatsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer{\n  background: url('footer-bg.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: white;\n  background-position-x: -460px;\n  padding-top: 220px;\n  overflow: hidden;\n\n}\n\n.row{\n  padding-bottom: 12em;\n}\n\nh6{\n  text-align: left;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\np{\n  font-weight: 100;\n  padding: 10px 0 10px 0px;\n  color: #ffffffeb;\n  width: 90%;\n}\n\np span{\n  color: #b68834;\n  font-size: 22px;\n}\n\na{\n  color: #b68834;\n  text-decoration: none;\n}\n\nul{\n  margin-top: -20px;\n}\n\nul li{\n  display: inline;\n  padding-right: 20px;\n  font-size: 14px;\n}\n\nul li:last-child{\n  padding-right: 0px;\n}\n\nbutton{\n  background-color: #b68834;\n  border: 2px solid #b68834;\n  outline: none;\n  color: white;\n  padding: 5px 10px 5px 10px;\n  box-shadow: -1px 0px 0px white;\n}\n\nul li:hover,\nbutton:hover{\n  cursor: pointer;\n}\n\ninput:focus,\nbutton:active{\n  outline: 4px solid #347cb661;\n}\n\ninput{\n  outline: none;\n  padding: 5px;\n  width: 80%;\n  color: #777;\n}\n\n.error, .submitting{\n  font-size: 12px;\n  padding-top: 3em;\n}\n\n.error{\n  color: red;\n}\n\n.success{\n  font-size: 12px;\n  color: green;\n  position: absolute;\n}\n\n.follow{\n  padding-top:2em;\n}\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n\n  #footer{\n    background-position-x: -1140px;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-md-6\">\n        <h6>About Us</h6>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n          sed do eiusmod tempor incididunt ut labore dolore magna aliqua.\n        </p>\n        <p>Copyright ©2018 All rights reserved | This template is made with\n          <span>&#9829;</span> by\n          <a href=\"https://colorlib.com\">Colorlib</a>\n        </p>\n      </div>\n      <div class=\"col-lg-5 col-md-6\">\n        <h6>Newsletter</h6>\n        <p>Stay update with our latest</p>\n        <div id=\"form\">\n          <form [formGroup]=\"newsLetterForm\" (ngSubmit)=\"onSubmit()\">\n            <input\n              formControlName=\"useremail\"\n              id=\"useremail\"\n              type=\"email\" />\n            <button type=\"submit\" id=\"submit\">\n              <i class=\"fas fa-long-arrow-alt-right\"></i>\n            </button>\n            <div>\n              <span class=\"submitting\" *ngIf=\"submitted\">Submitting...</span>\n            </div>\n            <div\n              class=\"error\">\n              <span *ngIf=\"!newsLetterForm.get('useremail').touched && !sendData\">Please enter a value</span>\n              <span\n                *ngIf=\"notVailed\">\n                Please enter a vailed email address (Sample@sample.com)\n              </span>\n            </div>\n            <div>\n              <span\n                class=\"success\"\n                *ngIf=\"sendData\">\n                We have sent you a confirmation email Follow Us Let us be social\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-6 follow\" >\n        <h6>Follow Us</h6>\n        <p>Let us be social</p>\n        <ul>\n          <li><i class=\"fab fa-facebook-f\"></i></li>\n          <li><i class=\"fab fa-twitter\"></i></li>\n          <li><i class=\"fab fa-dribbble\"></i></li>\n          <li><i class=\"fab fa-behance\"></i></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.submitted = false;
        this.notVailed = false;
        this.sendData = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.newsLetterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'useremail': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Email', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
        });
    };
    FooterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.notVailed = false;
        setTimeout(function () {
            _this.submitted = false;
            if (!_this.newsLetterForm.get('useremail').valid) {
                _this.notVailed = true;
                _this.sendData = false;
            }
            if (_this.newsLetterForm.get('useremail').valid) {
                _this.sendData = true;
                _this.notVailed = false;
                _this.newsLetterForm.reset();
            }
        }, 800);
        this.sendData = false;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coffeeheader{\n  background-image: url('header-bg.jpg');\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n}\n\nh1,h2{\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nh1,h6{\n  color:white;\n  position: absolute;\n  display: block;\n  left: 100px;\n}\n\nh6{\n  margin-top: 130px;\n  font-weight: bold;\n  font-size: 12px;\n}\n\nh1{\n  text-align: left;\n  margin-top: 184px;\n  font-size: 60px;\n  font-weight: 600;\n  max-width: 550px;\n}\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  h1{\n    font-size: 40px;\n  }\n\n}\n\n/* devices from small to labtop */\n\n@media only screen and (max-width: 600px) {\n  h1{\n    font-size: 30px;\n  }\n\n  h1,h6{\n    left: 10px;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid coffeeheader\" id=\"header\">\n  <h6>NOW YOU CAN FEEL THE ENERGY</h6>\n  <h1>Start your day with a black Coffee</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/images/images.component.css":
/*!*********************************************!*\
  !*** ./src/app/images/images.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#images{\n  padding-top: 6em;\n  padding-bottom: 4em;\n}\n\nh1{\n  font-weight: bold;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nh6{\n  color: #777;\n  padding-bottom: 4em;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nimg{\n  width: 100%;\n  margin: auto;\n  padding-bottom: 2em;\n}\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  img{\n    width: 80%;\n    display: block;\n    margin: auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/images/images.component.html":
/*!**********************************************!*\
  !*** ./src/app/images/images.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"images\">\n  <div class=\"container\">\n    <h1>What kind of Coffee we serve for you</h1>\n    <h6>Who are in extremely love with eco friendly system.</h6>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sx-12\">\n        <img src=\"assets/images/g1.jpg\">\n        <img src=\"assets/images/g2.jpg\" style=\"height: 397px\">\n      </div>\n      <div class=\"col-lg-8 col-xs-12\">\n        <div class=\"row\">\n          <img src=\"assets/images/g3.jpg\" style=\"height: 396px;width: 96%;\">\n          <div class=\"col-lg-6 col-xs-12\" >\n            <img src=\"assets/images/g4.jpg\">\n          </div>\n          <div class=\"col-lg-6 col-xs-12\" >\n            <img src=\"assets/images/g5.jpg\" >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () {
    };
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/menu/card/card.component.css":
/*!**********************************************!*\
  !*** ./src/app/menu/card/card.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardContent{\n  width: 80%;\n  box-shadow: 0px 12px 27px #8080804a;\n  display: block;\n  margin: auto;\n  background-color: white;\n  margin-bottom: 2em;\n  border-radius: 5px;\n}\n\n.title{\n  font-weight: bold;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\n.title, p{\n  padding-top: 20px;\n  width: 80%;\n  display: block;\n  margin: auto;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\n.price{\n  float: right;\n  color: #b68834 !important;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\np{\n  padding-bottom: 20px;\n  color: #777777;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.625em;\n}\n"

/***/ }),

/***/ "./src/app/menu/card/card.component.html":
/*!***********************************************!*\
  !*** ./src/app/menu/card/card.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardContent\">\n  <div class=\"title\">\n    {{cardTitle}} <span class=\"price\">${{cardPrice}}</span>\n  </div>\n  <p>{{cardText}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/card/card.component.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardComponent.prototype, "cardPrice", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/menu/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/menu/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menu{\n  background-image: url('menu-bg.jpg');\n  width: 100vw;\n  /* height: 100vh; */\n}\n\n#menu h1{\n  text-align: center;\n  padding-top: 3em;\n  width: 70%;\n  display: block;\n  margin: auto;\n  font-weight: bold;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\n#menu h6{\n  text-align: center;\n  padding-top: 1em;\n  padding-bottom: 4em;\n  width: 50%;\n  display: block;\n  margin: auto;\n  color: #777777;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\n.list{\n  padding-bottom: 4em;\n}\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"menu\">\n  <h1>What kind of Coffee we serve for you</h1>\n  <h6>Who are in extremely love with eco friendly system.</h6>\n  <div class=\"row list\">\n    <div\n      class=\"col-lg-4\"\n      *ngFor=\"let card of cardList\">\n      <app-card\n        cardTitle={{card.title}}\n        cardText={{card.text}}\n        cardPrice={{card.price}}></app-card>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/card.service */ "./src/app/Services/card.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(cardService) {
        this.cardService = cardService;
        this.cardList = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.cardList = this.cardService.getCardList();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navtop{\n  /* background: rgba(20, 2, 0, 0); */\n  height: 80px;\n  color:#eaeaea;\n  position: fixed;\n  z-index: 999;\n  font-family: 'Josefin Sans', sans-serif;\n  -webkit-animation-name: notshowfullnav;\n          animation-name: notshowfullnav;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.navShowFull{\n  -webkit-animation-name: showfullnav;\n          animation-name: showfullnav;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes showfullnav {\n  from { background: rgba(20, 2, 0, 0);}\n  to { background: rgba(20, 2, 0, 0.8); }\n}\n\n@keyframes showfullnav {\n  from { background: rgba(20, 2, 0, 0);}\n  to { background: rgba(20, 2, 0, 0.8); }\n}\n\n@-webkit-keyframes notshowfullnav {\n  from {background: rgba(20, 2, 0, 0.8); }\n  to { background: rgba(20, 2, 0, 0); }\n}\n\n@keyframes notshowfullnav {\n  from {background: rgba(20, 2, 0, 0.8); }\n  to { background: rgba(20, 2, 0, 0); }\n}\n\n.navtop img{\n  width: 122px;\n  position: absolute;\n  top: 30px;\n  left: 100px;\n}\n\n.stickynav,\n.opentimes{\n  display: inline-flex;\n  position: absolute;\n  right: 85px;\n  list-style: none;\n}\n\n.opentimes{\n  top: 10px;\n  font-size: 14px;\n}\n\n.stickynav{\n  padding: 5px;\n  top: 35px;\n  font-size: 12px;\n}\n\n.opentimes li:last-child,\n.stickynav li:last-child {\n  padding-right: 0;\n}\n\n.opentimes li,\n.stickynav li {\n  padding-right: 20px;\n}\n\n.stickynav li a{\n  color:#eaeaea;\n  text-decoration: none;\n}\n\n.stickynav li a:hover {\n  cursor: pointer;\n}\n\n.stickynav li a.active{\n  border-bottom: 1px solid #eaeaea;\n}\n\n#toggleClose{\n  display: none;\n}\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n\n  .navtop img{\n    left: 50px;\n    width: 100px;\n  }\n\n  .opentimes{\n    display: none;\n  }\n\n  .stickynav{\n    top: 30px;\n  }\n}\n\n/* devices from small to labtop */\n\n@media only screen and (max-width: 800px) {\n\n  #toggleClose{\n    display: block;\n    right: 40px;\n    top: 20px;\n    position: absolute;\n  }\n\n  #toggleClose:hover{\n    cursor: pointer;\n  }\n\n  .navtop{\n    width: 100vw;\n  }\n\n  .navtop img{\n    left: 10px;\n    width: 90px;\n  }\n\n  nav{\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    top:0;\n    left:-250px;\n    width: 250px;\n    height: 100vh;\n    z-index: 2;\n    box-shadow: -1px 0px 6px #2a2a2a;\n    /* overflow: hidden; */\n  }\n\n  .stickynav{\n    display: block;\n    left: 0;\n    color: white;\n    font-weight: bold;\n    position: absolute;\n    z-index: 999;\n  }\n\n  .stickynav li{\n    padding: 14px;\n  }\n\n  .mobileIcon{\n    width: 100vw;\n    background-color:rgba(5, 5, 5, 0.89);\n    position: fixed;\n    left:0;\n    font-size: 24px;\n  }\n\n  .slideOver{\n    -webkit-animation-name: OVR;\n            animation-name: OVR;\n    -webkit-animation-duration: 0s;\n            animation-duration: 0s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n  @-webkit-keyframes OVR {\n    from {height:0vh;}\n    to {height: 100vh; }\n  }\n\n  @keyframes OVR {\n    from {height:0vh;}\n    to {height: 100vh; }\n  }\n\n  .slideIn{\n    -webkit-animation-name: IN;\n            animation-name: IN;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n  @-webkit-keyframes IN {\n    from {left: -250px}\n    to {left: 0px}\n  }\n\n  @keyframes IN {\n    from {left: -250px}\n    to {left: 0px}\n  }\n\n  .slideOut{\n    -webkit-animation-name: OUT;\n            animation-name: OUT;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n  @-webkit-keyframes OUT {\n    from {left: 0px}\n    to {left: -250px}\n  }\n\n  @keyframes OUT {\n    from {left: 0px}\n    to {left: -250px}\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid navtop\" [ngClass]=\"{'navShowFull': addNavClass}\">\n  <img src=\"assets/images/logo.png\" >\n  <nav [ngClass]=\"{'slideIn': open, 'slideOut': !open}\">\n    <ul class=\"opentimes\">\n      <li>Mon-Fri:8am to 2pm</li>\n      <li>Sat-Sun:11am to 4pm</li>\n      <li>(012) 6985 236 7512</li>\n    </ul>\n    <ul class=\"stickynav\">\n      <li>\n        <a href=\"#header\" class=\"active\" (click)=\"toggleClass()\">{{'home' | uppercase}}</a>\n      </li>\n      <li>\n        <a href=\"#aboutSection\" (click)=\"toggleClass()\">{{'about' | uppercase}}</a>\n      </li>\n      <li>\n        <a href=\"#ratings\" (click)=\"toggleClass()\">{{'review' | uppercase}}</a>\n      </li>\n      <li>\n        <a href=\"#serveforyou\" (click)=\"toggleClass()\">{{'Blog' | uppercase}}</a>\n      </li>\n      <li>\n        <a href=\"#\" (click)=\"toggleClass()\">{{'pages' | uppercase}}</a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"mobileIcon\" [ngClass]=\"{'slideOver': open}\">\n    <div id=\"toggleClose\" (click)=\"toggleClass()\">\n      <i *ngIf=\"open\" class=\"fas fa-times\"></i>\n      <i *ngIf=\"!open\" class=\"fas fa-bars\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.open = false;
        this.addNavClass = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.navToggle();
    };
    NavComponent.prototype.toggleClass = function () {
        this.open = !this.open;
        if (this.open) {
            document.body.className += 'bodyOpen';
        }
        else {
            document.body.className = '';
        }
    };
    NavComponent.prototype.navToggle = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            if (scrollY.valueOf() > 50) {
                _this.addNavClass = true;
            }
            else {
                _this.addNavClass = false;
            }
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/ratings/ratings.component.css":
/*!***********************************************!*\
  !*** ./src/app/ratings/ratings.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ratings{\n  background-color: #b68834;\n  color: white;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nh1{\n  padding-top: 3em;\n}\n\nh6{\n  padding-bottom: 4em;\n  color: #ffffffd6;\n}\n\n.review{\n  padding-bottom: 4em;\n}\n\n.numbers{\n  padding-bottom: 6em;\n}\n"

/***/ }),

/***/ "./src/app/ratings/ratings.component.html":
/*!************************************************!*\
  !*** ./src/app/ratings/ratings.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ratings\">\n  <h1>What kind of Coffee we serve for you</h1>\n  <h6>Who are in extremely love with eco friendly system.</h6>\n  <div id=\"reviws\" class=\"row review\">\n    <div class=\"col-lg-6\" *ngFor=\"let review of reviews\">\n      <app-review\n        reviewLogo={{review.logo}}\n        reviewTitle={{review.title}}\n        reviewText={{review.text}}\n        reviewRating={{review.rating}}\n      ></app-review>\n    </div>\n  </div>\n  <div class=\"container numbers\">\n    <div class=\"row \">\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <app-stats\n          [count]=\"stats['happyClients']\"\n          title=\"Happy Client\"></app-stats>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <app-stats\n          [count]=\"stats['totalProjects']\"\n          title=\"Total Projects\"></app-stats>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <app-stats\n          [count]=\"stats['cupsOfCoffee']\"\n          title=\"Cups Coffee\"></app-stats>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <app-stats\n          [count]=\"stats['totalSubmitted']\"\n          title=\"Total Submitted\"></app-stats>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/ratings/ratings.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ratings/ratings.component.ts ***!
  \**********************************************/
/*! exports provided: RatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsComponent", function() { return RatingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/review.service */ "./src/app/Services/review.service.ts");
/* harmony import */ var _Services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/stats.service */ "./src/app/Services/stats.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingsComponent = /** @class */ (function () {
    function RatingsComponent(reviewsService, statsService) {
        this.reviewsService = reviewsService;
        this.statsService = statsService;
        this.reviews = [];
        this.stats = {};
    }
    RatingsComponent.prototype.ngOnInit = function () {
        this.reviews = this.reviewsService.getReviews();
        this.stats = this.statsService.getStats();
    };
    RatingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ratings',
            template: __webpack_require__(/*! ./ratings.component.html */ "./src/app/ratings/ratings.component.html"),
            styles: [__webpack_require__(/*! ./ratings.component.css */ "./src/app/ratings/ratings.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"],
            _Services_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]])
    ], RatingsComponent);
    return RatingsComponent;
}());



/***/ }),

/***/ "./src/app/ratings/review/review.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ratings/review/review.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".r{\n  width: 80%;\n  display: block;\n  margin: auto;\n}\n\nimg{\n  padding-bottom: 20px;\n}\n\nh3{\n  padding-bottom: 10px;\n}\n\np{\n  color: #ffffffd6;\n}\n"

/***/ }),

/***/ "./src/app/ratings/review/review.component.html":
/*!******************************************************!*\
  !*** ./src/app/ratings/review/review.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"r\">\n  <img src={{reviewLogo}} >\n  <h3>{{reviewTitle}}\n    <span>\n      <app-stars numberOfStars={{reviewRating}}></app-stars>\n    </span>\n  </h3>\n  <p>{{reviewText}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/ratings/review/review.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ratings/review/review.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReviewComponent.prototype, "reviewTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReviewComponent.prototype, "reviewText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReviewComponent.prototype, "reviewLogo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReviewComponent.prototype, "reviewRating", void 0);
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/ratings/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/ratings/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/serveforyou/servecard/servecard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/serveforyou/servecard/servecard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  width: 80%;\n}\n\nul{\n  padding-top: 1em;\n}\n\nul li{\n  display:inline-block;\n  padding-right: 20px;\n}\n\nul li button{\n  background-color: white;\n  padding: 2px 5px 2px 5px;\n  outline: none;\n  border-radius: 10px;\n  border-radius: 24px;\n  width: 81px;\n  border: 1px solid #eee;\n  font-size: 14px;\n}\n\nul li button:hover{\n  cursor: pointer;\n  background-color: #b68834;\n  color: white;\n}\n\nh3{\n  font-size: 23px;\n}\n\np{\n  color: #777;\n}\n\np.date{\n  color: black;\n}\n\n\n"

/***/ }),

/***/ "./src/app/serveforyou/servecard/servecard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/serveforyou/servecard/servecard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src={{img}} >\n  <ul>\n    <li><button>Traval</button></li>\n    <li><button>Style</button></li>\n  </ul>\n  <h3>Portable latest Fashion for young women</h3>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore.\n  </p>\n  <p class=\"date\">{{ today | date: \"d MMMM y\" }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/serveforyou/servecard/servecard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/serveforyou/servecard/servecard.component.ts ***!
  \**************************************************************/
/*! exports provided: ServecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServecardComponent", function() { return ServecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServecardComponent = /** @class */ (function () {
    function ServecardComponent() {
        this.today = new Date();
    }
    ServecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ServecardComponent.prototype, "img", void 0);
    ServecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servecard',
            template: __webpack_require__(/*! ./servecard.component.html */ "./src/app/serveforyou/servecard/servecard.component.html"),
            styles: [__webpack_require__(/*! ./servecard.component.css */ "./src/app/serveforyou/servecard/servecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServecardComponent);
    return ServecardComponent;
}());



/***/ }),

/***/ "./src/app/serveforyou/serveforyou.component.css":
/*!*******************************************************!*\
  !*** ./src/app/serveforyou/serveforyou.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#serveforyou{\n  padding-top: 6em;\n  padding-bottom: 6em;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nh6{\n  padding-bottom: 4em;\n  color: #777777;\n}\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  .t1{\n    padding-bottom: 3em;\n  }\n\n  #serveforyou{\n    padding-top: 3em;\n    padding-bottom: 3em;\n  }\n}\n"

/***/ }),

/***/ "./src/app/serveforyou/serveforyou.component.html":
/*!********************************************************!*\
  !*** ./src/app/serveforyou/serveforyou.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"serveforyou\">\n  <h1>What kind of Coffee we serve for you</h1>\n  <h6>Who are in extremely love with eco friendly system.</h6>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 t1\">\n        <app-servecard img=\"assets/images/b1.jpg\"></app-servecard>\n      </div>\n      <div class=\"col-lg-6 col-md-12\">\n        <app-servecard img=\"assets/images/b2.jpg\"></app-servecard>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/serveforyou/serveforyou.component.ts":
/*!******************************************************!*\
  !*** ./src/app/serveforyou/serveforyou.component.ts ***!
  \******************************************************/
/*! exports provided: ServeforyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeforyouComponent", function() { return ServeforyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServeforyouComponent = /** @class */ (function () {
    function ServeforyouComponent() {
    }
    ServeforyouComponent.prototype.ngOnInit = function () {
    };
    ServeforyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serveforyou',
            template: __webpack_require__(/*! ./serveforyou.component.html */ "./src/app/serveforyou/serveforyou.component.html"),
            styles: [__webpack_require__(/*! ./serveforyou.component.css */ "./src/app/serveforyou/serveforyou.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServeforyouComponent);
    return ServeforyouComponent;
}());



/***/ }),

/***/ "./src/app/stars/stars.component.css":
/*!*******************************************!*\
  !*** ./src/app/stars/stars.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".starRating{\n  font-size: 12px;\n  width: 105px;\n  display: inline-block;\n  padding-left: 10px;\n}\n\n.starRating ul li{\n  padding-right: 4px;\n  display: inline-block;\n}\n\n.starChecked{\n  color: orange;\n}\n"

/***/ }),

/***/ "./src/app/stars/stars.component.html":
/*!********************************************!*\
  !*** ./src/app/stars/stars.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"starRating\">\n  <ul>\n    <li *ngFor=\"let star of stars; let i = index\">\n    <i\n      class={{star}}\n      [ngClass]=\"{'starChecked': i < numberOfStars}\"></i>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/*!******************************************!*\
  !*** ./src/app/stars/stars.component.ts ***!
  \******************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.stars = [];
    }
    StarsComponent.prototype.ngOnInit = function () {
        this.stars = [
            'fas fa-star',
            'fas fa-star',
            'fas fa-star',
            'fas fa-star',
            'fas fa-star',
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarsComponent.prototype, "numberOfStars", void 0);
    StarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__(/*! ./stars.component.html */ "./src/app/stars/stars.component.html"),
            styles: [__webpack_require__(/*! ./stars.component.css */ "./src/app/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#stats{\n   /* width: 40%; */\n   padding-bottom: 1em;\n   display: block;\n   margin: auto;\n}\n\nh1, p{\n  text-align: left;\n  margin: 0;\n  padding: 0;\n  font-family: 'Open Sans Condensed', sans-serif;\n  color: #ffffffd6;\n}\n\nh1{\n  font-size: 60px;\n  font-weight: 100;\n}\n\n/* devices from small to labtop */\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  h1,p{\n    text-align: center;\n }\n\n}\n"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"stats\" [ngClass]=\"{'animated zoomIn slower' : showCountClass}\">\n  <h1>{{numberShown}}</h1>\n  <p>{{title}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.numberShown = 0;
        this.showCountClass = false;
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.countToggle();
        this.numberShown = Math.ceil(this.count / 2);
    };
    StatsComponent.prototype.countToggle = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            if (scrollY.valueOf() > (document.getElementById('reviws').offsetTop - 200)) {
                _this.showCountClass = true;
                setInterval(function () {
                    if (_this.numberShown !== _this.count) {
                        _this.numberShown++;
                    }
                }, 0.5);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatsComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatsComponent.prototype, "title", void 0);
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/assets/Models/card.model.ts":
/*!*****************************************!*\
  !*** ./src/assets/Models/card.model.ts ***!
  \*****************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(title, text, price) {
        this.title = title;
        this.text = text;
        this.price = price;
    }
    return Card;
}());



/***/ }),

/***/ "./src/assets/Models/review.Model.ts":
/*!*******************************************!*\
  !*** ./src/assets/Models/review.Model.ts ***!
  \*******************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review(logo, title, rating, text) {
        this.logo = logo;
        this.title = title;
        this.rating = rating;
        this.text = text;
    }
    return Review;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/allen/Documents/code_angular5/coffeemaster/coffeemaster/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map