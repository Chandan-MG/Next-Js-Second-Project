webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\Second Project\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js",
    _s = $RefreshSig$();



var DUMMY_ITEM = [{
  id: 'm1',
  title: 'A first meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/City-of-the-future.jpg/1280px-City-of-the-future.jpg',
  address: 'Some address 1, 33 some city',
  description: 'This is a first meetup'
}, {
  id: 'm2',
  title: 'A second meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/S%C3%A3o_Paulo_City.jpg/1280px-S%C3%A3o_Paulo_City.jpg',
  address: 'Some address 3, 55 some city',
  description: 'This is a second meetup'
}, {
  id: 'm3',
  title: 'A third meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/S%C3%A3o_Paulo_City.jpg/1280px-S%C3%A3o_Paulo_City.jpg',
  address: 'Some address 3, 55 some city',
  description: 'This is a third meetup'
}];

function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoadedMeetups(DUMMY_ITEM);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJsb2FkZWRNZWV0dXBzIiwic2V0TG9hZGVkTWVldHVwcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDZjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLGdIQUhYO0FBSUlDLFNBQU8sRUFBRSw4QkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FEZSxFQVFmO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxpQkFGWDtBQUdJQyxPQUFLLEVBQUUsa0hBSFg7QUFJSUMsU0FBTyxFQUFFLDhCQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQVJlLEVBZWY7QUFDSUosSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSxrSEFIWDtBQUlJQyxTQUFPLEVBQUUsOEJBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBZmUsQ0FBbkI7O0FBd0JBLFNBQVNDLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDMkJDLHNEQUFRLENBQUMsRUFBRCxDQURuQztBQUFBLE1BQ1JDLGFBRFE7QUFBQSxNQUNPQyxnQkFEUDs7QUFFZkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZELG9CQUFnQixDQUFDVCxVQUFELENBQWhCO0FBQ0gsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBLHNCQUNJLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7R0FSUUYsUTs7S0FBQUEsUTs7QUFjTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjUwMzIwNjk1NjMwOTc0MzhkNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9JVEVNID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIHRpdGxlOiAnQSBmaXJzdCBtZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2NlL0NpdHktb2YtdGhlLWZ1dHVyZS5qcGcvMTI4MHB4LUNpdHktb2YtdGhlLWZ1dHVyZS5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgMSwgMzMgc29tZSBjaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIHRpdGxlOiAnQSBzZWNvbmQgbWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kOS9TJUMzJUEzb19QYXVsb19DaXR5LmpwZy8xMjgwcHgtUyVDMyVBM29fUGF1bG9fQ2l0eS5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgMywgNTUgc29tZSBjaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzZWNvbmQgbWVldHVwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ20zJyxcclxuICAgICAgICB0aXRsZTogJ0EgdGhpcmQgbWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kOS9TJUMzJUEzb19QYXVsb19DaXR5LmpwZy8xMjgwcHgtUyVDMyVBM29fUGF1bG9fQ2l0eS5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgMywgNTUgc29tZSBjaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSB0aGlyZCBtZWV0dXAnXHJcbiAgICB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XHJcbiAgICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX0lURU0pO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9