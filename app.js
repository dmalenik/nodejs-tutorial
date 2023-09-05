import _ from 'lodash';
// either .mjs extension or in package.json - type: "module"
import * as tutorial from './tutorial.js';

console.log("Hello from Node.js");
console.log(tutorial);

let t = tutorial.sum;
console.log(t(2, 2));

let e = _.fill([1, 2, 3, 4, 5], "banana", 1, 4);
console.log(e);
