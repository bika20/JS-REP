//array
// const myarr=[1,3,5];
//we also get prototype acess in array

// Array methods
// myarr.push(6);
// myarr.push(7);
// myarr.pop();
// myarr.unshift(9);//add in the first
// myarr.unshift(10);
// myarr.shift();//just like pop but delets from front
// console.log (myarr);


//.join converts the array into strings
// console.log(myarr.join());
//.slice->myarr.slice(1,3)->doesn't include the last in range and doesn't make changes in original array.
//.splice->myarr.splice(1,3)->does include the last range and make changes in the original array

//When we add two arrays
const arr1=[1,2,3];
const arr2=['a','b','c'];

//push
// console.log(arr1.push(arr2));//merge arr2 as a signle ele in arr1
// console.log(arr1);

//concat
// const m=arr1.concat(arr2);//returns a new array
// console.log(m);

//spread
// const arr4=[5,6,7]
// const c=[...arr1,...arr2,...arr4];//we can add as many array we need 

// console.log (Array.from("ambika"));//makes an aray using the letters in ambika
// console.log(Array.isArray("a"));

// console.log(Array.from({name:"ambika"}));//interesting

let s1="100";
let s2=90;
let s3=200;
console.log(Array.from(s1))//another interesting  concept