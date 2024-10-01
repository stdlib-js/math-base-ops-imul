// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Math.imul?Math.imul:null;return"function"==typeof e?e:function(e,t){var n,o;return((n=(65535&(e|=0))>>>0)*(o=(65535&(t|=0))>>>0)>>>0)+((e>>>16>>>0)*o+n*(t>>>16>>>0)<<16>>>0)|0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).imul=t();
//# sourceMappingURL=index.js.map
