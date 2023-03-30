let p1 = {
    name:{
        firstname:'subhani',
        secondname:'shaik'
    },
    age : 22
}

console.log(p1.name.firstname+" "+p1.name.secondname+" "+p1.age)
console.log(typeof(p1))  //object

let arr=[1,2,3,'subhani',[]]  //here array is also object   
console.log(arr.length)  //to find the size of the array you declared


//function in js-->there is no concept of access modifiers except in classes 
// function callMe()
// {
//     console.log("hello");
// }

// callMe()

// function add(a,b)
// {
//     return a+b
// }

// console.log(add(10,5))

let a=20;
if(true)
{
    let a=200;
    console.log(a);
}
function callme()
{
    let a=90;
    console.log(a);
}
callme();
console.log(a);