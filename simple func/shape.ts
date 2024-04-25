export { }
// terminal orqali ishlatdim
// square shape function
const squareShape = (a: number): number => {
    return a * a;
}

//square shape function
const rectangleShape = (width: number = 1, height: number = 1): number => {
    return width * height;
}

//square shape function
const pi: number = 3.14
const circleShape = (r: number = 1): number => {
    return pi * r * r;
}

console.log(squareShape(5))
console.log(rectangleShape(5, 10))
console.log(circleShape(5))