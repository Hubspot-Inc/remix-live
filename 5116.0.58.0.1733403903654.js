"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5116],{335116:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="name: Slither Analysis\non: [push]\n\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm install\n    - uses: crytic/slither-action@v0.2.0\n      with:\n        target: 'contracts'\n        slither-args: '--solc-remaps \"@openzeppelin/contracts=./node_modules/@openzeppelin/contracts hardhat=./node_modules/hardhat\"'\n        fail-on: 'low'\n        solc-version: '0.8.2'"}}]);
//# sourceMappingURL=5116.0.58.0.1733403903654.js.map