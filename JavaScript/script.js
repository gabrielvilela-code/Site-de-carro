const botao= window.document.getElementById('menu')
const menu = document.querySelector('ul.navegation')
const fechar = document.getElementById('fechar')

botao.addEventListener('click', function(){
    menu.classList.toggle('ativo');
})

fechar.addEventListener('click', function(){
    menu.classList.remove('ativo');
})