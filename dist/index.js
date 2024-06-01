"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=v(function(q,n){
var x=typeof Math.imul=="function"?Math.imul:null;n.exports=x
});var p=v(function(O,m){
var c=65535;function b(t,r){var a,l,s,f,i,e;return t|=0,r|=0,s=t>>>16>>>0,f=r>>>16>>>0,i=(t&c)>>>0,e=(r&c)>>>0,a=i*e>>>0,l=s*e+i*f<<16>>>0,a+l|0}m.exports=b
});var h=o(),y=p(),u;typeof h=="function"?u=h:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
