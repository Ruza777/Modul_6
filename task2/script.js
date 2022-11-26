document.querySelector('#consoleLog').addEventListener('click', ()=> {
    alert('Метод для вывода сообщения в веб-консоль.');
    console.log('Привет, Мир!');
})

document.querySelector('#alert').addEventListener('click', ()=> {
    alert('Метод для вывода сообщения в модальное диалоговое окно.');
})

document.querySelector('#prompt').addEventListener('click', ()=>{
    prompt('Метод для вывода сообщения в модальное диалоговое сообщение с текстовым полем ввода','Ok');
})