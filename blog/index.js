const add_btn = document.querySelector('.add-btn')
const model = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const blog_title= document.querySelector('.blog-title')
const add_blog_btn=document.querySelector('.add-blog-btn')
const container = document.querySelector('.container')
const cancel_blog_btn=document.querySelector('.cancel-blog-btn')

let blogs=[];



const BuildUi = (blogs)=>{
    blogs.forEach((blog)=>{
        const blog_ctn = document.createElement('div');
        blog_ctn.classList.add('blog');
        const blog_name = document.createElement('h2');
        blog_name.innerText = blog.title;

        const icon = document.createElement('img');
        icon.classList.add("cross-btn");
        icon.setAttribute('id', 'ones');
        icon.setAttribute('src','cross.png');
        blog_ctn.append(blog_name,icon);
        container.append(blog_ctn);

    })
}

const setBlog = () =>{
    if(localStorage.getItem("blog")){
        blog = JSON.parse(localStorage.getItem("blogs"))
    }else{
        const test={
            title:"Manual"
        }
        blog.push(test);
    }
    BuildUi(blogs);
}


const showModal =()=>{
     model.classList.add('show-modal')  
}

const hideModal =()=>{

    model.classList.remove('show-modal')
}
cancel_blog_btn.addEventListener('click',hideModal);

const fetchBlogTitle =(event)=>{
    event.preventDefault()
    const blog={
        title:blog_title.value
    }
    blogs.push(blog)
    localStorage.setItem("blog", JSON.stringify(blog));
    console.log(localStorage.getItem("blog"));
    blog_title.value = "";
}


add_blog_btn.addEventListener('click',fetchBlogTitle)
hide_modal.addEventListener('click',hideModal)
add_btn.addEventListener('click',showModal)

setBlog();