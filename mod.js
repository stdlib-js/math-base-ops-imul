// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.imul?Math.imul:null;var n="function"==typeof t?t:function(t,n){var u,a;return((u=(65535&(t|=0))>>>0)*(a=(65535&(n|=0))>>>0)>>>0)+((t>>>16>>>0)*a+u*(n>>>16>>>0)<<16>>>0)|0};export{n as default};
//# sourceMappingURL=mod.js.map
