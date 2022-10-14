const $botao = document.querySelector('#switch');
const $html = document.querySelector('html');

$botao.addEventListener('click', function(){
$html.classList.toggle('dark-mode')
})
