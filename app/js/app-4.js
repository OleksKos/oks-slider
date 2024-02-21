const nextBtn = document.querySelector('#js-oks-slider__arrows-next');
console.log(nextBtn);
const prevBtn = document.querySelector('#js-oks-slider__arrows-prev');
const slider = document.querySelector('.js-oks-slider');
const sliderList = document.querySelector('.js-oks-slider__list');
const thumbnail = document.querySelector('.js-oks-slider__thumbnail');

nextBtn.addEventListener('click', function(){
    showSlider('oks-next');
});

prevBtn.addEventListener('click', function(){
    showSlider('oks-prev');
});

let timeRunning = 7000;
let timeAutoNext = 8000;
let runTimeOut;
// let runAutoRun = setTimeout(()=>{
//     showSlider('oks-next')
// }, timeRunning);
function showSlider(type){

    const itemSlider = document.querySelectorAll('.oks-slider__item');
    const itemThumbnail = document.querySelectorAll('.oks-slider__thumbnail-item');
    if (type==='oks-next') {
        sliderList.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        slider.classList.add('oks-next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        sliderList.prepend(itemSlider[positionLastItem]);
        thumbnail.prepend(itemThumbnail[positionLastItem]);
        slider.classList.add('oks-prev');
    }

    // clearTimeout(runTimeOut);
    // runTimeOut = setTimeout(()=>{
    //     slider.classList.remove('oks-next');
    //     slider.classList.remove('oks-prev');
    // }, timeRunning);

    // clearTimeout(runAutoRun);
    // runAutoRun = setTimeout(()=>{
    //     showSlider('oks-next')
    // }, timeRunning);
}


