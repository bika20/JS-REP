//Date
// let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let my=new Date(2023,1,23,5,3);
// let my1=new Date(2025,0,25);
// console.log(my.toDateString());
// console.log(my1.toLocaleString());

let mydate2=new Date("01-14-2023")//month-date-year
let mydate3=new Date("2023-01-14")//year-mon-date

//TIMESTAMPS
let time= Date.now();//gives you timestamps->gives milisec value
console.log(time);
console.log(mydate2.getTime());
console.log(Math.floor(Date.now()/1000))//->converts milli sec into secs

//To get particular day,month,date
let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);//as jan=0 and so on
console.log(newdate.getDay());


//useful method
//toLocaleString
newdate.toLocaleString('default',{
    weekday:"long",
})