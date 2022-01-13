console.log("hello world!!!!!!!");

// var i;
// // global scrope

// i = 1;

// if (i == 1) {
//   var j = 20;
//   //  block or local scrope

//   console.log("yes" + 1);
// } else {
//   console.log("no ");
// }
// console.log(i, j);

// let i;
// // we can not asign
// console.log(i, j);
// let i;
// // global scrope

// i = 1;

// if (i == 1) {
//   let j = 20;
//   //  block or local scrope

//   console.log("yes" + 1);
// } else {
//   console.log("no ");
// }

// let i = 10,
//   j = 20;
// console.log(i + j, typeof i);
// console.log(i - j, typeof j);
// console.log(i * j);
// console.log(i % j);
// let ans = i / j;
// console.log(ans);

// let i = 5;
// j = 6;
// // console.log(i++);
// console.log(++i);

// let i = 10;
// j = "10";

// console.log(i == j);
// // == is used for comparsion between values
// console.log(i === j);
// === is used for comparsion between data base like number or string

//              2nd lecture
// if else
// var num1 = 20,
//   num2 = 40,
//   num3 = "20",
//   num4 = "40";

// if (num1 == num3) {
//   console.log("both the number are equal !");
// } else {
//   console.log("both the number are not euqal !");
// }
//     //    and
// if (num1 == num2 && num3 == num4) {
//   console.log("all sub condition are good.");
// } else {
//   console.log("all sub condition are bad");
// }

//        switch

// let num1 = 2;
// switch (num1) {
//   case 1:
//     console.log("condition 1.");
//     break;
//   case 2:
//     console.log("condition 2.");
//     break;
//   case 3:
//     console.log("condition 3.");
//     break;
//   default:
//     console.log("default.");
// }

// entry control loop --> for, while
// exit control loop --> do/while

//           for
// let lastnum = 10;

// for (let i = 1; i <= lastnum; i++) {
//   console.log(i);
// }
// for (var i = 1; i <= lastnum; i++) {
//     console.log(i);
//   }

//        while
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//     do
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//          break
// for (i = 0; i <= 20; i++) {
//   if (i == 15) {
//     break;
//   }
//   console.log(i);
// }
// for (i = 0; i <= 20; i = i + 2) {
//   console.log(i);
// }

//        continue
// for (let i=1; i <= 20; i++) {
//   if (1 % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// code for even number and it print upto 28
// for (let i = 1; i <= 30; i++) {
//   if (i == 29) {
//     break;
//   }
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }

// function

// function test(n1, n2) {
//   if (n1 == n2) {
//     console.log("both no. are equal !");
//   } else {
//     console.log("both no. are not equal !");
//   }
// }
// test(2, 5);

let ans = test(2, 3);
console.log(ans);

function test(n1, n2) {
  if (n1 === n2) {
    console.log("both no. are equal !");
    return true;
  } else {
    console.log("both no. are not equal !");
    return false;
  }
}
