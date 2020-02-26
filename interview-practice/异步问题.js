/**
 * question 1
 */

// console.log('begin');

// setTimeout(() => {

//     console.log('setTimeout 1');

//     Promise.resolve()
//         .then(() => {
//             console.log('promise 1');
//             setTimeout(() => {
//                 console.log('setTimeout2');
//             });
//         })
//         .then(() => {
//             console.log('promise 2');
//         });

//     new Promise(resolve => {
//         console.log('a');
//         resolve();
//     }).then(() => {
//         console.log('b');
//     });

// }, 0);
// console.log('end');

// begin 
// end
// setTimeout 1
// a
// promise 1
// b
// promise 2
// setTimeout 2

/**
 * question 2
 */

// async function async1() {
//     console.log('async1 start'); // 2
//     await async2();
//     console.log('async1 end');  // 6
// }

// async function async2() {
//     console.log('async2');  // 3
// }

// console.log('script start');  //1 

// setTimeout(function () {
//     console.log('setTimeout'); // 8
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log('promise1'); // 4
//     resolve();
// }).then(function () {
//     console.log('promise2'); // 7
// });

// console.log('script end'); // 5

// 思路：
// promise和setTimeout都会将事件放入异步队列，但setTimeout即便是写了0，也会有4ms延迟
// await后面的才是异步，之前的都是同步，如果async函数里面没有await执行起来相当于同步函数
// new Promise是同步函数，而.then函数是异步任务