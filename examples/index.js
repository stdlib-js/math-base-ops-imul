/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var INT32_MIN = require( '@stdlib/constants-int32-min' );
var INT32_MAX = require( '@stdlib/constants-int32-max' );
var imul = require( './../lib' );

var randi;
var a;
var b;
var y;
var i;

randi = discreteUniform( INT32_MIN, INT32_MAX );

for ( i = 0; i < 100; i++ ) {
	a = randi()|0;
	b = randi()|0;
	y = imul( a, b );
	console.log( '%d x %d = %d', a, b, y );
}
