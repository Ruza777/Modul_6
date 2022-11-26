let text;
document.querySelector('input').addEventListener('keyup', (event)=>{

    document.querySelector('#duplicateField').textContent = event.target.value;
    text=event.target.value;
    
})

document.querySelector('form').addEventListener('submit',(event)=>{
   event.preventDefault();
   console.log(text);
   event.target.reset(); 
   document.querySelector('#duplicateField').textContent=" ";
})

