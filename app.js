// 2 - variand

// 1 - masala


// function getName(full) {
//     let fileName = full.split('\\').pop().split('.')[0];
//     return fileName;
// }

// let full = "D:/Qudrat_c++/books/My_book.exe";
// console.log(getFileName(full)); 




// 2 - masala

// function getSum3(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// let n = 10;
// console.log(getSum3(n)); 

// 3 - masala


// function calcSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }


// let n = 5; 
// console.log(calcSum(n)); 


// 4 - masala



// let array = [10, false, "", "Abdulaziz", null];
// let tree = [];
// let falsy = [];
// for (let element of array) {
//   if (Boolean(element) === true) {
//     tree.push(element);
//   } else {
//     falsy.push(element);
//   }
// }
// console.log("tree:", tree);
// console.log("falsy:", falsy);

// 5 - masala



// function getMultipleValues(n, obj) {
//   const res = {};
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       res[key] = obj[key] * n;
//     }
//   }
//   return res;
// }

// // Test
// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// console.log(getMultipleValues(n, obj));



 // 6 - masala


// function updateArray(arr) {
//   let minIndex = 0;
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     }
//     if (arr[i] > arr[maxIndex]) {
//       maxIndex = i;
//     }
//   }

//   arr[minIndex] = 0;
//   arr[maxIndex] = 0;

//   return arr;
// }


// let numbers = [3, 8, 2, 10, 5];
// let updatedNumbers = updateArray(numbers);
// console.log( updatedNumbers);



// 7 - masala


// let str = "Nurmukhammad zo'r Programmer";
// let array = str.split("").some((element) => element == " ");
// console.log(array);


// 8 - masala

// const oquvchilar = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];


// let result = oquvchilar
//   .map((oquvchi) => {
//     if (oquvchi.protcent > 70) {
//       return { name: oquvchi.name, protcent: oquvchi.protcent, isPassed: true };
//     } else {
//       return { name: oquvchi.name, protcent: oquvchi.protcent, isPassed: false };
//     }
//   })
//   .reduce((jet, ) => {
//     return jet + val.isPassed;
//   }, 0);
// let failed = oquvchilar.length - result;
// console.log(`${result} ta o'tgan ${failed} ta otaolmagan`);


// 9 - masala


// let arr = [2, 5, 9, 17, , 5, 8, 7, 8, 4, 24];
// let result = arr.reduce((acc, curVal) => {
//   if (!acc.includes(curVal)) {
//     acc.push(curVal);
//   }
//   return acc;
// }, []);
// console.log(result);


// 10 - masala

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const wordCount = animals.reduce((countObj, animal) => {
//   if (!countObj[animal]) {
//     countObj[animal] = 1;
//   } else {
//     countObj[animal]++;
//   }
//   return countObj;
// }, {});
// console.log(wordCount);