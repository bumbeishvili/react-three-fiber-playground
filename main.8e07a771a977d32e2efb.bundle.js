(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1092:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(53),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1093);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1093:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1094:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(364).configure)([__webpack_require__(1095)],module,!1)}).call(this,__webpack_require__(95)(module))},1095:function(module,exports,__webpack_require__){var map={"./stories/Test.stories.js":1096};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1095},1096:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withSimpleCubes",(function(){return withSimpleCubes}));var _Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(485),_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(211),_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(321),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_three_fiber__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(159),__webpack_require__(322)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(1097),__webpack_require__(66));function Box(props){var mesh=Object(react__WEBPACK_IMPORTED_MODULE_3__.useRef)(),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_useState2=Object(_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),hovered=_useState2[0],setHover=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_useState4=Object(_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState3,2),active=_useState4[0],setActive=_useState4[1];return Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.b)((function(){mesh.current.rotation.x=mesh.current.rotation.y+=.01})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("mesh",Object(_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},props),{},{ref:mesh,scale:active?[1.5,1.5,1.5]:[1,1,1],onClick:function onClick(event){return setActive(!active)},onPointerOver:function onPointerOver(event){return setHover(!0)},onPointerOut:function onPointerOut(event){return setHover(!1)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("meshStandardMaterial",{color:hovered?"hotpink":"orange"})]}))}__webpack_exports__.default={title:"Start"};var withSimpleCubes=function withSimpleCubes(_ref){var posX=_ref.posX,label=_ref.label;Object(_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a)(_ref,["posX","label"]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:[label,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ambientLight",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("pointLight",{position:[10,10,10]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Box,{position:[-1.2,0,0]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Box,{position:[posX,0,0]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Box,{position:[1.2,0,0]})]})]})};withSimpleCubes.args={posX:-5,label:"Custom Label Name"},withSimpleCubes.argTypes={posX:{control:{type:"range",min:-10,max:10}}},withSimpleCubes.parameters=Object(_Users_datobumbeishvili_Desktop_git_react_three_fiber_playground_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"({ posX, label, ...args }) => {\n    return (\n        <div>\n            {label}\n            <Canvas\n            >\n                <ambientLight />\n                <pointLight position={[10, 10, 10]} />\n                <Box position={[-1.2, 0, 0]} />\n                <Box position={[posX, 0, 0]} />\n                <Box position={[1.2, 0, 0]} />\n            </Canvas>\n        </div>\n        )\n}"}},withSimpleCubes.parameters),withSimpleCubes.__docgenInfo={description:"",methods:[],displayName:"withSimpleCubes"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Test.stories.js"]={name:"withSimpleCubes",docgenInfo:withSimpleCubes.__docgenInfo,path:"src/stories/Test.stories.js"})},488:function(module,exports,__webpack_require__){__webpack_require__(489),__webpack_require__(645),__webpack_require__(646),__webpack_require__(810),__webpack_require__(1030),__webpack_require__(1063),__webpack_require__(1071),__webpack_require__(1083),__webpack_require__(1085),__webpack_require__(1090),__webpack_require__(1092),module.exports=__webpack_require__(1094)},556:function(module,exports){},646:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(364)}},[[488,1,2]]]);
//# sourceMappingURL=main.8e07a771a977d32e2efb.bundle.js.map