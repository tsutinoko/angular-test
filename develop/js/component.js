/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var syntagme = __webpack_require__(6);
var flux = syntagme();

module.exports = {
  flux: flux
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    flux = _require.flux;

function increment() {
    flux.ac('INCREMENT', { current_count: flux.store.state.current_count });
}

function decrement() {
    flux.ac('DECREMENT', { current_count: flux.store.state.current_count });
}

function submitCount() {
    flux.ac('SUBMIT_COUNT', { current_count: flux.store.state.current_count });
}

module.exports = {
    increment: increment,
    decrement: decrement,
    submitCount: submitCount
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ac = __webpack_require__(1);

var CounterCtrl = function () {
  function CounterCtrl() {
    var _this = this;

    _classCallCheck(this, CounterCtrl);

    document.getElementById('increment-btn').addEventListener('click', function () {
      _this.increment();
    });
    document.getElementById('decrement-btn').addEventListener('click', function () {
      _this.decrement();
    });
    document.getElementById('submit-btn').addEventListener('click', function () {
      _this.submitCount();
    });
  }

  _createClass(CounterCtrl, [{
    key: 'increment',
    value: function increment() {
      ac.increment();
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      ac.decrement();
    }
  }, {
    key: 'submitCount',
    value: function submitCount() {
      ac.submitCount();
    }
  }]);

  return CounterCtrl;
}();

var Counter = new CounterCtrl();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    flux = _require.flux;

flux.reducer(function counterReducer(payload) {
    var previous_state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (payload.action.type) {
        case 'INIT':
            return Object.assign({}, previous_state, { current_count: 0 });
        case 'INCREMENT':
            return Object.assign({}, previous_state, { current_count: payload.action.current_count + 1 });
        case 'DECREMENT':
            return Object.assign({}, previous_state, { current_count: payload.action.current_count - 1 });
        case 'SUBMIT_COUNT':
            return Object.assign({}, previous_state, { current_count: 0 });
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    flux = _require.flux;

flux.reducer(function counterReducer(payload) {
    var previous_state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (payload.action.type) {
        case 'INIT':
            return Object.assign({}, previous_state, { result_count: 0 });
        case 'SUBMIT_COUNT':
            console.log("payload", payload);
            console.log("previous_state", previous_state);
            return Object.assign({}, previous_state, { result_count: previous_state.result_count + payload.action.current_count });
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    flux = _require.flux;

flux.listen();

flux.subscribe(function listener(state) {
    document.getElementById("current-count").innerHTML = state.current_count;
    document.getElementById("result-count").innerHTML = state.result_count;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.syntagme=t():e.syntagme=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return new v}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),a=n(2),f=r(a),l=n(3),h=r(l),d=n(4),p=r(d),y=n(5),b=r(y),v=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e),this.store=t.store||new f["default"],this.dispatcher=t.dispatcher||new c["default"],this.utils=b["default"],this.config=h["default"],this.listening_fg=!1,this.connect()}return u(e,[{key:"connect",value:function(){this.dispatcher.register(this.store.handle.bind(this.store)),this.connected_fg=!0}},{key:"subscribe",value:function(e){this.store.subscribe(e)}},{key:"listen",value:function(e){var t=this;this.store.listen(function(){t.listening_fg=!0,t.dispatcher.dispatch({source:"SYNTAGME",action:{type:"INIT"}}),e&&e.call(null)})}},{key:"getState",value:function(){return this.store.getState()}},{key:"reducer",value:function(e){return this.store.reducer(e)}},{key:"dispatch",value:function(e){if(!this.listening_fg)throw new Error("syntagme was not listening. call `app.listen()`");this.dispatcher.dispatch(e)}},{key:"handleAction",value:function(e,t){return p["default"].call(this,e,t)}},{key:"ac",value:function(e,t){return this.handleAction(e,t)}}]),e}();e.exports=o,e.exports.Syntagme=v},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=!1,o=function(){function e(){n(this,e),this.handlers=[]}return r(e,[{key:"dispatch",value:function(e){if(null==e.action||null==e.action.type)throw new Error("ActionType is not defined!");if(i)throw new Error('Dispatcher in progress.\n "'+e.action.type+'" cannot dispatch.');console.debug("[DISPATCHER]",e.source,e.action.type,e);try{i=!0;for(var t=0;t<this.handlers.length;t++)this.handlers[t](e)}catch(n){throw n}finally{i=!1}}},{key:"register",value:function(e){this.handlers.push(e)}}]),e}();t["default"]=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(Array.prototype.includes)return e.includes(t);var n=Object(e),r=parseInt(n.length)||0;if(0===r)return!1;var i,o=0;o>=0?i=o:(i=r+o,i<0&&(i=0));for(var u;i<r;){if(u=n[i],t===u||t!==t&&u!==u)return!0;i++}return!1}function i(e,t){var n=e,r=e.indexOf(t);return r&&n.splice(e.indexOf(t),1),n}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(){n(this,e),this.subscribers=[],this.reducers=[]}return o(e,[{key:"subscribe",value:function(e){this.subscribers.push(e)}},{key:"handle",value:function(e){for(var t=null,n=0;n<this.reducers.length;n++){var r=t||this.state,i=this.reducers[n](e,r);i&&(t=i)}if(t&&this.state!=t){this.state=t;for(var o=0;o<this.subscribers.length;o++)this.subscribers[o](t)}}},{key:"reducer",value:function t(e){Array.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)throw new Error("Reducer may be not function");r(this.reducers,t)&&(this.reducers=i(this.reudcers,t))}return this.reducers=this.reducers.concat(e),e}},{key:"listen",value:function(e){e&&e.call(null)}},{key:"getState",value:function(){return this.state}}]),e}();t["default"]=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={prefix:{RESOLVE:"_RESOLVE",REJECT:"_REJECT"}}},function(e,t){"use strict";function n(e,t){var n=this;if("function"==typeof t){this.dispatch({source:"ASYNC_ACTION",action:{type:e}});var i=t();if(null==i||"function"!=typeof i.then)throw new Error("Action must be return promise object.");return i.then(function(t){return null==t.type&&(t.type=e+n.config.prefix.RESOLVE),n.dispatch({source:"ASYNC_ACTION_RESOLVE",action:t}),t})["catch"](function(t){return n.dispatch({source:"ASYNC_ACTION_REJECT",action:{type:e+n.config.prefix.REJECT,rejection:t}}),t})}if("object"!==("undefined"==typeof t?"undefined":r(t))||Array.isArray(t))throw new Error("Action must be Object or Function.");return null==t.type&&(t.type=e),this.dispatch({source:"ACTION",action:t}),i}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=n},function(e,t){"use strict"}])});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(0);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ })
/******/ ]);