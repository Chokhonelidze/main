let pages = {
    "About Me" : "https://chokhonelidze.github.io/main/",
    
  
    'JS projects':{
        "Watching Eyes" : "https://chokhonelidze.github.io/Eyes/",
        "Map project": "https://chokhonelidze.github.io/mapbox/", 
        "Permutations": "https://chokhonelidze.github.io/permutations/",
        "PacMen Arena" : "https://chokhonelidze.github.io/PacMen/",
    },
    'React projects': {
        "TicTacToe"    : "https://chokhonelidze.github.io/TicTacToe/",
        "BadBank"      : "https://chokhonelidze.github.io/main/pages/BadBank.html",
        "ShoppingCart" : "https://chokhonelidze.github.io/main/pages/shoppingcart.html",
        "ToDoList"     : "https://chokhonelidze.github.io/reactTodoList/"

    }
   
}
function toglePage(id){
    item = document.getElementById(id);
    if(item.style.display=='none'){
        item.style.display='block';
    }
    else if(!item.style.display){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
}
function buildNav(terget,currentPage){
 let nav = document.createElement('nav');
 nav.classList.add('navbar');
 nav.classList.add('navbar-expand-lg');
 nav.classList.add('navbar-light');
 nav.classList.add('bg-light');
 nav.style.zIndex = 100;
 let div = document.createElement('div');
 let ul = document.createElement('ul');
 ul.classList.add('navbar-nav');
 Object.keys(pages).forEach((page)=>{
   
     if(typeof(pages[page]) === 'object'){
         let dropdown = document.createElement('div');
         dropdown.classList.add('dropdown');
         let button = document.createElement('button');
         button.classList.add('btn');
         button.classList.add('dropdown-toggle');
         button.id = "dropdownMenuButton1";
         button.innerHTML = page;
         button.onclick = ()=>{toglePage(page)};
         dropdown.appendChild(button);
         let ul_dropdown = document.createElement('ul');
         ul_dropdown.id = page;
         ul_dropdown.classList.add('dropdown-menu');
         Object.keys(pages[page]).forEach((item)=>{
             arr=pages[page];
            let li = document.createElement('li');
            if(item === currentPage){
                li.classList.add('nav-item');
                li.classList.add('active');
             }
             else{
             li.classList.add('nav-item');
             }
             let a = document.createElement('a');
             a.classList.add('nav-link');
             a.style.paddingLeft='10px';
             a.href = arr[item];
             a.innerHTML = item;
             li.appendChild(a);
             ul_dropdown.appendChild(li);
         });
         let li = document.createElement('li');
         li.classList.add('nav-item');
         dropdown.appendChild(ul_dropdown);
         li.appendChild(dropdown);
         ul.appendChild(li);
     }
     else{
     let li = document.createElement('li');
     if(page === currentPage){
        li.classList.add('nav-item');
        li.classList.add('active');
     }
     else{
     li.classList.add('nav-item');
     }
     let a = document.createElement('a');
     a.classList.add('nav-link');
     a.href = pages[page];
     a.innerHTML = page;
     li.appendChild(a);
     ul.appendChild(li);
    }
 });
 div.appendChild(ul);
 nav.appendChild(div);
 terget.appendChild(nav);
}
