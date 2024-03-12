"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nfunction main() {\n    initialize();\n    createContent();\n    \n    _menu_js__WEBPACK_IMPORTED_MODULE_0__.addEventSwitchPage();\n}\n\nfunction initialize() {\n    let body = document.body;\n    \n    let div = body.appendChild(document.createElement('div'));\n    div.setAttribute('class', 'nav-container');\n    \n    let nav = div.appendChild(document.createElement('nav'));\n    nav.setAttribute('class', 'navbar');\n\n    initializeButtons('Home', 'home-button');\n    initializeButtons('Menu', 'menu-button');\n\n    body.appendChild(document.createElement('div')).setAttribute('id', 'content');\n\n}\n\nfunction initializeButtons(text, id) {\n    let nav = document.getElementsByClassName('navbar')[0];\n    let button = nav.appendChild(document.createElement('button'));\n\n    button.setAttribute('id', id)\n    button.textContent = text;\n}\n\nfunction createContent() {\n    createHeader();\n    createWelcomeText();\n    createOpeningHours();\n    createLocationText();\n}\n\nfunction createHeader() {\n    var idContainer = 'header-container';\n    var element = 'h1';\n    var elementClass = 'header';\n    var text = 'XYZ Korean Chicken'\n\n    createContentBlock(idContainer, element, elementClass, text);\n}\n\nfunction createWelcomeText() {\n    var idContainer = 'welcome-container';\n    var element = 'p';\n    var elementClass = 'welcome-text';\n    var text = \n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum. ' +\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum. ' +\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum. ' +\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus a est faucibus sollicitudin. Vivamus non tellus eget arcu. ipsum.'\n\n    createContentBlock(idContainer, element, elementClass, text);\n}\n\nfunction createOpeningHours() {\n    var idContainer = 'opening-container';\n    var element = 'p';\n    var elementClass = 'opening-text';\n    \n    createContentBlock(idContainer, element, elementClass, null);\n\n\n    const openingContainer = document.getElementById('opening-container');\n    openingContainer.replaceChildren();\n    \n    \n    var schedule = [\n        'Monday: 2pm - 10pm',\n        'Tuesday: 2pm - 10pm',\n        'Wednesday: 2pm - 10pm',\n        'Thursday: 2pm - 10pm',\n        'Friday: 2pm - 10pm',\n        'Saturday: 11am - 7pm',\n        'Sunday: 11am - 7pm'\n    ];\n\n    for (var i = 0; i < schedule.length; i++) {\n        let hourDiv = openingContainer.appendChild(document.createElement('div'));\n        hourDiv.setAttribute('class', 'opening-hours');\n        hourDiv.textContent = schedule[i];\n    }\n\n}\n\nfunction createLocationText() {\n    var idContainer = 'location-container';\n    var element = 'p';\n    var elementClass = 'location-text';\n    var text = '123 Forest Drive, Forestville, TX'\n\n    createContentBlock(idContainer, element, elementClass, text);\n}\n\n\n\n// ///////////////////////\n// // Helper Functions //\n// /////////////////////\n\nfunction createContentBlock(id, element, className, textContent) {\n    const content = document.getElementById('content');\n    const container = content.appendChild(document.createElement('div'));\n    container.setAttribute('id', id);\n    container.setAttribute('class', 'container')\n\n    const header = container.appendChild(document.createElement(element));\n    header.setAttribute('class', className);\n    header.textContent = textContent;\n}\n\n\n\n\n\n\nmain();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventSwitchPage: () => (/* binding */ addEventSwitchPage),\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\n\nfunction addEventSwitchPage() {\n    var menuButton = document.getElementById('menu-button');\n    menuButton.addEventListener('click', function() {showMenu()});\n}\n\nfunction showMenu() {\n    console.log('redirect');\n\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);