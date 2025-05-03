//Some new and important points
const mysmb= Symbol("key1")
const ob={
    name:"ambika",
    "last name":"kumari",
    // mykey:"mysmb",//when declared this way it won't take it as symbol but only string
    [mysmb]:"mysmb"//we have to declare symbol like tis
}
//Now mehtods to acess them
console.log(ob.name)//this will work

// console.log(ob.last name)//this will not work
//correct way 
console.log(ob["last name"])//this will work

// console.log(ob["mysmb"])//this is wrong when printing symbol datatype 
console.log(ob[mysmb]);//this is the correct way
console.log(ob)


//Also refer the hitesh sir repo
