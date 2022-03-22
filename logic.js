const links = [
    {
        title:"PacMen Arena",
        img:"https://chokhonelidze.github.io/PacMen/images/PacMan1.png",
        link:"https://chokhonelidze.github.io/PacMen/",
        about:"This is a small game that allows users to spawn pacman, by the way, they also eat each other."
    },
    {
        title:"Watching Eyes",
        img:"https://chokhonelidze.github.io/Eyes/twoEyes.png",
        link:"https://chokhonelidze.github.io/Eyes/",
        about: "this is simple animation of Eyes that are following the cursor.",
    },
    {
        title:"Map project",
        img:"https://cdn.dribbble.com/users/126602/screenshots/3446916/media/fa9d65d20dda60f127735ae820e8ae8e.jpg?compress=1&resize=400x300",
        link:"https://chokhonelidze.github.io/mapbox/",
        about: "This is a demo of software MapBox it demonstrates map's pin manipulation."

    },
    {
        title:"permutations",
        img:"imgs/permutations.png",
        link:"https://chokhonelidze.github.io/permutations/",
        about: "This project lets users enter string and get all possible permutation of characters in string."
    },
    {
        title:"TicTacToe",
        img:"imgs/tictactoe.png",
        link:"https://chokhonelidze.github.io/TicTacToe/",
        about: "This is a simple TicTacToe game."
    },
    {
        title:"Bad Bank",
        img:"imgs/badbank.png",
        link:"https://chokhonelidze.github.io/main/pages/BadBank.html",
        about: "this is a banking simulator software."
    },
    {
        title:"shopping cart",
        img:"imgs/ShoppingCart.png",
        link:"https://chokhonelidze.github.io/main/pages/shoppingcart.html",
        about: "this is a shopping cart software demo."
    }
]
var current = {left:-200,right:-200,zIndex:links.length};
function slider(card){
    let target = document.getElementById('slider');
    let active = card?card:Math.floor(Math.random()*links.length);
    let transformLeft = 0.9;
    let transformRight = 0.9;
    links.forEach((item,index)=>{
        let div = document.createElement('div');
        div.classList.add('item');
            let img = document.createElement('img');
            img.src = item.img;
            img.alt = "no Image";
            img.index = index;
            let title = document.createElement('h2');
            title.innerHTML = item.title;
            title.index = index;
            let p = document.createElement('p');
            p.innerHTML = item.about;
            p.index = index;
        
        div.appendChild(title)
        div.appendChild(img);
        div.appendChild(p);
        console.log(active);
        if(index === active){
            div.classList.add('active');  
            div.style.zIndex = links.length+1;  
            div.addEventListener('click',()=>{
                window.location.href = item.link;
            });   
        }
        else{
            if(index%2 != 0){
                div.style.transform = 'scale('+transformLeft+')';
                div.style.left = current.left+"px";
                if(transformLeft < 1){
                    current.left = current.left - 200;
                }
                else{
                    current.left = current.left + current.left;
                }
                div.style.zIndex = current.zIndex;
                current.zIndex = current.zIndex -1;
                div.index = index;
                div.addEventListener('click',flipCard);
                transformLeft -= 0.1;
            }
            else{
                div.style.transform = 'scale('+transformRight+')';
                div.style.right = current.right+"px";
                if(transformRight < 1){
                }
                else{
                    current.right = current.right + current.right;
                }
                console.log('right',current.right);
                console.log('transformRight',transformRight);
                current.right = current.right + current.right;
                div.style.zIndex = current.zIndex;
                current.zIndex = current.zIndex -1;
                div.index = index;
                div.addEventListener('click',flipCard);
                transformRight -= 0.1;
            }
        }
        target.appendChild(div);
    });

}

function flipCard(ev){
    let target = document.getElementById('slider');
    target.innerHTML = "";
    current = {left:-200,right:-200,zIndex:links.length};
    slider(ev.target.index);
   
}
