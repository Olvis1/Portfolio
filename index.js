var mode = document.getElementById('mode');
mode.addEventListener('click', function s(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        mode.querySelector('img').src = './images/icons8_sun_1.svg';
    }
    else{
        mode.querySelector('img').src = './images/icons8_crescent_moon_5.svg';
    }
});