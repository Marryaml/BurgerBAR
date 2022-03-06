let burgerbutton = document.getElementById('togglebutton');
let navbar = document.getElementById('navi-ul');

burgerbutton.addEventListener('click', function(){
    navbar.classList.toggle('toggle');
    burgerbutton.classList.toggle('active');
})