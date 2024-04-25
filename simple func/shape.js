"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// terminal orqali ishlatdim
// square shape function
var squareShape = function (a) {
    return a * a;
};
//square shape function
var rectangleShape = function (width, height) {
    if (width === void 0) { width = 1; }
    if (height === void 0) { height = 1; }
    return width * height;
};
//square shape function
var pi = 3.14;
var circleShape = function (r) {
    if (r === void 0) { r = 1; }
    return pi * r * r;
};
console.log(squareShape(5));
console.log(rectangleShape(5, 10));
console.log(circleShape(5));
