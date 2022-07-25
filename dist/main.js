/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/bubble */ \"./src/scripts/bubble.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('.game-canvas');\n  const sizes = {\n    width: window.innerWidth,\n    height: window.innerHeight\n  };\n  canvas.width = sizes.width;\n  canvas.height = sizes.height;\n  const ctx = canvas.getContext('2d');\n  let player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    position: {\n      x: canvas.width / 2 - 75,\n      y: canvas.height - 150\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    ctx: ctx\n  });\n  let bubble = new _scripts_bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    position: {\n      x: 200,\n      y: 200\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    radius: 30,\n    ctx: ctx\n  });\n  const keys = {\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    },\n    w: {\n      pressed: false\n    },\n    ArrowLeft: {\n      pressed: false\n    },\n    ArrowRight: {\n      pressed: false\n    },\n    ArrowUp: {\n      pressed: false\n    }\n  };\n\n  function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    player.update();\n    bubble.draw();\n    player.velocity.x = 0;\n\n    if (keys.a.pressed && player.lastKey === 'a') {\n      player.velocity.x = -2;\n    } else if (keys.ArrowLeft.pressed && player.lastKey === 'ArrowLeft') {\n      player.velocity.x = -2;\n    } else if (keys.d.pressed && player.lastKey === 'd') {\n      player.velocity.x = 2;\n    } else if (keys.ArrowRight.pressed && player.lastKey === 'ArrowRight') {\n      player.velocity.x = 2;\n    }\n  }\n\n  animate();\n  window.addEventListener('keydown', event => {\n    console.log(event.key);\n\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = true;\n        player.lastKey = 'd';\n        break;\n\n      case 'a':\n        keys.a.pressed = true;\n        player.lastKey = 'a';\n        break;\n\n      case 'w':\n        keys.w.pressed = true;\n        player.lastKey = 'w';\n        break;\n\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = true;\n        player.lastKey = 'ArrowLeft';\n        break;\n\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = true;\n        player.lastKey = 'ArrowRight';\n        break;\n    }\n  });\n  window.addEventListener('keyup', event => {\n    switch (event.key) {\n      case 'a':\n        keys.a.pressed = false;\n        break;\n\n      case 'd':\n        keys.d.pressed = false;\n        break;\n\n      case 'w':\n        keys.w.pressed = false;\n        break;\n\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = false;\n        break;\n\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = false;\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VztJQUN4QyxRQUFRQSxLQUFLLENBQUNHLEdBQWQ7TUFDSSxLQUFLLEdBQUw7UUFDSWpCLElBQUksQ0FBQ0MsQ0FBTCxDQUFPQyxPQUFQLEdBQWlCLEtBQWpCO1FBQ0E7O01BQ0osS0FBSyxHQUFMO1FBQ0lGLElBQUksQ0FBQ0csQ0FBTCxDQUFPRCxPQUFQLEdBQWlCLEtBQWpCO1FBQ0E7O01BQ0osS0FBSyxHQUFMO1FBQ0lGLElBQUksQ0FBQ0ksQ0FBTCxDQUFPRixPQUFQLEdBQWlCLEtBQWpCO1FBQ0E7O01BQ0osS0FBSyxXQUFMO1FBQ0lGLElBQUksQ0FBQ0ssU0FBTCxDQUFlSCxPQUFmLEdBQXlCLEtBQXpCO1FBQ0E7O01BQ0osS0FBSyxZQUFMO1FBQ0lGLElBQUksQ0FBQ00sVUFBTCxDQUFnQkosT0FBaEIsR0FBMEIsS0FBMUI7UUFDQTtJQWZSO0VBaUJILENBbEJEO0FBb0JILENBM0dEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLXRyb3VibGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXInO1xuaW1wb3J0IEJ1YmJsZSBmcm9tICcuL3NjcmlwdHMvYnViYmxlJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKTtcbiAgICBjb25zdCBzaXplcyA9IHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fTtcbiAgICBjYW52YXMud2lkdGggPSBzaXplcy53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZXMuaGVpZ2h0O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuXG4gICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogY2FudmFzLndpZHRoIC8gMiAtIDc1LFxuICAgICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE1MFxuICAgICAgICB9LFxuICAgICAgICB2ZWxvY2l0eToge3g6IDAsIHk6IDB9LFxuICAgICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgbGV0IGJ1YmJsZSA9IG5ldyBCdWJibGUoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgeTogMjAwLCBcbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICAgIHg6IDAsIFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmFkaXVzOiAzMCxcbiAgICAgICAgY3R4OiBjdHgsXG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICBhOiB7cHJlc3NlZDogZmFsc2V9LFxuICAgICAgICBkOiB7cHJlc3NlZDogZmFsc2V9LFxuICAgICAgICB3OiB7cHJlc3NlZDogZmFsc2V9LFxuICAgICAgICBBcnJvd0xlZnQ6IHtwcmVzc2VkOiBmYWxzZX0sXG4gICAgICAgIEFycm93UmlnaHQ6IHtwcmVzc2VkOiBmYWxzZX0sXG4gICAgICAgIEFycm93VXA6IHtwcmVzc2VkOiBmYWxzZX1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHBsYXllci51cGRhdGUoKTtcbiAgICAgICAgYnViYmxlLmRyYXcoKTtcblxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIGlmIChrZXlzLmEucHJlc3NlZCAmJiBwbGF5ZXIubGFzdEtleSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC0yO1xuICAgICAgICB9IGVsc2UgaWYgKGtleXMuQXJyb3dMZWZ0LnByZXNzZWQgJiYgcGxheWVyLmxhc3RLZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC0yO1xuICAgICAgICB9IGVsc2UgaWYgKGtleXMuZC5wcmVzc2VkICYmIHBsYXllci5sYXN0S2V5ID09PSAnZCcpIHtcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlzLkFycm93UmlnaHQucHJlc3NlZCAmJiBwbGF5ZXIubGFzdEtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpO1xuICAgIFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICAgICAgICAgIGtleXMuZC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICdkJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIGtleXMuYS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICdhJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIGtleXMudy5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICd3JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd0xlZnQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGxheWVyLmxhc3RLZXkgPSAnQXJyb3dMZWZ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dSaWdodC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdEtleSA9ICdBcnJvd1JpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIGtleXMuYS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBrZXlzLmQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAga2V5cy53LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd0xlZnQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd1JpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG4gIFxufSlcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJCdWJibGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwic2l6ZXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJwbGF5ZXIiLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJidWJibGUiLCJyYWRpdXMiLCJrZXlzIiwiYSIsInByZXNzZWQiLCJkIiwidyIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJBcnJvd1VwIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImRyYXciLCJsYXN0S2V5IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bubble.js":
/*!*******************************!*\
  !*** ./src/scripts/bubble.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bubble; }\n/* harmony export */ });\nclass Bubble {\n  constructor(_ref) {\n    let {\n      position,\n      velocity,\n      radius,\n      ctx\n    } = _ref;\n    this.position = position;\n    this.velocity = velocity;\n    this.radius = radius;\n    this.ctx = ctx;\n  }\n\n  draw() {\n    this.ctx.fillStyle = 'red';\n    this.ctx.lineWidth = 5;\n    this.ctx.beginPath();\n    this.ctx.arc(window.innerWidth / 2, window.innerHeight / 2, this.radius, 0, 2 * Math.PI, false);\n    this.ctx.fill();\n  }\n\n  update() {}\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWJibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUN4QkMsV0FBVyxPQUFvQztJQUFBLElBQW5DO01BQUNDLFFBQUQ7TUFBV0MsUUFBWDtNQUFxQkMsTUFBckI7TUFBNkJDO0lBQTdCLENBQW1DO0lBQzNDLEtBQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLQyxNQUFMLEdBQWNBLE1BQWQ7SUFDQSxLQUFLQyxHQUFMLEdBQVdBLEdBQVg7RUFDSDs7RUFFREMsSUFBSSxHQUFHO0lBQ0gsS0FBS0QsR0FBTCxDQUFTRSxTQUFULEdBQXFCLEtBQXJCO0lBQ0EsS0FBS0YsR0FBTCxDQUFTRyxTQUFULEdBQXFCLENBQXJCO0lBQ0EsS0FBS0gsR0FBTCxDQUFTSSxTQUFUO0lBQ0EsS0FBS0osR0FBTCxDQUFTSyxHQUFULENBQ0lDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUR4QixFQUMyQkQsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLENBRGhELEVBRUksS0FBS1QsTUFGVCxFQUVpQixDQUZqQixFQUVvQixJQUFFVSxJQUFJLENBQUNDLEVBRjNCLEVBRStCLEtBRi9CO0lBSUEsS0FBS1YsR0FBTCxDQUFTVyxJQUFUO0VBQ0g7O0VBRURDLE1BQU0sR0FBRyxDQUVSOztBQXJCdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtdHJvdWJsZS8uL3NyYy9zY3JpcHRzL2J1YmJsZS5qcz9iMzhhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3Ioe3Bvc2l0aW9uLCB2ZWxvY2l0eSwgcmFkaXVzLCBjdHh9KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JlZCdcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEksIGZhbHNlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkJ1YmJsZSIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsInJhZGl1cyIsImN0eCIsImRyYXciLCJmaWxsU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJhcmMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJNYXRoIiwiUEkiLCJmaWxsIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/bubble.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(_ref) {\n    let {\n      position,\n      velocity,\n      ctx\n    } = _ref;\n    this.position = position;\n    this.velocity = velocity;\n    this.attackBox = {\n      position: this.position,\n      width: 10,\n      height: -window.innerHeight\n    };\n    this.height = 100;\n    this.width = 50;\n    this.lastKey = \"\";\n    this.ctx = ctx;\n  }\n\n  draw() {\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    this.ctx.fillStyle = 'blue';\n    this.ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);\n  }\n\n  update() {\n    this.draw();\n    if (this.position.x + this.velocity.x + 100 >= window.innerWidth) this.velocity.x = 0;\n    this.position.x += this.velocity.x;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUN4QkMsV0FBVyxPQUE0QjtJQUFBLElBQTNCO01BQUNDLFFBQUQ7TUFBV0MsUUFBWDtNQUFxQkM7SUFBckIsQ0FBMkI7SUFDbkMsS0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUtFLFNBQUwsR0FBaUI7TUFDYkgsUUFBUSxFQUFFLEtBQUtBLFFBREY7TUFFYkksS0FBSyxFQUFFLEVBRk07TUFHYkMsTUFBTSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0M7SUFISCxDQUFqQjtJQUtBLEtBQUtGLE1BQUwsR0FBYyxHQUFkO0lBQ0EsS0FBS0QsS0FBTCxHQUFhLEVBQWI7SUFDQSxLQUFLSSxPQUFMLEdBQWUsRUFBZjtJQUNBLEtBQUtOLEdBQUwsR0FBV0EsR0FBWDtFQUNIOztFQUVETyxJQUFJLEdBQUc7SUFDSCxLQUFLUCxHQUFMLENBQVNRLFNBQVQsR0FBcUIsT0FBckI7SUFDQSxLQUFLUixHQUFMLENBQVNTLFFBQVQsQ0FDSSxLQUFLWCxRQUFMLENBQWNZLENBRGxCLEVBRUksS0FBS1osUUFBTCxDQUFjYSxDQUZsQixFQUdJLEtBQUtULEtBSFQsRUFHZ0IsS0FBS0MsTUFIckI7SUFJQSxLQUFLSCxHQUFMLENBQVNRLFNBQVQsR0FBcUIsTUFBckI7SUFDQSxLQUFLUixHQUFMLENBQVNTLFFBQVQsQ0FDSSxLQUFLUixTQUFMLENBQWVILFFBQWYsQ0FBd0JZLENBRDVCLEVBRUksS0FBS1QsU0FBTCxDQUFlSCxRQUFmLENBQXdCYSxDQUY1QixFQUdJLEtBQUtWLFNBQUwsQ0FBZUMsS0FIbkIsRUFJSSxLQUFLRCxTQUFMLENBQWVFLE1BSm5CO0VBTUg7O0VBRURTLE1BQU0sR0FBRztJQUNMLEtBQUtMLElBQUw7SUFDQSxJQUFJLEtBQUtULFFBQUwsQ0FBY1ksQ0FBZCxHQUFrQixLQUFLWCxRQUFMLENBQWNXLENBQWhDLEdBQW9DLEdBQXBDLElBQTJDTixNQUFNLENBQUNTLFVBQXRELEVBQ0ksS0FBS2QsUUFBTCxDQUFjVyxDQUFkLEdBQWtCLENBQWxCO0lBQ0osS0FBS1osUUFBTCxDQUFjWSxDQUFkLElBQW1CLEtBQUtYLFFBQUwsQ0FBY1csQ0FBakM7RUFDSDs7QUFuQ3VCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLXRyb3VibGUvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHtwb3NpdGlvbiwgdmVsb2NpdHksIGN0eH0pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIHRoaXMuYXR0YWNrQm94ID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICBoZWlnaHQ6IC13aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQm94LnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5hdHRhY2tCb3gucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrQm94LndpZHRoLFxuICAgICAgICAgICAgdGhpcy5hdHRhY2tCb3guaGVpZ2h0XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMudmVsb2NpdHkueCArIDEwMCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkgXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImN0eCIsImF0dGFja0JveCIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJsYXN0S2V5IiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ1cGRhdGUiLCJpbm5lcldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtdHJvdWJsZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;