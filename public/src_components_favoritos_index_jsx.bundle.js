"use strict";
(self["webpackChunkleague_of_leyends_wiki"] = self["webpackChunkleague_of_leyends_wiki"] || []).push([["src_components_favoritos_index_jsx"],{

/***/ "./src/components/favoritos/CardFavoritos.jsx":
/*!****************************************************!*\
  !*** ./src/components/favoritos/CardFavoritos.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_styles_components_CardCampeon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/styles/components/CardCampeon.scss */ "./src/assets/styles/components/CardCampeon.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





var CardFavoritos = function CardFavoritos(props) {
  var _props$campeon = props.campeon,
      name = _props$campeon.name,
      imagenes = _props$campeon.imagenes,
      id = _props$campeon.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col colCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "containerCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imagenes[0].url_loading,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/campeon/" + id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bottom"
  }, name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
};

CardFavoritos.propTypes = {
  campeon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (CardFavoritos);

/***/ }),

/***/ "./src/components/favoritos/ContainerFavoritos.jsx":
/*!*********************************************************!*\
  !*** ./src/components/favoritos/ContainerFavoritos.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _CardFavoritos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardFavoritos */ "./src/components/favoritos/CardFavoritos.jsx");
/* harmony import */ var _custom_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-hooks/useLocalStorage */ "./src/components/custom-hooks/useLocalStorage.js");





var ContainerFavoritos = function ContainerFavoritos(props) {
  var campeones = props.datos_campeones;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
  }, campeones.map(function (campeon, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CardFavoritos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      campeon: campeon
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerFavoritos);

/***/ }),

/***/ "./src/components/favoritos/index.jsx":
/*!********************************************!*\
  !*** ./src/components/favoritos/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ContainerFavoritos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerFavoritos */ "./src/components/favoritos/ContainerFavoritos.jsx");
/* harmony import */ var _assets_static_images_notFound_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/static/images/notFound.png */ "./src/assets/static/images/notFound.png");
/* harmony import */ var _custom_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-hooks/useLocalStorage */ "./src/components/custom-hooks/useLocalStorage.js");
/* harmony import */ var _comunes_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comunes/ButtonPrimary */ "./src/components/comunes/ButtonPrimary.jsx");
/* harmony import */ var _assets_styles_components_Favoritos_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/styles/components/Favoritos.scss */ "./src/assets/styles/components/Favoritos.scss");







var Campeones_index = function Campeones_index() {
  var value = (0,_custom_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Favoritos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "containerHeight"
  }, value.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContainerFavoritos__WEBPACK_IMPORTED_MODULE_1__["default"], {
    datos_campeones: value
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_static_images_notFound_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "",
    width: "80%"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "No se encontraron resultados...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_comunes_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "back",
    to: "/"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-1"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Campeones_index);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Favoritos.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Favoritos.scss ***!
  \**********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/components/Favoritos.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ","sourcesContent":["h1{\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/styles/components/Favoritos.scss":
/*!*****************************************************!*\
  !*** ./src/assets/styles/components/Favoritos.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Favoritos_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Favoritos.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Favoritos.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Favoritos_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Favoritos_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_favoritos_index_jsx.bundle.js.map