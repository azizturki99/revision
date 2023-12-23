function add(x,y){
    return x+y
}
const resultadd=add(2,3)
function subtract(x,y){
    return x-y
}
const resultsubtract=subtract(5,1)
function op(operator,x,y){
    if (operator==='+'){
        return add(x,y)
    }
    else {
        return subtract(x,y)
    }
}
var operator='+'
var x=2
var y=4
var result
if (operator==='+'){
    result = x+y
}
else {
    result = x-y
}
function divide(x,y){
    return x/y
}
const resultdivide=divide(10,5)
function multiply(x,y){
    return x*y
}
const resultmultiply=multiply(7,2)