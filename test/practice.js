// fetch('https://meme-api.herokuapp.com/gimme').then((response)=>{
//     return response;
// }).then((data)=>{
//     fn(data);
// })
// function fn(data){
//     console.log(data.json());
// }

let a = fetch('obj.js').then((response)=>{
return response;
})
let b = a.then((data)=>{
    console.log(data.json()) ;
})