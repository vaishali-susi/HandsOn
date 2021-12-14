 let a = fetch('https://meme-api.herokuapp.com/gimme');
 let b = a.then(function(response){
    return response.json();
 }); 
 b.then(function(data){
 console.log(data);
 fn(data);
 })

 function fn(data){
    let h1 = document.createElement('h2');
    h1.innerText = `Post_Link : ${data.postLink}`;
    let h2 = document.createElement('h2');
    h2.innerText = `SubReddit : ${data.subreddit}`;
    let h3 = document.createElement('h2');
    h3.innerText = `Tittle : ${data.title}`;
    let main = document.querySelector(".container");
    let h4 = document.createElement('h2');
    h4.innerText = `Url : ${data.url}`;
    let h5 = document.createElement('h2');
    h5.innerText = `nsfw : ${data.nsfw}`;
    let h6 = document.createElement('h2');
    h6.innerText = `Spoiler : ${data.spoiler}`;
    let h7 = document.createElement('h2');
    h7.innerText = `Author : ${data.author}`;
    let h8= document.createElement('h2');
    h8.innerText = `Url : ${data.ups}`;
    let h9 = document.createElement('h2');
    h9.innerText = `Preview : ${data.preview[0]}`;
    let h10 = document.createElement('h2');
    h10.innerText = ` ${data.preview[1]}`;
    let h11 = document.createElement('h2');
    h11.innerText = ` ${data.preview[2]}`;
    let h12 = document.createElement('h2');
    h12.innerText = ` ${data.preview[3]}`;
    let h13 = document.createElement('h2');
    h13.innerText = ` ${data.preview[4]}`;
    let h14 = document.createElement('h2');
    h14.innerText = ` ${data.preview[5]}`;
    main.appendChild(h1);
    main.appendChild(h2);
    main.appendChild(h3);
    main.appendChild(h4);
    main.appendChild(h5);
    main.appendChild(h6);
    main.appendChild(h7);
    main.appendChild(h8);
    main.appendChild(h9);
    main.appendChild(h10);
    main.appendChild(h11);
    main.appendChild(h12);
    main.appendChild(h13);
    main.appendChild(h14);
    main.style.background = 'skyblue';
    main.style.padding = '10px';


}

// {"postLink":"https://redd.it/rejrm0",
// "subreddit":"me_irl",
// "title":"me_irl",
// "url":"https://i.redd.it/x5vuwztmc2581.png",
// "nsfw":false,
// "spoiler":false,
// "author":"omar2205",
// "ups":14,
// "preview":["https://preview.redd.it/x5vuwztmc2581.png?width=108\u0026crop=smart\u0026auto=webp\u0026s=6335737ed932d10ef00e631352a30df983d0b011","https://preview.redd.it/x5vuwztmc2581.png?width=216\u0026crop=smart\u0026auto=webp\u0026s=7e4db2cfdfd9f8dd90a892c6f3288345397d8ec8","https://preview.redd.it/x5vuwztmc2581.png?width=320\u0026crop=smart\u0026auto=webp\u0026s=2651269674589edb2c027314dd957d9e34a0ee92","https://preview.redd.it/x5vuwztmc2581.png?width=640\u0026crop=smart\u0026auto=webp\u0026s=5cf086f0b65215b80190339fdd12576b462f273f"]}