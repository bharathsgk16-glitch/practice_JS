/* SET OF FIRSTTASKS
var varname="Bharath";
let letname="Hath";
const constname="Sath";

console.log("The name is"+ varname);
console.log("The name is"+ letname);
console.log("The name in con"+constname);
varname="Raj";
console.log("The name is"+ varname);
letname="ramu";
console.log(letname);

var name="Bharath",age=12,city="Coimbatore";
console.log("The name"+name+"The age "+
    age+"This placeis" +city);

    textaof="jai";
    console.log("The name is"+textaof);

    //swap woth third
    let a=10;
    let b=20;

    console.log(` Before Swapping ${a} and ${b}`);
    let c=a;
    a=b;
    b=c;
    console.log(` After swaping Swapping ${a} and ${b}`);


//swap 
let d=10;
let e=20;
console.log(` Before Swapping ${d} and ${e}`);
d=d+e;
e=d-e;
d=d-e;
console.log(` After Swapping ${d} and ${e}`);
// 
const pi=3.14;
let ra;
console.log(`area of circle: ${pi*ra*ra}`);

//same varaible
//  var as=10;
//  let as=23;
//  console.log(as);


//let
// {
// let z=0;
// }
// console.log(z);


//hosting
console.log(names``);
var names="bharath";
console.log(names);

*/

// let postive=true;
// if(postive){
//     console.log(" Its postive")
// }else{
//     console.log("Its negative");

// }
// let num=12;
// if(num %2==0){
// console.log("Its odd number");
// }else{
//     console.log("its negative number");
// }

// let age=21;
// if(age>=18){
//     console.log("Your are eligible to vote")
// }else{
//     console.log("Not eleigible");
// }

// let marks=88;
// if( marks <90){
//     console.log(" grade is A")
// }else if(marks >=80 && marks< 90 ){
//     console.log(" grade is B")
// }else if(marks >= 70 && marks < 80) {
//   console.log("Grade: C");
// }
// else if (marks >= 60 && marks < 70) {
//   console.log("Grade: D");
// }
// else {
//   console.log("Grade: Fail");
// }

// let a=12,b=23,c=19;
// if(a>b && a>c){
//     console.log(`Largest number is a" ${a}`);
// }  
// else if(b>a && b>c){
// console.log(`Largest number is b" ${b}`);
// }else{
//    console.log(`Largest number is c" ${c}`); 
//}

let nums=-10;
if(nums>0){
    if(nums==0){
        console.log("Number is zero")
    }
console.log("Number is Postive");
}
 else {
  console.log("Number is Negative");
}

let age=20;
let weight=60;

if(age>18){
    if(weight>50){
        console.log('can Donate blood')
    }else{
        console.log('CAnnot donate');
    }
}else{
    console.log(`Cannot donate`);
}

let day=4;
if(day==1){
    console.log("Monday");
}
else if(day==2){
    console.log("Tuesday");
}
else if(day==3){
    console.log("Wednesday");
}
else if(day==4){
    console.log("Thursday");
}
else if(day==5){
    console.log("Friday");
}
else if(day==6){
    console.log("Saturday");
}
else if(day==7){
    console.log("Sunday");
}else{
    console.log("Invalid Day")
}

let year=2024;
if(year%4==0){
    
    if(year%100==0){
if(year%400==0){
      console.log("leap year")
}else{
     console.log(" not leap year")
}
    }
    console.log("leap year")
}else{
console.log('not leap year')
}
let num=15;
if(num%3==0 && num%5==0){
    console.log("Divisible by both 3 and 5");
}
else if(num%3==0){
    console.log("Divisible by 3");
}
else if(num%5==0){
    console.log("Divisible by 5");
}