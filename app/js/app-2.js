let nextBtn = document.querySelector('#js-oks-slider__arrows-next');
console.log(nextBtn);
let prevBtn = document.querySelector('#js-oks-slider__arrows-prev');
let slider = document.querySelector('.js-oks-slider');
let sliderList = document.querySelector('.js-oks-slider__list');
let thumbnail = document.querySelector('.js-oks-slider__thumbnail');

nextBtn.addEventListener('click', function(){
    showSlider('oks-next');
});

prevBtn.addEventListener('click', function(){
    showSlider('oks-prev');
});

let timeRunning = 2000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    showSlider('oks-next')
}, timeRunning);
function showSlider(type){

    let itemSlider = document.querySelectorAll('.oks-slider__item ');
    let itemThumbnail = document.querySelectorAll('.oks-slider__thumbnail-item');
    console.log(itemSlider);
    console.log(itemThumbnail);
    if (type==='oks-next') {
        sliderList.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        // slider.classList.remove('oks-prev');
        slider.classList.add('oks-next');
    }else{
        sliderList.prepend(itemSlider[itemSlider.length - 1]);
        thumbnail.prepend(itemThumbnail[itemThumbnail.length - 1]);
        // slider.classList.remove('oks-next');
        slider.classList.add('oks-prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slider.classList.remove('oks-next');
        slider.classList.remove('oks-prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        showSlider('oks-next');
    }, timeAutoNext)
}


