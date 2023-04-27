const prompt = require('prompt-sync')({ sigint: true });

//==================================================== 4

// let i = 1;
// let sum = 0;
// let minimum;
// while (i <= 8) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     if (input % 2 == 0) {
//         sum = sum + input;

//         if (minimum == undefined) {
//             minimum = input;
//         }
//         if (input < minimum) {
//             minimum = input;
//         }
//     }
//     i++;
// }
// console.log("minimum even number: ", minimum, "sum of evevn number", sum);

//=================================================== 5

// let n = parseInt(prompt("Enter a number: "));
// let i = 1;
// let sum = 0;
// let y = 0;

// while (i <= n) {
//     sum = sum + (i * i * i);
//     i++;
// }
// y = Math.pow(sum, 1 / 3);
// console.log(y);

// ================================================= 6

// let n = parseInt(prompt("Enter a number: "));
// let i = 1;
// let sum = 0;

// while (i <= n) {
//     if (i % 2 == 1) {
//         sum = sum + (i * i);
//     }
//     else {
//         sum = sum - (i * i)
//     }
//     i++;
// }
// console.log(sum);

// ================================================= 7

// let i = 1;
// let sum = 0;

// while (i <= 600) {
//     if (i % 7 == 0 && i % 9 == 0) {
//         sum = sum + i;
//     }
//     i++;
// }
// console.log(sum);

// ================================================= 8

// let i = 1;
// let sum = 0;

// while (i <= 600) {
//     if (i % 7 == 0 || i % 9 == 0) {
//         sum = sum + i;
//     }
//     i++;
// }
// console.log(sum);

// =============================================== 9

// let i = 1;
// let sum = 0;

// while (i <= 600) {
//     if ((i % 7 == 0 || i % 9 == 0) && (i % 7 != 0 || i % 9 != 0)) {
//         sum = sum + i;
//     }
//     i++;
// }
// console.log(sum);

// ============================================= 10

// let i = 1;
// let sum = 0;
// let counter = 0;
// while (i <= 10) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     if (input % 2 == 1) {
//         sum = sum + input;
//         counter++;
//     }
//     i++;
// }
// let avg = sum / counter;
// console.log("total of all odd numbers: ", sum, "average of all odd number: ", avg);

// =========================================== 11

// let i = 1;
// let total = 0;
// let counter = 0;

// while (i <= 10) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     if (input % 2 == 0) {
//         total = total + input;
//         counter++;
//     }
//     i++;
// }
// console.log("total of all even numbers: ", total, "average of all even numbers: ", total / counter);

// ========================================== 12

// let i = 1;
// let sum = 0;
// let counter = 0;

// while (i <= 10) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     if (input % 4 == 0) {
//         sum = sum + input;
//         counter++;
//     }

//     i++;
// }
// console.log("total: ", sum, "avg", sum / counter);

// ========================================== 13

// let i = 1;
// let n = parseInt(prompt(`${i}. Enter a number: `));
// let sum = 0;
// while (i <= n) {
//     if (i % 2 == 1) {
//         sum = sum + i;
//     }
//     i++;
// }
// console.log(sum);

// ========================================= 14

// let input = parseInt(prompt(`Enter total number of numbers: `));
// let i = 1;
// let product = 1;

// while (i <= input) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     product = product * input;
//     i++;
// }
// console.log(product);


// ========================================== 15

// let i = 1;
// let sum = 0;
// while (i <= 20) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     sum = sum + input;
//     console.log(sum);
//     i++;
// }

// ========================================== 16

// let i = 1;
// let minimum;
// let maximum;
// let sum = 0;

// while (i <= 10) {
//     let input = parseInt(prompt(`${i}. Enter a number: `));
//     sum = sum + input;
//     if (minimum == undefined) {
//         minimum = input;
//     }
//     if (input < minimum) {
//         minimum = input;
//     }
//     if (maximum == undefined) {
//         maximum = input;
//     }
//     if (input > maximum) {
//         maximum = input;
//     }
//     i++;
// }
// console.log("lowest marks", minimum, "highest marks", maximum, "and avg marks", sum / 10);

// ======================================== 17

// let x = 0;
// let y = 1;
// let sum = 0;
// while (sum < 1600) {
//     console.log(sum);
//     x = y;
//     y = sum;
//     sum = x + y;
// }
// ======================================== 18

// let input = parseInt(prompt(`Enter a number: `));

// let digit = 0;

// while (input != 0) {
//     input = parseInt(input / 10);
//     digit++;
// }
// console.log(digit);

// ======================================== 19

// let input = parseInt(prompt(`Enter a number: `));
// let i = 1;
// let x = 1;
// while (i <= input) {
//     x = x * 10;
//     i++;
// }
// console.log(x);

// ======================================== 20

// let input = parseInt(prompt(`Enter a number: `));
// let x;
// while (input != 0) {
//     x = input % 10;
//     input = parseInt(input / 10);
//     console.log(x);
// }

// ======================================== 21

// let input = parseInt(prompt(`Enter a number: `));
// let x = 1;
// let y = 0;
// let i = 1;
// let saved = input;
// let digit = 0;
// while (input != 0) {
//     input = parseInt(input / 10);
//     digit++;
// }

// while (i < digit) {
//     x = x * 10;
//     i++;
// }

// while (saved > 0) {
//     y = parseInt(saved / x);
//     saved = saved % x;
//     x = x / 10;
//     console.log(y);
// }

// ====================================== 22

// let input = parseInt(prompt(`Enter a number between 0 and 9: `));
// if (input == 0) {
//     console.log("Zero");
// }
// if (input == 2) {
//     console.log("Two");
// } if (input == 3) {
//     console.log("Three");
// } if (input == 4) {
//     console.log("Four");
// } if (input == 5) {
//     console.log("Five");
// } if (input == 6) {
//     console.log("Six");
// } if (input == 7) {
//     console.log("Seven");
// } if (input == 8) {
//     console.log("Eight");
// } if (input == 9) {
//     console.log("Nine");
// }

// ===================================== 23

// let input = parseInt(prompt(`Enter a number: `));
// let x = 1;
// let y = 0;
// let i = 1;
// let saved = input;
// let digit = 0;
// while (input != 0) {
//     input = parseInt(input / 10);
//     digit++;
// }

// while (i < digit) {
//     x = x * 10;
//     i++;
// }

// while (saved > 0) {
//     y = parseInt(saved / x);
//     saved = saved % x;
//     x = x / 10;
//     if (y == 0) {
//         console.log("Zero");
//     }
//     if (y == 1) {
//         console.log("One");
//     }
//     if (y == 2) {
//         console.log("Two");
//     }
//     if (y == 3) {
//         console.log("Three");
//     } if (y == 4) {
//         console.log("Four");
//     } if (y == 5) {
//         console.log("Five");
//     } if (y == 6) {
//         console.log("Six");
//     } if (y == 7) {
//         console.log("Seven");
//     } if (y == 8) {
//         console.log("Eight");
//     } if (y == 9) {
//         console.log("Nine");
//     }
// }

// ==================================== 24

// let input = parseInt(prompt(`Enter a single digit, 1 to 9: `));
// let i = 1;

// while (i <= input) {
//     if (i == 1) {
//         console.log("One");
//     }
//     if (i == 2) {
//         console.log("Two");
//     } if (i == 3) {
//         console.log("Three");
//     } if (i == 4) {
//         console.log("Four");
//     } if (i == 5) {
//         console.log("Five");
//     } if (i == 6) {
//         console.log("Six");
//     } if (i == 7) {
//         console.log("Seven");
//     } if (i == 8) {
//         console.log("Eight");
//     } if (i == 9) {
//         console.log("Nine");
//     }
//     i++;
// }

// ================================== 25

// let input = parseInt(prompt(`Enter a number: `));
// let i = 1;
// let c = 0;
// while (i <= input) {
//     if (input % i == 0) {
//         c++;
//     }
//     i++;
// }
// console.log(c);

// // ================================== 26

// let input = parseInt(prompt(`Enter a number: `));
// let i = 1;
// let c = 0;
// while (i <= input) {
//     if (input % i == 0) {
//         c++;
//     }
//     i++;
// }
// if (c == 2) {
//     console.log(input, "is a prime number");
// }
// else {
//     console.log(input, "not a prime number");
// }

// ================================= 27

// let x = 1;
// while (x <= 1000) {
//     let i = 1;
//     let c = 0;
//     while (i <= x) {
//         if (x % i == 0) {
//             c++;
//         }
//         i++;
//     }
//     if (c == 2) {
//         console.log(x);
//     }
//     x++;
// }

// ================================ 28

// let input = parseInt(prompt(`Enter a number: `));
// let i = 1;
// let c = 0;
// while (i <= input) {
//     if (input % i == 0) {
//         c = c + i;
//     }
//     i++;
// }
// console.log(c);

// ================================ 29

// let input = parseInt(prompt(`Enter a number: `));
// let i = 1;
// let c = 0;
// while (i <= input) {
//     if (input % i == 0) {
//         if (c < input) {
//             c = c + i;
//         }
//         console.log(i, "(list of factors)");
//     }
//     i++;
// }

// if (c == input) {
//     console.log(input, "is a perfect number");
// }
// else {
//     console.log(input, "NOT a perfect number");
// }

// // =================================== 30

// let start = parseInt(prompt(`Enter point A: `));
// let end = parseInt(prompt(`Enter point B: `));

// let prime = 0;

// let current = start;
// while (current <= end) {
//     let i = 1;
//     let c = 0;
//     let fSum = 0;
//     while (i <= current) {
//         if (current % i == 0) {
//             c++;
//             if (fSum < current) {
//                 fSum = fSum + i;
//             }
//         }
//         i++;
//     }
//     if (c == 2) {
//         prime++;
//     }
//     current++;
// }

// console.log(prime, "prime numbers!");
