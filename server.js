// console.log()
//
// // let n1 = parseInt(process.argv[2]);
// // let n2 = parseInt(process.argv[3]);
// //
// // console.log(`number ${n1} + ${n2} = ${n1 + n2}`)
//
// console.log("first line")
//
//
// const pr = new Promise((r) => {
//     setTimeout(function () {
//         return r("second line");
//     }, 2000)
// })
//
// function myLog(text) {
//     console.log(text)
// }
//
// function show(text) {
//     return () => new Promise(r => setTimeout(() => r(text), 2000))
// }
//
//
//
// pr.then(myLog).then(show("40 line line")).then(myLog).then(show("5 line line")).then(myLog)
//
// console.log("third line line")
//
//
//
//
//
//
//
//
//
//
//
// let v1 = function f1() {
//     return "hi";
// }
//
// let v2 = v1();

// let v3 = v1;
//
// console.log(v3)
//
//
//
//
//
//


const fs = require("fs").promises


// function readFile(filePath) {
//     return new Promise(resolve => {
//         fs.readFile(filePath, function (err, res) {
//             resolve(res.toString("utf-8"))
//         });
//     })
// }


// const fs = require("fs").promises

// readFile("./file.txt").then(console.log)

fs.readFile("./file.txt").then(v => v.toString("utf-8")).then(console.log)
// fs.writeFile("./file.txt","data is here")

// console.log(require("path").join(__dirname,".."))