const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
const reset = document.getElementById ('reset');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn () {
    if (!isLampBroken () ) {
    lamp.src = './images/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken () ) {
    lamp.src = './images/desligada.jpg';
    }
}

function lampbreak () {
    lamp.src = './images/quebrada.jpg';
}

function lampreset () {
    location.reload() 
}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampbreak);

reset.addEventListener('click', lampreset);