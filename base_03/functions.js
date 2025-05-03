//Some important concepts of functions
//Do refer hitesh sir repp also

//TO PASS MULTIPLE ARGUMENTS IN FUNCTION
function calculateCartPrice(...num1){//(...->is used as rest operator)
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
//All the values gets stored in num1 arr

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
//here val1=200,val2=300 and rest are in num1(stored in array)



//PASS OBJECTS IN FUNC
// const user = {
//     username: "hitesh",
//     prices: 199
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)//passing predefined object
// handleObject({
//     username: "sam",
//     price: 399
// })//here we are not passing predefined array



//PASS ARRAYS IN FUNC
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]//400
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
