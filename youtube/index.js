const Access_key = '9QNdU6sEBr0-iR385oaJ-g8t-sxFVl0eY8x42Jjm8u0'
let images = [];
const fn = async()=>{
    const url = await fetch(`https://api.unsplash.com/photos/?client_id=${Access_key}`);
images = await url.json();
disp();
}
 fn();

 function disp(){
const display = document.querySelector(".display");
images.forEach((elem)=>{
let img_loc = elem.links.download;
console.log(img_loc);
let img = document.createElement('img');
img.src = img_loc;
display.appendChild(img);
})
 }


