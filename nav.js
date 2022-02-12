let pages = {
    "About Me" : "https://chokhonelidze.github.io/main/",
    "PacMen Arena" : "https://chokhonelidze.github.io/PacMen/",
    "ticTacToe"    : "https://chokhonelidze.github.io/TicTacToe/",
    "Watching Eyes" : "https://chokhonelidze.github.io/Eyes/",
    "Map project": "https://chokhonelidze.github.io/mapbox/", 
    "Permutations": "https://chokhonelidze.github.io/permutations/"
}
function buildNav(terget,currentPage){
 let nav = document.createElement('nav');
 nav.classList.add('navbar');
 nav.classList.add('navbar-expand-lg');
 nav.classList.add('navbar-light');
 nav.classList.add('bg-light');
 let div = document.createElement('div');
 div.classList.add('navbar-nav');
 let ul = document.createElement('ul');
 ul.classList.add('navbar-nav');
 Object.keys(pages).forEach((page)=>{
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
 });
 div.appendChild(ul);
 nav.appendChild(div);
 terget.appendChild(nav);
}
