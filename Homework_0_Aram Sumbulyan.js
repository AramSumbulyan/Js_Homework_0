 //1
/* var n = 123
 if (n % 2 == 0){
     console.log(even)
 }
  else 
  {
    console.log(odd)
  }*/
 


  //1.2
  /*
  var v = 35
  if (v % 2 !==0){
    console.log(odd)
  }
  else 
  {
    console.log(even)
  }*/
 

// //  //1.3
// //  var g = 70
// //  if (g % 2 == 0){
// //    console.log(even)
// //  }
// //  else
// //  {
// //    console.log(odd)
// //  }
// //  //2
// // var a = 3
// // var b = 14
// // if (a % b == 0 )
// //  {
// //    console.log(1)
// //  }
// //  else if (b % a == 0)
// //  {
// //    console.log(1)
// //  }
// //   else
// //   {
// //     console.log(0)
// //   }
// //   //2.2
// //   var a = 18
// //   var b = 2
// //   if (a % b == 0 || b % a == 0)
// //   {
// //     console.log(1)
// //   }
// //   else
// //   {
// //     console.log(0)
// //   }
// // //2.3
 

  /*var a = 7
 var b = 21

  if (a % b == 0 || b % a == 0){
    console.log(1)
  }
  else 
  {
    console.log(0)
  }*/


//3
/*& var a =45
  var b = 90
  var c = 180
 
 let d = c-a-b

consol.log(d)
*/
//4.1
/*var n = "3"
let result = n + n*2 + n*3
console.log(result)
*/

//4.2
/*
var n = "17"
let result = n + n*2 + n*3
console.log(result)
*/

//4.3
 /*
var n = "100"
let result = n + n*2 + n*3
console.log(result)
*/


//6.1
/*
var a = 45
var b = -12
var c = 0
var d = 3
var e = -15

let sum = (a+b+c+d+e)/5
console.log(sum)
*/
//5

/*
let n = 367
let a=Math.floor(n/100)
let b=Math.floor(n/10%10)
let c=Math.floor(n%10)
 
console.log(c,b,a)
*/


/*
//6
var a = 7
var b = 52
var c = -23
var d = 9
var e = -81

let sum = (a+b+c+d+e)/5
console.log(sum)

*/

//7
/*
var a = 21
var b = 35
var c = 13
var d = 420
var e = 24

if (a % 3 == 0 || b % 3 == 0 || c % 3 == 0 || d % 3 == 0 || e % 3 == 0 )
{
  console.log(is a multiple of "3")
}
else
{
 console.log(is not multiple of "3")
 
}
*/

//8

/*let n = prompt
switch (n = 1 "months" && n <= 12 "months")
{
  console.log(baby)
 
}
case(n =1 year && n <= 2 years  )
{
  console.log(child)
}
*/

//9 
/*
let a = 45
let b = 26
let c = 78

if (a>b && a<c )
{
  console.log(b,a,c)
}
*/
 //9.2
/*
let a = -23
let b = -456
let c = 0

if (a>b && a<c )
{
  console.log(b,a,c)

}
*/
//10
/*let a = prompt("a")
let b = prompt("b")
let c = prompt("c")
 
//a
if (a && b && c >= 40)

{
  console.log("passed")

}

else 
{
  console.log("not passed")
}
//b


 if(a < 40 || b < 40 || c < 40)
{
   let sum = (a+b+c)/3
    if(sum >= 50)
  {
      console.log("passed")
  }
  else   
  {
    console.log("Not passed")
  }
 
}*/

//11 

/*

function multiply(a, b) {
    if (a < 0) {
      return -(multiply(-a, b))
    } else if (b < 0) {
      return -(multiply(a, -b))
    } else {
      var total = 0;
      
      return total;
    }
    console.log("total")
  }
  */

  //12
   /*
  var a =1
  var b =2
  var c =1

  let quadra = a*Math.pow(x,2)+b*x+c
  let D = Math.pow(b,2)-4*a*c 
  if (D> 0)
  {
    "x1" = (-b+Math.sqrt(D))/2a
    "x2" = (-b-Math.sqrt(D))/2a
    console.log("x1")
    console.log("x2")
  } 
  else if(D<0)
  {
    console.log("x is not found")
  }
  else (D=0)
  {
    "x" = (-b)/2a
    console.log("x")
  }*/


  //13
 /*
 var n = +prompt("n");
 var i = 0;
 var j = 0;
 if (n % 2 === 0 && !Math.floor(n / 10))
 {
   i += 1;
   console.log("i")
 }
 
 if (n % 3 === 0 && n % 10 === 1)
 {
   j += 1;
   console.log("j")
 } 

 */

//14

/*

var a = 5
var b = "2453"

var "b" (5) {
  return /\d/.test(myString);
}*/

//15
/*
function reverse_a_number(13)
{
	13 = 13 + "";
	return n.split("").reverse().join("");
}
console.log(split);
*/
//17
/*

var side1 = 6; 
var side2 = 7; 
var s = (side1 + side2)/2;
var area =  Math.sqrt(s*(s-side1)*(s-side2);
console.log(area);
 ???
*/

//18.1
 /*
const num = 5;
const difference = (num, min = Infinity, max = -Infinity) => {
   if(num){
      const digit = num % 10;
      return difference(Math.floor(num / 10), Math.min(digit, min),
      Math.max(digit, max));
   };
   return max - min;
};
console.log(difference(num));

//18.2

const num = 152;
const difference = (num, min = Infinity, max = -Infinity) => {
   if(num){
      const digit = num % 10;
      return difference(Math.floor(num / 10), Math.min(digit, min),
      Math.max(digit, max));
   };
   return max - min;
};
console.log(difference(num));

//18.3

const num = 4593653;
const difference = (num, min = Infinity, max = -Infinity) => {
   if(num){
      const digit = num % 10;
      return difference(Math.floor(num / 10), Math.min(digit, min),
      Math.max(digit, max));
   };
   return max - min;
};
console.log(difference(num));
*/
