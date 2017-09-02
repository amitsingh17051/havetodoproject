var menu = document.getElementById('menuOpen');
let button = document.getElementById('menu').addEventListener('click', function(){
    menu.style.right = '0px'; 
});

let close = document.getElementById('close').addEventListener('click', function(){
    menu.style.right = '-200px'; 
})



