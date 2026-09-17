const botao= window.document.getElementById('menu')
const menu = document.querySelector('ul.navegation')

botao.addEventListener('click', function(){
    menu.classList.toggle('ativo');
})