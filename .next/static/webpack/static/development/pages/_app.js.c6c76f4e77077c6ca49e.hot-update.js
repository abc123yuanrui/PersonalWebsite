webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./styles.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??__nextjs_postcss!./styles.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,500,700);"]);
// Module
exports.push([module.i, "html,\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 62.5%;\n    font-size: 16px;\n}\n/*-- Inspiration taken from abdo steif -->\n/* --> https://codepen.io/abdosteif/pen/bRoyMb?editors=1100*/\n\n/* Navbar section */\n\n.nav {\n    width: 100%;\n    height: 65px;\n    position: fixed;\n    line-height: 65px;\n    text-align: center;\n    overflow-y: 'auto'\n}\n\n.nav div.logo {\n    float: left;\n    width: auto;\n    height: auto;\n    padding-left: 3rem;\n}\n\n.nav div.logo a {\n    text-decoration: none;\n    color: #fff;\n    font-size: 2rem;\n}\n\n.nav div.logo a:hover {\n    color: #00E676;\n}\n\n.nav div.main_list {\n    height: 65px;\n    float: right;\n}\n\n.nav div.main_list ul {\n    width: 100%;\n    height: 65px;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.nav div.main_list ul li {\n    width: auto;\n    height: 65px;\n    padding: 0;\n    padding-right: 3rem;\n}\n\n.nav div.main_list ul li a {\n    text-decoration: none;\n    color: #fff;\n    line-height: 65px;\n    font-size: 1.5rem;\n}\n\n.nav div.main_list ul li a:hover {\n    color: #00E676;\n}\n\n\n/* Home section */\n\n.home {\n    width: 100%;\n    height: 100vh;\n    background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);\n    background-position: center top;\n\tbackground-size:cover;\n}\n\n.navTrigger {\n    display: none;\n}\n\n.nav {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    transition: all 0.4s ease;\n}\n\n\n/* Media qurey section */\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n    .container {\n        margin: 0;\n    }\n}\n\n@media screen and (max-width:768px) {\n    .navTrigger {\n        display: block;\n    }\n    .nav div.logo {\n        margin-left: 15px;\n    }\n    .nav div.main_list {\n        width: 100%;\n        height: 0;\n        overflow: hidden;\n    }\n    .nav div.show_list {\n        height: auto;\n        display: none;\n    }\n    .nav div.main_list ul {\n        flex-direction: column;\n        width: 100%;\n        height: 100vh;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        background-color: #111;\n        /*same background color of navbar*/\n        background-position: center top;\n    }\n    .nav div.main_list ul li {\n        width: 100%;\n        text-align: right;\n    }\n    .nav div.main_list ul li a {\n        text-align: center;\n        width: 100%;\n        font-size: 3rem;\n        padding: 20px;\n    }\n    .nav div.media_button {\n        display: block;\n    }\n}\n\n\n/* Animation */\n/* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */\n\n.navTrigger {\n    cursor: pointer;\n    width: 30px;\n    height: 25px;\n    margin: auto;\n    position: absolute;\n    right: 30px;\n    top: 0;\n    bottom: 0;\n}\n\n.navTrigger i {\n    background-color: #fff;\n    border-radius: 2px;\n    content: '';\n    display: block;\n    width: 100%;\n    height: 4px;\n}\n\n.navTrigger i:nth-child(1) {\n    -webkit-animation: outT 0.8s backwards;\n    animation: outT 0.8s backwards;\n    -webkit-animation-direction: reverse;\n    animation-direction: reverse;\n}\n\n.navTrigger i:nth-child(2) {\n    margin: 5px 0;\n    -webkit-animation: outM 0.8s backwards;\n    animation: outM 0.8s backwards;\n    -webkit-animation-direction: reverse;\n    animation-direction: reverse;\n}\n\n.navTrigger i:nth-child(3) {\n    -webkit-animation: outBtm 0.8s backwards;\n    animation: outBtm 0.8s backwards;\n    -webkit-animation-direction: reverse;\n    animation-direction: reverse;\n}\n\n.navTrigger.active i:nth-child(1) {\n    -webkit-animation: inT 0.8s forwards;\n    animation: inT 0.8s forwards;\n}\n\n.navTrigger.active i:nth-child(2) {\n    -webkit-animation: inM 0.8s forwards;\n    animation: inM 0.8s forwards;\n}\n\n.navTrigger.active i:nth-child(3) {\n    -webkit-animation: inBtm 0.8s forwards;\n    animation: inBtm 0.8s forwards;\n}\n\n@-webkit-keyframes inM {\n    50% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(45deg);\n    }\n}\n\n@keyframes inM {\n    50% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(45deg);\n    }\n}\n\n@-webkit-keyframes outM {\n    50% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(45deg);\n    }\n}\n\n@keyframes outM {\n    50% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(45deg);\n    }\n}\n\n@-webkit-keyframes inT {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@keyframes inT {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@-webkit-keyframes outT {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@keyframes outT {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@-webkit-keyframes inBtm {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n@keyframes inBtm {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n@-webkit-keyframes outBtm {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n@keyframes outBtm {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n.affix {\n    padding: 0;\n    background-color: rgb(31, 27, 223);\n}\n\n\n\n\n\n\n.myH2 {\n\ttext-align:center;\n\tfont-size: 4rem;\n}\n.myP {\n\ttext-align: justify;\n\tpadding-left:15%;\n\tpadding-right:15%;\n\tfont-size: 20px;\n}\n@media all and (max-width:700px){\n\t.myP {\n\t\tpadding:2%;\n\t}\n}", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"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","file":"styles.css","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 62.5%;\n    font-size: 16px;\n}\n/*-- Inspiration taken from abdo steif -->\n/* --> https://codepen.io/abdosteif/pen/bRoyMb?editors=1100*/\n\n/* Navbar section */\n\n.nav {\n    width: 100%;\n    height: 65px;\n    position: fixed;\n    line-height: 65px;\n    text-align: center;\n    overflow-y: 'auto'\n}\n\n.nav div.logo {\n    float: left;\n    width: auto;\n    height: auto;\n    padding-left: 3rem;\n}\n\n.nav div.logo a {\n    text-decoration: none;\n    color: #fff;\n    font-size: 2rem;\n}\n\n.nav div.logo a:hover {\n    color: #00E676;\n}\n\n.nav div.main_list {\n    height: 65px;\n    float: right;\n}\n\n.nav div.main_list ul {\n    width: 100%;\n    height: 65px;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.nav div.main_list ul li {\n    width: auto;\n    height: 65px;\n    padding: 0;\n    padding-right: 3rem;\n}\n\n.nav div.main_list ul li a {\n    text-decoration: none;\n    color: #fff;\n    line-height: 65px;\n    font-size: 1.5rem;\n}\n\n.nav div.main_list ul li a:hover {\n    color: #00E676;\n}\n\n\n/* Home section */\n\n.home {\n    width: 100%;\n    height: 100vh;\n    background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);\n    background-position: center top;\n\tbackground-size:cover;\n}\n\n.navTrigger {\n    display: none;\n}\n\n.nav {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    -webkit-transition: all 0.4s ease;\n    transition: all 0.4s ease;\n}\n\n\n/* Media qurey section */\n\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n    .container {\n        margin: 0;\n    }\n}\n\n@media screen and (max-width:768px) {\n    .navTrigger {\n        display: block;\n    }\n    .nav div.logo {\n        margin-left: 15px;\n    }\n    .nav div.main_list {\n        width: 100%;\n        height: 0;\n        overflow: hidden;\n    }\n    .nav div.show_list {\n        height: auto;\n        display: none;\n    }\n    .nav div.main_list ul {\n        flex-direction: column;\n        width: 100%;\n        height: 100vh;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        background-color: #111;\n        /*same background color of navbar*/\n        background-position: center top;\n    }\n    .nav div.main_list ul li {\n        width: 100%;\n        text-align: right;\n    }\n    .nav div.main_list ul li a {\n        text-align: center;\n        width: 100%;\n        font-size: 3rem;\n        padding: 20px;\n    }\n    .nav div.media_button {\n        display: block;\n    }\n}\n\n\n/* Animation */\n/* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */\n\n.navTrigger {\n    cursor: pointer;\n    width: 30px;\n    height: 25px;\n    margin: auto;\n    position: absolute;\n    right: 30px;\n    top: 0;\n    bottom: 0;\n}\n\n.navTrigger i {\n    background-color: #fff;\n    border-radius: 2px;\n    content: '';\n    display: block;\n    width: 100%;\n    height: 4px;\n}\n\n.navTrigger i:nth-child(1) {\n    -webkit-animation: outT 0.8s backwards;\n    animation: outT 0.8s backwards;\n    -webkit-animation-direction: reverse;\n    animation-direction: reverse;\n}\n\n.navTrigger i:nth-child(2) {\n    margin: 5px 0;\n    -webkit-animation: outM 0.8s backwards;\n    animation: outM 0.8s backwards;\n    -webkit-animation-direction: reverse;\n    animation-direction: reverse;\n}\n\n.navTrigger i:nth-child(3) {\n    -webkit-animation: outBtm 0.8s backwards;\n    animation: outBtm 0.8s backwards;\n    -webkit-animation-direction: reverse;\n    animation-direction: reverse;\n}\n\n.navTrigger.active i:nth-child(1) {\n    -webkit-animation: inT 0.8s forwards;\n    animation: inT 0.8s forwards;\n}\n\n.navTrigger.active i:nth-child(2) {\n    -webkit-animation: inM 0.8s forwards;\n    animation: inM 0.8s forwards;\n}\n\n.navTrigger.active i:nth-child(3) {\n    -webkit-animation: inBtm 0.8s forwards;\n    animation: inBtm 0.8s forwards;\n}\n\n@-webkit-keyframes inM {\n    50% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(45deg);\n    }\n}\n\n@keyframes inM {\n    50% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(45deg);\n    }\n}\n\n@-webkit-keyframes outM {\n    50% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(45deg);\n    }\n}\n\n@keyframes outM {\n    50% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(45deg);\n    }\n}\n\n@-webkit-keyframes inT {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@keyframes inT {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@-webkit-keyframes outT {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@keyframes outT {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(9px) rotate(135deg);\n    }\n}\n\n@-webkit-keyframes inBtm {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n@keyframes inBtm {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n@-webkit-keyframes outBtm {\n    0% {\n        -webkit-transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        -webkit-transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        -webkit-transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n@keyframes outBtm {\n    0% {\n        transform: translateY(0px) rotate(0deg);\n    }\n    50% {\n        transform: translateY(-9px) rotate(0deg);\n    }\n    100% {\n        transform: translateY(-9px) rotate(135deg);\n    }\n}\n\n.affix {\n    padding: 0;\n    background-color: rgb(31, 27, 223);\n}\n\n\n\n\n\n\n.myH2 {\n\ttext-align:center;\n\tfont-size: 4rem;\n}\n.myP {\n\ttext-align: justify;\n\tpadding-left:15%;\n\tpadding-right:15%;\n\tfont-size: 20px;\n}\n@media all and (max-width:700px){\n\t.myP {\n\t\tpadding:2%;\n\t}\n}"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.c6c76f4e77077c6ca49e.hot-update.js.map