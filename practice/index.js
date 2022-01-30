//string templtaing

// let a = 4;
// let b = 3;
// console.log(`the product of these two numbers ${a*b}`)

// let arr = [3,2,4];
// arr.push(5);
// console.log(arr);

// split in arrays or string

// let arr = "task_list_add";
// let res = arr.split("_")[1];
// console.log(res);

// const fun = function(a,b){
// // console.log(a+b);
// // // }

// // // // fun(2,3);



// // // function outer(a) {
// // //         function inner(b) {
    
// // //             console.log(a);
// // //             console.log(b);
    
// // //         }
// // //         return inner;
// // //     }
    
// // //     let x = outer("Outer Argument");
// // //     x("Inner Argument");

// // //     function example(a){
// // //         function any(b){
// // //             console.log(a);
// // //             console.log(b);
// // //         }
// // //     }


// // let cal = {
// //         'num1': 10,
// //         'num2': 20,
// //         'sum': function() {
// //             let add = this.num1 + this.num2;
// //             console.log(add);
// //         },
// //         'showThis': function() {
// //             console.log(this);
// //         }
// //     }

// //     cal.showThis();
// //     let complex_obj = {
// //     'key1': "Value 1",
// //     'key2': "Value 2",
// //     'compex_key': {
// //         'inner_key1': "Inner Value 1",
// //         'inner_key2': "Inner Value 2",
// //         'inner_fn': function() {
// //             console.log(this);
// //         }
// //     },
// //     'outer_fn': function() {
// //         console.log(this);
// //     }
// // }

// // complex_obj.compex_key.inner_fn();
// // complex_obj.outer_fn()

// // etTimeout(function(){
// // console.log("thhis is print after sometime");
// // },1000);s

// // const a = 20;

// // {
// //     const a = 30;
// //     console.log(a);
// // }
// // console.log(a);

// // var a;
// // a=10;
// // console.log(a);

// // a=10;
// // var a;
// // console.log(a);

// // let i =10;
// // console.log(++i);

// // function sum(){

// // }
// // function s(){
// //     console.log("here");
// // }

// // let r = sum.bind(s());
// // r();
// // const fn = function(){
// //     console.log(this);
// // }
// // fn();

// // const fn = ()=>{
// //     console.log(this)
// // }

// // onst obj = {
// //     key : "abcd",
// //     fn: function(){
// //         console.log(this);
// //     },
// //     arrow: ()=>{
// //         console.log(this);
// //     }
// // }
// // obj.fn();
// // obj.arrow();
// // c
// const obj = {
//     key : "abcd",
//     fn: function(){
//         setTimeout(function(){
// console.log(this.key)
//         },1000);
//         setTimeout(()=>{
//             console.log(this.key)
//         },1000)
//     },

// }
// obj.fn();

//  function getSum(n) {
//          if(n == 0) return 0;
//          return n + getSum(--n);
//      }
    
    
//  function getFib(n) {
//     if(n == 0) {
//          return 0;
//     }
//     if(n == 1) {
//         return 1;
//     }
//      return getFib(n-1) + getFib(n-2);
//  }

//  let s = getFib(5);
//  console.log(s);

const counter = (function() {
    let value = 0;

    let increment = function() {
        value++;
    }

    let getCounter = function() {
        return value;
    }

    return {
        increment: increment,
        getCounter: getCounter,
    }
})();


counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCounter());