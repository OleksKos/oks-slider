//step 1: get DOM
let nextBtn = document.getElementById("js-oks-slider__arrows-next");
let prevBtn = document.getElementById("js-oks-slider__arrows-prev");

let slider = document.querySelector(".js-oks-slider");
let sliderList = slider.querySelector(".js-oks-slider__list");
let thumbnail = document.querySelector(".js-oks-slider__thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".oks-slider__thumbnail-item");
let time = document.querySelector(".js-oks-slider .oks-slider__time");

const totalNumberOfThumbnails = document.querySelector(
  ".oks-slider__total-number"
);
totalNumberOfThumbnails.textContent = "0" + thumbnailItems.length;

currentNumberOfSlider = document.querySelector(".oks-slider__current-number");
let count = 1;


thumbnail.style.width = 4 * 150 + 20*3 + "px";

// thumbnail.appendChild(thumbnailItems[0]);
let timeRunning = 2000;
let timeAutoNext = 7000;

nextBtn.addEventListener("click", function () {
  showSlider("oks-next");
});

prevBtn.addEventListener("click", function () {
  showSlider("oks-prev");
});

let runTimeOut;
// let runNextAuto = setTimeout(() => {
//   showSlider("oks-next");
// }, timeAutoNext);
function showSlider(type) {
  let SliderItems = sliderList.querySelectorAll(
    ".js-oks-slider .js-oks-slider__list .oks-item"
  );
  let thumbnailItems = document.querySelectorAll(
    ".js-oks-slider .js-oks-slider__thumbnail .oks-item"
  );

  if (type === "oks-next") {
    sliderList.appendChild(SliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("oks-next");

    if (count < SliderItems.length) {
      count++;
      currentNumberOfSlider.textContent = "0" + count;
    } else {
      count = 1;
      currentNumberOfSlider.textContent = "0" + count;
    }
  } else {
    sliderList.prepend(SliderItems[SliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("oks-prev");
    if (count <= 1) {
      count = 5;
      currentNumberOfSlider.textContent = "0" + count;
    } else {
      count--;
      currentNumberOfSlider.textContent = "0" + count;
    }
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    slider.classList.remove("oks-next");
    slider.classList.remove("oks-prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    showSlider("oks-next");
  }, timeAutoNext);
}
