const trafficLightEl = document.querySelector('#trafficLightGreen');
const trafficLightE2 = document.querySelector('#trafficLightYellow');
const trafficLightE3 = document.querySelector('#trafficLightRed');

function makeGreen(){
    trafficLightEl.style.background=('green');
    trafficLightE2.style.background=('black');
    trafficLightE3.style.background=('black');
}

function makeYellow(){
    trafficLightE2.style.background=('Yellow');
    trafficLightEl.style.background=('black');
    trafficLightE3.style.background=('black');
}

function makeRed(){
    trafficLightE3.style.background=('red');
    trafficLightE2.style.background=('black');
    trafficLightEl.style.background=('black');
}

//----Определение кликнутого круга по ID  для придания нужного цвета
document.querySelector('div').addEventListener('click', (event)=>{
    console.log(event.target);
    if (event.target.id=='trafficLightGreen') {
        makeGreen();
    }
    else if (event.target.id=='trafficLightYellow') {
        makeYellow();
    }
    else if (event.target.id=='trafficLightRed') {
        makeRed();
    }
})
//-----