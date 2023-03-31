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


// function in js-->there is no concept of access modifiers except in classes 
function callMe()
{
    console.log("hello");
}

callMe()

function add(a,b)
{
    return a+b
}

console.log(add(10,5))

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


const a = 20
// a=200
console.log(a)

let a=20;
for(let i=3;i<5;i++)
{
    if(true)
    {
        var x=90;
        let a=200;
    }

    console.log(x,a,i)
}

console.log(a)

// output:
// 90 20 3
// 90 20 4
// 20

let a1=[2,3,4];
let a2=a1;
a2[0]=90;
console.log(a1,a2)

// o/p- 90,3,4  90,3,4

let c=function(a,b)
{
    console.log(a+b)

}


//arrow function
let d= (a,b) => {
    console.log(a-b)
}

