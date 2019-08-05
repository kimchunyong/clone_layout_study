webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Favorite/index.js":
/*!**************************************!*\
  !*** ./components/Favorite/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Layout_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layout/TextBox */ "./Layout/TextBox/index.js");
/* harmony import */ var _Layout_WarpperBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Layout/WarpperBox */ "./Layout/WarpperBox/index.js");
/* harmony import */ var _img_mobile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/mobile.png */ "./components/Favorite/img/mobile.png");
/* harmony import */ var _img_mobile_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_mobile_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_boxshot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/boxshot.png */ "./components/Favorite/img/boxshot.png");
/* harmony import */ var _img_boxshot_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_boxshot_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_download_icon_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/download-icon.gif */ "./components/Favorite/img/download-icon.gif");
/* harmony import */ var _img_download_icon_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_download_icon_gif__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\clone_layout_study\\chapter03\\components\\Favorite\\index.js";


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 2px 0;\n    color:", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex-grow: 1;\n    flex-shrink: 1;\n    margin: .3em 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 57px;\n    margin-right:1em;\n\n    &>img{\n        display:block;\n        width:100%;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    left: 35%;\n    bottom: 8%;\n    transform: translateX(-50%);\n    margin: 0 auto;\n    background: #000;\n    display: flex;\n    align-items: center;\n    width: 60%;\n    min-width: 15em;\n    padding: .25em .65em;\n    border: 2px solid rgba(255,255,255,.25);\n    box-shadow: 0 0 2em 0 #000;\n    border-radius: .75em;\n    z-index: 5;\n\n    &:after{\n        content:\"\";\n        width: 3em;\n        height: 3em;\n        outline: 2px solid #000;\n        outline-offset: -2px;\n        display: block;\n        background:url(", ") 0 0 no-repeat;\n        background-size: cover;\n    }\n\n    @media(max-width:1280px){\n        left:50%;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    overflow: hidden;\n    z-index: 5;\n    margin: -8% 0 -4% -15%;\n    min-height: 100px;\n    width: 100%;\n\n    &>img{\n        display:block;\n        width:100%;\n    }\n\n    @media(max-width:1280px){\n        margin:0;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    width:48%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin:13px 0;\n    color: #fff;\n    border: 1px solid #fff;\n    padding: .5rem 1em;\n    background: transparent;\n    font-size: 1.625rem;\n\n    @media(max-width:1280px){\n        font-size:1.125rem;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 130%;\n    font-size: 1.625rem;\n    font-weight: 400;\n\n    @media(max-width:1280px){\n        font-size:1.125rem;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 130%;\n    font-size: 3.125rem;\n    margin-bottom: .5rem;\n    font-weight: 700;\n\n    @media(max-width:1280px){\n        font-size:2.625rem;\n\n        &>br{\n            display:none;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());
var TextSubTxt = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());
var TrailBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());
var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var ImgFrame = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6(), _img_download_icon_gif__WEBPACK_IMPORTED_MODULE_7___default.a);
var InfoThumsCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var InfoTxtCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var InfoTxt = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject9(), function (props) {
  return props.primary === 'white' ? '#fff' : '#0071eb';
});

var Favorite = function Favorite() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout_WarpperBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgFrame, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _img_mobile_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoThumsCon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _img_boxshot_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoTxtCon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoTxt, {
    primary: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "\uAE30\uBB18\uD55C \uC774\uC57C\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoTxt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "\uC800\uC7A5 \uC911...")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout_TextBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "\uC990\uACA8 \uBCF4\uB294 \uCF58\uD150\uCE20\uB97C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), " \uC800\uC7A5\uD574 \uC774\uB3D9 \uC911\uC5D0\uB3C4", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), " \uC2DC\uCCAD\uD558\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextSubTxt, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\uC624\uD504\uB77C\uC778\uC73C\uB85C \uC990\uAE30\uACE0 \uB370\uC774\uD130\uB97C \uC808\uC57D\uD558\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TrailBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "30\uC77C \uBB34\uB8CC \uC774\uC6A9 >")));
};

/* harmony default export */ __webpack_exports__["default"] = (Favorite);

/***/ })

})
//# sourceMappingURL=index.js.79ff327393b0b4f67905.hot-update.js.map