document.querySelector('a').addEventListener('click', (event)=>
{

document.querySelector('a').textContent=prompt('Введите текст.',
'Введенный вами текст отобразится на странице');
event.preventDefault();

})