 let fn = function (a){
   return function(b){
return function(c){
    return(a*b*c);
}
    }

}



let result = document.querySelector('.result');
let text = document.createElement('h1');
text = fn(3)(3)(3);
result.append(text);